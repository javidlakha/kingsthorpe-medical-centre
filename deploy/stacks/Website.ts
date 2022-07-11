import * as cdk from "aws-cdk-lib";
import {
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as origins,
  aws_route53 as route53,
  aws_route53_targets as targets,
  aws_s3 as s3,
  aws_s3_deployment as deployment,
} from "aws-cdk-lib";

export class Website extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const WebsiteBucket = new s3.Bucket(this, "WebsiteBucket", {
      autoDeleteObjects: true,
      bucketName: "kingsthorpe-medical-centre",
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteErrorDocument: "index.html",
      websiteIndexDocument: "index.html",
    });

    const WebsiteDistribution = new cloudfront.Distribution(
      this,
      "WebsiteDistribution",
      {
        // @ts-ignore
        certificate: props.DomainCertificate,
        defaultBehavior: {
          origin: new origins.S3Origin(WebsiteBucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        domainNames: ["kingsthorpemedicalcentre.com"],
      }
    );

    new cdk.CfnOutput(this, "WebsiteDistributionDomainName", {
      value: WebsiteDistribution.distributionDomainName,
    });

    const WebsiteDeployment = new deployment.BucketDeployment(
      this,
      "WebsiteDeployment",
      {
        destinationBucket: WebsiteBucket,
        distribution: WebsiteDistribution,
        sources: [deployment.Source.asset("./client/build")],
      }
    );

    new route53.ARecord(this, "WebsiteDistributionRecord", {
      // @ts-ignore
      zone: props.HostedZone,
      recordName: "kingsthorpemedicalcentre.com",
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(WebsiteDistribution)
      ),
    });
  }
}

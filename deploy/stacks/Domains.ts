import * as cdk from "aws-cdk-lib";
import {
  aws_certificatemanager as acm,
  aws_route53 as route53,
  aws_route53_patterns as patterns,
} from "aws-cdk-lib";

export class Domains extends cdk.Stack {
  public DomainCertificate;
  public HostedZone;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.HostedZone = route53.HostedZone.fromHostedZoneAttributes(
      this,
      "HostedZone",
      {
        hostedZoneId: "Z07074012EGHXIDCPAPPN",
        zoneName: "kingsthorpemedicalcentre.com",
      }
    );

    new patterns.HttpsRedirect(this, "Redirect", {
      recordNames: ["www.kingsthorpemedicalcentre.com"],
      targetDomain: "kingsthorpemedicalcentre.com",
      zone: this.HostedZone,
    });

    this.DomainCertificate = new acm.DnsValidatedCertificate(
      this,
      "DomainCertificate",
      {
        domainName: "kingsthorpemedicalcentre.com",
        hostedZone: this.HostedZone,
        region: "us-east-1",
      }
    );
  }
}

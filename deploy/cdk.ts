import * as cdk from "aws-cdk-lib";
import {Domains} from "./stacks/Domains";
import {Website} from "./stacks/Website";

const app = new cdk.App();

const domains = new Domains(app, "Domains");

const website = new Website(app, "Website", {
  // @ts-ignore
  DomainCertificate: domains.DomainCertificate, HostedZone: domains.HostedZone,
});

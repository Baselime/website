import * as sst from "@serverless-stack/resources";
import * as ssm from "aws-cdk-lib/aws-ssm";
import * as route53 from "aws-cdk-lib/aws-route53";

export default class Website extends sst.Stack {
  readonly root: sst.App;

  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);
    const { stage } = scope;
    this.root = scope;

    const domain = ssm.StringParameter.valueForStringParameter(this, `/${stage}/baselime/domain`);
    const hostedZoneId = ssm.StringParameter.valueForStringParameter(this,`/${stage}/baselime/domain/hosted-zone/id`);

    new sst.StaticSite(this, "website", {
      path: "frontend",
      buildOutput: "dist",
      buildCommand: "npm run build && npm run generate",
      customDomain: {
        domainName: domain,
        cdk: {
          hostedZone: route53.HostedZone.fromHostedZoneAttributes(
            this,
            "zone",
            { hostedZoneId, zoneName: domain }
          ),
        },
      },
      cdk: {
        distribution: {
          comment: "Baselime Website Distribution",
        },
      },
    });
  }
}

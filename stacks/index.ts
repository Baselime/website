import * as sst from "@serverless-stack/resources";
import * as logs from "aws-cdk-lib/aws-logs";
import { StaticSite } from "./StaticSite";

export default function main(app: sst.App): void {
  const stage = app.stage;

  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x",
    logRetention: stage === "prod" ? logs.RetentionDays.THREE_MONTHS : logs.RetentionDays.TWO_WEEKS,
    architecture: "arm_64",
    tracing: "active",
  });

  app.addDefaultFunctionPermissions([
    "ssm:GetParameter"
  ]);

  app.addDefaultFunctionEnv({
    STAGE: stage,
    NODE_OPTIONS: stage === "prod" ? "" : "--enable-source-maps",
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
  });

  new StaticSite(app, "website-app");
}

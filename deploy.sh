#!/usr/bin/env bash

set -ex
npm run build
npm run generate
aws s3 cp --recursive --acl public-read ./dist/ s3://baselime-io
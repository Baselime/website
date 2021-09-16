#!/usr/bin/env bash

set -ex

aws cloudformation create-stack \
--stack-name baselime-website \
--template-body file:///$PWD/resources/template.yml \
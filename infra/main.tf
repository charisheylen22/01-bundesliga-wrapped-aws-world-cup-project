terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.0"
    }
  }
}

provider "aws" {
  region = var.region
}

variable "region" {
  type    = string
  default = "eu-central-1"
}

resource "aws_s3_bucket" "frontend_assets" {
  bucket = "bundesliga-wrapped-assets-example"
  acl    = "private"
}

resource "aws_amplify_app" "bundesliga_wrapped" {
  name      = "bundesliga-wrapped"
  platform  = "WEB"
  build_spec = file("${path.module}/../amplify.yml")

  environment_variables = {
    NODE_ENV = "production"
  }
}

resource "aws_amplify_branch" "main" {
  app_id            = aws_amplify_app.bundesliga_wrapped.id
  branch_name       = "main"
  enable_auto_build = false
  stage             = "PRODUCTION"
}

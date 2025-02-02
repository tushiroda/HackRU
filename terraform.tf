terraform {

  cloud {
    organization = "HackRU2025"

    workspaces {
      name = "HackRU2025-Terraform"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.31.0"
    }
  }

  required_version = "~> 1.2"
}
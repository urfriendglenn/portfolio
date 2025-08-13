---
title: 'Introduction to Vault'
description: 'Notes from Hashicorp Certified Vault Associate'
pubDate: 'Aug 12 2025'
---

# What is Vault

- Manage secrets and Protect Sensitive Data
- Provides a single source of Secrets
- Provides Lifecycle Management for Secrets
	- Eliminates secret sprawl
	- Securely store any secret
	- Provide governance for access to secrets
- What is a **secret**?
	- Anything an organization deems sensitive

# How Vault Works

## Vault Interfaces

- CLI
- UI
- API

## Vault Authentication

An application that needs to interact with Vault uses either:

- User/Pass
- RoleID/Secret/ID
- TLS Cert
- Integrated Cloud Creds
Once authenticated, Vault will generate a token
	The token has an expiry (TTL)

Token provides access to specific entities and the permissions to those entities (i.e. Vault Paths, R/W perms)

# Benefits and Use Cases for Vault

- Store long-lived, static secrets
- Dynamically Generate Secrets
- API
- IAM across different clouds and systems
- Provide Encryption as a Service
- Act as a Root or Intermediate Certificate Authority

## Use Cases

- Centralize the Storage of Secrets
- Migrate to Dynamically Generated Secrets
- Secure Data with a Centralized Workflow for Encryption Operations
- Automate the generation of X509 Certificates
- Migrate to IAM based access

### Storage of Secrets

Centralize the storage of secrets across the organization into a consolidated platform

### Migrate to Dynamic Credentials

Static Credentials:

- Validation 24/7/365
- Long-lived
- Manual Password Rotation
- Frequently Shared
- Reused across systems
- Susceptible to Being added to Code
- Often Highly Privileged
- Manually Created
Dynamic Credentials:
- Short-Lived
- Follows Principal of Least Privilege
- Automatically Revocated (Based on Lease)
- Each System Can Retrieve Unique Credentials
- Programmatically Retrieved
- No Human Interaction

### Encrypt Data

Secure Data with a Centralized Workflow for Encryption Options

- Transit
- KMIP
- Kye Mgmt
- Transform

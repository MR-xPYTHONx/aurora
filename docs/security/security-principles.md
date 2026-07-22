# Security Principles

## Authentication
- Require strong authentication for user and service access.
- Prefer modern, standards-based authentication mechanisms.
- Ensure sessions and tokens are handled securely.

## Authorization
- Apply least-privilege access control for all resources.
- Enforce authorization checks at the service and API layer.
- Avoid granting broad permissions by default.

## Input validation
- Validate and sanitize all incoming data before processing.
- Reject malformed or unexpected input early.
- Protect against common injection and data manipulation issues.

## Secrets management
- Store secrets in secure, managed secret stores rather than source code.
- Rotate credentials regularly and limit access to trusted systems.
- Avoid exposing secrets in logs, config files, or error messages.

## Rate limiting
- Apply rate limiting to protect APIs and services from abuse.
- Use thresholds appropriate to the expected traffic and risk level.
- Return clear feedback when requests exceed limits.

# Database Principles

## UUID primary keys
- Use UUIDs as the primary key for most entities to support distributed systems and avoid sequential ID collisions.
- Prefer a standard UUID format and keep IDs consistent across services.

## Soft deletes
- Use soft deletes instead of hard deletes for records that should remain recoverable.
- Mark deleted rows with a deletion flag or equivalent status field rather than removing them permanently.

## createdAt and updatedAt
- Include `createdAt` for the record creation timestamp.
- Include `updatedAt` for the last modification timestamp.
- Keep timestamps in a consistent timezone-aware format.

## Naming conventions
- Use lowercase snake_case for table and column names.
- Use descriptive names that reflect the business meaning of the field.
- Keep naming consistent across the database schema.

# API Guidelines

## REST conventions
- Use clear, resource-oriented endpoints.
- Prefer lowercase path segments and hyphenated names.
- Use HTTP methods consistently: `GET` for read, `POST` for create, `PUT` or `PATCH` for update, and `DELETE` for removal.
- Keep URLs predictable and avoid exposing implementation details.

## Response format
- Return JSON responses for success cases.
- Include a `data` field for the main payload when appropriate.
- Keep responses consistent across endpoints and avoid unnecessary nesting.

## Error format
- Return structured error responses with a clear message.
- Include an error code or identifier when useful for client handling.
- Avoid leaking sensitive internal information in error payloads.

## Status codes
- Use `200` for successful reads and updates.
- Use `201` for successful creation.
- Use `204` for successful deletion when no body is returned.
- Use `400` for invalid input, `404` for missing resources, and `500` for unexpected server errors.

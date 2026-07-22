# Coding Standards

## Naming conventions
- Use descriptive, lowercase names for variables, functions, and modules.
- Prefer `camelCase` for functions and variables, and `PascalCase` for classes, types, and React components.
- Use `SCREAMING_SNAKE_CASE` only for true constants.
- Avoid abbreviations unless they are widely understood.

## Folder conventions
- Keep folders organized by domain or feature rather than by technical concern alone.
- Use singular, meaningful names for top-level folders such as `services`, `packages`, and `apps`.
- Group related files together and avoid deeply nested structures when possible.

## File naming
- Use lowercase names with hyphens for route-like or shared files when appropriate, such as `user-profile.ts`.
- Use descriptive names that reflect the file’s responsibility.
- Keep file names consistent across the codebase.

## TypeScript rules
- Use TypeScript for all new application code.
- Prefer explicit types for function parameters and return values when they improve clarity.
- Avoid `any` unless absolutely necessary and document the reason when used.
- Favor interfaces or types for shared shapes and keep them close to the code that uses them.

## Comment rules
- Write comments to explain intent, not obvious behavior.
- Prefer self-explanatory code over excessive commenting.
- Add comments for non-obvious decisions, workarounds, or complex logic.
- Keep comments short, accurate, and up to date.

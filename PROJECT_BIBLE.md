# Project Bible

## Project vision
Aurora is a modular, AI-first product platform designed to deliver a polished user experience across web, mobile, and backend services. The project should stay focused on clarity, scalability, and maintainability while enabling rapid iteration.

## Architecture principles
- Keep services loosely coupled and organized by responsibility.
- Favor clear boundaries between apps, packages, services, and infrastructure.
- Use TypeScript consistently across the codebase.
- Prefer simple, well-documented solutions over unnecessary complexity.

## Folder structure
- `apps/` contains user-facing applications such as web and mobile.
- `services/` contains backend services and domain-specific APIs.
- `packages/` contains shared libraries, UI components, SDKs, utilities, and configuration.
- `docs/` holds architecture, development, API, database, roadmap, and security guidance.
- `infrastructure/` contains deployment and environment-related assets.

## Coding philosophy
- Write readable, maintainable code that is easy to review.
- Favor explicit naming, small focused modules, and consistent formatting.
- Keep changes scoped and avoid introducing unnecessary abstractions.
- Prefer solving the root problem rather than patching symptoms.

## Technology stack
- TypeScript for application and shared code.
- Next.js for the web app.
- NestJS for backend services.
- Modular package-based architecture for reusable logic.
- Documentation-first development for cross-team alignment.

## Development workflow
- Create small, reviewable changes with clear intent.
- Keep documentation updated alongside code changes.
- Follow the repository’s standards for naming, structure, and Git usage.
- Validate changes before considering them complete.

## Rules for future development
- Do not introduce authentication, databases, or heavy infrastructure choices unless explicitly requested.
- Keep new work aligned with the existing folder structure and conventions.
- Prefer incremental improvements over large rewrites.
- When in doubt, favor the simplest solution that satisfies the requirement and remains maintainable.

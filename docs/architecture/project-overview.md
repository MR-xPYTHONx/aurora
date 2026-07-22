# Project Overview

## Vision
Aurora is a modular platform for building intelligent, cross-platform experiences around AI-assisted workflows, shared services, and reusable packages.

## Goals
- Establish a clear repository structure for documentation, applications, services, and shared assets.
- Support a scalable monorepo layout that can grow without introducing unnecessary coupling.
- Provide a foundation for collaboration across product, engineering, and AI-focused workstreams.

## High-level architecture
Aurora is organized into a small set of layers:

1. Applications: user-facing experiences such as web, desktop, mobile, and admin surfaces.
2. Services: domain-oriented backend capabilities such as auth, chat, memory, search, files, vision, audio, models, and notifications.
3. Packages: shared UI, SDK, types, config, utilities, and common infrastructure primitives.
4. AI: datasets, training, inference, evaluation, alignment, preprocessing, tokenizer, and research assets.
5. Platform support: documentation, infrastructure, scripts, tests, and developer tooling.

## Folder purpose
- docs/: architecture, APIs, data, development guidance, roadmap, and decisions.
- apps/: product interfaces and experience entry points.
- services/: backend capabilities and domain services.
- packages/: reusable building blocks shared by multiple parts of the repository.
- ai/: model and experimentation assets.
- infrastructure/, scripts/, tests/, and tools/: operational and engineering support.

## Development principles
- Keep responsibilities separated across apps, services, and packages.
- Favor clear contracts and shared conventions over ad hoc integration.
- Document architectural decisions as the system evolves.
- Keep the repository easy to understand, extend, and maintain.

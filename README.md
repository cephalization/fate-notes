<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/public/fate-logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="/public/fate-logo.svg">
    <img alt="Logo" src="/public/fate-logo.svg" width="50%">
  </picture>
</p>

**_fate_** is a modern data client for React and tRPC inspired by [Relay](https://relay.dev/) and [GraphQL](https://graphql.org/). It combines view composition, normalized caching, data masking, Async React features, and tRPC's type safety.

Check out [fate.technology](https://fate.technology) for documentation, examples, and guides.

## _fate_ Quick Start Template

### Initial Setup

You'll need Node.js 24+ and pnpm 10+.

- Run `pnpm install && pnpm dev:setup`.
- Set up a Postgres database locally and add the connection string to `server/.env` as `DATABASE_URL` or run `docker-compose up -d` to start postgres in a docker container.
- Postgres setup:

```SQL
CREATE ROLE fate WITH LOGIN PASSWORD 'echo';
CREATE DATABASE fate;
ALTER DATABASE fate OWNER TO fate;
```

- `pnpm prisma migrate dev` to create the database and run the migrations.
- You might want to run `pnpm prisma migrate reset` and `pnpm prisma db seed` to seed the database with initial data.
- Run `pnpm fate:generate` to regenerate the fate client code.
- Run `pnpm test` to run all tests.
- Run `pnpm dev` to run the client and server.
- Visit `http://localhost:5173` to see the app in action.

### Getting Started

Read the [Getting Started Guide](https://fate.technology/guide/core-concepts) to learn how to use _fate_ in your React applications.

### Folder Structure

- `client/` - The React client application using _fate_.
- `server/` - The tRPC server with Prisma ORM.

### Tools

This template lives on the edge. It uses typescript-go, Vite 8, Oxfmt and ships with sensible defaults to unlock an incredibly fast development experience.

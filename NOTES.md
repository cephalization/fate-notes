# Setup Notes

## Readme inaccuracies

- `docker-compose up -d` does not work because:
  - There is no docker-compose.yml file in the root of the project.
  - `docker-compose` is the old docker compose command, most installs have `docker compose` instead.
- db setup instructions are vague
  - With a docker compose file, you can add an init script to the postgres container to set up the db and user.
- the directory from which you run commands is unclear, package.json cds some commands into server directory instead of just using pnpm workspace delegated commands / command filters.
- Should add a note about changing the default better auth secret inside of the default .env file.

## Editor setup

- oxc is missing from recommended extensions
- Typescript Native Preview is missing from recommended extensions
- Tailwind CSS intellisense is missing from recommended extensions
- Extraneous typescript.tsdk path in vscode settings.json, path does not exist and is not
  relevant for tsgo native preview.
- eslint extension errors about finding globSync from node:fs despite using node v24

## CI notes

- the push workflow depends on .env file being present in server directory. This is not ideal as it should not be committed to the repo beyond the template.

## Client code notes

- client/src/App.css has a mix of deprecated tailwindcss 3 configs instead of a single @import 'tailwindcss' at the top.
- Tailwind is setup via postcss instead of vite plugin.
- client/src/App.css has a legacy @config '../tailwind.config.js' import. The legacy config can be inlined into the app.css file with new config directives.
- Default styles for post comment box are unreadable, cannot read placeholder text against background color (in dark mode). placeholder-gray-200 is more readable but should honestly use foreground colors instead.

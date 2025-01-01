# JSON View Monorepo

This is a monorepo containing two related projects:

1. **`json-utils`**: A framework-independent library for working with JSON data.
2. **`solid-json-view`**: A SolidJS library for visualizing JSON data, built on top of `json-utils`.

## Prerequisites

Before working with this repository, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or newer)
- [PNPM](https://pnpm.io/) (v7 or newer)

## Getting Started

### Install Dependencies

After cloning the repository, install all dependencies by running:

```bash
pnpm install
```

This command will:

- Install root-level dependencies.
- Install and link all workspace dependencies (e.g., `solid-json-view` will link to the local `json-utils` package).

## Understanding the Monorepo

### Structure

The monorepo is organized into the following structure:

```
packages/
├── json-utils/          # Framework-independent JSON utility functions
│   ├── src/             # Source code
│   ├── dist/            # Compiled output (ignored by Git)
│   └── package.json     # NPM package configuration
├── solid-json-view/     # SolidJS JSON visualization components
│   ├── src/             # Source code
│   ├── dist/            # Compiled output (ignored by Git)
│   └── package.json     # NPM package configuration
pnpm-workspace.yaml      # Defines the workspace
```

### Linked Projects

The packages are linked via PNPM workspaces:

- During development, `solid-json-view` uses the local version of `json-utils`.
- When published, `solid-json-view` will depend on the published version of `json-utils` from NPM.

## Development Workflow

### Running the Build

To build all packages:

```bash
pnpm run build
```

To build a specific package (e.g., `json-utils`):

```bash
pnpm --filter json-utils run build
```

### Testing Locally

To test changes locally:

1. Build the desired package(s).
2. Use `pnpm link` to link the package(s) globally for consumption in local projects outside this monorepo.

Example:

```bash
# Link a package globally
cd packages/json-utils
pnpm link --global

# Use it in another project
cd /path/to/another/project
pnpm link json-utils
```

## Publishing Packages

### Publishing `json-utils`

1. Navigate to the package directory:
   ```bash
   cd packages/json-utils
   ```
2. Ensure the package is ready for publishing (build and test):
   ```bash
   pnpm run build
   ```
3. Publish to NPM:
   ```bash
   pnpm publish --access public
   ```

### Publishing `solid-json-view`

1. Navigate to the package directory:
   ```bash
   cd packages/solid-json-view
   ```
2. Ensure the package is ready for publishing (build and test):
   ```bash
   pnpm run build
   ```
3. Publish to NPM:
   ```bash
   pnpm publish --access public
   ```

## Updating and Versioning

### Updating `json-utils`

1. Make changes in `packages/json-utils`.
2. Increment the version in `packages/json-utils/package.json`:
   ```bash
   pnpm version patch
   ```

### Updating `solid-json-view`

1. Ensure `json-utils` is up to date and published to NPM.
2. Update the dependency in `solid-json-view`:
   ```bash
   cd packages/solid-json-view
   pnpm update json-utils
   ```
3. Increment the version in `packages/solid-json-view/package.json`:
   ```bash
   pnpm version patch
   ```

## Notes

- **Linked Dependencies**: During development, the workspace ensures that `solid-json-view` uses the local version of `json-utils`. However, when published, it will use the version of `json-utils` on NPM.
- **Testing**: Use local linking or a test application to verify changes before publishing.

## License

This project is licensed under the [MIT License](LICENSE).

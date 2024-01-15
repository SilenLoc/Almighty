
install:
    bun install --frozen-lockfile

# Perform all verifications (compile, test, lint, etc.)
verify: install test lint
    bun run build

test:
    bun run test

run: install
    bun run tauri dev

lint:
    bun run lint
    bun run format-check

fmt:
    bun run formatocaco

build:
    cargo tauri build
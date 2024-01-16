
install:
    bun install
    bun install --frozen-lockfile

# Perform all verifications (compile, test, lint, etc.)
verify: install test lint
    bun run build

test:
    just b test

run: install
    bun run tauri dev

lint:
    bun run lint
    bun run format-check

fmt:
    bun run format

build:
    cargo tauri build


b *args:
    cd src-tauri && just {{args}}

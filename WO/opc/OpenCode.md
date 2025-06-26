# OpenCode.md

## Build/Lint/Test Commands

### Build
- `go install github.com/opencode-ai/opencode@latest`

### Test
- No specific testing framework or scripts found.

### Lint
- No linting commands found.

### Running Individual Tests
- Specific instructions unavailable; possibly dependent on `go` testing ecosystem.

## Code Style Guidelines

- **Imports:** Group imports logically. Prefer standard libraries first, followed by external dependencies.
- **Formatting:** Follow PEP8 (or `go fmt`) style guidelines for code formatting.
- **Types:** Use strong typing wherever supported (e.g., Type Annotations in Python, Type Interfaces in Go).
- **Naming Conventions:** Use snake_case for Python, camelCase or PascalCase for Go functions/types.
- **Error Handling:** Follow structured error patterns, handle known exceptions gracefully, log errors without exposing sensitive details. Avoid pass statements.
- **Comments:** Only where necessary for complex logic. Prefer docstrings for Python.

- **General Notes:** Update this file if further conventions/tests are identified.
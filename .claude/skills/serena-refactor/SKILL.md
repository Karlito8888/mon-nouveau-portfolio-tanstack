---
name: serena-refactor
description: Refactor code intelligently using Serena MCP server. Use when the user asks to rename symbols, extract functions, move code, reorganize files, or says "rename this", "refactor", "extract function", "move this to".
allowed-tools: mcp__serena__*
---

# Serena Code Refactoring

Use Serena's semantic editing capabilities for safe refactoring.

## Capabilities

- **Rename symbols** - Safely rename across all usages
- **Extract functions** - Extract code into new functions
- **Move code** - Relocate code between files
- **Organize imports** - Clean up and organize imports

## Example Workflows

### Rename a function
```
User: "Rename getUserData to fetchUserProfile"
-> Use Serena's rename tool to update all usages
```

### Extract a function
```
User: "Extract this validation logic into a separate function"
-> Use Serena to identify scope and extract
```

## Best Practices

- Analyze code before making changes
- Use semantic rename instead of find-and-replace
- Test after refactoring

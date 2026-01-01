---
name: serena-index
description: Index and manage project configuration with Serena MCP server. Use when the user asks to index a project, configure Serena, set up project analysis, or says "index project", "setup Serena", "configure analysis".
allowed-tools: mcp__serena__*
---

# Serena Project Indexing

Initialize and configure Serena for semantic code analysis.

## Why Index?

Indexing is recommended before first use on large projects:
- Pre-processes the codebase
- Speeds up tool performance significantly
- Prevents potential timeouts

## Configuration

Serena uses YAML configuration files:
- Global: `~/.serena/serena_config.yml`
- Project: `<project>/.serena/project.yml`

## Notes

- Large projects may take time to index initially
- Indexing happens automatically on first use
- Re-index after major refactoring operations

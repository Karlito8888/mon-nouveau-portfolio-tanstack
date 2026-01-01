---
name: serena-analyze
description: Analyze code semantically using Serena MCP server. Use when the user asks to understand code structure, find symbols, analyze dependencies, explore codebase architecture, or says "analyze this code", "find all usages of", "show me the structure", "what does this function do".
allowed-tools: mcp__serena__*
---

# Serena Code Analysis

Use Serena's semantic code analysis capabilities.

## Capabilities

- **Symbol search** - Find functions, classes, variables
- **Usage analysis** - Find all references to a symbol
- **Dependency analysis** - Understand import/export relationships
- **Code structure** - Explore project architecture
- **Definition lookup** - Jump to symbol definitions
- **Type information** - Get type hints and signatures

## Supported Languages

Python, TypeScript/JavaScript, Rust, Go, Java, and more.

## Example Workflows

### Find all usages
```
User: "Find all places where handleSubmit is called"
-> Use Serena's find_references tool
```

### Understand structure
```
User: "Show me the structure of the authentication module"
-> Use Serena's get_project_structure tool
```

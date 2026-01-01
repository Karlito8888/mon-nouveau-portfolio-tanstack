---
name: archon-code-examples
description: Search for code examples and code snippets from the Archon knowledge base. Use when the user asks for code examples, sample code, implementation patterns, or says "show me how to", "code example for", "implementation of".
allowed-tools: mcp__archon__rag_get_available_sources, mcp__archon__rag_search_code_examples, mcp__archon__rag_read_full_page
---

# Archon Code Examples Search

Find code examples and implementation patterns from the Archon RAG knowledge base.

## Instructions

1. Get available sources with `mcp__archon__rag_get_available_sources()`.
2. Search for code examples using `mcp__archon__rag_search_code_examples(query="...", source_id="...")`.
3. Read full pages for complete context when needed.

## Query Best Practices

**GOOD**: `"FastAPI middleware"`, `"React useState"`, `"Supabase auth"`, `"Expo navigation"`

**BAD**: `"how to implement authentication with JWT tokens in React"`

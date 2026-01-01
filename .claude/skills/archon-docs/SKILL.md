---
name: archon-docs
description: Search and retrieve official documentation from the Archon knowledge base. Use when the user asks about React, React Native, Expo, Supabase, Vite, Zustand, TanStack, Netlify, MapLibre, PayMongo, Claude Code, or any technology available in the RAG system. Triggers on "search docs", "find documentation", "how does X work", "explain X from docs".
allowed-tools: mcp__archon__rag_get_available_sources, mcp__archon__rag_search_knowledge_base, mcp__archon__rag_read_full_page, mcp__archon__rag_list_pages_for_source
---

# Archon Documentation Search

Search official documentation from the Archon RAG knowledge base.

## Available Documentation Sources

- **React** - React framework and React Compiler
- **React Native** - Mobile development with React Native
- **Expo** - Cross-platform mobile/web development
- **Supabase** - Backend as a service, database, auth
- **Vite** - Frontend build tool
- **Zustand** - State management for React
- **TanStack** - Query, Router, Table, Forms
- **Netlify** - Deployment and serverless functions
- **MapLibre** - Interactive maps (GL JS and React Native)
- **PayMongo** - Payment processing
- **Claude Code** - AI coding assistant
- **Quill.js** - Rich text editor
- **Open Meteo** - Weather API

## Instructions

1. Call `mcp__archon__rag_get_available_sources()` to get source IDs.
2. Find the relevant `source_id` matching the user's request.
3. Search with `mcp__archon__rag_search_knowledge_base(query="...", source_id="...")`.
4. Read full pages with `mcp__archon__rag_read_full_page(page_id="...")`.

## Query Best Practices

**GOOD** (2-5 keywords): `"useState hooks"`, `"authentication JWT"`, `"useQuery cache"`

**BAD** (too long): `"how to implement vector search with pgvector..."`

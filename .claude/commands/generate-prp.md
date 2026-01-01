# Generate PRP (Product Requirements Prompt)

You are creating a comprehensive implementation blueprint for a feature request.

## Input
Read the feature request from: `$ARGUMENTS` (usually `INITIAL.md` or a specific file)

## Research Phase (MANDATORY)

### 1. Analyze Source Project
```
/home/charles/Bureau/Next.js-Creative-Portfolio-Website-main
```
- Find similar components/features
- Extract patterns, animations, styling approaches
- Note file structure and naming conventions

### 2. Consult Official Documentation

**Priority 1 - Archon MCP:**
```
mcp__archon__rag_get_available_sources()
mcp__archon__rag_search_knowledge_base(query="[topic]", source_id="[id]")
mcp__archon__rag_read_full_page(page_id="[id]")
```

Available sources:
- TanStack: `dc4cf3168627a5c8`
- React: `62371402a593220c`
- Vite: `22832de63c03f570`

**Priority 2 - Web Search:**
For docs not in Archon (Three.js, Framer Motion, etc.)

### 3. Analyze Existing Codebase
- Check `examples/` for established patterns
- Review similar implementations in `src/`
- Identify reusable components

## PRP Generation

### Required Sections:
1. **Goal Definition** - End state, success criteria, business value
2. **Context & References** - All documentation sources consulted
3. **Implementation Blueprint** - Types, tasks, pseudocode
4. **Validation Gates** - Syntax, tests, visual checks
5. **Anti-Patterns** - What to avoid
6. **Completion Checklist** - Final verification
7. **Confidence Score** - 1-10 with reasoning

### Critical Requirements:
- Include ACTUAL code snippets from source project (max 125 chars quoted)
- Reference specific documentation sections
- Provide ordered task list with file paths
- Include validation commands for each task
- Note all potential gotchas and edge cases

## Output

Save the PRP to: `PRPs/[feature-name].md`

Use template: `PRPs/templates/prp_base.md`

## Quality Checklist

Before completing:
- [ ] All relevant docs consulted (Archon + Web)
- [ ] Source project patterns extracted
- [ ] Every task has validation criteria
- [ ] TypeScript types defined
- [ ] No assumptions made without documentation
- [ ] Confidence score justified

## Final Confidence Score

Rate 1-10: How likely is this PRP to enable one-pass implementation?

- **9-10:** Complete context, clear patterns, full validation
- **7-8:** Good context, minor ambiguities
- **5-6:** Some gaps in documentation or patterns
- **1-4:** Significant unknowns, needs more research

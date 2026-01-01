# Execute PRP (Product Requirements Prompt)

You are implementing a feature based on a comprehensive PRP blueprint.

## Input
Read the PRP from: `$ARGUMENTS` (e.g., `PRPs/feature-name.md`)

## Execution Workflow

### Phase 1: LOAD
1. Read and fully comprehend the PRP
2. Identify all referenced documentation
3. Review all referenced source project files
4. Gather additional context if needed

### Phase 2: ULTRATHINK
**STOP and think deeply before writing any code.**

Create a mental model of:
- The complete implementation flow
- All files that need to be created/modified
- The order of operations
- Potential failure points
- How each piece connects

Use TodoWrite to track all tasks from the PRP.

### Phase 3: VALIDATE CONTEXT
Before implementing, verify you have consulted:
- [ ] All Archon documentation sources listed
- [ ] All web documentation sources listed
- [ ] All source project files referenced
- [ ] All examples in `examples/` folder

**If any context is missing, gather it NOW before proceeding.**

### Phase 4: EXECUTE
Implement each task from the PRP in order:

1. **Read the task requirements**
2. **Consult referenced documentation** (Archon/Web)
3. **Review source project pattern** if referenced
4. **Implement the code**
5. **Run task-specific validation**
6. **Mark task complete in TodoWrite**

### Phase 5: VALIDATE
Run all validation gates from the PRP:

```bash
# Level 1: Syntax & Types
bun run typecheck
bun run lint

# Level 2: Tests (if applicable)
bun test

# Level 3: Visual verification
bun dev
```

**If validation fails:**
1. Read the error carefully
2. Consult PRP's anti-patterns section
3. Check documentation for correct usage
4. Fix and re-validate

### Phase 6: COMPLETE
1. Verify all checklist items in PRP
2. Run final validation suite
3. Update TASK.md with completion status
4. Report completion with summary

## Critical Rules

### NEVER:
- Skip documentation consultation
- Implement without understanding the pattern
- Ignore TypeScript errors
- Use patterns not in source project or docs
- Guess API signatures

### ALWAYS:
- Follow PRP task order exactly
- Validate after each task
- Consult docs when uncertain
- Match source project patterns
- Update TASK.md

## Error Recovery

If you encounter an unexpected error:

1. **STOP** - Don't try random fixes
2. **RESEARCH** - Consult Archon/Web for the error
3. **ANALYZE** - Compare with source project
4. **FIX** - Apply documented solution
5. **VALIDATE** - Confirm fix works

## Completion Report

When finished, provide:
- Summary of implemented features
- Files created/modified
- Validation results
- Any deviations from PRP (with justification)
- Updated confidence score

# PRP: [Feature Name]

> Product Requirements Prompt - Implementation Blueprint
> Created: [DATE]
> Status: Draft | Ready | In Progress | Completed

---

## 1. Goal Definition

### End State
[Describe what the feature looks like when complete]

### Success Criteria
- [ ] [Measurable criterion 1]
- [ ] [Measurable criterion 2]
- [ ] [Measurable criterion 3]

### Business Value
[Why this feature matters for the portfolio]

---

## 2. Context & References

### Official Documentation (MUST consult)
| Source | URL/Location | Specific Sections |
|--------|--------------|-------------------|
| TanStack Router | Archon: `dc4cf3168627a5c8` | [Relevant sections] |
| React | Archon: `62371402a593220c` | [Relevant sections] |
| Three.js | Web search required | [Relevant sections] |
| Framer Motion | Web search required | [Relevant sections] |

### Source Project Reference
```
/home/charles/Bureau/Next.js-Creative-Portfolio-Website-main
```
**Files to analyze:**
- [ ] [path/to/relevant/file.jsx]
- [ ] [path/to/another/file.jsx]

### Existing Codebase Patterns
| Pattern | File | Description |
|---------|------|-------------|
| [Pattern name] | `examples/[file]` | [What it demonstrates] |

---

## 3. Implementation Blueprint

### Data Models / Types
```typescript
// Define TypeScript interfaces/types needed
interface Example {
  id: string;
  // ...
}
```

### Task Breakdown (Ordered)

#### Task 1: [Name]
**File:** `src/[path]/[file].tsx`
**Action:** Create | Modify | Delete

```typescript
// Pseudocode or actual implementation pattern
```

**Validation:** [How to verify this task is complete]

#### Task 2: [Name]
...

### Integration Points
- **Routing:** [TanStack Router integration details]
- **State:** [State management approach]
- **3D Models:** [Three.js integration if applicable]
- **Animations:** [Framer Motion integration if applicable]

---

## 4. Validation Gates

### Level 1: Syntax & Types
```bash
bun run typecheck
bun run lint
```

### Level 2: Unit Tests
```bash
bun test [specific-test-file]
```
- [ ] Test case 1: [description]
- [ ] Test case 2: [description]

### Level 3: Visual/Integration
- [ ] Component renders correctly
- [ ] Animations work as expected
- [ ] Responsive on all breakpoints
- [ ] 3D models load and animate

---

## 5. Anti-Patterns to Avoid

- [ ] **DON'T** use patterns not from source project or official docs
- [ ] **DON'T** skip consulting documentation
- [ ] **DON'T** use Tailwind (this project uses pure CSS)
- [ ] **DON'T** use npm (use Bun exclusively)
- [ ] **DON'T** improvise API signatures
- [ ] **DON'T** ignore TypeScript errors

---

## 6. Completion Checklist

- [ ] All tasks completed
- [ ] All validation gates passed
- [ ] Code follows source project patterns
- [ ] Documentation consulted for all APIs
- [ ] No TypeScript errors
- [ ] Responsive design verified
- [ ] TASK.md updated

---

## 7. Confidence Score

**Pre-implementation confidence:** [1-10] /10

**Reasoning:**
[Why this score - what could cause issues]

---

## Notes

[Any additional context, gotchas, or considerations]

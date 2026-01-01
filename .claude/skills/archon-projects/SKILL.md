---
name: archon-projects
description: Manage projects, tasks, and documents using Archon MCP server. Use when the user asks to create a project, add tasks, track progress, manage documents, or says "create project", "add task", "show tasks", "update status", "project management".
allowed-tools: mcp__archon__find_projects, mcp__archon__manage_project, mcp__archon__find_tasks, mcp__archon__manage_task, mcp__archon__find_documents, mcp__archon__manage_document, mcp__archon__get_project_features
---

# Archon Project Management

Manage projects, tasks, and documents using the Archon MCP server.

## Task Status Flow

`todo` → `doing` → `review` → `done`

## Instructions

### Projects
```
mcp__archon__find_projects()
mcp__archon__manage_project("create", title="...", description="...")
```

### Tasks
```
mcp__archon__find_tasks(filter_by="status", filter_value="todo")
mcp__archon__manage_task("create", project_id="...", title="...", description="...")
mcp__archon__manage_task("update", task_id="...", status="doing")
```

### Documents
```
mcp__archon__find_documents(project_id="...")
mcp__archon__manage_document("create", project_id="...", title="...", document_type="spec")
```

## Assignees

`"User"`, `"Archon"`, `"Coding Agent"`, or custom names.

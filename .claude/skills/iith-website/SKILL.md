```markdown
# iith-website Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development conventions and workflows for the `iith-website` TypeScript codebase. It covers file organization, import/export patterns, commit message styles, and testing practices, enabling contributors to write consistent, maintainable code even without a framework.

## Coding Conventions

### File Naming
- Use **camelCase** for filenames.
  - Example: `userProfile.ts`, `mainHeader.ts`

### Import Style
- Use **relative imports** for all modules.
  - Example:
    ```typescript
    import { fetchData } from './apiUtils';
    ```

### Export Style
- Use **named exports** exclusively.
  - Example:
    ```typescript
    // In userProfile.ts
    export function getUserProfile(id: string) { ... }
    ```

### Commit Messages
- Freeform style, no enforced prefixes.
- Average length: ~41 characters.
  - Example: `add new faculty page and update links`

## Workflows

### Development Workflow
**Trigger:** When starting new features or fixes  
**Command:** `/start-dev`

1. Create a new branch for your feature or bugfix.
2. Write code following the coding conventions.
3. Use relative imports and named exports.
4. Commit changes with a clear, concise message.
5. Push your branch to the repository.

### Code Review Workflow
**Trigger:** When your feature is ready for review  
**Command:** `/request-review`

1. Open a pull request from your branch to the main branch.
2. Ensure your code follows all conventions.
3. Request review from team members.
4. Address any feedback and update your branch as needed.

### Testing Workflow
**Trigger:** Before merging or deploying changes  
**Command:** `/run-tests`

1. Identify or create test files matching the `*.test.*` pattern.
2. Run all tests using the project's test runner (framework unknown; check project docs or package.json).
3. Ensure all tests pass before merging.

## Testing Patterns

- Test files are named with the pattern `*.test.*` (e.g., `userProfile.test.ts`).
- Testing framework is not specified—refer to project documentation or configuration.
- Place test files alongside the code they test or in a dedicated test directory.

  Example test file:
  ```typescript
  // userProfile.test.ts
  import { getUserProfile } from './userProfile';

  test('returns user profile for valid id', () => {
    expect(getUserProfile('123')).toBeDefined();
  });
  ```

## Commands
| Command         | Purpose                                      |
|-----------------|----------------------------------------------|
| /start-dev      | Start a new feature or bugfix branch         |
| /request-review | Request code review via pull request         |
| /run-tests      | Run all tests before merging or deploying    |
```
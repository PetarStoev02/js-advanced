# JavaScript Practice Workbook

This repository collects hands-on solutions for a broad set of JavaScript fundamentals and front-end exercises. Each directory mirrors a topic from the coursework (labs, exercises, and exam preparation) so you can focus on a single concept—syntax, arrays, higher-order functions, DOM manipulation, or unit testing—without hunting for starter files.

## Repository Layout

| Path | Summary |
| --- | --- |
| `Syntax, Functions and Statements - Lab/` | Warm-up problems covering arithmetic, conditionals, and basic function composition. |
| `Syntax, Functions and Statements - Exercise/` | Extended practice on the same fundamentals with slightly larger algorithmic tasks. |
| `Arrays and Nested Arrays - Lab/` | Introductory work with array traversal, slicing, and aggregation. |
| `Arrays and Nested Arrays - Exercise/` | Follow-up exercises focusing on iteration strategies and immutable updates. |
| `Advanced Functions - Lab/` | Higher-order utilities, closure patterns, and partial application drills. |
| `Objects and Composition - Lab/` & `... - Exercise/` | Object literals, composition, and basic object-oriented patterns. |
| `DOM Manipulations and Events - Lab/` | Browser-driven tasks illustrating minimal DOM APIs and event wiring. |
| `DOM Manipulation and Events - Exercise/` | More advanced DOM setups (multiple inputs, validation, stateful UI widgets). |
| `Unit Testing and Error Handling - Lab/` | Intro snippets for validating behavior with assertions and guarding against invalid input. |
| `Exam Preparation/` | Mixed-topic problems emulating full-length practical exams. |

Each exercise is self-contained—usually one `.js` file per problem, paired with an `.html`/`.css` scaffold for DOM assignments.

## Prerequisites

- Node.js 18+ for the console-based problems.
- A modern browser for the DOM labs/exercises (Chrome/Firefox/Edge).
- Optional: a static server such as `npx serve` for quick local previews of HTML tasks.

## Running the Console Exercises

1. Pick any script under a non-DOM folder (for example `Arrays and Nested Arrays - Exercise/04. Rotate Array.js`).
2. Execute it with Node from the repository root:
   ```bash
   node "Arrays and Nested Arrays - Exercise/04. Rotate Array.js"
   ```
3. If a task expects input arguments, adjust the script to read from `process.argv` or hard-code sample data as demonstrated in the file.

## Working with the DOM Assignments

1. Open the matching `.html` file inside the relevant folder (for example `DOM Manipulation and Events - Exercise/05. Encode-and-Decode-Messages/index.html`).
2. Use a live server extension or run `npx serve "DOM Manipulation and Events - Exercise/05. Encode-and-Decode-Messages"` to avoid cross-origin restrictions.
3. Edit the paired `.js` file to manipulate the DOM. Most scripts are already wired through a `<script>` tag at the bottom of the HTML file.

## Adding or Updating Solutions

- Keep new problems in the matching topic folder so navigation stays predictable.
- Prefer descriptive filenames such as `07. Sorting Numbers.js`; follow the numbering already in use.
- For console tasks, include sample invocations/comments that show expected behavior.
- For DOM work, keep assets (HTML/CSS/JS) together inside the exercise directory.
- Run `node <file>` or reload the browser page before committing to verify there are no syntax errors.

## Troubleshooting

- **Reference Errors**: Check that function declarations are loaded before invocation, especially in browser scripts using modules.
- **Encoding/Decoding issues**: Use `Number(...)` or `parseInt(..., 10)` explicitly to avoid implicit string concatenation bugs.
- **DOM not updating**: Confirm the script tag is placed after the HTML elements or wrapped in `DOMContentLoaded`.

## License

No license file is present. Treat this repository as “all rights reserved” unless the owner specifies otherwise.


# Day 8 - Exercise 4: Barrel Exports

## Task
Organize a component library using barrel exports (index.js re-exports).

## Scenario
You have a UI component library with multiple components spread across folders.
Create a clean public API using barrel exports.

## Your Task
1. Create index.js files that re-export components
2. Allow importing like: `import { Button, Input, Modal } from './components'`
3. Organize exports by category
4. Hide internal/private components from the public API

## Structure to Create
```
components/
├── index.js           <- Main barrel (your task)
├── buttons/
│   ├── index.js       <- Category barrel
│   ├── Button.js
│   └── IconButton.js
├── inputs/
│   ├── index.js
│   ├── Input.js
│   └── Select.js
└── modals/
    ├── index.js
    ├── Modal.js
    └── _ModalBackdrop.js  <- Private (don't export)
```

## Run
```bash
node test.js
```

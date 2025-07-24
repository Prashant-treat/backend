# Learning Backend

This is my repo for learning Backend

## Model for Dataflow
![alt text](diagram-export-7-24-2025-5_31_33-PM.svg)


### notes

* git normaly does not allow to track the empty folder since 
it is not have any data but to so we can create a '.gitkee file
 so that we track and push the empyt empty folder which is use later in time. 

* - git ignore  which have to ignore for particular project you can take form .gitignore generator websit
- link : https://www.toptal.com/developers/gitignore/api/node 
- link : https://mrkandreev.name/snippets/gitignore-generator/#Node

* Adding "type": "module" in your package.json tells Node.js to treat .js files in your project as ECMAScript Modules (ESM) instead of CommonJS modules, which is the default in Node.js.

| Feature                    | Without `"type": "module"` (CommonJS) | With `"type": "module"` (ESM)                 |
| -------------------------- | ------------------------------------- | --------------------------------------------- |
| Imports                    | `const x = require('x')`              | `import x from 'x'`                           |
| Exports                    | `module.exports = {}`                 | `export default {}` or `export const x = ...` |
| File extension needed      | Can often omit `.js`                  | Must include `.js`, `.mjs`, etc.              |
| `__dirname` / `__filename` | Available by default                  | Not available – must use `import.meta.url`    |
| Top-level `await`          | Not allowed                           | Allowed                                       |

* using the nodemon to rerun the server automatically after save(it is devdependency mean only in product not in development)
- install uses : npm i nodemon (not recommened it intall as main dependency)
               : npm install --save-devo nodemon /  npm i -D nodemon (recommended devedependcy) 
- after write this in pkg.json file to specify which file run .
``` "scripts": {
    "dev": "nodemon src/index.js"
  },```
               
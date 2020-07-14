---
title: JSONToFile
tags: node,json,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Writes a JSON object to a file.

Use `fs.writeFileSync()`, template literals and `JSON.stringify()` to write a `json` object to a `.json` file.

```js
const fs = require("fs");
const JSONToFile = (obj, filename, spaces = 2) =>
  fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, null, spaces));
```

```js
JSONToFile({ test: "is passed" }, "testJsonFile"); // writes the object to 'testJsonFile.json'
```
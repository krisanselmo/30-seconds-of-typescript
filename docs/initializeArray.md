---
title: initializeArrayWithValues
tags: array,math,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Initializes and fills an array with the specified values.

Use `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.
You can omit `val` to use a default value of `0`.

```ts
const initializeArrayWithValues = (n: number, val: any = 0) =>
  Array(n).fill(val);
```

```ts
initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
```
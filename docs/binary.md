---
id: binary
sidebar_label: Binary
title: binary
tags: function,beginner
---

Creates a function that accepts up to two arguments, ignoring any additional arguments.

Call the provided function, `fn`, with the first two arguments given.

```ts
export const binary = (fn: (...args: any[]) => any) => (
  ...[v1, v2]: any[]
) => fn(v1, v2);
```

```ts
const max = binary(Math.max)(1, 2, 3);
assertEquals(max, 2);

["2", "1", "0"].map(binary(Math.max)); // [2, 1, 2]
```
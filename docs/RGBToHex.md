---
title: RGBToHex
tags: string,math,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts the values of RGB components to a color code.

Convert given RGB parameters to hexadecimal string using bitwise left-shift operator (`<<`) and `toString(16)`, then `String.padStart(6,'0')` to get a 6-digit hexadecimal value.

```ts
const RGBToHex = (r: number, g: number, b: number, hash: "#" | "" = "") =>
  hash + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
```

```ts
RGBToHex(255, 165, 1); // 'ffa501'
RGBToHex(255, 165, 1, "#"); // '#ffa501'
```
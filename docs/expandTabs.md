---
title: expandTabs
tags: string,regexp,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Convert tabs to spaces, where each tab corresponds to `count` spaces.

Use `String.prototype.replace()` with a regular expression and `String.prototype.repeat()` to replace each tab character with `count` spaces.

```js
const expandTabs = (str, count) => str.replace(/\t/g, " ".repeat(count));
```

```js
expandTabs("\t\tlorem", 3); // '      lorem'
```
---
title: lowercaseKeys
tags: object,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Creates a new object from the specified object, where all the keys are in lowercase.

Use `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.
Convert each key in the original object to lowercase, using `String.toLowerCase()`.

```js
const lowercaseKeys = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
```

```js
const myObj = { Name: "Adam", sUrnAME: "Smith" };
const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
```
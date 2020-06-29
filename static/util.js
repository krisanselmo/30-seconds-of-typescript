// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiate;
(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };
  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = (m, a) => {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

System.register("util", [], function (exports_1, context_1) {
  "use strict";
  var HTMLEscapeChars,
    htmlEscapeReg,
    accumulate,
    all,
    allEqual,
    and,
    any,
    some,
    aperture,
    approximatelyEqual,
    arrayToCSV,
    arrayToHtmlList,
    ary,
    attempt,
    attempt2,
    average,
    averageBy,
    bifurcate,
    bifurcateBy,
    binary,
    bind,
    bindAll,
    binomialCoefficient,
    both,
    call,
    capitalize,
    capitalizeEveryWord,
    castArray,
    celsiusToFahrenheit,
    chunk,
    colorize,
    color,
    compact,
    compactWhitespace,
    complement,
    compose,
    composeRight,
    containsWhitespace,
    countBy,
    countOccurrences,
    createElement,
    createEventHub,
    CSVToArray,
    CSVToJSON,
    curry,
    dayOfYear,
    debounce,
    deepClone,
    deepFlatten,
    deepFreeze,
    deepGet,
    defaults,
    delay,
    delayedPromise,
    either,
    equals,
    deepEquals,
    escapeHTML,
    escapeRegExp,
    factorial,
    memoize,
    fahrenheitToCelsius,
    filterNonUnique,
    filterNonUniqueBy,
    findKey;
  var __moduleName = context_1 && context_1.id;
  /**
     * Guard Function to check string type
     *
     * @param str {string|T}
     */
  function isString(str) {
    return typeof str === "string";
  }
  exports_1("isString", isString);
  /**
     * Validate date
     *
     * @param date {Date}
     */
  function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
  }
  exports_1("isValidDate", isValidDate);
  return {
    setters: [],
    execute: function () {
      (function (HTMLEscapeChars) {
        HTMLEscapeChars["&"] = "&amp;";
        HTMLEscapeChars["<"] = "&lt;";
        HTMLEscapeChars[">"] = "&gt;";
        HTMLEscapeChars["'"] = "&#39;";
        HTMLEscapeChars['"'] = "&quot;";
      })(HTMLEscapeChars || (HTMLEscapeChars = {}));
      exports_1("HTMLEscapeChars", HTMLEscapeChars);
      htmlEscapeReg = new RegExp(`[${Object.keys(HTMLEscapeChars)}]`, "g");
      /**
             * Returns an array of partial sums.
             * Use `Array.prototype.reduce()`, `Array.prototype.slice(-1)` and the unary `+` operator to add each value to the unary array containing the previous sum.
             *
             * @param nums {number[]} array of numbers
             */
      exports_1(
        "accumulate",
        accumulate = (...nums) =>
          nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []),
      );
      /**
             * Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.
             *
             * @param arr:{T[]} <T = any>
             * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
             */
      exports_1("all", all = (arr, fn = Boolean) => arr.every(fn));
      /**
             * Check if all elements in an array are equal.
             *
             * @param arr {T[]} <T = any>
             */
      exports_1(
        "allEqual",
        allEqual = (arr) => arr.every((val) => val === arr[0]),
      );
      /**
             * Returns `true` if both arguments are `true`, `false` otherwise.
             *
             * @param a {any}
             * @param b {any}
             */
      exports_1("and", and = (a, b) => Boolean(a) && Boolean(b));
      /**
             * Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.
             * Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
             * Omit the second argument, `fn`, to use `Boolean` as a default.
             *
             * @param arr:{T[]} <T = any>
             * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
             */
      exports_1("any", any = (arr, fn = Boolean) => arr.some(fn));
      /**
             * Same as any
             *
             * @param arr:{T[]} <T = any>
             * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
             */
      exports_1("some", some = (arr, fn = Boolean) => arr.some(fn));
      /**
             * Returns an array of `n`-tuples of consecutive elements.
             *
             * Use `Array.prototype.slice()` and `Array.prototype.map()` to create an array of appropriate length and populate it with `n`-tuples of consecutive elements from `arr`.
             * If `n` is greater than the length of `arr`, return an empty array.
             *
             * @param n
             * @param arr
             */
      exports_1(
        "aperture",
        aperture = (n, arr) =>
          n >= arr.length
            ? []
            : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]),
      );
      /**
             * Checks if two numbers are approximately equal to each other.
             *
             * Use `Math.abs()` to compare the absolute difference of the two values to `epsilon`.
             * Omit the third parameter, `epsilon`, to use a default value of `0.001`.
             * @param v1 {number}
             * @param v2 {number}
             * @param epsilon {number} default 0.001
             */
      exports_1(
        "approximatelyEqual",
        approximatelyEqual = (v1, v2, epsilon = 0.001) =>
          Math.abs(v1 - v2) < epsilon,
      );
      /**
             * Converts a 2D array to a comma-separated values (CSV) string.
             *
             * Use `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.
             * Use `Array.prototype.join('\n')` to combine all rows into a CSV string, separating each row with a newline.
             * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
             *
             * @param arr {(string | number)[][]}
             * @param delimiter {string} default  ","
             */
      exports_1(
        "arrayToCSV",
        arrayToCSV = (arr, delimiter = ",") =>
          arr
            .map((v) =>
              v
                .map((
                  x,
                ) => (typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x))
                .join(delimiter)
            )
            .join("\n"),
      );
      /**
             * Converts the given array elements into `<li>` tags and appends them to the list of the given id.
             * Use `Array.prototype.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags.
             *
             * @param arr {(string | number)[]}
             * @param listID {string}
             */
      exports_1(
        "arrayToHtmlList",
        arrayToHtmlList = (arr, listID) => {
          let el = document.querySelector("#" + listID);
          if (el) {
            el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
          }
        },
      );
      /**
             * Creates a function that accepts up to `n` arguments, ignoring any additional arguments.
             *
             * Call the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).
             *
             * @param fn {function} {(...args: T[]) => any}
             * @param n {number}
             */
      exports_1("ary", ary = (fn, n) => (...args) => fn(...args.slice(0, n)));
      // export const atob = (str: string) => Deno.Buffer.from(str, 'base64').toString('binary');
      /**
             * Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
             *
             * Use a `try... catch` block to return either the result of the function or an appropriate error.
             *
             * @param fn {function} {(...args: any[]) => any}
             * @param args {any[]}
             */
      exports_1(
        "attempt",
        attempt = (fn, ...args) => {
          try {
            return fn(...args);
          } catch (e) {
            return e instanceof Error ? e : new Error(e);
          }
        },
      );
      /**
             * Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
             *
             * Use a `try... catch` block to return tuple of value and Error
             *
             * @param fn {function} {(...args: any[]) => any}
             * @param args {any[]}
             *
             * @returns [any, Error]
             */
      exports_1(
        "attempt2",
        attempt2 = (fn, ...args) => {
          try {
            return [fn(...args), null];
          } catch (e) {
            return [null, e instanceof Error ? e : new Error(e)];
          }
        },
      );
      /**
             * Returns the average of two or more numbers.
             *
             * Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.
             * @param nums
             */
      exports_1(
        "average",
        average = (...nums) =>
          nums.reduce((acc, val) => acc + val, 0) / nums.length,
      );
      exports_1(
        "averageBy",
        averageBy = (arr, fn) => {
          const mapper = typeof fn === "function" ? fn : (val) => val[fn];
          return arr.reduce((acc, val) => acc + mapper(val), 0) / arr.length;
        },
      );
      /**
             * Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
             *
             * Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.
             *
             * @param arr {T[]} , <T = any>
             * @param filter {boolean[]}
             */
      exports_1(
        "bifurcate",
        bifurcate = (arr, filter) =>
          arr.reduce((acc, val, i) => {
            acc[filter[i] ? 0 : 1].push(val);
            return acc;
          }, [[], []]),
      );
      /**
             * Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.
             *
             * Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element.
             *
             * @param arr {T[]}, <T = any>
             * @param filter {Predicate<T>}
             */
      exports_1(
        "bifurcateBy",
        bifurcateBy = (arr, filter) =>
          arr.reduce((acc, val) => {
            acc[filter(val) ? 0 : 1].push(val);
            return acc;
          }, [[], []]),
      );
      /**
             * Creates a function that accepts up to two arguments, ignoring any additional arguments.
             * Call the provided function, `fn`, with the first two arguments given.
             *
             * @param fn {function} {(...args: any[]) => any}
             * @returns {function} ([v1, v2]: any[]) => fn(v1, v2)
             */
      exports_1("binary", binary = (fn) => (...[v1, v2]) => fn(v1, v2));
      /**
             * Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.
             *
             * Return a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.
             * Use `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments.
             * @param fn
             * @param context
             * @param boundArgs
             */
      exports_1(
        "bind",
        bind = (fn, context, ...boundArgs) =>
          (...args) => fn.apply(context, [...boundArgs, ...args]),
      );
      /**
             * Binds methods of an object to the object itself, overwriting the existing method
             * Use `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.
             *
             * @param obj {any}
             * @param fns {string[]}
             */
      exports_1(
        "bindAll",
        bindAll = (obj, ...fns) =>
          fns.forEach((key) => {
            if (typeof obj[key] === "function") {
              const f = obj[key];
              obj[key] = function (...args) {
                return f.apply(obj, args);
              };
            }
          }),
      );
      /**
             * Evaluates the binomial coefficient of two integers `n` and `k`.
             *
             * Use `Number.isNaN()` to check if any of the two values is `NaN`.
             * Check if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.
             * Check if `n - k` is less than `k` and switch their values accordingly.
             * Loop from `2` through `k` and calculate the binomial coefficient.
             * Use `Math.round()` to account for rounding errors in the calculation.
             *
             * @param n {number}
             * @param k {number}
             */
      exports_1(
        "binomialCoefficient",
        binomialCoefficient = (n, k) => {
          if (Number.isNaN(n) || Number.isNaN(k)) {
            return NaN;
          }
          if (k < 0 || k > n) {
            return 0;
          }
          if (k === 0 || k === n) {
            return 1;
          }
          if (k === 1 || k === n - 1) {
            return n;
          }
          if (n - k < k) {
            k = n - k;
          }
          let res = n;
          for (let j = 2; j <= k; j++) {
            res *= (n - j + 1) / j;
          }
          return Math.round(res);
        },
      );
      /**
             * Returns `true` if both functions return `true` for a given set of arguments, `false` otherwise.
             * Use the logical and (`&&`) operator on the result of calling the two functions with the supplied `args`.
             *
             * @param f
             * @param g
             */
      exports_1("both", both = (f, g) => (...args) => f(...args) && g(...args));
      // TODO: need refactor types
      /**
             * Given a key and a set of arguments, call them when given a context. Primarily useful in composition.
             *
             * Use a closure to call a stored key with stored arguments.
             *
             * @param key {string}
             * @param args {any[]}
             */
      exports_1(
        "call",
        call = (key, ...args) => (context) => context[key](...args),
      );
      /**
             *   Capitalizes the first letter of a string.
             *
             * Use array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
             * Omit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.
             *
             *
             * @param str {string}
             * @param lowerRest {boolean}
             */
      exports_1(
        "capitalize",
        capitalize = (str = "", lowerRest = false) =>
          str.slice(0, 1).toUpperCase() +
          (lowerRest ? str.slice(1).toLowerCase() : str.slice(1)),
      );
      /**
             * Capitalizes the first letter of every word in a string.
             * Use `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.
             *
             * @param str {string}
             */
      exports_1(
        "capitalizeEveryWord",
        capitalizeEveryWord = (str = "") =>
          str.replace(/\b[a-z]/g, (char) => char.toUpperCase()),
      );
      /**
             * Casts the provided value as an array if it's not one.
             *
             * Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.
             * @param val
             */
      exports_1(
        "castArray",
        castArray = (val) => Array.isArray(val) ? val : [val],
      );
      /**
             * Converts Celsius to Fahrenheit.
             * Follows the conversion formula `F =  1.8C + 32`.
             * @param degrees
             */
      exports_1(
        "celsiusToFahrenheit",
        celsiusToFahrenheit = (degrees) => 1.8 * degrees + 32,
      );
      /**
             * Chunks an array into smaller arrays of a specified size.
             *
             * Use `Array.from()` to create a new array, that fits the number of chunks that will be produced.
             * Use `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.
             * If the original array can't be split evenly, the final chunk will contain the remaining elements.
             *
             * @param arr {any[]}
             * @param size {number}
             */
      exports_1(
        "chunk",
        chunk = (arr, size) =>
          Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size)),
      );
      /**
             * Add special characters to text to print in color in the console (combined with `console.log()`).
             *
             * Use template literals and special characters to add the appropriate color code to the string output.
             * For background colors, add a special character that resets the background color at the end of the string.
             */
      exports_1(
        "colorize",
        colorize = new (class {
          constructor() {
            this.color = (code, ended = false, ...messages) =>
              `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;
            this.black = this.color.bind(null, 30, false);
            this.red = this.color.bind(null, 31, false);
            this.green = this.color.bind(null, 32, false);
            this.yellow = this.color.bind(this, 33, false);
            this.blue = this.color.bind(this, 34, false);
            this.magenta = this.color.bind(this, 35, false);
            this.cyan = this.color.bind(this, 36, false);
            this.white = this.color.bind(this, 37, false);
            this.bgBlack = this.color.bind(this, 40, true);
            this.bgRed = this.color.bind(this, 41, true);
            this.bgGreen = this.color.bind(this, 42, true);
            this.bgYellow = this.color.bind(this, 43, true);
            this.bgBlue = this.color.bind(this, 44, true);
            this.bgMagenta = this.color.bind(this, 45, true);
            this.bgCyan = this.color.bind(this, 46, true);
            this.bgWhite = this.color.bind(this, 47, true);
          }
        })(),
      );
      /**
             * Add special characters to text to print in color in the console (combined with `console.log()`).
             *
             * Use template literals and special characters to add the appropriate color code to the string output.
             * For background colors, add a special character that resets the background color at the end of the string.
             */
      exports_1("color", color = colorize);
      // console.log(colorize.black("foo")); // 'foo' (red letters)
      // console.log(colorize.bgBlue("foo", "bar")); // 'foo bar' (blue background)
      // console.log(colorize.bgWhite(colorize.yellow("foo"), colorize.green("foo"))); // 'foo bar' (first
      /**
             * Removes falsy values from an array.
             * Use `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).
             *
             * @param arr {any[]}
             */
      exports_1("compact", compact = (arr) => arr.filter(Boolean));
      /**
             * Returns a string with whitespaces compacted.
             * Use `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.
             *
             * @param str {string}
             */
      exports_1(
        "compactWhitespace",
        compactWhitespace = (str) => str.replace(/\s{2,}/g, " "),
      );
      /**
             * Returns a function that is the logical complement of the given function, `fn`.
             *
             * Use the logical not (`!`) operator on the result of calling `fn` with any supplied `args`.
             *
             * @param fn {Func<any>}
             */
      exports_1("complement", complement = (fn) => (...args) => !fn(...args));
      /**
             * Performs right-to-left function composition.
             *
             * Use `Array.prototype.reduce()` to perform right-to-left function composition.
             * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.
             *
             * @param fns {...fns: Func<any>[]}
             */
      exports_1(
        "compose",
        compose = (...fns) =>
          fns.reduce((f, g) => (...args) => f(...castArray(g(...args)))),
      );
      /**
             * Performs left-to-right function composition.
             *
             * Use `Array.prototype.reduce()` to perform left-to-right function composition.
             * The first (leftmost) function can accept one or more arguments; the remaining functions must be unary. *
             * @param fns {...fns: Func<any>[]}
             */
      exports_1(
        "composeRight",
        composeRight = (...fns) =>
          fns.reduce((f, g) => (...args) => g(...castArray(f(...args)))),
      );
      /**
             * Returns `true` if the given string contains any whitespace characters, `false` otherwise.
             *
             * Use `RegExp.prototype.test()` with an appropriate regular expression to check if the given string contains any whitespace characters.
             *
             * @param str {string}
             */
      exports_1(
        "containsWhitespace",
        containsWhitespace = (str) => /\s/.test(str),
      );
      /**
             * Groups the elements of an array based on the given function and returns the count of elements in each group.
             *
             * Use `Array.prototype.map()` to map the values of an array to a function or property name.
             * Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.
             *
             * @param arr {T[]} here <T = any>
             * @param fn fn: Func<T> | string
             */
      exports_1(
        "countBy",
        countBy = (arr, fn) => {
          const mapper = typeof fn === "function" ? fn : (val) => val[fn];
          return arr.reduce((acc, val) => {
            const value = mapper(val);
            acc[value] = (acc[value] || 0) + 1;
            return acc;
          }, {});
        },
      );
      /**
             * Counts the occurrences of a value in an array.
             *
             * Use `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.
             *
             * @param arr {T[]}
             * @param val {T}
             */
      exports_1(
        "countOccurrences",
        countOccurrences = (arr, val) =>
          arr.reduce((a, v) => (v === val ? a + 1 : a), 0),
      );
      /**
             * Creates an element from a string (without appending it to the document).
             * if the given string contains multiple elements, only the first one will be returned.
             *
             * Use `document.createElement()` to create a new element.
             * Set its `innerHTML` to the string supplied as the argument.
             * Use `ParentNode.firstElementChild` to return the element version of the string.
             *
             * @param str { string }
             */
      exports_1(
        "createElement",
        createElement = (str) => {
          const el = document.createElement("div");
          el.innerHTML = str;
          return el.firstElementChild;
        },
      );
      /**
             * Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.
             *
             * Use `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.
             * For `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.
             * For `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler
             * to the array.
             * For `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.
             *
             */
      exports_1(
        "createEventHub",
        createEventHub = () => ({
          hub: Object.create(null),
          emit(event, data) {
            (this.hub[event] || []).forEach((handler) => handler(data));
          },
          on(event, handler) {
            if (!this.hub[event]) {
              this.hub[event] = [];
            }
            this.hub[event].push(handler);
          },
          off(event, handler) {
            const i = (this.hub[event] || []).findIndex((h) => h === handler);
            if (i > -1) {
              this.hub[event].splice(i, 1);
            }
            if (this.hub[event]?.length === 0) {
              delete this.hub[event];
            }
          },
        }),
      );
      /**
             * Converts a comma-separated values (CSV) string to a 2D array.
             *
             * Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` to remove the first row (title row) if `omitFirstRow` is `true`.
             * Use `String.prototype.split('\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.
             * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
             * Omit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.
             *
             * @param data {string}
             * @param delimiter {string} @default ","
             * @param omitFirstRow {boolean}  @default false
             */
      exports_1(
        "CSVToArray",
        CSVToArray = (data, delimiter = ",", omitFirstRow = false) =>
          data
            .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
            .split("\n")
            .map((v) => v.split(delimiter)),
      );
      exports_1(
        "CSVToJSON",
        CSVToJSON = (data, delimiter = ",") => {
          const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
          return data
            .slice(data.indexOf("\n") + 1)
            .split("\n")
            .map((v) => {
              const values = v.split(delimiter);
              return titles.reduce(
                (obj, title, index) => ((obj[title] = values[index]), obj),
                {},
              );
            });
        },
      );
      /**
             * Curries a function.
             *
             * Use recursion.
             * If the number of provided arguments (`args`) is sufficient, call the passed function `fn`.
             * Otherwise, return a curried function `fn` that expects the rest of the arguments.
             * If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.
             *
             * @param fn {Func}
             * @param arity {number} number of argument `fn` can have
             * @param args {...any[]} var args, pass initial values
             */
      exports_1(
        "curry",
        curry = (fn, arity = fn.length, ...args) =>
          arity <= args.length
            ? fn(...args)
            : curry.bind(null, fn, arity, ...args),
      );
      /**
             * dayOfYear: Gets the day of the year from a `Date` object.
             *
             * Use `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.
             * Use `Math.floor()` to appropriately round the resulting day count to an integer.
             *
             * @param date {Date| string}
             * */
      exports_1(
        "dayOfYear",
        dayOfYear = (date) => {
          if (isString(date)) {
            date = new Date(date);
          }
          if (!isValidDate(date)) {
            throw new Error(`Invalid Date string`);
          }
          return Math.floor(
            (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
              1000 /
              60 /
              60 /
              24,
          );
        },
      );
      /**
             * Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.
             *
             * Each time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.
             * Omit the second argument, `ms`, to set the timeout at a default of 0 ms.
             *
             * @param fn { Function }
             * @param ms {number} @default 300ms
             */
      exports_1(
        "debounce",
        debounce = (fn, ms = 300) => {
          let timeoutId;
          return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), ms);
          };
        },
      );
      /**
             * Creates a deep clone of an object.
             *
             * Use recursion.
             * Check if the passed object is `null` and, if so, return `null`.
             * Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.
             * Use `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.
             *
             * @param obj {any}
             */
      exports_1(
        "deepClone",
        deepClone = (obj) => {
          if (obj === null) {
            return null;
          }
          let clone = { ...obj };
          Object.keys(clone).forEach((
            key,
          ) => (clone[key] = typeof obj[key] === "object"
            ? deepClone(obj[key])
            : obj[key])
          );
          return Array.isArray(obj) && obj.length
            ? (clone.length = obj.length) && Array.from(clone)
            : Array.isArray(obj)
            ? Array.from(obj)
            : clone;
        },
      );
      /**
             * Deep flattens an array.
             *
             * Use recursion.[polyfill for `Array.prototype.flat`]
             * Use `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.
             * Recursively flatten each element that is an array.
             *
             * @param arr {any[]}
             */
      exports_1(
        "deepFlatten",
        deepFlatten = (arr) => {
          if (typeof Array.prototype.flat !== "undefined") {
            return arr.flat(Infinity);
          }
          return [].concat(
            ...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)),
          );
        },
      );
      /**
             * Deep freezes an object.
             *
             * Use `Object.keys()` to get all the properties of the passed object, `Array.prototype.forEach()` to iterate over them.
             * Call `Object.freeze(obj)` recursively on all properties, checking if each one is frozen using `Object.isFrozen()` and applying `deepFreeze()` as necessary.
             * Finally, use `Object.freeze()` to freeze the given object.
             *
             * @param obj
             */
      exports_1(
        "deepFreeze",
        deepFreeze = (obj) => {
          Object.keys(obj).forEach((prop) => {
            if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
              deepFreeze(obj[prop]);
            }
          });
          return Object.freeze(obj);
        },
      );
      /**
             * Returns the target value in a nested JSON object, based on the `keys` array.
             *
             * Compare the keys you want in the nested JSON object as an `Array`.
             * Use `Array.prototype.reduce()` to get value from nested JSON object one by one.
             * If the key exists in object, return target value, otherwise, return `null`.
             *
             * @param obj {any}
             * @param keys {string | (string | number)[],}
             * @param defaultValue {null | undefined } @default undefined
             * @param delimiter {string} @default "."
             */
      exports_1(
        "deepGet",
        deepGet = (obj, keys, defaultValue = undefined, delimiter = ".") => {
          if (isString(keys)) {
            keys = keys.split(delimiter);
          }
          return keys.reduce(
            (xs, x) => (xs && xs[x] ? xs[x] : defaultValue),
            obj,
          );
        },
      );
      /**
             * Assigns default values for all properties in an object that are `undefined`.
             *
             * Use `Object.assign()` to create a new empty object and copy the original one to maintain key order, use spread operator `...` to combine the default values, finally use `obj` again to overwrite properties that originally had a value.
             *
             * @param obj {any}
             * @param defs {any[]}
             */
      exports_1(
        "defaults",
        defaults = (obj, ...defs) => Object.assign({}, obj, ...defs, obj),
      );
      /**
             * Invokes the provided function after `wait` milliseconds.
             *
             * Use `setTimeout()` to delay execution of `fn`.
             * Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.
             *
             * @param fn {Func} any function
             * @param wait {number} in ms
             * @param args {any[]}, arguments for fn
             */
      exports_1(
        "delay",
        delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args),
      );
      /**
             * Return a promise, Resolve after `wait` milliseconds.
             *
             * @param wait {number} in ms
             * @param args{any[]}, arguments for Promise
             */
      exports_1(
        "delayedPromise",
        delayedPromise = (wait = 300, ...args) =>
          new Promise((resolve) => {
            delay(resolve, wait, ...args);
          }),
      );
      /**
             *  Returns `true` if at least one function returns `true` for a given set of arguments, `false` otherwise.
             *
             * Use the logical or (`||`) operator on the result of calling the two functions with the supplied `args`.
             *
             * @param f { Function}
             * @param g { Function}
             */
      exports_1(
        "either",
        either = (f, g) => (...args) => f(...args) || g(...args),
      );
      /**
             * Performs a deep comparison between two values to determine if they are equivalent.
             *
             * Check if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).
             * Check if only one value is `null` or `undefined` or if their prototypes differ.
             * If none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.
             *
             * @param a {<T = any = any>}
             * @param b {<T = any = any>}
             */
      exports_1(
        "equals",
        equals = (a, b) => {
          if (a === b) {
            return true;
          }
          if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime();
          }
          if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
            return a === b;
          }
          const objA = a;
          const objB = b;
          if (objA.prototype !== objA.prototype) {
            return false;
          }
          let keys = Object.keys(objA);
          if (keys.length !== Object.keys(objB).length) {
            return false;
          }
          return keys.every((k) => equals(objA[k], objB[k]));
        },
      );
      /**
             * Performs a deep comparison between two values to determine if they are equivalent. Same as `equals`, but without type check
             *
             * Check if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).
             * Check if only one value is `null` or `undefined` or if their prototypes differ.
             * If none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.
             *
             * @param a {any}
             * @param b {any}
             */
      exports_1(
        "deepEquals",
        deepEquals = (a, b) => {
          if (a === b) {
            return true;
          }
          if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime();
          }
          if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
            return a === b;
          }
          const objA = a;
          const objB = b;
          if (objA.prototype !== objA.prototype) {
            return false;
          }
          let keys = Object.keys(objA);
          if (keys.length !== Object.keys(objB).length) {
            return false;
          }
          return keys.every((k) => equals(objA[k], objB[k]));
        },
      );
      /**
             * Escapes a string for use in HTML.
             *
             * Use `String.prototype.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object).
             *
             * @param str {string}
             */
      exports_1(
        "escapeHTML",
        escapeHTML = (str) =>
          str.replace(htmlEscapeReg, (tag) => HTMLEscapeChars[tag] || tag),
      );
      /**
             * Escapes a string to use in a regular expression.
             *
             * Use `String.prototype.replace()` to escape special characters.
             *
             * @param str
             */
      exports_1(
        "escapeRegExp",
        escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      );
      /**
             * Calculates the factorial of a number.
             *
             *Use recursion.
             *If `n` is less than or equal to `1`, return `1`.
             *Otherwise, return the product of `n` and the factorial of `n - 1`.
             *Throws an exception if `n` is a negative number.
             *
             * @param n {number}
             */
      exports_1(
        "factorial",
        factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1),
      );
      /**
             * Returns the memoized (cached) function.
             *
             * Create an empty cache by instantiating a new `Map` object.
             * Return a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.
             * Allow access to the `cache` by setting it as a property on the returned function.
             *
             * @param fn {Function}
             */
      exports_1(
        "memoize",
        memoize = (fn) => {
          const cache = new Map();
          const cached = function (val) {
            return cache.has(val) ? cache.get(val)
            : cache.set(val, fn.call(this, val)) && cache.get(val);
          };
          cached.cache = cache;
          return cached;
        },
      );
      /**
             * Converts Fahrenheit to Celsius.
             *
             * Follows the conversion formula `C = (F - 32) * 5/9`.
             *
             * @param degrees
             */
      exports_1(
        "fahrenheitToCelsius",
        fahrenheitToCelsius = (degrees) => ((degrees - 32) * 5) / 9,
      );
      /**
             * Filters out the non-unique values in an array.
             *
             * Use `Array.prototype.filter()` for an array containing only the unique values.
             *
             * @param arr{any[]}
             */
      exports_1(
        "filterNonUnique",
        filterNonUnique = (arr) =>
          arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i)),
      );
      /**
             * Filters out the non-unique values in an array, based on a provided comparator function.
             *
             * Use `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.
             * The comparator function takes four arguments: the values of the two elements being compared and their indexes.
             *
             * @param arr {T[]}
             * @param fn {(obj1: T, obj2: T, index1: number, index2: number) => any}
             */
      exports_1(
        "filterNonUniqueBy",
        filterNonUniqueBy = (arr, fn) =>
          arr.filter((v, i) =>
            arr.every((x, j) => (i === j) === fn(v, x, i, j))
          ),
      );
      /**
             * Returns the first key that satisfies the provided testing function. Otherwise `undefined` is returned.
             *
             * Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.
             *
             * @param obj { any }
             * @param fn {key}
             */
      exports_1(
        "findKey",
        findKey = (obj, fn) =>
          Object.keys(obj).find((key) => fn(obj[key], key, obj)),
      );
    },
  };
});

const __exp = __instantiate("util", false);
export const isString = __exp["isString"];
export const isValidDate = __exp["isValidDate"];
export const accumulate = __exp["accumulate"];
export const all = __exp["all"];
export const allEqual = __exp["allEqual"];
export const and = __exp["and"];
export const any = __exp["any"];
export const some = __exp["some"];
export const aperture = __exp["aperture"];
export const approximatelyEqual = __exp["approximatelyEqual"];
export const arrayToCSV = __exp["arrayToCSV"];
export const arrayToHtmlList = __exp["arrayToHtmlList"];
export const ary = __exp["ary"];
export const attempt = __exp["attempt"];
export const attempt2 = __exp["attempt2"];
export const average = __exp["average"];
export const averageBy = __exp["averageBy"];
export const bifurcate = __exp["bifurcate"];
export const bifurcateBy = __exp["bifurcateBy"];
export const binary = __exp["binary"];
export const bind = __exp["bind"];
export const bindAll = __exp["bindAll"];
export const binomialCoefficient = __exp["binomialCoefficient"];
export const both = __exp["both"];
export const call = __exp["call"];
export const capitalize = __exp["capitalize"];
export const capitalizeEveryWord = __exp["capitalizeEveryWord"];
export const castArray = __exp["castArray"];
export const celsiusToFahrenheit = __exp["celsiusToFahrenheit"];
export const chunk = __exp["chunk"];
export const colorize = __exp["colorize"];
export const color = __exp["color"];
export const compact = __exp["compact"];
export const compactWhitespace = __exp["compactWhitespace"];
export const complement = __exp["complement"];
export const compose = __exp["compose"];
export const composeRight = __exp["composeRight"];
export const containsWhitespace = __exp["containsWhitespace"];
export const countBy = __exp["countBy"];
export const countOccurrences = __exp["countOccurrences"];
export const createElement = __exp["createElement"];
export const createEventHub = __exp["createEventHub"];
export const CSVToArray = __exp["CSVToArray"];
export const CSVToJSON = __exp["CSVToJSON"];
export const curry = __exp["curry"];
export const dayOfYear = __exp["dayOfYear"];
export const debounce = __exp["debounce"];
export const deepClone = __exp["deepClone"];
export const deepFlatten = __exp["deepFlatten"];
export const deepFreeze = __exp["deepFreeze"];
export const deepGet = __exp["deepGet"];
export const defaults = __exp["defaults"];
export const delay = __exp["delay"];
export const delayedPromise = __exp["delayedPromise"];
export const either = __exp["either"];
export const equals = __exp["equals"];
export const deepEquals = __exp["deepEquals"];
export const escapeHTML = __exp["escapeHTML"];
export const escapeRegExp = __exp["escapeRegExp"];
export const factorial = __exp["factorial"];
export const memoize = __exp["memoize"];
export const fahrenheitToCelsius = __exp["fahrenheitToCelsius"];
export const filterNonUnique = __exp["filterNonUnique"];
export const filterNonUniqueBy = __exp["filterNonUniqueBy"];
export const findKey = __exp["findKey"];
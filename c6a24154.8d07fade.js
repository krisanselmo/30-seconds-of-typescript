(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{375:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(466)),o={title:"dayOfYear",tags:"date,beginner"},c={unversionedId:"dayOfYear",id:"dayOfYear",isDocsHomePage:!1,title:"dayOfYear",description:"JS",source:"@site/docs/dayOfYear.md",permalink:"/30-seconds-of-typescript/docs/dayOfYear",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/dayOfYear.md",sidebar:"someSidebar",previous:{title:"curry",permalink:"/30-seconds-of-typescript/docs/curry"},next:{title:"debounce",permalink:"/30-seconds-of-typescript/docs/debounce"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(i.b)("p",null,"Gets the day of the year from a ",Object(i.b)("inlineCode",{parentName:"p"},"Date")," object."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"new Date()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Date.prototype.getFullYear()")," to get the first day of the year as a ",Object(i.b)("inlineCode",{parentName:"p"},"Date")," object, subtract it from the provided ",Object(i.b)("inlineCode",{parentName:"p"},"date")," and divide with the milliseconds in each day to get the result.\nUse ",Object(i.b)("inlineCode",{parentName:"p"},"Math.floor()")," to appropriately round the resulting day count to an integer."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'function isString<T = any>(str: string | T): str is string {\n  return typeof str === "string";\n}\nfunction isValidDate(date: Date) {\n  return date instanceof Date && !isNaN(date.getTime());\n}\nconst dayOfYear = (date: Date | string): number => {\n  if (isString<Date>(date)) {\n    date = new Date(date);\n  }\n  if (!isValidDate(date)) throw new Error(`Invalid Date string`);\n  return Math.floor(\n    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /\n      1000 /\n      60 /\n      60 /\n      24\n  );\n};\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'dayOfYear(new Date()); // 180\ndayOfYear(new Date(2020, 5, 28)); //180\ndayOfYear("2020-06-28T10:46:39.856Z"); // 180\ndayOfYear("2020-06-28T1s"); // Error: Invalid Date string\n// invalid date\nassertThrows(\n  () => {\n    dayOfYear("2020-06-28T1s"); // Error: Invalid Date string\n  },\n  Error,\n  "Invalid Date string"\n);\n')))}l.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
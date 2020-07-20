(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{275:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),c=(r(0),r(543)),o={title:"reduceWhich",tags:"array,function,intermediate"},i={id:"reduceWhich",isDocsHomePage:!1,title:"reduceWhich",description:"TS",source:"@site/docs/reduceWhich.md",permalink:"/30-seconds-of-typescript/docs/reduceWhich",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/reduceWhich.md",sidebar:"someSidebar",previous:{title:"reduceSuccessive",permalink:"/30-seconds-of-typescript/docs/reduceSuccessive"},next:{title:"reducedFilter",permalink:"/30-seconds-of-typescript/docs/reducedFilter"}},p=[],s={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(c.b)("p",null,"Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," in combination with the ",Object(c.b)("inlineCode",{parentName:"p"},"comparator")," function to get the appropriate element in the array.\nYou can omit the second parameter, ",Object(c.b)("inlineCode",{parentName:"p"},"comparator"),", to use the default one that returns the minimum element in the array."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const reduceWhich = <T extends number | string | AnyObject = number>(\n  arr: T[],\n  comparator: Function = (a: number, b: number) => (a - b) as number\n) => arr.reduce((a: T, b: T) => (comparator(a, b) >= 0 ? b : a));\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'reduceWhich([1, 3, 2]); // 1\nreduceWhich([1, 3, 2], (a, b) => b - a); // 3\nreduceWhich(\n  [\n    { name: "Tom", age: 12 },\n    { name: "Jack", age: 18 },\n    { name: "Lucy", age: 9 },\n  ],\n  (a, b) => a.age - b.age\n); // {name: "Lucy", age: 9}\n')))}u.isMDXComponent=!0},543:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,d=l["".concat(o,".").concat(b)]||l[b]||m[b]||c;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
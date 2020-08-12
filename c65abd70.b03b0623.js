(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{374:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(2),a=t(6),o=(t(0),t(466)),p={title:"orderBy",tags:"object,array,intermediate"},c={unversionedId:"orderBy",id:"orderBy",isDocsHomePage:!1,title:"orderBy",description:"TS",source:"@site/docs/orderBy.md",permalink:"/30-seconds-of-typescript/docs/orderBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/orderBy.md",sidebar:"someSidebar",previous:{title:"or",permalink:"/30-seconds-of-typescript/docs/or"},next:{title:"orderByFunc",permalink:"/30-seconds-of-typescript/docs/orderByFunc"}},s=[],i={rightToc:s};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(o.b)("p",null,"Returns a sorted array of objects ordered by properties and orders."),Object(o.b)("p",null,"Uses ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.sort()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"props")," array with a default value of ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", use array destructuring to swap the properties position depending on the order passed.\nIf no ",Object(o.b)("inlineCode",{parentName:"p"},"orders")," array is passed it sort by ",Object(o.b)("inlineCode",{parentName:"p"},"'asc'")," by default."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'const orderBy = <T = AnyObject>(\n  arr: T[],\n  props: (keyof T)[],\n  orders?: ("asc" | "desc")[]\n) =>\n  [...arr].sort((a, b) =>\n    props.reduce((acc, prop, i) => {\n      if (acc === 0) {\n        const [p1, p2] =\n          orders && orders[i] === "desc"\n            ? [b[prop], a[prop]]\n            : [a[prop], b[prop]];\n        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;\n      }\n      return acc;\n    }, 0)\n  );\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'const users = [\n  { name: "fred", age: 48 },\n  { name: "barney", age: 36 },\n  { name: "fred", age: 40 },\n];\norderBy(users, ["name", "age"], ["asc", "desc"]); // [{name: \'barney\', age: 36}, {name: \'fred\', age: 48}, {name: \'fred\', age: 40}]\norderBy(users, ["name", "age"]); // [{name: \'barney\', age: 36}, {name: \'fred\', age: 40}, {name: \'fred\', age: 48}]\n')))}d.isMDXComponent=!0},466:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return y}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),d=function(e){var r=a.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=d(e.components);return a.a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=d(t),b=n,y=l["".concat(p,".").concat(b)]||l[b]||u[b]||o;return t?a.a.createElement(y,c(c({ref:r},i),{},{components:t})):a.a.createElement(y,c({ref:r},i))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<o;i++)p[i]=t[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
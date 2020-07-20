(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{410:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),c=(r(0),r(543)),o={title:"map",tags:"array,function,beginner"},p={id:"map",isDocsHomePage:!1,title:"map",description:"TS",source:"@site/docs/map.md",permalink:"/30-seconds-of-typescript/docs/map",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/map.md",sidebar:"someSidebar",previous:{title:"lowercaseKeys",permalink:"/30-seconds-of-typescript/docs/lowercaseKeys"},next:{title:"mapKeys",permalink:"/30-seconds-of-typescript/docs/mapKeys"}},i=[],s={rightToc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(c.b)("p",null,"Creates a new map with the results of calling a provided function on every value in the calling function."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"Array.isArray()")," to detect array, else destructure array like data(string).\nUse ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to map array of data."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const map = <T = any>(array: Iterable<T>, fn: MapFunc<T>) => {\n  const chars = Array.isArray(array) ? array : [...array];\n  return chars.map((c, i) => fn(c, i, chars));\n};\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'// map array of chars\nmap("lorem ipsum", (c) => c.toUpperCase()).join("")) // "LOREM IPSUM"\n\n// map array of numbers\nmap([1, 2, 3, 4], (c) => c * c)); // [1, 4, 9, 16]\n')))}l.isMDXComponent=!0},543:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,y=u["".concat(o,".").concat(b)]||u[b]||m[b]||c;return r?a.a.createElement(y,p(p({ref:t},s),{},{components:r})):a.a.createElement(y,p({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
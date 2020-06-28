(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{417:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),c=(r(0),r(502)),o={title:"chunk",tags:"array,intermediate"},i={id:"chunk",isDocsHomePage:!1,title:"chunk",description:"TS",source:"@site/docs/chunk.md",permalink:"/30-seconds-of-typescript/docs/chunk",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/chunk.md",sidebar:"someSidebar",previous:{title:"checkProp",permalink:"/30-seconds-of-typescript/docs/checkProp"},next:{title:"chunkIntoN",permalink:"/30-seconds-of-typescript/docs/chunkIntoN"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(c.b)("p",null,"Chunks an array into smaller arrays of a specified size."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"Array.from()")," to create a new array, that fits the number of chunks that will be produced.\nUse ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," to map each element of the new array to a chunk the length of ",Object(c.b)("inlineCode",{parentName:"p"},"size"),".\nIf the original array can't be split evenly, the final chunk will contain the remaining elements."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export const chunk = (arr: any[], size: number) =>\n  Array.from({ length: Math.ceil(arr.length / size) }, (_: any, i: number) =>\n    arr.slice(i * size, i * size + size)\n  );\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]\n")))}l.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
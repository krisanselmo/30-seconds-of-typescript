(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return f}));var n=r(2),o=r(9),a=(r(0),r(540)),c={title:"offset",tags:"array,beginner"},i={id:"offset",isDocsHomePage:!1,title:"offset",description:"JS",source:"@site/docs/offset.md",permalink:"/30-seconds-of-typescript/docs/offset",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/offset.md",sidebar:"someSidebar",previous:{title:"off",permalink:"/30-seconds-of-typescript/docs/off"},next:{title:"omit",permalink:"/30-seconds-of-typescript/docs/omit"}},s=[],p={rightToc:s};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Moves the specified amount of elements to the end of the array."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," twice to get the elements after the specified index and the elements before that.\nUse the spread operator(",Object(a.b)("inlineCode",{parentName:"p"},"..."),") to combine the two into one array.\nIf ",Object(a.b)("inlineCode",{parentName:"p"},"offset")," is negative, the elements will be moved from end to start."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]\noffset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]\n")))}f.isMDXComponent=!0},540:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),f=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=f(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=f(r),b=n,m=l["".concat(c,".").concat(b)]||l[b]||u[b]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
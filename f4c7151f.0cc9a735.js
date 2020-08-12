(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{451:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(2),c=t(6),a=(t(0),t(466)),o={title:"reduceSuccessive",tags:"array,function,intermediate"},i={unversionedId:"reduceSuccessive",id:"reduceSuccessive",isDocsHomePage:!1,title:"reduceSuccessive",description:"JS",source:"@site/docs/reduceSuccessive.md",permalink:"/30-seconds-of-typescript/docs/reduceSuccessive",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/reduceSuccessive.md",sidebar:"someSidebar",previous:{title:"redirect",permalink:"/30-seconds-of-typescript/docs/redirect"},next:{title:"reduceWhich",permalink:"/30-seconds-of-typescript/docs/reduceWhich"}},s=[],u={rightToc:s};function p(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Applies a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to apply the given function to the given array, storing each new result."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const reduceSuccessive = (arr, fn, acc) =>\n  arr.reduce(\n    (res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res),\n    [acc]\n  );\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0); // [0, 1, 3, 6, 10, 15, 21]\n")))}p.isMDXComponent=!0},466:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),p=function(e){var r=c.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return c.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},f=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=n,b=l["".concat(o,".").concat(f)]||l[f]||d[f]||a;return t?c.a.createElement(b,i(i({ref:r},u),{},{components:t})):c.a.createElement(b,i({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);
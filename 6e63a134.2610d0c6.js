(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{307:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),o=(r(0),r(540)),i={title:"geometricProgression",tags:"math,intermediate"},c={id:"geometricProgression",isDocsHomePage:!1,title:"geometricProgression",description:"JS",source:"@site/docs/geometricProgression.md",permalink:"/30-seconds-of-typescript/docs/geometricProgression",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/geometricProgression.md"},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Initializes an array containing the numbers in the specified range where ",Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," are inclusive and the ratio between two terms is ",Object(o.b)("inlineCode",{parentName:"p"},"step"),".\nReturns an error if ",Object(o.b)("inlineCode",{parentName:"p"},"step")," equals ",Object(o.b)("inlineCode",{parentName:"p"},"1"),"."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.from()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Math.log()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Math.floor()")," to create an array of the desired length, ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to fill with the desired values in a range.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"start"),", to use a default value of ",Object(o.b)("inlineCode",{parentName:"p"},"1"),".\nOmit the third argument, ",Object(o.b)("inlineCode",{parentName:"p"},"step"),", to use a default value of ",Object(o.b)("inlineCode",{parentName:"p"},"2"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const geometricProgression = (end, start = 1, step = 2) =>\n  Array.from({\n    length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,\n  }).map((v, i) => start * step ** i);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]\ngeometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]\ngeometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]\n")))}l.isMDXComponent=!0},540:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
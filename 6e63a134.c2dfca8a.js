(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{241:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(479)),i={title:"geometricProgression",tags:"math,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "geometricProgression" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"geometricProgression",id:"geometricProgression",isDocsHomePage:!1,title:"geometricProgression",description:'Implementation of "geometricProgression" in typescript, javascript and deno.',source:"@site/docs/geometricProgression.md",slug:"/geometricProgression",permalink:"/30-seconds-of-typescript/docs/geometricProgression",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/geometricProgression.md",version:"current"},c=[],p={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(a.b)("p",null,"Initializes an array containing the numbers in the specified range where ",Object(a.b)("inlineCode",{parentName:"p"},"start")," and ",Object(a.b)("inlineCode",{parentName:"p"},"end")," are inclusive and the ratio between two terms is ",Object(a.b)("inlineCode",{parentName:"p"},"step"),".\nReturns an error if ",Object(a.b)("inlineCode",{parentName:"p"},"step")," equals ",Object(a.b)("inlineCode",{parentName:"p"},"1"),"."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.from()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Math.log()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Math.floor()")," to create an array of the desired length, ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to fill with the desired values in a range.\nOmit the second argument, ",Object(a.b)("inlineCode",{parentName:"p"},"start"),", to use a default value of ",Object(a.b)("inlineCode",{parentName:"p"},"1"),".\nOmit the third argument, ",Object(a.b)("inlineCode",{parentName:"p"},"step"),", to use a default value of ",Object(a.b)("inlineCode",{parentName:"p"},"2"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const geometricProgression = (end, start = 1, step = 2) =>\n  Array.from({\n    length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,\n  }).map((v, i) => start * step ** i);\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]\ngeometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]\ngeometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]\n")))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return r?o.a.createElement(d,s(s({ref:t},p),{},{components:r})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
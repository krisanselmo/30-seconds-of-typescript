(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{268:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(479)),i={title:"arrayToCSV",tags:"array,string,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "arrayToCSV" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p={unversionedId:"arrayToCSV",id:"arrayToCSV",isDocsHomePage:!1,title:"arrayToCSV",description:'Implementation of "arrayToCSV" in typescript, javascript and deno.',source:"@site/docs/arrayToCSV.md",slug:"/arrayToCSV",permalink:"/30-seconds-of-typescript/docs/arrayToCSV",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/arrayToCSV.md",version:"current",sidebar:"someSidebar",previous:{title:"approximatelyEqual",permalink:"/30-seconds-of-typescript/docs/approximatelyEqual"},next:{title:"arayToHtmlList",permalink:"/30-seconds-of-typescript/docs/arrayToHtmlList"}},c=[],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(o.b)("p",null,"Converts a 2D array to a comma-separated values (CSV) string."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.join(delimiter)")," to combine individual 1D arrays (rows) into strings.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.join('\\n')")," to combine all rows into a CSV string, separating each row with a newline.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"delimiter"),", to use a default delimiter of ",Object(o.b)("inlineCode",{parentName:"p"},","),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const arrayToCSV = (arr: (string | number)[][], delimiter = ",") =>\n  arr\n    .map((v) =>\n      v\n        .map((x) => (typeof x === "string" ? `"${x.replace(/"/g, \'""\')}"` : x))\n        .join(delimiter)\n    )\n    .join("\\n");\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'arrayToCSV([\n  ["a", "b"],\n  ["c", "d"],\n]); // \'"a","b"\\n"c","d"\'\narrayToCSV(\n  [\n    ["a", "b"],\n    ["c", "d"],\n  ],\n  ";"\n); // \'"a";"b"\\n"c";"d"\'\narrayToCSV([\n  ["a", \'"b" great\'],\n  ["c", 3.1415],\n]); // \'"a","""b"" great"\\n"c",3.1415\'\n')))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?a.a.createElement(b,p(p({ref:t},s),{},{components:r})):a.a.createElement(b,p({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
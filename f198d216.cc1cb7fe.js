(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{462:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(479)),i={title:"sortedIndex",tags:"array,math,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "sortedIndex" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"sortedIndex",id:"sortedIndex",isDocsHomePage:!1,title:"sortedIndex",description:'Implementation of "sortedIndex" in typescript, javascript and deno.',source:"@site/docs/sortedIndex.md",slug:"/sortedIndex",permalink:"/30-seconds-of-typescript/docs/sortedIndex",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/sortedIndex.md",version:"current",sidebar:"someSidebar",previous:{title:"sortCharactersInString",permalink:"/30-seconds-of-typescript/docs/sortCharactersInString"},next:{title:"sortedIndexBy",permalink:"/30-seconds-of-typescript/docs/sortedIndexBy"}},c=[],p={toc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(a.b)("p",null,"Returns the lowest index at which value should be inserted into array in order to maintain its sort order."),Object(a.b)("p",null,"Check if the array is sorted in descending order (loosely).\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.findIndex()")," to find the appropriate index where the element should be inserted."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const sortedIndex = (arr, n) => {\n  const isDescending = arr[0] > arr[arr.length - 1];\n  const index = arr.findIndex((el) => (isDescending ? n >= el : n <= el));\n  return index === -1 ? arr.length : index;\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"sortedIndex([5, 3, 2, 1], 4); // 1\nsortedIndex([30, 50], 40); // 1\n")))}d.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(r),m=n,b=l["".concat(i,".").concat(m)]||l[m]||u[m]||a;return r?o.a.createElement(b,s(s({ref:t},p),{},{components:r})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
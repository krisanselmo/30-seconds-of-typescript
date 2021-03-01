(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{426:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(479)),i={title:"isContainedIn",tags:"array,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isContainedIn" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"isContainedIn",id:"isContainedIn",isDocsHomePage:!1,title:"isContainedIn",description:'Implementation of "isContainedIn" in typescript, javascript and deno.',source:"@site/docs/isContainedIn.md",slug:"/isContainedIn",permalink:"/30-seconds-of-typescript/docs/isContainedIn",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isContainedIn.md",version:"current",sidebar:"someSidebar",previous:{title:"isBrowser",permalink:"/30-seconds-of-typescript/docs/isBrowser"},next:{title:"isEmpty",permalink:"/30-seconds-of-typescript/docs/isEmpty"}},c=[],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the elements of the first array are contained in the second one regardless of order, ",Object(o.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(o.b)("p",null,"Use a ",Object(o.b)("inlineCode",{parentName:"p"},"for...of")," loop over a ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," created from the first array.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.some()")," to check if all distinct values are contained in the second array, use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to compare the number of occurrences of each distinct value in both arrays.\nReturn ",Object(o.b)("inlineCode",{parentName:"p"},"false")," if the count of any element is greater in the first array than the second one, ",Object(o.b)("inlineCode",{parentName:"p"},"true")," otherwise."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const isContainedIn = (a, b) => {\n  for (const v of new Set(a)) {\n    if (\n      !b.some((e) => e === v) ||\n      a.filter((e) => e === v).length > b.filter((e) => e === v).length\n    )\n      return false;\n  }\n  return true;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"isContainedIn([1, 4], [2, 4, 1]); // true\n")))}l.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(b,s(s({ref:t},p),{},{components:n})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(479)),i={title:"toSafeInteger",tags:"math,beginner",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "toSafeInteger" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"toSafeInteger",id:"toSafeInteger",isDocsHomePage:!1,title:"toSafeInteger",description:'Implementation of "toSafeInteger" in typescript, javascript and deno.',source:"@site/docs/toSafeInteger.md",slug:"/toSafeInteger",permalink:"/30-seconds-of-typescript/docs/toSafeInteger",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/toSafeInteger.md",version:"current",sidebar:"someSidebar",previous:{title:"toPairs",permalink:"/30-seconds-of-typescript/docs/toPairs"},next:{title:"toSnakeCase",permalink:"/30-seconds-of-typescript/docs/toSnakeCase"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Converts a value to a safe integer."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Math.max()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Math.min()")," to find the closest safe value.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Math.round()")," to convert to an integer."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const toSafeInteger = (num) =>\n  Math.round(\n    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)\n  );\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'toSafeInteger("3.2"); // 3\ntoSafeInteger(Infinity); // 9007199254740991\n')))}u.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,b=l["".concat(i,".").concat(m)]||l[m]||f[m]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
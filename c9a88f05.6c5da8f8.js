(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{398:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(479)),o={title:"isWritableStream",tags:"node,type,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isWritableStream" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"isWritableStream",id:"isWritableStream",isDocsHomePage:!1,title:"isWritableStream",description:'Implementation of "isWritableStream" in typescript, javascript and deno.',source:"@site/docs/isWritableStream.md",slug:"/isWritableStream",permalink:"/30-seconds-of-typescript/docs/isWritableStream",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isWritableStream.md",version:"current"},p=[],l={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(i.b)("p",null,"Checks if the given argument is a writable stream."),Object(i.b)("p",null,"Check if the value is different from ",Object(i.b)("inlineCode",{parentName:"p"},"null"),", use ",Object(i.b)("inlineCode",{parentName:"p"},"typeof")," to check if the value is of type ",Object(i.b)("inlineCode",{parentName:"p"},"object")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"pipe")," property is of type ",Object(i.b)("inlineCode",{parentName:"p"},"function"),".\nAdditionally check if the ",Object(i.b)("inlineCode",{parentName:"p"},"typeof")," the ",Object(i.b)("inlineCode",{parentName:"p"},"_write")," and ",Object(i.b)("inlineCode",{parentName:"p"},"_writableState")," properties are ",Object(i.b)("inlineCode",{parentName:"p"},"function")," and ",Object(i.b)("inlineCode",{parentName:"p"},"object")," respectively."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const isWritableStream = (val) =>\n  val !== null &&\n  typeof val === "object" &&\n  typeof val.pipe === "function" &&\n  typeof val._write === "function" &&\n  typeof val._writableState === "object";\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nisWritableStream(fs.createWriteStream("test.txt")); // true\n')))}s.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
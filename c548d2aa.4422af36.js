(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{385:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(479)),i={title:"isReadableStream",tags:"node,type,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isReadableStream" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"isReadableStream",id:"isReadableStream",isDocsHomePage:!1,title:"isReadableStream",description:'Implementation of "isReadableStream" in typescript, javascript and deno.',source:"@site/docs/isReadableStream.md",slug:"/isReadableStream",permalink:"/30-seconds-of-typescript/docs/isReadableStream",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isReadableStream.md",version:"current"},p=[],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Checks if the given argument is a readable stream."),Object(o.b)("p",null,"Check if the value is different from ",Object(o.b)("inlineCode",{parentName:"p"},"null"),", use ",Object(o.b)("inlineCode",{parentName:"p"},"typeof")," to check if the value is of type ",Object(o.b)("inlineCode",{parentName:"p"},"object")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"pipe")," property is of type ",Object(o.b)("inlineCode",{parentName:"p"},"function"),".\nAdditionally check if the ",Object(o.b)("inlineCode",{parentName:"p"},"typeof")," the ",Object(o.b)("inlineCode",{parentName:"p"},"_read")," and ",Object(o.b)("inlineCode",{parentName:"p"},"_readableState")," properties are ",Object(o.b)("inlineCode",{parentName:"p"},"function")," and ",Object(o.b)("inlineCode",{parentName:"p"},"object")," respectively."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const isReadableStream = (val) =>\n  val !== null &&\n  typeof val === "object" &&\n  typeof val.pipe === "function" &&\n  typeof val._read === "function" &&\n  typeof val._readableState === "object";\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nisReadableStream(fs.createReadStream("test.txt")); // true\n')))}s.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
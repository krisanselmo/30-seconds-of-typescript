(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{466:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return r?o.a.createElement(d,i(i({ref:t},p),{},{components:r})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(466)),c={title:"tomorrow",tags:"date,intermediate"},i={unversionedId:"tomorrow",id:"tomorrow",isDocsHomePage:!1,title:"tomorrow",description:"JS",source:"@site/docs/tomorrow.md",permalink:"/30-seconds-of-typescript/docs/tomorrow",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/tomorrow.md",sidebar:"someSidebar",previous:{title:"toggleClass",permalink:"/30-seconds-of-typescript/docs/toggleClass"},next:{title:"transform",permalink:"/30-seconds-of-typescript/docs/transform"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Results in a string representation of tomorrow's date."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"new Date()")," to get the current date, increment by one using ",Object(a.b)("inlineCode",{parentName:"p"},"Date.getDate()")," and set the value to the result using ",Object(a.b)("inlineCode",{parentName:"p"},"Date.setDate()"),".\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Date.prototype.toISOString()")," to return a string in ",Object(a.b)("inlineCode",{parentName:"p"},"yyyy-mm-dd")," format."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const tomorrow = () => {\n  let t = new Date();\n  t.setDate(t.getDate() + 1);\n  return t.toISOString().split("T")[0];\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tomorrow(); // 2018-10-19 (if current date is 2018-10-18)\n")))}l.isMDXComponent=!0}}]);
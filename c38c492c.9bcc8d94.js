(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{447:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(9),i=(r(0),r(543)),a={title:"isBrowser",tags:"browser,intermediate"},s={id:"isBrowser",isDocsHomePage:!1,title:"isBrowser",description:"TS",source:"@site/docs/isBrowser.md",permalink:"/30-seconds-of-typescript/docs/isBrowser",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isBrowser.md",sidebar:"someSidebar",previous:{title:"isBeforeDate",permalink:"/30-seconds-of-typescript/docs/isBeforeDate"},next:{title:"isContainedIn",permalink:"/30-seconds-of-typescript/docs/isContainedIn"}},c=[],p={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(i.b)("p",null,"Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"typeof")," values of both ",Object(i.b)("inlineCode",{parentName:"p"},"window")," and ",Object(i.b)("inlineCode",{parentName:"p"},"document")," (globals usually only available in a browser environment unless they were explicitly defined), which will return ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if one of them is ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"typeof")," allows globals to be checked for existence without throwing a ",Object(i.b)("inlineCode",{parentName:"p"},"ReferenceError"),".\nIf both of them are not ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),", then the current environment is assumed to be a browser."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'const isBrowser = () => ![typeof window, typeof document].includes("undefined");\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"isBrowser(); // true (browser)\nisBrowser(); // false (Node)\n")))}l.isMDXComponent=!0},543:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return r?o.a.createElement(f,s(s({ref:t},p),{},{components:r})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
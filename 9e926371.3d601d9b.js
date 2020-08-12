(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{311:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var i=r(2),n=r(6),a=(r(0),r(466)),o={title:"isPrimitive",tags:"type,function,array,string,intermediate"},s={unversionedId:"isPrimitive",id:"isPrimitive",isDocsHomePage:!1,title:"isPrimitive",description:"TS",source:"@site/docs/isPrimitive.md",permalink:"/30-seconds-of-typescript/docs/isPrimitive",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isPrimitive.md",sidebar:"someSidebar",previous:{title:"isPlainObject",permalink:"/30-seconds-of-typescript/docs/isPlainObject"},next:{title:"isSameDate",permalink:"/30-seconds-of-typescript/docs/isSameDate"}},c=[],p={rightToc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(a.b)("p",null,"Returns a boolean determining if the passed value is primitive or not."),Object(a.b)("p",null,"Create an object from ",Object(a.b)("inlineCode",{parentName:"p"},"val")," and compare it with ",Object(a.b)("inlineCode",{parentName:"p"},"val")," to determine if the passed value is primitive (i.e. not equal to the created object)."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const isPrimitive = (val) => Object(val) !== val;\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'isPrimitive(null); // true\nisPrimitive(undefined); // true\nisPrimitive(50); // true\nisPrimitive("Hello!"); // true\nisPrimitive(false); // true\nisPrimitive(Symbol()); // true\nisPrimitive([]); // false\nisPrimitive({}); // false\n')))}l.isMDXComponent=!0},466:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=i,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||a;return r?n.a.createElement(d,s(s({ref:t},p),{},{components:r})):n.a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
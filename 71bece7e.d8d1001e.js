(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{277:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(6),i=(t(0),t(502)),o={title:"isArrayLike",tags:"type,array,intermediate"},c={id:"isArrayLike",isDocsHomePage:!1,title:"isArrayLike",description:"Checks if the provided argument is array-like (i.e. is iterable).",source:"@site/docs/isArrayLike.md",permalink:"/30-seconds-of-typescript/docs/isArrayLike",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isArrayLike.md",sidebar:"someSidebar",previous:{title:"isAnagram",permalink:"/30-seconds-of-typescript/docs/isAnagram"},next:{title:"isBeforeDate",permalink:"/30-seconds-of-typescript/docs/isBeforeDate"}},s=[],p={rightToc:s};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Checks if the provided argument is array-like (i.e. is iterable)."),Object(i.b)("p",null,"Check if the provided argument is not ",Object(i.b)("inlineCode",{parentName:"p"},"null")," and that its ",Object(i.b)("inlineCode",{parentName:"p"},"Symbol.iterator")," property is a function."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const isArrayLike = (obj) =>\n  obj != null && typeof obj[Symbol.iterator] === "function";\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'isArrayLike([1, 2, 3]); // true\nisArrayLike(document.querySelectorAll(".className")); // true\nisArrayLike("abc"); // true\nisArrayLike(null); // false\n')))}l.isMDXComponent=!0},502:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return y}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,y=u["".concat(o,".").concat(b)]||u[b]||f[b]||i;return t?a.a.createElement(y,c(c({ref:r},p),{},{components:t})):a.a.createElement(y,c({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
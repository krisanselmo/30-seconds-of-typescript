(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{374:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(502)),c={title:"toggleClass",tags:"browser,beginner"},s={id:"toggleClass",isDocsHomePage:!1,title:"toggleClass",description:"Toggles a class for an HTML element.",source:"@site/docs/toggleClass.md",permalink:"/30-seconds-of-typescript/docs/toggleClass",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/toggleClass.md",sidebar:"someSidebar",previous:{title:"toTitleCase",permalink:"/30-seconds-of-typescript/docs/toTitleCase"},next:{title:"tomorrow",permalink:"/30-seconds-of-typescript/docs/tomorrow"}},l=[],i={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Toggles a class for an HTML element."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"element.classList.toggle()")," to toggle the specified class for the element."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const toggleClass = (el, className) => el.classList.toggle(className);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'toggleClass(document.querySelector("p.special"), "special");\n// The paragraph will not have the \'special\' class anymore\n')))}p.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?o.a.createElement(g,s(s({ref:t},i),{},{components:r})):o.a.createElement(g,s({ref:t},i))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
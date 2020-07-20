(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{508:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(0),n(543)),c={title:"unfold",tags:"function,array,intermediate"},i={id:"unfold",isDocsHomePage:!1,title:"unfold",description:"JS",source:"@site/docs/unfold.md",permalink:"/30-seconds-of-typescript/docs/unfold",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/unfold.md",sidebar:"someSidebar",previous:{title:"unescapeHTML",permalink:"/30-seconds-of-typescript/docs/unescapeHTML"},next:{title:"union",permalink:"/30-seconds-of-typescript/docs/union"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Builds an array, using an iterator function and an initial seed value."),Object(o.b)("p",null,"Use a ",Object(o.b)("inlineCode",{parentName:"p"},"while")," loop and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to call the function repeatedly until it returns ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".\nThe iterator function accepts one argument (",Object(o.b)("inlineCode",{parentName:"p"},"seed"),") and must always return an array with two elements (","[",Object(o.b)("inlineCode",{parentName:"p"},"value"),", ",Object(o.b)("inlineCode",{parentName:"p"},"nextSeed"),"]",") or ",Object(o.b)("inlineCode",{parentName:"p"},"false")," to terminate."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const unfold = (fn, seed) => {\n  let result = [],\n    val = [null, seed];\n  while ((val = fn(val[1]))) result.push(val[0]);\n  return result;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var f = (n) => (n > 50 ? false : [-n, n + 10]);\nunfold(f, 10); // [-10, -20, -30, -40, -50]\n")))}s.isMDXComponent=!0},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
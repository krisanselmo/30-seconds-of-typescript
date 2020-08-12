(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{442:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(466)),l={title:"pullBy",tags:"array,function,advanced"},p={unversionedId:"pullBy",id:"pullBy",isDocsHomePage:!1,title:"pullBy",description:"JS",source:"@site/docs/pullBy.md",permalink:"/30-seconds-of-typescript/docs/pullBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/pullBy.md",sidebar:"someSidebar",previous:{title:"pullAtValue",permalink:"/30-seconds-of-typescript/docs/pullAtValue"},next:{title:"radsToDegrees",permalink:"/30-seconds-of-typescript/docs/radsToDegrees"}},i=[],c={rightToc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Mutates the original array to filter out the values specified, based on a given iterator function."),Object(o.b)("p",null,"Check if the last argument provided in a function.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to apply the iterator function ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," to all array elements.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," to pull out the values that are not needed.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.length = 0")," to mutate the passed in an array by resetting it's length to zero and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to re-populate it with only the pulled values."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const pullBy = (arr, ...args) => {\n  const length = args.length;\n  let fn = length > 1 ? args[length - 1] : undefined;\n  fn = typeof fn == "function" ? (args.pop(), fn) : undefined;\n  let argState = (Array.isArray(args[0]) ? args[0] : args).map((val) =>\n    fn(val)\n  );\n  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));\n  arr.length = 0;\n  pulled.forEach((v) => arr.push(v));\n};\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];\npullBy(myArray, [{ x: 1 }, { x: 3 }], (o) => o.x); // myArray = [{ x: 2 }]\n")))}s.isMDXComponent=!0},466:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?a.a.createElement(y,p(p({ref:t},c),{},{components:r})):a.a.createElement(y,p({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
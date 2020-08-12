(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),c=(n(0),n(466)),o={title:"memoize",tags:"function,advanced"},i={unversionedId:"memoize",id:"memoize",isDocsHomePage:!1,title:"memoize",description:"TS",source:"@site/docs/memoize.md",permalink:"/30-seconds-of-typescript/docs/memoize",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/memoize.md",sidebar:"someSidebar",previous:{title:"median",permalink:"/30-seconds-of-typescript/docs/median"},next:{title:"merge",permalink:"/30-seconds-of-typescript/docs/merge"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(c.b)("p",null,"Returns the memoized (cached) function."),Object(c.b)("p",null,"Create an empty cache by instantiating a new ",Object(c.b)("inlineCode",{parentName:"p"},"Map")," object.\nReturn a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The ",Object(c.b)("inlineCode",{parentName:"p"},"function")," keyword must be used in order to allow the memoized function to have its ",Object(c.b)("inlineCode",{parentName:"p"},"this")," context changed if necessary.\nAllow access to the ",Object(c.b)("inlineCode",{parentName:"p"},"cache")," by setting it as a property on the returned function."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const memoize = <T = any>(fn: Func<T>) => {\n  const cache = new Map();\n  const cached = function (this: any, val: T) {\n    return cache.has(val)\n      ? cache.get(val)\n      : cache.set(val, fn.call(this, val)) && cache.get(val);\n  };\n  cached.cache = cache;\n  return cached;\n};\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"// See the `factorial` snippet.\nconst factorialCache = memoize(factorial);\nfactorialCache(6); // 720, little bit slow\nfactorialCache(6); // 720, slightly faster\n\n// To get all cache\nconsole.log(factorialCache.cache);\n")))}l.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(o,".").concat(f)]||u[f]||m[f]||c;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
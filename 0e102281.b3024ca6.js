(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,b=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return r?o.a.createElement(b,p(p({ref:t},c),{},{components:r})):o.a.createElement(b,p({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(479)),i={title:"primes",tags:"math,array,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "primes" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p={unversionedId:"primes",id:"primes",isDocsHomePage:!1,title:"primes",description:'Implementation of "primes" in typescript, javascript and deno.',source:"@site/docs/primes.md",slug:"/primes",permalink:"/30-seconds-of-typescript/docs/primes",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/primes.md",version:"current",sidebar:"someSidebar",previous:{title:"prettyBytes|prettyBytesT",permalink:"/30-seconds-of-typescript/docs/prettyBytes"},next:{title:"promisify",permalink:"/30-seconds-of-typescript/docs/promisify"}},s=[],c={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(a.b)("p",null,"Generates primes up to a given number, using the Sieve of Eratosthenes."),Object(a.b)("p",null,"Generate an array from ",Object(a.b)("inlineCode",{parentName:"p"},"2")," to the given number. Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to filter out the values divisible by any number from ",Object(a.b)("inlineCode",{parentName:"p"},"2")," to the square root of the provided number."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const primes = (num) => {\n  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),\n    sqroot = Math.floor(Math.sqrt(num)),\n    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);\n  numsTillSqroot.forEach(\n    (x) => (arr = arr.filter((y) => y % x !== 0 || y === x))\n  );\n  return arr;\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"primes(10); // [2,3,5,7]\n")))}l.isMDXComponent=!0}}]);
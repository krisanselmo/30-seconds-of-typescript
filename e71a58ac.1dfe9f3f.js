(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{474:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(499)),i={title:"formatDuration",tags:"date,math,string,intermediate"},c={id:"formatDuration",isDocsHomePage:!1,title:"formatDuration",description:"TS",source:"@site/docs/formatDuration.md",permalink:"/30-seconds-of-typescript/docs/formatDuration",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/formatDuration.md",sidebar:"someSidebar",previous:{title:"formToObject",permalink:"/30-seconds-of-typescript/docs/formToObject"},next:{title:"frequencies",permalink:"/30-seconds-of-typescript/docs/frequencies"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(o.b)("p",null,"Returns the human readable format of the given number of milliseconds."),Object(o.b)("p",null,"Divide ",Object(o.b)("inlineCode",{parentName:"p"},"ms")," with the appropriate values to obtain the appropriate values for ",Object(o.b)("inlineCode",{parentName:"p"},"day"),", ",Object(o.b)("inlineCode",{parentName:"p"},"hour"),", ",Object(o.b)("inlineCode",{parentName:"p"},"minute"),", ",Object(o.b)("inlineCode",{parentName:"p"},"second")," and ",Object(o.b)("inlineCode",{parentName:"p"},"millisecond"),".\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Object.entries()")," with ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to keep only non-zero values.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to create the string for each value, pluralizing appropriately.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.join(', ')")," to combine the values into a string."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const formatDuration = (ms: number) => {\n  ms = Math.abs(ms);\n  const time = {\n    day: Math.floor(ms / 86400000),\n    hour: Math.floor(ms / 3600000) % 24,\n    minute: Math.floor(ms / 60000) % 60,\n    second: Math.floor(ms / 1000) % 60,\n    millisecond: Math.floor(ms) % 1000,\n  };\n  return Object.entries(time)\n    .filter((val) => val[1] !== 0)\n    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)\n    .join(", ");\n};\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"formatDuration(1001); // '1 second, 1 millisecond'\nformatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'\n")))}l.isMDXComponent=!0},499:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
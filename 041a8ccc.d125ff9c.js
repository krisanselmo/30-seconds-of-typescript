(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(542)),i={title:"prettyBytes",tags:"string,math,advanced"},c={id:"prettyBytes",isDocsHomePage:!1,title:"prettyBytes",description:"JS",source:"@site/docs/prettyBytes.md",permalink:"/30-seconds-of-typescript/docs/prettyBytes",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/prettyBytes.md",sidebar:"someSidebar",previous:{title:"prefix",permalink:"/30-seconds-of-typescript/docs/prefix"},next:{title:"primes",permalink:"/30-seconds-of-typescript/docs/primes"}},p=[],s={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Converts a number in bytes to a human-readable string."),Object(o.b)("p",null,"Use an array dictionary of units to be accessed based on the exponent.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Number.toPrecision()")," to truncate the number to a certain number of digits.\nReturn the prettified string by building it up, taking into account the supplied options and whether it is negative or not.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"precision"),", to use a default precision of ",Object(o.b)("inlineCode",{parentName:"p"},"3")," digits.\nOmit the third argument, ",Object(o.b)("inlineCode",{parentName:"p"},"addSpace"),", to add space between the number and unit by default."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const prettyBytes = (num, precision = 3, addSpace = true) => {\n  const UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];\n  if (Math.abs(num) < 1) return num + (addSpace ? " " : "") + UNITS[0];\n  const exponent = Math.min(\n    Math.floor(Math.log10(num < 0 ? -num : num) / 3),\n    UNITS.length - 1\n  );\n  const n = Number(\n    ((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision)\n  );\n  return (num < 0 ? "-" : "") + n + (addSpace ? " " : "") + UNITS[exponent];\n};\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'prettyBytes(1000); // "1 KB"\nprettyBytes(-27145424323.5821, 5); // "-27.145 GB"\nprettyBytes(123456789, 3, false); // "123MB"\n')))}u.isMDXComponent=!0},542:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
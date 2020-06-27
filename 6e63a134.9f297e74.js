(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{270:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(502)),i={title:"geometricProgression",tags:"math,intermediate"},c={id:"geometricProgression",isDocsHomePage:!1,title:"geometricProgression",description:"Initializes an array containing the numbers in the specified range where start and end are inclusive and the ratio between two terms is step.",source:"@site/docs/geometricProgression.md",permalink:"/30-seconds-of-typescript/docs/geometricProgression",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/geometricProgression.md",sidebar:"someSidebar",previous:{title:"gcd",permalink:"/30-seconds-of-typescript/docs/gcd"},next:{title:"get",permalink:"/30-seconds-of-typescript/docs/get"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Initializes an array containing the numbers in the specified range where ",Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," are inclusive and the ratio between two terms is ",Object(o.b)("inlineCode",{parentName:"p"},"step"),".\nReturns an error if ",Object(o.b)("inlineCode",{parentName:"p"},"step")," equals ",Object(o.b)("inlineCode",{parentName:"p"},"1"),"."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.from()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Math.log()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Math.floor()")," to create an array of the desired length, ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to fill with the desired values in a range.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"start"),", to use a default value of ",Object(o.b)("inlineCode",{parentName:"p"},"1"),".\nOmit the third argument, ",Object(o.b)("inlineCode",{parentName:"p"},"step"),", to use a default value of ",Object(o.b)("inlineCode",{parentName:"p"},"2"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const geometricProgression = (end, start = 1, step = 2) =>\n  Array.from({\n    length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,\n  }).map((v, i) => start * step ** i);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]\ngeometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]\ngeometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]\n")))}l.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
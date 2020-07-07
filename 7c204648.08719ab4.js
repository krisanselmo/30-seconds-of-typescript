(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(499)),o={title:"luhnCheck",tags:"math,advanced"},c={id:"luhnCheck",isDocsHomePage:!1,title:"luhnCheck",description:"JS",source:"@site/docs/luhnCheck.md",permalink:"/30-seconds-of-typescript/docs/luhnCheck",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/luhnCheck.md"},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(i.b)("p",null,"Implementation of the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Luhn_algorithm"}),"Luhn Algorithm")," used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"String.prototype.split('')"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.reverse()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," in combination with ",Object(i.b)("inlineCode",{parentName:"p"},"parseInt()")," to obtain an array of digits.\nUse ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.splice(0,1)")," to obtain the last digit.\nUse ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to implement the Luhn Algorithm.\nReturn ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if ",Object(i.b)("inlineCode",{parentName:"p"},"sum")," is divisible by ",Object(i.b)("inlineCode",{parentName:"p"},"10"),", ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const luhnCheck = (num) => {\n  let arr = (num + "")\n    .split("")\n    .reverse()\n    .map((x) => parseInt(x));\n  let lastDigit = arr.splice(0, 1)[0];\n  let sum = arr.reduce(\n    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),\n    0\n  );\n  sum += lastDigit;\n  return sum % 10 === 0;\n};\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'luhnCheck("4485275742308327"); // true\nluhnCheck(6011329933655299); //  false\nluhnCheck(123456789); // false\n')))}s.isMDXComponent=!0},499:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
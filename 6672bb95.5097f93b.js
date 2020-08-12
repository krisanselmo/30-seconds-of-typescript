(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(466)),c={title:"counter",tags:"browser,advanced"},i={unversionedId:"counter",id:"counter",isDocsHomePage:!1,title:"counter",description:"JS",source:"@site/docs/counter.md",permalink:"/30-seconds-of-typescript/docs/counter",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/counter.md",sidebar:"someSidebar",previous:{title:"countOccurrences",permalink:"/30-seconds-of-typescript/docs/countOccurrences"},next:{title:"createDirIfNotExists",permalink:"/30-seconds-of-typescript/docs/createDirIfNotExists"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}))),Object(o.b)("p",null,"Creates a counter with the specified range, step and duration for the specified selector."),Object(o.b)("p",null,"Check if ",Object(o.b)("inlineCode",{parentName:"p"},"step")," has the proper sign and change it accordingly.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"setInterval()")," in combination with ",Object(o.b)("inlineCode",{parentName:"p"},"Math.abs()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Math.floor()")," to calculate the time between each new text draw.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"document.querySelector().innerHTML")," to update the value of the selected element.\nOmit the fourth parameter, ",Object(o.b)("inlineCode",{parentName:"p"},"step"),", to use a default step of ",Object(o.b)("inlineCode",{parentName:"p"},"1"),".\nOmit the fifth parameter, ",Object(o.b)("inlineCode",{parentName:"p"},"duration"),", to use a default duration of ",Object(o.b)("inlineCode",{parentName:"p"},"2000"),"ms."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const counter = (selector, start, end, step = 1, duration = 2000) => {\n  let current = start,\n    _step = (end - start) * step < 0 ? -step : step,\n    timer = setInterval(() => {\n      current += _step;\n      document.querySelector(selector).innerHTML = current;\n      if (current >= end) document.querySelector(selector).innerHTML = end;\n      if (current >= end) clearInterval(timer);\n    }, Math.abs(Math.floor(duration / (end - start))));\n  return timer;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'counter("#my-id", 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"\n')))}u.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
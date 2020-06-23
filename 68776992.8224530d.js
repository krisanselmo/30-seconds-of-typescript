(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{262:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),c=(n(0),n(503)),o={title:"fibonacci",tags:"math,array,beginner"},i={id:"fibonacci",isDocsHomePage:!1,title:"fibonacci",description:"Generates an array, containing the Fibonacci sequence, up until the nth term.",source:"@site/docs/fibonacci.md",permalink:"/docs/fibonacci",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/fibonacci.md"},p=[],u={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Generates an array, containing the Fibonacci sequence, up until the nth term."),Object(c.b)("p",null,"Create an empty array of the specific length, initializing the first two values (",Object(c.b)("inlineCode",{parentName:"p"},"0")," and ",Object(c.b)("inlineCode",{parentName:"p"},"1"),").\nUse ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to add values into the array, using the sum of the last two values, except for the first two."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fibonacci = n =>\n  Array.from({ length: n }).reduce(\n    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),\n    []\n  );\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"fibonacci(6); // [0, 1, 1, 2, 3, 5]\n")))}l.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,m=s["".concat(o,".").concat(b)]||s[b]||f[b]||c;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
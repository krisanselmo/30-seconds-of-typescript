(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{340:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(502)),i={title:"toOrdinalSuffix",tags:"math,intermediate"},c={id:"toOrdinalSuffix",isDocsHomePage:!1,title:"toOrdinalSuffix",description:"Adds an ordinal suffix to a number.",source:"@site/docs/toOrdinalSuffix.md",permalink:"/30-seconds-of-typescript/docs/toOrdinalSuffix",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/toOrdinalSuffix.md",sidebar:"someSidebar",previous:{title:"toKebabCase",permalink:"/30-seconds-of-typescript/docs/toKebabCase"},next:{title:"toPairs",permalink:"/30-seconds-of-typescript/docs/toPairs"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Adds an ordinal suffix to a number."),Object(a.b)("p",null,"Use the modulo operator (",Object(a.b)("inlineCode",{parentName:"p"},"%"),") to find values of single and tens digits.\nFind which ordinal pattern digits match.\nIf digit is found in teens pattern, use teens ordinal."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const toOrdinalSuffix = (num) => {\n  const int = parseInt(num),\n    digits = [int % 10, int % 100],\n    ordinals = ["st", "nd", "rd", "th"],\n    oPattern = [1, 2, 3, 4],\n    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];\n  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])\n    ? int + ordinals[digits[0] - 1]\n    : int + ordinals[3];\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'toOrdinalSuffix("123"); // "123rd"\n')))}l.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
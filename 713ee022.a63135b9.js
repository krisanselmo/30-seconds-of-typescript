(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),i=(n(0),n(502)),a={title:"findKey",tags:"object,function,intermediate"},c={id:"findKey",isDocsHomePage:!1,title:"findKey",description:"Returns the first key that satisfies the provided testing function. Otherwise undefined is returned.",source:"@site/docs/findKey.md",permalink:"/30-seconds-of-typescript/docs/findKey",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/findKey.md",sidebar:"someSidebar",previous:{title:"filterNonUniqueBy",permalink:"/30-seconds-of-typescript/docs/filterNonUniqueBy"},next:{title:"findLast",permalink:"/30-seconds-of-typescript/docs/findLast"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Returns the first key that satisfies the provided testing function. Otherwise ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," is returned."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"Object.keys(obj)")," to get all the properties of the object, ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.find()")," to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const findKey = (obj, fn) =>\n  Object.keys(obj).find((key) => fn(obj[key], key, obj));\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"findKey(\n  {\n    barney: { age: 36, active: true },\n    fred: { age: 40, active: false },\n    pebbles: { age: 1, active: true },\n  },\n  (o) => o[\"active\"]\n); // 'barney'\n")))}u.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,b=f["".concat(a,".").concat(d)]||f[d]||l[d]||i;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
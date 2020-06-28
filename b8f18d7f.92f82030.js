(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{398:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(6),o=(r(0),r(502)),a={title:"is",tags:"type,array,regexp,beginner"},c={id:"is",isDocsHomePage:!1,title:"is",description:"Checks if the provided value is of the specified type.",source:"@site/docs/is.md",permalink:"/30-seconds-of-typescript/docs/is",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/is.md",sidebar:"someSidebar",previous:{title:"invertKeyValues",permalink:"/30-seconds-of-typescript/docs/invertKeyValues"},next:{title:"isAbsoluteURL",permalink:"/30-seconds-of-typescript/docs/isAbsoluteURL"}},p=[],s={rightToc:p};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Checks if the provided value is of the specified type."),Object(o.b)("p",null,"Ensure the value is not ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," or ",Object(o.b)("inlineCode",{parentName:"p"},"null")," using ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()"),", and compare the ",Object(o.b)("inlineCode",{parentName:"p"},"constructor")," property on the value with ",Object(o.b)("inlineCode",{parentName:"p"},"type")," to check if the provided value is of the specified ",Object(o.b)("inlineCode",{parentName:"p"},"type"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const is = (type, val) => ![, null].includes(val) && val.constructor === type;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'is(Array, [1]); // true\nis(ArrayBuffer, new ArrayBuffer()); // true\nis(Map, new Map()); // true\nis(RegExp, /./g); // true\nis(Set, new Set()); // true\nis(WeakMap, new WeakMap()); // true\nis(WeakSet, new WeakSet()); // true\nis(String, ""); // true\nis(String, new String("")); // true\nis(Number, 1); // true\nis(Number, new Number(1)); // true\nis(Boolean, true); // true\nis(Boolean, new Boolean(true)); // true\n')))}u.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,d=l["".concat(a,".").concat(b)]||l[b]||f[b]||o;return r?i.a.createElement(d,c(c({ref:t},s),{},{components:r})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{361:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),c=n(6),o=(n(0),n(502)),a={title:"isPlainObject",tags:"type,object,intermediate"},i={id:"isPlainObject",isDocsHomePage:!1,title:"isPlainObject",description:"Checks if the provided value is an object created by the Object constructor.",source:"@site/docs/isPlainObject.md",permalink:"/30-seconds-of-typescript/docs/isPlainObject",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isPlainObject.md",sidebar:"someSidebar",previous:{title:"isOdd",permalink:"/30-seconds-of-typescript/docs/isOdd"},next:{title:"isPowerOfTwo",permalink:"/30-seconds-of-typescript/docs/isPowerOfTwo"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Checks if the provided value is an object created by the Object constructor."),Object(o.b)("p",null,"Check if the provided value is truthy, use ",Object(o.b)("inlineCode",{parentName:"p"},"typeof")," to check if it is an object and ",Object(o.b)("inlineCode",{parentName:"p"},"Object.constructor")," to make sure the constructor is equal to ",Object(o.b)("inlineCode",{parentName:"p"},"Object"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const isPlainObject = (val) =>\n  !!val && typeof val === "object" && val.constructor === Object;\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"isPlainObject({ a: 1 }); // true\nisPlainObject(new Map()); // false\n")))}l.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?c.a.createElement(f,i(i({ref:t},p),{},{components:n})):c.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
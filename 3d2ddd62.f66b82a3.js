(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(479)),a={title:"isPromiseLike",tags:"type,function,promise,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isPromiseLike" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"isPromiseLike",id:"isPromiseLike",isDocsHomePage:!1,title:"isPromiseLike",description:'Implementation of "isPromiseLike" in typescript, javascript and deno.',source:"@site/docs/isPromiseLike.md",slug:"/isPromiseLike",permalink:"/30-seconds-of-typescript/docs/isPromiseLike",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isPromiseLike.md",version:"current"},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if an object looks like a ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},Object(i.b)("inlineCode",{parentName:"a"},"Promise")),", ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("p",null,"Check if the object is not ",Object(i.b)("inlineCode",{parentName:"p"},"null"),", its ",Object(i.b)("inlineCode",{parentName:"p"},"typeof")," matches either ",Object(i.b)("inlineCode",{parentName:"p"},"object")," or ",Object(i.b)("inlineCode",{parentName:"p"},"function")," and if it has a ",Object(i.b)("inlineCode",{parentName:"p"},".then")," property, which is also a ",Object(i.b)("inlineCode",{parentName:"p"},"function"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const isPromiseLike = (obj) =>\n  obj !== null &&\n  (typeof obj === "object" || typeof obj === "function") &&\n  typeof obj.then === "function";\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'isPromiseLike({\n  then: function () {\n    return "";\n  },\n}); // true\nisPromiseLike(null); // false\nisPromiseLike({}); // false\n')))}l.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||b[m]||i;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
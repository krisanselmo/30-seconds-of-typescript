(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(479)),i={title:"bindKey",tags:"function,object,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "bindKey" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"bindKey",id:"bindKey",isDocsHomePage:!1,title:"bindKey",description:'Implementation of "bindKey" in typescript, javascript and deno.',source:"@site/docs/bindKey.md",slug:"/bindKey",permalink:"/30-seconds-of-typescript/docs/bindKey",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/bindKey.md",version:"current",sidebar:"someSidebar",previous:{title:"bindAll",permalink:"/30-seconds-of-typescript/docs/bindAll"},next:{title:"binomialCoefficient",permalink:"/30-seconds-of-typescript/docs/binomialCoefficient"}},p=[],s={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),Object(a.b)("p",null,"Creates a function that invokes the method at a given key of an object, optionally adding any additional supplied parameters to the beginning of the arguments."),Object(a.b)("p",null,"Return a ",Object(a.b)("inlineCode",{parentName:"p"},"function")," that uses ",Object(a.b)("inlineCode",{parentName:"p"},"Function.prototype.apply()")," to bind ",Object(a.b)("inlineCode",{parentName:"p"},"context[fn]")," to ",Object(a.b)("inlineCode",{parentName:"p"},"context"),".\nUse the spread operator (",Object(a.b)("inlineCode",{parentName:"p"},"..."),") to prepend any additional supplied parameters to the arguments."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const bindKey = (context, fn, ...boundArgs) => (...args) =>\n  context[fn].apply(context, [...boundArgs, ...args]);\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const freddy = {\n  user: "fred",\n  greet: function (greeting, punctuation) {\n    return greeting + " " + this.user + punctuation;\n  },\n};\nconst freddyBound = bindKey(freddy, "greet");\nconsole.log(freddyBound("hi", "!")); // \'hi fred!\'\n')))}u.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||l[b]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
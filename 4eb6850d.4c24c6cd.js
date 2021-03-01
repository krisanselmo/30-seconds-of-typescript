(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(479)),a={title:"collectInto",tags:"function,array,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "collectInto" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"collectInto",id:"collectInto",isDocsHomePage:!1,title:"collectInto",description:'Implementation of "collectInto" in typescript, javascript and deno.',source:"@site/docs/collectInto.md",slug:"/collectInto",permalink:"/30-seconds-of-typescript/docs/collectInto",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/collectInto.md",version:"current",sidebar:"someSidebar",previous:{title:"coalesceFactory",permalink:"/30-seconds-of-typescript/docs/coalesceFactory"},next:{title:"colorize",permalink:"/30-seconds-of-typescript/docs/colorize"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),Object(c.b)("p",null,"Changes a function that accepts an array into a variadic function."),Object(c.b)("p",null,"Given a function, return a closure that collects all inputs into an array-accepting function."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const collectInto = (fn) => (...args) => fn(args);\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const Pall = collectInto(Promise.all.bind(Promise));\nlet p1 = Promise.resolve(1);\nlet p2 = Promise.resolve(2);\nlet p3 = new Promise((resolve) => setTimeout(resolve, 2000, 3));\nPall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)\n")))}p.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(a,".").concat(m)]||u[m]||f[m]||c;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
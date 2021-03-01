(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(479)),s={title:"hashBrowser",tags:"browser,advanced,promise,advanced",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "hashBrowser" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"hashBrowser",id:"hashBrowser",isDocsHomePage:!1,title:"hashBrowser",description:'Implementation of "hashBrowser" in typescript, javascript and deno.',source:"@site/docs/hashBrowser.md",slug:"/hashBrowser",permalink:"/30-seconds-of-typescript/docs/hashBrowser",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/hashBrowser.md",version:"current",sidebar:"someSidebar",previous:{title:"hasFlags",permalink:"/30-seconds-of-typescript/docs/hasFlags"},next:{title:"hashNode",permalink:"/30-seconds-of-typescript/docs/hashNode"}},c=[],p={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Creates a hash for a value using the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"SHA-256")," algorithm. Returns a promise."),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto"},"SubtleCrypto")," API to create a hash for the given value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const hashBrowser = (val) =>\n  crypto.subtle\n    .digest("SHA-256", new TextEncoder("utf-8").encode(val))\n    .then((h) => {\n      let hexes = [],\n        view = new DataView(h);\n      for (let i = 0; i < view.byteLength; i += 4)\n        hexes.push(("00000000" + view.getUint32(i).toString(16)).slice(-8));\n      return hexes.join("");\n    });\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'hashBrowser(\n  JSON.stringify({ a: "a", b: [1, 2, 3, 4], foo: { c: "bar" } })\n).then(console.log); // \'04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393\'\n')))}l.isMDXComponent=!0}}]);
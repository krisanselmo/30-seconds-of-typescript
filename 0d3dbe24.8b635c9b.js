(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||a;return r?o.a.createElement(d,i(i({ref:t},p),{},{components:r})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(479)),s={title:"UUIDGeneratorBrowser",tags:"browser,random,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "UUIDGeneratorBrowser" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"UUIDGeneratorBrowser",id:"UUIDGeneratorBrowser",isDocsHomePage:!1,title:"UUIDGeneratorBrowser",description:'Implementation of "UUIDGeneratorBrowser" in typescript, javascript and deno.',source:"@site/docs/UUIDGeneratorBrowser.md",slug:"/UUIDGeneratorBrowser",permalink:"/30-seconds-of-typescript/docs/UUIDGeneratorBrowser",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/UUIDGeneratorBrowser.md",version:"current",sidebar:"someSidebar",previous:{title:"URLJoin",permalink:"/30-seconds-of-typescript/docs/URLJoin"},next:{title:"UUIDGeneratorNode",permalink:"/30-seconds-of-typescript/docs/UUIDGeneratorNode"}},c=[],p={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(a.b)("p",null,"Generates a UUID in a browser."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"crypto")," API to generate a UUID, compliant with ",Object(a.b)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc4122.txt"},"RFC4122")," version 4."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const UUIDGeneratorBrowser = () =>\n  (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: string) =>\n    (\n      Number(c) ^\n      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))\n    ).toString(16)\n  );\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'\n")))}l.isMDXComponent=!0}}]);
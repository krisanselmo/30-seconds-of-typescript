(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{434:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),s=(r(0),r(479)),a={title:"isAbsoluteURL",tags:"string,browser,url,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isAbsoluteURL" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"isAbsoluteURL",id:"isAbsoluteURL",isDocsHomePage:!1,title:"isAbsoluteURL",description:'Implementation of "isAbsoluteURL" in typescript, javascript and deno.',source:"@site/docs/isAbsoluteURL.md",slug:"/isAbsoluteURL",permalink:"/30-seconds-of-typescript/docs/isAbsoluteURL",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isAbsoluteURL.md",version:"current",sidebar:"someSidebar",previous:{title:"is",permalink:"/30-seconds-of-typescript/docs/is"},next:{title:"isAfterDate",permalink:"/30-seconds-of-typescript/docs/isAfterDate"}},c=[],p={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(s.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(s.b)("p",null,"Returns ",Object(s.b)("inlineCode",{parentName:"p"},"true")," if the given string is an absolute URL, ",Object(s.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(s.b)("p",null,"Use a regular expression to test if the string is an absolute URL."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str);\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'isAbsoluteURL("https://google.com"); // true\nisAbsoluteURL("ftp://www.myserver.net"); // true\nisAbsoluteURL("/foo/bar"); // false\n')))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(a,".").concat(f)]||u[f]||b[f]||s;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
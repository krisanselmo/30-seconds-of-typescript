(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(479)),a={title:"bottomVisible",tags:"browser,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "bottomVisible" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"bottomVisible",id:"bottomVisible",isDocsHomePage:!1,title:"bottomVisible",description:'Implementation of "bottomVisible" in typescript, javascript and deno.',source:"@site/docs/bottomVisible.md",slug:"/bottomVisible",permalink:"/30-seconds-of-typescript/docs/bottomVisible",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/bottomVisible.md",version:"current",sidebar:"someSidebar",previous:{title:"both",permalink:"/30-seconds-of-typescript/docs/both"},next:{title:"btoa",permalink:"/30-seconds-of-typescript/docs/btoa"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if the bottom of the page is visible, ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"scrollY"),", ",Object(i.b)("inlineCode",{parentName:"p"},"scrollHeight")," and ",Object(i.b)("inlineCode",{parentName:"p"},"clientHeight")," to determine if the bottom of the page is visible."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const bottomVisible = () =>\n  document.documentElement.clientHeight + window.scrollY >=\n  (document.documentElement.scrollHeight ||\n    document.documentElement.clientHeight);\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"bottomVisible(); // true\n")))}l.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||i;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
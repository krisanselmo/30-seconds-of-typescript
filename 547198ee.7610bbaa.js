(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{209:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(479)),o={title:"insertAfter",tags:"browser,beginner",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "insertAfter" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"insertAfter",id:"insertAfter",isDocsHomePage:!1,title:"insertAfter",description:'Implementation of "insertAfter" in typescript, javascript and deno.',source:"@site/docs/insertAfter.md",slug:"/insertAfter",permalink:"/30-seconds-of-typescript/docs/insertAfter",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/insertAfter.md",version:"current",sidebar:"someSidebar",previous:{title:"initializeNDArray",permalink:"/30-seconds-of-typescript/docs/initializeNDArray"},next:{title:"insertAt",permalink:"/30-seconds-of-typescript/docs/insertAt"}},c=[],p={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(i.b)("p",null,"Inserts an HTML string after the end of the specified element."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"el.insertAdjacentHTML()")," with a position of ",Object(i.b)("inlineCode",{parentName:"p"},"'afterend'")," to parse ",Object(i.b)("inlineCode",{parentName:"p"},"htmlString")," and insert it after the end of ",Object(i.b)("inlineCode",{parentName:"p"},"el"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const insertAfter = (el, htmlString) =>\n  el.insertAdjacentHTML("afterend", htmlString);\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'insertAfter(document.getElementById("myId"), "<p>after</p>");\n// <div id="myId">...</div> <p>after</p>\n')))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||f[d]||i;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
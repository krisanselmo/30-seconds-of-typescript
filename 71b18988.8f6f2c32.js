(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{247:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(479)),o={title:"filterNonUnique",tags:"array,beginner",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "filterNonUnique" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"filterNonUnique",id:"filterNonUnique",isDocsHomePage:!1,title:"filterNonUnique",description:'Implementation of "filterNonUnique" in typescript, javascript and deno.',source:"@site/docs/filterNonUnique.md",slug:"/filterNonUnique",permalink:"/30-seconds-of-typescript/docs/filterNonUnique",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/filterNonUnique.md",version:"current",sidebar:"someSidebar",previous:{title:"fillArray",permalink:"/30-seconds-of-typescript/docs/fillArray"},next:{title:"filterNonUniqueBy",permalink:"/30-seconds-of-typescript/docs/filterNonUniqueBy"}},p=[],s={toc:p};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(a.b)("p",null,"Filters out the non-unique values in an array."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," for an array containing only the unique values."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const filterNonUnique = (arr) =>\n  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]\n")))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||f[m]||a;return r?i.a.createElement(d,c(c({ref:t},s),{},{components:r})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
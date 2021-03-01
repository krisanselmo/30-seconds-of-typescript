(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(479)),o={title:"isNumber",tags:"type,math,beginner",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isNumber" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"isNumber",id:"isNumber",isDocsHomePage:!1,title:"isNumber",description:'Implementation of "isNumber" in typescript, javascript and deno.',source:"@site/docs/isNumber.md",slug:"/isNumber",permalink:"/30-seconds-of-typescript/docs/isNumber",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isNumber.md",version:"current",sidebar:"someSidebar",previous:{title:"isNull",permalink:"/30-seconds-of-typescript/docs/isNull"},next:{title:"isObject",permalink:"/30-seconds-of-typescript/docs/isObject"}},p=[],c={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(i.b)("p",null,"Checks if the given argument is a number."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"typeof")," to check if a value is classified as a number primitive.\nTo safeguard against ",Object(i.b)("inlineCode",{parentName:"p"},"NaN"),", check if ",Object(i.b)("inlineCode",{parentName:"p"},"val === val")," (as ",Object(i.b)("inlineCode",{parentName:"p"},"NaN")," has a ",Object(i.b)("inlineCode",{parentName:"p"},"typeof")," equal to ",Object(i.b)("inlineCode",{parentName:"p"},"number")," and is the only value not equal to itself)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const isNumber = (val: any) => typeof val === "number" && val === val;\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'isNumber(1); // true\nisNumber("1"); // false\nisNumber(NaN); // false\n')))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return r?a.a.createElement(d,s(s({ref:t},c),{},{components:r})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
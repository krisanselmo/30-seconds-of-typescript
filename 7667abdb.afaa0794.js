(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{259:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(479)),p={title:"pad",tags:"string,beginner",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "pad" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"pad",id:"pad",isDocsHomePage:!1,title:"pad",description:'Implementation of "pad" in typescript, javascript and deno.',source:"@site/docs/pad.md",slug:"/pad",permalink:"/30-seconds-of-typescript/docs/pad",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/pad.md",version:"current",sidebar:"someSidebar",previous:{title:"overArgs",permalink:"/30-seconds-of-typescript/docs/overArgs"},next:{title:"parseCookie",permalink:"/30-seconds-of-typescript/docs/parseCookie"}},s=[],c={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(o.b)("p",null,"Pads a string on both sides with the specified character, if it's shorter than the specified length."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.padStart()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.padEnd()")," to pad both sides of the given string.\nOmit the third argument, ",Object(o.b)("inlineCode",{parentName:"p"},"char"),", to use the whitespace character as the default padding character."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const pad = (str: string, length: number, char = " ") =>\n  str.padStart((str.length + length) / 2, char).padEnd(length, char);\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"pad(\"cat\", 8); // '  cat   '\npad(String(42), 6, \"0\"); // '004200'\npad(\"foobar\", 3); // 'foobar'\n")))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,m=d["".concat(p,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
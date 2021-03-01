(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{479:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,d=s["".concat(c,".").concat(b)]||s[b]||m[b]||o;return n?a.a.createElement(d,p(p({ref:t},u),{},{components:n})):a.a.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(479)),c={title:"clampNumber",tags:"math,beginner",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "clampNumber" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p={unversionedId:"clampNumber",id:"clampNumber",isDocsHomePage:!1,title:"clampNumber",description:'Implementation of "clampNumber" in typescript, javascript and deno.',source:"@site/docs/clampNumber.md",slug:"/clampNumber",permalink:"/30-seconds-of-typescript/docs/clampNumber",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/clampNumber.md",version:"current",sidebar:"someSidebar",previous:{title:"chunkIntoN",permalink:"/30-seconds-of-typescript/docs/chunkIntoN"},next:{title:"cloneRegExp",permalink:"/30-seconds-of-typescript/docs/cloneRegExp"}},i=[],u={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),Object(o.b)("p",null,"Clamps ",Object(o.b)("inlineCode",{parentName:"p"},"num")," within the inclusive range specified by the boundary values ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"b"),"."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"num")," falls within the range, return ",Object(o.b)("inlineCode",{parentName:"p"},"num"),".\nOtherwise, return the nearest number in the range."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const clampNumber = (num, a, b) =>\n  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"clampNumber(2, 3, 5); // 3\nclampNumber(1, -1, -5); // -1\n")))}l.isMDXComponent=!0}}]);
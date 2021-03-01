(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{416:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(479)),s={title:"removeNonASCII",tags:"string,regexp,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "removeNonASCII" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"removeNonASCII",id:"removeNonASCII",isDocsHomePage:!1,title:"removeNonASCII",description:'Implementation of "removeNonASCII" in typescript, javascript and deno.',source:"@site/docs/removeNonASCII.md",slug:"/removeNonASCII",permalink:"/30-seconds-of-typescript/docs/removeNonASCII",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/removeNonASCII.md",version:"current",sidebar:"someSidebar",previous:{title:"remove",permalink:"/30-seconds-of-typescript/docs/remove"},next:{title:"renameKeys",permalink:"/30-seconds-of-typescript/docs/renameKeys"}},c=[],p={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(a.b)("p",null,"Removes non-printable ASCII characters."),Object(a.b)("p",null,"Use a regular expression to remove non-printable ASCII characters."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const removeNonASCII = (str) => str.replace(/[^\\x20-\\x7E]/g, "");\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"removeNonASCII(\"\xe4\xc4\xe7\xc7\xe9\xc9\xealorem-ipsum\xf6\xd6\xd0\xfe\xfa\xda\"); // 'lorem-ipsum'\n")))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||a;return r?o.a.createElement(d,i(i({ref:t},p),{},{components:r})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
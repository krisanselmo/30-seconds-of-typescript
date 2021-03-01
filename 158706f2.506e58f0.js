(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(479)),c={title:"countBy",tags:"array,object,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "countBy" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p={unversionedId:"countBy",id:"countBy",isDocsHomePage:!1,title:"countBy",description:'Implementation of "countBy" in typescript, javascript and deno.',source:"@site/docs/countBy.md",slug:"/countBy",permalink:"/30-seconds-of-typescript/docs/countBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/countBy.md",version:"current",sidebar:"someSidebar",previous:{title:"copyToClipboard",permalink:"/30-seconds-of-typescript/docs/copyToClipboard"},next:{title:"countOccurrences",permalink:"/30-seconds-of-typescript/docs/countOccurrences"}},s=[],i={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(o.b)("p",null,"Groups the elements of an array based on the given function and returns the count of elements in each group."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to map the values of an array to a function or property name.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to create an object, where the keys are produced from the mapped results."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'export const countBy = <T = any>(arr: T[], fn: Func<T> | string) => {\n  const mapper = typeof fn === "function" ? fn : (val: any) => val[fn];\n  return arr.reduce((acc, val) => {\n    const value = mapper(val);\n    acc[value] = (acc[value] || 0) + 1;\n    return acc;\n  }, {} as any);\n};\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}\ncountBy(["one", "two", "three"], "length"); // {3: 2, 5: 1}\n\ncountBy([{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }], "name"); // { Deepak: 2, Deepak2: 1 }\ncountBy(\n  [{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }],\n  (user: any) => user.name\n); // { Deepak: 2, Deepak2: 1 }\n')))}u.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=u(n),y=r,d=l["".concat(c,".").concat(y)]||l[y]||m[y]||o;return n?a.a.createElement(d,p(p({ref:t},i),{},{components:n})):a.a.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);
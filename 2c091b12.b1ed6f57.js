(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(499)),c={title:"get",tags:"object,intermediate"},l={id:"get",isDocsHomePage:!1,title:"get",description:"TS",source:"@site/docs/get.md",permalink:"/30-seconds-of-typescript/docs/get",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/get.md",sidebar:"someSidebar",previous:{title:"functions",permalink:"/30-seconds-of-typescript/docs/functions"},next:{title:"getBaseURL",permalink:"/30-seconds-of-typescript/docs/getBaseURL"}},s=[{value:"Get",id:"get",children:[]},{value:"GetAll",id:"getall",children:[]}],i={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(o.b)("p",null,"Retrieve a set of properties indicated by the given selectors from an object."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," for each selector, ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.replace()")," to replace square brackets with dots, ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.split('.')")," to split each selector, ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to remove empty values and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to get the value indicated by it."),Object(o.b)("h3",{id:"get"},"Get"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'export const get = (\n  from: any,\n  selector: string,\n  defaultValue: any = undefined\n) =>\n  selector\n    .replace(/\\[([^\\[\\]]*)\\]/g, ".$1.")\n    .split(".")\n    .filter((t) => t !== "")\n    .reduce((prev, cur) => prev && prev[cur], from) || defaultValue;\n')),Object(o.b)("h3",{id:"getall"},"GetAll"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export const getAll = (from: any, ...selectors: string[]) =>\n  [...selectors].map((s) => get(from, s));\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'const obj = {\n  selector: { to: { val: "val to select" } },\n  target: [1, 2, { a: "test" }],\n};\n\nget(obj, "selector.to.val"); //"val to select"\nget(obj, "selector.to1.val", null); // null\nget(obj, "selector.to1.val"); // undefined\ngetAll(obj, "selector.to.val", "target[0]", "target[2].a"); // [\'val to select\', 1, \'test\']\n')))}p.isMDXComponent=!0},499:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,l(l({ref:t},i),{},{components:r})):a.a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
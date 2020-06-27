(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{493:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(502)),c={id:"bifurcateBy",sidebar_label:"bifurcateBy",title:"BifurcateBy",tags:"array,function,intermediate"},i={id:"bifurcateBy",isDocsHomePage:!1,title:"BifurcateBy",description:"TS",source:"@site/docs/bifurcateBy.md",permalink:"/30-seconds-of-typescript/docs/bifurcateBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/bifurcateBy.md",sidebar_label:"bifurcateBy",sidebar:"someSidebar",previous:{title:"Bifurcate",permalink:"/30-seconds-of-typescript/docs/bifurcate"},next:{title:"Binary",permalink:"/30-seconds-of-typescript/docs/binary"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(o.b)("p",null,"Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to add elements to groups, based on the value returned by ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," for each element."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"type Predicate<T> = (item: T) => boolean;\n\nconst bifurcateBy = <T extends any>(arr: T[], filter: Predicate<T>) =>\n  arr.reduce(\n    (acc, val) => {\n      acc[filter(val) ? 0 : 1].push(val);\n      return acc;\n    },\n    [[] as T[], [] as T[]]\n  );\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'bifurcateBy(["beep", "boop", "foo", "bar"], (x: string) => x[0] === "b"); // [ [\'beep\', \'boop\', \'bar\'], [\'foo\'] ]\n\n// To Get Filtered(falsy) values\n\nconst [filtered] = bifurcateBy(["beep", "boop", undefined, null, 1], Boolean); // filtered == ["beep", "boop", 1]\n\nassertEquals(\n  bifurcate(["beep", "boop", "foo", "bar"], (item: string) =>\n    item.startsWith("b")\n  ),\n  [["beep", "boop", "bar"], ["foo"]]\n);\n')))}l.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||o;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
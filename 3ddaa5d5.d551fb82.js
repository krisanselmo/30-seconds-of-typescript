(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),c=(n(0),n(466)),a={title:"compose",tags:"function,intermediate"},p={unversionedId:"compose",id:"compose",isDocsHomePage:!1,title:"compose",description:"TS",source:"@site/docs/compose.md",permalink:"/30-seconds-of-typescript/docs/compose",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/compose.md",sidebar:"someSidebar",previous:{title:"complement",permalink:"/30-seconds-of-typescript/docs/complement"},next:{title:"composeRight",permalink:"/30-seconds-of-typescript/docs/composeRight"}},s=[],i={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(c.b)("p",null,"Performs right-to-left function composition."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to perform right-to-left function composition.\nThe last (rightmost) function can accept one or more arguments; the remaining functions must be unary."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const compose = (...fns: Func<any>[]) =>\n  fns.reduce((f, g) => (...args: any[]) => f(...castArray(g(...args))));\n")),Object(c.b)("p",null,"You can have look on implementation of ","[castArray]"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const add5 = (x: number) => x + 5;\nconst multiply = (x: number, y: number) => x * y;\nconst multiplyAndAdd5 = compose(add5, multiply);\nmultiplyAndAdd5(5, 2); // 15\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Complex Example- Return with tuple:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const multiply = (x: number, y: number) => x * y; // 5* 2 = 10\nconst add3 = (x: number) => [x + 3, 3]; // [10+3, 3] = [13, 3]\nconst add = (x: number, y: number) => x + y; // 13 + 3 = 16\nconst multiplyAndAdd3 = compose(add, add3, multiply);\nassertEquals(multiplyAndAdd3(5, 2), 16);\n")))}l.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(a,".").concat(b)]||u[b]||m[b]||c;return n?o.a.createElement(d,p(p({ref:t},i),{},{components:n})):o.a.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var i=2;i<c;i++)a[i]=n[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
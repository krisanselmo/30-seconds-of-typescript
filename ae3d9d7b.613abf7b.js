(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{381:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(499)),i={title:"unionBy",tags:"array,function,intermediate"},c={id:"unionBy",isDocsHomePage:!1,title:"unionBy",description:"JS",source:"@site/docs/unionBy.md",permalink:"/30-seconds-of-typescript/docs/unionBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/unionBy.md",sidebar:"someSidebar",previous:{title:"union",permalink:"/30-seconds-of-typescript/docs/union"},next:{title:"unionWith",permalink:"/30-seconds-of-typescript/docs/unionWith"}},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both."),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," by applying all ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," to all values of ",Object(o.b)("inlineCode",{parentName:"p"},"a"),".\nCreate a ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," from ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and all elements in ",Object(o.b)("inlineCode",{parentName:"p"},"b")," whose value, after applying ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," does not match a value in the previously created set.\nReturn the last set converted to an array."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const unionBy = (a, b, fn) => {\n  const s = new Set(a.map(fn));\n  return Array.from(new Set([...a, ...b.filter((x) => !s.has(fn(x)))]));\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]\n")))}s.isMDXComponent=!0},499:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
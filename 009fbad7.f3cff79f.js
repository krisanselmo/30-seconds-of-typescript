(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{466:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||i;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),i=(r(0),r(466)),o={title:"capitalize",tags:"string,array,intermediate"},c={unversionedId:"capitalize",id:"capitalize",isDocsHomePage:!1,title:"capitalize",description:"TS",source:"@site/docs/capitalize.md",permalink:"/30-seconds-of-typescript/docs/capitalize",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/capitalize.md",sidebar:"someSidebar",previous:{title:"call",permalink:"/30-seconds-of-typescript/docs/call"},next:{title:"capitalizeEveryWord",permalink:"/30-seconds-of-typescript/docs/capitalizeEveryWord"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(i.b)("p",null,"Capitalizes the first letter of a string."),Object(i.b)("p",null,"Use array destructuring and ",Object(i.b)("inlineCode",{parentName:"p"},"String.prototype.toUpperCase()")," to capitalize first letter, ",Object(i.b)("inlineCode",{parentName:"p"},"...rest")," to get array of characters after first letter and then ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.join('')")," to make it a string again.\nOmit the ",Object(i.b)("inlineCode",{parentName:"p"},"lowerRest")," parameter to keep the rest of the string intact, or set it to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," to convert to lowercase."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'const capitalize = (str: string = "", lowerRest = false): string =>\n  str.slice(0, 1).toUpperCase() +\n  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"capitalize(\"fooBar\"); // 'FooBar'\ncapitalize(\"fooBar\", true); // 'Foobar'\n")))}l.isMDXComponent=!0}}]);
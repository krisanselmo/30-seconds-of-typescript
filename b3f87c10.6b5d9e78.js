(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{394:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(502)),i={title:"partition",tags:"array,object,function,intermediate"},c={id:"partition",isDocsHomePage:!1,title:"partition",description:"Groups the elements into two arrays, depending on the provided function's truthiness for each element.",source:"@site/docs/partition.md",permalink:"/30-seconds-of-typescript/docs/partition",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/partition.md",sidebar:"someSidebar",previous:{title:"partialRight",permalink:"/30-seconds-of-typescript/docs/partialRight"},next:{title:"partitionBy",permalink:"/30-seconds-of-typescript/docs/partitionBy"}},p=[],s={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Groups the elements into two arrays, depending on the provided function's truthiness for each element."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to create an array of two arrays.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to add elements for which ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to the first array and elements for which ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"false")," to the second one."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const partition = (arr, fn) =>\n  arr.reduce(\n    (acc, val, i, arr) => {\n      acc[fn(val, i, arr) ? 0 : 1].push(val);\n      return acc;\n    },\n    [[], []]\n  );\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const users = [\n  { user: \"barney\", age: 36, active: false },\n  { user: \"fred\", age: 40, active: true },\n];\npartition(users, (o) => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]\n")))}u.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,b=l["".concat(i,".").concat(d)]||l[d]||f[d]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
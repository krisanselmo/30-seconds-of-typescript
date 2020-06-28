(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{436:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(502)),c={title:"mostFrequent",tags:"array,intermediate"},i={id:"mostFrequent",isDocsHomePage:!1,title:"mostFrequent",description:"Returns the most frequent element in an array.",source:"@site/docs/mostFrequent.md",permalink:"/30-seconds-of-typescript/docs/mostFrequent",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/mostFrequent.md",sidebar:"someSidebar",previous:{title:"minN",permalink:"/30-seconds-of-typescript/docs/minN"},next:{title:"mostPerformant",permalink:"/30-seconds-of-typescript/docs/mostPerformant"}},s=[],u={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns the most frequent element in an array."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to map unique values to an object's keys, adding to existing keys every time the same value is encountered.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Object.entries()")," on the result in combination with ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to get the most frequent value in the array."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const mostFrequent = (arr) =>\n  Object.entries(\n    arr.reduce((a, v) => {\n      a[v] = a[v] ? a[v] + 1 : 1;\n      return a;\n    }, {})\n  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'mostFrequent(["a", "b", "a", "c", "a", "a", "b"]); // \'a\'\n')))}p.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,f=l["".concat(c,".").concat(b)]||l[b]||m[b]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
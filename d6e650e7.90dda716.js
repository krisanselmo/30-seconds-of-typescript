(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{451:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(502)),i={title:"isContainedIn",tags:"array,intermediate"},c={id:"isContainedIn",isDocsHomePage:!1,title:"isContainedIn",description:"Returns true if the elements of the first array are contained in the second one regardless of order, false otherwise.",source:"@site/docs/isContainedIn.md",permalink:"/30-seconds-of-typescript/docs/isContainedIn",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isContainedIn.md",sidebar:"someSidebar",previous:{title:"isBrowserTabFocused",permalink:"/30-seconds-of-typescript/docs/isBrowserTabFocused"},next:{title:"isDivisible",permalink:"/30-seconds-of-typescript/docs/isDivisible"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if the elements of the first array are contained in the second one regardless of order, ",Object(a.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(a.b)("p",null,"Use a ",Object(a.b)("inlineCode",{parentName:"p"},"for...of")," loop over a ",Object(a.b)("inlineCode",{parentName:"p"},"Set")," created from the first array.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.some()")," to check if all distinct values are contained in the second array, use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to compare the number of occurrences of each distinct value in both arrays.\nReturn ",Object(a.b)("inlineCode",{parentName:"p"},"false")," if the count of any element is greater in the first array than the second one, ",Object(a.b)("inlineCode",{parentName:"p"},"true")," otherwise."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const isContainedIn = (a, b) => {\n  for (const v of new Set(a)) {\n    if (\n      !b.some((e) => e === v) ||\n      a.filter((e) => e === v).length > b.filter((e) => e === v).length\n    )\n      return false;\n  }\n  return true;\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"isContainedIn([1, 4], [2, 4, 1]); // true\n")))}l.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{466:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||a;return r?i.a.createElement(m,c(c({ref:t},p),{},{components:r})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),i=r(6),a=(r(0),r(466)),o={title:"isSorted",tags:"array,intermediate"},c={unversionedId:"isSorted",id:"isSorted",isDocsHomePage:!1,title:"isSorted",description:"TS",source:"@site/docs/isSorted.md",permalink:"/30-seconds-of-typescript/docs/isSorted",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isSorted.md",sidebar:"someSidebar",previous:{title:"isSameDate",permalink:"/30-seconds-of-typescript/docs/isSameDate"},next:{title:"isStream",permalink:"/30-seconds-of-typescript/docs/isStream"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"1")," if the array is sorted in ascending order, ",Object(a.b)("inlineCode",{parentName:"p"},"-1")," if it is sorted in descending order or ",Object(a.b)("inlineCode",{parentName:"p"},"0")," if it is not sorted."),Object(a.b)("p",null,"Calculate the ordering ",Object(a.b)("inlineCode",{parentName:"p"},"direction")," for the first two elements.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Object.entries()")," to loop over array objects and compare them in pairs.\nReturn ",Object(a.b)("inlineCode",{parentName:"p"},"0")," if the ",Object(a.b)("inlineCode",{parentName:"p"},"direction")," changes or the ",Object(a.b)("inlineCode",{parentName:"p"},"direction")," if the last element is reached."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const isSorted = (arr) => {\n  let direction = -(arr[0] - arr[1]);\n  for (let [i, val] of arr.entries()) {\n    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;\n    if (i === arr.length - 1)\n      return !direction ? 0 : direction / Math.abs(direction);\n    else if ((val - arr[i + 1]) * direction > 0) return 0;\n  }\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"isSorted([0, 1, 2, 2]); // 1\nisSorted([4, 3, 2]); // -1\nisSorted([4, 3, 5]); // 0\n")))}l.isMDXComponent=!0}}]);
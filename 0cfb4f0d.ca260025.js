(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{479:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),a=(n(0),n(479)),o={title:"initializeArrayWithRange",tags:"array,math,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "initializeArrayWithRange" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"initializeArrayWithRange",id:"initializeArrayWithRange",isDocsHomePage:!1,title:"initializeArrayWithRange",description:'Implementation of "initializeArrayWithRange" in typescript, javascript and deno.',source:"@site/docs/initializeArrayWithRange.md",slug:"/initializeArrayWithRange",permalink:"/30-seconds-of-typescript/docs/initializeArrayWithRange",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/initializeArrayWithRange.md",version:"current",sidebar:"someSidebar",previous:{title:"initialize2DArray",permalink:"/30-seconds-of-typescript/docs/initialize2DArray"},next:{title:"initializeArrayWithRangeRight",permalink:"/30-seconds-of-typescript/docs/initializeArrayWithRangeRight"}},p=[],s={toc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(a.b)("p",null,"Initializes an array containing the numbers in the specified range where ",Object(a.b)("inlineCode",{parentName:"p"},"start")," and ",Object(a.b)("inlineCode",{parentName:"p"},"end")," are inclusive with their common difference ",Object(a.b)("inlineCode",{parentName:"p"},"step"),"."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.from()")," to create an array of the desired length, ",Object(a.b)("inlineCode",{parentName:"p"},"(end - start + 1)/step"),", and a map function to fill it with the desired values in the given range.\nYou can omit ",Object(a.b)("inlineCode",{parentName:"p"},"start")," to use a default value of ",Object(a.b)("inlineCode",{parentName:"p"},"0"),".\nYou can omit ",Object(a.b)("inlineCode",{parentName:"p"},"step")," to use a default value of ",Object(a.b)("inlineCode",{parentName:"p"},"1"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const initializeArrayWithRange = (end, start = 0, step = 1) =>\n  Array.from(\n    { length: Math.ceil((end - start + 1) / step) },\n    (v, i) => i * step + start\n  );\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"initializeArrayWithRange(5); // [0,1,2,3,4,5]\ninitializeArrayWithRange(7, 3); // [3,4,5,6,7]\ninitializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]\n")))}l.isMDXComponent=!0}}]);
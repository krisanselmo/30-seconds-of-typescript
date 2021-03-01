(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),a=(n(0),n(479)),i={title:"mostPerformant",tags:"function,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "mostPerformant" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"mostPerformant",id:"mostPerformant",isDocsHomePage:!1,title:"mostPerformant",description:'Implementation of "mostPerformant" in typescript, javascript and deno.',source:"@site/docs/mostPerformant.md",slug:"/mostPerformant",permalink:"/30-seconds-of-typescript/docs/mostPerformant",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/mostPerformant.md",version:"current",sidebar:"someSidebar",previous:{title:"mostFrequent",permalink:"/30-seconds-of-typescript/docs/mostFrequent"},next:{title:"negate",permalink:"/30-seconds-of-typescript/docs/negate"}},c=[],p={toc:c};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(a.b)("p",null,"Returns the index of the function in an array of functions which executed the fastest."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to generate an array where each value is the total time taken to execute the function after ",Object(a.b)("inlineCode",{parentName:"p"},"iterations")," times. Use the difference in ",Object(a.b)("inlineCode",{parentName:"p"},"performance.now()")," values before and after to get the total time in milliseconds to a high degree of accuracy.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Math.min()")," to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function.\nOmit the second argument, ",Object(a.b)("inlineCode",{parentName:"p"},"iterations"),", to use a default of 10,000 iterations. The more iterations, the more reliable the result but the longer it will take."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const mostPerformant = (fns: Function[], iterations = 10000) => {\n  const times = fns.map((fn) => {\n    const before = performance.now();\n    for (let i = 0; i < iterations; i++) fn();\n    return performance.now() - before;\n  });\n  return times.indexOf(Math.min(...times));\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'mostPerformant([\n  () => {\n    // 10x time iterate\n    fillArray(10000, "1").every((el) => typeof el === "number");\n  },\n  () => {\n    fillArray(1000, "2").every((el) => typeof el === "number");\n  },\n]); // 1\n')))}m.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=m(n),f=r,d=l["".concat(i,".").concat(f)]||l[f]||u[f]||a;return n?o.a.createElement(d,s(s({ref:t},p),{},{components:n})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
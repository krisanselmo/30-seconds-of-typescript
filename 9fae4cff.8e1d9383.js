(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(502)),c={title:"hz",tags:"function,intermediate"},a={id:"hz",isDocsHomePage:!1,title:"hz",description:"Returns the number of times a function executed per second.",source:"@site/docs/hz.md",permalink:"/30-seconds-of-typescript/docs/hz",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/hz.md",sidebar:"someSidebar",previous:{title:"httpsRedirect",permalink:"/30-seconds-of-typescript/docs/httpsRedirect"},next:{title:"inRange",permalink:"/30-seconds-of-typescript/docs/inRange"}},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Returns the number of times a function executed per second.\n",Object(i.b)("inlineCode",{parentName:"p"},"hz")," is the unit for ",Object(i.b)("inlineCode",{parentName:"p"},"hertz"),", the unit of frequency defined as one cycle per second."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"performance.now()")," to get the difference in milliseconds before and after the iteration loop to calculate the time elapsed executing the function ",Object(i.b)("inlineCode",{parentName:"p"},"iterations")," times.\nReturn the number of cycles per second by converting milliseconds to seconds and dividing it by the time elapsed.\nOmit the second argument, ",Object(i.b)("inlineCode",{parentName:"p"},"iterations"),", to use the default of 100 iterations."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const hz = (fn, iterations = 100) => {\n  const before = performance.now();\n  for (let i = 0; i < iterations; i++) fn();\n  return (1000 * iterations) / (performance.now() - before);\n};\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// 10,000 element array\nconst numbers = Array(10000)\n  .fill()\n  .map((_, i) => i);\n\n// Test functions with the same goal: sum up the elements in the array\nconst sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);\nconst sumForLoop = () => {\n  let sum = 0;\n  for (let i = 0; i < numbers.length; i++) sum += numbers[i];\n  return sum;\n};\n\n// `sumForLoop` is nearly 10 times faster\nMath.round(hz(sumReduce)); // 572\nMath.round(hz(sumForLoop)); // 4784\n")))}p.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,d=l["".concat(c,".").concat(f)]||l[f]||m[f]||i;return n?o.a.createElement(d,a(a({ref:t},u),{},{components:n})):o.a.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
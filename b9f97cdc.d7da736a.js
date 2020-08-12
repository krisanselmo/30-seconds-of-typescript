(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(6),a=(n(0),n(466)),o={title:"binomialCoefficient",tags:"math,intermediate"},c={unversionedId:"binomialCoefficient",id:"binomialCoefficient",isDocsHomePage:!1,title:"binomialCoefficient",description:"TS",source:"@site/docs/binomialCoefficient.md",permalink:"/30-seconds-of-typescript/docs/binomialCoefficient",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/binomialCoefficient.md",sidebar:"someSidebar",previous:{title:"bindKey",permalink:"/30-seconds-of-typescript/docs/bindKey"},next:{title:"both",permalink:"/30-seconds-of-typescript/docs/both"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(a.b)("p",null,"Evaluates the binomial coefficient of two integers ",Object(a.b)("inlineCode",{parentName:"p"},"n")," and ",Object(a.b)("inlineCode",{parentName:"p"},"k"),"."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Number.isNaN()")," to check if any of the two values is ",Object(a.b)("inlineCode",{parentName:"p"},"NaN"),".\nCheck if ",Object(a.b)("inlineCode",{parentName:"p"},"k")," is less than ",Object(a.b)("inlineCode",{parentName:"p"},"0"),", greater than or equal to ",Object(a.b)("inlineCode",{parentName:"p"},"n"),", equal to ",Object(a.b)("inlineCode",{parentName:"p"},"1")," or ",Object(a.b)("inlineCode",{parentName:"p"},"n - 1")," and return the appropriate result.\nCheck if ",Object(a.b)("inlineCode",{parentName:"p"},"n - k")," is less than ",Object(a.b)("inlineCode",{parentName:"p"},"k")," and switch their values accordingly.\nLoop from ",Object(a.b)("inlineCode",{parentName:"p"},"2")," through ",Object(a.b)("inlineCode",{parentName:"p"},"k")," and calculate the binomial coefficient.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Math.round()")," to account for rounding errors in the calculation."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const binomialCoefficient = (n: number, k: number): number => {\n  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;\n  if (k < 0 || k > n) return 0;\n  if (k === 0 || k === n) return 1;\n  if (k === 1 || k === n - 1) return n;\n  if (n - k < k) k = n - k;\n  let res = n;\n  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;\n  return Math.round(res);\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"binomialCoefficient(8, 2); // 28\nconst result = binomialCoefficient(8, 2);\nassertEquals(result, 28);\n")))}l.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,m=b["".concat(o,".").concat(f)]||b[f]||u[f]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
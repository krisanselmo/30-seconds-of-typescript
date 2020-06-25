(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{226:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(500)),i={title:"CSVToArray",tags:"string,array,intermediate"},c={id:"CSVToArray",isDocsHomePage:!1,title:"CSVToArray",description:"JS",source:"@site/docs/CSVToArray.md",permalink:"/30-seconds-of-typescript/docs/CSVToArray",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/CSVToArray.md"},p=[],l={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}))),Object(o.b)("p",null,"Converts a comma-separated values (CSV) string to a 2D array."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.indexOf('\\n')")," to remove the first row (title row) if ",Object(o.b)("inlineCode",{parentName:"p"},"omitFirstRow")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),".\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.split('\\n')")," to create a string for each row, then ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.split(delimiter)")," to separate the values in each row.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"delimiter"),", to use a default delimiter of ",Object(o.b)("inlineCode",{parentName:"p"},","),".\nOmit the third argument, ",Object(o.b)("inlineCode",{parentName:"p"},"omitFirstRow"),", to include the first row (title row) of the CSV string."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>\n  data\n    .slice(omitFirstRow ? data.indexOf('\\n') + 1 : 0)\n    .split('\\n')\n    .map(v => v.split(delimiter));\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"CSVToArray('a,b\\nc,d'); // [['a','b'],['c','d']];\nCSVToArray('a;b\\nc;d', ';'); // [['a','b'],['c','d']];\nCSVToArray('col1,col2\\na,b\\nc,d', ',', true); // [['a','b'],['c','d']];\n")))}s.isMDXComponent=!0},500:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
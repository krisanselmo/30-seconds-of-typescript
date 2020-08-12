(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{444:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(466)),o={title:"readFileLines",tags:"node,array,string,beginner"},c={unversionedId:"readFileLines",id:"readFileLines",isDocsHomePage:!1,title:"readFileLines",description:"JS",source:"@site/docs/readFileLines.md",permalink:"/30-seconds-of-typescript/docs/readFileLines",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/readFileLines.md",sidebar:"someSidebar",previous:{title:"randomNumber",permalink:"/30-seconds-of-typescript/docs/randomNumber"},next:{title:"rearg",permalink:"/30-seconds-of-typescript/docs/rearg"}},l=[],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(i.b)("p",null,"Returns an array of lines from the specified file."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"readFileSync")," function in ",Object(i.b)("inlineCode",{parentName:"p"},"fs")," node package to create a ",Object(i.b)("inlineCode",{parentName:"p"},"Buffer")," from a file.\nconvert buffer to string using ",Object(i.b)("inlineCode",{parentName:"p"},"toString(encoding)")," function.\ncreating an array from contents of file by ",Object(i.b)("inlineCode",{parentName:"p"},"split"),"ing file content line by line (each ",Object(i.b)("inlineCode",{parentName:"p"},"\\n"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const fs = require("fs");\nconst readFileLines = (filename) =>\n  fs.readFileSync(filename).toString("UTF8").split("\\n");\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/*\ncontents of test.txt :\n  line1\n  line2\n  line3\n  ___________________________\n*/\nlet arr = readFileLines(\"test.txt\");\nconsole.log(arr); // ['line1', 'line2', 'line3']\n")))}p.isMDXComponent=!0},466:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,d=u["".concat(o,".").concat(b)]||u[b]||f[b]||i;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
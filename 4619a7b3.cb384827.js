(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(502)),c={title:"copyToClipboard",tags:"browser,string,advanced"},i={id:"copyToClipboard",isDocsHomePage:!1,title:"copyToClipboard",description:"JS",source:"@site/docs/copyToClipboard.md",permalink:"/30-seconds-of-typescript/docs/copyToClipboard",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/copyToClipboard.md",sidebar:"someSidebar",previous:{title:"converge",permalink:"/30-seconds-of-typescript/docs/converge"},next:{title:"countBy",permalink:"/30-seconds-of-typescript/docs/countBy"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}))),Object(a.b)("p",null,"Copy a string to the clipboard.\nOnly works as a result of user action (i.e. inside a ",Object(a.b)("inlineCode",{parentName:"p"},"click")," event listener)."),Object(a.b)("p",null,"\u26a0\ufe0f ",Object(a.b)("strong",{parentName:"p"},"NOTICE:")," The same functionality can be easily implemented by using the new asynchronous Clipboard API, which is still experimental but should be used in the future instead of this snippet. Find out more about it ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard"}),"here"),"."),Object(a.b)("p",null,"Create a new ",Object(a.b)("inlineCode",{parentName:"p"},"<textarea>")," element, fill it with the supplied data and add it to the HTML document.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Selection.getRangeAt()"),"to store the selected range (if any).\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"document.execCommand('copy')")," to copy to the clipboard.\nRemove the ",Object(a.b)("inlineCode",{parentName:"p"},"<textarea>")," element from the HTML document.\nFinally, use ",Object(a.b)("inlineCode",{parentName:"p"},"Selection().addRange()")," to recover the original selected range (if any)."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const copyToClipboard = (str) => {\n  const el = document.createElement("textarea");\n  el.value = str;\n  el.setAttribute("readonly", "");\n  el.style.position = "absolute";\n  el.style.left = "-9999px";\n  document.body.appendChild(el);\n  const selected =\n    document.getSelection().rangeCount > 0\n      ? document.getSelection().getRangeAt(0)\n      : false;\n  el.select();\n  document.execCommand("copy");\n  document.body.removeChild(el);\n  if (selected) {\n    document.getSelection().removeAllRanges();\n    document.getSelection().addRange(selected);\n  }\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"copyToClipboard(\"Lorem ipsum\"); // 'Lorem ipsum' copied to clipboard.\n")))}s.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
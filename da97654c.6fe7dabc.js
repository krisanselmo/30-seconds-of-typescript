(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{494:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(9),a=(n(0),n(543)),c={title:"indentString",tags:"string,beginner"},o={id:"indentString",isDocsHomePage:!1,title:"indentString",description:"TS",source:"@site/docs/indentString.md",permalink:"/30-seconds-of-typescript/docs/indentString",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/indentString.md",sidebar:"someSidebar",previous:{title:"includesAny",permalink:"/30-seconds-of-typescript/docs/includesAny"},next:{title:"indexOfAll",permalink:"/30-seconds-of-typescript/docs/indexOfAll"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(a.b)("p",null,"Indents each line in the provided string."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"String.replace")," and a regular expression to add the character specified by ",Object(a.b)("inlineCode",{parentName:"p"},"indent")," ",Object(a.b)("inlineCode",{parentName:"p"},"count")," times at the start of each line.\nOmit the third parameter, ",Object(a.b)("inlineCode",{parentName:"p"},"indent"),", to use a default indentation character of ",Object(a.b)("inlineCode",{parentName:"p"},"' '"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'const indentString = (str: string, count: number, indent = " ") => {\n  indent = indent.repeat(count);\n  return str.replace(/^/gm, indent);\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'indentString("Lorem\\nIpsum", 2); // \'  Lorem\\n  Ipsum\'\nindentString("Lorem\\nIpsum", 2, "_"); // \'__Lorem\\n__Ipsum\'\n')))}l.isMDXComponent=!0},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
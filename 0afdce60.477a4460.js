(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{466:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,d=s["".concat(o,".").concat(b)]||s[b]||m[b]||c;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(466)),o={title:"clampNumber",tags:"math,beginner"},i={unversionedId:"clampNumber",id:"clampNumber",isDocsHomePage:!1,title:"clampNumber",description:"JS",source:"@site/docs/clampNumber.md",permalink:"/30-seconds-of-typescript/docs/clampNumber",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/clampNumber.md",sidebar:"someSidebar",previous:{title:"chunkIntoN",permalink:"/30-seconds-of-typescript/docs/chunkIntoN"},next:{title:"cloneRegExp",permalink:"/30-seconds-of-typescript/docs/cloneRegExp"}},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}))),Object(c.b)("p",null,"Clamps ",Object(c.b)("inlineCode",{parentName:"p"},"num")," within the inclusive range specified by the boundary values ",Object(c.b)("inlineCode",{parentName:"p"},"a")," and ",Object(c.b)("inlineCode",{parentName:"p"},"b"),"."),Object(c.b)("p",null,"If ",Object(c.b)("inlineCode",{parentName:"p"},"num")," falls within the range, return ",Object(c.b)("inlineCode",{parentName:"p"},"num"),".\nOtherwise, return the nearest number in the range."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const clampNumber = (num, a, b) =>\n  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"clampNumber(2, 3, 5); // 3\nclampNumber(1, -1, -5); // -1\n")))}u.isMDXComponent=!0}}]);
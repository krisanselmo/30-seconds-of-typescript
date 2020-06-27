(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{459:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(502)),s={title:"isAbsoluteURL",tags:"string,browser,url,intermediate"},i={id:"isAbsoluteURL",isDocsHomePage:!1,title:"isAbsoluteURL",description:"Returns true if the given string is an absolute URL, false otherwise.",source:"@site/docs/isAbsoluteURL.md",permalink:"/30-seconds-of-typescript/docs/isAbsoluteURL",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isAbsoluteURL.md",sidebar:"someSidebar",previous:{title:"is",permalink:"/30-seconds-of-typescript/docs/is"},next:{title:"isAfterDate",permalink:"/30-seconds-of-typescript/docs/isAfterDate"}},c=[],u={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if the given string is an absolute URL, ",Object(a.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(a.b)("p",null,"Use a regular expression to test if the string is an absolute URL."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'isAbsoluteURL("https://google.com"); // true\nisAbsoluteURL("ftp://www.myserver.net"); // true\nisAbsoluteURL("/foo/bar"); // false\n')))}l.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(m,i(i({ref:t},u),{},{components:r})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
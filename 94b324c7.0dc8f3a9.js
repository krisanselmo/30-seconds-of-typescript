(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{289:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),c=r(6),o=(r(0),r(466)),a={title:"redirect",tags:"browser,url,beginner"},i={unversionedId:"redirect",id:"redirect",isDocsHomePage:!1,title:"redirect",description:"JS",source:"@site/docs/redirect.md",permalink:"/30-seconds-of-typescript/docs/redirect",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/redirect.md",sidebar:"someSidebar",previous:{title:"recordAnimationFrames",permalink:"/30-seconds-of-typescript/docs/recordAnimationFrames"},next:{title:"reduceSuccessive",permalink:"/30-seconds-of-typescript/docs/reduceSuccessive"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Redirects to a specified URL."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"window.location.href")," or ",Object(o.b)("inlineCode",{parentName:"p"},"window.location.replace()")," to redirect to ",Object(o.b)("inlineCode",{parentName:"p"},"url"),".\nPass a second argument to simulate a link click (",Object(o.b)("inlineCode",{parentName:"p"},"true")," - default) or an HTTP redirect (",Object(o.b)("inlineCode",{parentName:"p"},"false"),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const redirect = (url, asLink = true) =>\n  asLink ? (window.location.href = url) : window.location.replace(url);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'redirect("https://google.com");\n')))}l.isMDXComponent=!0},466:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return r?c.a.createElement(m,i(i({ref:t},p),{},{components:r})):c.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
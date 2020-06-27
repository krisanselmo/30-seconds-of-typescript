(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{418:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(0),r(502)),o={title:"escapeHTML",tags:"string,browser,regexp,intermediate"},p={id:"escapeHTML",isDocsHomePage:!1,title:"escapeHTML",description:"Escapes a string for use in HTML.",source:"@site/docs/escapeHTML.md",permalink:"/30-seconds-of-typescript/docs/escapeHTML",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/escapeHTML.md",sidebar:"someSidebar",previous:{title:"equals",permalink:"/30-seconds-of-typescript/docs/equals"},next:{title:"escapeRegExp",permalink:"/30-seconds-of-typescript/docs/escapeRegExp"}},i=[],s={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Escapes a string for use in HTML."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"String.prototype.replace()")," with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object)."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const escapeHTML = (str) =>\n  str.replace(\n    /[&<>\'"]/g,\n    (tag) =>\n      ({\n        "&": "&amp;",\n        "<": "&lt;",\n        ">": "&gt;",\n        "\'": "&#39;",\n        \'"\': "&quot;",\n      }[tag] || tag)\n  );\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"escapeHTML('<a href=\"#\">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'\n")))}u.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,d=l["".concat(o,".").concat(b)]||l[b]||f[b]||c;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
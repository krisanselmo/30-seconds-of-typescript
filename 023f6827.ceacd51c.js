(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{502:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,h=u["".concat(c,".").concat(b)]||u[b]||f[b]||o;return r?a.a.createElement(h,s(s({ref:t},p),{},{components:r})):a.a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(502)),c={title:"hashBrowser",tags:"browser,advanced,promise,advanced"},s={id:"hashBrowser",isDocsHomePage:!1,title:"hashBrowser",description:"Creates a hash for a value using the SHA-256 algorithm. Returns a promise.",source:"@site/docs/hashBrowser.md",permalink:"/30-seconds-of-typescript/docs/hashBrowser",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/hashBrowser.md",sidebar:"someSidebar",previous:{title:"hasKey",permalink:"/30-seconds-of-typescript/docs/hasKey"},next:{title:"hashNode",permalink:"/30-seconds-of-typescript/docs/hashNode"}},i=[],p={rightToc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Creates a hash for a value using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/SHA-2"}),"SHA-256")," algorithm. Returns a promise."),Object(o.b)("p",null,"Use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto"}),"SubtleCrypto")," API to create a hash for the given value."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const hashBrowser = (val) =>\n  crypto.subtle\n    .digest("SHA-256", new TextEncoder("utf-8").encode(val))\n    .then((h) => {\n      let hexes = [],\n        view = new DataView(h);\n      for (let i = 0; i < view.byteLength; i += 4)\n        hexes.push(("00000000" + view.getUint32(i).toString(16)).slice(-8));\n      return hexes.join("");\n    });\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'hashBrowser(\n  JSON.stringify({ a: "a", b: [1, 2, 3, 4], foo: { c: "bar" } })\n).then(console.log); // \'04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393\'\n')))}l.isMDXComponent=!0}}]);
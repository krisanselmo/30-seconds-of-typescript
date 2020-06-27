(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{253:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(502)),c={title:"unflattenObject",tags:"object,advanced"},i={id:"unflattenObject",isDocsHomePage:!1,title:"unflattenObject",description:"Unflatten an object with the paths for keys.",source:"@site/docs/unflattenObject.md",permalink:"/30-seconds-of-typescript/docs/unflattenObject",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/unflattenObject.md",sidebar:"someSidebar",previous:{title:"unescapeHTML",permalink:"/30-seconds-of-typescript/docs/unescapeHTML"},next:{title:"unfold",permalink:"/30-seconds-of-typescript/docs/unfold"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Unflatten an object with the paths for keys."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Object.keys(obj)")," combined with ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to convert flattened path node to a leaf node.\nIf the value of a key contains a dot delimiter (",Object(o.b)("inlineCode",{parentName:"p"},"."),"), use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.split('.')"),", string transformations and ",Object(o.b)("inlineCode",{parentName:"p"},"JSON.parse()")," to create an object, then ",Object(o.b)("inlineCode",{parentName:"p"},"Object.assign()")," to create the leaf node.\nOtherwise, add the appropriate key-value pair to the accumulator object."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const unflattenObject = (obj) =>\n  Object.keys(obj).reduce((acc, k) => {\n    if (k.indexOf(".") !== -1) {\n      const keys = k.split(".");\n      Object.assign(\n        acc,\n        JSON.parse(\n          "{" +\n            keys\n              .map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`))\n              .join("") +\n            obj[k] +\n            "}".repeat(keys.length)\n        )\n      );\n    } else acc[k] = obj[k];\n    return acc;\n  }, {});\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'unflattenObject({ "a.b.c": 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }\n')))}l.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
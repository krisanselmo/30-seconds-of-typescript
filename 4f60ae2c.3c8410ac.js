(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{233:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(502)),l={title:"pullAtIndex",tags:"array,advanced"},p={id:"pullAtIndex",isDocsHomePage:!1,title:"pullAtIndex",description:"Mutates the original array to filter out the values at the specified indexes.",source:"@site/docs/pullAtIndex.md",permalink:"/30-seconds-of-typescript/docs/pullAtIndex",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/pullAtIndex.md",sidebar:"someSidebar",previous:{title:"pull",permalink:"/30-seconds-of-typescript/docs/pull"},next:{title:"pullAtValue",permalink:"/30-seconds-of-typescript/docs/pullAtValue"}},c=[],i={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Mutates the original array to filter out the values at the specified indexes."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," to pull out the values that are not needed.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.length = 0")," to mutate the passed in an array by resetting it's length to zero and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to re-populate it with only the pulled values.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to keep track of pulled values"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const pullAtIndex = (arr, pullArr) => {\n  let removed = [];\n  let pulled = arr\n    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))\n    .filter((v, i) => !pullArr.includes(i));\n  arr.length = 0;\n  pulled.forEach((v) => arr.push(v));\n  return removed;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let myArray = [\"a\", \"b\", \"c\", \"d\"];\nlet pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]\n")))}u.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,b=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return r?a.a.createElement(b,p(p({ref:t},i),{},{components:r})):a.a.createElement(b,p({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
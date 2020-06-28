(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{486:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),c=(t(0),t(502)),i={title:"includesAll",tags:"array,beginner"},o={id:"includesAll",isDocsHomePage:!1,title:"includesAll",description:"Returns true if all the elements in values are included in arr, false otherwise.",source:"@site/docs/includesAll.md",permalink:"/30-seconds-of-typescript/docs/includesAll",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/includesAll.md",sidebar:"someSidebar",previous:{title:"inRange",permalink:"/30-seconds-of-typescript/docs/inRange"},next:{title:"includesAny",permalink:"/30-seconds-of-typescript/docs/includesAny"}},l=[],p={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Returns ",Object(c.b)("inlineCode",{parentName:"p"},"true")," if all the elements in ",Object(c.b)("inlineCode",{parentName:"p"},"values")," are included in ",Object(c.b)("inlineCode",{parentName:"p"},"arr"),", ",Object(c.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.every()")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," to check if all elements of ",Object(c.b)("inlineCode",{parentName:"p"},"values")," are included in ",Object(c.b)("inlineCode",{parentName:"p"},"arr"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const includesAll = (arr, values) => values.every((v) => arr.includes(v));\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"includesAll([1, 2, 3, 4], [1, 4]); // true\nincludesAll([1, 2, 3, 4], [1, 5]); // false\n")))}s.isMDXComponent=!0},502:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||c;return t?a.a.createElement(f,o(o({ref:n},p),{},{components:t})):a.a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
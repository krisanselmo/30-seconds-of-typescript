(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{414:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(6),o=(r(0),r(502)),a={title:"isPrime",tags:"math,beginner,intermediate"},c={id:"isPrime",isDocsHomePage:!1,title:"isPrime",description:"Checks if the provided integer is a prime number.",source:"@site/docs/isPrime.md",permalink:"/30-seconds-of-typescript/docs/isPrime",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isPrime.md",sidebar:"someSidebar",previous:{title:"isPowerOfTwo",permalink:"/30-seconds-of-typescript/docs/isPowerOfTwo"},next:{title:"isPrimitive",permalink:"/30-seconds-of-typescript/docs/isPrimitive"}},s=[],p={rightToc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Checks if the provided integer is a prime number."),Object(o.b)("p",null,"Check numbers from ",Object(o.b)("inlineCode",{parentName:"p"},"2")," to the square root of the given number.\nReturn ",Object(o.b)("inlineCode",{parentName:"p"},"false")," if any of them divides the given number, else return ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", unless the number is less than ",Object(o.b)("inlineCode",{parentName:"p"},"2"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const isPrime = (num) => {\n  const boundary = Math.floor(Math.sqrt(num));\n  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;\n  return num >= 2;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"isPrime(11); // true\n")))}u.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,b=l["".concat(a,".").concat(f)]||l[f]||m[f]||o;return r?i.a.createElement(b,c(c({ref:t},p),{},{components:r})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
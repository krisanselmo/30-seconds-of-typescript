(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(502)),c={title:"extendHex",tags:"string,intermediate"},i={id:"extendHex",isDocsHomePage:!1,title:"extendHex",description:"Extends a 3-digit color code to a 6-digit color code.",source:"@site/docs/extendHex.md",permalink:"/30-seconds-of-typescript/docs/extendHex",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/extendHex.md",sidebar:"someSidebar",previous:{title:"expandTabs",permalink:"/30-seconds-of-typescript/docs/expandTabs"},next:{title:"factorial",permalink:"/30-seconds-of-typescript/docs/factorial"}},p=[],s={rightToc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Extends a 3-digit color code to a 6-digit color code."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"String.prototype.split()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.join()")," to join the mapped array for converting a 3-digit RGB notated hexadecimal color-code to the 6-digit form.\n",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," is used to remove ",Object(a.b)("inlineCode",{parentName:"p"},"#")," from string start since it's added once."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const extendHex = (shortHex) =>\n  "#" +\n  shortHex\n    .slice(shortHex.startsWith("#") ? 1 : 0)\n    .split("")\n    .map((x) => x + x)\n    .join("");\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"extendHex(\"#03f\"); // '#0033ff'\nextendHex(\"05a\"); // '#0055aa'\n")))}d.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,b=l["".concat(c,".").concat(f)]||l[f]||u[f]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
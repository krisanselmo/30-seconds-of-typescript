(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{479:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(543)),c={title:"bindAll",tags:"object,function,intermediate"},i={id:"bindAll",isDocsHomePage:!1,title:"bindAll",description:"TS",source:"@site/docs/bindAll.md",permalink:"/30-seconds-of-typescript/docs/bindAll",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/bindAll.md",sidebar:"someSidebar",previous:{title:"bind",permalink:"/30-seconds-of-typescript/docs/bind"},next:{title:"bindKey",permalink:"/30-seconds-of-typescript/docs/bindKey"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(a.b)("p",null,"Binds methods of an object to the object itself, overwriting the existing method."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to return a ",Object(a.b)("inlineCode",{parentName:"p"},"function")," that uses ",Object(a.b)("inlineCode",{parentName:"p"},"Function.prototype.apply()")," to apply the given context (",Object(a.b)("inlineCode",{parentName:"p"},"obj"),") to ",Object(a.b)("inlineCode",{parentName:"p"},"fn")," for each function specified."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'export const bindAll = (obj: any, ...fns: string[]) =>\n  fns.forEach((key: string) => {\n    if (typeof obj[key] === "function") {\n      const f = obj[key];\n      obj[key] = function (...args: any[]) {\n        return f.apply(obj, args);\n      };\n    }\n  });\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'class User {\n  #name = "Test";\n  getName() {\n    return this.#name;\n  }\n}\nconst user = new User();\nbindAll(user, "getName");\n\nconst getName = user.getName;\nassertEquals(getName(), "Test");\n\n// JS\nvar view = {\n  label: "docs",\n  click: function () {\n    console.log("clicked " + this.label);\n  },\n};\nbindAll(view, "click");\njQuery(element).on("click", view.click); // Logs \'clicked docs\' when clicked.\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"React:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'class Toggle extends React.Component {\n  constructor(props) {\n    super(props);\n    bindAll(this, "handleClick", "handleMove");\n  }\n\n  handleClick() {\n    // code\n  }\n  handleMove() {\n    // code\n  }\n  render() {\n    // code\n  }\n}\n')))}p.isMDXComponent=!0},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
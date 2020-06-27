(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{395:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(502)),i={title:"recordAnimationFrames",tags:"browser,intermediate"},c={id:"recordAnimationFrames",isDocsHomePage:!1,title:"recordAnimationFrames",description:"Invokes the provided callback on each animation frame.",source:"@site/docs/recordAnimationFrames.md",permalink:"/30-seconds-of-typescript/docs/recordAnimationFrames",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/recordAnimationFrames.md",sidebar:"someSidebar",previous:{title:"rearg",permalink:"/30-seconds-of-typescript/docs/rearg"},next:{title:"redirect",permalink:"/30-seconds-of-typescript/docs/redirect"}},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Invokes the provided callback on each animation frame."),Object(o.b)("p",null,"Use recursion.\nProvided that ",Object(o.b)("inlineCode",{parentName:"p"},"running")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", continue invoking ",Object(o.b)("inlineCode",{parentName:"p"},"window.requestAnimationFrame()")," which invokes the provided callback.\nReturn an object with two methods ",Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"stop")," to allow manual control of the recording.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"autoStart"),", to implicitly call ",Object(o.b)("inlineCode",{parentName:"p"},"start")," when the function is invoked."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const recordAnimationFrames = (callback, autoStart = true) => {\n  let running = true,\n    raf;\n  const stop = () => {\n    running = false;\n    cancelAnimationFrame(raf);\n  };\n  const start = () => {\n    running = true;\n    run();\n  };\n  const run = () => {\n    raf = requestAnimationFrame(() => {\n      callback();\n      if (running) run();\n    });\n  };\n  if (autoStart) start();\n  return { start, stop };\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const cb = () => console.log(\"Animation frame fired\");\nconst recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame\nrecorder.stop(); // stops logging\nrecorder.start(); // starts again\nconst recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames\n")))}p.isMDXComponent=!0},502:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
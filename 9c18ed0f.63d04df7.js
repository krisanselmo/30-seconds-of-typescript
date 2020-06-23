(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{345:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(503)),i={title:"elo",tags:"math,array,advanced"},c={id:"elo",isDocsHomePage:!1,title:"elo",description:"Computes the new ratings between two or more opponents using the Elo rating system. It takes an array",source:"@site/docs/elo.md",permalink:"/docs/elo",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/elo.md"},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Computes the new ratings between two or more opponents using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Elo_rating_system"}),"Elo rating system"),". It takes an array\nof pre-ratings and returns an array containing post-ratings.\nThe array should be ordered from best performer to worst performer (winner -> loser)."),Object(o.b)("p",null,"Use the exponent ",Object(o.b)("inlineCode",{parentName:"p"},"**")," operator and math operators to compute the expected score (chance of winning).\nof each opponent and compute the new rating for each.\nLoop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion.\nOmit the second argument to use the default ",Object(o.b)("inlineCode",{parentName:"p"},"kFactor")," of 32."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const elo = ([...ratings], kFactor = 32, selfRating) => {\n  const [a, b] = ratings;\n  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));\n  const newRating = (rating, i) =>\n    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));\n  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];\n\n  for (let i = 0, len = ratings.length; i < len; i++) {\n    let j = i;\n    while (j < len - 1) {\n      j++;\n      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);\n    }\n  }\n  return ratings;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Standard 1v1s\nelo([1200, 1200]); // [1216, 1184]\nelo([1200, 1200], 64); // [1232, 1168]\n// 4 player FFA, all same rank\nelo([1200, 1200, 1200, 1200]).map(Math.round); // [1246, 1215, 1185, 1154]\n/*\nFor teams, each rating can adjusted based on own team's average rating vs.\naverage rating of opposing team, with the score being added to their\nown individual rating by supplying it as the third argument.\n*/\n")))}l.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||g[f]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7067],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));a(57670);const l={title:"Greek",sidebar_label:"Greek",sidebar_position:5,slug:"/derivatives/ws-unified/greek"},i=void 0,o={unversionedId:"v3/derivatives/wss-unified/greek",id:"v3/derivatives/wss-unified/greek",title:"Greek",description:"Subscribe user greeks stream, option only.",source:"@site/docs/v3/derivatives/wss-unified/greek.mdx",sourceDirName:"v3/derivatives/wss-unified",slug:"/derivatives/ws-unified/greek",permalink:"/docs-v2/derivatives/ws-unified/greek",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Greek",sidebar_label:"Greek",sidebar_position:5,slug:"/derivatives/ws-unified/greek"},sidebar:"v3SideBar",previous:{title:"Wallet",permalink:"/docs-v2/derivatives/ws-unified/wallet"},next:{title:"Position",permalink:"/docs-v2/derivatives/ws-contract/position"}},s={},p=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Response Example",id:"response-example",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("Tabs"),u=d("TabItem"),c={toc:p};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Subscribe user greeks stream, ",(0,n.kt)("inlineCode",{parentName:"p"},"option")," only."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Topic:"),(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"user.greeks.unifiedTradingAccount")),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message type. ",(0,n.kt)("inlineCode",{parentName:"td"},"snaptshot"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"The timestamp (ms) that system generates the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> version"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Version")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> result"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> baseCoin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Base coin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> totalDelta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Delta value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> totalGamma"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Gamma value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> totalVega"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Vega value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">> totalTheta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Theta value")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(u,{value:"greek",label:"Greeks",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "53328593eddf20-ebe8-47d9-8a2b-62e4e2681eaa",\n    "topic": "user.greeks.unifiedAccount",\n    "ts": 1672107550646,\n    "data": {\n        "result": [\n            {\n                "baseCoin": "BTC",\n                "totalDelta": "-0.02077347",\n                "totalGamma": "-0.00004675",\n                "totalVega": "-0.52558304",\n                "totalTheta": "3.48921259"\n            },\n            {\n                "baseCoin": "ETH",\n                "totalDelta": "0.05003533",\n                "totalGamma": "-0.00000063",\n                "totalVega": "-0.00014849",\n                "totalTheta": "0.0041225"\n            }\n        ],\n        "version": 62056\n    },\n    "type": "snapshot"\n}\n')))))}k.isMDXComponent=!0},57670:()=>{}}]);
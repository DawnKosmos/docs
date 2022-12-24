"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={},o=void 0,s={unversionedId:"v3/spot/wss-public/orderbook",id:"v3/spot/wss-public/orderbook",title:"orderbook",description:"Market depth data for a trading pair:",source:"@site/docs/v3/spot/wss-public/orderbook.mdx",sourceDirName:"v3/spot/wss-public",slug:"/v3/spot/wss-public/orderbook",permalink:"/docs-v2/zh-TW/v3/spot/wss-public/orderbook",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"v3SideBar",previous:{title:"kline",permalink:"/docs-v2/zh-TW/v3/spot/wss-public/kline"},next:{title:"tickers",permalink:"/docs-v2/zh-TW/v3/spot/wss-public/tickers"}},p={},i=[{value:"Response Parameters",id:"response-parameters",level:4},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=u("Tabs"),c=u("TabItem"),m={toc:i};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Market depth data for a trading pair: "),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Snapshot depth: ",(0,a.kt)("b",null,"40")," each for asks and bids."),(0,a.kt)("li",null,"Events trigger order book version change:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"order enters order book"),(0,a.kt)("li",null,"order leaves order book"),(0,a.kt)("li",null,"order quantity changes"),(0,a.kt)("li",null,"order filled")))),(0,a.kt)("p",null,"Pushes snapshot data only, please ignore type=",(0,a.kt)("code",null,"delta")," in the message"),(0,a.kt)("p",null,(0,a.kt)("b",null,"Push frequency"),": 100ms"),(0,a.kt)("p",null,(0,a.kt)("b",null,"Topic"),": ",(0,a.kt)("code",null,"orderbook.40.BTCUSDT")),(0,a.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"t"),(0,a.kt)("td",{parentName:"tr",align:"left"},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"timestamp(ms). The time that system generates the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Trading pair")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid price, quantity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask price, quantity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"The time that message is sent out")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(c,{value:"console",label:"JSON subscription message",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "req_id": "depth00001", //optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.40.BTCUSDT"\n    ]\n}\n')))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {\n        "s": "BTCUSDT",\n        "t": 1661743689733,\n        "b": [\n            [\n                "19721.9",\n                "0.784806"\n            ],\n            [\n                "19719.37",\n                "1.215194"\n            ],\n            [\n                "19713.18",\n                "0.001"\n            ]\n            ...\n        ],\n        "a": [\n            [\n                "19721.91",\n                "0.192687"\n            ],\n            [\n                "19727.85",\n                "0.914128"\n            ],\n            [\n                "19731.24",\n                "1.008273"\n            ]\n            ...\n        ]\n    },\n    "type": "delta",\n    "topic": "orderbook.40.BTCUSDT",\n    "ts": 1661743689735\n}\n')))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=i(r),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},81712:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));r(57670);const o={title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1,slug:"/spot/ws-public/orderbook"},l=void 0,s={unversionedId:"v3/spot/wss-public/orderbook",id:"v3/spot/wss-public/orderbook",title:"Orderbook",description:"Market depth data for a trading pair:",source:"@site/docs/v3/spot/wss-public/orderbook.mdx",sourceDirName:"v3/spot/wss-public",slug:"/spot/ws-public/orderbook",permalink:"/docs-v2/spot/ws-public/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1,slug:"/spot/ws-public/orderbook"},sidebar:"v3SideBar",previous:{title:"Connect",permalink:"/docs-v2/spot/ws/connect"},next:{title:"Kline",permalink:"/docs-v2/spot/ws-public/kline"}},p={},i=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Market depth data for a trading pair: "),(0,a.kt)("ul",null,(0,a.kt)("li",null,"Snapshot depth: ",(0,a.kt)("b",null,"40")," each for asks and bids."),(0,a.kt)("li",null,"Events trigger order book version change:",(0,a.kt)("ul",null,(0,a.kt)("li",null,"order enters order book"),(0,a.kt)("li",null,"order leaves order book"),(0,a.kt)("li",null,"order quantity changes"),(0,a.kt)("li",null,"order filled")))),(0,a.kt)("p",null,"Pushes snapshot data only, please ignore type=",(0,a.kt)("code",null,"delta")," in the message"),(0,a.kt)("p",null,(0,a.kt)("b",null,"Push frequency"),": 100ms"),(0,a.kt)("p",null,(0,a.kt)("b",null,"Topic"),": ",(0,a.kt)("code",null,"orderbook.40.BTCUSDT")),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"t"),(0,a.kt)("td",{parentName:"tr",align:"left"},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"timestamp(ms). The time that system generates the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Trading pair")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid price, quantity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask price, quantity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"The time that message is sent out")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "depth00001", //optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.40.BTCUSDT"\n    ]\n}\n')),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "s": "BTCUSDT",\n        "t": 1661743689733,\n        "b": [\n            [\n                "19721.9",\n                "0.784806"\n            ],\n            [\n                "19719.37",\n                "1.215194"\n            ],\n            [\n                "19713.18",\n                "0.001"\n            ]\n            ...\n        ],\n        "a": [\n            [\n                "19721.91",\n                "0.192687"\n            ],\n            [\n                "19727.85",\n                "0.914128"\n            ],\n            [\n                "19731.24",\n                "1.008273"\n            ]\n            ...\n        ]\n    },\n    "type": "delta",\n    "topic": "orderbook.40.BTCUSDT",\n    "ts": 1661743689735\n}\n')))}u.isMDXComponent=!0},57670:()=>{}}]);
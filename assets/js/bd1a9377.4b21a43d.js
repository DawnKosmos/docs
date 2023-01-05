"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1410],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,b=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return r?a.createElement(b,i(i({ref:t},d),{},{components:r})):a.createElement(b,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},53626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"Public trade",sidebar_label:"Public trade",sidebar_position:5,slug:"/spot/ws-public/public-trade"},i=void 0,s={unversionedId:"v3/spot/wss-public/trade",id:"v3/spot/wss-public/trade",title:"Public trade",description:"This topic pushes raw trade information; each trade has a unique buyer and seller.",source:"@site/docs/v3/spot/wss-public/trade.mdx",sourceDirName:"v3/spot/wss-public",slug:"/spot/ws-public/public-trade",permalink:"/docs-v2/spot/ws-public/public-trade",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Public trade",sidebar_label:"Public trade",sidebar_position:5,slug:"/spot/ws-public/public-trade"},sidebar:"v3SideBar",previous:{title:"Bookticker",permalink:"/docs-v2/spot/ws-public/bookticker"},next:{title:"Order",permalink:"/docs-v2/spot/ws-private/order"}},o={},p=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("Tabs"),c=d("TabItem"),m={toc:p};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This topic pushes raw trade information; each trade has a unique buyer and seller."),(0,n.kt)("p",null,'Variable "v" acts as a tradeId. This variable is shared across different symbols; however, each ID is unique. For example, suppose in the last 5 seconds 3 trades happened in ETHUSDT, BTCUSDT, and BHTBTC. Their tradeId (which is "v") will be consecutive: 112, 113, 114.'),(0,n.kt)("p",null,(0,n.kt)("b",null,"Push frequency"),": real-time"),(0,n.kt)("p",null,(0,n.kt)("b",null,"Topic"),": ",(0,n.kt)("code",null,"trade.BTCUSDT")),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"TradeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"t"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp (trading time in the match box)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"p"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"q"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Quantity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"m"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"True indicates buy side is taker, false indicates sell side is taker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trade type. ",(0,n.kt)("code",null,"0"),"\uff1aSpot trade. ",(0,n.kt)("code",null,"1"),"\uff1aParadigm block trade")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:null},"The time that message is sent out")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(c,{value:"console",label:"JSON subscription message",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "req_id": "trade0001", //optional\n    "op": "subscribe",\n    "args": [\n        "trade.BTCUSDT"\n    ]\n}\n')))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {\n        "v": "2100000000001992601",\n        "t": 1661742109857,\n        "p": "19706.87",\n        "q": "0.000158",\n        "m": true\n    },\n    "type": "delta",\n    "topic": "trade.BTCUSDT",\n    "ts": 1661742109863\n}\n')))}b.isMDXComponent=!0}}]);
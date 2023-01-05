"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7267],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>p});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},u=Object.keys(t);for(l=0;l<u.length;l++)n=u[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(l=0;l<u.length;l++)n=u[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=l.createContext({}),s=function(t){var e=l.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(k.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,u=t.originalType,k=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),c=s(n),p=r,m=c["".concat(k,".").concat(p)]||c[p]||o[p]||u;return n?l.createElement(m,i(i({ref:e},d),{},{components:n})):l.createElement(m,i({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=n.length,i=new Array(u);i[0]=c;var a={};for(var k in e)hasOwnProperty.call(e,k)&&(a[k]=e[k]);a.originalType=t,a.mdxType="string"==typeof t?t:r,i[1]=a;for(var s=2;s<u;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50091:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const u={title:"Ticker",sidebar_label:"Ticker",sidebar_position:3},i=void 0,a={unversionedId:"v5/websocket/public/ticker",id:"v5/websocket/public/ticker",title:"Ticker",description:"Subscribe the ticker data.",source:"@site/docs/v5/websocket/public/ticker.mdx",sourceDirName:"v5/websocket/public",slug:"/v5/websocket/public/ticker",permalink:"/docs-v2/v5/websocket/public/ticker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Ticker",sidebar_label:"Ticker",sidebar_position:3},sidebar:"v5SideBar",previous:{title:"Public trade",permalink:"/docs-v2/v5/websocket/public/trade"},next:{title:"Kline",permalink:"/docs-v2/v5/websocket/public/kline"}},k={},s=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Response Example",id:"response-example",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},o=d("Tabs"),c=d("TabItem"),p={toc:s};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subscribe the ticker data.",(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This topic utilises the snapshot field and delta field. If response param is not found in the message, then its value has no change."),(0,r.kt)("li",{parentName:"ul"},"Spot tickers message has ",(0,r.kt)("strong",{parentName:"li"},"snapshot")," ONLY"))),(0,r.kt)("p",null,"Push frequency: ",(0,r.kt)("strong",{parentName:"p"},"100ms")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"tickers.{symbol}")),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(c,{value:"future",label:"Linear|Inverse",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"topic"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Topic name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Data type. `snapshot`,`delta`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cs"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Please ignore")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"The timestamp (ms) that system generates the data")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tickDirection"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Tick direction ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Percentage change of market price relative to 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price 24 hours ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice1h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price an hour ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Index price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterestValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest value ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Volume for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> nextFundingTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Next funding time (UTC) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Funding rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> predictedFundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Predicated funding rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Bid 1 price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Bid 1 size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Ask 1 price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Ask 1 size ")))),(0,r.kt)(c,{value:"option",label:"Option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Data type. `snapshot`,`delta`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"id"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"message id")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The timestamp (ms) that system generates the data")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")))),(0,r.kt)(c,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"topic"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Topic name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"The timestamp (ms) that system generates the data")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Data type. `snapshot`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cs"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Cross sequence, internal used")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Percentage change of market price relative to 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Volume for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Percentage change of market price relative to 24h "))))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(c,{value:"ws-linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "tickers.BTCPERP",\n    "type": "snapshot",\n    "data": {\n        "symbol": "BTCPERP",\n        "tickDirection": "ZeroMinusTick",\n        "price24hPcnt": "-0.002196",\n        "lastPrice": "16580.00",\n        "prevPrice24h": "16616.50",\n        "highPrice24h": "16683.50",\n        "lowPrice24h": "16471.50",\n        "prevPrice1h": "16598.50",\n        "markPrice": "16590.02",\n        "indexPrice": "16616.96",\n        "openInterest": "23418.511",\n        "openInterestValue": "388513565.86",\n        "turnover24h": "17708456.749",\n        "volume24h": "1069.437",\n        "nextFundingTime": "2022-12-29T16:00:00Z",\n        "fundingRate": "0.000083",\n        "predictedFundingRate": "0.000083",\n        "bid1Price": "16580.50",\n        "bid1Size": "10.494",\n        "ask1Price": "16601.00",\n        "ask1Size": "0.039"\n    },\n    "cs": 654165870,\n    "ts": 1672323890101\n}\n'))),(0,r.kt)(c,{value:"ws-spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "tickers.BTCUSDT",\n    "ts": 1672305380595,\n    "type": "snapshot",\n    "cs": 496622841,\n    "data": {\n        "symbol": "BTCUSDT",\n        "lastPrice": "16363.78",\n        "highPrice24h": "16566.64",\n        "lowPrice24h": "16009.19",\n        "prevPrice24h": "16443.66",\n        "volume24h": "5865.470182",\n        "turnover24h": "95949815.680875",\n        "price24hPcnt": "-0.0049"\n    }\n}\n')))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[202],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),d=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=d(t.components);return r.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=d(a),u=n,g=s["".concat(m,".").concat(u)]||s[u]||k[u]||i;return a?r.createElement(g,l(l({ref:e},o),{},{components:a})):r.createElement(g,l({ref:e},o))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},30431:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Tickers",sidebar_label:"Tickers",sidebar_position:3,slug:"/derivatives/ws-public/ticker"},l=void 0,p={unversionedId:"v3/derivatives/wss-public/tickers",id:"v3/derivatives/wss-public/tickers",title:"Tickers",description:"cover: USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Option",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/wss-public/tickers.mdx",sourceDirName:"v3/derivatives/wss-public",slug:"/derivatives/ws-public/ticker",permalink:"/docs-v2/zh-TW/derivatives/ws-public/ticker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tickers",sidebar_label:"Tickers",sidebar_position:3,slug:"/derivatives/ws-public/ticker"},sidebar:"v3SideBar",previous:{title:"Public Trade",permalink:"/docs-v2/zh-TW/derivatives/ws-public/trade"},next:{title:"Kline",permalink:"/docs-v2/zh-TW/derivatives/ws-public/kline"}},m={},d=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],o=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},k=o("Tabs"),s=o("TabItem"),u={toc:d};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"cover: USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Option")),(0,n.kt)("p",null,"Get latest information of the symbol"),(0,n.kt)("admonition",{title:"important",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Future has ",(0,n.kt)("inlineCode",{parentName:"li"},"snapshot")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"delta")," types. If a key does not exist in the field, it means the value is not changed."),(0,n.kt)("li",{parentName:"ul"},"Option has ",(0,n.kt)("inlineCode",{parentName:"li"},"snapshot")," data ONLY."))),(0,n.kt)("p",null,"Push frequency: ",(0,n.kt)("strong",{parentName:"p"},"real-time")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Topic:"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"tickers.{symbol}")),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message id. ",(0,n.kt)("em",{parentName:"td"},"Unique field for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Message type. ",(0,n.kt)("inlineCode",{parentName:"td"},"snaptshot"),",",(0,n.kt)("inlineCode",{parentName:"td"},"delta"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"The timestamp (ms) that system generates the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Please ignore")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#tickdirection"},"tickDirection")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Direction of price change. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> lastPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Last price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> bid1Price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid 1 price. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> bid1Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid 1 size. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ask1Price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask 1 price. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ask1Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask 1 size. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> price24hPcnt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Percentage change of market price relative to 24h. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> prevPrice24h"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Price of 24 hours ago. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> highPrice24h"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The highest price in the last 24 hours")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> lowPrice24h"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The lowest price in the last 24 hours")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> prevPrice1h"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Hourly market price an hour ago")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> change24h"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"24-hour change. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> markPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Mark price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> indexPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Index price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> openInterest"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Open interest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> turnover24h"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"24h-turnover")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> volume24h"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"24h-volume")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> nextFundingTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Next funding time. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> fundingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Funding rate. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> predictedFundingRate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Predicated funding rate. ",(0,n.kt)("em",{parentName:"td"},"Unique for future"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> bidPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid 1 price. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> bidSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid 1 size. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> bidIv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid iv. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> askPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask 1 price. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> askSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask 1 size. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> askIv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask iv. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> markPriceIv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Mark pruce iv. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> underlyingPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Underlying price. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> totalVolume"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Total volume. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> totalTurnover"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Total turnover. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> delta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"delta value. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> gamma"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"gamma value. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> vega"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"vega value. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> theta"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"theta value. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> predictedDeliveryPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Predicted delivery price. ",(0,n.kt)("em",{parentName:"td"},"Unique for option"))))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(k,{mdxType:"Tabs"},(0,n.kt)(s,{value:"console",label:"JSON subscription message",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "op": "subscribe",\n    "args": [\n    "tickers.BTCPERP"\n    ],\n    "req_id": "test" // optional\n}\n')))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(k,{mdxType:"Tabs"},(0,n.kt)(s,{value:"trade-linear",label:"trade-linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "tickers.BTCUSDT",\n    "type": "snapshot",\n    "data": {\n        "symbol": "BTCUSDT",\n        "tickDirection": "ZeroPlusTick",\n        "price24hPcnt": "-0.038339",\n        "lastPrice": "17006.00",\n        "prevPrice24h": "17684.00",\n        "highPrice24h": "17716.00",\n        "lowPrice24h": "16950.00",\n        "prevPrice1h": "17067.50",\n        "markPrice": "17010.12",\n        "indexPrice": "17017.82",\n        "openInterest": "64463.144",\n        "turnover24h": "2830817790.1754985",\n        "volume24h": "163114.486",\n        "nextFundingTime": "2022-12-16T16:00:00Z",\n        "fundingRate": "0.000058",\n        "predictedFundingRate": "",\n        "bid1Price": "17005.50",\n        "bid1Size": "57.024",\n        "ask1Price": "17006.00",\n        "ask1Size": "51.397"\n    },\n    "cs": 22528804782,\n    "ts": 1671185168730\n}\n'))),(0,n.kt)(s,{value:"trade-option",label:"trade-option",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "tickers.BTC-17DEC22-17000-P-2214428527-1671185436919",\n    "topic": "tickers.BTC-17DEC22-17000-P",\n    "ts": 1671185436919,\n    "type": "snapshot"\n    "data": {,\n        "symbol": "BTC-17DEC22-17000-P",\n        "bidPrice": "135",\n        "bidSize": "2.04",\n        "bidIv": "0.4227",\n        "askPrice": "160",\n        "askSize": "1.13",\n        "askIv": "0.4966",\n        "lastPrice": "140",\n        "highPrice24h": "175",\n        "lowPrice24h": "10",\n        "markPrice": "159.94599871",\n        "indexPrice": "17020.97",\n        "markPriceIv": "0.4964",\n        "underlyingPrice": "17016.5542",\n        "openInterest": "64.82",\n        "turnover24h": "1703497.517736",\n        "volume24h": "98.88",\n        "totalVolume": "110",\n        "totalTurnover": "1888486",\n        "delta": "-0.47939401",\n        "gamma": "0.00085937",\n        "vega": "3.38384404",\n        "theta": "-83.97755295",\n        "predictedDeliveryPrice": "0",\n        "change24h": "6"\n    }\n}\n')))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9082],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>c});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var k=n.createContext({}),d=function(t){var e=n.useContext(k),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},s=function(t){var e=d(t.components);return n.createElement(k.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,k=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=d(l),c=r,m=p["".concat(k,".").concat(c)]||p[c]||o[c]||a;return l?n.createElement(m,u(u({ref:e},s),{},{components:l})):n.createElement(m,u({ref:e},s))}));function c(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,u=new Array(a);u[0]=p;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i.mdxType="string"==typeof t?t:r,u[1]=i;for(var d=2;d<a;d++)u[d]=l[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},31512:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>k,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=l(87462),r=(l(67294),l(3905));const a={title:"Get Tickers",sidebar_label:"Get Tickers",sidebar_position:6},u=void 0,i={unversionedId:"v5/market/tickers",id:"v5/market/tickers",title:"Get Tickers",description:"Query the latest price snapshot, best bid/ask price, and trading volume in the last 24 hours.",source:"@site/docs/v5/market/tickers.mdx",sourceDirName:"v5/market",slug:"/v5/market/tickers",permalink:"/docs-v2/v5/market/tickers",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Get Tickers",sidebar_label:"Get Tickers",sidebar_position:6},sidebar:"v5SideBar",previous:{title:"Get Orderbook",permalink:"/docs-v2/v5/market/orderbook"},next:{title:"Get Funding Rate History",permalink:"/docs-v2/v5/market/history-fund-rate"}},k={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},o=s("Tabs"),p=s("TabItem"),c={toc:d};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Query the latest price snapshot, best bid/ask price, and trading volume in the last 24 hours."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Covers: Spot / Linear contract / Inverse contract / Option"))),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/market/tickers")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,r.kt)("inlineCode",{parentName:"td"},"spot"),",",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Base coin. For ",(0,r.kt)("inlineCode",{parentName:"td"},"option")," ONLY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expDate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Expiry date. e.g., 25DEC22. For ",(0,r.kt)("inlineCode",{parentName:"td"},"option")," ONLY")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(p,{value:"future",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Product type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Index price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price 24 hours ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Percentage change of market price relative to 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice1h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price an hour ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterestValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest value ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Volume for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Funding rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> nextFundingTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Next funding time (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> predictedDeliveryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Predicated delivery price. It has value when 30 min before delivery ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> basisRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Basis rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryFeeRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delivery fee rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delivery timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid size ")))),(0,r.kt)(p,{value:"option",label:"Option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Product type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Iv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid iv ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Iv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask iv ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Index price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markIv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price iv ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> underlyingPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Underlying price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Volume for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> totalVolume"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total volume ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> totalTurnover"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total turnover ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> delta"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delta ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> gamma"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Gamma ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> vega"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Vega ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> theta"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Theta ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> predictedDeliveryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Predicated delivery price. It has value when 30 min before delivery ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> change24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The change in the last 24 hous ")))),(0,r.kt)(p,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Product type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price 24 hours ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Percentage change of market price relative to 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Volume for 24h "))))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(p,{value:"console-inverse",label:"Inverse",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/tickers?category=inverse&symbol=BTCUSD HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(p,{value:"console-option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/tickers?category=option&symbol=BTC-30DEC22-18000-C HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(p,{value:"console-spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/tickers?category=spot&symbol=BTCUSDT HTTP/1.1\nHost: api-testnet.bybit.com\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(p,{value:"js inverse",label:"Inverse",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "inverse",\n        "list": [\n            {\n                "symbol": "BTCUSD",\n                "lastPrice": "16597.00",\n                "indexPrice": "16598.54",\n                "markPrice": "16596.00",\n                "prevPrice24h": "16464.50",\n                "price24hPcnt": "0.008047",\n                "highPrice24h": "30912.50",\n                "lowPrice24h": "15700.00",\n                "prevPrice1h": "16595.50",\n                "openInterest": "373504107",\n                "openInterestValue": "22505.67",\n                "turnover24h": "2352.94950046",\n                "volume24h": "49337318",\n                "fundingRate": "-0.001034",\n                "nextFundingTime": "1672387200000",\n                "predictedDeliveryPrice": "",\n                "basisRate": "",\n                "deliveryFeeRate": "",\n                "deliveryTime": "0",\n                "ask1Size": "1",\n                "bid1Price": "16596.00",\n                "ask1Price": "16597.50",\n                "bid1Size": "1"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672376496682\n}\n'))),(0,r.kt)(p,{value:"js option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "option",\n        "list": [\n            {\n                "symbol": "BTC-30DEC22-18000-C",\n                "bid1Price": "0",\n                "bid1Size": "0",\n                "bid1Iv": "0",\n                "ask1Price": "435",\n                "ask1Size": "0.66",\n                "ask1Iv": "5",\n                "lastPrice": "435",\n                "highPrice24h": "435",\n                "lowPrice24h": "165",\n                "markPrice": "0.00000009",\n                "indexPrice": "16600.55",\n                "markIv": "0.7567",\n                "underlyingPrice": "16590.42",\n                "openInterest": "6.3",\n                "turnover24h": "2482.73",\n                "volume24h": "0.15",\n                "totalVolume": "99",\n                "totalTurnover": "1967653",\n                "delta": "0.00000001",\n                "gamma": "0.00000001",\n                "vega": "0.00000004",\n                "theta": "-0.00000152",\n                "predictedDeliveryPrice": "0",\n                "change24h": "86"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672376592395\n}\n'))),(0,r.kt)(p,{value:"js spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "spot",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "bid1Price": "16250.32",\n                "bid1Size": "0.00193",\n                "ask1Price": "16273.11",\n                "ask1Size": "0.005312",\n                "lastPrice": "16258.75",\n                "prevPrice24h": "16593.61",\n                "price24hPcnt": "-0.0202",\n                "highPrice24h": "16666.65",\n                "lowPrice24h": "12720",\n                "turnover24h": "36131144.90813012",\n                "volume24h": "2185.278433"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672046714063\n}\n')))))}m.isMDXComponent=!0}}]);
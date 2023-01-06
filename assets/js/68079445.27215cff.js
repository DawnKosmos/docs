"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9532],{3905:(t,e,l)=>{l.d(e,{Zo:()=>k,kt:()=>p});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function i(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?i(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},k=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),c=s(l),p=r,m=c["".concat(d,".").concat(p)]||c[p]||o[p]||i;return l?n.createElement(m,a(a({ref:e},k),{},{components:l})):n.createElement(m,a({ref:e},k))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=l.length,a=new Array(i);a[0]=c;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var s=2;s<i;s++)a[s]=l[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},46714:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=l(87462),r=(l(67294),l(3905));const i={title:"Ticker Info",sidebar_label:"Ticker Info",sidebar_position:6,slug:"/derivatives/public/ticker"},a=void 0,u={unversionedId:"v3/derivatives/rest-public/ticker-info",id:"v3/derivatives/rest-public/ticker-info",title:"Ticker Info",description:"Get all latest information of symbols.",source:"@site/docs/v3/derivatives/rest-public/ticker-info.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/ticker",permalink:"/docs-v2/derivatives/public/ticker",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Ticker Info",sidebar_label:"Ticker Info",sidebar_position:6,slug:"/derivatives/public/ticker"},sidebar:"v3SideBar",previous:{title:"Order Book",permalink:"/docs-v2/derivatives/public/orderbook"},next:{title:"Instrument Info",permalink:"/docs-v2/derivatives/public/instrument-info"}},d={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],k=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},o=k("Tabs"),c=k("TabItem"),p={toc:s};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get all latest information of symbols."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/tickers")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,r.kt)("inlineCode",{parentName:"td"},"option"),". Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", but in the response category shows ",(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"category"),"=option, ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol")," is ",(0,r.kt)("strong",{parentName:"td"},"required")),(0,r.kt)("li",null,"an option symbol, ",(0,r.kt)("inlineCode",{parentName:"td"},"category")," is ",(0,r.kt)("strong",{parentName:"td"},"required"))))))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(c,{value:"future",label:"linear&inverse",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'Derivatives products category. Keeps empty string `""` when `category` is not passed')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bidPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid price")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> askPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask price")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last transaction price")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastTickDirection"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Direction of price change")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Price of 24 hours ago")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Percentage change of market price relative to 24h")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Lowest price in the last 24 hours")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice1h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Hourly market price an hour ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Index price")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover in the last 24 hours")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Trading volume in the last 24 hours")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001123"},"Funding rate"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> nextFundingTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Next timestamp for funding to settle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> predictedDeliveryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Predicted delivery price. It has value when 30 min before delivery")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> basisRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Basis rate for futures")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryFeeRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delivery fee rate")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delivery timestamp (ms)")))),(0,r.kt)(c,{value:"option",label:"option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Derivatives products category ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"symbol "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bidPrice "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Best bid price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bidSize "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Best ask price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bidIv "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Implied volatility for best bid ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"askPrice "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Best ask price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"askSize "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Ask quantity ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"askIv "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Implied volatility for best ask ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"lastPrice "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Last transaction price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"highPrice24h "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"lowPrice24h "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"markPrice "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"indexPrice "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Index price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"markPriceIv "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Implied volatility for mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"underlyingPrice "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Underlying price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"openInterest "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Open interest ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"turnover24h "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Turnover in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"volume24h "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Trading volume in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"totalVolume "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Total volume ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"totalTurnover "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Total turnover ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"delta "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"delta ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"gamma "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"gamma ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"vega "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"vega ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"theta "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"theta ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"predictedDeliveryPrice "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"Predicted delivery price. It has value when 30 min before delivery ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"change24h "),(0,r.kt)("td",null,"string "),(0,r.kt)("td",null,"The change in the last 24 hours "))))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(c,{value:"console-inverse",label:"inverse",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/tickers?category=linear&symbol=BTCUSDZ22 HTTP/1.1\nHost: api.bybit.com\u200b\n"))),(0,r.kt)(c,{value:"console-option",label:"option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/tickers?category=option&symbol=BTC-30DEC22-19000-C HTTP/1.1\nHost: api.bybit.com\u200b\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(c,{value:"js inverse",label:"inverse",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "category": "inverse",\n    "list": [\n        {\n            "symbol": "BTCUSDZ22",\n            "bidPrice": "16825",\n            "askPrice": "16825.5",\n            "lastPrice": "16825.00",\n            "lastTickDirection": "ZeroPlusTick",\n            "prevPrice24h": "16830.50",\n            "price24hPcnt": "-0.000326",\n            "highPrice24h": "16859.50",\n            "lowPrice24h": "16798.50",\n            "prevPrice1h": "16824.50",\n            "markPrice": "16824.02",\n            "indexPrice": "16825.28",\n            "openInterest": "7653441",\n            "turnover24h": "30.80109312",\n            "volume24h": "518542",\n            "fundingRate": "",\n            "nextFundingTime": "0",\n            "predictedDeliveryPrice": "0.00",\n            "basisRate": "-0.00009093",\n            "deliveryFeeRate": "0.0005",\n            "deliveryTime": "1672387200000"\n        }\n    ]\n},\n    "retExtInfo": {},\n    "time": 1671969377669\n}\n'))),(0,r.kt)(c,{value:"js option",label:"option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "SUCCESS",\n    "result": {\n        "category": "option",\n        "symbol": "BTC-30DEC22-19000-C",\n        "bidPrice": "5",\n        "bidSize": "0.49",\n        "bidIv": "0.4875",\n        "askPrice": "20",\n        "askSize": "12.69",\n        "askIv": "0.6091",\n        "lastPrice": "20",\n        "highPrice24h": "20",\n        "lowPrice24h": "5",\n        "markPrice": "7.60392245",\n        "indexPrice": "16825.77",\n        "markPriceIv": "0.5179",\n        "underlyingPrice": "16800.92",\n        "openInterest": "347.52",\n        "turnover24h": "336.1553",\n        "volume24h": "0.02",\n        "totalVolume": "2148",\n        "totalTurnover": "29041290",\n        "delta": "0.02097273",\n        "gamma": "0.00005034",\n        "vega": "0.97458031",\n        "theta": "-5.22080293",\n        "predictedDeliveryPrice": "0",\n        "change24h": "1"\n},\n    "retExtInfo": {},\n    "time": 1671969555910\n}\n')))))}m.isMDXComponent=!0}}]);
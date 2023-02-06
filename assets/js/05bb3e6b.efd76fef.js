"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[926],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>p});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),d=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},k=function(t){var e=d(t.components);return l.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),m=d(n),p=r,c=m["".concat(o,".").concat(p)]||m[p]||s[p]||a;return n?l.createElement(c,u(u({ref:e},k),{},{components:n})):l.createElement(c,u({ref:e},k))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,u=new Array(a);u[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,u[1]=i;for(var d=2;d<a;d++)u[d]=n[d];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25068:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var l=n(87462),r=(n(67294),n(3905));const a={title:"Get Instruments Info",sidebar_label:"Get Instruments Info",sidebar_position:4.5},u=void 0,i={unversionedId:"v5/market/instrument",id:"v5/market/instrument",title:"Get Instruments Info",description:"Query a list of instruments of online trading pair.",source:"@site/docs/v5/market/instrument.mdx",sourceDirName:"v5/market",slug:"/v5/market/instrument",permalink:"/docs-v2/v5/market/instrument",draft:!1,tags:[],version:"current",sidebarPosition:4.5,frontMatter:{title:"Get Instruments Info",sidebar_label:"Get Instruments Info",sidebar_position:4.5},sidebar:"v5SideBar",previous:{title:"Get Premium Index Price Kline",permalink:"/docs-v2/v5/market/preimum-index-kline"},next:{title:"Get Orderbook",permalink:"/docs-v2/v5/market/orderbook"}},o={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],k=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},s=k("Tabs"),m=k("TabItem"),p={toc:d};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Query a list of instruments of online trading pair."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Covers: Spot / Linear contract / Inverse contract / Option"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Spot does not support pagination, so ",(0,r.kt)("inlineCode",{parentName:"li"},"limit"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cursor")," are invalid."),(0,r.kt)("li",{parentName:"ul"},"When query by ",(0,r.kt)("inlineCode",{parentName:"li"},"baseCoin"),", regardless of category=",(0,r.kt)("inlineCode",{parentName:"li"},"linear")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"inverse"),", the result will have Linear contract and Inverse contract symbols."))),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/market/instruments-info")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,r.kt)("inlineCode",{parentName:"td"},"spot"),",",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Base coin. ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"em"},"inverse"),",",(0,r.kt)("inlineCode",{parentName:"em"},"option")," ",(0,r.kt)("strong",{parentName:"em"},"only")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1000"),"]",". Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"500"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cursor. Used for pagination")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(m,{value:"future",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Product type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cursor. Used to pagination")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ",(0,r.kt)("a",{href:"../enum#contracttype"},"contractType")),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Contract type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ",(0,r.kt)("a",{href:"../enum#status"},"status")),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Instrument status ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> baseCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Base coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> quoteCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Quote coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> launchTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Launch timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delivery timestamp (ms). Valid for Inverse Futures ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryFeeRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delivery fee rate. Valid for Inverse Futures")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceScale"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Price scale ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leverageFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"Leverage attributes ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minLeverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Minimum leverage ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxLeverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Maximum leverage ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> leverageStep"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The step to increase/reduce leverage ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"Price attributes ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Minimum order price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Maximum order price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> tickSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The step to increase/reduce order price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lotSizeFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"Size attributes ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Maximum order quantity ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Minimum order quantity ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> qtyStep"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The step to increase/reduce order quantity ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> postOnlyMaxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Maximum order qty for PostOnly order ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unifiedMarginTrade"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"Whether to support unified margin trade ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingInterval"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Funding interval (minute) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> settleCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Settle coin ")))),(0,r.kt)(m,{value:"option",label:"Option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Product type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cursor. Used to pagination")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> optionsType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Option type. ",(0,r.kt)("code",null,"Call"),", ",(0,r.kt)("code",null,"Put")," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ",(0,r.kt)("a",{href:"../enum#status"},"status")),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Instrument status ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> baseCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Base coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> quoteCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Quote coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> settleCoin"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"Settle coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> launchTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Launch timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delivery timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryFeeRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delivery fee rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"Price attributes ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Minimum order price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Maximum order price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> tickSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The step to increase/reduce order price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lotSizeFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"Size attributes ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Maximum order quantity ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Minimum order quantity ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> qtyStep"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The step to increase/reduce order quantity ")))),(0,r.kt)(m,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Product type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> baseCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Base coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> quoteCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Quote coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> innovation"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Whether to belong to innovation. `0`: false, `1`: true ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ",(0,r.kt)("a",{href:"../enum#status"},"status")),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Instrument status ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lotSizeFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"Size attributes ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> basePrecision"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The precision of base coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> quotePrecision"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The precision of quote coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Minimum order quantity ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Maximum order quantity ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderAmt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Minimum order amount ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderAmt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Maximum order amount ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"Price attributes ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> tickSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The step to increase/reduce order price "))))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(m,{value:"console-linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/instruments-info?category=linear&symbol=BTCUSDT HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(m,{value:"console-option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/instruments-info?category=option&symbol=ETH-3JAN23-1250-P HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(m,{value:"console-spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/instruments-info?category=spot&symbol=BTCUSDT HTTP/1.1\nHost: api-testnet.bybit.com\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(m,{value:"js linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "contractType": "LinearPerpetual",\n                "status": "Trading",\n                "baseCoin": "BTC",\n                "quoteCoin": "USDT",\n                "launchTime": "1585526400000",\n                "deliveryTime": "0",\n                "deliveryFeeRate": "",\n                "priceScale": "2",\n                "leverageFilter": {\n                    "minLeverage": "1",\n                    "maxLeverage": "100.00",\n                    "leverageStep": "0.01"\n                },\n                "priceFilter": {\n                    "minPrice": "0.50",\n                    "maxPrice": "999999.00",\n                    "tickSize": "0.50"\n                },\n                "lotSizeFilter": {\n                    "maxOrderQty": "100.000",\n                    "minOrderQty": "0.001",\n                    "qtyStep": "0.001",\n                    "postOnlyMaxOrderQty": "1000.000"\n                },\n                "unifiedMarginTrade": true,\n                "fundingInterval": 480,\n                "settleCoin": "USDT"\n            }\n        ],\n        "nextPageCursor": ""\n    },\n    "retExtInfo": {},\n    "time": 1672712495660\n}\n'))),(0,r.kt)(m,{value:"js option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "option",\n        "nextPageCursor": "",\n        "list": [\n            {\n                "category": "option",\n                "symbol": "ETH-3JAN23-1250-P",\n                "status": "ONLINE",\n                "baseCoin": "ETH",\n                "quoteCoin": "USD",\n                "settleCoin": "USDC",\n                "optionsType": "Put",\n                "launchTime": "1672560000000",\n                "deliveryTime": "1672732800000",\n                "deliveryFeeRate": "0.00015",\n                "priceFilter": {\n                    "minPrice": "0.1",\n                    "maxPrice": "10000000",\n                    "tickSize": "0.1"\n                },\n                "lotSizeFilter": {\n                    "maxOrderQty": "1500",\n                    "minOrderQty": "0.1",\n                    "qtyStep": "0.1"\n                }\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672712537130\n}\n'))),(0,r.kt)(m,{value:"js spot",label:"spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "spot",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "baseCoin": "BTC",\n                "quoteCoin": "USDT",\n                "innovation": "0",\n                "status": "1",\n                "lotSizeFilter": {\n                    "basePrecision": "0.000001",\n                    "quotePrecision": "0.00000001",\n                    "minOrderQty": "0.00004",\n                    "maxOrderQty": "63.01197227",\n                    "minOrderAmt": "1",\n                    "maxOrderAmt": "100000"\n                },\n                "priceFilter": {\n                    "tickSize": "0.01"\n                }\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672712468011\n}\n')))))}c.isMDXComponent=!0}}]);
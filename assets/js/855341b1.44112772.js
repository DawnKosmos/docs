"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1792],{3905:(t,e,l)=>{l.d(e,{Zo:()=>o,kt:()=>c});var r=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function d(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,r,n=function(t,e){if(null==t)return{};var l,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var u=r.createContext({}),k=function(t){var e=r.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):d(d({},e),t)),l},o=function(t){var e=k(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var l=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),p=k(l),c=n,m=p["".concat(u,".").concat(c)]||p[c]||s[c]||a;return l?r.createElement(m,d(d({ref:e},o),{},{components:l})):r.createElement(m,d({ref:e},o))}));function c(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=l.length,d=new Array(a);d[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,d[1]=i;for(var k=2;k<a;k++)d[k]=l[k];return r.createElement.apply(null,d)}return r.createElement.apply(null,l)}p.displayName="MDXCreateElement"},40488:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>k});var r=l(87462),n=(l(67294),l(3905));l(57670);const a={title:"Get Order List",sidebar_label:"Get Order List",sidebar_position:9,slug:"/derivatives/unified/order-list"},d=void 0,i={unversionedId:"v3/derivatives/rest-unified/order/order-list",id:"v3/derivatives/rest-unified/order/order-list",title:"Get Order List",description:"Query order list.",source:"@site/docs/v3/derivatives/rest-unified/order/order-list.mdx",sourceDirName:"v3/derivatives/rest-unified/order",slug:"/derivatives/unified/order-list",permalink:"/docs-v2/derivatives/unified/order-list",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Get Order List",sidebar_label:"Get Order List",sidebar_position:9,slug:"/derivatives/unified/order-list"},sidebar:"v3SideBar",previous:{title:"Batch Cancel Order",permalink:"/docs-v2/derivatives/unified/batch-cancel"},next:{title:"My Position",permalink:"/docs-v2/derivatives/unified/position-info"}},u={},k=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],o=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},s=o("Tabs"),p=o("TabItem"),c={toc:k};function m(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Query order list.",(0,n.kt)("br",null),"\nAs order creation/cancellation is ",(0,n.kt)("strong",{parentName:"p"},"asynchronous"),", the data returned from this endpoint may delay.")),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/order/list")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"orderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Return all status orders if not passed. You could pass multiple status, separated by comma")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderFilter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Order"),": active order, ",(0,n.kt)("inlineCode",{parentName:"td"},"StopOrder"),": conditional order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Page direction. ",(0,n.kt)("inlineCode",{parentName:"td"},"prev"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"next"),". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"next"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"50"),"]",". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Used for pagination")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)(s,{mdxType:"Tabs"},(0,n.kt)(p,{value:"linear",label:"linear",default:!0,mdxType:"TabItem"},(0,n.kt)("table",{border:"0.5"},(0,n.kt)("tr",null,(0,n.kt)("th",null,"Parameter"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Comments")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"nextPageCursor"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cursor. Used to pagination")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"category"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Products category")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"list"),(0,n.kt)("td",null,"array"),(0,n.kt)("td",null,"Object")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> symbol"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Symbol name ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderType"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order type. `Market`,`Limit` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderLinkId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"User customised order id ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order id ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> stopOrderType"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Stop order type. `TakeProfit`,`StopLoss`,`TrailingStop`,`Stop` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderStatus"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order status ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> takeProfit"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Take profit price ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecValue"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed value ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> blockTradeId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Block trade id ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> rejectReason"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Reject reason ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> price"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order price ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> createdTime"),(0,n.kt)("td",null,"number"),(0,n.kt)("td",null,"Order created time ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> tpTriggerBy"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"The price type to trigger take profit. `MarkPrice`, `IndexPrice`, default:`LastPrice` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> timeInForce"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001044"},"Time in force"),". `GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, ",(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001051"},"`PostOnly`")," ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> basePrice"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Base price. `StopOrder` ONLY ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> leavesValue"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"The value of unfilled ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> updatedTime"),(0,n.kt)("td",null,"number"),(0,n.kt)("td",null,"Order updated time ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> side"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"`Buy`, `Sell` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> triggerPrice"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"TriggerPrice. `StopOrder` ONLY ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecFee"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed trading fee ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> slTriggerBy"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"The price type to trigger stop loss. `MarkPrice`, `IndexPrice`, default:`LastPrice`  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> leavesQty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Remaining qty pend to be filled ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> closeOnTrigger"),(0,n.kt)("td",null,"boolean"),(0,n.kt)("td",null,"is a closeOnTrigger order or not ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecQty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed qty ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> reduceOnly"),(0,n.kt)("td",null,"boolean"),(0,n.kt)("td",null,"is a reduceOnly order or not  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> qty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order quantity ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> stopLoss"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Stop loss price ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> triggerBy"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Trigger price type. `LastPrice`, `IndexPrice`, `MarkPrice` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderIM"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order initial margin ")))),(0,n.kt)(p,{value:"option",label:"option",mdxType:"TabItem"},(0,n.kt)("table",{border:"0.5"},(0,n.kt)("tr",null,(0,n.kt)("th",null,"Parameter"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Comments")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"nextPageCursor"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cursor. Used to pagination")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"category"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Products category")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"list"),(0,n.kt)("td",null,"array"),(0,n.kt)("td",null,"Object")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> symbol"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Symbol name ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderType"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order type. `Market`,`Limit`  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> updatedTime"),(0,n.kt)("td",null,"number"),(0,n.kt)("td",null,"Order updated time  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> side"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"`Buy`, `Sell`  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderLinkId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"User customised order id  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecFee"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed trading fee  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order id  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> leavesQty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Remaining qty pend to be filled  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderStatus"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order status  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> iv"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Implied volatility ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecValue"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed value  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> blockTradeId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Block trade id  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> rejectReason"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Reject reason  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecQty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed qty  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> reduceOnly"),(0,n.kt)("td",null,"boolean"),(0,n.kt)("td",null,"is a reduceOnly order or not   ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> price"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order price  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> qty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order quantity ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> createdTime"),(0,n.kt)("td",null,"number"),(0,n.kt)("td",null,"Order created time  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> timeInForce"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001044"},"Time in force"),". `GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, ",(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001051"},"`PostOnly`"),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderIM"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order initial margin  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> basePrice"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Base price "))))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/order/list?category=linear&orderFilter=StopOrder&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672811957817\nX-BAPI-RECV-WINDOW: 5000\ncdn-request-id: test-002\n")),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "nextPageCursor": "c6f055d9-7f21-4079-913d-e6523a9cfffa%3A1672216686849%2Cc6f055d9-7f21-4079-913d-e6523a9cfffa%3A1672216686849",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "ETHPERP",\n                "orderType": "Limit",\n                "orderLinkId": "linear-004",\n                "orderId": "c6f055d9-7f21-4079-913d-e6523a9cfffa",\n                "stopOrderType": "Stop",\n                "orderStatus": "Deactivated",\n                "takeProfit": "",\n                "cumExecValue": "0",\n                "blockTradeId": "",\n                "rejectReason": "EC_NoError",\n                "price": "1050",\n                "createdTime": 1672216686849,\n                "tpTriggerBy": "UNKNOWN",\n                "timeInForce": "GoodTillCancel",\n                "basePrice": "1188",\n                "leavesValue": "0",\n                "updatedTime": 1672217377166,\n                "side": "Sell",\n                "triggerPrice": "1145.00000000",\n                "cumExecFee": "0",\n                "slTriggerBy": "UNKNOWN",\n                "leavesQty": "0",\n                "closeOnTrigger": false,\n                "cumExecQty": "0",\n                "reduceOnly": false,\n                "qty": "0.15",\n                "stopLoss": "",\n                "triggerBy": "MarkPrice",\n                "orderIM": ""\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672811958171\n}\n')))}m.isMDXComponent=!0},57670:()=>{}}]);
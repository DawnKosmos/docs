"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5226],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),o=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),g=o(r),s=n,c=g["".concat(d,".").concat(s)]||g[s]||k[s]||l;return r?a.createElement(c,i(i({ref:e},m),{},{components:r})):a.createElement(c,i({ref:e},m))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=g;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},13772:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u5275\u5efa\u6d3b\u52d5\u59d4\u6258\u55ae",sidebar_label:"\u5275\u5efa\u6d3b\u52d5\u59d4\u6258\u55ae",sidebar_position:1,slug:"/spot/trade/place-order"},i=void 0,p={unversionedId:"v3/spot/rest-spot/place-order",id:"v3/spot/rest-spot/place-order",title:"\u5275\u5efa\u6d3b\u52d5\u59d4\u6258\u55ae",description:"\u666e\u901a\u55ae\u548c\u6b62\u76c8\u6b62\u640d\u55ae\u7684orderLinkId\u4e0d\u80fd\u91cd\u8907",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/rest-spot/place-order.mdx",sourceDirName:"v3/spot/rest-spot",slug:"/spot/trade/place-order",permalink:"/docs-v2/zh-TW/spot/trade/place-order",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5275\u5efa\u6d3b\u52d5\u59d4\u6258\u55ae",sidebar_label:"\u5275\u5efa\u6d3b\u52d5\u59d4\u6258\u55ae",sidebar_position:1,slug:"/spot/trade/place-order"},sidebar:"v3SideBar",previous:{title:"Bybit\u670d\u52d9\u5668\u6642\u9593",permalink:"/docs-v2/zh-TW/spot/public/server-time"},next:{title:"\u67e5\u8a62\u6d3b\u52d5\u59d4\u6258",permalink:"/docs-v2/zh-TW/spot/trade/get-order"}},d={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:4},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:4},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:4},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:o};function k(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u666e\u901a\u55ae\u548c\u6b62\u76c8\u6b62\u640d\u55ae\u7684",(0,n.kt)("strong",{parentName:"p"},"orderLinkId"),"\u4e0d\u80fd\u91cd\u8907")),(0,n.kt)("h4",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"POST ",(0,n.kt)("code",null,"/spot/v3/private/order")),(0,n.kt)("h4",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5e63\u5c0d\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u6578\u91cf(\u5e02\u50f9\u8cb7\u55ae\u5373type=MARKET\u4e14side=BUY currency\uff1b\u6bd4\u5982BTCUSDT\u7684qty\u6307\u7684\u662fUSDT\u7684qty, \u800c\u975e\u5e02\u50f9\u8cb7\u55ae\u6642qty\u6307\u5411\u90fd\u662fBTC)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"side"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8cb7\u8ce3\u65b9\u5411. ",(0,n.kt)("code",null,"BUY"),"\uff1a\u8cb7\u5165, ",(0,n.kt)("code",null,"SELL"),"\uff1a\u8ce3\u51fa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#ordertype"},"orderType")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b, LIMIT/MARKET/LIMIT_MAKER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u57f7\u884c\u7b56\u7565"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c\u3002type\u5b57\u6bb5\u70baMARKET\u6642\uff0cprice\u5b57\u6bb5\u70ba\u975e\u5fc5\u9808\u3002type\u5b57\u6bb5\u70baLIMIT\u6216LIMIT_MAKER\u6642\uff0cprice\u5b57\u6bb5\u70ba\u5fc5\u9808")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7279\u6b8a\u8a02\u55aeID\uff0c\u7528\u6236\u81ea\u5df1\u751f\u6210")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderCategory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. \u9ed8\u8a8d\u70ba",(0,n.kt)("code",null,"0"),"\uff1a\u666e\u901a\u8a02\u55ae; ",(0,n.kt)("code",null,"1"),"\uff1a",(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001736"},"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae"),", \u4e0b\u6b62\u76c8\u6b62\u640d\u55ae\uff0c\u8a72\u53c3\u6578",(0,n.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c. \u7528\u65bc\u6b62\u76c8\u6b62\u640d\u55ae")))),(0,n.kt)("h4",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7279\u6b8a\u8a02\u55aeID\uff0c\u7528\u6236\u81ea\u5df1\u751f\u6210")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5e63\u5c0d\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"createTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5275\u5efa\u6642\u9593")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c\uff0c\u5c0d\u65bcLIMIT \u8a02\u55ae\u5fc5\u9700\u767c\u9001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b, LIMIT/MARKET/LIMIT_MAKER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#side"},"side")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8cb7\u8ce3\u65b9\u5411. ",(0,n.kt)("code",null,"BUY"),"\uff1a\u8cb7\u5165, ",(0,n.kt)("code",null,"SELL"),"\uff1a\u8ce3\u51fa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"status")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u72c0\u614b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u57f7\u884c\u7b56\u7565"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accountId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"execQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8acb\u5ffd\u7565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderCategory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. \u9ed8\u8a8d\u70ba",(0,n.kt)("code",null,"0"),"\uff1a\u666e\u901a\u8a02\u55ae; ",(0,n.kt)("code",null,"1"),"\uff1a",(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001736"},"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae"),"\uff0c\u82e5\u662f\u6b62\u76c8\u6b62\u640d\u5247",(0,n.kt)("b",null,"\u5fc5\u50b3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'curl --location --request POST \'https://api-testnet.bybit.com/spot/v3/private/order\' \\\n--header \'X-BAPI-SIGN: XXXXX\' \\\n--header \'X-BAPI-API-KEY: {api key}\' \\\n--header \'X-BAPI-TIMESTAMP: 1659067662307\' \\\n--header \'X-BAPI-RECV-WINDOW: 5000\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "symbol": "BTCUSDT",\n    "orderQty":"0.01",\n    "side": "BUY",\n    "orderType": "LIMIT",\n    "timeInForce": "GTC",\n    "orderPrice": "21300",\n    "orderLinkId": "spotx006",\n    "orderCategory": 1,\n    "triggerPrice": "21700"\n}\'\n')),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "orderId": "1230969397479298560",\n        "orderLinkId": "spotx006",\n        "symbol": "BTCUSDT",\n        "createTime": "1661478987332",\n        "orderPrice": "21300",\n        "orderQty": "0.01",\n        "orderType": "LIMIT",\n        "side": "BUY",\n        "status": "ORDER_NEW",\n        "timeInForce": "GTC",\n        "accountId": "554118",\n        "orderCategory": 1,\n        "triggerPrice": "21700"\n    },\n    "retExtMap": {},\n    "retExtInfo": null,\n    "time": 1661478987364\n}\n')))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8755],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),p=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(r),u=a,k=m["".concat(d,".").concat(u)]||m[u]||s[u]||l;return r?n.createElement(k,o(o({ref:e},c),{},{components:r})):n.createElement(k,o({ref:e},c))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1513:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u64a4\u92b7\u6d3b\u52d5\u59d4\u6258\u55ae",sidebar_label:"\u64a4\u92b7\u6d3b\u52d5\u59d4\u6258\u55ae",sidebar_position:3,slug:"/spot/trade/cancel"},o=void 0,i={unversionedId:"v3/spot/rest-spot/cancel-order",id:"v3/spot/rest-spot/cancel-order",title:"\u64a4\u92b7\u6d3b\u52d5\u59d4\u6258\u55ae",description:"HTTP \u8acb\u6c42",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/rest-spot/cancel-order.mdx",sourceDirName:"v3/spot/rest-spot",slug:"/spot/trade/cancel",permalink:"/docs-v2/zh-TW/spot/trade/cancel",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u64a4\u92b7\u6d3b\u52d5\u59d4\u6258\u55ae",sidebar_label:"\u64a4\u92b7\u6d3b\u52d5\u59d4\u6258\u55ae",sidebar_position:3,slug:"/spot/trade/cancel"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u6d3b\u52d5\u59d4\u6258",permalink:"/docs-v2/zh-TW/spot/trade/get-order"},next:{title:"\u8a02\u55ae\u5217\u8868",permalink:"/docs-v2/zh-TW/spot/trade/open-order"}},d={},p=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:4},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:4},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:4},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},s=c("Tabs"),m=c("TabItem"),u={toc:p};function k(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("code",null,"/spot/v3/private/cancel-order")),(0,a.kt)("h4",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID. \u7576",(0,a.kt)("code",null,"orderLinkId"),"\u70ba\u7a7a\u6642, \u5247",(0,a.kt)("b",null,"\u5fc5\u50b3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9ID. \u7576",(0,a.kt)("code",null,"orderId"),"\u70ba\u7a7a\u6642, \u5247",(0,a.kt)("b",null,"\u5fc5\u50b3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderCategory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. \u9ed8\u8a8d\u70ba",(0,a.kt)("code",null,"0"),"\uff1a\u666e\u901a\u8a02\u55ae; ",(0,a.kt)("code",null,"1"),"\uff1a",(0,a.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001736"},"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae"),"\uff0c\u82e5\u662f\u6b62\u76c8\u6b62\u640d\u5247",(0,a.kt)("b",null,"\u5fc5\u50b3"))))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7279\u6b8a\u8a02\u55aeID\uff0c\u7528\u6236\u81ea\u5df1\u751f\u6210")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u5c0d\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u72c0\u614b\u3002\u53ef\u80fd\u51fa\u73fe\u7684\u503c\u70ba\uff1aNEW(\u65b0\u8a02\u55ae\uff0c\u7121\u6210\u4ea4)\u3001PARTIALLY_FILLED\uff08\u90e8\u5206\u6210\u4ea4\uff09\u3001FILLED\uff08\u5168\u90e8\u6210\u4ea4\uff09\u3001CANCELED\uff08\u5df2\u53d6\u6d88\uff09\u548cREJECTED\uff08\u8a02\u55ae\u88ab\u62d2\u7d55\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"accountId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"createTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5275\u5efa\u6642\u9593")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderQty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"execQty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"timeInForce"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u57f7\u884c\u7b56\u7565"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"orderType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b, LIMIT/MARKET/LIMIT_MAKER")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"side"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cb7\u8ce3\u65b9\u5411. ",(0,a.kt)("code",null,"Buy"),"\uff1a\u8cb7\u5165, ",(0,a.kt)("code",null,"Sell"),"\uff1a\u8ce3\u51fa.")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(m,{value:"console",label:"Console",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request POST 'https://api-testnet.bybit.com/spot/v3/private/cancel-order' \\\n--header 'X-BAPI-SIGN: 2cdc75a6be90f2a3d70875595c289b6342ff55021a26d9fecf988a8f78266ccc' \\\n--header 'X-BAPI-API-KEY: {api key}' \\\n--header 'X-BAPI-TIMESTAMP: 1659078017415' \\\n--header 'X-BAPI-RECV-WINDOW: 5000' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"orderId\": \"1210810256551063296\",\n    \"orderLinkId\": null\n}'\n")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "orderId": "1210810256551063296",\n        "orderLinkId": "spotA0010",\n        "symbol": "BTCUSDT",\n        "status": "NEW",\n        "accountId": "533287",\n        "createTime": "1659075830464",\n        "orderPrice": "23500",\n        "orderQty": "0.01",\n        "execQty": "0",\n        "timeInForce": "GTC",\n        "orderType": "LIMIT",\n        "side": "SELL"\n    },\n    "retExtMap": {},\n    "retExtInfo": {},\n    "time": 1659078151226\n}\n')))}k.isMDXComponent=!0}}]);
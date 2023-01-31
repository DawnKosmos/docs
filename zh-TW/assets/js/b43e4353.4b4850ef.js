"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6950],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),N=m(a),g=r,c=N["".concat(p,".").concat(g)]||N[g]||o[g]||l;return a?n.createElement(c,i(i({ref:e},k),{},{components:a})):n.createElement(c,i({ref:e},k))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},35589:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u67e5\u8a62\u6210\u4ea4\u7d00\u9304",sidebar_label:"\u67e5\u8a62\u6210\u4ea4\u7d00\u9304",sidebar_position:8,slug:"/derivatives/contract/execution-list"},i=void 0,d={unversionedId:"v3/derivatives/rest-contract/position/execution",id:"v3/derivatives/rest-contract/position/execution",title:"\u67e5\u8a62\u6210\u4ea4\u7d00\u9304",description:"\u7372\u53d6\u7528\u6236\u6210\u4ea4\u7d00\u9304\uff0c\u8fd4\u56de\u7d50\u679c\u6309execTime\u964d\u5e8f\u6392\u5217",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/position/execution.mdx",sourceDirName:"v3/derivatives/rest-contract/position",slug:"/derivatives/contract/execution-list",permalink:"/docs-v2/zh-TW/derivatives/contract/execution-list",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u67e5\u8a62\u6210\u4ea4\u7d00\u9304",sidebar_label:"\u67e5\u8a62\u6210\u4ea4\u7d00\u9304",sidebar_position:8,slug:"/derivatives/contract/execution-list"},sidebar:"v3SideBar",previous:{title:"\u8a2d\u7f6e\u98a8\u96aa\u9650\u984d",permalink:"/docs-v2/zh-TW/derivatives/contract/set-risk-limit"},next:{title:"\u67e5\u8a62\u5e73\u5009\u76c8\u8667",permalink:"/docs-v2/zh-TW/derivatives/contract/closepnl"}},p={},m=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],k={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7372\u53d6\u7528\u6236\u6210\u4ea4\u7d00\u9304\uff0c\u8fd4\u56de\u7d50\u679c\u6309",(0,r.kt)("inlineCode",{parentName:"p"},"execTime"),"\u964d\u5e8f\u6392\u5217"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u652f\u6301\u6642\u9593\u7bc4\u570d:"),(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"USDT\u6c38\u7e8c, \u53cd\u5411\u6c38\u7e8c, \u53cd\u5411\u4ea4\u5272: \u904e\u53bb\u5169\u5e74")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u55ae\u7b46\u8a02\u55ae\u53ef\u80fd\u6703\u6709\u591a\u6b21\u6210\u4ea4")),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/execution/list")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeiD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#exectype"},"execType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"100"),"]",". default: ",(0,r.kt)("inlineCode",{parentName:"td"},"50"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeiD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> orderPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> orderQty"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u6578\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> orderType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. \u5e02\u50f9\u55ae: ",(0,r.kt)("inlineCode",{parentName:"td"},"Market"),",\u9650\u50f9\u55ae: ",(0,r.kt)("inlineCode",{parentName:"td"},"Limit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"../enum#stopordertype"},"stopOrderType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6761\u4ef6\u5355\u7684\u8ba2\u5355\u7c7b\u578b\u3002\u5982\u679c\u8be5\u8ba2\u5355\u4e0d\u662f\u6761\u4ef6\u5355\uff0c\u5219\u4e0d\u4f1a\u8fd4\u56de\u4efb\u4f55\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execFee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u624b\u7e8c\u8cbb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execQty"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u6578\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"../enum#exectype"},"execType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u50f9\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> feeRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u7e8c\u8cbb\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"../enum#lastliquidityind"},"lastLiquidityInd")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u52d5\u6027\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"AddedLiquidity"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"RemovedLiquidity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> isMaker"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662fmaker\u55ae")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> leavesQty"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5269\u9918\u59d4\u8a17\u672a\u6210\u4ea4\u50f9\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> closedSize"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u5009\u6578\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> iv"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u96b1\u542b\u6ce2\u52d5\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> blockTradeId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5927\u5b97\u4ea4\u6613\u7684\u8ba2\u5355 ID \uff0c\u4f7f\u7528 paradigm \u8fdb\u884c\u5927\u5b97\u4ea4\u6613\u65f6\u751f\u6210\u7684 ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> markPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u57f7\u884c\u6642\uff0c\u8a72 symbol \u7576\u6642\u7684\u6a19\u8a18\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> indexPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u57f7\u884c\u6642\uff0c\u8a72 symbol \u7576\u6642\u7684\u6307\u6578\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> markIv"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a19\u8a18\u50f9\u683c\u7684\u96b1\u542b\u6ce2\u52d5\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> underlyingPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u57f7\u884c\u6642\uff0c\u8a72 symbol \u7576\u6642\u7684\u5e95\u5c64\u8cc7\u7522\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u6642\u9593\uff08\u6beb\u79d2\uff09")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /contract/v3/private/execution/list?symbol=ETHUSDT&limit=1&category=linear HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670853954362\nX-BAPI-RECV-WINDOW: 5000\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "symbol": "ETHUSDT",\n                "execFee": "-0.08720013",\n                "execId": "208751d8-f70e-4570-a5fd-d208c82af99d",\n                "execPrice": "1263.77",\n                "execQty": "0.69",\n                "execType": "Funding",\n                "execValue": "872.0013",\n                "feeRate": "-0.0001",\n                "lastLiquidityInd": "UNKNOWN",\n                "leavesQty": "0.00",\n                "orderId": "1673136000-ETHUSDT-592334-Sell",\n                "orderLinkId": "",\n                "orderPrice": "0.00",\n                "orderQty": "0.00",\n                "orderType": "UNKNOWN",\n                "stopOrderType": "UNKNOWN",\n                "side": "Sell",\n                "execTime": "1673136000000",\n                "closedSize": "0.00",\n                "iv": "",\n                "blockTradeId": "",\n                "markPrice": "",\n                "markIv": "",\n                "underlyingPrice": "",\n                "indexPrice": "",\n                "isMaker": false\n            }\n        ],\n        "nextPageCursor": "ZzU3NlU4M1JlLzhFTWkzeW9hemRVcitqUk4wVW9LL21KVTRWV3JPR0tYTG9uTENWSkFvUDJuWk44OVBlNnB0ZjJHTTFwdlJRV0tpZFM0Z0RzUlQ0d2FSbzVRN2lpZ0ZrZmt2UTZuRlJVSHdQSHdoYXUvdDN6aExzOEpmcDNFY2NLc2dYTnRvOXhmTmY3NVNreVgzQ2RKUFZtekptU0NQNU1rOWd5YzZRV1ZDejVFM0t0MGdlMENNc04ybzQvc2JQQ3BVRkQycHU3MFdBK3RqdFlWaVRkMTNGQmZRUUZpaVc4MkE1SnRCT09iZDRNL2FlNDVSMithdU96NTROWGFxcTFucW1MSnJSaTluM29pZm85dHVkNzJMSVQwODk4UTJLbHEybDJ0Uk9UYmtCcU5ScU9zZWRCa2Znc0dwbmNEOWJoaCtnZkRkWjlrMEl6elRmWnljeHZpYXBPWVdzZSs0UEtvdnZ4cTJHQ2JZcm1UQkU3TXFKS01yU1dmaloyT3pVS1psbmVaamh3N3Ntc0hFbEgwckxtQT09",\n        "category": ""\n    },\n    "retExtInfo": {},\n    "time": 1673150404910\n}\n')))}o.isMDXComponent=!0}}]);
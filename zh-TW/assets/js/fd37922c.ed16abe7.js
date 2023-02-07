"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[78560],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=o(a),u=r,s=N["".concat(d,".").concat(u)]||N[u]||m[u]||l;return a?n.createElement(s,i(i({ref:e},k),{},{components:a})):n.createElement(s,i({ref:e},k))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},65201:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u67e5\u8a62API Key\u76f8\u95dc\u4fe1\u606f",sidebar_label:"\u67e5\u8a62API Key\u76f8\u95dc\u4fe1\u606f",sidebar_position:5,slug:"/account-asset/apikey-info"},i=void 0,p={unversionedId:"v3/account-asset/user/apikey-info",id:"v3/account-asset/user/apikey-info",title:"\u67e5\u8a62API Key\u76f8\u95dc\u4fe1\u606f",description:"\u7372\u53d6API key\u7684\u76f8\u95dc\u4fe1\u606f\u3002\u4f7f\u7528\u5f85\u67e5\u8a62\u7684api key\u8abf\u7528\u63a5\u53e3\u3002\u9069\u7528\u65bc\u6bcd\u3001\u5b50\u5e33\u6236\u7684api key\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account-asset/user/apikey-info.mdx",sourceDirName:"v3/account-asset/user",slug:"/account-asset/apikey-info",permalink:"/docs/zh-TW/account-asset/apikey-info",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u67e5\u8a62API Key\u76f8\u95dc\u4fe1\u606f",sidebar_label:"\u67e5\u8a62API Key\u76f8\u95dc\u4fe1\u606f",sidebar_position:5,slug:"/account-asset/apikey-info"},sidebar:"v3SideBar",previous:{title:"\u51cd\u7d50/\u89e3\u51cd\u5b50\u5e33\u6236",permalink:"/docs/zh-TW/account-asset/froze-subuid"},next:{title:"\u4fee\u6539\u6bcd\u5e33\u6236\u7684API Key\u8a2d\u7f6e",permalink:"/docs/zh-TW/account-asset/modify-master-apikey"}},d={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],k={toc:o};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7372\u53d6API key\u7684\u76f8\u95dc\u4fe1\u606f\u3002\u4f7f\u7528\u5f85\u67e5\u8a62\u7684api key\u8abf\u7528\u63a5\u53e3\u3002\u9069\u7528\u65bc\u6bcd\u3001\u5b50\u5e33\u6236\u7684api key\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4efb\u610f\u6b0a\u9650\u53ef\u4ee5\u8a2a\u554f\u8a72\u63a5\u53e3")),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/v3/private/query-api")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("p",null,"\u7121"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00id. \u5167\u90e8\u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"note"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5099\u8a3b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"apiKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Api key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1a\u53ef\u8b80\u53ef\u5beb. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u53ea\u8b80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'\u7e3d\u662f""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"permissions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b0a\u9650\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ContractTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u4ea4\u6613\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Spot"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u73fe\u8ca8\u4ea4\u6613\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Wallet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"USDC\u5408\u7d04\u7684\u6b0a\u9650. \u8a72\u6b0a\u9650\u652f\u6301USDC\u5408\u7d04\u4e0b\u7684\u671f\u6b0a\u548c\u6c38\u7e8c\u4ea4\u6613")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Derivatives"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u884d\u751f\u54c1v3/v5\u4ea4\u6613\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> CopyTrading"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ddf\u55ae\u4ea4\u6613\u7684\u6b0a\u9650. \u5b50\u5e33\u6236\u66ab\u4e0d\u652f\u6301, \u7e3d\u662f[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> BlockTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5927\u5b97\u4ea4\u6613\u7684\u6b0a\u9650. \u5b50\u5e33\u6236\u66ab\u4e0d\u652f\u6301\uff0c\u7e3d\u662f[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u514c\u63db\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> NFT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"NFT\u7684\u6b0a\u9650. \u5b50\u5e33\u6236\u66ab\u4e0d\u652f\u6301, \u7e3d\u662f[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ips"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d81\u5b9a\u7684IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Api key\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u500b\u4eba\u4f7f\u7528, ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),"\uff1a\u7d81\u5b9a\u5230\u7b2c\u4e09\u65b9\u61c9\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"deadlineDay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"API key\u5931\u6548\u7684\u5012\u6578\u65e5. \u91dd\u5c0d\u90a3\u4e9b\u672a\u7d81\u5b9aIP\u7684api key\u6216\u8005\u4fee\u6539\u904e\u5bc6\u78bc\u7684\u5e33\u6236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expiredAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"API key\u7684\u904e\u671f\u65e5. \u91dd\u5c0d\u90a3\u4e9b\u672a\u7d81\u5b9aIP\u7684api key\u6216\u8005\u4fee\u6539\u904e\u5bc6\u78bc\u7684\u5e33\u6236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"API key\u7684\u5275\u5efa\u65e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"unified"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"API Key\u6240\u5c6c\u7684\u5e33\u6236\u662f\u5426\u70ba\u7d71\u4e00\u4fdd\u8b49\u91d1\u5e33\u6236. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1a\u666e\u901a\u5e33\u6236; ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u7d71\u4e00\u4fdd\u8bc1\u91d1\u5e33\u6236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uta"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"API Key\u6240\u5c6c\u7684\u5e33\u6236\u662f\u5426\u70ba\u7d71\u4e00\u4ea4\u6613\u5e33\u6236. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1a\u666e\u901a\u5e33\u6236; ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u7d71\u4e00\u4ea4\u6613\u8d26\u6237")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6236 ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inviterID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9080\u8acb\u4eba ID\uff08\u9080\u8acb\u8a72\u8cec\u865f\u52a0\u5165\u5e73\u53f0\u7684\u8cec\u865f\u7684UID\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vipLevel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"VIP\u7528\u6236\u7b49\u7d1a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mktMakerLevel"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"market maker\u7b49\u7d1a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"affiliateID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u5546Id. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),": \u8868\u793a\u7121\u4efb\u4f55\u4ee3\u7406\u7d81\u5b9a\u95dc\u4fc2")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /user/v3/private/query-api HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671177977555\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "id": "375764",\n        "note": "ordinary",\n        "apiKey": "CBIZAHQMLAPKMGUVGJ",\n        "readOnly": 0,\n        "secret": "",\n        "permissions": {\n            "ContractTrade": [\n                "Order",\n                "Position"\n            ],\n            "Spot": [\n                "SpotTrade"\n            ],\n            "Wallet": [\n                "AccountTransfer"\n            ],\n            "Options": [\n                "OptionsTrade"\n            ],\n            "Derivatives": [\n                "DerivativesTrade"\n            ],\n            "CopyTrading": [],\n            "BlockTrade": [],\n            "Exchange": [\n                "ExchangeHistory"\n            ],\n            "NFT": []\n        },\n        "ips": [\n            "*"\n        ],\n        "type": 1,\n        "deadlineDay": 87,\n        "expiredAt": "2023-04-04T05:44:02Z",\n        "createdAt": "2023-01-04T05:44:02Z",\n        "unified": 0,\n        "uta": 0,\n        "userID": 1135134,\n        "inviterID": 0,\n        "vipLevel": "No VIP",\n        "mktMakerLevel": "0",\n        "affiliateID": 0\n    },\n    "retExtInfo": {},\n    "time": 1672986764656\n}\n')))}m.isMDXComponent=!0}}]);
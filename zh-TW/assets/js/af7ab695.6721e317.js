"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6948],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=d(n),u=a,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61813:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_label:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_position:6,slug:"/derivatives/contract/trading-stop"},i=void 0,o={unversionedId:"v3/derivatives/rest-contract/position/trading-stop",id:"v3/derivatives/rest-contract/position/trading-stop",title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",description:"\u8a72\u63a5\u53e3\u53ef\u4ee5\u8a2d\u7f6e\u6b62\u76c8\u3001\u6b62\u640d\u548c\u8ffd\u8e64\u6b62\u640d.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/position/trading-stop.mdx",sourceDirName:"v3/derivatives/rest-contract/position",slug:"/derivatives/contract/trading-stop",permalink:"/docs-v2/zh-TW/derivatives/contract/trading-stop",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_label:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_position:6,slug:"/derivatives/contract/trading-stop"},sidebar:"v3SideBar",previous:{title:"\u8a2d\u7f6e\u69d3\u687f\u500d\u6578",permalink:"/docs-v2/zh-TW/derivatives/contract/leverage"},next:{title:"\u8a2d\u7f6e\u98a8\u96aa\u9650\u984d",permalink:"/docs-v2/zh-TW/derivatives/contract/set-risk-limit"}},p={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s={toc:d};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8a72\u63a5\u53e3\u53ef\u4ee5\u8a2d\u7f6e\u6b62\u76c8\u3001\u6b62\u640d\u548c\u8ffd\u8e64\u6b62\u640d."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u63d0\u4ea4\u8acb\u6c42\u5f8c\uff0c\u7cfb\u7d71\u5167\u90e8\u5c07\u6703\u81ea\u52d5\u5275\u5efa\u5c0d\u61c9\u985e\u578b\u7684\u689d\u4ef6\u55ae"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u5009\u4f4d\u88ab\u5e73\uff0c\u7cfb\u7d71\u5c07\u6703\u8abf\u6574\u76f8\u95dc\u689d\u4ef6\u8a02\u55ae\u6578\u91cf\u6216\u8005\u53d6\u6d88\u9019\u4e9b\u689d\u4ef6\u55ae\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301USDT\u6c38\u7e8c\uff0cUSDC\u6c38\u7e8c\uff0c\u53cd\u5411\u6c38\u7e8c\u548c\u53cd\u5411\u4ea4\u5272."))),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/position/trading-stop")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u80fd\u5c0f\u65bc0. \u8a2d\u7f6e\u70ba0\u6642\uff0c\u5247\u8868\u793a\u53d6\u6d88\u6b62\u76c8. \u90e8\u5206\u6b62\u76c8\u6b62\u640d\u7121\u6cd5\u901a\u904e\u8a2d\u7f6e0\u4f86\u53d6\u6d88")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u80fd\u5c0f\u65bc0. \u8a2d\u7f6e\u70ba0\u6642\uff0c\u5247\u8868\u793a\u53d6\u6d88\u6b62\u640d. \u90e8\u5206\u6b62\u76c8\u6b62\u640d\u7121\u6cd5\u901a\u904e\u8a2d\u7f6e0\u4f86\u53d6\u6d88")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tpSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u5009\u4f4d\u6578\u91cf. \u50c5\u90e8\u5206\u6b62\u76c8\u6b62\u640d\u6642\u6709\u6548. ",(0,a.kt)("em",{parentName:"td"},"\u6ce8\u610f: \u90e8\u5206\u6b62\u76c8\u6b62\u640d\u6a21\u5f0f\u50c5\u9650USDT\u6c38\u7e8c"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"slSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u5009\u4f4d\u6578\u91cf. \u50c5\u90e8\u5206\u6b62\u76c8\u6b62\u640d\u6642\u6709\u6548. ",(0,a.kt)("em",{parentName:"td"},"\u6ce8\u610f: \u90e8\u5206\u6b62\u76c8\u6b62\u640d\u6a21\u5f0f\u50c5\u9650USDT\u6c38\u7e8c"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c\u985e\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c\u985e\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"trailingStop"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u80fd\u5c0f\u65bc0. \u8a2d\u7f6e\u70ba0\u6642\uff0c\u5247\u8868\u793a\u53d6\u6d88\u8ffd\u8e64\u6b62\u640d. ",(0,a.kt)("em",{parentName:"td"},"\u6ce8\u610f: \u50c5\u5c0dUSDT\u6c38\u7e8c\u6709\u6548"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"activePrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ffd\u8e64\u6b62\u640d\u6fc0\u6d3b\u50f9\u683c. \u8ffd\u8e64\u6b62\u640d\u6703\u5728\u5230\u9054\u8a72\u50f9\u683c\u6642\u89f8\u767c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"positionIdx"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u6a19\u8b58\uff0c\u7528\u65bc\u8b58\u5225\u5009\u4f4d. ",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"0"),": \u55ae\u5411\u6301\u5009"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"1"),": \u8cb7\u5074\u96d9\u5411\u6301\u5009"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"2"),": \u8ce3\u5074\u96d9\u5411\u6301\u5009")," "))))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/position/trading-stop HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670852788387\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{\n    "symbol": "SOLPERP",\n    "takeProfit": "19",\n    "stopLoss": "10",\n    "activePrice": null,\n    "trailingStop": null,\n    "tpTriggerBy": null,\n    "slTriggerBy": null,\n    "slSize": null,\n    "tpSize": null,\n    "positionIdx": 0\n}\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1670852788558\n}\n')))}m.isMDXComponent=!0}}]);
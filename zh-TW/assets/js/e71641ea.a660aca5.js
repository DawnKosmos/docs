"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[36904],{3905:(t,n,e)=>{e.d(n,{Zo:()=>k,kt:()=>m});var l=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function d(t,n){if(null==t)return{};var e,l,r=function(t,n){if(null==t)return{};var e,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=l.createContext({}),o=function(t){var n=l.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},k=function(t){var n=o(t.components);return l.createElement(u.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),p=o(e),m=r,g=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return e?l.createElement(g,a(a({ref:n},k),{},{components:e})):l.createElement(g,a({ref:n},k))}));function m(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,a=new Array(i);a[0]=p;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=t,d.mdxType="string"==typeof t?t:r,a[1]=d;for(var o=2;o<i;o++)a[o]=e[o];return l.createElement.apply(null,a)}return l.createElement.apply(null,e)}p.displayName="MDXCreateElement"},53356:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var l=e(87462),r=(e(67294),e(3905));const i={title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",sidebar_label:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",sidebar_position:1,slug:"/derivatives/unified/position-info"},a=void 0,d={unversionedId:"v3/derivatives/rest-unified/position/position-info",id:"v3/derivatives/rest-unified/position/position-info",title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",description:"\u8a72\u63a5\u53e3\u53ef\u4ee5\u7372\u53d6\u7528\u6236\u7684\u6301\u5009\u4fe1\u606f\uff0c\u6bd4\u5982\u6301\u5009\u6578\u91cf\uff0c\u7d2f\u8a08\u76c8\u8667\u7b49",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/position/position-info.mdx",sourceDirName:"v3/derivatives/rest-unified/position",slug:"/derivatives/unified/position-info",permalink:"/docs/zh-TW/derivatives/unified/position-info",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",sidebar_label:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",sidebar_position:1,slug:"/derivatives/unified/position-info"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",permalink:"/docs/zh-TW/derivatives/unified/order-list"},next:{title:"\u8a2d\u7f6e\u69d3\u687f\u500d\u6578",permalink:"/docs/zh-TW/derivatives/unified/leverage"}},u={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],k=t=>function(n){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},s=k("Tabs"),p=k("TabItem"),m={toc:o};function g(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,l.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8a72\u63a5\u53e3\u53ef\u4ee5\u7372\u53d6\u7528\u6236\u7684\u6301\u5009\u4fe1\u606f\uff0c\u6bd4\u5982\u6301\u5009\u6578\u91cf\uff0c\u7d2f\u8a08\u76c8\u8667\u7b49"),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/position/list")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e63\u7a2e. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u50c5",(0,r.kt)("inlineCode",{parentName:"td"},"category"),"=option\u6642\u6709\u6548, \u82e5\u4e0d\u50b3\uff0c\u5247\u50c5\u8fd4\u56deBTC\u6301\u5009")," "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"settleCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d50\u7b97\u5e63\u7a2e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ffb\u9801\u65b9\u5411. ",(0,r.kt)("inlineCode",{parentName:"td"},"prev"),": \u5411\u524d, ",(0,r.kt)("inlineCode",{parentName:"td"},"next"),": \u5411\u5f8c. \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"next"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"200"),"]",". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(p,{value:"linear",label:"linear",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'\u69d3\u687f\u500d\u6578. \u6ce8\u610f: \u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u8a72\u5b57\u6bb5\u8fd4\u56de""\uff0c\u69d3\u687f\u898f\u5247\u5931\u6548')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u5009\u4f4d\u6578\u64da\u66f4\u65b0\u6642\u9593\u6233 (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u65b9\u5411. `Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5009\u4f4d\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> takeProfit"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6b62\u76c8\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tpslMode"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6b62\u76c8\u6b62\u640d\u6a21\u5f0f. `Partial`, `Full` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> riskId"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u98a8\u96aa\u9650\u984dID. \u6ce8\u610f: \u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u8a72\u5b57\u6bb5\u8fd4\u56de0\uff0c\u98a8\u96aa\u9650\u984d\u898f\u5247\u5931\u6548")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> trailingStop"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ffd\u8e64\u6b62\u640d (\u8ddd\u96e2\u7576\u524d\u50f9\u683c\u7684\u8ddd\u96e2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> entryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5e73\u5747\u5165\u5834\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unrealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u672a\u7d50\u76c8\u8667 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6a19\u8a18\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5009\u4f4d\u5927\u5c0f ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> stopLoss"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6b62\u640d\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumRealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7d2f\u8a08\u5df2\u7d50\u76c8\u8667 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionMM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'\u5009\u4f4d\u7dad\u6301\u4fdd\u8b49\u91d1. \u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u8a72\u5b57\u6bb5\u8fd4\u56de""')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u5efa\u7acb\u5009\u4f4d\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIdx"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u5009\u4f4d\u6a19\u8b58,  \u7528\u4e8e\u5728\u4e0d\u540c\u4ed3\u4f4d\u6a21\u5f0f\u4e0b\u6807\u8bc6\u4ed3\u4f4d",(0,r.kt)("li",null,"`0`: \u55ae\u5411\u6301\u5009, \u7d71\u4e00\u4fdd\u8b49\u91d1\u53ea\u6709\u55ae\u5411\u6301\u5009"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'\u5009\u4f4d\u521d\u59cb\u4fdd\u8b49\u91d1. \u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u8a72\u5b57\u6bb5\u8fd4\u56de""')))),(0,r.kt)(p,{value:"option",label:"option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u79f0 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u5009\u4f4d\u6578\u64da\u66f4\u65b0\u6642\u9593 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u65b9\u5411. `Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5009\u4f4d\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> entryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5e73\u5747\u5165\u5834\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unrealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u672a\u7d50\u76c8\u8667 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6a19\u8a18\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5009\u4f4d\u5927\u5c0f ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumRealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7d2f\u8ba1\u5df2\u7ed3\u76c8\u4e8f ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionMM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'\u5009\u4f4d\u7dad\u6301\u4fdd\u8b49\u91d1. \u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u8a72\u5b57\u6bb5\u8fd4\u56de""')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u5efa\u7acb\u5009\u4f4d\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIdx"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u671f\u6b0a\u7121\u6548, \u9ed8\u8a8d\u70ba`0` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'\u5009\u4f4d\u521d\u59cb\u4fdd\u8b49\u91d1. \u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u8a72\u5b57\u6bb5\u8fd4\u56de"" '))))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(p,{value:"console-linear",label:"Console-linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/position/list?category=linear&symbol=XRPUSDT HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672820718517\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,r.kt)(p,{value:"console-option",label:"Console-option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/position/list?category=option&baseCoin=ETH HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672018474913\nX-BAPI-RECV-WINDOW: 5000\n")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(p,{value:"json-linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "nextPageCursor": "updateAt%3D1672819200214",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "XRPUSDT",\n                "updatedTime": 1672819200214,\n                "leverage": "10",\n                "side": "Buy",\n                "positionValue": "34.91000000",\n                "takeProfit": "",\n                "tpslMode": "Partial",\n                "riskId": 41,\n                "trailingStop": "0",\n                "entryPrice": "0.34910000",\n                "unrealisedPnl": "0.00000000",\n                "markPrice": "0.34910000",\n                "size": "100.0000",\n                "cumRealisedPnl": "-0.02444200",\n                "stopLoss": "",\n                "positionMM": "0.36795140",\n                "createdTime": 1672016298024,\n                "positionIdx": 0,\n                "positionIM": "3.50985140"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672820720159\n}\n'))),(0,r.kt)(p,{value:"json-option",label:"option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n        "nextPageCursor": "ETH-30DEC22-700-C%3A1672018465372%2CETH-30DEC22-700-C%3A1672018465372",\n        "category": "option",\n        "list": [\n            {\n                "symbol": "ETH-30DEC22-700-C",\n                "updatedTime": 1672018465372,\n                "side": "Sell",\n                "positionValue": "49.80000000",\n                "entryPrice": "498.00000000",\n                "unrealisedPnl": "-2.02774092",\n                "markPrice": "518.27740924",\n                "size": "-0.1000",\n                "cumRealisedPnl": "0.00000000",\n                "positionMM": "55.72735692",\n                "createdTime": 1672018465365,\n                "positionIdx": 0,\n                "positionIM": "70.10719092"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672018475719\n}\n')))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u8a2d\u7f6e\u4fdd\u8b49\u91d1\u6a21\u5f0f",sidebar_label:"\u8a2d\u7f6e\u4fdd\u8b49\u91d1\u6a21\u5f0f",sidebar_position:10},l=void 0,i={unversionedId:"v5/account/set-margin-mode",id:"v5/account/set-margin-mode",title:"\u8a2d\u7f6e\u4fdd\u8b49\u91d1\u6a21\u5f0f",description:"\u7528\u6236\u5982\u679c\u4e0d\u8a2d\u7f6e\uff0c\u9ed8\u8a8d\u6309\u5e38\u898f\u4fdd\u8b49\u91d1\u3002\u8a72\u6a21\u5f0f\u50c5\u5c0d USDC Perp \u548c USDC Option \u6709\u6548\uff0cPortfolio Margin \u4e0d\u652f\u6301 USDT \u7d50\u7b97\u7684\u5408\u7d04\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/account/set-margin-mode.mdx",sourceDirName:"v5/account",slug:"/v5/account/set-margin-mode",permalink:"/docs-v2/zh-TW/v5/account/set-margin-mode",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u8a2d\u7f6e\u4fdd\u8b49\u91d1\u6a21\u5f0f",sidebar_label:"\u8a2d\u7f6e\u4fdd\u8b49\u91d1\u6a21\u5f0f",sidebar_position:10},sidebar:"v5SideBar",previous:{title:"\u4ea4\u6613\u65e5\u8a8c",permalink:"/docs-v2/zh-TW/v5/account/transaction-log"},next:{title:"\u67e5\u8a62\u514c\u63db\u8a02\u55ae\u7d00\u9304",permalink:"/docs-v2/zh-TW/v5/asset/exchange"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),m={toc:s};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7528\u6236\u5982\u679c\u4e0d\u8a2d\u7f6e\uff0c\u9ed8\u8a8d\u6309\u5e38\u898f\u4fdd\u8b49\u91d1\u3002\u8a72\u6a21\u5f0f\u50c5\u5c0d USDC Perp \u548c USDC Option \u6709\u6548\uff0cPortfolio Margin \u4e0d\u652f\u6301 USDT \u7d50\u7b97\u7684\u5408\u7d04\u3002"),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/account/set-margin-mode")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"setMarginMode"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"REGULAR_MARGIN"),"\uff08\u5e38\u898f\u4fdd\u8b49\u91d1\u6a21\u5f0f\uff09",(0,a.kt)("inlineCode",{parentName:"td"},"PORTFOLIO_MARGIN"),"\uff08\u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\uff09\u9ed8\u8a8d\u5e38\u898f\uff0c\u50b3\u5e38\u898f\u8fd4\u56de\u8a2d\u7f6e\u6210\u529f")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"reasons"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object. \u82e5\u8acb\u6c42\u63d0\u4ea4\u6210\u529f, \u5247\u8fd4\u56de\u7a7a\u6578\u7d44")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> reasonCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5931\u6557\u932f\u8aa4\u78bc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> reasonMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5931\u6557\u932f\u8aa4\u6d88\u606f")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(u,{value:"console",label:"Console",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/account/set-margin-mode HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672134396332\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n    "setMarginMode": "PORTFOLIO_MARGIN"\n}\n')))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(u,{value:"resp",label:"Response",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 3400045,\n    "retMsg": "Set margin mode failed",\n    "result": {\n        "reasons": [\n            {\n                "reasonCode": "3400000",\n                "reasonMsg": "Equity needs to be equal to or greater than 1000 USDC"\n            }\n        ]\n    }\n}\n')))))}g.isMDXComponent=!0}}]);
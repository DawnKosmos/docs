"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[11968],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=s(n),k=a,c=m["".concat(i,".").concat(k)]||m[k]||u[k]||l;return n?r.createElement(c,o(o({ref:e},d),{},{components:n})):r.createElement(c,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96791:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6df1\u5ea6",sidebar_label:"\u6df1\u5ea6",sidebar_position:1,slug:"/spot/ws-public/orderbook"},o=void 0,p={unversionedId:"v3/spot/wss-public/orderbook",id:"v3/spot/wss-public/orderbook",title:"\u6df1\u5ea6",description:"\u4ea4\u6613\u5c0d\u7684\u6df1\u5ea6\u4fe1\u606f:",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/wss-public/orderbook.mdx",sourceDirName:"v3/spot/wss-public",slug:"/spot/ws-public/orderbook",permalink:"/docs/zh-TW/spot/ws-public/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6df1\u5ea6",sidebar_label:"\u6df1\u5ea6",sidebar_position:1,slug:"/spot/ws-public/orderbook"},sidebar:"v3SideBar",previous:{title:"\u8a02\u95b1WebSocket",permalink:"/docs/zh-TW/spot/ws/connect"},next:{title:"K\u7dda",permalink:"/docs/zh-TW/spot/ws-public/kline"}},i={},s=[{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8a02\u95b1\u793a\u4f8b",id:"\u8a02\u95b1\u793a\u4f8b",level:3},{value:"\u63a8\u9001\u793a\u4f8b",id:"\u63a8\u9001\u793a\u4f8b",level:3}],d={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ea4\u6613\u5c0d\u7684\u6df1\u5ea6\u4fe1\u606f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8a02\u55ae\u7c3f\u5feb\u7167\u983b\u7387\u6df1\u5ea6: bids \u548c asks \u5404",(0,a.kt)("strong",{parentName:"li"},"40")),(0,a.kt)("li",{parentName:"ul"},"\u8a02\u55ae\u7c3f\u7248\u672c\u8b8a\u66f4\u89f8\u767c\u4e8b\u4ef6:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8a02\u55ae\u9032\u5165\u8a02\u55ae\u7c3f"),(0,a.kt)("li",{parentName:"ul"},"\u8a02\u55ae\u96e2\u958b\u8a02\u55ae\u7c3f"),(0,a.kt)("li",{parentName:"ul"},"\u8a02\u55ae\u6578\u91cf\u8b8a\u66f4"),(0,a.kt)("li",{parentName:"ul"},"\u8a02\u55ae\u5df2\u5b8c\u6210")))),(0,a.kt)("p",null,"\u50c5\u63a8\u9001",(0,a.kt)("strong",{parentName:"p"},"\u5feb\u7167"),"\u6578\u64da"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63a8\u9001\u983b\u7387:")," 100ms"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"orderbook.40.{symbol}")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Topic\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u88ab\u63a8\u9001\u51fa\u4f86\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6578\u64da\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"snapshot"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> t"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7d71\u751f\u6210\u8a72\u6578\u64da\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5c0d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid, \u8cb7\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5927\u5230\u5c0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> b","[0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u5831\u50f9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> b","[1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask, \u8ce3\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5c0f\u5230\u5927")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> a","[0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u5831\u50f9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> a","[1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u6578\u91cf")))),(0,a.kt)("h3",{id:"\u8a02\u95b1\u793a\u4f8b"},"\u8a02\u95b1\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "depth00001", //optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.40.BTCUSDT"\n    ]\n}\n')),(0,a.kt)("h3",{id:"\u63a8\u9001\u793a\u4f8b"},"\u63a8\u9001\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.40.BTCUSDT",\n    "ts": 1673439424737,\n    "type": "snapshot",\n    "data": {\n        "s": "BTCUSDT",\n        "t": 1673439424737,\n        "b": [\n            [\n                "17423",\n                "0.809534"\n            ],\n            [\n                "17422.86",\n                "0.043596"\n            ],\n            ...\n        ],\n        "a": [\n            ...\n            [\n                "17428.28",\n                "0.004811"\n            ],\n            [\n                "17428.62",\n                "0.23"\n            ]\n        ]\n    }\n}\n')))}u.isMDXComponent=!0}}]);
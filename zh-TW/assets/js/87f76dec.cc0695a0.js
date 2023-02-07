"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[88184],{3905:(t,n,e)=>{e.d(n,{Zo:()=>k,kt:()=>p});var l=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function d(t,n){if(null==t)return{};var e,l,r=function(t,n){if(null==t)return{};var e,l,r={},u=Object.keys(t);for(l=0;l<u.length;l++)e=u[l],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(l=0;l<u.length;l++)e=u[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=l.createContext({}),a=function(t){var n=l.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},k=function(t){var n=a(t.components);return l.createElement(o.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(t,n){var e=t.components,r=t.mdxType,u=t.originalType,o=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),s=a(e),p=r,b=s["".concat(o,".").concat(p)]||s[p]||c[p]||u;return e?l.createElement(b,i(i({ref:n},k),{},{components:e})):l.createElement(b,i({ref:n},k))}));function p(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var u=e.length,i=new Array(u);i[0]=s;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var a=2;a<u;a++)i[a]=e[a];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}s.displayName="MDXCreateElement"},34238:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>a});var l=e(87462),r=(e(67294),e(3905));const u={title:"\u884c\u60c5",sidebar_label:"\u884c\u60c5",sidebar_position:3,slug:"/copy-trade/ws-public/ticker"},i=void 0,d={unversionedId:"v3/copy-trade/wss-public/tickers",id:"v3/copy-trade/wss-public/tickers",title:"\u884c\u60c5",description:"\u8a02\u95b1\u884c\u60c5\u6578\u64da",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/copy-trade/wss-public/tickers.mdx",sourceDirName:"v3/copy-trade/wss-public",slug:"/copy-trade/ws-public/ticker",permalink:"/docs/zh-TW/copy-trade/ws-public/ticker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u884c\u60c5",sidebar_label:"\u884c\u60c5",sidebar_position:3,slug:"/copy-trade/ws-public/ticker"},sidebar:"v3SideBar",previous:{title:"\u5e73\u53f0\u6210\u4ea4",permalink:"/docs/zh-TW/copy-trade/ws-public/trade"},next:{title:"K\u7dda",permalink:"/docs/zh-TW/copy-trade/ws-public/kline"}},o={},a=[{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u63a8\u9001\u793a\u4f8b",id:"\u63a8\u9001\u793a\u4f8b",level:3}],k=t=>function(n){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},c=k("Tabs"),s=k("TabItem"),p={toc:a};function b(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8a02\u95b1\u884c\u60c5\u6578\u64da"),(0,r.kt)("admonition",{title:"\u91cd\u8981",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8a72topic\u63a8\u9001delta\u6578\u64da\u548csnapshot\u6570\u636e\u3002\u5982\u679cdelta\u6578\u64da\u70ba\u7a7a\uff0c\u8868\u660e\u4fe1\u606f\u6c92\u6709\u767c\u751f\u8b8a\u5316\u3002")),(0,r.kt)("p",null,"\u63a8\u9001\u983b\u7387: ",(0,r.kt)("strong",{parentName:"p"},"\u5be6\u6642")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"tickers.{symbol}")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(s,{value:"future",label:"Linear",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"topic"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Topic\u540d\u7a31")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6578\u64da\u985e\u578b. `snapshot`,`delta`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cs"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u64ae\u5408\u7248\u672c\u865f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tickDirection"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u50f9\u683c\u8b8a\u5316\u65b9\u5411 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5e02\u5834\u50f9\u683c\u76f8\u5c0d24h\u524d\u8b8a\u5316\u7684\u767e\u5206\u6bd4 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u65b0\u5e02\u5834\u6210\u4ea4\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"24\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u9ad8\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u4f4e\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice1h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"1\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6a19\u8a18\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6307\u6578\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterestValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u984d ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> nextFundingTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4e0b\u6b21\u7d50\u7b97\u8cc7\u91d1\u8cbb\u7528\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cc7\u91d1\u8cbb\u7387 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9\u7684\u6578\u91cf "))))),(0,r.kt)("h3",{id:"\u63a8\u9001\u793a\u4f8b"},"\u63a8\u9001\u793a\u4f8b"),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(s,{value:"ws-linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "tickers.BTCUSDT",\n    "type": "snapshot",\n    "data": {\n        "symbol": "BTCUSDT",\n        "tickDirection": "MinusTick",\n        "price24hPcnt": "0.017367",\n        "lastPrice": "17222.00",\n        "prevPrice24h": "16928.00",\n        "highPrice24h": "17281.50",\n        "lowPrice24h": "16915.00",\n        "prevPrice1h": "17238.00",\n        "markPrice": "17224.40",\n        "indexPrice": "17234.84",\n        "openInterest": "68795.534",\n        "openInterestValue": "1184961795.83",\n        "turnover24h": "1572429119.324499",\n        "volume24h": "91823.449",\n        "nextFundingTime": "1673280000000",\n        "fundingRate": "-0.000211",\n        "bid1Price": "17222.00",\n        "bid1Size": "220.358",\n        "ask1Price": "17222.50",\n        "ask1Size": "3.902"\n    },\n    "cs": 24988405605,\n    "ts": 1673273043686\n}\n')))))}b.isMDXComponent=!0}}]);
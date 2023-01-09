"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[288],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),N=m(a),g=n,f=N["".concat(p,".").concat(g)]||N[g]||k[g]||l;return a?r.createElement(f,i(i({ref:e},o),{},{components:a})):r.createElement(f,i({ref:e},o))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},1789:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_position:9,slug:"/derivatives/unified/order-list"},i=void 0,d={unversionedId:"v3/derivatives/rest-unified/order/order-list",id:"v3/derivatives/rest-unified/order/order-list",title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",description:"\u7372\u53d6\u6b77\u53f2\u8a02\u55ae\u7d00\u9304. \u7531\u65bc\u8a02\u55ae\u5275\u5efa/\u64a4\u92b7\u662f\u7570\u6b65\u7684, \u8a72\u63a5\u53e3\u8fd4\u56de\u6578\u64da\u53ef\u80fd\u6703\u6709\u5ef6\u9072. \u82e5\u60a8\u60f3\u5be6\u6642\u7372\u53d6\u8a02\u55ae\u4fe1\u606f, \u60a8\u53ef\u4ee5\u67e5\u8a62\u8a72\u63a5\u53e3\u6216\u8005\u901a\u904ewebsocket\u63a8\u9001(\u63a8\u85a6)",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/order/order-list.mdx",sourceDirName:"v3/derivatives/rest-unified/order",slug:"/derivatives/unified/order-list",permalink:"/docs-v2/zh-TW/derivatives/unified/order-list",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_position:9,slug:"/derivatives/unified/order-list"},sidebar:"v3SideBar",previous:{title:"\u6279\u91cf\u64a4\u92b7\u59d4\u8a17\u55ae",permalink:"/docs-v2/zh-TW/derivatives/unified/batch-cancel"},next:{title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",permalink:"/docs-v2/zh-TW/derivatives/unified/position-info"}},p={},m=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],o={toc:m};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u7372\u53d6\u6b77\u53f2\u8a02\u55ae\u7d00\u9304. \u7531\u65bc\u8a02\u55ae\u5275\u5efa/\u64a4\u92b7\u662f\u7570\u6b65\u7684, \u8a72\u63a5\u53e3\u8fd4\u56de\u6578\u64da\u53ef\u80fd\u6703\u6709\u5ef6\u9072. \u82e5\u60a8\u60f3\u5be6\u6642\u7372\u53d6\u8a02\u55ae\u4fe1\u606f, \u60a8\u53ef\u4ee5\u67e5\u8a62\u8a72",(0,n.kt)("a",{parentName:"p",href:"open-order#"},"\u63a5\u53e3"),"\u6216\u8005\u901a\u904ewebsocket\u63a8\u9001(\u63a8\u85a6)")),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/order/list")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e63\u7a2e. \u82e5",(0,n.kt)("inlineCode",{parentName:"td"},"category"),"=option\uff0c\u4e0d\u50b3\u6642\uff0c\u9ed8\u8a8d\u8fd4\u56deBTC\u76f8\u95dc\u6578\u64da")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"orderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u72c0\u614b\u3002\u4e0d\u50b3\u5247\u9ed8\u8a8d\u67e5\u8a62\u6240\u6709\u72c0\u614b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderFilter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Order"),": \u666e\u901a\u55ae, ",(0,n.kt)("inlineCode",{parentName:"td"},"StopOrder"),": \u689d\u4ef6\u55ae")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7ffb\u9801\u65b9\u5411. ",(0,n.kt)("inlineCode",{parentName:"td"},"prev"),": \u5411\u524d, ",(0,n.kt)("inlineCode",{parentName:"td"},"next"),": \u5411\u5f8c. \u9ed8\u8a8d: ",(0,n.kt)("inlineCode",{parentName:"td"},"next"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"50"),"]",". \u9ed8\u8a8d: ",(0,n.kt)("inlineCode",{parentName:"td"},"20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> blockTradeId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Paradigm\u5927\u5b97\u4ea4\u6613Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> iv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u96b1\u542b\u6ce2\u52d5\u7387. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"linear"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65b9\u5411. ",(0,n.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"orderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u72c0\u614b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"Market"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Limit"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#stopordertype"},"stopOrderType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u689d\u4ef6\u55ae\u985e\u578b. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"option"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#rejectreason"},"rejectReason")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab\u62d2\u7d55\u539f\u56e0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u50f9\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecFee"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u7684\u624b\u7e8c\u8cbb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u76c8\u7684\u50f9\u683c\u985e\u578b. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"option"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop loss price. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"option"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u57f7\u884c\u7b56\u7565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> basePrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u57fa\u6e96\u50f9\u683c\uff0c\u7528\u65bc\u689d\u4ef6\u55ae")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"triggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c\u7684\u89f8\u767c\u985e\u578b. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"option"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c. \u82e5",(0,n.kt)("inlineCode",{parentName:"td"},"stopOrderType"),"=",(0,n.kt)("em",{parentName:"td"},"TrailingStop"),", \u5247\u9019\u662f\u6fc0\u6d3b\u50f9\u683c. \u5426\u5247, \u5b83\u662f\u89f8\u767c\u50f9\u683c. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"option"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> leavesQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> leavesValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u50f9\u503c. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"option"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> reduceOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ea\u6e1b\u5009. ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),"\u8868\u660e\u9019\u662f\u53ea\u6e1b\u5009\u55ae")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> closeOnTrigger"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u5f8c\u5e73\u5009\u59d4\u8a17. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"option"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"option"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c. ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"em"},"option"),"\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderIM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u521d\u59cb\u4fdd\u8b49\u91d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> createdTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5275\u5efa\u8a02\u55ae\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u66f4\u65b0\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/order/list?category=linear&orderFilter=StopOrder&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672811957817\nX-BAPI-RECV-WINDOW: 5000\ncdn-request-id: test-002\n")),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "nextPageCursor": "c6f055d9-7f21-4079-913d-e6523a9cfffa%3A1672216686849%2Cc6f055d9-7f21-4079-913d-e6523a9cfffa%3A1672216686849",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "ETHPERP",\n                "orderType": "Limit",\n                "orderLinkId": "linear-004",\n                "orderId": "c6f055d9-7f21-4079-913d-e6523a9cfffa",\n                "stopOrderType": "Stop",\n                "orderStatus": "Deactivated",\n                "takeProfit": "",\n                "cumExecValue": "0",\n                "blockTradeId": "",\n                "rejectReason": "EC_NoError",\n                "price": "1050",\n                "createdTime": 1672216686849,\n                "tpTriggerBy": "UNKNOWN",\n                "timeInForce": "GoodTillCancel",\n                "basePrice": "1188",\n                "leavesValue": "0",\n                "updatedTime": 1672217377166,\n                "side": "Sell",\n                "triggerPrice": "1145.00000000",\n                "cumExecFee": "0",\n                "slTriggerBy": "UNKNOWN",\n                "leavesQty": "0",\n                "closeOnTrigger": false,\n                "cumExecQty": "0",\n                "reduceOnly": false,\n                "qty": "0.15",\n                "stopLoss": "",\n                "triggerBy": "MarkPrice",\n                "orderIM": ""\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672811958171\n}\n')))}k.isMDXComponent=!0}}]);
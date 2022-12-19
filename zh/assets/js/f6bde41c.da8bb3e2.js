"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7905],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,f=m["".concat(i,".").concat(u)]||m[u]||s[u]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u4ea4\u6613\u54e1\u767c\u8d77\u5e73\u5009-\u8a02\u55ae",sidebar_label:"\u4ea4\u6613\u54e1\u767c\u8d77\u5e73\u5009-\u8a02\u55ae",sidebar_position:5},o=void 0,d={unversionedId:"v3/copy-trade/rest-trade/order/close-order",id:"v3/copy-trade/rest-trade/order/close-order",title:"\u4ea4\u6613\u54e1\u767c\u8d77\u5e73\u5009-\u8a02\u55ae",description:"\u4ea4\u6613\u54e1\u767c\u8d77\u5e73\u5009-\u8a02\u55ae",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/v3/copy-trade/rest-trade/order/close-order.mdx",sourceDirName:"v3/copy-trade/rest-trade/order",slug:"/v3/copy-trade/rest-trade/order/close-order",permalink:"/docs-v2/zh/v3/copy-trade/rest-trade/order/close-order",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u4ea4\u6613\u54e1\u767c\u8d77\u5e73\u5009-\u8a02\u55ae",sidebar_label:"\u4ea4\u6613\u54e1\u767c\u8d77\u5e73\u5009-\u8a02\u55ae",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"\u4ea4\u6613\u54e1\u53d6\u6d88\u8a02\u55ae",permalink:"/docs-v2/zh/v3/copy-trade/rest-trade/order/cancel-order"},next:{title:"\u4ea4\u6613\u54e1\u5e36\u55ae\u5009\u4f4d\u532f\u7e3d",permalink:"/docs-v2/zh/v3/copy-trade/rest-trade/position/position-info"}},i={},p=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},s=c("Tabs"),m=c("TabItem"),u={toc:p};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4ea4\u6613\u54e1\u767c\u8d77\u5e73\u5009-\u8a02\u55ae"),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/copytrading/order/close")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6a5f\u69cb\u81ea\u5b9a\u7fa9\u8a02\u55aeID, \u6700\u5927\u9577\u5ea636\u4f4d\uff0c\u4e14\u540c\u4e00\u6a5f\u69cb\u4e0b\u81ea\u5b9a\u7fa9ID\u4e0d\u53ef\u91cd\u5fa9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parentOrderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID\u3002\u5982\u679c\u672a\u586bparent_order_link_id\u5247\u70ba",(0,n.kt)("strong",{parentName:"td"},"\u5fc5\u586b"),"\u5b57\u6bb5\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parentOrderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6a5f\u69cbID\u3002\u5982\u679c\u672a\u586bparent_order_id\u5247\u70ba",(0,n.kt)("strong",{parentName:"td"},"\u5fc5\u586b"),"\u5b57\u6bb5\u3002")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6a5f\u69cb\u81ea\u5b9a\u7fa9\u8a02\u55aeID, \u6700\u5927\u9577\u5ea636\u4f4d\uff0c\u4e14\u540c\u4e00\u6a5f\u69cb\u4e0b\u81ea\u5b9a\u7fa9ID\u4e0d\u53ef\u91cd\u5fa9")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)(s,{mdxType:"Tabs"},(0,n.kt)(m,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request POST 'https://api-testnet.bybit.com/contract/v3/private/copytrading/order/close' \\\n--header 'X-BAPI-SIGN-TYPE: 2' \\\n--header 'X-BAPI-SIGN: 901734bbab6ff1ac16bd08c39e3ba71da4b156bb82669daef849e84fc199fc41' \\\n--header 'X-BAPI-API-KEY: IZXRDYUTQVVTRDHOKW' \\\n--header 'X-BAPI-TIMESTAMP: 1670831398044' \\\n--header 'X-BAPI-RECV-WINDOW: 5000' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"symbol\":\"BTCUSDT\",\"parentOrderId\":\"cf252fd5-f25f-4623-9080-c60201b22575\"}'\n")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)(s,{mdxType:"Tabs"},(0,n.kt)(m,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "retCode": 0,\n    "retMsg": "success",\n    "result": {\n    "orderId": "419190fe-016c-469a-810e-936bef2f5d59",\n    "orderLinkId": ""\n  }\n}\n')))))}f.isMDXComponent=!0}}]);
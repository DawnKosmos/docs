"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[888],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(v,o(o({ref:t},d),{},{components:r})):a.createElement(v,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31501:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",sidebar_label:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",sidebar_position:3},o=void 0,i={unversionedId:"v3/copy-trade/rest-trade/position/set-leverage",id:"v3/copy-trade/rest-trade/position/set-leverage",title:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",description:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f, \u8a2d\u7f6e\u69d3\u687f\u53ea\u80fd\u8a2d\u7f6e\u6574\u6578",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/copy-trade/rest-trade/position/set-leverage.mdx",sourceDirName:"v3/copy-trade/rest-trade/position",slug:"/v3/copy-trade/rest-trade/position/set-leverage",permalink:"/docs-v2/zh-TW/v3/copy-trade/rest-trade/position/set-leverage",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",sidebar_label:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",sidebar_position:3},sidebar:"v3SideBar",previous:{title:"\u4ea4\u6613\u54e1\u4e00\u9375\u5e73\u5009",permalink:"/docs-v2/zh-TW/v3/copy-trade/rest-trade/position/close-position"},next:{title:"\u4ea4\u6613\u54e1\u7372\u53d6\u9322\u5305\u4f59\u984d",permalink:"/docs-v2/zh-TW/v3/copy-trade/rest-trade/account/wallet"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=d("Tabs"),u=d("TabItem"),m={toc:s};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f, \u8a2d\u7f6e\u69d3\u687f\u53ea\u80fd\u8a2d\u7f6e\u6574\u6578"),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/copytrading/position/set-leverage")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"buyLeverage"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5168\u5009/\u9010\u5009\u5207\u63db\uff0c\u9700\u8981\u50b3\u6760\u687f\u4e26\u4e14",(0,n.kt)("inlineCode",{parentName:"td"},"buy_leverage"),"\u548c",(0,n.kt)("inlineCode",{parentName:"td"},"sell_leverage"),"\u5fc5\u9808\u50b3\u5165\u76f8\u540c\u53c3\u6578\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sellLeverage"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5168\u5009/\u9010\u5009\u5207\u63db\uff0c\u9700\u8981\u50b3\u6760\u687f\u4e26\u4e14",(0,n.kt)("inlineCode",{parentName:"td"},"buy_leverage"),"\u548c",(0,n.kt)("inlineCode",{parentName:"td"},"sell_leverage"),"\u5fc5\u9808\u50b3\u5165\u76f8\u540c\u53c3\u6578\u3002")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)(c,{mdxType:"Tabs"},(0,n.kt)(u,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request POST 'https://api-testnet.bybit.com/contract/v3/private/copytrading/position/set-leverage' \\\n--header 'X-BAPI-SIGN-TYPE: 2' \\\n--header 'X-BAPI-SIGN: 7cef1d820b3e5cb59f0b6c852c800c8f1636e28790dcc13201ea5552fa8197b9' \\\n--header 'X-BAPI-API-KEY: KAMz86BfHkKT5yWKWE' \\\n--header 'X-BAPI-TIMESTAMP: 1670841373442' \\\n--header 'X-BAPI-RECV-WINDOW: 5000' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"symbol\":\"BTCUSDT\",\"buyLeverage\":\"4\",\"sellLeverage\":\"4\"}'\n")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)(c,{mdxType:"Tabs"},(0,n.kt)(u,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1670841190031\n}\n')))))}v.isMDXComponent=!0}}]);
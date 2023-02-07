"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[12717],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>c});var n=r(67294);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var d=n.createContext({}),u=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,a=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=u(r),c=l,m=p["".concat(d,".").concat(c)]||p[c]||k[c]||a;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function c(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50689:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={title:"Rate Limit",sidebar_label:"Rate Limit"},i=void 0,o={unversionedId:"v5/rate-limit",id:"v5/rate-limit",title:"Rate Limit",description:"IP Rate Limit",source:"@site/docs/v5/rate-limit.mdx",sourceDirName:"v5",slug:"/v5/rate-limit",permalink:"/docs/v5/rate-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"Rate Limit",sidebar_label:"Rate Limit"},sidebar:"v5SideBar",previous:{title:"Greek",permalink:"/docs/v5/websocket/private/greek"},next:{title:"Enums Definitions",permalink:"/docs/v5/enum"}},d={},u=[{value:"IP Rate Limit",id:"ip-rate-limit",level:2},{value:"API Rate Limit",id:"api-rate-limit",level:2},{value:"API Rate Limit Table",id:"api-rate-limit-table",level:3},{value:"Trade",id:"trade",level:4},{value:"Position",id:"position",level:4},{value:"Account",id:"account",level:4},{value:"Asset",id:"asset",level:4},{value:"Spot Leverage Token",id:"spot-leverage-token",level:4},{value:"Spot Margin Trade",id:"spot-margin-trade",level:4},{value:"API Rate Limit Rules For VIPs",id:"api-rate-limit-rules-for-vips",level:2},{value:"Covered APIs",id:"covered-apis",level:3},{value:"Single order (Futures &amp; Options)",id:"single-order-futures--options",level:4},{value:"Single order (Spot)",id:"single-order-spot",level:4},{value:"Batch orders",id:"batch-orders",level:4},{value:"How to increase API Limit",id:"how-to-increase-api-limit",level:2}],s={toc:u};function k(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ip-rate-limit"},"IP Rate Limit"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If you receive an ",(0,l.kt)("strong",{parentName:"p"},"HTTP 403")," (Access Denied) response, your IP has been either temporarily or permanently banned.\n",(0,l.kt)("strong",{parentName:"p"},"You should immediately review the below guidelines to ensure your application does not continue to violate the limit."),"\nIf you are still banned after 30 minutes, you likely have a permanent ban.")),(0,l.kt)("p",null,"Bybit has different IP frequency limits depending on the request method. We do not recommend running your application\nat the very edge of these limits in case abnormal network activity results in an unexpected violation."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET")," method:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"50 requests per second for 2 consecutive minutes"),(0,l.kt)("li",{parentName:"ul"},"70 requests per second for 5 consecutive seconds"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"POST")," method:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"20 requests per second for 2 consecutive minutes"),(0,l.kt)("li",{parentName:"ul"},"50 requests per second for 5 consecutive seconds")))),(0,l.kt)("p",null,"After violating the limit your IP will be banned for a set period of time (usually 30 minutes). Continually violating\nthe limit will result in a permanent ban. We cannot undo permanent bans or shorten temporary bans."),(0,l.kt)("h2",{id:"api-rate-limit"},"API Rate Limit"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If you receive ",(0,l.kt)("inlineCode",{parentName:"p"},'"ret_msg": "Too many visits!"')," in the JSON response, you have hit the API rate limit.")),(0,l.kt)("p",null,"The API rate limit is based on the ",(0,l.kt)("strong",{parentName:"p"},"rolling time window per second and UID"),". In other words, it is per second per UID.\nEvery request to the API returns response header shown in the code panel:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Status")," - your remaining requests for current endpoint"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit")," - your current limit for current endpoint"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Reset-Timestamp")," - the timestamp indicating when your request limit resets if you have exceeded your rate_limit. Otherwise, this is just the current timestamp.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Http Response Header Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"\u25b6Response Headers\nContent-Type: application/json; charset=utf-8\nContent-Length: 141\nX-Bapi-Limit: 100\nX-Bapi-Limit-Status: 99\nX-Bapi-Limit-Reset-Timestamp: 1672738134824\n")),(0,l.kt)("h3",{id:"api-rate-limit-table"},"API Rate Limit Table"),(0,l.kt)("h4",{id:"trade"},"Trade"),(0,l.kt)("span",{class:"blocky_table"},(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("th",null,"Path"),(0,l.kt)("th",null,"linear"),(0,l.kt)("th",null,"option"),(0,l.kt)("th",null,"spot")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/order/create"),(0,l.kt)("td",null,"10 req/s"),(0,l.kt)("td",null,"5 req/s"),(0,l.kt)("td",null,"20 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/order/amend"),(0,l.kt)("td",null,"10 req/s"),(0,l.kt)("td",null,"5 req/s"),(0,l.kt)("td",null,"-")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/order/cancel"),(0,l.kt)("td",null,"10 req/s"),(0,l.kt)("td",null,"5 req/s"),(0,l.kt)("td",null,"20 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/order/cancel-all"),(0,l.kt)("td",null,"10 req/s"),(0,l.kt)("td",null,"1 req/s"),(0,l.kt)("td",null,"20 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/order/create-batch"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"5 req/s"),(0,l.kt)("td",null,"-")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/order/amend-batch"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"5 req/s"),(0,l.kt)("td",null,"-")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/order/cancel-batch"),(0,l.kt)("td",null,"-"),(0,l.kt)("td",null,"5 req/s"),(0,l.kt)("td",null,"-")),(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"4"},"For now, there is no limit for other endpoints")))),(0,l.kt)("h4",{id:"position"},"Position"),(0,l.kt)("span",{class:"blocky_table"},(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("th",null,"Path"),(0,l.kt)("th",null,"linear")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/position/set-leverage"),(0,l.kt)("td",null,"10 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/position/set-tpsl-mode"),(0,l.kt)("td",null,"10 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/position/set-risk-limit"),(0,l.kt)("td",null,"10 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/position/trading-stop"),(0,l.kt)("td",null,"10 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",{colSpan:"2"},"For now, there is no limit for other endpoints")))),(0,l.kt)("h4",{id:"account"},"Account"),(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("td",null,"For now, there is no limit for endpoints under this category"))),(0,l.kt)("h4",{id:"asset"},"Asset"),(0,l.kt)("span",{class:"blocky_table"},(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("th",null,"Method"),(0,l.kt)("th",null,"Path"),(0,l.kt)("th",null,"Limit")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"13"},"GET"),(0,l.kt)("td",null,"/v5/asset/transfer/query-asset-info"),(0,l.kt)("td",null,"60 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/transfer/query-transfer-coin-list"),(0,l.kt)("td",null,"60 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/transfer/query-transfer-coin-list"),(0,l.kt)("td",null,"60 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/transfer/query-inter-transfer-list"),(0,l.kt)("td",null,"60 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/transfer/query-sub-member-list"),(0,l.kt)("td",null,"60 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/transfer/query-universal-transfer-list"),(0,l.kt)("td",null,"60 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/deposit/query-record"),(0,l.kt)("td",null,"300 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/deposit/query-sub-member-record"),(0,l.kt)("td",null,"300 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/deposit/query-address"),(0,l.kt)("td",null,"300 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/deposit/query-sub-member-address"),(0,l.kt)("td",null,"300 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/withdraw/query-record"),(0,l.kt)("td",null,"300 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/coin/query-info"),(0,l.kt)("td",null,"2 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/exchange/order-record"),(0,l.kt)("td",null,"600 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"5"},"POST"),(0,l.kt)("td",null,"/v5/asset/transfer/inter-transfer"),(0,l.kt)("td",null,"20 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/transfer/save-transfer-sub-member"),(0,l.kt)("td",null,"20 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/transfer/universal-transfer"),(0,l.kt)("td",null,"20 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/withdraw/create"),(0,l.kt)("td",null,"10 req/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/v5/asset/withdraw/cancel"),(0,l.kt)("td",null,"60 req/min")))),(0,l.kt)("h4",{id:"spot-leverage-token"},"Spot Leverage Token"),(0,l.kt)("span",{class:"blocky_table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,l.kt)("th",{parentName:"tr",align:null},"Limit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Get"),(0,l.kt)("td",{parentName:"tr",align:"left"},"/v5/spot-lever-token/order-record"),(0,l.kt)("td",{parentName:"tr",align:null},"50 req/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Post"),(0,l.kt)("td",{parentName:"tr",align:"left"},"/v5/spot-lever-token/purchase"),(0,l.kt)("td",{parentName:"tr",align:null},"20 req/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Post"),(0,l.kt)("td",{parentName:"tr",align:"left"},"/v5/spot-lever-token/redeem"),(0,l.kt)("td",{parentName:"tr",align:null},"20 req/s"))))),(0,l.kt)("h4",{id:"spot-margin-trade"},"Spot Margin Trade"),(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("td",null,"For now, there is no limit for endpoints under this category"))),(0,l.kt)("h2",{id:"api-rate-limit-rules-for-vips"},"API Rate Limit Rules For VIPs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"VIP Level"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Limit for Futures"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Limit for Options"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Limit for Spot"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"20/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"VIP 1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"20/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"20/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"25/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"VIP 2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"40/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"40/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"30/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"VIP 3"),(0,l.kt)("td",{parentName:"tr",align:"center"},"60/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"60/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"40/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PRO 1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"50/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PRO 2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"150/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"150/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"75/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PRO 3"),(0,l.kt)("td",{parentName:"tr",align:"center"},"200/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"200/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MM 1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"50/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MM 2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"150/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"150/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"75/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MM 3"),(0,l.kt)("td",{parentName:"tr",align:"center"},"200/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"200/s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100/s")))),(0,l.kt)("h3",{id:"covered-apis"},"Covered APIs"),(0,l.kt)("h4",{id:"single-order-futures--options"},"Single order (Futures & Options)"),(0,l.kt)("span",{class:"blocky_table"},(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("th",null),(0,l.kt)("th",null,"Path"),(0,l.kt)("th",null,"Limit By Default")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"5"},"Place an order"),(0,l.kt)("td",null,"/v5/order/create"),(0,l.kt)("td",{rowSpan:"5"},"10 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/unified/v3/private/order/create")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/contract/v3/private/order/create")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/perpetual/usdc/openapi/private/v1/place-order")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/option/usdc/openapi/private/v1/place-order")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"5"},"Modify an order"),(0,l.kt)("td",null,"/v5/order/amend"),(0,l.kt)("td",{rowSpan:"5"},"10 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/unified/v3/private/order/replace")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/contract/v3/private/order/replace")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/perpetual/usdc/openapi/private/v1/replace-order")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/option/usdc/openapi/private/v1/replace-order")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"5"},"Cancel an order"),(0,l.kt)("td",null,"/v5/order/cancel"),(0,l.kt)("td",{rowSpan:"5"},"10 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/unified/v3/private/order/cancel")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/contract/v3/private/order/cancel")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/perpetual/usdc/openapi/private/v1/cancel-order")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/option/usdc/openapi/private/v1/cancel-order")))),(0,l.kt)("h4",{id:"single-order-spot"},"Single order (Spot)"),(0,l.kt)("span",{class:"blocky_table"},(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("th",null),(0,l.kt)("th",null,"Path"),(0,l.kt)("th",null,"Limit By Default")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"3"},"Place an order"),(0,l.kt)("td",null,"/v5/order/create"),(0,l.kt)("td",{rowSpan:"3"},"20 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/spot/v3/private/order")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"POST")," /spot/v1/order")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"4"},"Cancel an order"),(0,l.kt)("td",null,"/v5/order/cancel"),(0,l.kt)("td",{rowSpan:"4"},"20 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"/spot/v3/private/cancel-order")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"DELETE")," /spot/v1/order")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"DELETE")," /spot/v1/order/fast")))),(0,l.kt)("h4",{id:"batch-orders"},"Batch orders"),(0,l.kt)("span",{class:"blocky_table"},(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("th",null),(0,l.kt)("th",null,"Path"),(0,l.kt)("th",null,"Limit By Default")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Batch place orders"),(0,l.kt)("td",null,"/unified/v3/private/order/create-batch"),(0,l.kt)("td",null,"2 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Batch replace orders"),(0,l.kt)("td",null,"/unified/v3/private/order/replace-batch"),(0,l.kt)("td",null,"2 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Batch cancel orders"),(0,l.kt)("td",null,"/unified/v3/private/order/cancel-batch"),(0,l.kt)("td",null,"2 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Cancel all orders"),(0,l.kt)("td",null,"/unified/v3/private/order/cancel-all"),(0,l.kt)("td",null,"2 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Batch cancel orders"),(0,l.kt)("td",null,"/spot/v3/private/cancel-orders"),(0,l.kt)("td",null,"20 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Cancel orders by IDs"),(0,l.kt)("td",null,"/spot/v3/private/cancel-orders-by-ids"),(0,l.kt)("td",null,"20 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Batch cancel orders"),(0,l.kt)("td",null,(0,l.kt)("b",null,"DELETE")," /spot/order/batch-cancel"),(0,l.kt)("td",null,"20 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Batch fast cancel orders"),(0,l.kt)("td",null,(0,l.kt)("b",null,"DELETE")," /spot/order/batch-fast-cancel"),(0,l.kt)("td",null,"20 req/s")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Batch cancel orders by IDs"),(0,l.kt)("td",null,(0,l.kt)("b",null,"DELETE")," /spot/order/batch-cancel-by-ids"),(0,l.kt)("td",null,"20 req/s")))),(0,l.kt)("h2",{id:"how-to-increase-api-limit"},"How to increase API Limit"),(0,l.kt)("p",null,"Please email ",(0,l.kt)("a",{parentName:"p",href:"mailto:api@bybit.com"},"api@bybit.com")," with the following information. We will reply within 1-4 working days:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Your name and your company details"),(0,l.kt)("li",{parentName:"ol"},"Your Bybit UID or registered email, and the assets you are trading"),(0,l.kt)("li",{parentName:"ol"},"General description of your trading strategy and reasons for higher rate limits"),(0,l.kt)("li",{parentName:"ol"},"Screenshot of previous monthly trading volume (maker/taker) on other platforms"),(0,l.kt)("li",{parentName:"ol"},"Optional: your order history in CSV format")))}k.isMDXComponent=!0}}]);
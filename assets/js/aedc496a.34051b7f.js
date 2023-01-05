"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[882],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55484:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Position List",sidebar_label:"Position List",sidebar_position:1,slug:"/copy-trade/position/position-info"},l=void 0,o={unversionedId:"v3/copy-trade/rest-trade/position/position-info",id:"v3/copy-trade/rest-trade/position/position-info",title:"Position List",description:"Position List",source:"@site/docs/v3/copy-trade/rest-trade/position/position-info.mdx",sourceDirName:"v3/copy-trade/rest-trade/position",slug:"/copy-trade/position/position-info",permalink:"/docs-v2/copy-trade/position/position-info",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Position List",sidebar_label:"Position List",sidebar_position:1,slug:"/copy-trade/position/position-info"},sidebar:"v3SideBar",previous:{title:"Close Order",permalink:"/docs-v2/copy-trade/trade/close-order"},next:{title:"Close Position",permalink:"/docs-v2/copy-trade/position/close-position"}},p={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},m=d("Tabs"),c=d("TabItem"),u={toc:s};function g(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Position List"),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/copytrading/position/list")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"side"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position qty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"positionValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"entryPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Average entry price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"liqPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Liquidation price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bustPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bankruptcy price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"markPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Mark price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"leverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"In Isolated Margin mode, the value is set by the user. In Cross Margin mode, the value is the max leverage at current risk level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isIsolated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true means isolated margin mode; false means cross margin mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"positionMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"occClosingFee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position closing fee occupied (your opening fee + expected maximum closing fee)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"occFundingFee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-occupied funding fee: calculated from position qty and current funding fee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Accumulated realised pnl (all-time total)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"freeQty"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Qty which can be closed. (If you have a long position, free_qty is negative. vice versa)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"unrealised pnl")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"positionIdx"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Position idx, used to identify positions in different position modes:1-Buy side of both side mode; 2-Sell side of both side mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"createdTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Creation time (when the order_status was Created)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"updatedTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Update time")))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"console",label:"Console",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request GET 'https://api-testnet.bybit.com/contract/v3/private/copytrading/position/list' \\\n--header 'X-BAPI-SIGN-TYPE: 2' \\\n--header 'X-BAPI-SIGN: 901734bbab6ff1ac16bd08c39e3ba71da4b156bb82669daef849e84fc199fc41' \\\n--header 'X-BAPI-API-KEY: IZXRDYUTQVVTRDHOKW' \\\n--header 'X-BAPI-TIMESTAMP: 1670831398044' \\\n--header 'X-BAPI-RECV-WINDOW: 5000' \\\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "list": [\n            {\n                "symbol": "ETHUSDT",\n                "side": "Sell",\n                "size": "0.02",\n                "positionValue": "25.2665",\n                "entryPrice": "1263.325",\n                "liqPrice": "1383.30",\n                "bustPrice": "1389.65",\n                "markPrice": "1254.60",\n                "leverage": "10",\n                "isIsolated": true,\n                "positionMargin": "2.52665009",\n                "occClosingFee": "0.0166758",\n                "occFundingFee": "0",\n                "cumRealisedPnl": "132.46751301",\n                "freeQty": "0.02",\n                "unrealisedPnl": "0.1745",\n                "positionIdx": "2",\n                "createdTime": "1652324549816",\n                "updatedTime": "1670841190027"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1670841190031\n}\n')))))}g.isMDXComponent=!0}}]);
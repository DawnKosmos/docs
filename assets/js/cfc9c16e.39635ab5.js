"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5381],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),g=s(r),u=a,k=g["".concat(p,".").concat(u)]||g[u]||m[u]||i;return r?n.createElement(k,l(l({ref:e},d),{},{components:r})):n.createElement(k,l({ref:e},d))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},67329:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Set Trading Stop",sidebar_label:"Set Trading Stop",sidebar_position:4},l=void 0,o={unversionedId:"v5/position/trading-stop",id:"v5/position/trading-stop",title:"Set Trading Stop",description:"Set the take profit, stop loss or trailing stop for the position.",source:"@site/docs/v5/position/trading-stop.mdx",sourceDirName:"v5/position",slug:"/v5/position/trading-stop",permalink:"/docs-v2/v5/position/trading-stop",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Set Trading Stop",sidebar_label:"Set Trading Stop",sidebar_position:4},sidebar:"v5SideBar",previous:{title:"Set Risk Limit",permalink:"/docs-v2/v5/position/set-risk-limit"},next:{title:"Get Execution (half year)",permalink:"/docs-v2/v5/position/execution"}},p={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:s};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Set the take profit, stop loss or trailing stop for the position."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Covers: Linear contract(Unified Account)"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Passing these parameters will create conditional orders by the system internally. The system will cancel these orders if the position is closed, and adjust the qty according to the size of the open position.")),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/position/trading-stop")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Cannot be less than 0, 0 means cancel TP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Cannot be less than 0, 0 means cancel SL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"trailingStop"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Cannot be less than 0, 0 means cancel TS. ",(0,a.kt)("em",{parentName:"td"},"note: valid for USDT Perpetual ONLY"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Take profit trigger price type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Stop loss trigger price type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"activePrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Trailing stop trigger price. Trailing stop will be triggered when this price is reached ONLY")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tpSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Take profit size. Valid in tp-sl partial mode. ",(0,a.kt)("em",{parentName:"td"},"note: partial tp/sl valid for USDT Perpetual ONLY"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"slSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Stop loss size. Valid in tp-sl partial mode. ",(0,a.kt)("em",{parentName:"td"},"note: partial tp/sl valid for USDT Perpetual ONLY"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#positionidx"},"positionIdx")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to identify positions in different position modes. ",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"0"),": one-way mode"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"1"),": hedge-mode Buy side"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"2"),": hedge-mode Sell side"))))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/position/trading-stop HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672283124270\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n    "category":"linear",\n    "symbol": "XRPUSDT",\n    "takeProfit": "0.5",\n    "stopLoss": "0.2",\n    "tpTriggerBy": "MarkPrice",\n    "slTriggerBy": "IndexPrice",\n    "tpSize": "50",\n    "slSize": "50",\n    "positionIdx": 0\n}\n')),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1672283125359\n}\n')))}m.isMDXComponent=!0}}]);
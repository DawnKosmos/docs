"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6948],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(r),u=n,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return r?a.createElement(g,i(i({ref:e},d),{},{components:r})):a.createElement(g,i({ref:e},d))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},61813:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_label:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_position:6,slug:"/derivatives/contract/trading-stop"},i=void 0,o={unversionedId:"v3/derivatives/rest-contract/position/trading-stop",id:"v3/derivatives/rest-contract/position/trading-stop",title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",description:"Set the take profit, stop loss or trailing stop for the position. If under Tp/SL partial mode, TP/SL/TS orders will not close your entire position.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/position/trading-stop.mdx",sourceDirName:"v3/derivatives/rest-contract/position",slug:"/derivatives/contract/trading-stop",permalink:"/docs-v2/zh-TW/derivatives/contract/trading-stop",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_label:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",sidebar_position:6,slug:"/derivatives/contract/trading-stop"},sidebar:"v3SideBar",previous:{title:"\u8a2d\u7f6e\u69d3\u687f\u500d\u6578",permalink:"/docs-v2/zh-TW/derivatives/contract/leverage"},next:{title:"\u8a2d\u7f6e\u98a8\u96aa\u9650\u984d",permalink:"/docs-v2/zh-TW/derivatives/contract/set-risk-limit"}},s={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},m=d("Tabs"),c=d("TabItem"),u={toc:p};function g(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Set the take profit, stop loss or trailing stop for the position. If under ",(0,n.kt)("a",{parentName:"p",href:"tpsl-mode#"},"Tp/SL partial mode"),", TP/SL/TS orders will not close your entire position."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Passing these parameters will create conditional orders by the system internally."),(0,n.kt)("li",{parentName:"ul"},"The system will cancel these orders if the position is closed, and adjust the qty according to the size of the open position."),(0,n.kt)("li",{parentName:"ul"},"Support USDT Perpetual, Inverse Perpetual, Inverse Future and USDC Perpetual. ",(0,n.kt)("strong",{parentName:"li"},"Note:")," USDC Perpetual does not have partial TP/SL mode."))),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/position/trading-stop")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cannot be less than 0, 0 means cancel TP. Partial TP/SL cannot be cancelled by set it 0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cannot be less than 0, 0 means cancel SL. Partial TP/SL cannot be cancelled by set it 0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tpSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Take profit size. Valid in TP/SL partial mode ONLY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"slSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop loss size. Valid in TP/SL partial mode ONLY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Take profit trigger price type. default: ",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop loss trigger price type. default: ",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"trailingStop"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cannot be less than 0, 0 means cancel TS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"activePrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trailing stop trigger price. Trailing stop will be triggered when this price is reached ONLY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"positionIdx"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to identify positions in different position modes. ",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"0"),": one-way mode"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"1"),": hedge-mode Buy side"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"2"),": hedge-mode Sell side")," "))))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("p",null,"None"),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(c,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/position/trading-stop HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670852788387\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{\n    "symbol": "SOLPERP",\n    "takeProfit": "19",\n    "stopLoss": "10",\n    "activePrice": null,\n    "trailingStop": null,\n    "tpTriggerBy": null,\n    "slTriggerBy": null,\n    "slSize": null,\n    "tpSize": null,\n    "positionIdx": 0\n}\n')))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(c,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1670852788558\n}\n')))))}g.isMDXComponent=!0}}]);
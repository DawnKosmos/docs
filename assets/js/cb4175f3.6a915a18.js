"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6529],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=l.createContext({}),u=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,c=p["".concat(d,".").concat(m)]||p[m]||k[m]||i;return n?l.createElement(c,a(a({ref:e},s),{},{components:n})):l.createElement(c,a({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=p;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12426:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const i={title:"My Position",sidebar_label:"My Position",sidebar_position:1,slug:"/derivatives/unified/position-info"},a=void 0,o={unversionedId:"v3/derivatives/rest-unified/position/position-info",id:"v3/derivatives/rest-unified/position/position-info",title:"My Position",description:"Get real-time position data",source:"@site/docs/v3/derivatives/rest-unified/position/position-info.mdx",sourceDirName:"v3/derivatives/rest-unified/position",slug:"/derivatives/unified/position-info",permalink:"/docs-v2/derivatives/unified/position-info",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"My Position",sidebar_label:"My Position",sidebar_position:1,slug:"/derivatives/unified/position-info"},sidebar:"v3SideBar",previous:{title:"Get Order List",permalink:"/docs-v2/derivatives/unified/order-list"},next:{title:"Set Leverage",permalink:"/docs-v2/derivatives/unified/leverage"}},d={},u=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},k=s("Tabs"),p=s("TabItem"),m={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get real-time position data"),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/position/list")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Base coin. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"category"),"=option, then ",(0,r.kt)("strong",{parentName:"td"},"BTC")," records returned by default")," "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"settleCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Settle coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Page direction. ",(0,r.kt)("inlineCode",{parentName:"td"},"prev"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"next"),". default: ",(0,r.kt)("inlineCode",{parentName:"td"},"next"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"200"),"]",". default: ",(0,r.kt)("inlineCode",{parentName:"td"},"200"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(k,{mdxType:"Tabs"},(0,r.kt)(p,{value:"linear",label:"linear",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cursor. Used to pagination")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Products category")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Leverage value ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Update time of position (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"`Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total value of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> takeProfit"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Take profit price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tpslMode"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Tp/SL mode. `Partial`, `Full` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> riskId"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Risk limit id ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> trailingStop"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Trailing stop (the distance from the current price) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> entryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Average entry price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unrealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Unrealised pnl ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> stopLoss"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Stop loss price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumRealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cumulative realised profit and loss ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionMM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position maintenance margin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Created time (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIdx"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Position idx, used to identify positions in different position modes",(0,r.kt)("li",null,"`0`: One-Way Mode"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position initial margin ")))),(0,r.kt)(p,{value:"option",label:"option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cursor. Used to pagination")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Products category")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Update time of position (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"`Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total value of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> entryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Average entry price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unrealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Unrealised pnl ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumRealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cumulative realised profit and loss ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionMM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position maintenance margin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Created time")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIdx"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Not Applicable ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position initial margin "))))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(k,{mdxType:"Tabs"},(0,r.kt)(p,{value:"console-linear",label:"Console-linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/position/list?category=linear&symbol=XRPUSDT HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672820718517\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,r.kt)(p,{value:"console-option",label:"Console-option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/position/list?category=option&baseCoin=ETH HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672018474913\nX-BAPI-RECV-WINDOW: 5000\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(k,{mdxType:"Tabs"},(0,r.kt)(p,{value:"json-linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "nextPageCursor": "updateAt%3D1672819200214",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "XRPUSDT",\n                "updatedTime": 1672819200214,\n                "leverage": "10",\n                "side": "Buy",\n                "positionValue": "34.91000000",\n                "takeProfit": "",\n                "tpslMode": "Partial",\n                "riskId": 41,\n                "trailingStop": "0",\n                "entryPrice": "0.34910000",\n                "unrealisedPnl": "0.00000000",\n                "markPrice": "0.34910000",\n                "size": "100.0000",\n                "cumRealisedPnl": "-0.02444200",\n                "stopLoss": "",\n                "positionMM": "0.36795140",\n                "createdTime": 1672016298024,\n                "positionIdx": 0,\n                "positionIM": "3.50985140"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672820720159\n}\n'))),(0,r.kt)(p,{value:"json-option",label:"option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n        "nextPageCursor": "ETH-30DEC22-700-C%3A1672018465372%2CETH-30DEC22-700-C%3A1672018465372",\n        "category": "option",\n        "list": [\n            {\n                "symbol": "ETH-30DEC22-700-C",\n                "updatedTime": 1672018465372,\n                "side": "Sell",\n                "positionValue": "49.80000000",\n                "entryPrice": "498.00000000",\n                "unrealisedPnl": "-2.02774092",\n                "markPrice": "518.27740924",\n                "size": "-0.1000",\n                "cumRealisedPnl": "0.00000000",\n                "positionMM": "55.72735692",\n                "createdTime": 1672018465365,\n                "positionIdx": 0,\n                "positionIM": "70.10719092"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672018475719\n}\n')))))}c.isMDXComponent=!0}}]);
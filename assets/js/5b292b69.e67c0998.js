"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1},o=void 0,i={unversionedId:"v3/derivatives/wss-public/orderbook",id:"v3/derivatives/wss-public/orderbook",title:"Orderbook",description:"cover: USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Option",source:"@site/docs/v3/derivatives/wss-public/orderbook.mdx",sourceDirName:"v3/derivatives/wss-public",slug:"/v3/derivatives/wss-public/orderbook",permalink:"/docs-v2/v3/derivatives/wss-public/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1},sidebar:"v3SideBar",previous:{title:"Connect",permalink:"/docs-v2/v3/derivatives/wss-authentication"},next:{title:"Public Trade",permalink:"/docs-v2/v3/derivatives/wss-public/trade"}},p={},s=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=d("Tabs"),u=d("TabItem"),k={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"cover: USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Option")),(0,a.kt)("p",null,"Get different depth"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Once subscribe successfully, you will receive a ",(0,a.kt)("inlineCode",{parentName:"li"},"snapshot")," first."),(0,a.kt)("li",{parentName:"ul"},"The data is sort by order price, which bids is from highest to lowest and asks is from lowest to highest"),(0,a.kt)("li",{parentName:"ul"},"Websocket will keep pushing ",(0,a.kt)("inlineCode",{parentName:"li"},"delta")," message when orderbook is changed."),(0,a.kt)("li",{parentName:"ul"},"If you receive a new snapshot data, it is necessary to reset your local orderbook."),(0,a.kt)("li",{parentName:"ul"},"If there is a problem in bybit end, it will re-send a snapshot, which is promised the latest and accurate."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linear & Inverse:"),(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 level data, push frequency: ",(0,a.kt)("strong",{parentName:"li"},"10ms")),(0,a.kt)("li",{parentName:"ul"},"50 level data, push frequency: ",(0,a.kt)("strong",{parentName:"li"},"20ms")),(0,a.kt)("li",{parentName:"ul"},"200 level data, push frequency: ",(0,a.kt)("strong",{parentName:"li"},"100ms"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Option:"),(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"25 level data"),(0,a.kt)("li",{parentName:"ul"},"100 level data")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic:")," (note: option has 25 & 100 level only)",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"orderbook.1.{symbol}"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"orderbook.25.{symbol}"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"orderbook.50.{symbol}"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"orderbook.100.{symbol}"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"orderbook.200.{symbol}")),(0,a.kt)("p",null,"\u9700\u786e\u8ba4option\u7684\u7ed3\u6784"),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Message type. ",(0,a.kt)("inlineCode",{parentName:"td"},"snaptshot"),",",(0,a.kt)("inlineCode",{parentName:"td"},"delta"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"The timestamp (ms) that system generates the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array","<","array",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> b","[0][0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> b","[0][1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array","<","array",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> s","[0][0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> s","[0][1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> u"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},'Update id, is always in sequence. Occasionally, you\'ll receive "u"=1, which is a snapshot data due to the restart of the service. So please overwrite the locally saved orderbook')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> seq"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Cross sequence (internal value)")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(u,{value:"console",label:"JSON subscription message",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "op": "subscribe",\n    "args": [\n    "orderbook.50.BTCUSDT"\n    ],\n    "req_id": "test" // optional\n}\n')))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(u,{value:"orderbook-snapshot",label:"orderbook-snapshot",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.50.BTCUSDT",\n    "type": "snapshot",\n    "ts": 1671179923028,\n    "data": {\n        "s": "BTCUSDT",\n        "b": [\n            [\n                "17440.00",\n                "40.833"\n            ],\n            [\n                "17439.50",\n                "0.513"\n            ],\n            ...\n            [\n                "17416.00",\n                "6.156"\n            ],\n            [\n                "17415.50",\n                "32.268"\n            ]\n    ],\n    "a": [\n        [\n            "17440.50",\n            "78.815"\n        ],\n        [\n            "17441.00",\n            "8.858"\n        ],\n        ...\n        [\n            "17464.50",\n            "4.901"\n        ],\n        [\n            "17465.00",\n            "5.744"\n        ]\n    ],\n    "u": 13079592,\n    "seq": 22520573250\n    }\n}\n'))),(0,a.kt)(u,{value:"orderbook-delta",label:"orderbook-delta",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.50.BTCUSDT",\n    "type": "delta",\n    "ts": 1671179923046,\n    "data": {\n    "s": "BTCUSDT",\n    "b": [],\n    "a": [\n        [\n            "17440.50",\n            "78.857"\n        ],\n        [\n            "17442.00",\n            "1.510"\n        ]\n    ],\n    "u": 13079593,\n    "seq": 22520573262\n}\n}\n')))))}c.isMDXComponent=!0}}]);
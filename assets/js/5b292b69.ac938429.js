"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1,slug:"/derivatives/ws-public/orderbook"},o=void 0,i={unversionedId:"v3/derivatives/wss-public/orderbook",id:"v3/derivatives/wss-public/orderbook",title:"Orderbook",description:"Get different depth",source:"@site/docs/v3/derivatives/wss-public/orderbook.mdx",sourceDirName:"v3/derivatives/wss-public",slug:"/derivatives/ws-public/orderbook",permalink:"/docs-v2/derivatives/ws-public/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Orderbook",sidebar_label:"Orderbook",sidebar_position:1,slug:"/derivatives/ws-public/orderbook"},sidebar:"v3SideBar",previous:{title:"Connect",permalink:"/docs-v2/derivatives/ws/connect"},next:{title:"Public Trade",permalink:"/docs-v2/derivatives/ws-public/trade"}},s={},p=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscription Example",id:"subscription-example",level:3},{value:"Stream Example",id:"stream-example",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("Tabs"),u=d("TabItem"),k={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get different depth"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Covers: USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Option"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Once subscribe successfully, you will receive a ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshot")," first."),(0,r.kt)("li",{parentName:"ul"},"The data is sort by order price, which bids is from highest to lowest and asks is from lowest to highest"),(0,r.kt)("li",{parentName:"ul"},"Websocket will keep pushing ",(0,r.kt)("inlineCode",{parentName:"li"},"delta")," message when orderbook is changed."),(0,r.kt)("li",{parentName:"ul"},"If you receive a new snapshot data, it is necessary to reset your local orderbook."),(0,r.kt)("li",{parentName:"ul"},"If there is a problem in bybit end, it will re-send a snapshot, which is promised the latest and accurate."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Linear & inverse level 1 data: if 3 seconds have elapsed without a change in the orderbook, a ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshot")," message will be pushed again.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Linear & Inverse:"),(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Level 1 data, push frequency: ",(0,r.kt)("strong",{parentName:"li"},"10ms")),(0,r.kt)("li",{parentName:"ul"},"Level 50 data, push frequency: ",(0,r.kt)("strong",{parentName:"li"},"20ms")),(0,r.kt)("li",{parentName:"ul"},"Level 200 data, push frequency: ",(0,r.kt)("strong",{parentName:"li"},"100ms")),(0,r.kt)("li",{parentName:"ul"},"Level 500 data, push frequency: ",(0,r.kt)("strong",{parentName:"li"},"100ms"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option:"),(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Level 25 data, push frequency: ",(0,r.kt)("strong",{parentName:"li"},"20ms")),(0,r.kt)("li",{parentName:"ul"},"Level 100 data, push frequency: ",(0,r.kt)("strong",{parentName:"li"},"100ms"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:")," (note: option has 25 & 100 level only)",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"orderbook.{depth}.{symbol}")," e.g., orderbook.1.BTCUSDT"),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message type. ",(0,r.kt)("inlineCode",{parentName:"td"},"snaptshot"),",",(0,r.kt)("inlineCode",{parentName:"td"},"delta"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp (ms) that system generates the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array","<","array",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Bid array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> b","[0][0]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bid price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> b","[0][1]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bid size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array","<","array",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Ask array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> s","[0][0]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Ask price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> s","[0][1]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Ask size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> u"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},'Update id, is always in sequence. Occasionally, you\'ll receive "u"=1, which is a snapshot data due to the restart of the service. So please overwrite the locally saved orderbook')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> seq"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Cross sequence (internal value)")))),(0,r.kt)("h3",{id:"subscription-example"},"Subscription Example"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(u,{value:"console",label:"JSON subscription message",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "subscribe",\n    "args": [\n    "orderbook.50.BTCUSDT"\n    ],\n    "req_id": "test" // optional\n}\n')))),(0,r.kt)("h3",{id:"stream-example"},"Stream Example"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(u,{value:"orderbook-snapshot",label:"orderbook-snapshot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.50.BTCUSDT",\n    "type": "snapshot",\n    "ts": 1671179923028,\n    "data": {\n        "s": "BTCUSDT",\n        "b": [\n            [\n                "17440.00",\n                "40.833"\n            ],\n            [\n                "17439.50",\n                "0.513"\n            ],\n            ...\n            [\n                "17416.00",\n                "6.156"\n            ],\n            [\n                "17415.50",\n                "32.268"\n            ]\n    ],\n    "a": [\n        [\n            "17440.50",\n            "78.815"\n        ],\n        [\n            "17441.00",\n            "8.858"\n        ],\n        ...\n        [\n            "17464.50",\n            "4.901"\n        ],\n        [\n            "17465.00",\n            "5.744"\n        ]\n    ],\n    "u": 13079592,\n    "seq": 22520573250\n    }\n}\n'))),(0,r.kt)(u,{value:"orderbook-delta",label:"orderbook-delta",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.50.BTCUSDT",\n    "type": "delta",\n    "ts": 1671179923046,\n    "data": {\n    "s": "BTCUSDT",\n    "b": [],\n    "a": [\n        [\n            "17440.50",\n            "78.857"\n        ],\n        [\n            "17442.00",\n            "1.510"\n        ]\n    ],\n    "u": 13079593,\n    "seq": 22520573262\n}\n}\n')))))}c.isMDXComponent=!0}}]);
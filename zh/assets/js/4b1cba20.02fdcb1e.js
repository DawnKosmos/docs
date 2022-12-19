"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},14946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Connect",sidebar_label:"Connect"},i=void 0,s={unversionedId:"v3/derivatives/wss-authentication",id:"v3/derivatives/wss-authentication",title:"Connect",description:"Base endpoints:",source:"@site/docs/v3/derivatives/wss-authentication.mdx",sourceDirName:"v3/derivatives",slug:"/v3/derivatives/wss-authentication",permalink:"/docs-v2/zh/v3/derivatives/wss-authentication",draft:!1,tags:[],version:"current",frontMatter:{title:"Connect",sidebar_label:"Connect"},sidebar:"v3SideBar",previous:{title:"Get Closed PnL",permalink:"/docs-v2/zh/v3/derivatives/rest-contract/position/close-pnl"},next:{title:"Public Trade",permalink:"/docs-v2/zh/v3/derivatives/wss-public/trade"}},c={},l=[{value:"Authentication",id:"authentication",level:2},{value:"IP Limits",id:"ip-limits",level:2},{value:"How to Send Heartbeat Packet",id:"how-to-send-heartbeat-packet",level:2},{value:"How to Subscribe to Topics",id:"how-to-subscribe-to-topics",level:2},{value:"Understanding Websocket Filters",id:"understanding-websocket-filters",level:3},{value:"Understanding Websocket Filters unsubscription",id:"understanding-websocket-filters-unsubscription",level:3},{value:"Understanding Subscription Response",id:"understanding-subscription-response",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("Tabs"),b=p("TabItem"),d={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Base endpoints:"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"WebSocket public channel:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mainnet:"),(0,r.kt)("br",null),"\nUSDT contract: wss://stream.bybit.com/contract/usdt/public/v3",(0,r.kt)("br",null),"\nInverse contract: wss://stream.bybit.com/contract/inverse/public/v3",(0,r.kt)("br",null),"\nUSDC contract: wss://stream.bybit.com/contract/usdc/public/v3",(0,r.kt)("br",null),"\nUSDC Option: wss://stream.bybit.com/option/usdc/public/v3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Testnet:"),(0,r.kt)("br",null),"\nUSDT contract: wss://stream-testnet.bybit.com/contract/usdt/public/v3",(0,r.kt)("br",null),"\nInverse contract: wss://stream-testnet.bybit.com/contract/inverse/public/v3",(0,r.kt)("br",null),"\nUSDC contract: wss://stream-testnet.bybit.com/contract/usdc/public/v3",(0,r.kt)("br",null),"\nUSDC Option: wss://stream-testnet.bybit.com/option/usdc/public/v3"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebSocket private channel:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mainnet:"),(0,r.kt)("br",null),"\nUnified account: wss://stream.bybit.com/unified/private/v3",(0,r.kt)("br",null),"\nContract account: wss://stream.bybit.com/contract/private/v3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Testnet:"),(0,r.kt)("br",null),"\nUnified account: wss://stream-testnet.bybit.com/unified/private/v3",(0,r.kt)("br",null),"\nContract account: wss://stream-testnet.bybit.com/contract/private/v3"))),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("b",null,"Public")," topics do not require authentication. The following section applies to ",(0,r.kt)("b",null,"private")," topics only."),(0,r.kt)("p",null,"Apply for authentication when establishing a connection."),(0,r.kt)("p",null,"Note: if you're using ",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/pybit"},"pybit")," or another high-level library, you can ignore this code - as authentication is handled for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "10001", // optional\n    "op": "auth",\n    "args": [\n        "api_key",\n        1662350400000, //expires greater than currentTimeStamp\n        "singature"\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# based on: https://github.com/bybit-exchange/pybit/blob/master/pybit/_http_manager.py\n\nimport hmac\nimport json\nimport time\nimport websocket\n\napi_key = ""\napi_secret = ""\n\n# Generate expires.\nexpires = int((time.time() + 1) * 1000)\n\n# Generate signature.\nsignature = str(hmac.new(\n    bytes(api_secret, "utf-8"),\n    bytes(f"GET/realtime{expires}", "utf-8"), digestmod="sha256"\n).hexdigest())\n\nws = websocket.WebSocketApp(\n    url=url,\n    ...\n)\n\n# Authenticate with API.\nws.send(\n    json.dumps({\n        "op": "auth",\n        "args": [api_key, expires, signature]\n    })\n)\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Authentication success sample response")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(b,{value:"contract",label:"contract",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "auth",\n    "conn_id": "ced97gevha793pjs1t30-ob"\n}\n'))),(0,r.kt)(b,{value:"unified",label:"unified",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "conn_id": "1e4335fffebbf409-00000001-00001a94-b5385accb911ee54-5032c2b9",\n    "ret_msg": "0",\n    "type": "AUTH_RESP"\n}\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Example signature algorithms can be found ",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"here"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Due to network complexity, your may get disconnected at any time. Please follow the instructions below to ensure that you receive WebSocket messages on time:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Keep connection alive by ",(0,r.kt)("a",{parentName:"li",href:"wss-authentication#how-to-send-heartbeat-packet"},"sending heartbeat packet")),(0,r.kt)("li",{parentName:"ol"},"Reconnect as soon as possible if disconnected"))),(0,r.kt)("h2",{id:"ip-limits"},"IP Limits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not frequently connect and disconnect the connection."),(0,r.kt)("li",{parentName:"ul"},"Do not build over 500 connections in 5 minutes.")),(0,r.kt)("h2",{id:"how-to-send-heartbeat-packet"},"How to Send Heartbeat Packet"),(0,r.kt)("p",null,"How to Send"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// req_id is a customised id, which is optional\nws.send(JSON.stringify({"req_id": "100001", "op": "ping"}));\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pong message example")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(b,{value:"contract",label:"contract-private",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test",\n    "op": "pong",\n    "args": [\n    "1671163042443"\n    ],\n    "conn_id": "ce3e06kfnonvuu2e3j4g-2t5w"\n}\n'))),(0,r.kt)(b,{value:"unified",label:"unified-private",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "args": [\n    "1671162870671"\n    ],\n    "op": "pong"\n}\n'))),(0,r.kt)(b,{value:"public",label:"usdt-usdc-inverse-public",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "pong",\n    "conn_id": "13271fcb-53ed-4e80-948e-2bdbe3a6587d",\n    "req_id": "",\n    "op": "ping"\n}\n'))),(0,r.kt)(b,{value:"public-option",label:"option-public",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "args": [\n    "1671117705244"\n    ],\n    "op": "pong"\n}\n')))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To avoid networks or program issues, we recommend that you send the ",(0,r.kt)("code",null,"ping")," heartbeat packet every ",(0,r.kt)("b",null,"20")," seconds to maintain the WebSocket connection.")),(0,r.kt)("h2",{id:"how-to-subscribe-to-topics"},"How to Subscribe to Topics"),(0,r.kt)("h3",{id:"understanding-websocket-filters"},"Understanding Websocket Filters"),(0,r.kt)("p",null,"How to subscribe with a filter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Subscribing level 1 orderbook\n{\n    "req_id": "test", // optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT"\n    ]\n}\n')),(0,r.kt)("p",null,"Support subscribe multiple symbols and topics, separate with ','."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test", // optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT",\n        "publicTrade.BTCUSDT"\uff0c\n        "orderbook.1.ETHUSDT",\n    ]\n}\n')),(0,r.kt)("h3",{id:"understanding-websocket-filters-unsubscription"},"Understanding Websocket Filters unsubscription"),(0,r.kt)("p",null,"You can dynamically subscribe and unsubscribe from topics without websocket disconnection as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "unsubscribe",\n    "args": [\n        "publicTrade.ETHUSD"\n    ],\n    "req_id": "customised_id"\n}\n')),(0,r.kt)("h2",{id:"understanding-subscription-response"},"Understanding Subscription Response"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Topic subscription response message example")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(b,{value:"contract",label:"contract-private",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "subscribe",\n    "conn_id": "ced97gevha793pjs1t30-ob"\n}\n'))),(0,r.kt)(b,{value:"unified",label:"unified-private",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "conn_id": "1e4335fffebbf409-00000001-00001a94-b5385accb911ee54-5032c2b9",\n    "type": "COMMAND_RESP"\n}\n'))),(0,r.kt)(b,{value:"public",label:"usdt-usdc-inverse-public",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "conn_id": "8876a25d-f0e5-46e0-bccf-313a3c4ad731",\n    "req_id": "",\n    "op": "subscribe"\n}\n'))),(0,r.kt)(b,{value:"public-option",label:"option-public",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "conn_id": "aa01fbfffe80af37-00000001-0002fc0c-abef9d34758eb879-2505dda0",\n    "type": "COMMAND_RESP"\n}\n')))))}m.isMDXComponent=!0}}]);
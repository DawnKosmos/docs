"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=c(n),m=r,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||o;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},10541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Connect",sidebar_label:"Connect",slug:"/v5/ws/connect"},s=void 0,i={unversionedId:"v5/websocket/wss-authentication",id:"v5/websocket/wss-authentication",title:"Connect",description:"Base endpoints:",source:"@site/docs/v5/websocket/wss-authentication.mdx",sourceDirName:"v5/websocket",slug:"/v5/ws/connect",permalink:"/docs-v2/v5/ws/connect",draft:!1,tags:[],version:"current",frontMatter:{title:"Connect",sidebar_label:"Connect",slug:"/v5/ws/connect"},sidebar:"v5SideBar",previous:{title:"Set Leverage",permalink:"/docs-v2/v5/spot-margin/set-leverage"},next:{title:"Orderbook",permalink:"/docs-v2/v5/websocket/public/orderbook"}},l={},c=[{value:"Authentication",id:"authentication",level:2},{value:"IP Limits",id:"ip-limits",level:2},{value:"How to Send Heartbeat Packet",id:"how-to-send-heartbeat-packet",level:2},{value:"How to Subscribe to Topics",id:"how-to-subscribe-to-topics",level:2},{value:"Understanding Websocket Filters",id:"understanding-websocket-filters",level:3},{value:"Understanding Websocket Filters unsubscription",id:"understanding-websocket-filters-unsubscription",level:3},{value:"Understanding Subscription Response",id:"understanding-subscription-response",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("Tabs"),b=p("TabItem"),m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Base endpoints:"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"WebSocket public channel:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mainnet:"),(0,r.kt)("br",null),"\nSpot: wss://stream.bybit.com/v5/public/spot",(0,r.kt)("br",null),"\nLinear contract: wss://stream.bybit.com/v5/public/linear",(0,r.kt)("br",null),"\nInverse contract: wss://stream.bybit.com/v5/public/inverse",(0,r.kt)("br",null),"\nUSDC Option: wss://stream.bybit.com/v5/public/option")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Testnet:"),(0,r.kt)("br",null),"\nSpot: wss://stream-testnet.bybit.com/v5/public/spot",(0,r.kt)("br",null),"\nLinear contract: wss://stream-testnet.bybit.com/v5/public/linear",(0,r.kt)("br",null),"\nInverse contract: wss://stream-testnet.bybit.com/v5/public/inverse",(0,r.kt)("br",null),"\nUSDC Option: wss://stream-testnet.bybit.com/v5/public/option"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebSocket private channel:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mainnet:"),(0,r.kt)("br",null),"\nwss://stream.bybit.com/v5/private",(0,r.kt)("br",null))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Testnet:"),(0,r.kt)("br",null),"\nwss://stream-testnet.bybit.com/v5/private"))),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("b",null,"Public")," topics do not require authentication. The following section applies to ",(0,r.kt)("b",null,"private")," topics only."),(0,r.kt)("p",null,"Apply for authentication when establishing a connection."),(0,r.kt)("p",null,"Note: if you're using ",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/pybit"},"pybit")," or another high-level library, you can ignore this code - as authentication is handled for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "10001", // optional\n    "op": "auth",\n    "args": [\n        "api_key",\n        1662350400000, //expires greater than currentTimeStamp\n        "singature"\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# based on: https://github.com/bybit-exchange/pybit/blob/master/pybit/_http_manager.py\n\nimport hmac\nimport json\nimport time\nimport websocket\n\napi_key = ""\napi_secret = ""\n\n# Generate expires.\nexpires = int((time.time() + 1) * 1000)\n\n# Generate signature.\nsignature = str(hmac.new(\n    bytes(api_secret, "utf-8"),\n    bytes(f"GET/realtime{expires}", "utf-8"), digestmod="sha256"\n).hexdigest())\n\nws = websocket.WebSocketApp(\n    url=url,\n    ...\n)\n\n# Authenticate with API.\nws.send(\n    json.dumps({\n        "op": "auth",\n        "args": [api_key, expires, signature]\n    })\n)\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Authentication success sample response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "auth",\n    "conn_id": "cejreaspqfh3sjdnldmg-p"\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Example signature algorithms can be found ",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"here"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Due to network complexity, your may get disconnected at any time. Please follow the instructions below to ensure that you receive WebSocket messages on time:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Keep connection alive by ",(0,r.kt)("a",{parentName:"li",href:"connect#how-to-send-heartbeat-packet"},"sending heartbeat packet")),(0,r.kt)("li",{parentName:"ol"},"Reconnect as soon as possible if disconnected"))),(0,r.kt)("h2",{id:"ip-limits"},"IP Limits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not frequently connect and disconnect the connection."),(0,r.kt)("li",{parentName:"ul"},"Do not build over 500 connections in 5 minutes.")),(0,r.kt)("h2",{id:"how-to-send-heartbeat-packet"},"How to Send Heartbeat Packet"),(0,r.kt)("p",null,"How to Send"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// req_id is a customised id, which is optional\nws.send(JSON.stringify({"req_id": "100001", "op": "ping"}));\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pong message example of WebSocket public channel")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(b,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "pong",\n    "conn_id": "0970e817-426e-429a-a679-ff7f55e0b16a",\n    "op": "ping"\n}\n'))),(0,r.kt)(b,{value:"future",label:"Linear|Inverse",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "pong",\n    "conn_id": "465772b1-7630-4fdc-a492-e003e6f0f260",\n    "req_id": "",\n    "op": "ping"\n}\n'))),(0,r.kt)(b,{value:"option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "args": [\n        "1672916271846"\n    ],\n    "op": "pong"\n}\n')))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To avoid networks or program issues, we recommend that you send the ",(0,r.kt)("code",null,"ping")," heartbeat packet every ",(0,r.kt)("b",null,"20")," seconds to maintain the WebSocket connection.")),(0,r.kt)("h2",{id:"how-to-subscribe-to-topics"},"How to Subscribe to Topics"),(0,r.kt)("h3",{id:"understanding-websocket-filters"},"Understanding Websocket Filters"),(0,r.kt)("p",null,"How to subscribe with a filter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Subscribing level 1 orderbook\n{\n    "req_id": "test", // optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT"\n    ]\n}\n')),(0,r.kt)("p",null,"Support subscribe multiple symbols and topics, separate with ','."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test", // optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT",\n        "publicTrade.BTCUSDT"\uff0c\n        "orderbook.1.ETHUSDT",\n    ]\n}\n')),(0,r.kt)("h3",{id:"understanding-websocket-filters-unsubscription"},"Understanding Websocket Filters unsubscription"),(0,r.kt)("p",null,"You can dynamically subscribe and unsubscribe from topics without websocket disconnection as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "unsubscribe",\n    "args": [\n        "publicTrade.ETHUSD"\n    ],\n    "req_id": "customised_id"\n}\n')),(0,r.kt)("h2",{id:"understanding-subscription-response"},"Understanding Subscription Response"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Topic subscription response message example")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(b,{value:"private",label:"wss-private",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "subscribe",\n    "conn_id": "cejreassvfrsfvb9v1a0-2m"\n}\n'))),(0,r.kt)(b,{value:"public-spot",label:"wss-public-Spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "subscribe",\n    "conn_id": "2324d924-aa4d-45b0-a858-7b8be29ab52b",\n    "req_id": "10001",\n    "op": "subscribe"\n}\n'))),(0,r.kt)(b,{value:"public-future",label:"wss-public-Linear|Inverse",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "conn_id": "3cd84cb1-4d06-4a05-930a-2efe5fc70f0f",\n    "req_id": "",\n    "op": "subscribe"\n}\n'))),(0,r.kt)(b,{value:"public-option",label:"wss-public-Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "conn_id": "aa01fbfffe80af37-00000001-000b37b9-7147f432704fd28c-00e1c172",\n    "data": {\n    "failTopics": [],\n    "successTopics": [\n        "orderbook.100.BTC-6JAN23-18000-C"\n    ]\n},\n    "type": "COMMAND_RESP"\n}\n')))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Connect",sidebar_label:"Connect"},s=void 0,o={unversionedId:"v3/spot/wss-authentication",id:"v3/spot/wss-authentication",title:"Connect",description:"Note that the following endpoints only apply to Spot. To listen to other websockets, go to:",source:"@site/docs/v3/spot/wss-authentication.mdx",sourceDirName:"v3/spot",slug:"/v3/spot/wss-authentication",permalink:"/docs-v2/zh/v3/spot/wss-authentication",draft:!1,tags:[],version:"current",frontMatter:{title:"Connect",sidebar_label:"Connect"},sidebar:"v3SideBar",previous:{title:"Redeem",permalink:"/docs-v2/zh/v3/spot/rest-etp/redeem"},next:{title:"bookticker",permalink:"/docs-v2/zh/v3/spot/wss-public/bookticker"}},l={},c=[{value:"How to Send Heartbeat Packet",id:"how-to-send-heartbeat-packet",level:2},{value:"Rate Limits",id:"rate-limits",level:2},{value:"How to Subscribe to Topics",id:"how-to-subscribe-to-topics",level:2},{value:"Understanding Websocket Filters",id:"understanding-websocket-filters",level:3},{value:"Understanding Websocket Filters unsubscription",id:"understanding-websocket-filters-unsubscription",level:3},{value:"Understanding Subscription Response",id:"understanding-subscription-response",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("b",null,"Note that the following endpoints only apply to ",(0,r.kt)("i",null,"Spot")),". To listen to other websockets, go to:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://bybit-exchange.github.io/docs/inverse/#t-websocketauthentication"},"Inverse Perpetual/Futures")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://bybit-exchange.github.io/docs/linear/#t-websocketauthentication"},"USDT (Linear) Perpetual")))),(0,r.kt)("p",null,"Base endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,"Testnet"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Public Topics: ",(0,r.kt)("span",{id:"testnet_address"},"wss://stream-testnet.bybit.com/spot/public/v3")),(0,r.kt)("li",null,"Private Topics: ",(0,r.kt)("span",{id:"testnet_private_address"},"wss://stream-testnet.bybit.com/spot/private/v3"))),(0,r.kt)("li",null,(0,r.kt)("b",null,"Mainnet"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Public Topics: ",(0,r.kt)("span",{id:"mainnet_address"},"wss://stream.bybit.com/spot/public/v3")),(0,r.kt)("li",null,"Private Topics: ",(0,r.kt)("span",{id:"mainnet_private_address"},"wss://stream.bybit.com/spot/private/v3")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("b",null,"Public")," topics do not require authentication. The following section applies to ",(0,r.kt)("b",null,"private")," topics only."),(0,r.kt)("p",null,"Apply for authentication when establishing a connection."),(0,r.kt)("p",null,"Note: if you're using ",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/pybit"},"pybit")," or another high-level library, you can ignore this code - as authentication is handled for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "req_id": "10001", // optional\n    "op": "auth",\n    "args": [\n        "api_key",\n        1662350400000, //expires greater than currentTimeStamp\n        "singature"\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# based on: https://github.com/bybit-exchange/pybit/blob/master/pybit/_http_manager.py\n\nimport hmac\nimport json\nimport time\nimport websocket\n\napi_key = ""\napi_secret = ""\n\n# Generate expires.\nexpires = int((time.time() + 1) * 1000)\n\n# Generate signature.\nsignature = str(hmac.new(\n    bytes(api_secret, "utf-8"),\n    bytes(f"GET/realtime{expires}", "utf-8"), digestmod="sha256"\n).hexdigest())\n\nws = websocket.WebSocketApp(\n    url=url,\n    ...\n)\n\n# Authenticate with API.\nws.send(\n    json.dumps({\n        "op": "auth",\n        "args": [api_key, expires, signature]\n    })\n)\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Example signature algorithms can be found ",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"here"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Due to network complexity, your may get disconnected at any time. Please follow the instructions below to ensure that you receive WebSocket messages on time:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Keep connection alive by ",(0,r.kt)("a",{href:"#t-heartbeat"},"sending heartbeat packet")),(0,r.kt)("li",{parentName:"ol"},"Reconnect as soon as possible if disconnected"))),(0,r.kt)("h2",{id:"how-to-send-heartbeat-packet"},"How to Send Heartbeat Packet"),(0,r.kt)("p",null,"How to Send"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// req_id is a customised id, which is optional\nws.send(JSON.stringify({"req_id": "100001", "op": "ping"}));\n')),(0,r.kt)("p",null,"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// with req_id\n{"op":"pong","args":[1661741630642],"req_id":"100001","conn_id":"706b870c"}\n\n// without req_id\n{"op":"pong","args":[1661741654529],"conn_id":"706b870c"}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To avoid networks or program issues, we recommend that you send the ",(0,r.kt)("code",null,"ping")," heartbeat packet every ",(0,r.kt)("b",null,"20")," seconds to maintain the WebSocket connection.")),(0,r.kt)("h2",{id:"rate-limits"},"Rate Limits"),(0,r.kt)("b",null,"Private channel ONLY"),"\uff1aEach API key may have a maximum of 100 private WebSocket connections. The 101st connection will be rejected. An IP can connect to a maximum of 50 private spot websocket connections simultaneously.",(0,r.kt)("h2",{id:"how-to-subscribe-to-topics"},"How to Subscribe to Topics"),(0,r.kt)("h3",{id:"understanding-websocket-filters"},"Understanding Websocket Filters"),(0,r.kt)("p",null,"How to subscribe with a filter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Subscribing to the trade data for BTCUSDT\n{\n    "req_id": "10001", // optional\n    "op": "subscribe",\n    "args": [\n        "trade.BTCUSDT"\n    ]\n}\n')),(0,r.kt)("p",null,"support many symbol, separate with ','."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Example: Subscribing to the trade data for BTCUSDT and ETHUSDT\n{\n    "req_id": "10001", // optional\n    "op": "subscribe",\n    "args": [\n        "trade.BTCUSDT",\n        "trade.ETHUSDT"\n    ]\n}\n')),(0,r.kt)("p",null,"After establishing the connection, you can subscribe to a new topic by sending a JSON request. The request formats are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ws.send(\'{"req_id": "10001", "op": "subscribe", "args": ["trade.BTCUSDT", "trade.ETHUSDT", "tickers.BTCUSDT", "bookticker.BTCUSDT"]}\')\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can pass a maximum of ",(0,r.kt)("b",null,"10")," args in ",(0,r.kt)("code",null,"args"))),(0,r.kt)("h3",{id:"understanding-websocket-filters-unsubscription"},"Understanding Websocket Filters unsubscription"),(0,r.kt)("p",null,"After successful subscription, you can unsubscribe by sending a JSON request. The request formats are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ws.send(\'{"req_id": "10002", "op": "unsubscribe", "args": ["trade.BTCUSDT"]}\');\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Example: unsubscribing to the trade data for BTCUSDT and ETHUSDT\n{\n    "req_id": "10002", // optional\n    "op": "unsubscribe",\n    "args": [\n        "trade.BTCUSDT",\n        "trade.ETHUSDT"\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// unsubscribe response sample\n{\n    "op": "unsubscribe",\n    "success": true,\n    "req_id": "10002",\n    "ret_msg": "unsubscribe",\n    "conn_id": "46f097b7"\n}\n')),(0,r.kt)("h2",{id:"understanding-subscription-response"},"Understanding Subscription Response"),(0,r.kt)("p",null,"Subscription Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "op": "subscribe",\n    "success": true,\n    "req_id": "10001",\n    "ret_msg": "subscribe",\n    "conn_id": "46f097b7"\n}\n')),(0,r.kt)("p",null,"Once you subscribe successfully, you'd receive result information. You can determine whether the subscription is successful based on the response."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=i(n),m=r,k=b["".concat(p,".").concat(m)]||b[m]||u[m]||o;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},71234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u8a02\u95b1WebSocket",sidebar_label:"\u8a02\u95b1WebSocket",slug:"/v5/ws/connect"},s=void 0,l={unversionedId:"v5/websocket/wss-authentication",id:"v5/websocket/wss-authentication",title:"\u8a02\u95b1WebSocket",description:"\u8a02\u95b1\u5730\u5740:",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/websocket/wss-authentication.mdx",sourceDirName:"v5/websocket",slug:"/v5/ws/connect",permalink:"/docs-v2/zh-TW/v5/ws/connect",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8a02\u95b1WebSocket",sidebar_label:"\u8a02\u95b1WebSocket",slug:"/v5/ws/connect"},sidebar:"v5SideBar",previous:{title:"\u5168\u5009\u69d3\u687f\u8a2d\u7f6e",permalink:"/docs-v2/zh-TW/v5/spot-margin/set-leverage"},next:{title:"\u6df1\u5ea6",permalink:"/docs-v2/zh-TW/v5/websocket/public/orderbook"}},p={},i=[{value:"\u9452\u6b0a",id:"\u9452\u6b0a",level:2},{value:"IP\u9650\u983b",id:"ip\u9650\u983b",level:2},{value:"\u5982\u4f55\u767c\u9001\u5fc3\u8df3",id:"\u5982\u4f55\u767c\u9001\u5fc3\u8df3",level:2},{value:"\u5982\u4f55\u8a02\u95b1topic",id:"\u5982\u4f55\u8a02\u95b1topic",level:2},{value:"\u7406\u89e3Websocket\u88e1\u7684args",id:"\u7406\u89e3websocket\u88e1\u7684args",level:3},{value:"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1",id:"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1",level:3},{value:"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9",id:"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("Tabs"),b=c("TabItem"),m={toc:i};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8a02\u95b1\u5730\u5740:"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"WebSocket\u516c\u5171\u983b\u9053:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u7db2:"),(0,r.kt)("br",null),"\n\u73fe\u8ca8: wss://stream.bybit.com/v5/public/spot",(0,r.kt)("br",null),"\n\u6b63\u5411\u5408\u7d04: wss://stream.bybit.com/v5/public/linear",(0,r.kt)("br",null),"\n\u53cd\u5411\u5408\u7d04: wss://stream.bybit.com/v5/public/inverse",(0,r.kt)("br",null),"\n\u671f\u6b0a: wss://stream.bybit.com/v5/public/option")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6e2c\u8a66\u7db2:"),(0,r.kt)("br",null),"\n\u73fe\u8ca8: wss://stream-testnet.bybit.com/v5/public/spot",(0,r.kt)("br",null),"\n\u6b63\u5411\u5408\u7d04: wss://stream-testnet.bybit.com/v5/public/linear",(0,r.kt)("br",null),"\n\u53cd\u5411\u5408\u7d04: wss://stream-testnet.bybit.com/v5/public/inverse",(0,r.kt)("br",null),"\n\u671f\u6b0a: wss://stream-testnet.bybit.com/v5/public/option"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebSocket\u79c1\u6709\u983b\u9053:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u7db2:"),(0,r.kt)("br",null),"\nwss://stream.bybit.com/v5/private",(0,r.kt)("br",null))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6e2c\u8a66\u7db2:"),(0,r.kt)("br",null),"\nwss://stream-testnet.bybit.com/v5/private"))),(0,r.kt)("h2",{id:"\u9452\u6b0a"},"\u9452\u6b0a"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("b",null,"\u516c\u5171\u983b\u9053"),"\u4e0d\u9700\u8981\u9452\u6b0a\uff0c\u4ee5\u4e0b\u90e8\u5206\u50c5\u9069\u7528\u65bc",(0,r.kt)("b",null,"\u79c1\u6709\u983b\u9053"),"\u7684\u8a02\u95b1\u3002"),(0,r.kt)("p",null,"\u69cb\u5efa\u9023\u63a5\u6642\uff0c\u5275\u5efa\u9452\u6b0a\u8acb\u6c42\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f: \u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/pybit"},"pybit"),", ",(0,r.kt)("a",{href:"https://www.npmjs.com/package/bybit-api"},"bybit-api"),"\u6216\u8005\u5176\u4ed6\u7b2c\u4e09\u65b9\u5eab, \u60a8\u53ef\u4ee5\u5ffd\u7565\u6b64\u9805-\u56e0\u70ba\u9452\u6b0a\u5df2\u7d93\u5167\u5efa\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "10001", // \u53ef\u9078\u9805\n    "op": "auth",\n    "args": [\n        "api_key",\n        1662350400000, //\u904e\u671f\u6642\u9593\u61c9\u7576\u5927\u65bc\u7576\u524d\u6642\u9593\u6233\n        "singature"\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# based on: https://github.com/bybit-exchange/pybit/blob/master/pybit/_http_manager.py\n\nimport hmac\nimport json\nimport time\nimport websocket\n\napi_key = ""\napi_secret = ""\n\n# Generate expires.\nexpires = int((time.time() + 1) * 1000)\n\n# Generate signature.\nsignature = str(hmac.new(\n    bytes(api_secret, "utf-8"),\n    bytes(f"GET/realtime{expires}", "utf-8"), digestmod="sha256"\n).hexdigest())\n\nws = websocket.WebSocketApp(\n    url=url,\n    ...\n)\n\n# Authenticate with API.\nws.send(\n    json.dumps({\n        "op": "auth",\n        "args": [api_key, expires, signature]\n    })\n)\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9452\u6b0a\u6210\u529f\u7684\u97ff\u61c9\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "auth",\n    "conn_id": "cejreaspqfh3sjdnldmg-p"\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7c3d\u540d\u751f\u6210\u7684\u793a\u4f8b\u53ef\u4ee5\u53c3\u8003",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"\u9019\u88e1"),"\u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u65bc\u7db2\u7d61\u7684\u8907\u96dc\u6027\uff0c\u60a8\u53ef\u80fd\u96a8\u6642\u9047\u5230\u65b7\u9023\u3002\u8acb\u53c3\u8003\u4ee5\u4e0b\u5efa\u8b70\u78ba\u4fdd\u60a8\u80fd\u5373\u6642\u63a5\u6536\u5230\u63a8\u9001\uff1a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u901a\u904e\u767c\u9001",(0,r.kt)("a",{parentName:"li",href:"connect#%E5%A6%82%E4%BD%95%E7%99%BC%E9%80%81%E5%BF%83%E8%B7%B3"},"\u5fc3\u8df3"),"\u4f86\u7dad\u6301\u9023\u63a5;"),(0,r.kt)("li",{parentName:"ol"},"\u9047\u5230\u65b7\u9023\u6642\uff0c\u7acb\u5373\u91cd\u65b0\u9023\u63a5\u3002"))),(0,r.kt)("h2",{id:"ip\u9650\u983b"},"IP\u9650\u983b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5617\u8a66\u983b\u7e41\u5730\u69cb\u5efa\u9023\u63a5\u8207\u65b7\u958b\u9023\u63a5\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u57285\u5206\u9418\u5167\u69cb\u5efa\u8d85\u904e500\u500b\u9023\u63a5\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u767c\u9001\u5fc3\u8df3"},"\u5982\u4f55\u767c\u9001\u5fc3\u8df3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// req_id is a customised id, which is optional\nws.send(JSON.stringify({"req_id": "100001", "op": "ping"}));\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63a5\u6536\u5230pong\u7684\u97ff\u61c9\u793a\u4f8b")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(b,{value:"spot",label:"\u73fe\u8ca8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "pong",\n    "conn_id": "0970e817-426e-429a-a679-ff7f55e0b16a",\n    "op": "ping"\n}\n'))),(0,r.kt)(b,{value:"future",label:"\u671f\u8ca8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "pong",\n    "conn_id": "465772b1-7630-4fdc-a492-e003e6f0f260",\n    "req_id": "",\n    "op": "ping"\n}\n'))),(0,r.kt)(b,{value:"option",label:"\u671f\u6b0a",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "args": [\n    "1672916271846"\n    ],\n    "op": "pong"\n}\n')))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u70ba\u4e86\u7dad\u6301\u9023\u63a5\uff0c\u6211\u5011\u63a8\u85a6\u60a8\u6bcf",(0,r.kt)("b",null,"20"),"\u79d2\u767c\u9001\u4e00\u6b21\u5fc3\u8df3\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u8a02\u95b1topic"},"\u5982\u4f55\u8a02\u95b1topic"),(0,r.kt)("h3",{id:"\u7406\u89e3websocket\u88e1\u7684args"},"\u7406\u89e3Websocket\u88e1\u7684args"),(0,r.kt)("p",null,"\u901a\u904e\u50b3\u5165args\u4f86\u8a02\u95b1\u6307\u5b9atopic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// \u8a02\u95b11\u6a94\u7684orderbook\n{\n    "req_id": "test", // \u53ef\u9078\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT"\n    ]\n}\n')),(0,r.kt)("p",null,"\u901a\u904e\u9017\u865f\u9694\u958b\uff0c\u53ef\u4ee5\u540c\u6642\u8a02\u95b1\u591a\u500btopic\u6216\u8005\u591a\u500bsymbol"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test", // \u53ef\u9078\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT",\n        "publicTrade.BTCUSDT",\n        "orderbook.1.ETHUSDT"\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1"},"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u904e\u767c\u9001\u8acb\u6c42\u4f86\u52d5\u614b\u5730\u505c\u6b62\u8a02\u95b1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "unsubscribe",\n    "args": [\n        "publicTrade.ETHUSD"\n    ],\n    "req_id": "customised_id"\n}\n')),(0,r.kt)("h2",{id:"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9"},"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8a02\u95b1\u6210\u529f\u5f8c\u7684\u97ff\u61c9\u793a\u4f8b")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(b,{value:"private",label:"\u79c1\u6709\u983b\u9053",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "subscribe",\n    "conn_id": "cejreassvfrsfvb9v1a0-2m"\n}\n'))),(0,r.kt)(b,{value:"public-spot",label:"\u516c\u6709\u73fe\u8ca8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "subscribe",\n    "conn_id": "2324d924-aa4d-45b0-a858-7b8be29ab52b",\n    "req_id": "10001",\n    "op": "subscribe"\n}\n'))),(0,r.kt)(b,{value:"public-future",label:"\u516c\u6709\u671f\u8ca8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "conn_id": "3cd84cb1-4d06-4a05-930a-2efe5fc70f0f",\n    "req_id": "",\n    "op": "subscribe"\n}\n'))),(0,r.kt)(b,{value:"public-option",label:"\u516c\u6709\u671f\u6b0a",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "conn_id": "aa01fbfffe80af37-00000001-000b37b9-7147f432704fd28c-00e1c172",\n    "data": {\n    "failTopics": [],\n    "successTopics": [\n    "orderbook.100.BTC-6JAN23-18000-C"\n    ]\n},\n    "type": "COMMAND_RESP"\n}\n')))))}k.isMDXComponent=!0}}]);
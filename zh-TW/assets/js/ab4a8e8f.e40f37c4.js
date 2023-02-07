"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[83667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=l(n),m=r,b=k["".concat(i,".").concat(m)]||k[m]||u[m]||o;return n?a.createElement(b,p(p({ref:t},c),{},{components:n})):a.createElement(b,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},56815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u8a02\u95b1WebSocket",sidebar_label:"\u8a02\u95b1WebSocket",slug:"/spot/ws/connect"},p=void 0,s={unversionedId:"v3/spot/wss-authentication",id:"v3/spot/wss-authentication",title:"\u8a02\u95b1WebSocket",description:"\u4ee5\u4e0bWSS\u5730\u5740\u50c5\u9069\u7528\u73fe\u8ca8. \u8981\u60f3\u63a5\u6536\u671f\u8ca8\u7684\u63a8\u9001\uff0c\u8acb\u524d\u5f80:",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/wss-authentication.mdx",sourceDirName:"v3/spot",slug:"/spot/ws/connect",permalink:"/docs/zh-TW/spot/ws/connect",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8a02\u95b1WebSocket",sidebar_label:"\u8a02\u95b1WebSocket",slug:"/spot/ws/connect"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u98a8\u96aa\u7387",permalink:"/docs/zh-TW/spot/otc/ltv"},next:{title:"\u6df1\u5ea6",permalink:"/docs/zh-TW/spot/ws-public/orderbook"}},i={},l=[{value:"IP\u9650\u983b",id:"ip\u9650\u983b",level:2},{value:"\u5982\u4f55\u767c\u9001\u5fc3\u8df3",id:"\u5982\u4f55\u767c\u9001\u5fc3\u8df3",level:2},{value:"\u983b\u7387\u9650\u5236",id:"\u983b\u7387\u9650\u5236",level:2},{value:"\u5982\u4f55\u8a02\u95b1topic",id:"\u5982\u4f55\u8a02\u95b1topic",level:2},{value:"\u7406\u89e3Websocket\u88e1\u7684args",id:"\u7406\u89e3websocket\u88e1\u7684args",level:3},{value:"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1",id:"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1",level:3},{value:"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9",id:"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u4ee5\u4e0bWSS\u5730\u5740\u50c5\u9069\u7528\u73fe\u8ca8"),". \u8981\u60f3\u63a5\u6536\u671f\u8ca8\u7684\u63a8\u9001\uff0c\u8acb\u524d\u5f80:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../derivatives/ws/connect"},"\u884d\u751f\u54c1")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8a02\u95b1\u5730\u5740:"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u6e2c\u8a66\u7db2:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u516c\u6709\u983b\u9053:")," wss://stream-testnet.bybit.com/spot/public/v3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u79c1\u6709\u983b\u9053:")," wss://stream-testnet.bybit.com/spot/private/v3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u7db2:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u516c\u6709\u983b\u9053:")," wss://stream.bybit.com/spot/public/v3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u79c1\u6709\u983b\u9053:")," wss://stream.bybit.com/spot/private/v3")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u516c\u6709\u983b\u9053"),"\u4e0d\u9700\u8981\u9452\u6b0a. \u4ee5\u4e0b\u5167\u5bb9\u50c5\u9069\u7528\u65bc",(0,r.kt)("strong",{parentName:"p"},"\u79c1\u6709\u983b\u9053"),"\u7684\u8a02\u95b1")),(0,r.kt)("p",null,"\u69cb\u5efa\u9023\u63a5\u6642\uff0c\u5275\u5efa\u9452\u6b0a\u8acb\u6c42\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f: \u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/pybit"},"pybit"),", ",(0,r.kt)("a",{href:"https://www.npmjs.com/package/bybit-api"},"bybit-api"),"\u6216\u8005\u5176\u4ed6\u7b2c\u4e09\u65b9\u5eab, \u60a8\u53ef\u4ee5\u5ffd\u7565\u6b64\u9805-\u56e0\u70ba\u9452\u6b0a\u5df2\u7d93\u5167\u5efa\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "10001", // \u53ef\u9078\n    "op": "auth",\n    "args": [\n        "api_key",\n        1662350400000, //\u904e\u671f\u6642\u9593\u61c9\u7576\u5927\u65bc\u7576\u524d\u6642\u9593\u6233\n        "singature"\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# \u57fa\u65bc: https://github.com/bybit-exchange/pybit/blob/master/pybit/_http_manager.py\n\nimport hmac\nimport json\nimport time\nimport websocket\n\napi_key = ""\napi_secret = ""\n\n# \u751f\u6210expires\nexpires = int((time.time() + 1) * 1000)\n\n# \u751f\u6210\u7c3d\u540d\nsignature = str(hmac.new(\n    bytes(api_secret, "utf-8"),\n    bytes(f"GET/realtime{expires}", "utf-8"), digestmod="sha256"\n).hexdigest())\n\nws = websocket.WebSocketApp(\n    url=url,\n    ...\n)\n\n# \u767c\u9001\u9452\u6b0a\u8acb\u6c42\nws.send(\n    json.dumps({\n        "op": "auth",\n        "args": [api_key, expires, signature]\n    })\n)\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9452\u6b0a\u6210\u529f\u7684\u97ff\u61c9\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "conn_id": "06a3cbfffe5df9cb-0000000e-00026965-fe306ee9ec20f544-4ab7116c",\n    "req_id": "",\n    "op": "auth"\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7c3d\u540d\u751f\u6210\u7684\u793a\u4f8b\u53ef\u4ee5\u53c3\u8003",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"\u9019\u88e1"),"\u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u65bc\u7db2\u7d61\u7684\u8907\u96dc\u6027\uff0c\u60a8\u53ef\u80fd\u96a8\u6642\u9047\u5230\u65b7\u9023\u3002\u8acb\u53c3\u8003\u4ee5\u4e0b\u5efa\u8b70\u78ba\u4fdd\u60a8\u80fd\u5373\u6642\u63a5\u6536\u5230\u63a8\u9001\uff1a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u901a\u904e\u767c\u9001",(0,r.kt)("a",{parentName:"li",href:"connect#%E5%A6%82%E4%BD%95%E7%99%BC%E9%80%81%E5%BF%83%E8%B7%B3"},"\u5fc3\u8df3")),(0,r.kt)("li",{parentName:"ol"},"\u9047\u5230\u65b7\u9023\u6642\uff0c\u7acb\u5373\u91cd\u65b0\u9023\u63a5"))),(0,r.kt)("h2",{id:"ip\u9650\u983b"},"IP\u9650\u983b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5617\u8a66\u983b\u7e41\u5730\u69cb\u5efa\u9023\u63a5\u8207\u65b7\u958b\u9023\u63a5\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u57285\u5206\u9418\u5167\u69cb\u5efa\u8d85\u904e500\u500b\u9023\u63a5\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u767c\u9001\u5fc3\u8df3"},"\u5982\u4f55\u767c\u9001\u5fc3\u8df3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u767c\u9001ping\u7684\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// req_id\u662f\u53ef\u9078\u53c3\u6578\nws.send(JSON.stringify({"req_id": "100001", "op": "ping"}));\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63a5\u6536\u5230pong\u7684\u97ff\u61c9\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// \u6709req_id\n{\n    "op": "pong",\n    "args": [\n        1661741630642\n    ],\n    "req_id": "100001",\n    "conn_id": "706b870c"\n}\n\n// \u6c92\u6709req_id\n{\n    "op": "pong",\n    "args": [\n        1661741654529\n    ],\n    "conn_id": "706b870c"\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u70ba\u4e86\u7dad\u6301\u9023\u63a5\uff0c\u6211\u5011\u63a8\u85a6\u60a8\u6bcf",(0,r.kt)("strong",{parentName:"p"},"20\u79d2"),"\u767c\u9001\u4e00\u6b21\u5fc3\u8df3\u3002")),(0,r.kt)("h2",{id:"\u983b\u7387\u9650\u5236"},"\u983b\u7387\u9650\u5236"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u50c5\u9650\u79c1\u6709\u983b\u9053\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u500bapi_key\u6700\u591a\u53ef\u4ee5\u4fdd\u6301100\u500bwebsocket\u79c1\u6709\u9023\u63a5\uff0c\u8d85\u904e100\u500b\u9023\u63a5\u5f8c\u7684\u65b0\u9023\u63a5\u6703\u88ab\u670d\u52d9\u5668\u62d2\u7d55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u55ae\u500bIP\u540c\u6642\u6700\u591a50\u500bwebsocket\u79c1\u6709topic\u93c8\u63a5")),(0,r.kt)("h2",{id:"\u5982\u4f55\u8a02\u95b1topic"},"\u5982\u4f55\u8a02\u95b1topic"),(0,r.kt)("h3",{id:"\u7406\u89e3websocket\u88e1\u7684args"},"\u7406\u89e3Websocket\u88e1\u7684args"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u904e\u50b3\u5165args\u4f86\u8a02\u95b1\u6307\u5b9atopic")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// \u8a02\u95b1trade\u4e0b\u7684BTCUSDT\n{\n    "req_id": "10001", // \u53ef\u9078\n    "op": "subscribe",\n    "args": [\n        "trade.BTCUSDT"\n    ]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\u901a\u904e","\u4f86\u8a02\u95b1\u540c\u4e00\u500btopic\u4e0b\u7684\u591a\u500b\u4ea4\u6613\u5c0d')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "10001", // \u53ef\u9078\n    "op": "subscribe",\n    "args": [\n        "trade.BTCUSDT",\n        "trade.ETHUSDT"\n    ]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8a02\u95b1\u591a\u500btopic")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ws.send(\'{"req_id": "10001", "op": "subscribe", "args": ["trade.BTCUSDT", "trade.ETHUSDT", "tickers.BTCUSDT", "bookticker.BTCUSDT"]}\')\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u60a8\u6700\u591a\u50b3\u905e10\u500b\u53c3\u6578\u5230args\u88e1\uff0c\u8d85\u904e\u5247\u5831\u932f")),(0,r.kt)("h3",{id:"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1"},"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u901a\u904e\u767c\u9001\u8acb\u6c42\u4f86\u52d5\u614b\u5730\u505c\u6b62\u8a02\u95b1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ws.send(\'{"req_id": "10002", "op": "unsubscribe", "args": ["trade.BTCUSDT"]}\');\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// \u793a\u4f8b: \u53d6\u6d88\u8a02\u95b1BTCUSDT\u548cETHUSDT\n{\n    "req_id": "10002", // \u53ef\u9078\n    "op": "unsubscribe",\n    "args": [\n        "trade.BTCUSDT",\n        "trade.ETHUSDT"\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// \u53d6\u6d88\u8a02\u95b1\u7684\u97ff\u61c9\n{\n    "op": "unsubscribe",\n    "success": true,\n    "req_id": "10002",\n    "ret_msg": "unsubscribe",\n    "conn_id": "46f097b7"\n}\n')),(0,r.kt)("h2",{id:"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9"},"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8a02\u95b1\u6210\u529f\u5f8c\u7684\u97ff\u61c9\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// \u516c\u5171\u983b\u9053\u7684\u97ff\u61c9\n{\n    "op": "subscribe",\n    "success": true,\n    "req_id": "10001",\n    "ret_msg": "subscribe",\n    "conn_id": "46f097b7"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// \u79c1\u6709\u983b\u9053\u7684\u97ff\u61c9\n{\n    "success": true,\n    "ret_msg": "",\n    "conn_id": "06a3cbfffe5df9cb-0000000e-00026965-fe306ee9ec20f544-4ab7116c",\n    "req_id": "private0001",\n    "op": "subscribe"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8a02\u95b1\u6210\u529f\u5f8c\uff0c\u60a8\u5c07\u6536\u5230\u7d50\u679c\u4fe1\u606f\u3002\u53ef\u4ee5\u6839\u64da\u97ff\u61c9\u5224\u65b7\u8a02\u95b1\u662f\u5426\u6210\u529f\u3002")))}u.isMDXComponent=!0}}]);
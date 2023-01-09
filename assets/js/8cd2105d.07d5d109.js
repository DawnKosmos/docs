"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Introduction",sidebar_name:"Introduction"},o=void 0,l={unversionedId:"v3/intro",id:"v3/intro",title:"Introduction",description:"Bybit V3 Open API allow users to select different collections to build their API model.",source:"@site/docs/v3/intro.mdx",sourceDirName:"v3",slug:"/v3/intro",permalink:"/docs-v2/v3/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",sidebar_name:"Introduction"},sidebar:"v3SideBar",next:{title:"Derivatives",permalink:"/docs-v2/category/derivatives"}},p={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Parameters for Authenticated Endpoints",id:"parameters-for-authenticated-endpoints",level:3},{value:"Create A Request",id:"create-a-request",level:3},{value:"Common response parameters",id:"common-response-parameters",level:2},{value:"Derivatives",id:"derivatives",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=m("Tabs"),d=m("TabItem"),c={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bybit V3 Open API allow users to select different collections to build their API model."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Derivatives - unified margin:")," You could trade ",(0,r.kt)("em",{parentName:"li"},"USDT Perpetual"),", ",(0,r.kt)("em",{parentName:"li"},"USDC Perpetual"),", ",(0,r.kt)("em",{parentName:"li"},"USDC Option")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"unified/v3")," endpoints. Besides,\nyou can also trade those via V5 API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Derivatives - contract:")," You could trade ",(0,r.kt)("em",{parentName:"li"},"USDT Perpetual"),", ",(0,r.kt)("em",{parentName:"li"},"Inverse Perpetual"),", ",(0,r.kt)("em",{parentName:"li"},"Inverse Future"),". For ",(0,r.kt)("em",{parentName:"li"},"USDC Perpetual"),", ",(0,r.kt)("em",{parentName:"li"},"USDC Option"),",\nboth will be fully supported soon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spot:")," You could trade spot either your account is ",(0,r.kt)("strong",{parentName:"li"},"Unified Margin Account")," or ",(0,r.kt)("strong",{parentName:"li"},"Normal Account"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Copy Trade:")," You must be ",(0,r.kt)("strong",{parentName:"li"},"Principle Trader")," to use this API. It does not matter your account is ",(0,r.kt)("strong",{parentName:"li"},"Unified Margin Account")," or ",(0,r.kt)("strong",{parentName:"li"},"Normal Account"),".")),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please visit Bybit's ",(0,r.kt)("a",{href:"https://testnet.bybit.com/app/user/api-management"}," ",(0,r.kt)("b",null,"testnet"))," or ",(0,r.kt)("a",{href:"https://www.bybit.com/app/user/api-management"}," ",(0,r.kt)("b",null,"mainnet"))," to generate an API key")),(0,r.kt)("p",null,"REST API Base Endpoint:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testnet:"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://api-testnet.bybit.com"},"https://api-testnet.bybit.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet"),"(both endpoints are available):",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://api.bybit.com"},"https://api.bybit.com"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://api.bytick.com"},"https://api.bytick.com"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"All requests made to ",(0,r.kt)("strong",{parentName:"li"},"private")," endpoints MUST be authenticated."),(0,r.kt)("li",{parentName:"ul"},"Requests made to ",(0,r.kt)("strong",{parentName:"li"},"public")," endpoints DO NOT require additional authentication."))),(0,r.kt)("h3",{id:"parameters-for-authenticated-endpoints"},"Parameters for Authenticated Endpoints"),(0,r.kt)("p",null,"The following parameters must be used for authentication:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-BAPI-API-KEY")," - api key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-BAPI-TIMESTAMP")," - UTC timestamp in milliseconds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-BAPI-SIGN")," - a signature derived from the request's parameters",(0,r.kt)("br",null))),(0,r.kt)("p",null,"We also provide ",(0,r.kt)("inlineCode",{parentName:"p"},"X-BAPI-RECV-WINDOW")," (unit in millisecond and default value is 5,000) to specify how long an HTTP request is valid. It is also used to prevent replay attacks."),(0,r.kt)("p",null,"A smaller ",(0,r.kt)("inlineCode",{parentName:"p"},"X-BAPI-RECV-WINDOW")," is more secure, but your request may fail if the transmission time is greater than your ",(0,r.kt)("inlineCode",{parentName:"p"},"X-BAPI-RECV-WINDOW"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please make sure that the timestamp parameter adheres to the ",(0,r.kt)("strong",{parentName:"p"},"following rule"),":",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"server_time - recv_window <= timestamp < server_time + 1000"),(0,r.kt)("br",null),"\nserver_time stands for Bybit server time, which can be queried via the ",(0,r.kt)("a",{parentName:"p",href:"../spot/public/server-time#"},"Server Time endpoint"),".")),(0,r.kt)("h3",{id:"create-a-request"},"Create A Request"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To assist in diagnosing advanced network problems, you may consider adding ",(0,r.kt)("inlineCode",{parentName:"p"},"cdn-request-id")," to your request headers. Its value should be unique for each request.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Example signature algorithms can be found ",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"here"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"timestamp + api-key + (recv_window) + (queryString | jsonBodyString)",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},"Use the HMAC_SHA256 algorithm to sign the string in step 1, and convert it to a hex string to obtain the sign parameter.",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},"Append the ",(0,r.kt)("inlineCode",{parentName:"li"},"sign")," parameter to request header, and send the HTTP request.\n",(0,r.kt)("strong",{parentName:"li"},"Note:")," the plain text for ",(0,r.kt)("strong",{parentName:"li"},"GET")," and ",(0,r.kt)("strong",{parentName:"li"},"POST")," requests is different. Please refer to blew examples.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An example for how to generate plain text to encrypt")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"GET",label:"GET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# rule:\ntimestamp+api_key+recv_window+queryString\n\n# param_str\n"1658384314791XXXXXXXXXX5000category=option&symbol=BTC-29JUL22-25000-C"\n\n# parse\ntimestamp = "1658384314791"\napi_key = "XXXXXXXXXX"\nrecv_window = "5000"\nqueryString = "category=option&symbol=BTC-29JUL22-25000-C"\n'))),(0,r.kt)(d,{value:"POST",label:"POST",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# rule:\ntimestamp+api_key+recv_window+raw_request_body\n\n# param_str\n1658385579423XXXXXXXXXX5000{\n    "category": "option"\n}\n\n# parse\ntimestamp = 1658385579423\napi_key = XXXXXXXXXX\nrecv_window = 5000\nraw_request_body = {"category": "option"}\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"http request examples")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"http-get",label:"http-get",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/order/list?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1\nHost: api-testnet.bybit.com\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\n-H 'X-BAPI-API-KEY: XXXXXXXXXX' \\\n-H 'X-BAPI-TIMESTAMP: 1658384431891' \\\n-H 'X-BAPI-RECV-WINDOW: 5000'\n-H 'cdn-request-id: test-001'\n"))),(0,r.kt)(d,{value:"http-post",label:"http-post",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"POST /unified/v3/private/order/cancel-all HTTP/1.1\nHost: api-testnet.bybit.com\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\n-H 'X-BAPI-API-KEY: XXXXXXXXXX' \\\n-H 'X-BAPI-TIMESTAMP: 1658385589135' \\\n-H 'X-BAPI-RECV-WINDOW: 5000' \\\n-H 'Content-Type: application/json' \\\n-H 'cdn-request-id: test-002'\n-d '{\n\"category\": \"option\"\n}'\n")))),(0,r.kt)("h2",{id:"common-response-parameters"},"Common response parameters"),(0,r.kt)("h3",{id:"derivatives"},"Derivatives"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Success/Error code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Success/Error msg. Can be ",(0,r.kt)("inlineCode",{parentName:"td"},"OK"),",",(0,r.kt)("inlineCode",{parentName:"td"},"success"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Success")," for Success message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"result"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Business data result")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Extend info. Most of time, it is ",(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Current timestamp (ms)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017382656\n}\n\n{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017473888\n}\n\n{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017572923\n}\n\n// contract V3 Option\n// /contract/v3/private/account/transaction-log\n{\n    "result": {\n    },\n    "retCode": 0,\n    "retMsg": "Success."\n}\n')))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Introduction",sidebar_label:"Introduction"},o=void 0,l={unversionedId:"v5/intro",id:"v5/intro",title:"Introduction",description:"Bybit v5 Open API allow users to implement trade by one collection API.",source:"@site/docs/v5/intro.mdx",sourceDirName:"v5",slug:"/v5/intro",permalink:"/docs-v2/v5/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",sidebar_label:"Introduction"},sidebar:"v5SideBar",next:{title:"Get Kline",permalink:"/docs-v2/v5/market/kline"}},p={},s=[{value:"Scope",id:"scope",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Parameters for Authenticated Endpoints",id:"parameters-for-authenticated-endpoints",level:3},{value:"Create A Request",id:"create-a-request",level:3},{value:"Common response parameters",id:"common-response-parameters",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=m("Tabs"),d=m("TabItem"),c={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bybit v5 Open API allow users to implement trade by one collection API."),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Account Mode"),(0,r.kt)("th",{parentName:"tr",align:"left"},"v5 Open API"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Normal account"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"can trade spot,futures,option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Unified margin account"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"can trade linear futures,option; cannot trade spot,inverse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Unified trade account"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"can trade everything")))),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please visit Bybit's ",(0,r.kt)("a",{href:"https://testnet.bybit.com/app/user/api-management"}," ",(0,r.kt)("b",null,"testnet"))," or ",(0,r.kt)("a",{href:"https://www.bybit.com/app/user/api-management"}," ",(0,r.kt)("b",null,"mainnet"))," to generate an API key")),(0,r.kt)("p",null,"REST API Base Endpoint:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testnet:"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://api-testnet.bybit.com"},"https://api-testnet.bybit.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet"),"(both endpoints are available):",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://api.bybit.com"},"https://api.bybit.com"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://api.bytick.com"},"https://api.bytick.com"))),(0,r.kt)("h3",{id:"parameters-for-authenticated-endpoints"},"Parameters for Authenticated Endpoints"),(0,r.kt)("p",null,"The following parameters must be used for authentication:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," - UTC timestamp in milliseconds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign")," - a signature derived from the request's parameters",(0,r.kt)("br",null))),(0,r.kt)("p",null,"We also provide ",(0,r.kt)("inlineCode",{parentName:"p"},"recv_window")," (unit in millisecond and default value is 5,000) to specify how long an HTTP request is valid. It is also used to prevent replay attacks."),(0,r.kt)("p",null,"A smaller ",(0,r.kt)("inlineCode",{parentName:"p"},"recv_window")," is more secure, but your request may fail if the transmission time is greater than your ",(0,r.kt)("inlineCode",{parentName:"p"},"recv_window"),"."),(0,r.kt)("p",null,"Please make sure that your timestamp is in sync with our server time. You can use the ",(0,r.kt)("a",{parentName:"p",href:"../v3/spot/rest-public/server-time#"},"Server Time endpoint")," to check your own machine time."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please make sure that the timestamp parameter adheres to the ",(0,r.kt)("strong",{parentName:"p"},"following rule"),":",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"server_time - recv_window <= timestamp < server_time + 1000"),(0,r.kt)("br",null),"\nserver_time stands for Bybit server time, which can be queried via the ",(0,r.kt)("a",{parentName:"p",href:"../v3/spot/rest-public/server-time#"},"Server Time endpoint"),".")),(0,r.kt)("h3",{id:"create-a-request"},"Create A Request"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To assist in diagnosing advanced network problems, you may consider adding ",(0,r.kt)("inlineCode",{parentName:"p"},"cdn-request-id")," to your request headers. Its value should be unique for each request.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Example signature algorithms can be found ",(0,r.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"here"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"timestamp + api-key + (recv_window) + (queryString | jsonBodyString)",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},"Use the HMAC_SHA256 algorithm to sign the string in step 1, and convert it to a hex string to obtain the sign parameter.",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},"Append the ",(0,r.kt)("inlineCode",{parentName:"li"},"sign")," parameter to request header, and send the HTTP request.\n",(0,r.kt)("strong",{parentName:"li"},"Note:")," the plain text for ",(0,r.kt)("strong",{parentName:"li"},"GET")," and ",(0,r.kt)("strong",{parentName:"li"},"POST")," requests is different. Please refer to blew examples.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An example for how to generate plain text to encrypt")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"GET",label:"GET",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# rule:\ntimestamp+api_key+recv_window+queryString\n\n# param_str\n"1658384314791XXXXXXXXXX5000category=option&symbol=BTC-29JUL22-25000-C"\n\n# parse\ntimestamp = "1658384314791"\napi_key = "XXXXXXXXXX"\nrecv_window = "5000"\nqueryString = "category=option&symbol=BTC-29JUL22-25000-C"\n'))),(0,r.kt)(d,{value:"POST",label:"POST",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# rule:\ntimestamp+api_key+recv_window+raw_request_body\n\n# param_str\n1658385579423XXXXXXXXXX5000{\n"category": "option"\n}\n\n# parse\ntimestamp = 1658385579423\napi_key = XXXXXXXXXX\nrecv_window = 5000\nraw_request_body = {"category": "option"}\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"http request examples")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"http-get",label:"http-get",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/order/realtime?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1\nHost: api-testnet.bybit.com\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\n-H 'X-BAPI-API-KEY: XXXXXXXXXX' \\\n-H 'X-BAPI-TIMESTAMP: 1658384431891' \\\n-H 'X-BAPI-RECV-WINDOW: 5000'\n-H 'cdn-request-id: test-001'\n"))),(0,r.kt)(d,{value:"http-post",label:"http-post",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"POST /v5/order/create HTTP/1.1\nHost: api-testnet.bybit.com\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\n-H 'X-BAPI-API-KEY: XXXXXXXXXX' \\\n-H 'X-BAPI-TIMESTAMP: 1658385589135' \\\n-H 'X-BAPI-RECV-WINDOW: 5000' \\\n-H 'Content-Type: application/json' \\\n-H 'cdn-request-id: test-002'\n-d '{\n\"category\": \"option\"\n}'\n")))),(0,r.kt)("h2",{id:"common-response-parameters"},"Common response parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Success/Error code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Success/Error msg. Can be ",(0,r.kt)("inlineCode",{parentName:"td"},"OK"),",",(0,r.kt)("inlineCode",{parentName:"td"},"success"),",",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS")," for Success message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"result"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Business data result")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Extend info. Most of time, it is ",(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Current timestamp (ms)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017382656\n}\n')))}k.isMDXComponent=!0}}]);
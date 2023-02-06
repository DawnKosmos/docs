"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4453],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=m(n),k=a,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(c,i(i({ref:e},u),{},{components:n})):r.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63373:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6982\u89bd",sidebar_label:"\u6982\u89bd"},i=void 0,o={unversionedId:"v5/intro",id:"v5/intro",title:"\u6982\u89bd",description:"\u6b32\u8a73\u7d30\u4e86\u89e3 V5 API \u5185\u5bb9\uff0c\u9084\u8acb\u4ed4\u7d30\u95b1\u8b80V5\u5347\u7d1a\u6307\u5357",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/intro.mdx",sourceDirName:"v5",slug:"/v5/intro",permalink:"/docs-v2/zh-TW/v5/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6982\u89bd",sidebar_label:"\u6982\u89bd"},sidebar:"v5SideBar",next:{title:"V5 \u5347\u7d1a\u6307\u5357",permalink:"/docs-v2/zh-TW/v5/upgrade-guide"}},p={},m=[{value:"\u9452\u6b0a/\u8a8d\u8b49",id:"\u9452\u6b0a\u8a8d\u8b49",level:2},{value:"\u516c\u5171\u53c3\u6578",id:"\u516c\u5171\u53c3\u6578",level:3},{value:"\u69cb\u5efa\u8acb\u6c42",id:"\u69cb\u5efa\u8acb\u6c42",level:3},{value:"\u5916\u5c64\u901a\u7528\u6578\u64da\u7d50\u69cb",id:"\u5916\u5c64\u901a\u7528\u6578\u64da\u7d50\u69cb",level:2}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},d=u("Tabs"),s=u("TabItem"),k={toc:m};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6b32\u8a73\u7d30\u4e86\u89e3 V5 API \u5185\u5bb9\uff0c\u9084\u8acb\u4ed4\u7d30\u95b1\u8b80",(0,a.kt)("a",{parentName:"p",href:"upgrade-guide#"},"V5\u5347\u7d1a\u6307\u5357"))),(0,a.kt)("h2",{id:"\u9452\u6b0a\u8a8d\u8b49"},"\u9452\u6b0a/\u8a8d\u8b49"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8acb\u5148\u751f\u6210",(0,a.kt)("a",{href:"https://testnet.bybit.com/app/user/api-management"},(0,a.kt)("b",null,"\u6e2c\u8a66\u7db2")),"\u6216",(0,a.kt)("a",{href:"https://www.bybit.com/app/user/api-management"},(0,a.kt)("b",null,"\u4e3b\u7db2")),"API KEY\u3002")),(0,a.kt)("p",null,"REST\u63a5\u53e3\u6839URL:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6e2c\u8a66\u7db2:"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"li"},"https://api-testnet.bybit.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e3b\u7db2"),"(\u8acb\u6839\u64da\u60a8\u7684\u7db2\u7d61\u60c5\u6cc1\u9078\u64c7\u4ee5\u4e0b\u4efb\u610f\u4e00\u500b\u5730\u5740\u4f7f\u7528):",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"li"},"https://api.bybit.com"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"li"},"https://api.bytick.com"))),(0,a.kt)("h3",{id:"\u516c\u5171\u53c3\u6578"},"\u516c\u5171\u53c3\u6578"),(0,a.kt)("p",null,"\u9700\u8981\u7c3d\u540d\u7684\u63a5\u53e3\u5fc5\u9808\u5305\u542b\u4ee5\u4e0bhttp\u982d\u53c3\u6578:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-BAPI-API-KEY")," - API\u5bc6\u9470"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-BAPI-TIMESTAMP")," - UTC\u6beb\u79d2\u6642\u9593\u6233"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-BAPI-SIGN")," - \u8acb\u6c42\u53c3\u6578\u7c3d\u540d",(0,a.kt)("br",null))),(0,a.kt)("p",null,"\u53e6\u5916\u6211\u5011\u63d0\u4f9b\u53ef\u9078\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"X-BAPI-RECV-WINDOW"),"\u53c3\u6578\uff08\u55ae\u4f4d\u662f\u6beb\u79d2\uff0c\u9ed8\u8a8d\u503c\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"5000"),"\uff09\uff0c\u4f86\u6307\u5b9a\u8acb\u6c42\u5728\u591a\u9577\u6642\u9593\u5167\u6709\u6548\uff0c\u540c\u6642\u7528\u4f86\u9632\u6b62\u91cd\u653e\u653b\u64ca\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8a3b\u610f\uff0ctimestamp\u53c3\u6578\u5fc5\u9808\u7b26\u5408\u5982\u4e0b\u898f\u5247:",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"server_time - recv_window <= timestamp < server_time + 1000"),(0,a.kt)("br",null),"\n\u5176\u4e2dserver_time\u662fBybit\u670d\u52d9\u5668\u6642\u9593\uff0c\u60a8\u53ef\u4ee5\u901a\u904e",(0,a.kt)("a",{parentName:"p",href:"../v3/server-time#"},"Bybit\u670d\u52d9\u5668\u6642\u9593"),"\u63a5\u53e3\u7372\u53d6.")),(0,a.kt)("h3",{id:"\u69cb\u5efa\u8acb\u6c42"},"\u69cb\u5efa\u8acb\u6c42"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u70ba\u4e86\u5e6b\u52a9\u8a3a\u65b7\u9ad8\u7d1a\u7db2\u7d61\u554f\u984c\uff0c\u60a8\u53ef\u4ee5\u8003\u616e\u5c07",(0,a.kt)("inlineCode",{parentName:"p"},"cdn-request-id"),"\u6dfb\u52a0\u5230\u60a8\u7684\u8acb\u6c42\u982d\u4e2d\u3002\u5c0d\u65bc\u6bcf\u500b\u8acb\u6c42\uff0c\u5b83\u7684\u503c\u61c9\u8a72\u662f\u552f\u4e00\u7684\u3002.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u57fa\u672c\u6b65\u9a5f:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6642\u9593\u6233 + API key + ","[recv_window]","+ ","[queryString(\u7121\u9700\u6392\u5e8f) | jsonBodyString]",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,a.kt)("strong",{parentName:"li"},"HMAC_SHA256"),"\u7b97\u6cd5\u5c0d\u7b2c1\u6b65\u4e2d\u62fc\u63a5\u7684string\u7c3d\u540d\uff0c\u4e26\u8f49\u63db\u70ba16\u9032\u88fd\u5b57\u7b26\u4e32\uff0c\u5f97\u51fasign\u53c3\u6578\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u751f\u6210\u7684\u7c3d\u540d\u5230HTTP\u982d\u7576\u4e2d\n",(0,a.kt)("strong",{parentName:"li"},"\u6ce8\u610f:")," ",(0,a.kt)("strong",{parentName:"li"},"GET"),"\u548c",(0,a.kt)("strong",{parentName:"li"},"POST"),"\u8acb\u6c42\u7684\u52a0\u5bc6\u660e\u6587\u662f\u4e0d\u76f8\u540c\uff0c\u8acb\u53c3\u8003\u4ee5\u4e0b\u793a\u4f8b.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("a",{href:"https://github.com/bybit-exchange/api-usage-examples"},"\u7c3d\u540d\u8a08\u7b97\u793a\u4f8b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5c0d\u660e\u6587\u52a0\u5bc6\u7684\u793a\u4f8b")),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(s,{value:"GET",label:"GET",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# \u62fc\u63a5\u898f\u5247:\ntimestamp+api_key+recv_window+queryString\n\n# \u660e\u6587\n"1658384314791XXXXXXXXXX5000category=option&symbol=BTC-29JUL22-25000-C"\n\n# \u89e3\u6790\ntimestamp = "1658384314791"\napi_key = "XXXXXXXXXX"\nrecv_window = "5000"\nqueryString = "category=option&symbol=BTC-29JUL22-25000-C"\n'))),(0,a.kt)(s,{value:"POST",label:"POST",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# \u62fc\u63a5\u898f\u5247:\ntimestamp+api_key+recv_window+raw_request_body\n\n# \u660e\u6587\n1658385579423XXXXXXXXXX5000{\n"category": "option"\n}\n\n# \u89e3\u6790\ntimestamp = 1658385579423\napi_key = XXXXXXXXXX\nrecv_window = 5000\nraw_request_body = {"category": "option"}\n')))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"http\u8acb\u6c42\u793a\u4f8b")),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(s,{value:"http-get",label:"http-get",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/order/realtime?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1\nHost: api-testnet.bybit.com\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\n-H 'X-BAPI-API-KEY: XXXXXXXXXX' \\\n-H 'X-BAPI-TIMESTAMP: 1658384431891' \\\n-H 'X-BAPI-RECV-WINDOW: 5000'\n-H 'cdn-request-id: test-001'\n"))),(0,a.kt)(s,{value:"http-post",label:"http-post",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"POST /v5/order/create HTTP/1.1\nHost: api-testnet.bybit.com\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\n-H 'X-BAPI-API-KEY: XXXXXXXXXX' \\\n-H 'X-BAPI-TIMESTAMP: 1658385589135' \\\n-H 'X-BAPI-RECV-WINDOW: 5000' \\\n-H 'Content-Type: application/json' \\\n-H 'cdn-request-id: test-002'\n-d '{\n\"category\": \"option\"\n}'\n")))),(0,a.kt)("h2",{id:"\u5916\u5c64\u901a\u7528\u6578\u64da\u7d50\u69cb"},"\u5916\u5c64\u901a\u7528\u6578\u64da\u7d50\u69cb"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u78bc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u529f/\u932f\u8aa4\u6d88\u606f. \u6210\u529f\u6d88\u606f\u53ef\u4ee5\u662f",(0,a.kt)("inlineCode",{parentName:"td"},"OK"),",",(0,a.kt)("inlineCode",{parentName:"td"},"success"),",",(0,a.kt)("inlineCode",{parentName:"td"},"SUCCESS"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"result"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u696d\u52d9\u6578\u64da\u9ad4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u984d\u5916\u4fe1\u606f. \u5927\u90e8\u5206\u5834\u666f\u4e0b\u90fd\u662f",(0,a.kt)("inlineCode",{parentName:"td"},"{}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"time"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u6642\u9593\u6233 (\u6beb\u79d2)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    },\n    "retExtInfo": {},\n    "time": 1671017382656\n}\n')))}c.isMDXComponent=!0}}]);
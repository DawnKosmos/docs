"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[94091],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>c});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,m=s["".concat(o,".").concat(c)]||s[c]||d[c]||a;return n?l.createElement(m,i(i({ref:e},k),{},{components:n})):l.createElement(m,i({ref:e},k))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28003:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={title:"\u983b\u7387\u9650\u5236",sidebar_label:"\u983b\u7387\u9650\u5236",slug:"/derivatives/rate-limit"},i=void 0,u={unversionedId:"v3/derivatives/rate-limit",id:"v3/derivatives/rate-limit",title:"\u983b\u7387\u9650\u5236",description:"IP\u9650\u983b",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rate-limit.mdx",sourceDirName:"v3/derivatives",slug:"/derivatives/rate-limit",permalink:"/docs/zh-TW/derivatives/rate-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"\u983b\u7387\u9650\u5236",sidebar_label:"\u983b\u7387\u9650\u5236",slug:"/derivatives/rate-limit"},sidebar:"v3SideBar",previous:{title:"\u9322\u5305",permalink:"/docs/zh-TW/derivatives/ws-contract/wallet"},next:{title:"\u679a\u8209\u5b9a\u7fa9",permalink:"/docs/zh-TW/derivatives/enum"}},o={},p=[{value:"IP\u9650\u983b",id:"ip\u9650\u983b",level:2},{value:"\u8cec\u6236\u983b\u7387\u9650\u88fd",id:"\u8cec\u6236\u983b\u7387\u9650\u88fd",level:2},{value:"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868",id:"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868",level:3},{value:"\u7d71\u4e00\u4fdd\u8b49\u91d1",id:"\u7d71\u4e00\u4fdd\u8b49\u91d1",level:4},{value:"\u5408\u7d04",id:"\u5408\u7d04",level:4},{value:"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd",id:"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd",level:2}],k={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ip\u9650\u983b"},"IP\u9650\u983b"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u6536\u5230",(0,r.kt)("strong",{parentName:"p"},"HTTP 403"),"\uff08\u62d2\u7d55\u8a2a\u554f\uff09\u97ff\u61c9, \u60a8\u7684 IP \u5df2\u88ab\u66ab\u6642\u6216\u6c38\u4e45\u7981\u6b62\u3002 ",(0,r.kt)("strong",{parentName:"p"},"\u60a8\u61c9\u7acb\u5373\u67e5\u770b\u4ee5\u4e0b\u6307\u5357\uff0c\u4ee5\u78ba\u4fdd\u60a8\u7684\u61c9\u7528\u7a0b\u5e8f\u4e0d\u6703\u7e7c\u7e8c\u9055\u53cd\u9650\u5236"),"\u3002\u5982\u679c\u60a8\u5728 30 \u5206\u9418\u5f8c\n\u4ecd\u88ab\u7981\u6b62\uff0c\u5247\u60a8\u53ef\u80fd\u6703\u88ab\u6c38\u4e45\u7981\u6b62\u3002")),(0,r.kt)("p",null,"Bybit\u6839\u64da\u8acb\u6c42\u65b9\u5f0f\u6709\u4e0d\u540c\u7684IP\u983b\u7387\u9650\u5236\u3002 \u6211\u5011\u4e0d\u5efa\u8b70\u60a8\u5728\u9019\u4e9b\u9650\u5236\u7684\u908a\u7de3\u904b\u884c\u60a8\u7684\u61c9\u7528\u7a0b\u5e8f\uff0c\u4ee5\u9632\u7570\u5e38\u7684\u7db2\u7d61\u6d3b\u52d5\u5c0e\u81f4\u610f\u5916\u9055\u898f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," \u8acb\u6c42:"),(0,r.kt)("li",{parentName:"ul"},"\u9023\u7e8c 2 \u5206\u9418\u5167\u6bcf\u79d2\u4e0d\u8d85\u904e 50 \u500b\u8acb\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u9023\u7e8c 5 \u79d2\u5167\u6bcf\u79d2\u4e0d\u8d85\u904e 70 \u500b\u8acb\u6c42"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"POST")," \u8acb\u6c42:"),(0,r.kt)("li",{parentName:"ul"},"\u9023\u7e8c 2 \u5206\u9418\u5167\u6bcf\u79d2\u4e0d\u8d85\u904e 20 \u500b\u8acb\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u9023\u7e8c 5 \u79d2\u5167\u6bcf\u79d2\u4e0d\u8d85\u904e 50 \u500b\u8acb\u6c42")),(0,r.kt)("p",null,"\u6b64\u8868\u986f\u793a\u4e86\u6839\u64da\u60a8\u4f7f\u7528\u7684 API \u7684\u4e0d\u540c IP \u983b\u7387\u9650\u5236\u6578\u3002"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"IP\u983b\u7387\u9650\u5236"),(0,r.kt)("th",null,"API"),(0,r.kt)("th",null,"Path")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"5"},"GET: 2\u5206\u9418\u516750\u6b21/\u79d2; 5\u79d2\u9418\u516770\u6b21/\u79d2",(0,r.kt)("br",null),"POST: 2\u5206\u9418\u516720\u6b21/\u79d2; 5\u79d2\u9418\u516750\u6b21/\u79d2"),(0,r.kt)("td",null,"\u7d71\u4e00\u4fdd\u8b49\u91d1 V3"),(0,r.kt)("td",null,"/derivatives/v3/public, /unified/v3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u5408\u7d04 V3"),(0,r.kt)("td",null,"/derivatives/v3/public, /contract/v3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u53cd\u5411\u6c38\u7e8c V2"),(0,r.kt)("td",null,"/v2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u53cd\u5411\u4ea4\u5272 V2"),(0,r.kt)("td",null,"/futures")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u6b63\u5411\u6c38\u7e8c V2"),(0,r.kt)("td",null,"/public/linear, /private/linear")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GET: 2\u5206\u9418\u516750\u6b21/\u79d2; 5\u79d2\u9418\u516770\u6b21/\u79d2",(0,r.kt)("br",null),"POST: 2\u5206\u9418\u516720\u6b21/\u79d2; 5\u79d2\u9418\u516750\u6b21/\u79d2"),(0,r.kt)("td",null,"\u5e33\u6236\u8cc7\u7522 V1, \u5e33\u6236\u8cc7\u7522 V3"),(0,r.kt)("td",null,"/asset/v1, /asset/v3, /user/v3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GET&DELETE: 2\u5206\u9418\u516750\u6b21/\u79d2; 5\u79d2\u9418\u516770\u6b21/\u79d2",(0,r.kt)("br",null),"POST: 2\u5206\u9418\u516720\u6b21/\u79d2; 5\u79d2\u9418\u516750\u6b21/\u79d2"),(0,r.kt)("td",null,"\u73fe\u8ca8 V1, \u73fe\u8ca8 V3"),(0,r.kt)("td",null,"/spot/v1, /spot/v3")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"GET: 2\u5206\u9418\u516750\u6b21/\u79d2; 5\u79d2\u9418\u516770\u6b21/\u79d2",(0,r.kt)("br",null),"POST: 2\u5206\u9418\u516720\u6b21/\u79d2; 5\u79d2\u9418\u516750\u6b21/\u79d2"),(0,r.kt)("td",null,"\u671f\u6b0a V1"),(0,r.kt)("td",null,"/option")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"USDC\u6c38\u7e8c V1"),(0,r.kt)("td",null,"/perpetual")))),(0,r.kt)("p",null,"\u9055\u53cd\u9650\u5236\u5f8c\uff0c\u60a8\u7684 IP \u5c07\u88ab\u7981\u6b62\u4e00\u6bb5\u6642\u9593\uff08\u901a\u5e38\u70ba 30 \u5206\u9418\uff09\u3002 \u6301\u7e8c\u9055\u53cd\u9650\u5236\u5c07\u5c0e\u81f4\u6c38\u4e45\u7981\u6b62\u3002 \u6211\u5011\u4e0d\u80fd\u64a4\u92b7\u6c38\u4e45\u7981\u4ee4\u6216\u7e2e\u77ed\u81e8\u6642\u7981\u4ee4\u3002"),(0,r.kt)("h2",{id:"\u8cec\u6236\u983b\u7387\u9650\u88fd"},"\u8cec\u6236\u983b\u7387\u9650\u88fd"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u6536\u5230\u9019\u6a23\u7684\u97ff\u61c9",(0,r.kt)("inlineCode",{parentName:"p"},'"ret_msg": "Too many visits!"'),", \u5247\u8868\u793a\u60a8\u89f8\u767c\u4e86\u5e33\u6236\u983b\u7387\u9650\u5236, \u8acb\u7b49\u5230\u983b\u7387\u9650\u5236\u91cd\u7f6e\u4ee5\u5f8c, \u518d\u7e7c\u7e8c\u767c\u9001\u8acb\u6c42\u3002")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u76ee\u524d, \u7d71\u4e00\u4fdd\u8b49\u91d1(unified/v3)\u7684\u5e33\u6236\u983b\u7387\u6703\u6709\u4e00\u4e9b\u4e0d\u4e00\u6a23."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"linear"),": \u6309",(0,r.kt)("strong",{parentName:"li"},"\u5206\u9418"),"\u8a08\u7b97\u9650\u983b\u7387"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"option"),": \u6309",(0,r.kt)("strong",{parentName:"li"},"\u79d2"),"\u8a08\u7b97\u9650\u5236\u983b\u7387"))),(0,r.kt)("p",null,"Bybit\u57fa\u65bc",(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u79d2\u937e"),"\u7684\u6efe\u52d5\u6642\u9593\u7a97\u53e3\u4f86\u505a\u983b\u7387\u9650\u88fd\uff0c\u4e26\u4e14\u662f\u6309",(0,r.kt)("strong",{parentName:"p"},"\u8cec\u6236"),"\uff08uid\uff09\u4f86\u505a\u5283\u5206\u9650\u88fd\uff0c\u6bcf\u6b21\u8acb\u6c42API\u97ff\u61c9\u982d(response header)\u4e2d\u90fd\u6703\u5305\u542b\u5982\u4e0b\u5b57\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Status")," - \u8a72\u63a5\u53e3\u7576\u524d\u6642\u9593\u7a97\u53e3\u5269\u4f59\u53ef\u7528\u8acb\u6c42\u6578"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit")," - \u8a72\u63a5\u53e3\u7576\u524d\u983b\u7387\u9650\u88fd\u4e0a\u9650"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Reset-Timestamp")," - \u5982\u679c\u60a8\u5df2\u8d85\u904e\u8a72\u63a5\u53e3\u7576\u524d\u7a97\u53e3\u983b\u7387\u9650\u88fd\uff0c\u8a72\u5b57\u6bb5\u8868\u793a\u4e0b\u500b\u53ef\u7528\u6642\u9593\u7a97\u53e3\u7684\u6642\u9593\u6233\uff08\u6beb\u79d2\uff09\uff0c\u5373\u4ec0\u9ebd\u6642\u5019\u53ef\u4ee5\u6062\u5fa9\u8a2a\u554f\uff1b\u5982\u679c\u60a8\u672a\u8d85\u904e\u8a72\u63a5\u53e3\u7576\u524d\u7a97\u53e3\u983b\u7387\u9650\u88fd\uff0c\u8a72\u5b57\u6bb5\u8868\u793a\u8fd4\u56de\u7684\u662f\u7576\u524d\u670d\u52d9\u5668\u6642\u9593\uff08\u6beb\u79d2).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Http \u97ff\u61c9\u982d\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\u25b6Response Headers\nContent-Type: application/json; charset=utf-8\nContent-Length: 141\nX-Bapi-Limit: 100\nX-Bapi-Limit-Status: 99\nX-Bapi-Limit-Reset-Timestamp: 1672738134824\n")),(0,r.kt)("h3",{id:"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868"},"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868"),(0,r.kt)("h4",{id:"\u7d71\u4e00\u4fdd\u8b49\u91d1"},"\u7d71\u4e00\u4fdd\u8b49\u91d1"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u8def\u5f91"),(0,r.kt)("th",null,"\u6b63\u5411\u5408\u7d04(linear)"),(0,r.kt)("th",null,"\u671f\u6b0a(option)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/create"),(0,r.kt)("td",{rowSpan:"3"},"800 req/min (\u5171\u4eab)"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/replace"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/cancel"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/create-batch"),(0,r.kt)("td",{rowSpan:"4"},"800 req/min (\u5171\u4eab)",(0,r.kt)("br",null)),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/replace-batch"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/cancel-batch"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/cancel-all"),(0,r.kt)("td",null,"1 req/s")))),(0,r.kt)("h4",{id:"\u5408\u7d04"},"\u5408\u7d04"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8def\u5f91"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u983b\u7387"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6240\u6709\u79c1\u6709\u63a5\u53e3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10 req/s"))))),(0,r.kt)("h2",{id:"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd"},"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd"),(0,r.kt)("p",null,"\u8acb\u767c\u9001\u90f5\u4ef6\u5230 ",(0,r.kt)("a",{parentName:"p",href:"mailto:api@bybit.com"},"api@bybit.com"),"\uff0c\u6211\u5011\u6703\u5728 1-4 \u500b\u5de5\u4f5c\u65e5\u5167\u7b54\u5fa9\u3002\u90f5\u4ef6\u5167\u5bb9\u5fc5\u9808\u5305\u542b\u4ee5\u4e0b\u5167\u5bb9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u60a8\u7684\u59d3\u540d\u548c\u516c\u53f8\u540d\u7a31\u548c\u7c21\u4ecb"),(0,r.kt)("li",{parentName:"ol"},"\u60a8\u7684bybit \u8cec\u865fuid\u6216\u8a3b\u518a\u90f5\u7bb1\u624b\u6a5f\u865f,\u4ee5\u53ca\u60a8\u8981\u7533\u8acb\u63d0\u983b\u7684\u4ea4\u6613\u5c0d"),(0,r.kt)("li",{parentName:"ol"},"\u60a8\u4e0a\u500b\u6708\u7684\u4ea4\u6613\u91cf\uff08\u5403\u55ae/\u639b\u55ae\uff09\u4e26\u63d0\u4f9b\u622a\u5716"),(0,r.kt)("li",{parentName:"ol"},"\u7c21\u55ae\u4ecb\u7d39\u60a8\u7684\u4ea4\u6613\u7b56\u7565\u548c\u70ba\u4ec0\u9ebd\u9700\u8981\u66f4\u9ad8\u9650\u983b"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u53ef\u4ee5\uff0c\u8acb\u63d0\u4f9b\u60a8\u7684\u6210\u4ea4\u8a18\u9304csv\u6587\u6a94")))}d.isMDXComponent=!0}}]);
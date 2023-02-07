"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[57251],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),u=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?i.createElement(k,l(l({ref:e},p),{},{components:n})):i.createElement(k,l({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44005:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={title:"Rate Limit",sidebar_label:"Rate Limit",slug:"/derivatives/rate-limit"},l=void 0,o={unversionedId:"v3/derivatives/rate-limit",id:"v3/derivatives/rate-limit",title:"Rate Limit",description:"IP Rate Limit",source:"@site/docs/v3/derivatives/rate-limit.mdx",sourceDirName:"v3/derivatives",slug:"/derivatives/rate-limit",permalink:"/docs/derivatives/rate-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"Rate Limit",sidebar_label:"Rate Limit",slug:"/derivatives/rate-limit"},sidebar:"v3SideBar",previous:{title:"Wallet",permalink:"/docs/derivatives/ws-contract/wallet"},next:{title:"Enums Definitions",permalink:"/docs/derivatives/enum"}},s={},u=[{value:"IP Rate Limit",id:"ip-rate-limit",level:2},{value:"API Rate Limit",id:"api-rate-limit",level:2},{value:"API Rate Limit Table",id:"api-rate-limit-table",level:3},{value:"Unified Margin",id:"unified-margin",level:4},{value:"Contract",id:"contract",level:4},{value:"How to increase API Limit",id:"how-to-increase-api-limit",level:2}],p={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ip-rate-limit"},"IP Rate Limit"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you receive an ",(0,r.kt)("strong",{parentName:"p"},"HTTP 403")," (Access Denied) response, your IP has been either temporarily or permanently banned.\n",(0,r.kt)("strong",{parentName:"p"},"You should immediately review the below guidelines to ensure your application does not continue to violate the limit."),"\nIf you are still banned after 30 minutes, you likely have a permanent ban.")),(0,r.kt)("p",null,"Bybit has different IP frequency limits depending on the request method. We do not recommend running your application\nat the very edge of these limits in case abnormal network activity results in an unexpected violation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," method:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"50 requests per second for 2 consecutive minutes"),(0,r.kt)("li",{parentName:"ul"},"70 requests per second for 5 consecutive seconds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"POST")," method:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"20 requests per second for 2 consecutive minutes"),(0,r.kt)("li",{parentName:"ul"},"50 requests per second for 5 consecutive seconds")))),(0,r.kt)("p",null,"This table shows how there are different IP rate limit counters depending on the API you are using."),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"IP rate limit"),(0,r.kt)("th",null,"API"),(0,r.kt)("th",null,"Path")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"5"},"GET: 50/s in 2 mins; 70/s in 5 secs",(0,r.kt)("br",null),"POST: 20/s in 2 mins; 50/s in 5 secs"),(0,r.kt)("td",null,"Unified Margin V3"),(0,r.kt)("td",null,"/derivatives/v3/public, /unified/v3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Contract V3"),(0,r.kt)("td",null,"/derivatives/v3/public, /contract/v3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Inverse Perpetual V2"),(0,r.kt)("td",null,"/v2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Inverse Futures V2"),(0,r.kt)("td",null,"/futures")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Linear Perpetual V2"),(0,r.kt)("td",null,"/public/linear, /private/linear")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GET: 50/s in 2 mins; 70/s in 5 secs",(0,r.kt)("br",null),"POST: 20/s in 2 mins; 50/s in 5 secs"),(0,r.kt)("td",null,"Asset V1, Asset V3"),(0,r.kt)("td",null,"/asset/v1, /asset/v3, /user/v3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GET&DELETE: 50/s in 2 mins; 70/s in 5 secs",(0,r.kt)("br",null),"POST: 20/s in 2 mins; 50/s in 5 secs"),(0,r.kt)("td",null,"Spot V1, Spot V3"),(0,r.kt)("td",null,"/spot/v1, /spot/v3")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"GET: 50/s in 2 mins; 70/s in 5 secs",(0,r.kt)("br",null),"POST: 20/s in 2 mins; 50/s in 5 secs"),(0,r.kt)("td",null,"USDC Option V1"),(0,r.kt)("td",null,"/option")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"USDC Perpetual V1"),(0,r.kt)("td",null,"/perpetual")))),(0,r.kt)("p",null,"After violating the limit your IP will be banned for a set period of time (usually 30 minutes). Continually violating\nthe limit will result in a permanent ban. We cannot undo permanent bans or shorten temporary bans."),(0,r.kt)("h2",{id:"api-rate-limit"},"API Rate Limit"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you receive ",(0,r.kt)("inlineCode",{parentName:"p"},'"ret_msg": "Too many visits!"')," in the JSON response, you have hit the API rate limit.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For now, api rate limit for Unified margin is a bit different."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"linear"),": rate limit is count by ",(0,r.kt)("strong",{parentName:"li"},"minute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"option"),": rate limit is count by ",(0,r.kt)("strong",{parentName:"li"},"second")))),(0,r.kt)("p",null,"The API rate limit is based on the ",(0,r.kt)("strong",{parentName:"p"},"rolling time window per second and UID"),". In other words, it is per second per UID.\nEvery request to the API returns response header shown in the code panel:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Status")," - your remaining requests for current endpoint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit")," - your current limit for current endpoint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Reset-Timestamp")," - the timestamp indicating when your request limit resets if you have exceeded your rate_limit. Otherwise, this is just the current timestamp.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Http Response Header Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\u25b6Response Headers\nContent-Type: application/json; charset=utf-8\nContent-Length: 141\nX-Bapi-Limit: 100\nX-Bapi-Limit-Status: 99\nX-Bapi-Limit-Reset-Timestamp: 1672738134824\n")),(0,r.kt)("h3",{id:"api-rate-limit-table"},"API Rate Limit Table"),(0,r.kt)("h4",{id:"unified-margin"},"Unified Margin"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Path"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"option")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/create"),(0,r.kt)("td",{rowSpan:"3"},"800 req/min (shared)"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/replace"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/cancel"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/create-batch"),(0,r.kt)("td",{rowSpan:"4"},"800 req/min (shared)",(0,r.kt)("br",null)),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/replace-batch"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/cancel-batch"),(0,r.kt)("td",null,"5 req/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/unified/v3/private/order/cancel-all"),(0,r.kt)("td",null,"1 req/s")))),(0,r.kt)("h4",{id:"contract"},"Contract"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Limit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"All private endpoints"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10 req/s"))))),(0,r.kt)("h2",{id:"how-to-increase-api-limit"},"How to increase API Limit"),(0,r.kt)("p",null,"Please email ",(0,r.kt)("a",{parentName:"p",href:"mailto:api@bybit.com"},"api@bybit.com")," with the following information. We will reply within 1-4 working days:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your name and your company details"),(0,r.kt)("li",{parentName:"ol"},"Your Bybit UID or registered email, and the assets you are trading"),(0,r.kt)("li",{parentName:"ol"},"General description of your trading strategy and reasons for higher rate limits"),(0,r.kt)("li",{parentName:"ol"},"Screenshot of previous monthly trading volume (maker/taker) on other platforms"),(0,r.kt)("li",{parentName:"ol"},"Optional: your order history in CSV format")))}d.isMDXComponent=!0}}]);
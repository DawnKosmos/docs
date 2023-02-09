"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,v=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",sidebar_label:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",sidebar_position:11,slug:"/derivatives/unified/dcp"},o=void 0,p={unversionedId:"v3/derivatives/rest-unified/account/dcp",id:"v3/derivatives/rest-unified/account/dcp",title:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",description:"\u4ec0\u9ebc\u662f\u65b7\u7dda\u4fdd\u8b77 (Disconnection Protect)?",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/account/dcp.mdx",sourceDirName:"v3/derivatives/rest-unified/account",slug:"/derivatives/unified/dcp",permalink:"/docs/zh-TW/derivatives/unified/dcp",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",sidebar_label:"\u8a2d\u7f6e\u65b7\u7dda\u4fdd\u8b77\u6642\u9593",sidebar_position:11,slug:"/derivatives/unified/dcp"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5e33\u6236\u914d\u7f6e",permalink:"/docs/zh-TW/derivatives/unified/usc-account-info"},next:{title:"\u67e5\u8a62\u65b7\u7dda\u4fdd\u8b77\u914d\u7f6e",permalink:"/docs/zh-TW/derivatives/unified/get-dcp"}},l={},c=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h2",{parentName:"admonition",id:"\u4ec0\u9ebc\u662f\u65b7\u7dda\u4fdd\u8b77-disconnection-protect"},"\u4ec0\u9ebc\u662f\u65b7\u7dda\u4fdd\u8b77 (Disconnection Protect)?"),(0,i.kt)("p",{parentName:"admonition"},"Bybit\u57fa\u65bcwebsocket\u79c1\u6709\u9023\u63a5\u548c\u5fc3\u8df3\u6a5f\u5236\uff0c\u63d0\u4f9b\u65b7\u7dda\u4fdd\u8b77\u529f\u80fd\u3002\u9019\u8a08\u6642\u5f9e\u7b2c\u4e00\u6b21\u65b7\u958b\u958b\u59cb\u3002\u5982\u679cBybit\u670d\u52d9\u5668\u5728\u4e00\u6bb5\u6642\u9593\u5167\u6c92\u6709\u6536\u5230\u5ba2\u6236\u7aef\u7684\u91cd\u9023\u8d85\u904e10\u79d2\uff08\u9ed8\u8a8d\uff09\u4e26\n\u6062\u5fa9\u5fc3\u8df3\u201cping\u201d\uff0c\u5247\u5ba2\u6236\u7aef\u8655\u65bc\u201c\u65b7\u7dda\u4fdd\u8b77\u201d\u72c0\u614b\uff0c\u5ba2\u6236\u6240\u6709\u6d3b\u8e8d\u7684",(0,i.kt)("strong",{parentName:"p"},"\u671f\u6b0a"),"\u8a02\u55ae\u5c07\u81ea\u52d5\u53d6\u6d88\u3002\u5982\u679c\u5728 10 \u79d2\u5167\uff0c\u5ba2\u6236\u7aef\u91cd\u65b0\u9023\u63a5\u4e26\u6062\u5fa9\u5fc3\u8df3\u201cping\u201d\uff0c\u8a08\u6642\u6703\u5728\u4e0b\u6b21\u65b7\u7dda\n\u6642\u91cd\u7f6e\u4e26\u91cd\u65b0\u958b\u59cb\u3002"),(0,i.kt)("h2",{parentName:"admonition",id:"\u5982\u4f55\u555f\u7528\u65b7\u7dda\u4fdd\u8b77"},"\u5982\u4f55\u555f\u7528\u65b7\u7dda\u4fdd\u8b77"),(0,i.kt)("p",{parentName:"admonition"},"\u82e5\u60a8\u9700\u8981\u958b\u555f/\u95dc\u9589\u65b7\u7dda\u4fdd\u8b77\u529f\u80fd, \u60a8\u53ef\u4ee5\u8aee\u8a62\u5ba2\u6236\u7d93\u7406. \u958b\u555f\u5f8c\uff0c\u9ed8\u8a8d\u7684\u65b7\u7dda\u4fdd\u8b77\u6642\u9593\u70ba10\u79d2\u3002"),(0,i.kt)("h2",{parentName:"admonition",id:"\u9069\u7528\u5c0d\u8c61"},"\u9069\u7528\u5c0d\u8c61"),(0,i.kt)("p",{parentName:"admonition"},"\u50c5\u9069\u7528\u65bc",(0,i.kt)("strong",{parentName:"p"},"\u671f\u6b0a"),"\u4ea4\u6613\u3002")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"API\u8acb\u6c42\u767c\u9001\u6210\u529f\u5f8c\uff0c\u7cfb\u7d71\u9700\u8981\u4e00\u5b9a\u7684\u6642\u9593\u624d\u80fd\u751f\u6548\u3002\u5efa\u8b7010\u79d2\u5f8c\u518d\u67e5\u8a62\u6216\u8a2d\u7f6e\u3002")),(0,i.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/private/dcp-set-timewindow")),(0,i.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"timeWindow"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"\u65b7\u7dda\u4fdd\u8b77\u6642\u9593\u7a97\u53e3. ","[",(0,i.kt)("inlineCode",{parentName:"td"},"10"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"300"),"]",", \u55ae\u4f4d: \u79d2")))),(0,i.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,i.kt)("p",null,"\u7121"),(0,i.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST /derivatives/v3/private/dcp-set-timewindow HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1675852742375\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\n\n{\n  "timeWindow": 40\n}\n')),(0,i.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success"\n}\n')))}s.isMDXComponent=!0}}]);
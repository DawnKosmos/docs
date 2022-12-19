"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(r),c=n,x=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(x,o(o({ref:t},u),{},{components:r})):a.createElement(x,o({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const l={title:"Get Export Report Status",sidebar_label:"Get Export Report Status",sidebar_position:3},o=void 0,p={unversionedId:"v3/tax/report-status",id:"v3/tax/report-status",title:"Get Export Report Status",description:"Get Export Report Status",source:"@site/docs/v3/tax/report-status.mdx",sourceDirName:"v3/tax",slug:"/v3/tax/report-status",permalink:"/docs-v2/zh/v3/tax/report-status",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Get Export Report Status",sidebar_label:"Get Export Report Status",sidebar_position:3},sidebar:"v3SideBar",previous:{title:"Request Export Report",permalink:"/docs-v2/zh/v3/tax/request-report"},next:{title:"Retrieve Data Export",permalink:"/docs-v2/zh/v3/tax/data-export"}},s={},i=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=u("Tabs"),d=u("TabItem"),c={toc:i};function x(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Get Export Report Status"),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/fht/compliance/tax/v3/private/status")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"queryId"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Report Request ID")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"-1")," Failed"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"0")," Queued"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"1")," Processing"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"2")," Processed"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"3")," Expired"))))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(d,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'POST /fht/compliance/tax/v3/private/status HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN-TYPE: 2\nX-BAPI-SIGN: xxxxxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671183923110\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{"queryId":"12312312415325325"}\n')))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(d,{value:"js linear",label:"assets",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "status": "2"\n    },\n    "retExtInfo": {},\n    "time": 1671183923244\n}\n')))))}x.isMDXComponent=!0}}]);
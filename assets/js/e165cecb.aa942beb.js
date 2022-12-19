"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),o=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(r),u=n,c=k["".concat(d,".").concat(u)]||k[u]||s[u]||i;return r?a.createElement(c,l(l({ref:t},m),{},{components:r})):a.createElement(c,l({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={title:"Mark Price Kline",sidebar_label:"Mark Price Kline",sidebar_position:2},l=void 0,p={unversionedId:"v3/derivatives/rest-public/mark-kline",id:"v3/derivatives/rest-public/mark-kline",title:"Mark Price Kline",description:"Get mark price kline data",source:"@site/docs/v3/derivatives/rest-public/mark-kline.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/v3/derivatives/rest-public/mark-kline",permalink:"/docs-v2/v3/derivatives/rest-public/mark-kline",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Mark Price Kline",sidebar_label:"Mark Price Kline",sidebar_position:2},sidebar:"v3SideBar",previous:{title:"Kline",permalink:"/docs-v2/v3/derivatives/rest-public/kline"},next:{title:"Index Price Kline",permalink:"/docs-v2/v3/derivatives/rest-public/index-kline"}},d={},o=[{value:"HTTP Request",id:"http-request",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response Parameters",id:"response-parameters",level:4}],m={toc:o};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Get mark price kline data"),(0,n.kt)("h4",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/mark-price-kline")),(0,n.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Products category. ",(0,n.kt)("inlineCode",{parentName:"td"},"future")," ONLY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interval"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Kline interval. ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," ",(0,n.kt)("inlineCode",{parentName:"td"},"3")," ",(0,n.kt)("inlineCode",{parentName:"td"},"5")," ",(0,n.kt)("inlineCode",{parentName:"td"},"15")," ",(0,n.kt)("inlineCode",{parentName:"td"},"30")," ",(0,n.kt)("inlineCode",{parentName:"td"},"60")," ",(0,n.kt)("inlineCode",{parentName:"td"},"120")," ",(0,n.kt)("inlineCode",{parentName:"td"},"240")," ",(0,n.kt)("inlineCode",{parentName:"td"},"360")," ",(0,n.kt)("inlineCode",{parentName:"td"},"720")," ",(0,n.kt)("inlineCode",{parentName:"td"},"D")," ",(0,n.kt)("inlineCode",{parentName:"td"},"M")," ",(0,n.kt)("inlineCode",{parentName:"td"},"W"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"start"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"end"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("b",null,"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,200]",". default: ",(0,n.kt)("inlineCode",{parentName:"td"},"200"))))),(0,n.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Products category. Keeps empty string ",(0,n.kt)("inlineCode",{parentName:"td"},'""')," when ",(0,n.kt)("inlineCode",{parentName:"td"},"category")," is not passed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("li",null,"An string array of individual candle"),(0,n.kt)("li",null,"Sort in reverse by ",(0,n.kt)("inlineCode",{parentName:"td"},"start")),(0,n.kt)("li",null,"The default collation within the array is ",(0,n.kt)("inlineCode",{parentName:"td"},"start"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"open"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"high"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"low"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"close")))))))}s.isMDXComponent=!0}}]);
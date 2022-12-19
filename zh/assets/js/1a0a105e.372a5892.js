"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9528],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),o=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(n),k=a,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return n?r.createElement(c,i(i({ref:e},m),{},{components:n})):r.createElement(c,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27900:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"Kline",sidebar_label:"Kline"},i=void 0,p={unversionedId:"v3/derivatives/rest-public/kline",id:"v3/derivatives/rest-public/kline",title:"Kline",description:"Get kline data.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/v3/derivatives/rest-public/kline.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/v3/derivatives/rest-public/kline",permalink:"/docs-v2/zh/v3/derivatives/rest-public/kline",draft:!1,tags:[],version:"current",frontMatter:{title:"Kline",sidebar_label:"Kline"},sidebar:"v3SideBar",previous:{title:"Instrument Info",permalink:"/docs-v2/zh/v3/derivatives/rest-public/instrument-info"},next:{title:"Mark Price Kline",permalink:"/docs-v2/zh/v3/derivatives/rest-public/mark-kline"}},d={},o=[{value:"HTTP Request",id:"http-request",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response Parameters",id:"response-parameters",level:4}],m={toc:o};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get kline data."),(0,a.kt)("h4",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/kline")),(0,a.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Products category. ",(0,a.kt)("inlineCode",{parentName:"td"},"future")," ONLY")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interval"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Kline interval. ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," ",(0,a.kt)("inlineCode",{parentName:"td"},"3")," ",(0,a.kt)("inlineCode",{parentName:"td"},"5")," ",(0,a.kt)("inlineCode",{parentName:"td"},"15")," ",(0,a.kt)("inlineCode",{parentName:"td"},"30")," ",(0,a.kt)("inlineCode",{parentName:"td"},"60")," ",(0,a.kt)("inlineCode",{parentName:"td"},"120")," ",(0,a.kt)("inlineCode",{parentName:"td"},"240")," ",(0,a.kt)("inlineCode",{parentName:"td"},"360")," ",(0,a.kt)("inlineCode",{parentName:"td"},"720")," ",(0,a.kt)("inlineCode",{parentName:"td"},"D")," ",(0,a.kt)("inlineCode",{parentName:"td"},"M")," ",(0,a.kt)("inlineCode",{parentName:"td"},"W"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"start"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"end"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,200]",". default: ",(0,a.kt)("inlineCode",{parentName:"td"},"200"))))),(0,a.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Products category. Keeps empty string ",(0,a.kt)("inlineCode",{parentName:"td"},'""')," when ",(0,a.kt)("inlineCode",{parentName:"td"},"category")," is not passed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("li",null,"An string array of individual candle"),(0,a.kt)("li",null,"Sort in reverse by ",(0,a.kt)("inlineCode",{parentName:"td"},"start")),(0,a.kt)("li",null,"The default collation within the array is ",(0,a.kt)("inlineCode",{parentName:"td"},"start"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"open"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"high"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"low"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"close"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"volume"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"turnover")))))))}s.isMDXComponent=!0}}]);
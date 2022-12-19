"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2149],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},97721:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Introduction",sidebar_label:"Introduction"},i=void 0,l={unversionedId:"v5/intro",id:"v5/intro",title:"Introduction",description:"Bybit v5 Open API allow users to implement trade by one collection API.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/v5/intro.mdx",sourceDirName:"v5",slug:"/v5/intro",permalink:"/docs-v2/zh/v5/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",sidebar_label:"Introduction"},sidebar:"v5SideBar",next:{title:"Get kline",permalink:"/docs-v2/zh/v5/market/kline"}},c={},u=[{value:"Scope",id:"scope",level:2},{value:"Authentication",id:"authentication",level:2}],p={toc:u};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bybit v5 Open API allow users to implement trade by one collection API."),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Account Mode"),(0,a.kt)("th",{parentName:"tr",align:"left"},"v5 Open API"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Normal account"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"can't trade spot,futures,option")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Unified margin account"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"can trade linear futures,option; can't trade spot,inverse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Unified trade account"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"can trade everything")))),(0,a.kt)("h2",{id:"authentication"},"Authentication"))}d.isMDXComponent=!0}}]);
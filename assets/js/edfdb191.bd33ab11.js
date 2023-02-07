"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[59485],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=c,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),c=r(86010),a=r(53438),o=r(39960),i=r(13919),l=r(95999);const s="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",s)},r)}function m(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:a},r," ",a),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",p),title:o},o))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:null==c?void 0:c.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,a.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},98814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),c=(r(67294),r(3905)),a=r(52991),o=r(53438);const i={id:"contract",title:"Contract",description:"Contract",custom_edit_url:null},l=void 0,s={unversionedId:"api-explorer/derivatives/trade/contract/contract",id:"api-explorer/derivatives/trade/contract/contract",title:"Contract",description:"Contract",source:"@site/docs/api-explorer/derivatives/trade/contract/contract.tag.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/contract",permalink:"/docs/api-explorer/derivatives/trade/contract/contract",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"contract",title:"Contract",description:"Contract",custom_edit_url:null},sidebar:"apiExplorerSideBar",previous:{title:"Get position",permalink:"/docs/api-explorer/derivatives/trade/unified/myposition"},next:{title:"Place Order",permalink:"/docs/api-explorer/derivatives/trade/contract/create-order"}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"All contract v3 REST API, an upgraded version of Future v2."),(0,c.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);
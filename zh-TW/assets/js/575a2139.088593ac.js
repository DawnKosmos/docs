"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[288],{3905:(t,e,l)=>{l.d(e,{Zo:()=>o,kt:()=>p});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function d(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),k=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):d(d({},e),t)),l},o=function(t){var e=k(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),c=k(l),p=r,m=c["".concat(i,".").concat(p)]||c[p]||s[p]||a;return l?n.createElement(m,d(d({ref:e},o),{},{components:l})):n.createElement(m,d({ref:e},o))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,d=new Array(a);d[0]=c;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,d[1]=u;for(var k=2;k<a;k++)d[k]=l[k];return n.createElement.apply(null,d)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},85162:(t,e,l)=>{l.d(e,{Z:()=>d});var n=l(67294),r=l(86010);const a="tabItem_Ymn6";function d(t){let{children:e,hidden:l,className:d}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,d),hidden:l},e)}},65488:(t,e,l)=>{l.d(e,{Z:()=>p});var n=l(87462),r=l(67294),a=l(86010),d=l(72389),u=l(67392),i=l(7094),k=l(12466);const o="tabList__CuJ",s="tabItem_LNqP";function c(t){var e;const{lazy:l,block:d,defaultValue:c,values:p,groupId:m,className:g}=t,f=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((t=>{let{props:{value:e,label:l,attributes:n}}=t;return{value:e,label:l,attributes:n}})),v=(0,u.l)(b,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==y&&!b.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,i.U)(),[T,O]=(0,r.useState)(y),I=[],{blockElementScrollPositionUntilNextRender:P}=(0,k.o5)();if(null!=m){const t=h[m];null!=t&&t!==T&&b.some((e=>e.value===t))&&O(t)}const w=t=>{const e=t.currentTarget,l=I.indexOf(e),n=b[l].value;n!==T&&(P(e),O(n),null!=m&&N(m,String(n)))},E=t=>{var e;let l=null;switch(t.key){case"ArrowRight":{const e=I.indexOf(t.currentTarget)+1;l=I[e]??I[0];break}case"ArrowLeft":{const e=I.indexOf(t.currentTarget)-1;l=I[e]??I[I.length-1];break}}null==(e=l)||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",o)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},g)},b.map((t=>{let{value:e,label:l,attributes:d}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:t=>I.push(t),onKeyDown:E,onFocus:w,onClick:w},d,{className:(0,a.Z)("tabs__item",s,null==d?void 0:d.className,{"tabs__item--active":T===e})}),l??e)}))),l?(0,r.cloneElement)(f.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function p(t){const e=(0,d.Z)();return r.createElement(c,(0,n.Z)({key:String(e)},t))}},1789:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>k,toc:()=>s});var n=l(87462),r=(l(67294),l(3905)),a=l(65488),d=l(85162);const u={title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_position:9,slug:"/derivatives/unified/order-list"},i=void 0,k={unversionedId:"v3/derivatives/rest-unified/order/order-list",id:"v3/derivatives/rest-unified/order/order-list",title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",description:"\u7372\u53d6\u6b77\u53f2\u8a02\u55ae\u7d00\u9304. \u7531\u65bc\u8a02\u55ae\u5275\u5efa/\u64a4\u92b7\u662f\u7570\u6b65\u7684, \u8a72\u63a5\u53e3\u8fd4\u56de\u6578\u64da\u53ef\u80fd\u6703\u6709\u5ef6\u9072. \u82e5\u60a8\u60f3\u5be6\u6642\u7372\u53d6\u8a02\u55ae\u4fe1\u606f, \u60a8\u53ef\u4ee5\u67e5\u8a62\u8a72\u63a5\u53e3\u6216\u8005\u901a\u904ewebsocket\u63a8\u9001(\u63a8\u85a6)",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/order/order-list.mdx",sourceDirName:"v3/derivatives/rest-unified/order",slug:"/derivatives/unified/order-list",permalink:"/docs-v2/zh-TW/derivatives/unified/order-list",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_position:9,slug:"/derivatives/unified/order-list"},sidebar:"v3SideBar",previous:{title:"\u6279\u91cf\u64a4\u92b7\u59d4\u8a17\u55ae",permalink:"/docs-v2/zh-TW/derivatives/unified/batch-cancel"},next:{title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",permalink:"/docs-v2/zh-TW/derivatives/unified/position-info"}},o={},s=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c={toc:s};function p(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7372\u53d6\u6b77\u53f2\u8a02\u55ae\u7d00\u9304. \u7531\u65bc\u8a02\u55ae\u5275\u5efa/\u64a4\u92b7\u662f\u7570\u6b65\u7684, \u8a72\u63a5\u53e3\u8fd4\u56de\u6578\u64da\u53ef\u80fd\u6703\u6709\u5ef6\u9072. \u82e5\u60a8\u60f3\u5be6\u6642\u7372\u53d6\u8a02\u55ae\u4fe1\u606f, \u60a8\u53ef\u4ee5\u67e5\u8a62\u8a72",(0,r.kt)("a",{parentName:"p",href:"open-order#"},"\u63a5\u53e3"),"\u6216\u8005\u901a\u904ewebsocket\u63a8\u9001(\u63a8\u85a6)")),(0,r.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/order/list")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"orderStatus")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u72c0\u614b\u3002\u4e0d\u50b3\u5247\u9ed8\u8a8d\u67e5\u8a62\u6240\u6709\u72c0\u614b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orderFilter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Order"),": \u666e\u901a\u55ae, ",(0,r.kt)("inlineCode",{parentName:"td"},"StopOrder"),": \u689d\u4ef6\u55ae")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ffb\u9801\u65b9\u5411. ",(0,r.kt)("inlineCode",{parentName:"td"},"prev"),": \u5411\u524d, ",(0,r.kt)("inlineCode",{parentName:"td"},"next"),": \u5411\u5f8c. \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"next"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[1,50]",". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"linear",label:"linear",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u985e\u578b. `Market`,`Limit` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderLinkId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7528\u6236\u81ea\u5b9a\u7fa9Id ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55aeId ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> stopOrderType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u689d\u4ef6\u55ae\u985e\u578b. `TakeProfit`,`StopLoss`,`TrailingStop`,`Stop` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderStatus"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u72c0\u614b ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> takeProfit"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6b62\u76c8\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> blockTradeId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5927\u5b97\u4ea4\u6613\u8a02\u55aeId ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> rejectReason"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u62d2\u7d55\u539f\u56e0 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u5275\u5efa\u8a02\u55ae\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tpTriggerBy"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u89f8\u767c\u6b62\u76c8\u7684\u50f9\u683c\u985e\u578b `MarkPrice`, `IndexPrice`,`LastPrice` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> timeInForce"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u57f7\u884c\u7b56\u7565"),". `GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, ",(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001051"},"`PostOnly`")," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> basePrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7576\u524d\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leavesValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u8a02\u55ae\u66f4\u65b0\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u65b9\u5411. `Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> triggerPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u89f8\u767c\u50f9\u683c. \u50c5\u689d\u4ef6\u55ae\u6709\u6548 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecFee"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u7684\u624b\u7e8c\u8cbb ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> slTriggerBy"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u89f8\u767c\u6b62\u640d\u7684\u50f9\u683c\u985e\u578b. `MarkPrice`, `IndexPrice`,`LastPrice`  ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leavesQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> closeOnTrigger"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"\u89f8\u767c\u5f8c\u5e73\u5009\u59d4\u8a17. ",(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001050"},"\u4ec0\u9ebc\u662f\u89f8\u767c\u5f8c\u5e73\u5009\u59d4\u8a17?")," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> reduceOnly"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"\u53ea\u6e1b\u5009. `true`\u8868\u660e\u9019\u662f\u53ea\u6e1b\u5009\u55ae ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> qty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> stopLoss"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6b62\u640d\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> triggerBy"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u89f8\u767c\u50f9\u683c\u7684\u89f8\u767c\u985e\u578b. `LastPrice`, `IndexPrice`, `MarkPrice` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u521d\u59cb\u4fdd\u8b49\u91d1 ")))),(0,r.kt)(d.Z,{value:"option",label:"option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u985e\u578b. `Market`,`Limit` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u8a02\u55ae\u66f4\u65b0\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u65b9\u5411. `Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderLinkId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7528\u6236\u81ea\u5b9a\u7fa9Id  ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecFee"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u7684\u624b\u7e8c\u8cbb ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55aeId ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leavesQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderStatus"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u72c0\u614b ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> iv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u96b1\u542b\u6ce2\u52d5\u7387 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> blockTradeId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5927\u5b97\u4ea4\u6613\u8a02\u55aeId ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> rejectReason"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u62d2\u7d55\u539f\u56e0 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> reduceOnly"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"\u53ea\u6e1b\u5009. `true`\u8868\u660e\u9019\u662f\u53ea\u6e1b\u5009\u55ae ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> qty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u5275\u5efa\u8a02\u55ae\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> timeInForce"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u57f7\u884c\u7b56\u7565"),". `GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, ",(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001051"},"`PostOnly`"),"  ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u521d\u59cb\u4fdd\u8b49\u91d1 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> basePrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7576\u524d\u5e02\u50f9 "))))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/order/list?category=linear&orderFilter=StopOrder&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672811957817\nX-BAPI-RECV-WINDOW: 5000\ncdn-request-id: test-002\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "nextPageCursor": "c6f055d9-7f21-4079-913d-e6523a9cfffa%3A1672216686849%2Cc6f055d9-7f21-4079-913d-e6523a9cfffa%3A1672216686849",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "ETHPERP",\n                "orderType": "Limit",\n                "orderLinkId": "linear-004",\n                "orderId": "c6f055d9-7f21-4079-913d-e6523a9cfffa",\n                "stopOrderType": "Stop",\n                "orderStatus": "Deactivated",\n                "takeProfit": "",\n                "cumExecValue": "0",\n                "blockTradeId": "",\n                "rejectReason": "EC_NoError",\n                "price": "1050",\n                "createdTime": 1672216686849,\n                "tpTriggerBy": "UNKNOWN",\n                "timeInForce": "GoodTillCancel",\n                "basePrice": "1188",\n                "leavesValue": "0",\n                "updatedTime": 1672217377166,\n                "side": "Sell",\n                "triggerPrice": "1145.00000000",\n                "cumExecFee": "0",\n                "slTriggerBy": "UNKNOWN",\n                "leavesQty": "0",\n                "closeOnTrigger": false,\n                "cumExecQty": "0",\n                "reduceOnly": false,\n                "qty": "0.15",\n                "stopLoss": "",\n                "triggerBy": "MarkPrice",\n                "orderIM": ""\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672811958171\n}\n')))}p.isMDXComponent=!0}}]);
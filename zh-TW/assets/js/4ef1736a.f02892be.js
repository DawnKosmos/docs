"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7217],{3905:(t,e,l)=>{l.d(e,{Zo:()=>o,kt:()=>c});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function d(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),k=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):d(d({},e),t)),l},o=function(t){var e=k(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),p=k(l),c=r,m=p["".concat(i,".").concat(c)]||p[c]||s[c]||a;return l?n.createElement(m,d(d({ref:e},o),{},{components:l})):n.createElement(m,d({ref:e},o))}));function c(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,d=new Array(a);d[0]=p;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,d[1]=u;for(var k=2;k<a;k++)d[k]=l[k];return n.createElement.apply(null,d)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},85162:(t,e,l)=>{l.d(e,{Z:()=>d});var n=l(67294),r=l(86010);const a="tabItem_Ymn6";function d(t){let{children:e,hidden:l,className:d}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,d),hidden:l},e)}},65488:(t,e,l)=>{l.d(e,{Z:()=>c});var n=l(87462),r=l(67294),a=l(86010),d=l(72389),u=l(67392),i=l(7094),k=l(12466);const o="tabList__CuJ",s="tabItem_LNqP";function p(t){var e;const{lazy:l,block:d,defaultValue:p,values:c,groupId:m,className:g}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??b.map((t=>{let{props:{value:e,label:l,attributes:n}}=t;return{value:e,label:l,attributes:n}})),y=(0,u.l)(f,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(e=b.find((t=>t.props.default)))?void 0:e.props.value)??b[0].props.value;if(null!==v&&!f.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:h}=(0,i.U)(),[T,I]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:P}=(0,k.o5)();if(null!=m){const t=N[m];null!=t&&t!==T&&f.some((e=>e.value===t))&&I(t)}const x=t=>{const e=t.currentTarget,l=O.indexOf(e),n=f[l].value;n!==T&&(P(e),I(n),null!=m&&h(m,String(n)))},C=t=>{var e;let l=null;switch(t.key){case"ArrowRight":{const e=O.indexOf(t.currentTarget)+1;l=O[e]??O[0];break}case"ArrowLeft":{const e=O.indexOf(t.currentTarget)-1;l=O[e]??O[O.length-1];break}}null==(e=l)||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",o)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},g)},f.map((t=>{let{value:e,label:l,attributes:d}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:t=>O.push(t),onKeyDown:C,onFocus:x,onClick:x},d,{className:(0,a.Z)("tabs__item",s,null==d?void 0:d.className,{"tabs__item--active":T===e})}),l??e)}))),l?(0,r.cloneElement)(b.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function c(t){const e=(0,d.Z)();return r.createElement(p,(0,n.Z)({key:String(e)},t))}},13450:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>u,metadata:()=>k,toc:()=>s});var n=l(87462),r=(l(67294),l(3905)),a=l(65488),d=l(85162);const u={title:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",sidebar_label:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",sidebar_position:2,slug:"/derivatives/unified/open-order"},i=void 0,k={unversionedId:"v3/derivatives/rest-unified/order/open-order",id:"v3/derivatives/rest-unified/order/open-order",title:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",description:"\u5be6\u6642\u67e5\u8a62\u672a\u6210\u4ea4\u6216\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae\u4fe1\u606f. \u82e5\u9700\u8981\u67e5\u8a62\u66f4\u4e45\u7684\u8a02\u55ae\u7d00\u9304\uff0c\u8acb\u4f7f\u7528\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae\u63a5\u53e3.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/order/open-order.mdx",sourceDirName:"v3/derivatives/rest-unified/order",slug:"/derivatives/unified/open-order",permalink:"/docs-v2/zh-TW/derivatives/unified/open-order",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",sidebar_label:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",sidebar_position:2,slug:"/derivatives/unified/open-order"},sidebar:"v3SideBar",previous:{title:"\u5275\u5efa\u59d4\u8a17\u55ae",permalink:"/docs-v2/zh-TW/derivatives/unified/place-order"},next:{title:"\u4fee\u6539\u59d4\u8a17\u55ae",permalink:"/docs-v2/zh-TW/derivatives/unified/replace-order"}},o={},s=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:s};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5be6\u6642\u67e5\u8a62\u672a\u6210\u4ea4\u6216\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae\u4fe1\u606f. \u82e5\u9700\u8981\u67e5\u8a62\u66f4\u4e45\u7684\u8a02\u55ae\u7d00\u9304\uff0c\u8acb\u4f7f\u7528\u67e5\u8a62",(0,r.kt)("a",{parentName:"p",href:"order-list#"},"\u6b77\u53f2\u8a02\u55ae"),"\u63a5\u53e3."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u7576",(0,r.kt)("inlineCode",{parentName:"li"},"orderId"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"orderLinkId"),"\u4e0d\u50b3\u6642\uff0c\u6700\u591a\u8fd4\u56de500\u689d\u7d00\u9304"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7684\u7d50\u679c\u5c07\u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},"createdTime"),"\u5f9e\u65b0\u5230\u820a\u6392\u5e8f."))),(0,r.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/order/unfilled-orders")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e63\u7a2e. \u9ed8\u8a8d: ",(0,r.kt)("strong",{parentName:"td"},"BTC"),". \u50c5\u5c0d\u671f\u6b0a\u6709\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orderFilter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Order"),": \u666e\u901a\u55ae, ",(0,r.kt)("inlineCode",{parentName:"td"},"StopOrder"),": \u689d\u4ef6\u55ae")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ffb\u9801\u65b9\u5411. ",(0,r.kt)("inlineCode",{parentName:"td"},"prev"),": \u5411\u524d\u7ffb\u9801, ",(0,r.kt)("inlineCode",{parentName:"td"},"next"),": \u5411\u5f8c\u7ffb\u9801. \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"next"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"50"),"]",". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"linear",label:"linear",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u985e\u578b. `Market`,`Limit` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderLinkId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55aeId ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> stopOrderType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u689d\u4ef6\u55ae\u985e\u578b. `TakeProfit`,`StopLoss`,`TrailingStop`,`Stop` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderStatus"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u72c0\u614b ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> takeProfit"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6b62\u76c8\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> blockTradeId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Paradigm\u5927\u5b97\u4ea4\u6613Id ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u5275\u5efa\u8a02\u55ae\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tpTriggerBy"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u89f8\u767c\u6b62\u76c8\u7684\u50f9\u683c\u985e\u578b. `MarkPrice`,`IndexPrice`,`LastPrice` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> timeInForce"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u8a02\u55ae\u57f7\u884c\u7b56\u7565"),". `GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, ",(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001051"},"`PostOnly`")," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> basePrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7576\u524d\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u8a02\u55ae\u66f4\u65b0\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u65b9\u5411. `Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> triggerPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u89f8\u767c\u50f9\u683c. \u50c5\u689d\u4ef6\u55ae ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecFee"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u7684\u624b\u7e8c\u8cbb ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> slTriggerBy"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u89f8\u767c\u6b62\u640d\u7684\u50f9\u683c\u985e\u578b `MarkPrice`, `IndexPrice`,`LastPrice`  ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leavesQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> closeOnTrigger"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"\u89f8\u767c\u5f8c\u5e73\u5009\u59d4\u8a17. ",(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001050"},"\u4ec0\u9ebc\u662f\u89f8\u767c\u5f8c\u5e73\u5009\u59d4\u8a17?")," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> reduceOnly"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"\u53ea\u6e1b\u5009. `true`\u8868\u660e\u9019\u662f\u53ea\u6e1b\u5009\u55ae ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> qty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> stopLoss"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6b62\u640d\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> triggerBy"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u89f8\u767c\u50f9\u683c\u985e\u578b. `LastPrice`, `IndexPrice`, `MarkPrice` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u521d\u59cb\u4fdd\u8b49\u91d1 ")))),(0,r.kt)(d.Z,{value:"option",label:"option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u985e\u578b. `Market`,`Limit` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u8a02\u55ae\u66f4\u65b0\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u65b9\u5411. `Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderLinkId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecFee"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u7684\u624b\u7e8c\u8cbb ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55aeId ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leavesQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderStatus"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u72c0\u614b ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> iv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u96b1\u542b\u6ce2\u52d5\u7387 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> blockTradeId"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Paradigm\u5927\u5b97\u4ea4\u6613Id ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumExecQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> reduceOnly"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"\u53ea\u6e1b\u5009. `true`\u8868\u660e\u9019\u662f\u53ea\u6e1b\u5009\u55ae ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> qty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u5275\u5efa\u8a02\u55ae\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> timeInForce"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u57f7\u884c\u7b56\u7565"),". `GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, ",(0,r.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001051"},"`PostOnly`"),"  ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> orderIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u521d\u59cb\u4fdd\u8b49\u91d1 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> basePrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u689d\u4ef6\u55ae\u7684\u57fa\u790e\u50f9\u683c "))))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request GET 'https://api-testnet.bybit.com/unified/v3/private/order/unfilled-orders?category=linear' \\\n--header 'X-BAPI-SIGN: XXXXX' \\\n--header 'X-BAPI-API-KEY: {api key}' \\\n--header 'X-BAPI-TIMESTAMP: 1657871228347' \\\n--header 'X-BAPI-RECV-WINDOW: 5000' \\\n--header 'Content-Type: application/json' \\\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n        "nextPageCursor": "135ccc0d-8136-4e1b-8af3-07b11ee158d1%3A1665565610526%2C135ccc0d-8136-4e1b-8af3-07b11ee158d1%3A1665565610526",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "ETHUSDT",\n                "orderType": "Limit",\n                "orderLinkId": "test0000005",\n                "orderId": "135ccc0d-8136-4e1b-8af3-07b11ee158d1",\n                "stopOrderType": "UNKNOWN",\n                "orderStatus": "New",\n                "takeProfit": "",\n                "cumExecValue": "0.00000000",\n                "blockTradeId": "",\n                "price": "700.00000000",\n                "createdTime": 1665565610526,\n                "tpTriggerBy": "UNKNOWN",\n                "timeInForce": "GoodTillCancel",\n                "basePrice": "",\n                "updatedTime": 1665565610533,\n                "side": "Buy",\n                "triggerPrice": "",\n                "cumExecFee": "0.00000000",\n                "slTriggerBy": "UNKNOWN",\n                "leavesQty": "0.1000",\n                "closeOnTrigger": false,\n                "cumExecQty": "0.00000000",\n                "reduceOnly": false,\n                "qty": "0.1000",\n                "stopLoss": "",\n                "triggerBy": "UNKNOWN",\n                "orderIM": "0.00000000"\n            }\n        ]\n    },\n    "retExtInfo": null,\n    "time": 1665565614320\n}\n')))))}c.isMDXComponent=!0}}]);
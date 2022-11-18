"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[732],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>p});var r=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function d(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,r,n=function(t,e){if(null==t)return{};var l,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var i=r.createContext({}),o=function(t){var e=r.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):d(d({},e),t)),l},s=function(t){var e=o(t.components);return r.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var l=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=o(l),p=n,m=c["".concat(i,".").concat(p)]||c[p]||k[p]||a;return l?r.createElement(m,d(d({ref:e},s),{},{components:l})):r.createElement(m,d({ref:e},s))}));function p(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=l.length,d=new Array(a);d[0]=c;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:n,d[1]=u;for(var o=2;o<a;o++)d[o]=l[o];return r.createElement.apply(null,d)}return r.createElement.apply(null,l)}c.displayName="MDXCreateElement"},85162:(t,e,l)=>{l.d(e,{Z:()=>d});var r=l(67294),n=l(86010);const a="tabItem_Ymn6";function d(t){let{children:e,hidden:l,className:d}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(a,d),hidden:l},e)}},65488:(t,e,l)=>{l.d(e,{Z:()=>p});var r=l(87462),n=l(67294),a=l(86010),d=l(72389),u=l(67392),i=l(7094),o=l(12466);const s="tabList__CuJ",k="tabItem_LNqP";function c(t){var e;const{lazy:l,block:d,defaultValue:c,values:p,groupId:m,className:g}=t,f=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((t=>{let{props:{value:e,label:l,attributes:r}}=t;return{value:e,label:l,attributes:r}})),y=(0,u.l)(b,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==v&&!b.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,i.U)(),[O,T]=(0,n.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)();if(null!=m){const t=h[m];null!=t&&t!==O&&b.some((e=>e.value===t))&&T(t)}const x=t=>{const e=t.currentTarget,l=P.indexOf(e),r=b[l].value;r!==O&&(C(e),T(r),null!=m&&N(m,String(r)))},w=t=>{var e;let l=null;switch(t.key){case"ArrowRight":{const e=P.indexOf(t.currentTarget)+1;l=P[e]??P[0];break}case"ArrowLeft":{const e=P.indexOf(t.currentTarget)-1;l=P[e]??P[P.length-1];break}}null==(e=l)||e.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},g)},b.map((t=>{let{value:e,label:l,attributes:d}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:t=>P.push(t),onKeyDown:w,onFocus:x,onClick:x},d,{className:(0,a.Z)("tabs__item",k,null==d?void 0:d.className,{"tabs__item--active":O===e})}),l??e)}))),l?(0,n.cloneElement)(f.filter((t=>t.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==O})))))}function p(t){const e=(0,d.Z)();return n.createElement(c,(0,r.Z)({key:String(e)},t))}},19091:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>o,toc:()=>k});var r=l(87462),n=(l(67294),l(3905)),a=l(65488),d=l(85162);const u={title:"Get Order List",sidebar_label:"Get Order List"},i=void 0,o={unversionedId:"derivatives/trade/unified/order/order-list",id:"derivatives/trade/unified/order/order-list",title:"Get Order List",description:"Query order list.",source:"@site/docs/derivatives/trade/unified/order/order-list.mdx",sourceDirName:"derivatives/trade/unified/order",slug:"/derivatives/trade/unified/order/order-list",permalink:"/docs-v2/docs/derivatives/trade/unified/order/order-list",draft:!1,editUrl:"https://github.com/bybit-exchange/docs-v2/pulls/docs/derivatives/trade/unified/order/order-list.mdx",tags:[],version:"current",frontMatter:{title:"Get Order List",sidebar_label:"Get Order List"},sidebar:"derivatives",previous:{title:"Get Open Orders",permalink:"/docs-v2/docs/derivatives/trade/unified/order/open-order"},next:{title:"Batch Place Order",permalink:"/docs-v2/docs/derivatives/trade/unified/order/batch-place"}},s={},k=[{value:"HTTP Request",id:"http-request",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response Parameters",id:"response-parameters",level:4}],c={toc:k};function p(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Query order list.",(0,n.kt)("br",null),"\nAs order creation/cancellation is ",(0,n.kt)("strong",{parentName:"p"},"asynchronous"),", the data returned from this endpoint may delay.")),(0,n.kt)("h4",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/order/list")),(0,n.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order id. Either ",(0,n.kt)("inlineCode",{parentName:"td"},"orderId")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"orderLinkId")," is required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order id. Either ",(0,n.kt)("inlineCode",{parentName:"td"},"orderId")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"orderLinkId")," is required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderStatus"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Return all status orders if not passed. You could pass multiple status, separated by comma")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderFilter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Order"),": active order, ",(0,n.kt)("inlineCode",{parentName:"td"},"StopOrder"),": conditional order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Page direction. ",(0,n.kt)("inlineCode",{parentName:"td"},"prev"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"next"),". default: ",(0,n.kt)("inlineCode",{parentName:"td"},"next"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"[1,50]",". default: ",(0,n.kt)("inlineCode",{parentName:"td"},"20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,n.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"linear",label:"linear",default:!0,mdxType:"TabItem"},(0,n.kt)("table",{border:"0.5"},(0,n.kt)("tr",null,(0,n.kt)("th",null,"Parameter"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Comments")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"nextPageCursor"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cursor. Used to pagination")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"category"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Products category")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"list"),(0,n.kt)("td",null,"array"),(0,n.kt)("td",null,"Object")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> symbol"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Symbol name ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderType"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order type. `Market`,`Limit` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderLinkId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"User customised order id ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order id ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> stopOrderType"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Stop order type. `TakeProfit`,`StopLoss`,`TrailingStop`,`Stop` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderStatus"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order status ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> takeProfit"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Take profit price ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecValue"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed value ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> blockTradeId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Block trade id ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> rejectReason"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Reject reason ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> price"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order price ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> createdTime"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order created time ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> tpTriggerBy"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"The price type to trigger take profit. `MarkPrice`, `IndexPrice`, default:`LastPrice` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> timeInForce"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001044"},"Time in force"),". `GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, ",(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001051"},"`PostOnly`")," ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> basePrice"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Base price. `StopOrder` ONLY ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> leavesValue"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"The value of unfilled ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> updatedTime"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order updated time ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> side"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"`Buy`, `Sell` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> triggerPrice"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"TriggerPrice. `StopOrder` ONLY ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecFee"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed trading fee ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> slTriggerBy"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"The price type to trigger stop loss. `MarkPrice`, `IndexPrice`, default:`LastPrice`  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> leavesQty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Remaining qty pend to be filled ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> closeOnTrigger"),(0,n.kt)("td",null,"boolean"),(0,n.kt)("td",null,"is a closeOnTrigger order or not ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecQty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed qty ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> reduceOnly"),(0,n.kt)("td",null,"boolean"),(0,n.kt)("td",null,"is a reduceOnly order or not  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> qty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order quantity ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> stopLoss"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Stop loss price ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> triggerBy"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Trigger price type. `LastPrice`, `IndexPrice`, `MarkPrice` ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderIM"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order initial margin ")))),(0,n.kt)(d.Z,{value:"option",label:"option",mdxType:"TabItem"},(0,n.kt)("table",{border:"0.5"},(0,n.kt)("tr",null,(0,n.kt)("th",null,"Parameter"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Comments")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"nextPageCursor"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cursor. Used to pagination")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"category"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Products category")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"list"),(0,n.kt)("td",null,"array"),(0,n.kt)("td",null,"Object")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> symbol"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Symbol name ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderType"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order type. `Market`,`Limit`  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> updatedTime"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order updated time  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> side"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"`Buy`, `Sell`  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderLinkId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"User customised order id  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecFee"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed trading fee  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order id  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> leavesQty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Remaining qty pend to be filled  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderStatus"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order status  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> iv"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Implied volatility ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecValue"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed value  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> blockTradeId"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Block trade id  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> rejectReason"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Reject reason  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> cumExecQty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Cumulated executed qty  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> reduceOnly"),(0,n.kt)("td",null,"boolean"),(0,n.kt)("td",null,"is a reduceOnly order or not   ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> price"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order price  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> qty"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order quantity ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> createdTime"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order created time  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> timeInForce"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001044"},"Time in force"),". `GoodTillCancel`, `ImmediateOrCancel`, `FillOrKill`, ",(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001051"},"`PostOnly`"),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> orderIM"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Order initial margin  ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"> basePrice"),(0,n.kt)("td",null,"string"),(0,n.kt)("td",null,"Base price "))))))}p.isMDXComponent=!0}}]);
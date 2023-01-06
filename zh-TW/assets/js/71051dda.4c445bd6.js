"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8297],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=o(a),g=n,k=u["".concat(p,".").concat(g)]||u[g]||s[g]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:a,className:i}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>g});var r=a(87462),n=a(67294),l=a(86010),i=a(72389),d=a(67392),p=a(7094),o=a(12466);const m="tabList__CuJ",s="tabItem_LNqP";function u(t){var e;const{lazy:a,block:i,defaultValue:u,values:g,groupId:k,className:c}=t,N=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=g??N.map((t=>{let{props:{value:e,label:a,attributes:r}}=t;return{value:e,label:a,attributes:r}})),y=(0,d.l)(f,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(e=N.find((t=>t.props.default)))?void 0:e.props.value)??N[0].props.value;if(null!==b&&!f.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,p.U)(),[T,O]=(0,n.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=k){const t=v[k];null!=t&&t!==T&&f.some((e=>e.value===t))&&O(t)}const P=t=>{const e=t.currentTarget,a=C.indexOf(e),r=f[a].value;r!==T&&(x(e),O(r),null!=k&&h(k,String(r)))},E=t=>{var e;let a=null;switch(t.key){case"ArrowRight":{const e=C.indexOf(t.currentTarget)+1;a=C[e]??C[0];break}case"ArrowLeft":{const e=C.indexOf(t.currentTarget)-1;a=C[e]??C[C.length-1];break}}null==(e=a)||e.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},c)},f.map((t=>{let{value:e,label:a,attributes:i}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:t=>C.push(t),onKeyDown:E,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":T===e})}),a??e)}))),a?(0,n.cloneElement)(N.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function g(t){const e=(0,i.Z)();return n.createElement(u,(0,r.Z)({key:String(e)},t))}},75539:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),l=a(65488),i=a(85162);const d={title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_position:6,slug:"/derivatives/contract/order-list"},p=void 0,o={unversionedId:"v3/derivatives/rest-contract/order/order-list",id:"v3/derivatives/rest-contract/order/order-list",title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",description:"Query order list.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/order/order-list.mdx",sourceDirName:"v3/derivatives/rest-contract/order",slug:"/derivatives/contract/order-list",permalink:"/docs-v2/zh-TW/derivatives/contract/order-list",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_position:6,slug:"/derivatives/contract/order-list"},sidebar:"v3SideBar",previous:{title:"\u64a4\u92b7\u6240\u6709\u8a02\u55ae",permalink:"/docs-v2/zh-TW/derivatives/contract/cancel-all"},next:{title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",permalink:"/docs-v2/zh-TW/derivatives/contract/position-list"}},m={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u={toc:s};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Query order list.",(0,n.kt)("br",null),"\nAs order creation/cancellation is ",(0,n.kt)("strong",{parentName:"p"},"asynchronous"),", the data returned from this endpoint may delay.")),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/order/list")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,n.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,n.kt)("inlineCode",{parentName:"td"},"option"),". default: ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Base coin. ",(0,n.kt)("inlineCode",{parentName:"td"},"option")," ONLY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#orderStatus"},"orderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order status. Return all status orders if not passed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#orderFilter"},"orderFilter")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Order"),",",(0,n.kt)("inlineCode",{parentName:"td"},"StopOrder"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"50"),"]",". default: ",(0,n.kt)("inlineCode",{parentName:"td"},"20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order id.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order type. ",(0,n.kt)("inlineCode",{parentName:"td"},"Market"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Limit"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> iv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Implied volatility")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order quantity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Time in force")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"orderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#positionidx"},"positionIdx")),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Position index")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> lastPriceOnCreated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Last price when place the order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> createdTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order created timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order updated timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#canceltype"},"cancelType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cancel type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> rejectReason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Reject reason")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#stopordertype"},"stopOrderType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop order type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> triggerDirection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trigger direction. ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),": rise, ",(0,n.kt)("inlineCode",{parentName:"td"},"2"),": fall")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"triggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The trigger type of trigger price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trigger price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cumulative executed order value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecFee"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cumulative executed trading fee")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cumulative executed order qty")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> leavesValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The estimated value not executed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> leavesQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The remaining qty not executed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Take profit price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop loss price")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The price type to trigger take profit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The price type to trigger stop loss")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> reduceOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Reduce only. ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," means reduce position size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> closeOnTrigger"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Close on trigger. ",(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001050"},"What is a close on trigger order?"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> blockTradeId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Block trade Id. Unique field for ",(0,n.kt)("inlineCode",{parentName:"td"},"option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> placeType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Place type. ",(0,n.kt)("inlineCode",{parentName:"td"},"price"),",",(0,n.kt)("inlineCode",{parentName:"td"},"iv"),". Unique field for ",(0,n.kt)("inlineCode",{parentName:"td"},"option"))))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"console-option",label:"option",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /contract/v3/private/order/list?orderStatus=Filled&limit=1&category=option&baseCoin=ETH HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670577969789\nX-BAPI-RECV-WINDOW: 5000\n")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"js option",label:"option",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "result": {\n    "nextPageCursor": "41e45bf7-6788-4e89-b67c-8ee3a4a9dee2%3A1669614818279%2C41e45bf7-6788-4e89-b67c-8ee3a4a9dee2%3A1669614818279",\n    "category": "option",\n    "list": [\n{\n    "symbol": "ETH-29NOV22-1150-P",\n    "orderType": "Market",\n    "orderLinkId": "",\n    "orderId": "41e45bf7-6788-4e89-b67c-8ee3a4a9dee2",\n    "cancelType": "UNKNOWN",\n    "stopOrderType": "UNKNOWN",\n    "lastPriceOnCreated": "",\n    "orderStatus": "Filled",\n    "takeProfit": "",\n    "cumExecValue": "0.02",\n    "triggerDirection": "",\n    "blockTradeId": "",\n    "rejectReason": "",\n    "price": "0.2",\n    "createdTime": "1669614818279",\n    "tpTriggerBy": "",\n    "positionIdx": 0,\n    "timeInForce": "ImmediateOrCancel",\n    "leavesValue": "0",\n    "updatedTime": "1669614818300",\n    "side": "Sell",\n    "triggerPrice": "",\n    "cumExecFee": "0.0025",\n    "leavesQty": "0",\n    "slTriggerBy": "",\n    "iv": "",\n    "placeType": "price",\n    "closeOnTrigger": "",\n    "cumExecQty": "0.1",\n    "reduceOnly": false,\n    "qty": "0.1",\n    "stopLoss": "",\n    "triggerBy": ""\n}\n    ]\n},\n    "retCode": 0,\n    "retMsg": "Success."\n}\n')))))}g.isMDXComponent=!0}}]);
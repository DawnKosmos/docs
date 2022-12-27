"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(87462),n=r(67294),l=r(86010),i=r(72389),o=r(67392),p=r(7094),d=r(12466);const s="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:r,block:i,defaultValue:c,values:u,groupId:k,className:g}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=u??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,p.U)(),[T,P]=(0,n.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=k){const e=y[k];null!=e&&e!==T&&N.some((t=>t.value===e))&&P(e)}const I=e=>{const t=e.currentTarget,r=w.indexOf(t),a=N[r].value;a!==T&&(C(t),P(a),null!=k&&v(k,String(a)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]??w[w.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},g)},N.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function u(e){const t=(0,i.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}},81869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(65488),i=r(85162);const o={title:"Place Order",sidebar_label:"Place Order",sidebar_position:1,slug:"/derivatives/contract/place-order"},p=void 0,d={unversionedId:"v3/derivatives/rest-contract/order/place-order",id:"v3/derivatives/rest-contract/order/place-order",title:"Place Order",description:"- Market order: A traditional market order, which will be filled at the current optimal price. Only when the market",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/order/place-order.mdx",sourceDirName:"v3/derivatives/rest-contract/order",slug:"/derivatives/contract/place-order",permalink:"/docs-v2/zh-TW/derivatives/contract/place-order",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Place Order",sidebar_label:"Place Order",sidebar_position:1,slug:"/derivatives/contract/place-order"},sidebar:"v3SideBar",previous:{title:"Contract",permalink:"/docs-v2/zh-TW/category/contract"},next:{title:"Get Open Orders",permalink:"/docs-v2/zh-TW/derivatives/contract/open-order"}},s={},m=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001135"},"Market order")),": A traditional market order, which will be filled at the current optimal price. Only when the market\norder selected, the price could be ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),". To protect the market order from serious slippage, Bybit will convert the market\norder into a limit order with the buy order price higher than the optimal selling price, and the sell order price lower than\nthe optimal buying price. Both the limit price and the executed price can be queried through the user's transaction history interface.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Limit order"),": You can set an executed price for your order. When the market price touches the price you set, the system\nwill fill the order for you.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001138"},"Take profit / Stop loss")),": You can only set TP/SL while opening positions. Once you have held\npositions, the TP/SL linked when you submit active orders will not take effect. Besides, you could modify the position's TP/SL.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Order quantity"),": The quantity of perpetual contracts you are going to buy/sell. For the order quantity, Bybit only supports positive number at present.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Order price"),": Place a limit order, this parameter is ",(0,n.kt)("strong",{parentName:"p"},"required"),". If you don't have position, the long order price\nshould be higher than ",(0,n.kt)("em",{parentName:"p"},"10%")," of the market price and lower than 1 million. If you have position, the price should be higher than the ",(0,n.kt)("em",{parentName:"p"},"liquidation price"),".\nFor the minimum unit of the price change, please refer to the ",(0,n.kt)("inlineCode",{parentName:"p"},"priceFilter")," field in the ",(0,n.kt)("a",{parentName:"p",href:"../public/instrument-info#"},(0,n.kt)("em",{parentName:"a"},"instrumentInfo")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"orderLinkId"),": You can customize the active order ID. We can link this ID to the order ID in the system. Once the\nactive order is successfully created, we will send the unique order ID in the system to you. Then, you can use this order\nID to cancel active orders. Meanwhile, your customized order ID should be no longer than 36 characters and should be ",(0,n.kt)("strong",{parentName:"p"},"unique"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each account can hold a maximum of ",(0,n.kt)("em",{parentName:"p"},"500")," active orders simultaneously. This is contract-specific, so the following\nsituation is allowed: ",(0,n.kt)("em",{parentName:"p"},"The same account can hold 300 BTCUSD active orders and 280 ETHUSD active orders at the same time."),"\nWhen the upper limit of orders is reached, you can still place orders with parameters of ",(0,n.kt)("strong",{parentName:"p"},"reduceOnly")," or ",(0,n.kt)("strong",{parentName:"p"},"closeOnTrigger"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"option")," ",(0,n.kt)("strong",{parentName:"p"},"cannot")," place conditional order")))),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/order/create")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),"(default),",(0,n.kt)("inlineCode",{parentName:"td"},"inverse"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"side"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Market"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Limit"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order quantity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Read more about ",(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001044"},"Time in force"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order price. Invalid if ",(0,n.kt)("inlineCode",{parentName:"td"},"orderType"),"=",(0,n.kt)("em",{parentName:"td"},"Market"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"iv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Implied volatility. ",(0,n.kt)("inlineCode",{parentName:"td"},"option")," ONLY. Pass the real value, e.g., for 10%, 0.1 should be passed. It has a higher priority than ",(0,n.kt)("inlineCode",{parentName:"td"},"price"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mmp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Market maker protection. ",(0,n.kt)("inlineCode",{parentName:"td"},"option")," ONLY. ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," means this order is a market maker protection order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"triggerDirection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Conditional order param"),". Used to identify the expected direction of the conditional order. ",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"1"),": triggered when market price rises to ",(0,n.kt)("inlineCode",{parentName:"td"},"triggerPrice")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"2"),": triggered when market price falls to ",(0,n.kt)("inlineCode",{parentName:"td"},"triggerPrice")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Conditional order param"),". If you expect the price to rise to trigger your conditional order, make sure:",(0,n.kt)("br",null)," ",(0,n.kt)("em",{parentName:"td"},"triggerPrice > market price"),(0,n.kt)("br",null),"Else, ",(0,n.kt)("em",{parentName:"td"},"triggerPrice < market price"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"triggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Trigger price type. default:",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#positionidx"},"positionIdx")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Position index. It is ",(0,n.kt)("strong",{parentName:"td"},"required")," for hedge position mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order id. A max of 36 characters. Combinations of numbers, letters (upper and lower cases), dashes, and underscores are supported.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"rule of ",(0,n.kt)("inlineCode",{parentName:"em"},"future")),":",(0,n.kt)("br",null),(0,n.kt)("li",null,"optional param"),(0,n.kt)("li",null,"The same orderLinkId can be used for both USDC PERP and USDT PERP."),(0,n.kt)("li",null,"An orderLinkId can be reused once the original order is either ",(0,n.kt)("inlineCode",{parentName:"td"},"Filled")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"Cancelled")),(0,n.kt)("em",{parentName:"td"},"rule of ",(0,n.kt)("inlineCode",{parentName:"em"},"option")),":",(0,n.kt)("br",null),(0,n.kt)("li",null,"This param is ",(0,n.kt)("strong",{parentName:"td"},"required")),(0,n.kt)("li",null,"always unique"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Take profit price. only take effect upon opening the position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop loss price. only take effect upon opening the position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The price type to trigger take profit. default:",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The price type to trigger stop loss. default:",(0,n.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reduceOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001047"},"What is a reduce-only order?")," ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," means your position can only reduce in size if this order is triggered. ",(0,n.kt)("em",{parentName:"td"},"When reduce_only is true, take profit/stop loss cannot be set"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"closeOnTrigger"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001050"},"What is a close on trigger order?")," For a closing order. It can only reduce your position, not increase it. If the account has insufficient available balance when the closing order is triggered, then other active orders of similar contracts will be cancelled or reduced. It can be used to ensure your stop loss reduces your position regardless of current available margin.")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Order ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User customised order id")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/order/create HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670487164902\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json; charset=utf-8\n{\n    "category": "linear",\n    "symbol": "BTCPERP",\n    "side": "Buy",\n    "orderType": "Limit",\n    "qty": "0.05",\n    "price": "18500",\n    "timeInForce": "GoodTillCancel",\n    "positionIdx": null,\n    "triggerDirection": 1,\n    "triggerPrice": "19000"\n}\n'))),(0,n.kt)(i.Z,{value:"console-option",label:"option",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/order/create HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670487164902\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json; charset=utf-8\n{\n    "category": "option",\n    "symbol": "BTC-9DEC22-15500-C",\n    "side": "Buy",\n    "orderType": "Limit",\n    "qty": "0.01",\n    "price": "2800",\n    "iv": "700", //higher priority\n    "timeInForce": "FillOrKill",\n    "orderLinkId": "test-option-001"\n}\n')))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "orderId": "0cf62262-7dc2-4503-9566-8835c841509b",\n    "orderLinkId": ""\n},\n    "retExtInfo": {},\n    "time": 1670486764551\n}\n')))))}u.isMDXComponent=!0}}]);
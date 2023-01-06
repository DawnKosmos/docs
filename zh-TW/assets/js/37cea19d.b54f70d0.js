"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4010],{3905:(t,l,n)=>{n.d(l,{Zo:()=>o,kt:()=>p});var e=n(67294);function r(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function a(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function u(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?a(Object(n),!0).forEach((function(l){r(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function i(t,l){if(null==t)return{};var n,e,r=function(t,l){if(null==t)return{};var n,e,r={},a=Object.keys(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=e.createContext({}),d=function(t){var l=e.useContext(k),n=l;return t&&(n="function"==typeof t?t(l):u(u({},l),t)),n},o=function(t){var l=d(t.components);return e.createElement(k.Provider,{value:l},t.children)},s={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},m=e.forwardRef((function(t,l){var n=t.components,r=t.mdxType,a=t.originalType,k=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),m=d(n),p=r,c=m["".concat(k,".").concat(p)]||m[p]||s[p]||a;return n?e.createElement(c,u(u({ref:l},o),{},{components:n})):e.createElement(c,u({ref:l},o))}));function p(t,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var a=n.length,u=new Array(a);u[0]=m;var i={};for(var k in l)hasOwnProperty.call(l,k)&&(i[k]=l[k]);i.originalType=t,i.mdxType="string"==typeof t?t:r,u[1]=i;for(var d=2;d<a;d++)u[d]=n[d];return e.createElement.apply(null,u)}return e.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(t,l,n)=>{n.d(l,{Z:()=>u});var e=n(67294),r=n(86010);const a="tabItem_Ymn6";function u(t){let{children:l,hidden:n,className:u}=t;return e.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,u),hidden:n},l)}},65488:(t,l,n)=>{n.d(l,{Z:()=>p});var e=n(87462),r=n(67294),a=n(86010),u=n(72389),i=n(67392),k=n(7094),d=n(12466);const o="tabList__CuJ",s="tabItem_LNqP";function m(t){var l;const{lazy:n,block:u,defaultValue:m,values:p,groupId:c,className:g}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??b.map((t=>{let{props:{value:l,label:n,attributes:e}}=t;return{value:l,label:n,attributes:e}})),v=(0,i.l)(y,((t,l)=>t.value===l.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(l=b.find((t=>t.props.default)))?void 0:l.props.value)??b[0].props.value;if(null!==f&&!y.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:N}=(0,k.U)(),[h,O]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=c){const t=T[c];null!=t&&t!==h&&y.some((l=>l.value===t))&&O(t)}const P=t=>{const l=t.currentTarget,n=C.indexOf(l),e=y[n].value;e!==h&&(x(l),O(e),null!=c&&N(c,String(e)))},S=t=>{var l;let n=null;switch(t.key){case"ArrowRight":{const l=C.indexOf(t.currentTarget)+1;n=C[l]??C[0];break}case"ArrowLeft":{const l=C.indexOf(t.currentTarget)-1;n=C[l]??C[C.length-1];break}}null==(l=n)||l.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",o)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":u},g)},y.map((t=>{let{value:l,label:n,attributes:u}=t;return r.createElement("li",(0,e.Z)({role:"tab",tabIndex:h===l?0:-1,"aria-selected":h===l,key:l,ref:t=>C.push(t),onKeyDown:S,onFocus:P,onClick:P},u,{className:(0,a.Z)("tabs__item",s,null==u?void 0:u.className,{"tabs__item--active":h===l})}),n??l)}))),n?(0,r.cloneElement)(b.filter((t=>t.props.value===h))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,l)=>(0,r.cloneElement)(t,{key:l,hidden:t.props.value!==h})))))}function p(t){const l=(0,u.Z)();return r.createElement(m,(0,e.Z)({key:String(l)},t))}},94910:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>o,contentTitle:()=>k,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var e=n(87462),r=(n(67294),n(3905)),a=n(65488),u=n(85162);const i={title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_position:4.5},k=void 0,d={unversionedId:"v5/market/instrument",id:"v5/market/instrument",title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",description:"\u67e5\u8a62\u5168\u7ad9\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u57fa\u790e\u914d\u7f6e\u898f\u5247\u4fe1\u606f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/market/instrument.mdx",sourceDirName:"v5/market",slug:"/v5/market/instrument",permalink:"/docs-v2/zh-TW/v5/market/instrument",draft:!1,tags:[],version:"current",sidebarPosition:4.5,frontMatter:{title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_position:4.5},sidebar:"v5SideBar",previous:{title:"\u67e5\u8a62\u6ea2\u50f9\u6307\u6578\u50f9\u683cK\u7dda\u6578\u64da",permalink:"/docs-v2/zh-TW/v5/market/preimum-index-kline"},next:{title:"Order Book (\u6df1\u5ea6)",permalink:"/docs-v2/zh-TW/v5/market/orderbook"}},o={},s=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:s};function p(t){let{components:l,...n}=t;return(0,r.kt)("wrapper",(0,e.Z)({},m,n,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u67e5\u8a62\u5168\u7ad9\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u57fa\u790e\u914d\u7f6e\u898f\u5247\u4fe1\u606f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: USDT\u6c38\u7e8c / USDC\u6c38\u7e8c / \u53cd\u5411\u6c38\u7e8c / \u53cd\u5411\u4ea4\u5272 / \u671f\u6b0a"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u73fe\u8ca8\u4e0d\u652f\u6301\u7ffb\u9801\uff0c\u56e0\u6b64",(0,r.kt)("inlineCode",{parentName:"li"},"limit"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cusor"),"\u7121\u6548."),(0,r.kt)("li",{parentName:"ul"},"\u7576\u901a\u904e",(0,r.kt)("inlineCode",{parentName:"li"},"baseCoin"),"\u67e5\u8a62\u6642, \u4e0d\u7ba1category=",(0,r.kt)("inlineCode",{parentName:"li"},"linear"),"\u6216",(0,r.kt)("inlineCode",{parentName:"li"},"inverse"),", \u8fd4\u56de\u7d50\u679c\u4e2d\u90fd\u6703\u5305\u542b\u6b63\u5411\u5408\u7d04\u548c\u53cd\u5411\u5408\u7d04\u7684\u4ea4\u6613\u5c0d."))),(0,r.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/market/instruments-info")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"spot"),",",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u8ca8\u5e63. \u50c5\u5c0d\u671f\u8ca8/\u671f\u6b0a\u6709\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1000"),"]",". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"500"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e")))),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"future",label:"Linear|Inverse",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> contractType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u985e\u578b. `InversePerpetual`,`LinearPerpetual`,`InverseFutures`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> status"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u72c0\u614b ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> baseCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u6613\u5e63\u7a2e ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> quoteCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5831\u50f9\u5e63\u7a2e ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> launchTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u767c\u4f48\u6642\u9593 (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u5272\u6642\u9593 (ms). \u50c5\u5c0d\u4ea4\u5272\u5408\u7d04\u6709\u6548 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryFeeRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u5272\u8cbb\u7387. \u50c5\u5c0d\u4ea4\u5272\u5408\u7d04\u6709\u6548")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceScale"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u50f9\u683c\u7cbe\u5ea6 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leverageFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"\u69d3\u687f\u5c6c\u6027 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minLeverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u5c0f\u69d3\u687f ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxLeverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u5927\u69d3\u687f ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> leverageStep"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4fee\u6539\u69d3\u687f\u7684\u6b65\u9577 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"\u50f9\u683c\u5c6c\u6027 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u6700\u5c0f\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8a02\u55ae\u6700\u5927\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> tickSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4fee\u6539\u50f9\u683c\u7684\u6b65\u9577 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lotSizeFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"\u8a02\u55ae\u6578\u91cf\u5c6c\u6027 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5927\u4e0b\u55ae\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5c0f\u4e0b\u55ae\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> qtyStep"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4fee\u6539\u4e0b\u55ae\u91cf\u7684\u6b65\u9577 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> postOnlyMaxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"PostOnly\u55ae\u5141\u8a31\u7684\u6700\u5927\u4e0b\u55ae\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unifiedMarginTrade"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"\u662f\u5426\u652f\u6301\u7d71\u4e00\u4fdd\u8b49\u91d1\u4ea4\u6613 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingInterval"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u8cc7\u91d1\u8cbb\u7387\u7d50\u7b97\u9031\u671f (\u5206\u9418) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> settleCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7d50\u7b97\u5e63\u7a2e ")))),(0,r.kt)(u.Z,{value:"option",label:"Option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> optionsType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u671f\u6b0a\u985e\u578b. `Call`,`Put` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> status"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u72c0\u614b ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> baseCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u6613\u5e63\u7a2e ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> quoteCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5831\u50f9\u5e63\u7a2e ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> settleCoin"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"\u7d50\u7b97\u5e63\u7a2e ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> launchTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u767c\u4f48\u6642\u9593 (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u5272\u6642\u9593 (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryFeeRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u5272\u8cbb\u7387 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"\u50f9\u683c\u5c6c\u6027 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u5c0f\u8a02\u55ae\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u5927\u8a02\u55ae\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> tickSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4fee\u6539\u8a02\u55ae\u50f9\u683c\u7684\u6b65\u9577 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lotSizeFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"\u8a02\u55ae\u91cf\u5c6c\u6027 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5927\u4e0b\u55ae\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5c0f\u4e0b\u55ae\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> qtyStep"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4fee\u6539\u4e0b\u55ae\u91cf\u7684\u6b65\u9577 ")))),(0,r.kt)(u.Z,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> baseCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u6613\u5e63\u7a2e ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> quoteCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5831\u50f9\u5e63\u7a2e ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> innovation"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u662f\u5426\u5c6c\u65bc\u5275\u65b0\u5340\u4ea4\u6613\u5c0d. `0`: \u5426, `1`: \u662f ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> status"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u72c0\u614b ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lotSizeFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"\u6578\u91cf\u5c6c\u6027 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> basePrecision"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u6613\u5e63\u7a2e\u7cbe\u5ea6 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> quotePrecision"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5831\u50f9\u5e63\u7a2e\u7cbe\u5ea6 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5c0f\u4e0b\u55ae\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5927\u4e0b\u55ae\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderAmt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5c0f\u8a02\u55ae\u984d ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderAmt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5927\u8a02\u55ae\u984d ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null,"\u50f9\u683c\u5c6c\u6027 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> tickSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4fee\u6539\u8a02\u55ae\u7684\u6b65\u9577 "))))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"console-linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/instruments-info?category=linear&symbol=BTCUSDT HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(u.Z,{value:"console-option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/instruments-info?category=option&symbol=ETH-3JAN23-1250-P HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(u.Z,{value:"console-spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/instruments-info?category=spot&symbol=BTCUSDT HTTP/1.1\nHost: api-testnet.bybit.com\n")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "contractType": "LinearPerpetual",\n                "status": "Trading",\n                "baseCoin": "BTC",\n                "quoteCoin": "USDT",\n                "launchTime": "1585526400000",\n                "deliveryTime": "0",\n                "deliveryFeeRate": "",\n                "priceScale": "2",\n                "leverageFilter": {\n                    "minLeverage": "1",\n                    "maxLeverage": "100.00",\n                    "leverageStep": "0.01"\n                },\n                "priceFilter": {\n                    "minPrice": "0.50",\n                    "maxPrice": "999999.00",\n                    "tickSize": "0.50"\n                },\n                "lotSizeFilter": {\n                    "maxOrderQty": "100.000",\n                    "minOrderQty": "0.001",\n                    "qtyStep": "0.001",\n                    "postOnlyMaxOrderQty": "1000.000"\n                },\n                "unifiedMarginTrade": true,\n                "fundingInterval": 480,\n                "settleCoin": "USDT"\n            }\n        ],\n        "nextPageCursor": ""\n    },\n    "retExtInfo": {},\n    "time": 1672712495660\n}\n'))),(0,r.kt)(u.Z,{value:"js option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "option",\n        "nextPageCursor": "",\n        "list": [\n            {\n                "category": "option",\n                "symbol": "ETH-3JAN23-1250-P",\n                "status": "ONLINE",\n                "baseCoin": "ETH",\n                "quoteCoin": "USD",\n                "settleCoin": "USDC",\n                "optionsType": "Put",\n                "launchTime": "1672560000000",\n                "deliveryTime": "1672732800000",\n                "deliveryFeeRate": "0.00015",\n                "priceFilter": {\n                    "minPrice": "0.1",\n                    "maxPrice": "10000000",\n                    "tickSize": "0.1"\n                },\n                "lotSizeFilter": {\n                    "maxOrderQty": "1500",\n                    "minOrderQty": "0.1",\n                    "qtyStep": "0.1"\n                }\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672712537130\n}\n'))),(0,r.kt)(u.Z,{value:"js spot",label:"spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "spot",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "baseCoin": "BTC",\n                "quoteCoin": "USDT",\n                "innovation": "0",\n                "status": "1",\n                "lotSizeFilter": {\n                    "basePrecision": "0.000001",\n                    "quotePrecision": "0.00000001",\n                    "minOrderQty": "0.00004",\n                    "maxOrderQty": "63.01197227",\n                    "minOrderAmt": "1",\n                    "maxOrderAmt": "100000"\n                },\n                "priceFilter": {\n                    "tickSize": "0.01"\n                }\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672712468011\n}\n')))))}p.isMDXComponent=!0}}]);
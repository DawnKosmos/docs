"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7079],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),g=o(a),N=n,s=g["".concat(p,".").concat(N)]||g[N]||k[N]||l;return a?r.createElement(s,i(i({ref:e},m),{},{components:a})):r.createElement(s,i({ref:e},m))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:a,className:i}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),i=a(72389),d=a(67392),p=a(7094),o=a(12466);const m="tabList__CuJ",k="tabItem_LNqP";function g(t){var e;const{lazy:a,block:i,defaultValue:g,values:N,groupId:s,className:u}=t,c=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=N??c.map((t=>{let{props:{value:e,label:a,attributes:r}}=t;return{value:e,label:a,attributes:r}})),b=(0,d.l)(f,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===g?g:g??(null==(e=c.find((t=>t.props.default)))?void 0:e.props.value)??c[0].props.value;if(null!==y&&!f.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,p.U)(),[T,C]=(0,n.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:I}=(0,o.o5)();if(null!=s){const t=v[s];null!=t&&t!==T&&f.some((e=>e.value===t))&&C(t)}const E=t=>{const e=t.currentTarget,a=O.indexOf(e),r=f[a].value;r!==T&&(I(e),C(r),null!=s&&h(s,String(r)))},P=t=>{var e;let a=null;switch(t.key){case"ArrowRight":{const e=O.indexOf(t.currentTarget)+1;a=O[e]??O[0];break}case"ArrowLeft":{const e=O.indexOf(t.currentTarget)-1;a=O[e]??O[O.length-1];break}}null==(e=a)||e.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},u)},f.map((t=>{let{value:e,label:a,attributes:i}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:t=>O.push(t),onKeyDown:P,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":T===e})}),a??e)}))),a?(0,n.cloneElement)(c.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},c.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function N(t){const e=(0,i.Z)();return n.createElement(g,(0,r.Z)({key:String(e)},t))}},2562:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));a(65488),a(85162);const l={title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae (2\u5e74)",sidebar_position:6},i=void 0,d={unversionedId:"v5/order/order-list",id:"v5/order/order-list",title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",description:"\u7372\u53d6\u6b77\u53f2\u8a02\u55ae\u7d00\u9304. \u7531\u65bc\u8a02\u55ae\u5275\u5efa/\u64a4\u92b7\u662f\u7570\u6b65\u7684, \u8a72\u63a5\u53e3\u8fd4\u56de\u6578\u64da\u53ef\u80fd\u6703\u6709\u5ef6\u9072. \u82e5\u60a8\u60f3\u5be6\u6642\u7372\u53d6\u8a02\u55ae\u4fe1\u606f, \u60a8\u53ef\u4ee5\u67e5\u8a62\u8a72\u63a5\u53e3\u6216\u8005\u901a\u904ewebsocket\u63a8\u9001(\u63a8\u85a6)",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/order/order-list.mdx",sourceDirName:"v5/order",slug:"/v5/order/order-list",permalink:"/docs-v2/zh-TW/v5/order/order-list",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae (2\u5e74)",sidebar_position:6},sidebar:"v5SideBar",previous:{title:"\u64a4\u92b7\u6240\u6709\u8a02\u55ae",permalink:"/docs-v2/zh-TW/v5/order/cancel-all"},next:{title:"\u6279\u91cf\u5275\u5efa\u59d4\u8a17\u55ae",permalink:"/docs-v2/zh-TW/v5/order/batch-place"}},p={},o=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:o};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u7372\u53d6\u6b77\u53f2\u8a02\u55ae\u7d00\u9304. \u7531\u65bc\u8a02\u55ae\u5275\u5efa/\u64a4\u92b7\u662f",(0,n.kt)("strong",{parentName:"p"},"\u7570\u6b65"),"\u7684, \u8a72\u63a5\u53e3\u8fd4\u56de\u6578\u64da\u53ef\u80fd\u6703\u6709\u5ef6\u9072. \u82e5\u60a8\u60f3\u5be6\u6642\u7372\u53d6\u8a02\u55ae\u4fe1\u606f, \u60a8\u53ef\u4ee5\u67e5\u8a62\u8a72",(0,n.kt)("a",{parentName:"p",href:"open-order#"},"\u63a5\u53e3"),"\u6216\u8005\u901a\u904ewebsocket\u63a8\u9001(\u63a8\u85a6)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: \u73fe\u8ca8 (\u7d71\u4e00\u5e33\u6236) / \u6b63\u5411\u5408\u7d04 (\u7d71\u4e00\u5e33\u6236) / \u671f\u6b0a (\u7d71\u4e00\u5e33\u6236)"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"7\u5929\u5167\u7684\u8a02\u55ae: \u652f\u6301\u67e5\u8a62\u5168\u72c0\u614b"),(0,n.kt)("li",{parentName:"ul"},"7\u5929\u5916\u7684\u8a02\u55ae: \u53ef\u4ee5\u67e5\u8a62\u5230\u672a\u53d6\u6d88/\u88ab\u52d5\u53d6\u6d88/\u6709\u6210\u4ea4\u7684\u8a02\u55ae\u985e\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u901a\u904e\u6307\u5b9asymbol, baseCoin, orderId and orderLinkId\u5b57\u6bb5\u4f86\u67e5\u8a62\u3002\u5982\u679c\u60a8\u4f7f\u7528\u591a\u5b57\u6bb5\u7d44\u5408\uff0c\u7cfb\u7d71\u7684\u67e5\u8a62\u512a\u5148\u7d1a\u5982\u4e0b: orderId > orderLinkId > symbol > baseCoin."))),(0,n.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/v5/order/history")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"spot"),",",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,n.kt)("inlineCode",{parentName:"td"},"option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e63\u7a2e. \u50c5",(0,n.kt)("inlineCode",{parentName:"td"},"option"),"\u6709\u6548. \u82e5\u4e0d\u50b3\uff0c\u5247\u8fd4\u56de\u671f\u6b0a\u4e0b\u6240\u6709\u6d3b\u52d5\u59d4\u8a17\u55ae")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderFilter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Order"),": \u666e\u901a\u55ae, ",(0,n.kt)("inlineCode",{parentName:"td"},"StopOrder"),": \u689d\u4ef6\u55ae, ",(0,n.kt)("inlineCode",{parentName:"td"},"tpslOrder"),"(\u50c5\u671f\u8ca8\u6709\u6548): \u6b62\u76c8\u6b62\u640d\u55ae. \u9ed8\u8a8d: \u5168\u90e8\u985e\u578b\u8a02\u55ae")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"orderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u72c0\u614b\u3002\u4e0d\u50b3\u5247\u9ed8\u8a8d\u67e5\u8a62\u6240\u6709\u72c0\u614b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"50"),"]",". \u9ed8\u8a8d: ",(0,n.kt)("inlineCode",{parentName:"td"},"20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> blockTradeId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5927\u5b97\u4ea4\u6613\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65b9\u5411. ",(0,n.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> isLeverage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u501f\u8cb8. ",(0,n.kt)("em",{parentName:"td"},"\u50c5",(0,n.kt)("inlineCode",{parentName:"em"},"spot")),". ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),": \u5426, ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),": \u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#positionidx"},"positionIdx")),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u6a19\u8b58\u3002\u7528\u6236\u4e0d\u540c\u5009\u4f4d\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#orderstatus"},"orderStatus")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u72c0\u614b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#canceltype"},"cancelType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u88ab\u53d6\u6d88\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> rejectReason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62d2\u7d55\u539f\u56e0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> avgPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5e73\u5747\u6210\u4ea4\u50f9\u683c. \u82e5\u6c92\u6709\u6210\u4ea4\uff0c\u5247\u8fd4\u56de",(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> leavesQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> leavesValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u50f9\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u50f9\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> cumExecFee"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u7684\u624b\u7e8c\u8cbb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u57f7\u884c\u7b56\u7565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"Market"),",",(0,n.kt)("inlineCode",{parentName:"td"},"Limit"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#stopordertype"},"stopOrderType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u689d\u4ef6\u55ae\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> orderIv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u96b1\u542b\u6ce2\u52d5\u7387")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c. \u82e5",(0,n.kt)("inlineCode",{parentName:"td"},"stopOrderType"),"=",(0,n.kt)("em",{parentName:"td"},"TrailingStop"),", \u5247\u9019\u662f\u6fc0\u6d3b\u50f9\u683c. \u5426\u5247, \u5b83\u662f\u89f8\u767c\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u76c8\u7684\u50f9\u683c\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u640d\u7684\u50f9\u683c\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> triggerDirection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u65b9\u5411. ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),": \u4e0a\u6f32, ",(0,n.kt)("inlineCode",{parentName:"td"},"2"),": \u4e0b\u8dcc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"triggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c\u7684\u89f8\u767c\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> lastPriceOnCreated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0b\u55ae\u6642\u7684\u5e02\u5834\u50f9\u683c. \u50c5",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),"\u6709\u6548")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> reduceOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ea\u6e1b\u5009. ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),"\u8868\u660e\u9019\u662f\u53ea\u6e1b\u5009\u55ae")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> closeOnTrigger"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u5f8c\u5e73\u5009\u59d4\u8a17. ",(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001050"},"\u4ec0\u9ebc\u662f\u89f8\u767c\u5f8c\u5e73\u5009\u59d4\u8a17?"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> createdTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5275\u5efa\u8a02\u55ae\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u66f4\u65b0\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/order/history?category=linear&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672221263407\nX-BAPI-RECV-WINDOW: 5000\n")),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "nextPageCursor": "03234de9-1332-41eb-b805-4a9f42c136a3%3A1672220109387%2C03234de9-1332-41eb-b805-4a9f42c136a3%3A1672220109387",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "orderType": "Limit",\n                "orderLinkId": "test-001",\n                "orderId": "03234de9-1332-41eb-b805-4a9f42c136a3",\n                "cancelType": "CancelByUser",\n                "avgPrice": "0",\n                "stopOrderType": "UNKNOWN",\n                "lastPriceOnCreated": "16656.5",\n                "orderStatus": "Cancelled",\n                "takeProfit": "",\n                "cumExecValue": "0",\n                "triggerDirection": 0,\n                "blockTradeId": "",\n                "rejectReason": "EC_PerCancelRequest",\n                "isLeverage": "",\n                "price": "18000",\n                "orderIv": "",\n                "createdTime": "1672220109387",\n                "tpTriggerBy": "UNKNOWN",\n                "positionIdx": 0,\n                "timeInForce": "GoodTillCancel",\n                "leavesValue": "0",\n                "updatedTime": "1672220114123",\n                "side": "Sell",\n                "triggerPrice": "",\n                "cumExecFee": "0",\n                "slTriggerBy": "UNKNOWN",\n                "leavesQty": "0",\n                "closeOnTrigger": false,\n                "cumExecQty": "0",\n                "reduceOnly": false,\n                "qty": "0.1",\n                "stopLoss": "",\n                "triggerBy": "UNKNOWN"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672221263862\n}\n')))}k.isMDXComponent=!0}}]);
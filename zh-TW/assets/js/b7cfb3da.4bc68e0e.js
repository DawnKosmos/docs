"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9998],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,g=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),o=a(67392),p=a(7094),d=a(12466);const m="tabList__CuJ",s="tabItem_LNqP";function u(t){var e;const{lazy:a,block:i,defaultValue:u,values:k,groupId:g,className:N}=t,c=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=k??c.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),b=(0,o.l)(f,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(e=c.find((t=>t.props.default)))?void 0:e.props.value)??c[0].props.value;if(null!==y&&!f.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,p.U)(),[P,T]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=g){const t=v[g];null!=t&&t!==P&&f.some((e=>e.value===t))&&T(t)}const E=t=>{const e=t.currentTarget,a=C.indexOf(e),n=f[a].value;n!==P&&(O(e),T(n),null!=g&&h(g,String(n)))},w=t=>{var e;let a=null;switch(t.key){case"ArrowRight":{const e=C.indexOf(t.currentTarget)+1;a=C[e]??C[0];break}case"ArrowLeft":{const e=C.indexOf(t.currentTarget)-1;a=C[e]??C[C.length-1];break}}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},N)},f.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:t=>C.push(t),onKeyDown:w,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":P===e})}),a??e)}))),a?(0,r.cloneElement)(c.filter((t=>t.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},c.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==P})))))}function k(t){const e=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(e)},t))}},64416:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const l={title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",sidebar_label:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",sidebar_position:1},i=void 0,o={unversionedId:"v5/position/position",id:"v5/position/position",title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",description:"\u8a72\u63a5\u53e3\u53ef\u4ee5\u7372\u53d6\u7528\u6236\u7684\u6301\u5009\u4fe1\u606f\uff0c\u6bd4\u5982\u6301\u5009\u6578\u91cf\uff0c\u7d2f\u8a08\u76c8\u8667\u7b49",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/position/position.mdx",sourceDirName:"v5/position",slug:"/v5/position/",permalink:"/docs-v2/zh-TW/v5/position/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",sidebar_label:"\u67e5\u8a62\u6301\u5009 (\u5be6\u6642)",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"\u67e5\u8a62\u7528\u6236\u53ef\u7528\u984d\u5ea6 (\u73fe\u8ca8)",permalink:"/docs-v2/zh-TW/v5/order/spot-borrow-quota"},next:{title:"\u8a2d\u7f6e\u69d3\u687f",permalink:"/docs-v2/zh-TW/v5/position/leverage"}},p={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:d};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8a72\u63a5\u53e3\u53ef\u4ee5\u7372\u53d6\u7528\u6236\u7684\u6301\u5009\u4fe1\u606f\uff0c\u6bd4\u5982\u6301\u5009\u6578\u91cf\uff0c\u7d2f\u8a08\u76c8\u8667\u7b49"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: \u6b63\u5411\u5408\u7d04(\u7d71\u4e00\u5e33\u6236) / \u671f\u6b0a(\u7d71\u4e00\u5e33\u6236)"))),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/position/list")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../v5/enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31",(0,r.kt)("li",null,"\u82e5\u50b3\u4e86",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),", \u5247\u4e0d\u7ba1\u662f\u5426\u6709\u5009\u4f4d\u90fd\u8fd4\u56de\u8a72symbol\u6578\u64da"),(0,r.kt)("li",null,"\u82e5",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),"\u4e0d\u50b3, \u5247\u50c5\u8fd4\u56de\u6709\u5be6\u969b\u5009\u4f4d\u7684\u6578\u64da"),(0,r.kt)("li",null,"\u82e5category\u548csymbol\u4e0d\u5339\u914d, \u5247\u4e0d\u6703\u8fd4\u56de\u6709\u6548\u7684\u5009\u4f4d\u6578\u64da"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e63\u7a2e. \u50c5",(0,r.kt)("inlineCode",{parentName:"td"},"option"),". \u82e5\u4e0d\u50b3\uff0c\u5247\u8fd4\u56de\u671f\u6b0a\u4e0b\u6240\u6709\u6301\u5009")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"settleCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d50\u7b97\u5e63\u7a2e. \u5c0d\u65bc\u5408\u7d04\u800c\u8a00\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"settleCon"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b, \u82e5\u90fd\u50b3\uff0c\u5247",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),"\u6709\u66f4\u9ad8\u7684\u512a\u5148\u7d1a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[1,200]",". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"200"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"../v5/enum#positionidx"},"positionIdx")),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u6a19\u8b58\u7b26, \u7528\u4e8e\u5728\u4e0d\u540c\u4ed3\u4f4d\u6a21\u5f0f\u4e0b\u6807\u8bc6\u4ed3\u4f4d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> riskId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u98ce\u9669\u9650\u989dID\uff0c\u53c3\u898b",(0,r.kt)("a",{parentName:"td",href:"../v5/market/risk-limit#"},"\u98a8\u96aa\u9650\u984d"),"\u63a5\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> riskLimitValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u98a8\u96aa\u9650\u984dID\u5c0d\u61c9\u7684\u6301\u5009\u9650\u5236\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6301\u5009\u65b9\u5411\uff0cBuy\uff1a\u591a\u5934\uff1bSell\uff1a\u7a7a\u5934. \u6ce8\u610f\uff1a \u55ae\u5411\u6a21\u5f0f\u4e0b\uff0c\u672a\u6301\u5009\u6642\uff0c\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},"None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5009\u4f4d\u7684\u6578\u91cf\uff0c\u6309\u7167\u5408\u7d04\u5f35\u6578\u8a08\u7b97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> avgPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5009\u4f4d\u7684\u5e73\u5747\u5165\u5834\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ed3\u4f4d\u7684\u50f9\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> tradeMode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u6a21\u5f0f\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"0"),":\u5168\u5009\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u9010\u5009")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionStatus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> leverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5009\u4f4d\u7684\u69d3\u687f\uff0c",(0,r.kt)("strong",{parentName:"td"},"\u4ec5\u9002\u7528\u4e8e\u5408\u7ea6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> markPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"symbol \u7684\u6700\u65b0\u6a19\u8a18\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> liqPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u5f37\u5e73\u50f9\u683c\uff0c\u5728\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\u8fd4\u56de\u7684\u6578\u503c\u70ba\u9810\u4f30\u5f37\u5e73\u50f9\u683c\uff0c\u56e0\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u662f\u6309\u7167\u8cec\u6236\u4f86\u63a7\u5236\u98a8\u96aa\u7387\uff0c\u56e0\u6b64\u55ae\u500b\u5009\u4f4d\u4e0a\u7684\u7834\u7522\u50f9\u683c\u50c5\u70ba\u9810\u4f30\u8a08\u7b97\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> bustPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u7834\u7522\u50f9\u683c. \u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"td"},'""'),", \u7121\u5009\u4f4d\u7834\u7522\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u8d77\u59cb\u4fdd\u8b49\u91d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> positionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u7dad\u6301\u4fdd\u8b49\u91d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> tpslMode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u6b62\u640d\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"Full")," \uff1a\u5168\u90e8\u6b62\u76c8\u6b62\u640d\uff1b",(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"\uff1a\u90e8\u5206\u6b62\u76c8\u6b62\u640d\u3002\u50c5\u5c0d\u671f\u8ca8\u696d\u52d9\u6709\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> takeProfit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> stopLoss"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> trailingStop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ffd\u8e64\u6b62\u640d\uff08\u8207\u7576\u524d\u50f9\u683c\u7684\u8ddd\u96e2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> activePrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ffd\u8e64\u6b62\u640d\u89f8\u767c\u50f9\u683c. \u8ffd\u8e64\u6b62\u640d\u6703\u5728\u5e02\u5834\u50f9\u683c\u5230\u9054\u8a72\u50f9\u683c\u5f8c\u89f8\u767c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u7ed3\u76c8\u4e8f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d2f\u8ba1\u5df2\u7ed3\u76c8\u4e8f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> createdTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u5275\u5efa\u6642\u9593")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u6578\u64da\u66f4\u65b0\u6642\u9593")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/position/list?category=linear&symbol=XRPUSDT HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672280218882\nX-BAPI-RECV-WINDOW: 5000\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "nextPageCursor": "updateAt%3D1672279322668",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "XRPUSDT",\n                "leverage": "10",\n                "avgPrice": "0.3615",\n                "liqPrice": "0.0001",\n                "riskLimitValue": "200000",\n                "takeProfit": "",\n                "positionValue": "36.15",\n                "tpslMode": "Full",\n                "riskId": 41,\n                "trailingStop": "0",\n                "unrealisedPnl": "-1.83",\n                "markPrice": "0.3432",\n                "cumRealisedPnl": "0.48805876",\n                "positionMM": "0.381021",\n                "createdTime": "1672121182216",\n                "positionIdx": 0,\n                "positionIM": "3.634521",\n                "updatedTime": "1672279322668",\n                "side": "Buy",\n                "bustPrice": "",\n                "activePrice": "0",\n                "size": "100",\n                "positionStatus": "Normal",\n                "stopLoss": "",\n                "tradeMode": 0\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672280219169\n}\n')))}s.isMDXComponent=!0}}]);
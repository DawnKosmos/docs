"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6912],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>m});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},d=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=s(l),m=r,c=p["".concat(u,".").concat(m)]||p[m]||k[m]||a;return l?n.createElement(c,i(i({ref:e},d),{},{components:l})):n.createElement(c,i({ref:e},d))}));function m(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,i=new Array(a);i[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<a;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},85162:(t,e,l)=>{l.d(e,{Z:()=>i});var n=l(67294),r=l(86010);const a="tabItem_Ymn6";function i(t){let{children:e,hidden:l,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:l},e)}},65488:(t,e,l)=>{l.d(e,{Z:()=>m});var n=l(87462),r=l(67294),a=l(86010),i=l(72389),o=l(67392),u=l(7094),s=l(12466);const d="tabList__CuJ",k="tabItem_LNqP";function p(t){var e;const{lazy:l,block:i,defaultValue:p,values:m,groupId:c,className:g}=t,f=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((t=>{let{props:{value:e,label:l,attributes:n}}=t;return{value:e,label:l,attributes:n}})),v=(0,o.l)(b,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==y&&!b.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,u.U)(),[P,T]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=c){const t=h[c];null!=t&&t!==P&&b.some((e=>e.value===t))&&T(t)}const O=t=>{const e=t.currentTarget,l=C.indexOf(e),n=b[l].value;n!==P&&(x(e),T(n),null!=c&&N(c,String(n)))},E=t=>{var e;let l=null;switch(t.key){case"ArrowRight":{const e=C.indexOf(t.currentTarget)+1;l=C[e]??C[0];break}case"ArrowLeft":{const e=C.indexOf(t.currentTarget)-1;l=C[e]??C[C.length-1];break}}null==(e=l)||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},g)},b.map((t=>{let{value:e,label:l,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:t=>C.push(t),onKeyDown:E,onFocus:O,onClick:O},i,{className:(0,a.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":P===e})}),l??e)}))),l?(0,r.cloneElement)(f.filter((t=>t.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==P})))))}function m(t){const e=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(e)},t))}},88768:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>k});var n=l(87462),r=(l(67294),l(3905)),a=l(65488),i=l(85162);const o={title:"Get Position Info",sidebar_label:"Get Position Info",sidebar_position:1},u=void 0,s={unversionedId:"v5/position/position",id:"v5/position/position",title:"Get Position Info",description:"Query real-time position data, such as position size, accumulative realizedPNL.",source:"@site/docs/v5/position/position.mdx",sourceDirName:"v5/position",slug:"/v5/position/",permalink:"/docs-v2/v5/position/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Position Info",sidebar_label:"Get Position Info",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"Set Disconnect Cancel All",permalink:"/docs-v2/v5/order/dcp"},next:{title:"Set Leverage",permalink:"/docs-v2/v5/position/leverage"}},d={},k=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:k};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Query real-time position data, such as position size, accumulative realizedPNL."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"v5/position/list")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name",(0,r.kt)("li",null,"If ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol")," passed, it returns data regardless of having position or not."),(0,r.kt)("li",null,"If ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),"=null, it returns position size grater than zero."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Base coin. ",(0,r.kt)("inlineCode",{parentName:"td"},"option")," ONLY. Return all positions if not passed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"settleCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Settle coin. Either ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"settleCon")," is required, ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol")," has a higher priority")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,200]",". default: ",(0,r.kt)("inlineCode",{parentName:"td"},"20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linear",label:"linear",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cursor. Used to pagination")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Products category")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Leverage value ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Update time of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"`Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total value of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> takeProfit"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Take profit price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tpslMode"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Tp/SL mode. `Partial`, `Full` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> riskId"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Risk limit id ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> trailingStop"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Trailing stop (the distance from the current price) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> entryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Average entry price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unrealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Unrealised pnl ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> stopLoss"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Stop loss price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumRealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cumulative realised profit and loss ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionMM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position maintenance margin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Create time of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIdx"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Position idx, used to identify positions in different position modes",(0,r.kt)("li",null,"`0`: One-Way Mode"),(0,r.kt)("li",null,"`1`: Buy side of both side mode"),(0,r.kt)("li",null,"`2`: Sell side of both side mode")," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position initial margin ")))),(0,r.kt)(i.Z,{value:"option",label:"option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cursor. Used to pagination")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Products category")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Update time of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"`Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total value of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> entryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Average entry price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unrealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Unrealised pnl ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumRealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cumulative realised profit and loss ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionMM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position maintenance margin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Create time of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIdx"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Not Applicable ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position initial margin "))))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"")))))}m.isMDXComponent=!0}}]);
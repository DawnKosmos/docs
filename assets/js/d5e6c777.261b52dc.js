"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2708],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),s=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),p=s(n),c=r,m=p["".concat(o,".").concat(c)]||p[c]||k[c]||a;return n?l.createElement(m,i(i({ref:e},d),{},{components:n})):l.createElement(m,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(t,e,n)=>{n.d(e,{Z:()=>i});var l=n(67294),r=n(86010);const a="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},e)}},65488:(t,e,n)=>{n.d(e,{Z:()=>c});var l=n(87462),r=n(67294),a=n(86010),i=n(72389),u=n(67392),o=n(7094),s=n(12466);const d="tabList__CuJ",k="tabItem_LNqP";function p(t){var e;const{lazy:n,block:i,defaultValue:p,values:c,groupId:m,className:g}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=c??b.map((t=>{let{props:{value:e,label:n,attributes:l}}=t;return{value:e,label:n,attributes:l}})),v=(0,u.l)(y,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(e=b.find((t=>t.props.default)))?void 0:e.props.value)??b[0].props.value;if(null!==f&&!y.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:h}=(0,o.U)(),[N,C]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=m){const t=T[m];null!=t&&t!==N&&y.some((e=>e.value===t))&&C(t)}const P=t=>{const e=t.currentTarget,n=O.indexOf(e),l=y[n].value;l!==N&&(x(e),C(l),null!=m&&h(m,String(l)))},S=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{const e=O.indexOf(t.currentTarget)+1;n=O[e]??O[0];break}case"ArrowLeft":{const e=O.indexOf(t.currentTarget)-1;n=O[e]??O[O.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},g)},y.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:t=>O.push(t),onKeyDown:S,onFocus:P,onClick:P},i,{className:(0,a.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":N===e})}),n??e)}))),n?(0,r.cloneElement)(b.filter((t=>t.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==N})))))}function c(t){const e=(0,i.Z)();return r.createElement(p,(0,l.Z)({key:String(e)},t))}},16685:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>k});var l=n(87462),r=(n(67294),n(3905)),a=n(65488),i=n(85162);const u={title:"Instrument Info",sidebar_label:"Instrument Info",sidebar_position:7,slug:"/derivatives/public/instrument-info"},o=void 0,s={unversionedId:"v3/derivatives/rest-public/instrument-info",id:"v3/derivatives/rest-public/instrument-info",title:"Instrument Info",description:"Get launched instruments information.",source:"@site/docs/v3/derivatives/rest-public/instrument-info.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/instrument-info",permalink:"/docs-v2/derivatives/public/instrument-info",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Instrument Info",sidebar_label:"Instrument Info",sidebar_position:7,slug:"/derivatives/public/instrument-info"},sidebar:"v3SideBar",previous:{title:"Ticker Info",permalink:"/docs-v2/derivatives/public/ticker"},next:{title:"Public Trading History",permalink:"/docs-v2/derivatives/public/trade"}},d={},k=[{value:"HTTP Request",id:"http-request",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response Parameters",id:"response-parameters",level:4}],p={toc:k};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get launched instruments information."),(0,r.kt)("h4",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/instruments-info")),(0,r.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,r.kt)("inlineCode",{parentName:"td"},"option"),". default: ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", but in the response category shows ",(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name. ",(0,r.kt)("li",null,"query an option symbol, ",(0,r.kt)("inlineCode",{parentName:"td"},"category")," is ",(0,r.kt)("strong",{parentName:"td"},"required")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Base coin. ",(0,r.kt)("li",null,"Valid when ",(0,r.kt)("inlineCode",{parentName:"td"},"category"),"=option"),(0,r.kt)("li",null,"BTC by default if not passed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,1000]",". default: 500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,r.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"future",label:"future",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'Derivatives products category. Keeps empty string `""` when `category` is not passed')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> contractType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Contract type. `LinearPerpetual`, `InversePerpetual`, `InverseFutures`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> status"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol status ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> baseCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Base coin. e.g BTCUSDT, BTC is base coin")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> quoteCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Quote coin. e.g BTCUSD, USD is quote coin")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> launchTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The launch timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'The delivery timestamp (ms). "0" for perpetual ')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryFeeRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The delivery fee rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceScale"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Price scale")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leverageFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minLeverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Min. leverage ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxLeverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Max. leverage ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> leverageStep"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The min step to modify leverage ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Min. order price")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Max. order price")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> tickSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Tick size")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lotSizeFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Max. trade quantity per order ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Min. trade quantity per order ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> qtyStep"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Min. order quantity increment ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unifiedMarginTrade"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"Support unified margin trade or not ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The cursor used to pagination")))),(0,r.kt)(i.Z,{value:"option",label:"option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'Derivatives products category. Keeps empty string `""` when `category` is not passed')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Derivatives products category ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> status"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol status ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> baseCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Base coin. e.g BTC-17NOV22-16750-C, BTC is base coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> quoteCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Quote coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> settleCoin"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Settle coin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> optionsType"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Option type. `Call` or `Put` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> launchTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The launch timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The delivery timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryFeeRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The delivery fee rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> priceFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Min. order price")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Max. order price")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> tickSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Tick size")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lotSizeFilter"),(0,r.kt)("td",null,"Object"),(0,r.kt)("td",null," ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> maxOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Max. trade quantity per order ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> minOrderQty"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Min. trade quantity per order ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">> qtyStep"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Min. order quantity increment "))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Request Example")),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"console",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/instruments-info?symbol=BTCPERP&category=linear HTTP/1.1\nHost: api.bybit.com\n"))),(0,r.kt)(i.Z,{value:"console-option",label:"option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/instruments-info?symbol=BTC-30DEC22-19000-C&category=option HTTP/1.1\nHost: api.bybit.com\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response Example")),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js linear",label:"js linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "category": "linear",\n    "list": [\n        {\n            "symbol": "BTCPERP",\n            "contractType": "LinearPerpetual",\n            "status": "Trading",\n            "baseCoin": "BTC",\n            "quoteCoin": "USD",\n            "launchTime": "1610604231000",\n            "deliveryTime": "0",\n            "deliveryFeeRate": "",\n            "priceScale": "2",\n            "leverageFilter": {\n                "minLeverage": "1",\n                "maxLeverage": "125.00",\n                "leverageStep": "0.01"\n        },\n            "priceFilter": {\n                "minPrice": "0.50",\n                "maxPrice": "999999.00",\n                "tickSize": "0.50"\n        },\n            "lotSizeFilter": {\n                "maxTradingQty": "20.000",\n                "minTradingQty": "0.001",\n                "qtyStep": "0.001",\n                "postOnlyMaxOrderQty": "100.000",\n                "maxOrderQty": "20.000",\n                "minOrderQty": "0.001"\n        },\n            "unifiedMarginTrade": true,\n            "fundingInterval": 480,\n            "settleCoin": "USDC"\n        }\n    ],\n    "nextPageCursor": ""\n},\n    "retExtInfo": {},\n    "time": 1671969788515\n}\n'))),(0,r.kt)(i.Z,{value:"js option",label:"js option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "category": "option",\n        "nextPageCursor": "",\n        "list": [\n            {\n                "category": "option",\n                "symbol": "BTC-30DEC22-19000-C",\n                "status": "ONLINE",\n                "baseCoin": "BTC",\n                "quoteCoin": "USD",\n                "settleCoin": "USDC",\n                "optionsType": "Call",\n                "launchTime": "1657785600000",\n                "deliveryTime": "1672387200000",\n                "deliveryFeeRate": "0.00015",\n                "priceFilter": {\n                    "minPrice": "5",\n                    "maxPrice": "10000000",\n                    "tickSize": "5"\n                },\n                "lotSizeFilter": {\n                    "maxOrderQty": "10000",\n                    "minOrderQty": "0.01",\n                    "qtyStep": "0.01"\n                }\n            }\n    ]\n},\n    "retExtInfo": {},\n    "time": 1671969917171\n}\n')))))}c.isMDXComponent=!0}}]);
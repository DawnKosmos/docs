"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6529],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),s=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=s(n),m=r,c=k["".concat(u,".").concat(m)]||k[m]||p[m]||a;return n?l.createElement(c,i(i({ref:e},d),{},{components:n})):l.createElement(c,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85162:(t,e,n)=>{n.d(e,{Z:()=>i});var l=n(67294),r=n(86010);const a="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},e)}},65488:(t,e,n)=>{n.d(e,{Z:()=>m});var l=n(87462),r=n(67294),a=n(86010),i=n(72389),o=n(67392),u=n(7094),s=n(12466);const d="tabList__CuJ",p="tabItem_LNqP";function k(t){var e;const{lazy:n,block:i,defaultValue:k,values:m,groupId:c,className:g}=t,f=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((t=>{let{props:{value:e,label:n,attributes:l}}=t;return{value:e,label:n,attributes:l}})),b=(0,o.l)(v,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===k?k:k??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==y&&!v.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:P}=(0,u.U)(),[N,h]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=c){const t=T[c];null!=t&&t!==N&&v.some((e=>e.value===t))&&h(t)}const E=t=>{const e=t.currentTarget,n=C.indexOf(e),l=v[n].value;l!==N&&(x(e),h(l),null!=c&&P(c,String(l)))},I=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{const e=C.indexOf(t.currentTarget)+1;n=C[e]??C[0];break}case"ArrowLeft":{const e=C.indexOf(t.currentTarget)-1;n=C[e]??C[C.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},g)},v.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:t=>C.push(t),onKeyDown:I,onFocus:E,onClick:E},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===e})}),n??e)}))),n?(0,r.cloneElement)(f.filter((t=>t.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==N})))))}function m(t){const e=(0,i.Z)();return r.createElement(k,(0,l.Z)({key:String(e)},t))}},12426:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var l=n(87462),r=(n(67294),n(3905)),a=n(65488),i=n(85162);const o={title:"My Position",sidebar_label:"My Position",sidebar_position:1,slug:"/derivatives/unified/position-info"},u=void 0,s={unversionedId:"v3/derivatives/rest-unified/position/position-info",id:"v3/derivatives/rest-unified/position/position-info",title:"My Position",description:"Get real-time position data",source:"@site/docs/v3/derivatives/rest-unified/position/position-info.mdx",sourceDirName:"v3/derivatives/rest-unified/position",slug:"/derivatives/unified/position-info",permalink:"/docs-v2/derivatives/unified/position-info",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"My Position",sidebar_label:"My Position",sidebar_position:1,slug:"/derivatives/unified/position-info"},sidebar:"v3SideBar",previous:{title:"Get Order List",permalink:"/docs-v2/derivatives/unified/order-list"},next:{title:"Set Leverage",permalink:"/docs-v2/derivatives/unified/leverage"}},d={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],k={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get real-time position data"),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/position/list")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Base coin. ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"category"),"=option, then ",(0,r.kt)("strong",{parentName:"td"},"BTC")," records returned by default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Page direction. ",(0,r.kt)("inlineCode",{parentName:"td"},"prev"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"next"),". default: ",(0,r.kt)("inlineCode",{parentName:"td"},"next"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[1,50]",". default: ",(0,r.kt)("inlineCode",{parentName:"td"},"20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cursor. Used to pagination")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linear",label:"linear",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cursor. Used to pagination")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Products category")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> leverage"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Leverage value ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Update time of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"`Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total value of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> takeProfit"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Take profit price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tpslMode"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Tp/SL mode. `Partial`, `Full` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> riskId"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Risk limit id ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> trailingStop"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Trailing stop (the distance from the current price) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> entryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Average entry price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unrealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Unrealised pnl ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> stopLoss"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Stop loss price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumRealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cumulative realised profit and loss ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionMM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position maintenance margin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Created time ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIdx"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Position idx, used to identify positions in different position modes",(0,r.kt)("li",null,"`0`: One-Way Mode"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position initial margin ")))),(0,r.kt)(i.Z,{value:"option",label:"option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.5"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nextPageCursor"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cursor. Used to pagination")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Products category")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> updatedTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Update time of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> side"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"`Buy`, `Sell` ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total value of position ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> entryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Average entry price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> unrealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Unrealised pnl ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> cumRealisedPnl"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Cumulative realised profit and loss ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionMM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position maintenance margin ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> createdTime"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Created time")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIdx"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Not Applicable ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> positionIM"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Position initial margin "))))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"console-linear",label:"Console-linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/position/list?category=linear&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672018057230\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,r.kt)(i.Z,{value:"console-option",label:"Console-option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/position/list?category=option&baseCoin=ETH HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672018474913\nX-BAPI-RECV-WINDOW: 5000\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"json-linear",label:"linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n        "nextPageCursor": "BTCUSDT%3A1672017116959%2CBTCUSDT%3A1672017116959",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "leverage": "13",\n                "updatedTime": 1672017116959,\n                "side": "Buy",\n                "positionValue": "2225.00000000",\n                "takeProfit": "",\n                "tpslMode": "Partial",\n                "riskId": 2,\n                "trailingStop": "",\n                "entryPrice": "14833.33333333",\n                "unrealisedPnl": "299.95450000",\n                "markPrice": "16833.24000000",\n                "size": "0.1500",\n                "stopLoss": "",\n                "cumRealisedPnl": "-219.54555520",\n                "positionMM": "23.48231625",\n                "createdTime": 0,\n                "positionIdx": 0,\n                "positionIM": "172.38616925"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672018057694\n}\n'))),(0,r.kt)(i.Z,{value:"json-option",label:"option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n        "nextPageCursor": "ETH-30DEC22-700-C%3A1672018465372%2CETH-30DEC22-700-C%3A1672018465372",\n        "category": "option",\n        "list": [\n            {\n                "symbol": "ETH-30DEC22-700-C",\n                "updatedTime": 1672018465372,\n                "side": "Sell",\n                "positionValue": "49.80000000",\n                "entryPrice": "498.00000000",\n                "unrealisedPnl": "-2.02774092",\n                "markPrice": "518.27740924",\n                "size": "-0.1000",\n                "cumRealisedPnl": "0.00000000",\n                "positionMM": "55.72735692",\n                "createdTime": 1672018465365,\n                "positionIdx": 0,\n                "positionIM": "70.10719092"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672018475719\n}\n')))))}m.isMDXComponent=!0}}]);
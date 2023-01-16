"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2449],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,u=k["".concat(o,".").concat(N)]||k[N]||m[N]||l;return a?n.createElement(u,i(i({ref:e},s),{},{components:a})):n.createElement(u,i({ref:e},s))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},39047:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Modify Master API Key",sidebar_label:"Modify Master API Key",sidebar_position:6,slug:"/account-asset/modify-master-apikey"},i=void 0,p={unversionedId:"v3/account-asset/user/modify-master-apikey",id:"v3/account-asset/user/modify-master-apikey",title:"Modify Master API Key",description:"Modify the settings of master api key. Use the api key pending to be modified to call the endpoint. Use master user's api key ONLY.",source:"@site/docs/v3/account-asset/user/modify-master-apikey.mdx",sourceDirName:"v3/account-asset/user",slug:"/account-asset/modify-master-apikey",permalink:"/docs-v2/account-asset/modify-master-apikey",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Modify Master API Key",sidebar_label:"Modify Master API Key",sidebar_position:6,slug:"/account-asset/modify-master-apikey"},sidebar:"v3SideBar",previous:{title:"Get API Key Information",permalink:"/docs-v2/account-asset/apikey-info"},next:{title:"Modify Sub API Key",permalink:"/docs-v2/account-asset/modify-sub-apikey"}},o={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modify the settings of master api key. Use the api key pending to be modified to call the endpoint. Use ",(0,r.kt)("strong",{parentName:"p"},"master user's api key")," ONLY."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The API key must own one of permissions will be allowed to call the following API endpoint."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'master API key: "Account Transfer", "Subaccount Transfer", "Withdrawal"'))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Only the api key that calls this interface can be modified")),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/v3/private/update-api")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1aRead and Write. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1aRead only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ips"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the IP bind. example: ","[",(0,r.kt)("inlineCode",{parentName:"td"},'"192.168.0.1,192.168.0.2"'),"]",(0,r.kt)("b",null,"note:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"don't pass ips or pass with ",'["',(0,r.kt)("inlineCode",{parentName:"td"},"*"),'"]'," means no bind"),(0,r.kt)("li",null,"No ip bound api key will be ",(0,r.kt)("inlineCode",{parentName:"td"},"invalid after 90 days")),(0,r.kt)("li",null,"api key will be invalid after ",(0,r.kt)("inlineCode",{parentName:"td"},"7 days")," once the account password is changed")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"permissions"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Tick the types of permission.",(0,r.kt)("ul",null,(0,r.kt)("li",null," one of below types must be passed, otherwise the error is thrown")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ContractTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Contract Trade. ",(0,r.kt)("inlineCode",{parentName:"td"},'["Order","Position"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Spot"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Spot Trade. ",(0,r.kt)("inlineCode",{parentName:"td"},'["SpotTrade"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Wallet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet. ",(0,r.kt)("inlineCode",{parentName:"td"},'["AccountTransfer","SubMemberTransfer"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"USDC Contract. ",(0,r.kt)("inlineCode",{parentName:"td"},'["OptionsTrade"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Derivatives"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Derivatives v3. ",(0,r.kt)("inlineCode",{parentName:"td"},'["DerivativesTrade"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> CopyTrading"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Copytrade. ",(0,r.kt)("inlineCode",{parentName:"td"},'["CopyTrading"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> BlockTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Blocktrade. ",(0,r.kt)("inlineCode",{parentName:"td"},'["BlockTrade"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Exchange. ",(0,r.kt)("inlineCode",{parentName:"td"},'["ExchangeHistory"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> NFT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"NFT. ",(0,r.kt)("inlineCode",{parentName:"td"},'["NFTQueryProductList"]'))))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique id. Internal used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"note"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The remark")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"apiKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Api key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1aRead and Write. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1aRead only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Always ",(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"permissions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The types of permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ContractTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permisson of contract trade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Spot"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permisson of spot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Wallet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permisson of wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of USDC Contract. It supports trade option and usdc perpetual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Derivatives"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of derivatives")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> CopyTrading"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of copytrade. Not applicable to sub account, always ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> BlockTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of blocktrade. Not applicable to sub account, always ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of exchange")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> NFT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission of NFT. Not applicable to sub account, always ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ips"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"IP bound")))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /user/v3/private/update-api HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671179084116\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\nContent-Length: 741\n\n{\n    "readOnly": 0,\n    "ips": ["xxx.xxx.xxx.xx"],\n    "permissions": {\n            "ContractTrade": [\n                "Order",\n                "Position"\n            ],\n            "Spot": [\n                "SpotTrade"\n            ],\n            "Wallet": [\n                "AccountTransfer",\n                "SubMemberTransfer"\n            ],\n            "Options": [\n                "OptionsTrade"\n            ],\n            "Derivatives": [\n                "DerivativesTrade"\n            ],\n            "CopyTrading": [\n                "CopyTrading"\n            ],\n            "BlockTrade": ["BlockTrade"],\n            "Exchange": [\n                "ExchangeHistory"\n            ],\n            "NFT": ["NFTQueryProductList"]\n        }\n}\n')),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "id": "341509",\n        "note": "TESTING12SEP",\n        "apiKey": "xxxxxxxxxxxxx",\n        "readOnly": 0,\n        "secret": "",\n        "permissions": {\n            "ContractTrade": [\n                "Order",\n                "Position"\n            ],\n            "Spot": [\n                "SpotTrade"\n            ],\n            "Wallet": [\n                "AccountTransfer",\n                "SubMemberTransfer"\n            ],\n            "Options": [\n                "OptionsTrade"\n            ],\n            "Derivatives": [\n                "DerivativesTrade"\n            ],\n            "CopyTrading": [\n                "CopyTrading"\n            ],\n            "BlockTrade": [\n                "BlockTrade"\n            ],\n            "Exchange": [\n                "ExchangeHistory"\n            ],\n            "NFT": [\n                "NFTQueryProductList"\n            ]\n        },\n        "ips": [\n            "xxx.xxx.xxx.xxx"\n        ]\n    },\n    "retExtInfo": null,\n    "time": 1671179084363\n}\n')))}m.isMDXComponent=!0}}]);
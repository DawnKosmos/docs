"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5872],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(a),s=r,g=m["".concat(d,".").concat(s)]||m[s]||u[s]||l;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66024:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Get Wallet Balance",sidebar_label:"Get Wallet Balance",sidebar_position:1},i=void 0,o={unversionedId:"v5/account/wallet-balance",id:"v5/account/wallet-balance",title:"Get Wallet Balance",description:"Obtain wallet balance, query asset information of each currency, and account risk rate information under unified margin mode.",source:"@site/docs/v5/account/wallet-balance.mdx",sourceDirName:"v5/account",slug:"/v5/account/wallet-balance",permalink:"/docs/v5/account/wallet-balance",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Wallet Balance",sidebar_label:"Get Wallet Balance",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"Get Closed PnL",permalink:"/docs/v5/position/close-pnl"},next:{title:"Upgrade to Unified Account",permalink:"/docs/v5/account/upgrade-unified-account"}},d={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Obtain wallet balance, query asset information of each currency, and account risk rate information under unified margin mode.\nBy default, currency information with assets or liabilities of 0 is not returned."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/account/wallet-balance")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#accounttype"},"accountType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account type ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Unified account: ",(0,r.kt)("inlineCode",{parentName:"td"},"UNIFIED")),(0,r.kt)("li",null,"Normal account: ",(0,r.kt)("inlineCode",{parentName:"td"},"CONTRACT"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin name ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If not passed, it returns non-zero asset info"),(0,r.kt)("li",null,"You can pass multiple coins to query, separated by comma. ",(0,r.kt)("inlineCode",{parentName:"td"},"USDT,USDC"),". ")))))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountIMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Margin Rate: Account Total Initial Margin Base Coin / Account Margin Balance Base Coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountMMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance Margin Rate: Account Total Maintenance Margin Base Coin / Account Margin Balance Base Coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalEquity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Equity of account converted to usd\uff1aAccount Margin Balance Base Coin + Account Option Value Base Coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalWalletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet Balance of account converted to usd\uff1a\u2211 Asset Wallet Balance By USD value of each asset\u3002In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMarginBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Margin Balance of account converted to usd\uff1atotalWalletBalance + totalPerpUPL. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalAvailableBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available Balance of account converted to usd\uff1aRegular mode\uff1atotalMarginBalance - totalInitialMargin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalPerpUPL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unrealised P&L of perpetuals of account converted to usd\uff1a\u2211 Each perp upl by base coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalInitialMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Margin of account converted to usd\uff1a\u2211 Asset Total Initial Margin Base Coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMaintenanceMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance Margin of account converted to usd: \u2211 Asset Total Maintenance Margin Base Coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin name, such as BTC, ETH, USDT, USDC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> equity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Equity of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> usdValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"USD value of current coin. If this coin cannot be collateral, then it is ",(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> walletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet balance of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> borrowAmount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Borrow amount of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> availableToBorrow"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available amount to borrow of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> availableToWithdraw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available amount to withdraw of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> accruedInterest"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Accrued interest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalOrderIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Pre-occupied margin for order. For portfolio margin mode, it returns ""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Sum of initial margin of all positions + Pre-occupied liquidation fee. For portfolio margin mode, it returns ""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Sum of maintenance margin for all positions. For portfolio margin mode, it returns ""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unrealised P&L")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cumulative Realised P&L")))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/account/wallet-balance?accountType=UNIFIED&coin=BTC HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672125440406\nX-BAPI-RECV-WINDOW: 5000\n")),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "totalEquity": "18070.32797922",\n                "accountIMRate": "0.0101",\n                "totalMarginBalance": "18070.32797922",\n                "totalInitialMargin": "182.60183684",\n                "accountType": "UNIFIED",\n                "totalAvailableBalance": "17887.72614237",\n                "accountMMRate": "0",\n                "totalPerpUPL": "-0.11001349",\n                "totalWalletBalance": "18070.43799271",\n                "totalMaintenanceMargin": "0.38106773",\n                "coin": [\n                    {\n                        "availableToBorrow": "2.5",\n                        "accruedInterest": "0",\n                        "availableToWithdraw": "0.805994",\n                        "totalOrderIM": "0",\n                        "equity": "0.805994",\n                        "totalPositionMM": "0",\n                        "usdValue": "12920.95352538",\n                        "unrealisedPnl": "0",\n                        "borrowAmount": "0",\n                        "totalPositionIM": "0",\n                        "walletBalance": "0.805994",\n                        "cumRealisedPnl": "0",\n                        "coin": "BTC"\n                    }\n                ]\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672125441042\n}\n')))}u.isMDXComponent=!0}}]);
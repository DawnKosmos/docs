"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9083],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(d,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56191:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Wallet",sidebar_label:"Wallet",sidebar_position:4},i=void 0,o={unversionedId:"v5/websocket/private/wallet",id:"v5/websocket/private/wallet",title:"Wallet",description:"Subscribe to the wallet stream to see changes to your wallet in real-time.",source:"@site/docs/v5/websocket/private/wallet.mdx",sourceDirName:"v5/websocket/private",slug:"/v5/websocket/private/wallet",permalink:"/docs-v2/v5/websocket/private/wallet",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Wallet",sidebar_label:"Wallet",sidebar_position:4},sidebar:"v5SideBar",previous:{title:"Order",permalink:"/docs-v2/v5/websocket/private/order"},next:{title:"Greek",permalink:"/docs-v2/v5/websocket/private/greek"}},d={},p=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Response Example",id:"response-example",level:3}],c={toc:p};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subscribe to the wallet stream to see changes to your wallet in ",(0,r.kt)("strong",{parentName:"p"},"real-time"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"creationTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Data created timestamp (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account type. For now, ",(0,r.kt)("inlineCode",{parentName:"td"},"UNIFIED")," ONLY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountIMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Margin Rate: Account Total Initial Margin Base Coin / Account Margin Balance Base Coin. In non-unified mode, the field will be returned as an empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountMMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance Margin Rate: Account Total Maintenance Margin Base Coin / Account Margin Balance Base Coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalEquity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Equity of account converted to usd\uff1aAccount Margin Balance Base Coin + Account Option Value Base Coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalWalletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet Balance of account converted to usd\uff1a\u2211 Asset Wallet Balance By USD value of each asset. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMarginBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Margin Balance of account converted to usd\uff1atotalWalletBalance + totalPerpUPL. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalAvailableBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available Balance of account converted to usd\uff1aRegular mode\uff1atotalMarginBalance - totalInitialMargin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalPerpUPL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unrealised P&L of perpetuals of account converted to usd\uff1a\u2211 Each perp upl by base coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalInitialMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Margin of account converted to usd\uff1a\u2211 Asset Total Initial Margin Base Coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMaintenanceMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance Margin of account converted to usd: \u2211 Asset Total Maintenance Margin Base Coin. In non-unified mode, the field will be returned as an empty string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin name, such as BTC, ETH, USDT, USDC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> equity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Equity of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> usdValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"USD value of current coin. If this coin cannot be collateral, then it is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> walletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet balance of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> borrowAmount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Borrow amount of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> availableToBorrow"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available amount to borrow of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> availableToWithdraw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available amount to withdraw of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> accruedInterest"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Accrued interest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalOrderIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-occupied margin for order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum of initial margin of all positions + Pre-occupied liquidation fee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum of maintenance margin for all positions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unrealised P&L")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cumulative Realised P&L")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "5923242c464be9-25ca-483d-a743-c60101fc656f",\n    "topic": "wallet",\n    "creationTime": 1672364262482,\n    "data": [\n        {\n            "accountIMRate": "0.016",\n            "accountMMRate": "0.003",\n            "totalEquity": "12837.78330098",\n            "totalWalletBalance": "12840.4045924",\n            "totalMarginBalance": "12837.78330188",\n            "totalAvailableBalance": "12632.05767702",\n            "totalPerpUPL": "-2.62129051",\n            "totalInitialMargin": "205.72562486",\n            "totalMaintenanceMargin": "39.42876721",\n            "coin": [\n                {\n                    "coin": "USDC",\n                    "equity": "200.62572554",\n                    "usdValue": "200.62572554",\n                    "walletBalance": "201.34882644",\n                    "availableToWithdraw": "0",\n                    "availableToBorrow": "1500000",\n                    "borrowAmount": "0",\n                    "accruedInterest": "0",\n                    "totalOrderIM": "0",\n                    "totalPositionIM": "202.99874213",\n                    "totalPositionMM": "39.14289747",\n                    "unrealisedPnl": "74.2768991",\n                    "cumRealisedPnl": "-209.1544627"\n                },\n                {\n                    "coin": "BTC",\n                    "equity": "0.06488393",\n                    "usdValue": "1023.08402268",\n                    "walletBalance": "0.06488393",\n                    "availableToWithdraw": "0.06488393",\n                    "availableToBorrow": "2.5",\n                    "borrowAmount": "0",\n                    "accruedInterest": "0",\n                    "totalOrderIM": "0",\n                    "totalPositionIM": "0",\n                    "totalPositionMM": "0",\n                    "unrealisedPnl": "0",\n                    "cumRealisedPnl": "0"\n                },\n                {\n                    "coin": "ETH",\n                    "equity": "0",\n                    "usdValue": "0",\n                    "walletBalance": "0",\n                    "availableToWithdraw": "0",\n                    "availableToBorrow": "26",\n                    "borrowAmount": "0",\n                    "accruedInterest": "0",\n                    "totalOrderIM": "0",\n                    "totalPositionIM": "0",\n                    "totalPositionMM": "0",\n                    "unrealisedPnl": "0",\n                    "cumRealisedPnl": "0"\n                },\n                {\n                    "coin": "USDT",\n                    "equity": "11726.64664904",\n                    "usdValue": "11613.58597018",\n                    "walletBalance": "11728.54414904",\n                    "availableToWithdraw": "11723.92075829",\n                    "availableToBorrow": "2500000",\n                    "borrowAmount": "0",\n                    "accruedInterest": "0",\n                    "totalOrderIM": "0",\n                    "totalPositionIM": "2.72589075",\n                    "totalPositionMM": "0.28576575",\n                    "unrealisedPnl": "-1.8975",\n                    "cumRealisedPnl": "0.64782276"\n                },\n                {\n                    "coin": "EOS3L",\n                    "equity": "215.0570412",\n                    "usdValue": "0",\n                    "walletBalance": "215.0570412",\n                    "availableToWithdraw": "215.0570412",\n                    "availableToBorrow": "0",\n                    "borrowAmount": "0",\n                    "accruedInterest": "",\n                    "totalOrderIM": "0",\n                    "totalPositionIM": "0",\n                    "totalPositionMM": "0",\n                    "unrealisedPnl": "0",\n                    "cumRealisedPnl": "0"\n                },\n                {\n                    "coin": "BIT",\n                    "equity": "1.82",\n                    "usdValue": "0.48758257",\n                    "walletBalance": "1.82",\n                    "availableToWithdraw": "1.82",\n                    "availableToBorrow": "0",\n                    "borrowAmount": "0",\n                    "accruedInterest": "",\n                    "totalOrderIM": "0",\n                    "totalPositionIM": "0",\n                    "totalPositionMM": "0",\n                    "unrealisedPnl": "0",\n                    "cumRealisedPnl": "0"\n                }\n            ],\n            "accountType": "UNIFIED"\n        }\n    ]\n}\n')))}s.isMDXComponent=!0}}]);
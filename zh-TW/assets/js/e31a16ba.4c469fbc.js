"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8751],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(a),g=r,s=c["".concat(d,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(s,i(i({ref:e},u),{},{components:a})):n.createElement(s,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59277:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u7372\u53d6\u9322\u5305\u9918\u984d",sidebar_label:"\u67e5\u8a62\u9322\u5305\u9918\u984d",sidebar_position:1,slug:"/derivatives/unified/wallet"},i=void 0,o={unversionedId:"v3/derivatives/rest-unified/account/wallet-balance",id:"v3/derivatives/rest-unified/account/wallet-balance",title:"\u7372\u53d6\u9322\u5305\u9918\u984d",description:"\u7372\u53d6\u9322\u5305\u9918\u984d",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/account/wallet-balance.mdx",sourceDirName:"v3/derivatives/rest-unified/account",slug:"/derivatives/unified/wallet",permalink:"/docs-v2/zh-TW/derivatives/unified/wallet",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u7372\u53d6\u9322\u5305\u9918\u984d",sidebar_label:"\u67e5\u8a62\u9322\u5305\u9918\u984d",sidebar_position:1,slug:"/derivatives/unified/wallet"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u7d50\u7b97\u7d00\u9304 (USDC\u6c38\u7e8c)",permalink:"/docs-v2/zh-TW/derivatives/unified/settlement"},next:{title:"\u5347\u7d1a\u81f3\u7d71\u4e00\u4fdd\u8b49\u91d1\u5e33\u6236",permalink:"/docs-v2/zh-TW/derivatives/unified/upgrade"}},d={},p=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],u={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7372\u53d6\u9322\u5305\u9918\u984d"),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/account/wallet/balance")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u540d\u7a31. \u5141\u8a31\u50b3\u591a\u500b, \u7528\u9017\u865f\u9694\u958b. \u4f8b\u5982: BTC,ETH")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"accountIMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e33\u6236\u521d\u59cb\u4fdd\u8b49\u91d1\u7387: Account Total Initial Margin Base Coin / Account Margin Balance Base Coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"accountMMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e33\u6236\u7dad\u6301\u4fdd\u8b49\u91d1\u7387: Account Total Maintenance Margin Base Coin / Account Margin Balance Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"totalEquity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u8cc7\u7522\u6de8\u503c\uff1aAccount Margin Balance Base Coin + Account Option Value Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"totalWalletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u7522\u9322\u5305\u9918\u984d\uff1a\u2211 Asset Wallet Balance Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"totalMarginBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u4fdd\u8b49\u91d1\u9918\u984d\uff1aAccount Wallet Balance Base Coin + Account Perp UPL Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"totalAvailableBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u53ef\u7528\u9918\u984d\uff1aRM\uff1aAccount Margin Balance Base Coin - Account Initial Margin Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"totalPerpUPL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u6c38\u7e8c\u6d6e\u52d5\u76c8\u8667\uff1a\u2211 Asset Perp UPL Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"totalInitialMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u7e3d\u521d\u59cb\u4fdd\u8b49\u91d1\uff1a\u2211 Asset Total Initial Margin Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"totalMaintenanceMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u7e3d\u7dad\u6301\u4fdd\u8b49\u91d1: \u2211 Asset Total Maintenance Margin Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> currencyCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305\u5e63\u7a2e\u7684\u540d\u7a31\uff0c\u4f8b\u5982 BTC\uff0cETH\uff0cUSDT\uff0cUSDC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> availableToBorrow"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u501f\u8cb8\u984d\u5ea6\u3002\u53ea\u6709 USDC\uff0cUSDT \u6709\u3002 BTC \u548c ETH \u5247\u8fd4\u56de\u70ba 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> borrowSize"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u501f\u6578\u984d. \u53ea\u6709 USDC\uff0cUSDT \u6709\u3002 BTC \u548c ETH \u5247\u8fd4\u56de\u70ba 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> bonus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ad4\u9a57\u91d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accruedInterest"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67d0\u8cc7\u7522\u61c9\u8a08\u5229\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> availableBalanceWithoutConvert"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u9918\u984d. Margin Balance - Total Initial Margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalOrderIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u59d4\u8a17\u9810\u4f54\u7528\u4fdd\u8b49\u91d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> equity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u8cc7\u7522")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalPositionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u5009\u4f4d\u7dad\u6301\u4fdd\u8b49\u91d1\u6c42\u548c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> usdValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6298\u7b97\u6210 usd \u7684\u50f9\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> availableBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u9918\u984d\uff08\u5176\u9918\u8cc7\u7522\u53ef\u7528\u9918\u984d + \u8a72\u5e63\u7a2e\u5be6\u969b\u53ef\u7528\u9918\u984d\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u7d50\u76c8\u8667")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalPositionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u5009\u4f4d\u8d77\u59cb\u4fdd\u8b49\u91d1\u6c42\u548c + \u9810\u4f54\u7528\u5e73\u5009\u624b\u7e8c\u8cbb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> marginBalanceWithoutConvert"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u8b49\u91d1\u9918\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> walletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305\u9918\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d2f\u8a08\u5df2\u7d50\u76c8\u8667")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> marginBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u8b49\u91d1\u9918\u984d\uff08\u5176\u9918\u8cc7\u7522\u7684MB + \u8a72\u5e63\u7a2e\u4e0b\u5be6\u969b\u7684MB\uff09")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /unified/v3/private/account/wallet/balance?coin=ETH HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672021457498\nX-BAPI-RECV-WINDOW: 5000\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "Success",\n    "result": {\n        "totalEquity": "5952.13539158",\n        "accountIMRate": "0.1037",\n        "totalMarginBalance": "6003.96034690",\n        "totalInitialMargin": "622.37237856",\n        "totalAvailableBalance": "5381.58796835",\n        "accountMMRate": "0.0361",\n        "totalPerpUPL": "-733.16272882",\n        "totalWalletBalance": "6733.45726207",\n        "totalMaintenanceMargin": "216.49590186",\n        "coin": [\n        {\n            "currencyCoin": "ETH",\n            "availableToBorrow": "0.00000000",\n            "borrowSize": "0.00000000",\n            "bonus": "0.00000000",\n            "accruedInterest": "0.00000000",\n            "availableBalanceWithoutConvert": "0.00000000",\n            "totalOrderIM": "",\n            "equity": "0.00000000",\n            "totalPositionMM": "",\n            "usdValue": "0.00000000",\n            "availableBalance": "4.41128415",\n            "unrealisedPnl": "",\n            "totalPositionIM": "",\n            "marginBalanceWithoutConvert": "0.00000000",\n            "walletBalance": "0.00000000",\n            "cumRealisedPnl": "",\n            "marginBalance": "4.92144238"\n        }\n    ]\n},\n    "retExtInfo": {},\n    "time": 1672021457963\n}\n')))}m.isMDXComponent=!0}}]);
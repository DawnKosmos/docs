"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2503],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),g=r,u=s["".concat(p,".").concat(g)]||s[g]||c[g]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},50745:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u7372\u53d6\u9322\u5305\u9918\u984d",sidebar_label:"\u7372\u53d6\u9322\u5305\u9918\u984d",sidebar_position:1},i=void 0,o={unversionedId:"v5/account/wallet-balance",id:"v5/account/wallet-balance",title:"\u7372\u53d6\u9322\u5305\u9918\u984d",description:"\u7372\u53d6\u9322\u5305\u9918\u984d",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/v5/account/wallet-balance.mdx",sourceDirName:"v5/account",slug:"/v5/account/wallet-balance",permalink:"/docs-v2/zh/v5/account/wallet-balance",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u7372\u53d6\u9322\u5305\u9918\u984d",sidebar_label:"\u7372\u53d6\u9322\u5305\u9918\u984d",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"Get USDC Perpetual Settlement",permalink:"/docs-v2/zh/v5/position/settlement"},next:{title:"\u5347\u7d1a\u7d71\u4e00\u4fdd\u8b49\u91d1\u8cec\u6236",permalink:"/docs-v2/zh/v5/account/upgrade-unified-account"}},p={},d=[{value:"HTTP Request",id:"http-request",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response Parameters",id:"response-parameters",level:4}],m={toc:d};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7372\u53d6\u9322\u5305\u9918\u984d"),(0,r.kt)("h4",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/account/wallet-balance")),(0,r.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"accountType"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account type. ",(0,r.kt)("inlineCode",{parentName:"td"},"CONTRACT"),",",(0,r.kt)("inlineCode",{parentName:"td"},"SPOT"),",",(0,r.kt)("inlineCode",{parentName:"td"},"INVESTMENT")," - ByFi Account, ",(0,r.kt)("inlineCode",{parentName:"td"},"OPTION")," - USDC Account, ",(0,r.kt)("inlineCode",{parentName:"td"},"UNIFIED"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin name")))),(0,r.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"accountType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > accountIMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Margin Rate: Account Total Initial Margin Base Coin / Account Margin Balance Base Coin. \u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u6539\u5b57\u6bb5\u8fd4\u56de\u70ba\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > accountMMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance Margin Rate: Account Total Maintenance Margin Base Coin / Account Margin Balance Base Coin\u3002\u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u6539\u5b57\u6bb5\u8fd4\u56de\u70ba\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > totalEquity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u8cc7\u7522\u6de8\u503c\uff1aAccount Margin Balance Base Coin + Account Option Value Base Coin\u3002\u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u6539\u5b57\u6bb5\u8fd4\u56de\u70ba\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > totalWalletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u7522\u9322\u5305\u9918\u984d\uff1a\u2211 Asset Wallet Balance Base Coin\u3002\u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u6539\u5b57\u6bb5\u8fd4\u56de\u70ba\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > totalMarginBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u4fdd\u8b49\u91d1\u9918\u984d\uff1aAccount Wallet Balance Base Coin + Account Perp UPL Base Coin\u3002\u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u6539\u5b57\u6bb5\u8fd4\u56de\u70ba\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > totalAvailableBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u53ef\u7528\u9918\u984d\uff1aRM\uff1aAccount Margin Balance Base Coin - Account Initial Margin Base Coin\u3002\u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u6539\u5b57\u6bb5\u8fd4\u56de\u70ba\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > totalPerpUPL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u6c38\u7e8c\u6d6e\u52d5\u76c8\u8667\uff1a\u2211 Asset Perp UPL Base Coin\u3002\u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u6539\u5b57\u6bb5\u8fd4\u56de\u70ba\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > totalInitialMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u7e3d\u521d\u59cb\u4fdd\u8b49\u91d1\uff1a\u2211 Asset Total Initial Margin Base Coin\u3002\u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u6539\u5b57\u6bb5\u8fd4\u56de\u70ba\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > totalMaintenanceMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u7e3d\u7dad\u6301\u4fdd\u8b49\u91d1: \u2211 Asset Total Maintenance Margin Base Coin\u3002\u975e\u7d71\u4e00\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\uff0c\u6539\u5b57\u6bb5\u8fd4\u56de\u70ba\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list > coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"arrays"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305\u5e63\u7a2e\u7684\u540d\u7a31\uff0c\u4f8b\u5982 BTC\uff0cETH\uff0cUSDT\uff0cUSDC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > equity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u8cc7\u7522")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > usdValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6298\u7b97\u6210 usd \u7684\u50f9\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > walletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305\u9918\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > marginBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5176\u9918\u8cc7\u7522\u8ca2\u737b\u7684MB+\u7576\u524d\u8cc7\u7522\u771f\u5be6\u5269\u9918\u7684MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > availableBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5176\u9918\u8cc7\u7522\u8ca2\u737b\u7684AB+\u7576\u524d\u8cc7\u7522\u771f\u5be6\u5269\u9918\u7684AB\uff08\u4e0d\u80fd\u70ba\u8ca0\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > marginBalanceWithoutConvert"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u8b49\u91d1\u9918\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > availableBalanceWithoutConvert"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u9918\u984d, Margin Balance - Total Initial Margin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > borrowAmount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u7528\u501f\u8cb8\u984d\u5ea6\u3002\u53ea\u6709 USDC\uff0cUSDT \u6709\u3002 BTC \u548c ETH \u5247\u8fd4\u56de\u70ba 0\uff1b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > availableToBorrow"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u501f\u8cb8\u984d\u5ea6\u3002\u53ea\u6709 USDC\uff0cUSDT \u6709\u3002 BTC \u548c ETH \u5247\u8fd4\u56de\u70ba 0\uff1b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > accruedInterest"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67d0\u8cc7\u7522\u61c9\u8a08\u5229\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > totalOrderIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u59d4\u8a17\u9810\u4f54\u7528\u4fdd\u8b49\u91d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > totalPositionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u5009\u4f4d\u8d77\u59cb\u4fdd\u8b49\u91d1\u6c42\u548c + \u9810\u4f54\u7528\u5e73\u5009\u624b\u7e8c\u8cbb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > totalPositionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u5009\u4f4d\u7dad\u6301\u4fdd\u8b49\u91d1\u6c42\u548c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u7d50\u76c8\u8667")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d2f\u8a08\u5df2\u7d50\u76c8\u8667")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > givenCash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ad4\u9a57\u91d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin > serviceCash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u62b5\u6263\u91d1")))))}c.isMDXComponent=!0}}]);
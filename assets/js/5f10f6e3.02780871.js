"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>N});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=u(n),N=l,c=k["".concat(o,".").concat(N)]||k[N]||m[N]||a;return n?i.createElement(c,r(r({ref:t},d),{},{components:n})):i.createElement(c,r({ref:t},d))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},67362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var i=n(87462),l=(n(67294),n(3905));n(57670);const a={title:"Enums Definitions",sidebar_label:"Enums Definitions",slug:"/derivatives/enum"},r=void 0,p={unversionedId:"v3/derivatives/enum",id:"v3/derivatives/enum",title:"Enums Definitions",description:"category",source:"@site/docs/v3/derivatives/enum.mdx",sourceDirName:"v3/derivatives",slug:"/derivatives/enum",permalink:"/docs-v2/derivatives/enum",draft:!1,tags:[],version:"current",frontMatter:{title:"Enums Definitions",sidebar_label:"Enums Definitions",slug:"/derivatives/enum"},sidebar:"v3SideBar",previous:{title:"Wallet",permalink:"/docs-v2/derivatives/ws-contract/wallet"},next:{title:"Error Code",permalink:"/docs-v2/derivatives/error"}},o={},u=[{value:"category",id:"category",level:3},{value:"symbol",id:"symbol",level:3},{value:"positionIdx",id:"positionidx",level:3},{value:"triggerBy",id:"triggerby",level:3},{value:"timeInForce",id:"timeinforce",level:3},{value:"orderFilter",id:"orderfilter",level:3},{value:"orderStatus",id:"orderstatus",level:3},{value:"cancelType",id:"canceltype",level:3},{value:"stopOrderType",id:"stopordertype",level:3},{value:"positionMode",id:"positionmode",level:3},{value:"execType",id:"exectype",level:3},{value:"lastLiquidityInd",id:"lastliquidityind",level:3},{value:"walletFundType",id:"walletfundtype",level:3},{value:"type",id:"type",level:3},{value:"tickDirection",id:"tickdirection",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"category"},"category"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Contract")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"linear"),"\u2003","Linear Contract, including USDT Perpetual, USDC Perpetual"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"inverse"),"\u2003","Inverse Contract, including Inverse Perpetual, Inverse Future"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"option"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Unified Margin")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"linear"),"\u2003","Linear Contract, including USDT Perpetual, USDC Perpetual"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"option"))),(0,l.kt)("h3",{id:"symbol"},"symbol"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"USDT Perpetual"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ETHUSDT"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"USDC Perpetual"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCPERP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ETHPERP"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Inverse Perpetual"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ETHUSD"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Inverse Futures"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDH23"),"\u2003","H: First quarter; 23: 2023"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDM23"),"\u2003","M: Second quarter; 23: 2023"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDU23"),"\u2003","U: Third quarter; 23: 2023"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDZ23"),"\u2003","Z: Fourth quarter; 23: 2023")),(0,l.kt)("h3",{id:"positionidx"},"positionIdx"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\u2003","one-way mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","Buy side of hedge-mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","Sell side of hedge-mode")),(0,l.kt)("h3",{id:"triggerby"},"triggerBy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LastPrice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MarkPrice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IndexPrice"))),(0,l.kt)("h3",{id:"timeinforce"},"timeInForce"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GoodTillCancel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ImmediateOrCancel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FillOrKlii")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001051"},"PostOnly"))),(0,l.kt)("h3",{id:"orderfilter"},"orderFilter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Order"),"\u2003","active order"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"StopOrder"),"\u2003","conditional order")),(0,l.kt)("h3",{id:"orderstatus"},"orderStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Created")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"New")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Rejected")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PartiallyFilled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Filled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PendingCancel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Cancelled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Untriggered")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Triggered")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Deactivated")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Active"))),(0,l.kt)("h3",{id:"canceltype"},"cancelType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByUser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByReduceOnly")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByPrepareLiq")," ",(0,l.kt)("inlineCode",{parentName:"li"},"CancelAllBeforeLiq")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByPrepareAdl")," ",(0,l.kt)("inlineCode",{parentName:"li"},"CancelAllBeforeAdl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByAdmin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByTpSlTsClear")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByPzSideCh"))),(0,l.kt)("h3",{id:"stopordertype"},"stopOrderType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TakeProfit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"StopLoss")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TrailingStop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Stop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PartialTakeProfit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PartialStopLoss"))),(0,l.kt)("h3",{id:"positionmode"},"positionMode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\u2003","One-Way Mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"3"),"\u2003","Hedge Mode")),(0,l.kt)("h3",{id:"exectype"},"execType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Trade")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AdlTrade"),"\u2003",(0,l.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001124"},"Auto-Deleveraging")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Funding"),"\u2003",(0,l.kt)("a",{href:"https://www.bybit.com/en-US/help-center/HelpCenterKnowledge/bybitHC_Article?id=000001123&language=en_US"},"Funding fee")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BustTrade"),"\u2003","Liquidation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Settle"))),(0,l.kt)("h3",{id:"lastliquidityind"},"lastLiquidityInd"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Unified Margin")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TAKER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MAKER"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Contract")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AddedLiquidity"),"\u2003","liquidity Maker"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RemovedLiquidity"),"\u2003","liquidity Taker")),(0,l.kt)("h3",{id:"walletfundtype"},"walletFundType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Deposit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Withdraw")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RealisedPNL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Commission")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Refund")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Prize")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExchangeOrderWithdraw")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExchangeOrderDeposit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReturnServiceCash"),"\u2003","Refund of handling fee bonus"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Insurance"),"\u2003","Insurance account transfer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SubMember"),"\u2003","Main-Sub account transfer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Coupon"),"\u2003","Coupon interest"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AccountTransfer"),"\u2003","Account transfer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CashBack"),"\u2003","Cash back")),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TRANSFER_IN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TRANSFER_OUT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TRADE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SETTLEMENT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DELIVERY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LIQUIDATION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BONUS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FEE_REFUND")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INTEREST")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CURRENCY_BUY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CURRENCY_SELL"))),(0,l.kt)("h3",{id:"tickdirection"},"tickDirection"),(0,l.kt)("p",null,"It indicates price fluctuation relative to the last trade."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PlusTick"),"\u2003","price rise"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZeroPlusTick"),"\u2003","trade occurs at the same price as the previous trade, which occurred at a price higher than that for the trade preceding it"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MinusTick"),"\u2003","price drop"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZeroMinusTick"),"\u2003","trade occurs at the same price as the previous trade, which occurred at a price lower than that for the trade preceding it")))}m.isMDXComponent=!0},57670:()=>{}}]);
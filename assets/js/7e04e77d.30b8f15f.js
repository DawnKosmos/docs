"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[32755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>N});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=u(n),N=l,s=k["".concat(o,".").concat(N)]||k[N]||m[N]||a;return n?i.createElement(s,r(r({ref:t},d),{},{components:n})):i.createElement(s,r({ref:t},d))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},89608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var i=n(87462),l=(n(67294),n(3905));const a={title:"Enums Definitions",sidebar_label:"Enums Definitions"},r=void 0,p={unversionedId:"v5/enum",id:"v5/enum",title:"Enums Definitions",description:"category",source:"@site/docs/v5/enum.mdx",sourceDirName:"v5",slug:"/v5/enum",permalink:"/docs/v5/enum",draft:!1,tags:[],version:"current",frontMatter:{title:"Enums Definitions",sidebar_label:"Enums Definitions"},sidebar:"v5SideBar",previous:{title:"Rate Limit",permalink:"/docs/v5/rate-limit"},next:{title:"Error Codes",permalink:"/docs/v5/error"}},o={},u=[{value:"category",id:"category",level:3},{value:"orderStatus",id:"orderstatus",level:3},{value:"timeInForce",id:"timeinforce",level:3},{value:"execType",id:"exectype",level:3},{value:"stopOrderType",id:"stopordertype",level:3},{value:"tickDirection",id:"tickdirection",level:3},{value:"interval",id:"interval",level:3},{value:"positionIdx",id:"positionidx",level:3},{value:"positionStatus",id:"positionstatus",level:3},{value:"rejectReason",id:"rejectreason",level:3},{value:"accountType",id:"accounttype",level:3},{value:"transferStatus",id:"transferstatus",level:3},{value:"depositStatus",id:"depositstatus",level:3},{value:"withdrawStatus",id:"withdrawstatus",level:3},{value:"triggerBy",id:"triggerby",level:3},{value:"cancelType",id:"canceltype",level:3},{value:"period",id:"period",level:3},{value:"contractType",id:"contracttype",level:3},{value:"status",id:"status",level:3},{value:"type",id:"type",level:3},{value:"unifiedMarginStatus",id:"unifiedmarginstatus",level:3},{value:"ltStatus",id:"ltstatus",level:3},{value:"symbol",id:"symbol",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"category"},"category"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"linear"),"\u2003","Linear contract, including USDT perp, USDC perp"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"inverse"),"\u2003","Inverse contract, including Inverse perp, Inverse future"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"option"))),(0,l.kt)("h3",{id:"orderstatus"},"orderStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Created"),"\u2003","order has been accepted by the system but not yet put through the matching engine"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"New"),"\u2003","order has been placed successfully"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Rejected")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PartiallyFilled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PartiallyFilledCanceled"),"\u2003","spot has this order status only"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Filled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Cancelled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Untriggered")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Triggered")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Deactivated")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Active"),"\u2003","order has been triggered and the new active order has been successfully placed. Is the final state of a successful conditional order")),(0,l.kt)("h3",{id:"timeinforce"},"timeInForce"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GTC"),"\u2003","GoodTillCancel"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IOC"),"\u2003","ImmediateOrCancel"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FOK"),"\u2003","FillOrKill"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001051"},"PostOnly"))),(0,l.kt)("h3",{id:"exectype"},"execType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Trade")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AdlTrade"),"\u2003",(0,l.kt)("a",{href:"https://www.bybit.com/en-US/help-center/bybitHC_Article?language=en_US&id=000001124"},"Auto-Deleveraging")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Funding"),"\u2003",(0,l.kt)("a",{href:"https://www.bybit.com/en-US/help-center/HelpCenterKnowledge/bybitHC_Article?id=000001123&language=en_US"},"Funding fee")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BustTrade"),"\u2003","Liquidation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Settle"))),(0,l.kt)("h3",{id:"stopordertype"},"stopOrderType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TakeProfit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"StopLoss")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TrailingStop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Stop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PartialTakeProfit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PartialStopLoss")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tpslOrder"),"\u2003","spot TP/SL order")),(0,l.kt)("h3",{id:"tickdirection"},"tickDirection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PlusTick"),"\u2003","price rise"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZeroPlusTick"),"\u2003","trade occurs at the same price as the previous trade, which occurred at a price higher than that for the trade preceding it"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MinusTick"),"\u2003","price drop"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZeroMinusTick"),"\u2003","trade occurs at the same price as the previous trade, which occurred at a price lower than that for the trade preceding it")),(0,l.kt)("h3",{id:"interval"},"interval"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," ",(0,l.kt)("inlineCode",{parentName:"li"},"3")," ",(0,l.kt)("inlineCode",{parentName:"li"},"5")," ",(0,l.kt)("inlineCode",{parentName:"li"},"15")," ",(0,l.kt)("inlineCode",{parentName:"li"},"30")," ",(0,l.kt)("inlineCode",{parentName:"li"},"60")," ",(0,l.kt)("inlineCode",{parentName:"li"},"120")," ",(0,l.kt)("inlineCode",{parentName:"li"},"240")," ",(0,l.kt)("inlineCode",{parentName:"li"},"360")," ",(0,l.kt)("inlineCode",{parentName:"li"},"720"),"\u2003","minute"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"D"),"\u2003","day"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"W"),"\u2003","week"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"M"),"\u2003","month")),(0,l.kt)("h3",{id:"positionidx"},"positionIdx"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\u2003","one-way mode position"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","Buy side of hedge-mode position"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","Sell side of hedge-mode position")),(0,l.kt)("h3",{id:"positionstatus"},"positionStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Normal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Liq"),"\u2003","in the liquidation progress"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Adl"),"\u2003","in the auto-deleverage progress")),(0,l.kt)("h3",{id:"rejectreason"},"rejectReason"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_NoError")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_Others")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_UnknownMessageType")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_MissingClOrdID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_MissingOrigClOrdID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_ClOrdIDOrigClOrdIDAreTheSame")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_DuplicatedClOrdID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_OrigClOrdIDDoesNotExist")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_TooLateToCancel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_UnknownOrderType")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_UnknownSide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_UnknownTimeInForce")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_WronglyRouted")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_MarketOrderPriceIsNotZero")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_LimitOrderInvalidPrice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_NoEnoughQtyToFill")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_NoImmediateQtyToFill")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_PerCancelRequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_MarketOrderCannotBePostOnly")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_PostOnlyWillTakeLiquidity")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_CancelReplaceOrder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EC_InvalidSymbolStatus"))),(0,l.kt)("h3",{id:"accounttype"},"accountType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CONTRACT"),"\u2003","Derivatives Account"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SPOT"),"\u2003","Spot Account"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INVESTMENT"),"\u2003","ByFi Account"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OPTION"),"\u2003","USDC Account"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UNIFIED"),"\u2003","UMA or UTA"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FUND"),"\u2003","Funding Account (Sub account is not supported temporarily)")),(0,l.kt)("h3",{id:"transferstatus"},"transferStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SUCCESS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PENDING")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FAILED"))),(0,l.kt)("h3",{id:"depositstatus"},"depositStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\u2003","unknown"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","toBeConfirmed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","processing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"3"),"\u2003","success"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"4"),"\u2003","deposit failed")),(0,l.kt)("h3",{id:"withdrawstatus"},"withdrawStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SecurityCheck")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Pending")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"success")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByUser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Reject")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Fail")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BlockchainConfirmed"))),(0,l.kt)("h3",{id:"triggerby"},"triggerBy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LastPrice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IndexPrice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MarkPrice"))),(0,l.kt)("h3",{id:"canceltype"},"cancelType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByUser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByReduceOnly")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByPrepareLiq")," ",(0,l.kt)("inlineCode",{parentName:"li"},"CancelAllBeforeLiq"),"\u2003","Cancelled due to liquidation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByPrepareAdl")," ",(0,l.kt)("inlineCode",{parentName:"li"},"CancelAllBeforeAdl"),"\u2003","Cancelled due to ADL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByAdmin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByTpSlTsClear")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CancelByPzSideCh"))),(0,l.kt)("h3",{id:"period"},"period"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BTC: ",(0,l.kt)("inlineCode",{parentName:"li"},"7"),",",(0,l.kt)("inlineCode",{parentName:"li"},"14"),",",(0,l.kt)("inlineCode",{parentName:"li"},"21"),",",(0,l.kt)("inlineCode",{parentName:"li"},"30"),",",(0,l.kt)("inlineCode",{parentName:"li"},"60"),",",(0,l.kt)("inlineCode",{parentName:"li"},"90"),",",(0,l.kt)("inlineCode",{parentName:"li"},"180"),",",(0,l.kt)("inlineCode",{parentName:"li"},"270"),"days"),(0,l.kt)("li",{parentName:"ul"},"ETH: ",(0,l.kt)("inlineCode",{parentName:"li"},"7"),",",(0,l.kt)("inlineCode",{parentName:"li"},"14"),",",(0,l.kt)("inlineCode",{parentName:"li"},"21"),",",(0,l.kt)("inlineCode",{parentName:"li"},"30"),",",(0,l.kt)("inlineCode",{parentName:"li"},"60"),",",(0,l.kt)("inlineCode",{parentName:"li"},"90"),",",(0,l.kt)("inlineCode",{parentName:"li"},"180"),",",(0,l.kt)("inlineCode",{parentName:"li"},"270"),"days"),(0,l.kt)("li",{parentName:"ul"},"SOL: ",(0,l.kt)("inlineCode",{parentName:"li"},"7"),",",(0,l.kt)("inlineCode",{parentName:"li"},"14"),",",(0,l.kt)("inlineCode",{parentName:"li"},"21"),",",(0,l.kt)("inlineCode",{parentName:"li"},"30"),",",(0,l.kt)("inlineCode",{parentName:"li"},"60"),",",(0,l.kt)("inlineCode",{parentName:"li"},"90"),"days")),(0,l.kt)("h3",{id:"contracttype"},"contractType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"InversePerpetual")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LinearPerpetual")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"InverseFutures"))),(0,l.kt)("h3",{id:"status"},"status"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Pending"),"\u2003","waiting to be online (10 mins before online)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Trading")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Settling")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Closed"))),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TRANSFER_IN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TRANSFER_OUT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TRADE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SETTLEMENT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DELIVERY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LIQUIDATION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BONUS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FEE_REFUND")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INTEREST")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CURRENCY_BUY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CURRENCY_SELL"))),(0,l.kt)("h3",{id:"unifiedmarginstatus"},"unifiedMarginStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","Regular account"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","Unified margin account, it only trades linear perpetual and options."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"3"),"\u2003","Unified trade account, it can trade linear perpetual, options and spot")),(0,l.kt)("h3",{id:"ltstatus"},"ltStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","LT can be purchased and redeemed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","LT can be purchased, but not redeemed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"3"),"\u2003","LT can be redeemed, but not purchased"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"4"),"\u2003","LT cannot be purchased nor redeemed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"5"),"\u2003","Adjusting position")),(0,l.kt)("h3",{id:"symbol"},"symbol"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"USDT Perpetual"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ETHUSDT"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"USDC Perpetual"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCPERP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ETHPERP"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Inverse Perpetual"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ETHUSD"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Inverse Futures"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDH23"),"\u2003","H: First quarter; 23: 2023"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDM23"),"\u2003","M: Second quarter; 23: 2023"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDU23"),"\u2003","U: Third quarter; 23: 2023"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDZ23"),"\u2003","Z: Fourth quarter; 23: 2023")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Spot"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ETHUSDC"))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[47769],{32300:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var r=i(87462),a=(i(67294),i(3905)),s=i(26389),o=i(94891),p=i(74933),n=(i(47507),i(24310)),l=(i(63303),i(75035),i(85162));const d={id:"trading-stop",title:"Set Trading Stop",description:"Set trade stop.",sidebar_label:"Set Trading Stop",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Set trade stop.",operationId:"trading-stop",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},takeProfit:{type:"string",description:"Take profit price",example:null},stopLoss:{type:"string",description:"Stop loss price",example:null},tpSize:{type:"string",description:"Take profit size",example:null},slSize:{type:"string",description:"Stop loss size",example:null},tpTriggerBy:{type:"string",description:"Take profit trigger price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:"MarkPrice"},slTriggerBy:{type:"string",description:"Stop loss trigger price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:"MarkPrice"},trailingStop:{type:"string",description:"Trailing stop",example:null},activePrice:{type:"string",description:"Trailing stop trigger price",example:null},positionIdx:{type:"integer",description:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",enum:[0,1,2],example:0}},required:["symbol","positionIdx"]}}}},method:"post",path:"/contract/v3/private/position/trading-stop",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",takeProfit:null,stopLoss:null,tpSize:null,slSize:null,tpTriggerBy:"MarkPrice",slTriggerBy:"MarkPrice",trailingStop:null,activePrice:null,positionIdx:0},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Set Trading Stop",description:{content:"Set trade stop.",type:"text/plain"},url:{path:["contract","v3","private","position","trading-stop"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},c=void 0,m={unversionedId:"api-explorer/derivatives/trade/contract/trading-stop",id:"api-explorer/derivatives/trade/contract/trading-stop",title:"Set Trading Stop",description:"Set trade stop.",source:"@site/docs/api-explorer/derivatives/trade/contract/trading-stop.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/trading-stop",permalink:"/docs/api-explorer/derivatives/trade/contract/trading-stop",draft:!1,tags:[],version:"current",frontMatter:{id:"trading-stop",title:"Set Trading Stop",description:"Set trade stop.",sidebar_label:"Set Trading Stop",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Set trade stop.",operationId:"trading-stop",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},takeProfit:{type:"string",description:"Take profit price",example:null},stopLoss:{type:"string",description:"Stop loss price",example:null},tpSize:{type:"string",description:"Take profit size",example:null},slSize:{type:"string",description:"Stop loss size",example:null},tpTriggerBy:{type:"string",description:"Take profit trigger price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:"MarkPrice"},slTriggerBy:{type:"string",description:"Stop loss trigger price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:"MarkPrice"},trailingStop:{type:"string",description:"Trailing stop",example:null},activePrice:{type:"string",description:"Trailing stop trigger price",example:null},positionIdx:{type:"integer",description:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",enum:[0,1,2],example:0}},required:["symbol","positionIdx"]}}}},method:"post",path:"/contract/v3/private/position/trading-stop",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",takeProfit:null,stopLoss:null,tpSize:null,slSize:null,tpTriggerBy:"MarkPrice",slTriggerBy:"MarkPrice",trailingStop:null,activePrice:null,positionIdx:0},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Set Trading Stop",description:{content:"Set trade stop.",type:"text/plain"},url:{path:["contract","v3","private","position","trading-stop"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Set Leverage",permalink:"/docs/api-explorer/derivatives/trade/contract/leverage"},next:{title:"Set Risk Limit",permalink:"/docs/api-explorer/derivatives/trade/contract/set-risk-limit"}},u={},g=[{value:"Set Trading Stop",id:"set-trading-stop",level:2}],y={toc:g};function v(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"set-trading-stop"},"Set Trading Stop"),(0,a.kt)("p",null,"Set trade stop."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(n.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"takeProfit",required:!1,schemaDescription:"Take profit price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"stopLoss",required:!1,schemaDescription:"Stop loss price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"tpSize",required:!1,schemaDescription:"Take profit size",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"slSize",required:!1,schemaDescription:"Stop loss size",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"tpTriggerBy",required:!1,schemaDescription:"Take profit trigger price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"slTriggerBy",required:!1,schemaDescription:"Stop loss trigger price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"trailingStop",required:!1,schemaDescription:"Trailing stop",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"activePrice",required:!1,schemaDescription:"Trailing stop trigger price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"positionIdx",required:!0,schemaDescription:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`, `2`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}v.isMDXComponent=!0}}]);
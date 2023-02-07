"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[99889],{94011:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var r=i(87462),s=(i(67294),i(3905)),a=i(26389),o=i(94891),p=i(74933),n=(i(47507),i(24310)),l=(i(63303),i(75035),i(85162));const d={id:"trading-stop",title:"Set Trading Stop",description:"Set trade stop.",sidebar_label:"Set Trading Stop",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Set trade stop.",operationId:"trading-stop",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type",enum:["linear"],example:"linear"},symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},takeProfit:{type:"string",description:"Take profit price",example:"1600"},stopLoss:{type:"string",description:"Stop loss price",example:"1000"},tpSize:{type:"string",description:"Take profit size",example:null},slSize:{type:"string",description:"Stop loss size",example:null},tpTriggerBy:{type:"string",description:"Take profit trigger price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:"MarkPrice"},slTriggerBy:{type:"string",description:"Stop loss trigger price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:"MarkPrice"},trailingStop:{type:"string",description:"Trailing stop",example:null},activePrice:{type:"string",description:"Trailing stop trigger price",example:null},positionIdx:{type:"integer",description:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",enum:[0,1,2],example:0}},required:["category","symbol","positionIdx"]}}}},method:"post",path:"/v5/position/trading-stop",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"ETHUSDT",takeProfit:"1600",stopLoss:"1000",tpSize:null,slSize:null,tpTriggerBy:"MarkPrice",slTriggerBy:"MarkPrice",trailingStop:null,activePrice:null,positionIdx:0},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Set Trading Stop",description:{content:"Set trade stop.",type:"text/plain"},url:{path:["v5","position","trading-stop"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},c=void 0,m={unversionedId:"api-explorer/v5/position/trading-stop",id:"api-explorer/v5/position/trading-stop",title:"Set Trading Stop",description:"Set trade stop.",source:"@site/docs/api-explorer/v5/position/trading-stop.api.mdx",sourceDirName:"api-explorer/v5/position",slug:"/api-explorer/v5/position/trading-stop",permalink:"/docs/zh-TW/api-explorer/v5/position/trading-stop",draft:!1,tags:[],version:"current",frontMatter:{id:"trading-stop",title:"Set Trading Stop",description:"Set trade stop.",sidebar_label:"Set Trading Stop",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Set trade stop.",operationId:"trading-stop",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type",enum:["linear"],example:"linear"},symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},takeProfit:{type:"string",description:"Take profit price",example:"1600"},stopLoss:{type:"string",description:"Stop loss price",example:"1000"},tpSize:{type:"string",description:"Take profit size",example:null},slSize:{type:"string",description:"Stop loss size",example:null},tpTriggerBy:{type:"string",description:"Take profit trigger price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:"MarkPrice"},slTriggerBy:{type:"string",description:"Stop loss trigger price type",enum:["LastPrice","MarkPrice","IndexPrice"],example:"MarkPrice"},trailingStop:{type:"string",description:"Trailing stop",example:null},activePrice:{type:"string",description:"Trailing stop trigger price",example:null},positionIdx:{type:"integer",description:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",enum:[0,1,2],example:0}},required:["category","symbol","positionIdx"]}}}},method:"post",path:"/v5/position/trading-stop",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"ETHUSDT",takeProfit:"1600",stopLoss:"1000",tpSize:null,slSize:null,tpTriggerBy:"MarkPrice",slTriggerBy:"MarkPrice",trailingStop:null,activePrice:null,positionIdx:0},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Set Trading Stop",description:{content:"Set trade stop.",type:"text/plain"},url:{path:["v5","position","trading-stop"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Set Risk Limit",permalink:"/docs/zh-TW/api-explorer/v5/position/set-risk-limit"},next:{title:"Get Execution (half year)",permalink:"/docs/zh-TW/api-explorer/v5/position/execution"}},u={},g=[{value:"Set Trading Stop",id:"set-trading-stop",level:2}],y={toc:g};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"set-trading-stop"},"Set Trading Stop"),(0,s.kt)("p",null,"Set trade stop."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"takeProfit",required:!1,schemaDescription:"Take profit price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"stopLoss",required:!1,schemaDescription:"Stop loss price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"tpSize",required:!1,schemaDescription:"Take profit size",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"slSize",required:!1,schemaDescription:"Stop loss size",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"tpTriggerBy",required:!1,schemaDescription:"Take profit trigger price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"slTriggerBy",required:!1,schemaDescription:"Stop loss trigger price type",schemaName:"string",qualifierMessage:"**Possible values:** [`LastPrice`, `MarkPrice`, `IndexPrice`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"trailingStop",required:!1,schemaDescription:"Trailing stop",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"activePrice",required:!1,schemaDescription:"Trailing stop trigger price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"positionIdx",required:!0,schemaDescription:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`, `2`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);
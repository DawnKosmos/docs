"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6072],{5355:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>y});var s=t(87462),o=(t(67294),t(3905)),r=t(26389),a=t(94891),n=t(74933),p=(t(47507),t(24310)),l=(t(63303),t(75035),t(85162));const d={id:"set-risk-limit",title:"Set Risk Limit",description:"Set risk limit.",sidebar_label:"Set Risk Limit",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Set risk limit.",operationId:"set-risk-limit",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type",enum:["linear","inverse"],example:"linear"},symbol:{type:"string",description:"Symbol name",example:"BTCUSDT"},riskId:{type:"integer",description:"Risk limit id",example:2},positionIdx:{type:"integer",description:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",enum:[0,1,2],example:0}},required:["category","symbol","riskId","positionIdx"]}}}},method:"post",path:"/v5/position/set-risk-limit",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"BTCUSDT",riskId:2,positionIdx:0},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Set Risk Limit",description:{content:"Set risk limit.",type:"text/plain"},url:{path:["v5","position","set-risk-limit"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},m=void 0,c={unversionedId:"api-explorer/v5/position/set-risk-limit",id:"api-explorer/v5/position/set-risk-limit",title:"Set Risk Limit",description:"Set risk limit.",source:"@site/docs/api-explorer/v5/position/set-risk-limit.api.mdx",sourceDirName:"api-explorer/v5/position",slug:"/api-explorer/v5/position/set-risk-limit",permalink:"/docs-v2/api-explorer/v5/position/set-risk-limit",draft:!1,tags:[],version:"current",frontMatter:{id:"set-risk-limit",title:"Set Risk Limit",description:"Set risk limit.",sidebar_label:"Set Risk Limit",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Set risk limit.",operationId:"set-risk-limit",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type",enum:["linear","inverse"],example:"linear"},symbol:{type:"string",description:"Symbol name",example:"BTCUSDT"},riskId:{type:"integer",description:"Risk limit id",example:2},positionIdx:{type:"integer",description:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",enum:[0,1,2],example:0}},required:["category","symbol","riskId","positionIdx"]}}}},method:"post",path:"/v5/position/set-risk-limit",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"BTCUSDT",riskId:2,positionIdx:0},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Set Risk Limit",description:{content:"Set risk limit.",type:"text/plain"},url:{path:["v5","position","set-risk-limit"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Set TP/SL Mode",permalink:"/docs-v2/api-explorer/v5/position/tpsl-mode"},next:{title:"Set Trading Stop",permalink:"/docs-v2/api-explorer/v5/position/trading-stop"}},u={},y=[{value:"Set Risk Limit",id:"set-risk-limit",level:2}],k={toc:y};function b(e){let{components:i,...t}=e;return(0,o.kt)("wrapper",(0,s.Z)({},k,t,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"set-risk-limit"},"Set Risk Limit"),(0,o.kt)("p",null,"Set risk limit."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Header Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)(a.Z,{mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`, `inverse`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"riskId",required:!0,schemaDescription:"Risk limit id",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"positionIdx",required:!0,schemaDescription:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`, `2`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(r.Z,{mdxType:"ApiTabs"},(0,o.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"successful operation")),(0,o.kt)("div",null)))))}b.isMDXComponent=!0}}]);
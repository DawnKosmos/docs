"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[601],{50616:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>y});var o=i(87462),s=(i(67294),i(3905)),a=i(26389),p=i(94891),l=i(74933),r=(i(47507),i(24310)),n=(i(63303),i(75035),i(85162));const d={id:"tpsl-mode",title:"Set TP/SL Mode",description:"Set tp/sl mode.",sidebar_label:"Set TP/SL Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Set tp/sl mode.",operationId:"tpsl-mode",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type",enum:["linear"],example:"linear"},symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},tpSlMode:{type:"string",description:"Full = full position TP/SL, Partial = partial mode tp/sl",enum:["Full","Partial"],example:"Full"}},required:["category","symbol","tpSlMode"]}}}},method:"post",path:"/v5/position/set-tpsl-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"ETHUSDT",tpSlMode:"Full"},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Set TP/SL Mode",description:{content:"Set tp/sl mode.",type:"text/plain"},url:{path:["v5","position","set-tpsl-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},m=void 0,c={unversionedId:"api-explorer/v5/position/tpsl-mode",id:"api-explorer/v5/position/tpsl-mode",title:"Set TP/SL Mode",description:"Set tp/sl mode.",source:"@site/docs/api-explorer/v5/position/tpsl-mode.api.mdx",sourceDirName:"api-explorer/v5/position",slug:"/api-explorer/v5/position/tpsl-mode",permalink:"/docs-v2/api-explorer/v5/position/tpsl-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"tpsl-mode",title:"Set TP/SL Mode",description:"Set tp/sl mode.",sidebar_label:"Set TP/SL Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Set tp/sl mode.",operationId:"tpsl-mode",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type",enum:["linear"],example:"linear"},symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},tpSlMode:{type:"string",description:"Full = full position TP/SL, Partial = partial mode tp/sl",enum:["Full","Partial"],example:"Full"}},required:["category","symbol","tpSlMode"]}}}},method:"post",path:"/v5/position/set-tpsl-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"ETHUSDT",tpSlMode:"Full"},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Set TP/SL Mode",description:{content:"Set tp/sl mode.",type:"text/plain"},url:{path:["v5","position","set-tpsl-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Set Leverage",permalink:"/docs-v2/api-explorer/v5/position/leverage"},next:{title:"Set Risk Limit",permalink:"/docs-v2/api-explorer/v5/position/set-risk-limit"}},u={},y=[{value:"Set TP/SL Mode",id:"set-tpsl-mode",level:2}],v={toc:y};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,o.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"set-tpsl-mode"},"Set TP/SL Mode"),(0,s.kt)("p",null,"Set tp/sl mode."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(p.Z,{mdxType:"MimeTabs"},(0,s.kt)(n.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(r.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"tpSlMode",required:!0,schemaDescription:"Full = full position TP/SL, Partial = partial mode tp/sl",schemaName:"string",qualifierMessage:"**Possible values:** [`Full`, `Partial`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);
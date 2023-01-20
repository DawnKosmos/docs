"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9122],{96426:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var a=i(87462),o=(i(67294),i(3905)),r=i(26389),s=i(94891),l=i(74933),p=(i(47507),i(24310)),n=(i(63303),i(75035),i(85162));const d={id:"tpsl-mode",title:"Switch TP/SL Mode",description:"Switch tp/sl mode.",sidebar_label:"Switch TP/SL Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Switch tp/sl mode.",operationId:"tpsl-mode",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},tpSlMode:{type:"string",description:"Full=full position TP/SL, Partial=partial mode tp/sl",enum:["Full","Partial"],example:"Full"}},required:["symbol","tpSlMode"]}}}},method:"post",path:"/contract/v3/private/position/switch-tpsl-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",tpSlMode:"Full"},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Switch TP/SL Mode",description:{content:"Switch tp/sl mode.",type:"text/plain"},url:{path:["contract","v3","private","position","switch-tpsl-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},c=void 0,m={unversionedId:"api-explorer/derivatives/trade/contract/tpsl-mode",id:"api-explorer/derivatives/trade/contract/tpsl-mode",title:"Switch TP/SL Mode",description:"Switch tp/sl mode.",source:"@site/docs/api-explorer/derivatives/trade/contract/tpsl-mode.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/tpsl-mode",permalink:"/docs-v2/api-explorer/derivatives/trade/contract/tpsl-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"tpsl-mode",title:"Switch TP/SL Mode",description:"Switch tp/sl mode.",sidebar_label:"Switch TP/SL Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Switch tp/sl mode.",operationId:"tpsl-mode",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},tpSlMode:{type:"string",description:"Full=full position TP/SL, Partial=partial mode tp/sl",enum:["Full","Partial"],example:"Full"}},required:["symbol","tpSlMode"]}}}},method:"post",path:"/contract/v3/private/position/switch-tpsl-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",tpSlMode:"Full"},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Switch TP/SL Mode",description:{content:"Switch tp/sl mode.",type:"text/plain"},url:{path:["contract","v3","private","position","switch-tpsl-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Switch Position Mode",permalink:"/docs-v2/api-explorer/derivatives/trade/contract/position-mode"},next:{title:"Set Leverage",permalink:"/docs-v2/api-explorer/derivatives/trade/contract/leverage"}},u={},v=[{value:"Switch TP/SL Mode",id:"switch-tpsl-mode",level:2}],y={toc:v};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"switch-tpsl-mode"},"Switch TP/SL Mode"),(0,o.kt)("p",null,"Switch tp/sl mode."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Header Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(l.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(l.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)(s.Z,{mdxType:"MimeTabs"},(0,o.kt)(n.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"tpSlMode",required:!0,schemaDescription:"Full=full position TP/SL, Partial=partial mode tp/sl",schemaName:"string",qualifierMessage:"**Possible values:** [`Full`, `Partial`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(r.Z,{mdxType:"ApiTabs"},(0,o.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"successful operation")),(0,o.kt)("div",null)))))}h.isMDXComponent=!0}}]);
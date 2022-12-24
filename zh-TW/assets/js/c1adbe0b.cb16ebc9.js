"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9122],{96426:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var a=i(87462),s=(i(67294),i(3905)),o=i(26389),r=i(94891),l=i(74933),n=(i(47507),i(24310)),p=(i(63303),i(75035),i(85162));const d={id:"tpsl-mode",title:"Switch TP/SL Mode",description:"Switch tp/sl mode. Please read [API-DOC](../../../../v3/derivatives/rest-contract/position/tpsl-mode#) first.",sidebar_label:"Switch TP/SL Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Switch tp/sl mode. Please read [API-DOC](../../../../v3/derivatives/rest-contract/position/tpsl-mode#) first.",operationId:"tpsl-mode",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},tpSlMode:{type:"string",description:"Full=full position TP/SL, Partial=partial mode tp/sl",enum:["Full","Partial"],example:"Full"}},required:["symbol","tpSlMode"]}}}},method:"post",path:"/contract/v3/private/position/switch-tpsl-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"string",tpSlMode:"Full"},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Switch TP/SL Mode",description:{content:"Switch tp/sl mode. Please read [API-DOC](../../../../v3/derivatives/rest-contract/position/tpsl-mode#) first.",type:"text/plain"},url:{path:["contract","v3","private","position","switch-tpsl-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},c=void 0,m={unversionedId:"api-explorer/derivatives/trade/contract/tpsl-mode",id:"api-explorer/derivatives/trade/contract/tpsl-mode",title:"Switch TP/SL Mode",description:"Switch tp/sl mode. Please read [API-DOC](../../../../v3/derivatives/rest-contract/position/tpsl-mode#) first.",source:"@site/docs/api-explorer/derivatives/trade/contract/tpsl-mode.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/tpsl-mode",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/tpsl-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"tpsl-mode",title:"Switch TP/SL Mode",description:"Switch tp/sl mode. Please read [API-DOC](../../../../v3/derivatives/rest-contract/position/tpsl-mode#) first.",sidebar_label:"Switch TP/SL Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Switch tp/sl mode. Please read [API-DOC](../../../../v3/derivatives/rest-contract/position/tpsl-mode#) first.",operationId:"tpsl-mode",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},tpSlMode:{type:"string",description:"Full=full position TP/SL, Partial=partial mode tp/sl",enum:["Full","Partial"],example:"Full"}},required:["symbol","tpSlMode"]}}}},method:"post",path:"/contract/v3/private/position/switch-tpsl-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"string",tpSlMode:"Full"},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Switch TP/SL Mode",description:{content:"Switch tp/sl mode. Please read [API-DOC](../../../../v3/derivatives/rest-contract/position/tpsl-mode#) first.",type:"text/plain"},url:{path:["contract","v3","private","position","switch-tpsl-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Switch Position Mode",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/position-mode"},next:{title:"Set Leverage",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/leverage"}},u={},v=[{value:"Switch TP/SL Mode",id:"switch-tpsl-mode",level:2}],h={toc:v};function y(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"switch-tpsl-mode"},"Switch TP/SL Mode"),(0,s.kt)("p",null,"Switch tp/sl mode. Please read ",(0,s.kt)("a",{parentName:"p",href:"../../../../v3/derivatives/rest-contract/position/tpsl-mode#"},"API-DOC")," first."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"tpSlMode",required:!0,schemaDescription:"Full=full position TP/SL, Partial=partial mode tp/sl",schemaName:"string",qualifierMessage:"**Possible values:** [`Full`, `Partial`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}y.isMDXComponent=!0}}]);
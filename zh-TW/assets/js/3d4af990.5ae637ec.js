"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6677],{20456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>y});var i=a(87462),o=(a(67294),a(3905)),r=a(26389),n=a(94891),s=a(74933),d=(a(47507),a(24310)),p=(a(63303),a(75035),a(85162));const l={id:"auto-margin",title:"Set Auto Add Margin",description:"Turn on/off auto add position margin.",sidebar_label:"Set Auto Add Margin",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Turn on/off auto add position margin.",operationId:"auto-margin",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},side:{type:"string",description:"Side",enum:["Buy","Sell"],example:"Buy"},autoAddMargin:{type:"integer",description:"Turn on / off. 0=off, 1=on",enum:[0,1],example:0},positionIdx:{type:"integer",description:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",enum:[0,1,2],example:0}},required:["symbol","side","autoAddMargin"]}}}},method:"post",path:"/contract/v3/private/position/set-auto-add-margin",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"string",side:"Buy",autoAddMargin:0,positionIdx:0},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Set Auto Add Margin",description:{content:"Turn on/off auto add position margin.",type:"text/plain"},url:{path:["contract","v3","private","position","set-auto-add-margin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},u=void 0,c={unversionedId:"api-explorer/derivatives/trade/contract/auto-margin",id:"api-explorer/derivatives/trade/contract/auto-margin",title:"Set Auto Add Margin",description:"Turn on/off auto add position margin.",source:"@site/docs/api-explorer/derivatives/trade/contract/auto-margin.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/auto-margin",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/auto-margin",draft:!1,tags:[],version:"current",frontMatter:{id:"auto-margin",title:"Set Auto Add Margin",description:"Turn on/off auto add position margin.",sidebar_label:"Set Auto Add Margin",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Turn on/off auto add position margin.",operationId:"auto-margin",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},side:{type:"string",description:"Side",enum:["Buy","Sell"],example:"Buy"},autoAddMargin:{type:"integer",description:"Turn on / off. 0=off, 1=on",enum:[0,1],example:0},positionIdx:{type:"integer",description:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",enum:[0,1,2],example:0}},required:["symbol","side","autoAddMargin"]}}}},method:"post",path:"/contract/v3/private/position/set-auto-add-margin",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"string",side:"Buy",autoAddMargin:0,positionIdx:0},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Set Auto Add Margin",description:{content:"Turn on/off auto add position margin.",type:"text/plain"},url:{path:["contract","v3","private","position","set-auto-add-margin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"My Position",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/position-info"},next:{title:"Switch Cross/Isolated Margin",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/cross-isolated-margin"}},m={},y=[{value:"Set Auto Add Margin",id:"set-auto-add-margin",level:2}],v={toc:y};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"set-auto-add-margin"},"Set Auto Add Margin"),(0,o.kt)("p",null,"Turn on/off auto add position margin."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Header Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)(n.Z,{mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"side",required:!0,schemaDescription:"Side",schemaName:"string",qualifierMessage:"**Possible values:** [`Buy`, `Sell`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"autoAddMargin",required:!0,schemaDescription:"Turn on / off. 0=off, 1=on",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"positionIdx",required:!1,schemaDescription:"Position index. 0=one-way-mode, 1=buy-hedge-mode, 2=sell-hedege-mode. <b>REQUIRED</b> for hedge-mode",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`, `2`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(r.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"successful operation")),(0,o.kt)("div",null)))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5209],{39461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>v,toc:()=>m});var r=a(87462),i=(a(67294),a(3905)),s=a(26389),o=a(94891),l=a(74933),n=(a(47507),a(24310)),p=(a(63303),a(75035),a(85162));const d={id:"leverage",title:"Set Leverage",description:"Set levearage.",sidebar_label:"Set Leverage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Set levearage.",operationId:"leverage",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},buyLeverage:{type:"string",description:"Buy side leverage",example:"10"},sellLeverage:{type:"string",description:"Sell side leverage",example:"8"}},required:["symbol","buyLevarge","sellLevarge"]}}}},method:"post",path:"/contract/v3/private/position/set-leverage",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",buyLeverage:"10",sellLeverage:"8"},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Set Leverage",description:{content:"Set levearage.",type:"text/plain"},url:{path:["contract","v3","private","position","set-leverage"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},c=void 0,v={unversionedId:"api-explorer/derivatives/trade/contract/leverage",id:"api-explorer/derivatives/trade/contract/leverage",title:"Set Leverage",description:"Set levearage.",source:"@site/docs/api-explorer/derivatives/trade/contract/leverage.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/leverage",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/leverage",draft:!1,tags:[],version:"current",frontMatter:{id:"leverage",title:"Set Leverage",description:"Set levearage.",sidebar_label:"Set Leverage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Set levearage.",operationId:"leverage",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},buyLeverage:{type:"string",description:"Buy side leverage",example:"10"},sellLeverage:{type:"string",description:"Sell side leverage",example:"8"}},required:["symbol","buyLevarge","sellLevarge"]}}}},method:"post",path:"/contract/v3/private/position/set-leverage",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",buyLeverage:"10",sellLeverage:"8"},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Set Leverage",description:{content:"Set levearage.",type:"text/plain"},url:{path:["contract","v3","private","position","set-leverage"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Switch TP/SL Mode",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/tpsl-mode"},next:{title:"Set Trading Stop",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/contract/trading-stop"}},u={},m=[{value:"Set Leverage",id:"set-leverage",level:2}],y={toc:m};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"set-leverage"},"Set Leverage"),(0,i.kt)("p",null,"Set levearage."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"buyLeverage",required:!1,schemaDescription:"Buy side leverage",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"sellLeverage",required:!1,schemaDescription:"Sell side leverage",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}g.isMDXComponent=!0}}]);
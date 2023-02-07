"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[68005],{3467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var r=a(87462),l=(a(67294),a(3905)),i=a(26389),n=a(94891),s=a(74933),o=(a(47507),a(24310)),c=(a(63303),a(75035),a(85162));const d={id:"cancel-all",title:"Cancel All Order",description:"Cancel all orders.",sidebar_label:"Cancel All Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Cancel all orders.",operationId:"cancel-all",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},baseCoin:{type:"string",description:"Cancel by base coin",example:null},settleCoin:{type:"string",description:"Cancel by settle coin",example:null}}}}}},method:"post",path:"/contract/v3/private/order/cancel-all",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",baseCoin:null,settleCoin:null},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Cancel All Order",description:{content:"Cancel all orders.",type:"text/plain"},url:{path:["contract","v3","private","order","cancel-all"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},p=void 0,u={unversionedId:"api-explorer/derivatives/trade/contract/cancel-all",id:"api-explorer/derivatives/trade/contract/cancel-all",title:"Cancel All Order",description:"Cancel all orders.",source:"@site/docs/api-explorer/derivatives/trade/contract/cancel-all.api.mdx",sourceDirName:"api-explorer/derivatives/trade/contract",slug:"/api-explorer/derivatives/trade/contract/cancel-all",permalink:"/docs/api-explorer/derivatives/trade/contract/cancel-all",draft:!1,tags:[],version:"current",frontMatter:{id:"cancel-all",title:"Cancel All Order",description:"Cancel all orders.",sidebar_label:"Cancel All Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["contract"],description:"Cancel all orders.",operationId:"cancel-all",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETHUSDT"},baseCoin:{type:"string",description:"Cancel by base coin",example:null},settleCoin:{type:"string",description:"Cancel by settle coin",example:null}}}}}},method:"post",path:"/contract/v3/private/order/cancel-all",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{symbol:"ETHUSDT",baseCoin:null,settleCoin:null},info:{description:"Collection of derivatives - contract v3 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit derivatives contract explorer"},postman:{name:"Cancel All Order",description:{content:"Cancel all orders.",type:"text/plain"},url:{path:["contract","v3","private","order","cancel-all"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/contract/bybit-derivatives-contract-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Cancel Order",permalink:"/docs/api-explorer/derivatives/trade/contract/cancel-order"},next:{title:"Get Order List",permalink:"/docs/api-explorer/derivatives/trade/contract/order-list"}},m={},y=[{value:"Cancel All Order",id:"cancel-all-order",level:2}],v={toc:y};function b(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"cancel-all-order"},"Cancel All Order"),(0,l.kt)("p",null,"Cancel all orders."),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Header Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,l.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,l.kt)(n.Z,{mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"symbol",required:!1,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"baseCoin",required:!1,schemaDescription:"Cancel by base coin",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"settleCoin",required:!1,schemaDescription:"Cancel by settle coin",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"successful operation")),(0,l.kt)("div",null)))))}b.isMDXComponent=!0}}]);
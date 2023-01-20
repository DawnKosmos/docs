"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[679],{89789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>p,metadata:()=>y,toc:()=>m});var a=r(87462),i=(r(67294),r(3905)),s=r(26389),o=r(94891),d=r(74933),c=(r(47507),r(24310)),n=(r(63303),r(75035),r(85162));const p={id:"batch-cancel-active-order-by-ids",title:"Batch Cancel Active Order By IDs",description:"Batch Cancel Active Order By IDs",sidebar_label:"Batch Cancel Active Order By IDs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Batch Cancel Active Order By IDs",operationId:"batch-cancel-active-order-by-ids",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderIds:{type:"string",description:"Order ID, use commas to indicate multiple orderIds. Maximum of 100 ids."},orderCategory:{type:"string",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",enum:[0,1]}},required:["orderIds"]}}}},method:"post",path:"/spot/v3/private/cancel-orders-by-ids",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{orderIds:"string",orderCategory:0},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Batch Cancel Active Order By IDs",description:{content:"Batch Cancel Active Order By IDs",type:"text/plain"},url:{path:["spot","v3","private","cancel-orders-by-ids"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},l=void 0,y={unversionedId:"api-explorer/spot/trade/batch-cancel-active-order-by-ids",id:"api-explorer/spot/trade/batch-cancel-active-order-by-ids",title:"Batch Cancel Active Order By IDs",description:"Batch Cancel Active Order By IDs",source:"@site/docs/api-explorer/spot/trade/batch-cancel-active-order-by-ids.api.mdx",sourceDirName:"api-explorer/spot/trade",slug:"/api-explorer/spot/trade/batch-cancel-active-order-by-ids",permalink:"/docs-v2/zh-TW/api-explorer/spot/trade/batch-cancel-active-order-by-ids",draft:!1,tags:[],version:"current",frontMatter:{id:"batch-cancel-active-order-by-ids",title:"Batch Cancel Active Order By IDs",description:"Batch Cancel Active Order By IDs",sidebar_label:"Batch Cancel Active Order By IDs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["spotTrade"],description:"Batch Cancel Active Order By IDs",operationId:"batch-cancel-active-order-by-ids",parameters:[{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderIds:{type:"string",description:"Order ID, use commas to indicate multiple orderIds. Maximum of 100 ids."},orderCategory:{type:"string",description:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",enum:[0,1]}},required:["orderIds"]}}}},method:"post",path:"/spot/v3/private/cancel-orders-by-ids",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{orderIds:"string",orderCategory:0},info:{description:"Collection of Spot-trade rest api.\n",version:"3.0.0",title:"Bybit spot-trade explorer"},postman:{name:"Batch Cancel Active Order By IDs",description:{content:"Batch Cancel Active Order By IDs",type:"text/plain"},url:{path:["spot","v3","private","cancel-orders-by-ids"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A normal sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/spot/trade/bybit-spot-trade-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Batch Cancel Active Order",permalink:"/docs-v2/zh-TW/api-explorer/spot/trade/batch-cancel-active-order"},next:{title:"Get Open Orders",permalink:"/docs-v2/zh-TW/api-explorer/spot/trade/open-order"}},u={},m=[{value:"Batch Cancel Active Order By IDs",id:"batch-cancel-active-order-by-ids",level:2}],b={toc:m};function v(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"batch-cancel-active-order-by-ids"},"Batch Cancel Active Order By IDs"),(0,i.kt)("p",null,"Batch Cancel Active Order By IDs"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A normal sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(n.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"orderIds",required:!0,schemaDescription:"Order ID, use commas to indicate multiple orderIds. Maximum of 100 ids.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"orderCategory",required:!1,schemaDescription:"Order category. 0\uff1anormal order by default; 1\uff1aTP/SL order, Required for TP/SL order.",schemaName:"string",qualifierMessage:"**Possible values:** [`0`, `1`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}v.isMDXComponent=!0}}]);
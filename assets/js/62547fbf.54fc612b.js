"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9675],{76061:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>y});var t=i(87462),a=(i(67294),i(3905)),n=i(26389),o=i(94891),d=i(74933),s=(i(47507),i(24310)),l=(i(63303),i(75035),i(85162));const p={id:"cancel-order",title:"Cancl Order",description:"Cancel a future or option order",sidebar_label:"Cancl Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Cancel a future or option order",operationId:"cancel-order",parameters:[{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["linear","option"],description:"Product type"},symbol:{type:"string",required:!0,description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},orderFilter:{type:"string",description:"active order or conditional order",enum:["Order","StopOrder"]}}}}}},method:"post",path:"/unified/v3/private/order/cancel",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"string",orderId:"string",orderLinkId:"string",orderFilter:"Order"},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Cancl Order",description:{content:"Cancel a future or option order",type:"text/plain"},url:{path:["unified","v3","private","order","cancel"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"Please pass unified account api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"Please pass unified account api secret",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},c=void 0,u={unversionedId:"api-explorer/derivatives/trade/unified/cancel-order",id:"api-explorer/derivatives/trade/unified/cancel-order",title:"Cancl Order",description:"Cancel a future or option order",source:"@site/docs/api-explorer/derivatives/trade/unified/cancel-order.api.mdx",sourceDirName:"api-explorer/derivatives/trade/unified",slug:"/api-explorer/derivatives/trade/unified/cancel-order",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/cancel-order",draft:!1,tags:[],version:"current",frontMatter:{id:"cancel-order",title:"Cancl Order",description:"Cancel a future or option order",sidebar_label:"Cancl Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Cancel a future or option order",operationId:"cancel-order",parameters:[{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["linear","option"],description:"Product type"},symbol:{type:"string",required:!0,description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},orderFilter:{type:"string",description:"active order or conditional order",enum:["Order","StopOrder"]}}}}}},method:"post",path:"/unified/v3/private/order/cancel",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"string",orderId:"string",orderLinkId:"string",orderFilter:"Order"},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Cancl Order",description:{content:"Cancel a future or option order",type:"text/plain"},url:{path:["unified","v3","private","order","cancel"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"Please pass unified account api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"Please pass unified account api secret",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Replace Order",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/replace-order"},next:{title:"Cancl All Orders",permalink:"/docs-v2/api-explorer/derivatives/trade/unified/cancel-all"}},m={},y=[{value:"Cancl Order",id:"cancl-order",level:2}],v={toc:y};function f(e){let{components:r,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},v,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cancl-order"},"Cancl Order"),(0,a.kt)("p",null,"Cancel a future or option order"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(s.Z,{collapsible:!1,name:"category",required:!1,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`, `option`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"symbol",required:!1,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(s.Z,{collapsible:!1,name:"orderFilter",required:!1,schemaDescription:"active order or conditional order",schemaName:"string",qualifierMessage:"**Possible values:** [`Order`, `StopOrder`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5313],{87338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>y});var i=r(87462),a=(r(67294),r(3905)),s=r(26389),n=r(94891),d=r(74933),o=(r(47507),r(24310)),c=(r(63303),r(75035),r(85162));const l={id:"batch-cancel",title:"Batch Cancel Order",description:"Batch cancel orders",sidebar_label:"Batch Cancel Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Batch cancel orders",operationId:"batch-cancel",parameters:[{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["linear","option"],description:"Product type"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"}},required:["symbol"]}}},required:["category","request"]}}}},method:"post",path:"/unified/v3/private/order/cancel-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",request:[{symbol:"string",orderId:"string",orderLinkId:"string"}]},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Batch Cancel Order",description:{content:"Batch cancel orders",type:"text/plain"},url:{path:["unified","v3","private","order","cancel-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"Please pass unified account api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"Please pass unified account api secret",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},p=void 0,u={unversionedId:"api-explorer/derivatives/trade/unified/batch-cancel",id:"api-explorer/derivatives/trade/unified/batch-cancel",title:"Batch Cancel Order",description:"Batch cancel orders",source:"@site/docs/api-explorer/derivatives/trade/unified/batch-cancel.api.mdx",sourceDirName:"api-explorer/derivatives/trade/unified",slug:"/api-explorer/derivatives/trade/unified/batch-cancel",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/unified/batch-cancel",draft:!1,tags:[],version:"current",frontMatter:{id:"batch-cancel",title:"Batch Cancel Order",description:"Batch cancel orders",sidebar_label:"Batch Cancel Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Batch cancel orders",operationId:"batch-cancel",parameters:[{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["linear","option"],description:"Product type"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"}},required:["symbol"]}}},required:["category","request"]}}}},method:"post",path:"/unified/v3/private/order/cancel-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",request:[{symbol:"string",orderId:"string",orderLinkId:"string"}]},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Batch Cancel Order",description:{content:"Batch cancel orders",type:"text/plain"},url:{path:["unified","v3","private","order","cancel-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"Please pass unified account api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"Please pass unified account api secret",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Batch Replace Order",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/unified/batch-replace-place"},next:{title:"Get Order List",permalink:"/docs-v2/zh-TW/api-explorer/derivatives/trade/unified/order-list"}},m={},y=[{value:"Batch Cancel Order",id:"batch-cancel-order",level:2}],h={toc:y};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"batch-cancel-order"},"Batch Cancel Order"),(0,a.kt)("p",null,"Batch cancel orders"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(n.Z,{mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`, `option`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"request"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"<= 10"))),(0,a.kt)(o.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(o.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}v.isMDXComponent=!0}}]);
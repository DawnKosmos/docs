"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6284],{69459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>m,toc:()=>y});var a=r(87462),i=(r(67294),r(3905)),s=r(26389),o=r(94891),p=r(74933),d=(r(47507),r(24310)),n=(r(63303),r(75035),r(85162));const l={id:"batch-replace-place",title:"Batch Replace Order",description:"Batch replace orders",sidebar_label:"Batch Replace Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Batch replace orders",operationId:"batch-replace-place",parameters:[{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["option"],description:"Product type. option ONLY."},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},qty:{type:"string",description:"Modify the order qty"},price:{type:"string",description:"Modify the order price",example:null},orderIv:{type:"string",description:"Modify option order iv",example:null}},required:["symbol"]}}},required:["category","request"]}}}},method:"post",path:"/v5/order/amend-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"option",request:[{symbol:"string",orderId:"string",orderLinkId:"string",qty:"string",price:null,orderIv:null}]},info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Batch Replace Order",description:{content:"Batch replace orders",type:"text/plain"},url:{path:["v5","order","amend-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"Please pass unified account api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"Please pass unified account api secret",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},c=void 0,m={unversionedId:"api-explorer/v5/trade/batch-replace-place",id:"api-explorer/v5/trade/batch-replace-place",title:"Batch Replace Order",description:"Batch replace orders",source:"@site/docs/api-explorer/v5/trade/batch-replace-place.api.mdx",sourceDirName:"api-explorer/v5/trade",slug:"/api-explorer/v5/trade/batch-replace-place",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/batch-replace-place",draft:!1,tags:[],version:"current",frontMatter:{id:"batch-replace-place",title:"Batch Replace Order",description:"Batch replace orders",sidebar_label:"Batch Replace Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Batch replace orders",operationId:"batch-replace-place",parameters:[{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["option"],description:"Product type. option ONLY."},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name"},orderId:{type:"string",description:"Either orderId or orderLinkId is required"},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},qty:{type:"string",description:"Modify the order qty"},price:{type:"string",description:"Modify the order price",example:null},orderIv:{type:"string",description:"Modify option order iv",example:null}},required:["symbol"]}}},required:["category","request"]}}}},method:"post",path:"/v5/order/amend-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"option",request:[{symbol:"string",orderId:"string",orderLinkId:"string",qty:"string",price:null,orderIv:null}]},info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Batch Replace Order",description:{content:"Batch replace orders",type:"text/plain"},url:{path:["v5","order","amend-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"Please pass unified account api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"Please pass unified account api secret",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Batch Place Order",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/batch-place"},next:{title:"Batch Cancel Order",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/batch-cancel"}},u={},y=[{value:"Batch Replace Order",id:"batch-replace-order",level:2}],h={toc:y};function v(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"batch-replace-order"},"Batch Replace Order"),(0,i.kt)("p",null,"Batch replace orders"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Please pass unified account api key",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Please pass unified account api secret",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(n.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type. option ONLY.",schemaName:"string",qualifierMessage:"**Possible values:** [`option`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"request"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<= 10"))),(0,i.kt)(d.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"qty",required:!1,schemaDescription:"Modify the order qty",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"price",required:!1,schemaDescription:"Modify the order price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"orderIv",required:!1,schemaDescription:"Modify option order iv",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}v.isMDXComponent=!0}}]);
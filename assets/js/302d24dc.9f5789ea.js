"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6467],{47087:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>y});var a=r(87462),i=(r(67294),r(3905)),o=r(26389),s=r(94891),n=r(74933),d=(r(47507),r(24310)),c=(r(63303),r(75035),r(85162));const p={id:"batch-cancel",title:"Batch Cancel Order",description:"Batch cancel orders",sidebar_label:"Batch Cancel Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Batch cancel orders",operationId:"batch-cancel",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",enum:["option"],description:"Product type",example:"option"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETH-25JAN23-1600-P"},orderId:{type:"string",description:"Either orderId or orderLinkId is required",example:null},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required",example:"option-test-001"}},required:["symbol"]}}},required:["category","request"]}}}},method:"post",path:"/v5/order/cancel-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"option",request:[{symbol:"ETH-25JAN23-1600-P",orderId:null,orderLinkId:"option-test-001"}]},info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Batch Cancel Order",description:{content:"Batch cancel orders",type:"text/plain"},url:{path:["v5","order","cancel-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},l=void 0,u={unversionedId:"api-explorer/v5/trade/batch-cancel",id:"api-explorer/v5/trade/batch-cancel",title:"Batch Cancel Order",description:"Batch cancel orders",source:"@site/docs/api-explorer/v5/trade/batch-cancel.api.mdx",sourceDirName:"api-explorer/v5/trade",slug:"/api-explorer/v5/trade/batch-cancel",permalink:"/docs-v2/api-explorer/v5/trade/batch-cancel",draft:!1,tags:[],version:"current",frontMatter:{id:"batch-cancel",title:"Batch Cancel Order",description:"Batch cancel orders",sidebar_label:"Batch Cancel Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Batch cancel orders",operationId:"batch-cancel",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",enum:["option"],description:"Product type",example:"option"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETH-25JAN23-1600-P"},orderId:{type:"string",description:"Either orderId or orderLinkId is required",example:null},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required",example:"option-test-001"}},required:["symbol"]}}},required:["category","request"]}}}},method:"post",path:"/v5/order/cancel-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"option",request:[{symbol:"ETH-25JAN23-1600-P",orderId:null,orderLinkId:"option-test-001"}]},info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Batch Cancel Order",description:{content:"Batch cancel orders",type:"text/plain"},url:{path:["v5","order","cancel-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Batch Amend Order",permalink:"/docs-v2/api-explorer/v5/trade/batch-amend"},next:{title:"Get Borrow Quota (Spot)",permalink:"/docs-v2/api-explorer/v5/trade/query-spot-quota"}},m={},y=[{value:"Batch Cancel Order",id:"batch-cancel-order",level:2}],h={toc:y};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"batch-cancel-order"},"Batch Cancel Order"),(0,i.kt)("p",null,"Batch cancel orders"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`option`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"request"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<= 10"))),(0,i.kt)(d.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"orderId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}b.isMDXComponent=!0}}]);
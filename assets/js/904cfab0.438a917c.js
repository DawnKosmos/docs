"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[79046],{93992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>y});var i=r(87462),a=(r(67294),r(3905)),s=r(26389),d=r(94891),o=r(74933),n=(r(47507),r(24310)),p=(r(63303),r(75035),r(85162));const l={id:"batch-replace-place",title:"Batch Replace Order",description:"Batch replace orders",sidebar_label:"Batch Replace Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Batch replace orders",operationId:"batch-replace-place",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["linear","option"],description:"Product type"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",orderId:{type:"string",description:"Either orderId or orderLinkId is required"}},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},qty:{type:"string",description:"Modify the order qty"},price:{type:"string",description:"Modify the order price",example:null},iv:{type:"string",description:"Modify option order iv",example:null}},required:["symbol"]}}},required:["category","request"]}}}},method:"post",path:"/unified/v3/private/order/replace-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",request:[{symbol:"string",orderLinkId:"string",qty:"string",price:null,iv:null}]},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Batch Replace Order",description:{content:"Batch replace orders",type:"text/plain"},url:{path:["unified","v3","private","order","replace-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},c=void 0,u={unversionedId:"api-explorer/derivatives/trade/unified/batch-replace-place",id:"api-explorer/derivatives/trade/unified/batch-replace-place",title:"Batch Replace Order",description:"Batch replace orders",source:"@site/docs/api-explorer/derivatives/trade/unified/batch-replace-place.api.mdx",sourceDirName:"api-explorer/derivatives/trade/unified",slug:"/api-explorer/derivatives/trade/unified/batch-replace-place",permalink:"/docs/api-explorer/derivatives/trade/unified/batch-replace-place",draft:!1,tags:[],version:"current",frontMatter:{id:"batch-replace-place",title:"Batch Replace Order",description:"Batch replace orders",sidebar_label:"Batch Replace Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["unified"],description:"Batch replace orders",operationId:"batch-replace-place",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["linear","option"],description:"Product type"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",orderId:{type:"string",description:"Either orderId or orderLinkId is required"}},orderLinkId:{type:"string",description:"Either orderId or orderLinkId is required"},qty:{type:"string",description:"Modify the order qty"},price:{type:"string",description:"Modify the order price",example:null},iv:{type:"string",description:"Modify option order iv",example:null}},required:["symbol"]}}},required:["category","request"]}}}},method:"post",path:"/unified/v3/private/order/replace-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",request:[{symbol:"string",orderLinkId:"string",qty:"string",price:null,iv:null}]},info:{description:"Collection of derivatives - unified margin account Restul API\n",version:"3.0.0",title:"Bybit derivatives unified margin explorer"},postman:{name:"Batch Replace Order",description:{content:"Batch replace orders",type:"text/plain"},url:{path:["unified","v3","private","order","replace-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/derivatives/trade/unified/bybit-derivatives-unified-margin-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Batch Place Order",permalink:"/docs/api-explorer/derivatives/trade/unified/batch-place"},next:{title:"Batch Cancel Order",permalink:"/docs/api-explorer/derivatives/trade/unified/batch-cancel"}},m={},y=[{value:"Batch Replace Order",id:"batch-replace-order",level:2}],h={toc:y};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"batch-replace-order"},"Batch Replace Order"),(0,a.kt)("p",null,"Batch replace orders"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(d.Z,{mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(n.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`, `option`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"request"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"<= 10"))),(0,a.kt)(n.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"orderLinkId",required:!1,schemaDescription:"Either orderId or orderLinkId is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"qty",required:!1,schemaDescription:"Modify the order qty",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"price",required:!1,schemaDescription:"Modify the order price",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"iv",required:!1,schemaDescription:"Modify option order iv",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}v.isMDXComponent=!0}}]);
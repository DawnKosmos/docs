"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4549],{95068:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var o=i(87462),s=(i(67294),i(3905)),n=i(26389),r=i(94891),a=i(74933),p=(i(47507),i(24310)),l=(i(63303),i(75035),i(85162));const d={id:"position-mode",title:"Switch Position Mode",description:"Switch position mode.",sidebar_label:"Switch Position Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Switch position mode.",operationId:"position-mode",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type.",enum:["linear"],default:"linear"},symbol:{type:"string",description:"Symbol name. Either symbol or coin is required"},coin:{type:"string",description:"Coin. Either symbol or coin is required",example:"USDT"},mode:{type:"string",description:"Position mode. 0=mergedSingle, 3=bothSide",enum:[0,3],example:"0"}},required:["category","mode"]}}}},method:"post",path:"/v5/position/switch-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"string",coin:"USDT",mode:"0"},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Switch Position Mode",description:{content:"Switch position mode.",type:"text/plain"},url:{path:["v5","position","switch-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},c=void 0,m={unversionedId:"api-explorer/v5/position/position-mode",id:"api-explorer/v5/position/position-mode",title:"Switch Position Mode",description:"Switch position mode.",source:"@site/docs/api-explorer/v5/position/position-mode.api.mdx",sourceDirName:"api-explorer/v5/position",slug:"/api-explorer/v5/position/position-mode",permalink:"/docs-v2/api-explorer/v5/position/position-mode",draft:!1,tags:[],version:"current",frontMatter:{id:"position-mode",title:"Switch Position Mode",description:"Switch position mode.",sidebar_label:"Switch Position Mode",hide_title:!0,hide_table_of_contents:!0,api:{tags:["position"],description:"Switch position mode.",operationId:"position-mode",parameters:[{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",description:"Product type.",enum:["linear"],default:"linear"},symbol:{type:"string",description:"Symbol name. Either symbol or coin is required"},coin:{type:"string",description:"Coin. Either symbol or coin is required",example:"USDT"},mode:{type:"string",description:"Position mode. 0=mergedSingle, 3=bothSide",enum:[0,3],example:"0"}},required:["category","mode"]}}}},method:"post",path:"/v5/position/switch-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"linear",symbol:"string",coin:"USDT",mode:"0"},info:{description:"Collection of Position - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future and Option.\n",version:"3.0.0",title:"Bybit v5 position api explorer"},postman:{name:"Switch Position Mode",description:{content:"Switch position mode.",type:"text/plain"},url:{path:["v5","position","switch-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"If not input, the default one will be used",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/position/bybit-v-5-position-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Switch Cross/Isolated Margin",permalink:"/docs-v2/api-explorer/v5/position/cross-isolated-margin"},next:{title:"Set Auto Add Margin",permalink:"/docs-v2/api-explorer/v5/position/auto-margin"}},u={},h=[{value:"Switch Position Mode",id:"switch-position-mode",level:2}],y={toc:h};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,o.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"switch-position-mode"},"Switch Position Mode"),(0,s.kt)("p",null,"Switch position mode."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(a.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(a.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"If not input, the default one will be used",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type.",schemaName:"string",qualifierMessage:"**Possible values:** [`linear`]",defaultValue:"linear",mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"symbol",required:!1,schemaDescription:"Symbol name. Either symbol or coin is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"coin",required:!1,schemaDescription:"Coin. Either symbol or coin is required",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"mode",required:!0,schemaDescription:"Position mode. 0=mergedSingle, 3=bothSide",schemaName:"string",qualifierMessage:"**Possible values:** [`0`, `3`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8578],{84729:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=(a(3901),a(65488)),s=a(85162);const o={title:"Create Internal Transfer",sidebar_label:"Create Internal Transfer"},p=void 0,i={unversionedId:"spot/account/create-internal-transfer",id:"spot/account/create-internal-transfer",title:"Create Internal Transfer",description:"Request Example",source:"@site/docs/spot/account/create-internal-transfer.mdx",sourceDirName:"spot/account",slug:"/spot/account/create-internal-transfer",permalink:"/docs-v2/docs/spot/account/create-internal-transfer",draft:!1,editUrl:"https://github.com/bybit-exchange/docs-v2/pulls/docs/spot/account/create-internal-transfer.mdx",tags:[],version:"current",frontMatter:{title:"Create Internal Transfer",sidebar_label:"Create Internal Transfer"},sidebar:"spot",previous:{title:"Create Order",permalink:"/docs-v2/docs/spot/trade/create-order"},next:{title:"orderbook",permalink:"/docs-v2/docs/spot/websocket/orderbook"}},c={},u=[{value:"HTTP Request",id:"http-request",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response Parameters",id:"response-parameters",level:4}],d={toc:u};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Request Example")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"console",label:"Console",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'curl POST \'https://api-testnet.bybit.com/asset/v3/private/transfer/inter-transfer\'\n--header \'Content-Type: application/json\' \\\n--header \'X-BAPI-TIMESTAMP: 1660794864052\' \\\n--header \'X-BAPI-API-KEY: XXXXXXXXXXXXXX\' \\\n--header \'X-BAPI-RECV-WINDOW: 999999999\' \\\n--header \'X-BAPI-SIGN: c4f6cbc0581a8afa81cade431c9389a62ff7817e3e6c4aee456fd3f86796f619\' \\\n--data-raw \'{\n    "transferId": "xxxxxxx",\n    "coin": "BTC",\n    "amount": "0.11",\n    "fromAccountType": "SPOT",\n    "toAccountType": "CONTRACT",\n}\'\n'))),(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"live",live:!0},'import requests\nurl = "https://api-testnet.bybit.com/derivatives/v3/public/order-book/L2?category=linear&symbol=BTCUSDT"\nresponse = requests.request("GET", url)\nreturn response.text\n'))),(0,r.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response Example")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js linear",label:"JavaScript linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "retCode":0,\n    "retMsg":"OK",\n    "result":{\n    "transferId": "xxxxxxxxxxx"\n  },\n  "retExtInfo":{},\n  "time":1652841868446\n}\n'))),(0,r.kt)(s.Z,{value:"js option",label:"JavaScript option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "retCode":0,\n    "retMsg":"OK",\n    "result":{\n    "transferId": "xxxxxxxxxxx"\n  },\n  "retExtInfo":{},\n  "time":1652841868446\n}\n')))),(0,r.kt)("p",null,"Transfers funds between the different sections of an individual's account (not between subaccounts). For example, between the spot and derivatives accounts.\nTo send a transfer which is account type & parent/sub agnostic, use the Create Universal Transfer endpoint."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this interface supports Contract Account, Spot Account, Investment Account. The transferIn and transferOut account types cannot be the same.\nYou may transfer USDT from ",(0,r.kt)("strong",{parentName:"p"},"SPOT")," ONLY after upgraded to Unified Margin Account.")),(0,r.kt)("h4",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"POST ",(0,r.kt)("code",null,"/asset/v3/private/transfer/inter-transfer")),(0,r.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID, which is unique across the platform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Currency type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Exchange to amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fromAccountType"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"toAccountType"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account type")))),(0,r.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID, which is unique across the platform")))))}m.isMDXComponent=!0}}]);
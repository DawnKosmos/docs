(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5904],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),v=o,f=d["".concat(s,".").concat(v)]||d[v]||p[v]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(67294),o=r(86010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:r},t)}},65488:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(87462),o=r(67294),a=r(86010),i=r(72389),l=r(67392),s=r(7094),c=r(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:i,defaultValue:d,values:v,groupId:f,className:b}=e,m=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=v??m.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,l.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??m[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,s.U)(),[O,T]=(0,o.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:k}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,r=E.indexOf(t),n=y[r].value;n!==O&&(k(t),T(n),null!=f&&x(f,String(n)))},j=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},b)},y.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:j,onFocus:P,onClick:P},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,o.cloneElement)(m.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function v(e){const t=(0,i.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},44765:(e,t,r)=>{"use strict";r(67294),r(93162)},92272:(e,t,r)=>{"use strict";r(67294)},46991:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));r(92272),r(65488),r(85162),r(44765);const a={id:"bybit-v-5-trade-api-explorer",title:"Bybit v5 trade api explorer",description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},i=void 0,l={unversionedId:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer",id:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer",title:"Bybit v5 trade api explorer",description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.",source:"@site/docs/api-explorer/v5/trade/bybit-v-5-trade-api-explorer.info.mdx",sourceDirName:"api-explorer/v5/trade",slug:"/api-explorer/v5/trade/bybit-v-5-trade-api-explorer",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/bybit-v-5-trade-api-explorer",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"bybit-v-5-trade-api-explorer",title:"Bybit v5 trade api explorer",description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},sidebar:"apiExplorerSideBar",previous:{title:"Get Historical Volatility",permalink:"/docs-v2/zh-TW/api-explorer/v5/market/his-volatility"},next:{title:"Trade",permalink:"/docs-v2/zh-TW/api-explorer/v5/trade/trade"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 3.0.0"),(0,o.kt)("h1",{id:"bybit-v5-trade-api-explorer"},"Bybit v5 trade api explorer"),(0,o.kt)("p",null,"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option."))}p.isMDXComponent=!0},93162:function(e,t,r){var n,o,a;o=[],n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){s(n.response,t,r)},n.onerror=function(){console.error("could not download file")},n.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof r.g&&r.g.global===r.g?r.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,r){var l=i.URL||i.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):o(s.href)?n(e,t,r):a(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,i){if(r=r||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),r);else if(o(e))n(e,r,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){a(l)}))}}:function(e,t,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,r);var a="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&s||l)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var p=i.URL||i.webkitURL,d=p.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});i.saveAs=s.saveAs=s,e.exports=s},void 0===(a="function"==typeof n?n.apply(t,o):n)||(e.exports=a)}}]);
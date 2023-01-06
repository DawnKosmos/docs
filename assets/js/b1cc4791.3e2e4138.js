(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2311],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),v=o,f=d["".concat(s,".").concat(v)]||d[v]||p[v]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(87462),o=n(67294),a=n(86010),l=n(72389),i=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:v,groupId:f,className:b}=e,m=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=v??m.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??m[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,s.U)(),[x,O]=(0,o.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&y.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),r=y[n].value;r!==x&&(T(t),O(r),null!=f&&k(f,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},b)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>E.push(e),onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,o.cloneElement)(m.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function v(e){const t=(0,l.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},44765:(e,t,n)=>{"use strict";n(67294),n(93162)},92272:(e,t,n)=>{"use strict";n(67294)},5378:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));n(92272),n(65488),n(85162),n(44765);const a={id:"bybit-open-api-v-5-explorer-spot-leverage-token",title:"Bybit Open API v5 explorer - Spot leverage token",description:"Collection of v5 Restul API",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},l=void 0,i={unversionedId:"api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token",id:"api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token",title:"Bybit Open API v5 explorer - Spot leverage token",description:"Collection of v5 Restul API",source:"@site/docs/api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token.info.mdx",sourceDirName:"api-explorer/v5/lt",slug:"/api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token",permalink:"/docs-v2/api-explorer/v5/lt/bybit-open-api-v-5-explorer-spot-leverage-token",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"bybit-open-api-v-5-explorer-spot-leverage-token",title:"Bybit Open API v5 explorer - Spot leverage token",description:"Collection of v5 Restul API",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},sidebar:"apiExplorerSideBar",previous:{title:"Get Exchange Records",permalink:"/docs-v2/api-explorer/v5/asset/exchange"},next:{title:"Spot Leverage Token",permalink:"/docs-v2/api-explorer/v5/lt/etp"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 3.0.0"),(0,o.kt)("h1",{id:"bybit-open-api-v5-explorer---spot-leverage-token"},"Bybit Open API v5 explorer - Spot leverage token"),(0,o.kt)("p",null,"Collection of v5 Restul API"))}p.isMDXComponent=!0},93162:function(e,t,n){var r,o,a;o=[],r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,i=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,n){var i=l.URL||l.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):o(s.href)?r(e,t,n):a(s,s.target="_blank")):(s.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,l){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,l),n);else if(o(e))r(e,n,l);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){a(i)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var a="application/octet-stream"===e.type,s=/constructor/i.test(l.HTMLElement)||l.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&s||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var p=l.URL||l.webkitURL,d=p.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});l.saveAs=s.saveAs=s,e.exports=s},void 0===(a="function"==typeof r?r.apply(t,o):r)||(e.exports=a)}}]);
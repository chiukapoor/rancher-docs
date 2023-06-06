"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12582],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"\u6301\u7eed\u4ea4\u4ed8"},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery",id:"version-2.6/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery",title:"\u6301\u7eed\u4ea4\u4ed8",description:"\u4ece Rancher 2.5 \u5f00\u59cb\uff0cFleet \u5df2\u7ecf\u9884\u88c5\u5728 Rancher \u4e2d\uff0c\u4e14\u4ece Rancher 2.6 \u5f00\u59cb\uff0cFleet \u4e0d\u80fd\u518d\u5b8c\u5168\u7981\u7528\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 continuous-delivery \u529f\u80fd\u5f00\u5173\u6765\u7981\u7528 GitOps \u6301\u7eed\u4ea4\u4ed8\u7684 Fleet \u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery.md",sourceDirName:"how-to-guides/advanced-user-guides/enable-experimental-features",slug:"/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u6301\u7eed\u4ea4\u4ed8"},sidebar:"tutorialSidebar",previous:{title:"UI \u7ba1\u7406 Istio \u865a\u62df\u670d\u52a1\u548c\u76ee\u6807\u89c4\u5219",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features"},next:{title:"\u4f7f\u7528 firewalld \u6253\u5f00\u7aef\u53e3",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/open-ports-with-firewalld"}},s={},p=[],d={toc:p};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4ece Rancher 2.5 \u5f00\u59cb\uff0c",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet")," \u5df2\u7ecf\u9884\u88c5\u5728 Rancher \u4e2d\uff0c\u4e14\u4ece Rancher 2.6 \u5f00\u59cb\uff0cFleet \u4e0d\u80fd\u518d\u5b8c\u5168\u7981\u7528\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," \u529f\u80fd\u5f00\u5173\u6765\u7981\u7528 GitOps \u6301\u7eed\u4ea4\u4ed8\u7684 Fleet \u529f\u80fd\u3002"),(0,n.kt)("p",null,"\u5982\u9700\u542f\u7528\u6216\u7981\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/enable-experimental-features"},"\u542f\u7528\u5b9e\u9a8c\u529f\u80fd\u4e3b\u9875"),"\u4e2d\u7684\u8bf4\u660e\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u952e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"continuous-delivery")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b64\u5f00\u5173\u7981\u7528 Fleet \u7684 GitOps \u6301\u7eed\u4ea4\u4ed8\u529f\u80fd\u3002")))),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5728 Rancher 2.5.x \u4e2d\u7981\u7528\u4e86 Fleet\uff0c\u7136\u540e\u5c06 Rancher \u5347\u7ea7\u5230 v2.6.x\uff0cFleet \u5c06\u542f\u7528\u3002\u53ea\u6709 Fleet \u7684\u6301\u7eed\u4ea4\u4ed8\u529f\u80fd\u53ef\u4ee5\u88ab\u7981\u7528\u3002\u5f53 ",(0,n.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," \u88ab\u7981\u7528\u65f6\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"gitjob")," deployment \u4e0d\u518d\u90e8\u7f72\u5230 Rancher Server \u7684\u672c\u5730\u96c6\u7fa4\u4e2d\uff0c\u4e14 ",(0,n.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," \u4e0d\u4f1a\u5728 Rancher UI \u4e2d\u663e\u793a\u3002"))}f.isMDXComponent=!0}}]);
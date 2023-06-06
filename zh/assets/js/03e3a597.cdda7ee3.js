"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[82116],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=i,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||a;return n?r.createElement(k,l(l({ref:e},d),{},{components:n})):r.createElement(k,l({ref:e},d))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47188:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const o={title:"RBAC"},p=void 0,u={unversionedId:"integrations-in-rancher/istio/rbac-for-istio",id:"integrations-in-rancher/istio/rbac-for-istio",title:"RBAC",description:"\u672c\u6587\u4ecb\u7ecd\u8bbf\u95ee Istio \u529f\u80fd\u6240\u9700\u7684\u6743\u9650\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/istio/rbac-for-istio.md",sourceDirName:"integrations-in-rancher/istio",slug:"/integrations-in-rancher/istio/rbac-for-istio",permalink:"/zh/integrations-in-rancher/istio/rbac-for-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/istio/rbac-for-istio.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"RBAC"},sidebar:"tutorialSidebar",previous:{title:"CPU \u548c\u5185\u5b58\u5206\u914d",permalink:"/zh/integrations-in-rancher/istio/cpu-and-memory-allocations"},next:{title:"\u7981\u7528 Istio",permalink:"/zh/integrations-in-rancher/istio/disable-istio"}},d={},s=[{value:"Cluster-Admin \u8bbf\u95ee",id:"cluster-admin-\u8bbf\u95ee",level:2},{value:"Admin \u548c Edit \u6743\u9650",id:"admin-\u548c-edit-\u6743\u9650",level:2},{value:"Kubernetes \u9ed8\u8ba4\u89d2\u8272\u7684\u9ed8\u8ba4\u6743\u9650\u6458\u8981",id:"kubernetes-\u9ed8\u8ba4\u89d2\u8272\u7684\u9ed8\u8ba4\u6743\u9650\u6458\u8981",level:2}],c={toc:s};function m(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)("wrapper",a(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}({},c,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u8bbf\u95ee Istio \u529f\u80fd\u6240\u9700\u7684\u6743\u9650\u3002"),(0,r.kt)("p",null,"Rancher Istio Chart \u5b89\u88c5\u4e86\u4e09\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole"),"\u3002"),(0,r.kt)("h2",{id:"cluster-admin-\u8bbf\u95ee"},"Cluster-Admin \u8bbf\u95ee"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u6709\u5177\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-admin")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole")," \u7684\u7528\u6237\u53ef\u4ee5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u96c6\u7fa4\u4e2d\u5b89\u88c5 Istio \u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a Istio \u914d\u7f6e\u8d44\u6e90\u5206\u914d\u3002")),(0,r.kt)("h2",{id:"admin-\u548c-edit-\u6743\u9650"},"Admin \u548c Edit \u6743\u9650"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u6709 Admin \u548c Edit \u89d2\u8272\u53ef\u4ee5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u547d\u540d\u7a7a\u95f4\u542f\u7528\u548c\u7981\u7528 Istio sidecar \u81ea\u52a8\u6ce8\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06 Istio sidecar \u6dfb\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u96c6\u7fa4\u7684\u6d41\u91cf\u6307\u6807\u548c\u6d41\u91cf\u56fe\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e Istio \u7684\u8d44\u6e90\uff08\u4f8b\u5982\u7f51\u5173\u3001\u76ee\u6807\u89c4\u5219\u6216\u865a\u62df\u670d\u52a1\uff09\u3002")),(0,r.kt)("h2",{id:"kubernetes-\u9ed8\u8ba4\u89d2\u8272\u7684\u9ed8\u8ba4\u6743\u9650\u6458\u8981"},"Kubernetes \u9ed8\u8ba4\u89d2\u8272\u7684\u9ed8\u8ba4\u6743\u9650\u6458\u8981"),(0,r.kt)("p",null,"Istio \u521b\u5efa\u4e86\u4e09\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole"),"\uff0c\u5e76\u5c06 Istio CRD \u8bbf\u95ee\u6743\u9650\u6dfb\u52a0\u5230\u4ee5\u4e0b\u9ed8\u8ba4 K8s ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole"),"\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Chart \u521b\u5efa\u7684 ClusterRole"),(0,r.kt)("th",{parentName:"tr",align:"right"},"\u9ed8\u8ba4 K8s ClusterRole"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Rancher \u89d2\u8272"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"istio-admin")),(0,r.kt)("td",{parentName:"tr",align:"right"},"admin"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\u9879\u76ee\u6240\u6709\u8005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"istio-edit")),(0,r.kt)("td",{parentName:"tr",align:"right"},"edit"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\u9879\u76ee\u6210\u5458")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"istio-view")),(0,r.kt)("td",{parentName:"tr",align:"right"},"view"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\u53ea\u8bfb")))),(0,r.kt)("p",null,"Rancher \u5c06\u7ee7\u7eed\u4f7f\u7528 cluster-owner\u3001cluster-member\u3001project-owner\u3001project-member \u7b49\u4f5c\u4e3a\u89d2\u8272\u540d\u79f0\uff0c\u4f46\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u89d2\u8272\u6765\u786e\u5b9a\u8bbf\u95ee\u6743\u9650\u3002\u6bcf\u4e2a\u9ed8\u8ba4\u7684 K8s ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole")," \u90fd\u6709\u4e0d\u540c\u7684 Istio CRD \u6743\u9650\u4ee5\u53ca\u53ef\u4ee5\u6267\u884c\u7684 K8s \u64cd\u4f5c\uff0c\u5305\u62ec Create (C)\uff0cGet (G)\uff0cList (L)\uff0cWatch (W)\uff0cUpdate (U)\uff0cPatch (P)\uff0cDelete (D) \u548c All (*)\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CRD"),(0,r.kt)("th",{parentName:"tr",align:null},"Admin"),(0,r.kt)("th",{parentName:"tr",align:null},"Edit"),(0,r.kt)("th",{parentName:"tr",align:null},"View"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"config.istio.io")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"adapters")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"attributemanifests")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"handlers")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"httpapispecbindings")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"httpapispecs")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"instances")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"quotaspecbindings")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"quotaspecs")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"rules")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"templates"))))),(0,r.kt)("td",{parentName:"tr",align:null},"GLW"),(0,r.kt)("td",{parentName:"tr",align:null},"GLW"),(0,r.kt)("td",{parentName:"tr",align:null},"GLW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"networking.istio.io")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"destinationrules")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"envoyfilters")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"gateways")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"serviceentries")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"sidecars")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"virtualservices")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"workloadentries"))))),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"GLW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"security.istio.io")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"authorizationpolicies")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"peerauthentications")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"requestauthentications"))))),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"GLW")))))}m.isMDXComponent=!0}}]);
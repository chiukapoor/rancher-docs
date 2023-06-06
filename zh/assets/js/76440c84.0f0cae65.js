"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={title:"Role-based Access Control"},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/rbac-for-istio",id:"version-2.0-2.4/explanations/integrations-in-rancher/istio/rbac-for-istio",title:"Role-based Access Control",description:"This section describes the permissions required to access Istio features and how to configure access to the Kiali and Jaeger visualizations.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/rbac-for-istio.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/rbac-for-istio",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/rbac-for-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/istio/rbac-for-istio.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"2022\u5e7410\u670829\u65e5",frontMatter:{title:"Role-based Access Control"},sidebar:"tutorialSidebar",previous:{title:"CPU and Memory Allocations",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},next:{title:"Disabling Istio",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/disable-istio"}},u={},p=[{value:"Cluster-level Access",id:"cluster-level-access",level:2},{value:"Project-level Access",id:"project-level-access",level:2},{value:"Access to Visualizations",id:"access-to-visualizations",level:2},{value:"Summary of Default Permissions for Istio Users",id:"summary-of-default-permissions-for-istio-users",level:2}],d={toc:p};function m(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes the permissions required to access Istio features and how to configure access to the Kiali and Jaeger visualizations."),(0,a.kt)("h2",{id:"cluster-level-access"},"Cluster-level Access"),(0,a.kt)("p",null,"By default, only cluster administrators can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable Istio for the cluster"),(0,a.kt)("li",{parentName:"ul"},"Configure resource allocations for Istio"),(0,a.kt)("li",{parentName:"ul"},"View each UI for Prometheus, Grafana, Kiali, and Jaeger")),(0,a.kt)("h2",{id:"project-level-access"},"Project-level Access"),(0,a.kt)("p",null,"After Istio is enabled in a cluster, project owners and members have permission to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable and disable Istio sidecar auto-injection for namespaces"),(0,a.kt)("li",{parentName:"ul"},"Add the Istio sidecar to workloads"),(0,a.kt)("li",{parentName:"ul"},"View the traffic metrics and traffic graph for the cluster"),(0,a.kt)("li",{parentName:"ul"},"View the Kiali and Jaeger visualizations if cluster administrators give access to project members"),(0,a.kt)("li",{parentName:"ul"},"Configure Istio's resources (such as the gateway, destination rules, or virtual services) with ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," (This does not apply to read-only project members)")),(0,a.kt)("h2",{id:"access-to-visualizations"},"Access to Visualizations"),(0,a.kt)("p",null,"By default,  the Kiali and Jaeger visualizations are restricted to the cluster owner because the information in them could be sensitive."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Jaeger")," provides a UI for a distributed tracing system, which is useful for root cause analysis and for determining what causes poor performance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kiali")," provides a diagram that shows the services within a service mesh and how they are connected."),(0,a.kt)("p",null,"Rancher supports giving groups permission to access Kiali and Jaeger, but not individuals."),(0,a.kt)("p",null,"To configure who has permission to access the Kiali and Jaeger UI,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the cluster view and click ",(0,a.kt)("strong",{parentName:"li"},"Tools > Istio.")),(0,a.kt)("li",{parentName:"ol"},"Then go to the ",(0,a.kt)("strong",{parentName:"li"},"Member Access")," section. If you want to restrict access to certain groups, choose ",(0,a.kt)("strong",{parentName:"li"},"Allow cluster owner and specified members to access Kiali and Jaeger UI.")," Search for the groups that you want to have access to Kiali and Jaeger. If you want all members to have access to the tools, click ",(0,a.kt)("strong",{parentName:"li"},"Allow all members to access Kiali and Jaeger UI.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The access levels for Kiali and Jaeger have been updated."),(0,a.kt)("h2",{id:"summary-of-default-permissions-for-istio-users"},"Summary of Default Permissions for Istio Users"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Permission"),(0,a.kt)("th",{parentName:"tr",align:null},"Cluster Administrators"),(0,a.kt)("th",{parentName:"tr",align:null},"Project Owners"),(0,a.kt)("th",{parentName:"tr",align:null},"Project Members"),(0,a.kt)("th",{parentName:"tr",align:null},"Read-only Project Members"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable and disable Istio for the cluster"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configure Istio resource limits"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Control who has access to Kiali and the Jaeger UI"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable and disable Istio for a namespace"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable and disable Istio on workloads"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configure Istio with ",(0,a.kt)("inlineCode",{parentName:"td"},"kubectl")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"View Prometheus UI and Grafana UI"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"View Kiali UI and Jaeger UI (",(0,a.kt)("a",{parentName:"td",href:"#access-to-visualizations"},"Configurable"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"View Istio project dashboard, including traffic metrics*"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By default, only the cluster owner will see the traffic graph. Project members will see only a subset of traffic metrics. Project members cannot see the traffic graph because it comes from Kiali, and access to Kiali is restricted to cluster owners by default.")))}m.isMDXComponent=!0}}]);
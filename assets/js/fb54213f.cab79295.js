"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),h=o,d=f["".concat(c,".").concat(h)]||f[h]||p[h]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Syncing"},c=void 0,l={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",id:"reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",title:"Syncing",description:"Syncing allows Rancher to update cluster values so that they're up to date with the corresponding cluster object hosted in AKS, EKS or GKE. This enables sources other than Rancher to own a hosted cluster\u2019s state.",source:"@site/docs/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters.md",tags:[],version:"current",lastUpdatedAt:1675359433,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{title:"Syncing"},sidebar:"tutorialSidebar",previous:{title:"Rancher Agent Options",permalink:"/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options"},next:{title:"Downstream Cluster Configuration",permalink:"/pages-for-subheaders/downstream-cluster-configuration"}},u={},p=[{value:"How it works",id:"how-it-works",level:3}],f={toc:p};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Syncing allows Rancher to update cluster values so that they're up to date with the corresponding cluster object hosted in AKS, EKS or GKE. This enables sources other than Rancher to own a hosted cluster\u2019s state. "),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"You may accidentally overwrite the state from one source if you simultaneously process an update from another source. This may also occur if you process an update from one source within 5 minutes of finishing an update from another source.")),(0,n.kt)("h3",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"There are two fields on the Rancher Cluster object that must be understood to understand how syncing works:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The config object for the cluster, located on the Spec of the Cluster:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For AKS, the field is called AKSConfig"),(0,n.kt)("li",{parentName:"ul"},"For EKS, the field is called EKSConfig"),(0,n.kt)("li",{parentName:"ul"},"For GKE, the field is called GKEConfig"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The UpstreamSpec object"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For AKS, this is located on the AKSStatus field on the Status of the Cluster."),(0,n.kt)("li",{parentName:"ul"},"For EKS, this is located on the EKSStatus field on the Status of the Cluster."),(0,n.kt)("li",{parentName:"ul"},"For GKE, this is located on the GKEStatus field on the Status of the Cluster.")))),(0,n.kt)("p",null,"The struct types that define these objects can be found in their corresponding operator projects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/aks-operator/blob/master/pkg/apis/aks.cattle.io/v1/types.go"},"aks-operator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/eks-operator/blob/master/pkg/apis/eks.cattle.io/v1/types.go"},"eks-operator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/gke-operator/blob/master/pkg/apis/gke.cattle.io/v1/types.go"},"gke-operator"))),(0,n.kt)("p",null,"All fields  are nillable, except for the following: the cluster name, the location (region or zone), Imported, and the cloud credential reference."),(0,n.kt)("p",null,"The AKSConfig, EKSConfig or GKEConfig represents the desired state. Nil values are ignored. Fields that are non-nil in the config object can be thought of as managed. When a cluster is created in Rancher, all fields are non-nil and therefore managed. When a pre-existing cluster is registered in Rancher all nillable fields are set to nil and aren't managed. Those fields become managed once their value has been changed by Rancher."),(0,n.kt)("p",null,"UpstreamSpec represents the cluster as it is in the hosted Kubernetes provider. It's refreshed every 5 minutes. After the UpstreamSpec is refreshed, Rancher checks if the cluster has an update in progress. If it's currently updating, nothing further is done. If it is not currently updating, any managed fields on AKSConfig, EKSConfig or GKEConfig are overwritten with their corresponding value from the recently updated UpstreamSpec."),(0,n.kt)("p",null,"The effective desired state can be thought of as the UpstreamSpec, plus all non-nil fields in the AKSConfig, EKSConfig or GKEConfig. This is what is displayed in the UI."),(0,n.kt)("p",null,"If Rancher and another source attempt to update a cluster at the same time, or within 5 minutes of an update finishing, any managed fields are likely to get caught in a race condition. To use EKS as an example, a cluster may have PrivateAccess as a managed field. If PrivateAccess is false and then enabled in EKS console at 11:01, and tags are updated from Rancher before 11:05, then the value is likely to be overwritten. This can also occur if tags are updated while the cluster is still processing the update. The issue described in this example shouldn't occur if the cluster is registered and the PrivateAccess fields are nil."))}h.isMDXComponent=!0}}]);
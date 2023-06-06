"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90802],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(i,".").concat(d)]||p[d]||h[d]||o;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},38505:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>h});t(67294);var n=t(3905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={title:"Rancher Server and Components"},i=void 0,u={unversionedId:"reference-guides/rancher-manager-architecture/rancher-server-and-components",id:"version-2.0-2.4/reference-guides/rancher-manager-architecture/rancher-server-and-components",title:"Rancher Server and Components",description:"The majority of Rancher 2.x software runs on the Rancher Server. Rancher Server includes all the software components used to manage the entire Rancher deployment.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/rancher-manager-architecture/rancher-server-and-components.md",sourceDirName:"reference-guides/rancher-manager-architecture",slug:"/reference-guides/rancher-manager-architecture/rancher-server-and-components",permalink:"/zh/v2.0-v2.4/reference-guides/rancher-manager-architecture/rancher-server-and-components",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/rancher-manager-architecture/rancher-server-and-components.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662663074,formattedLastUpdatedAt:"2022\u5e749\u67088\u65e5",frontMatter:{title:"Rancher Server and Components"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture"},next:{title:"Communicating with Downstream User Clusters",permalink:"/zh/v2.0-v2.4/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters"}},l={},h=[],p={toc:h};function d(e){var{components:r}=e,s=c(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},p,s),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The majority of Rancher 2.x software runs on the Rancher Server. Rancher Server includes all the software components used to manage the entire Rancher deployment."),(0,n.kt)("p",null,"The figure below illustrates the high-level architecture of Rancher 2.x. The figure depicts a Rancher Server installation that manages two downstream Kubernetes clusters: one created by RKE and another created by Amazon EKS (Elastic Kubernetes Service)."),(0,n.kt)("p",null,"For the best performance and security, we recommend a dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"create or import clusters")," for running your workloads."),(0,n.kt)("p",null,"The diagram below shows how users can manipulate both ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher-launched Kubernetes")," clusters and ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted Kubernetes")," clusters through Rancher's authentication proxy:"),(0,n.kt)("figcaption",null,"Managing Kubernetes Clusters through Rancher's Authentication Proxy"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture",src:t(16904).Z,width:"766",height:"792"})),(0,n.kt)("p",null,"You can install Rancher on a single node, or on a high-availability Kubernetes cluster."),(0,n.kt)("p",null,"A high-availability Kubernetes installation is recommended for production."),(0,n.kt)("p",null,"A Docker installation of Rancher is recommended only for development and testing purposes. The ability to migrate Rancher to a high-availability cluster depends on the Rancher version:"),(0,n.kt)("p",null,"For Rancher v2.0-v2.4, there was no migration path from a Docker installation to a high-availability installation. Therefore, you may want to use a Kubernetes installation from the start."),(0,n.kt)("p",null,"The Rancher server, regardless of the installation method, should always run on nodes that are separate from the downstream user clusters that it manages. If Rancher is installed on a high-availability Kubernetes cluster, it should run on a separate cluster from the cluster(s) it manages."))}d.isMDXComponent=!0},16904:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/rancher-architecture-rancher-api-server-2743dae746c64cd2ad66711908be4108.svg"}}]);
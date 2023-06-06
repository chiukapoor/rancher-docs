"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Kubernetes Installation Using Helm 2"},s=void 0,u={unversionedId:"pages-for-subheaders/helm2",id:"version-2.0-2.4/pages-for-subheaders/helm2",title:"Kubernetes Installation Using Helm 2",description:"After Helm 3 was released, the Rancher installation instructions were updated to use Helm 3.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm2",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Kubernetes Installation Using Helm 2"},sidebar:"tutorialSidebar",previous:{title:"UI for Istio Virtual Services and Destination Rules",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features"},next:{title:"1. Create Nodes and Load Balancer",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb"}},c={},p=[{value:"Recommended Architecture",id:"recommended-architecture",level:2},{value:"Required Tools",id:"required-tools",level:2},{value:"Installation Outline",id:"installation-outline",level:2},{value:"Additional Install Options",id:"additional-install-options",level:2},{value:"Previous Methods",id:"previous-methods",level:2}],d={toc:p};function m(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"After Helm 3 was released, the Rancher installation instructions were updated to use Helm 3."),(0,n.kt)("p",{parentName:"blockquote"},"If you are using Helm 2, we recommend ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"migrating to Helm 3")," because it is simpler to use and more secure than Helm 2."),(0,n.kt)("p",{parentName:"blockquote"},"This section provides a copy of the older high-availability Kubernetes Rancher installation instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.")),(0,n.kt)("p",null,"For production environments, we recommend installing Rancher in a high-availability configuration so that your user base can always access Rancher Server. When installed in a Kubernetes cluster, Rancher will integrate with the cluster's etcd database and take advantage of Kubernetes scheduling for high-availability."),(0,n.kt)("p",null,"This procedure walks you through setting up a 3-node cluster with Rancher Kubernetes Engine (RKE) and installing the Rancher chart with the Helm package manager."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")," The Rancher management server can only be run on an RKE-managed Kubernetes cluster. Use of Rancher on hosted Kubernetes or other providers is not supported.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")," For the best performance, we recommend a dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"create or import clusters")," for running your workloads.")),(0,n.kt)("h2",{id:"recommended-architecture"},"Recommended Architecture"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DNS for Rancher should resolve to a Layer 4 load balancer (TCP)"),(0,n.kt)("li",{parentName:"ul"},"The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster."),(0,n.kt)("li",{parentName:"ul"},"The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443."),(0,n.kt)("li",{parentName:"ul"},"The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.")),(0,n.kt)("figcaption",null,"Kubernetes Rancher install with layer 4 load balancer, depicting SSL termination at ingress controllers"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"High-availability Kubernetes Install",src:r(86089).Z,width:"1236",height:"525"})),(0,n.kt)("sup",null,"Kubernetes Rancher install with Layer 4 load balancer (TCP), depicting SSL termination at ingress controllers"),(0,n.kt)("h2",{id:"required-tools"},"Required Tools"),(0,n.kt)("p",null,"The following CLI tools are required for this install. Please make sure these tools are installed and available in your ",(0,n.kt)("inlineCode",{parentName:"p"},"$PATH")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl")," - Kubernetes command-line tool."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"rke")," - Rancher Kubernetes Engine, cli for building Kubernetes clusters."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.helm.sh/using_helm/#installing-helm"},"helm")," - Package management for Kubernetes. Refer to the ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher.")),(0,n.kt)("h2",{id:"installation-outline"},"Installation Outline"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb"},"Create Nodes and Load Balancer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm2-kubernetes-rke"},"Install Kubernetes with RKE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm2-helm-init"},"Initialize Helm (tiller)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm-rancher"},"Install Rancher"))),(0,n.kt)("h2",{id:"additional-install-options"},"Additional Install Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on"))),(0,n.kt)("h2",{id:"previous-methods"},"Previous Methods"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on"},"RKE add-on install")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,n.kt)("p",{parentName:"blockquote"},"Please use the Rancher helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Kubernetes Install "),"."),(0,n.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the Helm chart.")))}m.isMDXComponent=!0},86089:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher2ha-109862fddef6042942f103cfc94d892b.svg"}}]);
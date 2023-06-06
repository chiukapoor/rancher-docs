"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97668],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=c(r),d=o,f=h["".concat(u,".").concat(d)]||h[d]||p[d]||a;return r?t.createElement(f,s(s({ref:n},l),{},{components:r})):t.createElement(f,s({ref:n},l))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},30066:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});r(67294);var t=r(3905);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"Launching Kubernetes with Rancher"},u=void 0,c={unversionedId:"pages-for-subheaders/launch-kubernetes-with-rancher",id:"version-2.0-2.4/pages-for-subheaders/launch-kubernetes-with-rancher",title:"Launching Kubernetes with Rancher",description:"You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, it uses Rancher Kubernetes Engine (RKE), which is Rancher's own lightweight Kubernetes installer. It can launch Kubernetes on any computers, including:",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/launch-kubernetes-with-rancher.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/launch-kubernetes-with-rancher",permalink:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/launch-kubernetes-with-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Launching Kubernetes with Rancher"},sidebar:"tutorialSidebar",previous:{title:"Creating a Huawei CCE Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei"},next:{title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",permalink:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"}},l={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Launching Kubernetes on New Nodes in an Infrastructure Provider",id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider",level:3},{value:"Launching Kubernetes on Existing Custom Nodes",id:"launching-kubernetes-on-existing-custom-nodes",level:3}],h={toc:p};function d(e){var{components:n}=e,r=s(e,["components"]);return(0,t.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},h,r),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, it uses ",(0,t.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine")," (RKE), which is Rancher's own lightweight Kubernetes installer. It can launch Kubernetes on any computers, including:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Bare-metal servers"),(0,t.kt)("li",{parentName:"ul"},"On-premise virtual machines"),(0,t.kt)("li",{parentName:"ul"},"Virtual machines hosted by an infrastructure provider")),(0,t.kt)("p",null,"Rancher can install Kubernetes on existing nodes, or it can dynamically provision nodes in an infrastructure provider and install Kubernetes on them."),(0,t.kt)("p",null,"RKE clusters include clusters that Rancher launched on Windows nodes or other existing custom nodes, as well as clusters that Rancher launched with new nodes on Azure, Digital Ocean, EC2, or vSphere."),(0,t.kt)("h3",{id:"requirements"},"Requirements"),(0,t.kt)("p",null,"If you use RKE to set up a cluster, your nodes must meet the ",(0,t.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"requirements")," for nodes in downstream user clusters."),(0,t.kt)("h3",{id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider"},"Launching Kubernetes on New Nodes in an Infrastructure Provider"),(0,t.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,t.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template"),". This node template defines the parameters you want to use to launch nodes in your cloud providers."),(0,t.kt)("p",null,"One benefit of installing Kubernetes on node pools hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected."),(0,t.kt)("p",null,"For more information, refer to the section on ",(0,t.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"launching Kubernetes on new nodes.")),(0,t.kt)("h3",{id:"launching-kubernetes-on-existing-custom-nodes"},"Launching Kubernetes on Existing Custom Nodes"),(0,t.kt)("p",null,"In this scenario, you want to install Kubernetes on bare-metal servers, on-prem virtual machines, or virtual machines that already exist in a cloud provider. With this option, you will run a Rancher agent Docker container on the machine."),(0,t.kt)("p",null,"If you want to reuse a node from a previous custom cluster, ",(0,t.kt)("a",{parentName:"p",href:"/v2.0-v2.4/faq/rancher-is-no-longer-needed"},"clean the node")," before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail."),(0,t.kt)("p",null,"For more information, refer to the section on ",(0,t.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"custom nodes.")))}d.isMDXComponent=!0}}]);
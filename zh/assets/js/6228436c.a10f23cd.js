"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[23791],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>h});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||s;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7282:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});n(67294);var t=n(3905);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Node Requirements for Rancher Managed Clusters"},u=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",title:"Node Requirements for Rancher Managed Clusters",description:"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"Node Requirements for Rancher Managed Clusters"},sidebar:"tutorialSidebar",previous:{title:"Setting up Kubernetes Clusters in Rancher",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},next:{title:"Checklist for Production-Ready Clusters",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/checklist-for-production-ready-clusters"}},c={},d=[{value:"Operating Systems and Container Runtime Requirements",id:"operating-systems-and-container-runtime-requirements",level:2},{value:"Oracle Linux and RHEL Derived Linux Nodes",id:"oracle-linux-and-rhel-derived-linux-nodes",level:3},{value:"SUSE Linux Nodes",id:"suse-linux-nodes",level:3},{value:"Flatcar Container Linux Nodes",id:"flatcar-container-linux-nodes",level:3},{value:"Windows Nodes",id:"windows-nodes",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Networking Requirements",id:"networking-requirements",level:2},{value:"Optional: Security Considerations",id:"optional-security-considerations",level:2}],p=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",r)},h=p("Tabs"),m=p("TabItem"),f={toc:d};function g(e){var{components:r}=e,n=a(e,["components"]);return(0,t.kt)("wrapper",s(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}({},f,n),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"If Rancher is installed on a high-availability Kubernetes cluster, the Rancher server three-node cluster and downstream clusters have different requirements. For Rancher installation requirements, refer to the node requirements in the ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"installation section."))),(0,t.kt)("h2",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,t.kt)("p",null,"Rancher should work with any modern Linux distribution and any modern Docker version. Linux is required for the etcd and controlplane nodes of all downstream clusters. Worker nodes may run Linux or ",(0,t.kt)("a",{parentName:"p",href:"#windows-nodes"},"Windows Server.")," The capability to use Windows worker nodes in downstream clusters was added in Rancher v2.3.0."),(0,t.kt)("p",null,"For details on which OS and Docker versions were tested with each Rancher version, refer to the ",(0,t.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,t.kt)("p",null,"All supported operating systems are 64-bit x86."),(0,t.kt)("p",null,"If you plan to use ARM64, see ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},"Running on ARM64 (Experimental).")),(0,t.kt)("p",null,"For information on how to install Docker, refer to the official ",(0,t.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")),(0,t.kt)("h3",{id:"oracle-linux-and-rhel-derived-linux-nodes"},"Oracle Linux and RHEL Derived Linux Nodes"),(0,t.kt)("p",null,"Some distributions of Linux derived from RHEL, including Oracle Linux, may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes 1.19, firewalld must be turned off."),(0,t.kt)("h3",{id:"suse-linux-nodes"},"SUSE Linux Nodes"),(0,t.kt)("p",null,"SUSE Linux may have a firewall that blocks all ports by default. In that situation, follow ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements#opening-suse-linux-ports"},"these steps")," to open the ports needed for adding a host to a custom cluster."),(0,t.kt)("h3",{id:"flatcar-container-linux-nodes"},"Flatcar Container Linux Nodes"),(0,t.kt)("p",null,"When ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Launching Kubernetes with Rancher")," using Flatcar Container Linux nodes, it is required to use the following configuration in the ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#cluster-config-file"},"Cluster Config File")),(0,t.kt)(h,{mdxType:"Tabs"},(0,t.kt)(m,{value:"Canal",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: canal\n    options:\n      canal_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n"))),(0,t.kt)(m,{value:"Calico",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: calico\n    options:\n      calico_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n")))),(0,t.kt)("p",null,"It is also required to enable the Docker service, you can enable the Docker service using the following command:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"systemctl enable docker.service\n")),(0,t.kt)("p",null,"The Docker service is enabled automatically when using ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/about-provisioning-drivers#node-drivers"},"Node Drivers"),"."),(0,t.kt)("h3",{id:"windows-nodes"},"Windows Nodes"),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Windows worker nodes can be used as of Rancher v2.3.0")),(0,t.kt)("p",null,"Nodes with Windows Server must run Docker Enterprise Edition."),(0,t.kt)("p",null,"Windows nodes can be used for worker nodes only. See ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"Configuring Custom Clusters for Windows")),(0,t.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,t.kt)("p",null,"The hardware requirements for nodes with the ",(0,t.kt)("inlineCode",{parentName:"p"},"worker")," role mostly depend on your workloads. The minimum to run the Kubernetes node components is 1 CPU (core) and 1GB of memory."),(0,t.kt)("p",null,"Regarding CPU and memory, it is recommended that the different planes of Kubernetes clusters (etcd, controlplane, and workers) should be hosted on different nodes so that they can scale separately from each other."),(0,t.kt)("p",null,"For hardware recommendations for large Kubernetes clusters, refer to the official Kubernetes documentation on ",(0,t.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"},"building large clusters.")),(0,t.kt)("p",null,"For hardware recommendations for etcd clusters in production, refer to the official ",(0,t.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/hardware/"},"etcd documentation.")),(0,t.kt)("h2",{id:"networking-requirements"},"Networking Requirements"),(0,t.kt)("p",null,"For a production cluster, we recommend that you restrict traffic by opening only the ports defined in the port requirements below."),(0,t.kt)("p",null,"The ports required to be open are different depending on how the user cluster is launched. Each of the sections below list the ports that need to be opened for different ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"cluster creation options"),"."),(0,t.kt)("p",null,"For a breakdown of the port requirements for etcd nodes, controlplane nodes, and worker nodes in a Kubernetes cluster, refer to the ",(0,t.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"port requirements for the Rancher Kubernetes Engine.")),(0,t.kt)("p",null,"Details on which ports are used in each situation are found under ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements#downstream-kubernetes-cluster-nodes"},"Downstream Cluster Port Requirements"),"."),(0,t.kt)("h2",{id:"optional-security-considerations"},"Optional: Security Considerations"),(0,t.kt)("p",null,"If you want to provision a Kubernetes cluster that is compliant with the CIS (Center for Internet Security) Kubernetes Benchmark, we recommend to following our hardening guide to configure your nodes before installing Kubernetes."),(0,t.kt)("p",null,"For more information on the hardening guide and details on which version of the guide corresponds to your Rancher and Kubernetes versions, refer to the ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/rancher-security#rancher-hardening-guide"},"security section.")))}g.isMDXComponent=!0}}]);
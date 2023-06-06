"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[94398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup"},s=void 0,u={unversionedId:"pages-for-subheaders/installation-requirements",id:"version-2.0-2.4/pages-for-subheaders/installation-requirements",title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/installation-requirements.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/installation-requirements",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/installation-requirements.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup"},sidebar:"tutorialSidebar",previous:{title:"Installing/Upgrading Rancher",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},next:{title:"Installing Docker",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/install-docker"}},p={},d=[{value:"Operating Systems and Container Runtime Requirements",id:"operating-systems-and-container-runtime-requirements",level:2},{value:"RKE Specific Requirements",id:"rke-specific-requirements",level:3},{value:"K3s Specific Requirements",id:"k3s-specific-requirements",level:3},{value:"Installing Docker",id:"installing-docker",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"CPU and Memory",id:"cpu-and-memory",level:3},{value:"CPU and Memory for Rancher before v2.4.0",id:"cpu-and-memory-for-rancher-before-v240",level:3},{value:"Disks",id:"disks",level:3},{value:"Networking Requirements",id:"networking-requirements",level:2},{value:"Node IP Addresses",id:"node-ip-addresses",level:3},{value:"Port Requirements",id:"port-requirements",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=m("Tabs"),h=m("TabItem"),k={toc:d};function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},k,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page describes the software, hardware, and networking requirements for the nodes where the Rancher server will be installed. The Rancher server can be installed on a single node or a high-availability Kubernetes cluster."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is important to note that if you install Rancher on a Kubernetes cluster, requirements are different from the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"node requirements for downstream user clusters,")," which will run your apps and services.")),(0,n.kt)("p",null,"Make sure the node(s) for the Rancher server fulfill the following requirements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#hardware-requirements"},"Hardware Requirements"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#cpu-and-memory"},"CPU and Memory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#cpu-and-memory-for-rancher-before-v2-4-0"},"CPU and Memory for Rancher before v2.4.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#disks"},"Disks")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#networking-requirements"},"Networking Requirements"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#node-ip-addresses"},"Node IP Addresses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#port-requirements"},"Port Requirements"))))),(0,n.kt)("p",null,"For a list of best practices that we recommend for running the Rancher server in production, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/best-practices/deployment-types"},"best practices section.")),(0,n.kt)("p",null,"The Rancher UI works best in Firefox or Chrome."),(0,n.kt)("h2",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,n.kt)("p",null,"Rancher should work with any modern Linux distribution."),(0,n.kt)("p",null,"For details on which OS, Docker, and Kubernetes versions were tested with each Rancher version, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,n.kt)("p",null,"All supported operating systems are 64-bit x86."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ntp")," (Network Time Protocol) package should be installed. This prevents errors with certificate validation that can occur when the time is not synchronized between the client and server."),(0,n.kt)("p",null,"Some distributions of Linux may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes 1.19, firewalld must be turned off."),(0,n.kt)("p",null,"If you plan to run Rancher on ARM64, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},"Running on ARM64 (Experimental).")),(0,n.kt)("h3",{id:"rke-specific-requirements"},"RKE Specific Requirements"),(0,n.kt)("p",null,"For the container runtime, RKE should work with any modern Docker version."),(0,n.kt)("h3",{id:"k3s-specific-requirements"},"K3s Specific Requirements"),(0,n.kt)("p",null,"For the container runtime, K3s should work with any modern version of Docker or containerd."),(0,n.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")," To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script."),(0,n.kt)("p",null,"If you are installing Rancher on a K3s cluster with ",(0,n.kt)("strong",{parentName:"p"},"Raspbian Buster"),", follow ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#enabling-legacy-iptables-on-raspbian-buster"},"these steps")," to switch to legacy iptables."),(0,n.kt)("p",null,"If you are installing Rancher on a K3s cluster with Alpine Linux, follow ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup"},"these steps")," for additional setup."),(0,n.kt)("h3",{id:"installing-docker"},"Installing Docker"),(0,n.kt)("p",null,"Docker is required for Helm chart installs, and it can be installed by following the steps in the official ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")," Rancher also provides ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/install-docker"},"scripts")," to install Docker with one command."),(0,n.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.kt)("p",null,"This section describes the CPU, memory, and disk requirements for the nodes where the Rancher server is installed."),(0,n.kt)("h3",{id:"cpu-and-memory"},"CPU and Memory"),(0,n.kt)("p",null,"Hardware requirements scale based on the size of your Rancher deployment. Provision each individual node according to the requirements. The requirements are different depending on if you are installing Rancher in a single container with Docker, or if you are installing Rancher on a Kubernetes cluster."),(0,n.kt)(c,{mdxType:"Tabs"},(0,n.kt)(h,{value:"RKE",mdxType:"TabItem"},(0,n.kt)("p",null,"These requirements apply to each host in an ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"RKE Kubernetes cluster where the Rancher server is installed.")),(0,n.kt)("p",null,"Performance increased in Rancher v2.4.0. For the requirements of Rancher before v2.4.0, refer to ",(0,n.kt)("a",{parentName:"p",href:"#cpu-and-memory-for-rancher-before-v2-4-0"},"this section.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,n.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,n.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,n.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Small"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Medium"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Large"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,n.kt)("td",{parentName:"tr",align:null},"16"),(0,n.kt)("td",{parentName:"tr",align:null},"64 GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,n.kt)("td",{parentName:"tr",align:null},"32"),(0,n.kt)("td",{parentName:"tr",align:null},"128 GB")))),(0,n.kt)("p",null,"Every use case and environment is different. Please ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"contact Rancher")," to review yours.")),(0,n.kt)(h,{value:"K3s",mdxType:"TabItem"},(0,n.kt)("p",null,"These requirements apply to each host in a ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"K3s Kubernetes cluster where the Rancher server is installed.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,n.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,n.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,n.kt)("th",{parentName:"tr",align:null},"RAM"),(0,n.kt)("th",{parentName:"tr",align:null},"Database Size"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Small"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,n.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Medium"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,n.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Large"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"32 GB"),(0,n.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,n.kt)("td",{parentName:"tr",align:null},"16"),(0,n.kt)("td",{parentName:"tr",align:null},"64 GB"),(0,n.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,n.kt)("td",{parentName:"tr",align:null},"32"),(0,n.kt)("td",{parentName:"tr",align:null},"128 GB"),(0,n.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")))),(0,n.kt)("p",null,"Every use case and environment is different. Please ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"contact Rancher")," to review yours.")),(0,n.kt)(h,{value:"Docker",mdxType:"TabItem"},(0,n.kt)("p",null,"These requirements apply to a host with a ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"single-node")," installation of Rancher."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,n.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,n.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,n.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Small"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"4 GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Medium"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"8 GB")))))),(0,n.kt)("h3",{id:"cpu-and-memory-for-rancher-before-v240"},"CPU and Memory for Rancher before v2.4.0"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to expand"),(0,n.kt)("p",null,"These requirements apply to installing Rancher on an RKE Kubernetes cluster before Rancher v2.4.0:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,n.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,n.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,n.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Small"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Medium"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Large"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 100"),(0,n.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,n.kt)("td",{parentName:"tr",align:null},"32"),(0,n.kt)("td",{parentName:"tr",align:null},"128 GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,n.kt)("td",{parentName:"tr",align:null},"100+"),(0,n.kt)("td",{parentName:"tr",align:null},"1000+"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://rancher.com/contact/"},"Contact Rancher")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://rancher.com/contact/"},"Contact Rancher")))))),(0,n.kt)("h3",{id:"disks"},"Disks"),(0,n.kt)("p",null,"Rancher performance depends on etcd in the cluster performance. To ensure optimal speed, we recommend always using SSD disks to back your Rancher management Kubernetes cluster. On cloud providers, you will also want to use the minimum size that allows the maximum IOPS. In larger clusters, consider using dedicated storage devices for etcd data and wal directories."),(0,n.kt)("h2",{id:"networking-requirements"},"Networking Requirements"),(0,n.kt)("p",null,"This section describes the networking requirements for the node(s) where the Rancher server is installed."),(0,n.kt)("h3",{id:"node-ip-addresses"},"Node IP Addresses"),(0,n.kt)("p",null,"Each node used should have a static IP configured, regardless of whether you are installing Rancher on a single node or on an HA cluster. In case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated."),(0,n.kt)("h3",{id:"port-requirements"},"Port Requirements"),(0,n.kt)("p",null,"To operate properly, Rancher requires a number of ports to be open on Rancher nodes and on downstream Kubernetes cluster nodes. ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements"},"Port Requirements")," lists all the necessary ports for Rancher and Downstream Clusters for the different cluster types."))}g.isMDXComponent=!0}}]);
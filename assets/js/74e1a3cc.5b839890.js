"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Creating a DigitalOcean Cluster"},s=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",title:"Creating a DigitalOcean Cluster",description:"In this section, you'll learn how to use Rancher to install an RKE Kubernetes cluster in DigitalOcean.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1685574248,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"Creating a DigitalOcean Cluster"},sidebar:"tutorialSidebar",previous:{title:"Creating an Amazon EC2 Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"},next:{title:"Creating an Azure Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster"}},u={},p=[{value:"1. Create your cloud credentials",id:"1-create-your-cloud-credentials",level:2},{value:"2. Create a node template with your cloud credentials",id:"2-create-a-node-template-with-your-cloud-credentials",level:2},{value:"3. Create a cluster with node pools using the node template",id:"3-create-a-cluster-with-node-pools-using-the-node-template",level:2},{value:"Optional Next Steps",id:"optional-next-steps",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},h=d("Tabs"),m=d("TabItem"),g={toc:p};function k(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section, you'll learn how to use Rancher to install an ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in DigitalOcean."),(0,n.kt)("p",null,"First, you will set up your DigitalOcean cloud credentials in Rancher. Then you will use your cloud credentials to create a node template, which Rancher will use to provision new nodes in DigitalOcean."),(0,n.kt)("p",null,"Then you will create a DigitalOcean cluster in Rancher, and when configuring the new cluster, you will define node pools for it. Each node pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install RKE Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the node pool."),(0,n.kt)(h,{mdxType:"Tabs"},(0,n.kt)(m,{value:"Rancher v2.2.0+",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#1-create-your-cloud-credentials"},"Create your cloud credentials")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#2-create-a-node-template-with-your-cloud-credentials"},"Create a node template with your cloud credentials")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#3-create-a-cluster-with-node-pools-using-the-node-template"},"Create a cluster with node pools using the node template"))),(0,n.kt)("h2",{id:"1-create-your-cloud-credentials"},"1. Create your cloud credentials"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credentials.")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Cloud Credential.")),(0,n.kt)("li",{parentName:"ol"},"Enter a name for the cloud credential."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credential Type")," field, select ",(0,n.kt)("strong",{parentName:"li"},"DigitalOcean"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your Digital Ocean credentials."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters."),(0,n.kt)("h2",{id:"2-create-a-node-template-with-your-cloud-credentials"},"2. Create a node template with your cloud credentials"),(0,n.kt)("p",null,"Creating a ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template")," for DigitalOcean will allow Rancher to provision new nodes in DigitalOcean. Node templates can be reused for other clusters."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,n.kt)("strong",{parentName:"li"},"Node Templates.")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Template.")),(0,n.kt)("li",{parentName:"ol"},"Fill out a node template for DigitalOcean. For help filling out the form, refer to ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"},"DigitalOcean Node Template Configuration."))),(0,n.kt)("h2",{id:"3-create-a-cluster-with-node-pools-using-the-node-template"},"3. Create a cluster with node pools using the node template"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,n.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"DigitalOcean"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,n.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,n.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,n.kt)("strong",{parentName:"li"},"Show advanced options.")," For help configuring the cluster, refer to the ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,n.kt)("li",{parentName:"ol"},"Add one or more node pools to your cluster. Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. For more information about node pools, including best practices for assigning Kubernetes roles to them, see ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this section.")),(0,n.kt)("li",{parentName:"ol"},"Review your options to confirm they're correct. Then click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")),(0,n.kt)("p",null,"Your cluster is created and assigned a state of ",(0,n.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,n.kt)("p",null,"You can access your cluster after its state is updated to ",(0,n.kt)("strong",{parentName:"p"},"Active.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,n.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces"))),(0,n.kt)(m,{value:"Rancher before v2.2.0",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,n.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"DigitalOcean"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,n.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,n.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,n.kt)("strong",{parentName:"li"},"Show advanced options.")," For help configuring the cluster, refer to the ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,n.kt)("li",{parentName:"ol"},"Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. To create a node template, click ",(0,n.kt)("strong",{parentName:"li"},"Add Node Template")," and complete the ",(0,n.kt)("strong",{parentName:"li"},"Digital Ocean Options")," form. For help filling out the form, refer to the ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"},"Digital Ocean node template configuration reference.")," For more information about node pools, including best practices for assigning Kubernetes roles to them, see ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this section.")),(0,n.kt)("li",{parentName:"ol"},"Review your options to confirm they're correct. Then click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")),(0,n.kt)("p",null,"Your cluster is created and assigned a state of ",(0,n.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,n.kt)("p",null,"You can access your cluster after its state is updated to ",(0,n.kt)("strong",{parentName:"p"},"Active.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,n.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))),(0,n.kt)("h2",{id:"optional-next-steps"},"Optional Next Steps"),(0,n.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-from-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster.")))}k.isMDXComponent=!0}}]);
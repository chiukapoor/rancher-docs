"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,h=d["".concat(o,".").concat(g)]||d[g]||p[g]||s;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});r(67294);var n=r(3905),a=r(47218);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Setting up Kubernetes Clusters in Rancher",description:"Provisioning Kubernetes Clusters"},u=void 0,c={unversionedId:"pages-for-subheaders/kubernetes-clusters-in-rancher-setup",id:"pages-for-subheaders/kubernetes-clusters-in-rancher-setup",title:"Setting up Kubernetes Clusters in Rancher",description:"Provisioning Kubernetes Clusters",source:"@site/docs/pages-for-subheaders/kubernetes-clusters-in-rancher-setup.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup",permalink:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/kubernetes-clusters-in-rancher-setup.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Setting up Kubernetes Clusters in Rancher",description:"Provisioning Kubernetes Clusters"},sidebar:"tutorialSidebar",previous:{title:"Setting up Amazon ELB Network Load Balancer",permalink:"/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},next:{title:"Node Requirements for Rancher Managed Clusters",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"}},p={},d=[{value:"Cluster Management Capabilities by Cluster Type",id:"cluster-management-capabilities-by-cluster-type",level:3},{value:"Setting up Clusters in a Hosted Kubernetes Provider",id:"setting-up-clusters-in-a-hosted-kubernetes-provider",level:2},{value:"Launching Kubernetes with Rancher",id:"launching-kubernetes-with-rancher",level:2},{value:"Launching Kubernetes and Provisioning Nodes in an Infrastructure Provider",id:"launching-kubernetes-and-provisioning-nodes-in-an-infrastructure-provider",level:3},{value:"Launching Kubernetes on Existing Custom Nodes",id:"launching-kubernetes-on-existing-custom-nodes",level:3},{value:"Registering Existing Clusters",id:"registering-existing-clusters",level:2},{value:"Programmatically Creating Clusters",id:"programmatically-creating-clusters",level:2}],g={toc:d};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rancher simplifies the creation of clusters by allowing you to create them through the Rancher UI rather than more complex alternatives. Rancher provides multiple options for launching a cluster. Use the option that best fits your use case."),(0,n.kt)("p",null,"This section assumes a basic familiarity with Docker and Kubernetes. For a brief explanation of how Kubernetes components work together, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/reference-guides/kubernetes-concepts"},"concepts")," page."),(0,n.kt)("p",null,"For a conceptual overview of how the Rancher server provisions clusters and what tools it uses to provision them, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture"},"architecture")," page."),(0,n.kt)("h3",{id:"cluster-management-capabilities-by-cluster-type"},"Cluster Management Capabilities by Cluster Type"),(0,n.kt)("p",null,"The following table summarizes the options and settings available for each cluster type:"),(0,n.kt)(a.ZP,{mdxType:"ClusterCapabilitiesTable"}),(0,n.kt)("h2",{id:"setting-up-clusters-in-a-hosted-kubernetes-provider"},"Setting up Clusters in a Hosted Kubernetes Provider"),(0,n.kt)("p",null,"In this scenario, Rancher does not provision Kubernetes because it is installed by providers such as Google Kubernetes Engine (GKE), Amazon Elastic Container Service for Kubernetes, or Azure Kubernetes Service."),(0,n.kt)("p",null,"If you use a Kubernetes provider such as Google GKE, Rancher integrates with its cloud APIs, allowing you to create and manage role-based access control for the hosted cluster from the Rancher UI."),(0,n.kt)("p",null,"For more information, refer to the section on ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted Kubernetes clusters.")),(0,n.kt)("h2",{id:"launching-kubernetes-with-rancher"},"Launching Kubernetes with Rancher"),(0,n.kt)("p",null,"Rancher uses the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine (RKE)")," as a library when provisioning Kubernetes on your own nodes. RKE is Rancher\u2019s own lightweight Kubernetes installer."),(0,n.kt)("p",null,"In RKE clusters, Rancher manages the deployment of Kubernetes. These clusters can be deployed on any bare metal server, cloud provider, or virtualization platform."),(0,n.kt)("p",null,"These nodes can be dynamically provisioned through Rancher's UI, which calls ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine")," to launch nodes on various cloud providers."),(0,n.kt)("p",null,"If you already have a node that you want to add to an RKE cluster, you can add it to the cluster by running a Rancher agent container on it."),(0,n.kt)("p",null,"For more information, refer to the section on ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters.")),(0,n.kt)("h3",{id:"launching-kubernetes-and-provisioning-nodes-in-an-infrastructure-provider"},"Launching Kubernetes and Provisioning Nodes in an Infrastructure Provider"),(0,n.kt)("p",null,"Rancher can dynamically provision nodes in infrastructure providers such as Amazon EC2, DigitalOcean, Azure, or vSphere, then install Kubernetes on them."),(0,n.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template"),". This template defines the parameters used to launch nodes in your cloud providers."),(0,n.kt)("p",null,"One benefit of using nodes hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically replace it, thus maintaining the expected cluster configuration."),(0,n.kt)("p",null,"The cloud providers available for creating a node template are decided based on the ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-drivers"},"node drivers")," active in the Rancher UI."),(0,n.kt)("p",null,"For more information, refer to the section on ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"nodes hosted by an infrastructure provider")),(0,n.kt)("h3",{id:"launching-kubernetes-on-existing-custom-nodes"},"Launching Kubernetes on Existing Custom Nodes"),(0,n.kt)("p",null,"When setting up this type of cluster, Rancher installs Kubernetes on existing ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-existing-nodes"},"custom nodes,")," which creates a custom cluster."),(0,n.kt)("p",null,"You can bring any nodes you want to Rancher and use them to create a cluster."),(0,n.kt)("p",null,"These nodes include on-prem bare metal servers, cloud-hosted virtual machines, or on-prem virtual machines."),(0,n.kt)("h2",{id:"registering-existing-clusters"},"Registering Existing Clusters"),(0,n.kt)("p",null,"The cluster registration feature replaces the feature to import clusters."),(0,n.kt)("p",null,"Registering EKS clusters now provides additional benefits. For the most part, registered EKS clusters and EKS clusters created in Rancher are treated the same way in the Rancher UI, except for deletion."),(0,n.kt)("p",null,"When you delete an EKS cluster that was created in Rancher, the cluster is destroyed. When you delete an EKS cluster that was registered in Rancher, it is disconnected from the Rancher server, but it still exists and you can still access it in the same way you did before it was registered in Rancher."),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"this page.")),(0,n.kt)("h2",{id:"programmatically-creating-clusters"},"Programmatically Creating Clusters"),(0,n.kt)("p",null,"The most common way to programmatically deploy Kubernetes clusters through Rancher is by using the Rancher2 Terraform provider. The documentation for creating clusters with Terraform is ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"here.")),(0,n.kt)("p",null,"EKS, GKE, AKS clusters and RKE clusters can be created or imported with Terraform."))}h.isMDXComponent=!0},47218:(e,t,r)=>{r.d(t,{ZP:()=>o});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={toc:[]};function o(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},i,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:null},"Rancher Launched Kubernetes Clusters"),(0,n.kt)("th",{parentName:"tr",align:null},"EKS, GKE and AKS Clusters",(0,n.kt)("sup",null,"1")),(0,n.kt)("th",{parentName:"tr",align:null},"Other Hosted Kubernetes Clusters"),(0,n.kt)("th",{parentName:"tr",align:null},"Non-EKS or GKE Registered Clusters"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Using kubectl and a kubeconfig file to Access a Cluster")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Managing Cluster Members")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages-for-subheaders/cluster-configuration"},"Editing and Upgrading Clusters")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713",(0,n.kt)("sup",null,"2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools"},"Managing Nodes")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713",(0,n.kt)("sup",null,"3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages-for-subheaders/create-kubernetes-persistent-storage"},"Managing Persistent Volumes and Storage Classes")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},"Managing Projects, Namespaces and Workloads")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages-for-subheaders/helm-charts-in-rancher"},"Using App Catalogs")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Configuring Tools (",(0,n.kt)("a",{parentName:"td",href:"/pages-for-subheaders/monitoring-and-alerting"},"Alerts, Notifiers, Monitoring"),", ",(0,n.kt)("a",{parentName:"td",href:"/pages-for-subheaders/logging"},"Logging"),", ",(0,n.kt)("a",{parentName:"td",href:"/pages-for-subheaders/istio"},"Istio"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages-for-subheaders/cis-scan-guides"},"Running Security Scans")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/rotate-certificates"},"Ability to rotate certificates")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ability to ",(0,n.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"backup")," and ",(0,n.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"restore")," Rancher-launched clusters"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713",(0,n.kt)("sup",null,"4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning Kubernetes components when clusters are no longer reachable from Rancher")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy"},"Configuring Pod Security Policies")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Registered EKS, GKE and AKS clusters have the same options available as EKS, GKE and AKS clusters created from the Rancher UI. The  difference is that when a registered cluster is deleted from the Rancher UI, it is not destroyed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cluster configuration options can't be edited for registered clusters, except for ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"K3s and RKE2 clusters."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For registered cluster nodes, the Rancher UI exposes the ability to cordon, drain, and edit the node.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For registered clusters using etcd as a control plane, snapshots must be taken manually outside of the Rancher UI to use for backup and recovery."))))}o.isMDXComponent=!0}}]);
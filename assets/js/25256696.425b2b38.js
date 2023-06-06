"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Creating a GKE Cluster"},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",title:"Creating a GKE Cluster",description:"Prerequisites",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",tags:[],version:"current",lastUpdatedAt:1675727009,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Creating a GKE Cluster"},sidebar:"tutorialSidebar",previous:{title:"Creating an EKS Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks"},next:{title:"Creating an AKS Cluster",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Service Account Token",id:"service-account-token",level:3},{value:"Google Project ID",id:"google-project-id",level:3},{value:"Provisioning a GKE Cluster",id:"provisioning-a-gke-cluster",level:2},{value:"1. Create a Cloud Credential",id:"1-create-a-cloud-credential",level:3},{value:"2. Create the GKE Cluster",id:"2-create-the-gke-cluster",level:3},{value:"Private Clusters",id:"private-clusters",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"Updating Kubernetes Version",id:"updating-kubernetes-version",level:2},{value:"Syncing",id:"syncing",level:2},{value:"Programmatically Creating GKE Clusters",id:"programmatically-creating-gke-clusters",level:2}],d={toc:p};function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Some setup in Google Kubernetes Engine is required."),(0,n.kt)("h3",{id:"service-account-token"},"Service Account Token"),(0,n.kt)("p",null,"Create a service account using ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts"},"Google Kubernetes Engine"),". GKE uses this account to operate your cluster. Creating this account also generates a private key used for authentication."),(0,n.kt)("p",null,"The service account requires the following roles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Compute Viewer:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"roles/compute.viewer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Project Viewer:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"roles/viewer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kubernetes Engine Admin:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"roles/container.admin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Service Account User:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"roles/iam.serviceAccountUser"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"},"Google Documentation: Creating and Enabling Service Accounts")),(0,n.kt)("p",null,"For help obtaining a private key for your service account, refer to the Google cloud documentation ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys"},"here.")," You will need to save the key in JSON format."),(0,n.kt)("h3",{id:"google-project-id"},"Google Project ID"),(0,n.kt)("p",null,"Your cluster will need to be part of a Google Project."),(0,n.kt)("p",null,"To create a new project, refer to the Google cloud documentation ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project"},"here.")),(0,n.kt)("p",null,"To get the project ID of an existing project, refer to the Google cloud documentation ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects"},"here.")),(0,n.kt)("h2",{id:"provisioning-a-gke-cluster"},"Provisioning a GKE Cluster"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Deploying to GKE will incur charges.")),(0,n.kt)("h3",{id:"1-create-a-cloud-credential"},"1. Create a Cloud Credential"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for your Google cloud credentials."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Service Account")," text box, paste your service account private key JSON, or upload the JSON file."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," You have created credentials that Rancher will use to provision the new GKE cluster."),(0,n.kt)("h3",{id:"2-create-the-gke-cluster"},"2. Create the GKE Cluster"),(0,n.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster. To successfully create a GKE cluster with Rancher, your GKE must be in Standard mode. GKE has two modes of operation when creating a Kubernetes cluster, Autopilot and Standard mode. The cluster configuration for Autopilot mode has restrictions on editing the kube-system namespace. However, Rancher needs to create resources in the kube-system namespace during installation. As a result, you will not be able to create a GKE cluster in Autopilot mode. For more information about the difference between GKE Autopilot mode and Standard mode, visit ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/resources/autopilot-standard-feature-comparison"},"Compare GKE Autopilot and Standard.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Google GKE"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,n.kt)("li",{parentName:"ol"},"Optional: Use ",(0,n.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,n.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,n.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,n.kt)("li",{parentName:"ol"},"Optional: Add Kubernetes ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," or ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"annotations")," to the cluster."),(0,n.kt)("li",{parentName:"ol"},"Enter your Google project ID and your Google cloud credentials."),(0,n.kt)("li",{parentName:"ol"},"Fill out the rest of the form. For help, refer to the ",(0,n.kt)("a",{parentName:"li",href:"/pages-for-subheaders/gke-cluster-configuration"},"GKE cluster configuration reference.")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," You have successfully deployed a GKE cluster."),(0,n.kt)("p",null,"Your cluster is created and assigned a state of ",(0,n.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,n.kt)("p",null,"You can access your cluster after its state is updated to ",(0,n.kt)("strong",{parentName:"p"},"Active"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,n.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,n.kt)("h2",{id:"private-clusters"},"Private Clusters"),(0,n.kt)("p",null,"Private GKE clusters are supported. Note: This advanced setup can require more steps during the cluster provisioning process. For details, see ",(0,n.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters"},"this section.")),(0,n.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,n.kt)("p",null,"For details on configuring GKE clusters in Rancher, see ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/gke-cluster-configuration"},"this page.")),(0,n.kt)("h2",{id:"updating-kubernetes-version"},"Updating Kubernetes Version"),(0,n.kt)("p",null,"The Kubernetes version of a cluster can be upgraded to any version available in the region or zone fo the GKE cluster. Upgrading the master Kubernetes version does not automatically upgrade worker nodes. Nodes can be upgraded independently."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"GKE has removed basic authentication in 1.19+. In order to upgrade a cluster to 1.19+, basic authentication must be disabled in the Google Cloud. Otherwise, an error will appear in Rancher when an upgrade to 1.19+ is attempted. You can follow the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication#disabling_authentication_with_a_static_password"},"Google documentation"),". After this, the Kubernetes version can be updated to 1.19+ via Rancher.")),(0,n.kt)("h2",{id:"syncing"},"Syncing"),(0,n.kt)("p",null,"The GKE provisioner can synchronize the state of a GKE cluster between Rancher and the provider. For an in-depth technical explanation of how this works, see ",(0,n.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"},"Syncing.")),(0,n.kt)("p",null,"For information on configuring the refresh interval, see ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/gke-cluster-configuration#configuring-the-refresh-interval"},"this section.")),(0,n.kt)("h2",{id:"programmatically-creating-gke-clusters"},"Programmatically Creating GKE Clusters"),(0,n.kt)("p",null,"The most common way to programmatically deploy GKE clusters through Rancher is by using the Rancher2 Terraform provider. The documentation for creating clusters with Terraform is ",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"here.")))}g.isMDXComponent=!0}}]);
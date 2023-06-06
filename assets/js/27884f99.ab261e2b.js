"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(r),d=s,h=g["".concat(l,".").concat(d)]||g[d]||c[d]||n;return r?o.createElement(h,a(a({ref:t},p),{},{components:r})):o.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,a=new Array(n);a[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<n;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},20041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});r(67294);var o=r(3905);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const i={title:"Kubernetes Persistent Storage: Volumes and Storage Classes",description:"Learn about the two ways with which you can create persistent storage in Kubernetes: persistent volumes and storage classes"},l=void 0,u={unversionedId:"pages-for-subheaders/create-kubernetes-persistent-storage",id:"pages-for-subheaders/create-kubernetes-persistent-storage",title:"Kubernetes Persistent Storage: Volumes and Storage Classes",description:"Learn about the two ways with which you can create persistent storage in Kubernetes: persistent volumes and storage classes",source:"@site/docs/pages-for-subheaders/create-kubernetes-persistent-storage.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/create-kubernetes-persistent-storage",permalink:"/pages-for-subheaders/create-kubernetes-persistent-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/create-kubernetes-persistent-storage.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Kubernetes Persistent Storage: Volumes and Storage Classes",description:"Learn about the two ways with which you can create persistent storage in Kubernetes: persistent volumes and storage classes"},sidebar:"tutorialSidebar",previous:{title:"Cluster Autoscaler with AWS EC2 Auto Scaling Groups",permalink:"/how-to-guides/new-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups"},next:{title:"How Persistent Storage Works",permalink:"/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting up Existing Storage",id:"setting-up-existing-storage",level:3},{value:"Dynamically Provisioning New Storage in Rancher",id:"dynamically-provisioning-new-storage-in-rancher",level:3},{value:"Longhorn Storage",id:"longhorn-storage",level:3},{value:"Provisioning Storage Examples",id:"provisioning-storage-examples",level:3},{value:"GlusterFS Volumes",id:"glusterfs-volumes",level:3},{value:"iSCSI Volumes",id:"iscsi-volumes",level:3},{value:"hostPath Volumes",id:"hostpath-volumes",level:3},{value:"Migrating vSphere Cloud Provider from In-tree to Out-of-tree",id:"migrating-vsphere-cloud-provider-from-in-tree-to-out-of-tree",level:3},{value:"Related Links",id:"related-links",level:3}],g={toc:c};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",n(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){s(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When deploying an application that needs to retain data, you'll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application's pod fails."),(0,o.kt)("p",null,"The documents in this section assume that you understand the Kubernetes concepts of persistent volumes, persistent volume claims, and storage classes. For more information, refer to the section on ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"how storage works.")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To set up persistent storage, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage Volumes")," ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-role-reference"},"role")," is required."),(0,o.kt)("p",null,"If you are provisioning storage for a cluster hosted in the cloud, the storage and cluster hosts must have the same cloud provider."),(0,o.kt)("p",null,"For provisioning new storage with Rancher, the cloud provider must be enabled. For details on enabling cloud providers, refer to ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/set-up-cloud-providers"},"this page.")),(0,o.kt)("p",null,"For attaching existing persistent storage to a cluster, the cloud provider does not need to be enabled."),(0,o.kt)("h3",{id:"setting-up-existing-storage"},"Setting up Existing Storage"),(0,o.kt)("p",null,"The overall workflow for setting up existing storage is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up your persistent storage. This may be storage in an infrastructure provider, or it could be your own storage."),(0,o.kt)("li",{parentName:"ol"},"Add a persistent volume (PV) that refers to the persistent storage."),(0,o.kt)("li",{parentName:"ol"},"Add a persistent volume claim (PVC) that refers to the PV."),(0,o.kt)("li",{parentName:"ol"},"Mount the PVC as a volume in your workload.")),(0,o.kt)("p",null,"For details and prerequisites, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage"},"this page.")),(0,o.kt)("h3",{id:"dynamically-provisioning-new-storage-in-rancher"},"Dynamically Provisioning New Storage in Rancher"),(0,o.kt)("p",null,"The overall workflow for provisioning new storage is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a StorageClass and configure it to use your storage provider. The StorageClass could refer to storage in an infrastructure provider, or it could refer to your own storage."),(0,o.kt)("li",{parentName:"ol"},"Add a persistent volume claim (PVC) that refers to the storage class."),(0,o.kt)("li",{parentName:"ol"},"Mount the PVC as a volume for your workload.")),(0,o.kt)("p",null,"For details and prerequisites, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"},"this page.")),(0,o.kt)("h3",{id:"longhorn-storage"},"Longhorn Storage"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/"},"Longhorn")," is a lightweight, reliable and easy-to-use distributed block storage system for Kubernetes."),(0,o.kt)("p",null,"Longhorn is free, open source software. Originally developed by Rancher Labs, it is now being developed as a sandbox project of the Cloud Native Computing Foundation. It can be installed on any Kubernetes cluster with Helm, with kubectl, or with the Rancher UI."),(0,o.kt)("p",null,"If you have a pool of block storage, Longhorn can help you provide persistent storage to your Kubernetes cluster without relying on cloud providers. For more information about Longhorn features, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/latest/what-is-longhorn/"},"documentation.")),(0,o.kt)("p",null,"Rancher v2.5 simplified the process of installing Longhorn on a Rancher-managed cluster. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/integrations-in-rancher/longhorn"},"this page.")),(0,o.kt)("h3",{id:"provisioning-storage-examples"},"Provisioning Storage Examples"),(0,o.kt)("p",null,"We provide examples of how to provision storage with ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/nfs-storage"},"NFS,")," ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage"},"vSphere,")," and ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs"},"Amazon's EBS.")),(0,o.kt)("h3",{id:"glusterfs-volumes"},"GlusterFS Volumes"),(0,o.kt)("p",null,"In clusters that store data on GlusterFS volumes, you may experience an issue where pods fail to mount volumes after restarting the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet"),". For details on preventing this from happening, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes"},"this page.")),(0,o.kt)("h3",{id:"iscsi-volumes"},"iSCSI Volumes"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes clusters")," that store data on iSCSI volumes, you may experience an issue where kubelets fail to automatically connect with iSCSI volumes. For details on resolving this issue, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes"},"this page.")),(0,o.kt)("h3",{id:"hostpath-volumes"},"hostPath Volumes"),(0,o.kt)("p",null,"Before you create a hostPath volume, you need to set up an ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/services-extras/#extra-binds/"},"extra_bind")," in your cluster configuration. This will mount the path as a volume in your kubelets, which can then be used for hostPath volumes in your workloads."),(0,o.kt)("h3",{id:"migrating-vsphere-cloud-provider-from-in-tree-to-out-of-tree"},"Migrating vSphere Cloud Provider from In-tree to Out-of-tree"),(0,o.kt)("p",null,"Kubernetes is moving away from maintaining cloud providers in-tree. vSphere has an out-of-tree cloud provider that can be used by installing the vSphere cloud provider and cloud storage plugins."),(0,o.kt)("p",null,"For instructions on how to migrate from the in-tree vSphere cloud provider to out-of-tree, and manage the existing VMs post migration, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere"},"this page.")),(0,o.kt)("h3",{id:"related-links"},"Related Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/"},"Kubernetes Documentation: Storage"))))}d.isMDXComponent=!0}}]);
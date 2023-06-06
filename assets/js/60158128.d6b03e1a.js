"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},35118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Migrating vSphere In-tree Volumes to CSI"},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree",title:"Migrating vSphere In-tree Volumes to CSI",description:"Available as of v2.5+",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Migrating vSphere In-tree Volumes to CSI"},sidebar:"tutorialSidebar",previous:{title:"How to Configure Out-of-tree vSphere Cloud Provider",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere"},next:{title:"Rancher Agents",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"}},c={},p=[{value:"Cloud-config Format Limitation",id:"cloud-config-format-limitation",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Migration",id:"migration",level:2},{value:"1. Install the CPI plugin",id:"1-install-the-cpi-plugin",level:3},{value:"2. Install the CSI driver",id:"2-install-the-csi-driver",level:3},{value:"3. Edit the cluster to enable CSI migration feature flags",id:"3-edit-the-cluster-to-enable-csi-migration-feature-flags",level:3},{value:"4. Drain worker nodes",id:"4-drain-worker-nodes",level:3}],h={toc:p};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.5+")),(0,n.kt)("p",null,"Kubernetes is moving away from maintaining cloud providers in-tree. vSphere has an out-of-tree cloud provider that can be used by installing the vSphere cloud provider and cloud storage plugins."),(0,n.kt)("p",null,"This page covers how to migrate from the in-tree vSphere cloud provider to out-of-tree, and manage the existing VMs post migration."),(0,n.kt)("p",null,"It follows the steps provided in the official ",(0,n.kt)("a",{parentName:"p",href:"https://vsphere-csi-driver.sigs.k8s.io/features/vsphere_csi_migration.html"},"vSphere migration documentation")," and provides the steps to be performed in Rancher."),(0,n.kt)("h3",{id:"cloud-config-format-limitation"},"Cloud-config Format Limitation"),(0,n.kt)("p",null,"Existing volumes that were provisioned using the following cloud-config format will NOT get migrated due to an existing bug in vsphere CSI."),(0,n.kt)("p",null,"If the cloud-config has this format for datastore and resource pool path, vsphere CSI driver cannot recognize it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'default-datastore: </datacenter>/datastore/<default-datastore-name>\nresourcepool-path: "</datacenter>/host/<cluster-name>/Resources/<resource-pool-name>"\n')),(0,n.kt)("p",null,"Volumes provisioned with the in-tree provider using the following format will get migrated correctly:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'default-datastore: <default-datastore-name>\nresourcepool-path: "<cluster-name>/Resources/<resource-pool-name>"\n')),(0,n.kt)("p",null,"Upstream bug: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/vsphere-csi-driver/issues/628"},"https://github.com/kubernetes-sigs/vsphere-csi-driver/issues/628")),(0,n.kt)("p",null,"Rancher issue tracking this bug: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/31105"},"https://github.com/rancher/rancher/issues/31105")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"vSphere CSI Migration requires vSphere 7.0u1. In order to be able to manage existing in-tree vSphere volumes, upgrade vSphere to 7.0u1."),(0,n.kt)("li",{parentName:"ul"},"The Kubernetes version must be 1.19 or higher.")),(0,n.kt)("h2",{id:"migration"},"Migration"),(0,n.kt)("h3",{id:"1-install-the-cpi-plugin"},"1. Install the CPI plugin"),(0,n.kt)("p",null,"Before installing CPI, we need to taint all nodes with ",(0,n.kt)("inlineCode",{parentName:"p"},"node.cloudprovider.kubernetes.io/uninitialized=true:NoSchedule"),"."),(0,n.kt)("p",null,"This can be done by running the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl -O https://raw.githubusercontent.com/rancher/helm3-charts/56b622f519728378abeddfe95074f1b87ab73b1e/charts/vsphere-cpi/taints.sh\n")),(0,n.kt)("p",null,"Or:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/rancher/helm3-charts/56b622f519728378abeddfe95074f1b87ab73b1e/charts/vsphere-cpi/taints.sh\nchmod +x taints.sh\n./taints.sh <path to kubeconfig if running the command outside the cluster>\n")),(0,n.kt)("p",null,"Once all nodes are tainted by the running the script, launch the Helm vSphere CPI chart."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Cluster Explorer")," view, go to the top left dropdown menu and click ",(0,n.kt)("strong",{parentName:"li"},"Apps & Marketplace.")),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"vSphere CPI")," chart."),(0,n.kt)("li",{parentName:"ol"},"Fill out the required vCenter details and click ",(0,n.kt)("strong",{parentName:"li"},"Launch"),".")),(0,n.kt)("p",null,"vSphere CPI initializes all nodes with ProviderID, which is needed by the vSphere CSI driver."),(0,n.kt)("p",null,"Check if all nodes are initialized with the ProviderID with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl describe nodes | grep "ProviderID"\n')),(0,n.kt)("h3",{id:"2-install-the-csi-driver"},"2. Install the CSI driver"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Cluster Explorer")," view, go to the top left dropdown menu and click ",(0,n.kt)("strong",{parentName:"li"},"Apps & Marketplace.")),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"vSphere CSI")," chart."),(0,n.kt)("li",{parentName:"ol"},"Fill out the required vCenter details and click ",(0,n.kt)("strong",{parentName:"li"},"Launch"),"."),(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("strong",{parentName:"li"},"Enable CSI Migration")," to ",(0,n.kt)("strong",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ol"},"This chart creates a StorageClass with the ",(0,n.kt)("inlineCode",{parentName:"li"},"csi.vsphere.vmware.com")," as the provisioner. You can provide the URL of the datastore to be used for CSI volume provisioning while creating this StorageClass. The datastore URL can be found in the vSphere client by selecting the datastore and going to the Summary tab. Fill out the details for the StorageClass and click ",(0,n.kt)("strong",{parentName:"li"},"Launch"),".")),(0,n.kt)("h3",{id:"3-edit-the-cluster-to-enable-csi-migration-feature-flags"},"3. Edit the cluster to enable CSI migration feature flags"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"While editing the cluster, if the Kubernetes version is less than 1.19, select Kubernetes version 1.19 or higher from the ",(0,n.kt)("strong",{parentName:"p"},"Kubernetes Version")," dropdown.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'For enabling feature flags, click on "Edit as YAML", and add the following under kube-controller and kubelet:'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'  extra_args:\n    feature-gates: "CSIMigration=true,CSIMigrationvSphere=true"\n')))),(0,n.kt)("h3",{id:"4-drain-worker-nodes"},"4. Drain worker nodes"),(0,n.kt)("p",null,"Worker nodes must be drained during the upgrade before changing the kubelet and kube-controller-manager args."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Edit as Form"),' and then click on "Advanced Options."'),(0,n.kt)("li",{parentName:"ol"},"Set the field ",(0,n.kt)("strong",{parentName:"li"},"Maximum Worker Nodes Unavailable")," to count of 1."),(0,n.kt)("li",{parentName:"ol"},"To drain the nodes during upgrade, select ",(0,n.kt)("strong",{parentName:"li"},"Drain Nodes > Yes"),"."),(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("strong",{parentName:"li"},"Force")," and ",(0,n.kt)("strong",{parentName:"li"},"Delete Local Data")," to ",(0,n.kt)("strong",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save")," to upgrade the cluster.")))}d.isMDXComponent=!0}}]);
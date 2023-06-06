"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"GKE Cluster Configuration Reference"},i=void 0,c={unversionedId:"pages-for-subheaders/gke-cluster-configuration",id:"version-2.6/pages-for-subheaders/gke-cluster-configuration",title:"GKE Cluster Configuration Reference",description:"Changes in Rancher v2.6",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/gke-cluster-configuration.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/gke-cluster-configuration",permalink:"/v2.6/pages-for-subheaders/gke-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/gke-cluster-configuration.md",tags:[],version:"2.6",lastUpdatedAt:1668535539,formattedLastUpdatedAt:"Nov 15, 2022",frontMatter:{title:"GKE Cluster Configuration Reference"},sidebar:"tutorialSidebar",previous:{title:"AKS Cluster Configuration Reference",permalink:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration"},next:{title:"Private Clusters",permalink:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters"}},u={},p=[{value:"Changes in Rancher v2.6",id:"changes-in-rancher-v26",level:2},{value:"Cluster Location",id:"cluster-location",level:2},{value:"Cluster Options",id:"cluster-options",level:2},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Container Address Range",id:"container-address-range",level:3},{value:"Network",id:"network",level:3},{value:"Node Subnet / Subnet",id:"node-subnet--subnet",level:3},{value:"Subnetwork Name",id:"subnetwork-name",level:3},{value:"Ip Aliases",id:"ip-aliases",level:3},{value:"Network Policy",id:"network-policy",level:3},{value:"Project Network Isolation",id:"project-network-isolation",level:3},{value:"Node Ipv4 CIDR Block",id:"node-ipv4-cidr-block",level:3},{value:"Cluster Secondary Range Name",id:"cluster-secondary-range-name",level:3},{value:"Cluster Pod Address Range",id:"cluster-pod-address-range",level:3},{value:"Services Secondary Range Name",id:"services-secondary-range-name",level:3},{value:"Service Address Range",id:"service-address-range",level:3},{value:"Private Cluster",id:"private-cluster",level:3},{value:"Enable Private Endpoint",id:"enable-private-endpoint",level:3},{value:"Master IPV4 CIDR Block",id:"master-ipv4-cidr-block",level:3},{value:"Master Authorized Network",id:"master-authorized-network",level:3},{value:"Additional Options",id:"additional-options",level:2},{value:"Cluster Addons",id:"cluster-addons",level:3},{value:"Horizontal Pod Autoscaling",id:"horizontal-pod-autoscaling",level:4},{value:"HTTP (L7) Load Balancing",id:"http-l7-load-balancing",level:4},{value:"Network Policy Config (master only)",id:"network-policy-config-master-only",level:4},{value:"Cluster Features (Alpha Features)",id:"cluster-features-alpha-features",level:3},{value:"Logging Service",id:"logging-service",level:3},{value:"Monitoring Service",id:"monitoring-service",level:3},{value:"Maintenance Window",id:"maintenance-window",level:3},{value:"Node Pools",id:"node-pools",level:2},{value:"Kubernetes Version",id:"kubernetes-version-1",level:3},{value:"Image Type",id:"image-type",level:3},{value:"Machine Type",id:"machine-type",level:3},{value:"Root Disk Type",id:"root-disk-type",level:3},{value:"Local SSD Disks",id:"local-ssd-disks",level:3},{value:"Preemptible nodes (beta)",id:"preemptible-nodes-beta",level:3},{value:"Taints",id:"taints",level:3},{value:"Node Labels",id:"node-labels",level:3},{value:"Network Tags",id:"network-tags",level:3},{value:"Group Details",id:"group-details",level:2},{value:"Name",id:"name",level:3},{value:"Initial Node Count",id:"initial-node-count",level:3},{value:"Max Pod Per Node",id:"max-pod-per-node",level:3},{value:"Autoscaling",id:"autoscaling",level:3},{value:"Auto Repair",id:"auto-repair",level:3},{value:"Auto Upgrade",id:"auto-upgrade",level:3},{value:"Access Scopes",id:"access-scopes",level:3},{value:"Configuring the Refresh Interval",id:"configuring-the-refresh-interval",level:3}],d={toc:p};function h(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"changes-in-rancher-v26"},"Changes in Rancher v2.6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for additional configuration options:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Project network isolation"),(0,o.kt)("li",{parentName:"ul"},"Network tags")))),(0,o.kt)("h2",{id:"cluster-location"},"Cluster Location"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Location Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Zonal or Regional. With GKE, you can create a cluster tailored to the availability requirements of your workload and your budget. By default, a cluster's nodes run in a single compute zone. When multiple zones are selected, the cluster's nodes will span multiple compute zones, while the controlplane is located in a single zone. Regional clusters increase the availability of the controlplane as well. For help choosing the type of cluster availability, refer to ",(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/kubernetes-engine/docs/best-practices/scalability#choosing_a_regional_or_zonal_control_plane"},"these docs."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Zone"),(0,o.kt)("td",{parentName:"tr",align:null},"Each region in Compute engine contains a number of zones. For more information about available regions and zones, refer to ",(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/compute/docs/regions-zones#available"},"these docs."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Additional Zones"),(0,o.kt)("td",{parentName:"tr",align:null},"For zonal clusters, you can select additional zones to create a ",(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/types-of-clusters#multi-zonal_clusters"},"multi-zone cluster."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Region"),(0,o.kt)("td",{parentName:"tr",align:null},"For ",(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/types-of-clusters#regional_clusters"},"regional clusters,")," you can select a region. For more information about available regions and zones, refer to ",(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/compute/docs/regions-zones#available"},"this section"),". The first part of each zone name is the name of the region.")))),(0,o.kt)("h2",{id:"cluster-options"},"Cluster Options"),(0,o.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"For more information on GKE Kubernetes versions, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/versioning"},"these docs.")),(0,o.kt)("h3",{id:"container-address-range"},"Container Address Range"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"The IP address range for pods in the cluster. Must be a valid CIDR range, e.g. 10.42.0.0/16. If not specified, a random range is automatically chosen from 10.0.0.0/8 and will exclude ranges already allocated to VMs, other clusters, or routes. Automatically chosen ranges may conflict with reserved IP addresses, dynamic routes, or routes within VPCs peering with the cluster."),(0,o.kt)("h3",{id:"network"},"Network"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"The Compute Engine Network that the cluster connects to. Routes and firewalls will be created using this network. If using ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/shared-vpc"},"Shared VPCs"),", the VPC networks that are shared to your project will appear here. will be available to select in this field. For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/vpc#vpc_networks_and_subnets"},"this page"),"."),(0,o.kt)("h3",{id:"node-subnet--subnet"},"Node Subnet / Subnet"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"The Compute Engine subnetwork that the cluster connects to. This subnetwork must belong to the network specified in the ",(0,o.kt)("strong",{parentName:"p"},"Network"),' field. Select an existing subnetwork, or select "Auto Create Subnetwork" to have one automatically created. If not using an existing network, ',(0,o.kt)("strong",{parentName:"p"},"Subnetwork Name")," is required to generate one. If using ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/shared-vpc"},"Shared VPCs"),', the VPC subnets that are shared to your project will appear here. If using a Shared VPC network, you cannot select "Auto Create Subnetwork". For more information, refer to ',(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/vpc#vpc_networks_and_subnets"},"this page.")),(0,o.kt)("h3",{id:"subnetwork-name"},"Subnetwork Name"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,'Automatically create a subnetwork with the provided name. Required if "Auto Create Subnetwork" is selected for ',(0,o.kt)("strong",{parentName:"p"},"Node Subnet")," or ",(0,o.kt)("strong",{parentName:"p"},"Subnet"),". For more information on subnetworks, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/vpc#vpc_networks_and_subnets"},"this page.")),(0,o.kt)("h3",{id:"ip-aliases"},"Ip Aliases"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"Enable ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/alias-ip"},"alias IPs"),". This enables VPC-native traffic routing. Required if using ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/shared-vpc"},"Shared VPCs"),"."),(0,o.kt)("h3",{id:"network-policy"},"Network Policy"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"Enable network policy enforcement on the cluster. A network policy defines the level of communication that can occur between pods and services in the cluster. For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy"},"this page.")),(0,o.kt)("h3",{id:"project-network-isolation"},"Project Network Isolation"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"choose whether to enable or disable inter-project communication. Note that enabling Project Network Isolation will automatically enable Network Policy and Network Policy Config, but not vice versa."),(0,o.kt)("h3",{id:"node-ipv4-cidr-block"},"Node Ipv4 CIDR Block"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,'The IP address range of the instance IPs in this cluster. Can be set if "Auto Create Subnetwork" is selected for ',(0,o.kt)("strong",{parentName:"p"},"Node Subnet")," or ",(0,o.kt)("strong",{parentName:"p"},"Subnet"),". Must be a valid CIDR range, e.g. 10.96.0.0/14. For more information on how to determine the IP address range, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/alias-ips#cluster_sizing"},"this page.")),(0,o.kt)("h3",{id:"cluster-secondary-range-name"},"Cluster Secondary Range Name"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"The name of an existing secondary range for Pod IP addresses. If selected, ",(0,o.kt)("strong",{parentName:"p"},"Cluster Pod Address Range")," will automatically be populated. Required if using a Shared VPC network."),(0,o.kt)("h3",{id:"cluster-pod-address-range"},"Cluster Pod Address Range"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"The IP address range assigned to pods in the cluster. Must be a valid CIDR range, e.g. 10.96.0.0/11. If not provided, will be created automatically. Must be provided if using a Shared VPC network. For more information on how to determine the IP address range for your pods, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/alias-ips#cluster_sizing_secondary_range_pods"},"this section.")),(0,o.kt)("h3",{id:"services-secondary-range-name"},"Services Secondary Range Name"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"The name of an existing secondary range for service IP addresses. If selected, ",(0,o.kt)("strong",{parentName:"p"},"Service Address Range")," will be automatically populated. Required if using a Shared VPC network."),(0,o.kt)("h3",{id:"service-address-range"},"Service Address Range"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"The address range assigned to the services in the cluster. Must be a valid CIDR range, e.g. 10.94.0.0/18. If not provided, will be created automatically. Must be provided if using a Shared VPC network. For more information on how to determine the IP address range for your services, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/alias-ips#cluster_sizing_secondary_range_svcs"},"this section.")),(0,o.kt)("h3",{id:"private-cluster"},"Private Cluster"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Private clusters require additional planning and configuration outside of Rancher. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters"},"private cluster guide"),".")),(0,o.kt)("p",null,"Assign nodes only internal IP addresses. Private cluster nodes cannot access the public internet unless additional networking steps are taken in GCP."),(0,o.kt)("h3",{id:"enable-private-endpoint"},"Enable Private Endpoint"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Private clusters require additional planning and configuration outside of Rancher. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration/gke-private-clusters"},"private cluster guide"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"Locks down external access to the control plane endpoint. Only available if ",(0,o.kt)("strong",{parentName:"p"},"Private Cluster")," is also selected. If selected, and if Rancher does not have direct access to the Virtual Private Cloud network the cluster is running in, Rancher will provide a registration command to run on the cluster to enable Rancher to connect to it."),(0,o.kt)("h3",{id:"master-ipv4-cidr-block"},"Master IPV4 CIDR Block"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"The IP range for the control plane VPC."),(0,o.kt)("h3",{id:"master-authorized-network"},"Master Authorized Network"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"Enable control plane authorized networks to block untrusted non-GCP source IPs from accessing the Kubernetes master through HTTPS. If selected, additional authorized networks may be added. If the cluster is created with a public endpoint, this option is useful for locking down access to the public endpoint to only certain networks, such as the network where your Rancher service is running. If the cluster only has a private endpoint, this setting is required."),(0,o.kt)("h2",{id:"additional-options"},"Additional Options"),(0,o.kt)("h3",{id:"cluster-addons"},"Cluster Addons"),(0,o.kt)("p",null,"Additional Kubernetes cluster components. For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.AddonsConfig"},"this page.")),(0,o.kt)("h4",{id:"horizontal-pod-autoscaling"},"Horizontal Pod Autoscaling"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"The Horizontal Pod Autoscaler changes the shape of your Kubernetes workload by automatically increasing or decreasing the number of Pods in response to the workload's CPU or memory consumption, or in response to custom metrics reported from within Kubernetes or external metrics from sources outside of your cluster. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/horizontalpodautoscaler"},"this page.")),(0,o.kt)("h4",{id:"http-l7-load-balancing"},"HTTP (L7) Load Balancing"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"HTTP (L7) Load Balancing distributes HTTP and HTTPS traffic to backends hosted on GKE. For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"},"this page.")),(0,o.kt)("h4",{id:"network-policy-config-master-only"},"Network Policy Config (master only)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the master, it does not track whether network policy is enabled for the nodes."),(0,o.kt)("h3",{id:"cluster-features-alpha-features"},"Cluster Features (Alpha Features)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"Turns on all Kubernetes alpha API groups and features for the cluster. When enabled, the cluster cannot be upgraded and will be deleted automatically after 30 days. Alpha clusters are not recommended for production use as they are not covered by the GKE SLA. For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/alpha-clusters"},"this page.")),(0,o.kt)("h3",{id:"logging-service"},"Logging Service"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"The logging service the cluster uses to write logs. Use either ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging"},"Cloud Logging")," or no logging service in which case no logs are exported from the cluster."),(0,o.kt)("h3",{id:"monitoring-service"},"Monitoring Service"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"The monitoring service the cluster uses to write metrics. Use either ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/monitoring"},"Cloud Monitoring")," or monitoring service in which case no metrics are exported from the cluster."),(0,o.kt)("h3",{id:"maintenance-window"},"Maintenance Window"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"Set the start time for a 4 hour maintenance window. The time is specified in the UTC time zone using the HH:MM format. For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions"},"this page.")),(0,o.kt)("h2",{id:"node-pools"},"Node Pools"),(0,o.kt)("p",null,"In this section, enter details describing the configuration of each node in the node pool."),(0,o.kt)("h3",{id:"kubernetes-version-1"},"Kubernetes Version"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"The Kubernetes version for each node in the node pool. For more information on GKE Kubernetes versions, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/versioning"},"these docs.")),(0,o.kt)("h3",{id:"image-type"},"Image Type"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"The node operating system image. For more information for the node image options that GKE offers for each OS, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/node-images#available_node_images"},"this page.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'The default option is "Container-Optimized OS with Docker". The read-only filesystem on GCP\'s Container-Optimized OS is not compatible with the ',(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-logging"},"legacy logging"),' implementation in Rancher. If you need to use the legacy logging feature, select "Ubuntu with Docker" or "Ubuntu with Containerd". The ',(0,o.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/logging"},"current logging feature")," is compatible with the Container-Optimized OS image.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'If selecting "Windows Long Term Service Channel" or "Windows Semi-Annual Channel" for the node pool image type, you must also add at least one Container-Optimized OS or Ubuntu node pool.')),(0,o.kt)("h3",{id:"machine-type"},"Machine Type"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"The virtualized hardware resources available to node instances. For more information on Google Cloud machine types, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/machine-types#machine_types"},"this page.")),(0,o.kt)("h3",{id:"root-disk-type"},"Root Disk Type"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"Standard persistent disks are backed by standard hard disk drives (HDD), while SSD persistent disks are backed by solid state drives (SSD). For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks"},"this section.")),(0,o.kt)("h3",{id:"local-ssd-disks"},"Local SSD Disks"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"Configure each node's local SSD disk storage in GB. Local SSDs are physically attached to the server that hosts your VM instance. Local SSDs have higher throughput and lower latency than standard persistent disks or SSD persistent disks. The data that you store on a local SSD persists only until the instance is stopped or deleted. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks#localssds"},"this section.")),(0,o.kt)("h3",{id:"preemptible-nodes-beta"},"Preemptible nodes (beta)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"Preemptible nodes, also called preemptible VMs, are Compute Engine VM instances that last a maximum of 24 hours in general, and provide no availability guarantees. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/preemptible-vms"},"this page.")),(0,o.kt)("h3",{id:"taints"},"Taints"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"When you apply a taint to a node, only Pods that tolerate the taint are allowed to run on the node. In a GKE cluster, you can apply a taint to a node pool, which applies the taint to all nodes in the pool."),(0,o.kt)("h3",{id:"node-labels"},"Node Labels"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"You can apply labels to the node pool, which applies the labels to all nodes in the pool."),(0,o.kt)("p",null,"Invalid labels can prevent upgrades or can prevent Rancher from starting. For details on label syntax requirements, see the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"Kubernetes documentation.")),(0,o.kt)("h3",{id:"network-tags"},"Network Tags"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"You can add network tags to the node pool to make firewall rules and routes between subnets. Tags will apply to all nodes in the pool."),(0,o.kt)("p",null,"For details on tag syntax and requirements, see the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/add-remove-network-tags"},"Kubernetes documentation"),"."),(0,o.kt)("h2",{id:"group-details"},"Group Details"),(0,o.kt)("p",null,"In this section, enter details describing the node pool."),(0,o.kt)("h3",{id:"name"},"Name"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"Enter a name for the node pool."),(0,o.kt)("h3",{id:"initial-node-count"},"Initial Node Count"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"Integer for the starting number of nodes in the node pool."),(0,o.kt)("h3",{id:"max-pod-per-node"},"Max Pod Per Node"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"GKE has a hard limit of 110 Pods per node. For more information on the Kubernetes limits, see ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/best-practices/scalability#dimension_limits"},"this section.")),(0,o.kt)("h3",{id:"autoscaling"},"Autoscaling"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"Node pool autoscaling dynamically creates or deletes nodes based on the demands of your workload. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"},"this page.")),(0,o.kt)("h3",{id:"auto-repair"},"Auto Repair"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"GKE's node auto-repair feature helps you keep the nodes in your cluster in a healthy, running state. When enabled, GKE makes periodic checks on the health state of each node in your cluster. If a node fails consecutive health checks over an extended time period, GKE initiates a repair process for that node. For more information, see the section on ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-repair"},"auto-repairing nodes.")),(0,o.kt)("h3",{id:"auto-upgrade"},"Auto Upgrade"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: yes")),(0,o.kt)("p",null,"When enabled, the auto-upgrade feature keeps the nodes in your cluster up-to-date with the cluster control plane (master) version when your control plane is ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/upgrades#automatic_cp_upgrades"},"updated on your behalf.")," For more information about auto-upgrading nodes, see ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-upgrades"},"this page.")),(0,o.kt)("h3",{id:"access-scopes"},"Access Scopes"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mutable: no")),(0,o.kt)("p",null,"Access scopes are the legacy method of specifying permissions for your nodes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Allow default access:")," The default access for new clusters is the ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/access/service-accounts?hl=en_US#default_service_account"},"Compute Engine default service account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Allow full access to all Cloud APIs:")," Generally, you can just set the cloud-platform access scope to allow full access to all Cloud APIs, then grant the service account only relevant IAM roles. The combination of access scopes granted to the virtual machine instance and the IAM roles granted to the service account determines the amount of access the service account has for that instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Set access for each API:")," Alternatively, you can choose to set specific scopes that permit access to the particular API methods that the service will call.")),(0,o.kt)("p",null,"For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"},"section about enabling service accounts for a VM.")),(0,o.kt)("h3",{id:"configuring-the-refresh-interval"},"Configuring the Refresh Interval"),(0,o.kt)("p",null,'The refresh interval can be configured through the setting "gke-refresh", which is an integer representing seconds.'),(0,o.kt)("p",null,"The default value is 300 seconds."),(0,o.kt)("p",null,"The syncing interval can be changed by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl edit setting gke-refresh"),"."),(0,o.kt)("p",null,"The shorter the refresh window, the less likely any race conditions will occur, but it does increase the likelihood of encountering request limits that may be in place for GCP APIs."))}h.isMDXComponent=!0}}]);
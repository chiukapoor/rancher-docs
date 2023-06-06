"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98676],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(t),h=a,v=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return t?n.createElement(v,i(i({ref:r},d),{},{components:t})):n.createElement(v,i({ref:r},d))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},79298:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});t(67294);var n=t(3905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={title:"Installing Rancher in a vSphere Environment"},c=void 0,l={unversionedId:"reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",id:"version-2.6/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",title:"Installing Rancher in a vSphere Environment",description:"This guide outlines a reference architecture for installing Rancher on an RKE Kubernetes cluster in a vSphere environment, in addition to standard vSphere best practices as documented by VMware.",source:"@site/versioned_docs/version-2.6/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",permalink:"/v2.6/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere.md",tags:[],version:"2.6",lastUpdatedAt:1682035255,formattedLastUpdatedAt:"Apr 21, 2023",frontMatter:{title:"Installing Rancher in a vSphere Environment"},sidebar:"tutorialSidebar",previous:{title:"Best Practices for the Rancher Server",permalink:"/v2.6/pages-for-subheaders/rancher-server"},next:{title:"Rancher Deployment Strategy",permalink:"/v2.6/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"}},d={},u=[{value:"1. Load Balancer Considerations",id:"1-load-balancer-considerations",level:2},{value:"Leverage Fault Tolerance and High Availability",id:"leverage-fault-tolerance-and-high-availability",level:3},{value:"Back Up Load Balancer Configuration",id:"back-up-load-balancer-configuration",level:3},{value:"Configure Health Checks",id:"configure-health-checks",level:3},{value:"Leverage an External Load Balancer",id:"leverage-an-external-load-balancer",level:3},{value:"Secure Access to Rancher",id:"secure-access-to-rancher",level:3},{value:"2. VM Considerations",id:"2-vm-considerations",level:2},{value:"Size the VM&#39;s According to Rancher Documentation",id:"size-the-vms-according-to-rancher-documentation",level:3},{value:"Leverage VM Templates to Construct the Environment",id:"leverage-vm-templates-to-construct-the-environment",level:3},{value:"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Rancher Cluster Nodes Across ESXi Hosts",id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-rancher-cluster-nodes-across-esxi-hosts",level:3},{value:"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Rancher Cluster Nodes Across Datastores",id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-rancher-cluster-nodes-across-datastores",level:3},{value:"Configure VM&#39;s as Appropriate for Kubernetes",id:"configure-vms-as-appropriate-for-kubernetes",level:3},{value:"3. Network Considerations",id:"3-network-considerations",level:2},{value:"Leverage Low Latency, High Bandwidth Connectivity Between ETCD Nodes",id:"leverage-low-latency-high-bandwidth-connectivity-between-etcd-nodes",level:3},{value:"Consistent IP Addressing for VM&#39;s",id:"consistent-ip-addressing-for-vms",level:3},{value:"4. Storage Considerations",id:"4-storage-considerations",level:2},{value:"Leverage SSD Drives for ETCD Nodes",id:"leverage-ssd-drives-for-etcd-nodes",level:3},{value:"5. Backups and Disaster Recovery",id:"5-backups-and-disaster-recovery",level:2},{value:"Perform Regular Management Cluster Backups",id:"perform-regular-management-cluster-backups",level:3},{value:"Back up Rancher Cluster Node VMs",id:"back-up-rancher-cluster-node-vms",level:3}],p={toc:u};function h(e){var{components:r}=e,o=i(e,["components"]);return(0,n.kt)("wrapper",s(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},p,o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide outlines a reference architecture for installing Rancher on an RKE Kubernetes cluster in a vSphere environment, in addition to standard vSphere best practices as documented by VMware."),(0,n.kt)("figcaption",null,"Solution Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Solution Overview",src:t(92990).Z,width:"576",height:"482"})),(0,n.kt)("h2",{id:"1-load-balancer-considerations"},"1. Load Balancer Considerations"),(0,n.kt)("p",null,"A load balancer is required to direct traffic to the Rancher workloads residing on the RKE nodes."),(0,n.kt)("h3",{id:"leverage-fault-tolerance-and-high-availability"},"Leverage Fault Tolerance and High Availability"),(0,n.kt)("p",null,"Leverage the use of an external (hardware or software) load balancer that has inherit high-availability functionality (F5, NSX-T, Keepalived, etc)."),(0,n.kt)("h3",{id:"back-up-load-balancer-configuration"},"Back Up Load Balancer Configuration"),(0,n.kt)("p",null,"In the event of a Disaster Recovery activity, availability of the Load balancer configuration will expedite the recovery process."),(0,n.kt)("h3",{id:"configure-health-checks"},"Configure Health Checks"),(0,n.kt)("p",null,"Configure the Load balancer to automatically mark nodes as unavailable if a health check is failed. For example, NGINX can facilitate this with:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"max_fails=3 fail_timeout=5s")),(0,n.kt)("h3",{id:"leverage-an-external-load-balancer"},"Leverage an External Load Balancer"),(0,n.kt)("p",null,"Avoid implementing a software load balancer within the management cluster."),(0,n.kt)("h3",{id:"secure-access-to-rancher"},"Secure Access to Rancher"),(0,n.kt)("p",null,"Configure appropriate Firewall / ACL rules to only expose access to Rancher"),(0,n.kt)("h2",{id:"2-vm-considerations"},"2. VM Considerations"),(0,n.kt)("h3",{id:"size-the-vms-according-to-rancher-documentation"},"Size the VM's According to Rancher Documentation"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/installation-requirements"},"Installation Requirements"),"."),(0,n.kt)("h3",{id:"leverage-vm-templates-to-construct-the-environment"},"Leverage VM Templates to Construct the Environment"),(0,n.kt)("p",null,'To facilitate the consistency of Virtual Machines deployed across the environment, consider the use of "Golden Images" in the form of VM templates. Packer can be used to accomplish this, adding greater customization options.'),(0,n.kt)("h3",{id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-rancher-cluster-nodes-across-esxi-hosts"},"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Rancher Cluster Nodes Across ESXi Hosts"),(0,n.kt)("p",null,"Doing so will ensure node VM's are spread across multiple ESXi hosts - preventing a single point of failure at the host level."),(0,n.kt)("h3",{id:"leverage-drs-anti-affinity-rules-where-possible-to-separate-rancher-cluster-nodes-across-datastores"},"Leverage DRS Anti-Affinity Rules (Where Possible) to Separate Rancher Cluster Nodes Across Datastores"),(0,n.kt)("p",null,"Doing so will ensure node VM's are spread across multiple datastores - preventing a single point of failure at the datastore level."),(0,n.kt)("h3",{id:"configure-vms-as-appropriate-for-kubernetes"},"Configure VM's as Appropriate for Kubernetes"),(0,n.kt)("p",null,"It\u2019s important to follow K8s and etcd best practices when deploying your nodes, including disabling swap, double-checking you have full network connectivity between all machines in the cluster, using unique hostnames, MAC addresses, and product_uuids for every node."),(0,n.kt)("h2",{id:"3-network-considerations"},"3. Network Considerations"),(0,n.kt)("h3",{id:"leverage-low-latency-high-bandwidth-connectivity-between-etcd-nodes"},"Leverage Low Latency, High Bandwidth Connectivity Between ETCD Nodes"),(0,n.kt)("p",null,"Deploy etcd members within a single data center where possible to avoid latency overheads and reduce the likelihood of network partitioning. For most setups, 1Gb connections will suffice. For large clusters, 10Gb connections can reduce the time taken to restore from backup."),(0,n.kt)("h3",{id:"consistent-ip-addressing-for-vms"},"Consistent IP Addressing for VM's"),(0,n.kt)("p",null,"Each node used should have a static IP configured. In the case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated."),(0,n.kt)("h2",{id:"4-storage-considerations"},"4. Storage Considerations"),(0,n.kt)("h3",{id:"leverage-ssd-drives-for-etcd-nodes"},"Leverage SSD Drives for ETCD Nodes"),(0,n.kt)("p",null,"ETCD is very sensitive to write latency. Therefore, leverage SSD disks where possible."),(0,n.kt)("h2",{id:"5-backups-and-disaster-recovery"},"5. Backups and Disaster Recovery"),(0,n.kt)("h3",{id:"perform-regular-management-cluster-backups"},"Perform Regular Management Cluster Backups"),(0,n.kt)("p",null,"Rancher stores its data in the ETCD datastore of the Kubernetes cluster it resides on. Like with any Kubernetes cluster, perform frequent, tested backups of this cluster."),(0,n.kt)("h3",{id:"back-up-rancher-cluster-node-vms"},"Back up Rancher Cluster Node VMs"),(0,n.kt)("p",null,"Incorporate the Rancher management node VM's within a standard VM backup policy."))}h.isMDXComponent=!0},92990:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/rancher-on-prem-vsphere-8d50429a21f63cdfeaf22e0e26639255.svg"}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"1. Set up Infrastructure and Private Registry"},s=void 0,u={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",id:"version-2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",title:"1. Set up Infrastructure and Private Registry",description:"In this section, you will provision the underlying infrastructure for your Rancher management server in an air gapped environment. You will also set up the private Docker registry that must be available to your Rancher node(s).",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry.md",tags:[],version:"2.5",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"1. Set up Infrastructure and Private Registry"},sidebar:"tutorialSidebar",previous:{title:"Air Gapped Helm CLI Install",permalink:"/zh/v2.5/pages-for-subheaders/air-gapped-helm-cli-install"},next:{title:"2. Collect and Publish Images to your Private Registry",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"}},c={},p=[{value:"1. Set up Linux Nodes",id:"1-set-up-linux-nodes",level:3},{value:"2. Set up External Datastore",id:"2-set-up-external-datastore",level:3},{value:"3. Set up the Load Balancer",id:"3-set-up-the-load-balancer",level:3},{value:"4. Set up the DNS Record",id:"4-set-up-the-dns-record",level:3},{value:"5. Set up a Private Docker Registry",id:"5-set-up-a-private-docker-registry",level:3},{value:"Why three nodes?",id:"why-three-nodes",level:3},{value:"1. Set up Linux Nodes",id:"1-set-up-linux-nodes-1",level:3},{value:"2. Set up the Load Balancer",id:"2-set-up-the-load-balancer",level:3},{value:"3. Set up the DNS Record",id:"3-set-up-the-dns-record",level:3},{value:"4. Set up a Private Docker Registry",id:"4-set-up-a-private-docker-registry",level:3},{value:"1. Set up a Linux Node",id:"1-set-up-a-linux-node",level:3},{value:"2. Set up a Private Docker Registry",id:"2-set-up-a-private-docker-registry",level:3},{value:"Next: Collect and Publish Images to your Private Registry",id:"next-collect-and-publish-images-to-your-private-registry",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},h=d("Tabs"),f=d("TabItem"),m={toc:p};function g(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, you will provision the underlying infrastructure for your Rancher management server in an air gapped environment. You will also set up the private Docker registry that must be available to your Rancher node(s)."),(0,a.kt)("p",null,"An air gapped environment is an environment where the Rancher server is installed offline or behind a firewall."),(0,a.kt)("p",null,"The infrastructure depends on whether you are installing Rancher on a K3s Kubernetes cluster, an RKE Kubernetes cluster, or a single Docker container. For more information on each installation option, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/installation-and-upgrade"},"this page.")),(0,a.kt)("p",null,"As of Rancher v2.5, Rancher can be installed on any Kubernetes cluster. The RKE and K3s Kubernetes infrastructure tutorials below are still included for convenience."),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(f,{value:"K3s",mdxType:"TabItem"},(0,a.kt)("p",null,"We recommend setting up the following infrastructure for a high-availability installation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Two Linux nodes,")," typically virtual machines, in the infrastructure provider of your choice."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"An external database")," to store the cluster data. PostgreSQL, MySQL, and etcd are supported."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A load balancer")," to direct traffic to the two nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A DNS record")," to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A private Docker registry")," to distribute Docker images to your machines.")),(0,a.kt)("h3",{id:"1-set-up-linux-nodes"},"1. Set up Linux Nodes"),(0,a.kt)("p",null,"These hosts will be disconnected from the internet, but require being able to connect with your private registry."),(0,a.kt)("p",null,"Make sure that your nodes fulfill the general installation requirements for ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/installation-requirements"},"OS, container runtime, hardware, and networking.")),(0,a.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,a.kt)("h3",{id:"2-set-up-external-datastore"},"2. Set up External Datastore"),(0,a.kt)("p",null,"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available options allow you to select a datastore that best fits your use case."),(0,a.kt)("p",null,"For a high-availability K3s installation, you will need to set up one of the following external databases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")," (certified against versions 10.7 and 11.5)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")," (certified against version 5.7)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd")," (certified against version 3.3.15)")),(0,a.kt)("p",null,"When you install Kubernetes, you will pass in details for K3s to connect to the database."),(0,a.kt)("p",null,"For an example of one way to set up the database, refer to this ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds"},"tutorial")," for setting up a MySQL database on Amazon's RDS service."),(0,a.kt)("p",null,"For the complete list of options that are available for configuring a K3s cluster datastore, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/datastore/"},"K3s documentation.")),(0,a.kt)("h3",{id:"3-set-up-the-load-balancer"},"3. Set up the Load Balancer"),(0,a.kt)("p",null,"You will also need to set up a load balancer to direct traffic to the Rancher replica on both nodes. That will prevent an outage of any single node from taking down communications to the Rancher management server."),(0,a.kt)("p",null,"When Kubernetes gets set up in a later step, the K3s tool will deploy a Traefik Ingress controller. This controller will listen on ports 80 and 443 of the worker nodes, answering traffic destined for specific hostnames."),(0,a.kt)("p",null,"When Rancher is installed (also in a later step), the Rancher system creates an Ingress resource. That Ingress tells the Traefik Ingress controller to listen for traffic destined for the Rancher hostname. The Traefik Ingress controller, when receiving traffic destined for the Rancher hostname, will forward that traffic to the running Rancher pods in the cluster."),(0,a.kt)("p",null,"For your implementation, consider if you want or need to use a Layer-4 or Layer-7 load balancer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A layer-4 load balancer")," is the simpler of the two choices, in which you are forwarding TCP traffic to your nodes. We recommend configuring your load balancer as a Layer 4 balancer, forwarding traffic to ports TCP/80 and TCP/443 to the Rancher management cluster nodes. The Ingress controller on the cluster will redirect HTTP traffic to HTTPS and terminate SSL/TLS on port TCP/443. The Ingress controller will forward traffic to port TCP/80 to the Ingress pod in the Rancher deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A layer-7 load balancer")," is a bit more complicated but can offer features that you may want. For instance, a layer-7 load balancer is capable of handling TLS termination at the load balancer, as opposed to Rancher doing TLS termination itself. This can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with. If you decide to terminate the SSL/TLS traffic on a layer-7 load balancer, you will need to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"--set tls=external")," option when installing Rancher in a later step. For more information, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"Rancher Helm chart options."))),(0,a.kt)("p",null,"For an example showing how to set up an NGINX load balancer, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")),(0,a.kt)("p",null,"For a how-to guide for setting up an Amazon ELB Network Load Balancer, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:"),"\nDo not use this load balancer (i.e, the ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications.")),(0,a.kt)("h3",{id:"4-set-up-the-dns-record"},"4. Set up the DNS Record"),(0,a.kt)("p",null,"Once you have set up your load balancer, you will need to create a DNS record to send traffic to this load balancer."),(0,a.kt)("p",null,"Depending on your environment, this may be an A record pointing to the load balancer IP, or it may be a CNAME pointing to the load balancer hostname. In either case, make sure this record is the hostname that you intend Rancher to respond on."),(0,a.kt)("p",null,"You will need to specify this hostname in a later step when you install Rancher, and it is not possible to change it later. Make sure that your decision is a final one."),(0,a.kt)("p",null,"For a how-to guide for setting up a DNS record to route domain traffic to an Amazon ELB load balancer, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"official AWS documentation.")),(0,a.kt)("h3",{id:"5-set-up-a-private-docker-registry"},"5. Set up a Private Docker Registry"),(0,a.kt)("p",null,"Rancher supports air gap installs using a private registry. You must have your own private registry or other means of distributing Docker images to your machines."),(0,a.kt)("p",null,"In a later step, when you set up your K3s Kubernetes cluster, you will create a ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"private registries configuration file")," with details from this registry."),(0,a.kt)("p",null,"If you need help with creating a private registry, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"official Docker documentation."))),(0,a.kt)(f,{value:"RKE",mdxType:"TabItem"},(0,a.kt)("p",null,"To install the Rancher management server on a high-availability RKE cluster, we recommend setting up the following infrastructure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Three Linux nodes,")," typically virtual machines, in an infrastructure provider such as Amazon's EC2, Google Compute Engine, or vSphere."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A load balancer")," to direct front-end traffic to the three nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A DNS record")," to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A private Docker registry")," to distribute Docker images to your machines.")),(0,a.kt)("p",null,"These nodes must be in the same region/data center. You may place these servers in separate availability zones."),(0,a.kt)("h3",{id:"why-three-nodes"},"Why three nodes?"),(0,a.kt)("p",null,"In an RKE cluster, Rancher server data is stored on etcd. This etcd database runs on all three nodes."),(0,a.kt)("p",null,"The etcd database requires an odd number of nodes so that it can always elect a leader with a majority of the etcd cluster. If the etcd database cannot elect a leader, etcd can suffer from ",(0,a.kt)("a",{parentName:"p",href:"https://www.quora.com/What-is-split-brain-in-distributed-systems"},"split brain"),", requiring the cluster to be restored from backup. If one of the three etcd nodes fails, the two remaining nodes can elect a leader because they have the majority of the total number of etcd nodes."),(0,a.kt)("h3",{id:"1-set-up-linux-nodes-1"},"1. Set up Linux Nodes"),(0,a.kt)("p",null,"These hosts will be disconnected from the internet, but require being able to connect with your private registry."),(0,a.kt)("p",null,"Make sure that your nodes fulfill the general installation requirements for ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/installation-requirements"},"OS, container runtime, hardware, and networking.")),(0,a.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,a.kt)("h3",{id:"2-set-up-the-load-balancer"},"2. Set up the Load Balancer"),(0,a.kt)("p",null,"You will also need to set up a load balancer to direct traffic to the Rancher replica on both nodes. That will prevent an outage of any single node from taking down communications to the Rancher management server."),(0,a.kt)("p",null,"When Kubernetes gets set up in a later step, the RKE tool will deploy an NGINX Ingress controller. This controller will listen on ports 80 and 443 of the worker nodes, answering traffic destined for specific hostnames."),(0,a.kt)("p",null,"When Rancher is installed (also in a later step), the Rancher system creates an Ingress resource. That Ingress tells the NGINX Ingress controller to listen for traffic destined for the Rancher hostname. The NGINX Ingress controller, when receiving traffic destined for the Rancher hostname, will forward that traffic to the running Rancher pods in the cluster."),(0,a.kt)("p",null,"For your implementation, consider if you want or need to use a Layer-4 or Layer-7 load balancer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A layer-4 load balancer")," is the simpler of the two choices, in which you are forwarding TCP traffic to your nodes. We recommend configuring your load balancer as a Layer 4 balancer, forwarding traffic to ports TCP/80 and TCP/443 to the Rancher management cluster nodes. The Ingress controller on the cluster will redirect HTTP traffic to HTTPS and terminate SSL/TLS on port TCP/443. The Ingress controller will forward traffic to port TCP/80 to the Ingress pod in the Rancher deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A layer-7 load balancer")," is a bit more complicated but can offer features that you may want. For instance, a layer-7 load balancer is capable of handling TLS termination at the load balancer, as opposed to Rancher doing TLS termination itself. This can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with. If you decide to terminate the SSL/TLS traffic on a layer-7 load balancer, you will need to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"--set tls=external")," option when installing Rancher in a later step. For more information, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"Rancher Helm chart options."))),(0,a.kt)("p",null,"For an example showing how to set up an NGINX load balancer, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")),(0,a.kt)("p",null,"For a how-to guide for setting up an Amazon ELB Network Load Balancer, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:"),"\nDo not use this load balancer (i.e, the ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications.")),(0,a.kt)("h3",{id:"3-set-up-the-dns-record"},"3. Set up the DNS Record"),(0,a.kt)("p",null,"Once you have set up your load balancer, you will need to create a DNS record to send traffic to this load balancer."),(0,a.kt)("p",null,"Depending on your environment, this may be an A record pointing to the LB IP, or it may be a CNAME pointing to the load balancer hostname. In either case, make sure this record is the hostname that you intend Rancher to respond on."),(0,a.kt)("p",null,"You will need to specify this hostname in a later step when you install Rancher, and it is not possible to change it later. Make sure that your decision is a final one."),(0,a.kt)("p",null,"For a how-to guide for setting up a DNS record to route domain traffic to an Amazon ELB load balancer, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"official AWS documentation.")),(0,a.kt)("h3",{id:"4-set-up-a-private-docker-registry"},"4. Set up a Private Docker Registry"),(0,a.kt)("p",null,"Rancher supports air gap installs using a secure Docker private registry. You must have your own private registry or other means of distributing Docker images to your machines."),(0,a.kt)("p",null,"In a later step, when you set up your RKE Kubernetes cluster, you will create a ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/"},"private registries configuration file")," with details from this registry."),(0,a.kt)("p",null,"If you need help with creating a private registry, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"official Docker documentation."))),(0,a.kt)(f,{value:"Docker",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Docker installation is for Rancher users that are wanting to test out Rancher. Since there is only one node and a single Docker container, if the node goes down, you will lose all the data of your Rancher server."),(0,a.kt)("p",{parentName:"blockquote"},"As of Rancher v2.5, the Rancher backup operator can be used to migrate Rancher from the single Docker container install to an installation on a high-availability Kubernetes cluster. For details, refer to the documentation on ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrating Rancher to a new cluster."))),(0,a.kt)("h3",{id:"1-set-up-a-linux-node"},"1. Set up a Linux Node"),(0,a.kt)("p",null,"This host will be disconnected from the Internet, but needs to be able to connect to your private registry."),(0,a.kt)("p",null,"Make sure that your node fulfills the general installation requirements for ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/installation-requirements"},"OS, Docker, hardware, and networking.")),(0,a.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,a.kt)("h3",{id:"2-set-up-a-private-docker-registry"},"2. Set up a Private Docker Registry"),(0,a.kt)("p",null,"Rancher supports air gap installs using a Docker private registry on your bastion server. You must have your own private registry or other means of distributing Docker images to your machines."),(0,a.kt)("p",null,"If you need help with creating a private registry, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"official Docker documentation.")))),(0,a.kt)("h3",{id:"next-collect-and-publish-images-to-your-private-registry"},(0,a.kt)("a",{parentName:"h3",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"Next: Collect and Publish Images to your Private Registry")))}g.isMDXComponent=!0}}]);
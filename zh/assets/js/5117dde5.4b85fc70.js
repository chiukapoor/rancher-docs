"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Setting up Nodes in Amazon EC2"},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",id:"version-2.0-2.4/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",title:"Setting up Nodes in Amazon EC2",description:"In this tutorial, you will learn one way to set up Linux nodes for the Rancher management server. These nodes will fulfill the node requirements for OS, Docker, hardware, and networking.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2.md",sourceDirName:"how-to-guides/new-user-guides/infrastructure-setup",slug:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Setting up Nodes in Amazon EC2"},sidebar:"tutorialSidebar",previous:{title:"Set up Infrastructure for a High Availability RKE Kubernetes Cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster"},next:{title:"Setting up a MySQL Database in Amazon RDS",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds"}},c={},p=[{value:"1. Optional Preparation",id:"1-optional-preparation",level:3},{value:"2. Provision Instances",id:"2-provision-instances",level:3},{value:"3. Install Docker and Create User",id:"3-install-docker-and-create-user",level:3},{value:"Next Steps for RKE Kubernetes Cluster Nodes",id:"next-steps-for-rke-kubernetes-cluster-nodes",level:3}],h={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, you will learn one way to set up Linux nodes for the Rancher management server. These nodes will fulfill the node requirements for ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"OS, Docker, hardware, and networking.")),(0,r.kt)("p",null,"If the Rancher server will be installed on an RKE Kubernetes cluster, you should provision three instances."),(0,r.kt)("p",null,"If the Rancher server will be installed on a K3s Kubernetes cluster, you only need to provision two instances."),(0,r.kt)("p",null,"If the Rancher server is installed in a single Docker container, you only need one instance."),(0,r.kt)("h3",{id:"1-optional-preparation"},"1. Optional Preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create IAM role:")," To allow Rancher to manipulate AWS resources, such as provisioning new storage or new nodes, you will need to configure Amazon as a cloud provider. There are several things you'll need to do to set up the cloud provider on EC2, but part of this process is setting up an IAM role for the Rancher server nodes. For the full details on setting up the cloud provider, refer to this ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create security group:")," We also recommend setting up a security group for the Rancher nodes that complies with the ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements#port-requirements"},"port requirements for Rancher nodes."))),(0,r.kt)("h3",{id:"2-provision-instances"},"2. Provision Instances"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into the ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ec2/"},"Amazon AWS EC2 Console")," to get started. Make sure to take note of the ",(0,r.kt)("strong",{parentName:"li"},"Region")," where your EC2 instances (Linux nodes) are created, because all of the infrastructure for the Rancher management server should be in the same region."),(0,r.kt)("li",{parentName:"ol"},"In the left panel, click ",(0,r.kt)("strong",{parentName:"li"},"Instances.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Launch Instance.")),(0,r.kt)("li",{parentName:"ol"},"In the section called ",(0,r.kt)("strong",{parentName:"li"},"Step 1: Choose an Amazon Machine Image (AMI),")," we will use Ubuntu 18.04 as the Linux OS, using ",(0,r.kt)("inlineCode",{parentName:"li"},"ami-0d1cd67c26f5fca19 (64-bit x86)"),". Go to the Ubuntu AMI and click ",(0,r.kt)("strong",{parentName:"li"},"Select.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Step 2: Choose an Instance Type")," section, select the ",(0,r.kt)("inlineCode",{parentName:"li"},"t2.medium")," type."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next: Configure Instance Details.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Number of instances")," field, enter the number of instances. A high-availability K3s cluster requires only two instances, while a high-availability RKE cluster requires three instances."),(0,r.kt)("li",{parentName:"ol"},"Optional: If you created an IAM role for Rancher to manipulate AWS resources, select the new IAM role in the ",(0,r.kt)("strong",{parentName:"li"},"IAM role")," field."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next: Add Storage,")," ",(0,r.kt)("strong",{parentName:"li"},"Next: Add Tags,")," and ",(0,r.kt)("strong",{parentName:"li"},"Next: Configure Security Group.")),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"Step 6: Configure Security Group,")," select a security group that complies with the ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements#port-requirements"},"port requirements")," for Rancher nodes."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Review and Launch.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Launch.")),(0,r.kt)("li",{parentName:"ol"},"Choose a new or existing key pair that you will use to connect to your instance later. If you are using an existing key pair, make sure you already have access to the private key."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Launch Instances."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," You have created Rancher nodes that satisfy the requirements for OS, hardware, and networking. Next, you will install Docker on each node."),(0,r.kt)("h3",{id:"3-install-docker-and-create-user"},"3. Install Docker and Create User"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ec2/"},"AWS EC2 console,")," click ",(0,r.kt)("strong",{parentName:"li"},"Instances")," in the left panel."),(0,r.kt)("li",{parentName:"ol"},"Go to the instance that you want to install Docker on. Select the instance and click ",(0,r.kt)("strong",{parentName:"li"},"Actions > Connect.")),(0,r.kt)("li",{parentName:"ol"},"Connect to the instance by following the instructions on the screen that appears. Copy the Public DNS of the instance. An example command to SSH into the instance is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ssh -i [path-to-private-key] ubuntu@[public-DNS-of-instance]\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the following command on the instance to install Docker with one of Rancher's installation scripts:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl https://releases.rancher.com/install-docker/18.09.sh | sh\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When you are connected to the instance, run the following command on the instance to create a user:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo usermod -aG docker ubuntu\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Repeat these steps so that Docker is installed on each node that will eventually run the Rancher management server.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To find out whether a script is available for installing a certain Docker version, refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/install-docker"},"GitHub repository,")," which contains all of Rancher\u2019s Docker installation scripts.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," You have set up Rancher server nodes that fulfill all the node requirements for OS, Docker, hardware and networking."),(0,r.kt)("h3",{id:"next-steps-for-rke-kubernetes-cluster-nodes"},"Next Steps for RKE Kubernetes Cluster Nodes"),(0,r.kt)("p",null,"If you are going to install an RKE cluster on the new nodes, take note of the ",(0,r.kt)("strong",{parentName:"p"},"IPv4 Public IP")," and ",(0,r.kt)("strong",{parentName:"p"},"Private IP")," of each node. This information can be found on the ",(0,r.kt)("strong",{parentName:"p"},"Description")," tab for each node after it is created. The public and private IP will be used to populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_address")," of each node in the RKE cluster configuration file, ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),"."),(0,r.kt)("p",null,"RKE will also need access to the private key to connect to each node. Therefore, you might want to take note of the path to your private keys to connect to the nodes, which can also be included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," directive for each node."))}d.isMDXComponent=!0}}]);
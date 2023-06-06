"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"EC2 Node Template Configuration"},c=void 0,l={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",id:"version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",title:"EC2 Node Template Configuration",description:"For more details about EC2, nodes, refer to the official documentation for the EC2 Management Console.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1685574148,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"EC2 Node Template Configuration"},sidebar:"tutorialSidebar",previous:{title:"Node Template Configuration",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/node-template-configuration"},next:{title:"DigitalOcean Node Template Configuration",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"}},u={},p=[{value:"Region",id:"region",level:3},{value:"Cloud Credentials",id:"cloud-credentials",level:3},{value:"Authenticate &amp; Configure Nodes",id:"authenticate--configure-nodes",level:3},{value:"Security Group",id:"security-group",level:3},{value:"Instance Options",id:"instance-options",level:3},{value:"Engine Options",id:"engine-options",level:3},{value:"Account Access",id:"account-access",level:3},{value:"Zone and Network",id:"zone-and-network",level:3},{value:"Security Groups",id:"security-groups",level:3},{value:"Instance",id:"instance",level:3},{value:"SSH User",id:"ssh-user",level:3},{value:"IAM Instance Profile Name",id:"iam-instance-profile-name",level:3},{value:"Docker Daemon",id:"docker-daemon",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("Tabs"),h=d("TabItem"),f={toc:p};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For more details about EC2, nodes, refer to the official documentation for the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2"},"EC2 Management Console"),"."),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(h,{value:"Rancher v2.2.0+",mdxType:"TabItem"},(0,r.kt)("h3",{id:"region"},"Region"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Region")," field, select the same region that you used when creating your cloud credentials."),(0,r.kt)("h3",{id:"cloud-credentials"},"Cloud Credentials"),(0,r.kt)("p",null,"Your AWS account access information, stored in a ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/user-settings/manage-cloud-credentials"},"cloud credential.")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"Amazon Documentation: Creating Access Keys")," how to create an Access Key and Secret Key."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"Amazon Documentation: Creating IAM Policies (Console)")," how to create an IAM policy."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console"},"Amazon Documentation: Adding Permissions to a User (Console)")," how to attach an IAM"),(0,r.kt)("p",null,"See our three example JSON policies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy"},"Example IAM Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-with-passrole"},"Example IAM Policy with PassRole")," (needed if you want to use ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider")," or want to pass an IAM Profile to an instance)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-to-allow-encrypted-ebs-volumes"},"Example IAM Policy to allow encrypted EBS volumes")," policy to an user.")),(0,r.kt)("h3",{id:"authenticate--configure-nodes"},"Authenticate & Configure Nodes"),(0,r.kt)("p",null,"Choose an availability zone and network settings for your cluster."),(0,r.kt)("h3",{id:"security-group"},"Security Group"),(0,r.kt)("p",null,"Choose the default security group or configure a security group."),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements#rancher-aws-ec2-security-group"},"Amazon EC2 security group when using Node Driver")," to see what rules are created in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-nodes")," Security Group."),(0,r.kt)("h3",{id:"instance-options"},"Instance Options"),(0,r.kt)("p",null,"Configure the instances that will be created. Make sure you configure the correct ",(0,r.kt)("strong",{parentName:"p"},"SSH User")," for the configured AMI."),(0,r.kt)("p",null,"If you need to pass an ",(0,r.kt)("strong",{parentName:"p"},"IAM Instance Profile Name")," (not ARN), for example, when you want to use a ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider"),", you will need an additional permission in your policy. See ",(0,r.kt)("a",{parentName:"p",href:"#example-iam-policy-with-passrole"},"Example IAM policy with PassRole")," for an example policy."),(0,r.kt)("h3",{id:"engine-options"},"Engine Options"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Engine Options")," section of the node template, you can configure the Docker daemon. You may want to specify the docker version or a Docker registry mirror.")),(0,r.kt)(h,{value:"Rancher before v2.2.0",mdxType:"TabItem"},(0,r.kt)("h3",{id:"account-access"},"Account Access"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Account Access")," is where you configure the region of the nodes, and the credentials (Access Key and Secret Key) used to create the machine."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"Amazon Documentation: Creating Access Keys")," how to create an Access Key and Secret Key."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"Amazon Documentation: Creating IAM Policies (Console)")," how to create an IAM policy."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console"},"Amazon Documentation: Adding Permissions to a User (Console)")," how to attach an IAM"),(0,r.kt)("p",null,"See our three example JSON policies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy"},"Example IAM Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-with-passrole"},"Example IAM Policy with PassRole")," (needed if you want to use ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider")," or want to pass an IAM Profile to an instance)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-to-allow-encrypted-ebs-volumes"},"Example IAM Policy to allow encrypted EBS volumes")," policy to an user.")),(0,r.kt)("h3",{id:"zone-and-network"},"Zone and Network"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Zone and Network")," configures the availability zone and network settings for your cluster."),(0,r.kt)("h3",{id:"security-groups"},"Security Groups"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Security Groups")," creates or configures the Security Groups applied to your nodes. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements#rancher-aws-ec2-security-group"},"Amazon EC2 security group when using Node Driver")," to see what rules are created in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-nodes")," Security Group."),(0,r.kt)("h3",{id:"instance"},"Instance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instance")," configures the instances that will be created."),(0,r.kt)("h3",{id:"ssh-user"},"SSH User"),(0,r.kt)("p",null,"Make sure you configure the correct ",(0,r.kt)("strong",{parentName:"p"},"SSH User")," for the configured AMI."),(0,r.kt)("h3",{id:"iam-instance-profile-name"},"IAM Instance Profile Name"),(0,r.kt)("p",null,"If you need to pass an ",(0,r.kt)("strong",{parentName:"p"},"IAM Instance Profile Name")," (not ARN), for example, when you want to use a ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider"),", you will need an additional permission in your policy. See ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-with-passrole"},"Example IAM policy with PassRole")," for an example policy."),(0,r.kt)("h3",{id:"docker-daemon"},"Docker Daemon"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," configuration options include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Labels:")," For information on labels, refer to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker object label documentation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docker Engine Install URL:")," Determines what Docker version will be installed on the instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registry mirrors:")," Docker Registry mirror to be used by the Docker daemon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Other advanced options:")," Refer to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon option reference"))))))}g.isMDXComponent=!0}}]);
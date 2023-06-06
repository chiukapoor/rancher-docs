"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Rancher Equinix Metal Quick Start"},s=void 0,u={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",id:"getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",title:"Rancher Equinix Metal Quick Start",description:"This tutorial walks you through the following:",source:"@site/docs/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal.md",tags:[],version:"current",lastUpdatedAt:1685049700,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{title:"Rancher Equinix Metal Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Vagrant Quick Start",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},next:{title:"Rancher Outscale Quick Start Guide",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/outscale-qs"}},p={},c=[{value:"This tutorial walks you through the following:",id:"this-tutorial-walks-you-through-the-following",level:2},{value:"Quick Start Outline",id:"quick-start-outline",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Provision a Equinix Metal Host",id:"1-provision-a-equinix-metal-host",level:3},{value:"2. Install Rancher",id:"2-install-rancher",level:3},{value:"3. Log In",id:"3-log-in",level:3},{value:"4. Create the Cluster",id:"4-create-the-cluster",level:3},{value:"Finished",id:"finished",level:4},{value:"What&#39;s Next?",id:"whats-next",level:4}],m={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"})),(0,r.kt)("h2",{id:"this-tutorial-walks-you-through-the-following"},"This tutorial walks you through the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provisioning an Equinix Metal Server"),(0,r.kt)("li",{parentName:"ul"},"Installation of Rancher 2.x"),(0,r.kt)("li",{parentName:"ul"},"Creation of your first cluster"),(0,r.kt)("li",{parentName:"ul"},"Deployment of an application, Nginx")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. The Docker install is not recommended for production environments. For comprehensive setup instructions, see ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,r.kt)("h2",{id:"quick-start-outline"},"Quick Start Outline"),(0,r.kt)("p",null,"This Quick Start Guide is divided into different tasks for easier consumption."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/accounts/users/"},"Equinix Metal account")),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/accounts/projects/"},"Equinix Metal project"))),(0,r.kt)("h3",{id:"1-provision-a-equinix-metal-host"},"1. Provision a Equinix Metal Host"),(0,r.kt)("p",null," Begin deoploying an Equinix Metal Host. Equinix Metal Servers can be provisioned by either the Equinix Metal console, api, or cli. You can find instructions on how to deploy with each deployment type on the ",(0,r.kt)("a",{parentName:"p",href:"https://metal.equinix.com/developers/docs/deploy/on-demand/"},"Equinix Metal deployment documentation"),". Yopu can find additional documentation on Equinix Metal server types and prices below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/servers/about/"},"Equinix Metal Server Types")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/servers/server-specs/"},"Equinix Metal Pricing"))),(0,r.kt)("admonition",{title:"Notes:",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"When provisioning a new Equinix Metal Server via the CLI or API you will need to be able to provide the following information:  project-id, plan, metro, and the operating-system"),(0,r.kt)("li",{parentName:"ul"},"When using a cloud-hosted virtual machine you need to allow inbound TCP communication to ports 80 and 443.  Please see your cloud-host's documentation for information regarding port configuration."),(0,r.kt)("li",{parentName:"ul"},"For a full list of port requirements, refer to ",(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"Docker Installation"),"."),(0,r.kt)("li",{parentName:"ul"},"Provision the host according to our ",(0,r.kt)("a",{parentName:"li",href:"/pages-for-subheaders/installation-requirements"},"Requirements"),"."))),(0,r.kt)("h3",{id:"2-install-rancher"},"2. Install Rancher"),(0,r.kt)("p",null,"To install Rancher on your Equinix Metal host, connect to it and then use a shell to install."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to your Equinix Metal host using your preferred shell, such as PuTTy or a remote Terminal connection.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From your shell, enter the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Rancher is installed."),(0,r.kt)("h3",{id:"3-log-in"},"3. Log In"),(0,r.kt)("p",null,"Log in to Rancher to begin using the application. After you log in, you'll make some one-time configurations."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a web browser and enter the IP address of your host: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<SERVER_IP>"),"."),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<SERVER_IP>")," with your host IP address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When prompted, create a password for the default ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," account there cowpoke!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("strong",{parentName:"p"},"Rancher Server URL"),". The URL can either be an IP address or a host name. However, each node added to your cluster must be able to connect to this URL.",(0,r.kt)("br",null),(0,r.kt)("br",null),"If you use a hostname in the URL, this hostname must be resolvable by DNS on the nodes you want to add to you cluster."))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"4-create-the-cluster"},"4. Create the Cluster"),(0,r.kt)("p",null,"Welcome to Rancher! You are now able to create your first Kubernetes cluster."),(0,r.kt)("p",null,"In this task, you can use the versatile ",(0,r.kt)("strong",{parentName:"p"},"Custom")," option. This option lets you add ",(0,r.kt)("em",{parentName:"p"},"any")," Linux host (cloud-hosted VM, on-prem VM, or bare-metal) to be used in a cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,r.kt)("strong",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Custom"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Skip ",(0,r.kt)("strong",{parentName:"p"},"Member Roles")," and ",(0,r.kt)("strong",{parentName:"p"},"Cluster Options"),". We'll tell you about them later.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From ",(0,r.kt)("strong",{parentName:"p"},"Node Role"),", select ",(0,r.kt)("em",{parentName:"p"},"all")," the roles: ",(0,r.kt)("strong",{parentName:"p"},"etcd"),", ",(0,r.kt)("strong",{parentName:"p"},"Control"),", and ",(0,r.kt)("strong",{parentName:"p"},"Worker"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional"),": Rancher auto-detects the IP addresses used for Rancher communication and cluster communication. You can override these using ",(0,r.kt)("inlineCode",{parentName:"p"},"Public Address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Internal Address")," in the ",(0,r.kt)("strong",{parentName:"p"},"Node Address")," section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Skip the ",(0,r.kt)("strong",{parentName:"p"},"Labels")," stuff. It's not important for now.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the command displayed on screen to your clipboard.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to your Linux host using your preferred shell, such as PuTTy or a remote Terminal connection. Run the command copied to your clipboard.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When you finish running the command on your Linux host, click ",(0,r.kt)("strong",{parentName:"p"},"Done"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("p",null,"Your cluster is created and assigned a state of ",(0,r.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,r.kt)("p",null,"You can access your cluster after its state is updated to ",(0,r.kt)("strong",{parentName:"p"},"Active"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,r.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,r.kt)("h4",{id:"finished"},"Finished"),(0,r.kt)("p",null,"Congratulations! You have created your first cluster."),(0,r.kt)("h4",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."))}d.isMDXComponent=!0}}]);
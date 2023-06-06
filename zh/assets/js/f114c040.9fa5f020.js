"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86479],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>h});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?t.createElement(b,s(s({ref:r},u),{},{components:n})):t.createElement(b,s({ref:r},u))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5696:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});n(67294);var t=n(3905);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Set Up Load Balancer and Ingress Controller within Rancher",description:"Learn how you can set up load balancers and ingress controllers to redirect service requests within Rancher, and learn about the limitations of load balancers"},i=void 0,c={unversionedId:"pages-for-subheaders/load-balancer-and-ingress-controller",id:"version-2.0-2.4/pages-for-subheaders/load-balancer-and-ingress-controller",title:"Set Up Load Balancer and Ingress Controller within Rancher",description:"Learn how you can set up load balancers and ingress controllers to redirect service requests within Rancher, and learn about the limitations of load balancers",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/load-balancer-and-ingress-controller.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/load-balancer-and-ingress-controller",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/load-balancer-and-ingress-controller",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/load-balancer-and-ingress-controller.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Set Up Load Balancer and Ingress Controller within Rancher",description:"Learn how you can set up load balancers and ingress controllers to redirect service requests within Rancher, and learn about the limitations of load balancers"},sidebar:"tutorialSidebar",previous:{title:"Testing HPAs with kubectl",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl"},next:{title:"Layer 4 and Layer 7 Load Balancing",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"}},u={},d=[{value:"Load Balancers",id:"load-balancers",level:2},{value:"Load Balancer Limitations",id:"load-balancer-limitations",level:3},{value:"Ingress",id:"ingress",level:2}],p={toc:d};function h(e){var{components:r}=e,n=s(e,["components"]);return(0,t.kt)("wrapper",o(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){a(e,r,n[r])}))}return e}({},p,n),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Within Rancher, you can set up load balancers and ingress controllers to redirect service requests."),(0,t.kt)("h2",{id:"load-balancers"},"Load Balancers"),(0,t.kt)("p",null,"After you launch an application, the app is only available within the cluster. It can't be reached from outside the cluster."),(0,t.kt)("p",null,"If you want your applications to be externally accessible, you must add a load balancer or ingress to your cluster. Load balancers create a gateway for external connections to access your cluster, provided that the user knows the load balancer's IP address and the application's port number."),(0,t.kt)("p",null,"Rancher supports two types of load balancers:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#layer-4-load-balancer"},"Layer-4 Load Balancers")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#layer-7-load-balancer"},"Layer-7 Load Balancers"))),(0,t.kt)("p",null,"For more information, see ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"},"load balancers"),"."),(0,t.kt)("h3",{id:"load-balancer-limitations"},"Load Balancer Limitations"),(0,t.kt)("p",null,"Load Balancers have a couple of limitations you should be aware of:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Load Balancers can only handle one IP address per service, which means if you run multiple services in your cluster, you must have a load balancer for each service. Running multiples load balancers can be expensive.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"If you want to use a load balancer with a Hosted Kubernetes cluster (i.e., clusters hosted in GKE, EKS, or AKS), the load balancer must be running within that cloud provider's infrastructure. Please review the compatibility tables regarding support for load balancers based on how you've provisioned your clusters:"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"- [Support for Layer-4 Load Balancing](/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#support-for-layer-4-load-balancing)\n\n- [Support for Layer-7 Load Balancing](/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#support-for-layer-7-load-balancing)\n")),(0,t.kt)("h2",{id:"ingress"},"Ingress"),(0,t.kt)("p",null,"As mentioned in the limitations above, the disadvantages of using a load balancer are:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Load Balancers can only handle one IP address per service."),(0,t.kt)("li",{parentName:"ul"},"If you run multiple services in your cluster, you must have a load balancer for each service."),(0,t.kt)("li",{parentName:"ul"},"It can be expensive to have a load balancer for every service.")),(0,t.kt)("p",null,"In contrast, when an ingress is used as the entrypoint into a cluster, the ingress can route traffic to multiple services with greater flexibility. It can map multiple HTTP requests to services without individual IP addresses for each service."),(0,t.kt)("p",null,"Therefore, it is useful to have an ingress if you want multiple services to be exposed with the same IP address, the same Layer 7 protocol, or the same privileged node-ports: 80 and 443."),(0,t.kt)("p",null,"Ingress works in conjunction with one or more ingress controllers to dynamically route service requests. When the ingress receives a request, the ingress controller(s) in your cluster direct the request to the correct service based on service subdomains or path rules that you've configured."),(0,t.kt)("p",null,"Each Kubernetes Ingress resource corresponds roughly to a file in ",(0,t.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/")," containing a ",(0,t.kt)("inlineCode",{parentName:"p"},"server{}")," configuration block, where requests for specific files and folders are configured."),(0,t.kt)("p",null,"Your ingress, which creates a port of entry to your cluster similar to a load balancer, can reside within your cluster or externally. Ingress and ingress controllers residing in RKE-launched clusters are powered by ",(0,t.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),"."),(0,t.kt)("p",null,"Ingress can provide other functionality as well, such as SSL termination, name-based virtual hosting, and more."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"Using Rancher in a High Availability Configuration?")),(0,t.kt)("p",{parentName:"blockquote"},"Refrain from adding an Ingress to the ",(0,t.kt)("inlineCode",{parentName:"p"},"local")," cluster. The Nginx Ingress Controller that Rancher uses acts as a global entry point for ",(0,t.kt)("em",{parentName:"p"},"all")," clusters managed by Rancher, including the ",(0,t.kt)("inlineCode",{parentName:"p"},"local")," cluster.  Therefore, when users try to access an application, your Rancher connection may drop due to the Nginx configuration being reloaded. We recommend working around this issue by deploying applications only in clusters that you launch using Rancher.")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"For more information on how to set up ingress in Rancher, see ",(0,t.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},"Ingress"),"."),(0,t.kt)("li",{parentName:"ul"},"For complete information about ingress and ingress controllers, see the ",(0,t.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes Ingress Documentation")),(0,t.kt)("li",{parentName:"ul"},"When using ingresses in a project, you can program the ingress hostname to an external DNS by setting up a Global DNS entry, see ",(0,t.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns"},"Global DNS"),".")))}h.isMDXComponent=!0}}]);
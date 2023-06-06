"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"Tips for Setting Up Containers"},c=void 0,l={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers",id:"version-2.5/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers",title:"Tips for Setting Up Containers",description:"Running well-built containers can greatly impact the overall performance and security of your environment.",source:"@site/versioned_docs/version-2.5/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers",permalink:"/v2.5/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Tips for Setting Up Containers"},sidebar:"tutorialSidebar",previous:{title:"Monitoring Best Practices",permalink:"/v2.5/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices"},next:{title:"Best Practices for Rancher Managed vSphere Clusters",permalink:"/v2.5/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere"}},u={},p=[{value:"Use a Common Container OS",id:"use-a-common-container-os",level:3},{value:"Start with a FROM scratch container",id:"start-with-a-from-scratch-container",level:3},{value:"Run Container Processes as Unprivileged",id:"run-container-processes-as-unprivileged",level:3},{value:"Define Resource Limits",id:"define-resource-limits",level:3},{value:"Define Resource Requirements",id:"define-resource-requirements",level:3},{value:"Liveness and Readiness Probes",id:"liveness-and-readiness-probes",level:3}],d={toc:p};function m(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Running well-built containers can greatly impact the overall performance and security of your environment."),(0,n.kt)("p",null,"Below are a few tips for setting up your containers."),(0,n.kt)("p",null,"For a more detailed discussion of security for containers, you can also refer to Rancher's ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/complete-guide-container-security"},"Guide to Container Security.")),(0,n.kt)("h3",{id:"use-a-common-container-os"},"Use a Common Container OS"),(0,n.kt)("p",null,"When possible, you should try to standardize on a common container base OS."),(0,n.kt)("p",null,"Smaller distributions such as Alpine and BusyBox reduce container image size and generally have a smaller attack/vulnerability surface."),(0,n.kt)("p",null,"Popular distributions such as Ubuntu, Fedora, and CentOS are more field-tested and offer more functionality."),(0,n.kt)("h3",{id:"start-with-a-from-scratch-container"},"Start with a FROM scratch container"),(0,n.kt)("p",null,"If your microservice is a standalone static binary, you should use a FROM scratch container."),(0,n.kt)("p",null,"The FROM scratch container is an ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/scratch"},"official Docker image")," that is empty so that you can use it to design minimal images."),(0,n.kt)("p",null,"This will have the smallest attack surface and smallest image size."),(0,n.kt)("h3",{id:"run-container-processes-as-unprivileged"},"Run Container Processes as Unprivileged"),(0,n.kt)("p",null,"When possible, use a non-privileged user when running processes within your container. While container runtimes provide isolation, vulnerabilities and attacks are still possible. Inadvertent or accidental host mounts can also be impacted if the container is running as root. For details on configuring a security context for a pod or container, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"},"Kubernetes docs"),"."),(0,n.kt)("h3",{id:"define-resource-limits"},"Define Resource Limits"),(0,n.kt)("p",null,"Apply CPU and memory limits to your pods. This can help manage the resources on your worker nodes and avoid a malfunctioning microservice from impacting other microservices."),(0,n.kt)("p",null,"In standard Kubernetes, you can set resource limits on the namespace level. In Rancher, you can set resource limits on the project level and they will propagate to all the namespaces within the project. For details, refer to the Rancher docs."),(0,n.kt)("p",null,"When setting resource quotas, if you set anything related to CPU or Memory (i.e. limits or reservations) on a project or namespace, all containers will require a respective CPU or Memory field set during creation. To avoid setting these limits on each and every container during workload creation, a default container resource limit can be specified on the namespace."),(0,n.kt)("p",null,"The Kubernetes docs have more information on how resource limits can be set at the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#resource-requests-and-limits-of-pod-and-container"},"container level")," and the namespace level."),(0,n.kt)("h3",{id:"define-resource-requirements"},"Define Resource Requirements"),(0,n.kt)("p",null,"You should apply CPU and memory requirements to your pods. This is crucial for informing the scheduler which type of compute node your pod needs to be placed on, and ensuring it does not over-provision that node. In Kubernetes, you can set a resource requirement by defining ",(0,n.kt)("inlineCode",{parentName:"p"},"resources.requests")," in the resource requests field in a pod's container spec. For details, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#resource-requests-and-limits-of-pod-and-container"},"Kubernetes docs"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," If you set a resource limit for the namespace that the pod is deployed in, and the container doesn't have a specific resource request, the pod will not be allowed to start. To avoid setting these fields on each and every container during workload creation, a default container resource limit can be specified on the namespace.")),(0,n.kt)("p",null,"It is recommended to define resource requirements on the container level because otherwise, the scheduler makes assumptions that will likely not be helpful to your application when the cluster experiences load."),(0,n.kt)("h3",{id:"liveness-and-readiness-probes"},"Liveness and Readiness Probes"),(0,n.kt)("p",null,"Set up liveness and readiness probes for your container. Unless your container completely crashes, Kubernetes will not know it's unhealthy unless you create an endpoint or mechanism that can report container status. Alternatively, make sure your container halts and crashes if unhealthy."),(0,n.kt)("p",null,"The Kubernetes docs show how to ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/"},"configure liveness and readiness probes for containers.")))}m.isMDXComponent=!0}}]);
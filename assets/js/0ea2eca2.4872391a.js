"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=n,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||a;return r?o.createElement(m,s(s({ref:t},c),{},{components:r})):o.createElement(m,s({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"Kubernetes Workloads and Pods",description:"Learn about the two constructs with which you can build any complex containerized application in Kubernetes: Kubernetes workloads and pods"},i=void 0,p={unversionedId:"pages-for-subheaders/workloads-and-pods",id:"version-2.6/pages-for-subheaders/workloads-and-pods",title:"Kubernetes Workloads and Pods",description:"Learn about the two constructs with which you can build any complex containerized application in Kubernetes: Kubernetes workloads and pods",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/workloads-and-pods.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/workloads-and-pods",permalink:"/v2.6/pages-for-subheaders/workloads-and-pods",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/workloads-and-pods.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Kubernetes Workloads and Pods",description:"Learn about the two constructs with which you can build any complex containerized application in Kubernetes: Kubernetes workloads and pods"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Resources",permalink:"/v2.6/pages-for-subheaders/kubernetes-resources-setup"},next:{title:"Deploying Workloads",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"}},c={},d=[{value:"Pods",id:"pods",level:3},{value:"Workloads",id:"workloads",level:3},{value:"Workload Types",id:"workload-types",level:4},{value:"Services",id:"services",level:3},{value:"Service Types",id:"service-types",level:4},{value:"Workload Options",id:"workload-options",level:2},{value:"Related Links",id:"related-links",level:2},{value:"External Links",id:"external-links",level:3}],u={toc:d};function k(e){var{components:t}=e,r=s(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can build any complex containerized application in Kubernetes using two basic constructs: pods and workloads. Once you build an application, you can expose it for access either within the same cluster or on the Internet using a third construct: services."),(0,o.kt)("h3",{id:"pods"},"Pods"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/"},(0,o.kt)("em",{parentName:"a"},"Pods"))," are one or more containers that share network namespaces and storage volumes. Most pods have only one container. Therefore when we discuss ",(0,o.kt)("em",{parentName:"p"},"pods"),", the term is often synonymous with ",(0,o.kt)("em",{parentName:"p"},"containers"),". You scale pods the same way you scale containers\u2014by having multiple instances of the same pod that implement a service. Usually pods get scaled and managed by the workload."),(0,o.kt)("h3",{id:"workloads"},"Workloads"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Workloads")," are objects that set deployment rules for pods. Based on these rules, Kubernetes performs the deployment and updates the workload with the current state of the application.\nWorkloads let you define the rules for application scheduling, scaling, and upgrade."),(0,o.kt)("h4",{id:"workload-types"},"Workload Types"),(0,o.kt)("p",null,"Kubernetes divides workloads into different types. The most popular types supported by Kubernetes are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployments")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"Deployments")," are best used for stateless applications (i.e., when you don't have to maintain the workload's state). Pods managed by deployment workloads are treated as independent and disposable. If a pod encounters disruption, Kubernetes removes it and then recreates it. An example application would be an Nginx web server.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSets")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"StatefulSets"),", in contrast to deployments, are best used when your application needs to maintain its identity and store data. An application would be something like Zookeeper\u2014an application that requires a database for storage.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSets")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"Daemonsets")," ensures that every node in the cluster runs a copy of pod. For use cases where you're collecting logs or monitoring node performance, this daemon-like workload works best.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"Jobs")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"Jobs")," launch one or more pods and ensure that a specified number of them successfully terminate. Jobs are best used to run a finite task to completion as opposed to managing an ongoing desired application state.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"},"CronJobs")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"CronJobs")," are similar to jobs. CronJobs, however, runs to completion on a cron-based schedule."))),(0,o.kt)("h3",{id:"services"},"Services"),(0,o.kt)("p",null,"In many use cases, a workload has to be either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accessed by other workloads in the cluster."),(0,o.kt)("li",{parentName:"ul"},"Exposed to the outside world.")),(0,o.kt)("p",null,"You can achieve these goals by creating a ",(0,o.kt)("em",{parentName:"p"},"Service"),". Services are mapped to the underlying workload's pods using a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#service-and-replicationcontroller"},"selector/label approach (view the code samples)"),". Rancher UI simplifies this mapping process by automatically creating a service along with the workload, using the service port and type that you select."),(0,o.kt)("h4",{id:"service-types"},"Service Types"),(0,o.kt)("p",null,"There are several types of services available in Rancher. The descriptions below are sourced from the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"},"Kubernetes Documentation"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ClusterIP")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Exposes the service on a cluster-internal IP. Choosing this value makes the service only reachable from within the cluster. This is the default ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceType"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NodePort")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Exposes the service on each Node\u2019s IP at a static port (the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort"),"). A ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterIP")," service, to which the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort")," service will route, is automatically created. You\u2019ll be able to contact the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort")," service, from outside the cluster, by requesting ",(0,o.kt)("inlineCode",{parentName:"p"},"<NodeIP>:<NodePort>"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"LoadBalancer")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Exposes the service externally using a cloud provider\u2019s load balancer. ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterIP")," services, to which the external load balancer will route, are automatically created.")))),(0,o.kt)("h2",{id:"workload-options"},"Workload Options"),(0,o.kt)("p",null,"This section of the documentation contains instructions for deploying workloads and using workload options."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploy Workloads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"},"Upgrade Workloads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"},"Rollback Workloads"))),(0,o.kt)("h2",{id:"related-links"},"Related Links"),(0,o.kt)("h3",{id:"external-links"},"External Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Services"))))}k.isMDXComponent=!0}}]);
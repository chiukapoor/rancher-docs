"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),v=a,m=u["".concat(l,".").concat(v)]||u[v]||p[v]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"6. Service Discovery"},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services",id:"version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services",title:"6. Service Discovery",description:"Service discovery is one of the core functionalities of any container-based environment. Once you have packaged and launched your application, the next step is making it discoverable to other containers in your environment or the external world. This document will describe how to use the service discovery support provided by Rancher v2.x so that you can find them by name.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services.md",sourceDirName:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",slug:"/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1683064602,formattedLastUpdatedAt:"2023\u5e745\u67082\u65e5",frontMatter:{title:"6. Service Discovery"},sidebar:"tutorialSidebar",previous:{title:"5. Schedule Your Services",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services"},next:{title:"7. Load Balancing",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/load-balancing"}},d={},p=[{value:"Service Discovery: Rancher v1.6 vs. v2.x",id:"service-discovery-rancher-v16-vs-v2x",level:2},{value:"Service Discovery Within and Across Namespaces",id:"service-discovery-within-and-across-namespaces",level:3},{value:"Container Discovery",id:"container-discovery",level:3},{value:"Linking Migrated Workloads and Services",id:"linking-migrated-workloads-and-services",level:3},{value:"Service Name Alias Creation",id:"service-name-alias-creation",level:3},{value:"Next: Load Balancing",id:"next-load-balancing",level:3}],u={toc:p};function v(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},u,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Service discovery is one of the core functionalities of any container-based environment. Once you have packaged and launched your application, the next step is making it discoverable to other containers in your environment or the external world. This document will describe how to use the service discovery support provided by Rancher v2.x so that you can find them by name."),(0,n.kt)("p",null,"This document will also show you how to link the workloads and services that you migrated into Rancher v2.x. When you parsed your services from v1.6 using migration-tools CLI, it output two files for each service: one deployment manifest and one service manifest. You'll have to link these two files together before the deployment works correctly in v2.x."),(0,n.kt)("figcaption",null,"Resolve the ",(0,n.kt)("code",null,"output.txt")," Link Directive"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Resolve Link Directive",src:r(76826).Z,width:"849",height:"402"})),(0,n.kt)("h2",{id:"service-discovery-rancher-v16-vs-v2x"},"Service Discovery: Rancher v1.6 vs. v2.x"),(0,n.kt)("p",null,"For Rancher v2.x, we've replaced the Rancher DNS microservice used in v1.6 with native ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"},"Kubernetes DNS support"),", which provides equivalent service discovery for Kubernetes workloads and pods. Former Cattle users can replicate all the service discovery features from Rancher v1.6 in v2.x. There's no loss of functionality."),(0,n.kt)("p",null,"Kubernetes schedules a DNS pod and service in the cluster, which is similar to the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v1.6/en/cattle/internal-dns-service/"},"Rancher v1.6 DNS microservice"),". Kubernetes then configures its kubelets to route all DNS lookups to this DNS service, which is skyDNS, a flavor of the default Kube-DNS implementation."),(0,n.kt)("p",null,"The following table displays each service discovery feature available in the two Rancher releases."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Service Discovery Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Rancher v1.6"),(0,n.kt)("th",{parentName:"tr",align:null},"Rancher v2.x"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#service-discovery-within-and-across-stacks"},"service discovery within and across stack")," (i.e., clusters)"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"All services in the stack are resolvable by ",(0,n.kt)("inlineCode",{parentName:"td"},"<service_name>")," and by ",(0,n.kt)("inlineCode",{parentName:"td"},"<service_name>.<stack_name>")," across stacks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#container-discovery"},"container discovery")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"All containers are resolvable globally by their name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#service-name-alias-creation"},"service alias name creation")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"Adding an alias name to services and linking to other services using aliases.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#service-name-alias-creation"},"discovery of external services")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"Pointing to services deployed outside of Rancher using the external IP(s) or a domain name.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"service-discovery-within-and-across-namespaces"},"Service Discovery Within and Across Namespaces"),(0,n.kt)("p",null,"When you create a ",(0,n.kt)("em",{parentName:"p"},"new")," workload in v2.x (not migrated, more on that ",(0,n.kt)("a",{parentName:"p",href:"#linking-migrated-workloads-and-services"},"below"),"), Rancher automatically creates a service with an identical name, and then links the service and workload together. If you don't explicitly expose a port, the default port of ",(0,n.kt)("inlineCode",{parentName:"p"},"42")," is used. This practice makes the workload discoverable within and across namespaces by its name."),(0,n.kt)("h3",{id:"container-discovery"},"Container Discovery"),(0,n.kt)("p",null,"Individual pods running in the Kubernetes cluster also get a DNS record assigned, which uses dot notation as well: ",(0,n.kt)("inlineCode",{parentName:"p"},"<POD_IP_ADDRESS>.<NAMESPACE_NAME>.pod.cluster.local"),". For example, a pod with an IP of ",(0,n.kt)("inlineCode",{parentName:"p"},"10.42.2.7")," in the namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," with a DNS name of ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster.local")," would have an entry of ",(0,n.kt)("inlineCode",{parentName:"p"},"10-42-2-7.default.pod.cluster.local"),"."),(0,n.kt)("p",null,"Pods can also be resolved using the ",(0,n.kt)("inlineCode",{parentName:"p"},"hostname")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"subdomain")," fields if set in the pod spec. Details about this resolution is covered in the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"},"Kubernetes docs"),"."),(0,n.kt)("h3",{id:"linking-migrated-workloads-and-services"},"Linking Migrated Workloads and Services"),(0,n.kt)("p",null,"When you migrate v1.6 services to v2.x, Rancher does not automatically create a Kubernetes service record for each migrated deployment. Instead, you'll have to link the deployment and service together manually, using any of the methods listed below."),(0,n.kt)("p",null,"In the image below, the ",(0,n.kt)("inlineCode",{parentName:"p"},"web-deployment.yml")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"web-service.yml")," files ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services#migration-example-file-output"},"created after parsing")," our ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/migrate-from-v1.6-v2.x#migration-example-files"},"migration example services")," are linked together."),(0,n.kt)("figcaption",null,"Linked Workload and Kubernetes Service"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Linked Workload and Kubernetes Service",src:r(14884).Z,width:"1688",height:"792"})),(0,n.kt)("h3",{id:"service-name-alias-creation"},"Service Name Alias Creation"),(0,n.kt)("p",null,"Just as you can create an alias for Rancher v1.6 services, you can do the same for Rancher v2.x workloads. Similarly, you can also create DNS records pointing to services running externally, using either their hostname or IP address. These DNS records are Kubernetes service objects."),(0,n.kt)("p",null,"Using the v2.x UI, use the context menu to navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Project")," view. Then click ",(0,n.kt)("strong",{parentName:"p"},"Resources > Workloads > Service Discovery.")," (In versions before v2.3.0, click the ",(0,n.kt)("strong",{parentName:"p"},"Workloads > Service Discovery")," tab.) All existing DNS records created for your workloads are listed under each namespace."),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Record")," to create new DNS records. Then view the various options supported to link to external services or to create aliases for another workload, DNS record, or set of pods."),(0,n.kt)("figcaption",null,"Add Service Discovery Record"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Service Discovery Record",src:r(93599).Z,width:"1740",height:"725"})),(0,n.kt)("p",null,"The following table indicates which alias options are implemented natively by Kubernetes and which options are implemented by Rancher leveraging Kubernetes."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Kubernetes-implemented?"),(0,n.kt)("th",{parentName:"tr",align:null},"Rancher-implemented?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pointing to an external hostname"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pointing to a set of pods that match a selector"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pointing to an external IP address"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pointing to another workload"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create alias for another DNS record"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,n.kt)("h3",{id:"next-load-balancing"},(0,n.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/load-balancing"},"Next: Load Balancing")))}v.isMDXComponent=!0},93599:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-record-ef8673815134990d749825293f839af0.png"},14884:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/linked-service-workload-e78c584cc8524326510458d748854c45.png"},76826:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/resolve-links-367bf73525a0b4aba718c3981dfbeb4d.png"}}]);
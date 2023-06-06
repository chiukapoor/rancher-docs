"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64711],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(n),c=a,g=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72920:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Integrating Rancher and Prometheus for Cluster Monitoring",description:"Prometheus lets you view metrics from your different Rancher and Kubernetes objects. Learn about the scope of monitoring and how to enable cluster monitoring"},u=void 0,s={unversionedId:"pages-for-subheaders/cluster-monitoring",id:"version-2.0-2.4/pages-for-subheaders/cluster-monitoring",title:"Integrating Rancher and Prometheus for Cluster Monitoring",description:"Prometheus lets you view metrics from your different Rancher and Kubernetes objects. Learn about the scope of monitoring and how to enable cluster monitoring",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/cluster-monitoring.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cluster-monitoring",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/cluster-monitoring.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Integrating Rancher and Prometheus for Cluster Monitoring",description:"Prometheus lets you view metrics from your different Rancher and Kubernetes objects. Learn about the scope of monitoring and how to enable cluster monitoring"},sidebar:"tutorialSidebar",previous:{title:"Default Alerts for Cluster Monitoring",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts"},next:{title:"Cluster Metrics",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/cluster-metrics"}},p={},m=[{value:"About Prometheus",id:"about-prometheus",level:2},{value:"Monitoring Scope",id:"monitoring-scope",level:2},{value:"Enabling Cluster Monitoring",id:"enabling-cluster-monitoring",level:2},{value:"Resource Consumption",id:"resource-consumption",level:2},{value:"Resource Consumption of Prometheus Pods",id:"resource-consumption-of-prometheus-pods",level:3},{value:"Resource Consumption of Other Pods",id:"resource-consumption-of-other-pods",level:3}],d={toc:m};function c(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,r.kt)("p",null,"Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),", a leading open-source monitoring solution."),(0,r.kt)("h2",{id:"about-prometheus"},"About Prometheus"),(0,r.kt)("p",null,"Prometheus provides a ",(0,r.kt)("em",{parentName:"p"},"time series")," of your data, which is, according to ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/concepts/data_model/"},"Prometheus documentation"),":"),(0,r.kt)("p",null,"You can configure these services to collect logs at either the cluster level or the project level. This page describes how to enable monitoring for a cluster. For details on enabling monitoring for a project, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring"},"project administration section"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A stream of timestamped values belonging to the same metric and the same set of labeled dimensions, along with comprehensive statistics and metrics of the monitored cluster.")),(0,r.kt)("p",null,"In other words, Prometheus lets you view metrics from your different Rancher and Kubernetes objects. Using timestamps, Prometheus lets you query and view these metrics in easy-to-read graphs and visuals, either through the Rancher UI or ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"),", which is an analytics viewing platform deployed along with Prometheus."),(0,r.kt)("p",null,"By viewing data that Prometheus scrapes from your cluster control plane, nodes, and deployments, you can stay on top of everything happening in your cluster. You can then use these analytics to better run your organization: stop system emergencies before they start, develop maintenance strategies, restore crashed servers, etc."),(0,r.kt)("p",null,"Multi-tenancy support in terms of cluster-only and project-only Prometheus instances are also supported."),(0,r.kt)("h2",{id:"monitoring-scope"},"Monitoring Scope"),(0,r.kt)("p",null,"Using Prometheus, you can monitor Rancher at both the cluster level and ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring"},"project level"),". For each cluster and project that is enabled for monitoring, Rancher deploys a Prometheus server."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cluster monitoring allows you to view the health of your Kubernetes cluster. Prometheus collects metrics from the cluster components below, which you can view in graphs and charts."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Kubernetes control plane"),(0,r.kt)("li",{parentName:"ul"},"etcd database"),(0,r.kt)("li",{parentName:"ul"},"All nodes (including workers)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/project-monitoring"},"Project monitoring")," allows you to view the state of pods running in a given project. Prometheus collects metrics from the project's deployed HTTP and TCP/UDP workloads."))),(0,r.kt)("h2",{id:"enabling-cluster-monitoring"},"Enabling Cluster Monitoring"),(0,r.kt)("p",null,"As an ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," or ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),", you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisites:")," The following TCP ports need to be opened for metrics scraping:"),(0,r.kt)("table",{parentName:"blockquote"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Node type"),(0,r.kt)("th",{parentName:"tr",align:null},"Component"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9796"),(0,r.kt)("td",{parentName:"tr",align:null},"Worker"),(0,r.kt)("td",{parentName:"tr",align:null},"Node exporter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10254"),(0,r.kt)("td",{parentName:"tr",align:null},"Worker"),(0,r.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10250"),(0,r.kt)("td",{parentName:"tr",align:null},"Worker/Controlplane"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubelet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10251"),(0,r.kt)("td",{parentName:"tr",align:null},"Controlplane"),(0,r.kt)("td",{parentName:"tr",align:null},"Kube scheduler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10252"),(0,r.kt)("td",{parentName:"tr",align:null},"Controlplane"),(0,r.kt)("td",{parentName:"tr",align:null},"Kube controller manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2379"),(0,r.kt)("td",{parentName:"tr",align:null},"Etcd"),(0,r.kt)("td",{parentName:"tr",align:null},"Etcd server"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Monitoring V1 requires a Kubernetes verison less than or equal to v1.20.x. To install monitoring on Kubernetes v1.21+, you will need to ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring"},"migrate to Monitoring V2."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to configure cluster monitoring.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Tools > Monitoring")," in the navigation bar.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Enable")," to show the ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/prometheus"},"Prometheus configuration options"),". Review the ",(0,r.kt)("a",{parentName:"p",href:"#resource-consumption"},"resource consumption recommendations")," to ensure you have enough resources for Prometheus and on your worker nodes to enable monitoring. Enter in your desired configuration options.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The Prometheus server will be deployed as well as two monitoring applications. The two monitoring applications, ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-monitoring")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring-operator"),", are added as an ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher"},"application")," to the cluster's ",(0,r.kt)("inlineCode",{parentName:"p"},"system")," project. After the applications are ",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", you can start viewing ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/cluster-metrics"},"cluster metrics")," through the Rancher dashboard or directly from Grafana."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The default username and password for the Grafana instance will be ",(0,r.kt)("inlineCode",{parentName:"p"},"admin/admin"),". However, Grafana dashboards are served via the Rancher authentication proxy, so only users who are currently authenticated into the Rancher server have access to the Grafana dashboard.")),(0,r.kt)("h2",{id:"resource-consumption"},"Resource Consumption"),(0,r.kt)("p",null,"When enabling cluster monitoring, you need to ensure your worker nodes and Prometheus pod have enough resources. The tables below provides a guide of how much resource consumption will be used. In larger deployments, it is strongly advised that the monitoring infrastructure be placed on dedicated nodes in the cluster."),(0,r.kt)("h3",{id:"resource-consumption-of-prometheus-pods"},"Resource Consumption of Prometheus Pods"),(0,r.kt)("p",null,"This table is the resource consumption of the Prometheus pod, which is based on the number of all the nodes in the cluster. The count of nodes includes the worker, control plane and etcd nodes. Total disk space allocation should be approximated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"rate * retention")," period set at the cluster level. When enabling cluster level monitoring, you should adjust the CPU and Memory limits and reservation."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number of Cluster Nodes"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU (milli CPU)"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory"),(0,r.kt)("th",{parentName:"tr",align:null},"Disk"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"650 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"~1 GB/Day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"2000"),(0,r.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"~5 GB/Day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"256"),(0,r.kt)("td",{parentName:"tr",align:null},"4000"),(0,r.kt)("td",{parentName:"tr",align:null},"6 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"~18 GB/Day")))),(0,r.kt)("p",null,"Additional pod resource requirements for cluster level monitoring."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Workload"),(0,r.kt)("th",{parentName:"tr",align:null},"Container"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU - Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Mem - Request"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU - Limit"),(0,r.kt)("th",{parentName:"tr",align:null},"Mem - Limit"),(0,r.kt)("th",{parentName:"tr",align:null},"Configurable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prometheus"),(0,r.kt)("td",{parentName:"tr",align:null},"prometheus"),(0,r.kt)("td",{parentName:"tr",align:null},"750m"),(0,r.kt)("td",{parentName:"tr",align:null},"750Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"1000m"),(0,r.kt)("td",{parentName:"tr",align:null},"1000Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"prometheus-proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"50m"),(0,r.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"100m"),(0,r.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"prometheus-auth"),(0,r.kt)("td",{parentName:"tr",align:null},"100m"),(0,r.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"500m"),(0,r.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"prometheus-config-reloader"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"50m"),(0,r.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"rules-configmap-reloader"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"100m"),(0,r.kt)("td",{parentName:"tr",align:null},"25Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,r.kt)("td",{parentName:"tr",align:null},"grafana-init-plugin-json-copy"),(0,r.kt)("td",{parentName:"tr",align:null},"50m"),(0,r.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"50m"),(0,r.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"grafana-init-plugin-json-modify"),(0,r.kt)("td",{parentName:"tr",align:null},"50m"),(0,r.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"50m"),(0,r.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"grafana"),(0,r.kt)("td",{parentName:"tr",align:null},"100m"),(0,r.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"200m"),(0,r.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"grafana-proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"50m"),(0,r.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"100m"),(0,r.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kube-State Exporter"),(0,r.kt)("td",{parentName:"tr",align:null},"kube-state"),(0,r.kt)("td",{parentName:"tr",align:null},"100m"),(0,r.kt)("td",{parentName:"tr",align:null},"130Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"100m"),(0,r.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node Exporter"),(0,r.kt)("td",{parentName:"tr",align:null},"exporter-node"),(0,r.kt)("td",{parentName:"tr",align:null},"200m"),(0,r.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"200m"),(0,r.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operator"),(0,r.kt)("td",{parentName:"tr",align:null},"prometheus-operator"),(0,r.kt)("td",{parentName:"tr",align:null},"100m"),(0,r.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"200m"),(0,r.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")))),(0,r.kt)("h3",{id:"resource-consumption-of-other-pods"},"Resource Consumption of Other Pods"),(0,r.kt)("p",null,"Besides the Prometheus pod, there are components that are deployed that require additional resources on the worker nodes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pod"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU (milli CPU)"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory (MB)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node Exporter (Per Node)"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kube State Cluster Monitor"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"130")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"150")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prometheus Cluster Monitoring Nginx"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"50")))))}c.isMDXComponent=!0}}]);
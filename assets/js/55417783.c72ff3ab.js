"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"Default Alerts for Cluster Monitoring"},i=void 0,c={unversionedId:"explanations/integrations-in-rancher/cluster-alerts/default-alerts",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts",title:"Default Alerts for Cluster Monitoring",description:"When you create a cluster, some alert rules are predefined. These alerts notify you about signs that the cluster could be unhealthy. You can receive these alerts if you configure a notifier for them.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts.md",sourceDirName:"explanations/integrations-in-rancher/cluster-alerts",slug:"/explanations/integrations-in-rancher/cluster-alerts/default-alerts",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Default Alerts for Cluster Monitoring"},sidebar:"tutorialSidebar",previous:{title:"Cluster Alerts",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-alerts"},next:{title:"Integrating Rancher and Prometheus for Cluster Monitoring",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"}},u={},p=[{value:"Alerts for etcd",id:"alerts-for-etcd",level:2},{value:"Alerts for Kubernetes Components",id:"alerts-for-kubernetes-components",level:2},{value:"Alerts for Events",id:"alerts-for-events",level:2},{value:"Alerts for Nodes",id:"alerts-for-nodes",level:2},{value:"Project-level Alerts",id:"project-level-alerts",level:2}],d={toc:p};function h(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When you create a cluster, some alert rules are predefined. These alerts notify you about signs that the cluster could be unhealthy. You can receive these alerts if you configure a ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifier")," for them."),(0,n.kt)("p",null,"Several of the alerts use Prometheus expressions as the metric that triggers the alert. For more information on how expressions work, you can refer to the Rancher ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression"},"documentation about Prometheus expressions")," or the Prometheus ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"documentation about querying metrics"),"."),(0,n.kt)("h2",{id:"alerts-for-etcd"},"Alerts for etcd"),(0,n.kt)("p",null,"Etcd is the key-value store that contains the state of the Kubernetes cluster. Rancher provides default alerts if the built-in monitoring detects a potential problem with etcd. You don't have to enable monitoring to receive these alerts."),(0,n.kt)("p",null,"A leader is the node that handles all client requests that need cluster consensus. For more information, you can refer to this ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/blog/2019/2019-01-29-what-is-etcd/#how-does-etcd-work"},"explanation of how etcd works.")),(0,n.kt)("p",null,"The leader of the cluster can change in response to certain events. It is normal for the leader to change, but too many changes can indicate a problem with the network or a high CPU load. With longer latencies, the default etcd configuration may cause frequent heartbeat timeouts, which trigger a new leader election."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Alert"),(0,n.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A high number of leader changes within the etcd cluster are happening"),(0,n.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered when the leader changes more than three times in one hour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Database usage close to the quota 500M"),(0,n.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered when the size of etcd exceeds 500M.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Etcd is unavailable"),(0,n.kt)("td",{parentName:"tr",align:null},"A critical alert is triggered when etcd becomes unavailable.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Etcd member has no leader"),(0,n.kt)("td",{parentName:"tr",align:null},"A critical alert is triggered when the etcd cluster does not have a leader for at least three minutes.")))),(0,n.kt)("h2",{id:"alerts-for-kubernetes-components"},"Alerts for Kubernetes Components"),(0,n.kt)("p",null,"Rancher provides alerts when core Kubernetes system components become unhealthy."),(0,n.kt)("p",null,"Controllers update Kubernetes resources based on changes in etcd. The ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"},"controller manager")," monitors the cluster desired state through the Kubernetes API server and makes the necessary changes to the current state to reach the desired state."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/"},"scheduler")," service is a core component of Kubernetes. It is responsible for scheduling cluster workloads to nodes, based on various configurations, metrics, resource requirements and workload-specific requirements."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Alert"),(0,n.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Controller Manager is unavailable"),(0,n.kt)("td",{parentName:"tr",align:null},"A critical warning is triggered when the cluster\u2019s controller-manager becomes unavailable.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Scheduler is unavailable"),(0,n.kt)("td",{parentName:"tr",align:null},"A critical warning is triggered when the cluster\u2019s scheduler becomes unavailable.")))),(0,n.kt)("h2",{id:"alerts-for-events"},"Alerts for Events"),(0,n.kt)("p",null,"Kubernetes events are objects that provide insight into what is happening inside a cluster, such as what decisions were made by the scheduler or why some pods were evicted from the node. In the Rancher UI, from the project view, you can see events for each workload."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Alert"),(0,n.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Get warning deployment event"),(0,n.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered when a warning event happens on a deployment.")))),(0,n.kt)("h2",{id:"alerts-for-nodes"},"Alerts for Nodes"),(0,n.kt)("p",null,"Alerts can be triggered based on node metrics. Each computing resource in a Kubernetes cluster is called a node. Nodes can be either bare-metal servers or virtual machines."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Alert"),(0,n.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"High CPU load"),(0,n.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered if the node uses more than 100 percent of the node\u2019s available CPU seconds for at least three minutes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"High node memory utilization"),(0,n.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered if the node uses more than 80 percent of its available memory for at least three minutes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Node disk is running full within 24 hours"),(0,n.kt)("td",{parentName:"tr",align:null},"A critical alert is triggered if the disk space on the node is expected to run out in the next 24 hours based on the disk growth over the last 6 hours.")))),(0,n.kt)("h2",{id:"project-level-alerts"},"Project-level Alerts"),(0,n.kt)("p",null,"When you enable monitoring for the project, some project-level alerts are provided. For details, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-project-tools/project-alerts"},"section on project-level alerts.")))}h.isMDXComponent=!0}}]);
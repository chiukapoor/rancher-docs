"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(y,a(a({ref:t},l),{},{components:r})):o.createElement(y,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"Setting up Monitoring for a Workload"},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",title:"Setting up Monitoring for a Workload",description:"If you only need CPU and memory time series for the workload, you don't need to deploy a ServiceMonitor or PodMonitor because the monitoring application already collects metrics data on resource usage by default.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Setting up Monitoring for a Workload"},sidebar:"tutorialSidebar",previous:{title:"Uninstall Monitoring",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"},next:{title:"Customizing Grafana Dashboards",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"}},l={},d=[{value:"Display CPU and Memory Metrics for a Workload",id:"display-cpu-and-memory-metrics-for-a-workload",level:3},{value:"Setting up Metrics Beyond CPU and Memory",id:"setting-up-metrics-beyond-cpu-and-memory",level:3}],p={toc:d};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you only need CPU and memory time series for the workload, you don't need to deploy a ServiceMonitor or PodMonitor because the monitoring application already collects metrics data on resource usage by default."),(0,o.kt)("p",null,"The steps for setting up monitoring for workloads depend on whether you want basic metrics such as CPU and memory for the workload, or whether you want to scrape custom metrics from the workload."),(0,o.kt)("p",null,"If you only need CPU and memory time series for the workload, you don't need to deploy a ServiceMonitor or PodMonitor because the monitoring application already collects metrics data on resource usage by default. The resource usage time series data is in Prometheus's local time series database."),(0,o.kt)("p",null,"Grafana shows the data in aggregate, but you can see the data for the individual workload by using a PromQL query that extracts the data for that workload. Once you have the PromQL query, you can execute the query individually in the Prometheus UI and see the time series visualized there, or you can use the query to customize a Grafana dashboard to display the workload metrics. For examples of PromQL queries for workload metrics, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/monitoring-alerting/configuration/expression/#workload-metrics"},"this section.")),(0,o.kt)("p",null,"To set up custom metrics for your workload, you will need to set up an exporter and create a new ServiceMonitor custom resource to configure Prometheus to scrape metrics from your exporter."),(0,o.kt)("h3",{id:"display-cpu-and-memory-metrics-for-a-workload"},"Display CPU and Memory Metrics for a Workload"),(0,o.kt)("p",null,"By default, the monitoring application already scrapes CPU and memory."),(0,o.kt)("p",null,"To get some fine-grained detail for a particular workload, you can customize a Grafana dashboard to display the metrics for a particular workload."),(0,o.kt)("h3",{id:"setting-up-metrics-beyond-cpu-and-memory"},"Setting up Metrics Beyond CPU and Memory"),(0,o.kt)("p",null,"For custom metrics, you will need to expose the metrics on your application in a format supported by Prometheus."),(0,o.kt)("p",null,"Then we recommend that you should create a new ServiceMonitor custom resource. When this resource is created, the Prometheus custom resource will be automatically updated so that its scrape configuration includes the new custom metrics endpoint. Then Prometheus will begin scraping metrics from the endpoint."),(0,o.kt)("p",null,"You can also create a PodMonitor to expose the custom metrics endpoint, but ServiceMonitors are more appropriate for the majority of use cases."))}m.isMDXComponent=!0}}]);
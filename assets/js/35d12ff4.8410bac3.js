"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[49539],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"Configure Alerts for Periodic Scan on a Schedule"},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",id:"version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",title:"Configure Alerts for Periodic Scan on a Schedule",description:"It is possible to run a ClusterScan on a schedule.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Configure Alerts for Periodic Scan on a Schedule"},sidebar:"tutorialSidebar",previous:{title:"Enable Alerting for Rancher CIS Benchmark",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark"},next:{title:"Create a Custom Benchmark Version for Running a Cluster Scan",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run"}},u={},p=[],d={toc:p};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It is possible to run a ClusterScan on a schedule."),(0,n.kt)("p",null,"A scheduled scan can also specify if you should receive alerts when the scan completes."),(0,n.kt)("p",null,"Alerts are supported only for a scan that runs on a schedule."),(0,n.kt)("p",null,"The CIS Benchmark application supports two types of alerts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alert on scan completion: This alert is sent out when the scan run finishes. The alert includes details including the ClusterScan's name and the ClusterScanProfile name."),(0,n.kt)("li",{parentName:"ul"},"Alert on scan failure: This alert is sent out if there are some test failures in the scan run or if the scan is in a ",(0,n.kt)("inlineCode",{parentName:"li"},"Fail")," state.")),(0,n.kt)("admonition",{title:"Prerequisite",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before enabling alerts for ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark"),", make sure to install the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application and configure the Receivers and Routes. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/monitoring-v2-configuration/receivers"},"this section.")),(0,n.kt)("p",{parentName:"admonition"},"While configuring the routes for ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," alerts, you can specify the matching using the key-value pair ",(0,n.kt)("inlineCode",{parentName:"p"},"job: rancher-cis-scan"),". An example route configuration is ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/monitoring-v2-configuration/receivers#example-route-config-for-cis-scan-alerts"},"here."))),(0,n.kt)("p",null,"To configure alerts for a scan that runs on a schedule,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Please enable alerts on the ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher-cis-benchmark")," application (#enabling-alerting-for-rancher-cis-benchmark)"),(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to run a CIS scan and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"CIS Benchmark > Scan"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose a cluster scan profile. The profile determines which CIS Benchmark version will be used and which tests will be performed. If you choose the Default profile, then the CIS Operator will choose a profile applicable to the type of Kubernetes cluster it is installed on."),(0,n.kt)("li",{parentName:"ol"},"Choose the option ",(0,n.kt)("strong",{parentName:"li"},"Run scan on a schedule"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a valid ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cron#CRON_expression"},"cron schedule expression")," in the field ",(0,n.kt)("strong",{parentName:"li"},"Schedule"),"."),(0,n.kt)("li",{parentName:"ol"},"Check the boxes next to the Alert types under ",(0,n.kt)("strong",{parentName:"li"},"Alerting"),"."),(0,n.kt)("li",{parentName:"ol"},"Optional: Choose a ",(0,n.kt)("strong",{parentName:"li"},"Retention Count"),", which indicates the number of reports maintained for this recurring scan. By default this count is 3. When this retention limit is reached, older reports will get purged."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The scan runs and reschedules to run according to the cron schedule provided. Alerts are sent out when the scan finishes if routes and receiver are configured under ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application."),(0,n.kt)("p",null,"A report is generated with the scan results every time the scan runs. To see the latest results, click the name of the scan that appears."))}h.isMDXComponent=!0}}]);
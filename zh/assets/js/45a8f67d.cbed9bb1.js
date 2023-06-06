"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"Run a Scan Periodically on a Schedule"},s=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",title:"Run a Scan Periodically on a Schedule",description:"Recurring scans can be scheduled to run on any RKE Kubernetes cluster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662675846,formattedLastUpdatedAt:"2022\u5e749\u67088\u65e5",frontMatter:{title:"Run a Scan Periodically on a Schedule"},sidebar:"tutorialSidebar",previous:{title:"Run a Scan",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan"},next:{title:"Skip Tests",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests"}},u={},d=[],p={toc:d};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Recurring scans can be scheduled to run on any RKE Kubernetes cluster."),(0,r.kt)("p",null,"To enable recurring scans, edit the advanced options in the cluster configuration during cluster creation or after the cluster has been created."),(0,r.kt)("p",null,"To schedule scans for an existing cluster:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the cluster view in Rancher."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Tools > CIS Scans.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Schedule.")," This takes you to the section of the cluster editing page that is applicable to configuring a schedule for CIS scans. (This section can also be reached by going to the cluster view, clicking ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Edit,")," and going to the ",(0,r.kt)("strong",{parentName:"li"},"Advanced Options."),")"),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"CIS Scan Enabled")," field, click ",(0,r.kt)("strong",{parentName:"li"},"Yes."),(0,r.kt)("a",{parentName:"li",href:"#skip-tests"},"defined in a separate ConfigMap")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"CIS Scan Interval (cron)")," job, enter a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cron#CRON_expression"},"cron expression")," to define how often the cluster will be scanned."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"CIS Scan Report Retention")," field, enter the number of past reports that should be kept.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The security scan will run and generate reports at the scheduled intervals."),(0,r.kt)("p",null,"The test schedule can be configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"scheduled_cluster_scan:\n\xa0\xa0\xa0\xa0enabled: true\n\xa0\xa0\xa0\xa0scan_config:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cis_scan_config:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0override_benchmark_version: rke-cis-1.4\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0profile: permissive\n\xa0\xa0\xa0\xa0schedule_config:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cron_schedule: 0 0 * * *\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0retention: 24\n")))}f.isMDXComponent=!0}}]);
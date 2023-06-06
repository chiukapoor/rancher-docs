"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[94747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"Run a Scan Periodically on a Schedule"},s=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",id:"how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",title:"Run a Scan Periodically on a Schedule",description:"To run a ClusterScan on a schedule,",source:"@site/docs/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",permalink:"/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule.md",tags:[],version:"current",lastUpdatedAt:1662477943,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{title:"Run a Scan Periodically on a Schedule"},sidebar:"tutorialSidebar",previous:{title:"Run a Scan",permalink:"/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan"},next:{title:"Skip Tests",permalink:"/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests"}},u={},p=[],d={toc:p};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To run a ClusterScan on a schedule,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to run a CIS scan and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"CIS Benchmark > Scan"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose a cluster scan profile. The profile determines which CIS Benchmark version will be used and which tests will be performed. If you choose the Default profile, then the CIS Operator will choose a profile applicable to the type of Kubernetes cluster it is installed on."),(0,n.kt)("li",{parentName:"ol"},"Choose the option ",(0,n.kt)("strong",{parentName:"li"},"Run scan on a schedule"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a valid ",(0,n.kt)("a",{href:"https://en.wikipedia.org/wiki/Cron#CRON_expression",target:"_blank"},"cron schedule expression")," in the field ",(0,n.kt)("strong",{parentName:"li"},"Schedule"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose a ",(0,n.kt)("strong",{parentName:"li"},"Retention")," count, which indicates the number of reports maintained for this recurring scan. By default this count is 3. When this retention limit is reached, older reports will get purged."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The scan runs and reschedules to run according to the cron schedule provided. The ",(0,n.kt)("strong",{parentName:"p"},"Next Scan")," value indicates the next time this scan will run again. "),(0,n.kt)("p",null,"A report is generated with the scan results every time the scan runs. To see the latest results, click the name of the scan that appears."),(0,n.kt)("p",null,"You can also see the previous reports by choosing the report from the ",(0,n.kt)("strong",{parentName:"p"},"Reports")," dropdown on the scan detail page."))}h.isMDXComponent=!0}}]);
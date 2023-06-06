"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89162],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?t.createElement(g,i(i({ref:r},l),{},{components:n})):t.createElement(g,i({ref:r},l))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50126:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});n(67294);var t=n(3905);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"Enable Alerting for Rancher CIS Benchmark"},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark",id:"version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark",title:"Enable Alerting for Rancher CIS Benchmark",description:"Alerts can be configured to be sent out for a scan that runs on a schedule.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Enable Alerting for Rancher CIS Benchmark"},sidebar:"tutorialSidebar",previous:{title:"View Reports",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/view-reports"},next:{title:"Configure Alerts for Periodic Scan on a Schedule",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule"}},l={},p=[],d={toc:p};function f(e){var{components:r}=e,n=i(e,["components"]);return(0,t.kt)("wrapper",o(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){a(e,r,n[r])}))}return e}({},d,n),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Alerts can be configured to be sent out for a scan that runs on a schedule."),(0,t.kt)("admonition",{title:"Prerequisite:",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Before enabling alerts for ",(0,t.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark"),", make sure to install the ",(0,t.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application and configure the Receivers and Routes. For more information, see ",(0,t.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/monitoring-v2-configuration/receivers"},"this section.")),(0,t.kt)("p",{parentName:"admonition"},"While configuring the routes for ",(0,t.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," alerts, you can specify the matching using the key-value pair ",(0,t.kt)("inlineCode",{parentName:"p"},"job: rancher-cis-scan"),". An example route configuration is ",(0,t.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/monitoring-v2-configuration/receivers#example-route-config-for-cis-scan-alerts"},"here."))),(0,t.kt)("p",null,"While installing or upgrading the ",(0,t.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," Helm chart, set the following flag to ",(0,t.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,t.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"alerts:\n  enabled: true\n")))}f.isMDXComponent=!0}}]);
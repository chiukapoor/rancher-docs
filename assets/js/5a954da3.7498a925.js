"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12067],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Roles-based Access Control"},o=void 0,c={unversionedId:"integrations-in-rancher/cis-scans/rbac-for-cis-scans",id:"version-2.6/integrations-in-rancher/cis-scans/rbac-for-cis-scans",title:"Roles-based Access Control",description:"This section describes the permissions required to use the rancher-cis-benchmark App.",source:"@site/versioned_docs/version-2.6/integrations-in-rancher/cis-scans/rbac-for-cis-scans.md",sourceDirName:"integrations-in-rancher/cis-scans",slug:"/integrations-in-rancher/cis-scans/rbac-for-cis-scans",permalink:"/v2.6/integrations-in-rancher/cis-scans/rbac-for-cis-scans",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/cis-scans/rbac-for-cis-scans.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Roles-based Access Control"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/v2.6/integrations-in-rancher/cis-scans/configuration-reference"},next:{title:"Skipped and Not Applicable Tests",permalink:"/v2.6/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"}},u={},p=[{value:"Cluster-Admin Access",id:"cluster-admin-access",level:2},{value:"Summary of Default Permissions for Kubernetes Default Roles",id:"summary-of-default-permissions-for-kubernetes-default-roles",level:2}],d={toc:p};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes the permissions required to use the rancher-cis-benchmark App."),(0,n.kt)("p",null,"The rancher-cis-benchmark is a cluster-admin only feature by default."),(0,n.kt)("p",null,"However, the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," chart installs these two default ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterRoles"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cis-admin"),(0,n.kt)("li",{parentName:"ul"},"cis-view")),(0,n.kt)("p",null,"In Rancher, only cluster owners and global administrators have ",(0,n.kt)("inlineCode",{parentName:"p"},"cis-admin")," access by default."),(0,n.kt)("p",null,"Note: If you were using the ",(0,n.kt)("inlineCode",{parentName:"p"},"cis-edit")," role added in Rancher v2.5 setup, it has now been removed since\nRancher v2.5.2 because it essentially is same as ",(0,n.kt)("inlineCode",{parentName:"p"},"cis-admin"),". If you happen to create any clusterrolebindings\nfor ",(0,n.kt)("inlineCode",{parentName:"p"},"cis-edit"),", please update them to use ",(0,n.kt)("inlineCode",{parentName:"p"},"cis-admin")," ClusterRole instead."),(0,n.kt)("h2",{id:"cluster-admin-access"},"Cluster-Admin Access"),(0,n.kt)("p",null,"Rancher CIS Scans is a cluster-admin only feature by default.\nThis means only the Rancher global admins, and the cluster\u2019s cluster-owner can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install/Uninstall the rancher-cis-benchmark App"),(0,n.kt)("li",{parentName:"ul"},"See the navigation links for CIS Benchmark CRDs - ClusterScanBenchmarks, ClusterScanProfiles, ClusterScans"),(0,n.kt)("li",{parentName:"ul"},"List the default ClusterScanBenchmarks and ClusterScanProfiles"),(0,n.kt)("li",{parentName:"ul"},"Create/Edit/Delete new ClusterScanProfiles"),(0,n.kt)("li",{parentName:"ul"},"Create/Edit/Delete a new ClusterScan to run the CIS scan on the cluster"),(0,n.kt)("li",{parentName:"ul"},"View and Download the ClusterScanReport created after the ClusterScan is complete")),(0,n.kt)("h2",{id:"summary-of-default-permissions-for-kubernetes-default-roles"},"Summary of Default Permissions for Kubernetes Default Roles"),(0,n.kt)("p",null,"The rancher-cis-benchmark creates three ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," and adds the CIS Benchmark CRD access to the following default K8s ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterRoles"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ClusterRole created by chart"),(0,n.kt)("th",{parentName:"tr",align:null},"Default K8s ClusterRole"),(0,n.kt)("th",{parentName:"tr",align:null},"Permissions given with Role"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"cis-admin")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"admin")),(0,n.kt)("td",{parentName:"tr",align:null},"Ability to CRUD clusterscanbenchmarks, clusterscanprofiles, clusterscans, clusterscanreports CR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"cis-view")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"view ")),(0,n.kt)("td",{parentName:"tr",align:null},"Ability to List(R) clusterscanbenchmarks, clusterscanprofiles, clusterscans, clusterscanreports CR")))),(0,n.kt)("p",null,"By default only cluster-owner role will have ability to manage and use ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," feature."),(0,n.kt)("p",null,"The other Rancher roles (cluster-member, project-owner, project-member) do not have any default permissions to manage and use rancher-cis-benchmark resources."),(0,n.kt)("p",null,"But if a cluster-owner wants to delegate access to other users, they can do so by creating ClusterRoleBindings between these users and the above CIS ClusterRoles manually.\nThere is no automatic role aggregation supported for the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," ClusterRoles."))}m.isMDXComponent=!0}}]);
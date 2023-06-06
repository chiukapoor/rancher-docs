"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Role-Based Access Control"},l=void 0,c={unversionedId:"reference-guides/prometheus-federator/rbac",id:"reference-guides/prometheus-federator/rbac",title:"Role-Based Access Control",description:"This section describes the expectations for Role-Based Access Control (RBAC) for Prometheus Federator.",source:"@site/docs/reference-guides/prometheus-federator/rbac.md",sourceDirName:"reference-guides/prometheus-federator",slug:"/reference-guides/prometheus-federator/rbac",permalink:"/reference-guides/prometheus-federator/rbac",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/prometheus-federator/rbac.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Role-Based Access Control"},sidebar:"tutorialSidebar",previous:{title:"Prometheus Federator",permalink:"/pages-for-subheaders/prometheus-federator"},next:{title:"User Settings",permalink:"/pages-for-subheaders/user-settings"}},p={},u=[],d={toc:u};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes the expectations for Role-Based Access Control (RBAC) for Prometheus Federator."),(0,n.kt)("p",null,"As described in the section on ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/prometheus-federator#namespaces"},"namespaces"),", Prometheus Federator expects that Project Owners, Project Members, and other users in the cluster with Project-level permissions (e.g. permissions in a certain set of namespaces identified by a single label selector) have minimal permissions in any namespaces except the Project Registration Namespace (which is imported into the project by default) and those that already comprise their projects. Therefore, in order to allow Project Owners to assign specific chart permissions to other users in their Project namespaces, the Helm Project Operator will automatically watch the following bindings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ClusterRoleBindings"),(0,n.kt)("li",{parentName:"ul"},"RoleBindings in the Project Release Namespace")),(0,n.kt)("p",null,"On observing a change to one of those types of bindings, the Helm Project Operator will check whether the ",(0,n.kt)("inlineCode",{parentName:"p"},"roleRef")," that the the binding points to matches a ClusterRole with the name provided under:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"helmProjectOperator.releaseRoleBindings.clusterRoleRefs.admin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"helmProjectOperator.releaseRoleBindings.clusterRoleRefs.edit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"helmProjectOperator.releaseRoleBindings.clusterRoleRefs.view"))),(0,n.kt)("p",null,"By default, these roleRefs will correspond to ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"view")," respectively, which are the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"default Kubernetes user-facing roles"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For Rancher RBAC users, these ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"default Kubernetes user-facing roles")," directly correlate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Project Owner"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Project Member"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"Read-Only")," default Project Role Templates.")),(0,n.kt)("p",null,"If the ",(0,n.kt)("inlineCode",{parentName:"p"},"roleRef")," matches, the Helm Project Operator will filter the ",(0,n.kt)("inlineCode",{parentName:"p"},"subjects")," of the binding for all Users and Groups and use that to automatically construct a RoleBinding for each Role in the Project Release Namespace with the same name as the role and the following labels:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"helm.cattle.io/project-helm-chart-role: {{ .Release.Name }}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"helm.cattle.io/project-helm-chart-role-aggregate-from: <admin|edit|view>"))),(0,n.kt)("p",null,"By default, ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-project-monitoring"),", the underlying chart deployed by Prometheus Federator, creates three default Roles per Project Release Namespace that provide ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"view")," users to permissions to view the Prometheus, Alertmanager, and Grafana UIs of the Project Monitoring Stack to provide least privilege. However, if a Cluster Admin would like to assign additional permissions to certain users, they can either directly assign RoleBindings in the Project Release Namespace to certain users or create Roles with the above two labels on them to allow Project Owners to control assigning those RBAC roles to users in their Project Registration namespaces."))}m.isMDXComponent=!0}}]);
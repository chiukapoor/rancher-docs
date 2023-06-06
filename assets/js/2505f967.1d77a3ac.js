"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),y=o,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Pod Security Policies"},s=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",id:"version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",title:"Pod Security Policies",description:"These cluster options are only available for clusters in which Rancher has launched Kubernetes.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",permalink:"/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Pod Security Policies"},sidebar:"tutorialSidebar",previous:{title:"Rancher's CI/CD Pipelines",permalink:"/v2.6/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},next:{title:"Project Resource Quotas",permalink:"/v2.6/pages-for-subheaders/manage-project-resource-quotas"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Applying a Pod Security Policy",id:"applying-a-pod-security-policy",level:3}],d={toc:u};function y(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"These cluster options are only available for ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"clusters in which Rancher has launched Kubernetes"),".")),(0,n.kt)("p",null,"You can always assign a pod security policy (PSP) to an existing project if you didn't assign one during creation."),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a Pod Security Policy within Rancher. Before you can assign a default PSP to an existing project, you must have a PSP available for assignment. For instruction, see ",(0,n.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Creating Pod Security Policies"),"."),(0,n.kt)("li",{parentName:"ul"},"Assign a default Pod Security Policy to the project's cluster. You can't assign a PSP to a project until one is already applied to the cluster. For more information, see ",(0,n.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy"},"the documentation about adding a pod security policy to a cluster"),". ")),(0,n.kt)("h3",{id:"applying-a-pod-security-policy"},"Applying a Pod Security Policy"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to move a namespace and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Cluster > Projects/Namespaces"),"."),(0,n.kt)("li",{parentName:"ol"},"Find the project that you want to add a PSP to. From that project, select ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Pod Security Policy")," drop-down, select the PSP you want to apply to the project.\nAssigning a PSP to a project will:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Override the cluster's default PSP."),(0,n.kt)("li",{parentName:"ul"},"Apply the PSP to the project."),(0,n.kt)("li",{parentName:"ul"},"Apply the PSP to any namespaces you add to the project later.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The PSP is applied to the project and any namespaces added to the project."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Any workloads that are already running in a cluster or project before a PSP is assigned will not be checked to determine if they comply with the PSP. Workloads would need to be cloned or upgraded to see if they pass the PSP.")))}y.isMDXComponent=!0}}]);
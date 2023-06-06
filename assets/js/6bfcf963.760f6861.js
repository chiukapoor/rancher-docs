"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),y=o,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={title:"Assigning Pod Security Policies"},c=void 0,u={unversionedId:"how-to-guides/new-user-guides/manage-clusters/assign-pod-security-policies",id:"version-2.6/how-to-guides/new-user-guides/manage-clusters/assign-pod-security-policies",title:"Assigning Pod Security Policies",description:"Pod Security Policies are objects that control security-sensitive aspects of pod specification (like root privileges).",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/assign-pod-security-policies.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters",slug:"/how-to-guides/new-user-guides/manage-clusters/assign-pod-security-policies",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/assign-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/assign-pod-security-policies.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Assigning Pod Security Policies"},sidebar:"tutorialSidebar",previous:{title:"Adding a Pod Security Policy",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy"},next:{title:"Don't have a Kubernetes cluster? Try one of these tutorials.",permalink:"/v2.6/pages-for-subheaders/kubernetes-cluster-setup"}},l={},p=[{value:"Adding a Default Pod Security Policy",id:"adding-a-default-pod-security-policy",level:2}],d={toc:p};function y(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Pod Security Policies")," are objects that control security-sensitive aspects of pod specification (like root privileges)."),(0,n.kt)("h2",{id:"adding-a-default-pod-security-policy"},"Adding a Default Pod Security Policy"),(0,n.kt)("p",null,"When you create a new cluster with RKE, you can configure it to apply a PSP immediately. As you create the cluster, use the ",(0,n.kt)("strong",{parentName:"p"},"Cluster Options")," to enable a PSP. The PSP assigned to the cluster will be the default PSP for projects within the cluster."),(0,n.kt)("admonition",{title:"Prerequisite:",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Create a Pod Security Policy within Rancher. Before you can assign a default PSP to a new cluster, you must have a PSP available for assignment. For instruction, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Creating Pod Security Policies"),".")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For security purposes, we recommend assigning a PSP as you create your clusters.")),(0,n.kt)("p",null,"To enable a default Pod Security Policy, set the ",(0,n.kt)("strong",{parentName:"p"},"Pod Security Policy Support")," option to  ",(0,n.kt)("strong",{parentName:"p"},"Enabled"),", and then make a selection from the ",(0,n.kt)("strong",{parentName:"p"},"Default Pod Security Policy")," drop-down."),(0,n.kt)("p",null,"When the cluster finishes provisioning, the PSP you selected is applied to all projects within the cluster."))}y.isMDXComponent=!0}}]);
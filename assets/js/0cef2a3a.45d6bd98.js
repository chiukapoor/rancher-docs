"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=i,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={title:"1. Enable Istio in the Cluster"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",title:"1. Enable Istio in the Cluster",description:"This cluster uses the default Nginx controller to allow traffic into the cluster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"1. Enable Istio in the Cluster"},sidebar:"tutorialSidebar",previous:{title:"Setup Guide",permalink:"/v2.0-v2.4/pages-for-subheaders/istio-setup-guide"},next:{title:"Enable Istio with Pod Security Policies",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable Istio in the Cluster",id:"enable-istio-in-the-cluster",level:2},{value:"Next: Enable Istio in a Namespace",id:"next-enable-istio-in-a-namespace",level:3}],d={toc:p};function b(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This cluster uses the default Nginx controller to allow traffic into the cluster."),(0,n.kt)("p",null,"A Rancher ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," or ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner")," can configure Rancher to deploy Istio in a Kubernetes cluster."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This guide assumes you have already ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},"installed Rancher,")," and you have already ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provisioned a separate Kubernetes cluster")," on which you will install Istio."),(0,n.kt)("p",null,"The nodes in your cluster must meet the ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"CPU and memory requirements.")),(0,n.kt)("p",null,"The workloads and services that you want to be controlled by Istio must meet ",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/requirements/"},"Istio's requirements.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the cluster has a Pod Security Policy enabled there are ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster-with-psp"},"additional prerequisites steps"))),(0,n.kt)("h2",{id:"enable-istio-in-the-cluster"},"Enable Istio in the Cluster"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Global")," view, navigate to the ",(0,n.kt)("strong",{parentName:"li"},"cluster")," where you want to enable Istio."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Tools > Istio.")),(0,n.kt)("li",{parentName:"ol"},"Optional: Configure member access and ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"resource limits")," for the Istio components. Ensure you have enough resources on your worker nodes to enable Istio."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Enable"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Istio is enabled at the cluster level."),(0,n.kt)("p",null,"The Istio application, ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-istio"),", is added as an application to the cluster's ",(0,n.kt)("inlineCode",{parentName:"p"},"system")," project."),(0,n.kt)("p",null,"When Istio is enabled in the cluster, the label for Istio sidecar auto injection,",(0,n.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled"),", will be automatically added to each new namespace in this cluster. This automatically enables Istio sidecar injection in all new workloads that are deployed in those namespaces. You will need to manually enable Istio in preexisting namespaces and workloads."),(0,n.kt)("h3",{id:"next-enable-istio-in-a-namespace"},(0,n.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},"Next: Enable Istio in a Namespace")))}b.isMDXComponent=!0}}]);
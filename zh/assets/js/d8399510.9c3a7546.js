"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55598],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),v=a,g=d["".concat(l,".").concat(v)]||d[v]||p[v]||o;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40498:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>p});t(67294);var n=t(3905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={title:"Cluster Drivers"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",title:"Cluster Drivers",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1685499256,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"Cluster Drivers"},sidebar:"tutorialSidebar",previous:{title:"Provisioning Drivers",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/about-provisioning-drivers"},next:{title:"Node Drivers",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"}},c={},p=[{value:"Managing Cluster Drivers",id:"managing-cluster-drivers",level:3},{value:"Activating/Deactivating Cluster Drivers",id:"activatingdeactivating-cluster-drivers",level:2},{value:"Adding Custom Cluster Drivers",id:"adding-custom-cluster-drivers",level:2},{value:"Developing your own Cluster Driver",id:"developing-your-own-cluster-driver",level:3}],d={toc:p};function v(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,n.kt)("p",null,"Cluster drivers are used to create clusters in a ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted Kubernetes provider"),", such as Google GKE. The availability of which cluster driver to display when creating clusters is defined by the cluster driver's status. Only ",(0,n.kt)("inlineCode",{parentName:"p"},"active")," cluster drivers will be displayed as an option for creating clusters. By default, Rancher is packaged with several existing cloud provider cluster drivers, but you can also add custom cluster drivers to Rancher."),(0,n.kt)("p",null,"If there are specific cluster drivers that you do not want to show your users, you may deactivate those cluster drivers within Rancher and they will not appear as an option for cluster creation."),(0,n.kt)("h3",{id:"managing-cluster-drivers"},"Managing Cluster Drivers"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisites:")," To create, edit, or delete cluster drivers, you need ",(0,n.kt)("em",{parentName:"p"},"one")," of the following permissions:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Cluster Drivers")," role assigned."))),(0,n.kt)("h2",{id:"activatingdeactivating-cluster-drivers"},"Activating/Deactivating Cluster Drivers"),(0,n.kt)("p",null,"By default, Rancher only activates drivers for the most popular cloud providers, Google GKE, Amazon EKS and Azure AKS. If you want to show or hide any node driver, you can change its status."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,n.kt)("strong",{parentName:"p"},"Tools > Drivers")," in the navigation bar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Drivers")," page, select the ",(0,n.kt)("strong",{parentName:"p"},"Cluster Drivers")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the driver that you wish to ",(0,n.kt)("strong",{parentName:"p"},"Activate")," or ",(0,n.kt)("strong",{parentName:"p"},"Deactivate")," and select the appropriate icon."))),(0,n.kt)("h2",{id:"adding-custom-cluster-drivers"},"Adding Custom Cluster Drivers"),(0,n.kt)("p",null,"If you want to use a cluster driver that Rancher doesn't support out-of-the-box, you can add the provider's driver in order to start using them to create ",(0,n.kt)("em",{parentName:"p"},"hosted")," kubernetes clusters."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,n.kt)("strong",{parentName:"p"},"Tools > Drivers")," in the navigation bar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Drivers")," page select the ",(0,n.kt)("strong",{parentName:"p"},"Cluster Drivers")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Cluster Driver"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the ",(0,n.kt)("strong",{parentName:"p"},"Add Cluster Driver")," form. Then click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."))),(0,n.kt)("h3",{id:"developing-your-own-cluster-driver"},"Developing your own Cluster Driver"),(0,n.kt)("p",null,"In order to develop cluster driver to add to Rancher, please refer to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher-plugins/kontainer-engine-driver-example"},"example"),"."))}v.isMDXComponent=!0}}]);
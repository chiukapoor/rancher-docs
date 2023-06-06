"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[34454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),d=i,h=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},96406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={title:"Configuring a Global Default Private Registry"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",title:"Configuring a Global Default Private Registry",description:"You might want to use a private container registry to share your custom base images within your organization. With a private registry, you can keep a private, consistent, and centralized source of truth for the container images that are used in your clusters.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Configuring a Global Default Private Registry"},sidebar:"tutorialSidebar",previous:{title:"Pod Security Policies",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},next:{title:"Cluster Administration",permalink:"/v2.5/pages-for-subheaders/manage-clusters"}},c={},p=[{value:"Setting a Private Registry with No Credentials as the Default Registry",id:"setting-a-private-registry-with-no-credentials-as-the-default-registry",level:2},{value:"Setting a Private Registry with Credentials when Deploying a Cluster",id:"setting-a-private-registry-with-credentials-when-deploying-a-cluster",level:2}],g={toc:p};function d(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},g,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You might want to use a private container registry to share your custom base images within your organization. With a private registry, you can keep a private, consistent, and centralized source of truth for the container images that are used in your clusters."),(0,n.kt)("p",null,"There are two main ways to set up private registries in Rancher: by setting up the global default registry through the ",(0,n.kt)("strong",{parentName:"p"},"Settings")," tab in the global view, and by setting up a private registry in the advanced options in the cluster-level settings. The global default registry is intended to be used for air-gapped setups, for registries that do not require credentials. The cluster-level private registry is intended to be used in all setups in which the private registry requires credentials."),(0,n.kt)("p",null,"This section is about configuring the global default private registry, and focuses on how to configure the registry from the Rancher UI after Rancher is installed."),(0,n.kt)("p",null,"For instructions on setting up a private registry with command line options during the installation of Rancher, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/air-gapped-helm-cli-install"},"air gapped Kubernetes installation")," instructions."),(0,n.kt)("p",null,"If your private registry requires credentials, it cannot be used as the default registry. There is no global way to set up a private registry with authorization for every Rancher-provisioned cluster. Therefore, if you want a Rancher-provisioned cluster to pull images from a private registry with credentials, you will have to ",(0,n.kt)("a",{parentName:"p",href:"#setting-a-private-registry-with-credentials-when-deploying-a-cluster"},"pass in the registry credentials through the advanced cluster options")," every time you create a new cluster."),(0,n.kt)("h2",{id:"setting-a-private-registry-with-no-credentials-as-the-default-registry"},"Setting a Private Registry with No Credentials as the Default Registry"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into Rancher and configure the default administrator password.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go into the ",(0,n.kt)("strong",{parentName:"p"},"Settings")," view."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(12800).Z,width:"1193",height:"98"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Look for the setting called ",(0,n.kt)("inlineCode",{parentName:"p"},"system-default-registry")," and choose ",(0,n.kt)("strong",{parentName:"p"},"Edit"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(65989).Z,width:"1590",height:"174"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change the value to your registry (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"registry.yourdomain.com:port"),"). Do not prefix the registry with ",(0,n.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"https://"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(44137).Z,width:"1909",height:"649"})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Rancher will use your private registry to pull system images."),(0,n.kt)("h2",{id:"setting-a-private-registry-with-credentials-when-deploying-a-cluster"},"Setting a Private Registry with Credentials when Deploying a Cluster"),(0,n.kt)("p",null,"You can follow these steps to configure a private registry when you provision a cluster with Rancher:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"When you create a cluster through the Rancher UI, go to the ",(0,n.kt)("strong",{parentName:"li"},"Cluster Options")," section and click ",(0,n.kt)("strong",{parentName:"li"},"Show Advanced Options.")),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("b",null,"Enable Private Registries")," section, click ",(0,n.kt)("strong",{parentName:"li"},"Enabled.")),(0,n.kt)("li",{parentName:"ol"},"Enter the registry URL and credentials."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The new cluster will be able to pull images from the private registry."))}d.isMDXComponent=!0},65989:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-system-default-registry-264b6c02c8b45d166f9f041c462be057.png"},44137:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enter-system-default-registry-0f3a3119182bad0cdb2408b972fe5353.png"},12800:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/settings-3007fd9efba84c39d7ee9e1e7f738ac0.png"}}]);
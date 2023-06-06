"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[22302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Managing Cloud Credentials"},s=void 0,d={unversionedId:"reference-guides/user-settings/manage-cloud-credentials",id:"version-2.5/reference-guides/user-settings/manage-cloud-credentials",title:"Managing Cloud Credentials",description:"When you create a cluster hosted by an infrastructure provider, node templates are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node.",source:"@site/versioned_docs/version-2.5/reference-guides/user-settings/manage-cloud-credentials.md",sourceDirName:"reference-guides/user-settings",slug:"/reference-guides/user-settings/manage-cloud-credentials",permalink:"/v2.5/reference-guides/user-settings/manage-cloud-credentials",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/user-settings/manage-cloud-credentials.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Managing Cloud Credentials"},sidebar:"tutorialSidebar",previous:{title:"Managing Node Templates",permalink:"/v2.5/reference-guides/user-settings/manage-node-templates"},next:{title:"User Preferences",permalink:"/v2.5/reference-guides/user-settings/user-preferences"}},c={},u=[{value:"Creating a Cloud Credential from User Settings",id:"creating-a-cloud-credential-from-user-settings",level:2},{value:"Updating a Cloud Credential",id:"updating-a-cloud-credential",level:2},{value:"Deleting a Cloud Credential",id:"deleting-a-cloud-credential",level:2}],p={toc:u};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When you create a cluster ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"hosted by an infrastructure provider"),", ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node templates")," are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node."),(0,n.kt)("p",null,"Node templates can use cloud credentials to access the credential information required to provision nodes in the infrastructure providers. The same cloud credential can be used by multiple node templates. By using a cloud credential, you do not have to re-enter access keys for the same cloud provider. Cloud credentials are stored as Kubernetes secrets."),(0,n.kt)("p",null,"Cloud credentials are only used by node templates if there are fields marked as ",(0,n.kt)("inlineCode",{parentName:"p"},"password"),". The default ",(0,n.kt)("inlineCode",{parentName:"p"},"active")," node drivers have their account access fields marked as ",(0,n.kt)("inlineCode",{parentName:"p"},"password"),", but there may be some ",(0,n.kt)("inlineCode",{parentName:"p"},"inactive")," node drivers, which are not using them yet. These node drivers will not use cloud credentials."),(0,n.kt)("p",null,"You can create cloud credentials in two contexts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"During creation of a node template")," for a cluster."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"User Settings"))),(0,n.kt)("p",null,"All cloud credentials are bound to the user profile of who created it. They ",(0,n.kt)("strong",{parentName:"p"},"cannot")," be shared across users."),(0,n.kt)("h2",{id:"creating-a-cloud-credential-from-user-settings"},"Creating a Cloud Credential from User Settings"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From your user settings, select ",(0,n.kt)("strong",{parentName:"li"},"User Avatar > Cloud Credentials"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Cloud Credential"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for the cloud credential."),(0,n.kt)("li",{parentName:"ol"},"Select a ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credential Type")," from the drop down. The values of this dropdown is based on the ",(0,n.kt)("inlineCode",{parentName:"li"},"active")," ",(0,n.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"},"node drivers")," in Rancher."),(0,n.kt)("li",{parentName:"ol"},"Based on the selected cloud credential type, enter the required values to authenticate with the infrastructure provider."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The cloud credential is created and can immediately be used to ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"create node templates"),"."),(0,n.kt)("h2",{id:"updating-a-cloud-credential"},"Updating a Cloud Credential"),(0,n.kt)("p",null,"When access credentials are changed or compromised, updating a cloud credential allows you to rotate those credentials while keeping the same node template."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From your user settings, select ",(0,n.kt)("strong",{parentName:"li"},"User Avatar > Cloud Credentials"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the cloud credential you want to edit and click the ",(0,n.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,n.kt)("li",{parentName:"ol"},"Update the credential information and click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The cloud credential is updated with the new access credentials. All existing node templates using this cloud credential will automatically use the updated information whenever ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"new nodes are added"),"."),(0,n.kt)("h2",{id:"deleting-a-cloud-credential"},"Deleting a Cloud Credential"),(0,n.kt)("p",null,"In order to delete cloud credentials, there must not be any node template associated with it. If you are unable to delete the cloud credential, ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/user-settings/manage-node-templates#deleting-a-node-template"},"delete any node templates")," that are still associated to that cloud credential."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From your user settings, select ",(0,n.kt)("strong",{parentName:"p"},"User Avatar > Cloud Credentials"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can either individually delete a cloud credential or bulk delete."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To individually delete one, choose the cloud credential you want to edit and click the ",(0,n.kt)("strong",{parentName:"li"},"\u22ee"," > Delete"),"."),(0,n.kt)("li",{parentName:"ul"},"To bulk delete cloud credentials, select one or more cloud credentials from the list. Click ",(0,n.kt)("strong",{parentName:"li"},"Delete"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm that you want to delete these cloud credentials."))))}m.isMDXComponent=!0}}]);
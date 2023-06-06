"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Managing Node Templates"},s=void 0,p={unversionedId:"reference-guides/user-settings/manage-node-templates",id:"version-2.6/reference-guides/user-settings/manage-node-templates",title:"Managing Node Templates",description:"When you provision a cluster hosted by an infrastructure provider, node templates are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node. You can create node templates in two contexts:",source:"@site/versioned_docs/version-2.6/reference-guides/user-settings/manage-node-templates.md",sourceDirName:"reference-guides/user-settings",slug:"/reference-guides/user-settings/manage-node-templates",permalink:"/v2.6/reference-guides/user-settings/manage-node-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/user-settings/manage-node-templates.md",tags:[],version:"2.6",lastUpdatedAt:1685654352,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"Managing Node Templates"},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/v2.6/reference-guides/user-settings/api-keys"},next:{title:"Managing Cloud Credentials",permalink:"/v2.6/reference-guides/user-settings/manage-cloud-credentials"}},u={},d=[{value:"Creating a Node Template",id:"creating-a-node-template",level:2},{value:"Updating a Node Template",id:"updating-a-node-template",level:2},{value:"Cloning Node Templates",id:"cloning-node-templates",level:2},{value:"Deleting a Node Template",id:"deleting-a-node-template",level:2}],c={toc:d};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you provision a cluster ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"hosted by an infrastructure provider"),", ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node templates")," are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node. You can create node templates in two contexts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"While ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"provisioning a node pool cluster"),"."),(0,r.kt)("li",{parentName:"ul"},"At any time, from your ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/pages-for-subheaders/user-settings"},"user settings"),".")),(0,r.kt)("p",null,"When you create a node template, it is bound to your user profile. Node templates cannot be shared among users. You can delete stale node templates that you no longer user from your user settings."),(0,r.kt)("h2",{id:"creating-a-node-template"},"Creating a Node Template"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 Configuration > Node Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Template"),"."),(0,r.kt)("li",{parentName:"ol"},"Select one of the cloud providers available. Then follow the instructions on screen to configure the template.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The template is configured. You can use the template later when you ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"provision a node pool cluster"),"."),(0,r.kt)("h2",{id:"updating-a-node-template"},"Updating a Node Template"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"RKE1 Configuration > Node Templates"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the node template that you want to edit and click the ",(0,r.kt)("strong",{parentName:"p"},"\u22ee > Edit"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"},"node drivers")," and any node driver, that has fields marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", are required to use ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#cloud-credentials"},"cloud credentials"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the required information and click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The node template is updated. All node pools using this node template will automatically use the updated information when new nodes are added."),(0,r.kt)("h2",{id:"cloning-node-templates"},"Cloning Node Templates"),(0,r.kt)("p",null,"When creating new node templates from your user settings, you can clone an existing template and quickly update its settings rather than creating a new one from scratch. Cloning templates saves you the hassle of re-entering access keys for the cloud provider."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 Configuration > Node Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Find the template you want to clone. Then select ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Clone"),"."),(0,r.kt)("li",{parentName:"ol"},"Complete the rest of the form.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The template is cloned and configured. You can use the template later when you ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"provision a node pool cluster"),"."),(0,r.kt)("h2",{id:"deleting-a-node-template"},"Deleting a Node Template"),(0,r.kt)("p",null,"When you no longer use a node template, you can delete it from your user settings."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"RKE1 Configuration > Node Templates"),"."),(0,r.kt)("li",{parentName:"ol"},"Select one or more template from the list. Then click ",(0,r.kt)("strong",{parentName:"li"},"Delete"),". Confirm the delete when prompted.")))}m.isMDXComponent=!0}}]);
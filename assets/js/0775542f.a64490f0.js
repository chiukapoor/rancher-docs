"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Secrets"},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",title:"Secrets",description:"Secrets store sensitive data like passwords, tokens, or keys. They may contain one or more key value pairs.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md",tags:[],version:"current",lastUpdatedAt:1677541444,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{title:"Secrets"},sidebar:"tutorialSidebar",previous:{title:"ConfigMaps",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},next:{title:"Kubernetes Registry and Container Image Registry",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"}},p={},u=[{value:"Creating Secrets in Namespaces",id:"creating-secrets-in-namespaces",level:2},{value:"Creating Secrets in Projects",id:"creating-secrets-in-projects",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:u};function m(e){var{components:t}=e,i=s(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#overview-of-secrets"},"Secrets")," store sensitive data like passwords, tokens, or keys. They may contain one or more key value pairs."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This page is about secrets in general. For details on setting up a private registry, refer to the section on ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"registries."))),(0,n.kt)("p",null,"When configuring a workload, you'll be able to choose which secrets to include. Like config maps, secrets can be referenced by workloads as either an environment variable or a volume mount."),(0,n.kt)("p",null,"Mounted secrets will be updated automatically unless they are mounted as subpath volumes. For details on how updated secrets are propagated, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#mounted-secrets-are-updated-automatically"},"Kubernetes documentation.")),(0,n.kt)("h2",{id:"creating-secrets-in-namespaces"},"Creating Secrets in Namespaces"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the cluster where you want to add a secret and click ",(0,n.kt)("strong",{parentName:"p"},"Explore"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To navigate to secrets, you may click either ",(0,n.kt)("strong",{parentName:"p"},"Storage > Secrets")," or ",(0,n.kt)("strong",{parentName:"p"},"More Resources > Core > Secrets"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the type of secret you want to create.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a ",(0,n.kt)("strong",{parentName:"p"},"Namespace")," for the secret.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Name")," for the secret."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Kubernetes classifies secrets, certificates, and registries all as ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a namespace can have duplicate names. Therefore, to prevent conflicts, your secret must have a unique name among all secrets within your workspace."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From ",(0,n.kt)("strong",{parentName:"p"},"Data"),", click ",(0,n.kt)("strong",{parentName:"p"},"Add")," to add a key-value pair. Add as many values as you need."),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can add multiple key value pairs to the secret by copying and pasting.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(3684).Z,width:"1316",height:"618"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Your secret is added to the namespace you chose. You can view the secret in the Rancher UI by clicking either ",(0,n.kt)("strong",{parentName:"p"},"Storage > Secrets")," or ",(0,n.kt)("strong",{parentName:"p"},"More Resources > Core > Secrets"),"."),(0,n.kt)("p",null,"Mounted secrets will be updated automatically unless they are mounted as subpath volumes. For details on how updated secrets are propagated, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#mounted-secrets-are-updated-automatically"},"Kubernetes documentation.")),(0,n.kt)("h2",{id:"creating-secrets-in-projects"},"Creating Secrets in Projects"),(0,n.kt)("p",null,"Before v2.6, secrets were required to be in a project scope. Projects are no longer required, and you may use the namespace scope instead. As a result, the Rancher UI was updated to reflect this new functionality. However, you may still create project-scoped secrets if desired. Note that you have to first enable the ",(0,n.kt)("inlineCode",{parentName:"p"},"legacy")," feature flag and look at a single project to do so. Use the following steps to set up your project-level secret:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Global Settings")," in the dropdown."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Feature Flags"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"legacy")," feature flag and click ",(0,n.kt)("strong",{parentName:"li"},"Activate"),"."),(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management")," in the dropdown."),(0,n.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,n.kt)("strong",{parentName:"li"},"Explore.")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Legacy > Projects"),"."),(0,n.kt)("li",{parentName:"ol"},"In the top navigation bar, filter to see only one project."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Secrets"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Secret"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Your secret is added to the individual project you chose. You can view the secret in the Rancher UI by clicking either ",(0,n.kt)("strong",{parentName:"p"},"Storage > Secrets")," or ",(0,n.kt)("strong",{parentName:"p"},"More Resources > Core > Secrets"),"."),(0,n.kt)("p",null,"Since project-scoped secrets are set at the project level, any changes made at the namespace level will be overwritten."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Project-scoped secrets on the local cluster are only visible when a single project is selected.")),(0,n.kt)("h2",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"Now that you have a secret added to a namespace, you can add it to a workload that you deploy."),(0,n.kt)("p",null,"For more information on adding secret to a workload, see ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),"."))}m.isMDXComponent=!0},3684:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bulk-key-values-3ff8dab5306d78392fed06d2040b2377.gif"}}]);
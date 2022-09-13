"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11955],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||l[m]||s;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32297:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={title:"Secrets",weight:3062,aliases:["/rancher/v2.0-v2.4/en/tasks/projects/add-a-secret","/rancher/v2.0-v2.4/en/k8s-in-rancher/secrets"]},c=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",title:"Secrets",description:"Secrets store sensitive data like passwords, tokens, or keys. They may contain one or more key value pairs.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Secrets",weight:3062,aliases:["/rancher/v2.0-v2.4/en/tasks/projects/add-a-secret","/rancher/v2.0-v2.4/en/k8s-in-rancher/secrets"]},sidebar:"tutorialSidebar",previous:{title:"ConfigMaps",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},next:{title:"Kubernetes Registry and Docker Registry",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"}},p={},l=[],d={toc:l};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#overview-of-secrets"},"Secrets")," store sensitive data like passwords, tokens, or keys. They may contain one or more key value pairs."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This page is about secrets in general. For details on setting up a private registry, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"registries."))),(0,s.kt)("p",null,"When configuring a workload, you'll be able to choose which secrets to include. Like config maps, secrets can be referenced by workloads as either an environment variable or a volume mount."),(0,s.kt)("p",null,"Mounted secrets will be updated automatically unless they are mounted as subpath volumes. For details on how updated secrets are propagated, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#mounted-secrets-are-updated-automatically"},"Kubernetes documentation.")),(0,s.kt)("h1",{id:"creating-secrets"},"Creating Secrets"),(0,s.kt)("p",null,"When creating a secret, you can make it available for any deployment within a project, or you can limit it to a single namespace."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the ",(0,s.kt)("strong",{parentName:"p"},"Global")," view, select the project containing the namespace(s) where you want to add a secret.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the main menu, select ",(0,s.kt)("strong",{parentName:"p"},"Resources > Secrets"),". Click ",(0,s.kt)("strong",{parentName:"p"},"Add Secret"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter a ",(0,s.kt)("strong",{parentName:"p"},"Name")," for the secret."),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," Kubernetes classifies secrets, certificates, and registries all as ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your secret must have a unique name among all secrets within your workspace."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select a ",(0,s.kt)("strong",{parentName:"p"},"Scope")," for the secret. You can either make the registry available for the entire project or a single namespace.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From ",(0,s.kt)("strong",{parentName:"p"},"Secret Values"),", click ",(0,s.kt)("strong",{parentName:"p"},"Add Secret Value")," to add a key value pair. Add as many values as you need."),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Tip:")," You can add multiple key value pairs to the secret by copying and pasting."),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("img",{src:r(3684).Z,width:"1316",height:"618"})))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Save"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Your secret is added to the project or namespace, depending on the scope you chose. You can view the secret in the Rancher UI from the ",(0,s.kt)("strong",{parentName:"p"},"Resources > Secrets")," view."),(0,s.kt)("p",null,"Mounted secrets will be updated automatically unless they are mounted as subpath volumes. For details on how updated secrets are propagated, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#mounted-secrets-are-updated-automatically"},"Kubernetes documentation.")),(0,s.kt)("h1",{id:"whats-next"},"What's Next?"),(0,s.kt)("p",null,"Now that you have a secret added to the project or namespace, you can add it to a workload that you deploy."),(0,s.kt)("p",null,"For more information on adding secret to a workload, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),"."))}m.isMDXComponent=!0},3684:function(e,t,r){t.Z=r.p+"assets/images/bulk-key-values-3ff8dab5306d78392fed06d2040b2377.gif"}}]);
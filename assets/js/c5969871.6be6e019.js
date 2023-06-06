"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[28337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"Kubernetes Registry and Container Image Registry",description:"Learn about the container image registry and Kubernetes registry, their use cases, and how to use a private registry with the Rancher UI"},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",title:"Kubernetes Registry and Container Image Registry",description:"Learn about the container image registry and Kubernetes registry, their use cases, and how to use a private registry with the Rancher UI",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries.md",tags:[],version:"current",lastUpdatedAt:1673641766,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{title:"Kubernetes Registry and Container Image Registry",description:"Learn about the container image registry and Kubernetes registry, their use cases, and how to use a private registry with the Rancher UI"},sidebar:"tutorialSidebar",previous:{title:"Secrets",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},next:{title:"Helm Charts in Rancher",permalink:"/pages-for-subheaders/helm-charts-in-rancher"}},c={},u=[{value:"Creating a Registry in Namespaces",id:"creating-a-registry-in-namespaces",level:2},{value:"Creating a Registry in Projects",id:"creating-a-registry-in-projects",level:2},{value:"Using a Private Registry",id:"using-a-private-registry",level:2},{value:"Using the Private Registry with the Rancher UI",id:"using-the-private-registry-with-the-rancher-ui",level:3},{value:"Using the Private Registry with kubectl",id:"using-the-private-registry-with-kubectl",level:3}],m={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Registries are Kubernetes secrets containing credentials used to authenticate with ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"private container registries"),"."),(0,a.kt)("p",null,'The word "registry" can mean two things, depending on whether it is used to refer to a container or Kubernetes registry:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"Container image registry"),' (formerly "Docker registry") contains container images that you can pull and deploy. The registry is a stateless, scalable server side application that stores and lets you distribute container images.'),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes registry")," is an image pull secret that your deployment uses to authenticate with an image registry.")),(0,a.kt)("p",null,"Deployments use the Kubernetes registry secret to authenticate with a private image registry and then pull a container image hosted on it."),(0,a.kt)("p",null,"Currently, deployments pull the private registry credentials automatically only if the workload is created in the Rancher UI and not when it is created via kubectl."),(0,a.kt)("h2",{id:"creating-a-registry-in-namespaces"},"Creating a Registry in Namespaces"),(0,a.kt)("admonition",{title:"Prerequisite:",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You must have an available private registry already deployed."),(0,a.kt)("p",{parentName:"admonition"},"If you need to create a private registry, refer to the documentation pages for your respective runtime:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/blob/main/docs/cri/config.md#registry-configuration"},"Containerd"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl/blob/main/docs/registry.md"},"Nerdctl commands and managed registry services"),". "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/registry/deploying/"},"Docker"),"."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the cluster where you want to add a registry and click ",(0,a.kt)("strong",{parentName:"p"},"Explore"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left navigation, click either ",(0,a.kt)("strong",{parentName:"p"},"Storage > Secrets")," or ",(0,a.kt)("strong",{parentName:"p"},"More Resources > Core > Secrets"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Registry"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Name")," for the registry."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Kubernetes classifies secrets, certificates, and registries all as ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your registry must have a unique name among all secrets within your workspace."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a namespace for the registry.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the website that hosts your private registry. Then enter credentials that authenticate with the registry. For example, if you use DockerHub, provide your DockerHub username and password.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your secret is added to the namespace you chose."),(0,a.kt)("li",{parentName:"ul"},"You can view the secret in the Rancher UI by clicking either ",(0,a.kt)("strong",{parentName:"li"},"Storage > Secrets")," or ",(0,a.kt)("strong",{parentName:"li"},"More Resources > Core > Secrets"),"."),(0,a.kt)("li",{parentName:"ul"},"Any workload that you create in the Rancher UI will have the credentials to access the registry if the workload is within the registry's scope.")),(0,a.kt)("h2",{id:"creating-a-registry-in-projects"},"Creating a Registry in Projects"),(0,a.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You must have an available private registry already deployed."),(0,a.kt)("p",{parentName:"admonition"},"If you need to create a private registry, refer to the documentation pages for your respective runtime:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/blob/main/docs/cri/config.md#registry-configuration"},"Containerd"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl/blob/main/docs/registry.md"},"Nerdctl commands and managed registry services"),". "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/registry/deploying/"},"Docker"),"."))),(0,a.kt)("p",null,"Before v2.6, secrets were required to be in a project scope. Projects are no longer required, and you may use the namespace scope instead. As a result, the Rancher UI was updated to reflect this new functionality. However, you may still create a project-scoped registry if desired. Use the following steps to do so:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Global Settings")," in the dropdown.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Feature Flags"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"legacy")," feature flag and click ",(0,a.kt)("strong",{parentName:"p"},"Activate"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the cluster where you want to add a registry and click ",(0,a.kt)("strong",{parentName:"p"},"Explore"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left navigation, click either ",(0,a.kt)("strong",{parentName:"p"},"Storage > Secrets")," or ",(0,a.kt)("strong",{parentName:"p"},"More Resources > Core > Secrets"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Registry"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the top navigation bar, filter to see only one project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Name")," for the registry."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Kubernetes classifies secrets, certificates, and registries all as ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your registry must have a unique name among all secrets within your workspace."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a namespace for the registry.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the website that hosts your private registry. Then enter credentials that authenticate with the registry. For example, if you use DockerHub, provide your DockerHub username and password.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your secret is added to the individual project you chose."),(0,a.kt)("li",{parentName:"ul"},"You can view the secret in the Rancher UI by clicking either ",(0,a.kt)("strong",{parentName:"li"},"Storage > Secrets")," or ",(0,a.kt)("strong",{parentName:"li"},"More Resources > Core > Secrets"),"."),(0,a.kt)("li",{parentName:"ul"},"Any workload that you create in the Rancher UI will have the credentials to access the registry if the workload is within the registry's scope.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Project-scoped registries on the local cluster are only visible when a single project is selected.")),(0,a.kt)("h2",{id:"using-a-private-registry"},"Using a Private Registry"),(0,a.kt)("p",null,"You can deploy a workload with an image from a private registry through the Rancher UI, or with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,a.kt)("h3",{id:"using-the-private-registry-with-the-rancher-ui"},"Using the Private Registry with the Rancher UI"),(0,a.kt)("p",null,"To deploy a workload with an image from your private registry,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster where you want to deploy a workload and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Workload"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Select the type of workload you want to create."),(0,a.kt)("li",{parentName:"ol"},"Enter a unique name for the workload and choose a namespace."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Container Image")," field, enter the URL of the path to the image in your private registry. For example, if your private registry is on Quay.io, you could use ",(0,a.kt)("inlineCode",{parentName:"li"},"quay.io/<Quay profile name>/<Image name>"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Your deployment should launch, authenticate using the private registry credentials you added in the Rancher UI, and pull the container image that you specified."),(0,a.kt)("h3",{id:"using-the-private-registry-with-kubectl"},"Using the Private Registry with kubectl"),(0,a.kt)("p",null,"When you create the workload using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),", you need to configure the pod so that its YAML has the path to the image in the private registry. You also have to create and reference the registry secret because the pod only automatically gets access to the private registry credentials if it is created in the Rancher UI."),(0,a.kt)("p",null,"The secret has to be created in the same namespace where the workload gets deployed."),(0,a.kt)("p",null,"Below is an example ",(0,a.kt)("inlineCode",{parentName:"p"},"pod.yml")," for a workload that uses an image from a private registry. In this example, the pod uses an image from Quay.io, and the .yml specifies the path to the image. The pod authenticates with the registry using credentials stored in a Kubernetes secret called ",(0,a.kt)("inlineCode",{parentName:"p"},"testquay"),", which is specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.imagePullSecrets")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: private-reg\nspec:\n  containers:\n  - name: private-reg-container\n    image: quay.io/<Quay profile name>/<image name>\n  imagePullSecrets:\n  - name: testquay\n")),(0,a.kt)("p",null,"In this example, the secret named ",(0,a.kt)("inlineCode",{parentName:"p"},"testquay")," is in the default namespace."),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the secret with the private registry credentials. This command creates the secret named ",(0,a.kt)("inlineCode",{parentName:"p"},"testquay"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create secret docker-registry testquay \\\n    --docker-server=quay.io \\\n    --docker-username=<Profile name> \\\n    --docker-password=<password>\n")),(0,a.kt)("p",null,"To see how the secret is stored in Kubernetes, you can use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl get secret testquay --output="jsonpath={.data.\\.dockerconfigjson}" | base64 --decode\n')),(0,a.kt)("p",null,"The result looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"auths":{"quay.io":{"username":"<Profile name>","password":"<password>","auth":"c291bXlhbGo6dGVzdGFiYzEyMw=="}}}\n')),(0,a.kt)("p",null,"After the workload is deployed, you can check if the image was pulled successfully:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get events\n")),(0,a.kt)("p",null,"The result should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'14s         Normal    Scheduled          Pod    Successfully assigned default/private-reg2 to minikube\n11s         Normal    Pulling            Pod    pulling image "quay.io/<Profile name>/<image name>"\n10s         Normal    Pulled             Pod    Successfully pulled image "quay.io/<Profile name>/<image name>"\n')),(0,a.kt)("p",null,"For more information, refer to the Kubernetes documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-pod-that-uses-your-secret"},"creating a pod that uses your secret.")))}d.isMDXComponent=!0}}]);
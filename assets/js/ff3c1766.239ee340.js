"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20731],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>l});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={title:"How Resource Quotas Work in Rancher Projects"},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",id:"version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",title:"How Resource Quotas Work in Rancher Projects",description:"Resource quotas in Rancher include the same functionality as the native version of Kubernetes. However, in Rancher, resource quotas have been extended so that you can apply them to projects.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",permalink:"/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"How Resource Quotas Work in Rancher Projects"},sidebar:"tutorialSidebar",previous:{title:"Project Resource Quotas",permalink:"/v2.6/pages-for-subheaders/manage-project-resource-quotas"},next:{title:"Overriding the Default Limit for a Namespace",permalink:"/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces"}},p={},l=[],d={toc:l};function m(e){var{components:t}=e,i=s(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},d,i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Resource quotas in Rancher include the same functionality as the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"native version of Kubernetes"),". However, in Rancher, resource quotas have been extended so that you can apply them to projects."),(0,r.kt)("p",null,"In a standard Kubernetes deployment, resource quotas are applied to individual namespaces. However, you cannot apply the quota to your namespaces simultaneously with a single action. Instead, the resource quota must be applied multiple times."),(0,r.kt)("p",null,"In the following diagram, a Kubernetes administrator is trying to enforce a resource quota without Rancher. The administrator wants to apply a resource quota that sets the same CPU and memory limit to every namespace in his cluster (",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace 1-4"),") . However, in the base version of Kubernetes, each namespace requires a unique resource quota. The administrator has to create four different resource quotas that have the same specs configured (",(0,r.kt)("inlineCode",{parentName:"p"},"Resource Quota 1-4"),") and apply them individually."),(0,r.kt)("sup",null,"Base Kubernetes: Unique Resource Quotas Being Applied to Each Namespace"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Native Kubernetes Resource Quota Implementation",src:a(58914).Z,width:"1281",height:"632"})),(0,r.kt)("p",null,"Resource quotas are a little different in Rancher. In Rancher, you apply a resource quota to the project, and then the quota propagates to each namespace, whereafter Kubernetes enforces your limits using the native version of resource quotas. If you want to change the quota for a specific namespace, you can override it."),(0,r.kt)("p",null,"The resource quota includes two limits, which you set while creating or editing a project:"),(0,r.kt)("a",{id:"project-limits"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Project Limits:")),(0,r.kt)("p",{parentName:"li"},"  This set of values configures a total limit for each specified resource shared among all namespaces in the project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Namespace Default Limits:")),(0,r.kt)("p",{parentName:"li"},"  This set of values configures the default quota limit available for each namespace for each specified resource.\nWhen a namespace is created in the project without overrides, this limit is automatically bound to the namespace and enforced."))),(0,r.kt)("p",null,"In the following diagram, a Rancher administrator wants to apply a resource quota that sets the same CPU and memory limit for every namespace in their project (",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace 1-4"),"). However, in Rancher, the administrator can set a resource quota for the project (",(0,r.kt)("inlineCode",{parentName:"p"},"Project Resource Quota"),") rather than individual namespaces. This quota includes resource limits for both the entire project (",(0,r.kt)("inlineCode",{parentName:"p"},"Project Limit"),") and individual namespaces (",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace Default Limit"),"). Rancher then propagates the ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace Default Limit")," quotas to each namespace (",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace Resource Quota"),") when created."),(0,r.kt)("sup",null,"Rancher: Resource Quotas Propagating to Each Namespace"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rancher Resource Quota Implementation",src:a(8421).Z,width:"1848",height:"1178"})),(0,r.kt)("p",null,"Let's highlight some more nuanced functionality for namespaces created ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"within"))," the Rancher UI. If a quota is deleted at the project level, it will also be removed from all namespaces contained within that project, despite any overrides that may exist. Further, updating an existing namespace default limit for a quota at the project level will not result in that value being propagated to existing namespaces in the project; the updated value will only be applied to newly created namespaces in that project. To update a namespace default limit for existing namespaces you can delete and subsequently recreate the quota at the project level with the new default value. This will result in the new default value being applied to all existing namespaces in the project."),(0,r.kt)("p",null,"Before creating a namespace in a project, Rancher compares the amounts of the project's available resources and requested resources, regardless of whether they come from the default or overridden limits.\nIf the requested resources exceed the remaining capacity in the project for those resources, Rancher will assign the namespace the remaining capacity for that resource."),(0,r.kt)("p",null,"However, this is not the case with namespaces created ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"outside"))," of Rancher's UI. For namespaces created via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", Rancher\nwill assign a resource quota that has a ",(0,r.kt)("strong",{parentName:"p"},"zero")," amount for any resource that requested more capacity than what remains in the project."),(0,r.kt)("p",null,"To create a namespace in an existing project via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", use the ",(0,r.kt)("inlineCode",{parentName:"p"},"field.cattle.io/projectId")," annotation. To override the default\nrequested quota limit, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"field.cattle.io/resourceQuota")," annotation."),(0,r.kt)("p",null,"Note that Rancher will only override limits for resources that are defined on the project quota."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  annotations:\n    field.cattle.io/projectId: [your-cluster-ID]:[your-project-ID]\n    field.cattle.io/resourceQuota: \'{"limit":{"limitsCpu":"100m", "configMaps": "50"}}\'\n  name: my-ns\n')),(0,r.kt)("p",null,"In this example, if the project's quota does not include configMaps in its list of resources, then Rancher will ignore ",(0,r.kt)("inlineCode",{parentName:"p"},"configMaps")," in this override."),(0,r.kt)("p",null,"Users are advised to create dedicated ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceQuota")," objects in namespaces to configure additional custom limits for resources not defined on the project.\nResource quotas are native Kubernetes objects, and Rancher will ignore user-defined quotas in namespaces belonging to a project with a quota,\nthus giving users more control."),(0,r.kt)("p",null,"The following table explains the key differences between the two quota types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Resource Quotas"),(0,r.kt)("th",{parentName:"tr",align:null},"Kubernetes Resource Quotas"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Applies to projects and namespace."),(0,r.kt)("td",{parentName:"tr",align:null},"Applies to namespaces only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Creates resource pool for all namespaces in project."),(0,r.kt)("td",{parentName:"tr",align:null},"Applies static resource limits to individual namespaces.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Applies resource quotas to namespaces through propagation."),(0,r.kt)("td",{parentName:"tr",align:null},"Applies only to the assigned namespace.")))))}m.isMDXComponent=!0},58914:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/kubernetes-resource-quota-1449edd8bea51560951f519a6098dda0.svg"},8421:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rancher-resource-quota-3c2bc9f34b4fe75494a937bee75a601a.png"}}]);
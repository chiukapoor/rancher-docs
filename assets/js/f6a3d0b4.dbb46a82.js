"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2146],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||s;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={title:"Example Scenarios"},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",title:"Example Scenarios",description:"These example scenarios describe how an organization could use templates to standardize cluster creation.",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases.md",tags:[],version:"current",lastUpdatedAt:1685560892,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"Example Scenarios"},sidebar:"tutorialSidebar",previous:{title:"RKE Templates and Infrastructure",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure"},next:{title:"Pod Security Policies",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"}},c={},p=[{value:"Enforcing a Template Setting for Everyone",id:"enforcing-a-template-setting-for-everyone",level:2},{value:"Templates for Basic and Advanced Users",id:"templates-for-basic-and-advanced-users",level:2},{value:"Updating Templates and Clusters Created with Them",id:"updating-templates-and-clusters-created-with-them",level:2},{value:"Allowing Other Users to Control and Share a Template",id:"allowing-other-users-to-control-and-share-a-template",level:2}],h={toc:p};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases"})),(0,r.kt)("p",null,"These example scenarios describe how an organization could use templates to standardize cluster creation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enforcing templates:")," Administrators might want to ",(0,r.kt)("a",{parentName:"li",href:"#enforcing-a-template-setting-for-everyone"},"enforce one or more template settings for everyone")," if they want all new Rancher-provisioned clusters to have those settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sharing different templates with different users:")," Administrators might give ",(0,r.kt)("a",{parentName:"li",href:"#templates-for-basic-and-advanced-users"},"different templates to basic and advanced users,")," so that basic users have more restricted options and advanced users have more discretion when creating clusters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Updating template settings:")," If an organization's security and DevOps teams decide to embed best practices into the required settings for new clusters, those best practices could change over time. If the best practices change, ",(0,r.kt)("a",{parentName:"li",href:"#updating-templates-and-clusters-created-with-them"},"a template can be updated to a new revision")," and clusters created from the template can upgrade to the new version of the template."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sharing ownership of a template:")," When a template owner no longer wants to maintain a template, or wants to delegate ownership of the template, this scenario describes how ",(0,r.kt)("a",{parentName:"li",href:"#allowing-other-users-to-control-and-share-a-template"},"template ownership can be shared."))),(0,r.kt)("h2",{id:"enforcing-a-template-setting-for-everyone"},"Enforcing a Template Setting for Everyone"),(0,r.kt)("p",null,"Let's say there is an organization in which the administrators decide that all new clusters should be created with Kubernetes version 1.14."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, an administrator creates a template which specifies the Kubernetes version as 1.14 and marks all other settings as ",(0,r.kt)("strong",{parentName:"li"},"Allow User Override"),"."),(0,r.kt)("li",{parentName:"ol"},"The administrator makes the template public."),(0,r.kt)("li",{parentName:"ol"},"The administrator turns on template enforcement.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Results:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All Rancher users in the organization have access to the template."),(0,r.kt)("li",{parentName:"ul"},"All new clusters created by ",(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"standard users")," with this template will use Kubernetes 1.14 and they are unable to use a different Kubernetes version. By default, standard users don't have permission to create templates, so this template will be the only template they can use unless more templates are shared with them."),(0,r.kt)("li",{parentName:"ul"},"All standard users must use a cluster template to create a new cluster. They cannot create a cluster without using a template.")),(0,r.kt)("p",null,"In this way, the administrators enforce the Kubernetes version across the organization, while still allowing end users to configure everything else."),(0,r.kt)("h2",{id:"templates-for-basic-and-advanced-users"},"Templates for Basic and Advanced Users"),(0,r.kt)("p",null,"Let's say an organization has both basic and advanced users. Administrators want the basic users to be required to use a template, while the advanced users and administrators create their clusters however they want."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, an administrator turns on ",(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates#requiring-new-clusters-to-use-an-rke-template"},"RKE template enforcement.")," This means that every ",(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"standard user")," in Rancher will need to use an RKE template when they create a cluster."),(0,r.kt)("li",{parentName:"ol"},"The administrator then creates two templates:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One template for basic users, with almost every option specified except for access keys"),(0,r.kt)("li",{parentName:"ul"},"One template for advanced users, which has most or all options has ",(0,r.kt)("strong",{parentName:"li"},"Allow User Override")," turned on")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The administrator shares the advanced template with only the advanced users."),(0,r.kt)("li",{parentName:"ol"},"The administrator makes the template for basic users public, so the more restrictive template is an option for everyone who creates a Rancher-provisioned cluster.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," All Rancher users, except for administrators, are required to use a template when creating a cluster. Everyone has access to the restrictive template, but only advanced users have permission to use the more permissive template. The basic users are more restricted, while advanced users have more freedom when configuring their Kubernetes clusters."),(0,r.kt)("h2",{id:"updating-templates-and-clusters-created-with-them"},"Updating Templates and Clusters Created with Them"),(0,r.kt)("p",null,"Let's say an organization has a template that requires clusters to use Kubernetes v1.14. However, as time goes on, the administrators change their minds. They decide they want users to be able to upgrade their clusters to use newer versions of Kubernetes."),(0,r.kt)("p",null,"In this organization, many clusters were created with a template that requires Kubernetes v1.14. Because the template does not allow that setting to be overridden, the users who created the cluster cannot directly edit that setting."),(0,r.kt)("p",null,"The template owner has several options for allowing the cluster creators to upgrade Kubernetes on their clusters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Specify Kubernetes v1.15 on the template:")," The template owner can create a new template revision that specifies Kubernetes v1.15. Then the owner of each cluster that uses that template can upgrade their cluster to a new revision of the template. This template upgrade allows the cluster creator to upgrade Kubernetes to v1.15 on their cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Allow any Kubernetes version on the template:")," When creating a template revision, the template owner can also mark the the Kubernetes version as ",(0,r.kt)("strong",{parentName:"li"},"Allow User Override")," using the switch near that setting on the Rancher UI. This will allow clusters that upgrade to this template revision to use any version of Kubernetes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Allow the latest minor Kubernetes version on the template:")," The template owner can also create a template revision in which the Kubernetes version is defined as ",(0,r.kt)("strong",{parentName:"li"},"Latest v1.14 (Allows patch version upgrades)"),". This means clusters that use that revision will be able to get patch version upgrades, but major version upgrades will not be allowed.")),(0,r.kt)("h2",{id:"allowing-other-users-to-control-and-share-a-template"},"Allowing Other Users to Control and Share a Template"),(0,r.kt)("p",null,"Let's say Alice is a Rancher administrator. She owns an RKE template that reflects her organization's agreed-upon best practices for creating a cluster."),(0,r.kt)("p",null,"Bob is an advanced user who can make informed decisions about cluster configuration. Alice trusts Bob to create new revisions of her template as the best practices get updated over time. Therefore, she decides to make Bob an owner of the template."),(0,r.kt)("p",null,"To share ownership of the template with Bob, Alice ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates#sharing-ownership-of-templates"},"adds Bob as an owner of her template.")),(0,r.kt)("p",null,"The result is that as a template owner, Bob is in charge of version control for that template. Bob can now do all of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#updating-a-template"},"Revise the template")," when the best practices change"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#disabling-a-template-revision"},"Disable outdated revisions")," of the template so that no new clusters can be created with it"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#deleting-a-template"},"Delete the whole template")," if the organization wants to go in a different direction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#setting-a-template-revision-as-default"},"Set a certain revision as default")," when users create a cluster with it. End users of the template will still be able to choose which revision they want to create the cluster with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},"Share the template")," with specific users, make the template available to all Rancher users, or share ownership of the template with another user.")))}m.isMDXComponent=!0}}]);
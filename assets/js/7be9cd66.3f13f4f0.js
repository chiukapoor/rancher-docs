"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"Adding Users to Projects"},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/add-users-to-projects",id:"how-to-guides/new-user-guides/add-users-to-projects",title:"Adding Users to Projects",description:"If you want to provide a user with access and permissions to specific projects and resources within a cluster, assign the user a project membership.",source:"@site/docs/how-to-guides/new-user-guides/add-users-to-projects.md",sourceDirName:"how-to-guides/new-user-guides",slug:"/how-to-guides/new-user-guides/add-users-to-projects",permalink:"/how-to-guides/new-user-guides/add-users-to-projects",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/add-users-to-projects.md",tags:[],version:"current",lastUpdatedAt:1673989680,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{title:"Adding Users to Projects"},sidebar:"tutorialSidebar",previous:{title:"Restoring a Cluster from Backup",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},next:{title:"Namespaces",permalink:"/how-to-guides/new-user-guides/manage-namespaces"}},c={},u=[{value:"Adding Members to a New Project",id:"adding-members-to-a-new-project",level:3},{value:"Adding Members to an Existing Project",id:"adding-members-to-an-existing-project",level:3}],d={toc:u};function m(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you want to provide a user with access and permissions to ",(0,n.kt)("em",{parentName:"p"},"specific")," projects and resources within a cluster, assign the user a project membership."),(0,n.kt)("p",null,"You can add members to a project as it is created, or add them to an existing project."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Want to provide a user with access to ",(0,n.kt)("em",{parentName:"p"},"all")," projects within a cluster? See ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Adding Cluster Members")," instead.")),(0,n.kt)("h3",{id:"adding-members-to-a-new-project"},"Adding Members to a New Project"),(0,n.kt)("p",null,"You can add members to a project as you create it (recommended if possible). For details on creating a new project, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},"cluster administration section.")),(0,n.kt)("h3",{id:"adding-members-to-an-existing-project"},"Adding Members to an Existing Project"),(0,n.kt)("p",null,"Following project creation, you can add users as project members so that they can access its resources."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to add members to a project and click ",(0,n.kt)("strong",{parentName:"p"},"Explore"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Cluster > Projects/Namespaces"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the project where you want to add members. Next to the ",(0,n.kt)("strong",{parentName:"p"},"Create Namespace")," button above the project name, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630"),". Select ",(0,n.kt)("strong",{parentName:"p"},"Edit Config"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Members")," tab, click ",(0,n.kt)("strong",{parentName:"p"},"Add"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search for the user or group that you want to add to the project."),(0,n.kt)("p",{parentName:"li"},"If external authentication is configured:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rancher returns users from your external authentication source as you type.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A drop-down allows you to add groups instead of individual users. The dropdown only lists groups that you, the logged in user, are included in."))),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are logged in as a local user, external users do not display in your search results."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign the user or group ",(0,n.kt)("strong",{parentName:"p"},"Project")," roles."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"What are Project Roles?")),(0,n.kt)("admonition",{parentName:"li",title:"Notes:",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Users assigned the ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Member")," role for a project automatically inherit the ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace creation")," role. However, this role is a ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"Kubernetes ClusterRole"),", meaning its scope extends to all projects in the cluster. Therefore, users explicitly assigned the ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Member")," role for a project can create or delete namespaces in other projects they're assigned to, even with only the ",(0,n.kt)("inlineCode",{parentName:"p"},"Read Only")," role assigned.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By default, the Rancher role of ",(0,n.kt)("inlineCode",{parentName:"p"},"project-member")," inherits from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Kubernetes-edit")," role, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"project-owner")," role inherits from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Kubernetes-admin")," role. As such, both ",(0,n.kt)("inlineCode",{parentName:"p"},"project-member")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"project-owner")," roles will allow for namespace management, including the ability to create and delete namespaces.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("inlineCode",{parentName:"p"},"Custom")," roles, you can modify the list of individual roles available for assignment."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To add roles to the list, ",(0,n.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"Add a Custom Role"),"."),(0,n.kt)("li",{parentName:"ul"},"To remove roles from the list, ",(0,n.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"Lock/Unlock Roles"),"."))))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The chosen users are added to the project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To revoke project membership, select the user and click ",(0,n.kt)("strong",{parentName:"li"},"Delete"),". This action deletes membership, not the user."),(0,n.kt)("li",{parentName:"ul"},"To modify a user's roles in the project, delete them from the project, and then re-add them with modified roles.")))}m.isMDXComponent=!0}}]);
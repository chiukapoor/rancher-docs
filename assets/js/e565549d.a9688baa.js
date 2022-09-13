"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[47862],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91568:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=["components"],i={title:"Adding Users to Clusters",weight:2020,aliases:["/rancher/v2.5/en/tasks/clusters/adding-managing-cluster-members/","/rancher/v2.5/en/k8s-in-rancher/cluster-members/","/rancher/v2.5/en/cluster-admin/cluster-members","/rancher/v2.5/en/cluster-provisioning/cluster-members/","/rancher/v2.x/en/cluster-admin/cluster-access/cluster-members/"]},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",id:"version-2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",title:"Adding Users to Clusters",description:"If you want to provide a user with access and permissions to all projects, nodes, and resources within a cluster, assign the user a cluster membership.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md",tags:[],version:"2.5",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Adding Users to Clusters",weight:2020,aliases:["/rancher/v2.5/en/tasks/clusters/adding-managing-cluster-members/","/rancher/v2.5/en/k8s-in-rancher/cluster-members/","/rancher/v2.5/en/cluster-admin/cluster-members","/rancher/v2.5/en/cluster-provisioning/cluster-members/","/rancher/v2.x/en/cluster-admin/cluster-access/cluster-members/"]},sidebar:"tutorialSidebar",previous:{title:"How the Authorized Cluster Endpoint Works",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},next:{title:"Cluster Autoscaler",permalink:"/v2.5/pages-for-subheaders/install-cluster-autoscaler"}},l={},d=[{value:"Editing Cluster Membership",id:"editing-cluster-membership",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you want to provide a user with access and permissions to ",(0,s.kt)("em",{parentName:"p"},"all")," projects, nodes, and resources within a cluster, assign the user a cluster membership."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Tip:")," Want to provide a user with access to a ",(0,s.kt)("em",{parentName:"p"},"specific")," project within a cluster? See ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Adding Project Members")," instead.")),(0,s.kt)("p",null,"There are two contexts where you can add cluster members:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Adding Members to a New Cluster"),(0,s.kt)("p",{parentName:"li"},"  You can add members to a cluster as you create it (recommended if possible).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#editing-cluster-membership"},"Adding Members to an Existing Cluster")),(0,s.kt)("p",{parentName:"li"},"  You can always add members to a cluster after a cluster is provisioned."))),(0,s.kt)("h2",{id:"editing-cluster-membership"},"Editing Cluster Membership"),(0,s.kt)("p",null,"Cluster administrators can edit the membership for a cluster, controlling which Rancher users can access the cluster and what features they can use."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the ",(0,s.kt)("strong",{parentName:"p"},"Global")," view, open the cluster that you want to add members to.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the main menu, select ",(0,s.kt)("strong",{parentName:"p"},"Members"),". Then click ",(0,s.kt)("strong",{parentName:"p"},"Add Member"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Search for the user or group that you want to add to the cluster."),(0,s.kt)("p",{parentName:"li"},"If external authentication is configured:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Rancher returns users from your ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/about-authentication"},"external authentication")," source as you type."),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Using AD but can't find your users?"),"\nThere may be an issue with your search attribute configuration. See ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory"},"Configuring Active Directory Authentication: Step 5"),"."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A drop-down allows you to add groups instead of individual users. The drop-down only lists groups that you, the logged in user, are part of."),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," If you are logged in as a local user, external users do not display in your search results. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),"."))))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Assign the user or group ",(0,s.kt)("strong",{parentName:"p"},"Cluster")," roles.  "),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"What are Cluster Roles?")),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Tip:")," For Custom Roles, you can modify the list of individual roles available for assignment."),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"To add roles to the list, ",(0,s.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"Add a Custom Role"),"."),(0,s.kt)("li",{parentName:"ul"},"To remove roles from the list, ",(0,s.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"Lock/Unlock Roles"),"."))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The chosen users are added to the cluster."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To revoke cluster membership, select the user and click ",(0,s.kt)("strong",{parentName:"li"},"Delete"),". This action deletes membership, not the user."),(0,s.kt)("li",{parentName:"ul"},"To modify a user's roles in the cluster, delete them from the cluster, and then re-add them with modified roles.")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81147],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||n;return a?o.createElement(h,i(i({ref:t},u),{},{components:a})):o.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99551:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=a(87462),r=a(63366),n=(a(67294),a(3905)),i=["components"],s={title:"Custom Roles",weight:1128},l=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",title:"Custom Roles",description:"Within Rancher, roles determine what actions a user can make within a cluster or project.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",tags:[],version:"current",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Custom Roles",weight:1128},sidebar:"tutorialSidebar",previous:{title:"Cluster and Project Roles",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},next:{title:"Locked Roles",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating A Custom Role",id:"creating-a-custom-role",level:2},{value:"Creating a Custom Role that Inherits from Another Role",id:"creating-a-custom-role-that-inherits-from-another-role",level:2},{value:"Deleting a Custom Role",id:"deleting-a-custom-role",level:2},{value:"Assigning a Custom Role to a Group",id:"assigning-a-custom-role-to-a-group",level:2},{value:"Privilege Escalation",id:"privilege-escalation",level:2}],m={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Within Rancher, ",(0,n.kt)("em",{parentName:"p"},"roles")," determine what actions a user can make within a cluster or project."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("em",{parentName:"p"},"roles")," are different from ",(0,n.kt)("em",{parentName:"p"},"permissions"),", which determine what clusters and projects you can access."),(0,n.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"It is possible for a custom role to enable privilege escalation. For details, see ",(0,n.kt)("a",{parentName:"p",href:"#privilege-escalation"},"this section.")))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To complete the tasks on this page, one of the following permissions are required:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,n.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Roles")," role assigned.")),(0,n.kt)("h2",{id:"creating-a-custom-role"},"Creating A Custom Role"),(0,n.kt)("p",null,"While Rancher comes out-of-the-box with a set of default user roles, you can also create default custom roles to provide users with very specific permissions within Rancher."),(0,n.kt)("p",null,"The steps to add custom roles differ depending on the version of Rancher."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Roles"),"."),(0,n.kt)("li",{parentName:"ol"},"Select a tab to determine the scope of the role you're adding. The tabs are:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Global:")," The role is valid for allowing members to manage global scoped resources."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cluster:")," The role is valid for assignment when adding/managing members to clusters."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Project/Namespaces:")," The role is valid for assignment when adding/managing members to projects or namespaces.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create Global Role,")," ",(0,n.kt)("strong",{parentName:"p"},"Create Cluster Role")," or ",(0,n.kt)("strong",{parentName:"p"},"Create Project/Namespaces Role,")," depending on the scope.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Name")," for the role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optional: Choose the ",(0,n.kt)("strong",{parentName:"p"},"Cluster/Project Creator Default")," option to assign this role to a user when they create a new cluster or project. Using this feature, you can expand or restrict the default roles for cluster/project creators."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Out of the box, the Cluster Creator Default and the Project Creator Default roles are ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Owner")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Project Owner")," respectively."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("strong",{parentName:"p"},"Grant Resources")," options to assign individual ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/"},"Kubernetes API endpoints")," to the role."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,n.kt)("inlineCode",{parentName:"p"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource.")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,n.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field.")),(0,n.kt)("p",{parentName:"li"},"You can also choose the individual cURL methods (",(0,n.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Get"),", etc.) available for use with each endpoint you assign.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("strong",{parentName:"p"},"Inherit from")," options to assign individual Rancher roles to your custom roles. Note: When a custom role inherits from a parent role, the parent role cannot be deleted until the child role is deleted.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."))),(0,n.kt)("h2",{id:"creating-a-custom-role-that-inherits-from-another-role"},"Creating a Custom Role that Inherits from Another Role"),(0,n.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom role in which all of the rules from another role, such as the administrator role, are copied into a new role. This allows you to only configure the variations between the existing role and the new role."),(0,n.kt)("p",null,"The custom role can then be assigned to a user or group so that the role takes effect the first time the user or users sign into Rancher."),(0,n.kt)("p",null,"To create a custom role based on an existing role,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"p"},"Roles"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Cluster")," or ",(0,n.kt)("strong",{parentName:"p"},"Project/Namespaces")," tab. Click ",(0,n.kt)("strong",{parentName:"p"},"Create Cluster Role")," or ",(0,n.kt)("strong",{parentName:"p"},"Create Project/Namespaces Role")," depending on the scope. Note: Only cluster roles and project/namespace roles can inherit from another role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name for the role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Inherit From")," tab, select the role(s) that the custom role will inherit permissions from.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Grant Resources")," tab, select the Kubernetes resource operations that will be enabled for users with the custom role."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,n.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optional: Assign the role as default.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."))),(0,n.kt)("h2",{id:"deleting-a-custom-role"},"Deleting a Custom Role"),(0,n.kt)("p",null,"When deleting a custom role, all global role bindings with this custom role are deleted."),(0,n.kt)("p",null,"If a user is only assigned one custom role, and the role is deleted, the user would lose access to Rancher. For the user to regain access, an administrator would need to edit the user and apply new global permissions."),(0,n.kt)("p",null,"Custom roles can be deleted, but built-in roles cannot be deleted."),(0,n.kt)("p",null,"To delete a custom role,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Roles"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the custom global role that should be deleted and click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee (\u2026) > Delete"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Delete"),".")),(0,n.kt)("h2",{id:"assigning-a-custom-role-to-a-group"},"Assigning a Custom Role to a Group"),(0,n.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom role. When the role is assigned to a group, the users in the group have the appropriate level of access the first time they sign into Rancher."),(0,n.kt)("p",null,"When a user in the group logs in, they get the built-in Standard User global role by default. They will also get the permissions assigned to their groups."),(0,n.kt)("p",null,"If a user is removed from the external authentication provider group, they would lose their permissions from the custom role that was assigned to the group. They would continue to have their individual Standard User role."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"You can only assign a global role to a group if:"),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"You have set up an ",(0,n.kt)("a",{parentName:"li",href:"/pages-for-subheaders/about-authentication#external-vs-local-authentication"},"external authentication provider")),(0,n.kt)("li",{parentName:"ul"},"The external authentication provider supports ",(0,n.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups"},"user groups")),(0,n.kt)("li",{parentName:"ul"},"You have already set up at least one user group with the authentication provider")))),(0,n.kt)("p",null,"To assign a custom role to a group, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Groups"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the existing group that will be assigned the custom role and click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,n.kt)("li",{parentName:"ol"},"If you have created roles, they will show in the ",(0,n.kt)("strong",{parentName:"li"},"Custom")," section. Choose any custom role that will be assigned to the group."),(0,n.kt)("li",{parentName:"ol"},"Optional: In the ",(0,n.kt)("strong",{parentName:"li"},"Global Permissions")," or ",(0,n.kt)("strong",{parentName:"li"},"Built-in")," sections, select any additional permissions that the group should have."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save."),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The custom role will take effect when the users in the group log into Rancher."),(0,n.kt)("h2",{id:"privilege-escalation"},"Privilege Escalation"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Configure Catalogs")," custom permission is powerful and should be used with caution. When an admin assigns the  ",(0,n.kt)("inlineCode",{parentName:"p"},"Configure Catalogs")," permission to a standard user, it could result in privilege escalation in which the user could give themselves admin access to Rancher provisioned clusters. Anyone with this permission should be considered equivalent to an admin."))}d.isMDXComponent=!0}}]);
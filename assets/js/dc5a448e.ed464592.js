"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,g=m["".concat(i,".").concat(h)]||m[h]||c[h]||o;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"Access and Sharing"},i=void 0,p={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",title:"Access and Sharing",description:"If you are an RKE template owner, you can share it with users or groups of users, who can then use the template to create clusters.",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates.md",tags:[],version:"current",lastUpdatedAt:1685499567,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"Access and Sharing"},sidebar:"tutorialSidebar",previous:{title:"Template Creator Permissions",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions"},next:{title:"Creating and Revising RKE Templates",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates"}},u={},c=[{value:"Sharing Templates with Specific Users or Groups",id:"sharing-templates-with-specific-users-or-groups",level:3},{value:"Sharing Templates with All Users",id:"sharing-templates-with-all-users",level:3},{value:"Sharing Ownership of Templates",id:"sharing-ownership-of-templates",level:3}],m={toc:c};function h(e){var{components:t}=e,r=s(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"})),(0,a.kt)("p",null,"If you are an RKE template owner, you can share it with users or groups of users, who can then use the template to create clusters."),(0,a.kt)("p",null,"Since RKE templates are specifically shared with users and groups, owners can share different RKE templates with different sets of users."),(0,a.kt)("p",null,"When you share a template, each user can have one of two access levels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Owner:")," This user can update, delete, and share the templates that they own. The owner can also share the template with other users."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User:")," These users can create clusters using the template. They can also upgrade those clusters to new revisions of the same template. When you share a template as ",(0,a.kt)("strong",{parentName:"li"},"Make Public (read-only),")," all users in your Rancher setup have the User access level for the template.")),(0,a.kt)("p",null,"If you create a template, you automatically become an owner of that template."),(0,a.kt)("p",null,"If you want to delegate responsibility for updating the template, you can share ownership of the template. For details on how owners can modify templates, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates"},"documentation about revising templates.")),(0,a.kt)("p",null,"There are several ways to share templates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add users to a new RKE template during template creation"),(0,a.kt)("li",{parentName:"ul"},"Add users to an existing RKE template"),(0,a.kt)("li",{parentName:"ul"},"Make the RKE template public, sharing it with all users in the Rancher setup"),(0,a.kt)("li",{parentName:"ul"},"Share template ownership with users who are trusted to modify the template")),(0,a.kt)("h3",{id:"sharing-templates-with-specific-users-or-groups"},"Sharing Templates with Specific Users or Groups"),(0,a.kt)("p",null,"To allow users or groups to create clusters using your template, you can give them the basic ",(0,a.kt)("strong",{parentName:"p"},"User")," access level for the template."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"RKE1 configuration"),", click ",(0,a.kt)("strong",{parentName:"li"},"RKE Templates"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the template that you want to share and click the ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Share Template")," section, click on ",(0,a.kt)("strong",{parentName:"li"},"Add Member"),"."),(0,a.kt)("li",{parentName:"ol"},"Search in the ",(0,a.kt)("strong",{parentName:"li"},"Name")," field for the user or group you want to share the template with."),(0,a.kt)("li",{parentName:"ol"},"Choose the ",(0,a.kt)("strong",{parentName:"li"},"User")," access type."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The user or group can create clusters using the template."),(0,a.kt)("h3",{id:"sharing-templates-with-all-users"},"Sharing Templates with All Users"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,a.kt)("strong",{parentName:"li"},"RKE1 Configuration > RKE Templates"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the template that you want to share and click the ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Share Template,")," check the box for ",(0,a.kt)("strong",{parentName:"li"},"Make Public (read-only)"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," All users in the Rancher setup can create clusters using the template."),(0,a.kt)("h3",{id:"sharing-ownership-of-templates"},"Sharing Ownership of Templates"),(0,a.kt)("p",null,"If you are the creator of a template, you might want to delegate responsibility for maintaining and updating a template to another user or group."),(0,a.kt)("p",null,"In that case, you can give users the Owner access type, which allows another user to update your template, delete it, or share access to it with other users."),(0,a.kt)("p",null,"To give Owner access to a user or group,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"RKE1 configuration"),", click ",(0,a.kt)("strong",{parentName:"li"},"RKE Templates"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the RKE template that you want to share and click the ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Share Template"),", click on ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," and search in the ",(0,a.kt)("strong",{parentName:"li"},"Name")," field for the user or group you want to share the template with."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Access Type")," field, click ",(0,a.kt)("strong",{parentName:"li"},"Owner"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The user or group has the Owner access type, and can modify, share, or delete the template."))}h.isMDXComponent=!0}}]);
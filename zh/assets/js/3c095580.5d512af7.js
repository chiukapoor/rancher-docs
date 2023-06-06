"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={title:"Configuring FreeIPA"},c=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",title:"Configuring FreeIPA",description:"Available as of v2.0.5",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Configuring FreeIPA"},sidebar:"tutorialSidebar",previous:{title:"Configuring Active Directory (AD)",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory"},next:{title:"Configuring Azure AD",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad"}},l={},p=[],f={toc:p};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.0.5")),(0,n.kt)("p",null,"If your organization uses FreeIPA for user authentication, you can configure Rancher to allow your users to login using their FreeIPA credentials."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"You must have a ",(0,n.kt)("a",{parentName:"li",href:"https://www.freeipa.org/"},"FreeIPA Server")," configured."),(0,n.kt)("li",{parentName:"ul"},"Create a service account in FreeIPA with ",(0,n.kt)("inlineCode",{parentName:"li"},"read-only")," access. Rancher uses this account to verify group membership when a user makes a request using an API key."),(0,n.kt)("li",{parentName:"ul"},"Read ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),"."))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sign into Rancher using a local user assigned the ",(0,n.kt)("inlineCode",{parentName:"p"},"administrator")," role (i.e., the ",(0,n.kt)("em",{parentName:"p"},"local principal"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,n.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"FreeIPA"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the ",(0,n.kt)("strong",{parentName:"p"},"Configure an FreeIPA server")," form."),(0,n.kt)("p",{parentName:"li"},"You may need to log in to your domain controller to find the information requested in the form."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Using TLS?"),"\nIf the certificate is self-signed or not from a recognized certificate authority, make sure you provide the complete chain. That chain is needed to verify the server's certificate."),(0,n.kt)("br",null),(0,n.kt)("br",null),"**User Search Base vs. Group Search Base**",(0,n.kt)("p",{parentName:"blockquote"},"Search base allows Rancher to search for users and groups that are in your FreeIPA.  These fields are only for search bases and not for search filters."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"If your users and groups are in the same search base, complete only the User Search Base."),(0,n.kt)("li",{parentName:"ul"},"If your groups are in a different search base, you can optionally complete the Group Search Base. This field is dedicated to searching groups, but is not required.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If your FreeIPA deviates from the standard AD schema, complete the ",(0,n.kt)("strong",{parentName:"p"},"Customize Schema")," form to match it. Otherwise, skip this step."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Search Attribute")," The Search Attribute field defaults with three specific values: ",(0,n.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),". After FreeIPA is configured, when a user enters text to add users or groups, Rancher automatically queries the FreeIPA server and attempts to match fields by user id, last name, or first name. Rancher specifically searches for users/groups that begin with the text entered in the search field."),(0,n.kt)("p",{parentName:"blockquote"},"The default field value ",(0,n.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),", but you can configure this field to a subset of these fields. The pipe (",(0,n.kt)("inlineCode",{parentName:"p"},"|"),") between the fields separates these fields."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uid"),": User ID"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sn"),": Last Name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"givenName"),": First Name")),(0,n.kt)("p",{parentName:"blockquote"},"With this search attribute, Rancher creates search filters for users and groups, but you ",(0,n.kt)("em",{parentName:"p"},"cannot")," add your own search filters in this field."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your FreeIPA username and password in ",(0,n.kt)("strong",{parentName:"p"},"Authenticate with FreeIPA")," to confirm that Rancher is configured to use FreeIPA authentication."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FreeIPA authentication is configured."),(0,n.kt)("li",{parentName:"ul"},"You are signed into Rancher with your FreeIPA account (i.e., the ",(0,n.kt)("em",{parentName:"li"},"external principal"),").")))}d.isMDXComponent=!0}}]);
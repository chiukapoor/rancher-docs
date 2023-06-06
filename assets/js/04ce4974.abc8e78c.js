"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),g=o,d=f["".concat(s,".").concat(g)]||f[g]||p[g]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"Local Authentication"},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users",id:"version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users",title:"Local Authentication",description:"Local authentication is the default until you configure an external authentication provider. Local authentication is where Rancher stores the user information, i.e. names and passwords, of who can log in to Rancher. By default, the admin user that logs in to Rancher for the first time is a local user.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Local Authentication"},sidebar:"tutorialSidebar",previous:{title:"Users and Groups",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups"},next:{title:"Configure Google OAuth",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth"}},l={},p=[{value:"Adding Local Users",id:"adding-local-users",level:2}],f={toc:p};function g(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Local authentication is the default until you configure an external authentication provider. Local authentication is where Rancher stores the user information, i.e. names and passwords, of who can log in to Rancher. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," user that logs in to Rancher for the first time is a local user."),(0,r.kt)("h2",{id:"adding-local-users"},"Adding Local Users"),(0,r.kt)("p",null,"Regardless of whether you use external authentication, you should create a few local authentication users so that you can continue using Rancher if your external authentication service encounters issues."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the top left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"li"},"Users"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"Complete the ",(0,r.kt)("strong",{parentName:"li"},"Add User")," form."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")))}g.isMDXComponent=!0}}]);
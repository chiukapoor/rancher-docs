"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57646],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49858:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const l={title:"Configuring Okta (SAML)"},u=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",title:"Configuring Okta (SAML)",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Configuring Okta (SAML)"},sidebar:"tutorialSidebar",previous:{title:"Configuring PingIdentity (SAML)",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity"},next:{title:"Configuring Microsoft Active Directory Federation Service (SAML)",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Okta in Rancher",id:"configuring-okta-in-rancher",level:2}],d={toc:p};function m(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)("wrapper",o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,a.kt)("p",null,"If your organization uses Okta Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Okta integration only supports Service Provider initiated logins.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In Okta, create a SAML Application with the settings below. See the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta"},"Okta documentation")," for help."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Single Sign on URL")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/acs"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Audience URI (SP Entity ID)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/metadata"))))),(0,a.kt)("h2",{id:"configuring-okta-in-rancher"},"Configuring Okta in Rancher"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,a.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Okta"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Complete the ",(0,a.kt)("strong",{parentName:"p"},"Configure Okta Account")," form. The examples below describe how you can map Okta attributes from attribute statements to fields within Rancher."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,a.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the display name of users.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,a.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the user name/given name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,a.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that is unique to every user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,a.kt)("td",{parentName:"tr",align:null},"The attribute name in a group attribute statement that exposes your groups.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,a.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,a.kt)("td",{parentName:"tr",align:null},"A key/certificate pair used for Assertion Encryption.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Metadata XML"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"Identity Provider metadata")," file that you find in the application ",(0,a.kt)("inlineCode",{parentName:"td"},"Sign On")," section.")))),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip:")," You can generate a key/certificate pair using an openssl command. For example:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"   openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.crt\n"))))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After you complete the ",(0,a.kt)("strong",{parentName:"p"},"Configure Okta Account")," form, click ",(0,a.kt)("strong",{parentName:"p"},"Authenticate with Okta"),", which is at the bottom of the page."),(0,a.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Okta IdP to validate your Rancher Okta configuration."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," If nothing seems to happen, it's likely because your browser blocked the pop-up. Make sure you disable the pop-up blocker for your rancher domain and whitelist it in any other extensions you might utilize.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Okta. Your users can now sign into Rancher using their Okta logins."),(0,a.kt)("admonition",{title:"SAML Provider Caveats:",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,a.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,a.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,a.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of."))))}m.isMDXComponent=!0}}]);
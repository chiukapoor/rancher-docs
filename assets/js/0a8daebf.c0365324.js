"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80688],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72441:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"Configure Okta (SAML)"},u=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml",title:"Configure Okta (SAML)",description:"If your organization uses Okta Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials.",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Configure Okta (SAML)"},sidebar:"tutorialSidebar",previous:{title:"Configure PingIdentity (SAML)",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-pingidentity"},next:{title:"Configuring OpenLDAP",permalink:"/pages-for-subheaders/configure-openldap"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Okta in Rancher",id:"configuring-okta-in-rancher",level:2}],m={toc:c};function d(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)("wrapper",o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If your organization uses Okta Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Okta integration only supports Service Provider initiated logins.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"In Okta, create a SAML Application with the settings below. See the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta"},"Okta documentation")," for help."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Single Sign on URL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/acs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Audience URI (SP Entity ID)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/metadata"))))),(0,r.kt)("h2",{id:"configuring-okta-in-rancher"},"Configuring Okta in Rancher"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Okta"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the ",(0,r.kt)("strong",{parentName:"p"},"Configure Okta Account")," form. The examples below describe how you can map Okta attributes from attribute statements to fields within Rancher."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the display name of users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that contains the user name/given name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name from an attribute statement that is unique to every user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute name in a group attribute statement that exposes your groups.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"A key/certificate pair used for Assertion Encryption.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata XML"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Identity Provider metadata")," file that you find in the application ",(0,r.kt)("inlineCode",{parentName:"td"},"Sign On")," section.")))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can generate a key/certificate pair using an openssl command. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.crt\n"))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you complete the ",(0,r.kt)("strong",{parentName:"p"},"Configure Okta Account")," form, click ",(0,r.kt)("strong",{parentName:"p"},"Enable"),"."),(0,r.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Okta IdP to validate your Rancher Okta configuration."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If nothing seems to happen, it's likely because your browser blocked the pop-up. Make sure you disable the pop-up blocker for your rancher domain and whitelist it in any other extensions you might utilize.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Okta. Your users can now sign into Rancher using their Okta logins."),(0,r.kt)("admonition",{title:"SAML Provider Caveats:",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,r.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,r.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,r.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of."))))}d.isMDXComponent=!0}}]);
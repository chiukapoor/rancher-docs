"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins"},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak.md",tags:[],version:"2.5",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins"},sidebar:"tutorialSidebar",previous:{title:"Configuring GitHub",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github"},next:{title:"Configuring PingIdentity (SAML)",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting the IDP Metadata",id:"getting-the-idp-metadata",level:2},{value:"Configuring Keycloak in Rancher",id:"configuring-keycloak-in-rancher",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",level:2},{value:"You are not redirected to Keycloak",id:"you-are-not-redirected-to-keycloak",level:3},{value:"Forbidden message displayed after IdP login",id:"forbidden-message-displayed-after-idp-login",level:3},{value:"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata",id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata",level:3},{value:"Keycloak Error: &quot;We&#39;re sorry, failed to process response&quot;",id:"keycloak-error-were-sorry-failed-to-process-response",level:3},{value:"Keycloak Error: &quot;We&#39;re sorry, invalid requester&quot;",id:"keycloak-error-were-sorry-invalid-requester",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=d("Tabs"),k=d("TabItem"),g={toc:u};function h(e){var{components:t}=e,l=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,l),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your organization uses Keycloak Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You must have a ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/"},"Keycloak IdP Server")," configured.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In Keycloak, create a ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"new SAML client"),", with the settings below. See the ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"Keycloak documentation")," for help."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Sign Documents")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,a.kt)("sup",null,"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Sign Assertions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,a.kt)("sup",null,"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"All other ",(0,a.kt)("inlineCode",{parentName:"td"},"ON/OFF")," Settings"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Client ID")),(0,a.kt)("td",{parentName:"tr",align:null},"Either ",(0,a.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata")," or the value configured in the ",(0,a.kt)("inlineCode",{parentName:"td"},"Entry ID Field")," of the Rancher Keycloak configuration",(0,a.kt)("sup",null,"2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Client Name")),(0,a.kt)("td",{parentName:"tr",align:null},"<CLIENT_NAME> (e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Client Protocol")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SAML"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Valid Redirect URI")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/acs"))))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"><sup>1</sup>: Optionally, you can enable either one or both of these settings.\n><sup>2</sup>: Rancher SAML metadata won't be generated until a SAML provider is configured and saved.\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(91906).Z,width:"1962",height:"2292"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the new SAML client, create Mappers to expose the users fields"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Add all "Builtin Protocol Mappers"\n',(0,a.kt)("img",{src:n(1051).Z,width:"2618",height:"898"})),(0,a.kt)("li",{parentName:"ul"},'Create a new "Group list" mapper to map the member attribute to a user\'s groups\n',(0,a.kt)("img",{src:n(19640).Z,width:"1522",height:"1070"}))))),(0,a.kt)("h2",{id:"getting-the-idp-metadata"},"Getting the IDP Metadata"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(k,{value:"Keycloak 5 and earlier",mdxType:"TabItem"},(0,a.kt)("p",null,"To get the IDP metadata, export a ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file from your Keycloak client.\nFrom the ",(0,a.kt)("strong",{parentName:"p"},"Installation")," tab, choose the ",(0,a.kt)("strong",{parentName:"p"},"SAML Metadata IDPSSODescriptor")," format option and download your file.")),(0,a.kt)(k,{value:"Keycloak 6-13",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Configure")," section, click the ",(0,a.kt)("strong",{parentName:"li"},"Realm Settings")," tab."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"General")," tab."),(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Endpoints")," field, click ",(0,a.kt)("strong",{parentName:"li"},"SAML 2.0 Identity Provider Metadata"),".")),(0,a.kt)("p",null,"Verify the IDP metadata contains the following attributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"\nxmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"\nxmlns:ds="http://www.w3.org/2000/09/xmldsig#"\n')),(0,a.kt)("p",null,"Some browsers, such as Firefox, may render/process the document such that the contents appear to have been modified, and some attributes appear to be missing. In this situation, use the raw response data that can be found using your browser."),(0,a.kt)("p",null,"The following is an example process for Firefox, but will vary slightly for other browsers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Press ",(0,a.kt)("strong",{parentName:"li"},"F12")," to access the developer console."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Network")," tab."),(0,a.kt)("li",{parentName:"ol"},"From the table, click the row containing ",(0,a.kt)("inlineCode",{parentName:"li"},"descriptor"),"."),(0,a.kt)("li",{parentName:"ol"},"From the details pane, click the ",(0,a.kt)("strong",{parentName:"li"},"Response")," tab."),(0,a.kt)("li",{parentName:"ol"},"Copy the raw response data.")),(0,a.kt)("p",null,"The XML obtained contains ",(0,a.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor")," as the root element. Rancher expects the root element to be ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityDescriptor")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor"),". So before passing this XML to Rancher, follow these steps to adjust it:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy all the attributes from ",(0,a.kt)("inlineCode",{parentName:"li"},"EntitiesDescriptor")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"EntityDescriptor")," that are not present."),(0,a.kt)("li",{parentName:"ol"},"Remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"<EntitiesDescriptor>")," tag from the beginning."),(0,a.kt)("li",{parentName:"ol"},"Remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"</EntitiesDescriptor>")," from the end of the xml.")),(0,a.kt)("p",null,"You are left with something similar as the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" entityID="https://{KEYCLOAK-URL}/auth/realms/{REALM-NAME}">\n....\n</EntityDescriptor>\n'))),(0,a.kt)(k,{value:"Keycloak 14+",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Configure")," section, click the ",(0,a.kt)("strong",{parentName:"li"},"Realm Settings")," tab."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"General")," tab."),(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Endpoints")," field, click ",(0,a.kt)("strong",{parentName:"li"},"SAML 2.0 Identity Provider Metadata"),".")),(0,a.kt)("p",null,"Verify the IDP metadata contains the following attributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"\nxmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"\nxmlns:ds="http://www.w3.org/2000/09/xmldsig#"\n')),(0,a.kt)("p",null,"Some browsers, such as Firefox, may render/process the document such that the contents appear to have been modified, and some attributes appear to be missing. In this situation, use the raw response data that can be found using your browser."),(0,a.kt)("p",null,"The following is an example process for Firefox, but will vary slightly for other browsers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Press ",(0,a.kt)("strong",{parentName:"li"},"F12")," to access the developer console."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Network")," tab."),(0,a.kt)("li",{parentName:"ol"},"From the table, click the row containing ",(0,a.kt)("inlineCode",{parentName:"li"},"descriptor"),"."),(0,a.kt)("li",{parentName:"ol"},"From the details pane, click the ",(0,a.kt)("strong",{parentName:"li"},"Response")," tab."),(0,a.kt)("li",{parentName:"ol"},"Copy the raw response data.")))),(0,a.kt)("h2",{id:"configuring-keycloak-in-rancher"},"Configuring Keycloak in Rancher"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,a.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Keycloak"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Complete the ",(0,a.kt)("strong",{parentName:"p"},"Configure Keycloak Account")," form. For help with filling the form, see the ",(0,a.kt)("a",{parentName:"p",href:"#configuration-reference"},"configuration reference"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After you complete the ",(0,a.kt)("strong",{parentName:"p"},"Configure Keycloak Account")," form, click ",(0,a.kt)("strong",{parentName:"p"},"Authenticate with Keycloak"),", which is at the bottom of the page."),(0,a.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Keycloak IdP to validate your Rancher Keycloak configuration."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You may have to disable your popup blocker to see the IdP login page.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Keycloak. Your users can now sign into Rancher using their Keycloak logins."),(0,a.kt)("admonition",{title:"SAML Provider Caveats:",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,a.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,a.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,a.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of."))),(0,a.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,a.kt)("td",{parentName:"tr",align:null},"The attribute that contains the display name of users. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"givenName"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,a.kt)("td",{parentName:"tr",align:null},"The attribute that contains the user name/given name. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"email"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,a.kt)("td",{parentName:"tr",align:null},"An attribute that is unique to every user. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"email"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,a.kt)("td",{parentName:"tr",align:null},"Make entries for managing group memberships. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"member"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Entity ID Field"),(0,a.kt)("td",{parentName:"tr",align:null},"The ID that needs to be configured as a client ID in the Keycloak client. ",(0,a.kt)("br",null),(0,a.kt)("br",null),"Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,a.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,a.kt)("td",{parentName:"tr",align:null},"A key/certificate pair to create a secure shell between Rancher and your IdP.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IDP-metadata"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"metadata.xml")," file that you exported from your IdP server.")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip:")," You can generate a key/certificate pair using an openssl command. For example:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"   openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.cert\n"))),(0,a.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,a.kt)("p",null,"If you are experiencing issues while testing the connection to the Keycloak server, first double-check the configuration option of your SAML client. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."),(0,a.kt)("h3",{id:"you-are-not-redirected-to-keycloak"},"You are not redirected to Keycloak"),(0,a.kt)("p",null,"When you click on ",(0,a.kt)("strong",{parentName:"p"},"Authenticate with Keycloak"),", you are not redirected to your IdP."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verify your Keycloak client configuration."),(0,a.kt)("li",{parentName:"ul"},"Make sure ",(0,a.kt)("inlineCode",{parentName:"li"},"Force Post Binding")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"OFF"),".")),(0,a.kt)("h3",{id:"forbidden-message-displayed-after-idp-login"},"Forbidden message displayed after IdP login"),(0,a.kt)("p",null,"You are correctly redirected to your IdP login page and you are able to enter your credentials, however you get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Forbidden")," message afterwards."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check the Rancher debug log."),(0,a.kt)("li",{parentName:"ul"},"If the log displays ",(0,a.kt)("inlineCode",{parentName:"li"},"ERROR: either the Response or Assertion must be signed"),", make sure either ",(0,a.kt)("inlineCode",{parentName:"li"},"Sign Documents")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Sign assertions")," is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"ON")," in your Keycloak client.")),(0,a.kt)("h3",{id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata"},"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata"),(0,a.kt)("p",null,"This is usually due to the metadata not being created until a SAML provider is configured.\nTry configuring and saving keycloak as your SAML provider and then accessing the metadata."),(0,a.kt)("h3",{id:"keycloak-error-were-sorry-failed-to-process-response"},'Keycloak Error: "We\'re sorry, failed to process response"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,a.kt)("li",{parentName:"ul"},"If the log displays ",(0,a.kt)("inlineCode",{parentName:"li"},"failed: org.keycloak.common.VerificationException: Client does not have a public key"),", set ",(0,a.kt)("inlineCode",{parentName:"li"},"Encrypt Assertions")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")),(0,a.kt)("h3",{id:"keycloak-error-were-sorry-invalid-requester"},'Keycloak Error: "We\'re sorry, invalid requester"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,a.kt)("li",{parentName:"ul"},"If the log displays ",(0,a.kt)("inlineCode",{parentName:"li"},"request validation failed: org.keycloak.common.VerificationException: SigAlg was null"),", set ",(0,a.kt)("inlineCode",{parentName:"li"},"Client Signature Required")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")))}h.isMDXComponent=!0},1051:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/keycloak-saml-client-builtin-mappers-00ff9682000bed21181c493512aaac6f.png"},91906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/keycloak-saml-client-configuration-c6ef99ce0f7510ce130ee88e940cc430.png"},19640:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/keycloak-saml-client-group-mapper-bc05499e6b7e1f429b0a97490c1d9ddd.png"}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52675],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),s=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),h=s(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(d,o(o({ref:e},u),{},{components:a})):n.createElement(d,o({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},69965:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>c});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={title:"Configuring Azure AD"},l=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad",title:"Configuring Azure AD",description:"Microsoft Graph API",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad.md",tags:[],version:"2.5",lastUpdatedAt:1680088482,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"Configuring Azure AD"},sidebar:"tutorialSidebar",previous:{title:"Configuring FreeIPA",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa"},next:{title:"Configuring GitHub",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github"}},u={},c=[{value:"Microsoft Graph API",id:"microsoft-graph-api",level:2},{value:"New User Setup",id:"new-user-setup",level:3},{value:"Azure Active Directory Configuration Outline",id:"azure-active-directory-configuration-outline",level:4},{value:"1. Register Rancher with Azure",id:"1-register-rancher-with-azure",level:4},{value:"2. Create a new client secret",id:"2-create-a-new-client-secret",level:4},{value:"3. Set Required Permissions for Rancher",id:"3-set-required-permissions-for-rancher",level:4},{value:"4. Copy Azure Application Data",id:"4-copy-azure-application-data",level:4},{value:"5. Configure Azure AD in Rancher",id:"5-configure-azure-ad-in-rancher",level:4},{value:"Migrating from Azure AD Graph API to Microsoft Graph API",id:"migrating-from-azure-ad-graph-api-to-microsoft-graph-api",level:3},{value:"Updating Endpoints in the Rancher UI",id:"updating-endpoints-in-the-rancher-ui",level:4},{value:"Air-Gapped Environments",id:"air-gapped-environments",level:4},{value:"Rolling Back the Migration",id:"rolling-back-the-migration",level:4},{value:"Global:",id:"global",level:4},{value:"China:",id:"china",level:4},{value:"Azure AD Graph API",id:"azure-ad-graph-api",level:2}],h=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},m=h("Tabs"),d=h("TabItem"),k={toc:c};function g(t){var{components:e}=t,p=o(t,["components"]);return(0,n.kt)("wrapper",i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},k,p),{components:e,mdxType:"MDXLayout"}),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(d,{value:"Rancher v2.5.16+",mdxType:"TabItem"},(0,n.kt)("h2",{id:"microsoft-graph-api"},"Microsoft Graph API"),(0,n.kt)("p",null,"Microsoft Graph API is now the flow through which you will set up Azure AD. The below sections will assist ",(0,n.kt)("a",{parentName:"p",href:"#new-user-setup"},"new users")," in configuring Azure AD with a new instance as well as assist existing Azure app owners in ",(0,n.kt)("a",{parentName:"p",href:"#migrating-from-azure-ad-graph-api-to-microsoft-graph-api"},"migrating to the new flow"),"."),(0,n.kt)("h3",{id:"new-user-setup"},"New User Setup"),(0,n.kt)("p",null,"If you have an instance of Active Directory (AD) hosted in Azure, you can configure Rancher to allow your users to log in using their AD accounts. Configuration of Azure AD external authentication requires you to make configurations in both Azure and Rancher."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisite:")," Have an instance of Azure AD configured.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Notes:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Azure AD integration only supports Service Provider initiated logins."),(0,n.kt)("li",{parentName:"ul"},"Most of this procedure takes place from the ",(0,n.kt)("a",{parentName:"li",href:"https://portal.azure.com/"},"Microsoft Azure Portal"),"."))),(0,n.kt)("h4",{id:"azure-active-directory-configuration-outline"},"Azure Active Directory Configuration Outline"),(0,n.kt)("p",null,"Configuring Rancher to allow your users to authenticate with their Azure AD accounts involves multiple procedures. Review the outline below before getting started."),(0,n.kt)("a",{id:"tip"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Tip:")," Before you start, we recommend creating an empty text file. You can use this file to copy values from Azure that you'll paste into Rancher later.")),(0,n.kt)("h4",{id:"1-register-rancher-with-azure"},"1. Register Rancher with Azure"),(0,n.kt)("p",null,"Before enabling Azure AD within Rancher, you must register Rancher with Azure."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Microsoft Azure")," as an administrative user. Configuration in future steps requires administrative access rights.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use search to open the ",(0,n.kt)("strong",{parentName:"p"},"App registrations")," service."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Open App Registrations",src:a(77816).Z,width:"964",height:"682"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"New registrations")," and complete the ",(0,n.kt)("strong",{parentName:"p"},"Create")," form."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"New App Registration",src:a(89099).Z,width:"1966",height:"1690"})),(0,n.kt)("p",{parentName:"li"},"3.1. Enter a ",(0,n.kt)("strong",{parentName:"p"},"Name")," (something like ",(0,n.kt)("inlineCode",{parentName:"p"},"Rancher"),")."),(0,n.kt)("a",{id:"3.2"}),(0,n.kt)("p",{parentName:"li"},"3.2. From ",(0,n.kt)("strong",{parentName:"p"},"Supported account types"),', select "Accounts in this organizational directory only (AzureADTest only - Single tenant)" This corresponds to the legacy app registration options.'),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")," In the updated Azure portal, Redirect URIs are synonymous with Reply URLs. In order to use Azure AD with Rancher, you must whitelist Rancher with Azure (previously done through Reply URLs). Therefore, you must ensure to fill in the Redirect URI with your Rancher server URL, to include the verification path as listed below.")),(0,n.kt)("p",{parentName:"li"},"3.3. In the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/reply-url"},(0,n.kt)("strong",{parentName:"a"},"Redirect URI"))," section, make sure ",(0,n.kt)("strong",{parentName:"p"},"Web")," is selected from the dropdown and enter the URL of your Rancher Server in the text box next to the dropdown. This Rancher server URL should be appended with the verification path: ",(0,n.kt)("inlineCode",{parentName:"p"},"<MY_RANCHER_URL>/verify-auth-azure"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Tip:")," You can find your personalized Azure Redirect URI (reply URL) in Rancher on the Azure AD Authentication page (Global View > Authentication > Web).")),(0,n.kt)("p",{parentName:"li"},"3.4. Click ",(0,n.kt)("strong",{parentName:"p"},"Register"),"."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")," It can take up to five minutes for this change to take affect, so don't be alarmed if you can't authenticate immediately after Azure AD configuration.")),(0,n.kt)("h4",{id:"2-create-a-new-client-secret"},"2. Create a new client secret"),(0,n.kt)("p",null,"From the Azure portal, create a client secret. Rancher will use this key to authenticate with Azure AD."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use search to open ",(0,n.kt)("strong",{parentName:"p"},"App registrations")," services. Then open the entry for Rancher that you created in the last procedure."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Open Rancher Registration",src:a(54197).Z,width:"827",height:"544"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the navigation pane on left, click ",(0,n.kt)("strong",{parentName:"p"},"Certificates and Secrets"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"New client secret"),".\n",(0,n.kt)("img",{alt:"Create new client secret",src:a(45103).Z,width:"2878",height:"1100"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"3.1. Enter a ",(0,n.kt)("strong",{parentName:"li"},"Description")," (something like ",(0,n.kt)("inlineCode",{parentName:"li"},"Rancher"),")."),(0,n.kt)("li",{parentName:"ul"},"3.2. Select duration for the key from the options under ",(0,n.kt)("strong",{parentName:"li"},"Expires"),". This drop-down sets the expiration date for the key. Shorter durations are more secure, but require you to create a new key after expiration."),(0,n.kt)("li",{parentName:"ul"},"3.3. Click ",(0,n.kt)("strong",{parentName:"li"},"Add")," (you don't need to enter a value\u2014it will automatically populate after you save).",(0,n.kt)("a",{id:"secret"})))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the key value and save it to an ",(0,n.kt)("a",{parentName:"p",href:"#tip"},"empty text file"),"."),(0,n.kt)("p",{parentName:"li"},"You'll enter this key into the Rancher UI later as your ",(0,n.kt)("strong",{parentName:"p"},"Application Secret"),"."),(0,n.kt)("p",{parentName:"li"},"You won't be able to access the key value again within the Azure UI."))),(0,n.kt)("h4",{id:"3-set-required-permissions-for-rancher"},"3. Set Required Permissions for Rancher"),(0,n.kt)("p",null,"Next, set API permissions for Rancher within Azure."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Ensure that you set the permissions of type Application and NOT Delegated. Otherwise, you may not be able to login to Azure AD. This issue will persist even after you disable/re-enable Azure AD and will require an hour wait, or manual deletion of a cache value to resolve.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the navigation pane on left, select ",(0,n.kt)("strong",{parentName:"p"},"API permissions"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Open Required Permissions",src:a(37919).Z,width:"2242",height:"1012"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add a permission"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Graph"),", select the following ",(0,n.kt)("strong",{parentName:"p"},"Application Permissions"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Group.Read.All")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"User.Read.All"))))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Return to ",(0,n.kt)("strong",{parentName:"p"},"API permissions")," in the left nav bar. From there, click ",(0,n.kt)("strong",{parentName:"p"},"Grant admin consent"),". Then click ",(0,n.kt)("strong",{parentName:"p"},"Yes"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," You must be signed in as an Azure administrator to successfully save your permission settings.")))),(0,n.kt)("h4",{id:"4-copy-azure-application-data"},"4. Copy Azure Application Data"),(0,n.kt)("p",null,"As your final step in Azure, copy the data that you'll use to configure Rancher for Azure AD authentication and paste it into an empty text file."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Obtain your Rancher ",(0,n.kt)("strong",{parentName:"p"},"Tenant ID"),"."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Use search to open ",(0,n.kt)("strong",{parentName:"li"},"App registrations"),".")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Open App Registrations",src:a(77816).Z,width:"964",height:"682"})),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the entry you created for Rancher.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the ",(0,n.kt)("strong",{parentName:"p"},"Directory ID")," and paste it into your ",(0,n.kt)("a",{parentName:"p",href:"#tip"},"text file"),"."))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Tenant ID",src:a(71633).Z,width:"851",height:"353"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You'll paste this value into Rancher as your ",(0,n.kt)("strong",{parentName:"li"},"Tenant ID"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Obtain your Rancher ",(0,n.kt)("strong",{parentName:"p"},"Application (Client) ID"),"."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use search to open ",(0,n.kt)("strong",{parentName:"p"},"App registrations")," (if not already there).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("strong",{parentName:"p"},"Overview"),", find the entry you created for Rancher.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the ",(0,n.kt)("strong",{parentName:"p"},"Application (Client) ID")," and paste it to your ",(0,n.kt)("a",{parentName:"p",href:"#tip"},"text file"),"."))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Application ID",src:a(48870).Z,width:"1746",height:"646"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Your endpoint options will typically be ",(0,n.kt)("a",{parentName:"p",href:"#global"},"Standard")," and ",(0,n.kt)("a",{parentName:"p",href:"#china"},"China"),". With the Standard option, perform the steps below and Rancher will take care of the rest."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Tenant ID"),", ",(0,n.kt)("strong",{parentName:"li"},"Application ID"),", and ",(0,n.kt)("strong",{parentName:"li"},"Application Secret")),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Enable"))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Standard Endpoint Options",src:a(38021).Z,width:"1317",height:"614"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"For Custom Endpoints:")),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning:")," Custom Endpoints are not supported nor fully tested by Rancher."),(0,n.kt)("p",{parentName:"blockquote"},"You will need to also manually enter the Graph, Token, and Auth Endpoints."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"From ",(0,n.kt)("b",null,"App registrations"),", click ",(0,n.kt)("b",null,"Endpoints"),":")),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"Click Endpoints",src:a(77887).Z,width:"1296",height:"272"})),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copy the following endpoints to your clipboard and paste them into your ",(0,n.kt)("a",{parentName:"p",href:"#tip"},"text file")," (these values will be your Rancher endpoint values). Make sure to copy the v1 version of the endpoints."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Microsoft Graph API endpoint")," (Graph Endpoint)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"OAuth 2.0 token endpoint (v1)")," (Token Endpoint)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"OAuth 2.0 authorization endpoint (v1)")," (Auth Endpoint)"))))),(0,n.kt)("h4",{id:"5-configure-azure-ad-in-rancher"},"5. Configure Azure AD in Rancher"),(0,n.kt)("p",null,"From the Rancher UI, enter information about your AD instance hosted in Azure to complete configuration."),(0,n.kt)("p",null,"Enter the values that you copied to your ",(0,n.kt)("a",{parentName:"p",href:"#tip"},"text file"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into Rancher.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,n.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"AzureAD"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the ",(0,n.kt)("strong",{parentName:"p"},"Configure Azure AD Account")," form using the information you copied while completing ",(0,n.kt)("a",{parentName:"p",href:"#4-copy-azure-application-data"},"Copy Azure Application Data"),"."),(0,n.kt)("p",{parentName:"li"},"The following table maps the values you copied in the Azure portal to the fields in Rancher."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Azure Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tenant ID"),(0,n.kt)("td",{parentName:"tr",align:null},"Directory ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Application ID"),(0,n.kt)("td",{parentName:"tr",align:null},"Application ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Application Secret"),(0,n.kt)("td",{parentName:"tr",align:null},"Key Value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/"},"https://login.microsoftonline.com/"))))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"For Custom Endpoints:")),(0,n.kt)("br",null),"The following table maps the custom config values you copied in the Azure portal to the fields in Rancher:",(0,n.kt)("table",{parentName:"blockquote"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Azure Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},"Microsoft Graph API Endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},"OAuth 2.0 Token Endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},"OAuth 2.0 Authorization Endpoint")))),(0,n.kt)("br",null),"**Important:** When entering the Graph Endpoint in a custom config, remove the tenant ID from the URL, like below:",(0,n.kt)("code",null,"http",(0,n.kt)("span",null,"s://g"),"raph.microsoft.com/",(0,n.kt)("del",null,"abb5adde-bee8-4821-8b03-e63efdc7701c"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Enable"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Azure Active Directory authentication is configured."),(0,n.kt)("h3",{id:"migrating-from-azure-ad-graph-api-to-microsoft-graph-api"},"Migrating from Azure AD Graph API to Microsoft Graph API"),(0,n.kt)("p",null,"Since ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/migrate-azure-ad-graph-overview"},"Azure AD Graph API")," was deprecated in June 2022 and will be retired at the end of 2022, users should update their Azure AD App to use the new ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/use-the-api"},"Microsoft Graph API")," in Rancher."),(0,n.kt)("h4",{id:"updating-endpoints-in-the-rancher-ui"},"Updating Endpoints in the Rancher UI"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")," Admins should create a ","[backup]","../../../..//new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md) right before they commit to the endpoint migration in Step 4 below.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update the permissions of your Azure AD app registration as described ",(0,n.kt)("a",{parentName:"p",href:"#3-set-required-permissions-for-rancher"},"here"),".\n",(0,n.kt)("strong",{parentName:"p"},"This is critical."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into Rancher.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Rancher UI homepage, make note of the banner at the top of screen that advises users to update their Azure AD authentication. Click on the link provided to do so."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Rancher UI Banner",src:a(57546).Z,width:"849",height:"465"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To complete the move to the new Microsoft Graph API, click ",(0,n.kt)("strong",{parentName:"p"},"Update Endpoint"),", then click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Ensure that your Azure app has a ",(0,n.kt)("a",{parentName:"p",href:"#3-set-required-permissions-for-rancher"},"new set of permissions")," before starting the update."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Update Endpoint",src:a(39592).Z,width:"1111",height:"800"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you receive the pop-up warning message, click ",(0,n.kt)("strong",{parentName:"p"},"Update"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Azure Update Pop-up",src:a(96381).Z,width:"1212",height:"672"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"#global"},"tables")," below for the full list of endpoint changes that Rancher performs. Admins do not need to do this manually."))),(0,n.kt)("h4",{id:"air-gapped-environments"},"Air-Gapped Environments"),(0,n.kt)("p",null,"In air-gapped environments, admins should ensure that their endpoints are ",(0,n.kt)("a",{parentName:"p",href:"#3.2"},"whitelisted")," since the Graph Endpoint URL is changing."),(0,n.kt)("h4",{id:"rolling-back-the-migration"},"Rolling Back the Migration"),(0,n.kt)("p",null,"If you need to roll back your migration, please note the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Admins are encouraged to use the proper restore process if they want to go back. Please see ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"backup docs"),", ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},"restore docs"),", and ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/examples"},"examples")," for reference.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Azure app owners who want to rotate the Application Secret will need to also rotate it in Rancher as Rancher does not automatically update the Application Secret when it is changed in Azure. In Rancher, note that it is stored in a Kubernetes secret called ",(0,n.kt)("inlineCode",{parentName:"p"},"azureadconfig-applicationsecret")," which is in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-global-data")," namespace.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Caution:")," If admins upgrade to Rancher v2.5.16 with an existing Azure AD setup and choose to disable the auth provider, they won't be able to restore the previous setup and also will not be able to set up Azure AD using the old flow. Admins will then need to register again with the new auth flow. Rancher now uses the new Graph API and, therefore, users need set up the ",(0,n.kt)("a",{parentName:"p",href:"#3-set-required-permissions-for-rancher"},"proper permissions in the Azure portal"),"."))),(0,n.kt)("h4",{id:"global"},"Global:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Deprecated Endpoints"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/%7BtenantID%7D/oauth2/authorize"},"https://login.microsoftonline.com/{tenantID}/oauth2/authorize"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/"},"https://login.microsoftonline.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://graph.windows.net/"},"https://graph.windows.net/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/%7BtenantID%7D/oauth2/token"},"https://login.microsoftonline.com/{tenantID}/oauth2/token"))))),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,n.kt)("th",{parentName:"tr",align:null},"New Endpoints"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/%7BtenantID%7D/oauth2/v2.0/authorize"},"https://login.microsoftonline.com/{tenantID}/oauth2/v2.0/authorize"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/"},"https://login.microsoftonline.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://graph.microsoft.com"},"https://graph.microsoft.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/%7BtenantID%7D/oauth2/v2.0/token"},"https://login.microsoftonline.com/{tenantID}/oauth2/v2.0/token"))))),(0,n.kt)("h4",{id:"china"},"China:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Deprecated Endpoints"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.chinacloudapi.cn/%7BtenantID%7D/oauth2/authorize"},"https://login.chinacloudapi.cn/{tenantID}/oauth2/authorize"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.chinacloudapi.cn/"},"https://login.chinacloudapi.cn/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://graph.chinacloudapi.cn/"},"https://graph.chinacloudapi.cn/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.chinacloudapi.cn/%7BtenantID%7D/oauth2/token"},"https://login.chinacloudapi.cn/{tenantID}/oauth2/token"))))),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,n.kt)("th",{parentName:"tr",align:null},"New Endpoints"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.partner.microsoftonline.cn/%7BtenantID%7D/oauth2/v2.0/authorize"},"https://login.partner.microsoftonline.cn/{tenantID}/oauth2/v2.0/authorize"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.partner.microsoftonline.cn/"},"https://login.partner.microsoftonline.cn/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://microsoftgraph.chinacloudapi.cn"},"https://microsoftgraph.chinacloudapi.cn"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://login.partner.microsoftonline.cn/%7BtenantID%7D/oauth2/v2.0/token"},"https://login.partner.microsoftonline.cn/{tenantID}/oauth2/v2.0/token")))))),(0,n.kt)(d,{value:"Rancher v2.5.0 - v2.5.15",mdxType:"TabItem"},(0,n.kt)("h2",{id:"azure-ad-graph-api"},"Azure AD Graph API"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/migrate-azure-ad-graph-overview"},"Azure AD Graph API")," was deprecated in June 2022 and will be retired at the end of 2022. We will update our docs to advise the community when it is retired. Rancher now uses the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/use-the-api"},"Microsoft Graph API")," as the new flow to set up Azure AD as the external auth provider.")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"For new users, or existing users who wish to migrate, refer to the new flow instructions on the ",(0,n.kt)("a",{href:"#microsoft-graph-api",target:"_blank"},"Rancher v2.5.16+")," tab.")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"For existing users who do not wish to upgrade to v2.5.16+ after the Azure AD Graph API is retired, they will need to either:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use the built-in Rancher auth or"),(0,n.kt)("li",{parentName:"ul"},"Use another third-party auth system and set that up in Rancher. Please see the ",(0,n.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/about-authentication"},"authentication docs")," to learn how to configure other open authentication providers."))))))))}g.isMDXComponent=!0},48870:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/application-client-id-f6be57f8c8de5edbf8c17f9660e19c60.png"},96381:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/azure-update-popup2-7e2e7493371bdd1cda1ca1123a7214d6.png"},77887:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/endpoints-a84e7e422cf92a96a602bf189985508f.png"},89099:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/new-app-registration-59bd7ed40c2a28a68136c698fa6ead86.png"},45103:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/new-client-secret-0b15bf6a6882b115021ee92df3b63adc.png"},54197:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/open-rancher-app-reg-5b20da33433cbef42e010c94d1fcf334.png"},39592:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/rancher-button-to-update2-09b2a93ae6beb7155532521c7bd337c9.png"},57546:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/rancher-ui-azure-update2-6b96e82264ef350c42a9c6203010dabf.png"},77816:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/search-app-registrations-d97391ce76fca5a39cc8c78e1e12f358.png"},37919:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/select-req-permissions-575ef9d493f6f5414b65b0ff7eb14c03.png"},38021:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tenant-application-id-secret2-1a6f5d454778651928914c3515bd8623.png"},71633:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tenant-id-a1296faf99b1f09e249af7f4e79acb02.png"}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(l,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={title:"Configuring Azure AD"},l=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad",title:"Configuring Azure AD",description:"Available as of v2.0.3",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Configuring Azure AD"},sidebar:"tutorialSidebar",previous:{title:"Configuring FreeIPA",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa"},next:{title:"Configuring GitHub",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github"}},u={},c=[{value:"Azure Active Directory Configuration Outline",id:"azure-active-directory-configuration-outline",level:2},{value:"1. Register Rancher with Azure",id:"1-register-rancher-with-azure",level:3},{value:"2. Create a new client secret",id:"2-create-a-new-client-secret",level:3},{value:"3. Set Required Permissions for Rancher",id:"3-set-required-permissions-for-rancher",level:3},{value:"4. Add a Reply URL",id:"4-add-a-reply-url",level:3},{value:"5. Copy Azure Application Data",id:"5-copy-azure-application-data",level:3},{value:"6. Configure Azure AD in Rancher",id:"6-configure-azure-ad-in-rancher",level:3}],m={toc:c};function k(e){var{components:t}=e,p=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,p),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.0.3")),(0,a.kt)("p",null,"If you have an instance of Active Directory (AD) hosted in Azure, you can configure Rancher to allow your users to log in using their AD accounts. Configuration of Azure AD external authentication requires you to make configurations in both Azure and Rancher."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Azure AD integration only supports Service Provider initiated logins.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")," Have an instance of Azure AD configured.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Most of this procedure takes place from the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Microsoft Azure Portal"),".")),(0,a.kt)("h2",{id:"azure-active-directory-configuration-outline"},"Azure Active Directory Configuration Outline"),(0,a.kt)("p",null,"Configuring Rancher to allow your users to authenticate with their Azure AD accounts involves multiple procedures. Review the outline below before getting started."),(0,a.kt)("a",{id:"tip"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip:")," Before you start, we recommend creating an empty text file. You can use this file to copy values from Azure that you'll paste into Rancher later.")),(0,a.kt)("h3",{id:"1-register-rancher-with-azure"},"1. Register Rancher with Azure"),(0,a.kt)("p",null,"Before enabling Azure AD within Rancher, you must register Rancher with Azure."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Microsoft Azure")," as an administrative user. Configuration in future steps requires administrative access rights.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use search to open the ",(0,a.kt)("strong",{parentName:"p"},"App registrations")," service."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Open App Registrations",src:n(77816).Z,width:"964",height:"682"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"New registrations")," and complete the ",(0,a.kt)("strong",{parentName:"p"},"Create")," form."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"New App Registration",src:n(89099).Z,width:"1966",height:"1690"})),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Name")," (something like ",(0,a.kt)("inlineCode",{parentName:"p"},"Rancher"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From ",(0,a.kt)("strong",{parentName:"p"},"Supported account types"),', select "Accounts in this organizational directory only (AzureADTest only - Single tenant)" This corresponds to the legacy app registration options.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Redirect URI")," section, make sure ",(0,a.kt)("strong",{parentName:"p"},"Web")," is selected from the dropdown and enter the URL of your Rancher Server in the text box next to the dropdown. This Rancher server URL should be appended with the verification path: ",(0,a.kt)("inlineCode",{parentName:"p"},"<MY_RANCHER_URL>/verify-auth-azure"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip:")," You can find your personalized Azure reply URL in Rancher on the Azure AD Authentication page (Global View > Security Authentication > Azure AD)."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Register"),"."))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," It can take up to five minutes for this change to take affect, so don't be alarmed if you can't authenticate immediately after Azure AD configuration.")),(0,a.kt)("h3",{id:"2-create-a-new-client-secret"},"2. Create a new client secret"),(0,a.kt)("p",null,"From the Azure portal, create a client secret. Rancher will use this key to authenticate with Azure AD."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use search to open ",(0,a.kt)("strong",{parentName:"p"},"App registrations")," services. Then open the entry for Rancher that you created in the last procedure."),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{alt:"Open Rancher Registration",src:n(83545).Z,width:"865",height:"565"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the navigation pane on left, click ",(0,a.kt)("strong",{parentName:"p"},"Certificates and Secrets"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"New client secret"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"![Create new client secret](/img/select-client-secret.png)\n\n1. Enter a **Description** (something like `Rancher`).\n\n1. Select duration for the key from the options under **Expires**. This drop-down sets the expiration date for the key. Shorter durations are more secure, but require you to create a new key after expiration.\n\n1. Click **Add** (you don't need to enter a value\u2014it will automatically populate after you save).\n")),(0,a.kt)("a",{id:"secret"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the key value and save it to an ",(0,a.kt)("a",{parentName:"p",href:"#tip"},"empty text file"),"."),(0,a.kt)("p",{parentName:"li"},"You'll enter this key into the Rancher UI later as your ",(0,a.kt)("strong",{parentName:"p"},"Application Secret"),"."),(0,a.kt)("p",{parentName:"li"},"You won't be able to access the key value again within the Azure UI."))),(0,a.kt)("h3",{id:"3-set-required-permissions-for-rancher"},"3. Set Required Permissions for Rancher"),(0,a.kt)("p",null,"Next, set API permissions for Rancher within Azure."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the navigation pane on left, select ",(0,a.kt)("strong",{parentName:"p"},"API permissions"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Open Required Permissions",src:n(30538).Z,width:"815",height:"485"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add a permission"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Azure Active Directory Graph"),", select the following ",(0,a.kt)("strong",{parentName:"p"},"Delegated Permissions"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Select API Permissions",src:n(54382).Z,width:"2734",height:"1414"})),(0,a.kt)("br",null),(0,a.kt)("br",null),"- **Access the directory as the signed-in user** - **Read directory data** - **Read all groups** - **Read all users' full profiles** - **Read all users' basic profiles** - **Sign in and read user profile**"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add permissions"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From ",(0,a.kt)("strong",{parentName:"p"},"API permissions"),", click ",(0,a.kt)("strong",{parentName:"p"},"Grant admin consent"),". Then click ",(0,a.kt)("strong",{parentName:"p"},"Yes"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You must be signed in as an Azure administrator to successfully save your permission settings.")))),(0,a.kt)("h3",{id:"4-add-a-reply-url"},"4. Add a Reply URL"),(0,a.kt)("p",null,"To use Azure AD with Rancher you must whitelist Rancher with Azure. You can complete this whitelisting by providing Azure with a reply URL for Rancher, which is your Rancher Server URL followed with a verification path."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Setting")," blade, select ",(0,a.kt)("strong",{parentName:"p"},"Reply URLs"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Azure: Enter Reply URL",src:n(15869).Z,width:"890",height:"510"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Reply URLs")," blade, enter the URL of your Rancher Server, appended with the verification path: ",(0,a.kt)("inlineCode",{parentName:"p"},"<MY_RANCHER_URL>/verify-auth-azure"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip:")," You can find your personalized Azure reply URL in Rancher on the Azure AD Authentication page (Global View > Security Authentication > Azure AD)."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Your reply URL is saved."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," It can take up to five minutes for this change to take affect, so don't be alarmed if you can't authenticate immediately after Azure AD configuration.")),(0,a.kt)("h3",{id:"5-copy-azure-application-data"},"5. Copy Azure Application Data"),(0,a.kt)("p",null,"As your final step in Azure, copy the data that you'll use to configure Rancher for Azure AD authentication and paste it into an empty text file."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Obtain your Rancher ",(0,a.kt)("strong",{parentName:"p"},"Tenant ID"),"."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use search to open the ",(0,a.kt)("strong",{parentName:"p"},"Azure Active Directory")," service."),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{alt:"Open Azure Active Directory",src:n(12658).Z,width:"402",height:"462"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the left navigation pane, open ",(0,a.kt)("strong",{parentName:"p"},"Overview"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the ",(0,a.kt)("strong",{parentName:"p"},"Directory ID")," and paste it into your ",(0,a.kt)("a",{parentName:"p",href:"#tip"},"text file"),"."),(0,a.kt)("p",{parentName:"li"},"You'll paste this value into Rancher as your ",(0,a.kt)("strong",{parentName:"p"},"Tenant ID"),".")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Obtain your Rancher ",(0,a.kt)("strong",{parentName:"p"},"Application ID"),"."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use search to open ",(0,a.kt)("strong",{parentName:"p"},"App registrations"),"."),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{alt:"Open App Registrations",src:n(77816).Z,width:"964",height:"682"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the entry you created for Rancher.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the ",(0,a.kt)("strong",{parentName:"p"},"Application ID")," and paste it to your ",(0,a.kt)("a",{parentName:"p",href:"#tip"},"text file"),".")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Obtain your Rancher ",(0,a.kt)("strong",{parentName:"p"},"Graph Endpoint"),", ",(0,a.kt)("strong",{parentName:"p"},"Token Endpoint"),", and ",(0,a.kt)("strong",{parentName:"p"},"Auth Endpoint"),"."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From ",(0,a.kt)("strong",{parentName:"p"},"App registrations"),", click ",(0,a.kt)("strong",{parentName:"p"},"Endpoints"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Click Endpoints",src:n(46842).Z,width:"553",height:"240"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the following endpoints to your clipboard and paste them into your ",(0,a.kt)("a",{parentName:"p",href:"#tip"},"text file")," (these values will be your Rancher endpoint values)."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Microsoft Graph API endpoint")," (Graph Endpoint)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OAuth 2.0 token endpoint (v1)")," (Token Endpoint)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OAuth 2.0 authorization endpoint (v1)")," (Auth Endpoint)")))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Copy the v1 version of the endpoints")),(0,a.kt)("h3",{id:"6-configure-azure-ad-in-rancher"},"6. Configure Azure AD in Rancher"),(0,a.kt)("p",null,"From the Rancher UI, enter information about your AD instance hosted in Azure to complete configuration."),(0,a.kt)("p",null,"Enter the values that you copied to your ",(0,a.kt)("a",{parentName:"p",href:"#tip"},"text file"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log into Rancher. From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,a.kt)("strong",{parentName:"p"},"Security > Authentication"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Azure AD"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Complete the ",(0,a.kt)("strong",{parentName:"p"},"Configure Azure AD Account")," form using the information you copied while completing ",(0,a.kt)("a",{parentName:"p",href:"#5-copy-azure-application-data"},"Copy Azure Application Data"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:")," When entering your Graph Endpoint, remove the tenant ID from the URL, like below."),(0,a.kt)("code",null,"http",(0,a.kt)("span",null,"s://g"),"raph.windows.net/",(0,a.kt)("del",null,"abb5adde-bee8-4821-8b03-e63efdc7701c"))),(0,a.kt)("p",{parentName:"li"},"The following table maps the values you copied in the Azure portal to the fields in Rancher."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Azure Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tenant ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Directory ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Application ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application Secret"),(0,a.kt)("td",{parentName:"tr",align:null},"Key Value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/"},"https://login.microsoftonline.com/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"Microsoft Azure AD Graph API Endpoint")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"OAuth 2.0 Token Endpoint")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"OAuth 2.0 Authorization Endpoint"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Authenticate with Azure"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Azure Active Directory authentication is configured."))}k.isMDXComponent=!0},46842:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/click-endpoints-73843667a5eb629dedd96dbbdb6aa7b7.png"},15869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enter-azure-reply-url-8d50e0b1f95ed7160104711cb2736fa8.png"},89099:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-app-registration-59bd7ed40c2a28a68136c698fa6ead86.png"},83545:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open-rancher-app-6f7230dd394150950485e58e53db8831.png"},77816:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-app-registrations-d97391ce76fca5a39cc8c78e1e12f358.png"},12658:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-azure-ad-29f1c76b9c312893fa934e4d05c79dfd.png"},54382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-required-permissions-2-30ae245f8b590009b00c0a11c620b9b6.png"},30538:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-required-permissions-1f7f80c666c7381ee943f9a0b7284a95.png"}}]);
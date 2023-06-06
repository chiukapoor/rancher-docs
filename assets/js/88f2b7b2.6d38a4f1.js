"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Receiver Configuration"},s=void 0,p={unversionedId:"reference-guides/monitoring-v2-configuration/receivers",id:"version-2.6/reference-guides/monitoring-v2-configuration/receivers",title:"Receiver Configuration",description:"The Alertmanager Config Secret contains the configuration of an Alertmanager instance that sends out notifications based on alerts it receives from Prometheus.",source:"@site/versioned_docs/version-2.6/reference-guides/monitoring-v2-configuration/receivers.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/receivers",permalink:"/v2.6/reference-guides/monitoring-v2-configuration/receivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/monitoring-v2-configuration/receivers.md",tags:[],version:"2.6",lastUpdatedAt:1685656966,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"Receiver Configuration"},sidebar:"tutorialSidebar",previous:{title:"Monitoring V2 Configuration",permalink:"/v2.6/pages-for-subheaders/monitoring-v2-configuration"},next:{title:"Route Configuration",permalink:"/v2.6/reference-guides/monitoring-v2-configuration/routes"}},c={},m=[{value:"Creating Receivers in the Rancher UI",id:"creating-receivers-in-the-rancher-ui",level:2},{value:"Receiver Configuration",id:"receiver-configuration",level:2},{value:"Native vs. Non-native Receivers",id:"native-vs-non-native-receivers",level:3},{value:"Slack",id:"slack",level:2},{value:"Email",id:"email",level:2},{value:"PagerDuty",id:"pagerduty",level:2},{value:"Opsgenie",id:"opsgenie",level:2},{value:"Webhook",id:"webhook",level:2},{value:"Custom",id:"custom",level:2},{value:"Teams",id:"teams",level:2},{value:"Enabling the Teams Receiver for Rancher Managed Clusters",id:"enabling-the-teams-receiver-for-rancher-managed-clusters",level:3},{value:"Configure the Teams Receiver",id:"configure-the-teams-receiver",level:3},{value:"SMS",id:"sms",level:2},{value:"Enabling the SMS Receiver for Rancher Managed Clusters",id:"enabling-the-sms-receiver-for-rancher-managed-clusters",level:3},{value:"Configure the SMS Receiver",id:"configure-the-sms-receiver",level:3},{value:"Configuring Multiple Receivers",id:"configuring-multiple-receivers",level:2},{value:"Configuring AlertmanagerConfig After A Chart Upgrade",id:"configuring-alertmanagerconfig-after-a-chart-upgrade",level:2},{value:"Example Alertmanager Configs",id:"example-alertmanager-configs",level:2},{value:"Slack",id:"slack-1",level:3},{value:"PagerDuty",id:"pagerduty-1",level:3},{value:"Example Route Config for CIS Scan Alerts",id:"example-route-config-for-cis-scan-alerts",level:2},{value:"Trusted CA for Notifiers",id:"trusted-ca-for-notifiers",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},g=u("Tabs"),d=u("TabItem"),h={toc:m};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#configuration-file"},"Alertmanager Config")," Secret contains the configuration of an Alertmanager instance that sends out notifications based on alerts it receives from Prometheus."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#3-how-alertmanager-works"},"this section."))),(0,a.kt)("h2",{id:"creating-receivers-in-the-rancher-ui"},"Creating Receivers in the Rancher UI"),(0,a.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The monitoring application needs to be installed."),(0,a.kt)("li",{parentName:"ul"},"If you configured monitoring with an existing Alertmanager Secret, it must have a format that is supported by Rancher's UI. Otherwise you will only be able to make changes based on modifying the Alertmanager Secret directly. Note: We are continuing to make enhancements to what kinds of Alertmanager Configurations we can support using the Routes and Receivers UI, so please ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/issues/new"},"file an issue")," if you have a request for a feature enhancement."))),(0,a.kt)("p",null,"To create notification receivers in the Rancher UI,"),(0,a.kt)(g,{mdxType:"Tabs"},(0,a.kt)(d,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the cluster where you want to create receivers. Click ",(0,a.kt)("strong",{parentName:"li"},"Monitoring -> Alerting -> AlertManagerConfigs"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Receiver"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Name")," for the receiver."),(0,a.kt)("li",{parentName:"ol"},"Configure one or more providers for the receiver. For help filling out the forms, refer to the configuration options below."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."))),(0,a.kt)(d,{value:"Rancher before v2.6.5",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the cluster where you want to create receivers. Click ",(0,a.kt)("strong",{parentName:"li"},"Monitoring")," and click ",(0,a.kt)("strong",{parentName:"li"},"Receiver"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a name for the receiver."),(0,a.kt)("li",{parentName:"ol"},"Configure one or more providers for the receiver. For help filling out the forms, refer to the configuration options below."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Alerts can be configured to send notifications to the receiver(s)."),(0,a.kt)("h2",{id:"receiver-configuration"},"Receiver Configuration"),(0,a.kt)("p",null,"The notification integrations are configured with the ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver"),", which is explained in the ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#receiver"},"Prometheus documentation.")),(0,a.kt)("h3",{id:"native-vs-non-native-receivers"},"Native vs. Non-native Receivers"),(0,a.kt)("p",null,"By default, AlertManager provides native integration with some receivers, which are listed in ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#receiver"},"this section.")," All natively supported receivers are configurable through the Rancher UI."),(0,a.kt)("p",null,"For notification mechanisms not natively supported by AlertManager, integration is achieved using the ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#webhook_config"},"webhook receiver.")," A list of third-party drivers providing such integrations can be found ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/operating/integrations/#alertmanager-webhook-receiver"},"here.")," Access to these drivers, and their associated integrations, is provided through the Alerting Drivers app. Once enabled, configuring non-native receivers can also be done through the Rancher UI."),(0,a.kt)("p",null,"Currently the Rancher Alerting Drivers app provides access to the following integrations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Teams, based on the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/idealista/prom2teams"},"prom2teams")," driver"),(0,a.kt)("li",{parentName:"ul"},"SMS, based on the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/messagebird/sachet"},"Sachet")," driver")),(0,a.kt)("p",null,"The following types of receivers can be configured in the Rancher UI:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#slack"},"Slack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#email"},"Email")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#pagerduty"},"PagerDuty")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#opsgenie"},"Opsgenie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#webhook"},"Webhook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#custom"},"Custom")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#teams"},"Teams")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"#sms"},"SMS"))),(0,a.kt)("p",null,"The custom receiver option can be used to configure any receiver in YAML that cannot be configured by filling out the other forms in the Rancher UI."),(0,a.kt)("h2",{id:"slack"},"Slack"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter your Slack webhook URL. For instructions to create a Slack webhook, see the ",(0,a.kt)("a",{parentName:"td",href:"https://get.slack.help/hc/en-us/articles/115005265063-Incoming-WebHooks-for-Slack"},"Slack documentation."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Default Channel"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the name of the channel that you want to send alert notifications in the following format: ",(0,a.kt)("inlineCode",{parentName:"td"},"#<channelname>"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Proxy for the webhook notifications.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,a.kt)("td",{parentName:"tr",align:null},"Bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,a.kt)("h2",{id:"email"},"Email"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Default Recipient Address"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"The email address that will receive notifications.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,a.kt)("td",{parentName:"tr",align:null},"Bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,a.kt)("p",null,"SMTP options:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sender"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter an email address available on your SMTP mail server that you want to send the notification from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Host"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the IP address or hostname for your SMTP server. Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"smtp.email.com"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use TLS"),(0,a.kt)("td",{parentName:"tr",align:null},"Bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Use TLS for encryption.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Username"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter a username to authenticate with the SMTP server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Password"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter a password to authenticate with the SMTP server.")))),(0,a.kt)("h2",{id:"pagerduty"},"PagerDuty"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Integration Type"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Events API v2")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"Prometheus"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Default Integration Key"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"For instructions to get an integration key, see the ",(0,a.kt)("a",{parentName:"td",href:"https://www.pagerduty.com/docs/guides/prometheus-integration-guide/"},"PagerDuty documentation."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Proxy for the PagerDuty notifications.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,a.kt)("td",{parentName:"tr",align:null},"Bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,a.kt)("h2",{id:"opsgenie"},"Opsgenie"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API Key"),(0,a.kt)("td",{parentName:"tr",align:null},"For instructions to get an API key, refer to the ",(0,a.kt)("a",{parentName:"td",href:"https://docs.opsgenie.com/docs/api-key-management"},"Opsgenie documentation."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Proxy for the Opsgenie notifications.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,a.kt)("p",null,"Opsgenie Responders:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Type"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Schedule, Team, User, or Escalation. For more information on alert responders, refer to the ",(0,a.kt)("a",{parentName:"td",href:"https://docs.opsgenie.com/docs/alert-recipients-and-teams"},"Opsgenie documentation."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Send To"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Id, Name, or Username of the Opsgenie recipient.")))),(0,a.kt)("h2",{id:"webhook"},"Webhook"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Webhook URL for the app of your choice.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Proxy URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Proxy for the webhook notification.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Send Resolved Alerts"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to send a follow-up notification if an alert has been resolved (e.g. ","[Resolved]"," High CPU Usage).")))),(0,a.kt)("h2",{id:"custom"},"Custom"),(0,a.kt)("p",null,"The YAML provided here will be directly appended to your receiver within the Alertmanager Config Secret."),(0,a.kt)("h2",{id:"teams"},"Teams"),(0,a.kt)("h3",{id:"enabling-the-teams-receiver-for-rancher-managed-clusters"},"Enabling the Teams Receiver for Rancher Managed Clusters"),(0,a.kt)("p",null,"The Teams receiver is not a native receiver and must be enabled before it can be used. You can enable the Teams receiver for a Rancher managed cluster by going to the Apps page and installing the rancher-alerting-drivers app with the Teams option selected."),(0,a.kt)(g,{groupId:"rancher-version",mdxType:"Tabs"},(0,a.kt)(d,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install rancher-alerting-drivers and click ",(0,a.kt)("strong",{parentName:"li"},"Apps"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Alerting Drivers")," app."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Helm Deploy Options")," tab."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Teams")," option and click ",(0,a.kt)("strong",{parentName:"li"},"Install"),"."),(0,a.kt)("li",{parentName:"ol"},"Take note of the namespace used as it will be required in a later step."))),(0,a.kt)(d,{value:"Rancher before v2.6.5",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install rancher-alerting-drivers and click ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Alerting Drivers")," app."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Helm Deploy Options")," tab."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Teams")," option and click ",(0,a.kt)("strong",{parentName:"li"},"Install"),"."),(0,a.kt)("li",{parentName:"ol"},"Take note of the namespace used as it will be required in a later step.")))),(0,a.kt)("h3",{id:"configure-the-teams-receiver"},"Configure the Teams Receiver"),(0,a.kt)("p",null,"The Teams receiver can be configured by updating its ConfigMap. For example, the following is a minimal Teams receiver configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"[Microsoft Teams]\nteams-instance-1: https://your-teams-webhook-url\n")),(0,a.kt)("p",null,"When configuration is complete, add the receiver using the steps in ",(0,a.kt)("a",{parentName:"p",href:"#creating-receivers-in-the-rancher-ui"},"this section"),"."),(0,a.kt)("p",null,"Use the example below as the URL where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ns-1")," is replaced with the namespace where the ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")," app is installed")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"url: http://rancher-alerting-drivers-prom2teams.ns-1.svc:8089/v2/teams-instance-1\n")),(0,a.kt)("h2",{id:"sms"},"SMS"),(0,a.kt)("h3",{id:"enabling-the-sms-receiver-for-rancher-managed-clusters"},"Enabling the SMS Receiver for Rancher Managed Clusters"),(0,a.kt)("p",null,"The SMS receiver is not a native receiver and must be enabled before it can be used. You can enable the SMS receiver for a Rancher managed cluster by going to the Apps page and installing the rancher-alerting-drivers app with the SMS option selected."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to install ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")," and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click"),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Alerting Drivers")," app."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Helm Deploy Options")," tab"),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"SMS")," option and click ",(0,a.kt)("strong",{parentName:"li"},"Install"),"."),(0,a.kt)("li",{parentName:"ol"},"Take note of the namespace used as it will be required in a later step.")),(0,a.kt)("h3",{id:"configure-the-sms-receiver"},"Configure the SMS Receiver"),(0,a.kt)("p",null,"The SMS receiver can be configured by updating its ConfigMap. For example, the following is a minimal SMS receiver configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"providers:\n  telegram:\n    token: 'your-token-from-telegram'\n\nreceivers:\n- name: 'telegram-receiver-1'\n  provider: 'telegram'\n  to:\n    - '123456789'\n")),(0,a.kt)("p",null,"When configuration is complete, add the receiver using the steps in ",(0,a.kt)("a",{parentName:"p",href:"#creating-receivers-in-the-rancher-ui"},"this section"),"."),(0,a.kt)("p",null,"Use the example below as the name and URL, where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the name assigned to the receiver, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"telegram-receiver-1"),", must match the name in the ",(0,a.kt)("inlineCode",{parentName:"li"},"receivers.name")," field in the ConfigMap, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"telegram-receiver-1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ns-1")," in the URL is replaced with the namespace where the ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")," app is installed")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: telegram-receiver-1\nurl http://rancher-alerting-drivers-sachet.ns-1.svc:9876/alert\n")),(0,a.kt)("h2",{id:"configuring-multiple-receivers"},"Configuring Multiple Receivers"),(0,a.kt)("p",null,"By editing the forms in the Rancher UI, you can set up a Receiver resource with all the information Alertmanager needs to send alerts to your notification system."),(0,a.kt)("p",null,"It is also possible to send alerts to multiple notification systems. One way is to configure the Receiver using custom YAML, in which case you can add the configuration for multiple notification systems, as long as you are sure that both systems should receive the same messages."),(0,a.kt)("p",null,"You can also set up multiple receivers by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"continue")," option for a route, so that the alerts sent to a receiver continue being evaluated in the next level of the routing tree, which could contain another receiver."),(0,a.kt)("h2",{id:"configuring-alertmanagerconfig-after-a-chart-upgrade"},"Configuring AlertmanagerConfig After A Chart Upgrade"),(0,a.kt)("p",null,"If you have a cluster that uses SMS or Microsoft Teams alerts, and upgrade the Monitoring chart from 100.1.3+up19.0.3 to 100.2.0+up40.1.2, you may no longer receive alerts. This is due to a change to an upstream change to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/"},"Prometheus Operator")," that helps prevent naming collisions."),(0,a.kt)("p",null,"You must manually edit the configuration map to continue to receive alerts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"\u2630")," and select the relevant cluster."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"More Resources")," > ",(0,a.kt)("strong",{parentName:"li"},"Core")," > ",(0,a.kt)("strong",{parentName:"li"},"ConfigMaps"),"."),(0,a.kt)("li",{parentName:"ol"},"Find the row corresponding to the ConfigMap for ",(0,a.kt)("strong",{parentName:"li"},"Sachet")," (for SMS alerts) or ",(0,a.kt)("strong",{parentName:"li"},"prom2teams")," (for Microsoft Teams alerts). Click the ",(0,a.kt)("strong",{parentName:"li"},"\u22ee")," and select ",(0,a.kt)("strong",{parentName:"li"},"Edit YAML"),"."),(0,a.kt)("li",{parentName:"ol"},"Update the delimiters in the receiver's ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," field, replacing ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," characters with ",(0,a.kt)("inlineCode",{parentName:"li"},"/"),", according to the following scheme: ",(0,a.kt)("inlineCode",{parentName:"li"},"<namespace>\\<alertManagerConfig>\\<receiverName>"),". For example, if the receiver's name is ",(0,a.kt)("inlineCode",{parentName:"li"},"default-amc-test-prom2sms"),", update it to ",(0,a.kt)("inlineCode",{parentName:"li"},"default/amc-test/prom2sms"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),"."),(0,a.kt)("li",{parentName:"ol"},"Redeploy the workloads associated with Alertmanager and Sachet or prom2teams, to ensure that they receive the updated configuration.")),(0,a.kt)("h2",{id:"example-alertmanager-configs"},"Example Alertmanager Configs"),(0,a.kt)("h3",{id:"slack-1"},"Slack"),(0,a.kt)("p",null,"To set up notifications via Slack, the following Alertmanager Config YAML can be placed into the ",(0,a.kt)("inlineCode",{parentName:"p"},"alertmanager.yaml")," key of the Alertmanager Config Secret, where the ",(0,a.kt)("inlineCode",{parentName:"p"},"api_url")," should be updated to use your Webhook URL from Slack:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"route:\n  group_by: ['job']\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 3h\n  receiver: 'slack-notifications'\nreceivers:\n- name: 'slack-notifications'\n  slack_configs:\n  - send_resolved: true\n    text: '{{ template \"slack.rancher.text\" . }}'\n    api_url: <user-provided slack webhook url here>\ntemplates:\n- /etc/alertmanager/config/*.tmpl\n")),(0,a.kt)("h3",{id:"pagerduty-1"},"PagerDuty"),(0,a.kt)("p",null,"To set up notifications via PagerDuty, use the example below from the ",(0,a.kt)("a",{parentName:"p",href:"https://www.pagerduty.com/docs/guides/prometheus-integration-guide/"},"PagerDuty documentation")," as a guideline. This example sets up a route that captures alerts for a database service and sends them to a receiver linked to a service that will directly notify the DBAs in PagerDuty, while all other alerts will be directed to a default receiver with a different PagerDuty integration key."),(0,a.kt)("p",null,"The following Alertmanager Config YAML can be placed into the ",(0,a.kt)("inlineCode",{parentName:"p"},"alertmanager.yaml")," key of the Alertmanager Config Secret. The ",(0,a.kt)("inlineCode",{parentName:"p"},"service_key"),' should be updated to use your PagerDuty integration key and can be found as per the "Integrating with Global Event Routing" section of the PagerDuty documentation. For the full list of configuration options, refer to the ',(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#pagerduty_config"},"Prometheus documentation"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"route:\n group_by: [cluster]\n receiver: 'pagerduty-notifications'\n group_interval: 5m\n routes:\n  - match:\n      service: database\n    receiver: 'database-notifcations'\n\nreceivers:\n- name: 'pagerduty-notifications'\n  pagerduty_configs:\n  - service_key: 'primary-integration-key'\n\n- name: 'database-notifcations'\n  pagerduty_configs:\n  - service_key: 'database-integration-key'\n")),(0,a.kt)("h2",{id:"example-route-config-for-cis-scan-alerts"},"Example Route Config for CIS Scan Alerts"),(0,a.kt)("p",null,"While configuring the routes for ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," alerts, you can specify the matching using the key-value pair ",(0,a.kt)("inlineCode",{parentName:"p"},"job: rancher-cis-scan"),"."),(0,a.kt)("p",null,"For example, the following example route configuration could be used with a Slack receiver named ",(0,a.kt)("inlineCode",{parentName:"p"},"test-cis"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  receiver: test-cis\n  group_by:\n#    - string\n  group_wait: 30s\n  group_interval: 30s\n  repeat_interval: 30s\n  match:\n    job: rancher-cis-scan\n#    key: string\n  match_re:\n    {}\n#    key: string\n")),(0,a.kt)("p",null,"For more information on enabling alerting for ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark"),", see ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark"},"this section.")),(0,a.kt)("h2",{id:"trusted-ca-for-notifiers"},"Trusted CA for Notifiers"),(0,a.kt)("p",null,"If you need to add a trusted CA to your notifier, follow the steps in ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/monitoring-v2-configuration/helm-chart-options#trusted-ca-for-notifiers"},"this section.")))}k.isMDXComponent=!0}}]);
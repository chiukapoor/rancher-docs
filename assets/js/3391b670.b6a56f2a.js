"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Enable Monitoring"},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",title:"Enable Monitoring",description:"As an administrator or cluster owner, you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",tags:[],version:"2.5",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Enable Monitoring"},sidebar:"tutorialSidebar",previous:{title:"Monitoring Guides",permalink:"/v2.5/pages-for-subheaders/monitoring-alerting-guides"},next:{title:"Uninstall Monitoring",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Setting Resource Limits and Requests",id:"setting-resource-limits-and-requests",level:2},{value:"Install the Monitoring Application",id:"install-the-monitoring-application",level:2},{value:"Enable Monitoring for use without SSL",id:"enable-monitoring-for-use-without-ssl",level:3},{value:"Enable Monitoring for use with SSL",id:"enable-monitoring-for-use-with-ssl",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=m("Tabs"),g=m("TabItem"),h={toc:p};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As an ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," or ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),", you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster."),(0,r.kt)("p",null,"This page describes how to enable monitoring and alerting within a cluster using the new monitoring application."),(0,r.kt)("p",null,"You can enable monitoring with or without SSL."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure that you are allowing traffic on port 9796 for each of your nodes because Prometheus will scrape metrics from here."),(0,r.kt)("li",{parentName:"ul"},"Make sure your cluster fulfills the resource requirements. The cluster should have at least 1950Mi memory available, 2700m CPU, and 50Gi storage. A breakdown of the resource limits and requests is ",(0,r.kt)("a",{parentName:"li",href:"/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"here.")),(0,r.kt)("li",{parentName:"ul"},"When installing monitoring on an RKE cluster using RancherOS or Flatcar Linux nodes, change the etcd node certificate directory to ",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/rke/etc/kubernetes/ssl"),"."),(0,r.kt)("li",{parentName:"ul"},"For clusters provisioned with the RKE CLI and the address is set to a hostname instead of an IP address, set ",(0,r.kt)("inlineCode",{parentName:"li"},"rkeEtcd.clients.useLocalhost")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," during the Values configuration step of the installation. The YAML snippet will look like the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"rkeEtcd:\n  clients:\n    useLocalhost: true\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If you want to set up Alertmanager, Grafana or Ingress, it has to be done with the settings on the Helm chart deployment. It's problematic to create Ingress outside the deployment.")),(0,r.kt)("h2",{id:"setting-resource-limits-and-requests"},"Setting Resource Limits and Requests"),(0,r.kt)("p",null,"The resource requests and limits can be configured when installing ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),".  To configure Prometheus resources from the Rancher UI, click ",(0,r.kt)("strong",{parentName:"p"},"Apps & Marketplace > Monitoring")," in the upper left corner."),(0,r.kt)("p",null,"For more information about the default limits, see ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"this page.")),(0,r.kt)("h2",{id:"install-the-monitoring-application"},"Install the Monitoring Application"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(g,{value:"Rancher v2.5.8",mdxType:"TabItem"},(0,r.kt)("h3",{id:"enable-monitoring-for-use-without-ssl"},"Enable Monitoring for use without SSL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install monitoring and click ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Apps.")),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," app."),(0,r.kt)("li",{parentName:"ol"},"Optional: Click ",(0,r.kt)("strong",{parentName:"li"},"Chart Options")," and configure alerting, Prometheus and Grafana. For help, refer to the ",(0,r.kt)("a",{parentName:"li",href:"/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options"},"configuration reference.")),(0,r.kt)("li",{parentName:"ol"},"Scroll to the bottom of the Helm chart README and click ",(0,r.kt)("strong",{parentName:"li"},"Install."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,r.kt)("h3",{id:"enable-monitoring-for-use-with-ssl"},"Enable Monitoring for use with SSL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Follow the steps on ",(0,r.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"this page")," to create a secret in order for SSL to be used for alerts.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The secret should be created in the ",(0,r.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace. If it doesn't exist, create it first."),(0,r.kt)("li",{parentName:"ul"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"ca"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cert"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," files to the secret.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install monitoring and click ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Apps.")),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," app."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Alerting"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Additional Secrets")," and add the secrets created earlier.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/monitoring-v2-configuration/receivers#creating-receivers-in-the-rancher-ui"},"creating a receiver,")," SSL-enabled receivers such as email or webhook will have a ",(0,r.kt)("strong",{parentName:"p"},"SSL")," section with fields for ",(0,r.kt)("strong",{parentName:"p"},"CA File Path"),", ",(0,r.kt)("strong",{parentName:"p"},"Cert File Path"),", and ",(0,r.kt)("strong",{parentName:"p"},"Key File Path"),". Fill in these fields with the paths to each of ",(0,r.kt)("inlineCode",{parentName:"p"},"ca"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cert"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),". The path will be of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/name-of-file-in-secret"),"."),(0,r.kt)("p",null,"For example, if you created a secret with these key-value pairs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"ca.crt=`base64-content`\ncert.pem=`base64-content`\nkey.pfx=`base64-content`\n")),(0,r.kt)("p",null,"Then ",(0,r.kt)("strong",{parentName:"p"},"Cert File Path")," would be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/cert.pem"),".")),(0,r.kt)(g,{value:"Rancher v2.5.0-2.5.7",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install monitoring and click ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Apps.")),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," app."),(0,r.kt)("li",{parentName:"ol"},"Optional: Click ",(0,r.kt)("strong",{parentName:"li"},"Chart Options")," and configure alerting, Prometheus and Grafana. For help, refer to the ",(0,r.kt)("a",{parentName:"li",href:"/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options"},"configuration reference.")),(0,r.kt)("li",{parentName:"ol"},"Scroll to the bottom of the Helm chart README and click ",(0,r.kt)("strong",{parentName:"li"},"Install."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."))))}f.isMDXComponent=!0}}]);
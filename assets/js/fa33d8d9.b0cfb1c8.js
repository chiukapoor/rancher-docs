"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"Advanced Options for Docker Installs"},l=void 0,s={unversionedId:"reference-guides/single-node-rancher-in-docker/advanced-options",id:"version-2.0-2.4/reference-guides/single-node-rancher-in-docker/advanced-options",title:"Advanced Options for Docker Installs",description:"When installing Rancher, there are several advanced options that can be enabled:",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/single-node-rancher-in-docker/advanced-options.md",sourceDirName:"reference-guides/single-node-rancher-in-docker",slug:"/reference-guides/single-node-rancher-in-docker/advanced-options",permalink:"/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/advanced-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/single-node-rancher-in-docker/advanced-options.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Advanced Options for Docker Installs"},sidebar:"tutorialSidebar",previous:{title:"HTTP Proxy Configuration",permalink:"/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/http-proxy-configuration"},next:{title:"Installation References",permalink:"/v2.0-v2.4/pages-for-subheaders/installation-references"}},p={},d=[{value:"Custom CA Certificate",id:"custom-ca-certificate",level:3},{value:"API Audit Log",id:"api-audit-log",level:3},{value:"TLS settings",id:"tls-settings",level:3},{value:"Air Gap",id:"air-gap",level:3},{value:"Persistent Data",id:"persistent-data",level:3},{value:"Running <code>rancher/rancher</code> and <code>rancher/rancher-agent</code> on the Same Node",id:"running-rancherrancher-and-rancherrancher-agent-on-the-same-node",level:3}],u={toc:d};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When installing Rancher, there are several ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/resources"},"advanced options")," that can be enabled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-ca-certificate"},"Custom CA Certificate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api-audit-log"},"API Audit Log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tls-settings"},"TLS Settings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#air-gap"},"Air Gap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#persistent-data"},"Persistent Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-rancher-rancher-and-rancher-rancher-agent-on-the-same-node"},"Running ",(0,r.kt)("inlineCode",{parentName:"a"},"rancher/rancher")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"rancher/rancher-agent")," on the Same Node"))),(0,r.kt)("h3",{id:"custom-ca-certificate"},"Custom CA Certificate"),(0,r.kt)("p",null,"If you want to configure Rancher to use a CA root certificate to be used when validating services, you would start the Rancher container sharing the directory that contains the CA root certificate."),(0,r.kt)("p",null,"Use the command example to start a Rancher container with your private CA certificates mounted."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The volume flag (",(0,r.kt)("inlineCode",{parentName:"li"},"-v"),") should specify the host directory containing the CA root certificates."),(0,r.kt)("li",{parentName:"ul"},"The environment variable flag (",(0,r.kt)("inlineCode",{parentName:"li"},"-e"),") in combination with ",(0,r.kt)("inlineCode",{parentName:"li"},"SSL_CERT_DIR")," and directory declares an environment variable that specifies the mounted CA root certificates directory location inside the container."),(0,r.kt)("li",{parentName:"ul"},"Passing environment variables to the Rancher container can be done using ",(0,r.kt)("inlineCode",{parentName:"li"},"-e KEY=VALUE")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--env KEY=VALUE"),"."),(0,r.kt)("li",{parentName:"ul"},"Mounting a host directory inside the container can be done using ",(0,r.kt)("inlineCode",{parentName:"li"},"-v host-source-directory:container-destination-directory")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--volume host-source-directory:container-destination-directory"),".")),(0,r.kt)("p",null,"The example below is based on having the CA root certificates in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/host/certs")," directory on the host and mounting this directory on ",(0,r.kt)("inlineCode",{parentName:"p"},"/container/certs")," inside the Rancher container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /host/certs:/container/certs \\\n  -e SSL_CERT_DIR="/container/certs" \\\n  rancher/rancher:latest\n')),(0,r.kt)("h3",{id:"api-audit-log"},"API Audit Log"),(0,r.kt)("p",null,"The API Audit Log records all the user and system transactions made through Rancher server."),(0,r.kt)("p",null,"The API Audit Log writes to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/auditlog")," inside the rancher container by default. Share that directory as a volume and set your ",(0,r.kt)("inlineCode",{parentName:"p"},"AUDIT_LEVEL")," to enable the log."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"},"API Audit Log")," for more information and options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /var/log/rancher/auditlog:/var/log/auditlog \\\n  -e AUDIT_LEVEL=1 \\\n  rancher/rancher:latest\n")),(0,r.kt)("h3",{id:"tls-settings"},"TLS settings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.1.7")),(0,r.kt)("p",null,"To set a different TLS configuration, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CATTLE_TLS_MIN_VERSION")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CATTLE_TLS_CIPHERS")," environment variables. For example, to configure TLS 1.0 as minimum accepted TLS version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -e CATTLE_TLS_MIN_VERSION="1.0" \\\n  rancher/rancher:latest\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/tls-settings"},"TLS settings")," for more information and options."),(0,r.kt)("h3",{id:"air-gap"},"Air Gap"),(0,r.kt)("p",null,"If you are visiting this page to complete an air gap installation, you must prepend your private registry URL to the server tag when running the installation command in the option that you choose. Add ",(0,r.kt)("inlineCode",{parentName:"p"},"<REGISTRY.DOMAIN.COM:PORT>")," with your private registry URL in front of ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher/rancher:latest"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," <REGISTRY.DOMAIN.COM:PORT>/rancher/rancher:latest\n")),(0,r.kt)("h3",{id:"persistent-data"},"Persistent Data"),(0,r.kt)("p",null,"Rancher uses etcd as a datastore. When Rancher is installed with Docker, the embedded etcd is being used. The persistent data is at the following path in the container: ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher"),"."),(0,r.kt)("p",null,"You can bind mount a host volume to this location to preserve data on the host it is running on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /opt/rancher:/var/lib/rancher \\\n  rancher/rancher:latest\n")),(0,r.kt)("h3",{id:"running-rancherrancher-and-rancherrancher-agent-on-the-same-node"},"Running ",(0,r.kt)("inlineCode",{parentName:"h3"},"rancher/rancher")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"rancher/rancher-agent")," on the Same Node"),(0,r.kt)("p",null,"In the situation where you want to use a single node to run Rancher and to be able to add the same node to a cluster, you have to adjust the host ports mapped for the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container."),(0,r.kt)("p",null,"If a node is added to a cluster, it deploys the nginx ingress controller which will use port 80 and 443. This will conflict with the default ports we advise to expose for the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container."),(0,r.kt)("p",null,"Please note that this setup is not recommended for production use, but can be convenient for development/demo purposes."),(0,r.kt)("p",null,"To change the host ports mapping, replace the following part ",(0,r.kt)("inlineCode",{parentName:"p"},"-p 80:80 -p 443:443")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"-p 8080:80 -p 8443:443"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 8080:80 -p 8443:443 \\\n  rancher/rancher:latest\n")))}h.isMDXComponent=!0}}]);
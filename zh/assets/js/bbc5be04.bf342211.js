"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Adding Kubernetes TLS Secrets",description:"Read about how to populate the Kubernetes TLS secret for a Rancher installation"},s=void 0,l={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets",title:"Adding Kubernetes TLS Secrets",description:"Read about how to populate the Kubernetes TLS secret for a Rancher installation",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1675192695,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{title:"Adding Kubernetes TLS Secrets",description:"Read about how to populate the Kubernetes TLS secret for a Rancher installation"},sidebar:"tutorialSidebar",previous:{title:"4.  Install Rancher",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm-rancher"},next:{title:"Chart Options",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/chart-options"}},p={},u=[{value:"Using a Private CA Signed Certificate",id:"using-a-private-ca-signed-certificate",level:3}],d={toc:u};function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace with the certificate and key."),(0,r.kt)("p",null,"Combine the server certificate followed by any intermediate certificate(s) needed into a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.crt"),". Copy your certificate key into a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"tls")," secret type to create the secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If you want to replace the certificate, you can delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl -n cattle-system delete secret tls-rancher-ingress")," and add a new one using the command shown above. If you are using a private CA signed certificate, replacing the certificate is only possible if the new certificate is signed by the same CA as the certificate currently in use.")),(0,r.kt)("h3",{id:"using-a-private-ca-signed-certificate"},"Using a Private CA Signed Certificate"),(0,r.kt)("p",null,"If you are using a private CA, Rancher requires a copy of the private CA's root certificate or certificate chain, which the Rancher Agent uses to validate the connection to the server."),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," that only contains the root CA certificate or certificate chain from your private CA, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important:")," Make sure the file is called ",(0,r.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," as Rancher uses that filename to configure the CA certificate.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem\n")))}f.isMDXComponent=!0}}]);
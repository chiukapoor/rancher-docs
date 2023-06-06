"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"Certificate Rotation"},s=void 0,l={unversionedId:"how-to-guides/new-user-guides/manage-clusters/rotate-certificates",id:"version-2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates",title:"Certificate Rotation",description:"Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters",slug:"/how-to-guides/new-user-guides/manage-clusters/rotate-certificates",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates.md",tags:[],version:"2.6",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Certificate Rotation"},sidebar:"tutorialSidebar",previous:{title:"Projects and Kubernetes Namespaces with Rancher",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},next:{title:"Encryption Key Rotation",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key"}},u={},p=[{value:"Certificate Rotation",id:"certificate-rotation",level:3},{value:"Additional Notes",id:"additional-notes",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("Tabs"),f=d("TabItem"),h={toc:p};function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.")),(0,n.kt)("p",null,"By default, Kubernetes clusters require certificates and Rancher launched Kubernetes clusters automatically generate  certificates for the Kubernetes components. Rotating these certificates is important before the certificates expire as well as if a certificate is compromised. After the certificates are rotated, the Kubernetes components are automatically restarted."),(0,n.kt)("p",null,"Certificates can be rotated for the following services:"),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(f,{value:"RKE",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"etcd"),(0,n.kt)("li",{parentName:"ul"},"kubelet (node certificate)"),(0,n.kt)("li",{parentName:"ul"},"kubelet (serving certificate, if ",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/services/#kubelet-options"},"enabled"),")"),(0,n.kt)("li",{parentName:"ul"},"kube-apiserver"),(0,n.kt)("li",{parentName:"ul"},"kube-proxy"),(0,n.kt)("li",{parentName:"ul"},"kube-scheduler"),(0,n.kt)("li",{parentName:"ul"},"kube-controller-manager"))),(0,n.kt)(f,{value:"RKE2",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"admin"),(0,n.kt)("li",{parentName:"ul"},"api-server"),(0,n.kt)("li",{parentName:"ul"},"controller-manager"),(0,n.kt)("li",{parentName:"ul"},"scheduler"),(0,n.kt)("li",{parentName:"ul"},"rke2-controller"),(0,n.kt)("li",{parentName:"ul"},"rke2-server"),(0,n.kt)("li",{parentName:"ul"},"cloud-controller"),(0,n.kt)("li",{parentName:"ul"},"etcd"),(0,n.kt)("li",{parentName:"ul"},"auth-proxy"),(0,n.kt)("li",{parentName:"ul"},"kubelet"),(0,n.kt)("li",{parentName:"ul"},"kube-proxy")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For users who didn't rotate their webhook certificates, and they have expired after one year, please see this ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"},"page")," for help.")),(0,n.kt)("h3",{id:"certificate-rotation"},"Certificate Rotation"),(0,n.kt)("p",null,"Rancher launched Kubernetes clusters have the ability to rotate the auto-generated certificates through the UI."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster you want to rotate certificates for amd click ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Rotate Certificates"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select which certificates that you want to rotate."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Rotate all Service certificates (keep the same CA)"),(0,n.kt)("li",{parentName:"ul"},"Rotate an individual service and choose one of the services from the drop-down menu"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Results:")," The selected certificates will be rotated and the related services will be restarted to start using the new certificate."),(0,n.kt)("h3",{id:"additional-notes"},"Additional Notes"),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(f,{value:"RKE",mdxType:"TabItem"},(0,n.kt)("p",null,"Even though the RKE CLI can use custom certificates for the Kubernetes cluster components, Rancher currently doesn't allow the ability to upload these in Rancher launched Kubernetes clusters.")),(0,n.kt)(f,{value:"RKE2",mdxType:"TabItem"},(0,n.kt)("p",null,"In RKE2, both etcd and control plane nodes are treated as the same ",(0,n.kt)("inlineCode",{parentName:"p"},"server")," concept. As such, when rotating certificates of services specific to either of these components will result in certificates being rotated on both. The certificates will only change for the specified service, but you will see nodes for both components go into an updating state. You may also see worker only nodes go into an updating state. This is to restart the workers after a certificate change to ensure they get the latest client certs."))))}b.isMDXComponent=!0}}]);
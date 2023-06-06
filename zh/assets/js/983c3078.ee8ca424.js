"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var i=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Enable Istio with Pod Security Policies"},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",id:"version-2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",title:"Enable Istio with Pod Security Policies",description:"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",permalink:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",tags:[],version:"2.5",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"Enable Istio with Pod Security Policies"},sidebar:"tutorialSidebar",previous:{title:"Configuration Options",permalink:"/zh/v2.5/pages-for-subheaders/configuration-options"},next:{title:"Selectors and Scrape Configs",permalink:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"}},p={},u=[{value:"1. Set the PodSecurityPolicy to unrestricted",id:"1-set-the-podsecuritypolicy-to-unrestricted",level:3},{value:"2. Enable the CNI",id:"2-enable-the-cni",level:3},{value:"3. Verify that the CNI is working",id:"3-verify-that-the-cni-is-working",level:3},{value:"1. Configure the System Project Policy to allow Istio install",id:"1-configure-the-system-project-policy-to-allow-istio-install",level:3},{value:"2. Install the CNI Plugin in the System Project",id:"2-install-the-cni-plugin-in-the-system-project",level:3},{value:"3. Install Istio",id:"3-install-istio",level:3}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=h("Tabs"),m=h("TabItem"),y={toc:u};function k(e){var{components:t}=e,n=a(e,["components"]);return(0,i.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin."),(0,i.kt)("p",null,"The Istio CNI plugin removes the need for each application pod to have a privileged ",(0,i.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," container. For further information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/cni"},"Istio CNI Plugin docs"),". Please note that the ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/about/feature-stages/"},"Istio CNI Plugin is in alpha"),"."),(0,i.kt)("p",null,"The steps differ based on the Rancher version."),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(m,{value:"v2.5.4+",mdxType:"TabItem"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The cluster must be an RKE Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},"The cluster must have been created with a default PodSecurityPolicy.")),(0,i.kt)("p",{parentName:"blockquote"},"To enable pod security policy support when creating a Kubernetes cluster in the Rancher UI, go to ",(0,i.kt)("b",null,"Advanced Options.")," In the ",(0,i.kt)("b",null,"Pod Security Policy Support")," section, click ",(0,i.kt)("b",null,"Enabled.")," Then select a default pod security policy.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-set-the-podsecuritypolicy-to-unrestricted"},"Set the PodSecurityPolicy to unrestricted")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-enable-the-cni"},"Enable the CNI")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3-verify-that-the-cni-is-working"},"Verify that the CNI is working."))),(0,i.kt)("h3",{id:"1-set-the-podsecuritypolicy-to-unrestricted"},"1. Set the PodSecurityPolicy to unrestricted"),(0,i.kt)("p",null,"An unrestricted PSP allows Istio to be installed."),(0,i.kt)("p",null,"Set the PSP to ",(0,i.kt)("inlineCode",{parentName:"p"},"unrestricted")," in the project where is Istio is installed, or the project where you plan to install Istio."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the cluster view of the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Manager,")," select ",(0,i.kt)("strong",{parentName:"li"},"Projects/Namespaces.")),(0,i.kt)("li",{parentName:"ol"},"Find the ",(0,i.kt)("strong",{parentName:"li"},"Project: System")," and select the ",(0,i.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,i.kt)("li",{parentName:"ol"},"Change the Pod Security Policy option to be unrestricted, then click ",(0,i.kt)("strong",{parentName:"li"},"Save."))),(0,i.kt)("h3",{id:"2-enable-the-cni"},"2. Enable the CNI"),(0,i.kt)("p",null,"When installing or upgrading Istio through ",(0,i.kt)("strong",{parentName:"p"},"Apps & Marketplace,")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Components.")),(0,i.kt)("li",{parentName:"ol"},"Check the box next to ",(0,i.kt)("strong",{parentName:"li"},"Enabled CNI.")),(0,i.kt)("li",{parentName:"ol"},"Finish installing or upgrading Istio.")),(0,i.kt)("p",null,"The CNI can also be enabled by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"istio_cni.enabled: true\n")),(0,i.kt)("p",null,"Istio should install successfully with the CNI enabled in the cluster."),(0,i.kt)("h3",{id:"3-verify-that-the-cni-is-working"},"3. Verify that the CNI is working"),(0,i.kt)("p",null,"Verify that the CNI is working by deploying a ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/examples/bookinfo/"},"sample application")," or deploying one of your own applications.")),(0,i.kt)(m,{value:"v2.5.0-v2.5.3",mdxType:"TabItem"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The cluster must be an RKE Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},"The cluster must have been created with a default PodSecurityPolicy.")),(0,i.kt)("p",{parentName:"blockquote"},"To enable pod security policy support when creating a Kubernetes cluster in the Rancher UI, go to ",(0,i.kt)("b",null,"Advanced Options.")," In the ",(0,i.kt)("b",null,"Pod Security Policy Support")," section, click ",(0,i.kt)("b",null,"Enabled.")," Then select a default pod security policy.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-configure-the-system-project-policy-to-allow-istio-install"},"Configure the System Project Policy to allow Istio install.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-install-the-cni-plugin-in-the-system-project"},"Install the CNI plugin in the System project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3-install-istio"},"Install Istio."))),(0,i.kt)("h3",{id:"1-configure-the-system-project-policy-to-allow-istio-install"},"1. Configure the System Project Policy to allow Istio install"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the cluster view of the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Manager,")," select ",(0,i.kt)("strong",{parentName:"li"},"Projects/Namespaces.")),(0,i.kt)("li",{parentName:"ol"},"Find the ",(0,i.kt)("strong",{parentName:"li"},"Project: System")," and select the ",(0,i.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,i.kt)("li",{parentName:"ol"},"Change the Pod Security Policy option to be unrestricted, then click Save.")),(0,i.kt)("h3",{id:"2-install-the-cni-plugin-in-the-system-project"},"2. Install the CNI Plugin in the System Project"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the main menu of the ",(0,i.kt)("strong",{parentName:"li"},"Dashboard"),", select ",(0,i.kt)("strong",{parentName:"li"},"Projects/Namespaces"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Project: System")," project."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Tools > Catalogs")," in the navigation bar."),(0,i.kt)("li",{parentName:"ol"},"Add a catalog with the following:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Name: istio-cni"),(0,i.kt)("li",{parentName:"ol"},"Catalog URL: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/istio/cni"},"https://github.com/istio/cni")),(0,i.kt)("li",{parentName:"ol"},"Branch: The branch that matches your current release, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"release-1.4"),"."))),(0,i.kt)("li",{parentName:"ol"},"From the main menu select ",(0,i.kt)("strong",{parentName:"li"},"Apps")),(0,i.kt)("li",{parentName:"ol"},"Click Launch and select istio-cni"),(0,i.kt)("li",{parentName:"ol"},'Update the namespace to be "kube-system"'),(0,i.kt)("li",{parentName:"ol"},'In the answers section, click "Edit as YAML" and paste in the following, then click launch:')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'---\n  logLevel: "info"\n  excludeNamespaces:\n    - "istio-system"\n    - "kube-system"\n')),(0,i.kt)("h3",{id:"3-install-istio"},"3. Install Istio"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},"primary instructions"),", adding a custom answer: ",(0,i.kt)("inlineCode",{parentName:"p"},"istio_cni.enabled: true"),"."),(0,i.kt)("p",null,"After Istio has finished installing, the Apps page in System Projects should show both istio and ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-cni")," applications deployed successfully. Sidecar injection will now be functional."))))}k.isMDXComponent=!0}}]);
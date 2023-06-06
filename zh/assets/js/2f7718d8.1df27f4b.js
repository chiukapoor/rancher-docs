"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[31863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Install Rancher on a Kubernetes Cluster",description:"Learn how to install Rancher in development and production environments. Read about single node and high availability installation"},s=void 0,c={unversionedId:"pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster",id:"version-2.0-2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster",title:"Install Rancher on a Kubernetes Cluster",description:"Learn how to install Rancher in development and production environments. Read about single node and high availability installation",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1685717408,formattedLastUpdatedAt:"2023\u5e746\u67082\u65e5",frontMatter:{title:"Install Rancher on a Kubernetes Cluster",description:"Learn how to install Rancher in development and production environments. Read about single node and high availability installation"},sidebar:"tutorialSidebar",previous:{title:"Port Requirements",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements"},next:{title:"Rollbacks",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"}},u={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Install the Rancher Helm Chart",id:"install-the-rancher-helm-chart",level:2},{value:"1. Install the Required CLI Tools",id:"1-install-the-required-cli-tools",level:3},{value:"2. Add the Helm Chart Repository",id:"2-add-the-helm-chart-repository",level:3},{value:"3. Create a Namespace for Rancher",id:"3-create-a-namespace-for-rancher",level:3},{value:"4. Choose your SSL Configuration",id:"4-choose-your-ssl-configuration",level:3},{value:"5. Install cert-manager",id:"5-install-cert-manager",level:3},{value:"6. Install Rancher with Helm and Your Chosen Certificate Option",id:"6-install-rancher-with-helm-and-your-chosen-certificate-option",level:3},{value:"7. Verify that the Rancher Server is Successfully Deployed",id:"7-verify-that-the-rancher-server-is-successfully-deployed",level:3},{value:"8. Save Your Options",id:"8-save-your-options",level:3},{value:"Finishing Up",id:"finishing-up",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:3}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=h("Tabs"),d=h("TabItem"),f={toc:p};function k(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("p",null,"Set up the Rancher server's local Kubernetes cluster."),(0,n.kt)("p",null,"The cluster requirements depend on the Rancher version:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"In Rancher v2.4.x,")," Rancher needs to be installed on a K3s Kubernetes cluster or an RKE Kubernetes cluster."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"In Rancher before v2.4,")," Rancher needs to be installed on an RKE Kubernetes cluster.")),(0,n.kt)("p",null,"For the tutorial to install an RKE Kubernetes cluster, refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher"},"this page.")," For help setting up the infrastructure for a high-availability RKE cluster, refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster"},"this page.")),(0,n.kt)("p",null,"For the tutorial to install a K3s Kubernetes cluster, refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher"},"this page.")," For help setting up the infrastructure for a high-availability K3s cluster, refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster"},"this page.")),(0,n.kt)("h2",{id:"install-the-rancher-helm-chart"},"Install the Rancher Helm Chart"),(0,n.kt)("p",null,"Rancher is installed using the Helm package manager for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents."),(0,n.kt)("p",null,"With Helm, we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/"},"https://helm.sh/"),"."),(0,n.kt)("p",null,"For systems without direct internet access, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/install-rancher"},"Air Gap: Kubernetes install"),"."),(0,n.kt)("p",null,"To choose a Rancher version to install, refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Choosing a Rancher Version.")),(0,n.kt)("p",null,"To choose a version of Helm to install Rancher with, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The installation instructions assume you are using Helm 3. For migration of installs started with Helm 2, refer to the official ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 to 3 migration docs.")," This ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"section")," provides a copy of the older installation instructions for Rancher installed on an RKE Kubernetes cluster with Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.")),(0,n.kt)("p",null,"To set up Rancher,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#1-install-the-required-cli-tools"},"Install the required CLI tools")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#2-add-the-helm-chart-repository"},"Add the Helm chart repository")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#3-create-a-namespace-for-rancher"},"Create a namespace for Rancher")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#4-choose-your-ssl-configuration"},"Choose your SSL configuration")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#5-install-cert-manager"},"Install cert-manager")," (unless you are bringing your own certificates, or TLS will be terminated on a load balancer)"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#6-install-rancher-with-helm-and-your-chosen-certificate-option"},"Install Rancher with Helm and your chosen certificate option")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#7-verify-that-the-rancher-server-is-successfully-deployed"},"Verify that the Rancher server is successfully deployed")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#8-save-your-options"},"Save your options"))),(0,n.kt)("h3",{id:"1-install-the-required-cli-tools"},"1. Install the Required CLI Tools"),(0,n.kt)("p",null,"The following CLI tools are required for setting up the Kubernetes cluster. Please make sure these tools are installed and available in your ",(0,n.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,n.kt)("p",null,"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"instructions provided by the Helm project")," for your specific platform."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl")," - Kubernetes command-line tool."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.helm.sh/using_helm/#installing-helm"},"helm")," - Package management for Kubernetes. Refer to the ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher.")),(0,n.kt)("h3",{id:"2-add-the-helm-chart-repository"},"2. Add the Helm Chart Repository"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"helm repo add")," command to add the Helm chart repository that contains charts to install Rancher. For more information about the repository choices and which is best for your use case, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Choosing a Rancher Version"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,n.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,n.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n")),"  Note: Upgrades are not supported to, from, or between Alphas.")),(0,n.kt)("h3",{id:"3-create-a-namespace-for-rancher"},"3. Create a Namespace for Rancher"),(0,n.kt)("p",null,"We'll need to define a Kubernetes namespace where the resources created by the Chart should be installed. This should always be ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl create namespace cattle-system\n")),(0,n.kt)("h3",{id:"4-choose-your-ssl-configuration"},"4. Choose your SSL Configuration"),(0,n.kt)("p",null,"The Rancher management server is designed to be secure by default and requires SSL/TLS configuration."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," If you want terminate SSL/TLS externally, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"TLS termination on an External Load Balancer"),".")),(0,n.kt)("p",null,"There are three recommended options for the source of the certificate used for TLS termination at the Rancher server:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rancher-generated TLS certificate:")," In this case, you will need to install ",(0,n.kt)("inlineCode",{parentName:"li"},"cert-manager")," into the cluster. Rancher utilizes ",(0,n.kt)("inlineCode",{parentName:"li"},"cert-manager")," to issue and maintain its certificates. Rancher will generate a CA certificate of its own, and sign a cert using that CA. ",(0,n.kt)("inlineCode",{parentName:"li"},"cert-manager")," is then responsible for managing that certificate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Let's Encrypt:")," The Let's Encrypt option also uses ",(0,n.kt)("inlineCode",{parentName:"li"},"cert-manager"),". However, in this case, cert-manager is combined with a special Issuer for Let's Encrypt that performs all actions (including request and validation) necessary for getting a Let's Encrypt issued cert. This configuration uses HTTP validation (",(0,n.kt)("inlineCode",{parentName:"li"},"HTTP-01"),"), so the load balancer must have a public DNS record and be accessible from the internet."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bring your own certificate:")," This option allows you to bring your own public- or private-CA signed certificate. Rancher will use that certificate to secure websocket and HTTPS traffic. In this case, you must upload this certificate (and associated key) as PEM-encoded files with the name ",(0,n.kt)("inlineCode",{parentName:"li"},"tls.crt")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"tls.key"),". If you are using a private CA, you must also upload that certificate. This is due to the fact that this private CA may not be trusted by your nodes. Rancher will take that CA certificate, and generate a checksum from it, which the various Rancher components will use to validate their connection to Rancher.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,n.kt)("th",{parentName:"tr",align:null},"Helm Chart Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Requires cert-manager"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rancher Generated Certificates (Default)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=rancher")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#5-install-cert-manager"},"yes"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Let\u2019s Encrypt"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=letsEncrypt")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#5-install-cert-manager"},"yes"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Certificates from Files"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=secret")),(0,n.kt)("td",{parentName:"tr",align:null},"no")))),(0,n.kt)("h3",{id:"5-install-cert-manager"},"5. Install cert-manager"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You should skip this step if you are bringing your own certificate files (option ",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=secret"),"), or if you use ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"TLS termination on an external load balancer"),".")),(0,n.kt)("p",null,"This step is only required to use certificates issued by Rancher's generated CA (",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") or to request Let's Encrypt issued certificates (",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),")."),(0,n.kt)("details",{id:"cert-manager"},(0,n.kt)("summary",null,"Click to Expand"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")," Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.11.0, please see our ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"upgrade documentation"),".")),(0,n.kt)("p",null,"These instructions are adapted from the ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/kubernetes/#installing-with-helm"},"official cert-manager documentation"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# Install the CustomResourceDefinition resources separately\nkubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.0.4/cert-manager.crds.yaml\n\n# **Important:**\n# If you are running Kubernetes v1.15 or below, you\n# will need to add the `--validate=false` flag to your\n# kubectl apply command, or else you will receive a\n# validation error relating to the\n# x-kubernetes-preserve-unknown-fields field in\n# cert-manager\u2019s CustomResourceDefinition resources.\n# This is a benign error and occurs due to the way kubectl\n# performs resource validation.\n\n# Create the namespace for cert-manager\nkubectl create namespace cert-manager\n\n# Add the Jetstack Helm repository\nhelm repo add jetstack https://charts.jetstack.io\n\n# Update your local Helm chart repository cache\nhelm repo update\n\n# Install the cert-manager Helm chart\nhelm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --version v1.0.4\n")),(0,n.kt)("p",null,"Once you\u2019ve installed cert-manager, you can verify it is deployed correctly by checking the cert-manager namespace for running pods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pods --namespace cert-manager\n\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-5c6866597-zw7kh               1/1     Running   0          2m\ncert-manager-cainjector-577f6d9fd7-tr77l   1/1     Running   0          2m\ncert-manager-webhook-787858fcdb-nlzsq      1/1     Running   0          2m\n"))),(0,n.kt)("h3",{id:"6-install-rancher-with-helm-and-your-chosen-certificate-option"},"6. Install Rancher with Helm and Your Chosen Certificate Option"),(0,n.kt)("p",null,"The exact command to install Rancher differs depending on the certificate configuration."),(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(d,{value:"Rancher-generated Certificates",mdxType:"TabItem"},(0,n.kt)("p",null,"The default is for Rancher to generate a CA and uses ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," to issue the certificate for access to the Rancher server interface."),(0,n.kt)("p",null,"Because ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher")," is the default option for ",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source"),", we are not specifying ",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source")," when running the ",(0,n.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("inlineCode",{parentName:"li"},"hostname")," to the DNS name you pointed at your load balancer."),(0,n.kt)("li",{parentName:"ul"},"If you are installing an alpha version, Helm requires adding the ",(0,n.kt)("inlineCode",{parentName:"li"},"--devel")," option to the command."),(0,n.kt)("li",{parentName:"ul"},"To install a specific Rancher version, use the ",(0,n.kt)("inlineCode",{parentName:"li"},"--version")," flag, example: ",(0,n.kt)("inlineCode",{parentName:"li"},"--version 2.3.6"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org\n")),(0,n.kt)("p",null,"Wait for Rancher to be rolled out:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl -n cattle-system rollout status deploy/rancher\nWaiting for deployment "rancher" rollout to finish: 0 of 3 updated replicas are available...\ndeployment "rancher" successfully rolled out\n'))),(0,n.kt)(d,{value:"Let's Encrypt",mdxType:"TabItem"},(0,n.kt)("p",null,"This option uses ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," to automatically request and renew ",(0,n.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," certificates. This is a free service that provides you with a valid certificate as Let's Encrypt is a trusted CA."),(0,n.kt)("p",null,"In the following command,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hostname")," is set to the public DNS record,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ingress.tls.source")," is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"letsEncrypt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"letsEncrypt.email")," is set to the email address used for communication about your certificate (for example, expiry notices)"),(0,n.kt)("li",{parentName:"ul"},"If you are installing an alpha version, Helm requires adding the ",(0,n.kt)("inlineCode",{parentName:"li"},"--devel")," option to the command.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=letsEncrypt \\\n  --set letsEncrypt.email=me@example.org \\\n")),(0,n.kt)("p",null,"Wait for Rancher to be rolled out:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl -n cattle-system rollout status deploy/rancher\nWaiting for deployment "rancher" rollout to finish: 0 of 3 updated replicas are available...\ndeployment "rancher" successfully rolled out\n'))),(0,n.kt)(d,{value:"Certificates from Files",mdxType:"TabItem"},(0,n.kt)("p",null,"In this option, Kubernetes secrets are created from your own certificates for Rancher to use."),(0,n.kt)("p",null,"When you run this command, the ",(0,n.kt)("inlineCode",{parentName:"p"},"hostname")," option must match the ",(0,n.kt)("inlineCode",{parentName:"p"},"Common Name")," or a ",(0,n.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," entry in the server certificate or the Ingress controller will fail to configure correctly."),(0,n.kt)("p",null,"Although an entry in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," is technically required, having a matching ",(0,n.kt)("inlineCode",{parentName:"p"},"Common Name")," maximizes compatibility with older browsers and applications."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you want to check if your certificates are correct, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/faq/technical-items#how-do-i-check-common-name-and-subject-alternative-names-in-my-server-certificate"},"How do I check Common Name and Subject Alternative Names in my server certificate?"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("inlineCode",{parentName:"li"},"hostname"),"."),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"ingress.tls.source")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"secret"),"."),(0,n.kt)("li",{parentName:"ul"},"If you are installing an alpha version, Helm requires adding the ",(0,n.kt)("inlineCode",{parentName:"li"},"--devel")," option to the command.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret\n")),(0,n.kt)("p",null,"If you are using a Private CA signed certificate , add ",(0,n.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret \\\n  --set privateCA=true\n")),(0,n.kt)("p",null,"Now that Rancher is deployed, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"Adding TLS Secrets")," to publish the certificate files so Rancher and the Ingress controller can use them."))),(0,n.kt)("p",null,"The Rancher chart configuration has many options for customizing the installation to suit your specific environment. Here are some common advanced scenarios."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#http-proxy"},"HTTP Proxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#private-registry-and-air-gap-installs"},"Private Docker Image Registry")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"TLS Termination on an External Load Balancer"))),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options"},"Chart Options")," for the full list of options."),(0,n.kt)("h3",{id:"7-verify-that-the-rancher-server-is-successfully-deployed"},"7. Verify that the Rancher Server is Successfully Deployed"),(0,n.kt)("p",null,"After adding the secrets, check if Rancher was rolled out successfully:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl -n cattle-system rollout status deploy/rancher\nWaiting for deployment "rancher" rollout to finish: 0 of 3 updated replicas are available...\ndeployment "rancher" successfully rolled out\n')),(0,n.kt)("p",null,"If you see the following error: ",(0,n.kt)("inlineCode",{parentName:"p"},'error: deployment "rancher" exceeded its progress deadline'),", you can check the status of the deployment by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get deploy rancher\nNAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nrancher   3         3         3            3           3m\n")),(0,n.kt)("p",null,"It should show the same count for ",(0,n.kt)("inlineCode",{parentName:"p"},"DESIRED")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AVAILABLE"),"."),(0,n.kt)("h3",{id:"8-save-your-options"},"8. Save Your Options"),(0,n.kt)("p",null,"Make sure you save the ",(0,n.kt)("inlineCode",{parentName:"p"},"--set")," options you used. You will need to use the same options when you upgrade Rancher to new versions with Helm."),(0,n.kt)("h3",{id:"finishing-up"},"Finishing Up"),(0,n.kt)("p",null,"That's it. You should have a functional Rancher server."),(0,n.kt)("p",null,"In a web browser, go to the DNS name that forwards traffic to your load balancer. Then you should be greeted by the colorful login page."),(0,n.kt)("p",null,"Doesn't work? Take a look at the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting")," Page"),(0,n.kt)("h3",{id:"optional-next-steps"},"Optional Next Steps"),(0,n.kt)("p",null,"Enable the Enterprise Cluster Manager."))}k.isMDXComponent=!0}}]);
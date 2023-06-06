"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"4.  Install Rancher"},s=void 0,c={unversionedId:"pages-for-subheaders/helm-rancher",id:"version-2.0-2.4/pages-for-subheaders/helm-rancher",title:"4.  Install Rancher",description:"Rancher installation is managed using the Helm package manager for Kubernetes.  Use helm to install the prerequisite and charts to install Rancher.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm-rancher.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm-rancher",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"4.  Install Rancher"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init/troubleshooting"},next:{title:"Adding Kubernetes TLS Secrets",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets"}},p={},m=[{value:"Add the Helm Chart Repository",id:"add-the-helm-chart-repository",level:3},{value:"Choose your SSL Configuration",id:"choose-your-ssl-configuration",level:3},{value:"Optional: Install cert-manager",id:"optional-install-cert-manager",level:3},{value:"Rancher Generated Certificates",id:"rancher-generated-certificates",level:4},{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:4},{value:"Certificates from Files",id:"certificates-from-files",level:4},{value:"Advanced Configurations",id:"advanced-configurations",level:3},{value:"Save your options",id:"save-your-options",level:3},{value:"Finishing Up",id:"finishing-up",level:3}],u={toc:m};function d(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rancher installation is managed using the Helm package manager for Kubernetes.  Use ",(0,n.kt)("inlineCode",{parentName:"p"},"helm")," to install the prerequisite and charts to install Rancher."),(0,n.kt)("p",null,"For systems without direct internet access, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/install-rancher"},"Air Gap: Kubernetes install"),"."),(0,n.kt)("p",null,"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The installation instructions assume you are using Helm 2. The instructions will be updated for Helm 3 soon. In the meantime, if you want to use Helm 3, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ibrokethecloud/rancher-helm3"},"these instructions."))),(0,n.kt)("h3",{id:"add-the-helm-chart-repository"},"Add the Helm Chart Repository"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"helm repo add")," command to add the Helm chart repository that contains charts to install Rancher. For more information about the repository choices and which is best for your use case, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Choosing a Version of Rancher"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,n.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,n.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n")),"  Note: Upgrades are not supported to, from, or between Alphas.")),(0,n.kt)("h3",{id:"choose-your-ssl-configuration"},"Choose your SSL Configuration"),(0,n.kt)("p",null,"Rancher Server is designed to be secure by default and requires SSL/TLS configuration."),(0,n.kt)("p",null,"There are three recommended options for the source of the certificate."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," If you want terminate SSL/TLS externally, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/chart-options#external-tls-termination"},"TLS termination on an External Load Balancer"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,n.kt)("th",{parentName:"tr",align:null},"Chart option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Requires cert-manager"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#rancher-generated-certificates"},"Rancher Generated Certificates")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=rancher")),(0,n.kt)("td",{parentName:"tr",align:null},"Use certificates issued by Rancher's generated CA (self signed)",(0,n.kt)("br",null),"This is the ",(0,n.kt)("strong",{parentName:"td"},"default")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#optional-install-cert-manager"},"yes"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#let-s-encrypt"},"Let\u2019s Encrypt")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=letsEncrypt")),(0,n.kt)("td",{parentName:"tr",align:null},"Use ",(0,n.kt)("a",{parentName:"td",href:"https://letsencrypt.org/"},"Let's Encrypt")," to issue a certificate"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#optional-install-cert-manager"},"yes"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#certificates-from-files"},"Certificates from Files")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=secret")),(0,n.kt)("td",{parentName:"tr",align:null},"Use your own certificate files by creating Kubernetes Secret(s)"),(0,n.kt)("td",{parentName:"tr",align:null},"no")))),(0,n.kt)("h3",{id:"optional-install-cert-manager"},"Optional: Install cert-manager"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," cert-manager is only required for certificates issued by Rancher's generated CA (",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") and Let's Encrypt issued certificates (",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),"). You should skip this step if you are using your own certificate files (option ",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=secret"),") or if you use ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/chart-options#external-tls-termination"},"TLS termination on an External Load Balancer"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:"),"\nDue to an issue with Helm v2.12.0 and cert-manager, please use Helm v2.12.1 or higher.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.12.0, please see our ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"upgrade documentation"),".")),(0,n.kt)("p",null,"Rancher relies on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jetstack/cert-manager"},"cert-manager")," to issue certificates from Rancher's own generated CA or to request Let's Encrypt certificates."),(0,n.kt)("p",null,"These instructions are adapted from the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cert-manager.io/en/latest/getting-started/install/kubernetes.html#installing-with-helm"},"official cert-manager documentation"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the CustomResourceDefinition resources separately"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.9/deploy/manifests/00-crds.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the namespace for cert-manager"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Label the cert-manager namespace to disable resource validation"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl label namespace cert-manager certmanager.k8s.io/disable-validation=true\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the Jetstack Helm repository"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update your local Helm chart repository cache"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo update\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the cert-manager Helm chart"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm install \\\n  --name cert-manager \\\n  --namespace cert-manager \\\n  --version v0.14.2 \\\n  jetstack/cert-manager\n")))),(0,n.kt)("p",null,"Once you\u2019ve installed cert-manager, you can verify it is deployed correctly by checking the cert-manager namespace for running pods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pods --namespace cert-manager\n\nNAME                                            READY   STATUS      RESTARTS   AGE\ncert-manager-7cbdc48784-rpgnt                   1/1     Running     0          3m\ncert-manager-webhook-5b5dd6999-kst4x            1/1     Running     0          3m\ncert-manager-cainjector-3ba5cd2bcd-de332x       1/1     Running     0          3m\n")),(0,n.kt)("p",null,"If the \u2018webhook\u2019 pod (2nd line) is in a ContainerCreating state, it may still be waiting for the Secret to be mounted into the pod. Wait a couple of minutes for this to happen but if you experience problems, please check the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cert-manager.io/en/latest/getting-started/troubleshooting.html"},"troubleshooting")," guide."),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"rancher-generated-certificates"},"Rancher Generated Certificates"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," You need to have ",(0,n.kt)("a",{parentName:"p",href:"#optional-install-cert-manager"},"cert-manager")," installed before proceeding.")),(0,n.kt)("p",null,"The default is for Rancher to generate a CA and uses ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," to issue the certificate for access to the Rancher server interface. Because ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher")," is the default option for ",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source"),", we are not specifying ",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source")," when running the ",(0,n.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("inlineCode",{parentName:"li"},"hostname")," to the DNS name you pointed at your load balancer."),(0,n.kt)("li",{parentName:"ul"},"If you are installing an alpha version, Helm requires adding the ",(0,n.kt)("inlineCode",{parentName:"li"},"--devel")," option to the command.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install rancher-<CHART_REPO>/rancher \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org\n")),(0,n.kt)("p",null,"Wait for Rancher to be rolled out:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl -n cattle-system rollout status deploy/rancher\nWaiting for deployment "rancher" rollout to finish: 0 of 3 updated replicas are available...\ndeployment "rancher" successfully rolled out\n')),(0,n.kt)("h4",{id:"lets-encrypt"},"Let's Encrypt"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," You need to have ",(0,n.kt)("a",{parentName:"p",href:"#optional-install-cert-manager"},"cert-manager")," installed before proceeding.")),(0,n.kt)("p",null,"This option uses ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," to automatically request and renew ",(0,n.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," certificates. This is a free service that provides you with a valid certificate as Let's Encrypt is a trusted CA. This configuration uses HTTP validation (",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP-01"),") so the load balancer must have a public DNS record and be accessible from the internet."),(0,n.kt)("p",null,"In the following command,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"hostname")," to the public DNS record that resolves to your load balancer."),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"ingress.tls.source")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"letsEncrypt"),"."),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"letsEncrypt.email")," to the email address used for communication about your certificate (for example, expiry notices)."),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"letsEncrypt.ingress.class")," to whatever your ingress controller is, e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"traefik"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"nginx"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"haproxy"),", etc."),(0,n.kt)("li",{parentName:"ul"},"If you are installing an alpha version, Helm requires adding the ",(0,n.kt)("inlineCode",{parentName:"li"},"--devel")," option to the command.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install rancher-<CHART_REPO>/rancher \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=letsEncrypt \\\n  --set letsEncrypt.email=me@example.org \\\n  --set letsEncrypt.ingress.class=nginx\n")),(0,n.kt)("p",null,"Wait for Rancher to be rolled out:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl -n cattle-system rollout status deploy/rancher\nWaiting for deployment "rancher" rollout to finish: 0 of 3 updated replicas are available...\ndeployment "rancher" successfully rolled out\n')),(0,n.kt)("h4",{id:"certificates-from-files"},"Certificates from Files"),(0,n.kt)("p",null,"Create Kubernetes secrets from your own certificates for Rancher to use."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The ",(0,n.kt)("inlineCode",{parentName:"p"},"Common Name")," or a ",(0,n.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," entry in the server certificate must match the ",(0,n.kt)("inlineCode",{parentName:"p"},"hostname")," option, or the ingress controller will fail to configure correctly. Although an entry in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," is technically required, having a matching ",(0,n.kt)("inlineCode",{parentName:"p"},"Common Name")," maximizes compatibility with older browsers/applications. If you want to check if your certificates are correct, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/faq/technical-items#how-do-i-check-common-name-and-subject-alternative-names-in-my-server-certificate"},"How do I check Common Name and Subject Alternative Names in my server certificate?"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"hostname")," and set ",(0,n.kt)("inlineCode",{parentName:"li"},"ingress.tls.source")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"secret"),"."),(0,n.kt)("li",{parentName:"ul"},"If you are installing an alpha version, Helm requires adding the ",(0,n.kt)("inlineCode",{parentName:"li"},"--devel")," option to the command.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install rancher-<CHART_REPO>/rancher \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret\n")),(0,n.kt)("p",null,"If you are using a Private CA signed certificate , add ",(0,n.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install rancher-<CHART_REPO>/rancher \\\n  --name rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret\n  --set privateCA=true\n")),(0,n.kt)("p",null,"Now that Rancher is deployed, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/tls-secrets"},"Adding TLS Secrets")," to publish the certificate files so Rancher and the ingress controller can use them."),(0,n.kt)("p",null,"After adding the secrets, check if Rancher was rolled out successfully:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl -n cattle-system rollout status deploy/rancher\nWaiting for deployment "rancher" rollout to finish: 0 of 3 updated replicas are available...\ndeployment "rancher" successfully rolled out\n')),(0,n.kt)("p",null,"If you see the following error: ",(0,n.kt)("inlineCode",{parentName:"p"},'error: deployment "rancher" exceeded its progress deadline'),", you can check the status of the deployment by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get deploy rancher\nNAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nrancher   3         3         3            3           3m\n")),(0,n.kt)("p",null,"It should show the same count for ",(0,n.kt)("inlineCode",{parentName:"p"},"DESIRED")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AVAILABLE"),"."),(0,n.kt)("h3",{id:"advanced-configurations"},"Advanced Configurations"),(0,n.kt)("p",null,"The Rancher chart configuration has many options for customizing the install to suit your specific environment. Here are some common advanced scenarios."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options"},"HTTP Proxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#private-registry-and-air-gap-installs"},"Private Docker Image Registry")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/chart-options#external-tls-termination"},"TLS Termination on an External Load Balancer"))),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/chart-options"},"Chart Options")," for the full list of options."),(0,n.kt)("h3",{id:"save-your-options"},"Save your options"),(0,n.kt)("p",null,"Make sure you save the ",(0,n.kt)("inlineCode",{parentName:"p"},"--set")," options you used. You will need to use the same options when you upgrade Rancher to new versions with Helm."),(0,n.kt)("h3",{id:"finishing-up"},"Finishing Up"),(0,n.kt)("p",null,"That's it you should have a functional Rancher server. Point a browser at the hostname you picked and you should be greeted by the colorful login page."),(0,n.kt)("p",null,"Doesn't work? Take a look at the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/troubleshooting"},"Troubleshooting")," Page"))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20557],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});t(67294);var a=t(3905);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={title:"K3s Hardening Guide"},l=void 0,c={unversionedId:"pages-for-subheaders/k3s-hardening-guide",id:"pages-for-subheaders/k3s-hardening-guide",title:"K3s Hardening Guide",description:"This document provides prescriptive guidance for how to harden a K3s cluster intended for production, before provisioning it with Rancher. It outlines the configurations and controls required for Center for Information Security (CIS) Kubernetes benchmark controls.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/k3s-hardening-guide.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/k3s-hardening-guide",permalink:"/zh/pages-for-subheaders/k3s-hardening-guide",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/k3s-hardening-guide.md",tags:[],version:"current",lastUpdatedAt:1683884717,formattedLastUpdatedAt:"2023\u5e745\u670812\u65e5",frontMatter:{title:"K3s Hardening Guide"},sidebar:"tutorialSidebar",previous:{title:"RKE2 Self-Assessment Guide - CIS Benchmark v1.23 - K8s v1.25",permalink:"/zh/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.23-k8s-v1.25"},next:{title:"K3s Self-Assessment Guide - CIS Benchmark v1.23 - K8s v1.23",permalink:"/zh/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.23-k8s-v1.23"}},u={},p=[{value:"Host-level Requirements",id:"host-level-requirements",level:2},{value:"Ensure <code>protect-kernel-defaults</code> is set",id:"ensure-protect-kernel-defaults-is-set",level:3},{value:"Set kernel parameters",id:"set-kernel-parameters",level:3},{value:"Kubernetes Runtime Requirements",id:"kubernetes-runtime-requirements",level:2},{value:"Pod Security",id:"pod-security",level:3},{value:"Network Policies",id:"network-policies",level:3},{value:"API Server audit configuration",id:"api-server-audit-configuration",level:3},{value:"Controller Manager Requirements",id:"controller-manager-requirements",level:3},{value:"Configure <code>default</code> Service Account",id:"configure-default-service-account",level:3},{value:"Reference Hardened K3s Template Configuration",id:"reference-hardened-k3s-template-configuration",level:2},{value:"Conclusion",id:"conclusion",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},m=d("Tabs"),k=d("TabItem"),h={toc:p};function f(e){var{components:n}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document provides prescriptive guidance for how to harden a K3s cluster intended for production, before provisioning it with Rancher. It outlines the configurations and controls required for Center for Information Security (CIS) Kubernetes benchmark controls."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This hardening guide describes how to secure the nodes in your cluster. We recommended that you follow this guide before you install Kubernetes.")),(0,a.kt)("p",null,"This hardening guide is intended to be used for K3s clusters and is associated with the following versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,a.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rancher v2.7"),(0,a.kt)("td",{parentName:"tr",align:null},"Benchmark v1.23"),(0,a.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.23 up to v1.25")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"At the time of writing, the upstream CIS Kubernetes v1.25 benchmark is not yet available in Rancher. At this time Rancher is using the CIS v1.23 benchmark when scanning Kubernetes v1.25 clusters.")),(0,a.kt)("p",null,"For more details on how to evaluate a hardened K3s cluster against the official CIS benchmark, refer to the K3s self-assessment guides for specific Kubernetes and CIS benchmark versions."),(0,a.kt)("p",null,"K3s passes a number of the Kubernetes CIS controls without modification, as it applies several security mitigations by default. There are some notable exceptions to this that require manual intervention to fully comply with the CIS Benchmark:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"K3s does not modify the host operating system. Any host-level modifications need to be done manually."),(0,a.kt)("li",{parentName:"ol"},"Certain CIS policy controls for ",(0,a.kt)("inlineCode",{parentName:"li"},"NetworkPolicies")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"PodSecurityStandards")," (",(0,a.kt)("inlineCode",{parentName:"li"},"PodSecurityPolicies")," on v1.24 and older) restrict cluster functionality.\nYou must opt into having K3s configure these policies. Add the appropriate options to your command-line flags or configuration file (enable admission plugins), and manually apply the appropriate policies.\nSee further for more details.")),(0,a.kt)("p",null,"The first section (1.1) of the CIS Benchmark primarily focuses on  pod manifest permissions and ownership. Since everything in the distribution is packaged in a single binary, this section does not apply to the core components of K3s."),(0,a.kt)("h2",{id:"host-level-requirements"},"Host-level Requirements"),(0,a.kt)("h3",{id:"ensure-protect-kernel-defaults-is-set"},"Ensure ",(0,a.kt)("inlineCode",{parentName:"h3"},"protect-kernel-defaults")," is set"),(0,a.kt)("p",null,"This is a kubelet flag that will cause the kubelet to exit if the required kernel parameters are unset or are set to values that are different from the kubelet's defaults."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"protect-kernel-defaults")," flag can be set in the cluster configuration in Rancher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineSelectorConfig:\n      - config:\n          protect-kernel-defaults: true\n")),(0,a.kt)("h3",{id:"set-kernel-parameters"},"Set kernel parameters"),(0,a.kt)("p",null,"The following ",(0,a.kt)("inlineCode",{parentName:"p"},"sysctl")," configuration is recommended for all nodes type in the cluster. Set the following parameters in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.d/90-kubelet.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"vm.panic_on_oom=0\nvm.overcommit_memory=1\nkernel.panic=10\nkernel.panic_on_oops=1\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo sysctl -p /etc/sysctl.d/90-kubelet.conf")," to enable the settings."),(0,a.kt)("p",null,"This configuration needs to be done before setting the kubelet flag, otherwise K3s will fail to start."),(0,a.kt)("h2",{id:"kubernetes-runtime-requirements"},"Kubernetes Runtime Requirements"),(0,a.kt)("p",null,"The CIS Benchmark runtime requirements center around pod security (via PSP or PSA), network policies and API Server auditing logs."),(0,a.kt)("p",null,"By default, K3s does not include any pod security or network policies. However, K3s ships with a controller that enforces any network policies you create. By default, K3s enables both the ",(0,a.kt)("inlineCode",{parentName:"p"},"PodSecurity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeRestriction")," admission controllers, among others."),(0,a.kt)("h3",{id:"pod-security"},"Pod Security"),(0,a.kt)(m,{groupId:"k3s-version",mdxType:"Tabs"},(0,a.kt)(k,{value:"v1.25 and Newer",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"K3s v1.25 and newer support ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security admission (PSA)")," for controlling pod security."),(0,a.kt)("p",null,"You can specify the PSA configuration by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultPodSecurityAdmissionConfigurationTemplateName")," field in the cluster configuration in Rancher:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-restricted")," template is provided by Rancher to enforce the highly-restrictive Kubernetes upstream ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted"},(0,a.kt)("inlineCode",{parentName:"a"},"Restricted"))," profile with best practices for pod hardening.")),(0,a.kt)(k,{value:"v1.24 and Older",mdxType:"TabItem"},(0,a.kt)("p",null,"K3s v1.24 and older support ",(0,a.kt)("a",{parentName:"p",href:"https://v1-24.docs.kubernetes.io/docs/concepts/security/pod-security-policy/"},"Pod Security Policy (PSP)")," for controlling pod security."),(0,a.kt)("p",null,"You can enable PSPs by passing the following flags in the cluster configuration in Rancher:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n        - enable-admission-plugins=NodeRestriction,PodSecurityPolicy,ServiceAccount\n")),(0,a.kt)("p",null,"This maintains the ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeRestriction")," plugin and enables the ",(0,a.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicy"),"."),(0,a.kt)("p",null,"Once you enable PSPs, you can apply a policy to satisfy the necessary controls described in section 5.2 of the CIS Benchmark."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These are manual checks in the CIS Benchmark. The CIS scan flags the results as ",(0,a.kt)("inlineCode",{parentName:"p"},"warning"),", because manual inspection is necessary by the cluster operator.")),(0,a.kt)("p",null,"Here is an example of a compliant PSP:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: restricted-psp\nspec:\n  privileged: false                # CIS - 5.2.1\n  allowPrivilegeEscalation: false  # CIS - 5.2.5\n  requiredDropCapabilities:        # CIS - 5.2.7/8/9\n    - ALL\n  volumes:\n    - 'configMap'\n    - 'emptyDir'\n    - 'projected'\n    - 'secret'\n    - 'downwardAPI'\n    - 'csi'\n    - 'persistentVolumeClaim'\n    - 'ephemeral'\n  hostNetwork: false               # CIS - 5.2.4\n  hostIPC: false                   # CIS - 5.2.3\n  hostPID: false                   # CIS - 5.2.2\n  runAsUser:\n    rule: 'MustRunAsNonRoot'       # CIS - 5.2.6\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: false\n")),(0,a.kt)("p",null,"For the example PSP to be effective, we need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterRole")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding"),'. We also need to include a "system unrestricted policy" for system-level pods that require additional privileges, and an additional policy that allows the necessary sysctls for full functionality of ServiceLB.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: restricted-psp\nspec:\n  privileged: false\n  allowPrivilegeEscalation: false\n  requiredDropCapabilities:\n    - ALL\n  volumes:\n    - 'configMap'\n    - 'emptyDir'\n    - 'projected'\n    - 'secret'\n    - 'downwardAPI'\n    - 'csi'\n    - 'persistentVolumeClaim'\n    - 'ephemeral'\n  hostNetwork: false\n  hostIPC: false\n  hostPID: false\n  runAsUser:\n    rule: 'MustRunAsNonRoot'\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: false\n---\napiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: system-unrestricted-psp\n  annotations:\n    seccomp.security.alpha.kubernetes.io/allowedProfileNames: '*'\nspec:\n  allowPrivilegeEscalation: true\n  allowedCapabilities:\n  - '*'\n  fsGroup:\n    rule: RunAsAny\n  hostIPC: true\n  hostNetwork: true\n  hostPID: true\n  hostPorts:\n  - max: 65535\n    min: 0\n  privileged: true\n  runAsUser:\n    rule: RunAsAny\n  seLinux:\n    rule: RunAsAny\n  supplementalGroups:\n    rule: RunAsAny\n  volumes:\n  - '*'\n---\napiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: svclb-psp\n  annotations:\n    seccomp.security.alpha.kubernetes.io/allowedProfileNames: '*'\nspec:\n  allowPrivilegeEscalation: false\n  allowedCapabilities:\n  - NET_ADMIN\n  allowedUnsafeSysctls:\n  - net.ipv4.ip_forward\n  - net.ipv6.conf.all.forwarding\n  fsGroup:\n    rule: RunAsAny\n  hostPorts:\n  - max: 65535\n    min: 0\n  runAsUser:\n    rule: RunAsAny\n  seLinux:\n    rule: RunAsAny\n  supplementalGroups:\n    rule: RunAsAny\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:restricted-psp\nrules:\n- apiGroups:\n  - policy\n  resources:\n  - podsecuritypolicies\n  verbs:\n  - use\n  resourceNames:\n  - restricted-psp\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:system-unrestricted-psp\nrules:\n- apiGroups:\n  - policy\n  resources:\n  - podsecuritypolicies\n  resourceNames:\n  - system-unrestricted-psp\n  verbs:\n  - use\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:svclb-psp\nrules:\n- apiGroups:\n  - policy\n  resources:\n  - podsecuritypolicies\n  resourceNames:\n  - svclb-psp\n  verbs:\n  - use\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:svc-local-path-provisioner-psp\nrules:\n- apiGroups:\n  - policy\n  resources:\n  - podsecuritypolicies\n  resourceNames:\n  - system-unrestricted-psp\n  verbs:\n  - use\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:svc-coredns-psp\nrules:\n- apiGroups:\n  - policy\n  resources:\n  - podsecuritypolicies\n  resourceNames:\n  - system-unrestricted-psp\n  verbs:\n  - use\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:svc-cis-operator-psp\nrules:\n- apiGroups:\n  - policy\n  resources:\n  - podsecuritypolicies\n  resourceNames:\n  - system-unrestricted-psp\n  verbs:\n  - use\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: default:restricted-psp\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:restricted-psp\nsubjects:\n- kind: Group\n  name: system:authenticated\n  apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: system-unrestricted-node-psp-rolebinding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:system-unrestricted-psp\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: Group\n  name: system:nodes\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: system-unrestricted-svc-acct-psp-rolebinding\n  namespace: kube-system\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:system-unrestricted-psp\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: Group\n  name: system:serviceaccounts\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: svclb-psp-rolebinding\n  namespace: kube-system\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:svclb-psp\nsubjects:\n- kind: ServiceAccount\n  name: svclb\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: svc-local-path-provisioner-psp-rolebinding\n  namespace: kube-system\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:svc-local-path-provisioner-psp\nsubjects:\n- kind: ServiceAccount\n  name: local-path-provisioner-service-account\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: svc-coredns-psp-rolebinding\n  namespace: kube-system\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:svc-coredns-psp\nsubjects:\n- kind: ServiceAccount\n  name: coredns\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: svc-cis-operator-psp-rolebinding\n  namespace: cis-operator-system\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:svc-cis-operator-psp\nsubjects:\n- kind: ServiceAccount\n  name: cis-operator-serviceaccount\n")),(0,a.kt)("p",null,"The policies presented above can be placed in a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"policy.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," directory. Both the policy file and the its directory hierarchy must be created before starting K3s. A restrictive access permission is recommended to avoid leaking potential sensitive information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/manifests\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The critical Kubernetes additions such as CNI, DNS, and Ingress are run as pods in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. Therefore, this namespace has a less restrictive policy, so that these components can run properly.")))),(0,a.kt)("h3",{id:"network-policies"},"Network Policies"),(0,a.kt)("p",null,"CIS requires that all namespaces apply a network policy that reasonably limits traffic into namespaces and pods."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is a manual check in the CIS Benchmark. The CIS scan flags the result as a ",(0,a.kt)("inlineCode",{parentName:"p"},"warning"),", because manual inspection is necessary by the cluster operator.")),(0,a.kt)("p",null,"The network policies can be placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"policy.yaml")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," directory. If the directory was not created as part of the PSP (as described above), it must be created first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/manifests\n")),(0,a.kt)("p",null,"Here is an example of a compliant network policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nkind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: intra-namespace\n  namespace: kube-system\nspec:\n  podSelector: {}\n  ingress:\n    - from:\n      - namespaceSelector:\n          matchLabels:\n            name: kube-system\n---\nkind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: intra-namespace\n  namespace: default\nspec:\n  podSelector: {}\n  ingress:\n    - from:\n      - namespaceSelector:\n          matchLabels:\n            name: default\n---\nkind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: intra-namespace\n  namespace: kube-public\nspec:\n  podSelector: {}\n  ingress:\n    - from:\n      - namespaceSelector:\n          matchLabels:\n            name: kube-public\n")),(0,a.kt)("p",null,"The active restrictions block DNS unless purposely allowed. Below is a network policy that allows DNS-related traffic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-network-dns-policy\n  namespace: <NAMESPACE>\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n      k8s-app: kube-dns\n  policyTypes:\n  - Ingress\n")),(0,a.kt)("p",null,"The metrics-server and Traefik ingress controller are blocked by default if network policies are not created to allow access."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-metrics-server\n  namespace: kube-system\nspec:\n  podSelector:\n    matchLabels:\n      k8s-app: metrics-server\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-svclbtraefik-ingress\n  namespace: kube-system\nspec:\n  podSelector:\n    matchLabels:\n      svccontroller.k3s.cattle.io/svcname: traefik\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-traefik-v121-ingress\n  namespace: kube-system\nspec:\n  podSelector:\n    matchLabels:\n      app.kubernetes.io/name: traefik\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You must manage network policies as normal for any additional namespaces you create.")),(0,a.kt)("h3",{id:"api-server-audit-configuration"},"API Server audit configuration"),(0,a.kt)("p",null,"CIS requirements 1.2.22 to 1.2.25 are related to configuring audit logs for the API Server. K3s does not create by default the log directory and audit policy, as auditing requirements are specific to each user's policies and environment."),(0,a.kt)("p",null,"If you need a log directory, it must be created before you start K3s. We recommend a restrictive access permission to avoid leaking sensitive information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/logs\n")),(0,a.kt)("p",null,"The following is a starter audit policy to log request metadata. This policy should be written to a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"audit.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server")," directory. Detailed information about policy configuration for the API server can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"},"official Kubernetes documentation"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: audit.k8s.io/v1\nkind: Policy\nrules:\n- level: Metadata\n")),(0,a.kt)("p",null,"Further configurations are also needed to pass CIS checks. These are not configured by default in K3s, because they vary based on your environment and needs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure that the ",(0,a.kt)("inlineCode",{parentName:"li"},"--audit-log-path")," argument is set."),(0,a.kt)("li",{parentName:"ul"},"Ensure that the ",(0,a.kt)("inlineCode",{parentName:"li"},"--audit-log-maxage")," argument is set to 30 or as appropriate."),(0,a.kt)("li",{parentName:"ul"},"Ensure that the ",(0,a.kt)("inlineCode",{parentName:"li"},"--audit-log-maxbackup")," argument is set to 10 or as appropriate."),(0,a.kt)("li",{parentName:"ul"},"Ensure that the ",(0,a.kt)("inlineCode",{parentName:"li"},"--audit-log-maxsize")," argument is set to 100 or as appropriate.")),(0,a.kt)("p",null,"Combined, to enable and configure audit logs, add the following lines to the K3s cluster configuration file in Rancher:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n        - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS 3.2.1\n        - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS 1.2.18\n        - audit-log-maxage=30                                         # CIS 1.2.19\n        - audit-log-maxbackup=10                                      # CIS 1.2.20\n        - audit-log-maxsize=100                                       # CIS 1.2.21\n")),(0,a.kt)("h3",{id:"controller-manager-requirements"},"Controller Manager Requirements"),(0,a.kt)("p",null,"CIS requirement 1.3.1 checks for garbage collection settings in the Controller Manager. Garbage collection is important to ensure sufficient resource availability and avoid degraded performance and availability. Based on your system resources and tests, choose an appropriate threshold value to activate garbage collection."),(0,a.kt)("p",null,"This can be remediated by setting the following configuration in the K3s cluster file in Rancher. The value below is only an example. The appropriate threshold value is specific to each user's environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineGlobalConfig:\n      kube-controller-manager-arg:\n        - terminated-pod-gc-threshold=10                              # CIS 1.3.1\n")),(0,a.kt)("h3",{id:"configure-default-service-account"},"Configure ",(0,a.kt)("inlineCode",{parentName:"h3"},"default")," Service Account"),(0,a.kt)("p",null,"Kubernetes provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," service account which is used by cluster workloads where no specific service account is assigned to the pod. Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account."),(0,a.kt)("p",null,"For CIS requirement 5.1.5 the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments."),(0,a.kt)("p",null,"This can be remediated by updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"automountServiceAccountToken")," field to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," service account in each namespace."),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," service accounts in the built-in namespaces (",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-public"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-node-lease"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"default)"),", K3s does not automatically do this."),(0,a.kt)("p",null,"Save the following configuration to a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"account_update.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: default\nautomountServiceAccountToken: false\n")),(0,a.kt)("p",null,"Create a bash script file called ",(0,a.kt)("inlineCode",{parentName:"p"},"account_update.sh"),". Be sure to ",(0,a.kt)("inlineCode",{parentName:"p"},"chmod +x account_update.sh")," so the script has execute permissions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash -e\n\nfor namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*][\'metadata.name\']}"); do\n  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"\ndone\n')),(0,a.kt)("p",null,"Run the script every time a new service account is added to your cluster."),(0,a.kt)("h2",{id:"reference-hardened-k3s-template-configuration"},"Reference Hardened K3s Template Configuration"),(0,a.kt)("p",null,"The following reference template configuration is used in Rancher to create a hardened K3s custom cluster based on each CIS control in this guide. This reference does not include other required ",(0,a.kt)("strong",{parentName:"p"},"cluster configuration")," directives, which vary based on your environment."),(0,a.kt)(m,{groupId:"k3s-version",mdxType:"Tabs"},(0,a.kt)(k,{value:"v1.25 and Newer",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: provisioning.cattle.io/v1\nkind: Cluster\nmetadata:\n  name: # Define cluster name\nspec:\n  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted\n  enableNetworkPolicy: true\n  kubernetesVersion: # Define K3s version\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n        - enable-admission-plugins=NodeRestriction,ServiceAccount     # CIS 1.2.15, 1.2.13\n        - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS 3.2.1\n        - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS 1.2.18\n        - audit-log-maxage=30                                         # CIS 1.2.19\n        - audit-log-maxbackup=10                                      # CIS 1.2.20\n        - audit-log-maxsize=100                                       # CIS 1.2.21\n        - request-timeout=300s                                        # CIS 1.2.22\n        - service-account-lookup=true                                 # CIS 1.2.24\n      kube-controller-manager-arg:\n        - terminated-pod-gc-threshold=10                              # CIS 1.3.1\n      secrets-encryption: true\n    machineSelectorConfig:\n      - config:\n          kubelet-arg:\n            - make-iptables-util-chains=true                          # CIS 4.2.7\n          protect-kernel-defaults: true                               # CIS 4.2.6\n"))),(0,a.kt)(k,{value:"v1.24 and Older",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: provisioning.cattle.io/v1\nkind: Cluster\nmetadata:\n  name: # Define cluster name\nspec:\n  enableNetworkPolicy: true\n  kubernetesVersion: # Define K3s version\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n        - enable-admission-plugins=NodeRestriction,PodSecurityPolicy,ServiceAccount    # CIS 1.2.15, 5.2, 1.2.13\n        - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS 3.2.1\n        - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS 1.2.18\n        - audit-log-maxage=30                                         # CIS 1.2.19\n        - audit-log-maxbackup=10                                      # CIS 1.2.20\n        - audit-log-maxsize=100                                       # CIS 1.2.21\n        - request-timeout=300s                                        # CIS 1.2.22\n        - service-account-lookup=true                                 # CIS 1.2.24\n      kube-controller-manager-arg:\n        - terminated-pod-gc-threshold=10                              # CIS 1.3.1\n      secrets-encryption: true\n    machineSelectorConfig:\n      - config:\n          kubelet-arg:\n            - make-iptables-util-chains=true                          # CIS 4.2.7\n          protect-kernel-defaults: true                               # CIS 4.2.6\n")))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"If you have followed this guide, your K3s custom cluster provisioned by Rancher will be configured to pass the CIS Kubernetes Benchmark. You can review our K3s self-assessment guides to understand how we verified each of the benchmarks and how you can do the same on your cluster."))}f.isMDXComponent=!0}}]);
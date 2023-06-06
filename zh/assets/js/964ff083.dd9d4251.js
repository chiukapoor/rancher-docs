"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[38099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),k=a,h=d["".concat(c,".").concat(k)]||d[k]||p[k]||l;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"K3s \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"},c=void 0,s={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration",id:"reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration",title:"K3s \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",description:"\u672c\u6587\u4ecb\u7ecd Rancher \u4e2d\u53ef\u7528\u4e8e\u65b0\u7684\u6216\u73b0\u6709\u7684 K3s Kubernetes \u96c6\u7fa4\u7684\u914d\u7f6e\u9009\u9879\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration",permalink:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"K3s \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"},sidebar:"tutorialSidebar",previous:{title:"RKE2 \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration"},next:{title:"EKS \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"}},u={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Rancher UI \u4e2d\u7684\u914d\u7f6e\u9009\u9879",id:"rancher-ui-\u4e2d\u7684\u914d\u7f6e\u9009\u9879",level:2},{value:"\u57fa\u672c\u4fe1\u606f",id:"\u57fa\u672c\u4fe1\u606f",level:3},{value:"Kubernetes \u7248\u672c",id:"kubernetes-\u7248\u672c",level:4},{value:"\u52a0\u5bc6\u5bc6\u6587",id:"\u52a0\u5bc6\u5bc6\u6587",level:4},{value:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb",id:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb",level:4},{value:"SELinux",id:"selinux",level:4},{value:"CoreDNS",id:"coredns",level:4},{value:"Klipper Service LB",id:"klipper-service-lb",level:4},{value:"Traefik Ingress",id:"traefik-ingress",level:4},{value:"Local Storage",id:"local-storage",level:4},{value:"Metrics Server",id:"metrics-server",level:4},{value:"\u9644\u52a0\u914d\u7f6e",id:"\u9644\u52a0\u914d\u7f6e",level:3},{value:"Agent \u73af\u5883\u53d8\u91cf",id:"agent-\u73af\u5883\u53d8\u91cf",level:3},{value:"etcd",id:"etcd",level:3},{value:"\u81ea\u52a8\u5feb\u7167",id:"\u81ea\u52a8\u5feb\u7167",level:4},{value:"\u6307\u6807",id:"\u6307\u6807",level:4},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u96c6\u7fa4 CIDR",id:"\u96c6\u7fa4-cidr",level:4},{value:"Service CIDR",id:"service-cidr",level:4},{value:"\u96c6\u7fa4 DNS",id:"\u96c6\u7fa4-dns",level:4},{value:"\u96c6\u7fa4\u57df\u540d",id:"\u96c6\u7fa4\u57df\u540d",level:4},{value:"NodePort \u670d\u52a1\u7aef\u53e3\u8303\u56f4",id:"nodeport-\u670d\u52a1\u7aef\u53e3\u8303\u56f4",level:4},{value:"TLS \u53ef\u9009\u540d\u79f0",id:"tls-\u53ef\u9009\u540d\u79f0",level:4},{value:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9",id:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9",level:4},{value:"\u955c\u50cf\u4ed3\u5e93",id:"\u955c\u50cf\u4ed3\u5e93",level:3},{value:"\u5347\u7ea7\u7b56\u7565",id:"\u5347\u7ea7\u7b56\u7565",level:3},{value:"controlplane \u5e76\u53d1",id:"controlplane-\u5e76\u53d1",level:4},{value:"Worker \u5e76\u53d1",id:"worker-\u5e76\u53d1",level:4},{value:"\u6e05\u7a7a\u8282\u70b9\uff08controlplane\uff09",id:"\u6e05\u7a7a\u8282\u70b9controlplane",level:4},{value:"\u6e05\u7a7a\u8282\u70b9\uff08worker \u8282\u70b9\uff09",id:"\u6e05\u7a7a\u8282\u70b9worker-\u8282\u70b9",level:4},{value:"\u9ad8\u7ea7\u914d\u7f6e",id:"\u9ad8\u7ea7\u914d\u7f6e",level:3},{value:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",id:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",level:2}],d={toc:p};function k(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd Rancher \u4e2d\u53ef\u7528\u4e8e\u65b0\u7684\u6216\u73b0\u6709\u7684 K3s Kubernetes \u96c6\u7fa4\u7684\u914d\u7f6e\u9009\u9879\u3002"),(0,n.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u4e4b\u4e00\u6765\u914d\u7f6e Kubernetes \u9009\u9879\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#rancher-ui-%E4%B8%AD%E7%9A%84%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"Rancher UI"),"\uff1a\u4f7f\u7528 Rancher UI \u6765\u9009\u62e9\u8bbe\u7f6e Kubernetes \u96c6\u7fa4\u65f6\u5e38\u7528\u7684\u81ea\u5b9a\u4e49\u9009\u9879\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"),"\uff1a\u9ad8\u7ea7\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a K3s \u914d\u7f6e\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 Rancher UI \u6765\u4e3a\u96c6\u7fa4\u9009\u62e9 Kubernetes \u9009\u9879\u3002\u914d\u7f6e\u6587\u4ef6\u5141\u8bb8\u4f60\u8bbe\u7f6e K3s \u5b89\u88c5\u4e2d\u53ef\u7528\u7684\u4efb\u4f55",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"\u9009\u9879"),"\u3002")),(0,n.kt)("h2",{id:"rancher-ui-\u4e2d\u7684\u914d\u7f6e\u9009\u9879"},"Rancher UI \u4e2d\u7684\u914d\u7f6e\u9009\u9879"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4e00\u4e9b\u9ad8\u7ea7\u914d\u7f6e\u9009\u9879\u6ca1\u6709\u5728 Rancher UI \u8868\u5355\u4e2d\u5f00\u653e\uff0c\u4f46\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 YAML \u4e2d\u7f16\u8f91 K3s \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u6765\u542f\u7528\u8fd9\u4e9b\u9009\u9879\u3002\u6709\u5173 YAML \u4e2d K3s \u96c6\u7fa4\u7684\u53ef\u914d\u7f6e\u9009\u9879\u7684\u5b8c\u6574\u53c2\u8003\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"K3s \u6587\u6863"),"\u3002")),(0,n.kt)("h3",{id:"\u57fa\u672c\u4fe1\u606f"},"\u57fa\u672c\u4fe1\u606f"),(0,n.kt)("h4",{id:"kubernetes-\u7248\u672c"},"Kubernetes \u7248\u672c"),(0,n.kt)("p",null,"\u8fd9\u6307\u7684\u662f\u96c6\u7fa4\u8282\u70b9\u4e0a\u5b89\u88c5\u7684 Kubernetes \u7248\u672c\u3002Rancher \u57fa\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/hyperkube"},"hyperkube")," \u6253\u5305\u4e86\u81ea\u5df1\u7684 Kubernetes \u7248\u672c\u3002"),(0,n.kt)("p",null,"\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"\u5347\u7ea7 Kubernetes"),"\u3002"),(0,n.kt)("h4",{id:"\u52a0\u5bc6\u5bc6\u6587"},"\u52a0\u5bc6\u5bc6\u6587"),(0,n.kt)("p",null,"\u542f\u7528\u6216\u7981\u7528\u5bc6\u6587\u52a0\u5bc6\u7684\u9009\u9879\u3002\u542f\u7528\u540e\uff0c\u5bc6\u6587\u5c06\u4f7f\u7528 AES-CBC \u5bc6\u94a5\u8fdb\u884c\u52a0\u5bc6\u3002\u5982\u679c\u7981\u7528\uff0c\u5219\u5728\u518d\u6b21\u542f\u7528\u52a0\u5bc6\u4e4b\u524d\u65e0\u6cd5\u8bfb\u53d6\u4efb\u4f55\u4ee5\u524d\u7684\u5bc6\u6587\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#secrets-encryption-config-experimental"},"K3s \u6587\u6863"),"\u3002"),(0,n.kt)("h4",{id:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb"},"\u9879\u76ee\u7f51\u7edc\u9694\u79bb"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7f51\u7edc\u63d0\u4f9b\u5546\u5141\u8bb8\u9879\u76ee\u7f51\u7edc\u9694\u79bb\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u542f\u7528\u6216\u7981\u7528\u9879\u76ee\u95f4\u7684\u901a\u4fe1\u3002"),(0,n.kt)("h4",{id:"selinux"},"SELinux"),(0,n.kt)("p",null,"\u542f\u7528\u6216\u7981\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#selinux-support"},"SELinux")," \u652f\u6301\u7684\u9009\u9879\u3002"),(0,n.kt)("h4",{id:"coredns"},"CoreDNS"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://coredns.io/"},"CoreDNS")," \u4f1a\u5b89\u88c5\u4e3a\u9ed8\u8ba4 DNS \u63d0\u4f9b\u7a0b\u5e8f\u3002\u5982\u679c\u672a\u5b89\u88c5 CoreDNS\uff0c\u5219\u5fc5\u987b\u81ea\u5df1\u5b89\u88c5\u5907\u7528 DNS \u63d0\u4f9b\u7a0b\u5e8f\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/networking/#coredns"},"K3s \u6587\u6863"),"\u3002"),(0,n.kt)("h4",{id:"klipper-service-lb"},"Klipper Service LB"),(0,n.kt)("p",null,"\u542f\u7528\u6216\u7981\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/klipper-lb"},"Klipper")," \u670d\u52a1\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u9009\u9879\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/networking/#service-load-balancer"},"K3s \u6587\u6863"),"\u3002"),(0,n.kt)("h4",{id:"traefik-ingress"},"Traefik Ingress"),(0,n.kt)("p",null,"\u542f\u7528\u6216\u7981\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik")," HTTP \u53cd\u5411\u4ee3\u7406\u548c\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u9009\u9879\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u914d\u7f6e\u9009\u9879\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/networking/#traefik-ingress-controller"},"K3s \u6587\u6863"),"\u3002"),(0,n.kt)("h4",{id:"local-storage"},"Local Storage"),(0,n.kt)("p",null,"\u5728\u8282\u70b9\u4e0a\u542f\u7528\u6216\u7981\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/storage/"},"Local Storage")," \u7684\u9009\u9879\u3002"),(0,n.kt)("h4",{id:"metrics-server"},"Metrics Server"),(0,n.kt)("p",null,"\u542f\u7528\u6216\u7981\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/metrics-server"},"metrics server")," \u7684\u9009\u9879\u3002\u5982\u679c\u542f\u7528\uff0c\u8bf7\u786e\u4fdd\u4e3a\u5165\u7ad9 TCP \u6d41\u91cf\u6253\u5f00 10250 \u7aef\u53e3\u3002"),(0,n.kt)("h3",{id:"\u9644\u52a0\u914d\u7f6e"},"\u9644\u52a0\u914d\u7f6e"),(0,n.kt)("p",null,"\u96c6\u7fa4\u542f\u52a8\u65f6\u5c06\u5e94\u7528\u7684\u5176\u4ed6 Kubernetes \u6e05\u5355\uff0c\u4f1a\u4f5c\u4e3a",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/addons/"},"\u9644\u52a0\u7ec4\u4ef6"),"\u6765\u7ba1\u7406\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/helm/#automatically-deploying-manifests-and-helm-charts"},"K3s \u6587\u6863"),"\u3002"),(0,n.kt)("h3",{id:"agent-\u73af\u5883\u53d8\u91cf"},"Agent \u73af\u5883\u53d8\u91cf"),(0,n.kt)("p",null,"\u4e3a ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/architecture/"},"K3s agent")," \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u7684\u9009\u9879\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u952e\u503c\u5bf9\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/agent-config/"},"K3s \u6587\u6863"),"\u3002"),(0,n.kt)("h3",{id:"etcd"},"etcd"),(0,n.kt)("h4",{id:"\u81ea\u52a8\u5feb\u7167"},"\u81ea\u52a8\u5feb\u7167"),(0,n.kt)("p",null,"\u542f\u7528\u6216\u7981\u7528\u5b9a\u671f etcd \u5feb\u7167\u7684\u9009\u9879\u3002\u5982\u679c\u542f\u7528\uff0c\u7528\u6237\u53ef\u4ee5\u914d\u7f6e\u5feb\u7167\u7684\u9891\u7387\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/backup-restore/#creating-snapshots"},"K3s \u6587\u6863"),"\u3002"),(0,n.kt)("h4",{id:"\u6307\u6807"},"\u6307\u6807"),(0,n.kt)("p",null,"\u9009\u62e9\u5411\u516c\u4f17\u516c\u5f00\u6216\u4ec5\u5728\u96c6\u7fa4\u5185\u516c\u5f00 etcd \u6307\u6807\u7684\u9009\u9879\u3002"),(0,n.kt)("h3",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,n.kt)("h4",{id:"\u96c6\u7fa4-cidr"},"\u96c6\u7fa4 CIDR"),(0,n.kt)("p",null,"\u7528\u4e8e pod IP \u7684 IPv4/IPv6 \u7f51\u7edc CIDR\uff08\u9ed8\u8ba4\uff1a10.42.0.0/16\uff09\u3002"),(0,n.kt)("h4",{id:"service-cidr"},"Service CIDR"),(0,n.kt)("p",null,"\u7528\u4e8e Service IP \u7684 IPv4/IPv6 \u7f51\u7edc CIDR\uff08\u9ed8\u8ba4\uff1a10.43.0.0/16\uff09\u3002"),(0,n.kt)("h4",{id:"\u96c6\u7fa4-dns"},"\u96c6\u7fa4 DNS"),(0,n.kt)("p",null,"\u7528\u4e8e coredns \u670d\u52a1\u7684 IPv4 \u96c6\u7fa4 IP\u3002\u5e94\u8be5\u5728\u4f60\u7684 service-cidr \u8303\u56f4\u5185\uff08\u9ed8\u8ba4\uff1a10.43.0.10\uff09\u3002"),(0,n.kt)("h4",{id:"\u96c6\u7fa4\u57df\u540d"},"\u96c6\u7fa4\u57df\u540d"),(0,n.kt)("p",null,"\u9009\u62e9\u96c6\u7fa4\u7684\u57df\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster.local"),"\u3002"),(0,n.kt)("h4",{id:"nodeport-\u670d\u52a1\u7aef\u53e3\u8303\u56f4"},"NodePort \u670d\u52a1\u7aef\u53e3\u8303\u56f4"),(0,n.kt)("p",null,"\u66f4\u6539\u53ef\u7528\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort \u670d\u52a1"),"\u7684\u7aef\u53e3\u8303\u56f4\u7684\u9009\u9879\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"30000-32767"),"\u3002"),(0,n.kt)("h4",{id:"tls-\u53ef\u9009\u540d\u79f0"},"TLS \u53ef\u9009\u540d\u79f0"),(0,n.kt)("p",null,"\u5728\u670d\u52a1\u5668 TLS \u8bc1\u4e66\u4e0a\u6dfb\u52a0\u5176\u4ed6\u4e3b\u673a\u540d\u6216 IPv4/IPv6 \u5730\u5740\u4f5c\u4e3a Subject Alternative Name\u3002"),(0,n.kt)("h4",{id:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9"},"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9"),(0,n.kt)("p",null,"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\uff08ACE\uff09\u53ef\u7528\u4e8e\u76f4\u63a5\u8bbf\u95ee Kubernetes API server\uff0c\u800c\u65e0\u9700\u901a\u8fc7 Rancher \u8fdb\u884c\u901a\u4fe1\u3002"),(0,n.kt)("p",null,"\u6709\u5173\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u5de5\u4f5c\u539f\u7406\u4ee5\u53ca\u4f7f\u7528\u7684\u539f\u56e0\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-manager-architecture#4-%E6%8E%88%E6%9D%83%E9%9B%86%E7%BE%A4%E7%AB%AF%E7%82%B9"},"\u67b6\u6784\u4ecb\u7ecd"),"\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u5177\u6709\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-manager-architecture/architecture-recommendations#%E6%8E%88%E6%9D%83%E9%9B%86%E7%BE%A4%E7%AB%AF%E7%82%B9%E6%9E%B6%E6%9E%84"},"\u63a8\u8350\u7684\u67b6\u6784"),"\u3002"),(0,n.kt)("h3",{id:"\u955c\u50cf\u4ed3\u5e93"},"\u955c\u50cf\u4ed3\u5e93"),(0,n.kt)("p",null,"\u9009\u62e9\u8981\u4ece\u4e2d\u62c9\u53d6 Rancher \u955c\u50cf\u7684\u955c\u50cf\u4ed3\u5e93\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u914d\u7f6e\u9009\u9879\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"K3s \u6587\u6863"),"\u3002"),(0,n.kt)("h3",{id:"\u5347\u7ea7\u7b56\u7565"},"\u5347\u7ea7\u7b56\u7565"),(0,n.kt)("h4",{id:"controlplane-\u5e76\u53d1"},"controlplane \u5e76\u53d1"),(0,n.kt)("p",null,"\u9009\u62e9\u53ef\u4ee5\u540c\u65f6\u5347\u7ea7\u591a\u5c11\u4e2a\u8282\u70b9\u3002\u53ef\u4ee5\u662f\u56fa\u5b9a\u6570\u5b57\u6216\u767e\u5206\u6bd4\u3002"),(0,n.kt)("h4",{id:"worker-\u5e76\u53d1"},"Worker \u5e76\u53d1"),(0,n.kt)("p",null,"\u9009\u62e9\u53ef\u4ee5\u540c\u65f6\u5347\u7ea7\u591a\u5c11\u4e2a\u8282\u70b9\u3002\u53ef\u4ee5\u662f\u56fa\u5b9a\u6570\u5b57\u6216\u767e\u5206\u6bd4\u3002"),(0,n.kt)("h4",{id:"\u6e05\u7a7a\u8282\u70b9controlplane"},"\u6e05\u7a7a\u8282\u70b9\uff08controlplane\uff09"),(0,n.kt)("p",null,"\u5728\u5347\u7ea7\u4e4b\u524d\u4ece\u8282\u70b9\u4e2d\u5220\u9664\u6240\u6709 pod \u7684\u9009\u9879\u3002"),(0,n.kt)("h4",{id:"\u6e05\u7a7a\u8282\u70b9worker-\u8282\u70b9"},"\u6e05\u7a7a\u8282\u70b9\uff08worker \u8282\u70b9\uff09"),(0,n.kt)("p",null,"\u5728\u5347\u7ea7\u4e4b\u524d\u4ece\u8282\u70b9\u4e2d\u5220\u9664\u6240\u6709 pod \u7684\u9009\u9879\u3002"),(0,n.kt)("h3",{id:"\u9ad8\u7ea7\u914d\u7f6e"},"\u9ad8\u7ea7\u914d\u7f6e"),(0,n.kt)("p",null,"\u4e3a\u4e0d\u540c\u8282\u70b9\u8bbe\u7f6e kubelet \u9009\u9879\u3002\u6709\u5173\u53ef\u7528\u9009\u9879\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"Kubernetes \u6587\u6863"),"\u3002"),(0,n.kt)("h2",{id:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"},"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("p",null,"\u9ad8\u7ea7\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a K3s \u914d\u7f6e\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 Rancher UI \u8868\u5355\u6765\u4e3a\u96c6\u7fa4\u9009\u62e9 Kubernetes \u9009\u9879\u3002\u914d\u7f6e\u6587\u4ef6\u5141\u8bb8\u4f60\u8bbe\u7f6e K3s \u5b89\u88c5\u4e2d\u53ef\u7528\u7684\u4efb\u4f55",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"\u9009\u9879"),"\u3002"),(0,n.kt)("p",null,"\u8981\u76f4\u63a5\u4ece Rancher UI \u7f16\u8f91 K3s \u914d\u7f6e\u6587\u4ef6\uff0c\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4ee5 YAML \u6587\u4ef6\u7f16\u8f91"),"\u3002"))}k.isMDXComponent=!0}}]);
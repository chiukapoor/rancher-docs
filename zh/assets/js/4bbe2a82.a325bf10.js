"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9849],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>u});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),m=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=m(e.components);return r.createElement(c.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),g=m(t),u=n,k=g["".concat(c,".").concat(u)]||g[u]||s[u]||l;return t?r.createElement(k,p(p({ref:a},o),{},{components:t})):r.createElement(k,p({ref:a},o))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,p=new Array(l);p[0]=g;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<l;m++)p[m]=t[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},27441:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>s});t(67294);var r=t(3905);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={title:"\u5347\u7ea7 Cert-Manager"},c=void 0,m={unversionedId:"getting-started/installation-and-upgrade/resources/upgrade-cert-manager",id:"version-2.6/getting-started/installation-and-upgrade/resources/upgrade-cert-manager",title:"\u5347\u7ea7 Cert-Manager",description:"Rancher \u4f7f\u7528 cert-manager \u4e3a Rancher \u9ad8\u53ef\u7528\u90e8\u7f72\u81ea\u52a8\u751f\u6210\u548c\u7eed\u671f TLS \u8bc1\u4e66\u3002\u4ece 2019 \u79cb\u5b63\u5f00\u59cb\uff0ccert-manager \u53d1\u751f\u4e86\u4ee5\u4e0b\u7684\u4e09\u4e2a\u91cd\u8981\u53d8\u66f4\u3002\u5982\u679c\u4f60\u5728\u6b64\u65f6\u95f4\u6bb5\u524d\u521b\u5efa\u4e86 Rancher \u9ad8\u53ef\u7528\u90e8\u7f72\uff0c\u8bf7\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/getting-started/installation-and-upgrade/resources/upgrade-cert-manager.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/resources/upgrade-cert-manager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/upgrade-cert-manager.md",tags:[],version:"2.6",lastUpdatedAt:1681239575,formattedLastUpdatedAt:"2023\u5e744\u670811\u65e5",frontMatter:{title:"\u5347\u7ea7 Cert-Manager"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49 CA \u6839\u8bc1\u4e66",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"},next:{title:"\u66f4\u65b0 Rancher \u8bc1\u4e66",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/resources/update-rancher-certificate"}},o={},s=[{value:"\u5347\u7ea7 Cert-Manager",id:"\u5347\u7ea7-cert-manager",level:2},{value:"\u9009\u9879 A\uff1a\u8054\u7f51\u5347\u7ea7 cert-manager",id:"\u9009\u9879-a\u8054\u7f51\u5347\u7ea7-cert-manager",level:3},{value:"\u9009\u9879 B\uff1a\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5347\u7ea7 Cert-Manager",id:"\u9009\u9879-b\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5347\u7ea7-cert-manager",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u5b89\u88c5 cert-manager",id:"\u5b89\u88c5-cert-manager",level:3},{value:"\u9009\u9879 C\uff1a\u5347\u7ea7 1.5 \u53ca\u4ee5\u4e0b\u7248\u672c\u7684 cert-manager",id:"\u9009\u9879-c\u5347\u7ea7-15-\u53ca\u4ee5\u4e0b\u7248\u672c\u7684-cert-manager",level:3},{value:"\u9a8c\u8bc1\u90e8\u7f72",id:"\u9a8c\u8bc1\u90e8\u7f72",level:3},{value:"Cert-Manager API \u53d8\u66f4\u548c\u6570\u636e\u8fc1\u79fb",id:"cert-manager-api-\u53d8\u66f4\u548c\u6570\u636e\u8fc1\u79fb",level:2}],g={toc:s};function u(e){var{components:a}=e,t=p(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(a){n(e,a,t[a])}))}return e}({},g,t),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher \u4f7f\u7528 cert-manager \u4e3a Rancher \u9ad8\u53ef\u7528\u90e8\u7f72\u81ea\u52a8\u751f\u6210\u548c\u7eed\u671f TLS \u8bc1\u4e66\u3002\u4ece 2019 \u79cb\u5b63\u5f00\u59cb\uff0ccert-manager \u53d1\u751f\u4e86\u4ee5\u4e0b\u7684\u4e09\u4e2a\u91cd\u8981\u53d8\u66f4\u3002\u5982\u679c\u4f60\u5728\u6b64\u65f6\u95f4\u6bb5\u524d\u521b\u5efa\u4e86 Rancher \u9ad8\u53ef\u7528\u90e8\u7f72\uff0c\u8bf7\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"\u4ece 2019 \u5e74 11 \u6708 1 \u65e5\u5f00\u59cb\uff0cLet's Encrypt \u5df2\u963b\u6b62\u4f4e\u4e8e 0.8.0 \u7684 cert-manager \u5b9e\u4f8b\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"Cert-manager \u6b63\u5728\u5f03\u7528\u548c\u66ff\u6362 certificate.spec.acme.solvers \u5b57\u6bb5"),"\u3002\u6b64\u66f4\u6539\u6682\u65f6\u6ca1\u6709\u786e\u5207\u7684\u622a\u6b62\u65e5\u671f\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/"},"Cert-manager \u6b63\u5728\u5f03\u7528 ",(0,r.kt)("inlineCode",{parentName:"a"},"v1alpha1")," API \u548c\u66ff\u6362\u5b83\u7684 API \u7ec4"),"\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u4f60\u5e94\u5bf9\u8fd9\u4e9b\u53d8\u5316\uff0c\u672c\u6587\u5c06\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u5347\u7ea7 cert-manager \u6b65\u9aa4\u7684\u6587\u6863\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9610\u8ff0 cert-manager API \u7684\u53d8\u66f4\uff0c\u5e76\u63d0\u4f9b cert-manager \u5b98\u65b9\u6587\u6863\u7684\u94fe\u63a5\uff0c\u52a9\u4f60\u5b9e\u73b0\u6570\u636e\u8fc1\u79fb\u3002")),(0,r.kt)("admonition",{title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u8981\u5c06 cert-manager \u4ece\u65e9\u4e8e 1.5 \u7684\u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b",(0,r.kt)("a",{parentName:"p",href:"#%E9%80%89%E9%A1%B9-c%EF%BC%9A%E5%8D%87%E7%BA%A7-1.5-%E5%8F%8A%E4%BB%A5%E4%B8%8B%E7%89%88%E6%9C%AC%E7%9A%84-cert-manager"},"\u9009\u9879 C")," \u4e2d\u7684\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\u3002\u8bf7\u6ce8\u610f\uff0c\u4f60\u65e0\u9700\u91cd\u65b0\u5b89\u88c5 Rancher \u5373\u53ef\u6267\u884c\u6b64\u5347\u7ea7\u3002")),(0,r.kt)("h2",{id:"\u5347\u7ea7-cert-manager"},"\u5347\u7ea7 Cert-Manager"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u8bf4\u660e\u4e2d\u4f7f\u7528\u7684\u547d\u540d\u7a7a\u95f4\u662f\u7531\u5f53\u524d\u5b89\u88c5\u4e86 cert-manager \u7684\u547d\u540d\u7a7a\u95f4\u51b3\u5b9a\u7684\u3002\u5982\u679c\u5b83\u5728 kube-system \u4e2d\uff0c\u5728\u4ee5\u4e0b\u8bf4\u660e\u6b65\u9aa4\u4e2d\u4f7f\u7528\u3002\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods --all-namespaces")," \u6765\u9a8c\u8bc1\uff0c\u5e76\u68c0\u67e5 cert-manager-","*"," pods \u5217\u5728\u54ea\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u3002\u4e0d\u8981\u66f4\u6539\u8fd0\u884c cert-manager \u7684\u547d\u540d\u7a7a\u95f4\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u8981\u5347\u7ea7 cert-manager\uff0c\u8bf7\u9075\u5faa\u6b65\u9aa4\u64cd\u4f5c\u3002"),(0,r.kt)("h3",{id:"\u9009\u9879-a\u8054\u7f51\u5347\u7ea7-cert-manager"},"\u9009\u9879 A\uff1a\u8054\u7f51\u5347\u7ea7 cert-manager"),(0,r.kt)("details",{id:"normal"},(0,r.kt)("summary",null,"\u5355\u51fb\u5c55\u5f00"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/backup/"},"\u5907\u4efd\u73b0\u6709\u8d44\u6e90"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl get -o yaml --all-namespaces \\\nissuer,clusterissuer,certificates,certificaterequests > cert-manager-backup.yaml\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4ece\u4f4e\u4e8e 0.11.0 \u7684\u7248\u672c\u5347\u7ea7\uff0c\u8bf7\u5c06\u6240\u6709\u5907\u4efd\u8d44\u6e90\u4e0a\u7684 apiVersion \u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"certmanager.k8s.io/v1alpha1")," \u5347\u7ea7\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager.io/v1alpha2"),"\u3002\u5982\u679c\u4f60\u9700\u8981\u5728\u5176\u4ed6\u8d44\u6e90\u4e0a\u4f7f\u7528 cert-manager \u6ce8\u91ca\uff0c\u8bf7\u5bf9\u5176\u8fdb\u884c\u66f4\u65b0\u4ee5\u53cd\u6620\u65b0\u7684 API \u7ec4\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/#additional-annotation-changes"},"\u9644\u52a0\u6ce8\u91ca\u53d8\u66f4"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/uninstall/kubernetes/#uninstalling-with-helm"},"\u5378\u8f7d\u73b0\u6709\u90e8\u7f72"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"helm uninstall cert-manager\n")),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4f60\u5b89\u88c5\u7684 vX.Y.Z \u7248\u672c\u7684\u94fe\u63a5\u5220\u9664 CustomResourceDefinition\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl delete -f https://github.com/cert-manager/cert-manager/releases/download/vX.Y.Z/cert-manager.crds.yaml\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u72ec\u5b89\u88c5 CustomResourceDefinition \u8d44\u6e90\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply --validate=false -f https://github.com/cert-manager/cert-manager/releases/download/vX.Y.Z/cert-manager.crds.yaml\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u8fd0\u884c\u7684 Kubernetes \u7248\u672c\u662f 1.15 \u6216\u66f4\u4f4e\u7248\u672c\uff0c\u4f60\u9700\u8981\u5728\u4ee5\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," \u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--validate=false"),"\u3002\u5426\u5219\u4f60\u5c06\u770b\u5230 cert-manager CRD \u8d44\u6e90\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"x-kubernetes-preserve-unknown-fields")," \u5b57\u6bb5\u6821\u9a8c\u9519\u8bef\u63d0\u793a\u3002\u8fd9\u662f kubectl \u6267\u884c\u8d44\u6e90\u6821\u9a8c\u65b9\u5f0f\u4ea7\u751f\u7684\u826f\u6027\u9519\u8bef\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6839\u636e\u9700\u8981\u4e3a cert-manager \u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6dfb\u52a0 Jetstack Helm \u4ed3\u5e93\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u66f4\u65b0 Helm Chart \u4ed3\u5e93\u672c\u5730\u7f13\u5b58\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo update\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u65b0\u7248\u672c\u7684 cert-manager\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"helm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --version v0.12.0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/backup/#restoring-resources"},"\u6062\u590d\u5907\u4efd\u8d44\u6e90"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager-backup.yaml\n"))))),(0,r.kt)("h3",{id:"\u9009\u9879-b\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5347\u7ea7-cert-manager"},"\u9009\u9879 B\uff1a\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5347\u7ea7 Cert-Manager"),(0,r.kt)("details",{id:"airgap"},(0,r.kt)("summary",null,"\u5355\u51fb\u5c55\u5f00"),(0,r.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u5728\u6267\u884c\u5347\u7ea7\u4e4b\u524d\uff0c\u5148\u5c06\u6240\u9700\u7684\u5bb9\u5668\u955c\u50cf\u6dfb\u52a0\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\uff0c\u5e76\u4e0b\u8f7d/\u6e32\u67d3\u6240\u9700\u7684 Kubernetes manifest \u6587\u4ef6\u6765\u51c6\u5907\u79bb\u7ebf\u73af\u5883\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"\u51c6\u5907\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),"\u6307\u5357\uff0c\u5c06\u5347\u7ea7\u6240\u9700\u7684\u955c\u50cf\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u53ef\u4ee5\u8fde\u63a5\u4e92\u8054\u7f51\u7684\u7cfb\u7edf\u4e2d\uff0c\u5c06 cert-manager \u4ed3\u5e93\u6dfb\u52a0\u5230 Helm\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/cert-manager/cert-manager"},"Helm Chart \u4ed3\u5e93"),"\u4e2d\u83b7\u53d6\u6700\u65b0\u53ef\u7528\u7684 cert-manager Chart\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch jetstack/cert-manager --version v0.12.0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5b89\u88c5 Chart \u7684\u9009\u9879\u6765\u6e32\u67d3 cert-manager \u6a21\u677f\u3002\u8bb0\u4f4f\u8981\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"image.repository")," \u9009\u9879\uff0c\u4ee5\u4ece\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u955c\u50cf\u3002\u6b64\u64cd\u4f5c\u4f1a\u521b\u5efa\u4e00\u4e2a\u5305\u542b Kubernetes manifest \u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," \u76ee\u5f55\u3002"),(0,r.kt)("p",{parentName:"li"},"Helm 3 \u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"helm template cert-manager ./cert-manager-v0.12.0.tgz --output-dir . \\\n--namespace cert-manager \\\n--set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller\n--set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook\n--set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector\n")),(0,r.kt)("p",{parentName:"li"},"Helm 2 \u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./cert-manager-v0.12.0.tgz --output-dir . \\\n--name cert-manager --namespace cert-manager \\\n--set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller\n--set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook\n--set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u65b0\u65e7\u7248 cert-manager \u6240\u9700\u7684 CRD \u6587\u4ef6\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"curl -L -o cert-manager-crd.yaml https://raw.githubusercontent.com/cert-manager/cert-manager/release-0.12/deploy/manifests/00-crds.yaml\ncurl -L -o cert-manager/cert-manager-crd-old.yaml https://raw.githubusercontent.com/cert-manager/cert-manager/release-X.Y/deploy/manifests/00-crds.yaml\n")))),(0,r.kt)("h3",{id:"\u5b89\u88c5-cert-manager"},"\u5b89\u88c5 cert-manager"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5907\u4efd\u73b0\u6709\u8d44\u6e90\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl get -o yaml --all-namespaces \\\nissuer,clusterissuer,certificates,certificaterequests > cert-manager-backup.yaml\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4ece\u4f4e\u4e8e 0.11.0 \u7684\u7248\u672c\u5347\u7ea7\uff0c\u8bf7\u5c06\u6240\u6709\u5907\u4efd\u8d44\u6e90\u4e0a\u7684 apiVersion \u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"certmanager.k8s.io/v1alpha1")," \u5347\u7ea7\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager.io/v1alpha2"),"\u3002\u5982\u679c\u4f60\u9700\u8981\u5728\u5176\u4ed6\u8d44\u6e90\u4e0a\u4f7f\u7528 cert-manager \u6ce8\u91ca\uff0c\u8bf7\u5bf9\u5176\u8fdb\u884c\u66f4\u65b0\u4ee5\u53cd\u6620\u65b0\u7684 API \u7ec4\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/#additional-annotation-changes"},"\u9644\u52a0\u6ce8\u91ca\u53d8\u66f4"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u73b0\u6709\u7684 cert-manager \u5b89\u88c5\u5305\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cert-manager \\\ndelete deployment,sa,clusterrole,clusterrolebinding \\\n-l 'app=cert-manager' -l 'chart=cert-manager-v0.5.2'\n")),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4f60\u5b89\u88c5\u7684 vX.Y \u7248\u672c\u7684\u94fe\u63a5\u5220\u9664 CustomResourceDefinition\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl delete -f cert-manager/cert-manager-crd-old.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u72ec\u5b89\u88c5 CustomResourceDefinition \u8d44\u6e90\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager/cert-manager-crd.yaml\n")),(0,r.kt)("admonition",{parentName:"li",title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u8fd0\u884c\u7684 Kubernetes \u7248\u672c\u662f 1.15 \u6216\u66f4\u4f4e\u7248\u672c\uff0c\u4f60\u9700\u8981\u5728\u4ee5\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," \u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--validate=false"),"\u3002\u5426\u5219\u4f60\u5c06\u770b\u5230 cert-manager CRD \u8d44\u6e90\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"x-kubernetes-preserve-unknown-fields")," \u5b57\u6bb5\u6821\u9a8c\u9519\u8bef\u63d0\u793a\u3002\u8fd9\u662f kubectl \u6267\u884c\u8d44\u6e90\u6821\u9a8c\u65b9\u5f0f\u4ea7\u751f\u7684\u826f\u6027\u9519\u8bef\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a cert-manager \u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5 cert-manager"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cert-manager apply -R -f ./cert-manager\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/backup/#restoring-resources"},"\u6062\u590d\u5907\u4efd\u8d44\u6e90"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager-backup.yaml\n"))))),(0,r.kt)("h3",{id:"\u9009\u9879-c\u5347\u7ea7-15-\u53ca\u4ee5\u4e0b\u7248\u672c\u7684-cert-manager"},"\u9009\u9879 C\uff1a\u5347\u7ea7 1.5 \u53ca\u4ee5\u4e0b\u7248\u672c\u7684 cert-manager"),(0,r.kt)("details",{id:"normal"},(0,r.kt)("summary",null,"\u5355\u51fb\u5c55\u5f00"),(0,r.kt)("p",null,"\u4ee5\u524d\uff0c\u8981\u5347\u7ea7\u65e7\u7248\u672c\u7684 cert-manager\uff0c\u6211\u4eec\u5efa\u8bae\u5378\u8f7d\u5e76\u91cd\u65b0\u5b89\u88c5 Rancher\u3002\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u5347\u7ea7 cert-manager \u800c\u65e0\u9700\u6267\u884c\u6b64\u989d\u5916\u6b65\u9aa4\uff0c\u4ece\u800c\u66f4\u597d\u5730\u4fdd\u62a4\u4f60\u7684\u751f\u4ea7\u73af\u5883\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/cmctl/#installation"},"\u5b89\u88c5\u6307\u5357"),"\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"cmctl"),"\uff08cert-manager CLI \u5de5\u5177\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u786e\u4fdd\u6240\u6709\u4ee5\u5df2\u5f03\u7528\u7684 API \u7248\u672c\u5b58\u50a8\u5728 etcd \u4e2d\u7684 cert-manager \u81ea\u5b9a\u4e49\u8d44\u6e90\u90fd\u8fc1\u79fb\u5230 v1\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cmctl upgrade migrate-api-version\n")),(0,r.kt)("p",{parentName:"li"},"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/cmctl/#migrate-api-version"},"API \u7248\u672c\u8fc1\u79fb\u6587\u6863"),"\u3002\u53e6\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-1.5-1.6/"},"\u5c06 1.5 \u5347\u7ea7\u5230 1.6")," \u548c",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-1.6-1.7/"},"\u5c06 1.6 \u5347\u7ea7\u5230\u5230 1.7"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6b63\u5e38\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u5c06 cert-manager \u5347\u7ea7\u5230 1.7.1\u3002\u5982\u679c\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4ece\u7248\u672c 1.5 \u8f6c\u5230 1.7\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6309\u7167 Helm \u6559\u7a0b",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/kubernetes_apis/#updating-api-versions-of-a-release-manifest"},"\u66f4\u65b0\u53d1\u5e03\u6e05\u5355\u7684 API \u7248\u672c"),"\u3002Chart \u53d1\u5e03\u540d\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"release_name=rancher"),"\uff0c\u53d1\u5e03\u547d\u540d\u7a7a\u200b\u200b\u95f4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"release_namespace=cattle-system"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u89e3\u7801\u540e\u7684\u6587\u4ef6\u4e2d\uff0c\u641c\u7d22 ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager.io/v1beta1")," \u5e76\u5c06\u5176",(0,r.kt)("strong",{parentName:"p"},"\u66ff\u6362"),"\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager.io/v1"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u6b63\u5e38\u5347\u7ea7 Rancher\u3002")))),(0,r.kt)("h3",{id:"\u9a8c\u8bc1\u90e8\u7f72"},"\u9a8c\u8bc1\u90e8\u7f72"),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c cert-manager \u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u68c0\u67e5 kube-system \u547d\u540d\u7a7a\u95f4\u4e2d\u6b63\u5728\u8fd0\u884c\u7684 Pod \u6765\u9a8c\u8bc1\u5b83\u662f\u5426\u5df2\u6b63\u786e\u90e8\u7f72\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pods --namespace cert-manager\n\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-5c6866597-zw7kh               1/1     Running   0          2m\ncert-manager-cainjector-577f6d9fd7-tr77l   1/1     Running   0          2m\ncert-manager-webhook-787858fcdb-nlzsq      1/1     Running   0          2m\n")),(0,r.kt)("h2",{id:"cert-manager-api-\u53d8\u66f4\u548c\u6570\u636e\u8fc1\u79fb"},"Cert-Manager API \u53d8\u66f4\u548c\u6570\u636e\u8fc1\u79fb"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"v2.6.4 \u7684\u65b0\u529f\u80fd")),(0,r.kt)("p",null,"Rancher \u73b0\u5728\u652f\u6301 cert-manager 1.6.2 \u548c 1.7.1\u3002\u63a8\u8350\u4f7f\u7528 v1.7.x\uff0c\u56e0\u4e3a v 1.6.x \u5c06\u5728 2022 \u5e74 3 \u6708 30 \u65e5\u7ed3\u675f\u751f\u547d\u5468\u671f\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#4-%E5%AE%89%E8%A3%85-cert-manager"},"cert-manager \u6587\u6863"),"\u3002\u6709\u5173\u5c06 cert-manager \u4ece 1.5 \u5347\u7ea7\u5230 1.6 \u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1\u4e0a\u6e38\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-1.5-1.6/"},"cert-manager \u6587\u6863"),"\u3002\u6709\u5173\u5c06 cert-manager \u4ece 1.6 \u5347\u7ea7\u5230 1.7 \u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1\u4e0a\u6e38\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-1.6-1.7/"},"cert-manager \u6587\u6863"),"\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Cert-manager \u5df2\u7ecf\u5f03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"certificate.spec.acme.solvers")," \u5b57\u6bb5\uff0c\u800c\u4e14\u4f1a\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\u653e\u5f03\u5bf9\u8be5\u5b57\u6bb5\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u6839\u636e cert-manager \u6587\u6863\uff0cv0.8 \u5f15\u5165\u4e86\u914d\u7f6e ACME \u8bc1\u4e66\u8d44\u6e90\u7684\u65b0\u683c\u5f0f\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u5c31\u662f\u79fb\u52a8\u4e86 challenge solver \u5b57\u6bb5\u3002v0.9 \u65b0\u65e7\u683c\u5f0f\u5747\u652f\u6301\u3002\u8bf7\u77e5\u6089\uff0c\u4e4b\u540e\u53d1\u5e03\u7684\u65b0 cert-manager \u7248\u672c\u4f1a\u653e\u5f03\u5bf9\u65e7\u683c\u5f0f\u7684\u652f\u6301\u3002Cert-Manager \u6587\u6863\u5efa\u8bae\u4f60\u5728\u66f4\u65b0\u540e\uff0c\u5c06 ACME \u9881\u53d1\u8005\u548c\u8bc1\u4e66\u8d44\u6e90\u66f4\u65b0\u5230\u65b0\u683c\u5f0f\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u53d8\u66f4\u7ec6\u8282\u4ee5\u53ca\u8fc1\u79fb\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"\u5c06 Cert-Manager \u4ece v0.7 \u5347\u7ea7\u5230 v0.8"),"\u3002"),(0,r.kt)("p",null,"v0.11 \u7248\u672c\u6807\u5fd7\u7740\u5220\u9664\u5148\u524d Cert-Manager \u7248\u672c\u4e2d\u4f7f\u7528\u7684 v1alpha1 API\uff0c\u4ee5\u53ca\u5c06 API \u7ec4\u4ece certmanager.k8s.io \u66f4\u6539\u5230 cert-manager.io\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u5df2\u4e0d\u518d\u652f\u6301 v0.8 \u7248\u672c\u4e2d\u5df2\u5f03\u7528\u7684\u65e7\u914d\u7f6e\u683c\u5f0f\u3002\u6362\u8a00\u4e4b\uff0c\u5728\u5347\u7ea7\u5230 v0.11 \u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5148\u4e3a ACME \u53d1\u884c\u8005\u4f7f\u7528\u65b0\u7684 solver \u6837\u5f0f\u914d\u7f6e\u683c\u5f0f\u4f5c\u4e3a\u8fc7\u6e21\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"\u5347\u7ea7\u5230 v0.8"),"\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u53d8\u66f4\u7ec6\u8282\u4ee5\u53ca\u8fc1\u79fb\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/"},"\u5c06 Cert-Manager \u4ece v0.10 \u5347\u7ea7\u5230 v0.11"),"\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u83b7\u5f97\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/"},"Cert-Manager \u5347\u7ea7"),"\u3002"))}u.isMDXComponent=!0}}]);
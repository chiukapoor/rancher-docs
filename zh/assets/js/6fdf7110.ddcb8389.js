"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=s(r),d=o,k=b["".concat(a,".").concat(d)]||b[d]||i[d]||c;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,l=new Array(c);l[0]=b;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<c;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>i});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={title:"Kubernetes \u6982\u5ff5"},a=void 0,s={unversionedId:"reference-guides/kubernetes-concepts",id:"version-2.6/reference-guides/kubernetes-concepts",title:"Kubernetes \u6982\u5ff5",description:"\u672c\u6587\u89e3\u91ca\u4e86 Kubernetes \u7684\u76f8\u5173\u6982\u5ff5\uff0c\u4ee5\u4fbf\u8ba9\u4f60\u66f4\u597d\u5730\u4e86\u89e3 Rancher \u7684\u8fd0\u884c\u673a\u5236\u3002\u672c\u6587\u4ec5\u5bf9 Kubernetes \u7ec4\u4ef6\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u63cf\u8ff0\u3002\u5982\u9700\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 Kubernetes \u7ec4\u4ef6\u7684\u5b98\u65b9\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/kubernetes-concepts.md",sourceDirName:"reference-guides",slug:"/reference-guides/kubernetes-concepts",permalink:"/zh/v2.6/reference-guides/kubernetes-concepts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/kubernetes-concepts.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"Kubernetes \u6982\u5ff5"},sidebar:"tutorialSidebar",previous:{title:"\u793a\u4f8b",permalink:"/zh/v2.6/reference-guides/backup-restore-configuration/examples"},next:{title:"Monitoring V2 \u914d\u7f6e",permalink:"/zh/v2.6/pages-for-subheaders/monitoring-v2-configuration"}},p={},i=[{value:"\u5173\u4e8e Docker",id:"\u5173\u4e8e-docker",level:2},{value:"\u5173\u4e8e Kubernetes",id:"\u5173\u4e8e-kubernetes",level:2},{value:"Kubernetes \u96c6\u7fa4\u662f\u4ec0\u4e48",id:"kubernetes-\u96c6\u7fa4\u662f\u4ec0\u4e48",level:2},{value:"Kubernetes \u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u89d2\u8272",id:"kubernetes-\u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u89d2\u8272",level:2},{value:"etcd \u8282\u70b9",id:"etcd-\u8282\u70b9",level:3},{value:"controlplane \u8282\u70b9",id:"controlplane-\u8282\u70b9",level:3},{value:"Worker \u8282\u70b9",id:"worker-\u8282\u70b9",level:3},{value:"\u5173\u4e8e Helm",id:"\u5173\u4e8e-helm",level:2}],b={toc:i};function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",c(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u89e3\u91ca\u4e86 Kubernetes \u7684\u76f8\u5173\u6982\u5ff5\uff0c\u4ee5\u4fbf\u8ba9\u4f60\u66f4\u597d\u5730\u4e86\u89e3 Rancher \u7684\u8fd0\u884c\u673a\u5236\u3002\u672c\u6587\u4ec5\u5bf9 Kubernetes \u7ec4\u4ef6\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u63cf\u8ff0\u3002\u5982\u9700\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/"},"Kubernetes \u7ec4\u4ef6\u7684\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,n.kt)("h2",{id:"\u5173\u4e8e-docker"},"\u5173\u4e8e Docker"),(0,n.kt)("p",null,"Docker \u662f\u5bb9\u5668\u6253\u5305\u548c\u8fd0\u884c\u65f6\u7cfb\u7edf\u7684\u6807\u51c6\u3002\u5f00\u53d1\u8005\u5728 Dockerfiles \u4e2d\u6784\u5efa\u5bb9\u5668\u955c\u50cf\uff0c\u5e76\u5728 Docker \u955c\u50cf\u4ed3\u5e93\u4e2d\u5206\u53d1\u5bb9\u5668\u955c\u50cf\u3002",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com"},"Docker Hub")," \u662f\u5e02\u9762\u4e0a\u4e3b\u6d41\u7684\u516c\u6709\u955c\u50cf\u4ed3\u5e93\u3002\u8bb8\u591a\u4f01\u4e1a\u8fd8\u521b\u5efa\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93\u3002Docker \u4e3b\u8981\u7528\u4e8e\u7ba1\u7406\u5355\u4e2a\u8282\u70b9\u4e0a\u7684\u5bb9\u5668\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u7531\u4e8e Kubernetes \u5df2\u7ecf\u6210\u4e3a\u4e86\u5bb9\u5668\u7ba1\u7406\u7684\u4e3b\u6d41\u5de5\u5177\uff0c\u6240\u4ee5\u4ece Rancher 2.x \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u4e0d\u518d\u652f\u6301 Docker Swarm\u3002\u5982\u679c\u4f60\u6709\u4f7f\u7528 Docker \u7ba1\u7406\u5bb9\u5668\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u5b89\u88c5 Rancher 1.6 \u8fdb\u884c\u64cd\u4f5c\u3002")),(0,n.kt)("h2",{id:"\u5173\u4e8e-kubernetes"},"\u5173\u4e8e Kubernetes"),(0,n.kt)("p",null,"Kubernetes \u662f\u5bb9\u5668\u548c\u96c6\u7fa4\u7ba1\u7406\u7684\u6807\u51c6\u3002YAML \u6587\u4ef6\u89c4\u5b9a\u4e86\u7ec4\u6210\u4e00\u4e2a\u5e94\u7528\u6240\u9700\u7684\u5bb9\u5668\u548c\u5176\u4ed6\u8d44\u6e90\u3002Kubernetes \u63d0\u4f9b\u4e86\u8c03\u5ea6\u3001\u4f38\u7f29\u3001\u670d\u52a1\u53d1\u73b0\u3001\u5065\u5eb7\u68c0\u67e5\u3001\u5bc6\u6587\u7ba1\u7406\u548c\u914d\u7f6e\u7ba1\u7406\u7b49\u529f\u80fd\u3002"),(0,n.kt)("h2",{id:"kubernetes-\u96c6\u7fa4\u662f\u4ec0\u4e48"},"Kubernetes \u96c6\u7fa4\u662f\u4ec0\u4e48"),(0,n.kt)("p",null,"\u96c6\u7fa4\u662f\u53ef\u4f5c\u4e3a\u4e00\u4e2a\u7cfb\u7edf\u534f\u540c\u5de5\u4f5c\u7684\u4e00\u7ec4\u8ba1\u7b97\u673a\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Kubernetes \u96c6\u7fa4")," \u662f\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes \u5bb9\u5668\u7f16\u6392\u7cfb\u7edf"),"\u6765\u90e8\u7f72\u3001\u8fd0\u7ef4\u548c\u4f38\u7f29 Docker \u5bb9\u5668\u7684\u96c6\u7fa4\uff0c\u8ba9\u4f60\u7684\u7ec4\u7ec7\u5b9e\u73b0\u5e94\u7528\u81ea\u52a8\u5316\u8fd0\u7ef4\u3002"),(0,n.kt)("h2",{id:"kubernetes-\u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u89d2\u8272"},"Kubernetes \u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u89d2\u8272"),(0,n.kt)("p",null,"Kubernetes \u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8ba1\u7b97\u8d44\u6e90\u79f0\u4e3a\u4e00\u4e2a ",(0,n.kt)("em",{parentName:"p"},"\u8282\u70b9")," \u3002\u8282\u70b9\u53ef\u4ee5\u662f\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\u6216\u865a\u62df\u673a\u3002Kubernetes \u5c06\u8282\u70b9\u5206\u4e3a ",(0,n.kt)("em",{parentName:"p"},"etcd")," \u8282\u70b9\u3001",(0,n.kt)("em",{parentName:"p"},"controlplane")," \u8282\u70b9\u548c ",(0,n.kt)("em",{parentName:"p"},"worker")," \u8282\u70b9\u3002"),(0,n.kt)("p",null,"\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u81f3\u5c11\u5305\u542b\u4e00\u4e2a etcd \u8282\u70b9\uff0c\u4e00\u4e2a controlplane \u8282\u70b9\u548c\u4e00\u4e2a worker \u8282\u70b9\u3002"),(0,n.kt)("h3",{id:"etcd-\u8282\u70b9"},"etcd \u8282\u70b9"),(0,n.kt)("p",null,"Rancher \u5728\u5355\u8282\u70b9\u548c\u9ad8\u53ef\u7528\u5b89\u88c5\u4e2d\u5747\u4f7f\u7528 etcd \u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\u3002\u5728 Kubernetes \u4e2d\uff0cetcd \u4e5f\u662f\u5b58\u50a8\u96c6\u7fa4\u72b6\u6001\u7684\u8282\u70b9\u7684\u89d2\u8272\u3002"),(0,n.kt)("p",null,"Kubernetes \u96c6\u7fa4\u7684\u72b6\u6001\u4fdd\u5b58\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#etcd"},"etcd")," \u4e2d\u3002etcd \u8282\u70b9\u8fd0\u884c etcd \u6570\u636e\u5e93\u3002"),(0,n.kt)("p",null,"etcd \u6570\u636e\u5e93\u7ec4\u4ef6\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u952e\u503c\u5bf9\u5b58\u50a8\u7cfb\u7edf\uff0c\u7528\u4e8e\u5b58\u50a8\u6240\u6709 Kubernetes \u7684\u96c6\u7fa4\u6570\u636e\uff0c\u4f8b\u5982\u96c6\u7fa4\u534f\u4f5c\u548c\u72b6\u6001\u7ba1\u7406\u76f8\u5173\u7684\u6570\u636e\u3002\u5efa\u8bae\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c etcd\uff0c\u4ee5\u4fdd\u8bc1\u5728\u53d1\u751f\u6545\u969c\u65f6\u6709\u53ef\u7528\u7684\u5907\u4efd\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u5373\u4f7f\u4f60\u53ef\u4ee5\u4ec5\u5728\u4e00\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c etcd\uff0c\u4f46 etcd \u9700\u8981\u5927\u591a\u6570\u8282\u70b9\uff08\u5373 quorum\uff09\u7684\u540c\u610f\u624d\u80fd\u66f4\u65b0\u96c6\u7fa4\u72b6\u6001\u3002\u96c6\u7fa4\u9700\u8981\u5305\u542b\u8db3\u591f\u6570\u91cf\u7684\u5065\u5eb7 etcd \u8282\u70b9\uff0c\u4ee5\u5f62\u6210 quorum\u3002\u5047\u8bbe\u96c6\u7fa4\u4e2d\u6709 n \u4e2a\u8282\u70b9\uff0cquorum \u7684\u6570\u91cf\u5219\u9700\u8981\u662f (n/2)+1\u3002\u5982\u679c\u96c6\u7fa4\u8282\u70b9\u6570\u91cf\u662f\u5947\u6570\uff0c\u6bcf\u65b0\u589e\u4e00\u4e2a\u8282\u70b9\uff0c\u90fd\u4f1a\u589e\u52a0 quorum \u6240\u9700\u8282\u70b9\u6570\u3002"),(0,n.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u96c6\u7fa4\u4e2d\u53ea\u8981\u914d\u7f6e\u4e09\u4e2a etcd \u8282\u70b9\u5c31\u80fd\u6ee1\u8db3\u5c0f\u578b\u96c6\u7fa4\u7684\u9700\u6c42\uff0c\u4e94\u4e2a etcd \u8282\u70b9\u80fd\u6ee1\u8db3\u5927\u578b\u96c6\u7fa4\u7684\u9700\u6c42\u3002"),(0,n.kt)("h3",{id:"controlplane-\u8282\u70b9"},"controlplane \u8282\u70b9"),(0,n.kt)("p",null,"controlplane \u8282\u70b9\u4e0a\u8fd0\u884c Kubernetes API server\u3001scheduler \u548c Controller Manager\u3002\u8fd9\u4e9b\u8282\u70b9\u6267\u884c\u65e5\u5e38\u4efb\u52a1\uff0c\u4ee5\u786e\u4fdd\u96c6\u7fa4\u72b6\u6001\u548c\u4f60\u7684\u914d\u7f6e\u4e00\u81f4\u3002\u56e0\u4e3a etcd \u8282\u70b9\u4fdd\u5b58\u4e86\u96c6\u7fa4\u7684\u5168\u90e8\u6570\u636e\uff0c\u6240\u4ee5 controlplane \u8282\u70b9\u662f\u65e0\u72b6\u6001\u7684\u3002\u867d\u7136\u4f60\u53ef\u4ee5\u5728\u5355\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c controlplane\uff0c\u4f46\u662f\u6211\u4eec\u5efa\u8bae\u5728\u4e24\u4e2a\u6216\u4ee5\u4e0a\u7684\u8282\u70b9\u4e0a\u8fd0\u884c controlplane\uff0c\u4ee5\u4fdd\u8bc1\u5197\u4f59\u6027\u3002\u53e6\u5916\uff0c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u65e2\u662f controlplane \u8282\u70b9\uff0c\u53c8\u662f etcd \u8282\u70b9\u3002"),(0,n.kt)("h3",{id:"worker-\u8282\u70b9"},"Worker \u8282\u70b9"),(0,n.kt)("p",null,"\u6bcf\u4e2a ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/"},"worker \u8282\u70b9"),"\u90fd\u80fd\u8fd0\u884c\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kubelets"),"\uff1a\u76d1\u63a7\u8282\u70b9\u72b6\u6001\u7684 Agent\uff0c\u786e\u4fdd\u4f60\u7684\u5bb9\u5668\u5904\u4e8e\u5065\u5eb7\u72b6\u6001\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\uff1a\u627f\u8f7d\u5e94\u7528\u548c\u5176\u4ed6 deployment \u7684\u5bb9\u5668\u548c Pod\u3002")),(0,n.kt)("p",null,"Worker \u8282\u70b9\u4e5f\u8fd0\u884c\u5b58\u50a8\u548c\u7f51\u7edc\u9a71\u52a8\uff0c\u6709\u5fc5\u8981\u65f6\u4e5f\u4f1a\u8fd0\u884c Ingress Controller\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\uff0c\u521b\u5efa\u5c3d\u53ef\u80fd\u591a\u7684 worker \u8282\u70b9\u6765\u8fd0\u884c\u4f60\u7684",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/workloads-and-pods"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,n.kt)("h2",{id:"\u5173\u4e8e-helm"},"\u5173\u4e8e Helm"),(0,n.kt)("p",null,"\u5728 Rancher \u9ad8\u53ef\u7528\u5b89\u88c5\u7684\u573a\u666f\u4e0b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Helm \u5de5\u5177\uff0c\u628a Rancher \u5b89\u88c5\u5230 Kubernetes \u96c6\u7fa4\u4e0a\u3002"),(0,n.kt)("p",null,"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u4e3a Kubernetes YAML \u6e05\u5355\u6587\u4ef6\u63d0\u4f9b\u4e86\u6a21\u677f\u8bed\u6cd5\u3002\u901a\u8fc7 Helm\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u53ef\u914d\u7f6e\u7684 deployment\uff0c\u800c\u4e0d\u4ec5\u4ec5\u53ea\u80fd\u4f7f\u7528\u9759\u6001\u6587\u4ef6\u3002\u5982\u679c\u4f60\u9700\u8981\u521b\u5efa\u81ea\u5df1\u7684 deployment \u5546\u5e97\u5e94\u7528\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh"},"https://helm.sh/")," \u4e0a\u7684\u6587\u6863\u3002"),(0,n.kt)("p",null,"\u6709\u5173 ServiceAccount \u548c Cluster Role Binding \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes \u5b98\u65b9\u6587\u6863"),"\u3002"))}d.isMDXComponent=!0}}]);
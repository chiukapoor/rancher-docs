"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79970],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},i=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=u(t),d=o,m=b["".concat(p,".").concat(d)]||b[d]||s[d]||l;return t?n.createElement(m,a(a({ref:r},i),{},{components:t})):n.createElement(m,a({ref:r},i))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=b;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<l;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},63758:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>s});t(67294);var n=t(3905);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={title:"Controlplane \u8282\u70b9\u6545\u969c\u6392\u9664"},p=void 0,u={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",id:"troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",title:"Controlplane \u8282\u70b9\u6545\u969c\u6392\u9664",description:"\u672c\u6587\u9002\u7528\u4e8e\u5177\u6709 controlplane \u89d2\u8272\u7684\u8282\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",tags:[],version:"current",lastUpdatedAt:1669185570,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{title:"Controlplane \u8282\u70b9\u6545\u969c\u6392\u9664"},sidebar:"tutorialSidebar",previous:{title:"etcd \u8282\u70b9\u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"},next:{title:"nginx-proxy \u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"}},i={},s=[{value:"\u68c0\u67e5 controlplane \u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c",id:"\u68c0\u67e5-controlplane-\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c",level:2},{value:"controlplane \u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55",id:"controlplane-\u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55",level:2},{value:"RKE2 Server \u65e5\u5fd7",id:"rke2-server-\u65e5\u5fd7",level:2}],b={toc:s};function d(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},b,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u9002\u7528\u4e8e\u5177\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u3002"),(0,n.kt)("h2",{id:"\u68c0\u67e5-controlplane-\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"},"\u68c0\u67e5 controlplane \u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"),(0,n.kt)("p",null,"\u5177\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u4e0a\u542f\u52a8\u4e86\u4e09\u4e2a\u5bb9\u5668\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kube-controller-manager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kube-scheduler"))),(0,n.kt)("p",null,"\u5bb9\u5668\u7684\u72b6\u6001\u5e94\u8be5\u662f ",(0,n.kt)("strong",{parentName:"p"},"Up"),"\u3002",(0,n.kt)("strong",{parentName:"p"},"Up")," \u540e\u9762\u663e\u793a\u7684\u65f6\u95f4\u6307\u7684\u662f\u5bb9\u5668\u8fd0\u884c\u7684\u65f6\u95f4\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker ps -a -f=name='kube-apiserver|kube-controller-manager|kube-scheduler'\n")),(0,n.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                COMMAND                  CREATED             STATUS              PORTS               NAMES\n26c7159abbcc        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-apiserver\nf3d287ca4549        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-scheduler\nbdf3898b8063        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-controller-manager\n')),(0,n.kt)("h2",{id:"controlplane-\u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"},"controlplane \u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6dfb\u52a0\u4e86\u591a\u4e2a\u5177\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," \u4f1a\u901a\u8fc7 leader \u9009\u4e3e\u6765\u786e\u5b9a leader\u3002\u53ea\u6709\u5f53\u524d leader \u4f1a\u8bb0\u5f55\u6267\u884c\u7684\u64cd\u4f5c\u3002\u6709\u5173\u68c0\u7d22\u5f53\u524d\u7684 leader \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/kubernetes-resources#kubernetes-leader-%E9%80%89%E4%B8%BE"},"Kubernetes leader \u9009\u4e3e"),"\u3002")),(0,n.kt)("p",null,"\u5bb9\u5668\u7684\u65e5\u5fd7\u8bb0\u5f55\u53ef\u80fd\u5305\u542b\u95ee\u9898\u7684\u4fe1\u606f\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker logs kube-apiserver\ndocker logs kube-controller-manager\ndocker logs kube-scheduler\n")),(0,n.kt)("h2",{id:"rke2-server-\u65e5\u5fd7"},"RKE2 Server \u65e5\u5fd7"),(0,n.kt)("p",null,"\u5982\u679c Rancher \u914d\u7f6e\u7684 RKE2 \u96c6\u7fa4\u65e0\u6cd5\u4e0e Rancher \u901a\u4fe1\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684 Server \u8282\u70b9\u4e0a\u8fd0\u884c\u6b64\u547d\u4ee4\uff0c\u4ece\u800c\u83b7\u53d6 RKE2 Server \u65e5\u5fd7\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"journalctl -u rke2-server -f\n")))}d.isMDXComponent=!0}}]);
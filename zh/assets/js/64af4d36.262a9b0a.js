"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=i(r),f=o,d=b["".concat(l,".").concat(f)]||b[f]||p[f]||a;return r?n.createElement(d,u(u({ref:t},c),{},{components:r})):n.createElement(d,u({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},57046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"\u9ad8\u53ef\u7528\u5b89\u88c5"},l=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs",id:"how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs",title:"\u9ad8\u53ef\u7528\u5b89\u88c5",description:"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Helm\uff08 Kubernetes \u5305\u7ba1\u7406\u5668 \uff09\u5728\u4e13\u7528\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002\u7531\u4e8e Rancher \u8fd0\u884c\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\u63d0\u5347\u4e86\u53ef\u7528\u6027\uff0c\u56e0\u6b64\u8fd9\u79cd\u5b89\u88c5\u65b9\u5f0f\u53eb\u505a\u9ad8\u53ef\u7528 Kubernetes \u5b89\u88c5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-cluster-setup",slug:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"\u9ad8\u53ef\u7528\u5b89\u88c5"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \u4f7f\u7528\u6559\u7a0b ",permalink:"/zh/pages-for-subheaders/kubernetes-cluster-setup"},next:{title:"\u4e3a Rancher \u8bbe\u7f6e\u9ad8\u53ef\u7528 K3s Kubernetes \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher"}},c={},p=[{value:"\u63a8\u8350\u67b6\u6784",id:"\u63a8\u8350\u67b6\u6784",level:3}],b={toc:p};function f(e){var{components:t}=e,s=u(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},b,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Helm\uff08 Kubernetes \u5305\u7ba1\u7406\u5668 \uff09\u5728\u4e13\u7528\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002\u7531\u4e8e Rancher \u8fd0\u884c\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\u63d0\u5347\u4e86\u53ef\u7528\u6027\uff0c\u56e0\u6b64\u8fd9\u79cd\u5b89\u88c5\u65b9\u5f0f\u53eb\u505a\u9ad8\u53ef\u7528 Kubernetes \u5b89\u88c5\u3002"),(0,n.kt)("p",null,"\u5728\u6807\u51c6\u5b89\u88c5\u4e2d\uff0c\u5148\u5c06 Kubernetes \u5b89\u88c5\u5728\u6258\u7ba1\u5728\u4e91\u63d0\u4f9b\u5546\uff08\u4f8b\u5982 Amazon \u7684 EC2 \u6216 Google Compute Engine\uff09\u4e2d\u7684\u4e09\u4e2a\u8282\u70b9\u4e0a\u3002"),(0,n.kt)("p",null,"\u7136\u540e\u4f7f\u7528 Helm \u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002Helm \u4f7f\u7528 Rancher \u7684 Helm Chart \u5728 Kubernetes \u96c6\u7fa4\u7684\u4e09\u4e2a\u8282\u70b9\u4e2d\u5747\u5b89\u88c5 Rancher \u7684\u526f\u672c\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u5668\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a Rancher \u526f\u672c\u4e2d\uff0c\u4ee5\u63d0\u9ad8 Rancher \u7684\u53ef\u7528\u6027\u3002"),(0,n.kt)("p",null,"Rancher Server \u7684\u6570\u636e\u5b58\u50a8\u5728 etcd \u4e2d\u3002etcd \u6570\u636e\u5e93\u53ef\u4ee5\u5728\u6240\u6709\u4e09\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u3002\u4e3a\u4e86\u9009\u4e3e\u51fa\u5927\u591a\u6570 etcd \u8282\u70b9\u8ba4\u540c\u7684 etcd \u96c6\u7fa4 leader\uff0c\u8282\u70b9\u7684\u6570\u91cf\u9700\u8981\u662f\u5947\u6570\u3002\u5982\u679c etcd \u6570\u636e\u5e93\u4e0d\u80fd\u9009\u51fa leader\uff0cetcd \u53ef\u80fd\u4f1a\u5931\u8d25\u3002\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u4f7f\u7528\u5907\u4efd\u6765\u8fd8\u539f\u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"\u6709\u5173 Rancher \u5982\u4f55\u5de5\u4f5c\u7684\u8be6\u60c5\uff08\u4e0e\u5b89\u88c5\u65b9\u6cd5\u65e0\u5173\uff09\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-manager-architecture"},"\u67b6\u6784"),"\u3002"),(0,n.kt)("h3",{id:"\u63a8\u8350\u67b6\u6784"},"\u63a8\u8350\u67b6\u6784"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rancher \u7684 DNS \u5e94\u8be5\u89e3\u6790\u4e3a 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861\u5668\u5e94\u8be5\u628a TCP/80 \u7aef\u53e3\u548c TCP/443 \u7aef\u53e3\u7684\u6d41\u91cf\u8f6c\u53d1\u5230 Kubernetes \u96c6\u7fa4\u7684\u5168\u90e8 3 \u4e2a\u8282\u70b9\u4e0a\u3002"),(0,n.kt)("li",{parentName:"ul"},"Ingress Controller \u4f1a\u628a HTTP \u91cd\u5b9a\u5411\u5230 HTTPS\uff0c\u5728 TCP/443 \u7aef\u53e3\u7ec8\u7ed3 SSL/TLS\u3002"),(0,n.kt)("li",{parentName:"ul"},"Ingress Controller \u4f1a\u628a\u6d41\u91cf\u8f6c\u53d1\u5230 Rancher deployment \u7684 Pod \u4e0a\u7684 TCP/80 \u7aef\u53e3\u3002")),(0,n.kt)("figcaption",null,"\u4f7f\u7528 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5b89\u88c5 Rancher\uff1aIngress Controller \u7684 SSL \u7ec8\u6b62\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rancher \u7684\u9ad8\u53ef\u7528 Kubernetes \u5b89\u88c5",src:r(86089).Z,width:"1236",height:"525"})),(0,n.kt)("sup",null,"\u4f7f\u7528 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5b89\u88c5 Rancher\uff1aIngress Controller \u7684 SSL \u7ec8\u6b62"))}f.isMDXComponent=!0},86089:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher2ha-109862fddef6042942f103cfc94d892b.svg"}}]);
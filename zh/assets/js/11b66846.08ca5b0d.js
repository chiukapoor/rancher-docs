"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,d=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"\u521b\u5efa\u817e\u8baf TKE \u96c6\u7fa4"},o=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent",title:"\u521b\u5efa\u817e\u8baf TKE \u96c6\u7fa4",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u521b\u5efa\u6258\u7ba1\u5728\u817e\u8baf Tencent Kubernetes Engine (TKE) \u4e2d\u7684\u96c6\u7fa4\u3002Rancher \u5df2\u7ecf\u4e3a TKE \u5b9e\u73b0\u5e76\u6253\u5305\u4e86\u9488\u5bf9 TKE \u7684\u96c6\u7fa4\u9a71\u52a8\uff0c\u4f46\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u96c6\u7fa4\u9a71\u52a8\u7684\u72b6\u6001\u662f inactive\u3002\u4e3a\u4e86\u542f\u52a8 TKE \u96c6\u7fa4\uff0c\u4f60\u9700\u8981\u542f\u7528 TKE \u96c6\u7fa4\u9a71\u52a8\u3002\u542f\u7528\u96c6\u7fa4\u9a71\u52a8\u540e\uff0c\u4f60\u53ef\u4ee5\u5f00\u59cb\u914d\u7f6e TKE \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u521b\u5efa\u817e\u8baf TKE \u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u963f\u91cc\u4e91 ACK \u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba"},next:{title:"\u521b\u5efa\u534e\u4e3a CCE \u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei"}},s={},m=[{value:"\u817e\u8baf\u5148\u51b3\u6761\u4ef6",id:"\u817e\u8baf\u5148\u51b3\u6761\u4ef6",level:2},{value:"Rancher \u5148\u51b3\u6761\u4ef6",id:"rancher-\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u521b\u5efa TKE \u96c6\u7fa4",id:"\u521b\u5efa-tke-\u96c6\u7fa4",level:2}],c={toc:m};function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u521b\u5efa\u6258\u7ba1\u5728\u817e\u8baf Tencent Kubernetes Engine (TKE) \u4e2d\u7684\u96c6\u7fa4\u3002Rancher \u5df2\u7ecf\u4e3a TKE \u5b9e\u73b0\u5e76\u6253\u5305\u4e86\u9488\u5bf9 TKE \u7684",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},"\u96c6\u7fa4\u9a71\u52a8"),"\uff0c\u4f46\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u96c6\u7fa4\u9a71\u52a8\u7684\u72b6\u6001\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"inactive"),"\u3002\u4e3a\u4e86\u542f\u52a8 TKE \u96c6\u7fa4\uff0c\u4f60\u9700\u8981",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers#%E6%BF%80%E6%B4%BB/%E5%81%9C%E7%94%A8%E9%9B%86%E7%BE%A4%E9%A9%B1%E5%8A%A8"},"\u542f\u7528 TKE \u96c6\u7fa4\u9a71\u52a8"),"\u3002\u542f\u7528\u96c6\u7fa4\u9a71\u52a8\u540e\uff0c\u4f60\u53ef\u4ee5\u5f00\u59cb\u914d\u7f6e TKE \u96c6\u7fa4\u3002"),(0,r.kt)("h2",{id:"\u817e\u8baf\u5148\u51b3\u6761\u4ef6"},"\u817e\u8baf\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u90e8\u7f72\u5230 TKE \u4f1a\u4ea7\u751f\u8d39\u7528\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://intl.cloud.tencent.com/document/product/598/10600"},"\u4e91\u8bbf\u95ee\u7ba1\u7406"),"\u6587\u6863\uff0c\u786e\u4fdd\u7528\u4e8e\u521b\u5efa TKE \u96c6\u7fa4\u7684\u8d26\u53f7\u5177\u6709\u9002\u5f53\u7684\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.tencent.com/capi"},"\u4e91 API \u5bc6\u94a5 ID \u548c\u5bc6\u94a5"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8981\u90e8\u7f72 Kubernetes \u96c6\u7fa4\u7684\u533a\u57df\u4e2d\u521b\u5efa",(0,r.kt)("a",{parentName:"p",href:"https://intl.cloud.tencent.com/document/product/215/4927"},"\u79c1\u6709\u7f51\u7edc\u548c\u5b50\u7f51"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa ",(0,r.kt)("a",{parentName:"p",href:"https://intl.cloud.tencent.com/document/product/213/6092"},"SSH \u5bc6\u94a5\u5bf9"),"\u3002\u8be5\u5bc6\u94a5\u7528\u4e8e\u8bbf\u95ee Kubernetes \u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u3002"))),(0,r.kt)("h2",{id:"rancher-\u5148\u51b3\u6761\u4ef6"},"Rancher \u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u542f\u7528\u817e\u8baf TKE \u96c6\u7fa4\u9a71\u52a8\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u9a71\u52a8"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9a71\u52a8"),"\u9009\u9879\u5361\u4e2d\uff0c\u8f6c\u5230 ",(0,r.kt)("strong",{parentName:"li"},"Tencent TKE")," \u96c6\u7fa4\u9a71\u52a8\u5e76\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u6fc0\u6d3b"),"\u3002")),(0,r.kt)("p",null,"\u96c6\u7fa4\u9a71\u52a8\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u5728 Rancher \u4e2d\u521b\u5efa\u817e\u8baf TKE \u96c6\u7fa4\u4e86\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-tke-\u96c6\u7fa4"},"\u521b\u5efa TKE \u96c6\u7fa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\uff0c\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Tencent TKE"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f93\u5165",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u540d\u79f0"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a TKE \u96c6\u7fa4\u914d\u7f6e",(0,r.kt)("strong",{parentName:"p"},"\u8d26\u53f7\u8bbf\u95ee"),"\u3002\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"#%E8%85%BE%E8%AE%AF%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6"},"\u5148\u51b3\u6761\u4ef6"),"\u4e2d\u83b7\u5f97\u7684\u4fe1\u606f\u5b8c\u6210\u6bcf\u4e2a\u4e0b\u62c9\u5217\u8868\u548c\u5b57\u6bb5\u3002"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u533a\u57df"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u6784\u5efa\u96c6\u7fa4\u7684\u5730\u7406\u533a\u57df\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u6587 ID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u4ece\u817e\u8baf\u4e91\u63a7\u5236\u53f0\u83b7\u53d6\u7684\u5bc6\u6587 ID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u6587\u5bc6\u94a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u4ece\u817e\u8baf\u4e91\u63a7\u5236\u53f0\u83b7\u53d6\u7684\u5bc6\u6587\u5bc6\u94a5\u3002"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7136\u540e\uff0c\u5355\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0b\u4e00\u6b65\uff1a\u914d\u7f6e\u96c6\u7fa4"),"\u6765\u914d\u7f6e TKE \u96c6\u7fa4\u3002"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes \u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"TKE \u76ee\u524d\u53ea\u652f\u6301 Kubernetes 1.10.5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u8981\u4e3a Kubernetes \u96c6\u7fa4\u8d2d\u4e70\u7684 worker \u8282\u70b9\u6570\uff0c\u6700\u5927\u503c\u662f 100\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VPC"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u5728\u817e\u8baf\u4e91\u63a7\u5236\u53f0\u4e2d\u521b\u5efa\u7684 VPC \u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u7f51\u7edc CIDR"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165 Kubernetes \u96c6\u7fa4\u7684 CIDR \u8303\u56f4\u3002\u4f60\u53ef\u4ee5\u5728\u817e\u8baf\u4e91\u63a7\u5236\u53f0\u7684 VPC \u670d\u52a1\u4e2d\u67e5\u770b\u8be5 CIDR \u7684\u53ef\u7528\u8303\u56f4\u3002\u9ed8\u8ba4\u4e3a 172.16.0.0/16\u3002")))),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u4e2d\u7f16\u8f91\u96c6\u7fa4\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 Rancher UI\uff0c\u5219\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570\u5fc5\u987b\u5d4c\u5957\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," \u4e2d\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rancher-%E4%B8%AD%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84"},"Rancher 2.3.0+ \u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0b\u4e00\u6b65\uff1a\u9009\u62e9\u5b9e\u4f8b\u7c7b\u578b"),"\uff0c\u7136\u540e\u9009\u62e9\u5c06\u7528\u4e8e TKE \u96c6\u7fa4\u7684\u5b9e\u4f8b\u7c7b\u578b\u3002"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u533a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9 VPC \u533a\u57df\u7684\u53ef\u7528\u533a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u7f51"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u4f60\u5728 VPC \u4e2d\u521b\u5efa\u7684\u5b50\u7f51\u3002\u5982\u679c\u5728\u6240\u9009\u53ef\u7528\u533a\u4e2d\u6ca1\u6709\u8be5\u5b50\u7f51\uff0c\u8bf7\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5b50\u7f51\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u8981\u7528\u4e8e TKE \u96c6\u7fa4\u7684 VM \u5b9e\u4f8b\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a S2.MEDIUM4\uff08CPU 2\uff1b\u5185\u5b58 4 GiB\uff09\u3002"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0b\u4e00\u6b65\uff1a\u914d\u7f6e\u5b9e\u4f8b"),"\uff0c\u914d\u7f6e\u7528\u4e8e TKE \u96c6\u7fa4\u7684 VM \u5b9e\u4f8b\u3002"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7cfb\u7edf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7cfb\u7edf\u540d\u79f0\uff0c\u76ee\u524d\u652f\u6301 Centos7.2x86_64 \u6216 ubuntu16.04.1 LTSx86_64\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168\u7ec4 ID\uff0c\u9ed8\u8ba4\u4e0d\u7ed1\u5b9a\u4efb\u4f55\u5b89\u5168\u7ec4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u78c1\u76d8\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u76d8\u7c7b\u578b\u3002\u7cfb\u7edf\u76d8\u7c7b\u578b\u9650\u5236\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.tencent.com/document/product/213/11518"},"CVM \u5b9e\u4f8b\u914d\u7f6e"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u78c1\u76d8\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u76d8\u5927\u5c0f\u3002Linux \u7cfb\u7edf\u8c03\u6574\u8303\u56f4\u4e3a 20-50 GB\uff0c\u6b65\u957f\u4e3a 1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u76d8\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u76d8\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a SSD \u4e91\u76d8\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u78c1\u76d8\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u76d8\u5927\u5c0f\uff08GB\uff09\uff0c\u6b65\u957f\u4e3a 10\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u5bbd\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u5bbd\u6536\u8d39\u7c7b\u578b\uff0cPayByTraffic \u6216 PayByHour\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e26\u5bbd"),(0,r.kt)("td",{parentName:"tr",align:null},"\u516c\u7f51\u5e26\u5bbd (Mbps)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5 ID\uff0c\u5173\u8054\u540e\u53ef\u4ee5\u7528\u6765\u767b\u5f55 VM \u8282\u70b9\u3002"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,r.kt)("p",null,"\u4f60\u5df2\u521b\u5efa\u96c6\u7fa4\uff0c\u96c6\u7fa4\u7684\u72b6\u6001\u662f",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d"),"\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active")," \u72b6\u6001\u7684\u96c6\u7fa4\u4f1a\u5206\u914d\u5230\u4e24\u4e2a\u9879\u76ee\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Default"),"\uff1a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," \u547d\u540d\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System"),"\uff1a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002")))}k.isMDXComponent=!0}}]);
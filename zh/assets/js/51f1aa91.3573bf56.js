"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6920],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"\u521b\u5efa\u963f\u91cc\u4e91 ACK \u96c6\u7fa4"},s=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba",title:"\u521b\u5efa\u963f\u91cc\u4e91 ACK \u96c6\u7fa4",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u521b\u5efa\u6258\u7ba1\u5728\u963f\u91cc\u4e91 Alibaba Cloud Kubernetes (ACK) \u4e2d\u7684\u96c6\u7fa4\u3002Rancher \u5df2\u7ecf\u4e3a ACK \u5b9e\u73b0\u5e76\u6253\u5305\u4e86\u9488\u5bf9 ACK \u7684\u96c6\u7fa4\u9a71\u52a8\uff0c\u4f46\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u96c6\u7fa4\u9a71\u52a8\u7684\u72b6\u6001\u662f inactive\u3002\u4e3a\u4e86\u542f\u52a8 ACK \u96c6\u7fa4\uff0c\u4f60\u9700\u8981\u542f\u7528 ACK \u96c6\u7fa4\u9a71\u52a8\u3002\u542f\u7528\u96c6\u7fa4\u9a71\u52a8\u540e\uff0c\u4f60\u53ef\u4ee5\u5f00\u59cb\u914d\u7f6e ACK \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u521b\u5efa\u963f\u91cc\u4e91 ACK \u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa AKS \u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"},next:{title:"\u521b\u5efa\u817e\u8baf TKE \u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent"}},u={},c=[{value:"Rancher \u4e4b\u5916\u7684\u5148\u51b3\u6761\u4ef6",id:"rancher-\u4e4b\u5916\u7684\u5148\u51b3\u6761\u4ef6",level:2},{value:"Rancher \u5148\u51b3\u6761\u4ef6",id:"rancher-\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u521b\u5efa ACK \u96c6\u7fa4",id:"\u521b\u5efa-ack-\u96c6\u7fa4",level:2}],m={toc:c};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u521b\u5efa\u6258\u7ba1\u5728\u963f\u91cc\u4e91 Alibaba Cloud Kubernetes (ACK) \u4e2d\u7684\u96c6\u7fa4\u3002Rancher \u5df2\u7ecf\u4e3a ACK \u5b9e\u73b0\u5e76\u6253\u5305\u4e86\u9488\u5bf9 ACK \u7684",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},"\u96c6\u7fa4\u9a71\u52a8"),"\uff0c\u4f46\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u96c6\u7fa4\u9a71\u52a8\u7684\u72b6\u6001\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"inactive"),"\u3002\u4e3a\u4e86\u542f\u52a8 ACK \u96c6\u7fa4\uff0c\u4f60\u9700\u8981",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers#%E6%BF%80%E6%B4%BB/%E5%81%9C%E7%94%A8%E9%9B%86%E7%BE%A4%E9%A9%B1%E5%8A%A8"},"\u542f\u7528 ACK \u96c6\u7fa4\u9a71\u52a8"),"\u3002\u542f\u7528\u96c6\u7fa4\u9a71\u52a8\u540e\uff0c\u4f60\u53ef\u4ee5\u5f00\u59cb\u914d\u7f6e ACK \u96c6\u7fa4\u3002"),(0,n.kt)("h2",{id:"rancher-\u4e4b\u5916\u7684\u5148\u51b3\u6761\u4ef6"},"Rancher \u4e4b\u5916\u7684\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u90e8\u7f72\u5230 ACK \u4f1a\u4ea7\u751f\u8d39\u7528\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u963f\u91cc\u4e91\u4e2d\uff0c\u5728\u5bf9\u5e94\u7684\u63a7\u5236\u53f0\u4e2d\u6fc0\u6d3b\u4ee5\u4e0b\u670d\u52a1\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cs.console.aliyun.com"},"\u5bb9\u5668\u670d\u52a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ros.console.aliyun.com"},"\u8d44\u6e90\u7f16\u6392\u670d\u52a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ram.console.aliyun.com"},"RAM")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u786e\u4fdd\u4f60\u7528\u4e8e\u521b\u5efa ACK \u96c6\u7fa4\u7684\u8d26\u53f7\u5177\u6709\u9002\u5f53\u7684\u6743\u9650\u3002\u8be6\u89c1\u963f\u91cc\u4e91",(0,n.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/86483.htm"},"\u89d2\u8272\u6388\u6743"),"\u548c",(0,n.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/86484.htm"},"\u4f7f\u7528\u5bb9\u5668\u670d\u52a1\u63a7\u5236\u53f0\u4f5c\u4e3a RAM \u7528\u6237"),"\u5b98\u65b9\u6587\u6863\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u963f\u91cc\u4e91\u4e2d\uff0c\u521b\u5efa",(0,n.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/53045.html"},"\u8bbf\u95ee\u5bc6\u94a5"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u963f\u91cc\u4e91\u4e2d\uff0c\u521b\u5efa ",(0,n.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/51793.html"},"SSH \u5bc6\u94a5\u5bf9"),"\u3002\u8be5\u5bc6\u94a5\u7528\u4e8e\u8bbf\u95ee Kubernetes \u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u3002"))),(0,n.kt)("h2",{id:"rancher-\u5148\u51b3\u6761\u4ef6"},"Rancher \u5148\u51b3\u6761\u4ef6"),(0,n.kt)("p",null,"\u4f60\u9700\u8981\u542f\u7528\u963f\u91cc\u4e91 ACK \u96c6\u7fa4\u9a71\u52a8\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u9a71\u52a8"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9a71\u52a8"),"\u9009\u9879\u5361\u4e2d\uff0c\u8f6c\u5230 ",(0,n.kt)("strong",{parentName:"li"},"Alibaba ACK")," \u96c6\u7fa4\u9a71\u52a8\u5e76\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > \u6fc0\u6d3b"),"\u3002")),(0,n.kt)("p",null,"\u96c6\u7fa4\u9a71\u52a8\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u5728 Rancher \u4e2d\u521b\u5efa\u963f\u91cc\u4e91 ACK \u96c6\u7fa4\u4e86\u3002"),(0,n.kt)("h2",{id:"\u521b\u5efa-ack-\u96c6\u7fa4"},"\u521b\u5efa ACK \u96c6\u7fa4"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Alibaba ACK"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,n.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u540d\u79f0"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,n.kt)("strong",{parentName:"li"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,n.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e3a ACK \u96c6\u7fa4\u914d\u7f6e",(0,n.kt)("strong",{parentName:"li"},"\u8d26\u53f7\u8bbf\u95ee"),"\u3002\u9009\u62e9\u8981\u5728\u5176\u4e2d\u6784\u5efa\u96c6\u7fa4\u7684\u5730\u7406\u533a\u57df\uff0c\u5e76\u8f93\u5165\u5728\u5148\u51b3\u6761\u4ef6\u6b65\u9aa4\u4e2d\u521b\u5efa\u7684\u8bbf\u95ee\u5bc6\u94a5\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65\uff1a\u914d\u7f6e\u96c6\u7fa4"),"\uff0c\u7136\u540e\u9009\u62e9\u96c6\u7fa4\u7c7b\u578b\u3001Kubernetes \u7248\u672c\u548c\u53ef\u7528\u533a\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Kubernetes")," \u4f5c\u4e3a\u96c6\u7fa4\u7c7b\u578b\uff0c\u8bf7\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65\uff1a\u914d\u7f6e master \u8282\u70b9"),"\uff0c\u7136\u540e\u586b\u5199 ",(0,n.kt)("strong",{parentName:"li"},"master \u8282\u70b9"),"\u8868\u5355\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65\uff1a\u914d\u7f6e Worker \u8282\u70b9"),"\uff0c\u7136\u540e\u586b\u5199 ",(0,n.kt)("strong",{parentName:"li"},"Worker \u8282\u70b9"),"\u8868\u5355\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u5e76\u786e\u8ba4\u4f60\u7684\u9009\u9879\u3002\u7136\u540e\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,n.kt)("p",null,"\u4f60\u5df2\u521b\u5efa\u96c6\u7fa4\uff0c\u96c6\u7fa4\u7684\u72b6\u6001\u662f",(0,n.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d"),"\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,n.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,n.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Active")," \u72b6\u6001\u7684\u96c6\u7fa4\u4f1a\u5206\u914d\u5230\u4e24\u4e2a\u9879\u76ee\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Default"),"\uff1a\u5305\u542b ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," \u547d\u540d\u7a7a\u95f4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"System"),"\uff1a\u5305\u542b ",(0,n.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002")))}d.isMDXComponent=!0}}]);
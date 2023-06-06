"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={title:"1. \u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",id:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",title:"1. \u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio",description:"- \u53ea\u6709\u5206\u914d\u4e86 cluster-admin Kubernetes \u9ed8\u8ba4\u89d2\u8272\u7684\u7528\u6237\u53ef\u4ee5\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u914d\u7f6e\u548c\u5b89\u88c5 Istio\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",tags:[],version:"current",lastUpdatedAt:1672712056,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"1. \u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e\u6307\u5357",permalink:"/zh/pages-for-subheaders/istio-setup-guide"},next:{title:"2. \u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"}},c={},p=[{value:"\u5176\u4ed6\u914d\u7f6e\u9009\u9879",id:"\u5176\u4ed6\u914d\u7f6e\u9009\u9879",level:2}],d={toc:p};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5206\u914d\u4e86 ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster-admin")," ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"Kubernetes \u9ed8\u8ba4\u89d2\u8272"),"\u7684\u7528\u6237\u53ef\u4ee5\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u914d\u7f6e\u548c\u5b89\u88c5 Istio\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u6709 pod \u5b89\u5168\u7b56\u7565\uff0c\u5219\u9700\u8981\u5b89\u88c5\u542f\u7528\u4e86 CNI \u7684 Istio\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"li",href:"/zh/integrations-in-rancher/istio/configuration-options/pod-security-policies"},"\u672c\u8282"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio\uff0c\u5219\u9700\u8981\u6267\u884c\u989d\u5916\u7684\u6b65\u9aa4\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"li",href:"/zh/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},"\u672c\u8282"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u5728\u542f\u7528\u4e86\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u96c6\u7fa4\u4e2d\u5b89\u88c5 Istio\uff0c\u5219\u9700\u8981\u6267\u884c\u989d\u5916\u7684\u6b65\u9aa4\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"li",href:"/zh/integrations-in-rancher/istio/configuration-options/project-network-isolation"},"\u672c\u8282"),"\u3002"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u542f\u7528 Istio \u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Apps"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Chart"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Istio"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 Monitoring \u5e94\u7528\uff0c\u7cfb\u7edf\u4f1a\u63d0\u793a\u4f60\u5b89\u88c5 rancher-monitoring\u3002\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u5728 Rancher-monitoring \u5b89\u88c5\u4e0a\u8bbe\u7f6e\u9009\u62e9\u5668\u6216\u6293\u53d6\u914d\u7f6e\u9009\u9879\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u4e3a Istio \u7ec4\u4ef6\u914d\u7f6e\u6210\u5458\u8bbf\u95ee\u548c",(0,n.kt)("a",{parentName:"li",href:"/zh/integrations-in-rancher/istio/cpu-and-memory-allocations"},"\u8d44\u6e90\u9650\u5236"),"\u3002\u786e\u4fdd\u4f60\u7684 Worker \u8282\u70b9\u4e0a\u6709\u8db3\u591f\u7684\u8d44\u6e90\u6765\u542f\u7528 Istio\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5982\u679c\u9700\u8981\uff0c\u5bf9 values.yaml \u8fdb\u884c\u989d\u5916\u7684\u914d\u7f6e\u66f4\u6539\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u901a\u8fc7",(0,n.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/configuration-options#%E8%A6%86%E7%9B%96%E6%96%87%E4%BB%B6"},"\u8986\u76d6\u6587\u4ef6"),"\u6765\u6dfb\u52a0\u5176\u4ed6\u8d44\u6e90\u6216\u914d\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5728\u96c6\u7fa4\u7ea7\u522b\u5b89\u88c5 Istio\u3002"),(0,n.kt)("h2",{id:"\u5176\u4ed6\u914d\u7f6e\u9009\u9879"},"\u5176\u4ed6\u914d\u7f6e\u9009\u9879"),(0,n.kt)("p",null,"\u6709\u5173\u914d\u7f6e Istio \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/configuration-options"},"\u914d\u7f6e\u53c2\u8003"),"\u3002"))}f.isMDXComponent=!0}}]);
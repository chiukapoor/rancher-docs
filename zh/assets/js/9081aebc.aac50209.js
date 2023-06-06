"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(k,p(p({ref:t},l),{},{components:r})):n.createElement(k,p({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"\u547d\u540d\u7a7a\u95f4"},i=void 0,u={unversionedId:"how-to-guides/new-user-guides/manage-namespaces",id:"version-2.6/how-to-guides/new-user-guides/manage-namespaces",title:"\u547d\u540d\u7a7a\u95f4",description:"\u5728 Rancher \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u9879\u76ee\u8fdb\u4e00\u6b65\u5212\u5206\u4e3a\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\uff0c\u9879\u76ee\u662f\u7531\u7269\u7406\u96c6\u7fa4\u652f\u6301\u7684\uff0c\u800c\u547d\u540d\u7a7a\u95f4\u662f\u9879\u76ee\u4e2d\u7684\u865a\u62df\u96c6\u7fa4\u3002\u5f53\u9879\u76ee\u548c default \u547d\u540d\u7a7a\u95f4\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\u65f6\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\u6765\u9694\u79bb\u5e94\u7528\u548c\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/manage-namespaces.md",sourceDirName:"how-to-guides/new-user-guides",slug:"/how-to-guides/new-user-guides/manage-namespaces",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-namespaces",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-namespaces.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u547d\u540d\u7a7a\u95f4"},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0\u9879\u76ee\u6210\u5458",permalink:"/zh/v2.6/how-to-guides/new-user-guides/add-users-to-projects"},next:{title:"\u9ad8\u7ea7\u7528\u6237\u6307\u5357",permalink:"/zh/v2.6/pages-for-subheaders/advanced-user-guides"}},l={},c=[{value:"\u521b\u5efa\u547d\u540d\u7a7a\u95f4",id:"\u521b\u5efa\u547d\u540d\u7a7a\u95f4",level:3},{value:"\u5c06\u547d\u540d\u7a7a\u95f4\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u9879\u76ee",id:"\u5c06\u547d\u540d\u7a7a\u95f4\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u9879\u76ee",level:3},{value:"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d",id:"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d",level:3}],m={toc:c};function d(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728 Rancher \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u9879\u76ee\u8fdb\u4e00\u6b65\u5212\u5206\u4e3a\u591a\u4e2a",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"\u547d\u540d\u7a7a\u95f4"),"\uff0c\u9879\u76ee\u662f\u7531\u7269\u7406\u96c6\u7fa4\u652f\u6301\u7684\uff0c\u800c\u547d\u540d\u7a7a\u95f4\u662f\u9879\u76ee\u4e2d\u7684\u865a\u62df\u96c6\u7fa4\u3002\u5f53\u9879\u76ee\u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," \u547d\u540d\u7a7a\u95f4\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\u65f6\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\u6765\u9694\u79bb\u5e94\u7528\u548c\u8d44\u6e90\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u5c42\u7ea7\u5206\u914d\u8d44\u6e90\uff0c\u4ece\u800c\u4f7f\u9879\u76ee\u4e2d\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\uff0c\u4e5f\u53ef\u4ee5\u5355\u72ec\u7ed9\u67d0\u4e2a\u547d\u540d\u7a7a\u95f4\u663e\u5f0f\u5206\u914d\u8d44\u6e90\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u5206\u914d\u7ed9\u547d\u540d\u7a7a\u95f4\u7684\u8d44\u6e90\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/workloads-and-pods"},"\u5de5\u4f5c\u8d1f\u8f7d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/load-balancer-and-ingress-controller"},"\u8d1f\u8f7d\u5747\u8861\u5668/Ingress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},"\u670d\u52a1\u53d1\u73b0\u8bb0\u5f55")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/create-kubernetes-persistent-storage"},"\u6301\u4e45\u5377\u58f0\u660e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"\u8bc1\u4e66")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"\u955c\u50cf\u4ed3\u5e93")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"\u5bc6\u6587"))),(0,n.kt)("p",null,"\u4e3a\u4e86\u5728 vanilla Kubernetes \u96c6\u7fa4\u4e2d\u7ba1\u7406\u6743\u9650\uff0c\u96c6\u7fa4\u7ba1\u7406\u5458\u8981\u4e3a\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u914d\u7f6e\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u7b56\u7565\u3002Rancher \u5728\u9879\u76ee\u7ea7\u522b\u4e0a\u5206\u914d\u7528\u6237\u6743\u9650\uff0c\u9879\u76ee\u4e2d\u7684\u547d\u540d\u7a7a\u95f4\u4f1a\u81ea\u52a8\u7ee7\u627f\u9879\u76ee\u7684\u6743\u9650\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff0c\u7531\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," \u4e0d\u8981\u6c42\u5c06\u65b0\u547d\u540d\u7a7a\u95f4\u9650\u5b9a\u5728\u4f60\u53ef\u4ee5\u8bbf\u95ee\u7684\u9879\u76ee\u5185\uff0c\u56e0\u6b64\u4f60\u53ef\u80fd\u65e0\u6cd5\u4f7f\u7528\u8be5\u547d\u540d\u7a7a\u95f4\u3002\u5982\u679c\u4f60\u7684\u6743\u9650\u4ec5\u9650\u4e8e\u9879\u76ee\u7ea7\u522b\uff0c\u5219\u6700\u597d",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-namespaces"},"\u901a\u8fc7 Rancher \u521b\u5efa\u547d\u540d\u7a7a\u95f4"),"\uff0c\u4ee5\u786e\u4fdd\u4f60\u6709\u6743\u8bbf\u95ee\u8be5\u547d\u540d\u7a7a\u95f4\u3002")),(0,n.kt)("h3",{id:"\u521b\u5efa\u547d\u540d\u7a7a\u95f4"},"\u521b\u5efa\u547d\u540d\u7a7a\u95f4"),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u547d\u540d\u7a7a\u95f4\u6765\u9694\u79bb\u9879\u76ee\u4e2d\u7684\u5e94\u7528\u548c\u8d44\u6e90\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u53ef\u4ee5\u5206\u914d\u7ed9\u547d\u540d\u7a7a\u95f4\u7684\u9879\u76ee\u8d44\u6e90\uff08\u4f8b\u5982\uff0c",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3001",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"\u8bc1\u4e66"),"\u3001",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMap")," \u7b49\uff09\u65f6\uff0c\u4f60\u53ef\u4ee5\u52a8\u6001\u521b\u5efa\u547d\u540d\u7a7a\u95f4\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u5728\u5176\u4e2d\u521b\u5efa\u547d\u540d\u7a7a\u95f4\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4\u7684\u9879\u76ee\uff0c\u5e76\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa\u547d\u540d\u7a7a\u95f4"),"\u3002\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8f6c\u5230",(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u5728\u9879\u76ee\u5185"),"\u4ee5\u521b\u5efa\u4e0d\u4e0e\u9879\u76ee\u5173\u8054\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u53ef\u9009"),"\uff1a\u5982\u679c\u4f60\u7684\u9879\u76ee\u5177\u6709\u6709\u6548\u7684",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/manage-project-resource-quotas"},"\u8d44\u6e90\u914d\u989d"),"\uff0c\u4f60\u53ef\u4ee5\u8986\u76d6\u9ed8\u8ba4\u8d44\u6e90",(0,n.kt)("strong",{parentName:"p"},"\u9650\u5236"),"\uff08\u9650\u5236\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528\u7684\u8d44\u6e90\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165",(0,n.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\uff0c\u7136\u540e\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\u3002\u4f60\u53ef\u4ee5\u5f00\u59cb\u5c06\u96c6\u7fa4\u8d44\u6e90\u5206\u914d\u7ed9\u547d\u540d\u7a7a\u95f4\u3002"),(0,n.kt)("h3",{id:"\u5c06\u547d\u540d\u7a7a\u95f4\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u9879\u76ee"},"\u5c06\u547d\u540d\u7a7a\u95f4\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u9879\u76ee"),(0,n.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff08\u4f8b\u5982\u5e0c\u671b\u5176\u4ed6\u56e2\u961f\u4f7f\u7528\u8be5\u5e94\u7528\u65f6\uff09\uff0c\u96c6\u7fa4\u7ba1\u7406\u5458\u548c\u6210\u5458\u53ef\u80fd\u9700\u8981\u5c06\u547d\u540d\u7a7a\u95f4\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u9879\u76ee\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u9700\u8981\u79fb\u52a8\u547d\u540d\u7a7a\u95f4\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u79fb\u52a8\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > \u79fb\u52a8"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u9879\u76ee\u7684\u547d\u540d\u7a7a\u95f4\u3002\u7136\u540e\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u79fb\u52a8"),"\u3002\u4f60\u53ef\u4ee5\u540c\u65f6\u79fb\u52a8\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\u3002"),(0,n.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f\u4e8b\u9879\uff1a",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u79fb\u52a8 ",(0,n.kt)("inlineCode",{parentName:"li"},"System")," \u9879\u76ee\u4e2d\u7684\u547d\u540d\u7a7a\u95f4\u3002\u79fb\u52a8\u547d\u540d\u7a7a\u95f4\u53ef\u80fd\u4f1a\u5bf9\u96c6\u7fa4\u7f51\u7edc\u4ea7\u751f\u4e0d\u5229\u5f71\u54cd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f60\u4e0d\u80fd\u5c06\u547d\u540d\u7a7a\u95f4\u79fb\u52a8\u5230\u5df2\u914d\u7f6e",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/manage-project-resource-quotas"},"\u8d44\u6e90\u914d\u989d"),"\u7684\u9879\u76ee\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5c06\u547d\u540d\u7a7a\u95f4\u4ece\u5df2\u8bbe\u7f6e\u914d\u989d\u7684\u9879\u76ee\u79fb\u52a8\u5230\u672a\u8bbe\u7f6e\u914d\u989d\u7684\u9879\u76ee\uff0c\u5219\u4f1a\u5220\u9664\u8be5\u547d\u540d\u7a7a\u95f4\u7684\u914d\u989d\u3002")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e3a\u65b0\u547d\u540d\u7a7a\u95f4\u9009\u62e9\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u7136\u540e\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u79fb\u52a8"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9",(0,n.kt)("strong",{parentName:"p"},"\u65e0"),"\uff0c\u4ece\u800c\u5c06\u547d\u540d\u7a7a\u95f4\u4ece\u6240\u6709\u9879\u76ee\u4e2d\u79fb\u9664\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u7684\u547d\u540d\u7a7a\u95f4\u5df2\u79fb\u81f3\u5176\u4ed6\u9879\u76ee\uff08\u6216\u4ece\u6240\u6709\u9879\u76ee\u4e2d\u79fb\u9664\uff09\u3002\u5982\u679c\u547d\u540d\u7a7a\u95f4\u7ed1\u5b9a\u4e86\u9879\u76ee\u8d44\u6e90\uff0c\u547d\u540d\u7a7a\u95f4\u4f1a\u91ca\u653e\u8fd9\u4e9b\u8d44\u6e90\uff0c\u7136\u540e\u7ed1\u5b9a\u65b0\u9879\u76ee\u7684\u8d44\u6e90\u3002"),(0,n.kt)("h3",{id:"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"},"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236\uff0c\u4ece\u800c\u4e3a\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u63d0\u4f9b\u5bf9\u66f4\u591a\uff08\u6216\u66f4\u5c11\uff09\u9879\u76ee\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff1a"),(0,n.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces"},"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"),"\u3002"))}d.isMDXComponent=!0}}]);
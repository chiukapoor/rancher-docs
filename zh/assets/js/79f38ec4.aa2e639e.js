"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9219],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),g=o,m=f["".concat(s,".").concat(g)]||f[g]||l[g]||a;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>l});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"ConfigMap"},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",title:"ConfigMap",description:"\u5927\u591a\u6570 Kubernetes \u5bc6\u6587\u7528\u4e8e\u5b58\u50a8\u654f\u611f\u4fe1\u606f\uff0c\u4f46\u662f ConfigMap \u4f1a\u5b58\u50a8\u4e00\u822c\u914d\u7f6e\u4fe1\u606f\uff0c\u4f8b\u5982\u4e00\u7ec4\u914d\u7f6e\u6587\u4ef6\u3002\u7531\u4e8e ConfigMap \u4e0d\u5b58\u50a8\u654f\u611f\u4fe1\u606f\uff0c\u56e0\u6b64 ConfigMap \u53ef\u4ee5\u81ea\u52a8\u66f4\u65b0\uff0c\u4e0d\u9700\u8981\u5728\u66f4\u65b0\u540e\u91cd\u542f\u5176\u5bb9\u5668\uff08\u5176\u4ed6\u7c7b\u578b\u7684\u5bc6\u6587\u5927\u591a\u9700\u8981\u624b\u52a8\u66f4\u65b0\u548c\u91cd\u542f\u5bb9\u5668\u540e\u624d\u80fd\u751f\u6548\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"ConfigMap"},sidebar:"tutorialSidebar",previous:{title:"\u52a0\u5bc6 HTTP \u901a\u4fe1",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},next:{title:"\u5bc6\u6587",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"}},c={},l=[{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:2}],f={toc:l};function g(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5927\u591a\u6570 Kubernetes \u5bc6\u6587\u7528\u4e8e\u5b58\u50a8\u654f\u611f\u4fe1\u606f\uff0c\u4f46\u662f ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"},"ConfigMap")," \u4f1a\u5b58\u50a8\u4e00\u822c\u914d\u7f6e\u4fe1\u606f\uff0c\u4f8b\u5982\u4e00\u7ec4\u914d\u7f6e\u6587\u4ef6\u3002\u7531\u4e8e ConfigMap \u4e0d\u5b58\u50a8\u654f\u611f\u4fe1\u606f\uff0c\u56e0\u6b64 ConfigMap \u53ef\u4ee5\u81ea\u52a8\u66f4\u65b0\uff0c\u4e0d\u9700\u8981\u5728\u66f4\u65b0\u540e\u91cd\u542f\u5176\u5bb9\u5668\uff08\u5176\u4ed6\u7c7b\u578b\u7684\u5bc6\u6587\u5927\u591a\u9700\u8981\u624b\u52a8\u66f4\u65b0\u548c\u91cd\u542f\u5bb9\u5668\u540e\u624d\u80fd\u751f\u6548\uff09\u3002"),(0,n.kt)("p",null,"ConfigMap \u63a5\u53d7\u5e38\u89c1\u5b57\u7b26\u4e32\u683c\u5f0f\u7684\u952e\u503c\u5bf9\uff0c\u4f8b\u5982\u914d\u7f6e\u6587\u4ef6\u6216 JSON Blob\u3002\u4e0a\u4f20\u914d\u7f6e\u6620\u5c04\u540e\uff0c\u4efb\u4f55\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u53ef\u4ee5\u5c06\u5176\u5f15\u7528\u4e3a\u73af\u5883\u53d8\u91cf\u6216\u5377\u6302\u8f7d\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6c\u5230\u5177\u6709\u8981\u5f15\u7528 ConfigMap \u7684\u5de5\u4f5c\u8d1f\u8f7d\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > ConfigMaps"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165 ConfigMap \u7684",(0,n.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u3002"),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Kubernetes \u5c06 ConfigMap \u5f52\u7c7b\u4e3a",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"\u5bc6\u6587"),"\uff0c\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u5bc6\u6587\u4e0d\u80fd\u91cd\u540d\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u907f\u514d\u51b2\u7a81\uff0cConfigMap \u7684\u540d\u79f0\u5fc5\u987b\u4e0e\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u5176\u4ed6\u8bc1\u4e66\u3001\u955c\u50cf\u4ed3\u5e93\u548c\u5bc6\u6587\u4e0d\u4e00\u6837\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u6dfb\u52a0 ConfigMap \u7684",(0,n.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e"),"\u9009\u9879\u5361\u4e0a\uff0c\u5c06\u952e\u503c\u5bf9\u6dfb\u52a0\u5230\u4f60\u7684 ConfigMap\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6dfb\u52a0\u4efb\u610f\u6570\u91cf\u7684\u503c\u3002\u901a\u8fc7\u590d\u5236\u548c\u7c98\u8d34\u7684\u65b9\u5f0f\u5c06\u591a\u4e2a\u952e\u503c\u5bf9\u6dfb\u52a0\u5230 ConfigMap\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("strong",{parentName:"p"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),"\u6765\u6dfb\u52a0\u6570\u636e\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u8981\u5b58\u50a8\u654f\u611f\u6570\u636e\uff0c\u8bf7",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"\u4f7f\u7528\u5bc6\u6587"),"\uff0c\u4e0d\u8981\u4f7f\u7528 ConfigMap\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 ConfigMap \u6dfb\u52a0\u5230\u547d\u540d\u7a7a\u95f4\u3002\u4f60\u53ef\u4ee5\u5728 Rancher UI \u7684",(0,n.kt)("strong",{parentName:"p"},"\u8d44\u6e90 > ConfigMaps")," \u89c6\u56fe\u4e2d\u67e5\u770b\u5b83\u3002"),(0,n.kt)("h2",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,n.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u7ecf\u5c06 ConfigMap \u6dfb\u52a0\u5230\u547d\u540d\u7a7a\u95f4\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230\u539f\u59cb\u547d\u540d\u7a7a\u95f4\u90e8\u7f72\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ConfigMap \u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u53d8\u91cf\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b89\u88c5\u5230\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5377\u7684\u53c2\u6570\u3002")),(0,n.kt)("p",null,"\u6709\u5173\u5c06 ConfigMap \u6dfb\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"))}g.isMDXComponent=!0}}]);
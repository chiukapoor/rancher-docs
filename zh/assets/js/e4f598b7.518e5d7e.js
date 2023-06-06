"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68253],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),b=o,y=f["".concat(l,".").concat(b)]||f[b]||s[b]||c;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},43630:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>s});t(67294);var n=t(3905);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={slug:"/",title:"\u4ec0\u4e48\u662f Rancher\uff1f",sidebar_label:"\u4ec0\u4e48\u662f Rancher\uff1f",description:"Rancher \u5728 Kubernetes \u4e4b\u4e0a\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u4e00\u7ad9\u5f0f\u7ba1\u7406\u4e0a\u767e\u4e2a\u96c6\u7fa4\uff0c\u7edf\u4e00 RBAC\uff0c\u5f00\u542f\u76d1\u63a7\u548c\u544a\u8b66\u3002\u4e86\u89e3\u66f4\u591a\u3002"},l=void 0,u={unversionedId:"rancher-manager",id:"rancher-manager",title:"\u4ec0\u4e48\u662f Rancher\uff1f",description:"Rancher \u5728 Kubernetes \u4e4b\u4e0a\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u4e00\u7ad9\u5f0f\u7ba1\u7406\u4e0a\u767e\u4e2a\u96c6\u7fa4\uff0c\u7edf\u4e00 RBAC\uff0c\u5f00\u542f\u76d1\u63a7\u548c\u544a\u8b66\u3002\u4e86\u89e3\u66f4\u591a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rancher-manager.md",sourceDirName:".",slug:"/",permalink:"/zh/",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/rancher-manager.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{slug:"/",title:"\u4ec0\u4e48\u662f Rancher\uff1f",sidebar_label:"\u4ec0\u4e48\u662f Rancher\uff1f",description:"Rancher \u5728 Kubernetes \u4e4b\u4e0a\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u4e00\u7ad9\u5f0f\u7ba1\u7406\u4e0a\u767e\u4e2a\u96c6\u7fa4\uff0c\u7edf\u4e00 RBAC\uff0c\u5f00\u542f\u76d1\u63a7\u548c\u544a\u8b66\u3002\u4e86\u89e3\u66f4\u591a\u3002"},sidebar:"tutorialSidebar",next:{title:"\u6982\u8ff0",permalink:"/zh/getting-started/overview"}},p={},s=[],f={toc:s};function b(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",c(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rancher \u662f\u4e00\u4e2a Kubernetes \u7ba1\u7406\u5de5\u5177\uff0c\u8ba9\u4f60\u80fd\u5728\u4efb\u4f55\u5730\u65b9\u548c\u4efb\u4f55\u63d0\u4f9b\u5546\u4e0a\u90e8\u7f72\u548c\u8fd0\u884c\u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"Rancher \u53ef\u4ee5\u521b\u5efa\u6765\u81ea Kubernetes \u6258\u7ba1\u670d\u52a1\u63d0\u4f9b\u5546\u7684\u96c6\u7fa4\uff0c\u521b\u5efa\u8282\u70b9\u5e76\u5b89\u88c5 Kubernetes\uff0c\u6216\u8005\u5bfc\u5165\u5728\u4efb\u4f55\u5730\u65b9\u8fd0\u884c\u7684\u73b0\u6709 Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"Rancher \u57fa\u4e8e Kubernetes \u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u5305\u62ec\u7edf\u4e00\u6240\u6709\u96c6\u7fa4\u7684\u8eab\u4efd\u9a8c\u8bc1\u548c RBAC\uff0c\u8ba9\u7cfb\u7edf\u7ba1\u7406\u5458\u4ece\u4e00\u4e2a\u4f4d\u7f6e\u63a7\u5236\u5168\u90e8\u96c6\u7fa4\u7684\u8bbf\u95ee\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0cRancher \u53ef\u4ee5\u4e3a\u96c6\u7fa4\u548c\u8d44\u6e90\u63d0\u4f9b\u66f4\u7cbe\u7ec6\u7684\u76d1\u63a7\u548c\u544a\u8b66\uff0c\u5c06\u65e5\u5fd7\u53d1\u9001\u5230\u5916\u90e8\u63d0\u4f9b\u5546\uff0c\u5e76\u901a\u8fc7\u5e94\u7528\u5546\u5e97\uff08Application Catalog\uff09\u76f4\u63a5\u96c6\u6210 Helm\u3002\u5982\u679c\u4f60\u62e5\u6709\u5916\u90e8 CI/CD \u7cfb\u7edf\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u4e0e Rancher \u5bf9\u63a5\u3002\u6ca1\u6709\u7684\u8bdd\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 Rancher \u63d0\u4f9b\u7684 Fleet \u81ea\u52a8\u90e8\u7f72\u548c\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,n.kt)("p",null,"Rancher \u662f\u4e00\u4e2a ",(0,n.kt)("em",{parentName:"p"},"\u5168\u6808\u5f0f")," \u7684 Kubernetes \u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u4e3a\u4f60\u63d0\u4f9b\u5728\u4efb\u4f55\u5730\u65b9\u90fd\u80fd\u6210\u529f\u8fd0\u884c Kubernetes \u7684\u5de5\u5177\u3002"))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[15741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,d=g["".concat(u,".").concat(m)]||g[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"\u7528\u6237\u548c\u7ec4"},u=void 0,c={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups",title:"\u7528\u6237\u548c\u7ec4",description:"Rancher \u4f9d\u8d56\u7528\u6237\u548c\u7ec4\u6765\u51b3\u5b9a\u5141\u8bb8\u767b\u5f55\u5230 Rancher \u7684\u7528\u6237\uff0c\u4ee5\u53ca\u4ed6\u4eec\u53ef\u4ee5\u8bbf\u95ee\u54ea\u4e9b\u8d44\u6e90\u3002\u4f60\u914d\u7f6e\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u540e\uff0c\u8be5\u63d0\u4f9b\u7a0b\u5e8f\u7684\u7528\u6237\u5c06\u80fd\u591f\u767b\u5f55\u5230\u4f60\u7684 Rancher Server\u3002\u7528\u6237\u767b\u5f55\u65f6\uff0c\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u5c06\u5411\u4f60\u7684 Rancher Server \u63d0\u4f9b\u8be5\u7528\u6237\u6240\u5c5e\u7684\u7ec4\u5217\u8868\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u7528\u6237\u548c\u7ec4"},sidebar:"tutorialSidebar",previous:{title:"\u8eab\u4efd\u9a8c\u8bc1\u914d\u7f6e",permalink:"/zh/pages-for-subheaders/authentication-config"},next:{title:"\u672c\u5730\u8eab\u4efd\u9a8c\u8bc1",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users"}},s={},p=[{value:"\u7ba1\u7406\u6210\u5458",id:"\u7ba1\u7406\u6210\u5458",level:2},{value:"\u7528\u6237\u4fe1\u606f",id:"\u7528\u6237\u4fe1\u606f",level:2},{value:"\u81ea\u52a8\u5237\u65b0\u7528\u6237\u4fe1\u606f",id:"\u81ea\u52a8\u5237\u65b0\u7528\u6237\u4fe1\u606f",level:3},{value:"\u624b\u52a8\u5237\u65b0\u7528\u6237\u4fe1\u606f",id:"\u624b\u52a8\u5237\u65b0\u7528\u6237\u4fe1\u606f",level:3},{value:"\u4f1a\u8bdd\u5468\u671f",id:"\u4f1a\u8bdd\u5468\u671f",level:2}],g={toc:p};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher \u4f9d\u8d56\u7528\u6237\u548c\u7ec4\u6765\u51b3\u5b9a\u5141\u8bb8\u767b\u5f55\u5230 Rancher \u7684\u7528\u6237\uff0c\u4ee5\u53ca\u4ed6\u4eec\u53ef\u4ee5\u8bbf\u95ee\u54ea\u4e9b\u8d44\u6e90\u3002\u4f60\u914d\u7f6e\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u540e\uff0c\u8be5\u63d0\u4f9b\u7a0b\u5e8f\u7684\u7528\u6237\u5c06\u80fd\u591f\u767b\u5f55\u5230\u4f60\u7684 Rancher Server\u3002\u7528\u6237\u767b\u5f55\u65f6\uff0c\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u5c06\u5411\u4f60\u7684 Rancher Server \u63d0\u4f9b\u8be5\u7528\u6237\u6240\u5c5e\u7684\u7ec4\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5411\u8d44\u6e90\u6dfb\u52a0\u7528\u6237\u6216\u7ec4\uff0c\u6765\u63a7\u5236\u5176\u5bf9\u96c6\u7fa4\u3001\u9879\u76ee\u3001\u591a\u96c6\u7fa4\u5e94\u7528\u3001\u5168\u5c40 DNS \u63d0\u4f9b\u7a0b\u5e8f\u548c\u76f8\u5173\u8d44\u6e90\u7684\u8bbf\u95ee\u3002\u5c06\u7ec4\u6dfb\u52a0\u5230\u8d44\u6e90\u65f6\uff0c\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u4e2d\u5c5e\u4e8e\u8be5\u7ec4\u7684\u6240\u6709\u7528\u6237\u90fd\u5c06\u80fd\u591f\u4f7f\u7528\u7ec4\u7684\u6743\u9650\u8bbf\u95ee\u8be5\u8d44\u6e90\u3002\u6709\u5173\u89d2\u8272\u548c\u6743\u9650\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/manage-role-based-access-control-rbac"},"RBAC"),"\u3002"),(0,r.kt)("h2",{id:"\u7ba1\u7406\u6210\u5458"},"\u7ba1\u7406\u6210\u5458"),(0,r.kt)("p",null,"\u5411\u8d44\u6e90\u6dfb\u52a0\u7528\u6237\u6216\u7528\u6237\u7ec4\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8f93\u5165\u7528\u6237\u6216\u7ec4\u7684\u540d\u79f0\u6765\u641c\u7d22\u7528\u6237\u6216\u7ec4\u3002Rancher Server \u4f1a\u67e5\u8be2\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\uff0c\u6765\u67e5\u627e\u4e0e\u4f60\u8f93\u5165\u7684\u5185\u5bb9\u5339\u914d\u7684\u7528\u6237\u548c\u7ec4\u3002\u641c\u7d22\u4ec5\u9650\u4e8e\u4f60\u767b\u5f55\u65f6\u4f7f\u7528\u7684\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u542f\u7528\u4e86 GitHub \u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f46\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users"},"\u672c\u5730"),"\u7528\u6237\u767b\u5f55\uff0c\u5219\u65e0\u6cd5\u641c\u7d22 GitHub \u7528\u6237\u6216\u7ec4\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u67e5\u770b\u548c\u7ba1\u7406\u6240\u6709\u7528\u6237\uff0c\u5305\u62ec\u672c\u5730\u7528\u6237\u548c\u6765\u81ea\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u7684\u7528\u6237\u3002\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237"),"\u3002"),(0,r.kt)("admonition",{title:"SAML \u8eab\u4efd\u63d0\u4f9b\u5546\u6ce8\u610f\u4e8b\u9879",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"SAML \u534f\u8bae\u4e0d\u652f\u6301\u641c\u7d22\u6216\u67e5\u627e\u7528\u6237\u6216\u7ec4\u3002\u56e0\u6b64\uff0c\u5c06\u7528\u6237\u6216\u7ec4\u6dfb\u52a0\u5230 Rancher \u65f6\u4e0d\u4f1a\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7528\u6237\u65f6\uff0c\u5fc5\u987b\u6b63\u786e\u8f93\u5165\u786e\u5207\u7684\u7528\u6237 ID\uff08\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"UID")," \u5b57\u6bb5\uff09\u3002\u952e\u5165\u7528\u6237 ID \u65f6\uff0c\u5c06\u4e0d\u4f1a\u641c\u7d22\u53ef\u80fd\u5339\u914d\u7684\u5176\u4ed6\u7528\u6237 ID\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7ec4\u65f6\uff0c\u5fc5\u987b\u4ece\u6587\u672c\u6846\u65c1\u8fb9\u7684\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u7ec4\u3002Rancher \u5047\u5b9a\u6765\u81ea\u6587\u672c\u6846\u7684\u4efb\u4f55\u8f93\u5165\u90fd\u662f\u7528\u6237\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u7ec4\u4e0b\u62c9\u5217\u8868\u4ec5\u663e\u793a\u4f60\u6240\u5c5e\u7684\u7528\u6237\u7ec4\u3002\u5982\u679c\u4f60\u4e0d\u662f\u67d0\u4e2a\u7ec4\u7684\u6210\u5458\uff0c\u4f60\u5c06\u65e0\u6cd5\u6dfb\u52a0\u8be5\u7ec4\u3002"))),(0,r.kt)("h2",{id:"\u7528\u6237\u4fe1\u606f"},"\u7528\u6237\u4fe1\u606f"),(0,r.kt)("p",null,"Rancher \u4f1a\u7ef4\u62a4\u901a\u8fc7\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u767b\u5f55\u7684\u6bcf\u4e2a\u7528\u6237\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237\u662f\u5426\u5141\u8bb8\u8bbf\u95ee Rancher Server\uff0c\u4ee5\u53ca\u7528\u6237\u6240\u5c5e\u7684\u7ec4\u7684\u5217\u8868\u3002Rancher \u4fdd\u7559\u6b64\u7528\u6237\u4fe1\u606f\uff0c\u4ee5\u4fbf CLI\u3001API \u548c kubectl \u80fd\u591f\u51c6\u786e\u5730\u53cd\u6620\u7528\u6237\u57fa\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u4e2d\u7684\u7ec4\u6210\u5458\u5173\u7cfb\u7684\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u4f7f\u7528\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u767b\u5f55\u5230 UI \u65f6\uff0cRancher \u5c06\u81ea\u52a8\u66f4\u65b0\u8be5\u7528\u6237\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"\u81ea\u52a8\u5237\u65b0\u7528\u6237\u4fe1\u606f"},"\u81ea\u52a8\u5237\u65b0\u7528\u6237\u4fe1\u606f"),(0,r.kt)("p",null,"Rancher \u4f1a\u5b9a\u671f\u5237\u65b0\u7528\u6237\u4fe1\u606f\uff0c\u751a\u81f3\u5728\u7528\u6237\u901a\u8fc7 UI \u767b\u5f55\u4e4b\u524d\u4e5f\u662f\u5982\u6b64\u3002\u4f60\u53ef\u4ee5\u63a7\u5236 Rancher \u6267\u884c\u5237\u65b0\u7684\u9891\u7387\u3002"),(0,r.kt)("p",null,"\u6709\u4e24\u4e2a\u53c2\u6570\u53ef\u4ee5\u63a7\u5236\u8fd9\u4e2a\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"auth-user-info-max-age-seconds"))),(0,r.kt)("p",{parentName:"li"}," \u6b64\u8bbe\u7f6e\u63a7\u5236\u7528\u6237\u4fe1\u606f\u7684\u6700\u5927\u8001\u5316\u65f6\u95f4\uff0c\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\uff0cRancher \u5c31\u4f1a\u5237\u65b0\u4fe1\u606f\u3002\u5982\u679c\u7528\u6237\u8fdb\u884c API \u8c03\u7528\uff08\u76f4\u63a5 UI \u8bbf\u95ee\u6216\u901a\u8fc7\u4f7f\u7528 Rancher CLI \u6216 kubectl \u8c03\u7528\uff09\uff0c\u5e76\u4e14\u4e0e Rancher \u4e0a\u6b21\u5237\u65b0\u7528\u6237\u4fe1\u606f\u7684\u65f6\u95f4\u95f4\u9694\u5927\u4e8e\u6b64\u8bbe\u7f6e\uff0c\u5219 Rancher \u5c06\u89e6\u53d1\u5237\u65b0\u3002\u6b64\u8bbe\u7f6e\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"3600")," \u79d2\uff0c\u5373 1 \u5c0f\u65f6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"auth-user-info-resync-cron"))),(0,r.kt)("p",{parentName:"li"}," \u6b64\u8bbe\u7f6e\u63a7\u5236\u7528\u4e8e\u6240\u6709\u7528\u6237\u91cd\u65b0\u540c\u6b65\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u4fe1\u606f\u7684\u5b9a\u671f\u4efb\u52a1\u5468\u671f\u3002\u65e0\u8bba\u7528\u6237\u6700\u8fd1\u662f\u5426\u767b\u5f55\u6216\u4f7f\u7528 API\uff0c\u81ea\u52a8\u5237\u65b0\u4efb\u52a1\u90fd\u4f1a\u6309\u7167\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5237\u65b0\u7528\u6237\u4fe1\u606f\u3002\u6b64\u8bbe\u7f6e\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"0 0 * * *"),"\uff0c\u5373\u6bcf\u5929\u5348\u591c\u8fdb\u884c\u4e00\u6b21\u3002\u6709\u5173\u6b64\u8bbe\u7f6e\u7684\u6709\u6548\u503c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"Cron \u6587\u6863"),"\u3002"))),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u66f4\u6539\u8bbe\u7f6e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u5168\u5c40\u8bbe\u7f6e"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80\u4f60\u9700\u8981\u914d\u7f6e\u7684\u8bbe\u7f6e\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u8bbe\u7f6e"),"\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e SAML \u4e0d\u652f\u6301\u7528\u6237\u67e5\u627e\uff0c\u56e0\u6b64\u57fa\u4e8e SAML \u7684\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u4e0d\u652f\u6301\u5b9a\u671f\u5237\u65b0\u7528\u6237\u4fe1\u606f\u3002\u53ea\u6709\u5f53\u7528\u6237\u767b\u5f55\u5230 Rancher UI \u65f6\uff0c\u624d\u4f1a\u5237\u65b0\u7528\u6237\u4fe1\u606f\u3002")),(0,r.kt)("h3",{id:"\u624b\u52a8\u5237\u65b0\u7528\u6237\u4fe1\u606f"},"\u624b\u52a8\u5237\u65b0\u7528\u6237\u4fe1\u606f"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a Rancher \u4e0a\u4e00\u6b21\u6267\u884c\u7528\u6237\u4fe1\u606f\u81ea\u52a8\u5237\u65b0\u7684\u65f6\u95f4\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u5237\u65b0\u6765\u5237\u65b0\u6240\u6709\u7528\u6237\u7684\u4fe1\u606f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("strong",{parentName:"li"},"\u7528\u6237"),"\u9875\u9762\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5237\u65b0\u7528\u6237\u7ec4\u6210\u5458\u540d\u5355"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aRancher \u5237\u65b0\u4e86\u6240\u6709\u7528\u6237\u7684\u4fe1\u606f\u3002\u8bf7\u6c42\u6b64\u5237\u65b0\u5c06\u66f4\u65b0\u54ea\u4e9b\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee Rancher \u4ee5\u53ca\u6bcf\u4e2a\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u7ec4\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e SAML \u4e0d\u652f\u6301\u7528\u6237\u67e5\u627e\uff0c\u56e0\u6b64\u57fa\u4e8e SAML \u7684\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u4e0d\u652f\u6301\u624b\u52a8\u5237\u65b0\u7528\u6237\u4fe1\u606f\u3002\u53ea\u6709\u5f53\u7528\u6237\u767b\u5f55\u5230 Rancher UI \u65f6\uff0c\u624d\u4f1a\u5237\u65b0\u7528\u6237\u4fe1\u606f\u3002")),(0,r.kt)("h2",{id:"\u4f1a\u8bdd\u5468\u671f"},"\u4f1a\u8bdd\u5468\u671f"),(0,r.kt)("p",null,"\u7528\u6237\u4f1a\u8bdd\u7684\u9ed8\u8ba4\u751f\u547d\u5468\u671f\uff08TTL\uff09\u662f\u53ef\u8c03\u7684\u3002\u9ed8\u8ba4\u7684\u4f1a\u8bdd\u5468\u671f\u662f 16 \u5c0f\u65f6\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u5168\u5c40\u8bbe\u7f6e"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"auth-user-session-ttl-minutes"))," \u5e76\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u8bbe\u7f6e"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4f1a\u8bdd\u5e94\u8be5\u6301\u7eed\u7684\u65f6\u95f4\uff08\u4ee5\u5206\u949f\u4e3a\u5355\u4f4d\uff09\uff0c\u7136\u540e\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"Save"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u7528\u6237\u7684 Rancher \u767b\u5f55\u4f1a\u8bdd\u5728\u8bbe\u5b9a\u7684\u5206\u949f\u6570\u540e\u81ea\u52a8\u9000\u51fa\u3002"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=n,d=c["".concat(i,".").concat(k)]||c[k]||u[k]||l;return a?r.createElement(d,p(p({ref:t},m),{},{components:a})):r.createElement(d,p({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={title:"\u591a\u96c6\u7fa4\u5e94\u7528"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",id:"version-2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",title:"\u591a\u96c6\u7fa4\u5e94\u7528",description:"Rancher v2.5 \u5f00\u59cb\u5df2\u5f03\u7528\u591a\u96c6\u7fa4\u5e94\u7528\u3002\u6211\u4eec\u73b0\u5728\u5efa\u8bae\u4f7f\u7528 Fleet \u6765\u8de8\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps.md",sourceDirName:"how-to-guides/new-user-guides/deploy-apps-across-clusters",slug:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",permalink:"/zh/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps.md",tags:[],version:"2.6",lastUpdatedAt:1672712056,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u591a\u96c6\u7fa4\u5e94\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Feet \u8fdb\u884c\u6301\u7eed\u4ea4\u4ed8",permalink:"/zh/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},next:{title:"\u5907\u4efd\u548c\u707e\u96be\u6062\u590d",permalink:"/zh/v2.6/pages-for-subheaders/backup-restore-and-disaster-recovery"}},m={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u6743\u9650",id:"\u6743\u9650",level:3},{value:"\u542f\u7528\u65e7\u7248\u529f\u80fd",id:"\u542f\u7528\u65e7\u7248\u529f\u80fd",level:3},{value:"\u542f\u52a8\u591a\u96c6\u7fa4\u5e94\u7528",id:"\u542f\u52a8\u591a\u96c6\u7fa4\u5e94\u7528",level:2},{value:"\u591a\u96c6\u7fa4\u5e94\u7528\u914d\u7f6e\u9009\u9879",id:"\u591a\u96c6\u7fa4\u5e94\u7528\u914d\u7f6e\u9009\u9879",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:3},{value:"\u89d2\u8272",id:"\u89d2\u8272",level:3},{value:"\u5e94\u7528\u914d\u7f6e\u9009\u9879",id:"\u5e94\u7528\u914d\u7f6e\u9009\u9879",level:2},{value:"\u4f7f\u7528 questions.yml \u6587\u4ef6",id:"\u4f7f\u7528-questionsyml-\u6587\u4ef6",level:3},{value:"\u539f\u751f Helm Chart \u7684\u952e\u503c\u5bf9",id:"\u539f\u751f-helm-chart-\u7684\u952e\u503c\u5bf9",level:3},{value:"\u6210\u5458",id:"\u6210\u5458",level:3},{value:"\u8986\u76d6\u7279\u5b9a\u9879\u76ee\u7684\u5e94\u7528\u914d\u7f6e\u9009\u9879",id:"\u8986\u76d6\u7279\u5b9a\u9879\u76ee\u7684\u5e94\u7528\u914d\u7f6e\u9009\u9879",level:3},{value:"\u5347\u7ea7\u591a\u96c6\u7fa4\u5e94\u7528\u89d2\u8272\u548c\u9879\u76ee",id:"\u5347\u7ea7\u591a\u96c6\u7fa4\u5e94\u7528\u89d2\u8272\u548c\u9879\u76ee",level:2},{value:"\u591a\u96c6\u7fa4\u5e94\u7528\u7ba1\u7406",id:"\u591a\u96c6\u7fa4\u5e94\u7528\u7ba1\u7406",level:2},{value:"\u5220\u9664\u591a\u96c6\u7fa4\u5e94\u7528",id:"\u5220\u9664\u591a\u96c6\u7fa4\u5e94\u7528",level:2}],c={toc:u};function k(e){var{components:t}=e,a=p(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rancher v2.5 \u5f00\u59cb\u5df2\u5f03\u7528\u591a\u96c6\u7fa4\u5e94\u7528\u3002\u6211\u4eec\u73b0\u5728\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet")," \u6765\u8de8\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528\u3002")),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u5927\u591a\u6570\u5e94\u7528\u90fd\u90e8\u7f72\u5728\u5355\u4e2a Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u4f46\u6709\u65f6\u4f60\u53ef\u80fd\u9700\u8981\u8de8\u4e0d\u540c\u96c6\u7fa4\u548c/\u6216\u9879\u76ee\u90e8\u7f72\u540c\u4e00\u5e94\u7528\u7684\u591a\u4e2a\u526f\u672c\u3002\u5728 Rancher \u4e2d\uff0c",(0,r.kt)("em",{parentName:"p"},"\u591a\u96c6\u7fa4\u5e94\u7528")," \u6307\u7684\u662f\u4f7f\u7528 Helm Chart \u8de8\u591a\u4e2a\u96c6\u7fa4\u90e8\u7f72\u7684\u5e94\u7528\u3002\u7531\u4e8e\u80fd\u591f\u8de8\u591a\u4e2a\u96c6\u7fa4\u90e8\u7f72\u76f8\u540c\u7684\u5e94\u7528\uff0c\u56e0\u6b64\u53ef\u4ee5\u907f\u514d\u5728\u6bcf\u4e2a\u96c6\u7fa4\u4e0a\u91cd\u590d\u6267\u884c\u76f8\u540c\u7684\u5e94\u7528\u914d\u7f6e\u64cd\u4f5c\u800c\u5f15\u5165\u7684\u4eba\u4e3a\u9519\u8bef\u3002\u4f7f\u7528\u591a\u96c6\u7fa4\u5e94\u7528\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u5728\u6240\u6709\u9879\u76ee/\u96c6\u7fa4\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\uff0c\u5e76\u6839\u636e\u4f60\u7684\u76ee\u6807\u9879\u76ee\u66f4\u6539\u914d\u7f6e\u3002\u7531\u4e8e\u591a\u96c6\u7fa4\u5e94\u7528\u88ab\u89c6\u4e3a\u5355\u4e2a\u5e94\u7528\uff0c\u56e0\u6b64\u66f4\u5bb9\u6613\u7ba1\u7406\u548c\u7ef4\u62a4\u3002"),(0,r.kt)("p",null,"\u5168\u5c40\u5e94\u7528\u5546\u5e97\u4e2d\u7684\u4efb\u4f55 Helm Chart \u90fd\u53ef\u7528\u4e8e\u90e8\u7f72\u548c\u7ba1\u7406\u591a\u96c6\u7fa4\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u591a\u96c6\u7fa4\u5e94\u7528\u540e\uff0c\u4f60\u53ef\u4ee5\u5bf9\u5168\u5c40 DNS \u6761\u76ee\u8fdb\u884c\u7f16\u7a0b\uff0c\u4ee5\u4fbf\u66f4\u8f7b\u677e\u5730\u8bbf\u95ee\u5e94\u7528\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("h3",{id:"\u6743\u9650"},"\u6743\u9650"),(0,r.kt)("p",null,"\u8981\u5728 Rancher \u4e2d\u521b\u5efa\u591a\u96c6\u7fa4\u5e94\u7528\uff0c\u4f60\u81f3\u5c11\u9700\u8981\u5177\u6709\u4ee5\u4e0b\u6743\u9650\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76ee\u6807\u96c6\u7fa4\u4e2d\u7684",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%A1%B9%E7%9B%AE%E8%A7%92%E8%89%B2"},"\u9879\u76ee\u6210\u5458\u89d2\u8272"),"\uff0c\u80fd\u591f\u521b\u5efa\u3001\u8bfb\u53d6\u3001\u66f4\u65b0\u548c\u5220\u9664\u5de5\u4f5c\u8d1f\u8f7d"),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u6807\u9879\u76ee\u6240\u5728\u96c6\u7fa4\u7684",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%9B%86%E7%BE%A4%E8%A7%92%E8%89%B2"},"\u96c6\u7fa4\u6240\u6709\u8005\u89d2\u8272"))),(0,r.kt)("h3",{id:"\u542f\u7528\u65e7\u7248\u529f\u80fd"},"\u542f\u7528\u65e7\u7248\u529f\u80fd"),(0,r.kt)("p",null,"\u7531\u4e8e Rancher 2.5 \u5df2\u5f03\u7528\u591a\u96c6\u7fa4\u5e94\u7528\u5e76\u4f7f\u7528 Fleet \u53d6\u4ee3\u5b83\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u529f\u80fd\u5f00\u5173\u4ee5\u542f\u7528\u591a\u96c6\u7fa4\u5e94\u7528\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u5168\u5c40\u8bbe\u7f6e"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u529f\u80fd\u5f00\u5173"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Legacy")," \u529f\u80fd\u5f00\u5173\u5e76\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u6fc0\u6d3b"),"\u3002")),(0,r.kt)("h2",{id:"\u542f\u52a8\u591a\u96c6\u7fa4\u5e94\u7528"},"\u542f\u52a8\u591a\u96c6\u7fa4\u5e94\u7528"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u591a\u96c6\u7fa4\u5e94\u7528"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u542f\u52a8"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u542f\u52a8\u7684\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u67e5\u770b\u6765\u81ea Helm Chart ",(0,r.kt)("inlineCode",{parentName:"li"},"README")," \u7684\u8be6\u7ec6\u63cf\u8ff0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u9009\u9879"),"\u4e0b\u8f93\u5165\u591a\u96c6\u7fa4\u5e94\u7528\u7684",(0,r.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u540d\u79f0\u8fd8\u7528\u4e8e\u5728\u6bcf\u4e2a",(0,r.kt)("a",{parentName:"li",href:"#%E7%9B%AE%E6%A0%87"},"\u76ee\u6807\u9879\u76ee"),"\u4e2d\u4e3a\u591a\u96c6\u7fa4\u5e94\u7528\u521b\u5efa\u4e00\u4e2a Kubernetes \u547d\u540d\u7a7a\u95f4\u3002\u547d\u540d\u7a7a\u95f4\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"<MULTI-CLUSTER_APPLICATION_NAME>-<PROJECT_ID>"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"li"},"\u6a21\u677f\u7248\u672c"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b8c\u6210",(0,r.kt)("a",{parentName:"li",href:"#%E5%A4%9A%E9%9B%86%E7%BE%A4%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"\u591a\u96c6\u7fa4\u5e94\u7528\u914d\u7f6e\u9009\u9879"),"\u4ee5\u53ca",(0,r.kt)("a",{parentName:"li",href:"#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"\u5e94\u7528\u914d\u7f6e\u9009\u9879"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u53ef\u4ee5",(0,r.kt)("a",{parentName:"li",href:"#%E6%88%90%E5%91%98"},"\u4e0e\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4e92"),"\u7684",(0,r.kt)("strong",{parentName:"li"},"\u6210\u5458"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0",(0,r.kt)("a",{parentName:"li",href:"#%E8%A6%86%E7%9B%96%E7%89%B9%E5%AE%9A%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"\u81ea\u5b9a\u4e49\u5e94\u7528\u914d\u7f6e\u7b54\u6848"),"\uff0c\u8fd9\u5c06\u66f4\u6539\u9ed8\u8ba4\u5e94\u7528\u914d\u7f6e\u7b54\u6848\u4e2d\u7279\u5b9a\u9879\u76ee\u7684\u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b",(0,r.kt)("strong",{parentName:"li"},"\u9884\u89c8"),"\u4e2d\u7684\u6587\u4ef6\u3002\u786e\u8ba4\u540e\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u542f\u52a8"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5e94\u7528\u5df2\u90e8\u7f72\u5230\u6240\u9009\u7684\u547d\u540d\u7a7a\u95f4\u3002\u4f60\u53ef\u4ee5\u4ece\u9879\u76ee\u4e2d\u67e5\u770b\u5e94\u7528\u72b6\u6001\u3002"),(0,r.kt)("h2",{id:"\u591a\u96c6\u7fa4\u5e94\u7528\u914d\u7f6e\u9009\u9879"},"\u591a\u96c6\u7fa4\u5e94\u7528\u914d\u7f6e\u9009\u9879"),(0,r.kt)("p",null,"Rancher \u5c06\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u914d\u7f6e\u9009\u9879\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\u3002"),(0,r.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u76ee\u6807"),"\u90e8\u5206\u4e2d\uff0c\u9009\u62e9\u7528\u4e8e\u90e8\u7f72\u5e94\u7528\u7684\u9879\u76ee\u3002\u9879\u76ee\u5217\u8868\u4ec5\u663e\u793a\u4f60\u6709\u6743\u8bbf\u95ee\u7684\u9879\u76ee\u3002\u6240\u9009\u7684\u6bcf\u4e2a\u9879\u76ee\u90fd\u4f1a\u88ab\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\uff0c\u5176\u4e2d\u663e\u793a\u4e86\u6240\u9009\u7684\u96c6\u7fa4\u540d\u79f0\u548c\u9879\u76ee\u540d\u79f0\u3002\u8981\u79fb\u9664\u76ee\u6807\u9879\u76ee\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"-"),"\u3002"),(0,r.kt)("h3",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u5347\u7ea7"),"\u90e8\u5206\u4e2d\uff0c\u9009\u62e9\u5347\u7ea7\u5e94\u7528\u65f6\u9700\u8981\u4f7f\u7528\u7684\u5347\u7ea7\u7b56\u7565\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6eda\u52a8\u66f4\u65b0\uff08\u6279\u91cf\uff09"),"\uff1a\u9009\u62e9\u6b64\u5347\u7ea7\u7b56\u7565\u65f6\uff0c\u6bcf\u6b21\u5347\u7ea7\u7684\u5e94\u7528\u6570\u91cf\u53d6\u51b3\u4e8e\u9009\u62e9\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6279\u91cf\u5927\u5c0f"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u95f4\u9694"),"\uff08\u591a\u5c11\u79d2\u540e\u624d\u5f00\u59cb\u4e0b\u4e00\u6279\u66f4\u65b0\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u540c\u65f6\u5347\u7ea7\u6240\u6709\u5e94\u7528"),"\uff1a\u9009\u62e9\u6b64\u5347\u7ea7\u7b56\u7565\u65f6\uff0c\u6240\u6709\u9879\u76ee\u7684\u6240\u6709\u5e94\u7528\u90fd\u5c06\u540c\u65f6\u5347\u7ea7\u3002"))),(0,r.kt)("h3",{id:"\u89d2\u8272"},"\u89d2\u8272"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u89d2\u8272"),"\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u89d2\u8272\u3002\u901a\u5e38\uff0c\u5f53\u7528\u6237",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/helm-charts-in-rancher"},"\u542f\u52a8\u5546\u5e97\u5e94\u7528"),"\u65f6\uff0c\u8be5\u7528\u6237\u7684\u6743\u9650\u4f1a\u7528\u4e8e\u521b\u5efa\u5e94\u7528\u6240\u9700\u7684\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d/\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u591a\u96c6\u7fa4\u5e94\u7528\u7531 ",(0,r.kt)("em",{parentName:"p"},"\u7cfb\u7edf\u7528\u6237")," \u90e8\u7f72\uff0c\u7cfb\u7edf\u7528\u6237\u8fd8\u88ab\u6307\u5b9a\u4e3a\u6240\u6709\u5e95\u5c42\u8d44\u6e90\u7684\u521b\u5efa\u8005\u3002\u7531\u4e8e\u5b9e\u9645\u7528\u6237\u53ef\u4ee5\u4ece\u67d0\u4e2a\u76ee\u6807\u9879\u76ee\u4e2d\u5220\u9664\uff0c\u56e0\u6b64\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"\u7cfb\u7edf\u7528\u6237")," \u800c\u4e0d\u662f\u5b9e\u9645\u7528\u6237\u3002\u5982\u679c\u5b9e\u9645\u7528\u6237\u4ece\u5176\u4e2d\u4e00\u4e2a\u9879\u76ee\u4e2d\u5220\u9664\uff0c\u5219\u8be5\u7528\u6237\u5c06\u4e0d\u518d\u80fd\u591f\u7ba1\u7406\u5176\u4ed6\u9879\u76ee\u7684\u5e94\u7528\u3002"),(0,r.kt)("p",null,"Rancher \u5141\u8bb8\u4f60\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"\u9879\u76ee"),"\u6216",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u7684\u89d2\u8272\u9009\u9879\u3002Rancher \u5c06\u5141\u8bb8\u4f60\u6839\u636e\u7528\u6237\u7684\u6743\u9650\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\u89d2\u8272\u8fdb\u884c\u521b\u5efa\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u9879\u76ee")," - \u76f8\u5f53\u4e8e",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%A1%B9%E7%9B%AE%E8%A7%92%E8%89%B2"},"\u9879\u76ee\u6210\u5458"),"\u3002\u5982\u679c\u4f60\u9009\u62e9\u6b64\u89d2\u8272\uff0cRancher \u5c06\u68c0\u67e5\u7528\u6237\u662f\u5426\u5728\u6240\u6709\u76ee\u6807\u9879\u76ee\u4e2d\u81f3\u5c11\u5177\u6709",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%A1%B9%E7%9B%AE%E8%A7%92%E8%89%B2"},"\u9879\u76ee\u6210\u5458"),"\u7684\u89d2\u8272\u3002\u867d\u7136\u7528\u6237\u53ef\u80fd\u6ca1\u6709\u88ab\u660e\u786e\u6388\u4e88 ",(0,r.kt)("em",{parentName:"p"},"\u9879\u76ee\u6210\u5458")," \u89d2\u8272\uff0c\u4f46\u5982\u679c\u7528\u6237\u662f",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u5458"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%9B%86%E7%BE%A4%E8%A7%92%E8%89%B2"},"\u96c6\u7fa4\u6240\u6709\u8005"),"\u6216",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%A1%B9%E7%9B%AE%E8%A7%92%E8%89%B2"},"\u9879\u76ee\u6240\u6709\u8005"),"\uff0c\u5219\u8ba4\u4e3a\u8be5\u7528\u6237\u5177\u6709\u6240\u9700\u7684\u6743\u9650\u7ea7\u522b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4")," - \u76f8\u5f53\u4e8e",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%9B%86%E7%BE%A4%E8%A7%92%E8%89%B2"},"\u96c6\u7fa4\u6240\u6709\u8005"),"\u3002\u5982\u679c\u4f60\u9009\u62e9\u6b64\u89d2\u8272\uff0cRancher \u5c06\u68c0\u67e5\u7528\u6237\u662f\u5426\u5728\u6240\u6709\u76ee\u6807\u9879\u76ee\u4e2d\u81f3\u5c11\u5177\u6709",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%A1%B9%E7%9B%AE%E8%A7%92%E8%89%B2"},"\u96c6\u7fa4\u6240\u6709\u8005"),"\u7684\u89d2\u8272\u3002\u867d\u7136\u7528\u6237\u53ef\u80fd\u6ca1\u6709\u88ab\u660e\u786e\u6388\u4e88 ",(0,r.kt)("em",{parentName:"p"},"\u96c6\u7fa4\u6240\u6709\u8005")," \u89d2\u8272\uff0c\u4f46\u5982\u679c\u7528\u6237\u662f",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u5458"),"\uff0c\u5219\u8ba4\u4e3a\u8be5\u7528\u6237\u5177\u6709\u6240\u9700\u7684\u6743\u9650\u7ea7\u522b\u3002"))),(0,r.kt)("p",null,"\u5728\u542f\u52a8\u5e94\u7528\u65f6\uff0cRancher \u4f1a\u5728\u542f\u52a8\u5e94\u7528\u4e4b\u524d\u786e\u8ba4\u4f60\u5728\u76ee\u6807\u9879\u76ee\u4e2d\u662f\u5426\u62e5\u6709\u8fd9\u4e9b\u6743\u9650\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u67d0\u4e9b\u5e94\u7528\uff08\u5982 ",(0,r.kt)("em",{parentName:"p"},"Grafana")," \u6216 ",(0,r.kt)("em",{parentName:"p"},"Datadog"),"\uff09\u9700\u8981\u8bbf\u95ee\u7279\u5b9a\u96c6\u7fa4\u7ea7\u522b\u7684\u8d44\u6e90\u3002\u8fd9\u4e9b\u5e94\u7528\u5c06\u9700\u8981 ",(0,r.kt)("em",{parentName:"p"},"\u96c6\u7fa4")," \u89d2\u8272\u3002\u5982\u679c\u4f60\u4e4b\u540e\u53d1\u73b0\u5e94\u7528\u9700\u8981\u96c6\u7fa4\u89d2\u8272\uff0c\u5219\u53ef\u4ee5\u5347\u7ea7\u591a\u96c6\u7fa4\u5e94\u7528\u4ee5\u66f4\u65b0\u89d2\u8272\u3002")),(0,r.kt)("h2",{id:"\u5e94\u7528\u914d\u7f6e\u9009\u9879"},"\u5e94\u7528\u914d\u7f6e\u9009\u9879"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a Helm Chart\uff0c\u4f60\u9700\u8981\u8f93\u5165\u4e00\u4e2a\u5fc5\u987b\u7684\u7b54\u6848\u5217\u8868\u624d\u80fd\u6210\u529f\u90e8\u7f72 Chart\u3002\u7531\u4e8e Rancher \u4f1a\u5c06\u7b54\u6848\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," \u6807\u5fd7\u4f20\u9012\u7ed9 Helm\uff0c\u56e0\u6b64\u4f60\u5fc5\u987b\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#the-format-and-limitations-of---set"},"\u4f7f\u7528 Helm\uff1a\u2013set \u7684\u683c\u5f0f\u548c\u9650\u5236"),"\u4e2d\u7684\u8bed\u6cd5\u89c4\u5219\u6765\u683c\u5f0f\u5316\u8fd9\u4e9b\u7b54\u6848\u3002"),(0,r.kt)("admonition",{title:"\u793a\u4f8b",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u8f93\u5165\u7684\u7b54\u6848\u5305\u542b\u7528\u9017\u53f7\u5206\u9694\u7684\u4e24\u4e2a\u503c\uff08\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"abc, bcd"),"\uff09\u65f6\uff0c\u4f60\u9700\u8981\u7528\u53cc\u5f15\u53f7\u5c06\u503c\u62ec\u8d77\u6765\uff08\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},'"abc, bcd" '),"\uff09\u3002")),(0,r.kt)("h3",{id:"\u4f7f\u7528-questionsyml-\u6587\u4ef6"},"\u4f7f\u7528 questions.yml \u6587\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u90e8\u7f72\u7684 Helm Chart \u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"questions.yml")," \u6587\u4ef6\uff0cRancher UI \u4f1a\u5c06\u6b64\u6587\u4ef6\u8f6c\u6362\u6210\u6613\u4e8e\u4f7f\u7528\u7684 UI \u6765\u6536\u96c6\u95ee\u9898\u7684\u7b54\u6848\u3002"),(0,r.kt)("h3",{id:"\u539f\u751f-helm-chart-\u7684\u952e\u503c\u5bf9"},"\u539f\u751f Helm Chart \u7684\u952e\u503c\u5bf9"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u539f\u751f Helm Chart\uff08\u5373\u6765\u81ea ",(0,r.kt)("strong",{parentName:"p"},"Helm Stable")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"Helm Incubator")," \u5e94\u7528\u5546\u5e97\u6216\u81ea\u5b9a\u4e49 Helm Chart \u4ed3\u5e93\u7684 Chart\uff09\uff0c\u7b54\u6848\u4f1a\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Answers")," \u4e2d\u4ee5\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u63d0\u4f9b\u3002\u8fd9\u4e9b\u7b54\u6848\u80fd\u8986\u76d6\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("h3",{id:"\u6210\u5458"},"\u6210\u5458"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u591a\u96c6\u7fa4\u5e94\u7528\u53ea\u80fd\u7531\u5e94\u7528\u7684\u521b\u5efa\u8005\u7ba1\u7406\u3002\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("strong",{parentName:"p"},"\u6210\u5458"),"\u4e2d\u6dfb\u52a0\u5176\u4ed6\u7528\u6237\uff0c\u4ee5\u4fbf\u8fd9\u4e9b\u7528\u6237\u7ba1\u7406\u6216\u67e5\u770b\u591a\u96c6\u7fa4\u5e94\u7528\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u6210\u5458"),"\u641c\u7d22\u6846\u4e2d\u952e\u5165\u6210\u5458\u7684\u540d\u79f0\uff0c\u67e5\u627e\u8981\u6dfb\u52a0\u7684\u7528\u6237\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u8be5\u6210\u5458\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"\u8bbf\u95ee\u7c7b\u578b"),"\u3002\u591a\u96c6\u7fa4\u9879\u76ee\u6709\u4e09\u79cd\u8bbf\u95ee\u7c7b\u578b\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u5e76\u4e86\u89e3\u8fd9\u4e9b\u8bbf\u95ee\u7c7b\u578b\u7684\u542b\u4e49\uff0c\u4ee5\u4e86\u89e3\u591a\u96c6\u7fa4\u5e94\u7528\u6743\u9650\u7684\u542f\u7528\u65b9\u5f0f\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6240\u6709\u8005"),"\uff1a\u6b64\u8bbf\u95ee\u7c7b\u578b\u53ef\u4ee5\u7ba1\u7406\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u4efb\u4f55\u914d\u7f6e\uff0c\u5305\u62ec\u6a21\u677f\u7248\u672c\u3001",(0,r.kt)("a",{parentName:"p",href:"#%E5%A4%9A%E9%9B%86%E7%BE%A4%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"\u591a\u96c6\u7fa4\u5e94\u7528\u914d\u7f6e\u9009\u9879"),"\uff0c",(0,r.kt)("a",{parentName:"p",href:"#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"\u5e94\u7528\u914d\u7f6e\u9009\u9879"),"\uff0c\u53ef\u4ee5\u4e0e\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4e92\u7684\u6210\u5458\uff0c\u4ee5\u53ca",(0,r.kt)("a",{parentName:"p",href:"#%E8%A6%86%E7%9B%96%E7%89%B9%E5%AE%9A%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"\u81ea\u5b9a\u4e49\u5e94\u7528\u914d\u7f6e\u7b54\u6848"),"\u3002\u7531\u4e8e\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u521b\u5efa\u4f7f\u7528\u4e0e\u7528\u6237\u4e0d\u540c\u7684\u6743\u9650\u96c6\uff0c\u56e0\u6b64\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u4efb\u4f55 ",(0,r.kt)("em",{parentName:"p"},"\u6240\u6709\u8005")," \u90fd\u53ef\u4ee5\u7ba1\u7406/\u5220\u9664",(0,r.kt)("a",{parentName:"p",href:"#%E7%9B%AE%E6%A0%87"},"\u76ee\u6807\u9879\u76ee"),"\u4e2d\u7684\u5e94\u7528\uff0c\u800c\u4e0d\u9700\u8981\u663e\u5f0f\u6388\u6743\u8bbf\u95ee\u8fd9\u4e9b\u9879\u76ee\u3002\u8bf7\u4ec5\u4e3a\u53d7\u4fe1\u4efb\u7684\u7528\u6237\u914d\u7f6e\u6b64\u8bbf\u95ee\u7c7b\u578b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6210\u5458"),"\uff1a\u6b64\u8bbf\u95ee\u7c7b\u578b\u53ea\u80fd\u4fee\u6539\u6a21\u677f\u7248\u672c\u3001",(0,r.kt)("a",{parentName:"p",href:"#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"\u5e94\u7528\u914d\u7f6e\u9009\u9879"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"#%E8%A6%86%E7%9B%96%E7%89%B9%E5%AE%9A%E9%A1%B9%E7%9B%AE%E7%9A%84%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"\u81ea\u5b9a\u4e49\u5e94\u7528\u914d\u7f6e\u7b54\u6848"),"\u3002\u7531\u4e8e\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u521b\u5efa\u4f7f\u7528\u4e0e\u7528\u6237\u4e0d\u540c\u7684\u6743\u9650\u96c6\uff0c\u56e0\u6b64\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u4efb\u4f55 ",(0,r.kt)("em",{parentName:"p"},"\u6210\u5458")," \u90fd\u53ef\u4ee5\u4fee\u6539\u5e94\u7528\uff0c\u800c\u4e0d\u9700\u8981\u663e\u5f0f\u6388\u6743\u8bbf\u95ee\u8fd9\u4e9b\u9879\u76ee\u3002\u8bf7\u4ec5\u4e3a\u53d7\u4fe1\u4efb\u7684\u7528\u6237\u914d\u7f6e\u6b64\u8bbf\u95ee\u7c7b\u578b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53ea\u8bfb"),"\uff1a\u6b64\u8bbf\u95ee\u7c7b\u578b\u4e0d\u80fd\u4fee\u6539\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u4efb\u4f55\u914d\u7f6e\u9009\u9879\u3002\u7528\u6237\u53ea\u80fd\u67e5\u770b\u8fd9\u4e9b\u5e94\u7528\u3002"))),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u786e\u4fdd\u4ec5\u4e3a\u53d7\u4fe1\u4efb\u7684\u7528\u6237\u6388\u4e88 ",(0,r.kt)("em",{parentName:"p"},"\u6240\u6709\u8005")," \u6216 ",(0,r.kt)("em",{parentName:"p"},"\u6210\u5458")," \u8bbf\u95ee\u6743\u9650\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u7528\u6237\u5373\u4f7f\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u9879\u76ee\uff0c\u4e5f\u5c06\u81ea\u52a8\u80fd\u591f\u7ba1\u7406\u4e3a\u6b64\u591a\u96c6\u7fa4\u5e94\u7528\u521b\u5efa\u7684\u5e94\u7528\u3002")))),(0,r.kt)("h3",{id:"\u8986\u76d6\u7279\u5b9a\u9879\u76ee\u7684\u5e94\u7528\u914d\u7f6e\u9009\u9879"},"\u8986\u76d6\u7279\u5b9a\u9879\u76ee\u7684\u5e94\u7528\u914d\u7f6e\u9009\u9879"),(0,r.kt)("p",null,"\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u4e3b\u8981\u4f18\u52bf\u4e4b\u4e00\uff0c\u662f\u80fd\u591f\u5728\u591a\u4e2a\u96c6\u7fa4/\u9879\u76ee\u4e2d\u4f7f\u7528\u76f8\u540c\u914d\u7f6e\u90e8\u7f72\u76f8\u540c\u7684\u5e94\u7528\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4e3a\u67d0\u4e2a\u7279\u5b9a\u9879\u76ee\u4f7f\u7528\u7a0d\u5fae\u4e0d\u540c\u7684\u914d\u7f6e\u9009\u9879\uff0c\u4f46\u4f60\u4f9d\u7136\u5e0c\u671b\u7edf\u4e00\u7ba1\u7406\u8be5\u5e94\u7528\u4e0e\u5176\u4ed6\u5339\u914d\u7684\u5e94\u7528\u3002\u6b64\u65f6\uff0c\u4f60\u53ef\u4ee5\u4e3a\u8be5\u9879\u76ee\u8986\u76d6\u7279\u5b9a\u7684",(0,r.kt)("a",{parentName:"p",href:"#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9"},"\u5e94\u7528\u914d\u7f6e\u9009\u9879"),"\uff0c\u800c\u4e0d\u9700\u8981\u521b\u5efa\u5168\u65b0\u7684\u5e94\u7528\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u7b54\u6848\u8986\u76d6"),"\u4e2d\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u8986\u76d6"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u6bcf\u4e2a\u8986\u76d6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8303\u56f4"),"\uff1a\u5728\u914d\u7f6e\u9009\u9879\u4e2d\u9009\u62e9\u8981\u8986\u76d6\u54ea\u4e9b\u76ee\u6807\u9879\u76ee\u7684\u7b54\u6848\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u95ee\u9898"),"\uff1a\u9009\u62e9\u8981\u8986\u76d6\u7684\u95ee\u9898\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b54\u6848"),"\uff1a\u8f93\u5165\u8981\u4f7f\u7528\u7684\u7b54\u6848\u3002"))))),(0,r.kt)("h2",{id:"\u5347\u7ea7\u591a\u96c6\u7fa4\u5e94\u7528\u89d2\u8272\u548c\u9879\u76ee"},"\u5347\u7ea7\u591a\u96c6\u7fa4\u5e94\u7528\u89d2\u8272\u548c\u9879\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5728\u73b0\u6709\u7684\u591a\u96c6\u7fa4\u5e94\u7528\u4e0a\u66f4\u6539\u89d2\u8272"),"\n\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u521b\u5efa\u8005\u548c\u4efb\u4f55\u5177\u6709\u201c\u6240\u6709\u8005\u201d\u8bbf\u95ee\u7c7b\u578b\u7684\u7528\u6237\u90fd\u53ef\u4ee5\u5347\u7ea7\u5176",(0,r.kt)("strong",{parentName:"p"},"\u89d2\u8272"),"\u3002\u6dfb\u52a0\u65b0\u89d2\u8272\u65f6\uff0c\u6211\u4eec\u4f1a\u68c0\u67e5\u7528\u6237\u5728\u6240\u6709\u5f53\u524d\u76ee\u6807\u9879\u76ee\u4e2d\u662f\u5426\u5177\u6709\u8be5\u89d2\u8272\u3002Rancher \u4f1a\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"Roles")," \u5b57\u6bb5\u7684\u5b89\u88c5\u90e8\u5206\uff0c\u76f8\u5e94\u5730\u68c0\u67e5\u7528\u6237\u662f\u5426\u5177\u6709\u5168\u5c40\u7ba1\u7406\u5458\u3001\u96c6\u7fa4\u6240\u6709\u8005\u6216\u9879\u76ee\u6240\u6709\u8005\u7684\u89d2\u8272\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0/\u5220\u9664\u76ee\u6807\u9879\u76ee")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u521b\u5efa\u8005\u548c\u4efb\u4f55\u5177\u6709\u201c\u6240\u6709\u8005\u201d\u8bbf\u95ee\u7c7b\u578b\u7684\u7528\u6237\u90fd\u6dfb\u52a0\u6216\u79fb\u9664\u76ee\u6807\u9879\u76ee\u3002\u6dfb\u52a0\u65b0\u9879\u76ee\u65f6\uff0c\u6211\u4eec\u68c0\u67e5\u6b64\u8bf7\u6c42\u7684\u8c03\u7528\u8005\u662f\u5426\u5177\u6709\u591a\u96c6\u7fa4\u5e94\u7528\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u89d2\u8272\u3002Rancher \u4f1a\u68c0\u67e5\u7528\u6237\u662f\u5426\u5177\u6709\u5168\u5c40\u7ba1\u7406\u5458\u3001\u96c6\u7fa4\u6240\u6709\u8005\u548c\u9879\u76ee\u6240\u6709\u8005\u7684\u89d2\u8272\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664\u76ee\u6807\u9879\u76ee\u65f6\uff0c\u6211\u4eec\u4e0d\u4f1a\u8fdb\u884c\u8fd9\u4e9b\u6210\u5458\u8d44\u683c\u68c0\u67e5\u3002\u8fd9\u662f\u56e0\u4e3a\u8c03\u7528\u8005\u7684\u6743\u9650\u53ef\u80fd\u4e0e\u76ee\u6807\u9879\u76ee\u6709\u5173\uff0c\u6216\u8005\u7531\u4e8e\u8be5\u9879\u76ee\u5df2\u88ab\u5220\u9664\u5bfc\u81f4\u8c03\u7528\u8005\u5e0c\u671b\u5c06\u8be5\u9879\u76ee\u4ece\u76ee\u6807\u5217\u8868\u4e2d\u5220\u9664\u3002")),(0,r.kt)("h2",{id:"\u591a\u96c6\u7fa4\u5e94\u7528\u7ba1\u7406"},"\u591a\u96c6\u7fa4\u5e94\u7528\u7ba1\u7406"),(0,r.kt)("p",null,"\u4e0e\u540c\u4e00\u7c7b\u578b\u7684\u591a\u4e2a\u5355\u72ec\u5e94\u7528\u76f8\u6bd4\uff0c\u4f7f\u7528\u591a\u96c6\u7fa4\u5e94\u7528\u7684\u597d\u5904\u4e4b\u4e00\u662f\u6613\u4e8e\u7ba1\u7406\u3002\u4f60\u53ef\u4ee5\u514b\u9686\u3001\u5347\u7ea7\u6216\u56de\u6eda\u591a\u96c6\u7fa4\u5e94\u7528\u3002"),(0,r.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Legacy")," \u529f\u80fd\u5f00\u5173\u5df2\u542f\u7528\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u591a\u96c6\u7fa4\u5e94\u7528"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u5bf9\u5176\u6267\u884c\u64cd\u4f5c\u7684\u591a\u96c6\u7fa4\u5e94\u7528\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u22ee"),"\u3002\u9009\u62e9\u4ee5\u4e0b\u9009\u9879\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u514b\u9686"),"\uff1a\u521b\u5efa\u53e6\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u914d\u7f6e\u7684\u591a\u96c6\u7fa4\u5e94\u7528\u3002\u901a\u8fc7\u4f7f\u7528\u6b64\u9009\u9879\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u590d\u5236\u591a\u96c6\u7fa4\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5347\u7ea7"),"\uff1a\u5347\u7ea7\u591a\u96c6\u7fa4\u5e94\u7528\u4ee5\u66f4\u6539\u67d0\u4e9b\u914d\u7f6e\u3002\u5728\u4e3a\u591a\u96c6\u7fa4\u5e94\u7528\u6267\u884c\u5347\u7ea7\u65f6\uff0c\u5982\u679c\u4f60\u6709\u5408\u9002\u7684",(0,r.kt)("a",{parentName:"li",href:"#%E6%88%90%E5%91%98"},"\u8bbf\u95ee\u7c7b\u578b"),"\uff0c\u5219\u53ef\u4ee5\u4fee\u6539",(0,r.kt)("a",{parentName:"li",href:"#%E5%8D%87%E7%BA%A7"},"\u5347\u7ea7\u7b56\u7565"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u56de\u6eda"),"\uff1a\u5c06\u4f60\u7684\u5e94\u7528\u56de\u6eda\u5230\u7279\u5b9a\u7248\u672c\u3002\u5982\u679c\u4f60\u7684\u4e00\u4e2a\u6216\u591a\u4e2a",(0,r.kt)("a",{parentName:"li",href:"#%E7%9B%AE%E6%A0%87"},"\u76ee\u6807"),"\u7684\u591a\u96c6\u7fa4\u5e94\u7528\u5728\u5347\u7ea7\u540e\u51fa\u73b0\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u5b58\u50a8\u7684\u591a\u8fbe 10 \u4e2a\u591a\u96c6\u7fa4\u5e94\u7528\u7248\u672c\u8fdb\u884c\u56de\u6eda\u3002\u56de\u6eda\u591a\u96c6\u7fa4\u5e94\u7528\u4f1a\u6062\u590d",(0,r.kt)("strong",{parentName:"li"},"\u6240\u6709"),"\u76ee\u6807\u96c6\u7fa4\u548c\u9879\u76ee\u7684\u5e94\u7528\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u53d7\u5347\u7ea7\u95ee\u9898\u5f71\u54cd\u7684\u76ee\u6807\u3002")))),(0,r.kt)("h2",{id:"\u5220\u9664\u591a\u96c6\u7fa4\u5e94\u7528"},"\u5220\u9664\u591a\u96c6\u7fa4\u5e94\u7528"),(0,r.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Legacy")," \u529f\u80fd\u5f00\u5173\u5df2\u542f\u7528\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u591a\u96c6\u7fa4\u5e94\u7528"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u5220\u9664\u7684\u591a\u96c6\u7fa4\u5e94\u7528\uff0c\u7136\u540e\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u22ee > \u5220\u9664"),"\u3002\u5220\u9664\u591a\u96c6\u7fa4\u5e94\u7528\u4f1a\u5220\u9664\u6240\u6709\u76ee\u6807\u9879\u76ee\u4e2d\u7684\u6240\u6709\u5e94\u7528\u548c\u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u80fd\u72ec\u7acb\u5220\u9664\u5728\u76ee\u6807\u9879\u76ee\u4e2d\u4e3a\u591a\u96c6\u7fa4\u5e94\u7528\u521b\u5efa\u7684\u5e94\u7528\u3002\u53ea\u6709\u5220\u9664\u591a\u96c6\u7fa4\u5e94\u7528\u540e\u624d\u80fd\u5220\u9664\u8fd9\u4e9b\u5e94\u7528\u3002")))))}k.isMDXComponent=!0}}]);
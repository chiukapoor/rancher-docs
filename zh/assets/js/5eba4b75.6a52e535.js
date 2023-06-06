"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u7684\u9ed8\u8ba4\u9650\u5236"},c=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",id:"version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",title:"\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u7684\u9ed8\u8ba4\u9650\u5236",description:"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236\u4f1a\u5728\u521b\u5efa\u65f6\u4ece\u9879\u76ee\u6cbf\u7528\u5230\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u589e\u52a0\u6216\u51cf\u5c11\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u914d\u989d\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u6765\u8986\u76d6\u9ed8\u8ba4\u9650\u5236\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u7684\u9ed8\u8ba4\u9650\u5236"},sidebar:"tutorialSidebar",previous:{title:"Rancher \u9879\u76ee\u4e2d\u8d44\u6e90\u914d\u989d\u7684\u5de5\u4f5c\u539f\u7406",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas"},next:{title:"\u8bbe\u7f6e\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits"}},u={},l=[{value:"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d",id:"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d",level:3}],m={toc:l};function d(e){var{components:t}=e,i=s(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236"),"\u4f1a\u5728\u521b\u5efa\u65f6\u4ece\u9879\u76ee\u6cbf\u7528\u5230\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u589e\u52a0\u6216\u51cf\u5c11\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u914d\u989d\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u6765\u8986\u76d6\u9ed8\u8ba4\u9650\u5236\u3002"),(0,n.kt)("p",null,"\u5728\u4e0b\u56fe\u4e2d\uff0cRancher \u7ba1\u7406\u5458\u7684\u9879\u76ee\u6709\u4e00\u4e2a\u5df2\u751f\u6548\u7684\u8d44\u6e90\u914d\u989d\u3002\u4f46\u662f\uff0c\u7ba1\u7406\u5458\u60f3\u8981\u8986\u76d6 ",(0,n.kt)("inlineCode",{parentName:"p"},"Namespace 3")," \u7684\u547d\u540d\u7a7a\u95f4\u9650\u5236\uff0c\u4ee5\u4fbf\u8ba9\u8be5\u547d\u540d\u7a7a\u95f4\u4f7f\u7528\u66f4\u591a\u8d44\u6e90\u3002\u56e0\u6b64\uff0c\u7ba1\u7406\u5458",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},"\u63d0\u9ad8\u4e86 ",(0,n.kt)("inlineCode",{parentName:"a"},"Namespace 3")," \u7684\u547d\u540d\u7a7a\u95f4\u9650\u5236"),"\uff0c\u4ee5\u4fbf\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u8bbf\u95ee\u66f4\u591a\u8d44\u6e90\u3002"),(0,n.kt)("sup",null,"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236\u8986\u76d6"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236\u8986\u76d6",src:r(30681).Z,width:"1335",height:"843"})),(0,n.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},"\u5982\u4f55\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"),"\u3002"),(0,n.kt)("h3",{id:"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"},"\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u4e3a\u9879\u76ee\u914d\u7f6e\u4e86\u8d44\u6e90\u914d\u989d\uff0c\u4f60\u53ef\u4ee5\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236\uff0c\u4ece\u800c\u4e3a\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u63d0\u4f9b\u5bf9\u66f4\u591a\uff08\u6216\u66f4\u5c11\uff09\u9879\u76ee\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u7f16\u8f91\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u627e\u5230\u8981\u4e3a\u5176\u7f16\u8f91\u8d44\u6e90\u914d\u989d\u7684\u547d\u540d\u7a7a\u95f4\u3002\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8f91\u8d44\u6e90\u9650\u5236\u3002\u8fd9\u4e9b\u9650\u5236\u51b3\u5b9a\u4e86\u547d\u540d\u7a7a\u95f4\u53ef\u7528\u7684\u8d44\u6e90\u3002\u5fc5\u987b\u5728\u9879\u76ee\u9650\u5236\u8303\u56f4\u5185\u914d\u7f6e\u8fd9\u4e9b\u914d\u989d\u9650\u5236\u3002"),(0,n.kt)("p",{parentName:"li"},"\u6709\u5173\u6bcf\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u7c7b\u578b"),"\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types"},"\u7c7b\u578b\u53c2\u8003"),"\u3002"),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u4e3a\u9879\u76ee\u914d\u7f6e\u8d44\u6e90\u914d\u989d\uff0c\u8fd9\u4e9b\u9009\u9879\u5c06\u4e0d\u53ef\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u8f93\u5165\u7684\u9650\u5236\u8d85\u8fc7\u4e86\u914d\u7f6e\u7684\u9879\u76ee\u9650\u5236\uff0c\u4f60\u5c06\u65e0\u6cd5\u4fdd\u5b58\u4fee\u6539\u3002"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u8986\u76d6\u8bbe\u7f6e\u5df2\u7ecf\u5e94\u7528\u5230\u547d\u540d\u7a7a\u95f4\u7684\u8d44\u6e90\u914d\u989d\u3002"))}d.isMDXComponent=!0},30681:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-resource-quota-override-05542ea5daeaeb36a092ecbd8359baae.svg"}}]);
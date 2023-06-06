"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},p=void 0,s={unversionedId:"how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key",id:"how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key",title:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",description:"RKE1 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters",slug:"/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key.md",tags:[],version:"current",lastUpdatedAt:1685572449,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},sidebar:"tutorialSidebar",previous:{title:"\u8bc1\u4e66\u8f6e\u6362",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/rotate-certificates"},next:{title:"\u96c6\u7fa4\u6a21\u677f",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/manage-cluster-templates"}},l={},u=[{value:"RKE1 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",id:"rke1-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",level:3},{value:"RKE2 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",id:"rke2-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",level:3}],m={toc:u};function d(e){var{components:t}=e,c=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,c),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"rke1-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},"RKE1 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2a\u9009\u9879\u4e4b\u4e00\u6765\u542f\u7528\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728 Rancher UI \u4e2d\u7684 ",(0,n.kt)("strong",{parentName:"li"},"Cluster Options > Advanced Options > Secrets Encryption")," \u4e0b\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"li"},"Enabled")," \u5355\u9009\u6309\u94ae\uff1a")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u542f\u7528\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",src:r(1055).Z,width:"676",height:"457"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6216\u8005\uff0c\u5e94\u7528\u4ee5\u4e0b YAML\uff1a")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  services:\n    kube_api:\n      secrets_encryption_config:\n        enabled: true\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728 Rancher UI \u4e2d\u8f6e\u6362\u5bc6\u94a5\uff1a"),(0,n.kt)("p",{parentName:"li"},"2.1. \u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,n.kt)("p",{parentName:"li"},"2.2. \u5728\u6240\u9009\u96c6\u7fa4\u65c1\u8fb9\u7684\u5c4f\u5e55\u6700\u53f3\u4fa7\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Rotate Encryption Keys"),"\uff1a"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",src:r(4200).Z,width:"779",height:"486"})))),(0,n.kt)("h3",{id:"rke2-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},"RKE2 \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"v2.6.7 \u65b0\u529f\u80fd"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362\u9ed8\u8ba4\u542f\u7528\uff0c\u4e0d\u80fd\u7981\u7528\u3002")),(0,n.kt)("p",null,"\u8981\u5728 Rancher UI \u4e2d\u8f6e\u6362\u5bc6\u94a5\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u6240\u9009\u96c6\u7fa4\u65c1\u8fb9\u7684\u5c4f\u5e55\u6700\u53f3\u4fa7\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Rotate Encryption Keys"),"\uff1a"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",src:r(8810).Z,width:"802",height:"512"})))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6709\u5173 RKE2 \u5bc6\u6587\u52a0\u5bc6\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rke2.io/security/secrets_encryption"},"RKE2 \u6587\u6863"),"\u3002")))}d.isMDXComponent=!0},1055:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke1-enable-secrets-encryption-d29a4755d08b4488657d8cd841f3f04d.png"},4200:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke1-encryption-key-f596440d48043810288cc49779a2bbf0.png"},8810:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke2-encryption-key-a48b0c7cec7f98605d7ea0923008d67b.png"}}]);
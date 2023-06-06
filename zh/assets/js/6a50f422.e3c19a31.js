"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Pod \u5b89\u5168\u51c6\u5165 (PSA) \u914d\u7f6e\u6a21\u677f"},p=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates",title:"Pod \u5b89\u5168\u51c6\u5165 (PSA) \u914d\u7f6e\u6a21\u677f",description:"Pod Security admission (PSA) \u914d\u7f6e\u6a21\u677f\u662f Rancher \u81ea\u5b9a\u4e49\u8d44\u6e90 (CRD)\uff0c\u5728 Rancher v2.7.2 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\u53ef\u7528\u3002\u8fd9\u4e9b\u6a21\u677f\u63d0\u4f9b\u4e86\u53ef\u5e94\u7528\u4e8e\u96c6\u7fa4\u7684\u9884\u5b9a\u4e49\u5b89\u5168\u914d\u7f6e\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates.md",tags:[],version:"current",lastUpdatedAt:1683884717,formattedLastUpdatedAt:"2023\u5e745\u670812\u65e5",frontMatter:{title:"Pod \u5b89\u5168\u51c6\u5165 (PSA) \u914d\u7f6e\u6a21\u677f"},sidebar:"tutorialSidebar",previous:{title:"Pod \u5b89\u5168\u6807\u51c6 (PSS) \u548c Pod \u5b89\u5168\u51c6\u5165 (PSA)",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards"},next:{title:"\u914d\u7f6e\u5168\u5c40\u9ed8\u8ba4\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"}},m={},u=[{value:"\u5206\u914d Pod \u5b89\u5168\u51c6\u5165 (PSA) \u914d\u7f6e\u6a21\u677f",id:"\u5206\u914d-pod-\u5b89\u5168\u51c6\u5165-psa-\u914d\u7f6e\u6a21\u677f",level:2},{value:"\u5728\u96c6\u7fa4\u521b\u5efa\u671f\u95f4\u5206\u914d\u6a21\u677f",id:"\u5728\u96c6\u7fa4\u521b\u5efa\u671f\u95f4\u5206\u914d\u6a21\u677f",level:3},{value:"\u5c06\u6a21\u677f\u5206\u914d\u7ed9\u73b0\u6709\u96c6\u7fa4",id:"\u5c06\u6a21\u677f\u5206\u914d\u7ed9\u73b0\u6709\u96c6\u7fa4",level:3},{value:"\u52a0\u56fa\u96c6\u7fa4",id:"\u52a0\u56fa\u96c6\u7fa4",level:3},{value:"\u5c06\u6a21\u677f\u5206\u914d\u7ed9\u73b0\u6709\u96c6\u7fa4",id:"\u5c06\u6a21\u677f\u5206\u914d\u7ed9\u73b0\u6709\u96c6\u7fa4-1",level:3},{value:"\u6dfb\u52a0\u6216\u7f16\u8f91 Pod \u5b89\u5168\u51c6\u5165 (PSA) \u914d\u7f6e\u6a21\u677f",id:"\u6dfb\u52a0\u6216\u7f16\u8f91-pod-\u5b89\u5168\u51c6\u5165-psa-\u914d\u7f6e\u6a21\u677f",level:2},{value:"\u5141\u8bb8\u975e\u7ba1\u7406\u5458\u7528\u6237\u7ba1\u7406 PSA \u6a21\u677f",id:"\u5141\u8bb8\u975e\u7ba1\u7406\u5458\u7528\u6237\u7ba1\u7406-psa-\u6a21\u677f",level:3},{value:"\u8c41\u514d\u5fc5\u987b\u7684 Rancher \u547d\u540d\u7a7a\u95f4",id:"\u8c41\u514d\u5fc5\u987b\u7684-rancher-\u547d\u540d\u7a7a\u95f4",level:2},{value:"\u8c41\u514d\u547d\u540d\u7a7a\u95f4",id:"\u8c41\u514d\u547d\u540d\u7a7a\u95f4",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},k=c("Tabs"),d=c("TabItem"),N={toc:u};function g(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},N,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards"},"Pod Security admission (PSA)")," \u914d\u7f6e\u6a21\u677f\u662f Rancher \u81ea\u5b9a\u4e49\u8d44\u6e90 (CRD)\uff0c\u5728 Rancher v2.7.2 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\u53ef\u7528\u3002\u8fd9\u4e9b\u6a21\u677f\u63d0\u4f9b\u4e86\u53ef\u5e94\u7528\u4e8e\u96c6\u7fa4\u7684\u9884\u5b9a\u4e49\u5b89\u5168\u914d\u7f6e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rancher-privileged"),"\uff1a\u6700\u5bbd\u677e\u7684\u914d\u7f6e\u3002\u5b83\u4e0d\u9650\u5236\u4efb\u4f55 Pod \u884c\u4e3a\uff0c\u5141\u8bb8\u5df2\u77e5\u7684\u6743\u9650\u5347\u7ea7\u3002\u8be5\u7b56\u7565\u6ca1\u6709\u8c41\u514d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rancher-restricted"),"\uff1a\u4e25\u683c\u9650\u5236\u7684\u914d\u7f6e\uff0c\u9075\u5faa\u5f53\u524d\u52a0\u56fa pod \u7684\u6700\u4f73\u5b9e\u8df5\u3002\u4f60\u5fc5\u987b\u5bf9 Rancher \u7ec4\u4ef6\u8fdb\u884c",(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards#%E5%8F%97-psa-%E9%99%90%E5%88%B6%E7%9A%84%E9%9B%86%E7%BE%A4%E4%B8%8A%E7%9A%84-rancher"},"\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u8c41\u514d"),"\u3002")),(0,a.kt)("h2",{id:"\u5206\u914d-pod-\u5b89\u5168\u51c6\u5165-psa-\u914d\u7f6e\u6a21\u677f"},"\u5206\u914d Pod \u5b89\u5168\u51c6\u5165 (PSA) \u914d\u7f6e\u6a21\u677f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u521b\u5efa\u4e0b\u6e38\u96c6\u7fa4\u7684\u540c\u65f6\u5206\u914d PSA \u6a21\u677f\u3002\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u73b0\u6709\u96c6\u7fa4\u6765\u6dfb\u52a0\u6a21\u677f\u3002"),(0,a.kt)("h3",{id:"\u5728\u96c6\u7fa4\u521b\u5efa\u671f\u95f4\u5206\u914d\u6a21\u677f"},"\u5728\u96c6\u7fa4\u521b\u5efa\u671f\u95f4\u5206\u914d\u6a21\u677f"),(0,a.kt)(k,{mdxType:"Tabs"},(0,a.kt)(d,{value:"RKE2 \u548c K3s",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u6309\u94ae\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u63d0\u4f9b\u5546\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4: \u521b\u5efa"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230",(0,a.kt)("strong",{parentName:"li"},"\u57fa\u672c\u4fe1\u606f > \u5b89\u5168"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("strong",{parentName:"li"},"PSA \u914d\u7f6e\u6a21\u677f"),"\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u5206\u914d\u7684\u6a21\u677f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,a.kt)("h3",{id:"\u5c06\u6a21\u677f\u5206\u914d\u7ed9\u73b0\u6709\u96c6\u7fa4"},"\u5c06\u6a21\u677f\u5206\u914d\u7ed9\u73b0\u6709\u96c6\u7fa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u8868\u4e2d\u627e\u5230\u8981\u66f4\u65b0\u7684\u96c6\u7fa4\uff0c\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("strong",{parentName:"li"},"PSA \u914d\u7f6e\u6a21\u677f"),"\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u5206\u914d\u7684\u6a21\u677f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,a.kt)("h3",{id:"\u52a0\u56fa\u96c6\u7fa4"},"\u52a0\u56fa\u96c6\u7fa4"),(0,a.kt)("p",null,"\u5982\u679c\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"rancher-restricted")," \u6a21\u677f\u4f46\u4e0d\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"CIS \u914d\u7f6e\u6587\u4ef6"),"\uff0c\u4f60\u5c06\u65e0\u6cd5\u6ee1\u8db3 CIS Benchmark\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rke2-hardening-guide"},"RKE2 \u52a0\u56fa\u6307\u5357"),"\u3002")),(0,a.kt)(d,{value:"RKE1",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u6309\u94ae\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u63d0\u4f9b\u5546\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u96c6\u7fa4"),"\u9875\u9762\u4e0a\u7684",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9009\u9879"),"\u4e0b\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7\u9009\u9879"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("strong",{parentName:"li"},"PSA \u914d\u7f6e\u6a21\u677f"),"\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u5206\u914d\u7684\u6a21\u677f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,a.kt)("h3",{id:"\u5c06\u6a21\u677f\u5206\u914d\u7ed9\u73b0\u6709\u96c6\u7fa4-1"},"\u5c06\u6a21\u677f\u5206\u914d\u7ed9\u73b0\u6709\u96c6\u7fa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u8868\u4e2d\u627e\u5230\u8981\u66f4\u65b0\u7684\u96c6\u7fa4\uff0c\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9009\u9879 > \u9ad8\u7ea7\u9009\u9879"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("strong",{parentName:"li"},"PSA \u914d\u7f6e\u6a21\u677f"),"\u4e2d\uff0c\u9009\u62e9\u8981\u5206\u914d\u7684\u6a21\u677f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")))),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u6216\u7f16\u8f91-pod-\u5b89\u5168\u51c6\u5165-psa-\u914d\u7f6e\u6a21\u677f"},"\u6dfb\u52a0\u6216\u7f16\u8f91 Pod \u5b89\u5168\u51c6\u5165 (PSA) \u914d\u7f6e\u6a21\u677f"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u62e5\u6709\u7ba1\u7406\u5458\u6743\u9650\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u5176\u4ed6 PSA \u6a21\u677f\u6216\u7f16\u8f91\u73b0\u6709\u6a21\u677f\u6765\u81ea\u5b9a\u4e49\u5b89\u5168\u9650\u5236\u548c\u6743\u9650\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u7f16\u8f91\u4f7f\u7528\u4e2d\u7684\u73b0\u6709 PSA \u6a21\u677f\uff0c\u66f4\u6539\u5c06\u5e94\u7528\u200b\u200b\u4e8e\u5df2\u5206\u914d\u7ed9\u8be5\u6a21\u677f\u7684\u6240\u6709\u96c6\u7fa4\u3002")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7\u9009\u9879"),"\u6253\u5f00\u4e0b\u62c9\u83dc\u5355\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Pod \u5b89\u5168\u51c6\u5165"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u4fee\u6539\u7684\u6a21\u677f\uff0c\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u914d\u7f6e"),"\u6765\u7f16\u8f91\u6a21\u677f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u914d\u7f6e\u7f16\u8f91\u540e\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,a.kt)("h3",{id:"\u5141\u8bb8\u975e\u7ba1\u7406\u5458\u7528\u6237\u7ba1\u7406-psa-\u6a21\u677f"},"\u5141\u8bb8\u975e\u7ba1\u7406\u5458\u7528\u6237\u7ba1\u7406 PSA \u6a21\u677f"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5141\u8bb8\u5176\u4ed6\u7528\u6237\u7ba1\u7406\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u5c06\u8be5\u7528\u6237\u7ed1\u5b9a\u5230\u4e00\u4e2a\u89d2\u8272\uff0c\u5e76\u4e3a\u8be5\u89d2\u8272\u6388\u4e88 ",(0,a.kt)("inlineCode",{parentName:"p"},"management.cattle.io/podsecurityadmissionconfigurationtemplates")," \u4e0a\u7684\u6240\u6709\u64cd\u4f5c (",(0,a.kt)("inlineCode",{parentName:"p"},'"*"'),")\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed1\u5b9a\u5230\u4e0a\u8ff0\u6743\u9650\u7684\u7528\u6237\u90fd\u80fd\u591f\u66f4\u6539\u4f7f\u7528\u8be5 PSA \u6a21\u677f\u7684",(0,a.kt)("em",{parentName:"p"},"\u6240\u6709"),"\u6258\u7ba1\u96c6\u7fa4\u7684\u9650\u5236\u7ea7\u522b\uff0c\u5305\u62ec\u7528\u6237\u6ca1\u6709\u6743\u9650\u7684\u96c6\u7fa4\u3002")),(0,a.kt)("h2",{id:"\u8c41\u514d\u5fc5\u987b\u7684-rancher-\u547d\u540d\u7a7a\u95f4"},"\u8c41\u514d\u5fc5\u987b\u7684 Rancher \u547d\u540d\u7a7a\u95f4"),(0,a.kt)("p",null,"\u5728\u9ed8\u8ba4\u6267\u884c\u9650\u5236\u6027\u5b89\u5168\u7b56\u7565\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u8fd0\u884c Rancher \u65f6\uff0c\u4f60\u9700\u8981",(0,a.kt)("a",{parentName:"p",href:"#%E8%B1%81%E5%85%8D%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4"},"\u8c41\u514d\u4ee5\u4e0b\u547d\u540d\u7a7a\u95f4"),"\uff0c\u5426\u5219\u8be5\u7b56\u7565\u53ef\u80fd\u4f1a\u963b\u6b62 Rancher system pod \u6b63\u5e38\u8fd0\u884c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"calico-apiserver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"calico-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-alerting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-csp-adapter-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-epinio-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-externalip-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-fleet-local-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-fleet-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-gatekeeper-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-global-data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-global-nt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-impersonation-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-istio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-istio-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-logging")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-logging-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-neuvector-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-prometheus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-sriov-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-ui-plugin-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-windows-gmsa-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cert-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cis-operator-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fleet-default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"istio-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-node-lease")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-public")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"security-scan")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tigera-operator"))),(0,a.kt)("p",null,"Rancher\u3001Rancher \u62e5\u6709\u7684\u4e00\u4e9b Chart \u4ee5\u53ca RKE2 \u548c K3s \u53d1\u884c\u7248\u90fd\u4f7f\u7528\u8fd9\u4e9b\u547d\u540d\u7a7a\u95f4\u3002\u5217\u51fa\u7684\u547d\u540d\u7a7a\u95f4\u7684\u4e00\u4e2a\u5b50\u96c6\u5df2\u7ecf\u5728\u5185\u7f6e\u7684 Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-restricted")," \u7b56\u7565\u4e2d\u88ab\u8c41\u514d\uff0c\u7528\u4e8e\u4e0b\u6e38\u96c6\u7fa4\u3002\u6709\u5173\u8fd0\u884c Rancher \u6240\u9700\u7684\u6240\u6709\u8c41\u514d\u7684\u5b8c\u6574\u6a21\u677f\uff0c\u8bf7\u53c2\u9605\u6b64",(0,a.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-security/psa-restricted-exemptions"},"\u51c6\u5165\u914d\u7f6e\u793a\u4f8b"),"\u3002"),(0,a.kt)("h2",{id:"\u8c41\u514d\u547d\u540d\u7a7a\u95f4"},"\u8c41\u514d\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-restricted")," \u6a21\u677f\u5206\u914d\u7ed9\u96c6\u7fa4\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9650\u5236\u4f1a\u5728\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u5e94\u7528\u4e8e\u6574\u4e2a\u96c6\u7fa4\u3002\u8981\u5728\u6b64\u9ad8\u5ea6\u53d7\u9650\u7684\u7b56\u7565\u4e0b\u8c41\u514d\u7279\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7\u9009\u9879"),"\u6253\u5f00\u4e0b\u62c9\u83dc\u5355\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"Pod \u5b89\u5168\u51c6\u5165"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u4fee\u6539\u7684\u6a21\u677f\uff0c\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u4e2d",(0,a.kt)("strong",{parentName:"li"},"\u8c41\u514d"),"\u4e0b\u7684",(0,a.kt)("strong",{parentName:"li"},"\u547d\u540d\u7a7a\u95f4"),"\u590d\u9009\u6846\u4ee5\u7f16\u8f91",(0,a.kt)("strong",{parentName:"li"},"\u547d\u540d\u7a7a\u95f4"),"\u5b57\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8c41\u514d\u547d\u540d\u7a7a\u95f4\u540e\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4f60\u9700\u8981\u66f4\u65b0\u76ee\u6807\u96c6\u7fa4\u624d\u80fd\u8ba9\u65b0\u6a21\u677f\u5728\u96c6\u7fa4\u4e2d\u751f\u6548\u3002\u8981\u89e6\u53d1\u66f4\u65b0\uff0c\u5728\u4e0d\u66f4\u6539\u503c\u7684\u60c5\u51b5\u4e0b\u7f16\u8f91\u548c\u4fdd\u5b58\u96c6\u7fa4\u3002")))}g.isMDXComponent=!0}}]);
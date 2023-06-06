"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73835],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=c(t),g=o,m=h["".concat(p,".").concat(g)]||h[g]||u[g]||a;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=h;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Longhorn - Kubernetes \u7684\u4e91\u539f\u751f\u5206\u5e03\u5f0f\u5757\u5b58\u50a8"},p=void 0,c={unversionedId:"integrations-in-rancher/longhorn",id:"integrations-in-rancher/longhorn",title:"Longhorn - Kubernetes \u7684\u4e91\u539f\u751f\u5206\u5e03\u5f0f\u5757\u5b58\u50a8",description:"Longhorn \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u3001\u53ef\u9760\u3001\u6613\u7528\u7684 Kubernetes \u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u7cfb\u7edf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/longhorn.md",sourceDirName:"integrations-in-rancher",slug:"/integrations-in-rancher/longhorn",permalink:"/zh/integrations-in-rancher/longhorn",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/longhorn.md",tags:[],version:"current",lastUpdatedAt:1672712056,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"Longhorn - Kubernetes \u7684\u4e91\u539f\u751f\u5206\u5e03\u5f0f\u5757\u5b58\u50a8"},sidebar:"tutorialSidebar",previous:{title:"\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u7684\u5176\u4ed6\u6b65\u9aa4",permalink:"/zh/integrations-in-rancher/istio/configuration-options/project-network-isolation"},next:{title:"Rancher Logging \u96c6\u6210",permalink:"/zh/pages-for-subheaders/logging"}},s={},u=[{value:"\u4f7f\u7528 Rancher \u5b89\u88c5 Longhorn",id:"\u4f7f\u7528-rancher-\u5b89\u88c5-longhorn",level:3},{value:"\u4ece Rancher UI \u8bbf\u95ee Longhorn",id:"\u4ece-rancher-ui-\u8bbf\u95ee-longhorn",level:3},{value:"\u4ece Rancher UI \u5378\u8f7d Longhorn",id:"\u4ece-rancher-ui-\u5378\u8f7d-longhorn",level:3},{value:"GitHub \u4ed3\u5e93",id:"github-\u4ed3\u5e93",level:3},{value:"\u6587\u6863",id:"\u6587\u6863",level:3},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:3}],h={toc:u};function g(e){var{components:n}=e,i=l(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},h,i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/"},"Longhorn")," \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u3001\u53ef\u9760\u3001\u6613\u7528\u7684 Kubernetes \u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"Longhorn \u662f\u514d\u8d39\u7684\u5f00\u6e90\u8f6f\u4ef6\u3002Longhorn \u6700\u521d\u7531 Rancher Labs \u5f00\u53d1\uff0c\u73b0\u5728\u6b63\u5728\u4f5c\u4e3a\u4e91\u539f\u751f\u8ba1\u7b97\u57fa\u91d1\u4f1a\u7684\u6c99\u76d2\u9879\u76ee\u8fdb\u884c\u5f00\u53d1\u3002\u5b83\u53ef\u4ee5\u901a\u8fc7 Helm\u3001kubectl \u6216 Rancher UI \u5b89\u88c5\u5728\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u4e0a\u3002\u6709\u5173\u5176\u67b6\u6784\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/latest/concepts/"},"\u6b64\u5904"),"\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 Longhorn\uff0c\u4f60\u53ef\u4ee5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06 Longhorn \u5377\u7528\u4f5c Kubernetes \u96c6\u7fa4\u4e2d\u5206\u5e03\u5f0f\u6709\u72b6\u6001\u5e94\u7528\u7a0b\u5e8f\u7684\u6301\u4e45\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4f60\u7684\u5757\u5b58\u50a8\u5206\u533a\u4e3a Longhorn \u5377\uff0c\u4ee5\u4fbf\u5728\u6709\u6216\u6ca1\u6709\u4e91\u63d0\u4f9b\u5546\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 Kubernetes \u5377"),(0,r.kt)("li",{parentName:"ul"},"\u8de8\u591a\u4e2a\u8282\u70b9\u548c\u6570\u636e\u4e2d\u5fc3\u590d\u5236\u5757\u5b58\u50a8\u4ee5\u63d0\u9ad8\u53ef\u7528\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u5907\u4efd\u6570\u636e\u5b58\u50a8\u5728 NFS \u6216 AWS S3 \u7b49\u5916\u90e8\u5b58\u50a8\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8de8\u96c6\u7fa4\u707e\u96be\u6062\u590d\u5377\uff0c\u4ee5\u4fbf\u4f7f\u7528\u53e6\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u4e2d\u7684\u5907\u4efd\u5feb\u901f\u6062\u590d\u4e3b Kubernetes \u96c6\u7fa4\u4e2d\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u8ba1\u5212\u5377\u7684\u5b9a\u671f\u5feb\u7167\uff0c\u5e76\u5c06\u5b9a\u671f\u5907\u4efd\u8c03\u5ea6\u5230 NFS \u6216\u517c\u5bb9 S3 \u7684\u8f85\u52a9\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5907\u4efd\u6765\u6062\u590d\u5377"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e0d\u4e2d\u65ad\u6301\u4e45\u5377\u7684\u60c5\u51b5\u4e0b\u5347\u7ea7 Longhorn")),(0,r.kt)("figcaption",null,"Longhorn \u4eea\u8868\u677f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Longhorn \u4eea\u8868\u677f",src:t(29248).Z,width:"1336",height:"724"})),(0,r.kt)("h3",{id:"\u4f7f\u7528-rancher-\u5b89\u88c5-longhorn"},"\u4f7f\u7528 Rancher \u5b89\u88c5 Longhorn"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6ee1\u8db3\u6240\u6709",(0,r.kt)("a",{parentName:"li",href:"https://longhorn.io/docs/latest/deploy/install/#installation-requirements"},"\u5b89\u88c5\u8981\u6c42"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u5b89\u88c5 Longhorn \u7684\u96c6\u7fa4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Apps"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Chart"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Longhorn"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u8981\u81ea\u5b9a\u4e49\u521d\u59cb\u8bbe\u7f6e\uff0c\u8bf7\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Longhorn \u9ed8\u8ba4\u8bbe\u7f6e"),"\u5e76\u7f16\u8f91\u914d\u7f6e\u3002\u5982\u9700\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"https://longhorn.io/docs/latest/references/settings/"},"Longhorn \u6587\u6863"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aLonghorn \u5df2\u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("h3",{id:"\u4ece-rancher-ui-\u8bbf\u95ee-longhorn"},"\u4ece Rancher UI \u8bbf\u95ee Longhorn"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5b89\u88c5\u4e86 Longhorn \u7684\u96c6\u7fa4\u3002\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Longhorn"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u6b64\u9875\u9762\u4e0a\uff0c\u4f60\u53ef\u4ee5\u7f16\u8f91 Longhorn \u7ba1\u7406\u7684 Kubernetes \u8d44\u6e90\u3002\u8981\u67e5\u770b Longhorn UI\uff0c\u8bf7\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u6982\u8ff0"),"\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"li"},"Longhorn")," \u6309\u94ae\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5c06\u8f6c\u5230 Longhorn UI\uff0c\u4f60\u53ef\u4ee5\u5728\u90a3\u91cc\u7ba1\u7406 Longhorn \u5377\u53ca\u5176\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u526f\u672c\uff0c\u8fd8\u53ef\u4ee5\u67e5\u770b\u4f4d\u4e8e\u53e6\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u6216 S3 \u4e2d\u7684 Longhorn \u5b58\u50a8\u8f85\u52a9\u5907\u4efd\u3002"),(0,r.kt)("h3",{id:"\u4ece-rancher-ui-\u5378\u8f7d-longhorn"},"\u4ece Rancher UI \u5378\u8f7d Longhorn"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5b89\u88c5\u4e86 Longhorn \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Apps"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"longhorn-system")," \u547d\u540d\u7a7a\u95f4\u5e76\u9009\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"longhorn")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"longhorn-crd")," \u5e94\u7528\u7a0b\u5e8f\u65c1\u8fb9\u7684\u6846\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u5e76\u786e\u8ba4",(0,r.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aLonghorn \u5df2\u88ab\u5378\u8f7d\u3002"),(0,r.kt)("h3",{id:"github-\u4ed3\u5e93"},"GitHub \u4ed3\u5e93"),(0,r.kt)("p",null,"Longhorn \u9879\u76ee\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn"},"\u6b64\u5904"),"\u3002"),(0,r.kt)("h3",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("p",null,"Longhorn \u6587\u6863\u5728",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/"},"\u6b64\u5904"),"\u3002"),(0,r.kt)("h3",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,r.kt)("p",null,"Longhorn \u4e3a\u6bcf\u4e2a\u5377\u521b\u5efa\u4e13\u7528\u7684\u5b58\u50a8\u63a7\u5236\u5668\uff0c\u5e76\u5728\u5b58\u50a8\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\u7684\u591a\u4e2a\u526f\u672c\u4e4b\u95f4\u540c\u6b65\u590d\u5236\u8be5\u5377\u3002"),(0,r.kt)("p",null,"\u5b58\u50a8\u63a7\u5236\u5668\u548c\u526f\u672c\u672c\u8eab\u662f\u4f7f\u7528 Kubernetes \u7f16\u6392\u7684\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u5176\u67b6\u6784\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/latest/concepts/"},"\u6b64\u5904"),"\u3002"),(0,r.kt)("figcaption",null,"Longhorn \u67b6\u6784"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Longhorn \u67b6\u6784",src:t(87087).Z,width:"1366",height:"820"})))}g.isMDXComponent=!0},87087:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/longhorn-architecture-170665ab1264134b2a4307183e1811e7.svg"},29248:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/longhorn-screenshot-3de16ad65d20cedf515d6c18cf56799a.png"}}]);
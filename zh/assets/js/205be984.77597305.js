"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3652],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(k,o(o({ref:t},s),{},{components:a})):r.createElement(k,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12961:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={title:"EKS \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"},u=void 0,p={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration",id:"reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration",title:"EKS \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",description:"\u8d26\u53f7\u8bbf\u95ee",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration",permalink:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"EKS \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"},sidebar:"tutorialSidebar",previous:{title:"K3s \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration"},next:{title:"AKS \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration"}},s={},c=[{value:"\u8d26\u53f7\u8bbf\u95ee",id:"\u8d26\u53f7\u8bbf\u95ee",level:3},{value:"\u670d\u52a1\u89d2\u8272",id:"\u670d\u52a1\u89d2\u8272",level:3},{value:"\u5bc6\u6587\u52a0\u5bc6",id:"\u5bc6\u6587\u52a0\u5bc6",level:3},{value:"API Server \u7aef\u70b9\u8bbf\u95ee",id:"api-server-\u7aef\u70b9\u8bbf\u95ee",level:3},{value:"\u4e13\u7528 API \u7aef\u70b9",id:"\u4e13\u7528-api-\u7aef\u70b9",level:3},{value:"\u516c\u5171\u8bbf\u95ee\u7aef\u70b9",id:"\u516c\u5171\u8bbf\u95ee\u7aef\u70b9",level:3},{value:"\u5b50\u7f51",id:"\u5b50\u7f51",level:3},{value:"\u5b89\u5168\u7ec4",id:"\u5b89\u5168\u7ec4",level:3},{value:"Logging",id:"logging",level:3},{value:"\u6258\u7ba1\u8282\u70b9\u7ec4",id:"\u6258\u7ba1\u8282\u70b9\u7ec4",level:3},{value:"\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u542f\u52a8\u6a21\u677f",id:"\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u542f\u52a8\u6a21\u677f",level:4},{value:"Rancher \u7ba1\u7406\u7684\u542f\u52a8\u6a21\u677f",id:"rancher-\u7ba1\u7406\u7684\u542f\u52a8\u6a21\u677f",level:4},{value:"\u81ea\u5b9a\u4e49 AMI",id:"\u81ea\u5b9a\u4e49-ami",level:4},{value:"Spot \u5b9e\u4f8b",id:"spot-\u5b9e\u4f8b",level:4},{value:"\u8282\u70b9\u7ec4\u8bbe\u7f6e",id:"\u8282\u70b9\u7ec4\u8bbe\u7f6e",level:4},{value:"\u914d\u7f6e\u5237\u65b0\u95f4\u9694",id:"\u914d\u7f6e\u5237\u65b0\u95f4\u9694",level:3}],m={toc:c};function d(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u8d26\u53f7\u8bbf\u95ee"},"\u8d26\u53f7\u8bbf\u95ee"),(0,r.kt)("p",null,"\u4f7f\u7528\u83b7\u53d6\u7684\u4fe1\u606f\u4e3a IAM \u7b56\u7565\u586b\u5199\u6bcf\u4e2a\u4e0b\u62c9\u5217\u8868\u548c\u5b57\u6bb5\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u533a\u57df"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u6784\u5efa\u96c6\u7fa4\u7684\u5730\u7406\u533a\u57df\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e91\u51ed\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u4e3a IAM \u7b56\u7565\u521b\u5efa\u7684\u4e91\u51ed\u8bc1\u3002\u6709\u5173\u5728 Rancher \u4e2d\u521b\u5efa\u4e91\u51ed\u8bc1\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"td",href:"/zh/reference-guides/user-settings/manage-cloud-credentials"},"\u6b64\u9875\u9762"),"\u3002")))),(0,r.kt)("h3",{id:"\u670d\u52a1\u89d2\u8272"},"\u670d\u52a1\u89d2\u8272"),(0,r.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html"},"\u670d\u52a1\u89d2\u8272"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1\u89d2\u8272"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standard\uff1aRancher \u751f\u6210\u7684\u670d\u52a1\u89d2\u8272"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u9009\u62e9\u6b64\u89d2\u8272\uff0cRancher \u4f1a\u81ea\u52a8\u6dfb\u52a0\u4e00\u4e2a\u670d\u52a1\u89d2\u8272\u4ee5\u4f9b\u96c6\u7fa4\u4f7f\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\uff1a\u4ece\u73b0\u6709\u7684\u670d\u52a1\u89d2\u8272\u4e2d\u9009\u62e9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u9009\u62e9\u6b64\u89d2\u8272\uff0cRancher \u5c06\u5141\u8bb8\u4f60\u4ece\u5df2\u5728 AWS \u4e2d\u521b\u5efa\u7684\u670d\u52a1\u89d2\u8272\u4e2d\u8fdb\u884c\u9009\u62e9\u3002\u6709\u5173\u5728 AWS \u4e2d\u521b\u5efa\u81ea\u5b9a\u4e49\u670d\u52a1\u89d2\u8272\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#create-service-linked-role"},"Amazon \u6587\u6863"),"\u3002")))),(0,r.kt)("h3",{id:"\u5bc6\u6587\u52a0\u5bc6"},"\u5bc6\u6587\u52a0\u5bc6"),(0,r.kt)("p",null,"\u53ef\u9009\uff1a\u8981\u52a0\u5bc6\u5bc6\u6587\uff0c\u8bf7\u9009\u62e9\u6216\u8f93\u5165\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/kms/latest/developerguide/overview.html"},"AWS \u5bc6\u94a5\u7ba1\u7406\u670d\u52a1 (KMS)")," \u4e2d\u521b\u5efa\u7684\u5bc6\u94a5\u3002"),(0,r.kt)("h3",{id:"api-server-\u7aef\u70b9\u8bbf\u95ee"},"API Server \u7aef\u70b9\u8bbf\u95ee"),(0,r.kt)("p",null,"\u914d\u7f6e\u516c\u5171/\u79c1\u6709 API \u8bbf\u95ee\u662f\u4e00\u4e2a\u9ad8\u7ea7\u7528\u4f8b\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html"},"EKS \u96c6\u7fa4\u7aef\u70b9\u8bbf\u95ee\u63a7\u5236\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"\u4e13\u7528-api-\u7aef\u70b9"},"\u4e13\u7528 API \u7aef\u70b9"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728\u521b\u5efa\u96c6\u7fa4\u65f6\u542f\u7528\u4e86\u79c1\u6709 API \u7aef\u70b9\u8bbf\u95ee\uff0c\u5e76\u7981\u7528\u4e86\u516c\u5171 API \u7aef\u70b9\u8bbf\u95ee\uff0c\u90a3\u4e48\u4f60\u5fc5\u987b\u8fdb\u884c\u989d\u5916\u7684\u6b65\u9aa4\u624d\u80fd\u4f7f Rancher \u6210\u529f\u8fde\u63a5\u5230\u96c6\u7fa4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u5f39\u7a97\u5c06\u4f1a\u663e\u793a\uff0c\u5176\u4e2d\u5305\u542b\u9700\u8981\u5728\u8981\u6ce8\u518c\u5230 Rancher \u7684\u96c6\u7fa4\u4e0a\u8fd0\u884c\u7684\u547d\u4ee4\u3002\u914d\u7f6e\u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u80fd\u8fde\u63a5\u5230\u96c6\u7fa4\u7684 Kubernetes API \u7684\u5730\u65b9\u8fd0\u884c\u663e\u793a\u7684\u547d\u4ee4\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6cd5\u80fd\u907f\u514d\u8fd9\u4e2a\u989d\u5916\u7684\u624b\u52a8\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u521b\u5efa\u96c6\u7fa4\u65f6\uff0c\u521b\u5efa\u5177\u6709\u79c1\u6709\u548c\u516c\u5171 API \u7aef\u70b9\u8bbf\u95ee\u6743\u9650\u7684\u96c6\u7fa4\u3002\u5728\u96c6\u7fa4\u521b\u5efa\u5e76\u5904\u4e8e active \u72b6\u6001\u540e\uff0c\u4f60\u53ef\u4ee5\u7981\u7528\u516c\u5171\u8bbf\u95ee\uff0cRancher \u5c06\u80fd\u7ee7\u7eed\u4e0e EKS \u96c6\u7fa4\u901a\u4fe1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd Rancher \u4e0e EKS \u96c6\u7fa4\u5171\u4eab\u540c\u4e00\u4e2a\u5b50\u7f51\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b89\u5168\u7ec4\u4f7f Rancher \u80fd\u591f\u4e0e\u96c6\u7fa4\u7684 API \u7aef\u70b9\u8fdb\u884c\u901a\u4fe1\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u9700\u8981\u8fd0\u884c\u6ce8\u518c\u96c6\u7fa4\u7684\u547d\u4ee4\uff0cRancher \u5c31\u80fd\u591f\u4e0e\u4f60\u7684\u96c6\u7fa4\u901a\u4fe1\u3002\u6709\u5173\u914d\u7f6e\u5b89\u5168\u7ec4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html"},"\u5b89\u5168\u7ec4\u6587\u6863"),"\u3002")),(0,r.kt)("h3",{id:"\u516c\u5171\u8bbf\u95ee\u7aef\u70b9"},"\u516c\u5171\u8bbf\u95ee\u7aef\u70b9"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u901a\u8fc7\u663e\u5f0f CIDR \u5757\u6765\u9650\u5236\u5bf9\u516c\u5171\u7aef\u70b9\u7684\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9650\u5236\u5bf9\u7279\u5b9a CIDR \u5757\u7684\u8bbf\u95ee\uff0c\u90a3\u4e48\u5efa\u8bae\u4f60\u4e5f\u542f\u7528\u79c1\u6709\u8bbf\u95ee\uff0c\u4ee5\u907f\u514d\u4e22\u5931\u4e0e\u96c6\u7fa4\u7684\u7f51\u7edc\u901a\u4fe1\u3002"),(0,r.kt)("p",null,"\u542f\u7528\u79c1\u6709\u8bbf\u95ee\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rancher \u7684 IP \u5fc5\u987b\u662f\u5141\u8bb8\u7684 CIDR \u5757\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u8be5\u542f\u7528\u4e86\u79c1\u6709\u8bbf\u95ee\u3002\u6b64\u5916\uff0cRancher \u5fc5\u987b\u548c\u96c6\u7fa4\u5171\u4eab\u540c\u4e00\u4e2a\u5b50\u7f51\uff0c\u5e76\u5bf9\u96c6\u7fa4\u6709\u7f51\u7edc\u8bbf\u95ee\u6743\u9650\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b89\u5168\u7ec4\u6765\u8fdb\u884c\u914d\u7f6e\u3002")),(0,r.kt)("p",null,"\u6709\u5173\u5bf9\u96c6\u7fa4\u7aef\u70b9\u7684\u516c\u5171\u548c\u79c1\u6709\u8bbf\u95ee\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html"},"Amazon EKS \u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"\u5b50\u7f51"},"\u5b50\u7f51"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standard\uff1aRancher \u751f\u6210\u7684 VPC \u548c\u5b50\u7f51"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u914d\u7f6e\u96c6\u7fa4\u65f6\uff0cRancher \u4f1a\u751f\u6210\u4e00\u4e2a\u5177\u6709 3 \u4e2a\u516c\u6709\u5b50\u7f51\u7684\u65b0 VPC\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\uff1a\u4ece\u73b0\u6709\u7684 VPC \u548c\u5b50\u7f51\u4e2d\u9009\u62e9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u914d\u7f6e\u96c6\u7fa4\u65f6\uff0cRancher \u5c06\u4f60\u7684 controlplane \u548c\u8282\u70b9\u914d\u7f6e\u4e3a\u4f7f\u7528\u4f60\u5df2\u7ecf",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},"\u5728 AWS \u4e2d\u521b\u5efa"),"\u7684 VPC \u548c\u5b50\u7f51\u3002")))),(0,r.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 AWS \u6587\u6863\u4ee5\u4e86\u89e3",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html"},"\u96c6\u7fa4 VPC \u6ce8\u610f\u4e8b\u9879"),"\u3002\u6839\u636e\u4f60\u5728\u4e0a\u4e00\u6b65\u4e2d\u7684\u9009\u62e9\uff0c\u6309\u7167\u4ee5\u4e0b\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},"\u4ec0\u4e48\u662f Amazon VPC\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html"},"VPC \u548c\u5b50\u7f51"))),(0,r.kt)("h3",{id:"\u5b89\u5168\u7ec4"},"\u5b89\u5168\u7ec4"),(0,r.kt)("p",null,"Amazon \u6587\u6863\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html"},"\u96c6\u7fa4\u5b89\u5168\u7ec4\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html"},"VPC \u7684\u5b89\u5168\u7ec4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/getting-started-ipv4.html#getting-started-create-security-group"},"\u521b\u5efa\u5b89\u5168\u7ec4"))),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("p",null,"\u5c06 controlplane \u65e5\u5fd7\u914d\u7f6e\u4e3a\u53d1\u9001\u5230 Amazon CloudWatch\u3002\u5982\u679c\u4f60\u5c06\u96c6\u7fa4\u65e5\u5fd7\u53d1\u9001\u5230 CloudWatch Logs\uff0c\u4f60\u9700\u8981\u6309\u7167 standard CloudWatch Logs \u652f\u4ed8\u6570\u636e\u5f15\u5165\u548c\u5b58\u50a8\u8d39\u7528\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u65e5\u5fd7\u7c7b\u578b\u5747\u5bf9\u5e94\u4e00\u4e2a Kubernetes controlplane \u7ec4\u4ef6\u3002\u6709\u5173\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Kubernetes \u6587\u6863\u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/"},"Kubernetes \u7ec4\u4ef6"),"\u3002"),(0,r.kt)("p",null,"\u6709\u5173 EKS controlplane \u65e5\u5fd7\u7ba1\u7406\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"\u6258\u7ba1\u8282\u70b9\u7ec4"},"\u6258\u7ba1\u8282\u70b9\u7ec4"),(0,r.kt)("p",null,"Amazon EKS \u6258\u7ba1\u7684\u8282\u70b9\u7ec4\u81ea\u52a8\u4e3a Amazon EKS Kubernetes \u96c6\u7fa4\u7684\u8282\u70b9\uff08Amazon EC2 \u5b9e\u4f8b\uff09\u8fdb\u884c\u9884\u7f6e\u548c\u751f\u547d\u5468\u671f\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u8282\u70b9\u7ec4\u5982\u4f55\u5de5\u4f5c\u4ee5\u53ca\u5982\u4f55\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html"},"EKS \u6587\u6863"),"\u3002"),(0,r.kt)("h4",{id:"\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u542f\u52a8\u6a21\u677f"},"\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u542f\u52a8\u6a21\u677f"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u63d0\u4f9b\u542f\u52a8\u6a21\u677f ID \u548c\u7248\u672c\uff0c\u4ee5\u4fbf\u8f7b\u677e\u914d\u7f6e\u8282\u70b9\u7ec4\u4e2d\u7684 EC2 \u5b9e\u4f8b\u3002\u5982\u679c\u4f60\u63d0\u4f9b\u4e86\u542f\u52a8\u6a21\u677f\uff0c\u5219\u4ee5\u4e0b\u8bbe\u7f6e\u90fd\u65e0\u6cd5\u5728 Rancher \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u542f\u52a8\u6a21\u677f\uff0c\u5219\u9700\u8981\u5728\u542f\u52a8\u6a21\u677f\u4e2d\u6307\u5b9a\u4ee5\u4e0b\u5217\u8868\u4e2d\u7684\u6240\u6709\u5fc5\u987b\u548c\u6240\u9700\u7684\u8bbe\u7f6e\u3002\u53e6\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u63d0\u4f9b\u4e86\u542f\u52a8\u6a21\u677f ID \u548c\u7248\u672c\uff0c\u5219\u53ea\u80fd\u66f4\u65b0\u6a21\u677f\u7248\u672c\u3002\u5982\u679c\u8981\u4f7f\u7528\u65b0\u6a21\u677f ID\uff0c\u5219\u9700\u8981\u521b\u5efa\u65b0\u7684\u6258\u7ba1\u8282\u70b9\u7ec4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b/\u9009\u586b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3a\u8981\u914d\u7f6e\u7684\u5b9e\u4f8b\u9009\u62e9",(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/instance-types/"},"\u786c\u4ef6\u89c4\u683c"),"\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u955c\u50cf ID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3a\u8282\u70b9\u6307\u5b9a\u81ea\u5b9a\u4e49 AMI\u3002\u4e0e EKS \u4e00\u8d77\u4f7f\u7528\u7684\u81ea\u5b9a\u4e49 AMI \u5fc5\u987b",(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/premiumsupport/knowledge-center/eks-custom-linux-ami/"},"\u6b63\u786e\u914d\u7f6e"),"\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u5377\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u6a21\u677f\u5fc5\u987b\u6307\u5b9a\u5177\u6709\u6240\u9700\u5927\u5c0f\u7684 EBS \u5377\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSH \u5bc6\u94a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u6dfb\u52a0\u5230\u5b9e\u4f8b\u4ee5\u5bf9\u8282\u70b9\u8fdb\u884c SSH \u8bbf\u95ee\u7684\u5bc6\u94a5\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html#launch-template-user-data"},"MIME \u591a\u90e8\u5206\u683c\u5f0f"),"\u7684 Cloud init \u811a\u672c\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u586b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u8d44\u6e90\u6807\u7b7e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u8bb0\u8282\u70b9\u7ec4\u4e2d\u7684\u6bcf\u4e2a EC2 \u5b9e\u4f8b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u586b")))),(0,r.kt)("h4",{id:"rancher-\u7ba1\u7406\u7684\u542f\u52a8\u6a21\u677f"},"Rancher \u7ba1\u7406\u7684\u542f\u52a8\u6a21\u677f"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u6307\u5b9a\u542f\u52a8\u6a21\u677f\uff0c\u4f60\u5c06\u80fd\u591f\u5728 Rancher UI \u4e2d\u914d\u7f6e\u4e0a\u8ff0\u9009\u9879\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u521b\u5efa\u540e\u66f4\u65b0\u6240\u6709\u8fd9\u4e9b\u9009\u9879\u3002\u4e3a\u4e86\u5229\u7528\u6240\u6709\u8fd9\u4e9b\u9009\u9879\uff0cRancher \u5c06\u4e3a\u4f60\u521b\u5efa\u548c\u7ba1\u7406\u542f\u52a8\u6a21\u677f\u3002Rancher \u4e2d\u7684\u6240\u6709\u96c6\u7fa4\u90fd\u5c06\u6709\u4e00\u4e2a Rancher \u7ba1\u7406\u7684\u542f\u52a8\u6a21\u677f\u3002\u6b64\u5916\uff0c\u6bcf\u4e2a\u6ca1\u6709\u6307\u5b9a\u542f\u52a8\u6a21\u677f\u7684\u6258\u7ba1\u8282\u70b9\u7ec4\u90fd\u5c06\u5177\u6709\u4e00\u4e2a\u7ba1\u7406\u7684\u542f\u52a8\u6a21\u677f\u7248\u672c\u3002\u6b64\u542f\u52a8\u6a21\u677f\u7684\u540d\u79f0\u5c06\u5177\u6709 \u201crancher-managed-lt-\u201d \u524d\u7f00\uff0c\u540e\u9762\u662f\u96c6\u7fa4\u7684\u663e\u793a\u540d\u79f0\u3002\u6b64\u5916\uff0cRancher \u7ba1\u7406\u7684\u542f\u52a8\u6a21\u677f\u5c06\u4f7f\u7528 \u201crancher-managed-template\u201d \u952e\u548c \u201cdo-not-modify-or-delete\u201d \u503c\u6765\u8fdb\u884c\u6807\u8bb0\uff0c\u4ee5\u5c06\u5176\u8bc6\u522b\u4e3a Rancher \u7ba1\u7406\u7684\u542f\u52a8\u6a21\u677f\u3002\u8bf7\u6ce8\u610f\uff0c\u4e0d\u8981\u4fee\u6539\u6216\u5220\u9664\u6b64\u542f\u52a8\u6a21\u677f\uff0c\u6216\u5c06\u6b64\u542f\u52a8\u6a21\u677f\u4e0e\u5176\u4ed6\u96c6\u7fa4\u6216\u6258\u7ba1\u8282\u70b9\u7ec4\u4e00\u8d77\u4f7f\u7528\u3002\u56e0\u4e3a\u8fd9\u53ef\u80fd\u4f1a\u4f7f\u4f60\u7684\u8282\u70b9\u7ec4\u201c\u964d\u7ea7\u201d\u5e76\u9700\u8981\u9500\u6bc1\u548c\u91cd\u65b0\u521b\u5efa\u3002"),(0,r.kt)("h4",{id:"\u81ea\u5b9a\u4e49-ami"},"\u81ea\u5b9a\u4e49 AMI"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728\u542f\u52a8\u6a21\u677f\u6216 Rancher \u4e2d\u6307\u5b9a\u4e86\u81ea\u5b9a\u4e49 AMI\uff0c\u5219\u5fc5\u987b",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/eks-custom-linux-ami/"},"\u6b63\u786e\u914d\u7f6e"),"\u955c\u50cf\uff0c\u5e76\u4e14\u5fc5\u987b\u63d0\u4f9b\u7528\u6237\u6570\u636e\u4ee5",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html#launch-template-custom-ami"},"\u5f15\u5bfc\u8282\u70b9"),"\u3002\u8fd9\u662f\u4e00\u4e2a\u9ad8\u7ea7\u7528\u4f8b\uff0c\u56e0\u6b64\u4f60\u5fc5\u987b\u8981\u4e86\u89e3\u5176\u8981\u6c42\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6307\u5b9a\u4e86\u4e0d\u5305\u542b\u81ea\u5b9a\u4e49 AMI \u7684\u542f\u52a8\u6a21\u677f\uff0c\u5219 Amazon \u5c06\u4e3a Kubernetes \u7248\u672c\u548c\u6240\u9009\u533a\u57df\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html"},"EKS \u4f18\u5316\u7684 AMI"),"\u3002\u4f60\u8fd8\u53ef\u4ee5\u4e3a\u80fd\u4ece\u4e2d\u53d7\u76ca\u7684\u5de5\u4f5c\u8d1f\u8f7d\u9009\u62e9",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html#gpu-ami"},"\u542f\u7528 GPU \u7684\u5b9e\u4f8b"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5728\u4e0b\u62c9\u83dc\u5355\u6216\u542f\u52a8\u6a21\u677f\u4e2d\u63d0\u4f9b\u4e86\u81ea\u5b9a\u4e49 AMI\uff0c\u5219\u4f1a\u5ffd\u7565 Rancher \u4e2d\u8bbe\u7f6e\u7684\u542f\u7528 GPU \u7684\u5b9e\u4f8b\u3002")),(0,r.kt)("h4",{id:"spot-\u5b9e\u4f8b"},"Spot \u5b9e\u4f8b"),(0,r.kt)("p",null,"Spot \u5b9e\u4f8b\u73b0\u5728",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types-spot"},"\u53d7 EKS \u652f\u6301"),"\u3002\u5982\u679c\u4f60\u6307\u5b9a\u4e86\u542f\u52a8\u6a21\u677f\uff0cAmazon \u5efa\u8bae\u4e0d\u8981\u5728\u6a21\u677f\u4e2d\u63d0\u4f9b\u5b9e\u4f8b\u7c7b\u578b\u3002\u76f8\u53cd\uff0cAmazon \u5efa\u8bae\u63d0\u4f9b\u591a\u79cd\u5b9e\u4f8b\u7c7b\u578b\u3002\u5982\u679c\u4f60\u4e3a\u8282\u70b9\u7ec4\u542f\u7528\u4e86\u201c\u8bf7\u6c42 Spot \u5b9e\u4f8b\u201d\u590d\u9009\u6846\uff0c\u90a3\u4e48\u4f60\u5c06\u6709\u673a\u4f1a\u63d0\u4f9b\u591a\u79cd\u5b9e\u4f8b\u7c7b\u578b\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5728\u5b9e\u4f8b\u7c7b\u578b\u4e0b\u62c9\u5217\u8868\u4e2d\u6240\u9009\u7684\u9009\u9879\u90fd\u5c06\u88ab\u5ffd\u7565\uff0c\u4f60\u5fc5\u987b\u5728\u201cSpot \u5b9e\u4f8b\u7c7b\u578b\u201d\u4e2d\u81f3\u5c11\u6307\u5b9a\u4e00\u79cd\u5b9e\u4f8b\u7c7b\u578b\u3002\u6b64\u5916\uff0c\u4e0e EKS \u4e00\u8d77\u4f7f\u7528\u7684\u542f\u52a8\u6a21\u677f\u65e0\u6cd5\u8bf7\u6c42 Spot \u5b9e\u4f8b\u3002\u8bf7\u6c42 Spot \u5b9e\u4f8b\u5fc5\u987b\u662f EKS \u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002")),(0,r.kt)("h4",{id:"\u8282\u70b9\u7ec4\u8bbe\u7f6e"},"\u8282\u70b9\u7ec4\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u8bbe\u7f6e\u4e5f\u662f\u53ef\u914d\u7f6e\u7684\u3002\u5728\u521b\u5efa\u8282\u70b9\u7ec4\u540e\uff0c\u9664\u201c\u8282\u70b9\u7ec4\u540d\u79f0\u201d\u5916\u7684\u6240\u6709\u9009\u9879\u90fd\u662f\u53ef\u7f16\u8f91\u7684\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u7ec4\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u7ec4\u7684\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u671f\u671b ASG \u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u671f\u671b\u7684\u5b9e\u4f8b\u6570\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927 ASG \u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u7684\u5b9e\u4f8b\u6570\u91cf\u3002\u5728\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/eks/latest/userguide/cluster-autoscaler.html"},"Cluster Autoscaler")," \u4e4b\u524d\uff0c\u6b64\u8bbe\u7f6e\u4e0d\u4f1a\u751f\u6548\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f ASG \u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u7684\u5b9e\u4f8b\u6570\u91cf\u3002\u5728\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/eks/latest/userguide/cluster-autoscaler.html"},"Cluster Autoscaler")," \u4e4b\u524d\uff0c\u6b64\u8bbe\u7f6e\u4e0d\u4f1a\u751f\u6548\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Labels"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u4e8e\u7ba1\u7406\u7684\u8282\u70b9\u7ec4\u4e2d\u8282\u70b9\u7684 Kubernetes \u6807\u7b7e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u7684\u8282\u70b9\u7ec4\u7684\u6807\u7b7e\uff0c\u8fd9\u4e9b\u6807\u7b7e\u4e0d\u4f1a\u4f20\u64ad\u5230\u4efb\u4f55\u76f8\u5173\u8d44\u6e90\u3002")))),(0,r.kt)("h3",{id:"\u914d\u7f6e\u5237\u65b0\u95f4\u9694"},"\u914d\u7f6e\u5237\u65b0\u95f4\u9694"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eks-refresh-cron")," \u8bbe\u7f6e\u5df2\u5f03\u7528\u3002\u5b83\u5df2\u8fc1\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"eks-refresh")," \u8bbe\u7f6e\uff0c\u8fd9\u662f\u4e00\u4e2a\u8868\u793a\u79d2\u7684\u6574\u6570\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\u4e3a 300 \u79d2\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl edit setting eks-refresh")," \u6765\u66f4\u6539\u540c\u6b65\u95f4\u9694\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e4b\u524d\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"eks-refresh-cron")," \u8bbe\u7f6e\uff0c\u8fc1\u79fb\u5c06\u81ea\u52a8\u8fdb\u884c\u3002"),(0,r.kt)("p",null,"\u5237\u65b0\u7a97\u53e3\u8d8a\u77ed\uff0c\u4e89\u7528\u6761\u4ef6\u53d1\u751f\u7684\u53ef\u80fd\u6027\u5c31\u8d8a\u5c0f\u3002\u4f46\u8fd9\u786e\u5b9e\u589e\u52a0\u4e86\u9047\u5230 AWS API \u53ef\u80fd\u5b58\u5728\u7684\u8bf7\u6c42\u9650\u5236\u7684\u53ef\u80fd\u6027\u3002"))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[22981],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(r),k=a,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"\u56de\u6eda"},p=void 0,i={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",title:"\u56de\u6eda",description:"\u4f7f\u7528 Rancher 2.6.4+ \u8fdb\u884c\u56de\u6eda\u7684\u5176\u4ed6\u6b65\u9aa4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md",tags:[],version:"current",lastUpdatedAt:1676523322,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{title:"\u56de\u6eda"},sidebar:"tutorialSidebar",previous:{title:"\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5/\u5347\u7ea7 Rancher",permalink:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},next:{title:"\u5347\u7ea7",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"}},s={},u=[{value:"\u4f7f\u7528 Rancher 2.6.4+ \u8fdb\u884c\u56de\u6eda\u7684\u5176\u4ed6\u6b65\u9aa4",id:"\u4f7f\u7528-rancher-264-\u8fdb\u884c\u56de\u6eda\u7684\u5176\u4ed6\u6b65\u9aa4",level:2},{value:"\u4ece v2.6.4+ \u56de\u6eda\u5230\u8f83\u4f4e\u7248\u672c\u7684 v2.6.x",id:"\u4ece-v264-\u56de\u6eda\u5230\u8f83\u4f4e\u7248\u672c\u7684-v26x",level:3},{value:"\u56de\u6eda\u5230 Rancher 2.5.0+",id:"\u56de\u6eda\u5230-rancher-250",level:2},{value:"\u5c06 Rancher Deployment \u89c4\u6a21\u6269\u5c55\u5230 0",id:"\u5c06-rancher-deployment-\u89c4\u6a21\u6269\u5c55\u5230-0",level:3},{value:"\u521b\u5efa Restore \u81ea\u5b9a\u4e49\u8d44\u6e90",id:"\u521b\u5efa-restore-\u81ea\u5b9a\u4e49\u8d44\u6e90",level:3},{value:"\u56de\u6eda\u5230\u4e0a\u4e00\u4e2a Rancher \u7248\u672c",id:"\u56de\u6eda\u5230\u4e0a\u4e00\u4e2a-rancher-\u7248\u672c",level:3},{value:"\u56de\u6eda\u5230 Rancher 2.2-2.4",id:"\u56de\u6eda\u5230-rancher-22-24",level:2},{value:"\u56de\u6eda\u5230 Rancher 2.0-2.1",id:"\u56de\u6eda\u5230-rancher-20-21",level:2}],m={toc:u};function k(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f7f\u7528-rancher-264-\u8fdb\u884c\u56de\u6eda\u7684\u5176\u4ed6\u6b65\u9aa4"},"\u4f7f\u7528 Rancher 2.6.4+ \u8fdb\u884c\u56de\u6eda\u7684\u5176\u4ed6\u6b65\u9aa4"),(0,n.kt)("p",null,"Rancher v2.6.4 \u5c06 cluster-api \u6a21\u5757\u4ece v0.4.4 \u5347\u7ea7\u5230 v1.0.2\u3002\u53cd\u8fc7\u6765\uff0ccluster-api \u7684 v1.0.2 \u7248\u672c\u5c06\u96c6\u7fa4 API \u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49 (CRD) \u4ece ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster.x-k8s.io/v1alpha4")," \u5347\u7ea7\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster.x-k8s.io/v1beta1"),"\u3002\u5f53\u4f60\u5c1d\u8bd5\u5c06 Rancher v2.6.4 \u56de\u6eda\u5230\u4ee5\u524d\u7248\u672c\u7684 Rancher v2.6.x \u65f6\uff0cCRD \u5347\u7ea7\u5230 v1beta1 \u4f1a\u5bfc\u81f4\u56de\u6eda\u5931\u8d25\u3002\u8fd9\u662f\u56e0\u4e3a\u4f7f\u7528\u65e7 apiVersion (v1alpha4) \u7684 CRD \u4e0e v1beta1 \u4e0d\u517c\u5bb9\u3002"),(0,n.kt)("p",null,"\u8981\u907f\u514d\u56de\u6eda\u5931\u8d25\uff0c\u4f60\u9700\u8981\u5728\u5c1d\u8bd5\u6062\u590d\u64cd\u4f5c\u6216\u56de\u6eda",(0,n.kt)("strong",{parentName:"p"},"\u4e4b\u524d"),"\u8fd0\u884c\u4ee5\u4e0b Rancher \u811a\u672c\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"verify.sh"),"\uff1a\u68c0\u67e5\u96c6\u7fa4\u4e2d\u662f\u5426\u6709\u4efb\u4f55\u4e0e Rancher \u76f8\u5173\u7684\u8d44\u6e90\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cleanup.sh"),"\uff1a\u6e05\u7406\u96c6\u7fa4\u3002")),(0,n.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\u548c\u6e90\u4ee3\u7801\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-cleanup"},"rancher/rancher-cleanup repo"),"\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"cleanup.sh")," \u8fd0\u884c\u7684\u65f6\u5019\u4f1a\u6709\u505c\u673a\u65f6\u95f4\uff0c\u8fd9\u662f\u56e0\u4e3a\u811a\u672c\u4f1a\u5220\u9664 Rancher \u521b\u5efa\u7684\u8d44\u6e90\u3002")),(0,n.kt)("h3",{id:"\u4ece-v264-\u56de\u6eda\u5230\u8f83\u4f4e\u7248\u672c\u7684-v26x"},"\u4ece v2.6.4+ \u56de\u6eda\u5230\u8f83\u4f4e\u7248\u672c\u7684 v2.6.x"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6309\u7167",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher-cleanup/blob/main/README.md"},"\u8bf4\u660e"),"\u8fd0\u884c\u811a\u672c\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6309\u7167",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/backups/migrating-rancher/"},"\u8bf4\u660e"),"\u5728\u73b0\u6709\u96c6\u7fa4\u4e0a\u5b89\u88c5 rancher-backup Helm Chart \u5e76\u6062\u590d\u4e4b\u524d\u7684\u72b6\u6001\u3002",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u7701\u7565\u6b65\u9aa4 3\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6267\u884c\u5230\u6b65\u9aa4 4 \u65f6\uff0c\u5728\u8981\u56de\u6eda\u5230\u7684 local \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher 2.6.x \u7248\u672c\u3002")))),(0,n.kt)("h2",{id:"\u56de\u6eda\u5230-rancher-250"},"\u56de\u6eda\u5230 Rancher 2.5.0+"),(0,n.kt)("p",null,"\u8981\u56de\u6eda\u5230 Rancher 2.5.0+\uff0c\u4f7f\u7528 ",(0,n.kt)("strong",{parentName:"p"},"Rancher \u5907\u4efd"),"\u5e94\u7528\u5e76\u901a\u8fc7\u5907\u4efd\u6765\u6062\u590d Rancher\u3002"),(0,n.kt)("p",null,"\u56de\u6eda\u540e\uff0cRancher \u5fc5\u987b\u4ee5\u8f83\u4f4e/\u8f83\u65e9\u7684\u7248\u672c\u542f\u52a8\u3002"),(0,n.kt)("p",null,"\u8fd8\u539f\u662f\u901a\u8fc7\u521b\u5efa Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9e\u73b0\u7684\u3002"),(0,n.kt)("admonition",{title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8bf7\u6309\u7167\u6b64\u9875\u9762\u4e0a\u7684\u8bf4\u660e\u5728\u5df2\u5907\u4efd\u7684\u540c\u4e00\u96c6\u7fa4\u4e0a\u8fd8\u539f Rancher\u3002\u8981\u628a Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4\uff0c\u8bf7\u53c2\u7167\u6b65\u9aa4",(0,n.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"\u8fc1\u79fb Rancher"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728\u4f7f\u7528\u76f8\u540c\u8bbe\u7f6e\u6062\u590d Rancher \u65f6\uff0cRancher deployment \u5728\u6062\u590d\u5f00\u59cb\u524d\u88ab\u624b\u52a8\u7f29\u51cf\uff0c\u7136\u540e Operator \u5c06\u5728\u6062\u590d\u5b8c\u6210\u540e\u5c06\u5176\u7f29\u56de\u3002\u56e0\u6b64\uff0c\u5728\u6062\u590d\u5b8c\u6210\u4e4b\u524d\uff0cRancher \u548c UI \u90fd\u5c06\u4e0d\u53ef\u7528\u3002\u5982\u679c UI \u4e0d\u53ef\u7528\u65f6\uff0c\u4f60\u53ef\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl create -f restore.yaml"),"YAML \u6062\u590d\u6587\u4ef6\u6765\u4f7f\u7528\u521d\u59cb\u7684\u96c6\u7fa4 kubeconfig\u3002")))),(0,n.kt)("h3",{id:"\u5c06-rancher-deployment-\u89c4\u6a21\u6269\u5c55\u5230-0"},"\u5c06 Rancher Deployment \u89c4\u6a21\u6269\u5c55\u5230 0"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > local"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u4e3b\u83dc\u5355\u4e2d\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u4e0b\uff0c\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Deployments"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4e0a\u65b9\u4e0b\u62c9\u83dc\u5355\u4ee5\u8c03\u6574\u7b5b\u9009\u6761\u4ef6\u3002\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"cattle-system")," \u4f5c\u4e3a\u7b5b\u9009\u6761\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u627e\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher")," deployment \u7684\u884c\uff0c\u5e76\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5c06",(0,n.kt)("strong",{parentName:"li"},"\u526f\u672c\u6570\u91cf"),"\u6539\u4e3a 0\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6eda\u52a8\u5230\u5e95\u90e8\u5e76\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,n.kt)("h3",{id:"\u521b\u5efa-restore-\u81ea\u5b9a\u4e49\u8d44\u6e90"},"\u521b\u5efa Restore \u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u627e\u5230\u4f60\u7684\u672c\u5730\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Rancher \u5907\u4efd > \u8fd8\u539f"),"\u3002"),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c Rancher Backups \u5e94\u7528\u4e0d\u53ef\u89c1\uff0c\u4f60\u9700\u8981\u5230 ",(0,n.kt)("strong",{parentName:"p"},"Apps")," \u7684 Charts \u9875\u9762\u4e2d\u5b89\u88c5\u5e94\u7528\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/helm-charts-in-rancher#charts"},"\u6b64\u5904"),"\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8868\u5355\u6216 YAML \u521b\u5efa Restore\u3002\u5982\u9700\u83b7\u53d6\u4f7f\u7528\u8868\u5355\u521b\u5efa Restore \u8d44\u6e90\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/reference-guides/backup-restore-configuration/restore-configuration"},"\u914d\u7f6e\u53c2\u8003"),"\u548c",(0,n.kt)("a",{parentName:"p",href:"/zh/reference-guides/backup-restore-configuration/examples"},"\u793a\u4f8b"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u9700\u4f7f\u7528 YAML \u7f16\u8f91\u5668\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa > \u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa"),"\u3002\u7136\u540e\u8f93\u5165 Restore YAML\u3002\u4ee5\u4e0b\u662f Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u793a\u4f8b\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,n.kt)("p",{parentName:"li"},"\u5982\u9700\u83b7\u5f97\u914d\u7f6e Restore \u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/reference-guides/backup-restore-configuration/restore-configuration"},"\u914d\u7f6e\u53c2\u8003"),"\u548c",(0,n.kt)("a",{parentName:"p",href:"/zh/reference-guides/backup-restore-configuration/examples"},"\u793a\u4f8b"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u521b\u5efa\u5907\u4efd\u6587\u4ef6\u5e76\u66f4\u65b0\u5230\u76ee\u6807\u5b58\u50a8\u4f4d\u7f6e\u3002\u8d44\u6e90\u8fd8\u539f\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49\uff08CRD\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u96c6\u7fa4\u8303\u56f4\u8d44\u6e90"),(0,n.kt)("li",{parentName:"ol"},"\u547d\u540d\u7a7a\u95f4\u8d44\u6e90")),(0,n.kt)("p",null,"\u5982\u9700\u67e5\u770b\u8fd8\u539f\u7684\u5904\u7406\u65b9\u5f0f\uff0c\u8bf7\u68c0\u67e5 Operator \u7684\u65e5\u5fd7\u3002\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u83b7\u53d6\u65e5\u5fd7\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl get pods -n cattle-resources-system\nkubectl logs -n cattle-resources-system -f\n")),(0,n.kt)("h3",{id:"\u56de\u6eda\u5230\u4e0a\u4e00\u4e2a-rancher-\u7248\u672c"},"\u56de\u6eda\u5230\u4e0a\u4e00\u4e2a Rancher \u7248\u672c"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Helm CLI \u56de\u6eda Rancher\u3002\u8981\u56de\u6eda\u5230\u4e0a\u4e00\u4e2a\u7248\u672c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"helm rollback rancher -n cattle-system\n")),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u662f\u60f3\u56de\u6eda\u5230\u4e0a\u4e00\u4e2a\u7248\u672c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u56de\u6eda\u7684\u7248\u672c\u3002\u67e5\u770b\u90e8\u7f72\u5386\u53f2\u8bb0\u5f55\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"helm history rancher -n cattle-system\n")),(0,n.kt)("p",null,"\u786e\u5b9a\u76ee\u6807\u7248\u672c\u540e\uff0c\u6267\u884c\u56de\u6eda\u3002\u6b64\u793a\u4f8b\u56de\u6eda\u5230\u7248\u672c ",(0,n.kt)("inlineCode",{parentName:"p"},"3"),"\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"helm rollback rancher 3 -n cattle-system\n")),(0,n.kt)("h2",{id:"\u56de\u6eda\u5230-rancher-22-24"},"\u56de\u6eda\u5230 Rancher 2.2-2.4"),(0,n.kt)("p",null,"\u8981\u56de\u6eda\u5230 2.5 \u4e4b\u524d\u7684 Rancher \u7248\u672c\uff0c\u53c2\u8003\u6b64\u5904\u7684\u6b65\u9aa4",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"\u6062\u590d\u5907\u4efd \u2014 Kubernetes \u5b89\u88c5"),"\u3002\u5982\u679c\u6062\u590d Rancher Server \u7684\u96c6\u7fa4\u7684\u67d0\u4e2a\u5feb\u7167\uff0cRancher \u7684\u7248\u672c\u4ee5\u53ca\u72b6\u6001\u5747\u4f1a\u6062\u590d\u56de\u5230\u5feb\u7167\u65f6\u7684\u7248\u672c\u548c\u72b6\u6001\u3002"),(0,n.kt)("p",null,"\u6709\u5173\u56de\u6eda Docker \u5b89\u88c5\u7684 Rancher\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher"},"\u672c\u9875"),"\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u6258\u7ba1\u96c6\u7fa4\u5bf9\u5176\u72b6\u6001\u5177\u6709\u6743\u5a01\u6027\u3002\u56e0\u6b64\uff0c\u6062\u590d Rancher Server \u4e0d\u4f1a\u6062\u590d\u5feb\u7167\u540e\u5bf9\u6258\u7ba1\u96c6\u7fa4\u8fdb\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u90e8\u7f72\u6216\u66f4\u6539\u3002")),(0,n.kt)("h2",{id:"\u56de\u6eda\u5230-rancher-20-21"},"\u56de\u6eda\u5230 Rancher 2.0-2.1"),(0,n.kt)("p",null,"\u6211\u4eec\u4e0d\u518d\u652f\u6301\u56de\u6eda\u5230 Rancher 2.0-2.1\u3002\u56de\u6eda\u5230\u8fd9\u4e9b\u7248\u672c\u7684\u8bf4\u660e\u4fdd\u7559\u5728",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1"},"\u6b64\u5904"),"\uff0c\u4ec5\u7528\u4e8e\u65e0\u6cd5\u5347\u7ea7\u5230 v2.2 \u7684\u60c5\u51b5\u3002"))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"\u5728\u4ee3\u7406\u540e\u4f7f\u7528 Fleet"},p=void 0,c={unversionedId:"integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy",id:"version-2.6/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy",title:"\u5728\u4ee3\u7406\u540e\u4f7f\u7528 Fleet",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u5728\u4e00\u4e2a\u8bbe\u7f6e\u4e2d\u542f\u7528 Fleet\uff0c\u8be5\u8bbe\u7f6e\u6709\u4e00\u4e2a\u5177\u6709\u516c\u5171 IP \u7684 Rancher Server\uff0c\u4ee5\u53ca\u4e00\u4e2a\u6ca1\u6709\u516c\u5171 IP \u4f46\u914d\u7f6e\u4e3a\u4f7f\u7528\u4ee3\u7406\u7684 Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy.md",sourceDirName:"integrations-in-rancher/fleet-gitops-at-scale",slug:"/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy",permalink:"/zh/v2.6/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy.md",tags:[],version:"2.6",lastUpdatedAt:1669187684,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{title:"\u5728\u4ee3\u7406\u540e\u4f7f\u7528 Fleet"},sidebar:"tutorialSidebar",previous:{title:"Windows \u652f\u6301",permalink:"/zh/v2.6/integrations-in-rancher/fleet-gitops-at-scale/windows-support"},next:{title:"Harvester \u96c6\u6210",permalink:"/zh/v2.6/integrations-in-rancher/harvester"}},s={},u=[{value:"\u5fc5\u8981\u7684\u73af\u5883\u53d8\u91cf",id:"\u5fc5\u8981\u7684\u73af\u5883\u53d8\u91cf",level:2},{value:"\u5728 Rancher UI \u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u5728-rancher-ui-\u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",level:2},{value:"\u5728\u79c1\u6709\u8282\u70b9\u4e0a\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u5728\u79c1\u6709\u8282\u70b9\u4e0a\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",level:2}],f={toc:u};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u5728\u4e00\u4e2a\u8bbe\u7f6e\u4e2d\u542f\u7528 Fleet\uff0c\u8be5\u8bbe\u7f6e\u6709\u4e00\u4e2a\u5177\u6709\u516c\u5171 IP \u7684 Rancher Server\uff0c\u4ee5\u53ca\u4e00\u4e2a\u6ca1\u6709\u516c\u5171 IP \u4f46\u914d\u7f6e\u4e3a\u4f7f\u7528\u4ee3\u7406\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"Rancher \u4e0d\u4f1a\u4e0e\u5df2\u6ce8\u518c\u7684\u4e0b\u6e38\u96c6\u7fa4\u5efa\u7acb\u8fde\u63a5\u3002\u90e8\u7f72\u5728\u4e0b\u6e38\u96c6\u7fa4\u4e0a\u7684 Rancher agent \u5fc5\u987b\u80fd\u591f\u4e0e Rancher \u5efa\u7acb\u8fde\u63a5\u3002"),(0,n.kt)("p",null,"\u8981\u8ba9 Fleet \u5728\u4ee3\u7406\u540e\u5de5\u4f5c\uff0c\u4f60\u9700\u8981\u4e3a\u4e0b\u6e38\u96c6\u7fa4\u8bbe\u7f6e ",(0,n.kt)("strong",{parentName:"p"},"Agent \u73af\u5883\u53d8\u91cf"),"\u3002\u4ee5\u4e0b\u662f\u96c6\u7fa4\u7ea7\u522b\u7684\u914d\u7f6e\u9009\u9879\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u4e3a\u4efb\u4f55\u96c6\u7fa4\u7c7b\u578b\uff08\u5305\u62ec\u6ce8\u518c\u96c6\u7fa4\u548c\u81ea\u5b9a\u4e49\u96c6\u7fa4\uff09\u914d\u7f6e\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002\u53ef\u4ee5\u5728\u7f16\u8f91\u73b0\u6709\u96c6\u7fa4\u6216\u914d\u7f6e\u65b0\u96c6\u7fa4\u65f6\u6dfb\u52a0\u53d8\u91cf\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u516c\u5171\u4e0b\u6e38\u96c6\u7fa4\uff0c",(0,n.kt)("a",{parentName:"p",href:"#%E5%9C%A8-rancher-ui-%E4%B8%AD%E8%AE%BE%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},"\u5728 Rancher UI \u4e2d\u8bbe\u7f6e\u5fc5\u8981\u7684\u73af\u5883\u53d8\u91cf"),"\u5c31\u8db3\u591f\u4e86\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u79c1\u6709\u8282\u70b9\u6216\u79c1\u6709\u96c6\u7fa4\uff0c\u5219\u9700\u8981\u5728\u8282\u70b9\u4e0a\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002\u7136\u540e\uff0c\u5728\u914d\u7f6e\u81ea\u5b9a\u4e49\u96c6\u7fa4\u6216\u6ce8\u518c\u79c1\u6709\u96c6\u7fa4\u65f6\uff0c\u5728 Rancher UI \u4e2d\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u3002\u6709\u5173\u5982\u4f55\u5728 K3s Kubernetes \u96c6\u7fa4\u4e2d\u7684 Ubuntu \u8282\u70b9\u4e0a\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"#%E5%9C%A8%E7%A7%81%E6%9C%89%E8%8A%82%E7%82%B9%E4%B8%8A%E8%AE%BE%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},"\u672c\u8282"),"\u3002"),(0,n.kt)("h2",{id:"\u5fc5\u8981\u7684\u73af\u5883\u53d8\u91cf"},"\u5fc5\u8981\u7684\u73af\u5883\u53d8\u91cf"),(0,n.kt)("p",null,"\u4e3a\u4ee3\u7406\u6dfb\u52a0 Fleet agent \u73af\u5883\u53d8\u91cf\u65f6\uff0c\u5c06 <PROXY_IP> \u66ff\u6362\u4e3a\u4f60\u7684\u79c1\u6709\u4ee3\u7406 IP\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"HTTP_PROXY")),(0,n.kt)("td",{parentName:"tr",align:null},"http://<PROXY_IP>:8888")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"HTTPS_PROXY")),(0,n.kt)("td",{parentName:"tr",align:null},"http://<PROXY_IP>:8888")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"NO_PROXY")),(0,n.kt)("td",{parentName:"tr",align:null},"127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local")))),(0,n.kt)("h2",{id:"\u5728-rancher-ui-\u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"},"\u5728 Rancher UI \u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,n.kt)("p",null,"\u8981\u5c06\u73af\u5883\u53d8\u91cf\u6dfb\u52a0\u5230\u73b0\u6709\u96c6\u7fa4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7\u9009\u9879"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u73af\u5883\u53d8\u91cf"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,n.kt)("a",{parentName:"li",href:"#%E5%BF%85%E8%A6%81%E7%9A%84%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},"\u5fc5\u8981\u7684\u73af\u5883\u53d8\u91cf")),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aFleet agent \u4f1a\u5728\u4ee3\u7406\u540e\u5de5\u4f5c\u3002"),(0,n.kt)("h2",{id:"\u5728\u79c1\u6709\u8282\u70b9\u4e0a\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"},"\u5728\u79c1\u6709\u8282\u70b9\u4e0a\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u79c1\u6709\u8282\u70b9\u548c\u79c1\u6709\u96c6\u7fa4\uff0c\u4ee3\u7406\u73af\u5883\u53d8\u91cf\u9700\u8981\u5728\u8282\u70b9\u672c\u8eab\u4e0a\u8bbe\u7f6e\uff0c\u4ee5\u53ca\u4ece Rancher UI \u914d\u7f6e\u3002"),(0,n.kt)("p",null,"\u6b64\u793a\u4f8b\u663e\u793a\u4e86\u5982\u4f55\u5728 K3s Kubernetes \u96c6\u7fa4\u4e2d\u7684 Ubuntu \u8282\u70b9\u4e0a\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ssh -o ForwardAgent=yes ubuntu@<public_proxy_ip>\nssh <k3s_ip>\nexport proxy_private_ip=<private_proxy_ip>\nexport HTTP_PROXY=http://${proxy_private_ip}:8888\nexport HTTPS_PROXY=http://${proxy_private_ip}:8888\nexport NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\nexport KUBECONFIG=/etc/rancher/k3s/k3s.yaml\n")))}m.isMDXComponent=!0}}]);
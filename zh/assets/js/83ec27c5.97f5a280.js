"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68204],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>u});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?t.createElement(g,i(i({ref:a},d),{},{components:n})):t.createElement(g,i({ref:a},d))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7330:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>m});n(67294);var t=n(3905);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})),e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f"},l=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f",description:"\u8981\u5728\u91cd\u542f Grafana \u5b9e\u4f8b\u540e\u4fdd\u5b58 Grafana \u4eea\u8868\u677f\uff0c\u8bf7\u5c06\u4eea\u8868\u677f\u7684\u914d\u7f6e JSON \u6dfb\u52a0\u5230 ConfigMap \u4e2d\u3002ConfigMap \u8fd8\u652f\u6301\u4f7f\u7528\u57fa\u4e8e GitOps \u6216 CD \u7684\u65b9\u6cd5\u6765\u90e8\u7f72\u4eea\u8868\u677f\uff0c\u4ece\u800c\u8ba9\u4f60\u5bf9\u4eea\u8868\u677f\u8fdb\u884c\u7248\u672c\u63a7\u5236\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",tags:[],version:"current",lastUpdatedAt:1670485593,formattedLastUpdatedAt:"2022\u5e7412\u67088\u65e5",frontMatter:{title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},next:{title:"\u8c03\u8bd5\u9ad8\u5185\u5b58\u7528\u91cf",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"}},d={},m=[{value:"\u521b\u5efa\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f",id:"\u521b\u5efa\u6301\u4e45\u5316-grafana-\u4eea\u8868\u677f",level:2},{value:"1. \u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684 JSON \u6a21\u578b",id:"1-\u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684-json-\u6a21\u578b",level:3},{value:"2. \u4f7f\u7528 Grafana JSON \u6a21\u578b\u521b\u5efa ConfigMap",id:"2-\u4f7f\u7528-grafana-json-\u6a21\u578b\u521b\u5efa-configmap",level:3},{value:"\u4e3a Grafana \u4eea\u8868\u677f ConfigMap \u914d\u7f6e\u547d\u540d\u7a7a\u95f4",id:"\u4e3a-grafana-\u4eea\u8868\u677f-configmap-\u914d\u7f6e\u547d\u540d\u7a7a\u95f4",level:3},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",a)},u=c("Tabs"),g=c("TabItem"),f={toc:m};function k(e){var{components:a}=e,n=i(e,["components"]);return(0,t.kt)("wrapper",o(function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(a){r(e,a,n[a])}))}return e}({},f,n),{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u8981\u5728\u91cd\u542f Grafana \u5b9e\u4f8b\u540e\u4fdd\u5b58 Grafana \u4eea\u8868\u677f\uff0c\u8bf7\u5c06\u4eea\u8868\u677f\u7684\u914d\u7f6e JSON \u6dfb\u52a0\u5230 ConfigMap \u4e2d\u3002ConfigMap \u8fd8\u652f\u6301\u4f7f\u7528\u57fa\u4e8e GitOps \u6216 CD \u7684\u65b9\u6cd5\u6765\u90e8\u7f72\u4eea\u8868\u677f\uff0c\u4ece\u800c\u8ba9\u4f60\u5bf9\u4eea\u8868\u677f\u8fdb\u884c\u7248\u672c\u63a7\u5236\u3002"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA%E6%8C%81%E4%B9%85%E5%8C%96-grafana-%E4%BB%AA%E8%A1%A8%E6%9D%BF"},"\u521b\u5efa\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#%E5%B7%B2%E7%9F%A5%E9%97%AE%E9%A2%98"},"\u5df2\u77e5\u95ee\u9898"))),(0,t.kt)("h2",{id:"\u521b\u5efa\u6301\u4e45\u5316-grafana-\u4eea\u8868\u677f"},"\u521b\u5efa\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f"),(0,t.kt)(u,{mdxType:"Tabs"},(0,t.kt)(g,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,t.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Monitoring \u5e94\u7528\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u8981\u521b\u5efa\u6301\u4e45\u5316\u4eea\u8868\u677f\uff0c\u4f60\u5fc5\u987b\u5728\u5305\u542b Grafana \u4eea\u8868\u677f\u7684\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e2d\u81f3\u5c11\u5177\u6709",(0,t.kt)("strong",{parentName:"li"},"\u7ba1\u7406 ConfigMap")," \u7684 Rancher RBAC \u6743\u9650\u3002\u8fd9\u4e0e Monitoring Chart \u516c\u5f00\u7684 ",(0,t.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-edit")," \u6216 ",(0,t.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-admin")," Kubernetes \u539f\u751f RBAC \u89d2\u8272\u5bf9\u5e94\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u8981\u67e5\u770b\u6307\u5411\u5916\u90e8\u76d1\u63a7 UI\uff08\u5305\u62ec Grafana \u4eea\u8868\u677f\uff09\u7684\u94fe\u63a5\uff0c\u4f60\u81f3\u5c11\u9700\u8981\u4e00\u4e2a ",(0,t.kt)("a",{parentName:"li",href:"/zh/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#%E5%85%B7%E6%9C%89-rancher-%E6%9D%83%E9%99%90%E7%9A%84%E7%94%A8%E6%88%B7"},"project-member \u89d2\u8272"),"\u3002"))),(0,t.kt)("h3",{id:"1-\u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684-json-\u6a21\u578b"},"1. \u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684 JSON \u6a21\u578b"),(0,t.kt)("p",null,"\u8981\u521b\u5efa\u6301\u4e45\u5316\u4eea\u8868\u677f\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u7684 JSON \u6a21\u578b\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u9884\u5236\u4eea\u8868\u677f\u6216\u81ea\u884c\u6784\u5efa\u4eea\u8868\u677f\u3002"),(0,t.kt)("p",null,"\u8981\u4f7f\u7528\u9884\u5236\u4eea\u8868\u677f\uff0c\u8bf7\u8f6c\u5230 ",(0,t.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards"},"https://grafana.com/grafana/dashboards"),"\uff0c\u6253\u5f00\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\uff0c\u7136\u540e\u5355\u51fb ",(0,t.kt)("strong",{parentName:"p"},"Download JSON")," \u6309\u94ae\u6765\u83b7\u53d6\u4e0b\u4e00\u6b65\u6240\u9700\u7684 JSON \u6a21\u578b\u3002"),(0,t.kt)("p",null,"\u8981\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u4eea\u8868\u677f\uff1a"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u70b9\u51fb\u94fe\u63a5\u6253\u5f00 Grafana\u3002\u5728\u96c6\u7fa4\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\u4e0a\uff0c\u5355\u51fb ",(0,t.kt)("strong",{parentName:"p"},"Monitoring"),"\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u767b\u5f55\u5230 Grafana\u3002\u8bf7\u6ce8\u610f\uff0cGrafana \u5b9e\u4f8b\u7684\u9ed8\u8ba4 Admin \u7528\u6237\u540d\u548c\u5bc6\u7801\u662f ",(0,t.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),"\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 Chart \u65f6\u66ff\u6362\u51ed\u8bc1\u3002"),(0,t.kt)("admonition",{parentName:"li",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u8c01\u62e5\u6709\u5bc6\u7801\uff0c\u4f60\u90fd\u9700\u8981\u5728\u90e8\u7f72\u4e86 Rancher Monitoring \u7684\u9879\u76ee\u4e2d\u81f3\u5c11\u5177\u6709",(0,t.kt)("b",null,"\u7ba1\u7406\u670d\u52a1"),"\u6216",(0,t.kt)("b",null,"\u67e5\u770b\u76d1\u63a7"),"\u7684\u6743\u9650\u624d\u80fd\u8bbf\u95ee Grafana \u5b9e\u4f8b\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 Chart \u65f6\u66ff\u6362\u51ed\u8bc1\u3002"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u4f7f\u7528 Grafana UI \u521b\u5efa\u4eea\u8868\u677f\u3002\u5b8c\u6210\u540e\uff0c\u5355\u51fb\u9876\u90e8\u5bfc\u822a\u83dc\u5355\u4e2d\u7684\u9f7f\u8f6e\u56fe\u6807\u8f6c\u5230\u4eea\u8868\u677f\u8bbe\u7f6e\u9875\u9762\u3002\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb ",(0,t.kt)("strong",{parentName:"p"},"JSON Model"),"\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u590d\u5236\u51fa\u73b0\u7684 JSON \u6570\u636e\u7ed3\u6784\u3002"))),(0,t.kt)("h3",{id:"2-\u4f7f\u7528-grafana-json-\u6a21\u578b\u521b\u5efa-configmap"},"2. \u4f7f\u7528 Grafana JSON \u6a21\u578b\u521b\u5efa ConfigMap"),(0,t.kt)("p",null,"\u5728\u5305\u542b Grafana \u4eea\u8868\u677f\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u4e00\u4e2a ConfigMap\uff08\u9ed8\u8ba4\u4e3a cattle-dashboards \uff09\u3002"),(0,t.kt)("p",null,"ConfigMap \u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7c7b\u4f3c\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards # \u5982\u679c\u4e0d\u4f7f\u7528\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\uff0c\u5219\u4fee\u6539\u6b64\u503c\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')),(0,t.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cGrafana \u914d\u7f6e\u4e3a\u76d1\u63a7 ",(0,t.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," \u547d\u540d\u7a7a\u95f4\u4e2d\u5e26\u6709 ",(0,t.kt)("inlineCode",{parentName:"p"},"grafana_dashboard")," \u6807\u7b7e\u7684\u6240\u6709 ConfigMap\u3002"),(0,t.kt)("p",null,"\u8981\u8ba9 Grafana \u76d1\u63a7\u6240\u6709\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap\uff0c\u8bf7\u53c2\u9605",(0,t.kt)("a",{parentName:"p",href:"#%E4%B8%BA-grafana-%E4%BB%AA%E8%A1%A8%E6%9D%BF-configmap-%E9%85%8D%E7%BD%AE%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4"},"\u672c\u8282"),"\u3002"),(0,t.kt)("p",null,"\u8981\u5728 Rancher UI \u4e2d\u521b\u5efa ConfigMap\uff1a"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,t.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,t.kt)("li",{parentName:"ol"},"\u5728",(0,t.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u53ef\u89c6\u5316\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,t.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,t.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,t.kt)("strong",{parentName:"li"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u914d\u7f6e\u6620\u5c04"),"\u3002"),(0,t.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,t.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,t.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u4e0e\u4e0a\u4f8b\u7c7b\u4f3c\u7684\u952e\u503c\u5bf9\u3002\u8f93\u5165 ",(0,t.kt)("inlineCode",{parentName:"li"},"<dashboard-name>.json")," \u7684\u503c\u65f6\uff0c\u70b9\u51fb",(0,t.kt)("strong",{parentName:"li"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),"\u5e76\u4e0a\u4f20 JSON \u6570\u636e\u6a21\u578b\u3002"),(0,t.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,t.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u521b\u5efa ConfigMap \u540e\uff0c\u5373\u4f7f Grafana pod \u91cd\u542f\u4e86\uff0cConfigMap \u4e5f\u80fd\u663e\u793a\u5728 Grafana UI \u4e0a\u5e76\u6301\u4e45\u5316\u3002"),(0,t.kt)("p",null,"\u65e0\u6cd5\u5728 Grafana UI \u4e2d\u5220\u9664\u6216\u7f16\u8f91\u4f7f\u7528 ConfigMap \u6301\u4e45\u5316\u4e86\u7684\u4eea\u8868\u677f\u3002"),(0,t.kt)("p",null,'\u5982\u679c\u4f60\u5728 Grafana UI \u4e2d\u5220\u9664\u4eea\u8868\u677f\uff0c\u4f60\u5c06\u770b\u5230 "Dashboard cannot be deleted because it was provisioned" \u7684\u9519\u8bef\u6d88\u606f\u3002\u5982\u9700\u5220\u9664\u4eea\u8868\u677f\uff0c\u4f60\u9700\u8981\u5220\u9664 ConfigMap\u3002'),(0,t.kt)("h3",{id:"\u4e3a-grafana-\u4eea\u8868\u677f-configmap-\u914d\u7f6e\u547d\u540d\u7a7a\u95f4"},"\u4e3a Grafana \u4eea\u8868\u677f ConfigMap \u914d\u7f6e\u547d\u540d\u7a7a\u95f4"),(0,t.kt)("p",null,"\u8981\u8ba9 Grafana \u76d1\u63a7\u6240\u6709\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap\uff0c\u8bf7\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Helm chart \u4e2d\u6307\u5b9a\u4ee5\u4e0b\u503c\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"grafana.sidecar.dashboards.searchNamespace=ALL\n")),(0,t.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cMonitoring Chart \u7528\u4e8e\u6dfb\u52a0 Grafana \u4eea\u8868\u677f\u7684 RBAC \u89d2\u8272\u4ec5\u80fd\u8ba9\u7528\u6237\u5c06\u4eea\u8868\u677f\u6dfb\u52a0\u5230\u5b9a\u4e49\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"grafana.dashboards.namespace")," \u4e2d\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"cattle-dashboards"),"\u3002")),(0,t.kt)(g,{value:"Rancher \u7248\u672c\u4f4e\u4e8e v2.5.8",mdxType:"TabItem"},(0,t.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Monitoring \u5e94\u7528\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u5177\u6709 cluster-admin ClusterRole \u6743\u9650\u3002"))),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,t.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5728",(0,t.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u5728\u5176\u4e2d\u914d\u7f6e Grafana \u547d\u540d\u7a7a\u95f4\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,t.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,t.kt)("strong",{parentName:"p"},"\u76d1\u63a7"),"\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,t.kt)("strong",{parentName:"p"},"Grafana"),"\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u767b\u5f55\u5230 Grafana\u3002\u8bf7\u6ce8\u610f\uff0cGrafana \u5b9e\u4f8b\u7684\u9ed8\u8ba4 Admin \u7528\u6237\u540d\u548c\u5bc6\u7801\u662f ",(0,t.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),"\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 Chart \u65f6\u66ff\u6362\u51ed\u8bc1\u3002"),(0,t.kt)("admonition",{parentName:"li",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u8c01\u62e5\u6709\u5bc6\u7801\uff0c\u90fd\u9700\u8981 Rancher \u7684\u96c6\u7fa4\u7ba1\u7406\u5458\u6743\u9650\u624d\u80fd\u8bbf\u95ee Grafana \u5b9e\u4f8b\u3002"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u8fdb\u884c\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u3002\u5728\u9876\u90e8\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u901a\u8fc7\u5355\u51fb\u9f7f\u8f6e\u56fe\u6807\u8f6c\u5230\u4eea\u8868\u677f\u8bbe\u7f6e\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb ",(0,t.kt)("strong",{parentName:"p"},"JSON Model"),"\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u590d\u5236\u51fa\u73b0\u7684 JSON \u6570\u636e\u7ed3\u6784\u3002")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," \u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u4e00\u4e2a ConfigMap\u3002ConfigMap \u9700\u8981\u6709 ",(0,t.kt)("inlineCode",{parentName:"p"},'grafana_dashboard: "1"')," \u6807\u7b7e\u3002\u5c06 JSON \u7c98\u8d34\u5230 ConfigMap \u4e2d\uff0c\u683c\u5f0f\u5982\u4e0b\u4f8b\u6240\u793a\uff1a"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u521b\u5efa ConfigMap \u540e\uff0c\u5373\u4f7f Grafana pod \u91cd\u542f\u4e86\uff0cConfigMap \u4e5f\u80fd\u663e\u793a\u5728 Grafana UI \u4e0a\u5e76\u6301\u4e45\u5316\u3002"),(0,t.kt)("p",null,'\u65e0\u6cd5\u5728 Grafana UI \u4e2d\u5220\u9664\u4f7f\u7528 ConfigMap \u6301\u4e45\u5316\u4e86\u7684\u4eea\u8868\u677f\u3002\u5982\u679c\u4f60\u5728 Grafana UI \u4e2d\u5220\u9664\u4eea\u8868\u677f\uff0c\u4f60\u5c06\u770b\u5230 "Dashboard cannot be deleted because it was provisioned" \u7684\u9519\u8bef\u6d88\u606f\u3002\u5982\u9700\u5220\u9664\u4eea\u8868\u677f\uff0c\u4f60\u9700\u8981\u5220\u9664 ConfigMap\u3002'),(0,t.kt)("p",null,"\u4e3a\u9632\u6b62\u5728\u5378\u8f7d Monitoring v2 \u65f6\u5220\u9664\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u6ce8\u91ca\u6dfb\u52a0\u5230 ",(0,t.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," \u547d\u540d\u7a7a\u95f4\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'helm.sh/resource-policy: "keep"\n')))),(0,t.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,t.kt)("p",null,"\u5982\u679c\u4f60\u7684 Monitoring V2 \u7248\u672c\u662f v9.4.203 \u6216\u66f4\u4f4e\u7248\u672c\uff0c\u5378\u8f7d Monitoring chart \u5c06\u540c\u65f6\u5220\u9664 ",(0,t.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," \u547d\u540d\u7a7a\u95f4\uff0c\u6240\u6709\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u5c06\u88ab\u5220\u9664\uff08\u9664\u975e\u547d\u540d\u7a7a\u95f4\u5e26\u6709\u6ce8\u91ca ",(0,t.kt)("inlineCode",{parentName:"p"},'helm.sh/resource-policy: "keep"'),"\uff09\u3002"),(0,t.kt)("p",null,"Rancher 2.5.8 \u53d1\u5e03\u7684\u65b0 Monitoring Chart \u4e2d\u9ed8\u8ba4\u6dfb\u52a0\u4e86\u8be5\u6ce8\u89e3\uff0c\u4f46\u4f7f\u7528\u65e9\u671f Rancher \u7248\u672c\u7684\u7528\u6237\u4ecd\u9700\u624b\u52a8\u5e94\u7528\u8be5\u6ce8\u91ca\u3002"))}k.isMDXComponent=!0}}]);
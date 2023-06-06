"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41246],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(g,i(i({ref:r},s),{},{components:t})):n.createElement(g,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91825:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});t(67294);var n=t(3905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f"},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",description:"\u5728\u672c\u6587\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u901a\u8fc7\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f\u6765\u663e\u793a\u7279\u5b9a\u5bb9\u5668\u7684\u6307\u6807\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard.md",tags:[],version:"current",lastUpdatedAt:1685654352,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f"},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Monitoring",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"},next:{title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"}},s={},p=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u767b\u5f55 Grafana",id:"\u767b\u5f55-grafana",level:3},{value:"\u83b7\u53d6\u652f\u6301 Grafana \u9762\u677f\u7684 PromQL \u67e5\u8be2",id:"\u83b7\u53d6\u652f\u6301-grafana-\u9762\u677f\u7684-promql-\u67e5\u8be2",level:3}],d={toc:p};function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u901a\u8fc7\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f\u6765\u663e\u793a\u7279\u5b9a\u5bb9\u5668\u7684\u6307\u6807\u3002"),(0,n.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5148\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u5e94\u7528\u3002"),(0,n.kt)("p",null,"\u8981\u67e5\u770b\u6307\u5411\u5916\u90e8\u76d1\u63a7 UI\uff08\u5305\u62ec Grafana \u4eea\u8868\u677f\uff09\u7684\u94fe\u63a5\uff0c\u4f60\u81f3\u5c11\u9700\u8981\u4e00\u4e2a ",(0,n.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#%E5%85%B7%E6%9C%89-rancher-%E6%9D%83%E9%99%90%E7%9A%84%E7%94%A8%E6%88%B7"},"project-member \u89d2\u8272"),"\u3002"),(0,n.kt)("h3",{id:"\u767b\u5f55-grafana"},"\u767b\u5f55 Grafana"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728 Rancher UI \u4e2d\uff0c\u8f6c\u5230\u8981\u81ea\u5b9a\u4e49\u7684\u4eea\u8868\u677f\u7684\u96c6\u7fa4\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Grafana"),"\u3002Grafana \u4eea\u8868\u677f\u5c06\u5728\u65b0\u9009\u9879\u5361\u4e2d\u6253\u5f00\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5de6\u4e0b\u89d2\u7684\u767b\u5f55\u56fe\u6807\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Sign In"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 Grafana\u3002Grafana \u5b9e\u4f8b\u7684\u9ed8\u8ba4 Admin \u7528\u6237\u540d\u548c\u5bc6\u7801\u662f ",(0,n.kt)("inlineCode",{parentName:"li"},"admin/prom-operator"),"\uff08\u65e0\u8bba\u8c01\u62e5\u6709\u5bc6\u7801\uff0c\u90fd\u9700\u8981 Rancher \u7684\u96c6\u7fa4\u7ba1\u7406\u5458\u6743\u9650\u624d\u80fd\u8bbf\u95ee Grafana \u5b9e\u4f8b\uff09\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 Chart \u65f6\u66ff\u6362\u51ed\u8bc1\u3002")),(0,n.kt)("h3",{id:"\u83b7\u53d6\u652f\u6301-grafana-\u9762\u677f\u7684-promql-\u67e5\u8be2"},"\u83b7\u53d6\u652f\u6301 Grafana \u9762\u677f\u7684 PromQL \u67e5\u8be2"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4efb\u4f55\u9762\u677f\uff0c\u4f60\u53ef\u4ee5\u5355\u51fb\u6807\u9898\u5e76\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Explore")," \u4ee5\u83b7\u53d6\u652f\u6301\u56fe\u5f62\u7684 PromQL \u67e5\u8be2\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u8981\u83b7\u53d6 Alertmanager \u5bb9\u5668\u7684 CPU \u4f7f\u7528\u7387\uff0c\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"CPU Utilization > Inspect"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data")," \u9009\u9879\u5361\u5c06\u57fa\u7840\u6570\u636e\u663e\u793a\u4e3a\u65f6\u95f4\u5e8f\u5217\uff0c\u7b2c\u4e00\u5217\u662f\u65f6\u95f4\uff0c\u7b2c\u4e8c\u5217\u662f PromQL \u67e5\u8be2\u7ed3\u679c\u3002\u590d\u5236 PromQL \u67e5\u8be2\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'(1 - (avg(irate({__name__=~"node_cpu_seconds_total|windows_cpu_time_total",mode="idle"}[5m])))) * 100\n')),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 Grafana \u9762\u677f\u4e2d\u4fee\u6539\u67e5\u8be2\uff0c\u6216\u4f7f\u7528\u8be5\u67e5\u8be2\u521b\u5efa\u65b0\u7684 Grafana \u9762\u677f\u3002"),(0,n.kt)("p",null,"\u53c2\u8003\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels-visualizations/configure-panel-options/#edit-a-panel"},"\u7f16\u8f91\u9762\u677f\u7684 Grafana \u6587\u6863")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels-visualizations/panel-editor-overview"},"\u5411\u4eea\u8868\u677f\u6dfb\u52a0\u9762\u677f\u7684 Grafana \u6587\u6863"))))}f.isMDXComponent=!0}}]);
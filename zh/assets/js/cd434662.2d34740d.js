"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[67622],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),u=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return o.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||i;return t?o.createElement(f,c(c({ref:r},s),{},{components:t})):o.createElement(f,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74378:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});t(67294);var o=t(3905);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const a={title:"ServiceMonitor \u548c PodMonitor \u914d\u7f6e"},p=void 0,u={unversionedId:"reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",id:"version-2.6/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",title:"ServiceMonitor \u548c PodMonitor \u914d\u7f6e",description:"ServiceMonitor \u548c PodMonitor \u90fd\u662f\u4f2a CRD\uff0c\u5b83\u4eec\u6620\u5c04 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u6293\u53d6\u914d\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",permalink:"/zh/v2.6/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"ServiceMonitor \u548c PodMonitor \u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u8def\u7531\u914d\u7f6e",permalink:"/zh/v2.6/reference-guides/monitoring-v2-configuration/routes"},next:{title:"Helm Chart \u9009\u9879",permalink:"/zh/v2.6/reference-guides/monitoring-v2-configuration/helm-chart-options"}},s={},l=[{value:"ServiceMonitor",id:"servicemonitor",level:3},{value:"PodMonitor",id:"podmonitor",level:3}],m={toc:l};function d(e){var{components:r}=e,t=c(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},m,t),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ServiceMonitor \u548c PodMonitor \u90fd\u662f\u4f2a CRD\uff0c\u5b83\u4eec\u6620\u5c04 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u6293\u53d6\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e9b\u914d\u7f6e\u5bf9\u8c61\u4ee5\u58f0\u660e\u65b9\u5f0f\u6307\u5b9a Prometheus \u6293\u53d6\u6307\u6807\u7684\u7aef\u70b9\u3002"),(0,o.kt)("p",null,"ServiceMonitor \u6bd4 PodMonitor \u66f4\u5e38\u7528\uff0c\u63a8\u8350\u7528\u4e8e\u5927\u591a\u6570\u7528\u4f8b\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u672c\u8282\u53c2\u8003\u5047\u8bbe\u4f60\u5df2\u7ecf\u719f\u6089 Monitoring \u7ec4\u4ef6\u7684\u534f\u540c\u5de5\u4f5c\u65b9\u5f0f\u3002\u6709\u5173 Alertmanager \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"\u672c\u8282"),"\u3002")),(0,o.kt)("h3",{id:"servicemonitor"},"ServiceMonitor"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u4f2a CRD \u6620\u5c04\u5230 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002\u5b83\u4ee5\u58f0\u660e\u65b9\u5f0f\u6307\u5b9a\u5e94\u5982\u4f55\u76d1\u63a7 Kubernetes \u670d\u52a1\u7ec4\u3002"),(0,o.kt)("p",null,"\u521b\u5efa ServiceMonitor \u65f6\uff0cPrometheus Operator \u4f1a\u66f4\u65b0 Prometheus \u6293\u53d6\u914d\u7f6e\uff0c\u4ece\u800c\u5305\u542b ServiceMonitor \u914d\u7f6e\u3002\u7136\u540e Prometheus \u5f00\u59cb\u4ece ServiceMonitor \u4e2d\u5b9a\u4e49\u7684\u7aef\u70b9\u6293\u53d6\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55 Service \u4e0e ServiceMonitor ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," \u5b57\u6bb5\u4e2d\u7684\u6807\u7b7e\u5339\u914d\uff0c\u5219\u4f1a\u6839\u636e ServiceMonitor \u6307\u5b9a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoints")," \u8fdb\u884c\u76d1\u63a7\u3002\u6709\u5173\u53ef\u4ee5\u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b Prometheus Operator \u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#servicemonitor"},"\u89c4\u8303"),"\u3002"),(0,o.kt)("p",null,"\u6709\u5173 ServiceMonitor \u5de5\u4f5c\u539f\u7406\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/running-exporters.md"},"Prometheus Operator \u6587\u6863"),"\u3002"),(0,o.kt)("h3",{id:"podmonitor"},"PodMonitor"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u4f2a CRD \u6620\u5c04\u5230 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002\u5b83\u4ee5\u58f0\u660e\u65b9\u5f0f\u6307\u5b9a\u5e94\u5982\u4f55\u76d1\u63a7 Pod \u7ec4\u3002"),(0,o.kt)("p",null,"\u521b\u5efa PodMonitor \u65f6\uff0cPrometheus Operator \u4f1a\u66f4\u65b0 Prometheus \u6293\u53d6\u914d\u7f6e\uff0c\u4ece\u800c\u5305\u542b PodMonitor \u914d\u7f6e\u3002\u7136\u540e Prometheus \u5f00\u59cb\u4ece PodMonitor \u4e2d\u5b9a\u4e49\u7684\u7aef\u70b9\u6293\u53d6\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55 Pod \u4e0e PodMonitor ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," \u5b57\u6bb5\u4e2d\u7684\u6807\u7b7e\u5339\u914d\uff0c\u5219\u4f1a\u6839\u636e PodMonitor \u6307\u5b9a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"podMetricsEndpoints")," \u8fdb\u884c\u76d1\u63a7\u3002\u6709\u5173\u53ef\u4ee5\u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b Prometheus Operator \u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#podmonitorspec"},"\u89c4\u8303"),"\u3002"))}d.isMDXComponent=!0}}]);
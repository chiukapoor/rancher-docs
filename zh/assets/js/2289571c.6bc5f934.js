"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=s(r),g=o,m=l["".concat(c,".").concat(g)]||l[g]||p[g]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},33694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={title:"Prometheus \u914d\u7f6e"},c=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",id:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",title:"Prometheus \u914d\u7f6e",description:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u9700\u8981\u76f4\u63a5\u7f16\u8f91 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u56e0\u4e3a Monitoring \u5e94\u7528\u4f1a\u6839\u636e ServiceMonitor \u548c PodMonitor \u7684\u66f4\u6539\u81ea\u52a8\u66f4\u65b0\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus.md",tags:[],version:"current",lastUpdatedAt:1669185570,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{title:"Prometheus \u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"Alertmanager \u914d\u7f6e",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},next:{title:"\u914d\u7f6e PrometheusRule",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"}},d={},p=[{value:"\u5173\u4e8e Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90",id:"\u5173\u4e8e-prometheus-\u81ea\u5b9a\u4e49\u8d44\u6e90",level:2}],l={toc:p};function g(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},l,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u9700\u8981\u76f4\u63a5\u7f16\u8f91 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u56e0\u4e3a Monitoring \u5e94\u7528\u4f1a\u6839\u636e ServiceMonitor \u548c PodMonitor \u7684\u66f4\u6539\u81ea\u52a8\u66f4\u65b0\u8d44\u6e90\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u672c\u8282\u53c2\u8003\u5047\u8bbe\u4f60\u5df2\u7ecf\u719f\u6089 Monitoring \u7ec4\u4ef6\u7684\u534f\u540c\u5de5\u4f5c\u65b9\u5f0f\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"\u672c\u8282"),"\u3002")),(0,n.kt)("h2",{id:"\u5173\u4e8e-prometheus-\u81ea\u5b9a\u4e49\u8d44\u6e90"},"\u5173\u4e8e Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,n.kt)("p",null,"Prometheus CR \u5b9a\u4e49\u4e86\u6240\u9700\u7684 Prometheus deployment\u3002Prometheus Operator \u4f1a\u89c2\u5bdf Prometheus CR\u3002\u5f53 CR \u53d1\u751f\u53d8\u5316\u65f6\uff0cPrometheus Operator \u4f1a\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"prometheus-rancher-monitoring-prometheus"),"\uff0c\u5373\u6839\u636e CR \u914d\u7f6e\u7684 Prometheus deployment\u3002"),(0,n.kt)("p",null,"Prometheus CR \u6307\u5b9a\u4e86\u8be6\u7ec6\u4fe1\u606f\uff0c\u4f8b\u5982\u89c4\u5219\u4ee5\u53ca\u8fde\u63a5\u5230 Prometheus \u7684 Alertmanager\u3002Rancher \u4f1a\u4e3a\u4f60\u6784\u5efa\u8fd9\u4e2a CR\u3002"),(0,n.kt)("p",null,"Monitoring V2 \u4ec5\u652f\u6301\u6bcf\u4e2a\u96c6\u7fa4\u4e00\u4e2a Prometheus\u3002\u5982\u679c\u4f60\u60f3\u5c06\u76d1\u63a7\u9650\u5236\u5230\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\uff0c\u4f60\u9700\u8981\u7f16\u8f91 Prometheus CR\u3002"))}g.isMDXComponent=!0}}]);
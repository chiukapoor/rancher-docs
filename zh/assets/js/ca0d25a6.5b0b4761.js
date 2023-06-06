"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e"},s=void 0,c={unversionedId:"integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",id:"integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",title:"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e",description:"Monitoring \u5e94\u7528\u8bbe\u7f6e\u4e86 prometheus.prometheusSpec.ignoreNamespaceSelectors=false\uff0c\u5373\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8de8\u6240\u6709\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u76d1\u63a7\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations.md",sourceDirName:"integrations-in-rancher/istio/configuration-options",slug:"/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",permalink:"/zh/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u5728\u5177\u6709 Pod \u5b89\u5168\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u542f\u7528 Istio",permalink:"/zh/integrations-in-rancher/istio/configuration-options/pod-security-policies"},next:{title:"\u5728 RKE2 \u548c K3s \u96c6\u7fa4\u4e0a\u5b89\u88c5 Istio \u7684\u5176\u4ed6\u6b65\u9aa4",permalink:"/zh/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"}},p={},u=[{value:"\u901a\u8fc7\u5c06 ignoreNamespaceSelectors \u8bbe\u7f6e\u4e3a True \u6765\u9650\u5236\u5bf9\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u76d1\u63a7",id:"\u901a\u8fc7\u5c06-ignorenamespaceselectors-\u8bbe\u7f6e\u4e3a-true-\u6765\u9650\u5236\u5bf9\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u76d1\u63a7",level:3},{value:"\u8ba9 Prometheus \u68c0\u6d4b\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u8d44\u6e90",id:"\u8ba9-prometheus-\u68c0\u6d4b\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u8d44\u6e90",level:3},{value:"\u76d1\u63a7\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\uff1a\u521b\u5efa ServiceMonitor \u6216 PodMonitor",id:"\u76d1\u63a7\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u521b\u5efa-servicemonitor-\u6216-podmonitor",level:3},{value:"\u8de8\u547d\u540d\u7a7a\u95f4\u76d1\u63a7\uff1a\u5c06 ignoreNamespaceSelectors \u8bbe\u7f6e\u4e3a False",id:"\u8de8\u547d\u540d\u7a7a\u95f4\u76d1\u63a7\u5c06-ignorenamespaceselectors-\u8bbe\u7f6e\u4e3a-false",level:3}],m={toc:u};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Monitoring \u5e94\u7528\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=false"),"\uff0c\u5373\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8de8\u6240\u6709\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u76d1\u63a7\u3002"),(0,r.kt)("p",null,"\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u90e8\u7f72\u5728\u5177\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," \u6807\u7b7e\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u8d44\u6e90\u7684\u6d41\u91cf\u3001\u6307\u6807\u548c\u56fe\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5c06 Prometheus \u9650\u5236\u4e3a\u7279\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u8bf7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),"\u3002\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u4f60\u9700\u8981\u6dfb\u52a0\u5176\u4ed6\u914d\u7f6e\u6765\u7ee7\u7eed\u76d1\u63a7\u4f60\u7684\u8d44\u6e90\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u5c06-ignorenamespaceselectors-\u8bbe\u7f6e\u4e3a-true-\u6765\u9650\u5236\u5bf9\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u76d1\u63a7"},"\u901a\u8fc7\u5c06 ignoreNamespaceSelectors \u8bbe\u7f6e\u4e3a True \u6765\u9650\u5236\u5bf9\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u76d1\u63a7"),(0,r.kt)("p",null,"\u8981\u9650\u5236\u5bf9\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u76d1\u63a7\uff0c\u4f60\u9700\u8981\u7f16\u8f91 ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreNamespaceSelectors")," Helm Chart \u9009\u9879\u3002\u4f60\u53ef\u4ee5\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Monitoring Helm Chart \u65f6\u914d\u7f6e\u6b64\u9009\u9879\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u6216\u5347\u7ea7 Monitoring Helm Chart \u65f6\uff0c\u7f16\u8f91 values.yml \u5e76\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u5b89\u88c5\u6216\u5347\u7ea7\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aPrometheus \u5c06\u4ec5\u7528\u4e8e\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u3002\u6362\u8a00\u4e4b\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e\u4ee5\u4e0b\u914d\u7f6e\u4e4b\u4e00\u624d\u80fd\u7ee7\u7eed\u5728\u5404\u79cd\u4eea\u8868\u677f\u4e2d\u67e5\u770b\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"\u8ba9-prometheus-\u68c0\u6d4b\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u8d44\u6e90"},"\u8ba9 Prometheus \u68c0\u6d4b\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u8d44\u6e90"),(0,r.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),"\uff0c\u5219\u6709\u4e24\u79cd\u65b9\u6cd5\u8ba9 Prometheus \u68c0\u6d4b\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u8d44\u6e90\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u7279\u5b9a\u7684\u547d\u540d\u7a7a\u95f4"),"\uff1a\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u6dfb\u52a0\u4e00\u4e2a ServiceMonitor \u6216 PodMonitor \u4ee5\u53ca\u8981\u6293\u53d6\u7684\u76ee\u6807\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8de8\u547d\u540d\u7a7a\u95f4\u76d1\u63a7"),"\uff1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"additionalScrapeConfig")," \u6dfb\u52a0\u5230\u4f60\u7684 rancher-monitoring \u5b9e\u4f8b\uff0c\u4ece\u800c\u6293\u53d6\u6240\u6709\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u76ee\u6807\u3002")),(0,r.kt)("h3",{id:"\u76d1\u63a7\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u521b\u5efa-servicemonitor-\u6216-podmonitor"},"\u76d1\u63a7\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\uff1a\u521b\u5efa ServiceMonitor \u6216 PodMonitor"),(0,r.kt)("p",null,"\u6b64\u9009\u9879\u7528\u4e8e\u5b9a\u4e49\u5728\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u4e2d\u8981\u76d1\u63a7\u7684\u670d\u52a1\u6216 pod\u3002"),(0,r.kt)("p",null,"\u53ef\u7528\u6027\u6743\u8861\u6307\u7684\u662f\uff0c\u7531\u4e8e\u4f60\u65e0\u6cd5\u8de8\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u76d1\u63a7\uff0c\u56e0\u6b64\u4f60\u5fc5\u987b\u4e3a\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u521b\u5efa ServiceMonitor \u6216 PodMonitor\u3002"),(0,r.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"<your namespace>")," \u5b9a\u4e49 ServiceMonitor \u6216 PodMonitor\u3002\u4e0b\u9762\u63d0\u4f9b\u4e86\u4e00\u4e2a ServiceMonitor \u793a\u4f8b\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u4e2d\uff0c\u6253\u5f00 kubectl shell\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c ServiceMonitor \u6216 PodMonitor \u6587\u4ef6\u5b58\u50a8\u5728\u672c\u5730\u96c6\u7fa4\u4e2d\uff0c\u8bf7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl create -f <name of service/pod monitor file>.yaml"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c ServiceMonitor \u6216 PodMonitor \u6ca1\u6709\u5b58\u50a8\u5728\u672c\u5730\uff0c\u8bf7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"cat<< EOF | kubectl apply -f -"),"\uff0c\u5c06\u6587\u4ef6\u5185\u5bb9\u7c98\u8d34\u5230\u7ec8\u7aef\uff0c\u7136\u540e\u8fd0\u884c \u200b\u200b",(0,r.kt)("inlineCode",{parentName:"li"},"EOF")," \u6765\u5b8c\u6210\u547d\u4ee4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl label namespace <your namespace> istio-injection=enabled")," \u6765\u542f\u7528 Envoy sidecar \u6ce8\u5165\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aPrometheus \u53ef\u4ee5\u6293\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"<your namespace>"),"\u3002"),(0,r.kt)("figcaption",null,"Istio \u4ee3\u7406\u7684 ServiceMonitor \u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: envoy-stats-monitor\n  namespace: istio-system\n  labels:\n    monitoring: istio-proxies\nspec:\n  selector:\n    matchExpressions:\n    - {key: istio-prometheus-ignore, operator: DoesNotExist}\n  namespaceSelector:\n    any: true\n  jobLabel: envoy-stats\n  endpoints:\n  - path: /stats/prometheus\n    targetPort: 15090\n    interval: 15s\n    relabelings:\n    - sourceLabels: [__meta_kubernetes_pod_container_port_name]\n      action: keep\n      regex: '.*-envoy-prom'\n    - action: labeldrop\n      regex: \"__meta_kubernetes_pod_label_(.+)\"\n    - sourceLabels: [__meta_kubernetes_namespace]\n      action: replace\n      targetLabel: namespace\n    - sourceLabels: [__meta_kubernetes_pod_name]\n      action: replace\n      targetLabel: pod_name\n")),(0,r.kt)("h3",{id:"\u8de8\u547d\u540d\u7a7a\u95f4\u76d1\u63a7\u5c06-ignorenamespaceselectors-\u8bbe\u7f6e\u4e3a-false"},"\u8de8\u547d\u540d\u7a7a\u95f4\u76d1\u63a7\uff1a\u5c06 ignoreNamespaceSelectors \u8bbe\u7f6e\u4e3a False"),(0,r.kt)("p",null,"\u6b64\u8bbe\u7f6e\u4e3a Prometheus \u63d0\u4f9b\u989d\u5916\u7684\u6293\u53d6\u914d\u7f6e\u6765\u5b9e\u73b0\u8de8\u547d\u540d\u7a7a\u95f4\u76d1\u63a7\u3002"),(0,r.kt)("p",null,"\u53ef\u7528\u6027\u6743\u8861\u6307\u7684\u662f Prometheus \u7684\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalScrapeConfigs")," \u90fd\u7ef4\u62a4\u5728\u4e00\u4e2a Secret \u4e2d\u3002\u5982\u679c\u5728\u5b89\u88c5 Istio \u4e4b\u524d\u5df2\u7ecf\u4f7f\u7528 additionalScrapeConfigs \u90e8\u7f72\u4e86\u76d1\u63a7\uff0c\u5347\u7ea7\u53ef\u80fd\u4f1a\u53d8\u5f97\u56f0\u96be\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u6216\u5347\u7ea7 Monitoring Helm Chart \u65f6\uff0c\u7f16\u8f91 values.yml \u5e76\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus.prometheusSpec.additionalScrapeConfigs")," \u6570\u7ec4\u8bbe\u7f6e\u4e3a\u4e0b\u65b9\u7684",(0,r.kt)("strong",{parentName:"li"},"\u5176\u5b83\u6293\u53d6\u914d\u7f6e"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u5b89\u88c5\u6216\u5347\u7ea7\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aPromethe \u4f1a\u6293\u53d6\u6240\u6709\u5e26\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," \u6807\u7b7e\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("figcaption",null,"\u5176\u5b83\u6293\u53d6\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- job_name: 'istio/envoy-stats'\n  scrape_interval: 15s\n  metrics_path: /stats/prometheus\n  kubernetes_sd_configs:\n    - role: pod\n  relabel_configs:\n    - source_labels: [__meta_kubernetes_pod_container_port_name]\n      action: keep\n      regex: '.*-envoy-prom'\n    - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]\n      action: replace\n      regex: ([^:]+)(?::\\d+)?;(\\d+)\n      replacement: $1:15090\n      target_label: __address__\n    - action: labelmap\n      regex: __meta_kubernetes_pod_label_(.+)\n    - source_labels: [__meta_kubernetes_namespace]\n      action: replace\n      target_label: namespace\n    - source_labels: [__meta_kubernetes_pod_name]\n      action: replace\n      target_label: pod_name\n")))}d.isMDXComponent=!0}}]);
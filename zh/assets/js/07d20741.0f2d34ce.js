"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=m(a),g=r,c=s["".concat(p,".").concat(g)]||s[g]||u[g]||l;return a?n.createElement(c,i(i({ref:t},k),{},{components:a})):n.createElement(c,i({ref:t},k))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},81122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={title:"\u63a5\u6536\u5668\u914d\u7f6e"},p=void 0,m={unversionedId:"reference-guides/monitoring-v2-configuration/receivers",id:"reference-guides/monitoring-v2-configuration/receivers",title:"\u63a5\u6536\u5668\u914d\u7f6e",description:"Alertmanager Config Secret \u5305\u542b Alertmanager \u5b9e\u4f8b\u7684\u914d\u7f6e\uff0c\u8be5\u5b9e\u4f8b\u6839\u636e Prometheus \u53d1\u51fa\u7684\u544a\u8b66\u53d1\u9001\u901a\u77e5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/monitoring-v2-configuration/receivers.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/receivers",permalink:"/zh/reference-guides/monitoring-v2-configuration/receivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/receivers.md",tags:[],version:"current",lastUpdatedAt:1685656966,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u63a5\u6536\u5668\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"Monitoring V2 \u914d\u7f6e",permalink:"/zh/pages-for-subheaders/monitoring-v2-configuration"},next:{title:"\u8def\u7531\u914d\u7f6e",permalink:"/zh/reference-guides/monitoring-v2-configuration/routes"}},k={},u=[{value:"\u5728 Rancher UI \u4e2d\u521b\u5efa\u63a5\u6536\u5668",id:"\u5728-rancher-ui-\u4e2d\u521b\u5efa\u63a5\u6536\u5668",level:2},{value:"\u63a5\u6536\u5668\u914d\u7f6e",id:"\u63a5\u6536\u5668\u914d\u7f6e",level:2},{value:"\u539f\u751f\u548c\u975e\u539f\u751f\u63a5\u6536\u5668",id:"\u539f\u751f\u548c\u975e\u539f\u751f\u63a5\u6536\u5668",level:3},{value:"Slack",id:"slack",level:2},{value:"\u7535\u5b50\u90ae\u4ef6",id:"\u7535\u5b50\u90ae\u4ef6",level:2},{value:"PagerDuty",id:"pagerduty",level:2},{value:"Opsgenie",id:"opsgenie",level:2},{value:"Webhook",id:"webhook",level:2},{value:"\u81ea\u5b9a\u4e49",id:"\u81ea\u5b9a\u4e49",level:2},{value:"Teams",id:"teams",level:2},{value:"\u4e3a Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528 Teams \u63a5\u6536\u5668",id:"\u4e3a-rancher-\u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528-teams-\u63a5\u6536\u5668",level:3},{value:"\u914d\u7f6e Teams \u63a5\u6536\u5668",id:"\u914d\u7f6e-teams-\u63a5\u6536\u5668",level:3},{value:"SMS",id:"sms",level:2},{value:"\u4e3a Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528 SMS \u63a5\u6536\u5668",id:"\u4e3a-rancher-\u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528-sms-\u63a5\u6536\u5668",level:3},{value:"\u914d\u7f6e SMS \u63a5\u6536\u5668",id:"\u914d\u7f6e-sms-\u63a5\u6536\u5668",level:3},{value:"\u914d\u7f6e\u591a\u4e2a\u63a5\u6536\u5668",id:"\u914d\u7f6e\u591a\u4e2a\u63a5\u6536\u5668",level:2},{value:"Alertmanager \u914d\u7f6e\u793a\u4f8b",id:"alertmanager-\u914d\u7f6e\u793a\u4f8b",level:2},{value:"Slack",id:"slack-1",level:3},{value:"PagerDuty",id:"pagerduty-1",level:3},{value:"CIS \u626b\u63cf\u544a\u8b66\u7684\u793a\u4f8b\u8def\u7531\u914d\u7f6e",id:"cis-\u626b\u63cf\u544a\u8b66\u7684\u793a\u4f8b\u8def\u7531\u914d\u7f6e",level:2},{value:"Notifiers \u7684\u53ef\u4fe1 CA",id:"notifiers-\u7684\u53ef\u4fe1-ca",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},g=s("Tabs"),c=s("TabItem"),d={toc:u};function N(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#configuration-file"},"Alertmanager Config")," Secret \u5305\u542b Alertmanager \u5b9e\u4f8b\u7684\u914d\u7f6e\uff0c\u8be5\u5b9e\u4f8b\u6839\u636e Prometheus \u53d1\u51fa\u7684\u544a\u8b66\u53d1\u9001\u901a\u77e5\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u672c\u8282\u53c2\u8003\u5047\u8bbe\u4f60\u5df2\u7ecf\u719f\u6089 Monitoring \u7ec4\u4ef6\u7684\u534f\u540c\u5de5\u4f5c\u65b9\u5f0f\u3002\u6709\u5173 Alertmanager \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#3-alertmanager-%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"},"\u672c\u8282"),"\u3002")),(0,n.kt)("h2",{id:"\u5728-rancher-ui-\u4e2d\u521b\u5efa\u63a5\u6536\u5668"},"\u5728 Rancher UI \u4e2d\u521b\u5efa\u63a5\u6536\u5668"),(0,n.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Monitoring \u5e94\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4f7f\u7528\u73b0\u6709\u7684 Alertmanager Secret \u914d\u7f6e Monitoring\uff0c\u5219\u5b83\u5fc5\u987b\u5177\u6709 Rancher \u7684 UI \u652f\u6301\u7684\u683c\u5f0f\u3002\u5426\u5219\uff0c\u4f60\u5c06\u53ea\u80fd\u76f4\u63a5\u4fee\u6539 Alertmanager Secret \u6765\u8fdb\u884c\u66f4\u6539\u3002\u8bf7\u6ce8\u610f\uff0c\u5bf9\u4e8e\u901a\u8fc7\u4f7f\u7528\u8def\u7531\u548c\u63a5\u6536\u5668 UI \u652f\u6301\u7684 Alertmanager \u914d\u7f6e\u7c7b\u578b\uff0c\u6211\u4eec\u4f1a\u7ee7\u7eed\u8fdb\u884c\u5f3a\u5316\u3002\u56e0\u6b64\u5982\u679c\u4f60\u6709\u589e\u5f3a\u529f\u80fd\u7684\u8bf7\u6c42\uff0c\u8bf7",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/issues/new"},"\u63d0\u4ea4 issue"),"\u3002"))),(0,n.kt)("p",null,"\u8981\u5728 Rancher UI \u4e2d\u521b\u5efa\u901a\u77e5\u63a5\u6536\u5668\uff1a"),(0,n.kt)(g,{mdxType:"Tabs"},(0,n.kt)(c,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u521b\u5efa\u63a5\u6536\u5668\u7684\u96c6\u7fa4\u3002\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7 -> \u544a\u8b66 -> AlertManagerConfigs"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u63a5\u6536\u5668"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8f93\u5165\u63a5\u6536\u5668\u7684",(0,n.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e3a\u63a5\u6536\u5668\u914d\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u63d0\u4f9b\u7a0b\u5e8f\u3002\u5982\u9700\u83b7\u53d6\u586b\u5199\u8868\u5355\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605\u4e0b\u65b9\u7684\u914d\u7f6e\u9009\u9879\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"))),(0,n.kt)(c,{value:"Rancher \u7248\u672c\u4f4e\u4e8e v2.6.5",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u521b\u5efa\u63a5\u6536\u5668\u7684\u96c6\u7fa4\u3002\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7"),"\uff0c\u7136\u540e\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u63a5\u6536\u5668"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8f93\u5165\u63a5\u6536\u5668\u7684\u540d\u79f0\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e3a\u63a5\u6536\u5668\u914d\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u63d0\u4f9b\u7a0b\u5e8f\u3002\u5982\u9700\u83b7\u53d6\u586b\u5199\u8868\u5355\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605\u4e0b\u65b9\u7684\u914d\u7f6e\u9009\u9879\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u544a\u8b66\u53ef\u4ee5\u5411\u63a5\u6536\u5668\u53d1\u9001\u901a\u77e5\u3002"),(0,n.kt)("h2",{id:"\u63a5\u6536\u5668\u914d\u7f6e"},"\u63a5\u6536\u5668\u914d\u7f6e"),(0,n.kt)("p",null,"\u901a\u77e5\u96c6\u6210\u662f\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"receiver")," \u914d\u7f6e\u7684\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#receiver"},"Prometheus")," \u6587\u6863\u5bf9\u6b64\u8fdb\u884c\u4e86\u8bf4\u660e\u3002"),(0,n.kt)("h3",{id:"\u539f\u751f\u548c\u975e\u539f\u751f\u63a5\u6536\u5668"},"\u539f\u751f\u548c\u975e\u539f\u751f\u63a5\u6536\u5668"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cAlertManager \u63d0\u4f9b\u4e0e\u4e00\u4e9b\u63a5\u6536\u5668\u7684\u539f\u751f\u96c6\u6210\uff0c\u8fd9\u4e9b\u63a5\u6536\u5668\u5728",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#receiver"},"\u672c\u8282"),"\u4e2d\u5217\u51fa\u3002\u6240\u6709\u539f\u751f\u652f\u6301\u7684\u63a5\u6536\u5668\u90fd\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u8fdb\u884c\u914d\u7f6e\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e AlertManager \u4e0d\u63d0\u4f9b\u539f\u751f\u652f\u6301\u7684\u901a\u77e5\u673a\u5236\uff0c\u53ef\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#webhook_config"},"webhook \u63a5\u6536\u5668"),"\u5b9e\u73b0\u96c6\u6210\u3002\u4f60\u53ef\u4ee5\u5728",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/operating/integrations/#alertmanager-webhook-receiver"},"\u6b64\u5904"),"\u627e\u5230\u63d0\u4f9b\u6b64\u7c7b\u96c6\u6210\u7684\u7b2c\u4e09\u65b9\u9a71\u52a8\u7a0b\u5e8f\u5217\u8868\u3002Alerting Drivers \u5e94\u7528\u80fd\u8ba9\u4f60\u8bbf\u95ee\u8fd9\u4e9b\u9a71\u52a8\u7a0b\u5e8f\uff0c\u4ee5\u53ca\u5b83\u4eec\u76f8\u5173\u7684\u96c6\u6210\u3002\u542f\u7528\u540e\uff0c\u4f60\u5c06\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u914d\u7f6e\u975e\u539f\u751f\u7684\u63a5\u6536\u5668\u3002"),(0,n.kt)("p",null,"\u76ee\u524d Rancher Alerting Drivers \u5e94\u7528\u652f\u6301\u8bbf\u95ee\u4ee5\u4e0b\u96c6\u6210\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Microsoft Teams\uff0c\u57fa\u4e8e ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/idealista/prom2teams"},"prom2teams")," \u9a71\u52a8\u7a0b\u5e8f"),(0,n.kt)("li",{parentName:"ul"},"SMS\uff0c\u57fa\u4e8e ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/messagebird/sachet"},"Sachet")," \u9a71\u52a8\u7a0b\u5e8f")),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u53ef\u4ee5\u914d\u7f6e\u4ee5\u4e0b\u7c7b\u578b\u7684\u63a5\u6536\u5668\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#slack"},"Slack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#email"},"\u7535\u5b50\u90ae\u4ef6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#pagerduty"},"PagerDuty")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#opsgenie"},"Opsgenie")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#webhook"},"Webhook")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#custom"},"\u81ea\u5b9a\u4e49")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#teams"},"Teams")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"#sms"},"SMS"))),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 YAML \u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u63a5\u6536\u5668\u9009\u9879\uff0c\u4ece\u800c\u914d\u7f6e\u65e0\u6cd5\u901a\u8fc7 Rancher UI \u8868\u5355\u914d\u7f6e\u7684\u63a5\u6536\u5668\u3002"),(0,n.kt)("h2",{id:"slack"},"Slack"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URL"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u4f60\u7684 Slack webhook URL\u3002\u6709\u5173\u521b\u5efa Slack webhook \u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"td",href:"https://get.slack.help/hc/en-us/articles/115005265063-Incoming-WebHooks-for-Slack"},"Slack \u6587\u6863"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u9891\u9053"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u8981\u53d1\u9001\u544a\u8b66\u901a\u77e5\u7684\u9891\u9053\u540d\u79f0\u3002\u683c\u5f0f\uff1a",(0,n.kt)("inlineCode",{parentName:"td"},"#<channelname>"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406 URL"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"webhook \u901a\u77e5\u7684\u4ee3\u7406\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5df2\u89e3\u51b3\u544a\u8b66"),(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u544a\u8b66\u5df2\u89e3\u51b3\uff08\u4f8b\u5982 ","[\u5df2\u89e3\u51b3]"," CPU \u4f7f\u7528\u7387\u8fc7\u9ad8\u95ee\u9898\uff09\uff0c\u662f\u5426\u53d1\u9001\u540e\u7eed\u901a\u77e5\u3002")))),(0,n.kt)("h2",{id:"\u7535\u5b50\u90ae\u4ef6"},"\u7535\u5b50\u90ae\u4ef6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6536\u4ef6\u4eba\u5730\u5740"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u901a\u77e5\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5df2\u89e3\u51b3\u544a\u8b66"),(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u544a\u8b66\u5df2\u89e3\u51b3\uff08\u4f8b\u5982 ","[\u5df2\u89e3\u51b3]"," CPU \u4f7f\u7528\u7387\u8fc7\u9ad8\u95ee\u9898\uff09\uff0c\u662f\u5426\u53d1\u9001\u540e\u7eed\u901a\u77e5\u3002")))),(0,n.kt)("p",null,"SMTP \u9009\u9879\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u4ef6\u4eba"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684 SMTP \u90ae\u4ef6\u670d\u52a1\u5668\u4e0a\u53ef\u7528\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u7528\u4e8e\u53d1\u9001\u901a\u77e5\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e3b\u673a"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"SMTP \u670d\u52a1\u5668\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\u3002\u793a\u4f8b\uff1a",(0,n.kt)("inlineCode",{parentName:"td"},"smtp.email.com"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 TLS"),(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 TLS \u8fdb\u884c\u52a0\u5bc6\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\uff0c\u7528\u4e8e\u901a\u8fc7 SMTP \u670d\u52a1\u5668\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801\uff0c\u7528\u4e8e\u901a\u8fc7 SMTP \u670d\u52a1\u5668\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002")))),(0,n.kt)("h2",{id:"pagerduty"},"PagerDuty"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u96c6\u6210\u7c7b\u578b"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Events API v2")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"td"},"Prometheus"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u96c6\u6210\u5bc6\u94a5"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6709\u5173\u83b7\u53d6\u96c6\u6210\u5bc6\u94a5\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"td",href:"https://www.pagerduty.com/docs/guides/prometheus-integration-guide/"},"PagerDuty \u6587\u6863"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406 URL"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"PagerDuty \u901a\u77e5\u7684\u4ee3\u7406\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5df2\u89e3\u51b3\u544a\u8b66"),(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u544a\u8b66\u5df2\u89e3\u51b3\uff08\u4f8b\u5982 ","[\u5df2\u89e3\u51b3]"," CPU \u4f7f\u7528\u7387\u8fc7\u9ad8\u95ee\u9898\uff09\uff0c\u662f\u5426\u53d1\u9001\u540e\u7eed\u901a\u77e5\u3002")))),(0,n.kt)("h2",{id:"opsgenie"},"Opsgenie"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"API \u5bc6\u94a5"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6709\u5173\u83b7\u53d6 API \u5bc6\u94a5\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"td",href:"https://docs.opsgenie.com/docs/api-key-management"},"Opsgenie \u6587\u6863"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406 URL"),(0,n.kt)("td",{parentName:"tr",align:null},"Opsgenie \u901a\u77e5\u7684\u4ee3\u7406\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5df2\u89e3\u51b3\u544a\u8b66"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u544a\u8b66\u5df2\u89e3\u51b3\uff08\u4f8b\u5982 ","[\u5df2\u89e3\u51b3]"," CPU \u4f7f\u7528\u7387\u8fc7\u9ad8\u95ee\u9898\uff09\uff0c\u662f\u5426\u53d1\u9001\u540e\u7eed\u901a\u77e5\u3002")))),(0,n.kt)("p",null,"Opsgenie \u54cd\u5e94\u8005\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8ba1\u5212\u7a0b\u5e8f\u3001\u56e2\u961f\u3001\u7528\u6237\u6216\u5347\u7ea7\u3002\u6709\u5173\u544a\u8b66\u54cd\u5e94\u8005\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"td",href:"https://docs.opsgenie.com/docs/alert-recipients-and-teams"},"Opsgenie \u6587\u6863"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u81f3"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Opsgenie \u6536\u4ef6\u4eba\u7684 ID\u3001\u540d\u79f0\u6216\u7528\u6237\u540d\u3002")))),(0,n.kt)("h2",{id:"webhook"},"Webhook"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URL"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f60\u6240\u9009\u7684\u5e94\u7528\u7684 Webhook URL\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406 URL"),(0,n.kt)("td",{parentName:"tr",align:null},"webhook \u901a\u77e5\u7684\u4ee3\u7406\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5df2\u89e3\u51b3\u544a\u8b66"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u544a\u8b66\u5df2\u89e3\u51b3\uff08\u4f8b\u5982 ","[\u5df2\u89e3\u51b3]"," CPU \u4f7f\u7528\u7387\u8fc7\u9ad8\u95ee\u9898\uff09\uff0c\u662f\u5426\u53d1\u9001\u540e\u7eed\u901a\u77e5\u3002")))),(0,n.kt)("h2",{id:"\u81ea\u5b9a\u4e49"},"\u81ea\u5b9a\u4e49"),(0,n.kt)("p",null,"\u6b64\u5904\u63d0\u4f9b\u7684 YAML \u5c06\u76f4\u63a5\u9644\u52a0\u5230 Alertmanager Config Secret \u7684\u63a5\u6536\u5668\u4e2d\u3002"),(0,n.kt)("h2",{id:"teams"},"Teams"),(0,n.kt)("h3",{id:"\u4e3a-rancher-\u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528-teams-\u63a5\u6536\u5668"},"\u4e3a Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528 Teams \u63a5\u6536\u5668"),(0,n.kt)("p",null,"Teams \u63a5\u6536\u5668\u4e0d\u662f\u539f\u751f\u63a5\u6536\u5668\uff0c\u56e0\u6b64\u9700\u8981\u542f\u7528\u540e\u624d\u80fd\u4f7f\u7528\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8f6c\u5230\u5e94\u7528\u9875\u9762\uff0c\u5b89\u88c5 rancher-alerting-drivers \u5e94\u7528\uff0c\u7136\u540e\u9009\u62e9 Teams \u9009\u9879\uff0c\u4ece\u800c\u4e3a Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528 Teams \u63a5\u6536\u5668\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728 Rancher UI \u4e2d\uff0c\u8f6c\u5230\u8981\u5b89\u88c5 rancher-alerting-drivers \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Apps"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Alerting Drivers")," \u5e94\u7528\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Helm \u90e8\u7f72\u9009\u9879"),"\u9009\u9879\u5361\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Teams")," \u5e76\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8bb0\u4e0b\u4f7f\u7528\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u540e\u7eed\u6b65\u9aa4\u4e2d\u5c06\u9700\u8981\u8be5\u547d\u540d\u7a7a\u95f4\u3002")),(0,n.kt)("h3",{id:"\u914d\u7f6e-teams-\u63a5\u6536\u5668"},"\u914d\u7f6e Teams \u63a5\u6536\u5668"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u66f4\u65b0 ConfigMap \u6765\u914d\u7f6e Teams \u63a5\u6536\u5668\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f\u6700\u5c0f\u7684 Teams \u63a5\u6536\u5668\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"[Microsoft Teams]\nteams-instance-1: https://your-teams-webhook-url\n")),(0,n.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u6309\u7167",(0,n.kt)("a",{parentName:"p",href:"#%E5%9C%A8-rancher-ui-%E4%B8%AD%E5%88%9B%E5%BB%BA%E6%8E%A5%E6%94%B6%E5%99%A8"},"\u672c\u8282"),"\u4e2d\u7684\u6b65\u9aa4\u6dfb\u52a0\u63a5\u6536\u5668\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u793a\u4f8b\u4f5c\u4e3a URL\uff0c\u5176\u4e2d\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"li"},"ns-1")," \u66ff\u6362\u4e3a\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")," \u5e94\u7528\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"url: http://rancher-alerting-drivers-prom2teams.ns-1.svc:8089/v2/teams-instance-1\n")),(0,n.kt)("h2",{id:"sms"},"SMS"),(0,n.kt)("h3",{id:"\u4e3a-rancher-\u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528-sms-\u63a5\u6536\u5668"},"\u4e3a Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528 SMS \u63a5\u6536\u5668"),(0,n.kt)("p",null,"SMS \u63a5\u6536\u5668\u4e0d\u662f\u539f\u751f\u63a5\u6536\u5668\uff0c\u56e0\u6b64\u9700\u8981\u542f\u7528\u540e\u624d\u80fd\u4f7f\u7528\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8f6c\u5230\u5e94\u7528\u9875\u9762\uff0c\u5b89\u88c5 rancher-alerting-drivers \u5e94\u7528\uff0c\u7136\u540e\u9009\u62e9 SMS \u9009\u9879\uff0c\u4ece\u800c\u4e3a Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528 SMS \u63a5\u6536\u5668\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")," \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Alerting Drivers")," \u5e94\u7528\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Helm \u90e8\u7f72\u9009\u9879"),"\u9009\u9879\u5361\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"SMS")," \u5e76\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8bb0\u4e0b\u4f7f\u7528\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u540e\u7eed\u6b65\u9aa4\u4e2d\u5c06\u9700\u8981\u8be5\u547d\u540d\u7a7a\u95f4\u3002")),(0,n.kt)("h3",{id:"\u914d\u7f6e-sms-\u63a5\u6536\u5668"},"\u914d\u7f6e SMS \u63a5\u6536\u5668"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u66f4\u65b0 ConfigMap \u6765\u914d\u7f6e SMS \u63a5\u6536\u5668\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f\u6700\u5c0f\u7684 SMS \u63a5\u6536\u5668\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"providers:\n  telegram:\n    token: 'your-token-from-telegram'\n\nreceivers:\n- name: 'telegram-receiver-1'\n  provider: 'telegram'\n  to:\n    - '123456789'\n")),(0,n.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u6309\u7167",(0,n.kt)("a",{parentName:"p",href:"#%E5%9C%A8-rancher-ui-%E4%B8%AD%E5%88%9B%E5%BB%BA%E6%8E%A5%E6%94%B6%E5%99%A8"},"\u672c\u8282"),"\u4e2d\u7684\u6b65\u9aa4\u6dfb\u52a0\u63a5\u6536\u5668\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u793a\u4f8b\u4f5c\u4e3a\u540d\u79f0\u548c URL\uff0c\u5176\u4e2d\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5206\u914d\u7ed9\u63a5\u6536\u5668\u7684\u540d\u79f0\uff08\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"telegram-receiver-1"),"\uff09\u5fc5\u987b\u4e0e ConfigMap \u4e2d ",(0,n.kt)("inlineCode",{parentName:"li"},"receivers.name")," \u5b57\u6bb5\u4e2d\u7684\u540d\u79f0\uff08\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"telegram-receiver-1"),"\uff09\u5339\u914d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c06 URL \u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"ns-1")," \u66ff\u6362\u4e3a\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher-alerting-drivers")," \u5e94\u7528\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"name: telegram-receiver-1\nurl http://rancher-alerting-drivers-sachet.ns-1.svc:9876/alert\n")),(0,n.kt)("h2",{id:"\u914d\u7f6e\u591a\u4e2a\u63a5\u6536\u5668"},"\u914d\u7f6e\u591a\u4e2a\u63a5\u6536\u5668"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u7f16\u8f91 Rancher UI \u4e2d\u7684\u8868\u5355\u6765\u8bbe\u7f6e\u4e00\u4e2a\u63a5\u6536\u5668\u8d44\u6e90\uff0c\u5176\u4e2d\u5305\u542b Alertmanager \u5c06\u544a\u8b66\u53d1\u9001\u5230\u4f60\u7684\u901a\u77e5\u7cfb\u7edf\u6240\u9700\u7684\u6240\u6709\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5411\u591a\u4e2a\u901a\u77e5\u7cfb\u7edf\u53d1\u9001\u544a\u8b66\u3002\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528\u81ea\u5b9a\u4e49 YAML \u6765\u914d\u7f6e\u63a5\u6536\u5668\u3002\u5982\u679c\u4f60\u9700\u8981\u8ba9\u4e24\u4e2a\u7cfb\u7edf\u63a5\u6536\u76f8\u540c\u7684\u6d88\u606f\uff0c\u5219\u53ef\u4ee5\u4e3a\u591a\u4e2a\u901a\u77e5\u7cfb\u7edf\u6dfb\u52a0\u914d\u7f6e\u3002"),(0,n.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u8def\u7531\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"continue")," \u9009\u9879\u6765\u8bbe\u7f6e\u591a\u4e2a\u63a5\u6536\u5668\u3002\u8fd9\u6837\uff0c\u53d1\u9001\u5230\u63a5\u6536\u5668\u7684\u544a\u8b66\u4f1a\u5728\u8def\u7531\u6811\uff08\u53ef\u80fd\u5305\u542b\u53e6\u4e00\u4e2a\u63a5\u6536\u5668\uff09\u7684\u4e0b\u4e00\u7ea7\u8fdb\u884c\u8bc4\u4f30\u3002"),(0,n.kt)("h2",{id:"alertmanager-\u914d\u7f6e\u793a\u4f8b"},"Alertmanager \u914d\u7f6e\u793a\u4f8b"),(0,n.kt)("h3",{id:"slack-1"},"Slack"),(0,n.kt)("p",null,"\u8981\u901a\u8fc7 Slack \u8bbe\u7f6e\u901a\u77e5\uff0c\u4f60\u53ef\u4ee5\u5c06\u4ee5\u4e0b Alertmanager Config YAML \u653e\u5165 Alertmanager Config Secret \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"alertmanager.yaml")," \u952e\u4e2d\uff0c\u4f60\u9700\u8981\u66f4\u65b0 ",(0,n.kt)("inlineCode",{parentName:"p"},"api_url")," \u6765\u4f7f\u7528\u6765\u81ea Slack \u7684 Webhook URL\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"route:\n  group_by: ['job']\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 3h\n  receiver: 'slack-notifications'\nreceivers:\n- name: 'slack-notifications'\n  slack_configs:\n  - send_resolved: true\n    text: '{{ template \"slack.rancher.text\" . }}'\n    api_url: <user-provided slack webhook url here>\ntemplates:\n- /etc/alertmanager/config/*.tmpl\n")),(0,n.kt)("h3",{id:"pagerduty-1"},"PagerDuty"),(0,n.kt)("p",null,"\u8981\u901a\u8fc7 PagerDuty \u8bbe\u7f6e\u901a\u77e5\uff0c\u8bf7\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://www.pagerduty.com/docs/guides/prometheus-integration-guide/"},"PagerDuty \u6587\u6863")," \u4e2d\u7684\u4ee5\u4e0b\u793a\u4f8b\u4f5c\u4e3a\u6307\u5bfc\u3002\u6b64\u793a\u4f8b\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u8def\u7531\uff0c\u8be5\u8def\u7531\u6355\u83b7\u6570\u636e\u5e93\u670d\u52a1\u7684\u544a\u8b66\uff0c\u5e76\u5c06\u544a\u8b66\u53d1\u9001\u5230\u94fe\u63a5\u5230\u670d\u52a1\u7684\u63a5\u6536\u5668\uff0c\u8be5\u670d\u52a1\u5c06\u76f4\u63a5\u901a\u77e5 PagerDuty \u4e2d\u7684 DBA\uff0c\u800c\u5176\u4ed6\u544a\u8b66\u5c06\u88ab\u5b9a\u5411\u5230\u5177\u6709\u4e0d\u540c PagerDuty \u96c6\u6210\u5bc6\u94a5\u7684\u9ed8\u8ba4\u63a5\u6536\u5668\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u4ee5\u4e0b Alertmanager Config YAML \u653e\u5165 Alertmanager Config Secret \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"alertmanager.yaml")," \u952e\u4e2d\u3002\u4f60\u9700\u8981\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"service_key"),' \u66f4\u65b0\u4e3a\u4f7f\u7528\u4f60\u7684 PagerDuty \u96c6\u6210\u5bc6\u94a5\uff0c\u53ef\u4ee5\u6839\u636e PagerDuty \u6587\u6863\u7684 "Integrating with Global Event Routing" \u627e\u5230\u8be5\u5bc6\u94a5\u3002\u6709\u5173\u914d\u7f6e\u9009\u9879\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ',(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#pagerduty_config"},"Prometheus \u6587\u6863"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"route:\n group_by: [cluster]\n receiver: 'pagerduty-notifications'\n group_interval: 5m\n routes:\n  - match:\n      service: database\n    receiver: 'database-notifcations'\n\nreceivers:\n- name: 'pagerduty-notifications'\n  pagerduty_configs:\n  - service_key: 'primary-integration-key'\n\n- name: 'database-notifcations'\n  pagerduty_configs:\n  - service_key: 'database-integration-key'\n")),(0,n.kt)("h2",{id:"cis-\u626b\u63cf\u544a\u8b66\u7684\u793a\u4f8b\u8def\u7531\u914d\u7f6e"},"CIS \u626b\u63cf\u544a\u8b66\u7684\u793a\u4f8b\u8def\u7531\u914d\u7f6e"),(0,n.kt)("p",null,"\u5728\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," \u544a\u8b66\u914d\u7f6e\u8def\u7531\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u952e\u503c\u5bf9 ",(0,n.kt)("inlineCode",{parentName:"p"},"job:rancher-cis-scan")," \u6765\u6307\u5b9a\u5339\u914d\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u8def\u7531\u914d\u7f6e\u793a\u4f8b\u53ef\u4ee5\u4e0e\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"test-cis")," \u7684 Slack \u63a5\u6536\u5668\u4e00\u8d77\u4f7f\u7528\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  receiver: test-cis\n  group_by:\n#    - string\n  group_wait: 30s\n  group_interval: 30s\n  repeat_interval: 30s\n  match:\n    job: rancher-cis-scan\n#    key: string\n  match_re:\n    {}\n#    key: string\n")),(0,n.kt)("p",null,"\u6709\u5173\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," \u542f\u7528\u544a\u8b66\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark"},"\u672c\u8282"),"\u3002"),(0,n.kt)("h2",{id:"notifiers-\u7684\u53ef\u4fe1-ca"},"Notifiers \u7684\u53ef\u4fe1 CA"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5c06\u53d7\u4fe1\u4efb\u7684 CA \u6dfb\u52a0\u5230 Notifiers\uff0c\u8bf7\u6309\u7167",(0,n.kt)("a",{parentName:"p",href:"/zh/reference-guides/monitoring-v2-configuration/helm-chart-options#notifiers-%E7%9A%84%E5%8F%AF%E4%BF%A1-ca"},"\u672c\u8282"),"\u4e2d\u7684\u6b65\u9aa4\u64cd\u4f5c\u3002"))}N.isMDXComponent=!0}}]);
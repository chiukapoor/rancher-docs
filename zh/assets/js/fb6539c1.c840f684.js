"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),g=a,k=f["".concat(s,".").concat(g)]||f[g]||c[g]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Kafka"},s=void 0,p={unversionedId:"explanations/integrations-in-rancher/cluster-logging/kafka",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/kafka",title:"Kafka",description:"If your organization uses Kafka, you can configure Rancher to send it Kubernetes logs.  Afterwards, you can log into your Kafka server to view logs.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/kafka.md",sourceDirName:"explanations/integrations-in-rancher/cluster-logging",slug:"/explanations/integrations-in-rancher/cluster-logging/kafka",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/kafka",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/kafka.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Kafka"},sidebar:"tutorialSidebar",previous:{title:"Fluentd",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/fluentd"},next:{title:"Splunk",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/splunk"}},u={},c=[{value:"Kafka Server Configuration",id:"kafka-server-configuration",level:2},{value:"<strong>Broker</strong> Endpoint Type",id:"broker-endpoint-type",level:2},{value:"SSL Configuration",id:"ssl-configuration",level:3},{value:"SASL configuration",id:"sasl-configuration",level:3}],f={toc:c};function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If your organization uses ",(0,n.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Kafka"),", you can configure Rancher to send it Kubernetes logs.  Afterwards, you can log into your Kafka server to view logs."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisite:")," You must have a Kafka server configured.")),(0,n.kt)("h2",{id:"kafka-server-configuration"},"Kafka Server Configuration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the type of ",(0,n.kt)("strong",{parentName:"li"},"Endpoint")," your Kafka server is using:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Zookeeper"),": Enter the IP address and port. By default, Zookeeper uses port ",(0,n.kt)("inlineCode",{parentName:"li"},"2181"),". Please note that a Zookeeper endpoint cannot enable TLS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Broker"),": Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Endpoint"),". For each Kafka broker, enter the IP address and port. By default, Kafka brokers use port ",(0,n.kt)("inlineCode",{parentName:"li"},"9092"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Topic")," field, enter the name of a Kafka ",(0,n.kt)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#basic_ops_add_topic"},"topic")," that your Kubernetes cluster submits logs to.")),(0,n.kt)("h2",{id:"broker-endpoint-type"},(0,n.kt)("strong",{parentName:"h2"},"Broker")," Endpoint Type"),(0,n.kt)("h3",{id:"ssl-configuration"},"SSL Configuration"),(0,n.kt)("p",null,"If your Kafka cluster is using SSL for the ",(0,n.kt)("strong",{parentName:"p"},"Broker"),", you need to complete the ",(0,n.kt)("strong",{parentName:"p"},"SSL Configuration")," form."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Provide the ",(0,n.kt)("strong",{parentName:"p"},"Client Private Key")," and ",(0,n.kt)("strong",{parentName:"p"},"Client Certificate"),". You can either copy and paste them or upload them by using the ",(0,n.kt)("strong",{parentName:"p"},"Read from a file")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Provide the ",(0,n.kt)("strong",{parentName:"p"},"CA Certificate PEM"),". You can either copy and paste the certificate or upload it using the ",(0,n.kt)("strong",{parentName:"p"},"Read from a file")," button."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Kafka does not support self-signed certificates when client authentication is enabled.")),(0,n.kt)("h3",{id:"sasl-configuration"},"SASL configuration"),(0,n.kt)("p",null,"If your Kafka cluster is using ",(0,n.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#security_sasl"},"SASL authentication")," for the Broker, you need to complete the ",(0,n.kt)("strong",{parentName:"p"},"SASL Configuration")," form."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the SASL ",(0,n.kt)("strong",{parentName:"p"},"Username")," and ",(0,n.kt)("strong",{parentName:"p"},"Password"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"SASL Type")," that your Kafka cluster is using."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If your Kafka is using ",(0,n.kt)("strong",{parentName:"p"},"Plain"),", please ensure your Kafka cluster is using SSL.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If your Kafka is using ",(0,n.kt)("strong",{parentName:"p"},"Scram"),", you need to select which ",(0,n.kt)("strong",{parentName:"p"},"Scram Mechanism")," Kafka is using."))))))}g.isMDXComponent=!0}}]);
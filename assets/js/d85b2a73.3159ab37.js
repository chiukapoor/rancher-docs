"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Elasticsearch"},c=void 0,s={unversionedId:"explanations/integrations-in-rancher/cluster-logging/elasticsearch",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch",title:"Elasticsearch",description:"If your organization uses Elasticsearch, either on premise or in the cloud, you can configure Rancher to send it Kubernetes logs. Afterwards, you can log into your Elasticsearch deployment to view logs.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch.md",sourceDirName:"explanations/integrations-in-rancher/cluster-logging",slug:"/explanations/integrations-in-rancher/cluster-logging/elasticsearch",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Elasticsearch"},sidebar:"tutorialSidebar",previous:{title:"Cluster Logging",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-logging"},next:{title:"Fluentd",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/fluentd"}},p={},u=[{value:"Elasticsearch Deployment Configuration",id:"elasticsearch-deployment-configuration",level:2},{value:"SSL Configuration",id:"ssl-configuration",level:2}],f={toc:u};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If your organization uses ",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/"},"Elasticsearch"),", either on premise or in the cloud, you can configure Rancher to send it Kubernetes logs. Afterwards, you can log into your Elasticsearch deployment to view logs."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisites:")," Configure an ",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/cloud/saas-release/ec-create-deployment.html"},"Elasticsearch deployment"),".")),(0,n.kt)("h2",{id:"elasticsearch-deployment-configuration"},"Elasticsearch Deployment Configuration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Endpoint")," field, enter the IP address and port of your Elasticsearch instance. You can find this information from the dashboard of your Elasticsearch deployment."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Elasticsearch usually uses port ",(0,n.kt)("inlineCode",{parentName:"li"},"9200")," for HTTP and ",(0,n.kt)("inlineCode",{parentName:"li"},"9243")," for HTTPS."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you are using ",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/x-pack/current/xpack-introduction.html"},"X-Pack Security"),", enter your Elasticsearch ",(0,n.kt)("strong",{parentName:"p"},"Username")," and ",(0,n.kt)("strong",{parentName:"p"},"Password")," for authentication.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter an ",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/kibana/current/index-patterns.html"},"Index Pattern"),"."))),(0,n.kt)("h2",{id:"ssl-configuration"},"SSL Configuration"),(0,n.kt)("p",null,"If your instance of Elasticsearch uses SSL, your ",(0,n.kt)("strong",{parentName:"p"},"Endpoint")," will need to begin with ",(0,n.kt)("inlineCode",{parentName:"p"},"https://"),". With the correct endpoint, the ",(0,n.kt)("strong",{parentName:"p"},"SSL Configuration")," form is enabled and ready to be completed."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Provide the ",(0,n.kt)("strong",{parentName:"p"},"Client Private Key")," and ",(0,n.kt)("strong",{parentName:"p"},"Client Certificate"),". You can either copy and paste them or upload them by using the ",(0,n.kt)("strong",{parentName:"p"},"Read from a file")," button."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can use either a self-signed certificate or one provided by a certificate authority.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can generate a self-signed certificate using an openssl command. For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your ",(0,n.kt)("strong",{parentName:"p"},"Client Key Password"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your ",(0,n.kt)("strong",{parentName:"p"},"SSL Version"),". The default version is ",(0,n.kt)("inlineCode",{parentName:"p"},"TLSv1_2"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select whether or not you want to verify your SSL."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you are using a self-signed certificate, select ",(0,n.kt)("strong",{parentName:"li"},"Enabled - Input trusted server certificate"),", provide the ",(0,n.kt)("strong",{parentName:"li"},"CA Certificate PEM"),". You can copy and paste the certificate or upload it using the ",(0,n.kt)("strong",{parentName:"li"},"Read from a file")," button."),(0,n.kt)("li",{parentName:"ul"},"If you are using a certificate from a certificate authority, select ",(0,n.kt)("strong",{parentName:"li"},"Enabled - Input trusted server certificate"),". You do not need to provide a ",(0,n.kt)("strong",{parentName:"li"},"CA Certificate PEM"),".")))))}m.isMDXComponent=!0}}]);
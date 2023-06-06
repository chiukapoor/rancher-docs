"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76724],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>f});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={title:"7. Generate and View Traffic"},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",title:"7. Generate and View Traffic",description:"This section describes how to view the traffic that is being managed by Istio.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"7. Generate and View Traffic"},sidebar:"tutorialSidebar",previous:{title:"6. Set up Istio's Components for Traffic Management",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},next:{title:"CIS Scan Guides",permalink:"/v2.0-v2.4/pages-for-subheaders/cis-scan-guides"}},l={},f=[{value:"The Kiali Traffic Graph",id:"the-kiali-traffic-graph",level:2},{value:"Viewing Traffic Metrics",id:"viewing-traffic-metrics",level:2}],p={toc:f};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes how to view the traffic that is being managed by Istio."),(0,n.kt)("h2",{id:"the-kiali-traffic-graph"},"The Kiali Traffic Graph"),(0,n.kt)("p",null,"Rancher integrates a Kiali graph into the Rancher UI. The Kiali graph provides a powerful way to visualize the topology of your Istio service mesh. It shows you which services communicate with each other."),(0,n.kt)("p",null,"To see the traffic graph,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the project view in Rancher, click ",(0,n.kt)("strong",{parentName:"li"},"Resources > Istio.")),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Traffic Graph")," tab. This tab has the Kiali network visualization integrated into the UI.")),(0,n.kt)("p",null,"If you refresh the URL to the BookInfo app several times, you should be able to see green arrows on the Kiali graph showing traffic to ",(0,n.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"v3")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"reviews")," service. The control panel on the right side of the graph lets you configure details including how many minutes of the most recent traffic should be shown on the graph."),(0,n.kt)("p",null,"For additional tools and visualizations, you can go to each UI for Kiali, Jaeger, Grafana, and Prometheus by clicking their icons in the top right corner of the page."),(0,n.kt)("h2",{id:"viewing-traffic-metrics"},"Viewing Traffic Metrics"),(0,n.kt)("p",null,"Istio\u2019s monitoring features provide visibility into the performance of all your services."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the project view in Rancher, click ",(0,n.kt)("strong",{parentName:"li"},"Resources > Istio.")),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Traffic Metrics")," tab. After traffic is generated in your cluster, you should be able to see metrics for ",(0,n.kt)("strong",{parentName:"li"},"Success Rate, Request Volume, 4xx Response Count, Project 5xx Response Count")," and ",(0,n.kt)("strong",{parentName:"li"},"Request Duration."))))}d.isMDXComponent=!0}}]);
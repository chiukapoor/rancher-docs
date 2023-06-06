"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[85499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"Configuring Persistent Data for Pipeline Components"},l=void 0,p={unversionedId:"reference-guides/pipelines/configure-persistent-data",id:"version-2.6/reference-guides/pipelines/configure-persistent-data",title:"Configuring Persistent Data for Pipeline Components",description:"The pipelines' internal Docker registry and the Minio workloads use ephemeral volumes by default. This default storage works out-of-the-box and makes testing easy, but you lose the build images and build logs if the node running the Docker Registry or Minio fails. In most cases this is fine. If you want build images and logs to survive node failures, you can configure the Docker Registry and Minio to use persistent volumes.",source:"@site/versioned_docs/version-2.6/reference-guides/pipelines/configure-persistent-data.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/configure-persistent-data",permalink:"/v2.6/reference-guides/pipelines/configure-persistent-data",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/pipelines/configure-persistent-data.md",tags:[],version:"2.6",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Configuring Persistent Data for Pipeline Components"},sidebar:"tutorialSidebar",previous:{title:"Pipeline Configuration Reference",permalink:"/v2.6/reference-guides/pipelines/pipeline-configuration"},next:{title:"Example Repositories",permalink:"/v2.6/reference-guides/pipelines/example-repositories"}},m={},c=[{value:"A. Configuring Persistent Data for Docker Registry",id:"a-configuring-persistent-data-for-docker-registry",level:3},{value:"B. Configuring Persistent Data for Minio",id:"b-configuring-persistent-data-for-minio",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=u("Tabs"),k=u("TabItem"),g={toc:c};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The pipelines' internal Docker registry and the Minio workloads use ephemeral volumes by default. This default storage works out-of-the-box and makes testing easy, but you lose the build images and build logs if the node running the Docker Registry or Minio fails. In most cases this is fine. If you want build images and logs to survive node failures, you can configure the Docker Registry and Minio to use persistent volumes."),(0,n.kt)("p",null,"This section assumes that you understand how persistent storage works in Kubernetes. For more information, refer to the section on ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"how storage works.")),(0,n.kt)("admonition",{title:"Prerequisites for both parts A and B:",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/create-kubernetes-persistent-storage"},"Persistent volumes")," must be available for the cluster.")),(0,n.kt)("h3",{id:"a-configuring-persistent-data-for-docker-registry"},"A. Configuring Persistent Data for Docker Registry"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the cluster that you created and click ",(0,n.kt)("strong",{parentName:"p"},"Explore"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Workload"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-registry")," workload and select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Edit"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scroll to the ",(0,n.kt)("strong",{parentName:"p"},"Volumes")," section and expand it. Make one of the following selections from the ",(0,n.kt)("strong",{parentName:"p"},"Add Volume")," menu, which is near the bottom of the section:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add Volume > Add a new persistent volume (claim)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add Volume > Use an existing persistent volume (claim)")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the form that displays to choose a persistent volume for the internal Docker registry."),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(k,{value:"Add a new persistent volume",mdxType:"TabItem"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"Name")," for the volume claim."),(0,n.kt)("li",{parentName:"ol"},"Select a volume claim ",(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you select ",(0,n.kt)("strong",{parentName:"li"},"Use a Storage Class to provision a new persistent volume"),", select a storage class and enter a ",(0,n.kt)("strong",{parentName:"li"},"Capacity"),"."),(0,n.kt)("li",{parentName:"ul"},"If you select ",(0,n.kt)("strong",{parentName:"li"},"Use an existing persistent volume"),", choose a ",(0,n.kt)("strong",{parentName:"li"},"Persistent Volume")," from the drop-down."))),(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Customize")," section, choose the read/write access for the volume."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Define"),"."))),(0,n.kt)(k,{value:"Use an existing persistent volume",mdxType:"TabItem"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"Name")," for the volume claim."),(0,n.kt)("li",{parentName:"ol"},"Choose a ",(0,n.kt)("strong",{parentName:"li"},"Persistent Volume Claim")," from the dropdown."),(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Customize")," section, choose the read/write access for the volume."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Define"),"."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Mount Point")," field, enter ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/registry"),", which is the data storage path inside the Docker registry container.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Upgrade"),"."))),(0,n.kt)("h3",{id:"b-configuring-persistent-data-for-minio"},"B. Configuring Persistent Data for Minio"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the cluster that you created and click ",(0,n.kt)("strong",{parentName:"p"},"Explore"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Workload"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"minio")," workload and select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Edit"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scroll to the ",(0,n.kt)("strong",{parentName:"p"},"Volumes")," section and expand it. Make one of the following selections from the ",(0,n.kt)("strong",{parentName:"p"},"Add Volume")," menu, which is near the bottom of the section:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add Volume > Add a new persistent volume (claim)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add Volume > Use an existing persistent volume (claim)")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the form that displays to choose a persistent volume for the internal Docker registry."),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(k,{value:"Add a new persistent volume",mdxType:"TabItem"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"Name")," for the volume claim."),(0,n.kt)("li",{parentName:"ol"},"Select a volume claim ",(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you select ",(0,n.kt)("strong",{parentName:"li"},"Use a Storage Class to provision a new persistent volume"),", select a storage class and enter a ",(0,n.kt)("strong",{parentName:"li"},"Capacity"),"."),(0,n.kt)("li",{parentName:"ul"},"If you select ",(0,n.kt)("strong",{parentName:"li"},"Use an existing persistent volume"),", choose a ",(0,n.kt)("strong",{parentName:"li"},"Persistent Volume")," from the drop-down."))),(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Customize")," section, choose the read/write access for the volume."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Define"),"."))),(0,n.kt)(k,{value:"Use an existing persistent volume",mdxType:"TabItem"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"Name")," for the volume claim."),(0,n.kt)("li",{parentName:"ol"},"Choose a ",(0,n.kt)("strong",{parentName:"li"},"Persistent Volume Claim")," from the drop-down."),(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Customize")," section, choose the read/write access for the volume."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Define"),"."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Mount Point")," field, enter ",(0,n.kt)("inlineCode",{parentName:"p"},"/data"),", which is the data storage path inside the Minio container.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Upgrade"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Persistent storage is configured for your pipeline components."))}f.isMDXComponent=!0}}]);
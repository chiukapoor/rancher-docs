"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1272],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return r?o.createElement(m,s(s({ref:t},c),{},{components:r})):o.createElement(m,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48556:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"The Horizontal Pod Autoscaler",description:"Learn about the horizontal pod autoscaler (HPA). How to manage HPAs and how to test them with a service deployment",weight:3026},u=void 0,l={unversionedId:"pages-for-subheaders/horizontal-pod-autoscaler",id:"pages-for-subheaders/horizontal-pod-autoscaler",title:"The Horizontal Pod Autoscaler",description:"Learn about the horizontal pod autoscaler (HPA). How to manage HPAs and how to test them with a service deployment",source:"@site/docs/pages-for-subheaders/horizontal-pod-autoscaler.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/horizontal-pod-autoscaler",permalink:"/pages-for-subheaders/horizontal-pod-autoscaler",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/horizontal-pod-autoscaler.md",tags:[],version:"current",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"The Horizontal Pod Autoscaler",description:"Learn about the horizontal pod autoscaler (HPA). How to manage HPAs and how to test them with a service deployment",weight:3026},sidebar:"tutorialSidebar",previous:{title:"Adding a Sidecar",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar"},next:{title:"Background Information on HPAs",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas"}},c={},p=[{value:"Managing HPAs",id:"managing-hpas",level:2},{value:"Testing HPAs with a Service Deployment",id:"testing-hpas-with-a-service-deployment",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaler")," (HPA) is a Kubernetes feature that allows you to configure your cluster to automatically scale the services it's running up or down."),(0,a.kt)("p",null,"Rancher provides some additional features to help manage HPAs, depending on the version of Rancher."),(0,a.kt)("p",null,"You can create, manage, and delete HPAs using the Rancher UI. It only supports HPA in the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoscaling/v2beta2")," API."),(0,a.kt)("h2",{id:"managing-hpas"},"Managing HPAs"),(0,a.kt)("p",null,"The way that you manage HPAs is different based on your version of the Kubernetes API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"For Kubernetes API version autoscaling/V2beta1:")," This version of the Kubernetes API lets you autoscale your pods based on the CPU and memory utilization of your application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"For Kubernetes API Version autoscaling/V2beta2:")," This version of the Kubernetes API lets you autoscale your pods based on CPU and memory utilization, in addition to custom metrics.")),(0,a.kt)("p",null,"You can create, manage, and delete HPAs using the Rancher UI. From the Rancher UI you can configure the HPA to scale based on CPU and memory utilization. For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"},"Managing HPAs with the Rancher UI"),". To scale the HPA based on custom metrics, you still need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),". For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl#configuring-hpa-to-scale-using-custom-metrics-with-prometheus"},"Configuring HPA to Scale Using Custom Metrics with Prometheus"),"."),(0,a.kt)("p",null,"Clusters created in Rancher v2.0.7 and higher automatically have all the requirements needed (metrics-server and Kubernetes cluster configuration) to use HPA."),(0,a.kt)("h2",{id:"testing-hpas-with-a-service-deployment"},"Testing HPAs with a Service Deployment"),(0,a.kt)("p",null,"You can see your HPA's current number of replicas by going to your project and clicking ",(0,a.kt)("strong",{parentName:"p"},"Resources > HPA"),". For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"},"Get HPA Metrics and Status"),"."),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to get the status of HPAs that you test with your load testing tool. For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl"},"Testing HPAs with kubectl"),"."))}h.isMDXComponent=!0}}]);
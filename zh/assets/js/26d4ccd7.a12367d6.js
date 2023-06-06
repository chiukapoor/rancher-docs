"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),h=o,b=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"Rancher HA"},s=void 0,i={unversionedId:"troubleshooting/other-troubleshooting-tips/rancher-ha",id:"version-2.0-2.4/troubleshooting/other-troubleshooting-tips/rancher-ha",title:"Rancher HA",description:"The commands/steps listed on this page can be used to check your Rancher Kubernetes Installation.",source:"@site/versioned_docs/version-2.0-2.4/troubleshooting/other-troubleshooting-tips/rancher-ha.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/rancher-ha",permalink:"/zh/v2.0-v2.4/troubleshooting/other-troubleshooting-tips/rancher-ha",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/troubleshooting/other-troubleshooting-tips/rancher-ha.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Rancher HA"},sidebar:"tutorialSidebar",previous:{title:"DNS",permalink:"/zh/v2.0-v2.4/troubleshooting/other-troubleshooting-tips/dns"},next:{title:"Imported clusters",permalink:"/zh/v2.0-v2.4/troubleshooting/other-troubleshooting-tips/registered-clusters"}},p={},u=[{value:"Check Rancher pods",id:"check-rancher-pods",level:3},{value:"Pod details",id:"pod-details",level:4},{value:"Pod container logs",id:"pod-container-logs",level:4},{value:"Namespace events",id:"namespace-events",level:4},{value:"Check ingress",id:"check-ingress",level:3},{value:"Check ingress controller logs",id:"check-ingress-controller-logs",level:3},{value:"Leader election",id:"leader-election",level:3}],d={toc:u};function h(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The commands/steps listed on this page can be used to check your Rancher Kubernetes Installation."),(0,r.kt)("p",null,"Make sure you configured the correct kubeconfig (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_rancher-cluster.yml"),")."),(0,r.kt)("h3",{id:"check-rancher-pods"},"Check Rancher pods"),(0,r.kt)("p",null,"Rancher pods are deployed as a Deployment in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,r.kt)("p",null,"Check if the pods are running on all nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods -l app=rancher -o wide\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                       READY   STATUS    RESTARTS   AGE   IP          NODE\nrancher-7dbd7875f7-n6t5t   1/1     Running   0          8m    x.x.x.x     x.x.x.x\nrancher-7dbd7875f7-qbj5k   1/1     Running   0          8m    x.x.x.x     x.x.x.x\nrancher-7dbd7875f7-qw7wb   1/1     Running   0          8m    x.x.x.x     x.x.x.x\n")),(0,r.kt)("p",null,"If a pod is unable to run (Status is not ",(0,r.kt)("strong",{parentName:"p"},"Running"),", Ready status is not showing ",(0,r.kt)("inlineCode",{parentName:"p"},"1/1")," or you see a high count of Restarts), check the pod details, logs and namespace events."),(0,r.kt)("h4",{id:"pod-details"},"Pod details"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system describe pods -l app=rancher\n")),(0,r.kt)("h4",{id:"pod-container-logs"},"Pod container logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -l app=rancher\n")),(0,r.kt)("h4",{id:"namespace-events"},"Namespace events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get events\n")),(0,r.kt)("h3",{id:"check-ingress"},"Check ingress"),(0,r.kt)("p",null,"Ingress should have the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"HOSTS")," (showing the configured FQDN) and ",(0,r.kt)("inlineCode",{parentName:"p"},"ADDRESS")," (host address(es) it will be routed to)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get ingress\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME      HOSTS                    ADDRESS                   PORTS     AGE\nrancher   rancher.yourdomain.com   x.x.x.x,x.x.x.x,x.x.x.x   80, 443   2m\n")),(0,r.kt)("h3",{id:"check-ingress-controller-logs"},"Check ingress controller logs"),(0,r.kt)("p",null,"When accessing your configured Rancher FQDN does not show you the UI, check the ingress controller logging to see what happens when you try to access Rancher:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx logs -l app=ingress-nginx\n")),(0,r.kt)("h3",{id:"leader-election"},"Leader election"),(0,r.kt)("p",null,"The leader is determined by a leader election process. After the leader has been determined, the leader (",(0,r.kt)("inlineCode",{parentName:"p"},"holderIdentity"),") is saved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-controllers")," ConfigMap (in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-7dbd7875f7-qbj5k"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl -n kube-system get configmap cattle-controllers -o jsonpath=\'{.metadata.annotations.control-plane\\.alpha\\.kubernetes\\.io/leader}\'\n{"holderIdentity":"rancher-7dbd7875f7-qbj5k","leaseDurationSeconds":45,"acquireTime":"2019-04-04T11:53:12Z","renewTime":"2019-04-04T12:24:08Z","leaderTransitions":0}\n')))}h.isMDXComponent=!0}}]);
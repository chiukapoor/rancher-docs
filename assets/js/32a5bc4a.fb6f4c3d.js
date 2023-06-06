"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),h=o,d=b["".concat(c,".").concat(h)]||b[h]||p[h]||l;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},47151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Troubleshooting Controlplane Nodes"},c=void 0,s={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",id:"troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",title:"Troubleshooting Controlplane Nodes",description:"This section applies to nodes with the controlplane role.",source:"@site/docs/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",permalink:"/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",tags:[],version:"current",lastUpdatedAt:1667002146,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Troubleshooting Controlplane Nodes"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting etcd Nodes",permalink:"/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"},next:{title:"Troubleshooting nginx-proxy",permalink:"/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"}},u={},p=[{value:"Check if the Controlplane Containers are Running",id:"check-if-the-controlplane-containers-are-running",level:2},{value:"Controlplane Container Logging",id:"controlplane-container-logging",level:2},{value:"RKE2 Server Logging",id:"rke2-server-logging",level:2}],b={toc:p};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section applies to nodes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," role."),(0,r.kt)("h2",{id:"check-if-the-controlplane-containers-are-running"},"Check if the Controlplane Containers are Running"),(0,r.kt)("p",null,"There are three specific containers launched on nodes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," role:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kube-controller-manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kube-scheduler"))),(0,r.kt)("p",null,"The containers should have status ",(0,r.kt)("strong",{parentName:"p"},"Up"),". The duration shown after ",(0,r.kt)("strong",{parentName:"p"},"Up")," is the time the container has been running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker ps -a -f=name='kube-apiserver|kube-controller-manager|kube-scheduler'\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                COMMAND                  CREATED             STATUS              PORTS               NAMES\n26c7159abbcc        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-apiserver\nf3d287ca4549        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-scheduler\nbdf3898b8063        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-controller-manager\n')),(0,r.kt)("h2",{id:"controlplane-container-logging"},"Controlplane Container Logging"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you added multiple nodes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," role, both ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," use a leader election process to determine the leader. Only the current leader will log the performed actions. See ",(0,r.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/kubernetes-resources#kubernetes-leader-election"},"Kubernetes leader election")," how to retrieve the current leader.")),(0,r.kt)("p",null,"The logging of the containers can contain information on what the problem could be."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker logs kube-apiserver\ndocker logs kube-controller-manager\ndocker logs kube-scheduler\n")),(0,r.kt)("h2",{id:"rke2-server-logging"},"RKE2 Server Logging"),(0,r.kt)("p",null,"If Rancher provisions an RKE2 cluster that can't communicate with Rancher, you can run this command on a server node in the downstream cluster to get the RKE2 server logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"journalctl -u rke2-server -f\n")))}h.isMDXComponent=!0}}]);
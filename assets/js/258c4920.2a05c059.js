"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"iSCSI Volumes"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",title:"iSCSI Volumes",description:"In Rancher Launched Kubernetes clusters that store data on iSCSI volumes, you may experience an issue where kubelets fail to automatically connect with iSCSI volumes. This failure is likely due to an incompatibility issue involving the iSCSI initiator tool. You can resolve this issue by installing the iSCSI initiator tool on each of your cluster nodes.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"iSCSI Volumes"},sidebar:"tutorialSidebar",previous:{title:"GlusterFS Volumes",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes"},next:{title:"Provisioning Storage Examples",permalink:"/v2.0-v2.4/pages-for-subheaders/provisioning-storage-examples"}},c={},p=[],d={toc:p};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes clusters")," that store data on iSCSI volumes, you may experience an issue where kubelets fail to automatically connect with iSCSI volumes. This failure is likely due to an incompatibility issue involving the iSCSI initiator tool. You can resolve this issue by installing the iSCSI initiator tool on each of your cluster nodes."),(0,r.kt)("p",null,"Rancher Launched Kubernetes clusters storing data on iSCSI volumes leverage the ",(0,r.kt)("a",{parentName:"p",href:"http://www.open-iscsi.com/"},"iSCSI initiator tool"),", which is embedded in the kubelet's ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher/hyperkube")," Docker image. From each kubelet (i.e., the ",(0,r.kt)("em",{parentName:"p"},"initiator"),"), the tool discovers and launches sessions with an iSCSI volume (i.e., the ",(0,r.kt)("em",{parentName:"p"},"target"),"). However, in some instances, the versions of the iSCSI initiator tool installed on the initiator and the target may not match, resulting in a connection failure."),(0,r.kt)("p",null,"If you encounter this issue, you can work around it by installing the initiator tool on each node in your cluster. You can install the iSCSI initiator tool by logging into your cluster nodes and entering one of the following commands:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Package Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Install Command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu/Debian"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"open-iscsi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sudo apt install open-iscsi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RHEL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iscsi-initiator-utils")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yum install iscsi-initiator-utils -y"))))),(0,r.kt)("p",null,"After installing the initiator tool on your nodes, edit the YAML for your cluster, editing the kubelet configuration to mount the iSCSI binary and configuration, as shown in the sample below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},"Before updating your Kubernetes YAML to mount the iSCSI binary and configuration, make sure either the ",(0,r.kt)("inlineCode",{parentName:"p"},"open-iscsi")," (deb) or ",(0,r.kt)("inlineCode",{parentName:"p"},"iscsi-initiator-utils")," (yum) package is installed on your cluster nodes. If this package isn't installed ",(0,r.kt)("em",{parentName:"p"},"before")," the bind mounts are created in your Kubernetes YAML, Docker will automatically create the directories and files on each node and will not allow the package install to succeed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'services:\n  kubelet:\n    extra_binds:\n      - "/etc/iscsi:/etc/iscsi"\n      - "/sbin/iscsiadm:/sbin/iscsiadm"\n')))}m.isMDXComponent=!0}}]);
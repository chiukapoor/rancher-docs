"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),b=a,h=p["".concat(c,".").concat(b)]||p[b]||d[b]||s;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},93352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>d});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Backing up Rancher Installed on a K3s Kubernetes Cluster"},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher",title:"Backing up Rancher Installed on a K3s Kubernetes Cluster",description:"When Rancher is installed on a high-availability Kubernetes cluster, we recommend using an external database to store the cluster data.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Backing up Rancher Installed on a K3s Kubernetes Cluster"},sidebar:"tutorialSidebar",previous:{title:"Restoring Backups\u2014Docker Installs",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},next:{title:"Restoring Rancher Installed on a K3s Kubernetes Cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher"}},u={},d=[{value:"K3s Kubernetes Cluster Data",id:"k3s-kubernetes-cluster-data",level:3},{value:"Creating Snapshots and Restoring Databases from Snapshots",id:"creating-snapshots-and-restoring-databases-from-snapshots",level:3}],p={toc:d};function b(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},p,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When Rancher is installed on a high-availability Kubernetes cluster, we recommend using an external database to store the cluster data."),(0,n.kt)("p",null,"The database administrator will need to back up the external database, or restore it from a snapshot or dump."),(0,n.kt)("p",null,"We recommend configuring the database to take recurring snapshots."),(0,n.kt)("h3",{id:"k3s-kubernetes-cluster-data"},"K3s Kubernetes Cluster Data"),(0,n.kt)("p",null,"One main advantage of this K3s architecture is that it allows an external datastore to hold the cluster data, allowing the K3s server nodes to be treated as ephemeral."),(0,n.kt)("figcaption",null,"Architecture of a K3s Kubernetes Cluster Running the Rancher Management Server"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture of an RKE Kubernetes Cluster Running the Rancher Management Server",src:r(74973).Z,width:"249",height:"371"})),(0,n.kt)("h3",{id:"creating-snapshots-and-restoring-databases-from-snapshots"},"Creating Snapshots and Restoring Databases from Snapshots"),(0,n.kt)("p",null,"For details on taking database snapshots and restoring your database from them, refer to the official database documentation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html"},"Official MySQL documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/8.3/backup-dump.html"},"Official PostgreSQL documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/recovery.md"},"Official etcd documentation"))))}b.isMDXComponent=!0},74973:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/k3s-server-storage-d746fa487cbe57d9ac9c5ed69c068f74.svg"}}]);
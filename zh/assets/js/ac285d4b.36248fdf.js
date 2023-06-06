"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Backing up Rancher Installed on an RKE Kubernetes Cluster"},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",title:"Backing up Rancher Installed on an RKE Kubernetes Cluster",description:"This section describes how to create backups of your high-availability Rancher install.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"Backing up Rancher Installed on an RKE Kubernetes Cluster"},sidebar:"tutorialSidebar",previous:{title:"Restoring Rancher Installed on a K3s Kubernetes Cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher"},next:{title:"Restoring Backups\u2014Kubernetes installs",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"}},c={},u=[{value:"Requirements",id:"requirements",level:2},{value:"RKE Version",id:"rke-version",level:3},{value:"RKE Config File",id:"rke-config-file",level:3},{value:"Backup Outline",id:"backup-outline",level:2},{value:"1. Take Snapshots of the <code>etcd</code> Database",id:"1-take-snapshots-of-the-etcd-database",level:2},{value:"Option A: Recurring Snapshots",id:"option-a-recurring-snapshots",level:3},{value:"Option B: One-Time Snapshots",id:"option-b-one-time-snapshots",level:3},{value:"2. Back up Local Snapshots to a Safe Location",id:"2-back-up-local-snapshots-to-a-safe-location",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},h=d("Tabs"),m=d("TabItem"),k={toc:u};function f(e){var{components:t}=e,i=s(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},k,i),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to create backups of your high-availability Rancher install."),(0,a.kt)("p",null,"In an RKE installation, the cluster data is replicated on each of three etcd nodes in the cluster, providing redundancy and data duplication in case one of the nodes fails."),(0,a.kt)("figcaption",null,"Cluster Data within an RKE Kubernetes Cluster Running the Rancher Management Server"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture of an RKE Kubernetes cluster running the Rancher management server",src:n(17248).Z,width:"341",height:"322"})),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"rke-version"},"RKE Version"),(0,a.kt)("p",null,"The commands for taking ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," snapshots are only available in RKE v0.1.7 and later."),(0,a.kt)("h3",{id:"rke-config-file"},"RKE Config File"),(0,a.kt)("p",null,"You'll need the RKE config file that you used for Rancher install, ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),". You created this file during your initial install. Place this file in same directory as the RKE binary."),(0,a.kt)("h2",{id:"backup-outline"},"Backup Outline"),(0,a.kt)("p",null,"Backing up your high-availability Rancher cluster is process that involves completing multiple tasks."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#1-take-snapshots-of-the-etcd-database"},"Take Snapshots of the ",(0,a.kt)("inlineCode",{parentName:"a"},"etcd")," Database")),(0,a.kt)("p",{parentName:"li"},"Take snapshots of your current ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," database using Rancher Kubernetes Engine (RKE).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#2-back-up-local-snapshots-to-a-safe-location"},"Store Snapshot(s) Externally")),(0,a.kt)("p",{parentName:"li"},"After taking your snapshots, export them to a safe location that won't be affected if your cluster encounters issues."))),(0,a.kt)("h2",{id:"1-take-snapshots-of-the-etcd-database"},"1. Take Snapshots of the ",(0,a.kt)("inlineCode",{parentName:"h2"},"etcd")," Database"),(0,a.kt)("p",null,"Take snapshots of your ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," database. You can use these snapshots later to recover from a disaster scenario. There are two ways to take snapshots: recurringly, or as a one-off.  Each option is better suited to a specific use case. Read the short description below each link to know when to use each option."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#option-a-recurring-snapshots"},"Option A: Recurring Snapshots")),(0,a.kt)("p",{parentName:"li"},"  After you stand up a high-availability Rancher install, we recommend configuring RKE to automatically take recurring snapshots so that you always have a safe restore point available.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#option-b-one-time-snapshots"},"Option B: One-Time Snapshots")),(0,a.kt)("p",{parentName:"li"},"  We advise taking one-time snapshots before events like upgrades or restore of another snapshot."))),(0,a.kt)("h3",{id:"option-a-recurring-snapshots"},"Option A: Recurring Snapshots"),(0,a.kt)("p",null,"For all high-availability Rancher installs, we recommend taking recurring snapshots so that you always have a safe restore point available."),(0,a.kt)("p",null,"To take recurring snapshots, enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service, which is a service that's included with RKE. This service runs in a service container alongside the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," container. You can enable this service by adding some code to ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To Enable Recurring Snapshots:")),(0,a.kt)("p",null,"The steps to enable recurring snapshots differ based on the version of RKE."),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(m,{value:"RKE v0.2.0+",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," with your favorite text editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the code for the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," service to enable recurring snapshots. Snapshots can be saved in a S3 compatible backend."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'services:\n  etcd:\n    backup_config:\n      enabled: true     # enables recurring etcd snapshots\n      interval_hours: 6 # time increment between snapshots\n      retention: 60     # time in days before snapshot purge\n      # Optional S3\n      s3backupconfig:\n        access_key: "myaccesskey"\n        secret_key:  "myaccesssecret"\n        bucket_name: "my-backup-bucket"\n        folder: "folder-name" # Available as of v2.3.0\n        endpoint: "s3.eu-west-1.amazonaws.com"\n        region: "eu-west-1"\n        custom_ca: |-\n          -----BEGIN CERTIFICATE-----\n          $CERTIFICATE\n          -----END CERTIFICATE-----\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save and close ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("strong",{parentName:"p"},"Terminal")," and change directory to the location of the RKE binary. Your ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file must reside in the same directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yml\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," RKE is configured to take recurring snapshots of ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," on all nodes running the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role. Snapshots are saved locally to the following directory: ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots/"),". If configured, the snapshots are also uploaded to your S3 compatible backend.")),(0,a.kt)(m,{value:"RKE v0.1.x",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," with your favorite text editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the code for the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," service to enable recurring snapshots."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"services:\n  etcd:\n    snapshot: true # enables recurring etcd snapshots\n    creation: 6h0s # time increment between snapshots\n    retention: 24h # time increment before snapshot purge\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save and close ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("strong",{parentName:"p"},"Terminal")," and change directory to the location of the RKE binary. Your ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file must reside in the same directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yml\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," RKE is configured to take recurring snapshots of ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," on all nodes running the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role. Snapshots are saved locally to the following directory: ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots/"),"."))),(0,a.kt)("h3",{id:"option-b-one-time-snapshots"},"Option B: One-Time Snapshots"),(0,a.kt)("p",null,"When you're about to upgrade Rancher or restore it to a previous snapshot, you should snapshot your live image so that you have a backup of ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," in its last known state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To Take a One-Time Local Snapshot:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("strong",{parentName:"p"},"Terminal")," and change directory to the location of the RKE binary. Your ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file must reside in the same directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the following command. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<SNAPSHOT.db>")," with any name that you want to use for the snapshot (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade.db"),")."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke etcd snapshot-save \\\n--name <SNAPSHOT.db> \\\n--config rancher-cluster.yml\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," RKE takes a snapshot of ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," running on each ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," node. The file is saved to ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To Take a One-Time S3 Snapshot:")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of RKE v0.2.0")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("strong",{parentName:"p"},"Terminal")," and change directory to the location of the RKE binary. Your ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file must reside in the same directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the following command. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<SNAPSHOT.db>")," with any name that you want to use for the snapshot (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade.db"),")."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"rke etcd snapshot-save \\\n  --config rancher-cluster.yml \\\n  --name snapshot-name  \\\n  --s3 \\\n  --access-key S3_ACCESS_KEY \\\n  --secret-key S3_SECRET_KEY \\\n  --bucket-name s3-bucket-name  \\\n  --s3-endpoint  s3.amazonaws.com \\\n  --folder folder-name # Available as of v2.3.0\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," RKE takes a snapshot of ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," running on each ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," node. The file is saved to ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),". It is also uploaded to the S3 compatible backend."),(0,a.kt)("h2",{id:"2-back-up-local-snapshots-to-a-safe-location"},"2. Back up Local Snapshots to a Safe Location"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," If you are using RKE v0.2.0, you can enable saving the backups to a S3 compatible backend directly and skip this step.")),(0,a.kt)("p",null,"After taking the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," snapshots, save them to a safe location so that they're unaffected if your cluster experiences a disaster scenario. This location should be persistent."),(0,a.kt)("p",null,"In this documentation, as an example, we're using Amazon S3 as our safe location, and ",(0,a.kt)("a",{parentName:"p",href:"http://s3tools.org/s3cmd"},"S3cmd")," as our tool to create the backups. The backup location and tool that you use are ultimately your decision."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"root@node:~# s3cmd mb s3://rke-etcd-snapshots\nroot@node:~# s3cmd put /opt/rke/etcd-snapshots/snapshot.db s3://rke-etcd-snapshots/\n")))}f.isMDXComponent=!0},17248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rke-server-storage-479a90c18ba2cf4b197554330d05afe8.svg"}}]);
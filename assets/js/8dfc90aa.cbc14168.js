"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"Rolling back to v2.0.0-v2.1.5"},i=void 0,l={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1",title:"Rolling back to v2.0.0-v2.1.5",description:"Rolling back to Rancher v2.0-v2.1 is no longer supported. The instructions for rolling back to these versions are preserved here and are intended to be used only in cases where upgrading to Rancher v2.2+ is not feasible.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Rolling back to v2.0.0-v2.1.5"},sidebar:"tutorialSidebar",previous:{title:"Restoring Backups\u2014Kubernetes installs",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},next:{title:"Migrating from v1.6 to v2.x",permalink:"/v2.0-v2.4/pages-for-subheaders/migrate-from-v1.6-v2.x"}},p={},u=[],d={toc:u};function m(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rolling back to Rancher v2.0-v2.1 is no longer supported. The instructions for rolling back to these versions are preserved here and are intended to be used only in cases where upgrading to Rancher v2.2+ is not feasible.")),(0,n.kt)("p",null,"If you are rolling back to versions in either of these scenarios, you must follow some extra instructions in order to get your clusters working."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rolling back from v2.1.6+ to any version between v2.1.0 - v2.1.5 or v2.0.0 - v2.0.10."),(0,n.kt)("li",{parentName:"ul"},"Rolling back from v2.0.11+ to any version between v2.0.0 - v2.0.10.")),(0,n.kt)("p",null,"Because of the changes necessary to address ",(0,n.kt)("a",{parentName:"p",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20321"},"CVE-2018-20321"),", special steps are necessary if the user wants to roll back to a previous version of Rancher where this vulnerability exists. The steps are as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Record the ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceAccountToken")," for each cluster.  To do this, save the following script on a machine with ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," access to the Rancher management plane and execute it.  You will need to run these commands on the machine where the rancher container is running. Ensure JQ is installed before running the command. The commands will vary depending on how you installed Rancher."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rancher Installed with Docker")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker exec <NAME OF RANCHER CONTAINER> kubectl get clusters -o json | jq '[.items[] | select(any(.status.conditions[]; .type == \"ServiceAccountMigrated\")) | {name: .metadata.name, token: .status.serviceAccountToken}]' > tokens.json\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rancher Installed on a Kubernetes Cluster")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get clusters -o json | jq '[.items[] | select(any(.status.conditions[]; .type == \"ServiceAccountMigrated\")) | {name: .metadata.name, token: .status.serviceAccountToken}]' > tokens.json\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After executing the command a ",(0,n.kt)("inlineCode",{parentName:"p"},"tokens.json")," file will be created.  Important! Back up this file in a safe place.",(0,n.kt)("strong",{parentName:"p"}," You will need it to restore functionality to your clusters after rolling back Rancher.  "),"If you lose this file, you may lose access to your clusters.**")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rollback Rancher following the ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},"normal instructions"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once Rancher comes back up, every cluster managed by Rancher (except for Imported clusters) will be in an ",(0,n.kt)("inlineCode",{parentName:"p"},"Unavailable")," state.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Apply the backed up tokens based on how you installed Rancher."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rancher Installed with Docker")),(0,n.kt)("p",{parentName:"li"},"Save the following script as ",(0,n.kt)("inlineCode",{parentName:"p"},"apply_tokens.sh")," to the machine where the Rancher docker container is running. Also copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"tokens.json")," file created previously to the same directory as the script."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'set -e\n\ntokens=$(jq .[] -c tokens.json)\nfor token in $tokens; do\n    name=$(echo $token | jq -r .name)\n    value=$(echo $token | jq -r .token)\n\n    docker exec $1 kubectl patch --type=merge clusters $name -p "{\\"status\\": {\\"serviceAccountToken\\": \\"$value\\"}}"\ndone\n')),(0,n.kt)("p",{parentName:"li"}," the script to allow execution (",(0,n.kt)("inlineCode",{parentName:"p"},"chmod +x apply_tokens.sh"),") and execute the script as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"./apply_tokens.sh <DOCKER CONTAINER NAME>\n")),(0,n.kt)("p",{parentName:"li"},"After a few moments the clusters will go from Unavailable back to Available."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rancher Installed on a Kubernetes Cluster")),(0,n.kt)("p",{parentName:"li"},"Save the following script as ",(0,n.kt)("inlineCode",{parentName:"p"},"apply_tokens.sh")," to a machine with kubectl access to the Rancher management plane. Also copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"tokens.json")," file created previously to the same directory as the script."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'set -e\n\ntokens=$(jq .[] -c tokens.json)\nfor token in $tokens; do\n    name=$(echo $token | jq -r .name)\n    value=$(echo $token | jq -r .token)\n\n   kubectl patch --type=merge clusters $name -p "{\\"status\\": {\\"serviceAccountToken\\": \\"$value\\"}}"\ndone\n')),(0,n.kt)("p",{parentName:"li"},"Set the script to allow execution (",(0,n.kt)("inlineCode",{parentName:"p"},"chmod +x apply_tokens.sh"),") and execute the script as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"./apply_tokens.sh\n")),(0,n.kt)("p",{parentName:"li"},"After a few moments the clusters will go from ",(0,n.kt)("inlineCode",{parentName:"p"},"Unavailable")," back to ",(0,n.kt)("inlineCode",{parentName:"p"},"Available"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Continue using Rancher as normal."))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Restoring Backups\u2014Docker Installs"},c=void 0,s={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",title:"Restoring Backups\u2014Docker Installs",description:"If you encounter a disaster scenario, you can restore your Rancher Server to your most recent backup.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Restoring Backups\u2014Docker Installs"},sidebar:"tutorialSidebar",previous:{title:"Backing up Rancher Installed with Docker",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},next:{title:"Backing up Rancher Installed on a K3s Kubernetes Cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher"}},p={},u=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Restoring Backups",id:"restoring-backups",level:2}],d={toc:u};function m(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you encounter a disaster scenario, you can restore your Rancher Server to your most recent backup."),(0,n.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,n.kt)("p",null,"During restore of your backup, you'll enter a series of commands, filling placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (",(0,n.kt)("inlineCode",{parentName:"p"},"<EXAMPLE>"),"). Here's an example of a command with a placeholder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'docker run  --volumes-from <RANCHER_CONTAINER_NAME> -v $PWD:/backup \\\nbusybox sh -c "rm /var/lib/rancher/* -rf  && \\\ntar pzxvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>"\n')),(0,n.kt)("p",null,"In this command, ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_VERSION>-<DATE>")," are environment variables for your Rancher deployment."),(0,n.kt)("p",null,"Cross reference the image and reference table below to learn how to obtain this placeholder data. Write down or copy this information before starting the procedure below."),(0,n.kt)("sup",null,"Terminal ",(0,n.kt)("code",null,"docker ps")," Command, Displaying Where to Find ",(0,n.kt)("code",null,"<RANCHER_CONTAINER_TAG>")," and ",(0,n.kt)("code",null,"<RANCHER_CONTAINER_NAME>")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Placeholder Reference",src:r(50953).Z,width:"1275",height:"258"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_TAG>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,n.kt)("td",{parentName:"tr",align:null},"The rancher/rancher image you pulled for initial install.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_NAME>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,n.kt)("td",{parentName:"tr",align:null},"The name of your Rancher container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,n.kt)("td",{parentName:"tr",align:null},"The version number for your Rancher backup.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<DATE>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,n.kt)("td",{parentName:"tr",align:null},"The date that the data container or backup was created.")))),(0,n.kt)("br",null),(0,n.kt)("p",null,"You can obtain ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_TAG>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," by logging into your Rancher Server by remote connection and entering the command to view the containers that are running: ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps"),". You can also view containers that are stopped using a different command: ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps -a"),". Use these commands for help anytime during while creating backups."),(0,n.kt)("h2",{id:"restoring-backups"},"Restoring Backups"),(0,n.kt)("p",null,"Using a ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"backup")," that you created earlier, restore Rancher to its last known healthy state."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using a remote Terminal connection, log into the node running your Rancher Server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop the container currently running Rancher Server. Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the name of your Rancher container."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker stop <RANCHER_CONTAINER_NAME>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Move the backup tarball that you created during completion of ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"Creating Backups\u2014Docker Installs")," onto your Rancher Server. Change to the directory that you moved it to. Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"dir")," to confirm that it's there."),(0,n.kt)("p",{parentName:"li"},"If you followed the naming convention we suggested in ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"Creating Backups\u2014Docker Installs"),", it will have a name similar to  ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the following command to delete your current state data and replace it with your backup data, replacing the placeholders. Don't forget to close the quotes."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning!")," This command deletes all current state data from your Rancher Server container. Any changes saved after your backup tarball was created will be lost.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'docker run  --volumes-from <RANCHER_CONTAINER_NAME> -v $PWD:/backup \\\nbusybox sh -c "rm /var/lib/rancher/* -rf  && \\\ntar pzxvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step Result:")," A series of commands should run.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart your Rancher Server container, replacing the placeholder. It will restart using your backup data."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker start <RANCHER_CONTAINER_NAME>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait a few moments and then open Rancher in a web browser. Confirm that the restore succeeded and that your data is restored."))))}m.isMDXComponent=!0},50953:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/placeholder-ref-70c9571e1a85164291c80a55c7c614b5.png"}}]);
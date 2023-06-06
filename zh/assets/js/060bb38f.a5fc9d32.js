"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||s[h]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Rolling Back Rancher Installed with Docker"},c=void 0,d={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher",id:"version-2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher",title:"Rolling Back Rancher Installed with Docker",description:"If a Rancher upgrade does not complete successfully, you'll have to roll back to your Rancher setup that you were using before Docker Upgrade. Rolling back restores:",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1685049955,formattedLastUpdatedAt:"2023\u5e745\u670825\u65e5",frontMatter:{title:"Rolling Back Rancher Installed with Docker"},sidebar:"tutorialSidebar",previous:{title:"Upgrading Rancher Installed with Docker",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},next:{title:"Certificate Troubleshooting",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"}},p={},s=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Rolling Back Rancher",id:"rolling-back-rancher",level:2}],u={toc:s};function h(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher"})),(0,n.kt)("p",null,"If a Rancher upgrade does not complete successfully, you'll have to roll back to your Rancher setup that you were using before ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"Docker Upgrade"),". Rolling back restores:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your previous version of Rancher."),(0,n.kt)("li",{parentName:"ul"},"Your data backup created before upgrade.")),(0,n.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,n.kt)("p",null,"During rollback to a prior version of Rancher, you'll enter a series of commands, filling placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (",(0,n.kt)("inlineCode",{parentName:"p"},"<EXAMPLE>"),"). Here's an example of a command with a placeholder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker pull rancher/rancher:<PRIOR_RANCHER_VERSION>\n")),(0,n.kt)("p",null,"In this command, ",(0,n.kt)("inlineCode",{parentName:"p"},"<PRIOR_RANCHER_VERSION>")," is the version of Rancher you were running before your unsuccessful upgrade. ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.0.5")," for example."),(0,n.kt)("p",null,"Cross reference the image and reference table below to learn how to obtain this placeholder data. Write down or copy this information before starting the procedure below."),(0,n.kt)("sup",null,"Terminal ",(0,n.kt)("code",null,"docker ps")," Command, Displaying Where to Find ",(0,n.kt)("code",null,"<PRIOR_RANCHER_VERSION>")," and ",(0,n.kt)("code",null,"<RANCHER_CONTAINER_NAME>")),"![Placeholder Reference](/img/placeholder-ref-2.png)",(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<PRIOR_RANCHER_VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,n.kt)("td",{parentName:"tr",align:null},"The rancher/rancher image you used before upgrade.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_NAME>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,n.kt)("td",{parentName:"tr",align:null},"The name of your Rancher container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,n.kt)("td",{parentName:"tr",align:null},"The version of Rancher that the backup is for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<DATE>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,n.kt)("td",{parentName:"tr",align:null},"The date that the data container or backup was created.")))),(0,n.kt)("br",null),(0,n.kt)("p",null,"You can obtain ",(0,n.kt)("inlineCode",{parentName:"p"},"<PRIOR_RANCHER_VERSION>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," by logging into your Rancher Server by remote connection and entering the command to view the containers that are running: ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps"),". You can also view containers that are stopped using a different command: ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps -a"),". Use these commands for help anytime during while creating backups."),(0,n.kt)("h2",{id:"rolling-back-rancher"},"Rolling Back Rancher"),(0,n.kt)("p",null,"If you have issues upgrading Rancher, roll it back to its latest known healthy state by pulling the last version you used and then restoring the backup you made before upgrade."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning!")," Rolling back to a previous version of Rancher destroys any changes made to Rancher following the upgrade. Unrecoverable data loss may occur.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using a remote Terminal connection, log into the node running your Rancher Server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pull the version of Rancher that you were running before upgrade. Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"<PRIOR_RANCHER_VERSION>")," with that version."),(0,n.kt)("p",{parentName:"li"},"For example, if you were running Rancher v2.0.5 before upgrade, pull v2.0.5."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker pull rancher/rancher:<PRIOR_RANCHER_VERSION>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop the container currently running Rancher Server. Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the name of your Rancher container."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker stop <RANCHER_CONTAINER_NAME>\n")),(0,n.kt)("p",{parentName:"li"},"You can obtain the name for your Rancher container by entering ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Move the backup tarball that you created during completion of ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"Docker Upgrade")," onto your Rancher Server. Change to the directory that you moved it to. Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"dir")," to confirm that it's there."),(0,n.kt)("p",{parentName:"li"},"If you followed the naming convention we suggested in ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"Docker Upgrade"),", it will have a name similar to  (",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the following command to replace the data in the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-data")," container with the data in the backup tarball, replacing the placeholder. Don't forget to close the quotes."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'docker run  --volumes-from rancher-data \\\n-v $PWD:/backup busybox sh -c "rm /var/lib/rancher/* -rf \\\n&& tar zxvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start a new Rancher Server container with the ",(0,n.kt)("inlineCode",{parentName:"p"},"<PRIOR_RANCHER_VERSION>")," tag placeholder pointing to the data container."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker run -d --volumes-from rancher-data \\\n--restart=unless-stopped \\\n-p 80:80 -p 443:443 \\\n--privileged \\\nrancher/rancher:<PRIOR_RANCHER_VERSION>\n")),(0,n.kt)("p",{parentName:"li"},"As of Rancher v2.5, privileged access is ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker#privileged-access-for-rancher-v2-5"},"required.")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," ",(0,n.kt)("em",{parentName:"p"},"Do not")," stop the rollback after initiating it, even if the rollback process seems longer than expected. Stopping the rollback may result in database issues during future upgrades."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait a few moments and then open Rancher in a web browser. Confirm that the rollback succeeded and that your data is restored."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Rancher is rolled back to its version and data state before upgrade."))}h.isMDXComponent=!0}}]);
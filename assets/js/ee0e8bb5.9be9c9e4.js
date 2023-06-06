"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Restore Configuration"},c=void 0,p={unversionedId:"reference-guides/backup-restore-configuration/restore-configuration",id:"version-2.6/reference-guides/backup-restore-configuration/restore-configuration",title:"Restore Configuration",description:"The Restore Create page lets you provide details of the backup to restore from",source:"@site/versioned_docs/version-2.6/reference-guides/backup-restore-configuration/restore-configuration.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/restore-configuration",permalink:"/v2.6/reference-guides/backup-restore-configuration/restore-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/backup-restore-configuration/restore-configuration.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Restore Configuration"},sidebar:"tutorialSidebar",previous:{title:"Backup Configuration",permalink:"/v2.6/reference-guides/backup-restore-configuration/backup-configuration"},next:{title:"Backup Storage Location Configuration",permalink:"/v2.6/reference-guides/backup-restore-configuration/storage-configuration"}},s={},u=[{value:"Backup Source",id:"backup-source",level:2},{value:"An existing backup config",id:"an-existing-backup-config",level:3},{value:"The default storage target",id:"the-default-storage-target",level:3},{value:"An S3-compatible object store",id:"an-s3-compatible-object-store",level:3},{value:"Encryption",id:"encryption",level:2},{value:"Prune During Restore",id:"prune-during-restore",level:2},{value:"Getting the Backup Filename from S3",id:"getting-the-backup-filename-from-s3",level:2}],d={toc:u};function f(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Restore Create page lets you provide details of the backup to restore from"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(41399).Z,width:"2870",height:"1074"})),(0,n.kt)("h2",{id:"backup-source"},"Backup Source"),(0,n.kt)("p",null,"Provide details of the backup file and its storage location, which the operator will then use to perform the restore. Select from the following options to provide these details"),(0,n.kt)("h3",{id:"an-existing-backup-config"},"An existing backup config"),(0,n.kt)("p",null,"Selecting this option will populate the ",(0,n.kt)("strong",{parentName:"p"},"Target Backup")," dropdown with the Backups available in this cluster. Select the Backup from the dropdown, and that will fill out the ",(0,n.kt)("strong",{parentName:"p"},"Backup Filename")," field for you, and will also pass the backup source information from the selected Backup to the operator."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(23553).Z,width:"2358",height:"1030"})),(0,n.kt)("p",null,"If the Backup custom resource does not exist in the cluster, you need to get the exact filename and provide the backup source details with the default storage target or an S3-compatible object store."),(0,n.kt)("h3",{id:"the-default-storage-target"},"The default storage target"),(0,n.kt)("p",null,"Select this option if you are restoring from a backup file that exists in the default storage location configured at the operator-level. The operator-level configuration is the storage location that was configured when the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator was installed or upgraded. Provide the exact filename in the ",(0,n.kt)("strong",{parentName:"p"},"Backup Filename")," field."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(61272).Z,width:"2366",height:"878"})),(0,n.kt)("h3",{id:"an-s3-compatible-object-store"},"An S3-compatible object store"),(0,n.kt)("p",null,"Select this option if no default storage location is configured at the operator-level, OR if the backup file exists in a different S3 bucket than the one configured as the default storage location. Provide the exact filename in the ",(0,n.kt)("strong",{parentName:"p"},"Backup Filename")," field. Refer to ",(0,n.kt)("a",{parentName:"p",href:"#getting-the-backup-filename-from-s3"},"this section")," for exact steps on getting the backup filename from s3. Fill in all the details for the S3 compatible object store. Its fields are exactly same as ones for the ",(0,n.kt)("inlineCode",{parentName:"p"},"backup.StorageLocation")," configuration in the ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/backup-restore-configuration/backup-configuration#storage-location"},"Backup custom resource.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(17357).Z,width:"2344",height:"1332"})),(0,n.kt)("h2",{id:"encryption"},"Encryption"),(0,n.kt)("p",null,"If the backup was created with encryption enabled, its file will have ",(0,n.kt)("inlineCode",{parentName:"p"},".enc")," suffix. Choosing such a Backup, or providing a backup filename with ",(0,n.kt)("inlineCode",{parentName:"p"},".enc")," suffix will display another dropdown named ",(0,n.kt)("strong",{parentName:"p"},"Encryption Config Secret"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(11896).Z,width:"2362",height:"338"})),(0,n.kt)("p",null,"The Secret selected from this dropdown must have the same contents as the one used for the Backup custom resource while performing the backup. If the encryption configuration doesn't match, the restore will fail"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Encryption Config Secret")," dropdown will filter out and list only those Secrets that have this exact key"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"encryptionConfigSecretName")),(0,n.kt)("td",{parentName:"tr",align:null},"Provide the name of the Secret from ",(0,n.kt)("inlineCode",{parentName:"td"},"cattle-resources-system")," namespace, that contains the encryption config file.")))),(0,n.kt)("admonition",{title:"Important:",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This field should only be set if the backup was created with encryption enabled. Providing the incorrect encryption config will cause the restore to fail.")),(0,n.kt)("h2",{id:"prune-during-restore"},"Prune During Restore"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prune"),":  In order to fully restore Rancher from a backup, and to go back to the exact state it was at when the backup was performed, we need to delete any additional resources that were created by Rancher after the backup was taken. The operator does so if the ",(0,n.kt)("strong",{parentName:"li"},"Prune")," flag is enabled. Prune is enabled by default and it is recommended to keep it enabled."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Delete Timeout"),": This is the amount of time the operator will wait while deleting a resource before editing the resource to remove finalizers and attempt deletion again.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"prune")),(0,n.kt)("td",{parentName:"tr",align:null},"Delete the resources managed by Rancher that are not present in the backup (Recommended).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"deleteTimeoutSeconds")),(0,n.kt)("td",{parentName:"tr",align:null},"Amount of time the operator will wait while deleting a resource before editing the resource to remove finalizers and attempt deletion again.")))),(0,n.kt)("h2",{id:"getting-the-backup-filename-from-s3"},"Getting the Backup Filename from S3"),(0,n.kt)("p",null,"This is the name of the backup file that the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator will use to perform the restore."),(0,n.kt)("p",null,"To obtain this file name from S3, go to your S3 bucket (and folder if it was specified while performing backup)."),(0,n.kt)("p",null,"Copy the filename and store it in your Restore custom resource. So assuming the name of your backup file is ",(0,n.kt)("inlineCode",{parentName:"p"},"backupfile"),","),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If your bucket name is ",(0,n.kt)("inlineCode",{parentName:"li"},"s3bucket")," and no folder was specified, then the ",(0,n.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use will be ",(0,n.kt)("inlineCode",{parentName:"li"},"backupfile"),"."),(0,n.kt)("li",{parentName:"ul"},"If your bucket name is ",(0,n.kt)("inlineCode",{parentName:"li"},"s3bucket")," and the base folder is",(0,n.kt)("inlineCode",{parentName:"li"},"s3folder"),", the ",(0,n.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use is only ",(0,n.kt)("inlineCode",{parentName:"li"},"backupfile")," ."),(0,n.kt)("li",{parentName:"ul"},"If there is a subfolder inside ",(0,n.kt)("inlineCode",{parentName:"li"},"s3Folder")," called ",(0,n.kt)("inlineCode",{parentName:"li"},"s3sub"),", and that has your backup file, then the ",(0,n.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use is ",(0,n.kt)("inlineCode",{parentName:"li"},"s3sub/backupfile"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"backupFilename")),(0,n.kt)("td",{parentName:"tr",align:null},"This is the name of the backup file that the ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-backup")," operator will use to perform the restore.")))))}f.isMDXComponent=!0},61272:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/default-95cca92f765567228a78287139a2c1a0.png"},11896:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/encryption-8dfdf6319173018658b2e21a06664814.png"},23553:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/existing-109a6b8a8171763189d2bf81535eb275.png"},41399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/restore-e471e6f7f7070cbd282958fb299e04d2.png"},17357:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/s3store-35e51e0c0b4d58a3cf9c79a1014be661.png"}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"Backup Storage Location Configuration"},s=void 0,c={unversionedId:"reference-guides/backup-restore-configuration/storage-configuration",id:"version-2.5/reference-guides/backup-restore-configuration/storage-configuration",title:"Backup Storage Location Configuration",description:"Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible object store.",source:"@site/versioned_docs/version-2.5/reference-guides/backup-restore-configuration/storage-configuration.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/storage-configuration",permalink:"/zh/v2.5/reference-guides/backup-restore-configuration/storage-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/backup-restore-configuration/storage-configuration.md",tags:[],version:"2.5",lastUpdatedAt:1685574148,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"Backup Storage Location Configuration"},sidebar:"tutorialSidebar",previous:{title:"Restore Configuration",permalink:"/zh/v2.5/reference-guides/backup-restore-configuration/restore-configuration"},next:{title:"Examples",permalink:"/zh/v2.5/reference-guides/backup-restore-configuration/examples"}},u={},p=[{value:"Storage Location Configuration",id:"storage-location-configuration",level:2},{value:"No Default Storage Location",id:"no-default-storage-location",level:3},{value:"S3-compatible Object Store",id:"s3-compatible-object-store",level:3},{value:"Existing StorageClass",id:"existing-storageclass",level:3},{value:"Existing Persistent Volume",id:"existing-persistent-volume",level:3},{value:"Example values.yaml for the rancher-backup Helm Chart",id:"example-valuesyaml-for-the-rancher-backup-helm-chart",level:2}],d={toc:p};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible object store."),(0,a.kt)("p",null,"Only one storage location can be configured at the operator level."),(0,a.kt)("h2",{id:"storage-location-configuration"},"Storage Location Configuration"),(0,a.kt)("h3",{id:"no-default-storage-location"},"No Default Storage Location"),(0,a.kt)("p",null,"You can choose to not have any operator-level storage location configured. If you select this option, you must configure an S3-compatible object store as the storage location for each individual backup."),(0,a.kt)("h3",{id:"s3-compatible-object-store"},"S3-compatible Object Store"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Credential Secret"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose the credentials for S3 from your secrets in Rancher. ",(0,a.kt)("a",{parentName:"td",href:"/zh/v2.5/reference-guides/backup-restore-configuration/examples#example-credential-secret-for-storing-backups-in-s3"},"Example"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bucket Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the name of the ",(0,a.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html"},"S3 bucket")," where the backups will be stored. Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"rancherbackups"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Region"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"},"AWS region")," where the S3 bucket is located.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Folder"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/user-guide/using-folders.html"},"folder in the S3 bucket")," where the backups will be stored. If this field is left empty, the default behavior is to store the backup files in the root folder of the S3 bucket.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html"},"S3 endpoint")," For example, ",(0,a.kt)("inlineCode",{parentName:"td"},"s3.us-west-2.amazonaws.com"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint CA"),(0,a.kt)("td",{parentName:"tr",align:null},"The CA cert used to for the S3 endpoint. Default: base64 encoded CA cert")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"insecureTLSSkipVerify"),(0,a.kt)("td",{parentName:"tr",align:null},"Set to true if you are not using TLS.")))),(0,a.kt)("h3",{id:"existing-storageclass"},"Existing StorageClass"),(0,a.kt)("p",null,"Installing the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-backup")," chart by selecting the StorageClass option will create a Persistent Volume Claim (PVC), and Kubernetes will in turn dynamically provision a Persistent Volume (PV) where all the backups will be saved by default."),(0,a.kt)("p",null,"For information about creating storage classes refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"},"this section.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important"),'\nIt is highly recommended to use a StorageClass with a reclaim policy of "Retain". Otherwise if the PVC created by the ',(0,a.kt)("inlineCode",{parentName:"p"},"rancher-backup"),' chart gets deleted (either during app upgrade, or accidentally), the PV will get deleted too, which means all backups saved in it will get deleted.\nIf no such StorageClass is available, after the PV is provisioned, make sure to edit its reclaim policy and set it to "Retain" before storing backups in it.')),(0,a.kt)("h3",{id:"existing-persistent-volume"},"Existing Persistent Volume"),(0,a.kt)("p",null,"Select an existing Persistent Volume (PV) that will be used to store your backups. For information about creating PersistentVolumes in Rancher, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage#2-add-a-persistentvolume-that-refers-to-the-persistent-storage"},"this section.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important"),'\nIt is highly recommended to use a Persistent Volume with a reclaim policy of "Retain". Otherwise if the PVC created by the ',(0,a.kt)("inlineCode",{parentName:"p"},"rancher-backup")," chart gets deleted (either during app upgrade, or accidentally), the PV will get deleted too, which means all backups saved in it will get deleted.")),(0,a.kt)("h2",{id:"example-valuesyaml-for-the-rancher-backup-helm-chart"},"Example values.yaml for the rancher-backup Helm Chart"),(0,a.kt)("p",null,"The documented ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file that can be used to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator when the Helm CLI is used can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/backup-restore-operator/blob/release/v1.0/charts/rancher-backup/values.yaml"},"backup-restore-operator repository.")),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," files and configuring Helm charts during installation, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing"},"Helm documentation.")))}m.isMDXComponent=!0}}]);
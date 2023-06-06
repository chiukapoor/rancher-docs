"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},53684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={title:"Creating Apps"},s=void 0,p={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",id:"version-2.6/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",title:"Creating Apps",description:"Rancher's App Marketplace is based on Helm Repositories and Helm Charts. You can add HTTP based standard Helm Repositories as well as any Git Repository which contains charts.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",permalink:"/v2.6/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Creating Apps"},sidebar:"tutorialSidebar",previous:{title:"Helm Charts in Rancher",permalink:"/v2.6/pages-for-subheaders/helm-charts-in-rancher"},next:{title:"Deploying Applications across Clusters",permalink:"/v2.6/pages-for-subheaders/deploy-apps-across-clusters"}},d={},u=[{value:"Chart Types",id:"chart-types",level:2},{value:"Helm Charts",id:"helm-charts",level:3},{value:"Rancher Charts",id:"rancher-charts",level:3},{value:"Chart Directory Structure",id:"chart-directory-structure",level:2},{value:"Additional Files for Rancher Charts",id:"additional-files-for-rancher-charts",level:2},{value:"Chart.yaml annotations",id:"chartyaml-annotations",level:3},{value:"questions.yml",id:"questionsyml",level:3},{value:"Min/Max Rancher versions",id:"minmax-rancher-versions",level:3},{value:"Question Variable Reference",id:"question-variable-reference",level:3}],c={toc:u};function m(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},c,o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rancher's App Marketplace is based on Helm Repositories and Helm Charts. You can add HTTP based standard Helm Repositories as well as any Git Repository which contains charts."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For a complete walkthrough of developing charts, see the ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/"},"Chart Template Developer's Guide")," in the official Helm documentation.")),(0,n.kt)("h2",{id:"chart-types"},"Chart Types"),(0,n.kt)("p",null,"Rancher supports two different types of charts: Helm charts and Rancher charts."),(0,n.kt)("h3",{id:"helm-charts"},"Helm Charts"),(0,n.kt)("p",null,"Native Helm charts include an application along with other software required to run it. When deploying native Helm charts, you' can provide the chart's parameter values in a YAML editor."),(0,n.kt)("h3",{id:"rancher-charts"},"Rancher Charts"),(0,n.kt)("p",null,"Rancher charts are native helm charts with two files that enhance user experience: ",(0,n.kt)("inlineCode",{parentName:"p"},"app-readme.md")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"questions.yaml"),". Read more about them in ",(0,n.kt)("a",{parentName:"p",href:"#additional-files-for-rancher-charts"},"Additional Files for Rancher Charts.")),(0,n.kt)("p",null,"Rancher charts add simplified chart descriptions and configuration forms to make the application deployment easy. Rancher users do not need to read through the entire list of Helm variables to understand how to launch an application."),(0,n.kt)("h2",{id:"chart-directory-structure"},"Chart Directory Structure"),(0,n.kt)("p",null,"You can provide Helm Charts in a standard, HTTP based Helm Repository. For more information see the ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/chart_repository"},"Chart Repository Guide")," in the official Helm documentation."),(0,n.kt)("p",null,"Alternatively you can organize your charts in a Git Repository and directly add this to the App Marketplace."),(0,n.kt)("p",null,"The following table demonstrates the directory structure for a Git repository. The ",(0,n.kt)("inlineCode",{parentName:"p"},"charts")," directory is the top level directory under the repository base. Adding the repository to Rancher will expose all charts contained within it. The ",(0,n.kt)("inlineCode",{parentName:"p"},"questions.yaml"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"README.md"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"requirements.yml")," files are specific to Rancher charts, but are optional for chart customization."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<Repository-Base>/\n \u2502\n \u251c\u2500\u2500 charts/\n \u2502   \u251c\u2500\u2500 <Application Name>/      # This directory name will be surfaced in the Rancher UI as the chart name\n \u2502   \u2502   \u251c\u2500\u2500 <App Version>/   # Each directory at this level provides different app versions that will be selectable within the chart in the Rancher UI\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 Chart.yaml   # Required Helm chart information file.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 questions.yaml   # Form questions displayed within the Rancher UI. Questions display in Configuration Options.*\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 README.md         # Optional: Helm Readme file displayed within Rancher UI. This text displays in Detailed Descriptions.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 requirements.yml  # Optional: YAML file listing dependencies for the chart.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 values.yml        # Default configuration values for the chart.\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 templates/        # Directory containing templates that, when combined with values.yml, generates Kubernetes YAML.\n")),(0,n.kt)("h2",{id:"additional-files-for-rancher-charts"},"Additional Files for Rancher Charts"),(0,n.kt)("p",null,"Before you create your own custom catalog, you should have a basic understanding about how a Rancher chart differs from a native Helm chart. Rancher charts differ slightly from Helm charts in their directory structures. Rancher charts include two files that Helm charts do not."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"app-readme.md")),(0,n.kt)("p",{parentName:"li"},"  A file that provides descriptive text in the chart's UI header.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"questions.yml")),(0,n.kt)("p",{parentName:"li"},"  A file that contains questions for a form. These form questions simplify deployment of a chart. Without it, you must configure the deployment using a values YAML config, which is more difficult. The following images display the difference between a Rancher chart (which includes ",(0,n.kt)("inlineCode",{parentName:"p"},"questions.yml"),") and a native Helm chart (which does not)."),(0,n.kt)("figcaption",null,"Rancher Chart with ",(0,n.kt)("code",null,"questions.yml")," (top) vs. Helm Chart without (bottom)"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"questions.yml",src:a(38896).Z,width:"3476",height:"1150"}),"\n",(0,n.kt)("img",{alt:"values.yaml",src:a(29260).Z,width:"3486",height:"1172"})))),(0,n.kt)("h3",{id:"chartyaml-annotations"},"Chart.yaml annotations"),(0,n.kt)("p",null,"Rancher supports additional annotations that you can add to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," file. These annotations allow you to define application dependencies or configure additional UI defaults:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/auto-install"),(0,n.kt)("td",{parentName:"tr",align:null},"If set, will install the specified chart in the specified version before installing this chart"),(0,n.kt)("td",{parentName:"tr",align:null},"other-chart-name=1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/display-name"),(0,n.kt)("td",{parentName:"tr",align:null},"A display name that should be displayed in the App Marketplace instead of the chart name"),(0,n.kt)("td",{parentName:"tr",align:null},"Display Name of Chart")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/namespace"),(0,n.kt)("td",{parentName:"tr",align:null},"A fixed namespace where the chart should be deployed in. If set, this can't be changed by the user"),(0,n.kt)("td",{parentName:"tr",align:null},"fixed-namespace")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/release-name"),(0,n.kt)("td",{parentName:"tr",align:null},"A fixed release name for the Helm installation. If set, this can't be changed by the user"),(0,n.kt)("td",{parentName:"tr",align:null},"fixed-release-name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/requests-cpu"),(0,n.kt)("td",{parentName:"tr",align:null},"Total amount of CPU that should be unreserverd in the cluster. If less CPU is available, a warning will be shown"),(0,n.kt)("td",{parentName:"tr",align:null},"2000m")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/requests-memory"),(0,n.kt)("td",{parentName:"tr",align:null},"Total amount of memory that should be unreserverd in the cluster. If less memory is available, a warning will be shown"),(0,n.kt)("td",{parentName:"tr",align:null},"2Gi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/os"),(0,n.kt)("td",{parentName:"tr",align:null},"Restricts the OS where this chart can be installed. Possible values: ",(0,n.kt)("inlineCode",{parentName:"td"},"linux"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"windows"),". Default: no restriction"),(0,n.kt)("td",{parentName:"tr",align:null},"linux")))),(0,n.kt)("h3",{id:"questionsyml"},"questions.yml"),(0,n.kt)("p",null,"Inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"questions.yml"),", most of the content will be around the questions to ask the end user, but there are some additional fields that can be set in this file."),(0,n.kt)("h3",{id:"minmax-rancher-versions"},"Min/Max Rancher versions"),(0,n.kt)("p",null,"For each chart, you can add the minimum and/or maximum Rancher version, which determines whether or not this chart is available to be deployed from Rancher."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Even though Rancher release versions are prefixed with a ",(0,n.kt)("inlineCode",{parentName:"p"},"v"),", there is ",(0,n.kt)("em",{parentName:"p"},"no")," prefix for the release version when using this option.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rancher_min_version: 2.3.0\nrancher_max_version: 2.3.99\n")),(0,n.kt)("h3",{id:"question-variable-reference"},"Question Variable Reference"),(0,n.kt)("p",null,"This reference contains variables that you can use in ",(0,n.kt)("inlineCode",{parentName:"p"},"questions.yml")," nested under ",(0,n.kt)("inlineCode",{parentName:"p"},"questions:"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Variable"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"variable"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"Define the variable name specified in the ",(0,n.kt)("inlineCode",{parentName:"td"},"values.yml")," file, using ",(0,n.kt)("inlineCode",{parentName:"td"},"foo.bar")," for nested objects.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"label"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"Define the UI label.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"description"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the description of the variable.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Default to ",(0,n.kt)("inlineCode",{parentName:"td"},"string")," if not specified (current supported types are string, multiline, boolean, int, enum, password, storageclass, hostname, pvc, and secret).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"required"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Define if the variable is required or not (true ","|"," false)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"default"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the default value. Only used if there is no corresponding value in the ",(0,n.kt)("inlineCode",{parentName:"td"},"values.yml")," file.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"group"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Group questions by input value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min_length"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Min character length.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"max_length"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Max character length.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"min"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Min integer length.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"max"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Max integer length.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},"[]string"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the options when the variable type is ",(0,n.kt)("inlineCode",{parentName:"td"},"enum"),", for example: options:",(0,n.kt)("br",null),' - "ClusterIP" ',(0,n.kt)("br",null),' - "NodePort" ',(0,n.kt)("br",null),' - "LoadBalancer"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"valid_chars"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Regular expression for input chars validation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"invalid_chars"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Regular expression for invalid input chars validation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"subquestions"),(0,n.kt)("td",{parentName:"tr",align:null},"[]subquestion"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Add an array of subquestions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"show_if"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Show current variable if conditional variable is true. For example ",(0,n.kt)("inlineCode",{parentName:"td"},'show_if: "serviceType=Nodeport"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"show","_","subquestion_if"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Show subquestions if is true or equal to one of the options. for example ",(0,n.kt)("inlineCode",{parentName:"td"},'show_subquestion_if: "true"'))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"subquestions[]")," cannot contain ",(0,n.kt)("inlineCode",{parentName:"p"},"subquestions")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"show_subquestions_if")," keys, but all other keys in the above table are supported.")))}m.isMDXComponent=!0},29260:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/helm-app-2.6-e60ae79625f118adc52f04dfeb3ecb73.png"},38896:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rancher-app-2.6-e804785d84e3d5bbcbce9d059633dce1.png"}}]);
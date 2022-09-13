"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8701],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"v2.0.x Pipeline Documentation",weight:9e3,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/pipelines/docs-for-v2.0.x","/rancher/v2.0-v2.4/en/project-admin/pipelines/docs-for-v2.0.x","/rancher/v2.0-v2.4/en/k8s-in-rancher/pipelines/docs-for-v2.0.x","/rancher/v2.x/en/pipelines/docs-for-v2.0.x/"]},p=void 0,s={unversionedId:"reference-guides/pipelines/v2.0.x",id:"version-2.0-2.4/reference-guides/pipelines/v2.0.x",title:"v2.0.x Pipeline Documentation",description:"Note: This section describes the pipeline feature as implemented in Rancher v2.0.x. If you are using Rancher v2.1 or later, where pipelines have been significantly improved, please refer to the new documentation for v2.1 or later.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/pipelines/v2.0.x.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/v2.0.x",permalink:"/v2.0-v2.4/reference-guides/pipelines/v2.0.x",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/pipelines/v2.0.x.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"v2.0.x Pipeline Documentation",weight:9e3,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/pipelines/docs-for-v2.0.x","/rancher/v2.0-v2.4/en/project-admin/pipelines/docs-for-v2.0.x","/rancher/v2.0-v2.4/en/k8s-in-rancher/pipelines/docs-for-v2.0.x","/rancher/v2.x/en/pipelines/docs-for-v2.0.x/"]},sidebar:"tutorialSidebar",previous:{title:"Example YAML File",permalink:"/v2.0-v2.4/reference-guides/pipelines/example-yaml"},next:{title:"Security",permalink:"/v2.0-v2.4/pages-for-subheaders/rancher-security"}},u={},c=[{value:"Enabling CI Pipelines",id:"enabling-ci-pipelines",level:2},{value:"Creating CI Pipelines",id:"creating-ci-pipelines",level:2},{value:"Creating a New Stage",id:"creating-a-new-stage",level:2},{value:"Creating a New Step",id:"creating-a-new-step",level:2},{value:"Environment Variables",id:"environment-variables",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," This section describes the pipeline feature as implemented in Rancher v2.0.x. If you are using Rancher v2.1 or later, where pipelines have been significantly improved, please refer to the new documentation for ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/pipelines"},"v2.1 or later"),".")),(0,i.kt)("p",null,"Pipelines help you automate the software delivery process. You can integrate Rancher with GitHub to create a pipeline."),(0,i.kt)("p",null,"You can set up your pipeline to run a series of stages and steps to test your code and deploy it."),(0,i.kt)("dl",null,(0,i.kt)("dt",null,"Pipelines"),(0,i.kt)("dd",null,"Contain a series of stages and steps. Out-of-the-box, the pipelines feature supports fan out and in capabilities."),(0,i.kt)("dt",null,"Stages"),(0,i.kt)("dd",null,"Executed sequentially. The next stage will not execute until all of the steps within the stage execute."),(0,i.kt)("dt",null,"Steps"),(0,i.kt)("dd",null,"Are executed in parallel within a stage. ")),(0,i.kt)("h2",{id:"enabling-ci-pipelines"},"Enabling CI Pipelines"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select cluster from drop down.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under tools menu select pipelines.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Follow instructions for setting up github auth on page."))),(0,i.kt)("h2",{id:"creating-ci-pipelines"},"Creating CI Pipelines"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the project you want this pipeline to run in.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Resources > Pipelines.")," In versions before v2.3.0,click ",(0,i.kt)("strong",{parentName:"p"},"Workloads > Pipelines."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Add pipeline button.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter in your repository name (Autocomplete should help zero in on it quickly).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select Branch options."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only the branch {BRANCH NAME}: Only events triggered by changes to this branch will be built.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Everything but {BRANCH NAME}: Build any branch that triggered an event EXCEPT events from this branch.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All branches: Regardless of the branch that triggered the event always build."))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you want one path for master, but another for PRs or development/test/feature branches, create two separate pipelines."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the build trigger events. By default, builds will only happen by manually clicking build now in Rancher UI."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automatically build this pipeline whenever there is a git commit. (This respects the branch selection above)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automatically build this pipeline whenever there is a new PR.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automatically build the pipeline. (Allows you to configure scheduled builds similar to Cron)")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Add button."),(0,i.kt)("p",{parentName:"li"},"By default, Rancher provides a three stage pipeline for you. It consists of a build stage where you would compile, unit test, and scan code. The publish stage has a single step to publish a docker image."))),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a name to the pipeline in order to complete adding a pipeline.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the \u2018run a script\u2019 box under the \u2018Build\u2019 stage."),(0,i.kt)("p",{parentName:"li"},"Here you can set the image, or select from pre-packaged envs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure a shell script to run inside the container when building.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click Save to persist the changes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the \u201cpublish an image\u2019 box under the \u201cPublish\u201d stage.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the location of the Dockerfile. By default it looks in the root of the workspace. Instead, set the build context for building the image relative to the root of the workspace.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the image information."),(0,i.kt)("p",{parentName:"li"},"The registry is the remote registry URL. It is defaulted to Docker hub.\nRepository is the ",(0,i.kt)("inlineCode",{parentName:"p"},"<org>/<repo>")," in the repository.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the Tag. You can hard code a tag like \u2018latest\u2019 or select from a list of available variables.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If this is the first time using this registry, you can add the username/password for pushing the image. You must click save for the registry credentials AND also save for the modal."))),(0,i.kt)("h2",{id:"creating-a-new-stage"},"Creating a New Stage"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To add a new stage the user must click the \u2018add a new stage\u2019 link in either create or edit mode of the pipeline view.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Provide a name for the stage.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click save."))),(0,i.kt)("h2",{id:"creating-a-new-step"},"Creating a New Step"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to create / edit mode of the pipeline.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click \u201cAdd Step\u201d button in the stage that you would like to add a step in.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out the form as detailed above"))),(0,i.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"For your convenience the following environment variables are available in your build steps:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CICD_GIT_REPO_NAME"),(0,i.kt)("td",{parentName:"tr",align:null},"Repository Name (Stripped of Github Organization)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CICD_PIPELINE_NAME"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the pipeline")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CICD_GIT_BRANCH"),(0,i.kt)("td",{parentName:"tr",align:null},"Git branch of this event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CICD_TRIGGER_TYPE"),(0,i.kt)("td",{parentName:"tr",align:null},"Event that triggered the build")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CICD_PIPELINE_ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Rancher ID for the pipeline")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CICD_GIT_URL"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the Git repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CICD_EXECUTION_SEQUENCE"),(0,i.kt)("td",{parentName:"tr",align:null},"Build number of the pipeline")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CICD_EXECUTION_ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Combination of {CICD_PIPELINE_ID}-{CICD_EXECUTION_SEQUENCE}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CICD_GIT_COMMIT"),(0,i.kt)("td",{parentName:"tr",align:null},"Git commit ID being executed.")))))}d.isMDXComponent=!0}}]);
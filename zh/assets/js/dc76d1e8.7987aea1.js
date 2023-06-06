"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,k=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Creating a Custom Benchmark Version for Running a Cluster Scan"},c=void 0,l={unversionedId:"explanations/integrations-in-rancher/cis-scans/custom-benchmark",id:"version-2.5/explanations/integrations-in-rancher/cis-scans/custom-benchmark",title:"Creating a Custom Benchmark Version for Running a Cluster Scan",description:"Available as of v2.5.4",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/cis-scans/custom-benchmark.md",sourceDirName:"explanations/integrations-in-rancher/cis-scans",slug:"/explanations/integrations-in-rancher/cis-scans/custom-benchmark",permalink:"/zh/v2.5/explanations/integrations-in-rancher/cis-scans/custom-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/cis-scans/custom-benchmark.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Creating a Custom Benchmark Version for Running a Cluster Scan"},sidebar:"tutorialSidebar",previous:{title:"Skipped and Not Applicable Tests",permalink:"/zh/v2.5/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"},next:{title:"Continuous Delivery with Fleet",permalink:"/zh/v2.5/pages-for-subheaders/fleet-gitops-at-scale"}},p={},u=[{value:"1. Prepare the Custom Benchmark Version ConfigMap",id:"1-prepare-the-custom-benchmark-version-configmap",level:3},{value:"2. Add a Custom Benchmark Version to a Cluster",id:"2-add-a-custom-benchmark-version-to-a-cluster",level:3},{value:"3. Create a New Profile for the Custom Benchmark Version",id:"3-create-a-new-profile-for-the-custom-benchmark-version",level:3},{value:"4. Run a Scan Using the Custom Benchmark Version",id:"4-run-a-scan-using-the-custom-benchmark-version",level:3}],m={toc:u};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.5.4")),(0,r.kt)("p",null,"Each Benchmark Version defines a set of test configuration files that define the CIS tests to be run by the ",(0,r.kt)("a",{href:"https://github.com/aquasecurity/kube-bench",target:"_blank"},"kube-bench")," tool.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," application installs a few default Benchmark Versions which are listed under CIS Benchmark application menu."),(0,r.kt)("p",null,"But there could be some Kubernetes cluster setups that require custom configurations of the Benchmark tests. For example, the path to the Kubernetes config files or certs might be different than the standard location where the upstream CIS Benchmarks look for them."),(0,r.kt)("p",null,"It is now possible to create a custom Benchmark Version for running a cluster scan using the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," application."),(0,r.kt)("p",null,"When a cluster scan is run, you need to select a Profile which points to a specific Benchmark Version."),(0,r.kt)("p",null,"Follow all the steps below to add a custom Benchmark Version and run a scan using it."),(0,r.kt)("h3",{id:"1-prepare-the-custom-benchmark-version-configmap"},"1. Prepare the Custom Benchmark Version ConfigMap"),(0,r.kt)("p",null,"To create a custom benchmark version, first you need to create a ConfigMap containing the benchmark version's config files and upload it to your Kubernetes cluster where you want to run the scan."),(0,r.kt)("p",null,"To prepare a custom benchmark version ConfigMap, suppose we want to add a custom Benchmark Version named ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and inside this directory, place all the config YAML files that the ",(0,r.kt)("a",{href:"https://github.com/aquasecurity/kube-bench",target:"_blank"},"kube-bench")," tool looks for. For example, here are the config YAML files for a Generic CIS 1.5 Benchmark Version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/kube-bench/tree/master/cfg/cis-1.5"},"https://github.com/aquasecurity/kube-bench/tree/master/cfg/cis-1.5"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Place the complete ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file, which includes all the components that should be tested.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the Benchmark version name to the ",(0,r.kt)("inlineCode",{parentName:"p"},"target_mapping")," section of the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'target_mapping:\n  "foo":\n    - "master"\n    - "node"\n    - "controlplane"\n    - "etcd"\n    - "policies"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upload this directory to your Kubernetes Cluster by creating a ConfigMap:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl create configmap -n <namespace> foo --from-file=<path to directory foo>\n")))),(0,r.kt)("h3",{id:"2-add-a-custom-benchmark-version-to-a-cluster"},"2. Add a Custom Benchmark Version to a Cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Once the ConfigMap has been created in your cluster, navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer")," in the Rancher UI."),(0,r.kt)("li",{parentName:"ol"},"In the top left dropdown menu, click ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer > CIS Benchmark.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Benchmark Versions")," section, click ",(0,r.kt)("strong",{parentName:"li"},"Create.")),(0,r.kt)("li",{parentName:"ol"},"Enter the ",(0,r.kt)("strong",{parentName:"li"},"Name")," and a description for your custom benchmark version."),(0,r.kt)("li",{parentName:"ol"},"Choose the cluster provider that your benchmark version applies to."),(0,r.kt)("li",{parentName:"ol"},"Choose the ConfigMap you have uploaded from the dropdown."),(0,r.kt)("li",{parentName:"ol"},"Add the minimum and maximum Kubernetes version limits applicable, if any."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create."))),(0,r.kt)("h3",{id:"3-create-a-new-profile-for-the-custom-benchmark-version"},"3. Create a New Profile for the Custom Benchmark Version"),(0,r.kt)("p",null,"To run a scan using your custom benchmark version, you need to add a new Profile pointing to this benchmark version."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Once the custom benchmark version has been created in your cluster, navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer")," in the Rancher UI."),(0,r.kt)("li",{parentName:"ol"},"In the top left dropdown menu, click ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer > CIS Benchmark.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Profiles")," section, click ",(0,r.kt)("strong",{parentName:"li"},"Create.")),(0,r.kt)("li",{parentName:"ol"},"Provide a ",(0,r.kt)("strong",{parentName:"li"},"Name")," and description. In this example, we name it ",(0,r.kt)("inlineCode",{parentName:"li"},"foo-profile"),"."),(0,r.kt)("li",{parentName:"ol"},"Choose the Benchmark Version ",(0,r.kt)("inlineCode",{parentName:"li"},"foo")," from the dropdown."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create."))),(0,r.kt)("h3",{id:"4-run-a-scan-using-the-custom-benchmark-version"},"4. Run a Scan Using the Custom Benchmark Version"),(0,r.kt)("p",null,"Once the Profile pointing to your custom benchmark version ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," has been created, you can create a new Scan to run the custom test configs in the Benchmark Version."),(0,r.kt)("p",null,"To run a scan,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer")," in the Rancher UI. In the top left dropdown menu, click ",(0,r.kt)("strong",{parentName:"li"},"Cluster Explorer > CIS Benchmark.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Scans")," section, click ",(0,r.kt)("strong",{parentName:"li"},"Create.")),(0,r.kt)("li",{parentName:"ol"},"Choose the new cluster scan profile ",(0,r.kt)("inlineCode",{parentName:"li"},"foo-profile"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," A report is generated with the scan results. To see the results, click the name of the scan that appears."))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Skip Tests"},c=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",id:"how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",title:"Skip Tests",description:"CIS scans can be run using test profiles with user-defined skips.",source:"@site/docs/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",permalink:"/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests.md",tags:[],version:"current",lastUpdatedAt:1685574646,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"Skip Tests"},sidebar:"tutorialSidebar",previous:{title:"Run a Scan Periodically on a Schedule",permalink:"/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule"},next:{title:"View Reports",permalink:"/how-to-guides/advanced-user-guides/cis-scan-guides/view-reports"}},l={},u=[],d={toc:u};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"CIS scans can be run using test profiles with user-defined skips."),(0,n.kt)("p",null,"To skip tests, you will create a custom CIS scan profile. A profile contains the configuration for the CIS scan, which includes the benchmark versions to use and any specific tests to skip in that benchmark."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to run a CIS scan and click ",(0,n.kt)("strong",{parentName:"p"},"Explore"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"CIS Benchmark > Profile"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From here, you can create a profile in multiple ways. To make a new profile, click ",(0,n.kt)("strong",{parentName:"p"},"Create")," and fill out the form in the UI. To make a new profile based on an existing profile, go to the existing profile and click ",(0,n.kt)("strong",{parentName:"p"},"\u22ee Clone"),".  If you are filling out the form, add the tests to skip using the test IDs, using the relevant CIS Benchmark as a reference. If you are creating the new test profile as YAML, you will add the IDs of the tests to skip in the ",(0,n.kt)("inlineCode",{parentName:"p"},"skipTests")," directive. You will also give the profile a name:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cis.cattle.io/v1\nkind: ClusterScanProfile\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: clusterscan-operator\n    meta.helm.sh/release-namespace: cis-operator-system\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: "<example-profile>"\nspec:\n  benchmarkVersion: cis-1.5\n  skipTests:\n    - "1.1.20"\n    - "1.1.21"\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," A new CIS scan profile is created."),(0,n.kt)("p",null,"When you ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan"},"run a scan")," that uses this profile, the defined tests will be skipped during the scan. The skipped tests will be marked in the generated report as ",(0,n.kt)("inlineCode",{parentName:"p"},"Skip"),"."))}f.isMDXComponent=!0}}]);
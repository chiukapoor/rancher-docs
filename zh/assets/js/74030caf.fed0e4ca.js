"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(a),d=r,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},17149:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"Managing Catalog Apps"},p=void 0,s={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/managing-apps",id:"version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/managing-apps",title:"Managing Catalog Apps",description:"After deploying an application, one of the benefits of using an application versus individual workloads/resources is the ease of being able to manage many workloads/resources applications. Apps can be cloned, upgraded or rolled back.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/managing-apps.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/managing-apps",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/managing-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/managing-apps.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Managing Catalog Apps"},sidebar:"tutorialSidebar",previous:{title:"Creating Catalog Apps",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/creating-apps"},next:{title:"Multi-Cluster Apps",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/multi-cluster-apps"}},c={},u=[{value:"Cloning Catalog Applications",id:"cloning-catalog-applications",level:3},{value:"Upgrading Catalog Applications",id:"upgrading-catalog-applications",level:3},{value:"Rolling Back Catalog Applications",id:"rolling-back-catalog-applications",level:3},{value:"Deleting Catalog Application Deployments",id:"deleting-catalog-application-deployments",level:3}],g={toc:u};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After deploying an application, one of the benefits of using an application versus individual workloads/resources is the ease of being able to manage many workloads/resources applications. Apps can be cloned, upgraded or rolled back."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#cloning-catalog-applications"},"Cloning catalog applications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#upgrading-catalog-applications"},"Upgrading catalog applications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#rolling-back-catalog-applications"},"Rolling back catalog applications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deleting-catalog-application-deployments"},"Deleting catalog application deployments"))),(0,n.kt)("h3",{id:"cloning-catalog-applications"},"Cloning Catalog Applications"),(0,n.kt)("p",null,"After an application is deployed, you can easily clone it to use create another application with almost the same configuration. It saves you the work of manually filling in duplicate information."),(0,n.kt)("h3",{id:"upgrading-catalog-applications"},"Upgrading Catalog Applications"),(0,n.kt)("p",null,"After an application is deployed, you can easily upgrade to a different template version."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that contains the catalog application that you want to upgrade.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main navigation bar, choose ",(0,n.kt)("strong",{parentName:"p"},"Apps"),". In versions before v2.2.0, choose ",(0,n.kt)("strong",{parentName:"p"},"Catalog Apps")," on the main navigation bar. Click ",(0,n.kt)("strong",{parentName:"p"},"Launch"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the application that you want to upgrade, and then click the ","\u22ee"," to find ",(0,n.kt)("strong",{parentName:"p"},"Upgrade"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Template Version")," that you want to deploy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) Update your ",(0,n.kt)("strong",{parentName:"p"},"Configuration Options"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) Select whether or not you want to force the catalog application to be upgraded by checking the box for ",(0,n.kt)("strong",{parentName:"p"},"Delete and recreate resources if needed during the upgrade"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"In Kubernetes, some fields are designed to be immutable or cannot be updated directly. As of v2.2.0, you can now force your catalog application to be updated regardless of these fields. This will cause the catalog apps to be deleted and resources to be re-created if needed during the upgrade."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review the files in the ",(0,n.kt)("strong",{parentName:"p"},"Preview")," section. When you're satisfied, click ",(0,n.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),": Your application is updated. You can view the application status from the project's:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Workloads")," view"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Apps")," view. In versions before v2.2.0, this is the ",(0,n.kt)("strong",{parentName:"li"},"Catalog Apps")," view.")),(0,n.kt)("h3",{id:"rolling-back-catalog-applications"},"Rolling Back Catalog Applications"),(0,n.kt)("p",null,"After an application has been upgraded, you can easily rollback to a different template version."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that contains the catalog application that you want to upgrade.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main navigation bar, choose ",(0,n.kt)("strong",{parentName:"p"},"Apps"),". In versions before v2.2.0, choose ",(0,n.kt)("strong",{parentName:"p"},"Catalog Apps")," on the main navigation bar. Click ",(0,n.kt)("strong",{parentName:"p"},"Launch"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the application that you want to rollback, and then click the ","\u22ee"," to find ",(0,n.kt)("strong",{parentName:"p"},"Rollback"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Revision")," that you want to roll back to. By default, Rancher saves up to the last 10 revisions.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) Select whether or not you want to force the catalog application to be upgraded by checking the box for ",(0,n.kt)("strong",{parentName:"p"},"Delete and recreate resources if needed during the upgrade"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"In Kubernetes, some fields are designed to be immutable or cannot be updated directly. As of v2.2.0, you can now force your catalog application to be updated regardless of these fields. This will cause the catalog apps to be deleted and resources to be re-created if needed during the rollback."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Rollback"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),": Your application is updated. You can view the application status from the project's:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Workloads")," view"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Apps")," view. In versions before v2.2.0, this is the ",(0,n.kt)("strong",{parentName:"li"},"Catalog Apps")," view.")),(0,n.kt)("h3",{id:"deleting-catalog-application-deployments"},"Deleting Catalog Application Deployments"),(0,n.kt)("p",null,"As a safeguard to prevent you from unintentionally deleting other catalog applications that share a namespace, deleting catalog applications themselves does not delete the namespace they're assigned to."),(0,n.kt)("p",null,"Therefore, if you want to delete both an app and the namespace that contains the app, you should remove the app and the namespace separately:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Uninstall the app using the app's ",(0,n.kt)("inlineCode",{parentName:"p"},"uninstall")," function.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that contains the catalog application that you want to delete.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main menu, choose ",(0,n.kt)("strong",{parentName:"p"},"Namespaces"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the namespace running your catalog app. Select it and click ",(0,n.kt)("strong",{parentName:"p"},"Delete"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The catalog application deployment and its namespace are deleted."))}d.isMDXComponent=!0}}]);
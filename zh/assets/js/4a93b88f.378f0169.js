"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26490],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>k});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),k=a,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||o;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=s;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},24850:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>d});t(67294);var n=t(3905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={title:"\u5907\u4efd Docker \u5b89\u88c5\u7684 Rancher"},i=void 0,p={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",id:"version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",title:"\u5907\u4efd Docker \u5b89\u88c5\u7684 Rancher",description:"\u6210\u529f\u4f7f\u7528 Docker \u5b89\u88c5 Rancher \u540e\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5b9a\u671f\u521b\u5efa\u5907\u4efd\u3002\u6700\u8fd1\u521b\u5efa\u7684\u5907\u4efd\u80fd\u8ba9\u4f60\u5728\u610f\u5916\u707e\u96be\u53d1\u751f\u540e\u5feb\u901f\u8fdb\u884c\u6062\u590d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u5907\u4efd Docker \u5b89\u88c5\u7684 Rancher"},sidebar:"tutorialSidebar",previous:{title:"\u5c06 Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},next:{title:"\u6062\u590d\u5907\u4efd - Docker \u5b89\u88c5",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"}},u={},d=[{value:"\u5728\u4f60\u5f00\u59cb\u524d",id:"\u5728\u4f60\u5f00\u59cb\u524d",level:2},{value:"\u521b\u5efa\u5907\u4efd",id:"\u521b\u5efa\u5907\u4efd",level:2}],s={toc:d};function k(e){var{components:r}=e,c=l(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},s,c),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6210\u529f\u4f7f\u7528 Docker \u5b89\u88c5 Rancher \u540e\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5b9a\u671f\u521b\u5efa\u5907\u4efd\u3002\u6700\u8fd1\u521b\u5efa\u7684\u5907\u4efd\u80fd\u8ba9\u4f60\u5728\u610f\u5916\u707e\u96be\u53d1\u751f\u540e\u5feb\u901f\u8fdb\u884c\u6062\u590d\u3002"),(0,n.kt)("h2",{id:"\u5728\u4f60\u5f00\u59cb\u524d"},"\u5728\u4f60\u5f00\u59cb\u524d"),(0,n.kt)("p",null,"\u5728\u521b\u5efa\u5907\u4efd\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u5c06\u8f93\u5165\u4e00\u7cfb\u5217\u547d\u4ee4\u3002\u8bf7\u4f7f\u7528\u73af\u5883\u4e2d\u7684\u6570\u636e\u66ff\u6362\u5360\u4f4d\u7b26\u3002\u5360\u4f4d\u7b26\u7528\u5c16\u62ec\u53f7\u548c\u5927\u5199\u5b57\u6bcd\uff08\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"<EXAMPLE>"),"\uff09\u8868\u793a\u3002\u4ee5\u4e0b\u662f\u5e26\u6709\u5360\u4f4d\u7b26\u7684\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run  --volumes-from rancher-data-<DATE> -v $PWD:/backup busybox tar pzcvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz /var/lib/rancher\n")),(0,n.kt)("p",null,"\u5728\u8be5\u547d\u4ee4\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"<DATE>")," \u662f\u6570\u636e\u5bb9\u5668\u548c\u5907\u4efd\u521b\u5efa\u65e5\u671f\u7684\u5360\u4f4d\u7b26\uff08\u4f8b\u5982\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"9-27-18"),"\uff09\u3002"),(0,n.kt)("p",null,"\u8bf7\u4ea4\u53c9\u53c2\u8003\u4e0b\u65b9\u7684\u56fe\u7247\u548c\u8868\u683c\uff0c\u4e86\u89e3\u83b7\u53d6\u6b64\u5360\u4f4d\u7b26\u6570\u636e\u7684\u65b9\u6cd5\u3002\u5728\u5f00\u59cb",(0,n.kt)("a",{parentName:"p",href:"#%E5%88%9B%E5%BB%BA%E5%A4%87%E4%BB%BD"},"\u4ee5\u4e0b\u6b65\u9aa4"),"\u4e4b\u524d\uff0c\u8bf7\u8bb0\u4e0b\u6216\u590d\u5236\u8fd9\u4e9b\u4fe1\u606f\u3002"),(0,n.kt)("sup",null,"\u7ec8\u7aef ",(0,n.kt)("code",null,"docker ps")," \u547d\u4ee4\uff0c\u663e\u793a\u5982\u4f55\u627e\u5230 ",(0,n.kt)("code",null,"<RANCHER_CONTAINER_TAG>")," \u548c ",(0,n.kt)("code",null,"<RANCHER_CONTAINER_NAME>")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5360\u4f4d\u7b26\u53c2\u8003",src:t(50953).Z,width:"1275",height:"258"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_TAG>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,n.kt)("td",{parentName:"tr",align:null},"\u9996\u6b21\u5b89\u88c5\u62c9\u53d6\u7684 rancher/rancher \u955c\u50cf\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_NAME>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684 Rancher \u5bb9\u5668\u7684\u540d\u79f0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f60\u4e3a\u5176\u521b\u5efa\u5907\u4efd\u7684 Rancher \u7248\u672c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<DATE>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5bb9\u5668\u6216\u5907\u4efd\u7684\u521b\u5efa\u65e5\u671f\u3002")))),(0,n.kt)("br",null),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8fdc\u7a0b\u8fde\u63a5\u767b\u5f55\u5230 Rancher Server \u6240\u5728\u7684\u4e3b\u673a\u5e76\u8f93\u5165\u547d\u4ee4 ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps")," \u4ee5\u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\uff0c\u4ece\u800c\u83b7\u5f97 ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_TAG>")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>"),"\u3002\u4f60\u8fd8\u53ef\u4ee5\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps -a")," \u547d\u4ee4\u67e5\u770b\u505c\u6b62\u4e86\u7684\u5bb9\u5668\u3002\u5728\u521b\u5efa\u5907\u4efd\u671f\u95f4\uff0c\u4f60\u968f\u65f6\u53ef\u4ee5\u8fd0\u884c\u8fd9\u4e9b\u547d\u4ee4\u6765\u83b7\u5f97\u5e2e\u52a9\u3002"),(0,n.kt)("h2",{id:"\u521b\u5efa\u5907\u4efd"},"\u521b\u5efa\u5907\u4efd"),(0,n.kt)("p",null,"\u6b64\u6b65\u9aa4\u5c06\u521b\u5efa\u4e00\u4e2a\u5907\u4efd\u6587\u4ef6\u3002\u5982\u679c Rancher \u9047\u5230\u707e\u96be\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u5907\u4efd\u6587\u4ef6\u8fdb\u884c\u8fd8\u539f\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8fdc\u7a0b\u7ec8\u7aef\u8fde\u63a5\uff0c\u767b\u5f55\u5230\u8fd0\u884c Rancher Server \u7684\u8282\u70b9\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u505c\u6b62\u5f53\u524d\u8fd0\u884c Rancher Server \u7684\u5bb9\u5668\u3002\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," \u66ff\u6362\u4e3a\u4f60\u7684 Rancher \u5bb9\u5668\u7684\u540d\u79f0\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker stop <RANCHER_CONTAINER_NAME>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{id:"backup"}),"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ece\u521a\u624d\u505c\u6b62\u7684 Rancher \u5bb9\u5668\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5bb9\u5668\u3002\u8bf7\u66ff\u6362\u547d\u4ee4\u4e2d\u7684\u5360\u4f4d\u7b26\uff1a",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker create --volumes-from <RANCHER_CONTAINER_NAME> --name rancher-data-<DATE> rancher/rancher:<RANCHER_CONTAINER_TAG>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{id:"tarball"}),"\u4ece\u4f60\u521a\u521a\u521b\u5efa\u7684\u6570\u636e\u5bb9\u5668\uff08",(0,n.kt)("code",null,"rancher-data-<DATE>"),"\uff09\u4e2d\uff0c\u521b\u5efa\u4e00\u4e2a\u5907\u4efd tar \u5305\uff08",(0,n.kt)("code",null,"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),"\uff09\u3002\u66ff\u6362\u5360\u4f4d\u7b26\u6765\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker run  --volumes-from rancher-data-<DATE> -v $PWD:/backup:z busybox tar pzcvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz /var/lib/rancher\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u7ed3\u679c"),"\uff1a\u5c4f\u5e55\u4e0a\u5c06\u8fd0\u884c\u547d\u4ee4\u6d41\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"ls")," \u547d\u4ee4\uff0c\u786e\u8ba4\u5907\u4efd\u538b\u7f29\u5305\u5df2\u521b\u5efa\u6210\u529f\u3002\u538b\u7f29\u5305\u7684\u540d\u79f0\u683c\u5f0f\u7c7b\u4f3c ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u5907\u4efd\u538b\u7f29\u5305\u79fb\u52a8\u5230 Rancher Server \u5916\u7684\u5b89\u5168\u4f4d\u7f6e\u3002\u7136\u540e\u4ece Rancher Server \u4e2d\u5220\u9664 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-data-<DATE>")," \u5bb9\u5668\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u542f Rancher Server\u3002\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," \u66ff\u6362\u4e3a Rancher \u5bb9\u5668\u7684\u540d\u79f0\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker start <RANCHER_CONTAINER_NAME>\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u521b\u5efa\u4e86 Rancher Server \u6570\u636e\u7684\u5907\u4efd\u538b\u7f29\u5305\u3002\u5982\u679c\u4f60\u9700\u8981\u6062\u590d\u5907\u4efd\u6570\u636e\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"\u6062\u590d\u5907\u4efd\uff1aDocker \u5b89\u88c5"),"\u3002"))}k.isMDXComponent=!0},50953:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/placeholder-ref-70c9571e1a85164291c80a55c7c614b5.png"}}]);
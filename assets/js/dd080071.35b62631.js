"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=i,k=b["".concat(a,".").concat(f)]||b[f]||s[f]||o;return n?r.createElement(k,c(c({ref:t},p),{},{components:n})):r.createElement(k,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=b;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},27721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"kubectl Utility"},a=void 0,u={unversionedId:"reference-guides/cli-with-rancher/kubectl-utility",id:"reference-guides/cli-with-rancher/kubectl-utility",title:"kubectl Utility",description:"kubectl",source:"@site/docs/reference-guides/cli-with-rancher/kubectl-utility.md",sourceDirName:"reference-guides/cli-with-rancher",slug:"/reference-guides/cli-with-rancher/kubectl-utility",permalink:"/reference-guides/cli-with-rancher/kubectl-utility",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cli-with-rancher/kubectl-utility.md",tags:[],version:"current",lastUpdatedAt:1667002146,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"kubectl Utility"},sidebar:"tutorialSidebar",previous:{title:"Rancher CLI",permalink:"/reference-guides/cli-with-rancher/rancher-cli"},next:{title:"API",permalink:"/pages-for-subheaders/about-the-api"}},p={},s=[{value:"kubectl",id:"kubectl",level:2},{value:"kubectl Utility",id:"kubectl-utility",level:3},{value:"Authentication with kubectl and kubeconfig Tokens with TTL",id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl",level:3}],b={toc:s};function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"kubectl"},"kubectl"),(0,r.kt)("p",null,"Interact with Rancher using kubectl."),(0,r.kt)("h3",{id:"kubectl-utility"},"kubectl Utility"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," utility. See ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"install kubectl"),"."),(0,r.kt)("p",null,"Configure kubectl by visiting your cluster in the Rancher Web UI, clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubeconfig"),", copying contents, and putting them into your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," file."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," successfully."),(0,r.kt)("h3",{id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl"},"Authentication with kubectl and kubeconfig Tokens with TTL"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Requirements")),(0,r.kt)("p",null,"If admins have ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens#disable-tokens-in-generated-kubeconfigs"},"kubeconfig token generation turned off"),", the kubeconfig file requires the ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/cli-with-rancher/rancher-cli"},"Rancher CLI")," to be present in your PATH when you run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". Otherwise, you\u2019ll see an error like:\n",(0,r.kt)("inlineCode",{parentName:"p"},'Unable to connect to the server: getting credentials: exec: exec: "rancher": executable file not found in $PATH'),"."),(0,r.kt)("p",null,"This feature enables kubectl to authenticate with the Rancher server and get a new kubeconfig token when required. The following auth providers are currently supported:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Local"),(0,r.kt)("li",{parentName:"ol"},"Active Directory (LDAP only)"),(0,r.kt)("li",{parentName:"ol"},"FreeIPA"),(0,r.kt)("li",{parentName:"ol"},"OpenLDAP"),(0,r.kt)("li",{parentName:"ol"},"SAML providers: Ping, Okta, ADFS, Keycloak, Shibboleth")),(0,r.kt)("p",null,"When you first run kubectl, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),", it will ask you to pick an auth provider and log in with the Rancher server. The kubeconfig token is cached in the path where you run kubectl under ",(0,r.kt)("inlineCode",{parentName:"p"},"./.cache/token"),". This token is valid until ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens#disable-tokens-in-generated-kubeconfigs"},"it expires"),", or ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens#deleting-tokens"},"gets deleted from the Rancher server"),". Upon expiration, the next ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," will ask you to log in with the Rancher server again."))}f.isMDXComponent=!0}}]);
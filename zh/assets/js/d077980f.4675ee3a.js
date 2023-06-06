"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33458],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?t.createElement(g,c(c({ref:r},p),{},{components:n})):t.createElement(g,c({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7864:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});n(67294);var t=n(3905);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Single Node Rancher in Docker"},s=void 0,l={unversionedId:"pages-for-subheaders/single-node-rancher-in-docker",id:"version-2.0-2.4/pages-for-subheaders/single-node-rancher-in-docker",title:"Single Node Rancher in Docker",description:"The following docs will discuss HTTP proxy configuration and advanced options for Docker installs.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/single-node-rancher-in-docker.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/single-node-rancher-in-docker",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/single-node-rancher-in-docker",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/single-node-rancher-in-docker.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662583931,formattedLastUpdatedAt:"2022\u5e749\u67087\u65e5",frontMatter:{title:"Single Node Rancher in Docker"},sidebar:"tutorialSidebar",previous:{title:"vSphere Node Template Configuration in Rancher before v2.0.4",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/prior-to-v2.0.4"},next:{title:"HTTP Proxy Configuration",permalink:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/http-proxy-configuration"}},p={},u=[],f={toc:u};function d(e){var{components:r}=e,n=c(e,["components"]);return(0,t.kt)("wrapper",i(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}({},f,n),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The following docs will discuss ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/http-proxy-configuration"},"HTTP proxy configuration")," and ",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/advanced-options"},"advanced options")," for Docker installs."))}d.isMDXComponent=!0}}]);
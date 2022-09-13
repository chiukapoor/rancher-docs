"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50657],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(i,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11741:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],s={title:"RKE Add-On Install",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/"]},i=void 0,d={unversionedId:"pages-for-subheaders/helm2-rke-add-on",id:"version-2.0-2.4/pages-for-subheaders/helm2-rke-add-on",title:"RKE Add-On Install",description:"#### Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-rke-add-on.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm2-rke-add-on",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-rke-add-on.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"RKE Add-On Install",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/"]},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/troubleshooting"},next:{title:"Kubernetes Install with External Load Balancer (TCP/Layer 4)",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-layer-4-lb"}},u={},c=[],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"important-rke-add-on-install-is-only-supported-up-to-rancher-v208"},(0,o.kt)("strong",{parentName:"h4"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,o.kt)("p",{parentName:"blockquote"},"Please use the Rancher helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Kubernetes Install "),"."),(0,o.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-4-lb"},"Kubernetes installation with External Load Balancer (TCP/Layer 4)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-7-lb"},"Kubernetes installation with External Load Balancer (HTTPS/Layer 7)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy"},"HTTP Proxy Configuration for a Kubernetes installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-troubleshooting"},"Troubleshooting RKE Add-on Installs"))))}h.isMDXComponent=!0}}]);
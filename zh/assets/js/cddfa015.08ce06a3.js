"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"HTTP Proxy Configuration"},c=void 0,s={unversionedId:"reference-guides/single-node-rancher-in-docker/http-proxy-configuration",id:"version-2.5/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",title:"HTTP Proxy Configuration",description:"If you operate Rancher behind a proxy and you want to access services through the proxy (such as retrieving catalogs), you must provide Rancher information about your proxy. As Rancher is written in Go, it uses the common proxy environment variables as shown below.",source:"@site/versioned_docs/version-2.5/reference-guides/single-node-rancher-in-docker/http-proxy-configuration.md",sourceDirName:"reference-guides/single-node-rancher-in-docker",slug:"/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",permalink:"/zh/v2.5/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/single-node-rancher-in-docker/http-proxy-configuration.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"HTTP Proxy Configuration"},sidebar:"tutorialSidebar",previous:{title:"Single Node Rancher in Docker",permalink:"/zh/v2.5/pages-for-subheaders/single-node-rancher-in-docker"},next:{title:"Advanced Options for Docker Installs",permalink:"/zh/v2.5/reference-guides/single-node-rancher-in-docker/advanced-options"}},p={},u=[{value:"Docker Installation",id:"docker-installation",level:2}],d={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you operate Rancher behind a proxy and you want to access services through the proxy (such as retrieving catalogs), you must provide Rancher information about your proxy. As Rancher is written in Go, it uses the common proxy environment variables as shown below."),(0,r.kt)("p",null,"Make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," contains the network addresses, network address ranges and domains that should be excluded from using the proxy."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP_PROXY"),(0,r.kt)("td",{parentName:"tr",align:null},"Proxy address to use when initiating HTTP connection(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTPS_PROXY"),(0,r.kt)("td",{parentName:"tr",align:null},"Proxy address to use when initiating HTTPS connection(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NO_PROXY"),(0,r.kt)("td",{parentName:"tr",align:null},"Network address(es), network address range(s) and domains to exclude from using the proxy when initiating connection(s)")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")," NO_PROXY must be in uppercase to use network range (CIDR) notation.")),(0,r.kt)("h2",{id:"docker-installation"},"Docker Installation"),(0,r.kt)("p",null,"Passing environment variables to the Rancher container can be done using ",(0,r.kt)("inlineCode",{parentName:"p"},"-e KEY=VALUE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--env KEY=VALUE"),". Required values for ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," in a ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker Installation")," are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"localhost")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"10.0.0.0/8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cattle-system.svc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".svc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".cluster.local"))),(0,r.kt)("p",null,"The example below is based on a proxy server accessible at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://192.168.0.1:3128"),", and excluding usage the proxy when accessing network range ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.10.0/24")," and every hostname under the domain ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -e HTTP_PROXY="http://192.168.10.1:3128" \\\n  -e HTTPS_PROXY="http://192.168.10.1:3128" \\\n  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,cattle-system.svc,192.168.10.0/24,.svc,.cluster.local,example.com" \\\n  --privileged \\\n  rancher/rancher:latest\n')),(0,r.kt)("p",null,"As of Rancher v2.5, privileged access is ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker#privileged-access-for-rancher-v2-5"},"required.")))}m.isMDXComponent=!0}}]);
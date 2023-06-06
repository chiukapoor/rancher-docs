"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"4. \u8bbe\u7f6e Istio Gateway"},l=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",id:"version-2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",title:"4. \u8bbe\u7f6e Istio Gateway",description:"\u6bcf\u4e2a\u96c6\u7fa4\u7684\u7f51\u5173\u53ef\u4ee5\u6709\u81ea\u5df1\u7684\u7aef\u53e3\u6216\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u8fd9\u4e0e\u670d\u52a1\u7f51\u683c\u65e0\u5173\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a Rancher \u914d\u7f6e\u7684\u96c6\u7fa4\u90fd\u6709\u4e00\u4e2a NGINX Ingress Controller \u6765\u5141\u8bb8\u6d41\u91cf\u8fdb\u5165\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway.md",tags:[],version:"2.6",lastUpdatedAt:1669187684,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{title:"4. \u8bbe\u7f6e Istio Gateway"},sidebar:"tutorialSidebar",previous:{title:"3. \u4f7f\u7528 Istio Sidecar \u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},next:{title:"5. \u8bbe\u7f6e Istio \u7684\u6d41\u91cf\u7ba1\u7406\u7ec4\u4ef6",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"}},u={},c=[{value:"\u542f\u7528 Istio Gateway",id:"\u542f\u7528-istio-gateway",level:2},{value:"Istio Gateway \u793a\u4f8b",id:"istio-gateway-\u793a\u4f8b",level:2},{value:"\u5728 Web \u6d4f\u89c8\u5668\u8bbf\u95ee ProductPage \u670d\u52a1",id:"\u5728-web-\u6d4f\u89c8\u5668\u8bbf\u95ee-productpage-\u670d\u52a1",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u786e\u8ba4 Kubernetes \u7f51\u5173\u4e0e Istio \u7684 Ingress Controller \u5339\u914d",id:"\u786e\u8ba4-kubernetes-\u7f51\u5173\u4e0e-istio-\u7684-ingress-controller-\u5339\u914d",level:3},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:3}],g={toc:c};function d(e){var{components:t}=e,s=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6bcf\u4e2a\u96c6\u7fa4\u7684\u7f51\u5173\u53ef\u4ee5\u6709\u81ea\u5df1\u7684\u7aef\u53e3\u6216\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u8fd9\u4e0e\u670d\u52a1\u7f51\u683c\u65e0\u5173\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a Rancher \u914d\u7f6e\u7684\u96c6\u7fa4\u90fd\u6709\u4e00\u4e2a NGINX Ingress Controller \u6765\u5141\u8bb8\u6d41\u91cf\u8fdb\u5165\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"\u65e0\u8bba\u662f\u5426\u5b89\u88c5\u4e86 Istio\uff0c\u4f60\u90fd\u53ef\u4ee5\u4f7f\u7528 NGINX Ingress Controller\u3002\u5982\u679c\u8fd9\u662f\u4f60\u96c6\u7fa4\u7684\u552f\u4e00\u7f51\u5173\uff0cIstio \u5c06\u80fd\u591f\u5c06\u6d41\u91cf\u4ece\u96c6\u7fa4\u5185\u90e8\u7684\u670d\u52a1\u8def\u7531\u5230\u96c6\u7fa4\u5185\u90e8\u7684\u53e6\u4e00\u4e2a\u670d\u52a1\uff0c\u4f46 Istio \u5c06\u65e0\u6cd5\u63a5\u6536\u6765\u81ea\u96c6\u7fa4\u5916\u90e8\u7684\u6d41\u91cf\u3002"),(0,r.kt)("p",null,"\u8981\u8ba9 Istio \u63a5\u6536\u5916\u90e8\u6d41\u91cf\uff0c\u4f60\u9700\u8981\u542f\u7528 Istio \u7684\u7f51\u5173\uff0c\u4f5c\u4e3a\u5916\u90e8\u6d41\u91cf\u7684\u5357\u5317\u4ee3\u7406\u3002\u542f\u7528 Istio Gateway \u540e\uff0c\u4f60\u7684\u96c6\u7fa4\u5c06\u6709\u4e24\u4e2a Ingress\u3002"),(0,r.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u4e3a\u4f60\u7684\u670d\u52a1\u8bbe\u7f6e Kubernetes \u7f51\u5173\u3002\u6b64 Kubernetes \u8d44\u6e90\u6307\u5411 Istio \u5bf9\u96c6\u7fa4 Ingress Gateway \u7684\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u5668\u5c06\u6d41\u91cf\u8def\u7531\u5230\u670d\u52a1\u7f51\u683c\u4e2d\uff0c\u6216\u4f7f\u7528 Istio \u7684 NodePort \u7f51\u5173\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e NodePort \u7f51\u5173\u3002"),(0,r.kt)("p",null,"\u6709\u5173 Istio Gateway \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/reference/config/networking/v1alpha3/gateway/"},"Istio \u6587\u6863"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u542f\u7528 Istio \u7684\u96c6\u7fa4\u53ef\u4ee5\u6709\u4e24\u4e2a ingress\uff0c\u5206\u522b\u662f\u9ed8\u8ba4\u7684 Nginx ingress \u548c\u9ed8\u8ba4\u7684 Istio controller",src:n(74025).Z,width:"691",height:"572"})),(0,r.kt)("h2",{id:"\u542f\u7528-istio-gateway"},"\u542f\u7528 Istio Gateway"),(0,r.kt)("p",null,"Ingress Gateway \u662f\u4e00\u4e2a Kubernetes \u670d\u52a1\uff0c\u5c06\u90e8\u7f72\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002Istio Gateway \u652f\u6301\u66f4\u591a\u81ea\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u66f4\u52a0\u7075\u6d3b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Istio > \u7f51\u5173"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7c98\u8d34\u4f60\u7684 Istio Gateway yaml\uff0c\u6216\u9009\u62e9",(0,r.kt)("strong",{parentName:"li"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u90e8\u7f72\u7f51\u5173\uff0c\u5c06\u4f7f\u7528\u5e94\u7528\u7684\u89c4\u5219\u6765\u8def\u7531\u6d41\u91cf\u3002"),(0,r.kt)("h2",{id:"istio-gateway-\u793a\u4f8b"},"Istio Gateway \u793a\u4f8b"),(0,r.kt)("p",null,"\u5728\u6f14\u793a\u5de5\u4f5c\u8d1f\u8f7d\u793a\u4f8b\u65f6\uff0c\u6211\u4eec\u5728\u670d\u52a1\u4e2d\u6dfb\u52a0 BookInfo \u5e94\u7528\u90e8\u7f72\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a Istio Gateway\uff0c\u4ee5\u4fbf\u4ece\u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee\u8be5\u5e94\u7528\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Istio > \u7f51\u5173"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236\u5e76\u7c98\u8d34\u4e0b\u9762\u7684 Gateway YAML\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1alpha3\nkind: Gateway\nmetadata:\n  name: bookinfo-gateway\nspec:\n  selector:\n    istio: ingressgateway # use istio default controller\n  servers:\n  - port:\n      number: 80\n      name: http\n      protocol: HTTP\n    hosts:\n    - "*"\n---\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u90e8\u7f72\u4e3a Gateway \u63d0\u4f9b\u6d41\u91cf\u8def\u7531\u7684 VirtualService\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Istio > VirtualServices"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236\u5e76\u7c98\u8d34\u4e0b\u9762\u7684 VirtualService YAML\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: bookinfo\nspec:\n  hosts:\n  - "*"\n  gateways:\n  - bookinfo-gateway\n  http:\n  - match:\n    - uri:\n        exact: /productpage\n    - uri:\n        prefix: /static\n    - uri:\n        exact: /login\n    - uri:\n        exact: /logout\n    - uri:\n        prefix: /api/v1/products\n    route:\n    - destination:\n        host: productpage\n        port:\n          number: 9080\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5df2\u914d\u7f6e\u7f51\u5173\u8d44\u6e90\uff0cIstio \u73b0\u5728\u53ef\u4ee5\u63a5\u6536\u96c6\u7fa4\u5916\u90e8\u7684\u6d41\u91cf\u3002"),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u786e\u8ba4\u8d44\u6e90\u5b58\u5728\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get gateway -A\n")),(0,r.kt)("p",null,"\u7ed3\u679c\u5e94\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7c7b\u4f3c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME               AGE\nbookinfo-gateway   64m\n")),(0,r.kt)("h3",{id:"\u5728-web-\u6d4f\u89c8\u5668\u8bbf\u95ee-productpage-\u670d\u52a1"},"\u5728 Web \u6d4f\u89c8\u5668\u8bbf\u95ee ProductPage \u670d\u52a1"),(0,r.kt)("p",null,"\u8981\u6d4b\u8bd5 BookInfo \u5e94\u7528\u662f\u5426\u5df2\u6b63\u786e\u90e8\u7f72\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Istio \u63a7\u5236\u5668 IP \u548c\u7aef\u53e3\u4ee5\u53ca\u5728 Kubernetes \u7f51\u5173\u8d44\u6e90\u4e2d\u6307\u5b9a\u7684\u8bf7\u6c42\u540d\u79f0\uff0c\u5728 Web \u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u8be5\u5e94\u7528\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://<IP of Istio controller>:<Port of istio controller>/productpage")),(0,r.kt)("p",null,"\u8981\u83b7\u53d6 Ingress Gateway URL \u548c\u7aef\u53e3\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5411\u4e0b\u6eda\u52a8\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system"),"\u4e2d\uff0c\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-ingressgateway")," \u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5728\u6b64\u5de5\u4f5c\u8d1f\u8f7d\u7684\u540d\u79f0\u4e0b\uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"80/tcp")," \u7684\u94fe\u63a5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb\u5176\u4e2d\u4e00\u4e2a\u94fe\u63a5\u3002\u7136\u540e\uff0c\u4f60\u7684 Web \u6d4f\u89c8\u5668\u4e2d\u4f1a\u663e\u793a Ingress Gateway \u7684 URL\u3002\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"/productpage")," \u5c3e\u9644\u5230 URL\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u80fd\u4f1a\u5728 Web \u6d4f\u89c8\u5668\u4e2d\u770b\u5230 BookInfo \u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u68c0\u67e5 Istio \u63a7\u5236\u5668 URL \u548c\u7aef\u53e3\u7684\u5e2e\u52a9\uff0c\u8bf7\u5c1d\u8bd5\u8fd0\u884c ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/tasks/traffic-management/ingress/ingress-control/#determining-the-ingress-ip-and-ports"},"Istio \u6587\u6863"),"\u4e2d\u7684\u547d\u4ee4\u3002"),(0,r.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://istio.io/docs/tasks/traffic-management/ingress/ingress-control/#troubleshooting"},"\u5b98\u65b9 Istio \u6587\u6863"),"\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u6765\u68c0\u67e5\u5916\u90e8\u8bf7\u6c42\u7684\u6b63\u786e ingress \u4e3b\u673a\u548c ingress \u7aef\u53e3\u3002"),(0,r.kt)("h3",{id:"\u786e\u8ba4-kubernetes-\u7f51\u5173\u4e0e-istio-\u7684-ingress-controller-\u5339\u914d"},"\u786e\u8ba4 Kubernetes \u7f51\u5173\u4e0e Istio \u7684 Ingress Controller \u5339\u914d"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u6267\u884c\u672c\u8282\u4e2d\u7684\u6b65\u9aa4\u4ee5\u786e\u4fdd Kubernetes \u7f51\u5173\u914d\u7f6e\u6b63\u786e\u3002"),(0,r.kt)("p",null,"\u5728\u7f51\u5173\u8d44\u6e90\u4e2d\uff0c\u9009\u62e9\u5668\u901a\u8fc7\u6807\u7b7e\u6765\u5f15\u7528 Istio \u7684\u9ed8\u8ba4 Ingress Controller\uff0c\u5176\u4e2d\u6807\u7b7e\u7684\u952e\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Istio"),"\uff0c\u503c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ingressgateway"),"\u3002\u8981\u786e\u4fdd\u6807\u7b7e\u9002\u7528\u4e8e\u7f51\u5173\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5411\u4e0b\u6eda\u52a8\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system"),"\u4e2d\uff0c\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-ingressgateway")," \u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5355\u51fb\u6b64\u5de5\u4f5c\u8d1f\u8f7d\u7684\u540d\u79f0\u5e76\u8f6c\u5230",(0,r.kt)("strong",{parentName:"li"},"\u6807\u7b7e\u548c\u6ce8\u91ca"),"\u90e8\u5206\u3002\u4f60\u5e94\u8be5\u770b\u5230\u5b83\u5177\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"istio")," \u952e\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"ingressgateway")," \u503c\u3002\u8fd9\u786e\u8ba4\u4e86 Gateway \u8d44\u6e90\u4e2d\u7684\u9009\u62e9\u5668\u4e0e Istio \u7684\u9ed8\u8ba4 ingress controller \u5339\u914d\u3002")),(0,r.kt)("h3",{id:"\u540e\u7eed\u6b65\u9aa4"},"\u540e\u7eed\u6b65\u9aa4"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"\u8bbe\u7f6e Istio \u7684\u6d41\u91cf\u7ba1\u7406\u7ec4\u4ef6")))}d.isMDXComponent=!0},74025:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/istio-ingress-3ca2b3bfa19fe1f0d38b74966b383ac0.svg"}}]);
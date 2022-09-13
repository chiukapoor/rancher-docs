"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93853],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85256:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],i={title:"Template for an RKE Cluster with a Recognized CA Certificate and SSL Termination on Layer 7 Load Balancer",weight:4,aliases:["/rancher/v2.0-v2.4/en/installation/options/cluster-yml-templates/3-node-externalssl-recognizedca","/rancher/v2.x/en/installation/resources/advanced/cluster-yml-templates/3-node-externalssl-recognizedca/"]},l=void 0,c={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-externalssl-recognizedca",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-externalssl-recognizedca",title:"Template for an RKE Cluster with a Recognized CA Certificate and SSL Termination on Layer 7 Load Balancer",description:"RKE uses a cluster.yml file to install and configure your Kubernetes cluster.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-externalssl-recognizedca.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-externalssl-recognizedca",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-externalssl-recognizedca",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-externalssl-recognizedca.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663111363,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Template for an RKE Cluster with a Recognized CA Certificate and SSL Termination on Layer 7 Load Balancer",weight:4,aliases:["/rancher/v2.0-v2.4/en/installation/options/cluster-yml-templates/3-node-externalssl-recognizedca","/rancher/v2.x/en/installation/resources/advanced/cluster-yml-templates/3-node-externalssl-recognizedca/"]},sidebar:"tutorialSidebar",previous:{title:"Template for an RKE Cluster with a Self-signed Certificate and SSL Termination on Layer 7 Load Balancer",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-externalssl-certificate"},next:{title:"Docker Install with TLS Termination at Layer-7 NGINX Load Balancer",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer"}},d={},p=[],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"RKE uses a cluster.yml file to install and configure your Kubernetes cluster."),(0,s.kt)("p",null,"This template is intended to be used for RKE add-on installs, which are only supported up to Rancher v2.0.8. Please use the Rancher Helm chart if you are installing a newer Rancher version."),(0,s.kt)("p",null,"The following template can be used for the cluster.yml if you have a setup with:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Layer 7 load balancer with SSL termination (HTTPS)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/"},"NGINX Ingress controller")," ")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"For more options, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE Documentation: Config Options"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'nodes:\n  - address: <IP> # hostname or IP to access nodes\n    user: <USER> # root user (usually \'root\')\n    role: [controlplane,etcd,worker] # K8s roles for node\n    ssh_key_path: <PEM_FILE> # path to PEM file\n  - address: <IP>\n    user: <USER>\n    role: [controlplane,etcd,worker]\n    ssh_key_path: <PEM_FILE>\n  - address: <IP>\n    user: <USER>\n    role: [controlplane,etcd,worker]\n    ssh_key_path: <PEM_FILE>\n\nservices:\n  etcd:\n    snapshot: true\n    creation: 6h\n    retention: 24h\n\naddons: |-\n  ---\n  kind: Namespace\n  apiVersion: v1\n  metadata:\n    name: cattle-system\n  ---\n  kind: ServiceAccount\n  apiVersion: v1\n  metadata:\n    name: cattle-admin\n    namespace: cattle-system\n  ---\n  kind: ClusterRoleBinding\n  apiVersion: rbac.authorization.k8s.io/v1\n  metadata:\n    name: cattle-crb\n    namespace: cattle-system\n  subjects:\n  - kind: ServiceAccount\n    name: cattle-admin\n    namespace: cattle-system\n  roleRef:\n    kind: ClusterRole\n    name: cluster-admin\n    apiGroup: rbac.authorization.k8s.io\n  ---\n  apiVersion: v1\n  kind: Service\n  metadata:\n    namespace: cattle-system\n    name: cattle-service\n    labels:\n      app: cattle\n  spec:\n    ports:\n    - port: 80\n      targetPort: 80\n      protocol: TCP\n      name: http\n    selector:\n      app: cattle\n  ---\n  apiVersion: extensions/v1beta1\n  kind: Ingress\n  metadata:\n    namespace: cattle-system\n    name: cattle-ingress-http\n    annotations:\n      nginx.ingress.kubernetes.io/proxy-connect-timeout: "30"\n      nginx.ingress.kubernetes.io/proxy-read-timeout: "1800"   # Max time in seconds for ws to remain shell window open\n      nginx.ingress.kubernetes.io/proxy-send-timeout: "1800"   # Max time in seconds for ws to remain shell window open\n      nginx.ingress.kubernetes.io/ssl-redirect: "false"        # Disable redirect to ssl\n  spec:\n    rules:\n    - host: <FQDN>\n      http:\n        paths:\n        - backend:\n            serviceName: cattle-service\n            servicePort: 80\n  ---\n  kind: Deployment\n  apiVersion: extensions/v1beta1\n  metadata:\n    namespace: cattle-system\n    name: cattle\n  spec:\n    replicas: 1\n    template:\n      metadata:\n        labels:\n          app: cattle\n      spec:\n        serviceAccountName: cattle-admin\n        containers:\n        # Rancher install via RKE addons is only supported up to v2.0.8\n        - image: rancher/rancher:v2.0.8\n          args:\n          - --no-cacerts\n          imagePullPolicy: Always\n          name: cattle-server\n  #       env:\n  #       - name: HTTP_PROXY\n  #         value: "http://your_proxy_address:port"\n  #       - name: HTTPS_PROXY\n  #         value: "http://your_proxy_address:port"\n  #       - name: NO_PROXY\n  #         value: "localhost,127.0.0.1,0.0.0.0,10.43.0.0/16,your_network_ranges_that_dont_need_proxy_to_access"\n          livenessProbe:\n            httpGet:\n              path: /ping\n              port: 80\n            initialDelaySeconds: 60\n            periodSeconds: 60\n          readinessProbe:\n            httpGet:\n              path: /ping\n              port: 80\n            initialDelaySeconds: 20\n            periodSeconds: 10\n          ports:\n          - containerPort: 80\n            protocol: TCP\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),k=a,m=d["".concat(p,".").concat(k)]||d[k]||i[k]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>i});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"2. \u5b89\u88c5 Kubernetes"},p=void 0,c={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",id:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",title:"2. \u5b89\u88c5 Kubernetes",description:"\u57fa\u7840\u8bbe\u65bd\u914d\u7f6e\u597d\u540e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u6765\u5b89\u88c5 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1685572449,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"2. \u5b89\u88c5 Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"1. \u914d\u7f6e\u57fa\u7840\u8bbe\u65bd",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure"},next:{title:"3. \u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"}},u={},i=[{value:"\u79bb\u7ebf\u4ee3\u7406",id:"\u79bb\u7ebf\u4ee3\u7406",level:4},{value:"\u521b\u5efa RKE \u96c6\u7fa4",id:"\u521b\u5efa-rke-\u96c6\u7fa4",level:3},{value:"\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6",id:"\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},k=d("Tabs"),m=d("TabItem"),h={toc:i};function b(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u57fa\u7840\u8bbe\u65bd\u914d\u7f6e\u597d\u540e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u6765\u5b89\u88c5 Rancher\u3002"),(0,n.kt)("p",null,"\u8bbe\u7f6e RKE\u3001RKE2 \u6216 K3s \u7684\u6b65\u9aa4\u5982\u4e0b\u6240\u793a\u3002"),(0,n.kt)("p",null,"\u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u5c06\u4ee3\u7406\u7684 IP \u5730\u5740\u548c\u7aef\u53e3\u5bfc\u51fa\u5230\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u5e76\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u4e3a\u4f60\u5f53\u524d\u7684 shell \u8bbe\u7f6e HTTP_PROXY \u53d8\u91cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'export proxy_host="10.0.0.5:8888"\nexport HTTP_PROXY=http://${proxy_host}\nexport HTTPS_PROXY=http://${proxy_host}\nexport NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16\n')),(0,n.kt)(k,{mdxType:"Tabs"},(0,n.kt)(m,{value:"K3s",mdxType:"TabItem"},(0,n.kt)("p",null,"\u9996\u5148\u5728 K3s systemd \u670d\u52a1\u4e0a\u914d\u7f6e HTTP \u4ee3\u7406\u8bbe\u7f6e\uff0c\u8ba9 K3s \u7684 containerd \u53ef\u4ee5\u901a\u8fc7\u4ee3\u7406\u62c9\u53d6\u955c\u50cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cat <<'EOF' | sudo tee /etc/default/k3s > /dev/null\nHTTP_PROXY=http://${proxy_host}\nHTTPS_PROXY=http://${proxy_host}\"\nNO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\nEOF\n")),(0,n.kt)("p",null,"\u7136\u540e\u8fd0\u884c K3s \u5b89\u88c5\u811a\u672c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 K3s \u96c6\u7fa4\u3002\u786e\u4fdd\u4f60\u5b89\u88c5\u7684 K3s \u7248\u672c\u53d7 ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/"},"Rancher \u652f\u6301"),"\u3002"),(0,n.kt)("p",null,"\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9\u4e0a\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u96c6\u7fa4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=v1.xx K3S_TOKEN=your_secret sh -s - server --cluster-init\n")),(0,n.kt)("p",null,"\u7136\u540e\u52a0\u5165\u5176\u4ed6\u8282\u70b9\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=v1.xx K3S_TOKEN=your_secret sh -s - server --server https://<ip or hostname of server1>:6443\n")),(0,n.kt)("p",null,"\u6709\u5173\u5b89\u88c5 K3s \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.k3s.io/installation"},"K3s \u5b89\u88c5\u6587\u6863"),"\u3002"),(0,n.kt)("p",null,"\u5982\u9700\u67e5\u770b\u96c6\u7fa4\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl cluster-info\nkubectl get pods --all-namespaces\n"))),(0,n.kt)(m,{value:"RKE2",mdxType:"TabItem"},(0,n.kt)("p",null,"\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\uff0c\u8fd0\u884c RKE2 \u5b89\u88c5\u811a\u672c\u3002\u786e\u4fdd\u4f60\u5b89\u88c5\u7684 RKE2 \u7248\u672c\u53d7 ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/"},"Rancher \u652f\u6301"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=v1.xx sh -\n")),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u5fc5\u987b\u5728 RKE2 systemd \u670d\u52a1\u4e0a\u914d\u7f6e HTTP \u4ee3\u7406\u8bbe\u7f6e\uff0c\u8ba9 RKE2 \u7684 containerd \u53ef\u4ee5\u901a\u8fc7\u4ee3\u7406\u62c9\u53d6\u955c\u50cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cat <<'EOF' | sudo tee /etc/default/rke2-server > /dev/null\nHTTP_PROXY=http://${proxy_host}\nHTTPS_PROXY=http://${proxy_host}\"\nNO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\nEOF\n")),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6309\u7167 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/ha"},"RKE2 \u9ad8\u53ef\u7528\u6027\u6587\u6863"),"\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u521b\u5efa RKE2 \u914d\u7f6e\u6587\u4ef6\u3002"),(0,n.kt)("p",null,"\u4e4b\u540e\u542f\u52a8\u5e76\u542f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"rke2-server")," \u670d\u52a1\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"systemctl enable rke2-server.service\nsystemctl start rke2-server.service\n")),(0,n.kt)("p",null,"\u6709\u5173\u5b89\u88c5 RKE2 \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rke2.io"},"RKE2 \u5b89\u88c5\u6587\u6863"),"\u3002"),(0,n.kt)("p",null,"\u5982\u9700\u67e5\u770b\u96c6\u7fa4\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export KUBECONFIG=/etc/rancher/rke2/rke2.yaml\nalias kubectl=/var/lib/rancher/rke2/bin/kubectl\nkubectl cluster-info\nkubectl get pods --all-namespaces\n"))),(0,n.kt)(m,{value:"RKE",mdxType:"TabItem"},(0,n.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u5728\u6240\u6709\u4e09\u4e2a Linux \u8282\u70b9\u4e0a\u5b89\u88c5 Docker \u5e76\u8bbe\u7f6e HTTP \u4ee3\u7406\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e09\u4e2a\u8282\u70b9\u4e0a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u914d\u7f6e apt \u4ee5\u5728\u5b89\u88c5\u5305\u65f6\u4f7f\u7528\u8fd9\u4e2a\u4ee3\u7406\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u4e0d\u662f Ubuntu\uff0c\u8bf7\u76f8\u5e94\u8c03\u6574\u6b65\u9aa4\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'cat <<\'EOF\' | sudo tee /etc/apt/apt.conf.d/proxy.conf > /dev/null\nAcquire::http::Proxy "http://${proxy_host}/";\nAcquire::https::Proxy "http://${proxy_host}/";\nEOF\n')),(0,n.kt)("p",null,"\u5b89\u88c5 Docker\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl -sL https://releases.rancher.com/install-docker/19.03.sh | sh\n")),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u786e\u4fdd\u4f60\u7684\u5f53\u524d\u7528\u6237\u80fd\u591f\u5728\u6ca1\u6709 sudo \u7684\u60c5\u51b5\u4e0b\u8bbf\u95ee Docker Daemon\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo usermod -aG docker YOUR_USERNAME\n")),(0,n.kt)("p",null,"\u914d\u7f6e Docker Daemon \u4f7f\u7528\u4ee3\u7406\u6765\u62c9\u53d6\u955c\u50cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'sudo mkdir -p /etc/systemd/system/docker.service.d\ncat <<\'EOF\' | sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf > /dev/null\n[Service]\nEnvironment="HTTP_PROXY=http://${proxy_host}"\nEnvironment="HTTPS_PROXY=http://${proxy_host}"\nEnvironment="NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16"\nEOF\n')),(0,n.kt)("p",null,"\u8981\u5e94\u7528\u914d\u7f6e\uff0c\u8bf7\u91cd\u65b0\u542f\u52a8 Docker Daemon\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload\nsudo systemctl restart docker\n")),(0,n.kt)("h4",{id:"\u79bb\u7ebf\u4ee3\u7406"},"\u79bb\u7ebf\u4ee3\u7406"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"v2.6.4 \u7684\u65b0\u529f\u80fd")),(0,n.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u5728\u914d\u7f6e\u7684\u79bb\u7ebf\u96c6\u7fa4\u4e2d\u914d\u7f6e\u4e3b\u673a\u9a71\u52a8\u96c6\u7fa4\uff0c\u4ee5\u4f7f\u7528\u4ee3\u7406\u8fdb\u884c\u51fa\u7ad9\u8fde\u63a5\u3002"),(0,n.kt)("p",null,"\u9664\u4e86\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e\u9ed8\u8ba4\u89c4\u5219\u5916\uff0c\u4f60\u8fd8\u9700\u8981\u989d\u5916\u6dfb\u52a0\u5982\u4e0b\u6240\u793a\u7684\u89c4\u5219\uff0c\u4ee5\u4ece\u4ee3\u7406\u7684 Rancher \u73af\u5883\u4e2d\u914d\u7f6e\u4e3b\u673a\u9a71\u52a8\u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"\u6839\u636e\u4f60\u7684\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/apt/apt.conf.d/proxy.conf"),"\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"acl SSL_ports port 22\nacl SSL_ports port 2376\n\nacl Safe_ports port 22      # ssh\nacl Safe_ports port 2376    # docker port\n")),(0,n.kt)("h3",{id:"\u521b\u5efa-rke-\u96c6\u7fa4"},"\u521b\u5efa RKE \u96c6\u7fa4"),(0,n.kt)("p",null,"\u5728\u80fd\u901a\u8fc7 SSH \u8bbf\u95ee Linux \u8282\u70b9\u7684\u4e3b\u673a\u4e0a\uff0c\u4f60\u9700\u8981\u6709\u51e0\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u6765\u521b\u5efa\u96c6\u7fa4\u5e76\u4e0e\u4e4b\u4ea4\u4e92\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#download-the-rke-binary"},"RKE CLI binary"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo curl -fsSL -o /usr/local/bin/rke https://github.com/rancher/rke/releases/download/v1.1.4/rke_linux-amd64\nsudo chmod +x /usr/local/bin/rke\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"\nchmod +x ./kubectl\nsudo mv ./kubectl /usr/local/bin/kubectl\n')),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u521b\u5efa\u4e00\u4e2a\u63cf\u8ff0 RKE \u96c6\u7fa4\u7684 YAML \u6587\u4ef6\u3002\u786e\u4fdd\u8282\u70b9\u7684 IP \u5730\u5740\u548c SSH \u7528\u6237\u540d\u662f\u6b63\u786e\u7684\u3002\u6709\u5173\u96c6\u7fa4 YAML \u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"nodes:\n  - address: 10.0.1.200\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.201\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.202\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n\nservices:\n  etcd:\n    backup_config:\n      interval_hours: 12\n      retention: 6\n")),(0,n.kt)("p",null,"\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u521b\u5efa Kubernetes \u96c6\u7fa4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yaml\n")),(0,n.kt)("p",null,"RKE \u4f1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate")," \u7684\u72b6\u6001\u6587\u4ef6\u3002\u5982\u679c\u4f60\u9700\u8981\u66f4\u65b0\u6216\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e\uff0c\u6216\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4\uff0c\u5219\u9700\u8981\u4f7f\u7528\u8be5\u6587\u4ef6\u3002RKE \u8fd8\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yaml")," \u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u6587\u4ef6\u5728\u672c\u5730\u4f7f\u7528 kubectl \u6216 Helm \u7b49\u5de5\u5177\u8fde\u63a5\u5230\u8fdc\u7aef\u7684 Kubernetes \u96c6\u7fa4\u3002\u8bf7\u5c06\u8fd9\u4e9b\u6587\u4ef6\u4fdd\u5b58\u5728\u5b89\u5168\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u4e2d\u3002"),(0,n.kt)("p",null,"\u5982\u9700\u67e5\u770b\u96c6\u7fa4\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export KUBECONFIG=kube_config_cluster.yaml\nkubectl cluster-info\nkubectl get pods --all-namespaces\n")),(0,n.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u9a8c\u8bc1\u4f60\u7684\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668\u662f\u5426\u5de5\u4f5c\uff0cDNS \u6761\u76ee\u662f\u5426\u8bbe\u7f6e\u6b63\u786e\u3002\u5982\u679c\u4f60\u5411\u5176\u4e2d\u4e4b\u4e00\u53d1\u9001\u8bf7\u6c42\uff0c\u4f60\u4f1a\u6536\u5230\u6765\u81ea Ingress Controller \u7684 HTTP 404 \u54cd\u5e94\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ curl 10.0.1.100\ndefault backend - 404\n$ curl rancher.example.com\ndefault backend - 404\n")),(0,n.kt)("h3",{id:"\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6"},"\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6"),(0,n.kt)("admonition",{title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u7ef4\u62a4\u3001\u6392\u9664\u95ee\u9898\u548c\u5347\u7ea7\u96c6\u7fa4\u9700\u8981\u7528\u5230\u4ee5\u4e0b\u6587\u4ef6\uff0c\u8bf7\u59a5\u5584\u4fdd\u7ba1\u8fd9\u4e9b\u6587\u4ef6\uff1a")),(0,n.kt)("p",null,"\u5c06\u4ee5\u4e0b\u6587\u4ef6\u7684\u526f\u672c\u4fdd\u5b58\u5728\u5b89\u5168\u4f4d\u7f6e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),"\uff1aRKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kube_config_cluster.yml"),"\uff1a\u96c6\u7fa4\u7684 ",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig \u6587\u4ef6"),"\u3002\u8be5\u6587\u4ef6\u5305\u542b\u53ef\u5b8c\u5168\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),"\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes \u96c6\u7fa4\u72b6\u6001\u6587\u4ef6"),"\u3002\u6b64\u6587\u4ef6\u5305\u542b\u96c6\u7fa4\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5305\u62ec RKE \u914d\u7f6e\u548c\u8bc1\u4e66\u3002")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u540e\u4e24\u4e2a\u6587\u4ef6\u540d\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-cluster")," \u90e8\u5206\u53d6\u51b3\u4e8e\u4f60\u547d\u540d RKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u3002")))),(0,n.kt)("h3",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,n.kt)("p",null,"\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"\u6545\u969c\u6392\u9664"),"\u9875\u9762\u3002"),(0,n.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"},"\u5b89\u88c5 Rancher")))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93420],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(a),g=r,k=m["".concat(i,".").concat(g)]||m[g]||c[g]||o;return a?n.createElement(k,l(l({ref:e},s),{},{components:a})):n.createElement(k,l({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10089:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={title:"Amazon NLB"},i=void 0,d={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nlb",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nlb",title:"Amazon NLB",description:"Objectives",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nlb.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nlb",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nlb",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nlb.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Amazon NLB"},sidebar:"tutorialSidebar",previous:{title:"NGINX",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nginx"},next:{title:"2. Install Kubernetes with RKE",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-kubernetes-rke"}},s={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Create Target Groups",id:"create-target-groups",level:2},{value:"Target Group (TCP port 443)",id:"target-group-tcp-port-443",level:3},{value:"Target Group (TCP port 80)",id:"target-group-tcp-port-80",level:3},{value:"Register Targets",id:"register-targets",level:2},{value:"Create Your NLB",id:"create-your-nlb",level:2},{value:"Add listener to NLB for TCP port 80",id:"add-listener-to-nlb-for-tcp-port-80",level:2}],m={toc:c};function g(t){var{components:e}=t,p=l(t,["components"]);return(0,n.kt)("wrapper",o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},m,p),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"objectives"},"Objectives"),(0,n.kt)("p",null,"Configuring an Amazon NLB is a multistage process. We've broken it down into multiple tasks so that it's easy to follow."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#create-target-groups"},"Create Target Groups")),(0,n.kt)("p",{parentName:"li"},"Begin by creating two target groups for the ",(0,n.kt)("strong",{parentName:"p"},"TCP")," protocol, one regarding TCP port 443 and one regarding TCP port 80 (providing redirect to TCP port 443). You'll add your Linux nodes to these groups.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#register-targets"},"Register Targets")),(0,n.kt)("p",{parentName:"li"},"Add your Linux nodes to the target groups.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#create-your-nlb"},"Create Your NLB")),(0,n.kt)("p",{parentName:"li"},"Use Amazon's Wizard to create an Network Load Balancer. As part of this process, you'll add the target groups you created in ",(0,n.kt)("strong",{parentName:"p"},"1. Create Target Groups"),"."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Rancher only supports using the Amazon NLB when terminating traffic in ",(0,n.kt)("inlineCode",{parentName:"p"},"tcp")," mode for port 443 rather than ",(0,n.kt)("inlineCode",{parentName:"p"},"tls")," mode. This is due to the fact that the NLB does not inject the correct headers into requests when terminated at the NLB. This means that if you want to use certificates managed by the Amazon Certificate Manager (ACM), you should use an ELB or ALB.")),(0,n.kt)("h2",{id:"create-target-groups"},"Create Target Groups"),(0,n.kt)("p",null,"Your first NLB configuration step is to create two target groups. Technically, only port 443 is needed to access Rancher, but its convenient to add a listener for port 80 which will be redirected to port 443 automatically. The NGINX ingress controller on the nodes will make sure that port 80 gets redirected to port 443."),(0,n.kt)("p",null,"Log into the ",(0,n.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/"},"Amazon AWS Console")," to get started, make sure to select the ",(0,n.kt)("strong",{parentName:"p"},"Region")," where your EC2 instances (Linux nodes) are created."),(0,n.kt)("p",null,"The Target Groups configuration resides in the ",(0,n.kt)("strong",{parentName:"p"},"Load Balancing")," section of the ",(0,n.kt)("strong",{parentName:"p"},"EC2")," service. Select ",(0,n.kt)("strong",{parentName:"p"},"Services")," and choose ",(0,n.kt)("strong",{parentName:"p"},"EC2"),", find the section ",(0,n.kt)("strong",{parentName:"p"},"Load Balancing")," and open ",(0,n.kt)("strong",{parentName:"p"},"Target Groups"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(84898).Z,width:"300",height:"582"})),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Create target group")," to create the first target group, regarding TCP port 443."),(0,n.kt)("h3",{id:"target-group-tcp-port-443"},"Target Group (TCP port 443)"),(0,n.kt)("p",null,"Configure the first target group according to the table below. Screenshots of the configuration are shown just below the table."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Setting"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Target Group Name"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-tcp-443"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TCP"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"443"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Target type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"instance"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VPC"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose your VPC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protocol",(0,n.kt)("br",null),"(Health Check)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"HTTP"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path",(0,n.kt)("br",null),"(Health Check)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/healthz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port (Advanced health check)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"override"),",",(0,n.kt)("inlineCode",{parentName:"td"},"80"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Healthy threshold (Advanced health)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Unhealthy threshold (Advanced)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Timeout (Advanced)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"6 seconds"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interval (Advanced)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"10 second"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Success codes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"200-399"))))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Screenshot Target group TCP port 443 settings"),(0,n.kt)("br",null),"\n",(0,n.kt)("img",{src:a(86405).Z,width:"1112",height:"1020"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Screenshot Target group TCP port 443 Advanced settings"),(0,n.kt)("br",null),"\n",(0,n.kt)("img",{src:a(85150).Z,width:"1120",height:"548"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Create target group")," to create the second target group, regarding TCP port 80."),(0,n.kt)("h3",{id:"target-group-tcp-port-80"},"Target Group (TCP port 80)"),(0,n.kt)("p",null,"Configure the second target group according to the table below. Screenshots of the configuration are shown just below the table."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Setting"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Target Group Name"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-tcp-80"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"TCP"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"80"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Target type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"instance"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VPC"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose your VPC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protocol",(0,n.kt)("br",null),"(Health Check)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"HTTP"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path",(0,n.kt)("br",null),"(Health Check)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/healthz"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port (Advanced health check)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"traffic port"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Healthy threshold (Advanced health)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Unhealthy threshold (Advanced)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Timeout (Advanced)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"6 seconds"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interval (Advanced)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"10 second"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Success codes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"200-399"))))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Screenshot Target group TCP port 80 settings"),(0,n.kt)("br",null),"\n",(0,n.kt)("img",{src:a(99449).Z,width:"1102",height:"1022"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Screenshot Target group TCP port 80 Advanced settings"),(0,n.kt)("br",null),"\n",(0,n.kt)("img",{src:a(563).Z,width:"1112",height:"556"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"register-targets"},"Register Targets"),(0,n.kt)("p",null,"Next, add your Linux nodes to both target groups."),(0,n.kt)("p",null,"Select the target group named ",(0,n.kt)("strong",{parentName:"p"},"rancher-tcp-443"),", click the tab ",(0,n.kt)("strong",{parentName:"p"},"Targets")," and choose ",(0,n.kt)("strong",{parentName:"p"},"Edit"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(85550).Z,width:"624",height:"736"})),(0,n.kt)("p",null,"Select the instances (Linux nodes) you want to add, and click ",(0,n.kt)("strong",{parentName:"p"},"Add to registered"),"."),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Screenshot Add targets to target group TCP port 443"),(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(53623).Z,width:"1094",height:"1136"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Screenshot Added targets to target group TCP port 443"),(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(65392).Z,width:"1586",height:"656"})),(0,n.kt)("p",null,"When the instances are added, click ",(0,n.kt)("strong",{parentName:"p"},"Save")," on the bottom right of the screen."),(0,n.kt)("p",null,"Repeat those steps, replacing ",(0,n.kt)("strong",{parentName:"p"},"rancher-tcp-443")," with ",(0,n.kt)("strong",{parentName:"p"},"rancher-tcp-80"),". The same instances need to be added as targets to this target group."),(0,n.kt)("h2",{id:"create-your-nlb"},"Create Your NLB"),(0,n.kt)("p",null,"Use Amazon's Wizard to create an Network Load Balancer. As part of this process, you'll add the target groups you created in ",(0,n.kt)("a",{parentName:"p",href:"#create-target-groups"},"Create Target Groups"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From your web browser, navigate to the ",(0,n.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/"},"Amazon EC2 Console"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the navigation pane, choose ",(0,n.kt)("strong",{parentName:"p"},"LOAD BALANCING")," > ",(0,n.kt)("strong",{parentName:"p"},"Load Balancers"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create Load Balancer"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Network Load Balancer")," and click ",(0,n.kt)("strong",{parentName:"p"},"Create"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the ",(0,n.kt)("strong",{parentName:"p"},"Step 1: Configure Load Balancer")," form."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Basic Configuration")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name: ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Scheme: ",(0,n.kt)("inlineCode",{parentName:"p"},"internal")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"internet-facing")),(0,n.kt)("p",{parentName:"li"},"The Scheme that you choose for your NLB is dependent on the configuration of your instances/VPC. If your instances do not have public IPs associated with them, or you will only be accessing Rancher internally, you should set your NLB Scheme to ",(0,n.kt)("inlineCode",{parentName:"p"},"internal")," rather than ",(0,n.kt)("inlineCode",{parentName:"p"},"internet-facing"),".")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Listeners")),(0,n.kt)("p",{parentName:"li"},"  Add the ",(0,n.kt)("strong",{parentName:"p"},"Load Balancer Protocols")," and ",(0,n.kt)("strong",{parentName:"p"},"Load Balancer Ports")," below."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TCP"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"443")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Availability Zones")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Select Your ",(0,n.kt)("strong",{parentName:"li"},"VPC")," and ",(0,n.kt)("strong",{parentName:"li"},"Availability Zones"),"."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the ",(0,n.kt)("strong",{parentName:"p"},"Step 2: Configure Routing")," form."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Target Group")," drop-down, choose ",(0,n.kt)("strong",{parentName:"p"},"Existing target group"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Name")," drop-down, choose ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-tcp-443"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Advanced health check settings"),", and configure ",(0,n.kt)("strong",{parentName:"p"},"Interval")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"10 seconds"),".")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete ",(0,n.kt)("strong",{parentName:"p"},"Step 3: Register Targets"),". Since you registered your targets earlier, all you have to do is click ",(0,n.kt)("strong",{parentName:"p"},"Next: Review"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete ",(0,n.kt)("strong",{parentName:"p"},"Step 4: Review"),". Look over the load balancer details and click ",(0,n.kt)("strong",{parentName:"p"},"Create")," when you're satisfied.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After AWS creates the NLB, click ",(0,n.kt)("strong",{parentName:"p"},"Close"),"."))),(0,n.kt)("h2",{id:"add-listener-to-nlb-for-tcp-port-80"},"Add listener to NLB for TCP port 80"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select your newly created NLB and select the ",(0,n.kt)("strong",{parentName:"p"},"Listeners")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add listener"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"TCP"),":",(0,n.kt)("inlineCode",{parentName:"p"},"80")," as ",(0,n.kt)("strong",{parentName:"p"},"Protocol")," : ",(0,n.kt)("strong",{parentName:"p"},"Port"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add action")," and choose ",(0,n.kt)("strong",{parentName:"p"},"Forward to..."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Forward to")," drop-down, choose ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-tcp-80"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save")," in the top right of the screen."))))}g.isMDXComponent=!0},53623:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add-targets-targetgroup-443-331e2f186b568860b9d8700b7acfc1ea.png"},65392:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/added-targets-targetgroup-443-e076e0c70c61c458767ccb7bc17e9361.png"},85150:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-targetgroup-443-advanced-75286b8bc2fd57a5bca2891ab6c3d926.png"},86405:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-targetgroup-443-0b49466581c7f9a06f671859b3418e80.png"},563:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-targetgroup-80-advanced-c5b620330d14e31c4446fb3492c8b343.png"},99449:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-targetgroup-80-6f04bcfd2f7b94842daba76e1c112db2.png"},84898:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ec2-loadbalancing-03908e11aa18f39035bd718aaeb337e0.png"},85550:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/edit-targetgroup-443-1143314c2ed28b80d6b1daf6068bf52e.png"}}]);
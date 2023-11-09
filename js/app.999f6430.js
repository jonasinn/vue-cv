(function(){"use strict";var e={743:function(e,t,n){var r=n(963),i=n(252);function a(e,t,n,r,a,o){const s=(0,i.up)("Cv");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s,{cvData:a.cvData},null,8,["cvData"])])}const o={class:"main-page"};function s(e,t,n,r,a,s){const l=(0,i.up)("CvTop"),c=(0,i.up)("CvEntry"),u=(0,i.up)("CvSection");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l,{cvData:n.cvData},null,8,["cvData"]),(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.cvData.sections,((e,t)=>((0,i.wg)(),(0,i.j4)(u,{class:"cv-section",key:t,title:e?.title},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e?.entries?e.entries:[],((e,t)=>((0,i.wg)(),(0,i.j4)(c,{class:"cv-entry",key:t,entry:e},null,8,["entry"])))),128))])),_:2},1032,["title"])))),128))])],64)}var l=n(577);const c={class:"entry"},u={class:"head"},d={key:0,class:"bold"},f={key:1},v={key:2},p=["innerHTML"];function y(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",u,[n.entry?.title?((0,i.wg)(),(0,i.iD)("h4",d,(0,l.zw)(n.entry.title),1)):(0,i.kq)("",!0),n.entry?.subtitle?((0,i.wg)(),(0,i.iD)("h4",f,(0,l.zw)(n.entry.subtitle),1)):(0,i.kq)("",!0),n.entry?.start?((0,i.wg)(),(0,i.iD)("small",v,(0,l.zw)(n.entry.start)+" - "+(0,l.zw)(n.entry?.end),1)):(0,i.kq)("",!0)]),n.entry?.body?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"body",innerHTML:n.entry.body},null,8,p)):(0,i.kq)("",!0)])}var g={name:"CvEntry",props:{entry:{type:Object,default:{}}}},m=n(744);const w=(0,m.Z)(g,[["render",y]]);var h=w;const b={class:"cv-section"};function D(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("h1",null,(0,l.zw)(n.title),1),(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var k={name:"CvSection",props:{title:{type:String}}};const C=(0,m.Z)(k,[["render",D],["__scopeId","data-v-ca0b458a"]]);var S=C;const _={class:"top-bar"},j=["src"];function O(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",_,[(0,i._)("img",{alt:"Vue logo",src:n.cvData.information.image,class:"image"},null,8,j),(0,i._)("div",null,[(0,i._)("h1",null,(0,l.zw)(n.cvData.information.name),1),(0,i._)("div",null,(0,l.zw)(n.cvData.information.about),1)])])}var z={props:{cvData:{type:Object,default:{}}}};const T=(0,m.Z)(z,[["render",O],["__scopeId","data-v-25fa0f02"]]);var E=T,I={name:"CV",components:{CvEntry:h,CvSection:S,CvTop:E},props:{cvData:{type:Object,default:{}}}};const A=(0,m.Z)(I,[["render",s],["__scopeId","data-v-701b39ad"]]);var M=A,x=JSON.parse('{"information":{"name":"Jónas Grétar Jónasson","image":"profile.jpg","about":"With over five years of experience developing hardware and software in the cycling industry, I can deliver end-to-end solutions for a wide range of problems."},"sections":[{"title":"Work experience","entries":[{"title":"R&D systems engineer","subtitle":"Swiss Side Technologies AG, Thalwil, Switzerland.","start":"2018","end":"2023","body":"Developed, deployed and maintained a performance simulation platform for a world tour cycling team.<br>Part of a team which developed a data acquisition system for wind tunnels, leveraging on-site and cloud infrastructure with an online report generation platform.<br>Developed algorithms for performance simulation and data post-processing.<br>Designed wind tunnel and on-road measurement equipment for the cycling industry."},{"title":"Support Engineer & Intern","subtitle":"Swiss Side Technologies AG, Thalwil, Switzerland.","start":"2017","end":"2018","body":"Assisted with processing of wind tunnel and CFD data for bicycle design projects."},{"title":"Intern, Energy Production department","subtitle":"Verkís Consulting Engineers, Reykjavík, Iceland","start":"2016","end":"2016","body":"Drew metal structures for hydropower plants. Implemented 3D CAD workflows for technical drawings. Reviewed subcontractor calculations for machinery."},{}]},{"title":"Education","entries":[{"title":"Mechanical Engineering MSc","subtitle":"ETH Zürich, Switzerland","start":"2016","end":"2018","body":"<i>Laboratory of Composite Materials and Adaptive Structures</i><br>Specializing in algorithms for structural optimization. Master thesis: Design and Analysis of an AM-CFRP Exoskeleton Hip Component. A design study where a novel computational framework for optimization and simulation of patched laminates was developed."},{"title":"Mechanical Engineering BSc","subtitle":"University of Iceland, Reykjavík","start":"2014","end":"2016","body":"Degree finished in two and a half years. First grade with distinction. Member of the formula student team, <i>Team Spark</i>, for two years."}]},{"title":"This is still a work in progress!","entries":[]}]}'),H={name:"App",components:{Cv:M},data(){return{cvData:x}}};const q=(0,m.Z)(H,[["render",a]]);var Z=q;(0,r.ri)(Z).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],a=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,i,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkvue_cv"]=self["webpackChunkvue_cv"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(743)}));r=n.O(r)})();
//# sourceMappingURL=app.999f6430.js.map
(function(){"use strict";var n={824:function(n,e,t){var i=t(963),o=t(252),r=t.p+"img/profile.5746d32e.jpg";const a=n=>((0,o.dD)("data-v-64765af3"),n=n(),(0,o.Cn)(),n),s={class:"container",ref:"container"},c={class:"image-container",ref:"imageContainer"},l={key:0},u=a((()=>(0,o._)("h1",null,"Jónas Grétar Jónasson",-1))),f=a((()=>(0,o._)("small",null,"CV coming soon... (maybe)",-1)));function d(n,e,t,i,a,d){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",c,[(0,o._)("img",{alt:"Vue logo",src:r,class:"image",ref:"image",onClick:e[0]||(e[0]=(...n)=>d.requestOrientation&&d.requestOrientation(...n))},null,512)],512),a.isIOS?((0,o.wg)(),(0,o.iD)("small",l,"Click image")):(0,o.kq)("",!0),u,f],512)}var v={name:"App",components:{},data(){return{isIOS:!1}},methods:{requestOrientation(){try{if(this.isIOS){console.log("Here");const n=this.$refs.image;DeviceOrientationEvent.requestPermission().then((e=>{"granted"===e?(console.log(this),window.addEventListener("deviceorientation",(e=>this.orientationHandler(e,n)),!0)):alert("has to be allowed!")})).catch((()=>alert("not supported")))}}catch{console.log("iOS orientation request failed")}},orientationHandler(n,e){console.log(n);const t=Math.sqrt(Math.pow(n.beta-90,2));if(t>15){const n=(15/t).toFixed(2)+"s";e.style.animation=`spin ${n} linear infinite`}else e.style.animation=""}},mounted(){if(this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),!this.isIOS){const n=this.$refs.image;window.addEventListener("deviceorientationabsolute",(e=>this.orientationHandler(e,n)),!0)}const n=this.$refs.container,e=this.$refs.imageContainer,t=this.$refs.image;n.addEventListener("mousemove",(n=>{const{left:i,top:o,width:r,height:a}=e.getBoundingClientRect(),s=i+r/2,c=o+a/2,l=Math.hypot(n.clientY-c,n.clientX-s);if(l>50){const n=100/l+"s";t.style.animation=`spin ${n} linear infinite`}else t.style.animation=""})),n.addEventListener("mouseleave",(()=>{t.style.animation="none"}))}},h=t(744);const g=(0,h.Z)(v,[["render",d],["__scopeId","data-v-64765af3"]]);var m=g;(0,i.ri)(m).mount("#app")}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return n[i](r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,i,o,r){if(!i){var a=1/0;for(u=0;u<n.length;u++){i=n[u][0],o=n[u][1],r=n[u][2];for(var s=!0,c=0;c<i.length;c++)(!1&r||a>=r)&&Object.keys(t.O).every((function(n){return t.O[n](i[c])}))?i.splice(c--,1):(s=!1,r<a&&(a=r));if(s){n.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=n.length;u>0&&n[u-1][2]>r;u--)n[u]=n[u-1];n[u]=[i,o,r]}}(),function(){t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/vue-cv/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,i){var o,r,a=i[0],s=i[1],c=i[2],l=0;if(a.some((function(e){return 0!==n[e]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var u=c(t)}for(e&&e(i);l<a.length;l++)r=a[l],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(u)},i=self["webpackChunkvue_cv"]=self["webpackChunkvue_cv"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(824)}));i=t.O(i)})();
//# sourceMappingURL=app.591732c7.js.map
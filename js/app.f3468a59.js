(function(){"use strict";var e={201:function(e,n,t){var i=t(963),r=t(252),o=t(577),a=t.p+"img/profile.5746d32e.jpg";const s={class:"container",ref:"container"},c={class:"image-container",ref:"imageContainer"},u={key:0},l=(0,r._)("h1",null,"Jónas Grétar Jónasson",-1),f=(0,r._)("small",null,"CV coming soon... (maybe)",-1);function v(e,n,t,i,v,h){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",c,[(0,r._)("img",{alt:"Vue logo",src:a,class:"image",ref:"image",onClick:n[0]||(n[0]=(...e)=>h.requestGyro&&h.requestGyro(...e))},null,512)],512),v.beta?((0,r.wg)(),(0,r.iD)("small",u,(0,o.zw)(v.beta),1)):(0,r.kq)("",!0),l,f],512)}var h={name:"App",components:{},data(){return{beta:null,prevBeta:null}},methods:{requestGyro(){try{DeviceOrientationEvent.requestPermission().then((e=>{"granted"==e&&window.addEventListener("deviceorientation",(e=>{const n=100/Math.abs(e.beta%90)+"s";this.prevBeta=1*this.beta,this.beta=e.beta,Math.abs(this.beta-this.prevBeta)>5&&(image.style.animation=`spin ${n} linear infinite`)}),!0)})).catch(console.error)}catch{console.log("no ori req")}}},mounted(){const e=this.$refs.container,n=this.$refs.imageContainer,t=this.$refs.image;e.addEventListener("mousemove",(e=>{const{left:i,top:r,width:o,height:a}=n.getBoundingClientRect(),s=i+o/2,c=r+a/2,u=Math.hypot(e.clientY-c,e.clientX-s);if(u>50){const e=100/u+"s";t.style.animation=`spin ${e} linear infinite`}else t.style.animation=""})),e.addEventListener("mouseleave",(()=>{t.style.animation="none"}))}},p=t(744);const m=(0,p.Z)(h,[["render",v]]);var d=m;(0,i.ri)(d).mount("#app")}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,r,o){if(!i){var a=1/0;for(l=0;l<e.length;l++){i=e[l][0],r=e[l][1],o=e[l][2];for(var s=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[c])}))?i.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[i,r,o]}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/vue-cv/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var r,o,a=i[0],s=i[1],c=i[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var l=c(t)}for(n&&n(i);u<a.length;u++)o=a[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},i=self["webpackChunkvue_cv"]=self["webpackChunkvue_cv"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(201)}));i=t.O(i)})();
//# sourceMappingURL=app.f3468a59.js.map
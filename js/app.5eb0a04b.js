(function(){"use strict";var n={989:function(n,e,t){var i=t(963),r=t(252),o=t(577),a=t.p+"img/profile.5746d32e.jpg";const s={class:"container",ref:"container"},c={class:"image-container",ref:"imageContainer"},u={key:0},l=(0,r._)("h1",null,"Jónas Grétar Jónasson",-1),f=(0,r._)("small",null,"CV coming soon... (maybe)",-1);function v(n,e,t,i,v,h){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",c,[(0,r._)("img",{alt:"Vue logo",src:a,class:"image",ref:"image",onClick:e[0]||(e[0]=(...n)=>h.requestGyro&&h.requestGyro(...n))},null,512)],512),v.beta?((0,r.wg)(),(0,r.iD)("small",u,(0,o.zw)(v.beta),1)):(0,r.kq)("",!0),l,f],512)}var h={name:"App",components:{},data(){return{beta:null}},methods:{requestGyro(){try{DeviceOrientationEvent.requestPermission().then((n=>{"granted"==n&&window.addEventListener("deviceorientation",(n=>{const e=100/Math.abs(n.beta%90)+"s";this.beta=n.beta,image.style.animation=`spin ${e} linear infinite`}),!0)})).catch(console.error)}catch{console.log("no ori req")}}},mounted(){const n=this.$refs.container,e=this.$refs.imageContainer,t=this.$refs.image;n.addEventListener("mousemove",(n=>{const{left:i,top:r,width:o,height:a}=e.getBoundingClientRect(),s=i+o/2,c=r+a/2,u=Math.hypot(n.clientY-c,n.clientX-s);if(u>50){const n=100/u+"s";t.style.animation=`spin ${n} linear infinite`}else t.style.animation=""})),n.addEventListener("mouseleave",(()=>{t.style.animation="none"}))}},m=t(744);const p=(0,m.Z)(h,[["render",v]]);var d=p;(0,i.ri)(d).mount("#app")}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,i,r,o){if(!i){var a=1/0;for(l=0;l<n.length;l++){i=n[l][0],r=n[l][1],o=n[l][2];for(var s=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((function(n){return t.O[n](i[c])}))?i.splice(c--,1):(s=!1,o<a&&(a=o));if(s){n.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[i,r,o]}}(),function(){t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/vue-cv/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,i){var r,o,a=i[0],s=i[1],c=i[2],u=0;if(a.some((function(e){return 0!==n[e]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var l=c(t)}for(e&&e(i);u<a.length;u++)o=a[u],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(l)},i=self["webpackChunkvue_cv"]=self["webpackChunkvue_cv"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(989)}));i=t.O(i)})();
//# sourceMappingURL=app.5eb0a04b.js.map
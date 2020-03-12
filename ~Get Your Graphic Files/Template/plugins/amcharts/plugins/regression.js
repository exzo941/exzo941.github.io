/**
 * @license
 * Copyright (c) 2018 amCharts (Antanas Marcelionis, Martynas Majeris)
 *
 * This sofware is provided under multiple licenses. Please see below for
 * links to appropriate usage.
 *
 * Free amCharts linkware license. Details and conditions:
 * https://github.com/amcharts/amcharts4/blob/master/LICENSE
 *
 * One of the amCharts commercial licenses. Details and pricing:
 * https://www.amcharts.com/online-store/
 * https://www.amcharts.com/online-store/licenses-explained/
 *
 * If in doubt, contact amCharts at contact@amcharts.com
 *
 * PLEASE DO NOT REMOVE THIS COPYRIGHT NOTICE.
 * @hidden
 */
am4internal_webpackJsonp(["6b72"],{"1NAr":function(t,r,n){var e,i,a;!function(n,o){i=[t],void 0===(a="function"==typeof(e=o)?e.apply(r,i):e)||(t.exports=a)}(0,function(t){"use strict";var r=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t};var n={order:2,precision:2,period:null};function e(t,r){var n=[],e=[];t.forEach(function(t,i){null!==t[1]&&(e.push(t),n.push(r[i]))});var i=e.reduce(function(t,r){return t+r[1]},0)/e.length,a=e.reduce(function(t,r){var n=r[1]-i;return t+n*n},0);return 1-e.reduce(function(t,r,e){var i=n[e],a=r[1]-i[1];return t+a*a},0)/a}function i(t,r){var n=Math.pow(10,r);return Math.round(t*n)/n}var a={linear:function(t,r){for(var n=[0,0,0,0,0],a=0,o=0;o<t.length;o++)null!==t[o][1]&&(a++,n[0]+=t[o][0],n[1]+=t[o][1],n[2]+=t[o][0]*t[o][0],n[3]+=t[o][0]*t[o][1],n[4]+=t[o][1]*t[o][1]);var s=a*n[2]-n[0]*n[0],u=a*n[3]-n[0]*n[1],c=0===s?0:i(u/s,r.precision),p=i(n[1]/a-c*n[0]/a,r.precision),l=function(t){return[i(t,r.precision),i(c*t+p,r.precision)]},h=t.map(function(t){return l(t[0])});return{points:h,predict:l,equation:[c,p],r2:i(e(t,h),r.precision),string:0===p?"y = "+c+"x":"y = "+c+"x + "+p}},exponential:function(t,r){for(var n=[0,0,0,0,0,0],a=0;a<t.length;a++)null!==t[a][1]&&(n[0]+=t[a][0],n[1]+=t[a][1],n[2]+=t[a][0]*t[a][0]*t[a][1],n[3]+=t[a][1]*Math.log(t[a][1]),n[4]+=t[a][0]*t[a][1]*Math.log(t[a][1]),n[5]+=t[a][0]*t[a][1]);var o=n[1]*n[2]-n[5]*n[5],s=Math.exp((n[2]*n[3]-n[5]*n[4])/o),u=(n[1]*n[4]-n[5]*n[3])/o,c=i(s,r.precision),p=i(u,r.precision),l=function(t){return[i(t,r.precision),i(c*Math.exp(p*t),r.precision)]},h=t.map(function(t){return l(t[0])});return{points:h,predict:l,equation:[c,p],string:"y = "+c+"e^("+p+"x)",r2:i(e(t,h),r.precision)}},logarithmic:function(t,r){for(var n=[0,0,0,0],a=t.length,o=0;o<a;o++)null!==t[o][1]&&(n[0]+=Math.log(t[o][0]),n[1]+=t[o][1]*Math.log(t[o][0]),n[2]+=t[o][1],n[3]+=Math.pow(Math.log(t[o][0]),2));var s=i((a*n[1]-n[2]*n[0])/(a*n[3]-n[0]*n[0]),r.precision),u=i((n[2]-s*n[0])/a,r.precision),c=function(t){return[i(t,r.precision),i(i(u+s*Math.log(t),r.precision),r.precision)]},p=t.map(function(t){return c(t[0])});return{points:p,predict:c,equation:[u,s],string:"y = "+u+" + "+s+" ln(x)",r2:i(e(t,p),r.precision)}},power:function(t,r){for(var n=[0,0,0,0,0],a=t.length,o=0;o<a;o++)null!==t[o][1]&&(n[0]+=Math.log(t[o][0]),n[1]+=Math.log(t[o][1])*Math.log(t[o][0]),n[2]+=Math.log(t[o][1]),n[3]+=Math.pow(Math.log(t[o][0]),2));var s=(a*n[1]-n[0]*n[2])/(a*n[3]-Math.pow(n[0],2)),u=(n[2]-s*n[0])/a,c=i(Math.exp(u),r.precision),p=i(s,r.precision),l=function(t){return[i(t,r.precision),i(i(c*Math.pow(t,p),r.precision),r.precision)]},h=t.map(function(t){return l(t[0])});return{points:h,predict:l,equation:[c,p],string:"y = "+c+"x^"+p,r2:i(e(t,h),r.precision)}},polynomial:function(t,r){for(var n=[],a=[],o=0,s=0,u=t.length,c=r.order+1,p=0;p<c;p++){for(var l=0;l<u;l++)null!==t[l][1]&&(o+=Math.pow(t[l][0],p)*t[l][1]);n.push(o),o=0;for(var h=[],f=0;f<c;f++){for(var d=0;d<u;d++)null!==t[d][1]&&(s+=Math.pow(t[d][0],p+f));h.push(s),s=0}a.push(h)}a.push(n);for(var v=function(t,r){for(var n=t,e=t.length-1,i=[r],a=0;a<e;a++){for(var o=a,s=a+1;s<e;s++)Math.abs(n[a][s])>Math.abs(n[a][o])&&(o=s);for(var u=a;u<e+1;u++){var c=n[u][a];n[u][a]=n[u][o],n[u][o]=c}for(var p=a+1;p<e;p++)for(var l=e;l>=a;l--)n[l][p]-=n[l][a]*n[a][p]/n[a][a]}for(var h=e-1;h>=0;h--){for(var f=0,d=h+1;d<e;d++)f+=n[d][h]*i[d];i[h]=(n[e][h]-f)/n[h][h]}return i}(a,c).map(function(t){return i(t,r.precision)}),g=function(t){return[i(t,r.precision),i(v.reduce(function(r,n,e){return r+n*Math.pow(t,e)},0),r.precision)]},y=t.map(function(t){return g(t[0])}),M="y = ",m=v.length-1;m>=0;m--)M+=m>1?v[m]+"x^"+m+" + ":1===m?v[m]+"x + ":v[m];return{string:M,points:y,predict:g,equation:[].concat(function(t){if(Array.isArray(t)){for(var r=0,n=Array(t.length);r<t.length;r++)n[r]=t[r];return n}return Array.from(t)}(v)).reverse(),r2:i(e(t,y),r.precision)}}};t.exports=Object.keys(a).reduce(function(t,e){return r({_round:i},t,function(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}({},e,function(t,i){return a[e](t,r({},n,i))}))},{})})},oUDf:function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e={};n.d(e,"Regression",function(){return p});var i=n("m4/l"),a=n("1NAr"),o=n("Iz1H"),s=n("aCit"),u=n("o0Lc"),c=n("Qkdp"),p=function(t){function r(){var r=t.call(this)||this;return r.events=new u.a,r._method="linear",r._options={},r._skipValidatedEvent=!1,r}return i.c(r,t),r.prototype.init=function(){t.prototype.init.call(this),this.processSeries()},r.prototype.processSeries=function(){var t=this;this.invalidateData(),this._disposers.push(this.target.events.on("beforedatavalidated",function(r){t._skipValidatedEvent?t._skipValidatedEvent=!1:t.calcData()})),this.target.data&&this.target.data.length&&(this._originalData=this.target.data),this.target.adapter.add("data",function(){return void 0===t._data&&t.calcData(),t._data})},r.prototype.invalidateData=function(){this._data=void 0},r.prototype.calcData=function(){this._data=[];var t=this.target,r=this._originalData;r&&0!=r.length||(r=this.target.baseSprite.data);for(var n=[],e=0;e<r.length;e++)n.push([t.dataFields.valueX?r[e][t.dataFields.valueX]:e,t.dataFields.valueY?r[e][t.dataFields.valueY]:e]);var i=[];switch(this.method){case"polynomial":i=a.polynomial(n,this.options);break;default:i=a.linear(n,this.options)}this.result=i,this.events.dispatchImmediately("processed",{type:"processed",target:this}),this._data=[];var o=function(t){var n={};c.each(s.target.dataFields,function(e,a){n[a]="valueX"==e?i.points[t][0]:"valueY"==e?i.points[t][1]:r[t][a]}),s._data.push(n)},s=this;for(e=0;e<i.points.length;e++)o(e)},Object.defineProperty(r.prototype,"method",{get:function(){return this._method},set:function(t){this._method!=t&&(this._method=t,this.invalidateData())},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"options",{get:function(){return this._options},set:function(t){this._options!=t&&(this._options=t,this.invalidateData())},enumerable:!0,configurable:!0}),r}(o.a);s.b.registeredClasses.Regression=p,window.am4plugins_regression=e}},["oUDf"]);
//# sourceMappingURL=regression.js.map
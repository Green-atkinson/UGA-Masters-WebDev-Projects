(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ja(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.aa=b.prototype}
function ra(){this.C=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.A=this.j=null}
function sa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
ra.prototype.u=function(a){this.i=a};
function ta(a,b){a.j={wb:b,Ab:!0};a.h=a.m||a.o}
ra.prototype.return=function(a){this.j={return:a};this.h=this.o};
function t(a,b,c){a.h=c;return{value:b}}
ra.prototype.s=function(a){this.h=a};
function ua(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function wa(a,b){a.h=b;a.m=0}
function xa(a){a.m=0;var b=a.j.wb;a.j=null;return b}
function ya(a){a.A=[a.j];a.m=0;a.o=0}
function za(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.Ab?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function Aa(a){this.h=new ra;this.i=a}
function Ca(a,b){sa(a.h);var c=a.h.l;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.C=!1,e;var f=e.value}catch(g){return a.h.l=null,ta(a.h,g),Ea(a)}a.h.l=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.C=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ta(a.h,c)}a.h.C=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ab)throw b.wb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){sa(a.h);a.h.l?b=Da(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Ea(a));return b};
this.throw=function(b){sa(a.h);a.h.l?b=Da(a,a.h.l["throw"],b,a.h.u):(ta(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ga(new Fa(new Aa(a)))}
function Ha(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return la});
n("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.C=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(p){k||(k=!0,m.call(h,p))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.o)}};
b.prototype.S=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.M(g):this.m(g)}};
b.prototype.M=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.oa(h,g):this.m(g)};
b.prototype.o=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.A()};
b.prototype.Y=function(){var g=this;e(function(){if(g.L()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.L=function(){if(this.C)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Ja(h.resolve,h.reject)};
b.prototype.oa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(x,u){return"function"==typeof x?function(E){try{m(x(E))}catch(F){p(F)}}:u}
var m,p,v=new b(function(x,u){m=x;p=u});
this.Ja(k(g,m),k(h,p));return v};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ja=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=q(g),p=m.next();!p.done;p=m.next())d(p.value).Ja(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(m,p){function v(E){return function(F){x[E]=F;u--;0==u&&m(x)}}
var x=[],u=0;do x.push(void 0),u++,d(k.value).Ja(v(x.length-1),p),k=h.next();while(!k.done)})};
return b});
function Ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
n("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=q(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!Ia(k,g)){var m=new c;ca(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return m(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),p=new a([[k,2],[m,3]]);if(2!=p.get(k)||3!=p.get(m))return!1;p.delete(k);p.set(m,4);return!p.has(k)&&4==p.get(m)}catch(v){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&Ia(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ia(k,g)&&Ia(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ia(k,g)&&Ia(k[g],this.h)?delete k[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ia(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var p=h.data_[m];if(p&&Ia(h.data_,m))for(h=0;h<p.length;h++){var v=p[h];if(k!==k&&v.key!==v.key||k===v.key)return{id:m,list:p,index:h,entry:v}}return{id:m,list:p,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),p=m.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=m.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!m.next().done?!1:!0}catch(v){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),p;!(p=m.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
n("Object.setPrototypeOf",function(a){return a||qa});
var La="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ia(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||La});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ia(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ia(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(){}
function Na(a){a.fb=void 0;a.getInstance=function(){return a.fb?a.fb:a.fb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(a,b){z(a,b,void 0)}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Eo=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Qb=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(){var a=B("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.j=Eb===Eb?a:"";this.i=!0}
Fb.prototype.h=function(){return this.j.toString()};
Fb.prototype.toString=function(){return this.j.toString()};function Gb(a,b){this.j=b===Hb?a:""}
Gb.prototype.i=!0;Gb.prototype.h=function(){return this.j.toString()};
Gb.prototype.toString=function(){return this.j+""};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.j;Oa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Lb(a,b){this.j=b===Mb?a:""}
Lb.prototype.i=!0;Lb.prototype.h=function(){return this.j.toString()};
Lb.prototype.toString=function(){return this.j.toString()};
function Nb(a){if(a instanceof Lb&&a.constructor===Lb)return a.j;Oa(a);return"type_error:SafeUrl"}
var Qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Mb={};function Rb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Rb().indexOf(a)}
;function Sb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
;var Tb={};function Ub(a){this.j=Tb===Tb?a:"";this.i=!0}
Ub.prototype.h=function(){return this.j.toString()};
Ub.prototype.toString=function(){return this.j.toString()};function Vb(a,b){b instanceof Lb||b instanceof Lb||(b="object"==typeof b&&b.i?b.h():String(b),Qb.test(b)||(b="about:invalid#zClosurez"),b=new Lb(b,Mb));a.href=Nb(b)}
function Wb(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=Xb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Yb(){return Xb("script[nonce]",void 0)}
var Zb=/^[\w+/_-]+[=]{0,2}$/;function Xb(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Zb.test(a)?a:"":""}
;function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a,b){return b.match(ac)[a]||null}
function dc(a){return bc(cc(3,a))}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function gc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function hc(a,b){b=gc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function ic(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var jc=/#|$/,kc=/[?&]($|#)/;function lc(a){for(var b=a.search(jc),c=0,d,e=[];0<=(d=ic(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.substr(c));return e.join("").replace(kc,"$1")}
;function mc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;function nc(a){nc[" "](a);return a}
nc[" "]=Ma;var rc=C("Opera"),sc=C("Trident")||C("MSIE"),tc=C("Edge"),uc=C("Gecko")&&!(-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),vc=-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"),wc=C("Android");function xc(){var a=y.document;return a?a.documentMode:void 0}
var yc;a:{var zc="",Ac=function(){var a=Rb();if(uc)return/rv:([^\);]+)(\)|;)/.exec(a);if(tc)return/Edge\/([\d\.]+)/.exec(a);if(sc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vc)return/WebKit\/(\S+)/.exec(a);if(rc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ac&&(zc=Ac?Ac[1]:"");if(sc){var Bc=xc();if(null!=Bc&&Bc>parseFloat(zc)){yc=String(Bc);break a}}yc=zc}var Cc=yc,Dc;if(y.document&&sc){var Ec=xc();Dc=Ec?Ec:parseInt(Cc,10)||void 0}else Dc=void 0;var Fc=Dc;var Gc=mc()||C("iPod"),Hc=C("iPad");!C("Android")||Sb();Sb();var Ic=C("Safari")&&!(Sb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||C("Firefox")||C("FxiOS")||C("Silk")||C("Android"))&&!(mc()||C("iPad")||C("iPod"));var Jc={},Kc=null;
function Lc(a,b){Pa(a);void 0===b&&(b=0);if(!Kc){Kc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Jc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Kc[h]&&(Kc[h]=g)}}}b=Jc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Mc="function"===typeof Uint8Array;var Nc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Oc(a,b){Object.isFrozen(a)||(Nc?a[Nc]|=b:void 0!==a.Na?a.Na|=b:Object.defineProperties(a,{Na:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Pc(a){var b;Nc?b=a[Nc]:b=a.Na;return null==b?0:b}
function Qc(a){Oc(a,1);return a}
function Rc(a){return Array.isArray(a)?!!(Pc(a)&2):!1}
function Sc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Oc(a,2)}
;function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Vc=Object.freeze(Qc([]));function Wc(a){if(Rc(a.G))throw Error("Cannot mutate an immutable Message");}
var Xc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Yc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Zc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.G[b+a.j]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Wc(a);b<a.l&&!d?a.G[b+a.j]=c:(a.i||(a.i=a.G[a.l+a.j]={}))[b]=c;return a}
function $c(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=Zc(a,b,d);null==e&&(e=Vc);if(Rc(a.G))c&&(Sc(e),Object.freeze(e));else if(e===Vc||Rc(e))e=Qc(e.slice()),D(a,b,e,d);return e}
function ad(a,b,c,d){Wc(a);(c=bd(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),D(a,c,void 0));return D(a,b,d)}
function bd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Zc(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function fd(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Zc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Rc(a.G)&&Sc(b.G);return a.h[c]=b}
function gd(a,b,c,d){d=void 0===d?!1:d;a.h||(a.h={});var e=Rc(a.G),f=a.h[c];if(!f){d=$c(a,c,!0,d);f=[];e=e||Rc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Sc(f[g].G);e&&(Sc(f),Object.freeze(f));a.h[c]=f}return f}
function H(a,b,c,d){d=void 0===d?!1:d;Wc(a);a.h||(a.h={});var e=c?c.G:c;a.h[b]=c;return D(a,b,e,d)}
function hd(a,b,c,d){Wc(a);a.h||(a.h={});var e=d?d.G:d;a.h[b]=d;ad(a,b,c,e)}
function id(a,b,c,d){var e=void 0===e?!1:e;Wc(a);e=gd(a,c,b,e);c=d?d:new c;a=$c(a,b);e.push(c);a.push(c.G)}
function jd(a,b){a=Zc(a,b);return null==a?"":a}
;function kd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Mc&&null!=a&&a instanceof Uint8Array)return Lc(a)}return a}
;function ld(a,b){b=void 0===b?md:b;return nd(a,b)}
function od(a,b){if(null!=a){if(Array.isArray(a))a=nd(a,b);else if(Tc(a)){var c={},d;for(d in a)c[d]=od(a[d],b);a=c}else a=b(a);return a}}
function nd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=od(c[d],b);Array.isArray(a)&&Pc(a)&1&&Qc(c);return c}
function pd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=kd(a);return Array.isArray(a)?ld(a,pd):a}
function md(a){return Mc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function qd(a){y.setTimeout(function(){throw a;},0)}
;function rd(a,b,c){a||(a=sd);sd=null;var d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.G=a;a:{d=this.G.length;a=d-1;if(d&&(d=this.G[a],Tc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.G[a])?Array.isArray(d)&&Qc(d):this.G[a]=Vc;else{d=this.i||(this.i=this.G[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Qc(e):d[a]=Vc}}
rd.prototype.toJSON=function(){var a=this.G;return Uc?a:ld(a,pd)};
function td(a){Uc=!0;try{return JSON.stringify(a.toJSON(),ud)}finally{Uc=!1}}
rd.prototype.clone=function(){var a=ld(this.G);sd=a;a=new this.constructor(a);sd=null;vd(a,this);return a};
rd.prototype.toString=function(){return this.G.toString()};
function ud(a,b){return kd(b)}
function vd(a,b){b.o&&(a.o=b.o.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=gd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)vd(f[g],e[g])}else(f=fd(a,e.constructor,g,void 0,f))&&vd(f,e)}}}}
var sd;function wd(){rd.apply(this,arguments)}
r(wd,rd);function xd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;Wc(a);if(b){var e=Qc([]);for(var f=0;f<b.length;f++)e[f]=b[f].G;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Vc;a=D(a,c,e,d)}else a=H(a,c,b,!0);return a}
;function I(){wd.apply(this,arguments)}
r(I,wd);if(Xc){var yd={};Object.defineProperties(wd,(yd[Symbol.hasInstance]=Yc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),yd));
var zd={};Object.defineProperties(I,(zd[Symbol.hasInstance]=Yc(Object[Symbol.hasInstance]),zd))};function Ad(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Bd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new Ad;this.j=c.promise;this.l=q((0,y[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Pb:d,yc:e})})},!0)).next().value;
this.xc=c.promise.then(function(){})}
Bd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Pb;return new Promise(function(d){c(function(e){d(e)},[a.rb,
a.zc])})})};
Bd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.yc)&&a()})};
Bd.prototype.h=function(){return this.i};var Cd=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Dd={};function Ed(){}
function Fd(a){this.h=a}
r(Fd,Ed);Fd.prototype.toString=function(){return this.h};
var Gd=new Fd("about:invalid#zTSz",Dd);function Hd(a){if(a instanceof Ed)if(a instanceof Fd)a=a.h;else throw Error("");else a=Nb(a);return a}
;function Id(a,b){a.src=Ib(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Jd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=Jd.prototype;l.clone=function(){return new Jd(this.x,this.y)};
l.equals=function(a){return a instanceof Jd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Kd(a,b){this.width=a;this.height=b}
l=Kd.prototype;l.clone=function(){return new Kd(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Ld(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Md(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Nd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Od(a){var b=Pd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Qd(){var a=[];Od(function(b){a.push(b)});
return a}
var Pd={Qc:"allow-forms",Rc:"allow-modals",Sc:"allow-orientation-lock",Tc:"allow-pointer-lock",Uc:"allow-popups",Vc:"allow-popups-to-escape-sandbox",Wc:"allow-presentation",Xc:"allow-same-origin",Yc:"allow-scripts",Zc:"allow-top-navigation",bd:"allow-top-navigation-by-user-activation"},Rd=cb(function(){return Qd()});
function Sd(){var a=Td(),b={};eb(Rd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Td(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ud(a){this.isValid=a}
function Vd(a){return new Ud(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Wd=[Vd("data"),Vd("http"),Vd("https"),Vd("mailto"),Vd("ftp"),new Ud(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Xd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Yd=(new Date).getTime();function Zd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function $d(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(v){for(var x=g,u=0;64>u;u+=4)x[u/4]=v[u]<<24|v[u+1]<<16|v[u+2]<<8|v[u+3];for(u=16;80>u;u++)v=x[u-3]^x[u-8]^x[u-14]^x[u-16],x[u]=(v<<1|v>>>31)&4294967295;v=e[0];var E=e[1],F=e[2],K=e[3],O=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var N=K^E&(F^K);var R=1518500249}else N=E^F^K,R=1859775393;else 60>u?(N=E&F|K&(E|F),R=2400959708):(N=E^F^K,R=3395469782);N=((v<<5|v>>>27)&4294967295)+N+O+R+x[u]&4294967295;O=K;K=F;F=(E<<30|E>>>2)&4294967295;E=v;v=N}e[0]=e[0]+v&4294967295;e[1]=e[1]+E&4294967295;e[2]=
e[2]+F&4294967295;e[3]=e[3]+K&4294967295;e[4]=e[4]+O&4294967295}
function c(v,x){if("string"===typeof v){v=unescape(encodeURIComponent(v));for(var u=[],E=0,F=v.length;E<F;++E)u.push(v.charCodeAt(E));v=u}x||(x=v.length);u=0;if(0==m)for(;u+64<x;)b(v.slice(u,u+64)),u+=64,p+=64;for(;u<x;)if(f[m++]=v[u++],p++,64==m)for(m=0,b(f);u+64<x;)b(v.slice(u,u+64)),u+=64,p+=64}
function d(){var v=[],x=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=x&255,x>>>=8;b(f);for(u=x=0;5>u;u++)for(var E=24;0<=E;E-=8)v[x++]=e[u]>>E&255;return v}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,p;a();return{reset:a,update:c,digest:d,Tb:function(){for(var v=d(),x="",u=0;u<v.length;u++)x+="0123456789ABCDEF".charAt(Math.floor(v[u]/16))+"0123456789ABCDEF".charAt(v[u]%16);return x}}}
;function de(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,ee(Zd(d),a,c||null)].join(" "):null}
function ee(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),fe(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=fe(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function fe(a){var b=$d();b.update(a);return b.Tb().toLowerCase()}
;var ge={};function he(a){this.h=a||{cookie:""}}
l=he.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Qo;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qa:0,path:b,domain:c});return d};
l.ab=function(){return ie(this).keys};
l.isEmpty=function(){return!this.h.cookie};
l.clear=function(){for(var a=ie(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function ie(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var je=new he("undefined"==typeof document?null:document);function ke(a){return!!ge.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function le(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;ke(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new he(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");ke(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function me(a,b,c,d){(a=y[a])||(a=(new he(document)).get(b));return a?de(a,c,d):null}
function ne(a){var b=void 0===b?!1:b;var c=Zd(String(y.location.href)),d=[];if(le(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new he(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?de(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&ke(b)&&((b=me("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=me("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function oe(a){Xc&&Object.defineProperty(a,Symbol.hasInstance,Yc(Object[Symbol.hasInstance]))}
;function pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function qe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?qe.apply(null,d):pe(d)}}
;function J(){this.C=this.C;this.o=this.o}
J.prototype.C=!1;J.prototype.h=function(){return this.C};
J.prototype.dispose=function(){this.C||(this.C=!0,this.I())};
function re(a,b){a.C?b():(a.o||(a.o=[]),a.o.push(b))}
J.prototype.I=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function se(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
se.prototype.stopPropagation=function(){this.j=!0};
se.prototype.preventDefault=function(){this.defaultPrevented=!0};function te(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ue(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ve[c])c=ve[c];else{c=String(c);if(!ve[c]){var f=/function\s+([^\(]+)/m.exec(c);ve[c]=f?f[1]:"[Anonymous]"}c=ve[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ue(a,b){b||(b={});b[we(a)]=!0;var c=a.stack||"";(a=a.Qb)&&!b[we(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ue(a,b));return c}
function we(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ve={};var xe=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ma,b),y.removeEventListener("test",Ma,b)}catch(c){}return a}();function ye(a,b){se.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(ye,se);var ze={2:"touch",3:"pen",4:"mouse"};
ye.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(uc){a:{try{nc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ze[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ye.aa.preventDefault.call(this)};
ye.prototype.stopPropagation=function(){ye.aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ye.prototype.preventDefault=function(){ye.aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ae="closure_listenable_"+(1E6*Math.random()|0);var Be=0;function Ce(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ma=e;this.key=++Be;this.za=this.Ia=!1}
function De(a){a.za=!0;a.listener=null;a.proxy=null;a.src=null;a.Ma=null}
;function Ee(a){this.src=a;this.listeners={};this.h=0}
Ee.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Fe(a,b,d,e);-1<g?(b=a[g],c||(b.Ia=!1)):(b=new Ce(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};
Ee.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Fe(e,b,c,d);return-1<b?(De(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ge(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(De(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Fe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.za&&f.listener==b&&f.capture==!!c&&f.Ma==d)return e}return-1}
;var He="closure_lm_"+(1E6*Math.random()|0),Ie={},Je=0;function Ke(a,b,c,d,e){if(d&&d.once)Le(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Me(c),a&&a[Ae]?a.V(b,c,Qa(d)?!!d.capture:!!d,e):Ne(a,b,c,!1,d,e)}
function Ne(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Oe(a);h||(a[He]=h=new Ee(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Pe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)xe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Qe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Je++}}
function Pe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Re;return a}
function Le(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Le(a,b[f],c,d,e);else c=Me(c),a&&a[Ae]?a.l.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Ne(a,b,c,!0,d,e)}
function Se(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Se(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Me(c),a&&a[Ae])?a.l.remove(String(b),c,d,e):a&&(a=Oe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Fe(b,c,d,e)),(c=-1<a?b[a]:null)&&Te(c))}
function Te(a){if("number"!==typeof a&&a&&!a.za){var b=a.src;if(b&&b[Ae])Ge(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Qe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Je--;(c=Oe(b))?(Ge(c,a),0==c.h&&(c.src=null,b[He]=null)):De(a)}}}
function Qe(a){return a in Ie?Ie[a]:Ie[a]="on"+a}
function Re(a,b){if(a.za)a=!0;else{b=new ye(b,this);var c=a.listener,d=a.Ma||a.src;a.Ia&&Te(a);a=c.call(d,b)}return a}
function Oe(a){a=a[He];return a instanceof Ee?a:null}
var Ue="__closure_events_fn_"+(1E9*Math.random()>>>0);function Me(a){if("function"===typeof a)return a;a[Ue]||(a[Ue]=function(b){return a.handleEvent(b)});
return a[Ue]}
;function Ve(){J.call(this);this.l=new Ee(this);this.Y=this;this.L=null}
Za(Ve,J);Ve.prototype[Ae]=!0;Ve.prototype.addEventListener=function(a,b,c,d){Ke(this,a,b,c,d)};
Ve.prototype.removeEventListener=function(a,b,c,d){Se(this,a,b,c,d)};
function We(a,b){var c=a.L;if(c){var d=[];for(var e=1;c;c=c.L)d.push(c),++e}a=a.Y;c=b.type||b;"string"===typeof b?b=new se(b,a):b instanceof se?b.target=b.target||a:(e=b,b=new se(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Xe(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Xe(g,c,!0,b)&&e,b.j||(e=Xe(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Xe(g,c,!1,b)&&e}
Ve.prototype.I=function(){Ve.aa.I.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,De(d[e]);delete a.listeners[c];a.h--}}this.L=null};
Ve.prototype.V=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function Xe(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.za&&g.capture==c){var h=g.listener,k=g.Ma||g.src;g.Ia&&Ge(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ye(a){var b,c;Ve.call(this);var d=this;this.A=this.j=0;this.U=null!==a&&void 0!==a?a:{N:function(e,f){return setTimeout(e,f)},
T:clearTimeout};this.i=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return w(function(e){return t(e,Ze(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||$e(this)}
r(Ye,Ve);function af(){var a=bf;Ye.h||(Ye.h=new Ye(a));return Ye.h}
Ye.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.U.T(this.A);delete Ye.h};
Ye.prototype.H=function(){return this.i};
function $e(a){a.A=a.U.N(function(){var b;return w(function(c){if(1==c.h)return a.i?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.s(3):t(c,Ze(a),3):t(c,Ze(a),3);$e(a);c.h=0})},3E4)}
function Ze(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f;return w(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ua(g,2,3),d&&(a.j=a.U.N(function(){d.abort()},b||2E4)),t(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ya(g);a.u=void 0;a.j&&(a.U.T(a.j),a.j=0);f!==a.i&&(a.i=f,a.i?We(a,"networkstatus-online"):We(a,"networkstatus-offline"));c(f);za(g);break;case 2:xa(g),f=!1,g.s(3)}})})}
;var cf={oo:"WEB_DISPLAY_MODE_UNKNOWN",ko:"WEB_DISPLAY_MODE_BROWSER",mo:"WEB_DISPLAY_MODE_MINIMAL_UI",no:"WEB_DISPLAY_MODE_STANDALONE",lo:"WEB_DISPLAY_MODE_FULLSCREEN"};function df(){this.data_=[];this.h=-1}
df.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
df.prototype.get=function(a){return!!this.data_[a]};
function ef(a){-1==a.h&&(a.h=hb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ff(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ff.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function gf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var hf;function jf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=Md("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.pb;c.pb=null;e()}};
return function(e){d.next={pb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function kf(){this.i=this.h=null}
kf.prototype.add=function(a,b){var c=lf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
kf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var lf=new ff(function(){return new mf},function(a){return a.reset()});
function mf(){this.next=this.scope=this.h=null}
mf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
mf.prototype.reset=function(){this.next=this.scope=this.h=null};function nf(a,b){of||pf();qf||(of(),qf=!0);rf.add(a,b)}
var of;function pf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);of=function(){a.then(sf)}}else of=function(){var b=sf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(hf||(hf=jf()),hf(b)):y.setImmediate(b)}}
var qf=!1,rf=new kf;function sf(){for(var a;a=rf.remove();){try{a.h.call(a.scope)}catch(b){qd(b)}gf(lf,a)}qf=!1}
;function tf(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
tf.prototype[Symbol.iterator]=function(){return this};
tf.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function uf(a,b){return new tf(a,b)}
;function vf(){this.blockSize=-1}
;function wf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Za(wf,vf);wf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function xf(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
wf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)xf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){xf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){xf(this,e);f=0;break}}this.i=f;this.l+=b}};
wf.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;xf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function yf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function zf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Af(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:yf(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Bf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Af(a,"inverted-hdpi")&&zf(a,Array.prototype.filter.call(a.classList?a.classList:yf(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Cf="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Df(){}
Df.prototype.la=function(){throw Cf;};
Df.prototype.next=function(){return Ef};
var Ef={done:!0,value:void 0};function Ff(a){return{value:a,done:!1}}
function Gf(a){if(a.done)throw Cf;return a.value}
Df.prototype.Z=function(){return this};function Hf(a){if(a instanceof If||a instanceof Jf||a instanceof Kf)return a;if("function"==typeof a.la)return new If(function(){return Lf(a)});
if("function"==typeof a[Symbol.iterator])return new If(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Z)return new If(function(){return Lf(a.Z())});
throw Error("Not an iterator or iterable.");}
function Lf(a){if(!(a instanceof Df))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.la();break}catch(d){if(d!==Cf)throw d;b=!0}return{value:c,done:b}}}}
function If(a){this.h=a}
If.prototype.Z=function(){return new Jf(this.h())};
If.prototype[Symbol.iterator]=function(){return new Kf(this.h())};
If.prototype.i=function(){return new Kf(this.h())};
function Jf(a){this.h=a}
r(Jf,Df);Jf.prototype.la=function(){var a=this.h.next();if(a.done)throw Cf;return a.value};
Jf.prototype.next=function(){return this.h.next()};
Jf.prototype[Symbol.iterator]=function(){return new Kf(this.h)};
Jf.prototype.i=function(){return new Kf(this.h)};
function Kf(a){If.call(this,function(){return a});
this.j=a}
r(Kf,If);Kf.prototype.next=function(){return this.j.next()};function Mf(a,b){this.i={};this.h=[];this.ia=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Mf)for(c=a.ab(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Mf.prototype;l.ab=function(){Nf(this);return this.h.concat()};
l.has=function(a){return Of(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Pf;Nf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Pf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.i={};this.ia=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Of(this.i,a)?(delete this.i[a],--this.size,this.ia++,this.h.length>2*this.size&&Nf(this),!0):!1};
function Nf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Of(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Of(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Of(this.i,a)?this.i[a]:b};
l.set=function(a,b){Of(this.i,a)||(this.size+=1,this.h.push(a),this.ia++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.ab(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Mf(this)};
l.keys=function(){return Hf(this.Z(!0)).i()};
l.values=function(){return Hf(this.Z(!1)).i()};
l.entries=function(){var a=this;return uf(this.keys(),function(b){return[b,a.get(b)]})};
l.Z=function(a){Nf(this);var b=0,c=this.ia,d=this,e=new Df;e.next=function(){if(c!=d.ia)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ef;var g=d.h[b++];return Ff(a?g:d.i[g])};
var f=e.next;e.la=function(){return Gf(f.call(e))};
return e};
function Of(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Qf(a){Rf();return Jb(a)}
var Rf=Ma;function Sf(a){var b=[];Vf(new Wf,a,b);return b.join("")}
function Wf(){}
function Vf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Vf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Xf(d,c),c.push(":"),Vf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Xf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Yf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Zf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Xf(a,b){b.push('"',a.replace(Zf,function(c){var d=Yf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Yf[c]=d);return d}),'"')}
;function $f(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function ag(a){this.h=0;this.C=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ma)try{var b=this;a.call(void 0,function(c){bg(b,2,c)},function(c){bg(b,3,c)})}catch(c){bg(this,3,c)}}
function cg(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
cg.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var dg=new ff(function(){return new cg},function(a){a.reset()});
function eg(a,b,c){var d=dg.get();d.i=a;d.onRejected=b;d.context=c;return d}
function fg(a){return new ag(function(b,c){c(a)})}
ag.prototype.then=function(a,b,c){return gg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ag.prototype.$goog_Thenable=!0;function hg(a,b){return gg(a,null,b,void 0)}
ag.prototype.cancel=function(a){if(0==this.h){var b=new ig(a);nf(function(){jg(this,b)},this)}};
function jg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?jg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):kg(c),lg(c,e,3,b)))}a.j=null}else bg(a,3,b)}
function mg(a,b){a.i||2!=a.h&&3!=a.h||ng(a);a.l?a.l.next=b:a.i=b;a.l=b}
function gg(a,b,c,d){var e=eg(null,null,null);e.h=new ag(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ig?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;mg(a,e);return e.h}
ag.prototype.A=function(a){this.h=0;bg(this,2,a)};
ag.prototype.L=function(a){this.h=0;bg(this,3,a)};
function bg(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.L;if(d instanceof ag){mg(d,eg(e||Ma,f||null,a));var g=!0}else if($f(d))d.then(e,f,a),g=!0;else{if(Qa(d))try{var h=d.then;if("function"===typeof h){og(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.C=c,a.h=b,a.j=null,ng(a),3!=b||c instanceof ig||pg(a,c))}}
function og(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ng(a){a.m||(a.m=!0,nf(a.u,a))}
function kg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ag.prototype.u=function(){for(var a;a=kg(this);)lg(this,a,this.h,this.C);this.m=!1};
function lg(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,qg(b,c,d);else try{b.j?b.i.call(b.context):qg(b,c,d)}catch(e){rg.call(null,e)}gf(dg,b)}
function qg(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function pg(a,b){a.o=!0;nf(function(){a.o&&rg.call(null,b)})}
var rg=qd;function ig(a){ab.call(this,a)}
Za(ig,ab);ig.prototype.name="cancel";function L(a){J.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Za(L,J);l=L.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function sg(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.va(b)}}
l.va=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ma):(c&&jb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.ja=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];tg(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.va(c)}}return 0!=e}return!1};
function tg(a,b,c){nf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.va,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.I=function(){L.aa.I.call(this);this.clear();this.l.length=0};function ug(a){this.h=a}
ug.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Sf(b))};
ug.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ug.prototype.remove=function(a){this.h.remove(a)};function vg(a){this.h=a}
Za(vg,ug);function wg(a){this.data=a}
function xg(a){return void 0===a||a instanceof wg?a:new wg(a)}
vg.prototype.set=function(a,b){vg.aa.set.call(this,a,xg(b))};
vg.prototype.i=function(a){a=vg.aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function yg(a){this.h=a}
Za(yg,vg);yg.prototype.set=function(a,b,c){if(b=xg(b)){if(c){if(c<Date.now()){yg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}yg.aa.set.call(this,a,b)};
yg.prototype.i=function(a){var b=yg.aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())yg.prototype.remove.call(this,a);else return b}};function zg(){}
;function Ag(){}
Za(Ag,zg);Ag.prototype[Symbol.iterator]=function(){return Hf(this.Z(!0)).i()};
Ag.prototype.clear=function(){var a=Array.from(this);a=q(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Bg(a){this.h=a}
Za(Bg,Ag);l=Bg.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.Z=function(a){var b=0,c=this.h,d=new Df;d.next=function(){if(b>=c.length)return Ef;var f=c.key(b++);if(a)return Ff(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Ff(f)};
var e=d.next;d.la=function(){return Gf(e.call(d))};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Cg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Za(Cg,Bg);function Dg(a,b){this.i=a;this.h=null;var c;if(c=sc)c=!(9<=Number(Fc));if(c){Eg||(Eg=new Mf);this.h=Eg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Eg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Za(Dg,Ag);var Fg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Eg=null;function Gg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Fg[b]})}
l=Dg.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(Gg(a),b);Hg(this)};
l.get=function(a){a=this.h.getAttribute(Gg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(Gg(a));Hg(this)};
l.Z=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Df;d.next=function(){if(b>=c.length)return Ef;var f=c[b++];if(a)return Ff(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Ff(f)};
var e=d.next;d.la=function(){return Gf(e.call(d))};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Hg(this)};
function Hg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ig(a,b){this.i=a;this.h=b+"::"}
Za(Ig,Ag);Ig.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ig.prototype.get=function(a){return this.i.get(this.h+a)};
Ig.prototype.remove=function(a){this.i.remove(this.h+a)};
Ig.prototype.Z=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Df;d.next=function(){var f=b.next();if(f.done)return f;for(f=f.value;f.substr(0,c.h.length)!=c.h;){f=b.next();if(f.done)return f;f=f.value}return Ff(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.la=function(){return Gf(e.call(d))};
return d};function Jg(a){I.call(this,a)}
r(Jg,I);Jg.prototype.getKey=function(){return Zc(this,1)};
Jg.prototype.getValue=function(){return Zc(this,2===bd(this,Kg)?2:-1)};
Jg.prototype.setValue=function(a){return ad(this,2,Kg,a)};
var Kg=[2,3,4,5,6];function Lg(a){I.call(this,a)}
r(Lg,I);function Mg(a){I.call(this,a)}
r(Mg,I);function Ng(a){I.call(this,a)}
r(Ng,I);function Og(a){I.call(this,a,-1,Pg)}
r(Og,I);Og.prototype.getPlayerType=function(){return Zc(this,36)};
Og.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var Pg=[9,66,24,32,86,100,101];function Qg(a){I.call(this,a,-1,Rg)}
r(Qg,I);var Rg=[15,26,28];function Sg(a){I.call(this,a)}
r(Sg,I);Sg.prototype.setToken=function(a){return D(this,2,a)};function Tg(a){I.call(this,a,-1,Ug)}
r(Tg,I);Tg.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Ug=[12];function Vg(a){I.call(this,a,-1,Wg)}
r(Vg,I);var Wg=[12];function Xg(a){I.call(this,a,-1,Yg)}
r(Xg,I);function Zg(a){I.call(this,a)}
r(Zg,I);Zg.prototype.getKey=function(){return jd(this,1)};
Zg.prototype.getValue=function(){return jd(this,2)};
Zg.prototype.setValue=function(a){return D(this,2,a)};
var Yg=[4,5];function $g(a){I.call(this,a)}
r($g,I);function ah(a){I.call(this,a)}
r(ah,I);var bh=[2,3];function ch(a){I.call(this,a)}
r(ch,I);ch.prototype.getMessage=function(){return jd(this,1)};function dh(a){I.call(this,a)}
r(dh,I);function eh(a){I.call(this,a)}
r(eh,I);function fh(a){I.call(this,a,-1,gh)}
r(fh,I);var gh=[10,17];function hh(a){I.call(this,a)}
r(hh,I);function ih(a){I.call(this,a)}
r(ih,I);function jh(a){I.call(this,a)}
r(jh,I);var kh={Bh:0,mh:1,sh:2,th:4,yh:8,uh:16,vh:32,Ah:64,zh:128,oh:256,qh:512,xh:1024,ph:2048,rh:4096,nh:8192,wh:16384};function lh(a){I.call(this,a)}
r(lh,I);function mh(a,b){H(a,1,b)}
lh.prototype.X=function(a){D(this,2,a)};
function nh(a){I.call(this,a)}
r(nh,I);function oh(a,b){H(a,1,b)}
;function ph(a){I.call(this,a,-1,qh)}
r(ph,I);ph.prototype.X=function(a){D(this,1,a)};
function rh(a,b){H(a,2,b)}
var qh=[3];function sh(a){I.call(this,a)}
r(sh,I);sh.prototype.X=function(a){D(this,1,a)};function th(a){I.call(this,a)}
r(th,I);th.prototype.X=function(a){D(this,1,a)};function uh(a){I.call(this,a)}
r(uh,I);uh.prototype.X=function(a){D(this,1,a)};function vh(a){I.call(this,a)}
r(vh,I);function wh(a){I.call(this,a)}
r(wh,I);function xh(a){I.call(this,a,-1,yh)}
r(xh,I);xh.prototype.getPlayerType=function(){var a=Zc(this,7);return null==a?0:a};
xh.prototype.setVideoId=function(a){return D(this,19,a)};
function zh(a,b){id(a,68,Ah,b)}
function Ah(a){I.call(this,a)}
r(Ah,I);Ah.prototype.getId=function(){return jd(this,2)};
var yh=[83,68];function Bh(a){I.call(this,a)}
r(Bh,I);function Ch(a){I.call(this,a)}
r(Ch,I);function Dh(a){I.call(this,a)}
r(Dh,I);function Eh(a){I.call(this,a,428)}
r(Eh,I);
var Fh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,423,424,425,426,427,117];function Gh(a){I.call(this,a)}
r(Gh,I);function Hh(a){I.call(this,a)}
r(Hh,I);Hh.prototype.setVideoId=function(a){return ad(this,1,Ih,a)};
Hh.prototype.getPlaylistId=function(){return Zc(this,2===bd(this,Ih)?2:-1)};
var Ih=[1,2];function Jh(a){I.call(this,a,-1,Kh)}
r(Jh,I);var Kh=[3];function Lh(a){I.call(this,a,1)}
r(Lh,I);function Mh(a){I.call(this,a)}
r(Mh,I);var Nh;Nh=new function(a,b){this.h=a;this.fieldName=b;this.isRepeated=0;this.i=xd}(406606992,{Io:0},Mh);function Oh(){Mh.apply(this,arguments)}
r(Oh,Mh);oe(Oh);function Ph(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Qh,Rh,Sh,Th=y.window,Uh=(null===(Qh=null===Th||void 0===Th?void 0:Th.yt)||void 0===Qh?void 0:Qh.config_)||(null===(Rh=null===Th||void 0===Th?void 0:Th.ytcfg)||void 0===Rh?void 0:Rh.data_)||{},Vh=(null===(Sh=null===Th||void 0===Th?void 0:Th.ytcfg)||void 0===Sh?void 0:Sh.obfuscatedData_)||[];function Wh(){Lh.apply(this,arguments)}
r(Wh,Lh);oe(Wh);var Xh=new Wh(Vh),Yh=Uh.EXPERIMENT_FLAGS;if(!Yh||!Yh.jspb_i18n_extension){var Zh=new Oh;Nh.i(Xh,Zh)}z("yt.config_",Uh,void 0);z("yt.configJspb_",Vh,void 0);function $h(){Ph(Uh,arguments)}
function B(a,b){return a in Uh?Uh[a]:b}
function ai(a){return B(a,void 0)}
function bi(){var a=Uh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=ci(a);return"string"===typeof a&&"false"===a?!1:!!a}
function di(a,b){a=ci(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ei(){return B("EXPERIMENTS_TOKEN","")}
function ci(a){var b=B("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:B("EXPERIMENT_FLAGS",{})[a]}
function fi(){var a=[],b=B("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=B("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var gi={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},hi={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var ii=0,ji=vc?"webkit":uc?"moz":sc?"ms":rc?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++ii},void 0);var ki=[];function li(a){ki.forEach(function(b){return b(a)})}
function mi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ni(b)}}:a}
function ni(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=B("ERRORS",[]),e.push([a,"ERROR",b,c,d]),$h("ERRORS",e));li(a)}
function oi(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=B("ERRORS",[]),e.push([a,"WARNING",b,c,d]),$h("ERRORS",e))}
;var pi={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function qi(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in pi||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ri(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
qi.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
qi.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
qi.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",nb,void 0);var si=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",si,void 0);
function ti(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ui=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function vi(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ti(a,b,c,d);if(e)return e;e=++si.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new qi(h);if(!Nd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new qi(h);
h.currentTarget=a;return c.call(a,h)};
g=mi(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ui()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function wi(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ui()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var xi=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function yi(a,b){"function"===typeof a&&(a=mi(a));return window.setTimeout(a,b)}
function zi(a){window.clearTimeout(a)}
;function Ai(a){this.L=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.S=vi(window,"mousemove",Wa(this.Y,this));a=Wa(this.M,this);"function"===typeof a&&(a=mi(a));this.fa=window.setInterval(a,25)}
Za(Ai,J);Ai.prototype.Y=function(a){void 0===a.h&&ri(a);var b=a.h;void 0===a.i&&ri(a);this.i=new Jd(b,a.i)};
Ai.prototype.M=function(){if(this.i){var a=xi();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.L();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Ai.prototype.I=function(){window.clearInterval(this.fa);wi(this.S)};function Bi(){}
function Ci(a,b){return Di(a,0,b)}
Bi.prototype.N=function(a,b){return Di(a,1,b)};
function Ei(a,b){Di(a,2,b)}
function Fi(a){var b=A("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Gi(){Bi.apply(this,arguments)}
r(Gi,Bi);function Hi(){Gi.h||(Gi.h=new Gi);return Gi.h}
function Di(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):yi(a,c||0)}
Gi.prototype.T=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):zi(a)}};
Gi.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Gi.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};var bf=Hi();var Ii={};
function dj(a){var b=void 0===a?{}:a;a=void 0===b.hc?!1:b.hc;b=void 0===b.Vb?!0:b.Vb;if(null==A("_lact",window)){var c=parseInt(B("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&ej();vi(document,"keydown",ej);vi(document,"keyup",ej);vi(document,"mousedown",ej);vi(document,"mouseup",ej);a?vi(window,"touchmove",function(){fj("touchmove",200)},{passive:!0}):(vi(window,"resize",function(){fj("resize",200)}),b&&vi(window,"scroll",function(){fj("scroll",200)}));
new Ai(function(){fj("mouse",100)});
vi(document,"touchstart",ej,{passive:!0});vi(document,"touchend",ej,{passive:!0})}}
function fj(a,b){Ii[a]||(Ii[a]=!0,bf.N(function(){ej();Ii[a]=!1},b))}
function ej(){null==A("_lact",window)&&dj();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function gj(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function hj(){var a=ij;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function jj(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var kj=/^[\w.]*$/,lj={q:!0,search_query:!0};function mj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=nj(f[0]||""),h=nj(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(v){var k=v,m=f[0],p=String(mj);k.args=[{key:m,value:f[1],query:a,method:oj==p?"unchanged":p}];lj.hasOwnProperty(m)||oi(k)}}return c}
var oj=String(mj);function pj(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function qj(a){"?"==a.charAt(0)&&(a=a.substr(1));return mj(a,"&")}
function rj(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),qj(1<a.length?a[1]:a[0])):{}}
function sj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=qj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return hc(a,e)+d}
function tj(a){if(!b)var b=window.location.href;var c=cc(1,a),d=dc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)==d&&(Number(cc(4,b))||null)==(Number(cc(4,a))||null):!0;return a}
function nj(a){return a&&a.match(kj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function uj(a){var b=vj;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(va){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Cd:g;try{var h=g.history.length}catch(va){h=0}e.u_his=h;var k;e.u_h=null==(k=Cd.screen)?void 0:k.height;var m;e.u_w=null==(m=Cd.screen)?void 0:m.width;var p;e.u_ah=null==(p=Cd.screen)?void 0:p.availHeight;var v;e.u_aw=
null==(v=Cd.screen)?void 0:v.availWidth;var x;e.u_cd=null==(x=Cd.screen)?void 0:x.colorDepth}catch(va){}h=b.h;try{var u=h.screenX;var E=h.screenY}catch(va){}try{var F=h.outerWidth;var K=h.outerHeight}catch(va){}try{var O=h.innerWidth;var N=h.innerHeight}catch(va){}try{var R=h.screenLeft;var W=h.screenTop}catch(va){}try{O=h.innerWidth,N=h.innerHeight}catch(va){}try{var pb=h.screen.availWidth;var ba=h.screen.availTop}catch(va){}u=[R,W,u,E,pb,ba,F,K,O,N];try{var da=(b.h.top||window).document,ha="CSS1Compat"==
da.compatMode?da.documentElement:da.body;var G=(new Kd(ha.clientWidth,ha.clientHeight)).round()}catch(va){G=new Kd(-12245933,-12245933)}da=G;G={};var Ba=void 0===Ba?y:Ba;ha=new df;Ba.SVGElement&&Ba.document.createElementNS&&ha.set(0);E=Sd();E["allow-top-navigation-by-user-activation"]&&ha.set(1);E["allow-popups-to-escape-sandbox"]&&ha.set(2);Ba.crypto&&Ba.crypto.subtle&&ha.set(3);Ba.TextDecoder&&Ba.TextEncoder&&ha.set(4);Ba=ef(ha);G.bc=Ba;G.bih=da.height;G.biw=da.width;G.brdim=u.join();b=b.i;b=(G.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,G.wgl=!!Cd.WebGLRenderingContext,G);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var vj=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return pj(uj(a))},void 0);Date.now();var wj="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function xj(){if(!wj)return null;var a=wj();return"open"in a?a:null}
function yj(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var zj={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Aj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja("client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" "))),Bj=!1;
function Cj(a,b){b=void 0===b?{}:b;var c=tj(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in zj){var f=B(zj[e]);!f||!c&&dc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!dc(a))b["X-YouTube-Ad-Signals"]=pj(uj(void 0));return b}
function Dj(a){var b=window.location.search,c=dc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!tj(a)||(c=document.location.hostname);var d=bc(cc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=qj(b),f={};eb(Aj,function(g){e[g]&&(f[g]=e[g])});
return sj(a,f||{},!1)}
function Ej(a,b){var c=b.format||"JSON";a=Fj(a,b);var d=Gj(a,b),e=!1,f=Hj(a,function(k){if(!e){e=!0;h&&zi(h);var m=yj(k),p=null,v=400<=k.status&&500>k.status,x=500<=k.status&&600>k.status;if(m||v||x)p=Ij(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(p&&p.return_code,10);break a;case "RAW":m=!0;break a}m=!!p}p=p||{};v=b.context||y;m?b.onSuccess&&b.onSuccess.call(v,k,p):b.onError&&b.onError.call(v,k,p);b.onFinish&&b.onFinish.call(v,k,p)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=yi(function(){e||(e=!0,f.abort(),zi(h),g.call(b.context||y,f))},b.timeout)}return f}
function Fj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=B("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=sj(a,b||{},!0);return a}
function Gj(a,b){var c=B("XSRF_FIELD_NAME",void 0),d=B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=ai("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=qj(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):gc(e));f=e||f&&!ob(f);!Bj&&f&&"POST"!=
b.method&&(Bj=!0,ni(Error("AJAX request with postData should use POST")));return e}
function Ij(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,oi(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Jj(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Kj(g)})}d&&Lj(e);
return e}
function Lj(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new Ub(d)}else Lj(a[b])}}
function Jj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Kj(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Hj(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&mi(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=xj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=Dj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Cj(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Mj=y.ytPubsubPubsubInstance||new L,Nj=y.ytPubsubPubsubSubscribedKeys||{},Oj=y.ytPubsubPubsubTopicToKeys||{},Pj=y.ytPubsubPubsubIsSynchronous||{};function Qj(a,b){var c=Rj();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Nj[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Pj[a]?f():yi(f,0)}catch(g){ni(g)}},void 0);
Nj[d]=!0;Oj[a]||(Oj[a]=[]);Oj[a].push(d);return d}return 0}
function Sj(a){var b=Rj();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete Nj[c]}))}
function Tj(a,b){var c=Rj();c&&c.publish.apply(c,arguments)}
function Uj(a){var b=Rj();if(b)if(b.clear(a),a)Vj(a);else for(var c in Oj)Vj(c)}
function Rj(){return y.ytPubsubPubsubInstance}
function Vj(a){Oj[a]&&(a=Oj[a],eb(a,function(b){Nj[b]&&delete Nj[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.va;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;z("ytPubsubPubsubInstance",Mj,void 0);z("ytPubsubPubsubTopicToKeys",Oj,void 0);z("ytPubsubPubsubIsSynchronous",Pj,void 0);z("ytPubsubPubsubSubscribedKeys",Nj,void 0);function P(a){var b=Ha.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
r(P,Error);var Wj=window,Q=Wj.ytcsi&&Wj.ytcsi.now?Wj.ytcsi.now:Wj.performance&&Wj.performance.timing&&Wj.performance.now&&Wj.performance.timing.navigationStart?function(){return Wj.performance.timing.navigationStart+Wj.performance.now()}:function(){return(new Date).getTime()};var Xj=di("initial_gel_batch_timeout",2E3),Yj=Math.pow(2,16)-1,Zj=void 0;function ak(){this.j=this.h=this.i=0}
var bk=new ak,ck=new ak,dk=!0,ek=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",ek,void 0);var fk=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",fk,void 0);var gk=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",gk,void 0);var hk=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",hk,void 0);
function ik(a,b){if("log_event"===a.endpoint){var c=jk(a),d=ek.get(c)||[];ek.set(c,d);d.push(a.payload);kk(b,d,c)}}
function lk(a,b){if("log_event"===a.endpoint){var c=jk(a,!0),d=fk.get(c)||[];fk.set(c,d);a=td(a.payload);d.push(a);kk(b,d,c,!0)}}
function kk(a,b,c,d){d=void 0===d?!1:d;a&&(Zj=new a);a=di("tvhtml5_logging_max_batch")||di("web_logging_max_batch")||100;var e=Q(),f=d?ck.j:bk.j;b.length>=a?mk({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(nk(d),d?ck.j=e:bk.j=e)}
function ok(a,b){if("log_event"===a.endpoint){var c=jk(a),d=new Map;d.set(c,[a.payload]);b&&(Zj=new b);return new ag(function(e){Zj&&Zj.isReady()?pk(d,e,{bypassNetworkless:!0},!0):e()})}}
function qk(a,b){if("log_event"===a.endpoint){var c=jk(a,!0),d=new Map;d.set(c,[td(a.payload)]);b&&(Zj=new b);return new ag(function(e){Zj&&Zj.isReady()?rk(d,e,{bypassNetworkless:!0},!0):e()})}}
function jk(a,b){var c="";if(a.wa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Hh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&ad(d,2,Ih,c.playlistId);hk[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),gk[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function mk(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new ag(function(d){c?(zi(ck.i),zi(ck.h),ck.h=0):(zi(bk.i),zi(bk.h),bk.h=0);if(Zj&&Zj.isReady())if(void 0!==b)if(c){var e=new Map,f=fk.get(b)||[];e.set(b,f);rk(e,d,a);fk.delete(b)}else e=new Map,f=ek.get(b)||[],e.set(b,f),pk(e,d,a),ek.delete(b);else c?(rk(fk,d,a),fk.clear()):(pk(ek,d,a),ek.clear());else nk(c),d()})}
function nk(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!bk.h||a&&!ck.h)){var b=yi(function(){mk({writeThenSend:!0},void 0,a)},6E4);
a?ck.h=b:bk.h=b}zi(a?ck.i:bk.i);b=B("LOGGING_BATCH_TIMEOUT",di("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&dk&&(b=Xj);b=yi(function(){mk({writeThenSend:!0},void 0,a)},b);
a?ck.i=b:bk.i=b}
function pk(a,b,c,d){var e=Zj;c=void 0===c?{}:c;var f=Math.round(Q()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var m=k=k.next().value;k=wb({context:sk(e.config_||tk())});k.events=m;(m=gk[h])&&uk(k,h,m);delete gk[h];h="visitorOnlyApprovedKey"===h;vk(k,f,h);wk(c);xk(e,"log_event",k,yk(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
dk=!1}}
function rk(a,b,c,d){var e=Zj;c=void 0===c?{}:c;var f=Math.round(Q()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var m=k=k.next().value;k=new Jh;var p=zk(e.config_||tk());H(k,1,p);m=Ak(m);for(p=0;p<m.length;p++)id(k,3,Eh,m[p]);(m=hk[h])&&Bk(k,h,m);delete hk[h];h="visitorOnlyApprovedKey"===h;Ck(k,f,h);wk(c);k=td(k);h=yk(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;xk(e,"log_event","",h);dk=!1}}
function wk(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function yk(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Cb:a,wa:b,Fo:!!e,headers:{},postBodyFormat:"",postBody:""}}
function vk(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=B("EVENT_ID",void 0))&&(c=Dk(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ck(a,b,c){D(a,2,b);if(!c&&(b=B("EVENT_ID",void 0))){c=Dk();var d=new Gh;D(d,1,b);D(d,2,c);H(a,5,d)}}
function Dk(){var a=B("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*Yj/2));a++;a>Yj&&(a=1);$h("BATCH_CLIENT_COUNTER",a);return a}
function uk(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Bk(a,b,c){if(Zc(c,1===bd(c,Ih)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=fd(a,Vg,1)||new Vg;c=fd(a,Tg,3)||new Tg;var e=new Sg;e.setToken(b);D(e,1,d);id(c,12,Sg,e);H(a,3,c)}
function Ak(a){for(var b=[],c=0;c<a.length;c++)try{var d=b,e=d.push;var f=String(a[c]),g=Eh;if(null==f||""==f)var h=new g;else{var k=JSON.parse(f);Array.isArray(k)||qd(Error("Expected to deserialize an Array but got "+Oa(k)+": "+k));sd=k;var m=new g(k);sd=null;h=m}e.call(d,h)}catch(p){ni(new P("Transport failed to deserialize "+String(a[c])))}return b}
;var Ek=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Ek,void 0);
function Fk(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(hi[a]||gi[a])return}else if(M("lr_drop_other_payloads")&&hi[a])return;var e={},f=Math.round(d.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=gj();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.W&&(a=e.context,b=d.W,b={index:Gk(b),groupKey:b},a.sequence=b,d.vb&&delete Ek[d.W]);(d.pc?ok:ik)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
wa:d.wa},c)}
function Gk(a){Ek[a]=a in Ek?Ek[a]+1:0;return Ek[a]}
;function Hk(a){var b=this;this.h=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.h=c})}
function Ik(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function Jk(){var a=Ik();a=Object.keys(cf).indexOf(a);return-1===a?null:a}
;function Kk(a,b,c,d,e){je.set(""+a,b,{Qa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Lk(a){return je.get(""+a,void 0)}
function Mk(){if(!je.isEnabled())return!1;if(!je.isEmpty())return!0;je.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==je.get("TESTCOOKIESENABLED"))return!1;je.remove("TESTCOOKIESENABLED");return!0}
;var Nk=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Nk,void 0);function Ok(){this.h=B("ALT_PREF_COOKIE_NAME","PREF");this.i=B("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Lk(this.h);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Nk[d]=c.toString())}}}
Ok.prototype.get=function(a,b){Pk(a);Qk(a);a=void 0!==Nk[a]?Nk[a].toString():null;return null!=a?a:b?b:""};
Ok.prototype.set=function(a,b){Pk(a);Qk(a);if(null==b)throw Error("ExpectedNotNull");Nk[a]=b.toString()};
function Rk(a){return!!((Sk("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Ok.prototype.remove=function(a){Pk(a);Qk(a);delete Nk[a]};
Ok.prototype.clear=function(){for(var a in Nk)delete Nk[a]};
function Qk(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Pk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Sk(a){a=void 0!==Nk[a]?Nk[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(Ok);var Tk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Uk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Vk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Wk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Xk(){var a=y.navigator;return a?a.connection:void 0}
function Yk(){var a=Xk();if(a){var b=Tk[a.type||"unknown"]||"CONN_UNKNOWN";a=Tk[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Zk(){var a=Xk();if(null!==a&&void 0!==a&&a.effectiveType)return Wk.hasOwnProperty(a.effectiveType)?Wk[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function $k(){return"INNERTUBE_API_KEY"in Uh&&"INNERTUBE_API_VERSION"in Uh}
function tk(){return{innertubeApiKey:B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:B("INNERTUBE_API_VERSION",void 0),cb:B("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),eb:B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Xb:B("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),zb:B("INNERTUBE_CONTEXT_HL",void 0),yb:B("INNERTUBE_CONTEXT_GL",void 0),Yb:B("INNERTUBE_HOST_OVERRIDE",void 0)||"",ac:!!B("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Zb:!!B("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:B("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function sk(a){var b={client:{hl:a.zb,gl:a.yb,clientName:a.eb,clientVersion:a.innertubeContextClientVersion,configInfo:a.cb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=ei();""!==c&&(b.client.experimentsToken=c);c=fi();0<c.length&&(b.request={internalExperimentFlags:c});al(a,void 0,b);bl(a,void 0,b);cl(void 0,b);dl(a,void 0,b);el(void 0,b);B("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:B("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=q(Object.entries(qj(B("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=q(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function zk(a){var b=new Vg,c=new Og;D(c,1,a.zb);D(c,2,a.yb);D(c,16,a.Xb);D(c,17,a.innertubeContextClientVersion);if(a.cb){var d=a.cb,e=new Lg;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);H(c,62,e)}(d=y.devicePixelRatio)&&1!=d&&D(c,65,d);d=ei();""!==d&&D(c,54,d);d=fi();if(0<d.length){e=new Qg;for(var f=0;f<d.length;f++){var g=new Jg;D(g,1,d[f].key);g.setValue(d[f].value);id(e,15,Jg,g)}H(b,
5,e)}al(a,c);bl(a,c);cl(c);dl(a,c);el(c);B("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Tg,D(a,3,B("DELEGATED_SESSION_ID")));a=q(Object.entries(qj(B("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=q(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);H(b,1,c);return b}
function al(a,b,c){a=a.eb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=fd(b,Mg,96)||new Mg;var d=Jk();null!==d&&D(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Ik())}
function bl(a,b,c){a=a.eb;if(("WEB_REMIX"===a||76===a)&&!M("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=fd(b,Ng,70))?d:new Ng;d=Jk();null!==d&&D(c,10,d);H(b,70,c)}else if(c){var e;c.client.Bb=null!=(e=c.client.Bb)?e:{};c.client.Bb.webDisplayMode=Ik()}}
function cl(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function dl(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=fd(b,Lg,62))?d:new Lg;D(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function el(a,b){var c=Yk();c&&(a?D(a,61,Uk[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Zk())&&(a?D(a,94,Vk[c]):b&&(b.client.effectiveConnectionType=c))}
function fl(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&B("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":B("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||B("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Do||B("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().Co:b=ne([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=B("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return d}
;function gl(a){a=Object.assign({},a);delete a.Authorization;var b=ne();if(b){var c=new wf;c.update(B("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Lc(c.digest(),3)}return a}
;function hl(a){var b=new Cg;(b=b.isAvailable()?a?new Ig(b,a):b:null)||(a=new Dg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new yg(a):null;this.i=document.domain||window.location.hostname}
hl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Sf(b))}catch(f){return}else e=escape(b);Kk(a,e,c,this.i)};
hl.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Lk(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
hl.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;je.remove(""+a,"/",void 0===b?"youtube.com":b)};var il;function jl(){il||(il=new hl("yt.innertube"));return il}
function kl(a,b,c,d){if(d)return null;d=jl().get("nextId",!0)||1;var e=jl().get("requests",!0)||{};e[d]={method:a,request:b,authState:gl(c),requestTime:Math.round(Q())};jl().set("nextId",d+1,86400,!0);jl().set("requests",e,86400,!0);return d}
function ll(a){var b=jl().get("requests",!0)||{};delete b[a];jl().set("requests",b,86400,!0)}
function ml(a){var b=jl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=gl(fl(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),xk(a,d.method,e,{}));delete b[c]}}jl().set("requests",b,86400,!0)}}
;var nl=Gc||Hc;function ol(a){var b=Rb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var pl=function(){var a;return function(){a||(a=new hl("ytidb"));return a}}();
function ql(){var a;return null===(a=pl())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var rl=[],sl,tl=!1;function ul(){var a={};for(sl=new vl(void 0===a.handleError?wl:a.handleError,void 0===a.logEvent?xl:a.logEvent);0<rl.length;)switch(a=rl.shift(),a.type){case "ERROR":sl.handleError(a.payload);break;case "EVENT":sl.logEvent(a.eventType,a.payload)}}
function yl(a){tl||(sl?sl.handleError(a):(rl.push({type:"ERROR",payload:a}),10<rl.length&&rl.shift()))}
function zl(a,b){tl||(sl?sl.logEvent(a,b):(rl.push({type:"EVENT",eventType:a,payload:b}),10<rl.length&&rl.shift()))}
;function Al(){try{return Bl(),!0}catch(a){return!1}}
function Bl(a){if(void 0!==B("DATASYNC_ID",void 0))return B("DATASYNC_ID",void 0);throw new P("Datasync ID not set",void 0===a?"unknown":a);}
;function Cl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Dl(a){return a.substr(0,a.indexOf(":"))||a}
;var El={},Fl=(El.AUTH_INVALID="No user identifier specified.",El.EXPLICIT_ABORT="Transaction was explicitly aborted.",El.IDB_NOT_SUPPORTED="IndexedDB is not supported.",El.MISSING_INDEX="Index not created.",El.MISSING_OBJECT_STORES="Object stores not created.",El.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",El.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",El.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
El.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",El.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",El.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",El.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",El),Gl={},Hl=(Gl.AUTH_INVALID="ERROR",Gl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Gl.EXPLICIT_ABORT="IGNORED",Gl.IDB_NOT_SUPPORTED="ERROR",Gl.MISSING_INDEX=
"WARNING",Gl.MISSING_OBJECT_STORES="ERROR",Gl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Gl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Gl.QUOTA_EXCEEDED="WARNING",Gl.QUOTA_MAYBE_EXCEEDED="WARNING",Gl.UNKNOWN_ABORT="WARNING",Gl.INCOMPATIBLE_DB_VERSION="WARNING",Gl),Il={},Jl=(Il.AUTH_INVALID=!1,Il.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Il.EXPLICIT_ABORT=!1,Il.IDB_NOT_SUPPORTED=!1,Il.MISSING_INDEX=!1,Il.MISSING_OBJECT_STORES=!1,Il.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Il.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Il.QUOTA_EXCEEDED=!1,Il.QUOTA_MAYBE_EXCEEDED=!0,Il.UNKNOWN_ABORT=!0,Il.INCOMPATIBLE_DB_VERSION=!1,Il);function Kl(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Fl[a]:c;d=void 0===d?Hl[a]:d;e=void 0===e?Jl[a]:e;P.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Kl.prototype)}
r(Kl,P);function Ll(a,b){Kl.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Fl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ll.prototype)}
r(Ll,Kl);function Ml(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ml.prototype)}
r(Ml,Error);var Nl=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ol(a,b,c,d){b=Dl(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Kl)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Kl("QUOTA_EXCEEDED",a);if(Ic&&"UnknownError"===e.name)return new Kl("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ml)return new Kl("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Nl.some(function(f){return e.message.includes(f)}))return new Kl("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Kl("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Db:e.name})];e.level="WARNING";return e}
function Pl(a,b,c){var d=ql();return new Kl("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function Ql(a){if(!a)throw Error();throw a;}
function Rl(a){return a}
function Sl(a){this.h=a}
function Tl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=q(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=q(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Tl.all=function(a){return new Tl(new Sl(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={na:0};f.na<a.length;f={na:f.na},++f.na)Ul(Tl.resolve(a[f.na]).then(function(g){return function(h){d[g.na]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Tl.resolve=function(a){return new Tl(new Sl(function(b,c){a instanceof Tl?a.then(b,c):b(a)}))};
Tl.reject=function(a){return new Tl(new Sl(function(b,c){c(a)}))};
Tl.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Rl,e=null!==b&&void 0!==b?b:Ql;return new Tl(new Sl(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Vl(c,c,d,f,g)}),c.onRejected.push(function(){Wl(c,c,e,f,g)})):"FULFILLED"===c.state.status?Vl(c,c,d,f,g):"REJECTED"===c.state.status&&Wl(c,c,e,f,g)}))};
function Ul(a,b){a.then(void 0,b)}
function Vl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Tl?Xl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Wl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Tl?Xl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Tl?Xl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Yl(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Zl(a){return new Promise(function(b,c){Yl(a,b,c)})}
function $l(a){return new Tl(new Sl(function(b,c){Yl(a,b,c)}))}
;function am(a,b){return new Tl(new Sl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function bm(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
l=bm.prototype;l.add=function(a,b,c){return cm(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return cm(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return cm(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function dm(a,b,c){a=a.h.createObjectStore(b,c);return new em(a)}
l.delete=function(a,b){return cm(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return cm(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function fm(a,b){return cm(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return $l(c.h.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function cm(a,b,c,d){var e,f,g,h,k,m,p,v,x,u,E,F;return w(function(K){switch(K.h){case 1:var O={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){K.s(3);break}g++;k=Math.round(Q());ua(K,4);m=a.h.transaction(b,e.mode);O=new gm(m);O=hm(O,d);return t(K,O,6);case 6:return p=K.i,v=Math.round(Q()),im(a,k,v,g,void 0,b.join(),e),K.return(p);case 4:x=xa(K);u=Math.round(Q());E=Ol(x,a.h.name,b.join(),a.h.version);
if((F=E instanceof Kl&&!E.h)||g>=f)im(a,k,u,g,E,b.join(),e),h=E;K.s(2);break;case 3:return K.return(Promise.reject(h))}})}
function im(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Kl&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&zl("QUOTA_EXCEEDED",{dbName:Dl(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Kl&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),zl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),jm(a,!1,d,f,b,g.tag),yl(e)):jm(a,!0,d,f,b,g.tag)}
function jm(a,b,c,d,e,f){zl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function em(a){this.h=a}
l=em.prototype;l.add=function(a,b){return $l(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return $l(this.h.clear()).then(function(){})};
l.count=function(a){return $l(this.h.count(a))};
function km(a,b){return lm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?km(this,a):$l(this.h.delete(a))};
l.get=function(a){return $l(this.h.get(a))};
l.index=function(a){try{return new mm(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ml(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function lm(a,b,c){a=a.h.openCursor(b.query,b.direction);return nm(a).then(function(d){return am(d,c)})}
function gm(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Kl;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function hm(a,b){var c=new Promise(function(d,e){try{Ul(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return q(d).next().value})}
gm.prototype.abort=function(){this.h.abort();this.i=!0;throw new Kl("EXPLICIT_ABORT");};
gm.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new em(a),this.j.set(a,b));return b};
function mm(a){this.h=a}
l=mm.prototype;l.count=function(a){return $l(this.h.count(a))};
l.delete=function(a){return om(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return $l(this.h.get(a))};
l.getKey=function(a){return $l(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function om(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return nm(a).then(function(d){return am(d,c)})}
function pm(a,b){this.request=a;this.cursor=b}
function nm(a){return $l(a).then(function(b){return b?new pm(a,b):null})}
l=pm.prototype;l.advance=function(a){this.cursor.advance(a);return nm(this.request)};
l.continue=function(a){this.cursor.continue(a);return nm(this.request)};
l.delete=function(){return $l(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return $l(this.cursor.update(a))};function qm(a,b,c){return new Promise(function(d,e){function f(){x||(x=new bm(g.result,{closed:v}));return x}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.Bc,p=c.upgrade,v=c.closed,x;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&zl("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:Dl(a)});var E=f(),F=new gm(g.transaction);
p&&p(E,function(K){return u.oldVersion<K&&u.newVersion>=K},F);
F.done.catch(function(K){e(K)})}catch(K){e(K)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){zl("IDB_UNEXPECTEDLY_CLOSED",{dbName:Dl(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function rm(a,b,c){c=void 0===c?{}:c;return qm(a,b,c)}
function sm(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return ua(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),t(g,Zl(c),4);
if(2!=g.h)return wa(g,0);f=xa(g);throw Ol(f,a,"",-1);})}
;function tm(a){return new Promise(function(b){Ei(function(){b()},a)})}
function um(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
um.prototype.j=function(a,b,c){c=void 0===c?{}:c;return rm(a,b,c)};
um.prototype.delete=function(a){a=void 0===a?{}:a;return sm(this.name,a)};
function vm(a,b){return new Kl("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function wm(a,b){if(!b)throw Pl("openWithToken",Dl(a.name));return a.open()}
um.prototype.open=function(){function a(){var f,g,h,k,m,p,v,x,u,E;return w(function(F){switch(F.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",ua(F,2),t(F,c.j(c.name,c.options.version,e),4);case 4:k=F.i;for(var K=c.options,O=[],N=q(Object.keys(K.ya)),R=N.next();!R.done;R=N.next()){R=R.value;var W=K.ya[R],pb=void 0===W.kc?Number.MAX_VALUE:W.kc;!(k.h.version>=W.Xa)||k.h.version>=pb||k.h.objectStoreNames.contains(R)||O.push(R)}m=O;if(0===m.length){F.s(5);break}p=Object.keys(c.options.ya);
v=k.objectStoreNames();if(c.m<di("ytidb_reopen_db_retries",0))return c.m++,k.close(),yl(new Kl("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:p,foundObjectStores:v})),F.return(a());if(!(c.o<di("ytidb_remake_db_retries",1))){F.s(6);break}c.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){F.s(7);break}return t(F,tm(c.i),8);case 8:c.i*=2;case 7:return t(F,c.delete(),9);case 9:return yl(new Kl("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:p,foundObjectStores:v})),
F.return(a());case 6:throw new Ll(v,p);case 5:return F.return(k);case 2:x=xa(F);if(x instanceof DOMException?"VersionError"!==x.name:"DOMError"in self&&x instanceof DOMError?"VersionError"!==x.name:!(x instanceof Object&&"message"in x)||"An attempt was made to open a database using a lower version than the existing version."!==x.message){F.s(10);break}return t(F,c.j(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),11);case 11:u=F.i;E=u.h.version;if(void 0!==c.options.version&&E>
c.options.version+1)throw u.close(),c.l=!1,vm(c,E);return F.return(u);case 10:throw b(),x instanceof Error&&!M("ytidb_async_stack_killswitch")&&(x.stack=x.stack+"\n"+h.substring(h.indexOf("\n")+1)),Ol(x,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw vm(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Bc:b,upgrade:this.options.upgrade};return this.h=d=a()};var xm=new um("YtIdbMeta",{ya:{databases:{Xa:1}},upgrade:function(a,b){b(1)&&dm(a,"databases",{keyPath:"actualName"})}});
function ym(a,b){var c;return w(function(d){if(1==d.h)return t(d,wm(xm,b),2);c=d.i;return d.return(cm(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return $l(f.h.put(a,void 0)).then(function(){})})}))})}
function zm(a,b){var c;return w(function(d){if(1==d.h)return a?t(d,wm(xm,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Am(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],t(e,wm(xm,b),2)):3!=e.h?(d=e.i,t(e,cm(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return lm(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Bm(a){return Am(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Cm(a,b,c){return Am(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Dm(a){var b,c;return w(function(d){if(1==d.h)return b=Bl("YtIdbMeta hasAnyMeta other"),t(d,Am(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Em,Fm=new function(){}(new function(){});
function Gm(){var a,b,c;return w(function(d){switch(d.h){case 1:a=ql();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=nl)e=/WebKit\/([0-9]+)/.exec(Rb()),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Rb()),e=!(e&&602<=parseInt(e[1],10)));if(e||tc)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
ua(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return t(d,ym(c,Fm),4);case 4:return t(d,zm("yt-idb-test-do-not-use",Fm),5);case 5:return d.return(!0);case 2:return xa(d),d.return(!1)}})}
function Hm(){if(void 0!==Em)return Em;tl=!0;return Em=Gm().then(function(a){tl=!1;var b,c;null!==(b=pl())&&void 0!==b&&b.h&&(b=ql(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=pl())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function Im(){return A("ytglobal.idbToken_")||void 0}
function Jm(){var a=Im();return a?Promise.resolve(a):Hm().then(function(b){(b=b?Fm:void 0)&&z("ytglobal.idbToken_",b,void 0);return b})}
;var Km=0;function Lm(a,b){Km||(Km=bf.N(function(){var c,d,e,f,g;return w(function(h){switch(h.h){case 1:return t(h,Jm(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ua(h,3);return t(h,Cm(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.s(6);break}f=e[0];return t(h,sm(f.actualName),7);case 7:return t(h,zm(f.actualName,c),6);case 6:wa(h,4);break;case 3:g=xa(h),yl(g),d=!1;case 4:bf.T(Km),Km=0,d&&Lm(a,b),h.h=0}})}))}
function Mm(){var a;return w(function(b){return 1==b.h?t(b,Jm(),2):(a=b.i)?b.return(Dm(a)):b.return(!1)})}
new Ad;function Nm(a){if(!Al())throw a=new Kl("AUTH_INVALID",{dbName:a}),yl(a),a;var b=Bl();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Om(a,b,c,d){var e,f,g,h,k,m;return w(function(p){switch(p.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",t(p,Jm(),2);case 2:g=p.i;if(!g)throw h=Pl("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),yl(h),h;Cl(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Nm(a);ua(p,3);return t(p,ym(k,g),5);case 5:return t(p,rm(k.actualName,b,d),6);case 6:return p.return(p.i);case 3:return m=xa(p),ua(p,7),t(p,zm(k.actualName,
g),9);case 9:wa(p,8);break;case 7:xa(p);case 8:throw m;}})}
function Pm(a,b,c){c=void 0===c?{}:c;return Om(a,b,!1,c)}
function Qm(a,b,c){c=void 0===c?{}:c;return Om(a,b,!0,c)}
function Rm(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return t(e,Jm(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Cl(a);d=Nm(a);return t(e,sm(d.actualName,b),3)}return t(e,zm(d.actualName,c),0)})}
function Sm(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?t(e,sm(d.actualName,b),2):t(e,zm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Tm(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return t(d,Jm(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Cl("LogsDatabaseV2");return t(d,Bm(b),3)}c=d.i;return t(d,Sm(c,a,b),0)})}
function Um(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return t(d,Jm(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Cl(a);return t(d,sm(a,b),3)}return t(d,zm(a,c),0)})}
;function Vm(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ra=function(){};
this.now=Date.now;this.xa=!1;this.Kb=null!==(b=a.Kb)&&void 0!==b?b:100;this.Ib=null!==(c=a.Ib)&&void 0!==c?c:1;this.Gb=null!==(d=a.Gb)&&void 0!==d?d:2592E6;this.Eb=null!==(e=a.Eb)&&void 0!==e?e:12E4;this.Hb=null!==(f=a.Hb)&&void 0!==f?f:5E3;this.v=null!==(g=a.v)&&void 0!==g?g:void 0;this.La=!!a.La;this.Ka=null!==(h=a.Ka)&&void 0!==h?h:.1;this.Sa=null!==(k=a.Sa)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.ra&&(this.ra=a.ra);a.xa&&(this.xa=a.xa);this.D=a.D;this.U=a.U;this.K=a.K;
this.J=a.J;this.da=a.da;this.jb=a.jb;this.ib=a.ib;this.v&&(!this.D||this.D("networkless_logging"))&&Wm(this)}
function Wm(a){a.v&&!a.xa&&(a.h=!0,a.La&&Math.random()<=a.Ka&&a.K.Rb(a.v),Xm(a),a.J.H()&&a.Ba(),a.J.V(a.jb,a.Ba.bind(a)),a.J.V(a.ib,a.ob.bind(a)))}
l=Vm.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.K.set(d,this.v).then(function(e){d.id=e;c.J.H()&&Ym(c,d)}).catch(function(e){Ym(c,d);
Zm(c,e)})}else this.da(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D&&this.D("nwl_skip_retry")&&(e.skipRetry=c);if(this.J.H()||this.D&&this.D("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.h)return t(k,d.K.set(e,d.v).catch(function(m){Zm(d,m)}),2);
f(g,h);k.h=0})}}this.da(a,b,e.skipRetry)}else this.K.set(e,this.v).catch(function(g){d.da(a,b,e.skipRetry);
Zm(d,g)})}else this.da(a,b,this.D&&this.D("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.K.qa(d.id,c.v):e=!0;c.J.ca&&c.D&&c.D("vss_network_hint")&&c.J.ca(!0);f(g,h)};
this.da(d.url,d.options);this.K.set(d,this.v).then(function(g){d.id=g;e&&c.K.qa(d.id,c.v)}).catch(function(g){Zm(c,g)})}else this.da(a,b)};
l.Ba=function(){var a=this;if(!this.v)throw Pl("throttleSend");this.i||(this.i=this.U.N(function(){var b;return w(function(c){if(1==c.h)return t(c,a.K.xb("NEW",a.v),2);if(3!=c.h)return b=c.i,b?t(c,Ym(a,b),3):(a.ob(),c.return());a.i&&(a.i=0,a.Ba());c.h=0})},this.Kb))};
l.ob=function(){this.U.T(this.i);this.i=0};
function Ym(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!a.v)throw c=Pl("immediateSend"),c;if(void 0===b.id){e.s(2);break}return t(e,a.K.cc(b.id,a.v),3);case 3:(d=e.i)?b=d:a.ra(Error("The request cannot be found in the database."));case 2:if($m(a,b,a.Gb)){e.s(4);break}a.ra(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return t(e,a.K.qa(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=an(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return t(e,a.K.qa(b.id,a.v),8);case 8:a.da(b.url,b.options,!!b.skipRetry),e.h=0}})}
function an(a,b){if(!a.v)throw Pl("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return w(function(h){switch(h.h){case 1:g=bn(f);if(!(a.D&&a.D("nwl_consider_error_code")&&g||a.D&&!a.D("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Sa)){h.s(2);break}if(!a.J.ea){h.s(3);break}return t(h,a.J.ea(),3);case 3:if(a.J.H()){h.s(2);break}c(e,f);if(!a.D||!a.D("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.s(6);break}return t(h,a.K.kb(b.id,a.v,!1),6);case 6:return h.return();case 2:if(a.D&&a.D("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Sa)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.s(8);break}return b.sendCount<a.Ib?t(h,a.K.kb(b.id,a.v),12):t(h,a.K.qa(b.id,a.v),8);case 12:a.U.N(function(){a.J.H()&&a.Ba()},a.Hb);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return w(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.s(2):t(g,a.K.qa(b.id,a.v),2);a.J.ca&&a.D&&a.D("vss_network_hint")&&a.J.ca(!0);d(e,f);g.h=0})};
return b}
function $m(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Xm(a){if(!a.v)throw Pl("retryQueuedRequests");a.K.xb("QUEUED",a.v).then(function(b){b&&!$m(a,b,a.Eb)?a.U.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,a.K.kb(b.id,a.v),2);Xm(a);c.h=0})}):a.J.H()&&a.Ba()})}
function Zm(a,b){a.Mb&&!a.J.H()?a.Mb(b):a.handleError(b)}
function bn(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function cn(a,b){this.version=a;this.args=b}
;function dn(a,b){this.topic=a;this.h=b}
dn.prototype.toString=function(){return this.topic};var en=A("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.va;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;z("ytPubsub2Pubsub2Instance",en,void 0);var fn=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",fn,void 0);var gn=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",gn,void 0);var hn=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",hn,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function jn(a,b){var c=kn();c&&c.publish.call(c,a.toString(),a,b)}
function ln(a){var b=mn,c=kn();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(fn[d])try{if(f&&b instanceof dn&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ia){var m=new h;h.ia=m.version}var p=h.ia}catch(K){}if(!p||k.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{p=Reflect;var v=p.construct;
var x=k.args,u=x.length;if(0<u){var E=Array(u);for(k=0;k<u;k++)E[k]=x[k];var F=E}else F=[];f=v.call(p,h,F)}catch(K){throw K.message="yt.pubsub2.Data.deserialize(): "+K.message,K;}}catch(K){throw K.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+K.message,K;}a.call(window,f)}catch(K){ni(K)}},hn[b.toString()]?A("yt.scheduler.instance")?bf.N(g):yi(g,0):g())});
fn[d]=!0;gn[b.toString()]||(gn[b.toString()]=[]);gn[b.toString()].push(d);return d}
function nn(){var a=on,b=ln(function(c){a.apply(void 0,arguments);pn(b)});
return b}
function pn(a){var b=kn();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete fn[c]}))}
function kn(){return A("ytPubsub2Pubsub2Instance")}
;function qn(a,b){um.call(this,a,b);this.options=b;Cl(a)}
r(qn,um);function rn(a,b){var c;return function(){c||(c=new qn(a,b));return c}}
qn.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.lb?Qm:Pm)(a,b,Object.assign({},c))};
qn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.lb?Um:Rm)(this.name,a)};
function sn(a,b){return rn(a,b)}
;var tn;
function un(){if(tn)return tn();var a={};tn=sn("LogsDatabaseV2",{ya:(a.LogsRequestsStore={Xa:2},a),lb:!1,upgrade:function(b,c,d){c(2)&&dm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return tn()}
;function vn(a){return wm(un(),a)}
function wn(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},t(g,vn(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:B("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),t(g,fm(d,e),3);f=g.i;c.Cc=Q();xn(c);return g.return(f)})}
function yn(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},t(m,vn(b),2);if(3!=m.h)return d=m.i,e=B("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Q()],h=IDBKeyRange.bound(f,g),k=void 0,t(m,cm(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(p){return om(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(v){v.getValue()&&(k=v.getValue(),"NEW"===a&&(k.status="QUEUED",
v.update(k)))})}),3);
c.Cc=Q();xn(c);return m.return(k)})}
function zn(a,b){var c;return w(function(d){if(1==d.h)return t(d,vn(b),2);c=d.i;return d.return(cm(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",$l(f.h.put(g,void 0)).then(function(){return g})})}))})}
function An(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.h)return t(e,vn(b),2);d=e.i;return e.return(cm(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),$l(g.h.put(h,void 0)).then(function(){return h})):Tl.resolve(void 0)})}))})}
function Bn(a,b){var c;return w(function(d){if(1==d.h)return t(d,vn(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Cn(a){var b,c;return w(function(d){if(1==d.h)return t(d,vn(a),2);b=d.i;c=Q()-2592E6;return t(d,cm(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return lm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Dn(){return w(function(a){return t(a,Tm(),0)})}
function xn(a){M("nwl_csi_killswitch")||.01>=Math.random()&&jn("nwl_transaction_latency_payload",a)}
;var En={},Fn=sn("ServiceWorkerLogsDatabase",{ya:(En.SWHealthLog={Xa:1},En),lb:!0,upgrade:function(a,b){b(1)&&dm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Gn(a){return wm(Fn(),a)}
function Hn(a){var b,c;return w(function(d){if(1==d.h)return t(d,Gn(a),2);b=d.i;c=Q()-2592E6;return t(d,cm(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return lm(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function In(a){var b;return w(function(c){if(1==c.h)return t(c,Gn(a),2);b=c.i;return t(c,b.clear("SWHealthLog"),0)})}
;var Jn={},Kn=0;
function Ln(a){var b=void 0===b?"":b;if(a)if(b)Hj(a,void 0,"POST",b,void 0);else if(B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Hj(a,void 0,"GET","",void 0);else{b:{try{var c=new bb({url:a});if(c.j&&c.i||c.l){var d=bc(cc(5,a)),e;if(!(e=!d||!d.endsWith("/aclk"))){var f=a.search(jc),g=ic(a,0,"ri",f);if(0>g)var h=null;else{var k=a.indexOf("&",g);if(0>k||k>f)k=f;g+=3;h=decodeURIComponent(a.substr(g,k-g).replace(/\+/g," "))}e="1"!==h}var m=!e;break b}}catch(v){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&
window.navigator.sendBeacon(a,"")){var p=!0;break b}}catch(v){}p=!1}b=p?!0:!1}else b=!1;b||Mn(a)}}
function Mn(a){var b=new Image,c=""+Kn++;Jn[c]=b;b.onload=b.onerror=function(){delete Jn[c]};
b.src=a}
;function Nn(){this.h=new Map;this.i=!1}
function On(){if(!Nn.h){var a=A("yt.networkRequestMonitor.instance")||new Nn;z("yt.networkRequestMonitor.instance",a,void 0);Nn.h=a}return Nn.h}
Nn.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Nn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Nn.prototype.removeParams=function(a){return a.split("?")[0]};
Nn.prototype.removeParams=Nn.prototype.removeParams;Nn.prototype.isEndpointCFR=Nn.prototype.isEndpointCFR;Nn.prototype.requestComplete=Nn.prototype.requestComplete;Nn.getInstance=On;var Pn;function Qn(){Pn||(Pn=new hl("yt.offline"));return Pn}
function Rn(a){if(M("offline_error_handling")){var b=Qn().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Qn().set("errors",b,2592E3,!0)}}
function Sn(){if(M("offline_error_handling")){var a=Qn().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new P(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;ni(c)}Qn().set("errors",{},2592E3,!0)}}}
;var Tn=di("network_polling_interval",3E4);function Un(){Ve.call(this);var a=this;this.M=0;this.S=this.m=!1;this.j=this.bb();M("use_shared_nsm")?(this.i=af(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.V("networkstatus-online",function(){a.j=!0}),this.i.V("networkstatus-offline",function(){a.j=!1}))):(Vn(this),Wn(this))}
r(Un,Ve);function no(){if(!Un.h){var a=A("yt.networkStatusManager.instance")||new Un;z("yt.networkStatusManager.instance",a,void 0);Un.h=a}return Un.h}
l=Un.prototype;l.H=function(){var a;return M("use_shared_nsm")&&this.i?null===(a=this.i)||void 0===a?void 0:a.H():this.j};
l.ca=function(a){var b;M("use_shared_nsm")&&this.i?null===(b=this.i)||void 0===b?void 0:b.i=a:a!==this.j&&(this.j=a)};
l.dc=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.M||Mo(this))};
l.bb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Ub=function(){this.S=!0};
l.V=function(a,b){return M("use_shared_nsm")&&this.i?this.i.V(a,b):Ve.prototype.V.call(this,a,b)};
function Wn(a){window.addEventListener("online",function(){return w(function(b){if(1==b.h)return t(b,a.ea(),2);a.S&&Sn();b.h=0})})}
function Vn(a){window.addEventListener("offline",function(){return w(function(b){return t(b,a.ea(),0)})})}
function Mo(a){a.M=Ci(function(){return w(function(b){if(1==b.h)return a.j?a.bb()||!a.m?b.s(3):t(b,a.ea(),3):t(b,a.ea(),3);Mo(a);b.h=0})},Tn)}
l.ea=function(a){var b=this;if(M("use_shared_nsm")&&this.i){var c=Ze(this.i,a);c.then(function(d){M("use_cfr_monitor")&&On().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g;return w(function(h){switch(h.h){case 1:return e=window.AbortController?new window.AbortController:void 0,f=null===e||void 0===e?void 0:e.signal,g=!1,ua(h,2,3),e&&(b.A=bf.N(function(){e.abort()},a||2E4)),t(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:ya(h);M("use_cfr_monitor")&&On().requestComplete("generate_204",g);b.u=void 0;b.A&&bf.T(b.A);g!==b.j&&(b.j=g,b.j&&b.m?We(b,"ytnetworkstatus-online"):b.m&&We(b,"ytnetworkstatus-offline"));d(g);za(h);break;case 2:xa(h),g=!1,h.s(3)}})})};
Un.prototype.sendNetworkCheckRequest=Un.prototype.ea;Un.prototype.listen=Un.prototype.V;Un.prototype.enableErrorFlushing=Un.prototype.Ub;Un.prototype.getWindowStatus=Un.prototype.bb;Un.prototype.monitorNetworkStatusChange=Un.prototype.dc;Un.prototype.networkStatusHint=Un.prototype.ca;Un.prototype.isNetworkAvailable=Un.prototype.H;Un.getInstance=no;function No(a){a=void 0===a?{}:a;Ve.call(this);var b=this;this.j=this.M=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.i=no();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.ub);a.Pa&&!M("use_shared_nsm")&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.i))a.Ua?
(this.Ua=a.Ua,c(this.u,function(){Oo(b,"publicytnetworkstatus-online");M("use_shared_nsm")&&a.Pa&&Sn()}),c(this.m,function(){Oo(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){We(b,"publicytnetworkstatus-online");
M("use_shared_nsm")&&a.Pa&&Sn()}),c(this.m,function(){We(b,"publicytnetworkstatus-offline")}))}
r(No,Ve);No.prototype.H=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
No.prototype.ca=function(a){var b=A("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
No.prototype.ea=function(a){var b=this,c;return w(function(d){c=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return M("skip_network_check_if_cfr")&&On().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ca((null===(f=window.navigator)||void 0===f?void 0:f.onLine)||!0);e(b.H())})):c?d.return(c(a)):d.return(!0)})};
function Oo(a,b){a.Ua?a.j?(bf.T(a.M),a.M=bf.N(function(){a.A!==b&&(We(a,b),a.A=b,a.j=Q())},a.Ua-(Q()-a.j))):(We(a,b),a.A=b,a.j=Q()):We(a,b)}
;var Po;function Qo(){Vm.call(this,{K:{Rb:Cn,qa:Bn,xb:yn,cc:zn,kb:An,set:wn},J:Ro(),handleError:ni,ra:oi,da:So,now:Q,Mb:Rn,U:Hi(),jb:"publicytnetworkstatus-online",ib:"publicytnetworkstatus-offline",La:!0,Ka:.1,Sa:di("potential_esf_error_limit",10),D:M,xa:!(Al()&&To())});this.j=new Ad;M("networkless_immediately_drop_all_requests")&&Dn();Um("LogsDatabaseV2")}
r(Qo,Vm);function Uo(){var a=A("yt.networklessRequestController.instance");a||(a=new Qo,z("yt.networklessRequestController.instance",a,void 0),M("networkless_logging")&&Jm().then(function(b){a.v=b;Wm(a);a.j.resolve();a.La&&Math.random()<=a.Ka&&a.v&&Hn(a.v);M("networkless_immediately_drop_sw_health_store")&&Vo(a)}));
return a}
Qo.prototype.writeThenSend=function(a,b){b||(b={});Al()||(this.h=!1);Vm.prototype.writeThenSend.call(this,a,b)};
Qo.prototype.sendThenWrite=function(a,b,c){b||(b={});Al()||(this.h=!1);Vm.prototype.sendThenWrite.call(this,a,b,c)};
Qo.prototype.sendAndWrite=function(a,b){b||(b={});Al()||(this.h=!1);Vm.prototype.sendAndWrite.call(this,a,b)};
Qo.prototype.awaitInitialization=function(){return this.j.promise};
function Vo(a){var b;w(function(c){if(!a.v)throw b=Pl("clearSWHealthLogsDb"),b;return c.return(In(a.v).catch(function(d){a.handleError(d)}))})}
function So(a,b,c){M("use_cfr_monitor")&&Wo(a,b);var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q());c&&0===Object.keys(b).length?Ln(a):Ej(a,b)}
function Ro(){Po||(Po=new No({Pa:!0,ub:!0}));return Po}
function Wo(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){On().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){On().requestComplete(a,!0);d(e,f)}}
function To(){return M("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==dc(document.location.toString()):!0}
;var Xo=!1,Yo=0,Zo=0,$o,ap=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Xo,potentialEsfErrorCounter:Zo};z("ytNetworklessLoggingInitializationOptions",ap,void 0);
function bp(){var a;w(function(b){switch(b.h){case 1:return t(b,Jm(),2);case 2:a=b.i;if(!a||!Al()&&!M("nwl_init_require_datasync_id_killswitch")||!To()){b.s(0);break}Xo=!0;ap.isNwlInitialized=Xo;if(!M("use_new_nwl_initialization")){b.s(4);break}return t(b,Uo().awaitInitialization(),5);case 5:return b.return();case 4:return t(b,Um("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.s(7);break}return t(b,Cn(a),8);case 8:return t(b,Hn(a),7);case 7:cp();dp().H()&&ep();dp().V("publicytnetworkstatus-online",
ep);dp().V("publicytnetworkstatus-offline",fp);if(!M("networkless_immediately_drop_sw_health_store")){b.s(10);break}return t(b,gp(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return t(b,Dn(),0);b.s(0)}})}
function hp(a,b){function c(d){var e=dp().H();if(!ip()||!d||e&&M("vss_networkless_bypass_write"))jp(a,b);else{var f={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0};wn(f,d).then(function(g){f.id=g;dp().H()&&kp(f)}).catch(function(g){kp(f);
dp().H()?ni(g):Rn(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Jm().then(function(d){c(d)}):c(Im())}
function lp(a,b){function c(d){if(ip()&&d){var e={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&On().requestComplete(e.url,!0);void 0!==e.id?Bn(e.id,d):f=!0;M("vss_network_hint")&&dp().ca(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){On().requestComplete(e.url,!1);h(k,m)}}jp(e.url,e.options);
wn(e,d).then(function(k){e.id=k;f&&Bn(e.id,d)}).catch(function(k){dp().H()?ni(k):Rn(k)})}else jp(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Jm().then(function(d){c(d)}):c(Im())}
function ep(){var a=Im();if(!a)throw Pl("throttleSend");Yo||(Yo=bf.N(function(){var b;return w(function(c){if(1==c.h)return t(c,yn("NEW",a),2);if(3!=c.h)return b=c.i,b?t(c,kp(b),3):(fp(),c.return());Yo&&(Yo=0,ep());c.h=0})},100))}
function fp(){bf.T(Yo);Yo=0}
function kp(a){var b,c,d;return w(function(e){switch(e.h){case 1:b=Im();if(!b)throw c=Pl("immediateSend"),c;if(void 0===a.id){e.s(2);break}return t(e,zn(a.id,b),3);case 3:(d=e.i)?a=d:oi(Error("The request cannot be found in the database."));case 2:if(mp(a,2592E6)){e.s(4);break}oi(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return t(e,Bn(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=np(a));var f=a,g,h;if(null===(h=null===(g=null===
f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(Q());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return t(e,Bn(a.id,b),8);case 8:jp(a.url,a.options,!!a.skipRetry),e.h=0}})}
function np(a){var b=Im();if(!b)throw Pl("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return w(function(h){switch(h.h){case 1:M("use_cfr_monitor")&&On().requestComplete(a.url,!1);g=bn(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&op()<=di("potential_esf_error_limit",10))){h.s(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||On().isEndpointCFR(a.url))){h.s(3);break}return t(h,dp().ea(),3);case 3:if(dp().H()){h.s(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null===a||void 0===a?void 0:a.id)){h.s(6);break}return t(h,An(a.id,b,!1),6);case 6:return h.return();case 2:if(M("nwl_consider_error_code")&&!g&&op()>di("potential_esf_error_limit",10))return h.return();A("ytNetworklessLoggingInitializationOptions")&&ap.potentialEsfErrorCounter++;Zo++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.s(8);break}return 1>a.sendCount?t(h,An(a.id,b),12):t(h,Bn(a.id,b),8);case 12:bf.N(function(){dp().H()&&ep()},5E3);
case 8:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return w(function(g){if(1==g.h)return M("use_cfr_monitor")&&On().requestComplete(a.url,!0),void 0===(null===a||void 0===a?void 0:a.id)?g.s(2):t(g,Bn(a.id,b),2);M("vss_network_hint")&&dp().ca(!0);d(e,f);g.h=0})};
return a}
function mp(a,b){a=a.timestamp;return Q()-a>=b?!1:!0}
function cp(){var a=Im();if(!a)throw Pl("retryQueuedRequests");yn("QUEUED",a).then(function(b){b&&!mp(b,12E4)?bf.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,An(b.id,a),2);cp();c.h=0})}):dp().H()&&ep()})}
function gp(){var a,b;return w(function(c){a=Im();if(!a)throw b=Pl("clearSWHealthLogsDb"),b;return c.return(In(a).catch(function(d){ni(d)}))})}
function dp(){if(M("use_new_nwl"))return Ro();$o||($o=new No({Pa:!0,ub:!0}));return $o}
function jp(a,b,c){c&&0===Object.keys(b).length?Ln(a):Ej(a,b)}
function ip(){return A("ytNetworklessLoggingInitializationOptions")?ap.isNwlInitialized:Xo}
function op(){return A("ytNetworklessLoggingInitializationOptions")?ap.potentialEsfErrorCounter:Zo}
;function pp(a){var b=this;this.config_=null;a?this.config_=a:$k()&&(this.config_=tk());Ci(function(){ml(b)},5E3)}
pp.prototype.isReady=function(){!this.config_&&$k()&&(this.config_=tk());return!!this.config_};
function xk(a,b,c,d){function e(E){E=void 0===E?!1:E;var F;if(d.retry&&"www.youtube-nocookie.com"!=h&&(E||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(F=kl(b,c,m,k)),F)){var K=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,R){ll(F);K(N,R)};
c.onFetchSuccess=function(N,R){ll(F);O(N,R)}}try{E&&d.retry&&!d.Cb.bypassNetworkless?(g.method="POST",d.Cb.writeThenSend?M("use_new_nwl_wts")?Uo().writeThenSend(u,g):hp(u,g):M("use_new_nwl_saw")?Uo().sendAndWrite(u,g):lp(u,g)):(g.method="POST",g.postParams||(g.postParams={}),Ej(u,g))}catch(N){if("InvalidAccessError"==N.name)F&&(ll(F),F=0),oi(Error("An extension is blocking network request."));
else throw N;}F&&Ci(function(){ml(a)},5E3)}
!B("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&oi(new P("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new P("innertube xhrclient not ready",b,c,d);ni(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(E,F){if(d.onSuccess)d.onSuccess(F)},
onFetchSuccess:function(E){if(d.onSuccess)d.onSuccess(E)},
onError:function(E,F){if(d.onError)d.onError(F)},
onFetchError:function(E){if(d.onError)d.onError(E)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Yb)&&(h=f);var k=a.config_.ac||!1,m=fl(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var p="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,v={alt:"json"},x=a.config_.Zb&&f;x=x&&f.startsWith("Bearer");x||(v.key=a.config_.innertubeApiKey);var u=sj(""+h+p,v||{},!0);M("use_new_nwl")&&Uo().h||!M("use_new_nwl")&&
ip()?Hm().then(function(E){e(E)}):e(!1)}
;function xl(a,b,c){c=void 0===c?{}:c;var d=pp;B("ytLoggingEventsDefaultDisabled",!1)&&pp==pp&&(d=null);Fk(a,b,d,c)}
;var qp=[{hb:function(a){return"Cannot read property '"+a.key+"'"},
Ra:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{hb:function(a){return"Cannot call '"+a.key+"'"},
Ra:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{hb:function(a){return a.key+" is not defined"},
Ra:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var sp={ha:[],ga:[{ka:rp,weight:500}]};function rp(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function tp(){this.ga=[];this.ha=[]}
var up;function vp(){if(!up){var a=up=new tp;a.ha.length=0;a.ga.length=0;sp.ha&&a.ha.push.apply(a.ha,sp.ha);sp.ga&&a.ga.push.apply(a.ga,sp.ga)}return up}
;var wp=new L;function xp(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=yp(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=yp(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=yp(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function yp(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function zp(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ap(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=xp(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Ap(e+".ve",f,g,h):0;d+=g;d+=Ap(e,a[e],b,c);if(500<d)break}}else c[b]=Bp(a),d+=c[b].length;else c[b]=Bp(a),d+=c[b].length;return d}
function Ap(a,b,c,d){c+="."+a;a=Bp(b);d[c]=a;return c.length+a.length}
function Bp(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Cp=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Cp,void 0);function Dp(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||Q());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=gj();d=new Dh;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.W){e=c.W;var f=Gk(e),g=new Ch;D(g,2,f);D(g,1,e);H(d,3,g);c.vb&&delete Cp[c.W]}H(a,33,d);(c.pc?qk:lk)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,wa:c.wa},b)}
;function Ep(a,b){b=void 0===b?{}:b;var c=!1;B("ytLoggingEventsDefaultDisabled",!1)&&pp===pp&&(c=!0);Dp(a,c?null:pp,b)}
;function Fp(a,b,c){var d=new Eh;hd(d,72,Fh,a);c?Dp(d,c,b):Ep(d,b)}
function Gp(a,b,c){var d=new Eh;hd(d,73,Fh,a);c?Dp(d,c,b):Ep(d,b)}
function Hp(a,b,c){var d=new Eh;hd(d,78,Fh,a);c?Dp(d,c,b):Ep(d,b)}
function Ip(a,b,c){var d=new Eh;hd(d,208,Fh,a);c?Dp(d,c,b):Ep(d,b)}
function Jp(a,b,c){var d=new Eh;hd(d,156,Fh,a);c?Dp(d,c,b):Ep(d,b)}
function Kp(a,b,c){var d=new Eh;hd(d,215,Fh,a);c?Dp(d,c,b):Ep(d,b)}
function Lp(a,b,c){var d=new Eh;hd(d,111,Fh,a);c?Dp(d,c,b):Ep(d,b)}
;var Mp=new Set,Np=0,Op=0,Pp=0,Qp=[],Rp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function wl(a){Sp(a)}
function Tp(a){Sp(a,"WARNING")}
function Sp(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Np)){var m=Qp,p=te(a),v=p.message||"Unknown Error",x=p.name||"UnknownError",u=p.stack||a.i||"Not available";if(u.startsWith(x+": "+v)){var E=u.split("\n");E.shift();u=E.join("\n")}var F=p.lineNumber||"Not available",K=p.fileName||"Not available",O=u,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(N=zp(a.args[R],"params."+R,g,N),500<=N);R++);else if(a.hasOwnProperty("params")&&
a.params){var W=a.params;if("object"===typeof a.params)for(var pb in W){if(W[pb]){var ba="params."+pb,da=Bp(W[pb]);g[ba]=da;N+=ba.length+da.length;if(500<N)break}}else g.params=Bp(W)}if(m.length)for(var ha=0;ha<m.length&&!(N=zp(m[ha],"params.context."+ha,g,N),500<=N);ha++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var G={message:v,name:x,lineNumber:F,fileName:K,stack:O,params:g,sampleWeight:1},Ba=Number(a.columnNumber);isNaN(Ba)||(G.lineNumber=G.lineNumber+
":"+Ba);if("IGNORED"===a.level)var va=0;else a:{for(var Xn=vp(),Yn=q(Xn.ha),Ji=Yn.next();!Ji.done;Ji=Yn.next()){var Zn=Ji.value;if(G.message&&G.message.match(Zn.Ko)){va=Zn.weight;break a}}for(var $n=q(Xn.ga),Ki=$n.next();!Ki.done;Ki=$n.next()){var ao=Ki.value;if(ao.ka(G)){va=ao.weight;break a}}va=1}G.sampleWeight=va;for(var bo=q(qp),Li=bo.next();!Li.done;Li=bo.next()){var Mi=Li.value;if(Mi.Ra[G.name])for(var co=q(Mi.Ra[G.name]),Ni=co.next();!Ni.done;Ni=co.next()){var eo=Ni.value,Tf=G.message.match(eo.regexp);
if(Tf){G.params["params.error.original"]=Tf[0];for(var Oi=eo.groups,fo={},cd=0;cd<Oi.length;cd++)fo[Oi[cd]]=Tf[cd+1],G.params["params.error."+Oi[cd]]=Tf[cd+1];G.message=Mi.hb(fo);break}}}G.params||(G.params={});var go=vp();G.params["params.errorServiceSignature"]="msg="+go.ha.length+"&cb="+go.ga.length;G.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(G.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(G.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(G);if(0!==G.sampleWeight&&!Mp.has(G.message)){if("ERROR"===h){wp.ja("handleError",G);if(M("record_app_crashed_web")&&0===Pp&&1===G.sampleWeight)if(Pp++,M("errors_via_jspb")){var Pi=new hh;D(Pi,1,1);if(!M("report_client_error_with_app_crash_ks")){var ho=new ch;D(ho,1,G.message);var io=new dh;H(io,3,ho);var jo=new eh;H(jo,5,io);var ko=new fh;H(ko,9,jo);H(Pi,4,ko)}var lo=new Eh;hd(lo,20,Fh,Pi);Ep(lo,void 0)}else{var mo=
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(mo.systemHealth={crashData:{clientError:{logMessage:{message:G.message}}}});xl("appCrashed",mo)}Op++}else"WARNING"===h&&wp.ja("handleWarning",G);if(M("kevlar_gel_error_routing"))a:{var ae=h;if(M("errors_via_jspb")){if(Up())var oo=void 0;else{var dd=new $g;D(dd,1,G.stack);G.fileName&&D(dd,4,G.fileName);var ub=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==ub.length&&(1!==ub.length||isNaN(Number(ub[0]))?
2!==ub.length||isNaN(Number(ub[0]))||isNaN(Number(ub[1]))||(D(dd,2,Number(ub[0])),D(dd,3,Number(ub[1]))):D(dd,2,Number(ub[0])));var oc=new ch;D(oc,1,G.message);D(oc,3,G.name);D(oc,6,G.sampleWeight);"ERROR"===ae?D(oc,2,2):"WARNING"===ae?D(oc,2,1):D(oc,2,0);var Qi=new ah;D(Qi,1,!0);hd(Qi,3,bh,dd);var Ob=new Xg;D(Ob,3,window.location.href);for(var po=B("FEXP_EXPERIMENTS",[]),Ri=0;Ri<po.length;Ri++){var Gt=po[Ri];Wc(Ob);$c(Ob,5).push(Gt)}var Si=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);if(!bi()&&
Si)for(var qo=q(Object.keys(Si)),pc=qo.next();!pc.done;pc=qo.next()){var ro=pc.value,Ti=new Zg;D(Ti,1,ro);Ti.setValue(String(Si[ro]));id(Ob,4,Zg,Ti)}var Ui=G.params;if(Ui){var so=q(Object.keys(Ui));for(pc=so.next();!pc.done;pc=so.next()){var to=pc.value,Vi=new Zg;D(Vi,1,"client."+to);Vi.setValue(String(Ui[to]));id(Ob,4,Zg,Vi)}}var uo=ai("SERVER_NAME"),vo=ai("SERVER_VERSION");if(uo&&vo){var Wi=new Zg;D(Wi,1,"server.name");Wi.setValue(uo);id(Ob,4,Zg,Wi);var Xi=new Zg;D(Xi,1,"server.version");Xi.setValue(vo);
id(Ob,4,Zg,Xi)}var Uf=new dh;H(Uf,1,Ob);H(Uf,2,Qi);H(Uf,3,oc);oo=Uf}var wo=oo;if(!wo)break a;var xo=new Eh;hd(xo,163,Fh,wo);Ep(xo,void 0)}else{if(Up())var yo=void 0;else{var be={stackTrace:G.stack};G.fileName&&(be.filename=G.fileName);var vb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==vb.length&&(1!==vb.length||isNaN(Number(vb[0]))?2!==vb.length||isNaN(Number(vb[0]))||isNaN(Number(vb[1]))||(be.lineNumber=Number(vb[0]),be.columnNumber=Number(vb[1])):be.lineNumber=Number(vb[0]));
var Yi={level:"ERROR_LEVEL_UNKNOWN",message:G.message,errorClassName:G.name,sampleWeight:G.sampleWeight};"ERROR"===ae?Yi.level="ERROR_LEVEL_ERROR":"WARNING"===ae&&(Yi.level="ERROR_LEVEL_WARNNING");var Ht={isObfuscated:!0,browserStackInfo:be},ed={pageUrl:window.location.href,kvPairs:[]};B("FEXP_EXPERIMENTS")&&(ed.experimentIds=B("FEXP_EXPERIMENTS"));var Zi=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);if(!bi()&&Zi)for(var zo=q(Object.keys(Zi)),qc=zo.next();!qc.done;qc=zo.next()){var Ao=qc.value;
ed.kvPairs.push({key:Ao,value:String(Zi[Ao])})}var $i=G.params;if($i){var Bo=q(Object.keys($i));for(qc=Bo.next();!qc.done;qc=Bo.next()){var Co=qc.value;ed.kvPairs.push({key:"client."+Co,value:String($i[Co])})}}var Do=ai("SERVER_NAME"),Eo=ai("SERVER_VERSION");Do&&Eo&&(ed.kvPairs.push({key:"server.name",value:Do}),ed.kvPairs.push({key:"server.version",value:Eo}));yo={errorMetadata:ed,stackTrace:Ht,logMessage:Yi}}var Fo=yo;if(!Fo)break a;xl("clientError",Fo)}("ERROR"===ae||M("errors_flush_gel_always_killswitch"))&&
mk()}if(!M("suppress_error_204_logging")){var ce=G.params||{},Pb={urlParams:{a:"logerror",t:"jserror",type:G.name,msg:G.message.substr(0,250),line:G.lineNumber,level:h,"client.name":ce.name},postParams:{url:B("PAGE_NAME",window.location.href),file:G.fileName},method:"POST"};ce.version&&(Pb["client.version"]=ce.version);if(Pb.postParams){G.stack&&(Pb.postParams.stack=G.stack);for(var Go=q(Object.keys(ce)),aj=Go.next();!aj.done;aj=Go.next()){var Ho=aj.value;Pb.postParams["client."+Ho]=ce[Ho]}var bj=
B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);if(bj)for(var Io=q(Object.keys(bj)),cj=Io.next();!cj.done;cj=Io.next()){var Jo=cj.value;Pb.postParams[Jo]=bj[Jo]}var Ko=B("SERVER_NAME",void 0),Lo=B("SERVER_VERSION",void 0);Ko&&Lo&&(Pb.postParams["server.name"]=Ko,Pb.postParams["server.version"]=Lo)}Ej(B("ECATCHER_REPORT_HOST","")+"/error_204",Pb)}try{Mp.add(G.message)}catch(fv){}Np++}}}}
function Up(){for(var a=q(Rp),b=a.next();!b.done;b=a.next())if(ol(b.value.toLowerCase()))return!0;return!1}
function Vp(a){var b=Ha.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,ja(b))}
;function Wp(){this.register=new Map}
function Xp(a){a=q(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.No("ABORTED")}
Wp.prototype.clear=function(){Xp(this);this.register.clear()};
var Yp=new Wp;var Zp=Date.now().toString();
function $p(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Zp)for(a=1,b=0;b<Zp.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Zp.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var aq=y.ytLoggingDocDocumentNonce_;aq||(aq=$p(),Ya("ytLoggingDocDocumentNonce_",aq));var bq=aq;var cq={xg:0,rd:1,zd:2,Zj:3,zg:4,Zn:5,Pk:6,qm:7,Sl:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function dq(a){this.h=a}
function eq(a){return new dq({trackingParams:a})}
dq.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
dq.prototype.getAsJspb=function(){var a=new ih;void 0!==this.h.trackingParams?D(a,1,this.h.trackingParams):(void 0!==this.h.veType&&D(a,2,this.h.veType),void 0!==this.h.veCounter&&D(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&D(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();H(a,7,b)}void 0!==this.h.youtubeData&&H(a,8,this.h.jspbYoutubeData);return a};
dq.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
dq.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function fq(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function gq(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function hq(a){return B(gq(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",hq,void 0);function iq(a){return(a=hq(void 0===a?0:a))?new dq({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function jq(){var a=B("csn-to-ctt-auth-info");a||(a={},$h("csn-to-ctt-auth-info",a));return a}
function kq(a){a=B(fq(void 0===a?0:a));if(!a&&!B("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",kq,void 0);function lq(a,b,c){var d=jq();(c=kq(c))&&delete d[c];b&&(d[a]=b)}
function mq(a){return jq()[a]}
z("yt_logging_screen.getCttAuthInfo",mq,void 0);
function nq(a,b,c,d){c=void 0===c?0:c;if(a!==B(fq(c))||b!==B(gq(c)))lq(a,d,c),$h(fq(c),a),$h(gq(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new jh;D(e,1,bq);D(e,2,a);M("use_default_heartbeat_client")?Lp(e):Lp(e,void 0,pp)}else e={clientDocumentNonce:bq,clientScreenNonce:a},M("use_default_heartbeat_client")?xl("foregroundHeartbeatScreenAssociated",e):Fk("foregroundHeartbeatScreenAssociated",e,pp)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
z("yt_logging_screen.setCurrentScreen",nq,void 0);var oq=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",oq,void 0);function pq(a){Ph(oq,arguments)}
;var qq={qd:3611,Fc:27686,Gc:85013,Hc:23462,Jc:42016,Kc:62407,Lc:26926,Ic:43781,Mc:51236,Nc:79148,Oc:50160,Pc:77504,cd:87907,dd:18630,ed:54445,fd:80935,gd:105675,hd:37521,jd:47786,kd:98349,ld:123695,md:6827,nd:29434,od:7282,pd:124448,td:32276,sd:76278,ud:93911,vd:106531,wd:27259,xd:27262,yd:27263,Ad:21759,Bd:27107,Cd:62936,Dd:49568,Ed:38408,Fd:80637,Gd:68727,Hd:68728,Id:80353,Jd:80356,Kd:74610,Ld:45707,Md:83962,Nd:83970,Od:46713,Pd:89711,Qd:74612,Rd:93265,Sd:74611,Td:131380,Vd:128979,Wd:139311,Xd:128978,
Ud:131391,Yd:105350,ae:139312,be:134800,Zd:131392,de:113533,ee:93252,ge:99357,ie:94521,je:114252,ke:113532,le:94522,he:94583,me:88E3,ne:139580,oe:93253,pe:93254,qe:94387,re:94388,se:93255,te:97424,ce:72502,ue:110111,we:76019,ye:117092,ze:117093,xe:89431,Ae:110466,Be:77240,Ce:60508,De:137401,Ee:137402,Fe:137046,Ge:73393,He:113534,Ie:92098,Je:131381,Ke:84517,Le:83759,Me:80357,Ne:86113,Oe:72598,Pe:72733,Qe:107349,Re:124275,Se:118203,Te:133275,Ue:133274,Ve:133272,We:133273,Xe:133276,Ye:144507,Ze:143247,
af:143248,bf:143249,cf:143250,df:143251,ef:144401,gf:117431,ff:133797,hf:128572,jf:133405,kf:117429,lf:117430,mf:117432,nf:120080,pf:117259,qf:121692,rf:145656,sf:145655,tf:145653,uf:145654,vf:145657,wf:132972,xf:133051,yf:133658,zf:132971,Af:97615,Cf:143359,Bf:143356,Ef:143361,Df:143358,Gf:143360,Ff:143357,Hf:142303,If:143353,Jf:143354,Kf:144479,Lf:143355,Mf:31402,Of:133624,Pf:146477,Qf:133623,Rf:133622,Nf:133621,Sf:84774,Tf:95117,Uf:98930,Vf:98931,Wf:98932,Xf:43347,Yf:129889,Zf:45474,ag:100352,
cg:84758,dg:98443,eg:117985,fg:74613,gg:74614,hg:64502,ig:136032,jg:74615,kg:74616,lg:122224,mg:74617,ng:77820,og:74618,pg:93278,qg:93274,rg:93275,sg:93276,tg:22110,ug:29433,vg:133798,wg:132295,yg:120541,Ag:82047,Bg:113550,Cg:75836,Dg:75837,Eg:42352,Fg:84512,Gg:76065,Hg:75989,Ig:16623,Jg:32594,Kg:27240,Lg:32633,Mg:74858,Og:3945,Ng:16989,Pg:45520,Qg:25488,Rg:25492,Sg:25494,Tg:55760,Ug:14057,Vg:18451,Wg:57204,Xg:57203,Yg:17897,Zg:57205,ah:18198,bh:17898,dh:17909,eh:43980,fh:46220,gh:11721,hh:49954,
ih:96369,jh:3854,kh:56251,lh:25624,Ch:16906,Dh:99999,Eh:68172,Fh:27068,Gh:47973,Hh:72773,Ih:26970,Jh:26971,Kh:96805,Lh:17752,Mh:73233,Nh:109512,Oh:22256,Ph:14115,Qh:22696,Rh:89278,Sh:89277,Th:109513,Uh:43278,Vh:43459,Wh:43464,Xh:89279,Yh:43717,Zh:55764,ai:22255,bi:89281,ci:40963,di:43277,fi:43442,gi:91824,hi:120137,ii:96367,ji:36850,ki:72694,li:37414,mi:36851,oi:124863,ni:121343,ri:73491,si:54473,ti:43375,vi:46674,wi:143815,xi:139095,yi:144402,zi:32473,Ai:72901,Bi:72906,Ci:50947,Di:50612,Ei:50613,
Fi:50942,Gi:84938,Hi:84943,Ii:84939,Ji:84941,Ki:84944,Li:84940,Mi:84942,Ni:35585,Oi:51926,Pi:79983,Qi:63238,Ri:18921,Si:63241,Ti:57893,Ui:41182,Vi:135732,Wi:33424,Xi:22207,Yi:42993,Zi:36229,aj:22206,bj:22205,cj:18993,dj:19001,ej:18990,fj:18991,gj:18997,hj:18725,ij:19003,jj:36874,kj:44763,lj:33427,mj:67793,nj:22182,oj:37091,pj:34650,qj:50617,rj:47261,sj:22287,tj:25144,uj:97917,vj:62397,wj:125598,xj:137935,yj:36961,zj:108035,Aj:27426,Bj:27857,Cj:27846,Dj:27854,Ej:69692,Fj:61411,Gj:39299,Hj:38696,Ij:62520,
Jj:36382,Kj:108701,Lj:50663,Mj:36387,Nj:14908,Oj:37533,Pj:105443,Qj:61635,Rj:62274,Sj:133818,Tj:65702,Uj:65703,Vj:65701,Wj:76256,Xj:37671,Yj:49953,ak:36216,bk:28237,ck:39553,dk:29222,ek:26107,fk:38050,gk:26108,ik:120745,hk:26109,jk:26110,kk:66881,lk:28236,mk:14586,nk:57929,pk:74723,qk:44098,rk:44099,uk:23528,vk:61699,sk:134104,tk:134103,wk:59149,xk:101951,yk:97346,zk:118051,Ak:95102,Bk:64882,Ck:119505,Dk:63595,Ek:63349,Fk:95101,Gk:75240,Hk:27039,Ik:68823,Jk:21537,Kk:83464,Lk:75707,Mk:83113,Nk:101952,
Ok:101953,Qk:79610,Rk:125755,Sk:24402,Tk:24400,Uk:32925,Vk:57173,Wk:122502,Xk:145268,Yk:138480,Zk:64423,al:64424,bl:33986,dl:100828,fl:129089,il:21409,ml:135155,nl:135156,ol:135157,pl:135158,ql:135159,rl:135160,sl:135161,ul:135162,vl:135163,wl:135164,xl:135165,yl:135166,jl:11070,kl:11074,ll:17880,zl:14001,Bl:30709,Cl:30707,Dl:30711,El:30710,Fl:30708,Al:26984,Gl:146143,Hl:63648,Il:63649,Jl:51879,Kl:111059,Ll:5754,Ml:20445,Ol:130975,Nl:130976,Pl:110386,Ql:113746,Rl:66557,Tl:17310,Ul:28631,Vl:21589,
Wl:68012,Xl:60480,Yl:138664,Zl:141121,am:31571,bm:141978,cm:76980,dm:41577,em:45469,fm:38669,gm:13768,hm:13777,im:141842,jm:62985,km:4724,lm:59369,mm:43927,nm:43928,om:12924,pm:100355,sm:56219,tm:27669,um:10337,rm:47896,vm:122629,xm:139723,wm:139722,ym:121258,zm:107598,Am:127991,Bm:96639,Cm:107536,Dm:130169,Em:96661,Fm:145188,Gm:96658,Hm:116646,Im:121122,Jm:96660,Km:127738,Lm:127083,Mm:104443,Nm:96659,Om:106442,Pm:134840,Qm:63667,Rm:63668,Sm:63669,Tm:130686,Um:147036,Vm:78314,Wm:55761,Xm:127098,Ym:134841,
Zm:96368,an:67374,bn:48992,cn:146176,dn:49956,en:31961,fn:26388,gn:23811,hn:5E4,jn:126250,kn:96370,ln:47355,mn:47356,nn:37935,pn:45521,qn:21760,rn:83769,sn:49977,tn:49974,un:93497,vn:93498,wn:34325,xn:140759,yn:115803,zn:123707,An:100081,Bn:35309,Cn:68314,Dn:25602,En:100339,Fn:143516,Gn:59018,Hn:18248,In:50625,Jn:9729,Kn:37168,Ln:37169,Mn:21667,Nn:16749,On:18635,Pn:39305,Qn:18046,Rn:53969,Sn:8213,Tn:93926,Un:102852,Vn:110099,Wn:22678,Xn:69076,Yn:137575,ao:139224,bo:100856,co:17736,eo:3832,fo:147111,
ho:55759,jo:64031,po:93044,qo:93045,ro:34388,so:17657,to:17655,uo:39579,vo:39578,wo:77448,xo:8196,yo:11357,zo:69877,Ao:8197,Bo:82039};function rq(){var a=tb(sq),b;return hg(new ag(function(c,d){a.onSuccess=function(e){yj(e)?c(new tq(e)):d(new uq("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new uq("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new uq("Request timed out","net.timeout",e))};
b=Ej("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ig&&b.abort();
return fg(c)})}
function uq(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(uq,ab);function tq(a){this.xhr=a}
;function vq(){this.i=0;this.h=null}
vq.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),$f(a)?a:wq(a)):2===this.i&&b?(a=b.call(c,this.h),$f(a)?a:xq(a)):this};
vq.prototype.getValue=function(){return this.h};
vq.prototype.$goog_Thenable=!0;function xq(a){var b=new vq;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function wq(a){var b=new vq;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function yq(){if(le()||nl&&ol("applewebkit")&&!ol("version")&&(!ol("safari")||ol("gsa/"))||wc&&ol("version/"))return!0;if(M("enable_web_eom_visitor_data"))return B("EOM_VISITOR_DATA",void 0)?!1:!0;var a=B("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=Lk("CONSENT"))?a.startsWith("YES+"):!0}
;function zq(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Aq;this.isTimeout=a instanceof uq&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ig}
r(zq,ab);zq.prototype.name="BiscottiError";function Aq(){ab.call(this,"Biscotti ID is missing from server")}
r(Aq,ab);Aq.prototype.name="BiscottiMissingError";var sq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Bq=null;function ij(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return fg(Error("Biscotti id fetching has been disabled entirely."));if(!yq())return fg(Error("User has not consented - not fetching biscotti id."));if("1"==rb())return fg(Error("Biscotti ID is not available in private embed mode"));Bq||(Bq=hg(rq().then(Cq),function(a){return Dq(2,a)}));
return Bq}
function Cq(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Aq;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Aq;a=a.id;jj(a);Bq=wq(a);Eq(18E5,2);return a}
function Dq(a,b){b=new zq(b);jj("");Bq=xq(b);0<a&&Eq(12E4,a-1);throw b;}
function Eq(a,b){yi(function(){hg(rq().then(Cq,function(c){return Dq(b,c)}),Ma)},a)}
function Fq(){try{var a=A("yt.ads.biscotti.getId_");return a?a():ij()}catch(b){return fg(b)}}
;function Gq(a){if("1"!=rb()){a&&hj();try{Fq().then(function(){},function(){}),yi(Gq,18E5)}catch(b){ni(b)}}}
;function Hq(){this.Ac=!0}
function Iq(a){var b={},c=ne([]);c&&(b.Authorization=c,c=a=null===a||void 0===a?void 0:a.sessionIndex,void 0===c&&(c=Number(B("SESSION_INDEX",0)),c=isNaN(c)?0:c),b["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in Uh||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Uh&&(b["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return b}
;var Jq=Symbol("injectionDeps");function Kq(a){this.name=a}
Kq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Lq(){this.key=Mq}
function Nq(){this.providers=new Map;this.h=new Map}
Nq.prototype.resolve=function(a){return a instanceof Lq?Oq(this,a.key,[],!0):Oq(this,a,[])};
function Oq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.Ec)var e=d.Ec;else if(d.Dc)e=d[Jq]?Pq(a,d[Jq],c):[],e=d.Dc.apply(d,ja(e));else if(d.Lb){e=d.Lb;var f=e[Jq]?Pq(a,e[Jq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ro||a.h.set(b,e);
return e}
function Pq(a,b,c){return b?b.map(function(d){return d instanceof Lq?Oq(a,d.key,c,!0):Oq(a,d,c)}):[]}
;var Qq;var Rq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Sq=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Tq(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;bc(cc(5,a));try{var b=rj(a).theme;return Sq.get(b)||null}catch(c){}return null}
;function Uq(){this.h={};if(this.i=Mk()){var a=Lk("CONSISTENCY");a&&Vq(this,{encryptedTokenJarContents:a})}}
Uq.prototype.handleResponse=function(a,b){var c,d,e;b=(null===(d=null===(c=b.ba.context)||void 0===c?void 0:c.request)||void 0===d?void 0:d.consistencyTokenJars)||[];(a=null===(e=a.responseContext)||void 0===e?void 0:e.consistencyTokenJar)&&this.replace(b,a)};
Uq.prototype.replace=function(a,b){a=q(a);for(var c=a.next();!c.done;c=a.next())delete this.h[c.value.encryptedTokenJarContents];Vq(this,b)};
function Vq(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Kk("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Wq=window.location.hostname.split(".").slice(-2).join(".");function Xq(){var a=B("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===B("INNERTUBE_CLIENT_NAME")&&(this.h=Yq(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Zq;Xq.getInstance=function(){Zq=A("yt.clientLocationService.instance");Zq||(Zq=new Xq,z("yt.clientLocationService.instance",Zq,void 0));return Zq};
Xq.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=1E7*this.i.coords.latitude,a.client.locationInfo.longitudeE7=1E7*this.i.coords.longitude,a.client.locationInfo.horizontalAccuracyMeters=this.i.coords.accuracy,a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Xq.prototype.handleResponse=function(a){var b;a=null===(b=a.responseContext)||void 0===b?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===B("INNERTUBE_CLIENT_NAME")?(this.h=Yq(this))&&this.h.set("yt-location-playability-token",a,15552E3):Kk("YT_CL",JSON.stringify({loctok:a}),15552E3,Wq,!0))};
function Yq(a){return void 0===a.h?new hl("yt-client-location"):a.h}
Xq.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Xq.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null===a||void 0===a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null===a||void 0===a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null===a||void 0===a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function $q(a,b){var c,d;if((null===(c=a.signalServiceEndpoint)||void 0===c?0:c.signal)&&b.Aa){var e=b.Aa[a.signalServiceEndpoint.signal];if(e)return e()}if((null===(d=a.continuationCommand)||void 0===d?0:d.request)&&b.Sb&&(e=b.Sb[a.continuationCommand.request]))return e();for(var f in a)if(b.qb[f]&&(a=b.qb[f]))return a()}
;function ar(a){return function(){return new a}}
;var br={},cr=(br.WEB_UNPLUGGED="^unplugged/",br.WEB_UNPLUGGED_ONBOARDING="^unplugged/",br.WEB_UNPLUGGED_OPS="^unplugged/",br.WEB_UNPLUGGED_PUBLIC="^unplugged/",br.WEB_CREATOR="^creator/",br.WEB_KIDS="^kids/",br.WEB_EXPERIMENTS="^experiments/",br.WEB_MUSIC="^music/",br.WEB_REMIX="^music/",br.WEB_MUSIC_EMBEDDED_PLAYER="^music/",br.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",br);
function dr(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=cr[b];if(c){var d=new RegExp(c),e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(cr).forEach(function(g){var h=q(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function er(a,b){return{method:void 0===b?"POST":b,mode:tj(a)?"same-origin":"cors",credentials:tj(a)?"same-origin":"include"}}
;function fr(){}
fr.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Rq:c;var d;var e=a.clickTrackingParams,f=this.l,g=!1;g=void 0===g?!1:g;f=void 0===f?!1:f;var h=B("INNERTUBE_CONTEXT");if(h){h=wb(h);M("web_no_tracking_params_in_shell_killswitch")||delete h.clickTracking;var k,m;h.client||(h.client={});var p=h.client;"MWEB"===p.clientName&&(p.clientFormFactor=B("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");p.screenWidthPoints=window.innerWidth;p.screenHeightPoints=window.innerHeight;p.screenPixelDensity=
Math.round(window.devicePixelRatio||1);p.screenDensityFloat=window.devicePixelRatio||1;p.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var v=void 0===v?!1:v;Ok.getInstance();var x="USER_INTERFACE_THEME_LIGHT";Rk(165)?x="USER_INTERFACE_THEME_DARK":Rk(174)?x="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(x="USER_INTERFACE_THEME_DARK");v=v?x:Tq()||
x;p.userInterfaceTheme=v;if(!g){if(v=Yk())p.connectionType=v;M("web_log_effective_connection_type")&&(v=Zk())&&(h.client.effectiveConnectionType=v)}M("web_log_memory_total_kbytes")&&(null===(k=y.navigator)||void 0===k?0:k.deviceMemory)&&(k=null===(m=y.navigator)||void 0===m?void 0:m.deviceMemory,h.client.memoryTotalKbytes=""+1E6*k);m=rj(y.location.href);!M("web_populate_internal_geo_killswitch")&&m.internalcountrycode&&(p.internalGeo=m.internalcountrycode);"MWEB"===p.clientName||"WEB"===p.clientName?
(p.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&Hk.h&&(p.mainAppWebInfo.pwaInstallabilityStatus=Hk.h.h?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),p.mainAppWebInfo.webDisplayMode=Ik(),p.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===p.clientName&&(!M("web_lr_app_quality_killswitch")&&(m=B("LIVING_ROOM_APP_QUALITY"))&&(p.tvAppInfo=Object.assign(p.tvAppInfo||{},{appQuality:m})),m=B("LIVING_ROOM_CERTIFICATION_SCOPE"))&&
(p.tvAppInfo=Object.assign(p.tvAppInfo||{},{certificationScope:m}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var u=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ha){}u=void 0}u&&(p.timeZone=u)}(u=ei())?p.experimentsToken=u:delete p.experimentsToken;u=fi();Uq.h||(Uq.h=new Uq);p=Uq.h.h;m=[];k=0;for(var E in p)m[k++]=p[E];h.request=Object.assign(Object.assign({},h.request),{internalExperimentFlags:u,consistencyTokenJars:m});!M("web_prequest_context_killswitch")&&
(E=B("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(h.request.externalPrequestContext=E);u=Ok.getInstance();E=Rk(58);u=u.get("gsml","");h.user=Object.assign({},h.user);E&&(h.user.enableSafetyMode=E);u&&(h.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?f&&(g=kq())&&(h.clientScreenNonce=g):!g&&(g=kq())&&(h.clientScreenNonce=g);e&&(h.clickTracking={clickTrackingParams:e});if(e=A("yt.mdx.remote.remoteClient_"))h.remoteClient=e;M("web_enable_client_location_service")&&Xq.getInstance().setLocationOnInnerTubeContext(h);
try{var F=uj(void 0),K=F.bid;delete F.bid;h.adSignalsInfo={params:[],bid:K};for(var O=q(Object.entries(F)),N=O.next();!N.done;N=O.next()){var R=q(N.value),W=R.next().value,pb=R.next().value;F=W;K=pb;null===(d=h.adSignalsInfo.params)||void 0===d?void 0:d.push({key:F,value:""+K})}}catch(ha){Sp(ha)}d=h}else Sp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),d={};d={context:d};if(O=this.h(a)){this.i(d,O,b);var ba,da;b="/youtubei/v1/"+dr(this.j());(a=null===(da=null===(ba=a.commandMetadata)||
void 0===ba?void 0:ba.webCommandMetadata)||void 0===da?void 0:da.apiUrl)&&(b=a);ba=b;(da=B("INNERTUBE_HOST_OVERRIDE"))&&(ba=String(da)+String(ec(ba)));da={};da.key=B("INNERTUBE_API_KEY");M("json_condensed_response")&&(da.prettyPrint="false");ba=sj(ba,da||{},!1);ba={input:ba,sa:er(ba),ba:d,config:Object.assign({},void 0)};ba.config.Ha?ba.config.Ha.identity=c:ba.config.Ha={identity:c};return ba}Sp(new P("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(fr.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function gr(){}
r(gr,fr);gr.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",sa:er("/getDatasyncIdsEndpoint","GET"),ba:{}}};
gr.prototype.j=function(){return[]};
gr.prototype.h=function(){};
gr.prototype.i=function(){};var hr={},ir=(hr.GET_DATASYNC_IDS=ar(gr),hr);function jr(a){var b=Ha.apply(1,arguments);if(!kr(a)||b.some(function(e){return!kr(e)}))throw Error("Only objects may be merged.");
var c=a;b=q(b);for(var d=b.next();!d.done;d=b.next())lr(c,d.value);return c}
function lr(a,b){for(var c in b)if(kr(b[c])){if(c in a&&!kr(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});lr(a[c],b[c])}else if(mr(b[c])){if(c in a&&!mr(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);nr(a[c],b[c])}else a[c]=b[c];return a}
function nr(a,b){b=q(b);for(var c=b.next();!c.done;c=b.next())c=c.value,kr(c)?a.push(lr({},c)):mr(c)?a.push(nr([],c)):a.push(c);return a}
function kr(a){return"object"===typeof a&&!Array.isArray(a)}
function mr(a){return"object"===typeof a&&Array.isArray(a)}
;function or(a,b){cn.call(this,1,arguments);this.timer=b}
r(or,cn);var pr=new dn("aft-recorded",or);var qr=window;function rr(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=qr.performance||qr.mozPerformance||qr.msPerformance||qr.webkitPerformance||new rr;var sr=!1,tr={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||Ma,S);function ur(a){var b=vr(a);if(b.aft)return b.aft;a=B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function wr(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===S||void 0===S?void 0:S.getEntriesByType)||void 0===a?void 0:a.call(S,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=xr(e.requestStart),e.responseEnd=xr(e.responseEnd),e.redirectStart=xr(e.redirectStart),e.redirectEnd=xr(e.redirectEnd),e.domainLookupEnd=xr(e.domainLookupEnd),e.connectStart=xr(e.connectStart),
e.connectEnd=xr(e.connectEnd),e.responseStart=xr(e.responseStart),e.secureConnectionStart=xr(e.secureConnectionStart),e.domainLookupStart=xr(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function yr(){return M("csi_use_time_origin")&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function xr(a){return Math.round(yr()+a)}
function zr(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ya("ytcsi."+(a||"")+"data_",b));return b}
function Ar(a){a=zr(a);a.info||(a.info={});return a.info}
function vr(a){a=zr(a);a.tick||(a.tick={});return a.tick}
function Br(a){a=zr(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Cr(a){a=Br(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Dr(a){var b=zr(a).nonce;b||(b=$p(),zr(a).nonce=b);return b}
function Er(a){var b=vr(a||""),c=ur(a);c&&!sr&&(jn(pr,new or(Math.round(c-b._start),a)),sr=!0)}
function Fr(a,b){for(var c=q(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Fr(a[d],b[d]))return!1;return!0}
;function Gr(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return xr(a.startTime)}a=S.timing;
return a.ec?Math.max(0,a.ec):0}
;function Hr(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function Ir(a){a=a||"";var b=A("ytcsi.reference");b||(Hr(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=Hr(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Jr=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T.browse="LATENCY_ACTION_BROWSE",T.cast_splash="LATENCY_ACTION_CAST_SPLASH",
T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home="LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",
T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),U={},Kr=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",
U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",
U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",
U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm=
"shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",
U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),Lr="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Mr={},Nr=(Mr.ccs="CANARY_STATE_",Mr.mver="MEASUREMENT_VERSION_",Mr.pis="PLAYER_INITIALIZED_STATE_",Mr.yt_pt="LATENCY_PLAYER_",Mr.pa="LATENCY_ACTION_",Mr.ctop="TOP_ENTITY_TYPE_",Mr.yt_vst="VIDEO_STREAM_TYPE_",Mr),Or="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Pr(a){return Jr[a]||"LATENCY_ACTION_UNKNOWN"}
function Qr(a,b,c){c=Br(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Kr){c=Kr[a];0<=db(Lr,c)&&(b=!!b);a in Nr&&"string"===typeof b&&(b=Nr[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return jr({},d)}0<=db(Or,a)||Tp(new P("Unknown label logged with GEL CSI",a))}
;var V={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_SHOPPING_IN_APP:124,
LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,
LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,
LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,
LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,
LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,
LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,
LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,
LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};V[V.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
V[V.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";V[V.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";V[V.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";V[V.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";
V[V.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";V[V.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";V[V.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";V[V.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";V[V.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";V[V.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
V[V.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";V[V.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";V[V.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";V[V.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";V[V.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";V[V.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";V[V.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";
V[V.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";V[V.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";V[V.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";V[V.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";V[V.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";V[V.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";
V[V.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";V[V.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";V[V.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";V[V.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";V[V.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";V[V.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";
V[V.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";V[V.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";V[V.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";V[V.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";V[V.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";V[V.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";
V[V.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";V[V.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";V[V.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";V[V.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";V[V.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";V[V.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";V[V.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";
V[V.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";V[V.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";V[V.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";V[V.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";V[V.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";V[V.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";V[V.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";
V[V.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";V[V.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";V[V.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";V[V.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";V[V.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";V[V.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";V[V.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
V[V.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";V[V.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";V[V.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";V[V.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";V[V.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";
V[V.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";V[V.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";V[V.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";V[V.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";V[V.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";
V[V.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";V[V.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";V[V.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";V[V.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";V[V.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";V[V.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";V[V.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";V[V.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";
V[V.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";V[V.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";V[V.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";V[V.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";
V[V.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";V[V.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";V[V.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";
V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";V[V.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
V[V.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";V[V.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";V[V.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";V[V.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";V[V.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";V[V.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";V[V.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
V[V.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";V[V.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";V[V.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";V[V.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";V[V.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";V[V.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";V[V.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";
V[V.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";V[V.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";V[V.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";V[V.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";V[V.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";V[V.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";V[V.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";
V[V.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";V[V.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";V[V.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";V[V.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";V[V.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";V[V.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";V[V.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";V[V.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";
V[V.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";V[V.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";V[V.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";V[V.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";V[V.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";V[V.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";V[V.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
V[V.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";V[V.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";V[V.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";V[V.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";V[V.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";V[V.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";V[V.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Rr={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Rr[Rr.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";
Rr[Rr.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Rr[Rr.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";
X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Sr={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Sr[Sr.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Sr[Sr.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Sr[Sr.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Sr[Sr.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Sr[Sr.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Sr[Sr.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Sr[Sr.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Sr[Sr.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Tr={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Tr[Tr.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Tr[Tr.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Tr[Tr.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Tr[Tr.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Ur={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Ur[Ur.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Ur[Ur.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Vr={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Vr[Vr.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Vr[Vr.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Vr[Vr.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Vr[Vr.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Vr[Vr.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Vr[Vr.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Wr={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Wr[Wr.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Wr[Wr.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Wr[Wr.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Wr[Wr.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Xr={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Xr[Xr.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Xr[Xr.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Xr[Xr.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Yr={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Yr[Yr.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Yr[Yr.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Yr[Yr.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Zr="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var $r=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",$r,void 0);function as(){this.h=0}
function bs(){as.h||(as.h=new as);return as.h}
as.prototype.tick=function(a,b,c,d){cs(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Bh,D(d,1,a),D(d,2,b),a=new Eh,hd(a,5,Fh,d),Ep(a,c)):xl("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
as.prototype.info=function(a,b,c){var d=Object.keys(a).join("");cs(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,xl("latencyActionInfo",a,{cttAuthInfo:c}))};
as.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));cs(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new Eh,hd(c,7,Fh,a),Ep(c,b))};
as.prototype.span=function(a,b,c){var d=Object.keys(a).join("");cs(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,xl("latencyActionSpan",a,{cttAuthInfo:c}))};
function cs(a,b){$r[b]=$r[b]||{count:0};var c=$r[b];c.count++;c.time=Q();a.h||(a.h=Ci(function(){var d=Q(),e;for(e in $r)$r[e]&&6E4<d-$r[e].time&&delete $r[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new P("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Tp(c)),!0):!1}
;function ds(){var a=["ol"];Ir("").info.actionType="embed";a&&$h("TIMING_AFT_KEYS",a);$h("TIMING_ACTION","embed");es();a=Ar();var b=Cr();if("cold"===a.yt_lt||"cold"===b.loadType){var c=vr(),d=Br();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=q(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=Qr(f,a[f]))&&!Fr(Cr(void 0),f)&&(jr(b,f),jr(e,f),c=!0);c&&fs(e)}Ya("ytglobal.timingready_",!0);a=ai("TIMING_ACTION");A("ytglobal.timingready_")&&a&&"_start"in
vr(void 0)&&ur()&&Er()}
function gs(a,b,c,d){null!==b&&(Ar(c)[a]=b,(a=Qr(a,b,c))&&fs(a,c,d))}
function fs(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Ir(b||""),jr(c.info,a),jr(Cr(b),a),c=Dr(b),b=zr(b).cttAuthInfo,bs().info(a,c,b);else{c=new xh;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,V[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,5,Rr[a[e]]);break;case "connectionType":D(c,
26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,Sr[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);break;case "adTypesAllowed":D(c,36,a[e]);
break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,V[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,Tr[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,84,a[e]);break;case "screenWidth":D(c,
85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;case "appInstallDataAgeMs":D(c,73,
a[e]);break;case "latencyActionError":D(c,71,Ur[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,Vr[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,a[e]);break;case "videoStreamType":D(c,
53,Wr[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,Xr[a[e]]);break;case "playerRotationType":D(c,101,Yr[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,a[e]);break;case "getBrowseRequestId":D(c,
63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:Zr.includes(f)&&ni(new P("Codegen laipb translator asked to translate message field",""+f))}}catch(g){ni(Error("Codegen laipb translator failed to set "+f))}}hs(c,b)}}
function hs(a,b){var c=Br(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);Ir(b||"").jspbInfo.push(a);c=Dr(b);b=zr(b).cttAuthInfo;bs().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}Ir(c||"").tick[a]=b||Q();d=Br(c);d.gelTicks&&(d.gelTicks[a]=!0);d=vr(c);var e=b||Q();d[a]=e;e=Dr(c);var f=zr(c).cttAuthInfo;if("_start"===a){var g=bs();cs(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new vh,D(f,1,e),e=new Eh,hd(e,6,Fh,f),Ep(e,b)):xl("latencyActionBaselined",{clientActionNonce:e},b))}else bs().tick(a,e,b,f);Er(c);return d[a]}
function is(){var a=Dr(void 0);requestAnimationFrame(function(){setTimeout(function(){a===Dr(void 0)&&Z("ol",void 0,void 0)},0)})}
function js(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ji+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function es(){function a(f){var g=wr(),h=yr();h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=Gr();0<f&&Z("fpt",f);f=wr();f.isPerformanceNavigationTiming&&fs({performanceNavigationTiming:!0},void 0);Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",
f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=yr()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));S&&"getEntriesByType"in S&&ks()}
var b=B("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=ls(b);hs(b);b=new xh;D(b,25,!0);D(b,1,V[Pr(B("TIMING_ACTION",void 0))]);var c=B("PREVIOUS_ACTION",void 0);c&&D(b,13,V[Pr(c)]);(c=B("CLIENT_PROTOCOL"))&&D(b,33,c);(c=B("CLIENT_TRANSPORT"))&&D(b,34,c);(c=kq())&&"UNDEFINED_CSN"!==c&&D(b,4,c);c=js();1!==c&&-1!==c||D(b,6,!0);c=Ar();D(b,3,"cold");a(c);c=ms();if(0<c.length){c=q(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new wh;D(e,1,d);id(b,83,wh,e)}}hs(b)}else{for(c in b)b.hasOwnProperty(c)&&
gs(c,b[c]);b={isNavigation:!0,actionType:Pr(B("TIMING_ACTION",void 0))};if(c=B("PREVIOUS_ACTION",void 0))b.previousAction=Pr(c);if(c=B("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=B("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=kq())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=js();if(1===c||-1===c)b.isVisible=!0;c=Ar();b.loadType="cold";a(c);c=ms();if(0<c.length)for(b.resourceInfo=[],c=q(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});fs(b)}}
function ls(a){var b=new xh;a=q(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=q(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetGuide_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetHome_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetPlayer_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetSearch_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;
case "GetSettings_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetTrending_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetWatchNext_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}return b}
function ns(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Yb()&&a.setAttribute("nonce",Yb());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=yr(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function ms(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in tr)if(tr.hasOwnProperty(b)){var c=tr[b];ns(b,c)&&a.push(c)}return a}
function ks(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",xr(b.startTime)),Z("wffe",xr(b.responseEnd)))}
var os=window;os.ytcsi&&(os.ytcsi.info=gs,os.ytcsi.tick=Z);var ps=["consistency","mss","client_location","entities","store"];function qs(a,b,c,d){this.o=a;this.J=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Aa||(a.Aa={});a.Aa=Object.assign(Object.assign({},ir),a.Aa)}
function rs(a,b,c,d){if(void 0!==qs.h){if(d=qs.h,a=[a!==d.o,b!==d.J,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new P("InnerTubeTransportService is already initialized",a);
}else qs.h=new qs(a,b,c,d)}
function ss(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Rq:c;var d=$q(b,a.o);if(!d)return fg(new P("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new ag(function(f){var g,h,k;return w(function(m){if(1==m.h){h="cors"===(null===(g=e.sa)||void 0===g?void 0:g.mode)?"cors":void 0;if(a.l.Ac){var p=e.config,v;p=null===(v=null===p||void 0===p?void 0:p.Ha)||void 0===v?void 0:v.sessionIndex;v=Iq({sessionIndex:p});k=Object.assign(Object.assign({},
ts(h)),v);return m.s(2)}return t(m,us(e.config,h),3)}2!=m.h&&(k=m.i);f(vs(a,e,k));m.h=0})}):fg(new P("Error: Failed to build request for command.",b))}
function vs(a,b,c){var d,e,f,g,h,k,m,p,v,x,u,E,F,K,O,N,R;return w(function(W){switch(W.h){case 1:W.s(2);break;case 3:if((m=W.i)&&!m.isExpired())return W.return(Promise.resolve(m.h()));case 2:if((p=null===(d=b.config)||void 0===d?void 0:d.Oo)&&a.h.has(p)&&M("web_memoize_inflight_requests"))return W.return(a.h.get(p));if(null===(e=null===b||void 0===b?void 0:b.ba)||void 0===e?0:e.context)for(v=q([]),x=v.next();!x.done;x=v.next())u=x.value,u.Mo(b.ba.context);if(null===(f=a.i)||void 0===f?0:f.l(b.input,
b.ba))return W.return(a.i.j(b.input,b.ba));E=JSON.stringify(b.ba);b.sa=Object.assign(Object.assign({},b.sa),{headers:c});F=Object.assign({},b.sa);"POST"===b.sa.method&&(F=Object.assign(Object.assign({},F),{body:E}));(null===(g=b.config)||void 0===g?0:g.lc)&&Z(b.config.lc);K=a.J.fetch(b.input,F,b.config);p&&a.h.set(p,K);return t(W,K,4);case 4:O=W.i;p&&a.h.has(p)&&a.h.delete(p);(null===(h=b.config)||void 0===h?0:h.mc)&&Z(b.config.mc);if(O||null===(k=a.i)||void 0===k||!k.h(b.input,b.ba)){W.s(5);break}return t(W,
a.i.i(b.input,b.ba),6);case 6:O=W.i;case 5:if(O&&a.j)for(N=q(ps),x=N.next();!x.done;x=N.next())R=x.value,a.j[R]&&a.j[R].handleResponse(O,b);return W.return(O)}})}
function us(a,b){var c,d,e;return w(function(f){if(1==f.h){d=null===(c=null===a||void 0===a?void 0:a.Ha)||void 0===c?void 0:c.sessionIndex;var g=Iq({sessionIndex:d});if(!(g instanceof ag)){var h=new ag(Ma);bg(h,2,g);g=h}return t(f,g,2)}e=f.i;return f.return(Promise.resolve(Object.assign(Object.assign({},ts(b)),e)))})}
function ts(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&B("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=B("EOM_VISITOR_DATA"):B("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=B("VISITOR_DATA"));"cors"!==a&&((a=B("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=B("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=B("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),M("forward_domain_admin_state_on_embeds")&&(a=
B("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var ws=["share/get_web_player_share_panel"],xs=["feedback"],ys=["notification/modify_channel_preference"],zs=["browse/edit_playlist"],As=["subscription/subscribe"],Bs=["subscription/unsubscribe"];function Cs(){}
r(Cs,fr);Cs.prototype.j=function(){return As};
Cs.prototype.h=function(a){return a.subscribeEndpoint};
Cs.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Cs.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ds(){}
r(Ds,fr);Ds.prototype.j=function(){return Bs};
Ds.prototype.h=function(a){return a.unsubscribeEndpoint};
Ds.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Ds.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Es(){}
r(Es,fr);Es.prototype.j=function(){return xs};
Es.prototype.h=function(a){return a.feedbackEndpoint};
Es.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Es.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Fs(){}
r(Fs,fr);Fs.prototype.j=function(){return ys};
Fs.prototype.h=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
Fs.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Gs(){}
r(Gs,fr);Gs.prototype.j=function(){return zs};
Gs.prototype.h=function(a){return a.playlistEditEndpoint};
Gs.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Hs(){}
r(Hs,fr);Hs.prototype.j=function(){return ws};
Hs.prototype.h=function(a){return a.webPlayerShareEntityServiceEndpoint};
Hs.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Mq=new Kq("NETWORK_SLI_TOKEN");function Is(a){this.h=a}
Is.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.h&&(d=bc(cc(5,lc(a)))||"/UNKNOWN_PATH",c.h.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Tp(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Tp(g)}))})};
Is.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.failure(),b=b.then(function(c){Tp(new P("Error: API fetch failed",a.status,a.url,c));return Object.assign(Object.assign({},c),{errorMetadata:{status:a.status}})}));
return b};
Is[Jq]=[new Lq];var Js=new Kq("NETWORK_MANAGER_TOKEN");var Ks;function Ls(a){cn.call(this,1,arguments);this.csn=a}
r(Ls,cn);var mn=new dn("screen-created",Ls),Ms=[],Os=Ns,Ps=0;function Qs(a,b,c,d,e,f,g){function h(){Tp(new P("newScreen() parent element does not have a VE - rootVe",b))}
var k=Os();f=new dq({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,W:k};if(M("il_via_jspb")){var m=new lh;m.X(k);mh(m,f.getAsJspb());c&&c.visualElement?(f=new nh,c.clientScreenNonce&&D(f,2,c.clientScreenNonce),oh(f,c.visualElement.getAsJspb()),g&&D(f,4,kh[g]),H(m,5,f)):c&&h();d&&D(m,3,d);Jp(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?Fk("screenCreated",f,a,e):xl("screenCreated",f,e);jn(mn,new Ls(k));return k}
function Rs(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:mq(b),
W:b};d=q(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&Tp(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new ph;h.X(b);rh(h,c.getAsJspb());gb(e,function(k){k=k.getAsJspb();id(h,3,ih,k)});
"UNDEFINED_CSN"==b?Ss("visualElementAttached",h,f):Kp(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:gb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Ss("visualElementAttached",c,f):a?Fk("visualElementAttached",c,a,f):xl("visualElementAttached",c,f)}
function Ns(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Lc(b,3)}
function Ss(a,b,c){Ms.push({payloadName:a,payload:b,options:c});Ps||(Ps=nn())}
function on(a){if(Ms){for(var b=q(Ms),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.X(a.csn),c.payloadName){case "screenCreated":Jp(c.payload,c.options);break;case "visualElementAttached":Kp(c.payload,c.options);break;case "visualElementShown":Fp(c.payload,c.options);break;case "visualElementHidden":Gp(c.payload,c.options);break;case "visualElementGestured":Hp(c.payload,c.options);break;case "visualElementStateChanged":Ip(c.payload,c.options);break;default:Tp(new P("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,Fk(c.payloadName,c.payload,null,c.options);Ms.length=0}Ps=0}
;function Ts(){this.i=new Set;this.h=new Set;this.j=new Map}
Ts.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Na(Ts);function Us(){this.o=[];this.C=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function Vs(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=kq(c),h=iq(c);g&&h&&((null===(e=null===d||void 0===d?void 0:d.response)||void 0===e?0:e.trackingParams)&&Rs(a.client,g,h,[eq(d.response.trackingParams)]),(null===(f=null===d||void 0===d?void 0:d.playerResponse)||void 0===f?0:f.trackingParams)&&Rs(a.client,g,h,[eq(d.playerResponse.trackingParams)]))})}
function Ws(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=kq(d);c=c||iq(d);e&&c&&Rs(a.client,e,c,[b])}}
Us.prototype.clickCommand=function(a,b,c){a:{var d=a.clickTrackingParams;c=void 0===c?0:c;c=void 0===c?0:c;if(d){if(M("web_ignore_no_ve_clicks")&&(a=xp(atob(d.replace(/-/g,"+").replace(/_/g,"/"))),!a||0===a)){b=!1;break a}if(c=kq(c)){a=this.client;var e=eq(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:mq(c),W:c};if(M("il_via_jspb")){var g=new sh;g.X(c);e=e.getAsJspb();H(g,2,e);D(g,4,kh[f]);b&&H(g,3,void 0);"UNDEFINED_CSN"==c?Ss("visualElementGestured",g,d):Hp(g,d,a)}else f=
{csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Ss("visualElementGestured",f,d):a?Fk("visualElementGestured",f,a,d):xl("visualElementGestured",f,d);b=!0}else b=!1}else b=!1}return b};
function Xs(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Ys(a,b,c);var f=iq(c.layer);if(f){for(var g=q(a.o),h=g.next();!h.done;h=g.next())h=h.value,Ws(a,h[0],h[1]||f,c.layer);f=q(a.C);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=kq(g);var m=k[0]||iq(g);if(h&&m){g=a.client;var p=k[1];k={cttAuthInfo:mq(h),W:h};M("il_via_jspb")?(p=new uh,p.X(h),m=m.getAsJspb(),H(p,2,m),"UNDEFINED_CSN"==h?Ss("visualElementStateChanged",p,k):Ip(p,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:p},"UNDEFINED_CSN"==h?Ss("visualElementStateChanged",m,k):g?Fk("visualElementStateChanged",m,g,k):xl("visualElementStateChanged",m,k))}}}};
kq(c.layer)||a.j();if(c.tb)for(var d=q(c.tb),e=d.next();!e.done;e=d.next())Vs(a,e.value,c.layer);else Sp(Error("Delayed screen needs a data promise."))}
function Ys(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.fc?c.fc:c.layer;var e=kq(d);d=iq(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=B("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Qs(a.client,b,f,c.sb,c.cttAuthInfo,g,c.Jo)}catch(m){Vp(m,{Po:b,rootVe:d,parentVisualElement:void 0,Go:e,Lo:f,sb:c.sb});Sp(m);return}nq(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=q(Object.values(cq));for(f=b.next();!f.done;f=b.next())if(kq(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:mq(e),W:e,vb:g},M("il_via_jspb")?(h=new th,h.X(e),d=d.getAsJspb(),H(h,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"==e?Ss("visualElementHidden",h,f):Gp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Ss("visualElementHidden",d,f):b?Fk("visualElementHidden",d,b,f):xl("visualElementHidden",
d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");fs({clientScreenNonce:k});Ts.getInstance().clear();d=iq(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:mq(e),W:e},M("il_via_jspb")?(b=new th,b.X(e),f=d.getAsJspb(),H(b,2,f),D(b,4,1),"UNDEFINED_CSN"==e?Ss("visualElementShown",b,k):Fp(b,k,void 0)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?Ss("visualElementShown",b,k):xl("visualElementShown",
b,k)));a.i.delete(c.layer||0);a.j=void 0;e=q(a.u);for(k=e.next();!k.done;k=e.next())b=q(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Ws(a,k,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(m){Sp(m)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Sp(m)}}}
;function Zs(){var a,b;return w(function(c){if(1==c.h)return a=qs.h,a?t(c,ss(a),2):(Tp(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.i)return b.errorMetadata?(Sp(Error("Datasync IDs fetch responded with "+b.errorMetadata.code+": "+b.error)),c.return(void 0)):c.return(b.Ho);Tp(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var $s=y.caches,at;function bt(a){var b=a.indexOf(":");return-1===b?{Db:a}:{Db:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ct(){return w(function(a){if(void 0!==at)return a.return(at);at=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return ua(d,2),t(d,$s.open("test-only"),4);case 4:return t(d,$s.delete("test-only"),5);case 5:wa(d,3);break;case 2:if(c=xa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(at)})}
function dt(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.h)return t(k,ct(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return t(k,$s.keys(),3)}c=k.i;d=q(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=bt(f),h=g.datasyncId,!h||a.includes(h)||b.push($s.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(p){return p})}))})}
function et(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.h)return t(h,ct(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Bl("cache contains other");return t(h,$s.keys(),3)}b=h.i;c=q(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=bt(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function ft(){try{return!!self.localStorage}catch(a){return!1}}
;function gt(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function ht(a){if(ft()){var b=Object.keys(window.localStorage);b=q(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=gt(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function jt(){if(!ft())return!1;var a=Bl(),b=Object.keys(window.localStorage);b=q(b);for(var c=b.next();!c.done;c=b.next())if(c=gt(c.value),void 0!==c&&c!==a)return!0;return!1}
;function kt(){Zs().then(function(a){a&&(Lm(a),dt(a),ht(a))})}
function lt(){var a=new No;bf.N(function(){var b,c,d,e;return w(function(f){switch(f.h){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.s(2);break}b=Bl("clear");if(b.startsWith("V")){var g=[b];Lm(g);dt(g);ht(g);return f.return()}c=jt();return t(f,et(),3);case 3:return d=f.i,t(f,Mm(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.H()?kt():a.l.add("publicytnetworkstatus-online",kt,!0,void 0,void 0),f.h=0}})})}
;function mt(a){a&&(a.dataset?a.dataset[nt("loaded")]="true":a.setAttribute("data-loaded","true"))}
function ot(a,b){return a?a.dataset?a.dataset[nt(b)]:a.getAttribute("data-"+b):null}
var pt={};function nt(a){return pt[a]||(pt[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var qt=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,rt=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function st(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(qt,""),c=c.replace(rt,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else tt(a,b,c)}
function tt(a,b,c){c=void 0===c?null:c;var d=ut(a),e=document.getElementById(d),f=e&&ot(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Qj(d,b),b=""+Ra(b),vt[b]=f),g||(e=wt(a,d,function(){ot(e,"loaded")||(mt(e),Tj(d),yi(Xa(Uj,d),0))},c)))}
function wt(a,b,c,d){d=void 0===d?null:d;var e=Md("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Id(e,Qf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function xt(a){a=ut(a);var b=document.getElementById(a);b&&(Uj(a),b.parentNode.removeChild(b))}
function zt(a,b){a&&b&&(a=""+Ra(b),(a=vt[a])&&Sj(a))}
function ut(a){var b=document.createElement("a");Vb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(a)}
var vt={};var At=[],Bt=!1;function Ct(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&yq()&&"1"!=rb()){var a=function(){Bt=!0;"google_ad_status"in window?$h("DCLKSTAT",1):$h("DCLKSTAT",2)};
try{st("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}At.push(bf.N(function(){if(!(Bt||"google_ad_status"in window)){try{zt("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Bt=!0;$h("DCLKSTAT",3)}},5E3))}}
function Dt(){var a=Number(B("DCLKSTAT",0));return isNaN(a)?0:a}
;function Et(){this.state=1;this.h=null}
l=Et.prototype;
l.initialize=function(a,b,c){var d,e;if(a.program){var f=null!==(d=a.interpreterScript)&&void 0!==d?d:null,g=null!==(e=a.interpreterUrl)&&void 0!==e?e:null;if(a.interpreterSafeScript){f=a.interpreterSafeScript;Db("From proto message. b/166824318");f=f.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var h=Ab();f=h?h.createScript(f):f;f=(new Fb(f)).toString()}a.interpreterSafeUrl&&(g=a.interpreterSafeUrl,Db("From proto message. b/166824318"),g=Jb(g.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());
Ft(this,f,g,a.program,b,c)}else Tp(Error("Cannot initialize botguard without program"))};
function Ft(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,st(c,function(){window[g]?It(a,d,g,e):(a.state=3,xt(c),Tp(new P("Unable to load Botguard","from "+c)))},f)):b?(f=Md("SCRIPT"),f.textContent=b,f.nonce=Yb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?It(a,d,g,e):(a.state=4,Tp(new P("Unable to load Botguard from JS")))):Tp(new P("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.h};
l.getState=function(){return this.state};
function It(a,b,c,d){a.state=5;try{var e=new Bd({program:b,globalName:c});e.xc.then(function(){a.state=6;d&&d(b)});
Jt(a,e)}catch(f){a.state=7,f instanceof Error&&Tp(f)}}
l.invoke=function(a){a=void 0===a?{}:a;if(this.h){var b=this.h;a={rb:a};if(b.i)throw Error("Already disposed");b=b.l([a.rb,a.zc])}else b=null;return b};
l.dispose=function(){Jt(this,null);this.state=8};
function Jt(a,b){pe(a.h);a.h=b}
;var Kt=new Et;function Lt(){return Kt.isInitialized()}
function Mt(a){a=void 0===a?{}:a;return Kt.invoke(a)}
;function Nt(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Hi():d;this.l=c;this.j=d;this.i=new Ad;this.h=a;a={};c=q(this.h.entries());for(d=c.next();!d.done;a={ta:a.ta,Ca:a.Ca},d=c.next()){var e=q(d.value);d=e.next().value;e=e.next().value;a.Ca=d;a.ta=e;d=function(f){return function(){f.ta.gb();b.h[f.Ca].Ta=!0;b.h.every(function(g){return!0===g.Ta})&&b.i.resolve()}}(a);
e=Di(d,Ot(this,a.ta));this.h[a.Ca]=Object.assign(Object.assign({},a.ta),{gb:d,Oa:e})}}
function Pt(a){var b=Array.from(a.h.keys()).sort(function(d,e){return Ot(a,a.h[e])-Ot(a,a.h[d])});
b=q(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.Oa||c.Ta||(a.j.T(c.Oa),Di(c.gb,10))}
Nt.prototype.cancel=function(){for(var a=q(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Oa||b.Ta||this.j.T(b.Oa),b.Ta=!0;this.i.resolve()};
function Ot(a,b){var c;return null!==(c=b.priority)&&void 0!==c?c:a.l}
;function Qt(a){this.state=a;this.plugins=[];this.m=void 0}
Qt.prototype.install=function(){this.plugins.push.apply(this.plugins,ja(Ha.apply(0,arguments)))};
Qt.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.B===a});
if(d){this.j&&(Pt(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Rt(this,e,this.m),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Rt(a,b,c){return function(){var d=Ha.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!==(m=null!==c&&void 0!==c?c:k.priority)&&void 0!==m?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!==(m=null!==c&&void 0!==c?c:k.priority)&&void 0!==m?m:0)});
Hi();var g={};e=q(e);for(var h=e.next();!h.done;g={Da:g.Da},h=e.next())g.Da=h.value,Fi(function(k){return function(){k.Da.ka.apply(k.Da,ja(d))}}(g));
f=f.map(function(k){var m;return{gb:function(){k.ka.apply(k,ja(d))},
priority:null!==(m=null!==c&&void 0!==c?c:k.priority)&&void 0!==m?m:0}});
f.length&&(a.j=new Nt(f))}}
fa.Object.defineProperties(Qt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function St(a){Qt.call(this,void 0===a?"document_active":a);var b=this;this.m=10;this.h=new Map;this.C=[{from:"document_active",B:"document_disposed_preventable",action:this.u},{from:"document_active",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"flush_logs",action:this.o},{from:"document_disposed_preventable",B:"document_active",action:this.i},{from:"document_disposed",B:"flush_logs",action:this.o},
{from:"document_disposed",B:"document_active",action:this.i},{from:"document_disposed",B:"document_disposed",action:function(){}},
{from:"flush_logs",B:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(St,Qt);
St.prototype.u=function(a,b){var c,d;if(!this.h.get("document_disposed_preventable")&&(a(null===b||void 0===b?void 0:b.event),(null===(c=null===b||void 0===b?void 0:b.event)||void 0===c?0:c.defaultPrevented)||(null===(d=null===b||void 0===b?void 0:b.event)||void 0===d?0:d.returnValue))){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):
this.transition("document_disposed")};
St.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null===b||void 0===b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
St.prototype.o=function(a,b){a(null===b||void 0===b?void 0:b.event);this.transition("document_active")};
St.prototype.i=function(){this.h=new Map};function Tt(a){Qt.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",B:"document_visible",action:this.i},{from:"document_visibility_unknown",B:"document_hidden",action:this.h},{from:"document_visibility_unknown",B:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",B:"document_backgrounded",action:this.l},{from:"document_visible",B:"document_hidden",action:this.h},{from:"document_visible",B:"document_foregrounded",action:this.o},
{from:"document_visible",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_hidden",action:this.h},{from:"document_foregrounded",B:"document_foregrounded",action:this.o},{from:"document_hidden",B:"document_visible",action:this.i},{from:"document_hidden",B:"document_backgrounded",action:this.l},{from:"document_hidden",B:"document_hidden",action:this.h},{from:"document_backgrounded",B:"document_hidden",action:this.h},
{from:"document_backgrounded",B:"document_backgrounded",action:this.l},{from:"document_backgrounded",B:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(Tt,Qt);Tt.prototype.i=function(a,b){a(null===b||void 0===b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Tt.prototype.h=function(a,b){a(null===b||void 0===b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Tt.prototype.l=function(a,b){a(null===b||void 0===b?void 0:b.event)};
Tt.prototype.o=function(a,b){a(null===b||void 0===b?void 0:b.event)};function Ut(){this.h=new St;this.i=new Tt}
Ut.prototype.install=function(){var a=Ha.apply(0,arguments);this.h.install.apply(this.h,ja(a));this.i.install.apply(this.i,ja(a))};function Vt(){Ut.call(this);var a={};this.install((a.document_disposed={ka:this.j},a));a={};this.install((a.flush_logs={ka:this.l},a))}
var Wt;r(Vt,Ut);Vt.prototype.l=function(){xl("finalPayload",{csn:kq()})};
Vt.prototype.j=function(){Xp(Yp)};function Xt(){}
Xt.getInstance=function(){var a=A("ytglobal.storage_");a||(a=new Xt,z("ytglobal.storage_",a,void 0));return a};
Xt.prototype.estimate=function(){var a,b,c;return w(function(d){c=navigator;return(null===(a=c.storage)||void 0===a?0:a.estimate)?d.return(c.storage.estimate()):(null===(b=c.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)?d.return(Yt()):d.return()})};
function Yt(){var a=navigator;return new Promise(function(b,c){var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",Xt,void 0);function vl(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=di("ytidb_transaction_ended_event_rate_limit",.02)}
vl.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Zt(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign(Object.assign({},
b),{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Zt(a,b){Xt.getInstance().estimate().then(function(c){c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:$t(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:$t(null===c||void 0===c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function $t(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var au=window;
function bu(){var a=au.uaChPolyfill.state;if(0===a.type)xl("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Sp(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);xl("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),xl("clientHintsPolyfillDiagnostics",
b))}}
var cu=!1;function du(){var a;1===(null===(a=au.uaChPolyfill)||void 0===a?void 0:a.state.type)?cu||(au.uaChPolyfill.onReady=du,cu=!0):au.uaChPolyfill&&bu()}
;function eu(a,b,c){J.call(this);var d=this;c=c||B("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.L="*";this.l=c;this.sessionId=null;this.channel="widget";this.M=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.L=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=db(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
r(eu,J);eu.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.L)}catch(d){oi(d)}}};
eu.prototype.I=function(){window.removeEventListener("message",this.A);J.prototype.I.call(this)};function fu(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new eu(!!B("WIDGET_ID_ENFORCE")),b=this.jc.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=B("WIDGET_ID"))this.h.sessionId=a}
l=fu.prototype;l.jc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,gu(this,a)),this.j[a]=!0)):this.mb(a,b,c)};
l.mb=function(){};
function gu(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Wb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Za());this.sendMessage("onReady");eb(this.i,this.Jb,this);this.i=[]};
l.Za=function(){return null};
function hu(a,b){a.sendMessage("infoDelivery",b)}
l.Jb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Jb({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};function iu(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function ju(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function ku(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function lu(a){fu.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.uc.bind(this));this.addEventListener("onVolumeChange",this.vc.bind(this));this.addEventListener("onApiChange",this.nc.bind(this));this.addEventListener("onPlaybackQualityChange",this.qc.bind(this));this.addEventListener("onPlaybackRateChange",this.sc.bind(this));this.addEventListener("onStateChange",this.tc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.wc.bind(this))}
r(lu,fu);l=lu.prototype;
l.mb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&iu(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=ju(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=ju(e);break;case "loadPlaylist":case "cuePlaylist":e=ku(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);iu(a)&&hu(this,this.Za())}};
l.onReady=function(){var a=this.Wb.bind(this);this.h.i=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Za=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.tc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());hu(this,a)};
l.qc=function(a){hu(this,{playbackQuality:a})};
l.sc=function(a){hu(this,{playbackRate:a})};
l.nc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.vc=function(){hu(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.uc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());hu(this,a)};
l.wc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};hu(this,a)};
l.dispose=function(){fu.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function mu(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Fb,this)}
r(mu,J);l=mu.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.ma("RECEIVING"))};
l.ma=function(a,b){this.started&&!this.h()&&this.connection.ma(a,b)};
l.Fb=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=nu(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=ou(a,c))&&this.ma(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.oc.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.oc=function(a,b){this.started&&!this.h()&&this.connection.ma(a,this.Ya(a,b))};
l.Ya=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.I=function(){var a=this.connection;a.h()||sg(a.i,"command",this.Fb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.I.call(this)};function pu(a,b){mu.call(this,b);this.api=a;this.start()}
r(pu,mu);pu.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
pu.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function nu(a,b){switch(a){case "loadVideoById":return a=ju(b),[a];case "cueVideoById":return a=ju(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=ku(b),[a];case "cuePlaylist":return a=ku(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ou(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
pu.prototype.Ya=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return mu.prototype.Ya.call(this,a,b)};
pu.prototype.I=function(){mu.prototype.I.call(this);delete this.api};function qu(a){a=void 0===a?!1:a;J.call(this);this.i=new L(a);re(this,Xa(pe,this.i))}
Za(qu,J);qu.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
qu.prototype.l=function(a,b){this.h()||this.i.ja.apply(this.i,arguments)};function ru(a,b,c){qu.call(this);this.j=a;this.destination=b;this.id=c}
r(ru,qu);ru.prototype.ma=function(a,b){this.h()||this.j.ma(this.destination,this.id,a,b)};
ru.prototype.I=function(){this.destination=this.j=null;qu.prototype.I.call(this)};function su(a,b,c){J.call(this);this.destination=a;this.origin=c;this.i=vi(window,"message",this.j.bind(this));this.connection=new ru(this,a,b);re(this,Xa(pe,this.connection))}
r(su,J);su.prototype.ma=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Sf(a),this.origin))};
su.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
su.prototype.I=function(){wi(this.i);this.destination=null;J.prototype.I.call(this)};function tu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
tu.prototype.clone=function(){var a=new tu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=tb(c):a[b]=c}return a};var uu=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function vu(a){a=a||"";if(window.spf){var b=a.match(uu);spf.style.load(a,b?b[1]:"",void 0)}else wu(a)}
function wu(a){var b=xu(a),c=document.getElementById(b),d=c&&ot(c,"loaded");d||c&&!d||(c=yu(a,b,function(){ot(c,"loaded")||(mt(c),Tj(b),yi(Xa(Uj,b),0))}))}
function yu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qf(a);Wb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function xu(a){var b=Md("A");Db("This URL is never added to the DOM");Vb(b,new Lb(a,Mb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(a)}
;function zu(){J.call(this);this.i=[]}
r(zu,J);zu.prototype.I=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.ka,void 0)}J.prototype.I.call(this)};function Au(){zu.apply(this,arguments)}
r(Au,zu);function Bu(a,b,c,d){J.call(this);var e=this;this.M=b;this.webPlayerContextConfig=d;this.Va=!1;this.api={};this.Ea=this.u=null;this.S=new L;this.i={};this.fa=this.Fa=this.elementId=this.Wa=this.config=null;this.Y=!1;this.l=this.A=null;this.Ga={};this.Nb=["onReady"];this.lastError=null;this.nb=NaN;this.L={};this.Ob=new Au(this);this.oa=0;this.j=this.m=a;re(this,Xa(pe,this.S));Cu(this);Du(this);re(this,Xa(pe,this.Ob));c?this.oa=yi(function(){e.loadNewVideoConfig(c)},0):d&&(Eu(this),Fu(this))}
r(Bu,J);l=Bu.prototype;l.getId=function(){return this.M};
l.loadNewVideoConfig=function(a){if(!this.h()){this.oa&&(zi(this.oa),this.oa=0);var b=a||{};b instanceof tu||(b=new tu(b));this.config=b;this.setConfig(a);Fu(this);this.isReady()&&Gu(this)}};
function Eu(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.M,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.M:a.config.attrs.id=a.M);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){var b;this.Wa=a;this.config=Hu(a);Eu(this);this.Fa||(this.Fa=Iu(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Xd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Xd(Number(a)||a))};
function Gu(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Ju(a){var b=!0,c=Ku(a);c&&a.config&&(a=Lu(a),b=ot(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function Fu(a){if(!a.h()&&!a.Y){var b=Ju(a);if(b&&"html5"===(Ku(a)?"html5":null))a.fa="html5",a.isReady()||Mu(a);else if(Nu(a),a.fa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Mu(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=Ou(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?Hu(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Mu(a)};
a.Y=!0;b?a.A():(st(Lu(a),a.A),(b=Pu(a))&&vu(b),Qu(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Ku(a){var b=Ld(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Mu(a){var b;if(!a.h()){var c=Ku(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.Y=!1,!Ou(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||Ru(a)):a.nb=yi(function(){Mu(a)},50)}}
function Ru(a){Cu(a);a.Va=!0;var b=Ku(a);if(b){a.u=Su(a,b,"addEventListener");a.Ea=Su(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Su(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);Gu(a);a.Fa&&a.Fa(a.api);a.S.ja("onReady",a.api)}
function Su(a,b,c){var d=b[c];return function(){var e=Ha.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Tp(f))}}}
function Cu(a){a.Va=!1;if(a.Ea)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Ea(b,a.i[b]);for(var c in a.L)a.L.hasOwnProperty(c)&&zi(Number(c));a.L={};a.u=null;a.Ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Va};
function Du(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Tj("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Tj("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Tj("a11y-announce",b)})}
l.addEventListener=function(a,b){var c=this,d=Iu(this,b);d&&(0<=db(this.Nb,a)||this.i[a]||(b=Tu(this,a),this.u&&this.u(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&yi(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=Iu(this,b))&&sg(this.S,a,b)};
function Iu(a,b){var c=b;if("string"===typeof b){if(a.Ga[b])return a.Ga[b];c=function(){var d=Ha.apply(0,arguments),e=A(b);if(e)try{e.apply(y,d)}catch(f){Sp(f)}};
a.Ga[b]=c}return c?c:null}
function Tu(a,b){var c="ytPlayer"+b+a.M;a.i[b]=c;y[c]=function(d){var e=yi(function(){if(!a.h()){a.S.ja(b,null!==d&&void 0!==d?d:void 0);var f=a.L,g=String(e);g in f&&delete f[g]}},0);
qb(a.L,String(e))};
return c}
l.getPlayerType=function(){return this.fa||(Ku(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Nu(a){a.cancel();Cu(a);a.fa=null;a.config&&(a.config.loaded=!1);var b=Ku(a);b&&(Ju(a)||!Qu(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.A&&zt(Lu(this),this.A);zi(this.nb);this.Y=!1};
l.I=function(){Nu(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Sp(b)}this.Ga=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.Wa=this.config=this.api=null;delete this.m;delete this.j;J.prototype.I.call(this)};
function Qu(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Lu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Pu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ou(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===mj(d||"","&")[b]}
function Hu(a){for(var b={},c=q(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
;var Uu={},Vu="player_uid_"+(1E9*Math.random()>>>0);function Wu(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Ld(d):d;var e=Vu+"_"+Ra(d),f=Uu[e];if(f&&c)return Xu(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Bu(d,e,a,b);Uu[e]=f;Tj("player-added",f.api);re(f,function(){delete Uu[f.getId()]});
return f.api}
function Xu(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Yu=null,Zu=null,$u=null;function av(){var a=Yu.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function bv(a,b,c){a="ST-"+$b(a).toString(36);b=b?gc(b):"";c=c||5;yq()&&Kk(a,b,c)}
;function cv(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=B("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=B("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=dc(window.location.href);g&&f.push(g);g=dc(d);if(0<=db(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Vb(f,d),d=f.href),d&&(d=ec(d),f=d.indexOf("#"),d=0>f?d:d.substr(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:kq()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
bv(d,b,h)}else bv(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=hc(a,k)+m;var v=void 0===v?Wd:v;a:{v=void 0===v?Wd:v;for(k=0;k<v.length;++k)if(m=v[k],m instanceof Ud&&m.isValid(a)){v=new Fd(a,Dd);break a}v=void 0}c.href=Hd(v||Gd)}return!0}
;z("yt.setConfig",$h,void 0);z("yt.config.set",$h,void 0);z("yt.setMsg",pq,void 0);z("yt.msgs.set",pq,void 0);z("yt.logging.errors.log",Sp,void 0);
z("writeEmbed",function(){var a=B("PLAYER_CONFIG",void 0);if(!a){var b=B("PLAYER_VARS",void 0);b&&(a={args:b})}Gq(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=B("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=rj(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));ds();
if((c=B("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=rj(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Yu=Wu(a,c,!1)}else Yu=Wu(a);Yu.addEventListener("onVideoDataChange",av);a=B("POST_MESSAGE_ID","player");B("ENABLE_JS_API")?$u=new lu(Yu):B("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Zu=new su(window.parent,
a,b),$u=new pu(Yu,Zu.connection));Ct();M("ytidb_create_logger_embed_killswitch")||ul();M("flush_gel_on_teardown")&&(a={},Wt||(Wt=new Vt),Wt.install((a.flush_logs={ka:function(){mk()}},a)));
M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?Uo():bp());M("embeds_enable_ua_ch_polyfill")&&du();M("ytidb_clear_embedded_player")&&bf.N(function(){if(!Ks){Qq||(Qq=new Nq);var e=Qq;if(M("web_inject_fetch_manager")){var f={ic:Js,Lb:Is};e.providers.set(f.ic,f)}f={qb:{feedbackEndpoint:ar(Es),modifyChannelNotificationPreferenceEndpoint:ar(Fs),playlistEditEndpoint:ar(Gs),subscribeEndpoint:ar(Cs),unsubscribeEndpoint:ar(Ds),webPlayerShareEntityServiceEndpoint:ar(Hs)}};var g=M("web_enable_client_location_service")?
Xq.getInstance():void 0,h={};g&&(h.client_location=g);if(void 0===k){Hq.h||(Hq.h=new Hq);var k=Hq.h}if(void 0===m)if(M("web_inject_fetch_manager"))var m=e.resolve(Js);else Is.h||(Is.h=new Is),m=Is.h;rs(f,m,k,h);Ks=qs.h}lt()})},void 0);
var dv=mi(function(){is();var a=Ok.getInstance(),b=Rk(119),c=1<window.devicePixelRatio;if(document.body&&Af(document.body,"exp-invert-logo"))if(c&&!Af(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Af(d,"inverted-hdpi")){var e=yf(d);zf(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Af(document.body,"inverted-hdpi")&&Bf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Sk(b)||0;d=c?d|67108864:d&-67108865;0==d?delete Nk[b]:(c=d.toString(16),
Nk[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Nk)d.push(f+"="+encodeURIComponent(String(Nk[f])));Kk(b,d.join("&"),63072E3,a.i,c)}Us.h||(Us.h=new Us);a=Us.h;f=16623;var g=void 0===g?{}:g;Object.values(qq).includes(f)||(Tp(new P("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.C=[];g.tb?Xs(a,f,g):Ys(a,f,g)}),ev=mi(function(){Yu&&Yu.sendAbandonmentPing&&Yu.sendAbandonmentPing();
B("PL_ATT")&&Kt.dispose();for(var a=bf,b=0,c=At.length;b<c;b++)a.T(At[b]);At.length=0;xt("//static.doubleclick.net/instream/ad_status.js");Bt=!1;$h("DCLKSTAT",0);qe($u,Zu);Yu&&(Yu.removeEventListener("onVideoDataChange",av),Yu.destroy())});
window.addEventListener?(window.addEventListener("load",dv),M("embeds_web_enable_replace_unload_w_pagehide")?window.addEventListener("pagehide",ev):window.addEventListener("unload",ev)):window.attachEvent&&(window.attachEvent("onload",dv),window.attachEvent("onunload",ev));Ya("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Lt);Ya("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||Mt);
Ya("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||Dt);Ya("yt.player.exports.navigate",A("yt.player.exports.navigate")||cv);Ya("yt.util.activity.init",A("yt.util.activity.init")||dj);Ya("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||gj);Ya("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||ej);}).call(this);

var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){var j=!0,n=null,o=!1,p=this;function q(){for(var a=["yt","pubsub","instance_"],c=p,b;b=a.shift();)if(c[b]!=n)c=c[b];else return n;return c}
function r(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c}function s(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function aa(a,c,b){return a.call.apply(a.bind,arguments)}function ba(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}}
function t(a,c,b){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return t.apply(n,arguments)}var ca=Date.now||function(){return+new Date};function u(a,c){var b=a.split("."),d=p;!(b[0]in d)&&d.execScript&&d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&void 0!==c?d[e]=c:d=d[e]?d[e]:d[e]={}}
Function.prototype.bind=Function.prototype.bind||function(a,c){if(1<arguments.length){var b=Array.prototype.slice.call(arguments,1);b.unshift(this,a);return t.apply(n,b)}return t(this,a)};var v=Array.prototype,w=v.indexOf?function(a,c,b){return v.indexOf.call(a,c,b)}:function(a,c,b){b=b==n?0:0>b?Math.max(0,a.length+b):b;if(s(a))return!s(c)||1!=c.length?-1:a.indexOf(c,b);for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},y=v.forEach?function(a,c,b){v.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e=s(a)?a.split(""):a,f=0;f<d;f++)f in e&&c.call(b,e[f],f,a)},da=v.filter?function(a,c,b){return v.filter.call(a,c,b)}:function(a,c,b){for(var d=a.length,e=[],f=0,g=s(a)?a.split(""):
a,h=0;h<d;h++)if(h in g){var k=g[h];c.call(b,k,h,a)&&(e[f++]=k)}return e};function ea(a,c){for(var b=1;b<arguments.length;b++){var d=arguments[b],e,f;if(!(f="array"==r(d)))e=d,f=r(e),f=(e="array"==f||"object"==f&&"number"==typeof e.length)&&d.hasOwnProperty("callee");if(f)a.push.apply(a,d);else if(e){f=a.length;for(var g=d.length,h=0;h<g;h++)a[f+h]=d[h]}else a.push(d)}}function z(a,c,b){return 2>=arguments.length?v.slice.call(a,c):v.slice.call(a,c,b)};var A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fa(a,c){for(var b,d,e=1;e<arguments.length;e++){d=arguments[e];for(b in d)a[b]=d[b];for(var f=0;f<A.length;f++)b=A[f],Object.prototype.hasOwnProperty.call(d,b)&&(a[b]=d[b])}};var B,C,E,F;function G(){return p.navigator?p.navigator.userAgent:n}F=E=C=B=o;var H;if(H=G()){var ga=p.navigator;B=0==H.indexOf("Opera");C=!B&&-1!=H.indexOf("MSIE");E=!B&&-1!=H.indexOf("WebKit");F=!B&&!E&&"Gecko"==ga.product}var I=C,J=F,ha=E,K;
a:{var L="",M;if(B&&p.opera)var N=p.opera.version,L="function"==typeof N?N():N;else if(J?M=/rv\:([^\);]+)(\)|;)/:I?M=/MSIE\s+([^\);]+)(\)|;)/:ha&&(M=/WebKit\/(\S+)/),M)var ia=M.exec(G()),L=ia?ia[1]:"";if(I){var O,ja=p.document;O=ja?ja.documentMode:void 0;if(O>parseFloat(L)){K=""+O;break a}}K=L}var ka=K,la={};
function P(a){var c;if(!(c=la[a])){c=0;for(var b=(""+ka).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(b.length,d.length),f=0;0==c&&f<e;f++){var g=b[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var i=k.exec(g)||["","",""],l=m.exec(h)||["","",""];if(0==i[0].length&&0==l[0].length)break;c=((0==i[1].length?0:parseInt(i[1],10))<(0==l[1].length?0:parseInt(l[1],10))?-1:(0==i[1].length?0:parseInt(i[1],
10))>(0==l[1].length?0:parseInt(l[1],10))?1:0)||((0==i[2].length)<(0==l[2].length)?-1:(0==i[2].length)>(0==l[2].length)?1:0)||(i[2]<l[2]?-1:i[2]>l[2]?1:0)}while(0==c)}c=la[a]=0<=c}return c}var ma={};function na(){return ma[9]||(ma[9]=I&&!!document.documentMode&&9<=document.documentMode)};!I||na();!J&&!I||I&&na()||J&&P("1.9.1");I&&P("9");function oa(a,c){var b;b=a.className;b=s(b)&&b.match(/\S+/g)||[];var d=z(arguments,1);b=da(b,function(a){return!(0<=w(d,a))});a.className=b.join(" ")};function pa(a,c){var b=c||document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):b.getElementsByClassName?b.getElementsByClassName(a):qa(a,c)}
function qa(a,c){var b,d,e,f;b=document;b=c||b;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var g=b.getElementsByClassName(a);return g}g=b.getElementsByTagName("*");if(a){f={};for(d=e=0;b=g[d];d++){var h=b.className;"function"==typeof h.split&&0<=w(h.split(/\s+/),a)&&(f[e++]=b)}f.length=e;return f}return g};var Q={AED:[2,"dh","\u062f.\u0625.","DH"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[0,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[2,"K\u010d","K\u010d"],DKK:[18,"kr","kr"],DOP:[2,"$","RD$"],EGP:[2,"\u00a3","LE"],EUR:[18,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],ILS:[2,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],
KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],MNT:[0,"\u20ae","MN\u20ae"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[18,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","Php"],PKR:[0,"Rs","PKRs."],RUB:[2,"Rup","Rup"],SAR:[2,"Rial","Rial"],SEK:[2,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"TL","YTL"],TWD:[2,"NT$","NT$"],USD:[2,"$","US$"],UYU:[2,"$","UY$"],VND:[0,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var ra={F:".",G:",",C:"%",p:"0",J:"+",I:"-",H:"E",D:"\u2030",z:"\u221e",A:"NaN",t:"#,##0.###",w:"#E0",v:"#,##0%",s:"\u00a4#,##0.00;(\u00a4#,##0.00)",u:"USD"},R=ra,R=ra;function sa(a,c,b){this.b=c||R.u;this.r=b||0;this.e=40;this.a=1;this.k=3;this.f=this.c=0;this.n=o;this.m=this.l="";this.g="-";this.h="";this.d=1;this.j=3;this.i=this.o=o;if("number"==typeof a)switch(a){case 1:S(this,R.t);break;case 2:S(this,R.w);break;case 3:S(this,R.v);break;case 4:a=R.s;c=["0"];b=Q[this.b][0]&7;if(0<b){c.push(".");for(var d=0;d<b;d++)c.push("0")}a=a.replace(/0.00/g,c.join(""));S(this,a);break;default:throw Error("Unsupported pattern type.");}else S(this,a)}
function S(a,c){c.replace(/ /g,"\u00a0");var b=[0];a.l=T(a,c,b);for(var d=b[0],e=-1,f=0,g=0,h=0,k=-1,m=c.length,i=j;b[0]<m&&i;b[0]++)switch(c.charAt(b[0])){case "#":0<g?h++:f++;0<=k&&0>e&&k++;break;case "0":if(0<h)throw Error('Unexpected "0" in pattern "'+c+'"');g++;0<=k&&0>e&&k++;break;case ",":k=0;break;case ".":if(0<=e)throw Error('Multiple decimal separators in pattern "'+c+'"');e=f+g+h;break;case "E":if(a.i)throw Error('Multiple exponential symbols in pattern "'+c+'"');a.i=j;a.f=0;b[0]+1<m&&
"+"==c.charAt(b[0]+1)&&(b[0]++,a.n=j);for(;b[0]+1<m&&"0"==c.charAt(b[0]+1);)b[0]++,a.f++;if(1>f+g||1>a.f)throw Error('Malformed exponential pattern "'+c+'"');i=o;break;default:b[0]--,i=o}0==g&&(0<f&&0<=e)&&(g=e,0==g&&g++,h=f-g,f=g-1,g=1);if(0>e&&0<h||0<=e&&(e<f||e>f+g)||0==k)throw Error('Malformed pattern "'+c+'"');h=f+g+h;a.k=0<=e?h-e:0;0<=e&&(a.c=f+g-e,0>a.c&&(a.c=0));a.a=(0<=e?e:h)-f;a.i&&(a.e=f+a.a,0==a.k&&0==a.a&&(a.a=1));a.j=Math.max(0,k);a.o=0==e||e==h;d=b[0]-d;a.m=T(a,c,b);b[0]<c.length&&
";"==c.charAt(b[0])?(b[0]++,a.g=T(a,c,b),b[0]+=d,a.h=T(a,c,b)):(a.g=a.l+a.g,a.h+=a.m)}
sa.prototype.format=function(a){if(isNaN(a))return R.A;var c=[],b=0>a||0==a&&0>1/a;c.push(b?this.g:this.l);if(isFinite(a))if(a=a*(b?-1:1)*this.d,this.i)if(0==a)U(this,a,this.a,c),ta(this,0,c);else{var d=Math.floor(Math.log(a)/Math.log(10)),a=a/Math.pow(10,d),e=this.a;if(1<this.e&&this.e>this.a){for(;0!=d%this.e;)a*=10,d--;e=1}else 1>this.a?(d++,a/=10):(d-=this.a-1,a*=Math.pow(10,this.a-1));U(this,a,e,c);ta(this,d,c)}else U(this,a,this.a,c);else c.push(R.z);c.push(b?this.h:this.m);return c.join("")};
function U(a,c,b,d){var e=Math.pow(10,a.k),f=Math.round(c*e),g;isFinite(f)?(c=Math.floor(f/e),g=Math.floor(f-c*e)):g=0;for(var h=0<a.c||0<g,k="",f=c;1E20<f;)k="0"+k,f=Math.round(f/10);var k=f+k,m=R.F,i=R.G,f=R.p.charCodeAt(0),l=k.length;if(0<c||0<b){for(c=l;c<b;c++)d.push(String.fromCharCode(f));for(c=0;c<l;c++)d.push(String.fromCharCode(f+1*k.charAt(c))),1<l-c&&(0<a.j&&1==(l-c)%a.j)&&d.push(i)}else h||d.push(String.fromCharCode(f));(a.o||h)&&d.push(m);b=""+(g+e);for(e=b.length;"0"==b.charAt(e-1)&&
e>a.c+1;)e--;for(c=1;c<e;c++)d.push(String.fromCharCode(f+1*b.charAt(c)))}function ta(a,c,b){b.push(R.H);0>c?(c=-c,b.push(R.I)):a.n&&b.push(R.J);for(var c=""+c,d=R.p,e=c.length;e<a.f;e++)b.push(d);b.push(c)}
function T(a,c,b){for(var d="",e=o,f=c.length;b[0]<f;b[0]++){var g=c.charAt(b[0]);if("'"==g)b[0]+1<f&&"'"==c.charAt(b[0]+1)?(b[0]++,d+="'"):e=!e;else if(e)d+=g;else switch(g){case "#":case "0":case ",":case ".":case ";":return d;case "\u00a4":if(b[0]+1<f&&"\u00a4"==c.charAt(b[0]+1))b[0]++,d+=a.b;else switch(a.r){case 0:d+=Q[a.b][1];break;case 2:var g=a.b,h=Q[g],d=d+(g==h[1]?g:g+" "+h[1]);break;case 1:d+=Q[a.b][2]}break;case "%":if(1!=a.d)throw Error("Too many percent/permill");a.d=100;d+=R.C;break;
case "\u2030":if(1!=a.d)throw Error("Too many percent/permill");a.d=1E3;d+=R.D;break;default:d+=g}}return d};var ua={};function V(){this.a=[];this.b={}}function va(){}function wa(){}wa.prototype=va.prototype;V.a=va.prototype;V.prototype=new wa;V.prototype.f=1;V.prototype.d=0;V.prototype.h=function(a,c,b){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.f;this.a[e]=a;this.a[e+1]=c;this.a[e+2]=b;this.f=e+3;d.push(e);return e};
V.prototype.e=function(a){if(0!=this.d)return this.c||(this.c=[]),this.c.push(a),o;var c=this.a[a];if(c){var b=this.b[c];if(b){var d=w(b,a);0<=d&&v.splice.call(b,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}return!!c};V.prototype.g=function(a,c){var b=this.b[a];if(b){this.d++;for(var d=z(arguments,1),e=0,f=b.length;e<f;e++){var g=b[e];this.a[g+1].apply(this.a[g+2],d)}this.d--;if(this.c&&0==this.d)for(;b=this.c.pop();)this.e(b);return 0!=e}return o};
V.prototype.clear=function(a){if(a){var c=this.b[a];c&&(y(c,this.e,this),delete this.b[a])}else this.a.length=0,this.b={}};u("yt.config_",window.yt&&window.yt.config_||{});u("yt.tokens_",window.yt&&window.yt.tokens_||{});u("yt.globals_",window.yt&&window.yt.globals_||{});u("yt.msgs_",window.yt&&window.yt.msgs_||{});var xa=window.yt&&window.yt.timeouts_||[];u("yt.timeouts_",xa);var ya=window.yt&&window.yt.intervals_||[];u("yt.intervals_",ya);eval("/*@cc_on!@*/false");var za=q()||new V;V.prototype.subscribe=V.prototype.h;V.prototype.unsubscribeByKey=V.prototype.e;V.prototype.publish=V.prototype.g;V.prototype.clear=V.prototype.clear;u("yt.pubsub.instance_",za);function Aa(a,c){var b=q();b&&b.publish.apply(b,arguments)};function Ba(a){y(arguments,function(a){if((a=s(a)?document.getElementById(a):a)&&a.style)a.style.display="",oa(a,"hid")})};function Ca(a){return eval("("+a+")")};function Da(a,c,b){if("array"==r(c))for(var d=0;d<c.length;d++)Da(a,""+c[d],b);else c!=n&&b.push("&",a,""===c?"":"=",encodeURIComponent(""+c))}function Ea(a,c){for(var b in c)Da(b,c[b],a);return a};function W(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var a=a.split("&"),c={},b=0,d=a.length;b<d;b++){var e=a[b].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in c?"array"==r(c[f])?ea(c[f],e):c[f]=[c[f],e]:c[f]=e}}return c}
function Fa(a,c){var b=Ea([a],c);if(b[1]){var d=b[0],e=d.indexOf("#");0<=e&&(b.push(d.substr(e)),b[0]=d=d.substr(0,e));e=d.indexOf("?");0>e?b[1]="?":e==d.length-1&&(b[1]=void 0)}return b.join("")};var X=n;"undefined"!=typeof XMLHttpRequest?X=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(X=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Ga(a){switch(a&&"status"in a?a.status:-1){case 0:case 200:case 204:case 304:return j;default:return o}};function Ha(a,c,b,d,e){var f=X&&X();if("open"in f){f.onreadystatechange=function(){4==(f&&"readyState"in f?f.readyState:0)&&c&&c(f)};b=(b||"GET").toUpperCase();d=d||"";f.open(b,a,j);a="POST"==b;if(e)for(var g in e)f.setRequestHeader(g,e[g]),"content-type"==g.toLowerCase()&&(a=o);a&&f.setRequestHeader("Content-Type","application/x-www-form-urlencoded");f.send(d);return f}}
function Ia(a,c){var b=c.onComplete||n,d=c.onException||n,e=c.onError||n,f=c.update||n,g=c.json||o;Ha(a,function(a){if(Ga(a)){var c=a.responseXML,m=c?Ja(c):n,c=!(!c||!m),i,l;if(c&&(i=Y(m,"return_code"),l=Y(m,"html_content"),0==i)){f&&l&&((s(f)?document.getElementById(f):f).innerHTML=l);var x=Y(m,"js_content");if(x){var D=document.createElement("script");D.text=x;document.getElementsByTagName("head")[0].appendChild(D)}}b&&(c?(c=Y(m,"redirect_on_success"),i&&c?window.location=c:((m=Y(m,0==i?"success_message":
"error_message"))&&alert(m),a=g?eval("("+l+")"):a,0==i?b(a):d&&d(a))):a.responseText&&b(a))}else e&&e(a)},c.method||"POST",c.postBody||n,c.headers||n)}function Ja(a){return!a?n:(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:n}function Y(a,c){if(!a)return n;var b=a.getElementsByTagName(c);return b&&0<b.length?Ka(b[0]):n}function Ka(a){var c="";y(a.childNodes,function(a){c+=a.nodeValue});return c};function Z(a,c,b,d,e){this.f=a;this.d=c;this.B=b;this.b=d||n;this.e=e||o}Z.prototype.a=n;Z.prototype.c=function(){var a=n;this.b&&(a=["session_token",this.b].join("="));Ia(this.d(),{method:this.b?"POST":"GET",postBody:a,json:this.e,onComplete:t(function(a){this.B(a)},this)})};function $(a,c){this.i=c;this.c=new sa(1);var b=this.a=a,d=b||document,e=n,b=this.b=(e=d.querySelectorAll&&d.querySelector?d.querySelector(".concurrent-viewers-number"):pa("concurrent-viewers-number",b)[0])||n;this.h=b.dataset?b.dataset[ua["video-id"]||(ua["video-id"]="video-id".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))]:b.getAttribute("data-video-id");this.f="/live_stats?v="+this.h;b=this.e=new Z(this.i,t(this.d,this),t(this.g,this),n,o);window.clearInterval(b.a);b.a=n;b.c();b.a==
n&&(b.a=window.setInterval(t(b.c,b),b.f))}
$.prototype.g=function(a){if(a&&a.responseText){var c=parseInt(a.responseText,10);if(c){a=this.b;c=this.c.format(c);if("textContent"in a)a.textContent=c;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=c}else{for(var b;b=a.firstChild;)a.removeChild(b);a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(c))}Ba(this.a);a=this.a.style;a.position="relative";I&&!P("8")?(a.zoom="1",a.display="inline"):a.display=
J?P("1.9a")?"inline-block":"-moz-inline-box":"inline-block";Aa("concurrent-viewers-updated")}}};$.prototype.d=function(){return this.f+"&t="+ca()};u("yt.www.livestreaming.ConcurrentViewers",function(a){var c=pa("concurrent-viewers");c&&y(c,function(b){new $(b,a)})});u("yt.www.livestreaming.ConcurrentViewers.UPDATE_TOPIC","concurrent-viewers-updated");
u("yt.www.livestreaming.watchpage.init",function(a,c,b,d){if(!/^[\s\xa0]*$/.test(d)){var e=W(window.location.href);e.newstate&&e.newstate!=d||(b=window.setInterval(function(){var b={method:"GET",format:"XML",q:function(a,b){var c=Ca(b.html_content).event_hash;c&&!/^[\s\xa0]*$/.test(c)&&c!=d&&(window.location=Fa(window.location.href,{newstate:c})+"")},O:{action_get_event_state:1,user_id:a,video_id:c}},e="/livestreaming_ajax",h=b.format||"JSON";b.P&&(e=document.location.protocol+"//"+document.location.hostname+
e);var k=b.O;if(k){var m=e.split("?",2),e=m[0],m=W(m[1]||""),i;for(i in k)m[i]=k[i];e=Fa(e,m)}i=b.Q||"";if(k=b.R)i=W(i),fa(i,k),k=Ea([],i),k[0]="",i=k.join("");var l=o,x,D=Ha(e,function(a){if(!l){l=j;x&&window.clearTimeout(x);var c=Ga(a),d=n;if(c||400<=a.status&&500>a.status){var e=n;switch(h){case "JSON":var d=a.responseText,g=a.getResponseHeader("Content-Type")||"";d&&0<=g.indexOf("json")&&(e=Ca(d));break;case "XML":if(d=(d=a.responseXML)?Ja(d):n)e={},y(d.getElementsByTagName("*"),function(a){e[a.tagName]=
Ka(a)})}d=e}if(c)a:{switch(h){case "XML":c=0==parseInt(d&&d.return_code,10);break a;case "RAW":c=j;break a}c=!!d}d=d||{};g=b.K||p;c?b.q&&b.q.call(g,a,d):b.L&&b.L.call(g,a,d);b.M&&b.M.call(g,a,d)}},b.method,i,b.headers);b.N&&0<b.timeout&&(e=window.setTimeout(function(){l||(l=j,D.abort(),window.clearTimeout(x),b.N.call(b.K||p,D))},b.timeout),xa.push(e),x=e)},b),ya.push(b))}});})();


}
/*
     FILE ARCHIVED ON 03:15:05 Jul 10, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:01:42 Oct 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.595
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.018
  esindex: 0.01
  cdx.remote: 6.353
  LoadShardBlock: 115.659 (6)
  PetaboxLoader3.datanode: 170.043 (7)
  load_resource: 176.141
  PetaboxLoader3.resolve: 90.863
*/
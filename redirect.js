!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4059)}({13:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},186:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},188:function(t,e,r){"use strict";var M=r(277),R=r(278);function q(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=s,e.resolve=function(t,e){return s(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?s(t,!1,!0).resolveObject(e):e},e.format=function(t){R.isString(t)&&(t=s(t));return t instanceof q?t.format():q.prototype.format.call(t)},e.Url=q;var E=/^([a-z0-9.+-]+:)/i,n=/:[0-9]*$/,N=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,o=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),F=["'"].concat(o),T=["%","/","?",";","#"].concat(F),L=["/","?","#"],$=/^[+a-z0-9A-Z_-]{0,63}$/,z=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,H={javascript:!0,"javascript:":!0},K={javascript:!0,"javascript:":!0},V={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Z=r(232);function s(t,e,r){if(t&&R.isObject(t)&&t instanceof q)return t;var n=new q;return n.parse(t,e,r),n}q.prototype.parse=function(t,e,r){if(!R.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),o=-1!==n&&n<t.indexOf("#")?"?":"#",s=t.split(o);s[0]=s[0].replace(/\\/g,"/");var a=t=s.join(o);if(a=a.trim(),!r&&1===t.split("#").length){var i=N.exec(a);if(i)return this.path=a,this.href=a,this.pathname=i[1],i[2]?(this.search=i[2],this.query=e?Z.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var h=E.exec(a);if(h){var u=(h=h[0]).toLowerCase();this.protocol=u,a=a.substr(h.length)}if(r||h||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var c="//"===a.substr(0,2);!c||h&&K[h]||(a=a.substr(2),this.slashes=!0)}if(!K[h]&&(c||h&&!V[h])){for(var l,f,p=-1,d=0;d<L.length;d++){-1!==(m=a.indexOf(L[d]))&&(-1===p||m<p)&&(p=m)}-1!==(f=-1===p?a.lastIndexOf("@"):a.lastIndexOf("@",p))&&(l=a.slice(0,f),a=a.slice(f+1),this.auth=decodeURIComponent(l)),p=-1;for(d=0;d<T.length;d++){var m;-1!==(m=a.indexOf(T[d]))&&(-1===p||m<p)&&(p=m)}-1===p&&(p=a.length),this.host=a.slice(0,p),a=a.slice(p),this.parseHost(),this.hostname=this.hostname||"";var v="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!v)for(var y=this.hostname.split(/\./),g=(d=0,y.length);d<g;d++){var b=y[d];if(b&&!b.match($)){for(var w="",j=0,O=b.length;j<O;j++)127<b.charCodeAt(j)?w+="x":w+=b[j];if(!w.match($)){var x=y.slice(0,d),C=y.slice(d+1),A=b.match(z);A&&(x.push(A[1]),C.unshift(A[2])),C.length&&(a="/"+C.join(".")+a),this.hostname=x.join(".");break}}}255<this.hostname.length?this.hostname="":this.hostname=this.hostname.toLowerCase(),v||(this.hostname=M.toASCII(this.hostname));var I=this.port?":"+this.port:"",q=this.hostname||"";this.host=q+I,this.href+=this.host,v&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!H[u])for(d=0,g=F.length;d<g;d++){var U=F[d];if(-1!==a.indexOf(U)){var S=encodeURIComponent(U);S===U&&(S=escape(U)),a=a.split(U).join(S)}}var _=a.indexOf("#");-1!==_&&(this.hash=a.substr(_),a=a.slice(0,_));var k=a.indexOf("?");if(-1!==k?(this.search=a.substr(k),this.query=a.substr(k+1),e&&(this.query=Z.parse(this.query)),a=a.slice(0,k)):e&&(this.search="",this.query={}),a&&(this.pathname=a),V[u]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){I=this.pathname||"";var P=this.search||"";this.path=I+P}return this.href=this.format(),this},q.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,s="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&R.isObject(this.query)&&Object.keys(this.query).length&&(s=Z.stringify(this.query));var a=this.search||s&&"?"+s||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||V[e])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),e+o+(r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}))+(a=a.replace("#","%23"))+n},q.prototype.resolve=function(t){return this.resolveObject(s(t,!1,!0)).format()},q.prototype.resolveObject=function(t){if(R.isString(t)){var e=new q;e.parse(t,!1,!0),t=e}for(var r=new q,n=Object.keys(this),o=0;o<n.length;o++){var s=n[o];r[s]=this[s]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var a=Object.keys(t),i=0;i<a.length;i++){var h=a[i];"protocol"!==h&&(r[h]=t[h])}return V[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!V[t.protocol]){for(var u=Object.keys(t),c=0;c<u.length;c++){var l=u[c];r[l]=t[l]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||K[t.protocol])r.pathname=t.pathname;else{for(var f=(t.pathname||"").split("/");f.length&&!(t.host=f.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),r.pathname=f.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var p=r.pathname||"",d=r.search||"";r.path=p+d}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var m=r.pathname&&"/"===r.pathname.charAt(0),v=t.host||t.pathname&&"/"===t.pathname.charAt(0),y=v||m||r.host&&t.pathname,g=y,b=r.pathname&&r.pathname.split("/")||[],w=(f=t.pathname&&t.pathname.split("/")||[],r.protocol&&!V[r.protocol]);if(w&&(r.hostname="",r.port=null,r.host&&(""===b[0]?b[0]=r.host:b.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===f[0]?f[0]=t.host:f.unshift(t.host)),t.host=null),y=y&&(""===f[0]||""===b[0])),v)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,b=f;else if(f.length)b||(b=[]),b.pop(),b=b.concat(f),r.search=t.search,r.query=t.query;else if(!R.isNullOrUndefined(t.search)){if(w)r.hostname=r.host=b.shift(),(A=!!(r.host&&0<r.host.indexOf("@"))&&r.host.split("@"))&&(r.auth=A.shift(),r.host=r.hostname=A.shift());return r.search=t.search,r.query=t.query,R.isNull(r.pathname)&&R.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!b.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var j=b.slice(-1)[0],O=(r.host||t.host||1<b.length)&&("."===j||".."===j)||""===j,x=0,C=b.length;0<=C;C--)"."===(j=b[C])?b.splice(C,1):".."===j?(b.splice(C,1),x++):x&&(b.splice(C,1),x--);if(!y&&!g)for(;x--;x)b.unshift("..");!y||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),O&&"/"!==b.join("/").substr(-1)&&b.push("");var A,I=""===b[0]||b[0]&&"/"===b[0].charAt(0);w&&(r.hostname=r.host=I?"":b.length?b.shift():"",(A=!!(r.host&&0<r.host.indexOf("@"))&&r.host.split("@"))&&(r.auth=A.shift(),r.host=r.hostname=A.shift()));return(y=y||r.host&&b.length)&&!I&&b.unshift(""),b.length?r.pathname=b.join("/"):(r.pathname=null,r.path=null),R.isNull(r.pathname)&&R.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},q.prototype.parseHost=function(){var t=this.host,e=n.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},232:function(t,e,r){"use strict";e.decode=e.parse=r(279),e.encode=e.stringify=r(280)},277:function(t,k,P){(function(d,m){var v;!function(t){k&&k.nodeType,d&&d.nodeType;var e="object"==typeof m&&m;e.global!==e&&e.window!==e&&e.self;var r,y=2147483647,g=36,b=1,w=26,o=38,s=700,j=72,O=128,x="-",n=/^xn--/,a=/[^\x20-\x7E]/,i=/[\x2E\u3002\uFF0E\uFF61]/g,h={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},u=g-b,C=Math.floor,A=String.fromCharCode;function I(t){throw new RangeError(h[t])}function c(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function l(t,e){var r=t.split("@"),n="";return 1<r.length&&(n=r[0]+"@",t=r[1]),n+c((t=t.replace(i,".")).split("."),e).join(".")}function q(t){for(var e,r,n=[],o=0,s=t.length;o<s;)55296<=(e=t.charCodeAt(o++))&&e<=56319&&o<s?56320==(64512&(r=t.charCodeAt(o++)))?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--):n.push(e);return n}function U(t){return c(t,function(t){var e="";return 65535<t&&(e+=A((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=A(t)}).join("")}function S(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function _(t,e,r){var n=0;for(t=r?C(t/s):t>>1,t+=C(t/e);u*w>>1<t;n+=g)t=C(t/u);return C(n+(u+1)*t/(t+o))}function f(t){var e,r,n,o,s,a,i,h,u,c,l,f=[],p=t.length,d=0,m=O,v=j;for((r=t.lastIndexOf(x))<0&&(r=0),n=0;n<r;++n)128<=t.charCodeAt(n)&&I("not-basic"),f.push(t.charCodeAt(n));for(o=0<r?r+1:0;o<p;){for(s=d,a=1,i=g;p<=o&&I("invalid-input"),l=t.charCodeAt(o++),(g<=(h=l-48<10?l-22:l-65<26?l-65:l-97<26?l-97:g)||h>C((y-d)/a))&&I("overflow"),d+=h*a,!(h<(u=i<=v?b:v+w<=i?w:i-v));i+=g)a>C(y/(c=g-u))&&I("overflow"),a*=c;v=_(d-s,e=f.length+1,0==s),C(d/e)>y-m&&I("overflow"),m+=C(d/e),d%=e,f.splice(d++,0,m)}return U(f)}function p(t){var e,r,n,o,s,a,i,h,u,c,l,f,p,d,m,v=[];for(f=(t=q(t)).length,e=O,s=j,a=r=0;a<f;++a)(l=t[a])<128&&v.push(A(l));for(n=o=v.length,o&&v.push(x);n<f;){for(i=y,a=0;a<f;++a)e<=(l=t[a])&&l<i&&(i=l);for(i-e>C((y-r)/(p=n+1))&&I("overflow"),r+=(i-e)*p,e=i,a=0;a<f;++a)if((l=t[a])<e&&++r>y&&I("overflow"),l==e){for(h=r,u=g;!(h<(c=u<=s?b:s+w<=u?w:u-s));u+=g)m=h-c,d=g-c,v.push(A(S(c+m%d,0))),h=C(m/d);v.push(A(S(h,0))),s=_(r,p,n==o),r=0,++n}++r,++e}return v.join("")}r={version:"1.4.1",ucs2:{decode:q,encode:U},decode:f,encode:p,toASCII:function(t){return l(t,function(t){return a.test(t)?"xn--"+p(t):t})},toUnicode:function(t){return l(t,function(t){return n.test(t)?f(t.slice(4).toLowerCase()):t})}},void 0===(v=function(){return r}.call(k,P,k,d))||(d.exports=v)}()}).call(this,P(186)(t),P(80))},278:function(t,e,r){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},279:function(t,e,r){"use strict";t.exports=function(t,e,r,n){e=e||"&",r=r||"=";var o={};if("string"!=typeof t||0===t.length)return o;var s=/\+/g;t=t.split(e);var a=1e3;n&&"number"==typeof n.maxKeys&&(a=n.maxKeys);var i,h,u=t.length;0<a&&a<u&&(u=a);for(var c=0;c<u;++c){var l,f,p,d,m=t[c].replace(s,"%20"),v=m.indexOf(r);f=0<=v?(l=m.substr(0,v),m.substr(v+1)):(l=m,""),p=decodeURIComponent(l),d=decodeURIComponent(f),i=o,h=p,Object.prototype.hasOwnProperty.call(i,h)?y(o[p])?o[p].push(d):o[p]=[o[p],d]:o[p]=d}return o};var y=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},280:function(t,e,r){"use strict";var s=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(r,n,o,t){return n=n||"&",o=o||"=",null===r&&(r=void 0),"object"==typeof r?i(h(r),function(t){var e=encodeURIComponent(s(t))+o;return a(r[t])?i(r[t],function(t){return e+encodeURIComponent(s(t))}).join(n):e+encodeURIComponent(s(r[t]))}).join(n):t?encodeURIComponent(s(t))+o+encodeURIComponent(s(r)):""};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var h=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},315:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default="rc-widget"},4059:function(t,e,r){"use strict";var n=r(13);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(4060)),s=n(r(315)),a=new o.default({prefix:s.default});e.default=a},4060:function(t,e,r){"use strict";var n=r(13);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(r(92)),a=n(r(188));e.default=function t(){var o=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).prefix;(0,s.default)(this,t),window.addEventListener("load",function(){var t=window.location.href;try{if(window.opener&&window.opener.oAuthCallback)return window.opener.oAuthCallback(t),void window.close()}catch(t){}try{window.opener&&window.opener.postMessage&&(window.opener.postMessage({callbackUri:t},"*"),window.close())}catch(t){console.error(t)}try{window.parent&&window.parent!==window&&("SSOIframe"===window.name?window.parent.postMessage({callbackUri:t},"*"):window.parent.postMessage({refreshCallbackUri:t},"*"))}catch(t){console.error(t)}var e=a.default.parse(t,!0).query.state;if(e){var r=e.split("-").slice(1).join("-"),n="".concat(o,"-").concat(r,"-redirect-callbackUri");localStorage.removeItem(n),window.addEventListener("storage",function(t){t.key!==n||t.newValue&&""!==t.newValue||window.close()}),localStorage.setItem(n,t)}})}},80:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},92:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}}});
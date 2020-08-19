window.Sou=window.Sou||{},window.Sou.util=window.Sou.util||{},Sou.util.newGuid=function(){for(var e="",t=1;t<=18;t++){var o=Math.floor(10*Math.random()).toString(10);e+=o}return e},Sou.util.toQueryString=function(e){var t=[];for(var o in e)t.push(o+"="+encodeURIComponent(e[o]));return t.join("&")},String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Sou.util.getCookie=function(e){for(var t=document.cookie.split("; "),o=0;o<t.length;o++){var n=t[o].split("=");if(e==n[0])return unescape(n[1])}return""},Sou.util.addEvent=function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent("on"+t,o)},Sou.util.domReady=function(e){"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e,!1):window.attachEvent&&window.attachEvent("onload",e)},Sou.util.hasClass=function(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},Sou.util.addClass=function(e,t){e.classList?e.classList.add(t):Sou.util.hasClass(e,t)||(e.className+=" "+t)},Sou.util.removeClass=function(e,t){if(e.classList)e.classList.remove(t);else if(Sou.util.hasClass(e,t)){var o=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(o," ")}},Sou.util.closest=function(e,t){for(var o=t.charAt(0);e&&e!==document;e=e.parentNode){if("."===o&&(" "+e.className+" ").indexOf(" "+t.substr(1)+" ")>=0)return e;if("#"===o&&e.id===t.substr(1))return e;if("["===o&&e.hasAttribute(t.substr(1,t.length-2)))return e;if(e.tagName.toLowerCase()===t)return e}return!1},Sou.util.loadScript=function(e,t){var o=document.createElement("script"),n=(new Date).getTime();o.type="text/javascript",o.id=n,o.src=e,o.onload=o.onreadystatechange=function(){if(!o.readyState||"loaded"===o.readyState||"complete"===o.readyState){"function"==typeof t&&t(),o.onload=o.onreadystatechange=null;try{o.parentNode&&o.parentNode.removeChild(o)}catch(e){}}},document.getElementsByTagName("head")[0].appendChild(o)},Sou.util.ajax=function(e){var t=e.url,o=e.type||"GET",n=e.success||function(){},a=e.error||function(){},u=e.data||null;u instanceof Object&&(u=Sou.util.toQueryString(u));var i=new XMLHttpRequest;"GET"===o?(i.open(o,u?t+"?"+u:t,!0),i.send(null)):"POST"===o&&(i.open(o,t,!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send(u)),i.onreadystatechange=function(){4===i.readyState&&(200===i.status?n(i.responseText):a(i.status))}},Sou.util.jsonp=function(e,t,o,n){e=e||"",t=t||{},o=o||"",n=n||function(){};var a=function(e){var t=[];for(var o in e)e.hasOwnProperty(o)&&t.push(o);return t};if("object"==typeof t){for(var u="",i=a(t),r=0;r<i.length;r++)u+=encodeURIComponent(i[r])+"="+encodeURIComponent(t[i[r]]),r!=i.length-1&&(u+="&");e+="?"+u}else"function"==typeof t&&(o=t,n=o);"function"==typeof o&&(n=o,o="callback"),Date.now||(Date.now=function(){return(new Date).getTime()});var c=Date.now(),l="jsonp"+Math.round(c+1000001*Math.random());window[l]=function(e){n(e);try{delete window[l]}catch(t){window[l]=void 0}},e+=e.indexOf("?")===-1?"?":"&";var d=document.createElement("script");d.setAttribute("src",e+o+"="+l),document.getElementsByTagName("head")[0].appendChild(d),d.onload=function(){try{d.parentNode.removeChild(d)}catch(e){}}},Sou.util.md5=function(e){function t(e,t){return e<<t|e>>>32-t}function o(e,t){var o,n,a,u,i;return a=2147483648&e,u=2147483648&t,o=1073741824&e,n=1073741824&t,i=(1073741823&e)+(1073741823&t),o&n?2147483648^i^a^u:o|n?1073741824&i?3221225472^i^a^u:1073741824^i^a^u:i^a^u}function n(e,t,o){return e&t|~e&o}function a(e,t,o){return e&o|t&~o}function u(e,t,o){return e^t^o}function i(e,t,o){return t^(e|~o)}function r(e,a,u,i,r,c,l){return e=o(e,o(o(n(a,u,i),r),l)),o(t(e,c),a)}function c(e,n,u,i,r,c,l){return e=o(e,o(o(a(n,u,i),r),l)),o(t(e,c),n)}function l(e,n,a,i,r,c,l){return e=o(e,o(o(u(n,a,i),r),l)),o(t(e,c),n)}function d(e,n,a,u,r,c,l){return e=o(e,o(o(i(n,a,u),r),l)),o(t(e,c),n)}function s(e){for(var t,o=e.length,n=o+8,a=(n-n%64)/64,u=16*(a+1),i=Array(u-1),r=0,c=0;c<o;)t=(c-c%4)/4,r=c%4*8,i[t]=i[t]|e.charCodeAt(c)<<r,c++;return t=(c-c%4)/4,r=c%4*8,i[t]=i[t]|128<<r,i[u-2]=o<<3,i[u-1]=o>>>29,i}function m(e){var t,o,n="",a="";for(o=0;o<=3;o++)t=e>>>8*o&255,a="0"+t.toString(16),n+=a.substr(a.length-2,2);return n}function p(e){e=e.replace(/\r\n/g,"\n");for(var t="",o=0;o<e.length;o++){var n=e.charCodeAt(o);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}var S,f,h,v,g,y,A,C,w,E=Array(),x=7,T=12,I=17,B=22,k=5,N=9,b=14,H=20,q=4,D=11,L=16,R=23,_=6,j=10,O=15,U=21;for(e=p(e),E=s(e),y=1732584193,A=4023233417,C=2562383102,w=271733878,S=0;S<E.length;S+=16)f=y,h=A,v=C,g=w,y=r(y,A,C,w,E[S+0],x,3614090360),w=r(w,y,A,C,E[S+1],T,3905402710),C=r(C,w,y,A,E[S+2],I,606105819),A=r(A,C,w,y,E[S+3],B,3250441966),y=r(y,A,C,w,E[S+4],x,4118548399),w=r(w,y,A,C,E[S+5],T,1200080426),C=r(C,w,y,A,E[S+6],I,2821735955),A=r(A,C,w,y,E[S+7],B,4249261313),y=r(y,A,C,w,E[S+8],x,1770035416),w=r(w,y,A,C,E[S+9],T,2336552879),C=r(C,w,y,A,E[S+10],I,4294925233),A=r(A,C,w,y,E[S+11],B,2304563134),y=r(y,A,C,w,E[S+12],x,1804603682),w=r(w,y,A,C,E[S+13],T,4254626195),C=r(C,w,y,A,E[S+14],I,2792965006),A=r(A,C,w,y,E[S+15],B,1236535329),y=c(y,A,C,w,E[S+1],k,4129170786),w=c(w,y,A,C,E[S+6],N,3225465664),C=c(C,w,y,A,E[S+11],b,643717713),A=c(A,C,w,y,E[S+0],H,3921069994),y=c(y,A,C,w,E[S+5],k,3593408605),w=c(w,y,A,C,E[S+10],N,38016083),C=c(C,w,y,A,E[S+15],b,3634488961),A=c(A,C,w,y,E[S+4],H,3889429448),y=c(y,A,C,w,E[S+9],k,568446438),w=c(w,y,A,C,E[S+14],N,3275163606),C=c(C,w,y,A,E[S+3],b,4107603335),A=c(A,C,w,y,E[S+8],H,1163531501),y=c(y,A,C,w,E[S+13],k,2850285829),w=c(w,y,A,C,E[S+2],N,4243563512),C=c(C,w,y,A,E[S+7],b,1735328473),A=c(A,C,w,y,E[S+12],H,2368359562),y=l(y,A,C,w,E[S+5],q,4294588738),w=l(w,y,A,C,E[S+8],D,2272392833),C=l(C,w,y,A,E[S+11],L,1839030562),A=l(A,C,w,y,E[S+14],R,4259657740),y=l(y,A,C,w,E[S+1],q,2763975236),w=l(w,y,A,C,E[S+4],D,1272893353),C=l(C,w,y,A,E[S+7],L,4139469664),A=l(A,C,w,y,E[S+10],R,3200236656),y=l(y,A,C,w,E[S+13],q,681279174),w=l(w,y,A,C,E[S+0],D,3936430074),C=l(C,w,y,A,E[S+3],L,3572445317),A=l(A,C,w,y,E[S+6],R,76029189),y=l(y,A,C,w,E[S+9],q,3654602809),w=l(w,y,A,C,E[S+12],D,3873151461),C=l(C,w,y,A,E[S+15],L,530742520),A=l(A,C,w,y,E[S+2],R,3299628645),y=d(y,A,C,w,E[S+0],_,4096336452),w=d(w,y,A,C,E[S+7],j,1126891415),C=d(C,w,y,A,E[S+14],O,2878612391),A=d(A,C,w,y,E[S+5],U,4237533241),y=d(y,A,C,w,E[S+12],_,1700485571),w=d(w,y,A,C,E[S+3],j,2399980690),C=d(C,w,y,A,E[S+10],O,4293915773),A=d(A,C,w,y,E[S+1],U,2240044497),y=d(y,A,C,w,E[S+8],_,1873313359),w=d(w,y,A,C,E[S+15],j,4264355552),C=d(C,w,y,A,E[S+6],O,2734768916),A=d(A,C,w,y,E[S+13],U,1309151649),y=d(y,A,C,w,E[S+4],_,4149444226),w=d(w,y,A,C,E[S+11],j,3174756917),C=d(C,w,y,A,E[S+2],O,718787259),A=d(A,C,w,y,E[S+9],U,3951481745),y=o(y,f),A=o(A,h),C=o(C,v),w=o(w,g);return(m(y)+m(A)+m(C)+m(w)).toLowerCase()},window.Sou.Autocomplate=window.Sou.Autocomplate||{},Sou.Autocomplate.tipNum=0,Sou.Autocomplate.LogUri="//sou.autohome.com.cn/stats/SuggestClick.ashx?",Sou.Autocomplate.DataUri="//sou.autohome.com.cn/Api/Suggest/search?q=",Sou.Autocomplate.Context={scid:"1",q:"",cq:"",uri:window.location,uid:Sou.util.getCookie("sessionid"),adr:Sou.util.getCookie("sessionip"),seq:0,type:0,pf:0,method:0,ev:1,sid:0,context:""},Sou.Autocomplate.addAutocomplate=function(e){function t(t){if(t=t||window.event,i&&(i.value=""),38!=t.keyCode&&40!=t.keyCode){Sou.Autocomplate.tipNum=0;try{Sou.util.loadScript(Sou.Autocomplate.DataUri+escape(e.value)+"&plat=pc&chl=zonghe"),Sou.Autocomplate.Context.sid=Sou.util.newGuid(),Sou.Autocomplate.Context.q=e.value,Sou.Autocomplate.Context.method=0}catch(t){}}}function o(t){if(t=t||window.event,13==t.keyCode){null!=document.getElementById("pvareaid")&&(document.getElementById("pvareaid").value="3311667");var o=0,i=0;if("none"!=a.style.display)for(var r=a.getElementsByTagName("li").length,c=a.getElementsByTagName("dd").length,l=r+c,d=a.getElementsByTagName("a"),s=0;s<l;s++)Sou.util.hasClass(d[s],"current")&&(o=1);if(!Sou.util.hasClass(u,"search-float-hide"))for(var l=u.getElementsByTagName("dd").length,d=u.getElementsByTagName("a"),s=0;s<l;s++)Sou.util.hasClass(d[s],"current")&&(i=1);if(0!=i){var m=document.createElement("input");m.setAttribute("type","hidden"),m.setAttribute("name","from_type"),m.setAttribute("id","from_type"),m.value=3,n.appendChild(m),setTimeout(function(){n.removeChild(m)},200)}if(0===i){if(0!=o){var p=Sou.Autocomplate.tipNum,S=a.getElementsByTagName("a")[p-1],r=a.getElementsByTagName("li").length;Sou.Autocomplate.Context.seq=p-1,Sou.Autocomplate.Context.type=1,p>r&&(Sou.Autocomplate.Context.type=0),Sou.Autocomplate.Context.cq=S.attributes.title.value}else Sou.Autocomplate.Context.seq=0,Sou.Autocomplate.Context.type=2,Sou.Autocomplate.Context.cq="";Sou.Autocomplate.Context.method=1,(new Image).src=Sou.Autocomplate.LogUri+Sou.util.toQueryString(Sou.Autocomplate.Context)}}if(37!=t.keyCode&&39!=t.keyCode||Sou.util.addClass(u,"search-float-hide"),38==t.keyCode||40==t.keyCode){if("none"!=a.style.display){var p=Sou.Autocomplate.tipNum,r=a.getElementsByTagName("li").length,c=a.getElementsByTagName("dd").length,l=r+c;38==t.keyCode&&(p--,p<=0&&(p=l)),40==t.keyCode&&(p++,p>l&&(p=1));for(var f=a.getElementsByTagName("a"),S=f[p-1],s=0;s<l;s++)Sou.util.removeClass(f[s],"current");Sou.util.addClass(S,"current"),e.value=S.title,Sou.Autocomplate.tipNum=p}if(!Sou.util.hasClass(u,"search-float-hide")){var p=Sou.Autocomplate.tipNum,l=u.getElementsByTagName("dd").length;38==t.keyCode&&(p--,p<=0&&(p=l)),40==t.keyCode&&(p++,p>l&&(p=1));for(var f=u.getElementsByTagName("a"),S=f[p-1],s=0;s<l;s++)Sou.util.removeClass(f[s],"current");Sou.util.addClass(S,"current"),e.value=S.innerHTML,Sou.Autocomplate.tipNum=p}}}var n=document.getElementById("soudiv"),a=document.getElementById("autocomplateTip"),u=document.querySelector(".search-history"),i=document.getElementById("mq");e.onkeyup=t,e.onkeydown=o},Sou.Autocomplate.bindAutocomplate=function(e){var t=document.getElementById("autocomplateTip"),o=document.getElementById("q").value;if(e.length>0){for(var n=e.split(","),a='<ul class="search-pop-letter">',u='<div class="search-pop-direct"><i class="icon12 icon12-down2"></i></em>\u70b9\u51fb\u76f4\u8fbe</div><dl class="search-pop-cars">',i="",r=0;r<n.length;r++){var c=n[r].toString().split(":");if(c.length>0&&null!=c[1]){var l="\u6682\u65e0\u62a5\u4ef7";0==c[2]&&0==c[3]||(l=c[2]!=c[3]?c[2]+"-"+c[3]+"\u4e07":c[2]+"\u4e07");var d="";1==c[4]&&"\u6682\u65e0\u62a5\u4ef7"!=l?d='<i class="icon12 icon12-yu" title="\u9884\u552e\u4ef7"></i>':3==c[4]&&"\u6682\u65e0\u62a5\u4ef7"!=l&&(d='<i class="icon12 icon12-ting" title="\u505c\u552e\u4ef7\u683c"></i>'),i+='<dd><a href="javascript:void(0);" target="_self" onclick="Sou.Autocomplate.summitform(\''+c[0]+"',1,"+c[1]+","+r+',0)" title="'+c[0]+'"><span class="name">'+c[0]+'</span><span class="price">'+l+"</span>"+d+"</a></dd>"}else{var s=n[r].indexOf(o)>-1?n[r].substring(0,n[r].indexOf(o)+o.length)+"<strong>"+n[r].substring(n[r].indexOf(o)+o.length)+"</strong>":n[r];a+='<li><a href="javascript:void(0);" target="_self" onclick="Sou.Autocomplate.summitform(\''+n[r]+"',0,0,"+r+',1)" title="'+n[r]+'">'+s+"</a></li>"}}a+="</ul>",i+="</dl>","</dl>"!=i?u+=i:u="",a+=u,t.innerHTML=a,t.style.display="block"}else t.style.display="none"},Sou.Autocomplate.recommendDataType=0,Sou.Autocomplate.recommendData=null,Sou.Autocomplate.setRecommend=function(e){window._aad?Sou.Autocomplate.setRecommendAd(e):Sou.Autocomplate.setRecommendSou(e)},Sou.Autocomplate.setRecommendAd=function(e){window._aad.Loader("6259",null,!0,function(){var e=window._ad_s6259_data;if(e){Sou.Autocomplate.recommendDataType=2,Sou.Autocomplate.recommendData=e;var t=document.getElementById("q");t&&(t.value=e.defaultWord)}else Sou.Autocomplate.setRecommendSou()})},Sou.Autocomplate.setRecommendSou=function(e){var t={uid:Sou.util.getCookie("sessionid"),area:Sou.util.getCookie("area"),ip:Sou.util.getCookie("sessionip"),plat:0,chl:1,from_act:e?"load":"blur"};Sou.util.jsonp("//sou.api.autohome.com.cn/webapi/api/GetRecForBox",t,"_callback",function(e){if(0===e.returncode){e=e.result,Sou.Autocomplate.recommendDataType=1,Sou.Autocomplate.recommendData=e;var t=document.getElementById("q");t&&(t.value=e.name);var o=document.getElementById("mq");o&&(o.value=e.match_word)}})},Sou.Autocomplate.init=function(){var e=document.getElementById("q");Sou.util.addEvent(document,"click",function(t){t=t||window.event;var o=t.srcElement||t.target,n=document.getElementById("autocomplateTip");null==n||"block"!=n.style.display||n.contains(o)||e.contains(o)||(n.style.display="none")}),Sou.Autocomplate.addAutocomplate(e),Sou.util.addEvent(e,"focus",function(){e.value="";var t=Sou.util.closest(e,".search");Sou.util.addClass(t,"search-active"),Sou.Autocomplate.recommendDataType=0,Sou.Autocomplate.recommendData=null}),Sou.util.addEvent(e,"blur",function(){var t=Sou.util.closest(e,".search");Sou.util.removeClass(t,"search-active"),""==e.value&&Sou.Autocomplate.setRecommend()}),Sou.Autocomplate.insertAdTag(),Sou.Autocomplate.setRecommend(!0)},Sou.Autocomplate.Submit=function(){var e=document.getElementById("soudiv");null!=document.getElementById("pvareaid")&&(document.getElementById("pvareaid").value="3311224");var t=document.getElementById("q").value;if(1===Sou.Autocomplate.recommendDataType){if(Sou.Autocomplate.recommendData&&Sou.Autocomplate.recommendData.from_context&&t===Sou.Autocomplate.recommendData.name){var o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name","from_context"),o.setAttribute("id","from_context"),o.value=Sou.Autocomplate.recommendData.from_context,e.appendChild(o),setTimeout(function(){e.removeChild(o)},200)}}else if(2===Sou.Autocomplate.recommendDataType&&Sou.Autocomplate.recommendData&&t===Sou.Autocomplate.recommendData.defaultWord){var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","from_source"),n.setAttribute("id","from_source"),n.value="unactive",e.appendChild(n),setTimeout(function(){e.removeChild(n)},200)}document.getElementById("souform").submit(),Sou.Autocomplate.Context.q=t,Sou.Autocomplate.Context.sid=Sou.util.newGuid(),Sou.Autocomplate.Context.type=2,(new Image).src=Sou.Autocomplate.LogUri+Sou.util.toQueryString(Sou.Autocomplate.Context),Sou.searchHistory&&Sou.searchHistory.addHis(t)},Sou.Autocomplate.summitform=function(e,t,o,n,a,u){document.getElementById("q").value=e,1==t?window.open("//sou.autohome.com.cn/Api/TipWordSearchLogs/add?word="+escape(e)+"&seriesid="+o+"&pvareaid=3311668&type=0"):window.open("//sou.autohome.com.cn/Api/TipWordSearchLogs/add?word="+escape(e)+"&seriesid="+o+"&pvareaid=3311668&type=4"),void 0!=e&&(Sou.Autocomplate.Context.cq=e),void 0!=n&&(Sou.Autocomplate.Context.seq=n),void 0!=a&&(Sou.Autocomplate.Context.type=a),void 0!=u&&(Sou.Autocomplate.Context.method=u),(new Image).src=Sou.Autocomplate.LogUri+Sou.util.toQueryString(Sou.Autocomplate.Context),Sou.searchHistory&&Sou.searchHistory.addHis(e)},Sou.Autocomplate.insertAdTag=function(){var e=document.createElement("div");e.id="s6259",e.style="position:absolute;top:10px;left:10px;z-index:-999;width:1px;height:1px;font-size:0;line-height:0;overflow:hidden;";var t=document.getElementById("soudiv");t&&t.appendChild(e)},Sou.SearchHistory=function(){var e=this.getCookie("sessionid")||"";this.userId=encodeURIComponent(e),this.dropdown=document.querySelector(".search-history"),this.init()},Sou.SearchHistory.prototype={init:function(){var e=this,t=document.getElementById("q"),o=document.getElementById("autocomplateTip");Sou.util.addEvent(t,"focus",function(){o.style.display="none",e.loadHis()}),Sou.util.addEvent(t,"input",function(){setTimeout(function(){var o=t.value;o&&o.trim()?e.hideHis():e.loadHis()},0)}),Sou.util.addEvent(document,"click",function(o){o=o||window.event;var n=o.srcElement||o.target;t.contains(n)||e.dropdown.contains(n)||e.hideHis()}),Sou.util.addEvent(e.dropdown,"click",function(t){t=t||window.event;var o=t.srcElement||t.target;Sou.util.hasClass(o,"clearHis")&&e.clearHis()}),Sou.util.addEvent(t,"keypress",function(o){o=o||window.event,13==o.keyCode&&e.addHis(t.value)}),Sou.util.addEvent(e.dropdown,"click",function(t){t=t||window.event;var o=t.srcElement||t.target;if("DD"===o.tagName||"DD"===o.parentNode.tagName){var n=o.textContent||o.innerText;document.getElementById("q").value=n,e.addHis(n),e.hideHis(),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}})},loadHis:function(){var e=this;Sou.util.ajax({url:"//sou.api.autohome.com.cn/term/detail",type:"GET",data:{userId:e.userId},success:function(t){t=JSON.parse(t),t.result.terms&&t.result.terms.length&&(e.renderHis(t.result.terms),e.showHis())}})},renderHis:function(e){function t(e){return decodeURIComponent(e).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var o,n=[];e.length>10&&(e.length=10);for(var a=0;a<e.length;a++)o=t(e[a]),n.push('<dd><a href="//sou.autohome.com.cn/zonghe?q='+escape(o)+'&pvareaid=3311668&from_type=3" target="_blank">'+o+"</aa></dd>");this.dropdown.querySelector("dl").innerHTML=n.join("")},showHis:function(){Sou.util.removeClass(this.dropdown,"search-float-hide")},hideHis:function(){Sou.util.addClass(this.dropdown,"search-float-hide")},addHis:function(e){var t=this;Sou.util.ajax({url:"//sou.api.autohome.com.cn/term/add",type:"POST",data:{userId:t.userId,md5:Sou.util.md5(t.userId+"/autohome"),query:encodeURIComponent(e)},success:function(){}})},clearHis:function(){var e=this;Sou.util.ajax({url:"//sou.api.autohome.com.cn/term/delete",type:"POST",data:{userId:e.userId,md5:Sou.util.md5(e.userId+"/autohome")},success:function(t){t=JSON.parse(t),1===t.returncode&&e.hideHis()}})},getCookie:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=t?decodeURIComponent(t[2]):null}},Sou.util.domReady(function(){Sou.Autocomplate.init(),Sou.searchHistory=new Sou.SearchHistory});
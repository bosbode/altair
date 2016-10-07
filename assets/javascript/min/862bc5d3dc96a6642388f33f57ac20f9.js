/**
 * Altair — A Sass- and Grunt-based development front-end starter kit, running on file-based Kirby CMS — v0.5.4 — 2016-10-07
 * http://altair.studiodumbar.info
 * Copyright (c) 2016 Studio Dumbar
 */
!function(window,undefined){"use strict";function loadJS(src){var ref=window.document.getElementsByTagName("script")[0],script=window.document.createElement("script");return script.src=src,script.async=!0,ref.parentNode.insertBefore(script,ref),script}function loadCSS(href,before,media){function toggleMedia(){for(var defined,i=0;i<sheets.length;i++)sheets[i].href&&sheets[i].href.indexOf(href)>-1&&(defined=!0);defined?ss.media=media||"all":setTimeout(toggleMedia)}var ss=window.document.createElement("link"),ref=before||window.document.getElementsByTagName("script")[0],sheets=window.document.styleSheets;return ss.rel="stylesheet",ss.href=href,ss.media="only x",ref.parentNode.insertBefore(ss,ref),toggleMedia(),ss}function getMeta(metaname){for(var meta,metas=window.document.getElementsByTagName("meta"),i=0;i<metas.length;i++)if(metas[i].name&&metas[i].name===metaname){meta=metas[i];break}return meta}function cookie(name,value,days){var expires;if(value===undefined){var cookiestring="; "+window.document.cookie,cookies=cookiestring.split("; "+name+"=");return 2==cookies.length?cookies.pop().split(";").shift():null}if(value===!1&&(days=-1),days){var date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3),expires="; expires="+date.toGMTString()}else expires="";window.document.cookie=name+"="+value+expires+"; path=/"}function addEnhanceClass(){docElem.className+=" "+docClasses.join(" ")}function removeEnhanceClass(){docElem.className=docElem.className.replace(docClasses.join(" ")," ")}var setTimeout=window.setTimeout,enhance={},doc=window.document,docElem=doc.documentElement,fullCSSKey=(doc.head||doc.getElementsByTagName("head")[0],"fullcss"),fullJSKey="fulljs",fontsKey="fonts",htmlClasses=["enhanced","ctm"],docClasses=htmlClasses;enhance.loadJS=loadJS,enhance.loadCSS=loadCSS,enhance.getMeta=getMeta,enhance.cookie=cookie;var fullCSS=getMeta(fullCSSKey);if(fullCSS&&!cookie(fullCSSKey)&&(loadCSS(fullCSS.content),cookie(fullCSSKey,"true",7)),"querySelector"in doc){docElem.className+=" "+htmlClasses.join(" ");var fullJS=getMeta(fullJSKey);if(addEnhanceClass(),fullJS){var script=loadJS(fullJS.content),fallback=setTimeout(removeEnhanceClass,8e3);script.onload=function(){clearTimeout(fallback),addEnhanceClass()}}var fonts=getMeta(fontsKey);fonts&&loadCSS(fonts.content),window.enhance=enhance}}(this),!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var c in T)if(T.hasOwnProperty(c)){if(e=[],t=T[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),w.push((o?"":"no-")+s.join("-"))}}function a(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?b.className.baseVal=t:b.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var a,s,c,u,d="modernizr",f=i("div"),p=l();if(parseInt(r,10))for(;r--;)c=i("div"),c.id=o?o[r]:d+(r+1),f.appendChild(c);return a=i("style"),a.type="text/css",a.id="s"+d,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=u,b.offsetHeight):f.parentNode.removeChild(f),!!s}function d(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&d(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),a([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+f(t[o])+":"+r+")");return a=a.join(" or "),u("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,o,a){function l(){d&&(delete k.style,delete k.modElem)}if(a=!r(a,"undefined")&&a,!r(o,"undefined")){var u=p(e,o);if(!r(u,"undefined"))return u}for(var d,f,m,h,g,v=["modernizr","tspan"];!k.style;)d=!0,k.modElem=i(v.shift()),k.style=k.modElem.style;for(m=e.length,f=0;m>f;f++)if(h=e[f],g=k.style[h],s(h,"-")&&(h=c(h)),k.style[h]!==n){if(a||r(o,"undefined"))return l(),"pfx"!=t||h;try{k.style[h]=o}catch(y){}if(k.style[h]!=g)return l(),"pfx"!=t||h}return l(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?h(o,n||t):o);return!1}function v(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+R.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?m(s,t,o,a):(s=(e+" "+A.join(i+" ")+i).split(" "),g(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var w=[],T=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var b=t.documentElement;Modernizr.addTest("classlist","classList"in b);var S="svg"===b.nodeName.toLowerCase();S||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,l(t)}function a(e){var t=S[e[x]];return t||(t={},b++,e[x]=b,S[b]=t),t}function i(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():T.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||w.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),c=s.length;c>i;i++)o.createElement(s[i]);return o}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function l(e){e||(e=t);var r=a(e);return!E.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||c(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,a=RegExp("^(?:"+r().join("|")+")$","i"),i=[];o--;)t=n[o],a.test(t.nodeName)&&i.push(t.applyElement(d(t)));return i}function d(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(_+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function f(e){for(var t,n=e.split("{"),o=n.length,a=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+_+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(a,i),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(i._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,i=a(e),s=e.namespaces,c=e.parentWindow;return!N||e.printShived?e:("undefined"==typeof s[_]&&s.add(_),c.attachEvent("onbeforeprint",function(){t();for(var a,i,s,c=e.styleSheets,l=[],d=c.length,p=Array(d);d--;)p[d]=c[d];for(;s=p.pop();)if(!s.disabled&&C.test(s.media)){try{a=s.imports,i=a.length}catch(m){i=0}for(d=0;i>d;d++)p.push(a[d]);try{l.push(s.cssText)}catch(m){}}l=f(l.reverse().join("")),o=u(e),r=n(e,l)}),c.attachEvent("onafterprint",function(){p(o),clearTimeout(i._removeSheetTimer),i._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,g,v="3.7.3",y=e.html5||{},w=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,T=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,x="_html5shiv",b=0,S={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,g=!0}}();var E={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:y.shivCSS!==!1,supportsUnknownElements:g,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:o};e.html5=E,l(t);var C=/^$|\b(?:all|print)\b/,_="html5shiv",N=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();E.type+=" print",E.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("audio",function(){var e=i("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var E=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=E,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,a=E.length-1;a>o;o++)e=0===o?"to ":"",r+=t+E[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=i("a"),c=s.style;return c.cssText=r,(""+c.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=E.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var C="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",C||_);var N=x.testStyles=u;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",E.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");N(r,function(e){n=9===e.offsetTop})}return n});var P=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||r}();P?Modernizr.addTest("fontface",!1):N('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",i=/src/i.test(a)&&0===a.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)});var j;!function(){var e={}.hasOwnProperty;j=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=d}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var k={style:z.elem.style};Modernizr._q.unshift(function(){delete k.style});var $=x.testProp=function(e,t,r){return m([e],n,t,r)};Modernizr.addTest("textshadow",$("textShadow","1px 1px"));var F="Moz O ms Webkit",R=x._config.usePrefixes?F.split(" "):[];x._cssomPrefixes=R;var A=x._config.usePrefixes?F.toLowerCase().split(" "):[];x._domPrefixes=A,x.testAllProps=v,x.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in b.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",N(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),a(w),delete x.addTest,delete x.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);
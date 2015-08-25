/**
 * Altair — A Sass- and Grunt-based development front-end starter kit, running on file-based Kirby CMS
 *
 * @authors   Jonathan van Wunnik <jonathan@studiodumbar.com>, Marijn Tijhuis <marijn@studiodumbar.com>
 * @link      http://altair.studiodumbar.info
 * @version   0.3.17
 * @generated 2015-08-25:03:08
 * @copyright (c) 2015 Studio Dumbar
 * @license   MIT
 */
function whichTransitionEvent(){var t,el=document.createElement("fakeelement"),transitions={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in transitions)if(void 0!==el.style[t])return transitions[t]}"document"in self&&("classList"in document.createElement("_")?!function(){"use strict";var testElement=document.createElement("_");if(testElement.classList.add("c1","c2"),!testElement.classList.contains("c2")){var createMethod=function(method){var original=DOMTokenList.prototype[method];DOMTokenList.prototype[method]=function(token){var i,len=arguments.length;for(i=0;len>i;i++)token=arguments[i],original.call(this,token)}};createMethod("add"),createMethod("remove")}if(testElement.classList.toggle("c3",!1),testElement.classList.contains("c3")){var _toggle=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(token,force){return 1 in arguments&&!this.contains(token)==!force?force:_toggle.call(this,token)}}testElement=null}():!function(view){"use strict";if("Element"in view){var classListProp="classList",protoProp="prototype",elemCtrProto=view.Element[protoProp],objCtr=Object,strTrim=String[protoProp].trim||function(){return this.replace(/^\s+|\s+$/g,"")},arrIndexOf=Array[protoProp].indexOf||function(item){for(var i=0,len=this.length;len>i;i++)if(i in this&&this[i]===item)return i;return-1},DOMEx=function(type,message){this.name=type,this.code=DOMException[type],this.message=message},checkTokenAndGetIndex=function(classList,token){if(""===token)throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(token))throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character");return arrIndexOf.call(classList,token)},ClassList=function(elem){for(var trimmedClasses=strTrim.call(elem.getAttribute("class")||""),classes=trimmedClasses?trimmedClasses.split(/\s+/):[],i=0,len=classes.length;len>i;i++)this.push(classes[i]);this._updateClassName=function(){elem.setAttribute("class",this.toString())}},classListProto=ClassList[protoProp]=[],classListGetter=function(){return new ClassList(this)};if(DOMEx[protoProp]=Error[protoProp],classListProto.item=function(i){return this[i]||null},classListProto.contains=function(token){return token+="",-1!==checkTokenAndGetIndex(this,token)},classListProto.add=function(){var token,tokens=arguments,i=0,l=tokens.length,updated=!1;do token=tokens[i]+"",-1===checkTokenAndGetIndex(this,token)&&(this.push(token),updated=!0);while(++i<l);updated&&this._updateClassName()},classListProto.remove=function(){var token,index,tokens=arguments,i=0,l=tokens.length,updated=!1;do for(token=tokens[i]+"",index=checkTokenAndGetIndex(this,token);-1!==index;)this.splice(index,1),updated=!0,index=checkTokenAndGetIndex(this,token);while(++i<l);updated&&this._updateClassName()},classListProto.toggle=function(token,force){token+="";var result=this.contains(token),method=result?force!==!0&&"remove":force!==!1&&"add";return method&&this[method](token),force===!0||force===!1?force:!result},classListProto.toString=function(){return this.join(" ")},objCtr.defineProperty){var classListPropDesc={get:classListGetter,enumerable:!0,configurable:!0};try{objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}catch(ex){-2146823252===ex.number&&(classListPropDesc.enumerable=!1,objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc))}}else objCtr[protoProp].__defineGetter__&&elemCtrProto.__defineGetter__(classListProp,classListGetter)}}(self)),!function(name,definition){"undefined"!=typeof module?module.exports=definition():"function"==typeof define&&"object"==typeof define.amd?define(definition):this[name]=definition()}("domready",function(){var listener,fns=[],doc=document,hack=doc.documentElement.doScroll,domContentLoaded="DOMContentLoaded",loaded=(hack?/^loaded|^c/:/^loaded|^i|^c/).test(doc.readyState);return loaded||doc.addEventListener(domContentLoaded,listener=function(){for(doc.removeEventListener(domContentLoaded,listener),loaded=1;listener=fns.shift();)listener()}),function(fn){loaded?fn():fns.push(fn)}}),!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.addEventListener,f=a.setTimeout,g=a.requestAnimationFrame||f,h=a.setImmediate||f,i=/^picture$/i,j=["load","error","lazyincluded","_lazyloaded"],k=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");return a.className.match(c)&&c},l=function(a,b){k(a,b)||(a.className=a.className.trim()+" "+b)},m=function(a,b){var c;(c=k(a,b))&&(a.className=a.className.replace(c," "))},n=function(a,b,c){var d=c?"addEventListener":"removeEventListener";c&&n(a,b),j.forEach(function(c){a[d](c,b)})},o=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},p=function(b,d){var e;(e=a.picturefill||a.respimage||c.pf)?e({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},q=function(a,b){return(getComputedStyle(a,null)||{})[b]},r=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},s=function(b){var d,e=0,i=a.Date,j=function(){d=!1,e=i.now(),b()},k=function(){h(j)},l=function(){g(k)};return function(){if(!d){var a=c.throttle-(i.now()-e);d=!0,6>a&&(a=6),f(l,a)}}},t=function(){var h,j,r,t,v,w,x,y,z,A,B,C,D,E,F,G,H=/^img$/i,I=/^iframe$/i,J="onscroll"in a&&!/glebot/.test(navigator.userAgent),K=0,L=0,M=0,N=0,O=function(a){M--,a&&a.target&&n(a.target,O),(!a||0>M||!a.target)&&(M=0)},P=function(a,b){var c,d=a,e="hidden"!=q(a,"visibility");for(z-=b,C+=b,A-=b,B+=b;e&&(d=d.offsetParent);)e=(q(d,"opacity")||1)>0,e&&"visible"!=q(d,"overflow")&&(c=d.getBoundingClientRect(),e=B>c.left&&A<c.right&&C>c.top-1&&z<c.bottom+1);return e},Q=function(){var a,b,d,e,f,g,i,k,l;if((v=c.loadMode)&&8>M&&(a=h.length)){for(b=0,N++,G>L&&1>M&&N>3&&v>2?(L=G,N=0):L=v>1&&N>2&&6>M?F:K;a>b;b++)if(h[b]&&!h[b]._lazyRace)if(J)if((k=h[b].getAttribute("data-expand"))&&(g=1*k)||(g=L),l!==g&&(x=innerWidth+g,y=innerHeight+g,i=-1*g,l=g),d=h[b].getBoundingClientRect(),(C=d.bottom)>=i&&(z=d.top)<=y&&(B=d.right)>=i&&(A=d.left)<=x&&(C||B||A||z)&&(r&&3>M&&!k&&(3>v||4>N)||P(h[b],g))){if(V(h[b]),f=!0,M>12)break;M>6&&(L=K)}else!f&&r&&!e&&3>M&&4>N&&v>2&&(j[0]||c.preloadAfterLoad)&&(j[0]||!k&&(C||B||A||z||"auto"!=h[b].getAttribute(c.sizesAttr)))&&(e=j[0]||h[b]);else V(h[b]);e&&!f&&V(e)}},R=s(Q),S=function(a){l(a.target,c.loadedClass),m(a.target,c.loadingClass),n(a.target,S)},T=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.setAttribute("src",b)}},U=function(){var a,b=[],c=function(){for(;b.length;)b.shift()();a=!1};return function(d){b.push(d),a||(a=!0,g(c))}}(),V=function(a){var b,d,e,g,h,j,q,s,v,w,x,y,z=H.test(a.nodeName),A=z&&(a.getAttribute(c.sizesAttr)||a.getAttribute("sizes")),B="auto"==A;(!B&&r||!z||!a.src&&!a.srcset||a.complete||k(a,c.errorClass))&&(B&&(y=a.offsetWidth),a._lazyRace=!0,M++,U(function(){if(a._lazyRace&&delete a._lazyRace,m(a,c.lazyClass),!(v=o(a,"lazybeforeunveil")).defaultPrevented){if(A&&(B?(l(a,c.autosizesClass),u.updateElem(a,!0,y)):a.setAttribute("sizes",A)),j=a.getAttribute(c.srcsetAttr),h=a.getAttribute(c.srcAttr),z&&(q=a.parentNode,s=q&&i.test(q.nodeName||"")),w=v.detail.firesLoad||"src"in a&&(j||h||s),v={target:a},w&&(n(a,O,!0),clearTimeout(t),t=f(O,2500),l(a,c.loadingClass),n(a,S,!0)),s)for(b=q.getElementsByTagName("source"),d=0,e=b.length;e>d;d++)(x=c.customMedia[b[d].getAttribute("data-media")||b[d].getAttribute("media")])&&b[d].setAttribute("media",x),g=b[d].getAttribute(c.srcsetAttr),g&&b[d].setAttribute("srcset",g);j?a.setAttribute("srcset",j):h&&(I.test(a.nodeName)?T(a,h):a.setAttribute("src",h)),(j||s)&&p(a,{src:h})}(!w||a.complete)&&(w?O(v):M--,S(v))}))},W=function(){if(!r){if(Date.now()-w<999)return void f(W,999);var a,b=function(){c.loadMode=3,F=D,R()};r=!0,c.loadMode=3,M||R(),e("scroll",function(){3==c.loadMode&&(F=E,c.loadMode=2),clearTimeout(a),a=f(b,99)},!0)}};return{_:function(){w=Date.now(),h=b.getElementsByClassName(c.lazyClass),j=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),F=c.expand,D=F,E=F*((c.expFactor+1)/2),G=F*c.expFactor,e("scroll",R,!0),e("resize",R,!0),a.MutationObserver?new MutationObserver(R).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d.addEventListener("DOMNodeInserted",R,!0),d.addEventListener("DOMAttrModified",R,!0),setInterval(R,999)),e("hashchange",R,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b.addEventListener(a,R,!0)}),/d$|^c/.test(b.readyState)?W():(e("load",W),b.addEventListener("DOMContentLoaded",R),f(W,2e4)),R()},checkElems:R,unveil:V}}(),u=function(){var a,d=function(a,b,c){var d,e,f,g,h=a.parentNode;if(h&&(c=r(a,h,c),g=o(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!g.defaultPrevented&&(c=g.detail.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),i.test(h.nodeName||""))for(d=h.getElementsByTagName("source"),e=0,f=d.length;f>e;e++)d[e].setAttribute("sizes",c);g.detail.dataAttr||p(a,g.detail)}},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},g=s(f);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),e("resize",g)},checkElems:g,updateElem:d}}(),v=function(){v.i||(v.i=!0,u._(),t._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:2,expand:359,loadMode:2,throttle:125};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,f(function(){c.init&&v()})}(),{cfg:c,autoSizer:u,loader:t,init:v,uP:p,aC:l,rC:m,hC:k,fire:o,gW:r}}}),function(window,document,undefined){"use strict";function getElementOptions(elem,src){var attr,parent,setOption,options;parent=elem.parentNode,options={isPicture:!(!parent||!regPicture.test(parent.nodeName||""))},setOption=function(attr,run){var attrVal=elem.getAttribute("data-"+attr);if(null!=attrVal){if("true"==attrVal)attrVal=!0;else if("false"==attrVal)attrVal=!1;else if(regNumber.test(attrVal))attrVal=parseFloat(attrVal);else if("function"==typeof riasCfg[attr])attrVal=riasCfg[attr](elem,attrVal);else if(regObj.test(attrVal))try{attrVal=JSON.parse(attrVal)}catch(e){}options[attr]=attrVal}else attr in riasCfg&&"function"!=typeof riasCfg[attr]?options[attr]=riasCfg[attr]:run&&"function"==typeof riasCfg[attr]&&(options[attr]=riasCfg[attr](elem,attrVal))};for(attr in riasCfg)setOption(attr);return src.replace(regPlaceholder,function(full,match){match in options||setOption(match,!0)}),options}function replaceUrlProps(url,options){var candidates=[],replaceFn=function(full,match){return replaceTypes[typeof options[match]]?options[match]:full};return candidates.srcset=[],options.absUrl&&(anchor.setAttribute("href",url),url=anchor.href),url=((options.prefix||"")+url+(options.postfix||"")).replace(regPlaceholder,replaceFn),options.widths.forEach(function(width){var candidate={u:url.replace(regWidth,options.widthmap[width]||width),w:width};candidates.push(candidate),candidates.srcset.push(candidate.c=candidate.u+" "+width+"w")}),candidates}function setSrc(src,opts,elem){src&&(src=replaceUrlProps(src,opts),src.isPicture=opts.isPicture,buggySizes&&"IMG"==elem.nodeName.toUpperCase()?elem.removeAttribute(config.srcsetAttr):elem.setAttribute(config.srcsetAttr,src.srcset.join(", ")),Object.defineProperty(elem,"_lazyrias",{value:src,writable:!0}))}function createAttrObject(elem,src){var opts=getElementOptions(elem,src);return riasCfg.modifyOptions.call(elem,{target:elem,details:opts,detail:opts}),lazySizes.fire(elem,"lazyriasmodifyoptions",opts),opts}function getSrc(elem){return elem.getAttribute(elem.getAttribute("data-srcattr")||riasCfg.srcAttr)||elem.getAttribute(config.srcsetAttr)||elem.getAttribute(config.srcAttr)||elem.getAttribute("data-pfsrcset")||""}if(document.addEventListener){var config,riasCfg,replaceTypes={string:1,number:1},regNumber=/^\-*\+*\d+\.*\d*$/,regPicture=/^picture$/i,regWidth=/\s*\{\s*width\s*\}\s*/i,regPlaceholder=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,regObj=/^\[.*\]|\{.*\}$/,regAllowedSizes=/^(?:auto|\d+(px)?)$/,anchor=document.createElement("a"),img=document.createElement("img"),buggySizes="srcset"in img&&!("sizes"in img),supportPicture=!!window.HTMLPictureElement&&"sizes"in document.createElement("img");!function(){var prop,noop=function(){},riasDefaults={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:noop,widthmap:{}};config=window.lazySizes&&lazySizes.cfg||window.lazySizesConfig,config||(config={},window.lazySizesConfig=config),config.supportsType||(config.supportsType=function(type){return!type}),config.rias||(config.rias={}),riasCfg=config.rias,"widths"in riasCfg||(riasCfg.widths=[],function(widths){for(var width,i=0;!width||3e3>width;)i+=5,i>30&&(i+=1),width=36*i,widths.push(width)}(riasCfg.widths));for(prop in riasDefaults)prop in riasCfg||(riasCfg[prop]=riasDefaults[prop])}(),addEventListener("lazybeforeunveil",function(e){var elem,src,elemOpts,parent,sources,i,len,sourceSrc,sizes,detail,hasPlaceholder,modified,emptyList;if(elem=e.target,!e.defaultPrevented&&!riasCfg.disabled&&(sizes=elem.getAttribute(config.sizesAttr)||elem.getAttribute("sizes"))&&regAllowedSizes.test(sizes)){if(src=getSrc(elem),elemOpts=createAttrObject(elem,src),hasPlaceholder=regWidth.test(elemOpts.prefix)||regWidth.test(elemOpts.postfix),elemOpts.isPicture&&(parent=elem.parentNode))for(sources=parent.getElementsByTagName("source"),i=0,len=sources.length;len>i;i++)(hasPlaceholder||regWidth.test(sourceSrc=getSrc(sources[i])))&&(setSrc(sourceSrc,elemOpts,sources[i]),modified=!0);hasPlaceholder||regWidth.test(src)?(setSrc(src,elemOpts,elem),modified=!0):modified&&(emptyList=[],emptyList.srcset=[],emptyList.isPicture=!0,Object.defineProperty(elem,"_lazyrias",{value:emptyList,writable:!0})),modified&&(supportPicture?elem.removeAttribute(config.srcAttr):"auto"!=sizes&&(detail={width:parseInt(sizes,10)},polyfill({target:elem,detail:detail,details:detail})))}});var polyfill=function(){var ascendingSort=function(a,b){return a.w-b.w},reduceCandidate=function(srces){var lowerCandidate,bonusFactor,len=srces.length,candidate=srces[len-1],i=0;for(i;len>i;i++)if(candidate=srces[i],candidate.d=candidate.w/srces.w,candidate.d>=srces.d){!candidate.cached&&(lowerCandidate=srces[i-1])&&lowerCandidate.d>srces.d-.13*Math.pow(srces.d,2.2)&&(bonusFactor=Math.pow(lowerCandidate.d-.6,1.6),lowerCandidate.cached&&(lowerCandidate.d+=.15*bonusFactor),lowerCandidate.d+(candidate.d-srces.d)*bonusFactor>srces.d&&(candidate=lowerCandidate));break}return candidate},getWSet=function(elem,testPicture){var src;return!elem._lazyrias&&lazySizes.pWS&&(src=lazySizes.pWS(elem.getAttribute(config.srcsetAttr||""))).length&&(Object.defineProperty(elem,"_lazyrias",{value:src,writable:!0}),testPicture&&elem.parentNode&&(src.isPicture="PICTURE"==elem.parentNode.nodeName.toUpperCase())),elem._lazyrias},getX=function(elem){var dpr=window.devicePixelRatio||1,optimum=lazySizes.getX&&lazySizes.getX(elem);return Math.min(optimum||dpr,2.5,dpr)},getCandidate=function(elem,width){var sources,i,len,media,srces,src;if(srces=elem._lazyrias,srces.isPicture&&window.matchMedia)for(i=0,sources=elem.parentNode.getElementsByTagName("source"),len=sources.length;len>i;i++)if(getWSet(sources[i])&&!sources[i].getAttribute("type")&&(!(media=sources[i].getAttribute("media"))||(matchMedia(media)||{}).matches)){srces=sources[i]._lazyrias;break}return(!srces.w||srces.w<width)&&(srces.w=width,srces.d=getX(elem),src=reduceCandidate(srces.sort(ascendingSort))),src},polyfill=function(e){var candidate,elem=e.target;return window.respimage||window.picturefill||lazySizesConfig.pf?void document.removeEventListener("lazybeforesizes",polyfill):void(("_lazyrias"in elem||e.detail.dataAttr&&getWSet(elem,!0))&&(candidate=getCandidate(elem,e.detail.width),candidate&&candidate.u&&elem._lazyrias.cur!=candidate.u&&(elem._lazyrias.cur=candidate.u,candidate.cached=!0,elem.setAttribute(config.srcAttr,candidate.u),elem.setAttribute("src",candidate.u))))};return supportPicture?polyfill=function(){}:document.addEventListener("lazybeforesizes",polyfill),polyfill}()}}(window,document),function(){"use strict";if(window.addEventListener){var regSplitSet=/\s*\|\s+|\s+\|\s*/g,regSource=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,allowedBackgroundSize={contain:1,cover:1},proxyWidth=function(elem){var width=lazySizes.gW(elem,elem.parentNode);return(!elem._lazysizesWidth||width>elem._lazysizesWidth)&&(elem._lazysizesWidth=width),elem._lazysizesWidth},createPicture=function(sets,elem,img){var picture=document.createElement("picture"),sizes=elem.getAttribute(lazySizesConfig.sizesAttr),optimumx=elem.getAttribute("data-optimumx"),bgSize=(getComputedStyle(elem)||{getPropertyValue:function(){}}).getPropertyValue("background-size");!allowedBackgroundSize[bgSize]||"auto"!=sizes&&sizes||(img.setAttribute("data-parent-fit",bgSize),sizes="auto"),elem._lazybgset&&elem._lazybgset.parentNode==elem&&elem.removeChild(elem._lazybgset),Object.defineProperty(img,"_lazybgset",{value:elem,writable:!0}),Object.defineProperty(elem,"_lazybgset",{value:picture,writable:!0}),sets=sets.split(regSplitSet),picture.style.display="none",img.className=lazySizesConfig.lazyClass,1!=sets.length||sizes||(sizes="auto"),sets.forEach(function(set){var source=document.createElement("source");sizes&&"auto"!=sizes&&source.setAttribute("sizes",sizes),set.match(regSource)&&(source.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&source.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),picture.appendChild(source)}),sizes&&(img.setAttribute(lazySizesConfig.sizesAttr,sizes),elem.removeAttribute(lazySizesConfig.sizesAttr),elem.removeAttribute("sizes")),optimumx&&img.setAttribute("data-optimumx",optimumx),picture.appendChild(img),elem.appendChild(picture)},proxyLoad=function(e){if(e.target._lazybgset){var image=e.target,elem=image._lazybgset,bg=image.currentSrc||image.src;bg&&(elem.style.backgroundImage="url("+bg+")"),image._lazybgsetLoading&&(lazySizes.fire(elem,"_lazyloaded",{},!1,!0),delete image._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(e){var set,image,elem;!e.defaultPrevented&&(set=e.target.getAttribute("data-bgset"))&&(elem=e.target,image=document.createElement("img"),image._lazybgsetLoading=!0,e.detail.firesLoad=!0,createPicture(set,elem,image),lazySizes.loader.unveil(image),lazySizes.fire(image,"_lazyloaded",{},!0,!0),setTimeout(function(){image.complete&&proxyLoad({target:image})}))}),document.addEventListener("load",proxyLoad,!0),document.documentElement.addEventListener("lazybeforesizes",function(e){!e.defaultPrevented&&e.target._lazybgset&&(e.detail.width=proxyWidth(e.target._lazybgset))})}}(),function(window){"use strict";var config,elements,onprint,printMedia;window.addEventListener&&(config=window.lazySizes&&lazySizes.cfg||window.lazySizesConfig||{},elements=config.lazyClass||"lazyload",onprint=function(){var i,len;if("string"==typeof elements&&(elements=document.getElementsByClassName(elements)),window.lazySizes)for(i=0,len=elements.length;len>i;i++)lazySizes.loader.unveil(elements[i])},addEventListener("beforeprint",onprint,!1),!("onbeforeprint"in window)&&window.matchMedia&&(printMedia=matchMedia("print"))&&printMedia.addListener&&printMedia.addListener(function(){printMedia.matches&&onprint()}))}(window);var transitionEnd=whichTransitionEvent();!function(root,factory){"function"==typeof define&&define.amd?define([],factory(root)):"object"==typeof exports?module.exports=factory(root):root.smoothScroll=factory(root)}("undefined"!=typeof global?global:this.window||this.global,function(root){"use strict";var settings,eventTimeout,fixedHeader,headerHeight,smoothScroll={},supports=!!root.document.querySelector&&!!root.addEventListener,defaults={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},extend=function(){var extended={},deep=!1,i=0,length=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(deep=arguments[0],i++);for(var merge=function(obj){for(var prop in obj)Object.prototype.hasOwnProperty.call(obj,prop)&&(deep&&"[object Object]"===Object.prototype.toString.call(obj[prop])?extended[prop]=extend(!0,extended[prop],obj[prop]):extended[prop]=obj[prop])};length>i;i++){var obj=arguments[i];merge(obj)}return extended},getHeight=function(elem){return Math.max(elem.scrollHeight,elem.offsetHeight,elem.clientHeight)},getClosest=function(elem,selector){var attribute,value,firstChar=selector.charAt(0),supports="classList"in document.documentElement;for("["===firstChar&&(selector=selector.substr(1,selector.length-2),attribute=selector.split("="),attribute.length>1&&(value=!0,attribute[1]=attribute[1].replace(/"/g,"").replace(/'/g,"")));elem&&elem!==document;elem=elem.parentNode){if("."===firstChar)if(supports){if(elem.classList.contains(selector.substr(1)))return elem}else if(new RegExp("(^|\\s)"+selector.substr(1)+"(\\s|$)").test(elem.className))return elem;if("#"===firstChar&&elem.id===selector.substr(1))return elem;if("["===firstChar&&elem.hasAttribute(attribute[0])){if(!value)return elem;if(elem.getAttribute(attribute[0])===attribute[1])return elem}if(elem.tagName.toLowerCase()===selector)return elem}return null},escapeCharacters=function(id){for(var codeUnit,string=String(id),length=string.length,index=-1,result="",firstCodeUnit=string.charCodeAt(0);++index<length;){if(codeUnit=string.charCodeAt(index),0===codeUnit)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");result+=codeUnit>=1&&31>=codeUnit||127==codeUnit||0===index&&codeUnit>=48&&57>=codeUnit||1===index&&codeUnit>=48&&57>=codeUnit&&45===firstCodeUnit?"\\"+codeUnit.toString(16)+" ":codeUnit>=128||45===codeUnit||95===codeUnit||codeUnit>=48&&57>=codeUnit||codeUnit>=65&&90>=codeUnit||codeUnit>=97&&122>=codeUnit?string.charAt(index):"\\"+string.charAt(index)}return result},easingPattern=function(type,time){var pattern;return"easeInQuad"===type&&(pattern=time*time),"easeOutQuad"===type&&(pattern=time*(2-time)),"easeInOutQuad"===type&&(pattern=.5>time?2*time*time:-1+(4-2*time)*time),"easeInCubic"===type&&(pattern=time*time*time),"easeOutCubic"===type&&(pattern=--time*time*time+1),"easeInOutCubic"===type&&(pattern=.5>time?4*time*time*time:(time-1)*(2*time-2)*(2*time-2)+1),"easeInQuart"===type&&(pattern=time*time*time*time),"easeOutQuart"===type&&(pattern=1- --time*time*time*time),"easeInOutQuart"===type&&(pattern=.5>time?8*time*time*time*time:1-8*--time*time*time*time),"easeInQuint"===type&&(pattern=time*time*time*time*time),"easeOutQuint"===type&&(pattern=1+--time*time*time*time*time),"easeInOutQuint"===type&&(pattern=.5>time?16*time*time*time*time*time:1+16*--time*time*time*time*time),pattern||time},getEndLocation=function(anchor,headerHeight,offset){var location=0;if(anchor.offsetParent)do location+=anchor.offsetTop,anchor=anchor.offsetParent;while(anchor);return location=location-headerHeight-offset,location>=0?location:0},getDocumentHeight=function(){return Math.max(root.document.body.scrollHeight,root.document.documentElement.scrollHeight,root.document.body.offsetHeight,root.document.documentElement.offsetHeight,root.document.body.clientHeight,root.document.documentElement.clientHeight)},getDataOptions=function(options){return options&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(options):{}},updateUrl=function(anchor,url){root.history.pushState&&(url||"true"===url)&&root.history.pushState(null,null,[root.location.protocol,"//",root.location.host,root.location.pathname,root.location.search,anchor].join(""))},getHeaderHeight=function(header){return null===header?0:getHeight(header)+header.offsetTop};smoothScroll.animateScroll=function(toggle,anchor,options){var overrides=getDataOptions(toggle?toggle.getAttribute("data-options"):null),settings=extend(settings||defaults,options||{},overrides);anchor="#"+escapeCharacters(anchor.substr(1));var anchorElem="#"===anchor?root.document.documentElement:root.document.querySelector(anchor),startLocation=root.pageYOffset;fixedHeader||(fixedHeader=root.document.querySelector("[data-scroll-header]")),headerHeight||(headerHeight=getHeaderHeight(fixedHeader));var animationInterval,percentage,position,endLocation=getEndLocation(anchorElem,headerHeight,parseInt(settings.offset,10)),distance=endLocation-startLocation,documentHeight=getDocumentHeight(),timeLapsed=0;updateUrl(anchor,settings.updateURL);var stopAnimateScroll=function(position,endLocation,animationInterval){var currentLocation=root.pageYOffset;(position==endLocation||currentLocation==endLocation||root.innerHeight+currentLocation>=documentHeight)&&(clearInterval(animationInterval),anchorElem.focus(),settings.callback(toggle,anchor))},loopAnimateScroll=function(){timeLapsed+=16,percentage=timeLapsed/parseInt(settings.speed,10),percentage=percentage>1?1:percentage,position=startLocation+distance*easingPattern(settings.easing,percentage),root.scrollTo(0,Math.floor(position)),stopAnimateScroll(position,endLocation,animationInterval)},startAnimateScroll=function(){animationInterval=setInterval(loopAnimateScroll,16)};0===root.pageYOffset&&root.scrollTo(0,0),startAnimateScroll()};var eventHandler=function(event){var toggle=getClosest(event.target,"[data-scroll]");toggle&&"a"===toggle.tagName.toLowerCase()&&(event.preventDefault(),smoothScroll.animateScroll(toggle,toggle.hash,settings))},eventThrottler=function(event){eventTimeout||(eventTimeout=setTimeout(function(){eventTimeout=null,headerHeight=getHeaderHeight(fixedHeader)},66))};return smoothScroll.destroy=function(){settings&&(root.document.removeEventListener("click",eventHandler,!1),root.removeEventListener("resize",eventThrottler,!1),settings=null,eventTimeout=null,fixedHeader=null,headerHeight=null)},smoothScroll.init=function(options){supports&&(smoothScroll.destroy(),settings=extend(defaults,options||{}),fixedHeader=root.document.querySelector("[data-scroll-header]"),headerHeight=getHeaderHeight(fixedHeader),root.document.addEventListener("click",eventHandler,!1),fixedHeader&&root.addEventListener("resize",eventThrottler,!1))},smoothScroll});var extend={object:function(out){out=out||{};for(var i=1;i<arguments.length;i++)if(arguments[i])for(var key in arguments[i])arguments[i].hasOwnProperty(key)&&(out[key]=arguments[i][key]);return out}},alerts={settings:{dismiss:"Dismiss"},options:{type:"bar"},init:function(push_message){if("undefined"!=typeof LANG_MESSAGE_DISMISS&&(this.settings.dismiss=LANG_MESSAGE_DISMISS),"undefined"!=typeof push_message)for(var i=0;i<push_message.length;i++)alerts.addMessage({status:push_message[i].status,content:push_message[i].text,timeout:push_message[i].timeout,type:push_message[i].type});var dismissbutton=document.querySelectorAll("[data-dismiss]");null!==dismissbutton&&Array.prototype.forEach.call(dismissbutton,function(el,i){el.addEventListener("click",alerts.hideNotification,!1)})},addMessage:function(options){var message_element;extend.object(alerts.options,options),message_element=document.createElement("div"),("bar"===alerts.options.type||"undefined"==typeof alerts.options.type)&&(message_element.className="Alert Alert--bar Alert--"+alerts.options.status+" js-alert",message_element.setAttribute("data-element-type","bar"),message_element.innerHTML='<div class="Alert-message">'+alerts.options.content+'</div><button type="button" class="Alert-close" data-dismiss="Alert" aria-hidden="true" role="presentation">&times;</button>',document.body.insertBefore(message_element,document.body.firstChild)),"modal"===alerts.options.type&&(backdrop_element=document.createElement("div"),backdrop_element.className="Backdrop js-backdrop",message_element.className="Alert Alert--modal Alert--"+alerts.options.status+" js-alert",message_element.setAttribute("data-element-type","modal"),message_element.innerHTML='<div class="Alert-message">'+alerts.options.content+'</div><button class="Button Button--primary" data-dismiss="Alert">'+this.settings.dismiss+"</button>",document.body.appendChild(backdrop_element),document.body.appendChild(message_element)),this.showNotification(message_element),"undefined"!=typeof alerts.options.timeout&&0!==alerts.options.timeout&&setTimeout(function(){alerts.onTimeoutNotification(message_element)},alerts.options.timeout)},showNotification:function(element){var notification=element;if(setTimeout(function(){notification.classList.add("is-visible")},10),"modal"===alerts.options.type){var backdrops=document.querySelectorAll(".Backdrop");Array.prototype.forEach.call(backdrops,function(el,i){el.classList.add("is-visible")})}},hideNotification:function(event){var notification=event.target.parentNode;if(notification.classList.remove("is-visible"),notification.classList.remove("is-hidden"),"modal"===alerts.options.type){var backdrop=document.querySelector(".Backdrop");backdrop.classList.remove("is-visible"),backdrop.classList.add("is-hiding")}var notificationHasTransformSet=null,notificationHasWebkitTransformSet=null;return window.getComputedStyle&&(notificationHasTransformSet=window.getComputedStyle(notification,null).getPropertyValue("transform"),notificationHasWebkitTransformSet=window.getComputedStyle(notification,null).getPropertyValue("-webkit-transform")),Modernizr.csstransitions&&"none"!==notificationHasTransformSet&&"none"!==notificationHasWebkitTransformSet?notification.addEventListener(transitionEnd,function(){alerts.removeNotificationElements(this)},!1):alerts.removeNotificationElements(notification),!1},removeNotificationElements:function(element){var elementtype=element.getAttribute("data-element-type");if(element.parentNode.removeChild(element),"modal"===elementtype){var backdrop=document.querySelector(".Backdrop");backdrop.parentNode.removeChild(backdrop)}},onTimeoutNotification:function(element){var dismiss=element.querySelector("[data-dismiss]");clickevent=document.createEvent("HTMLEvents"),clickevent.initEvent("click",!0,!1),dismiss.dispatchEvent(clickevent)}},cookie={set:function(name,value,days){var expires;if(days){var date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3),expires="; expires="+date.toGMTString()}else expires="";document.cookie=name+"="+value+expires+"; path=/"},erase:function(name){cookie.set(name,"",-1)},get:function(name){for(var nameEQ=name+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length)}return null}},domparents={findAncestorByClass:function(el,cls){for(;(el=el.parentElement)&&!el.classList.contains(cls););return el},findAncestorByElement:function(el,elname){for(;el=el.parentElement;)if(el.nodeName.toLowerCase()==elname.toLowerCase())return el;throw"no ancestor found with that element type. Try checking your DOM tree!"}},expand={init:function(){var expanders=document.querySelectorAll(".js-expandtarget");for(i=0;i<expanders.length;i++){var expanderid=expanders[i].getAttribute("id");cookie.get(expanderid)?(expanders[i].parentNode.classList.add("is-open"),expanders[i].parentNode.querySelector(".js-expandbutton").classList.add("is-active")):expanders[i].parentNode.classList.add("is-closed")}var expandbuttons=document.querySelectorAll(".js-expandbutton");for(i=0;i<expandbuttons.length;i++)expandbuttons[i].addEventListener("click",expand.toggle,!1)},toggle:function(event){event.preventDefault();var button=event.target,targetid=button.getAttribute("href"),cookieid=targetid.substring(1),target=document.querySelector(targetid),expandparent=target.parentNode;expandparent.classList.contains("is-closed")?(button.classList.add("is-active"),expandparent.classList.remove("is-closed"),expandparent.classList.add("is-open"),
cookie.set(cookieid,"open")):(button.classList.remove("is-active"),expandparent.classList.remove("is-open"),expandparent.classList.add("is-closed"),cookie.erase(cookieid))}},lazysizes={init:function(){document.addEventListener("lazyriasmodifyoptions",function(e){e.detail.quality=(window.devicePixelRatio||1)>1.4?65:60}),document.addEventListener("lazybeforeunveil",function(e){var srcAttr="data-src",src=e.target.getAttribute(srcAttr);(src||(srcAttr="data-bgset",src=e.target.getAttribute(srcAttr)))&&e.target.setAttribute(srcAttr,src.replace(/s=w(\d+)/,"s=w{width}").replace(/o=(\d+)/,"o={quality}"))})}},navMain={elements:{banner:document.querySelector(".Banner"),html:document.querySelector("html"),navEl:document.querySelector(".js-navMain")},init:function(type){var navMainShow=document.querySelector(".js-navMainShow"),navMainHide=document.querySelector(".js-navMainHide");navMain.elements.navEl=document.querySelector(".js-navMain"),"undefined"!=typeof navMain.elements.navEl&&null!==navMain.elements.navEl&&"undefined"!=typeof navMainShow&&null!==navMainShow&&(navMainShow.addEventListener("click",navMain.open,!1),navMainHide.addEventListener("click",navMain.close,!1))},setNavHandlers:function(){document.addEventListener("keyup",navMain.handleNavClick,!1)},unsetNavHandlers:function(){document.removeEventListener("keyup",navMain.handleNavClick,!1)},handleNavClick:function(event){var target=event.target;(target.classList.contains("js-navMain")||27===event.keyCode)&&navMain.close(event)},open:function(event){event.preventDefault(),navMain.elements.html.classList.add("is-openMainNav"),navMain.setNavHandlers()},close:function(event){event.preventDefault(),navMain.elements.navEl.addEventListener(transitionEnd,function endTransitionNavClose(){navMain.elements.html.classList.remove("is-closingMainNav"),navMain.elements.html.classList.remove("is-openMainNav"),this.removeEventListener(transitionEnd,endTransitionNavClose,!1)},!1),navMain.elements.html.classList.add("is-closingMainNav"),navMain.unsetNavHandlers()}};domready(function(){lazysizes.init(),alerts.init(push_message),expand.init(),navMain.init()});
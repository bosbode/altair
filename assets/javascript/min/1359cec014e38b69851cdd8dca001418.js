/**
 * Altair — A Sass and Grunt-based front-end starter kit built on top of file-based Kirby CMS v2. — v0.2.8 — 2014-10-28
 * http://altair.studiodumbar.info
 * Copyright (c) 2014 Studio Dumbar
 */
!function(window,undefined){"use strict";function loadJS(src){var ref=window.document.getElementsByTagName("script")[0],script=window.document.createElement("script");return script.src=src,script.async=!0,ref.parentNode.insertBefore(script,ref),script}function loadCSS(href,before,media){function toggleMedia(){for(var defined,i=0;i<sheets.length;i++)sheets[i].href&&sheets[i].href.indexOf(href)>-1&&(defined=!0);defined?ss.media=media||"all":setTimeout(toggleMedia)}var ss=window.document.createElement("link"),ref=before||window.document.getElementsByTagName("script")[0],sheets=window.document.styleSheets;return ss.rel="stylesheet",ss.href=href,ss.media="only x",ref.parentNode.insertBefore(ss,ref),toggleMedia(),ss}function getMeta(metaname){for(var meta,metas=window.document.getElementsByTagName("meta"),i=0;i<metas.length;i++)if(metas[i].name&&metas[i].name===metaname){meta=metas[i];break}return meta}function cookie(name,value,days){if(value===undefined){var cookiestring="; "+window.document.cookie,cookies=cookiestring.split("; "+name+"=");return 2==cookies.length?cookies.pop().split(";").shift():null}if(value===!1&&(days=-1),days){var date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3);var expires="; expires="+date.toGMTString()}else var expires="";window.document.cookie=name+"="+value+expires+"; path=/"}function ctm(){return"querySelector"in doc&&"localStorage"in window&&"addEventListener"in window?!0:!1}window.enhance={};var doc=window.document,docElem=doc.documentElement,fullCSSKey=(doc.head||doc.getElementsByTagName("head")[0],"fullcss"),fullJSKey="fulljs",fontsKey="fonts",htmlClasses=["enhanced","ctm"];enhance.loadJS=loadJS,enhance.loadCSS=loadCSS,enhance.getMeta=getMeta,enhance.cookie=cookie;var fullCSS=getMeta(fullCSSKey);if(fullCSS&&!cookie(fullCSSKey)&&(loadCSS(fullCSS.content),cookie(fullCSSKey,"true",7)),enhance.ctm=ctm,ctm()){docElem.className+=" "+htmlClasses.join(" ");var fullJS=getMeta(fullJSKey);fullJS&&loadJS(fullJS.content);var fonts=getMeta(fontsKey);fonts&&loadCSS(fonts.content)}}(this),function(){var d=!1,r=document.createElement("script");r.src="//use.resrc.it/0.9",r.type="text/javascript",r.async="true",r.onload=r.onreadystatechange=function(){var rs=this.readyState;if(!(d||rs&&"complete"!=rs&&"loaded"!=rs)){d=!0;try{resrc.ready(function(){"undefined"==typeof custom_resrc?resrc.run():resrc.configure(custom_resrc).run()})}catch(e){}}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(r,s)}();
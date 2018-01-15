/* Vizoo - v0.1.0 - http://vizoo.online - Wallace Rio <wallrio@gmail.com> */
!function(t){var e={};e.config={},e.animateScroll=function(t,e,o,n){Math.easeInOutQuad=function(t,e,o,n){return(t/=n/2)<1?o/2*t*t+e:-o/2*(--t*(t-2)-1)+e};var i=function(t,e,o,n,r){if("BODY"==t.tagName||t==document)var c=window.scrollY;else c=t.scrollTop;var a=e-c;n+=20;var l=Math.easeInOutQuad(n,c,a,o);return"BODY"==t.tagName||t==document?window.scrollTo(0,l):t.scrollTop=l,n<o?setTimeout(function(){i(t,e,o,n,r)},20):r&&r(),!1};i(t,e,o,0,n)},e.offset=function(t){var e=t.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+n,left:e.left+o}},e.getSectionMain=function(t){return void 0!=t.getAttribute("data-vizoo-section")?t:e.getSectionMain(t.parentNode)},e.makeHtml=function(){for(var o=document.querySelectorAll("section[data-vizoo-section-attr]"),n=null,i=0;i<o.length;i++){var r=o[i],c=r.getAttribute("data-vizoo-section-attr");if((c=t.string.stringToObject(c)).height==window||"window"==c.height){var a=vizoo.browser.size().height;r.offsetHeight,r.offsetTop;null==n&&(n=e.offset(e.getSectionMain(r)).top),a>r.offsetHeight&&(r.style.height=a-n+"px")}}},e.monitor=function(){for(var t=document.querySelectorAll("[data-vizoo-section]"),o=0;o<t.length;o++){var n=t[o];e.setLinkNavAction(n),1!=n.dataDesignSectionInit&&(n.dataDesignSectionInit=1,function(t){setTimeout(function(){e.scroll(null,t)},100)}(n))}setTimeout(function(){e.monitor()},1e3)},e.menuActionList={},e.menuAction=function(t,o){e.menuActionList[t]=o},e.setAttr=function(){for(var o=document.querySelectorAll("[data-vizoo-section]"),n=0;n<o.length;n++){var i=o[n];if(1!=i.designSectionInit){i.designSectionInit=1;var r=i.getAttribute("data-vizoo-section"),c=i.getAttribute("data-vizoo-section-attr");if(void 0==e.config[r]&&(e.config[r]={transition:200,offsetTop:0,marginTop:0}),null!=c){c=t.string.stringToObject(c);for(key in c)e.config[r][key]=c[key];e.setupSection(e.config)}}}},e.setupSection=function(e){for(key in e)for(var o=key,n=document.querySelectorAll('[data-vizoo-section="'+o+'"]'),i=e[key],r=0;r<n.length;r++){var c=n[r];i.height==window?(c.style.height=t.browser.size().height+"px",vizoo.addEvent(window,"resize",function(e,o){o.style.height=t.browser.size().height+"px"},null,c)):"string"==typeof i.height?(c.style.height=i.height,vizoo.addEvent(window,"resize",function(t,e,o){e.style.height=o.height},null,c,i)):(c.style.height=i.height+"px",vizoo.addEvent(window,"resize",function(t,e,o){e.style.height=o.height+"px"},null,c,i))}},e.setLinkNavAction=function(t){for(var o=document.querySelectorAll("[data-section-target]"),n=0;n<o.length;n++){var i=o[n];1!=i.sectionInit&&(e.makeHtml(),i.sectionInit=1),e.setAttr(),i.onclick=function(){for(var t=this.getAttribute("data-for"),o=this.getAttribute("data-section-target").split(","),n=0;n<o.length;n++){var i=o[n],r=document.querySelectorAll('[data-vizoo-section="'+i+'"]'),c=document.querySelector('[data-vizoo-section="'+i+'"]  section#'+t);if(null==c)return console.log('element ( [data-vizoo-section="'+i+'"]  section#'+t+" ) not found"),!1;for(var a=0;a<r.length;a++){for(var l=r[a],s=l.querySelectorAll("section"),u=0,f=0;f<s.length;f++)u+=s[f].offsetHeight;l.offsetHeight>u&&(l=document.querySelector("body"));var d=e.config[i].transition,g=e.config[i].marginTop;e.animateScroll(l,c.offsetTop-l.offsetTop+g,d,function(){if(void 0!=e.menuActionList[i]){var t=e.menuActionList[i];void 0!=t&&t()}})}}}}},e.scroll=function(t,o){if(null!=t)var n=t.target;else n=o;if(beforeElement=n,n==document&&(n=window),void 0!=n.scrollY){var i=window.scrollY;n=window.body}else i=n.scrollTop;e.checkScroll(beforeElement,i)},e.findSectionContainerParent=function(t){return void 0==t.getAttribute("data-vizoo-section")?e.findSectionContainerParent(t.parentNode):t},e.checkScroll=function(t,o){if(void 0==t)return!1;if("BODY"==t.tagName||t==document)var n=document.querySelector("body").getAttribute("data-vizoo-section"),i=document.querySelectorAll("section");else n=t.getAttribute("data-vizoo-section"),i=document.querySelectorAll('[data-vizoo-section="'+n+'"]  section');if(null==n)return!1;for(var r=0;r<i.length;r++){var c=i[r],a=e.findSectionContainerParent(c),l=c.offsetTop-a.offsetTop,s=c.offsetTop+c.offsetHeight-a.offsetTop;a.offsetHeight;Number(c.offsetHeight);var u=e.config[n].offsetTop;if(o+vizoo.browser.size().height/4>=l-u&&o<=s||o>=t.scrollHeight-t.clientHeight){var f=a.getAttribute("data-vizoo-section"),d=c.getAttribute("id");e.setLinkNavActive(f,d)}}},e.setLinkNavActive=function(t,e){for(var o=document.querySelectorAll("[data-section-target]"),n=0;n<o.length;n++){var i=o[n].getAttribute("data-section-target");if(o[n].removeAttribute("data-status"),-1!=i.indexOf(t)){o[n].getAttribute("data-for")==e&&o[n].setAttribute("data-status","active");for(var r=document.querySelectorAll('[data-vizoo-section="'+t+'"]  section'),c=0;c<r.length;c++)r[c].removeAttribute("data-status");var a=document.querySelectorAll('[data-vizoo-section="'+t+'"]  section#'+e);for(c=0;c<a.length;c++)a[c].setAttribute("data-status","active")}}var l=document.querySelectorAll("[data-section-autoattr]");for(n=0;n<l.length;n++)l[n].setAttribute("data-section-autoattr-foractive",e)},e.__construct=function(){t.addEvent(window,"scroll",function(t,o){e.scroll(t)},null,window),t.addEvent(window,"resize",function(t,o){e.makeHtml()},null,window),t.addEvent(document,"load",function(t,o){e.makeHtml()},null,window),e.monitor()},e.__construct(),t.plugins.section=e}(vizoo);
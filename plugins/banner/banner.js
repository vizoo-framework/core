/* Vizoo - v1.0.0 - http://vizoo.online - Wallace Rio <wallrio@gmail.com> */
!function(t){var e=this;e.parameters={},e.count=0,e.monitorProgress=null,e.monitor=function(){for(var t=document.querySelectorAll("[data-vizoo-banner]"),r=0;r<t.length;r++){var a=t[r];1!=a.designbannerinit&&(a.designbannerinit=1,e.make(a))}setTimeout(function(){e.monitor()},500)},e.make=function(r){if(e.count=e.count+1,void 0!=r.id&&""!=r.id||(r.id="designbanner_"+e.count),void 0==r.getAttribute("data-vizoo-banner-attr"))var a="";else a=""+r.getAttribute("data-vizoo-banner-attr");a=t.string.stringToObject(a),r.attr=a;var o=r.querySelector("[data-vizoo-banner-tabs]"),n=r.querySelector("[data-vizoo-banner-contents]"),i=o.querySelector('[data-for][data-status="active"]');if(null==i)o.querySelector("[data-for]:first-child").setAttribute("data-status","active"),r.querySelector("[data-vizoo-banner-contents] > div:first-child").setAttribute("data-status","active");else{var s=i.getAttribute("data-for");n.querySelector("#"+s).setAttribute("data-status","active")}e.makeHtml(r),t.addEvent(window,"resize",function(t,r){e.makeHtml(r)},null,r),e.action(r),e.defineParameters(a,r),e.progressStepStart(r)},e.fGetOffSetParent=function(t){function e(t,e){try{return t.currentStyle?t.currentStyle[e]:window.getComputedStyle(t)[e]}catch(t){return null}}for(var r=t.offsetParent||document.body;r&&r.tagName&&r!=document.body&&"static"==e(r,"position");)r=r.offsetParent;return r},e.makeHtml=function(e){e.attr.height,t.browser.size().height,e.offsetHeight},e.defineParameters=function(t,r){e.parameters.transition=t.transition||5e3,e.parameters.delay=t.delay||1e3},e.progressStepStart=function(t){if(1!=t.attr.auto)return!1;var r=t.querySelector("[data-vizoo-banner-progress]");t.querySelector("[data-vizoo-banner-progress] > span").style.transition=e.parameters.transition+"ms",r.removeAttribute("data-status"),r.setAttribute("data-status","complete"),e.monitorProgress=setInterval(function(){var r=t.querySelector("[data-vizoo-banner-progress]"),a=t.querySelector("[data-vizoo-banner-progress] > span"),o=r.offsetWidth;a.offsetWidth>=o&&(clearInterval(e.monitorProgress),e.progressStepFinish(t))},300)},e.progressStepFinish=function(t){var r=t.querySelector("[data-vizoo-banner-progress]");t.querySelector("[data-vizoo-banner-progress] > span").style.transition="0ms",r.removeAttribute("data-status"),e.nextTab(t)},e.resetProgress=function(t,r){clearInterval(e.monitorProgress);var a=document.querySelector("[data-vizoo-banner]#"+t),o=a.querySelector("[data-vizoo-banner-progress]");a.querySelector("[data-vizoo-banner-progress] > span").style.transition="0ms",o.removeAttribute("data-status"),setTimeout(function(){e.progressStepStart(a)},300)},e.nextTab=function(t){for(var r=t.id,a=document.querySelectorAll("[data-vizoo-banner]#"+r+" > [data-vizoo-banner-tabs] > [data-for]"),o=0;o<a.length;o++)if("active"==a[o].getAttribute("data-status")){if(void 0!=a[o+1])var n=a[o+1].getAttribute("data-for");else n=a[0].getAttribute("data-for");return setTimeout(function(){e.progressStepStart(t)},e.parameters.delay),e.setActive(r,n),!1}},e.action=function(t){for(var r=t.querySelectorAll("[data-vizoo-banner-tabs] > li"),a=0;a<r.length;a++){var o=r[a];o.rootid=t.id,o.onclick=function(t){var r=this.rootid,a=this.getAttribute("data-for");e.resetProgress(r,a),e.setActive(r,a)}}},e.offset=function(t){var e=t.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,a=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+a,left:e.left+r}},e.getSectionMain=function(t){return void 0!=t.getAttribute("data-vizoo-section")?t:e.getSectionMain(t.parentNode)},e.setActive=function(t,e){for(var r=document.querySelectorAll("[data-vizoo-banner]#"+t+" > [data-vizoo-banner-tabs] > [data-for]"),a=0;a<r.length;a++)r[a].removeAttribute("data-status");var o=document.querySelectorAll("[data-vizoo-banner]#"+t+" > [data-vizoo-banner-contents] > div");for(a=0;a<o.length;a++)o[a].removeAttribute("data-status");document.querySelector("[data-vizoo-banner]#"+t+" > [data-vizoo-banner-contents] > div#"+e);document.querySelector("[data-vizoo-banner]#"+t+" > [data-vizoo-banner-tabs] > [data-for="+e+"]").setAttribute("data-status","active"),document.querySelector("[data-vizoo-banner]#"+t+" > [data-vizoo-banner-contents] > div#"+e).setAttribute("data-status","active")},e.openTab=function(t,r){e.resetProgress(t,r),e.setActive(t,r)},e.__construct=function(){e.monitor()},e.__construct(),t.plugins.banner=e}(vizoo);
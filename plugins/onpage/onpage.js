/* Vizoo - 0.0.1 - vizoo.online -  Wallace Rio <wallrio@gmail.com> - wallrio.com */
!function(e){var t={},o={count:0};t.dependence={list:["essentials"],status:null},t.position={status:null,start:{},move:{},end:{}},t.getContent=function(t,o){e.ajax({url:t,success:function(e){o&&o(e)}})},t.createWidget=function(a){var r=document.createElement("div"),n=document.querySelector("body"),i=e.string.stringToObject(a.attr),s="_vizoo-onpage_"+o.count,u="";o.count=o.count+1,r.id=s,r.setAttribute("data-vizoo-onpage-container",""),r.setAttribute("data-vizoo-onpage-breakpoint",""),null!=i.title&&void 0!=i.title&&(u=i.title),null!=i.class&&void 0!=i.class&&(r.className=i.class),r.innerHTML="<div data-vizoo-onpage-wrapper ><div data-vizoo-onpage-header><a> ‹ Voltar</a><label>"+u+"</label></div><div data-vizoo-onpage-body>"+a.innerHTML+"</div>",n.appendChild(r);return r.querySelector("[data-vizoo-onpage-container]#"+s+" > [data-vizoo-onpage-wrapper]").style.setProperty("-webkit-transition","all 0s linear"),r.querySelector("[data-vizoo-onpage-container]#"+s+" > [data-vizoo-onpage-wrapper]").style.transform="translateX(200%) ",r.querySelector("[data-vizoo-onpage-container]#"+s+" > [data-vizoo-onpage-wrapper]").style["-webkit-transform"]="translateX(200%) ",r.querySelector("[data-vizoo-onpage-container]#"+s+" > [data-vizoo-onpage-wrapper] [data-vizoo-onpage-header] > a").onclick=function(){t.close(r.id)},r},t.monitorTag=function(){for(var o=document.querySelectorAll("[data-vizoo-onpage]"),a=0;a<o.length;a++){var r=o[a];if(1!=r.designOnPageInit){r.designOnPageInit=1;r.innerHTML;var n=r.getAttribute("data-vizoo-onpage"),i=r.getAttribute("data-vizoo-onpage-attr");r.url=n,r.attr=i,r.onclick=function(){var o=this.url;if(1!==this.init){var a=t.createWidget(this);this.init=1,this.containerId=a}else a=this.containerId;var r=e.string.stringToObject(this.attr),n=this;if(null!=r.clousure&&void 0!=r.clousure&&1==r.clousure){var i=a.id;if(this.setAttribute("data-vizoo-onpage-id",i),void 0!=n.querySelector("[data-vizoo-onpage-loading-button]"))return!1;a.querySelector("[data-vizoo-onpage-body]").innerHTML='<iframe data-vizoo-onpage-iframe src="'+o+'" data-vizoo-onpage-iframe  ></iframe>',this.innerHTML=this.innerHTML+"<div data-vizoo-onpage-loading-button></div>",a.querySelector("[data-vizoo-onpage-body] > iframe").onload=function(){t.open(i,n),t.effectiveTouch("#"+i),n.removeChild(n.querySelector("[data-vizoo-onpage-loading-button]"))}}else{i=a.id;this.setAttribute("data-vizoo-onpage-id",i),t.getContent(o,function(e){a.querySelector("[data-vizoo-onpage-body]").innerHTML=e;var o=a.id;t.open(o,n),t.effectiveTouch("#"+o)})}}}}setTimeout(function(){t.monitorTag()},1e3)},t.open=function(t,o){var a=e.browser.size().width,r="[data-vizoo-onpage-container]#"+t,n=document.querySelector('[data-vizoo-onpage][data-vizoo-onpage-id="'+t+'"]');if(null!=n.attr)var i=e.string.stringToObject(n.attr);else i={};var s=30;!1!==i["opened-left"]&&void 0!=i["opened-left"]&&(-1!==(s=i["opened-left"]).indexOf("%")&&(s=a/100*s.replace("%","")));document.querySelector(r+" > [data-vizoo-onpage-wrapper]").offsetWidth;var u=s;posXString=u+"px",document.querySelector(r).style["z-index"]="1000",document.querySelector(r+" > [data-vizoo-onpage-wrapper]").style.setProperty("-webkit-transition","all 0.6s cubic-bezier(0.000, 1.025, 0.295, 0.960)"),document.querySelector(r+" > [data-vizoo-onpage-wrapper]").style.transform="translateX("+posXString+") ",document.querySelector(r+" > [data-vizoo-onpage-wrapper]").style.width=a-u+"px",document.querySelector("body").getAttribute("data-styleBeforeOverflow",document.querySelector("body").style.overflow),document.querySelector("body").style.overflow="hidden",document.querySelector(r).setAttribute("data-status","show")},t.close=function(t){var o="[data-vizoo-onpage-container]#"+t,a=(document.querySelector(o+" > [data-vizoo-onpage-wrapper]").offsetWidth,e.browser.size().width);document.querySelector(o+" > [data-vizoo-onpage-wrapper]").style.setProperty("transition","all 0.6s cubic-bezier(0.000, 1.025, 0.295, 0.960)"),document.querySelector(o+" > [data-vizoo-onpage-wrapper]").style.setProperty("-webkit-transition","all 0.6s cubic-bezier(0.000, 1.025, 0.295, 0.960)"),document.querySelector(o+" > [data-vizoo-onpage-wrapper]").style.transform="translateX("+a+"px) ",document.querySelector(o+" > [data-vizoo-onpage-wrapper]").style["-webkit-transform"]="translateX("+a+"px) ",setTimeout(function(){document.querySelector(o).removeAttribute("data-status"),document.querySelector("body").style.overflow=document.querySelector("body").getAttribute("data-styleBeforeOverflow")},300)},t.effectiveTouch=function(o){t.touch("vizoo-onpage",o,{callback:function(){},start:function(e,a,r,n,i){var s="[data-vizoo-onpage-container]"+o;t.position.status="start",t.position.start={x:a,y:r},t.position.current={x:t.getTranslate(document.querySelector(s+" > [data-vizoo-onpage-wrapper]")).x,y:t.getTranslate(document.querySelector(s+" > [data-vizoo-onpage-wrapper]")).y},document.querySelector(s+" > [data-vizoo-onpage-wrapper]").style.setProperty("-webkit-transition","all 0s linear")},move:function(e,a,r,n,i){var s="[data-vizoo-onpage-container]"+o;t.position.status="moving";var u=n.startDirection,c=(document.querySelector(s+"> [data-vizoo-onpage-wrapper]").offsetWidth,a-t.position.start.x+t.position.current.x);t.position.start.y,t.position.current.y,t.position.start.x,t.position.current.x;if(posXstring=c+"px","px","moving"==t.position.status)if("right"==u)document.querySelector(s+" > [data-vizoo-onpage-wrapper]").style.transform="translateX("+posXstring+") ",document.querySelector(s+" > [data-vizoo-onpage-wrapper]").style["-webkit-transform"]="translateX("+posXstring+") ";else{if(c<=30)return;document.querySelector(s+" > [data-vizoo-onpage-wrapper]").style.transform="translateX("+posXstring+") ",document.querySelector(s+" > [data-vizoo-onpage-wrapper]").style["-webkit-transform"]="translateX("+posXstring+") "}e.preventDefault()},end:function(a,r,n,i,s){var u=e.browser.size().width;i.startDirection;t.position.status="end";document.querySelector(o+" > [data-vizoo-onpage-wrapper]").offsetWidth;var c=r-t.position.start.x+t.position.current.x;t.position.start.y,t.position.current.y;c>u/2?t.close(o.replace("#","")):t.open(o.replace("#",""))}})},t.getBreakPointParent=function(e){return"string"==typeof e&&(e=document.querySelector(e)),null!=e.getAttribute("data-vizoo-onpage-breakpoint")?e:t.getBreakPointParent(e.parentNode)},t.getTranslate=function(e){var t=window.getComputedStyle(e),o=new WebKitCSSMatrix(t.webkitTransform);return{x:o.m41,y:o.m42,z:o.m43}},e.ready(function(){e.plugin.require(t.dependence.list,function(){t.touch=e.plugins.essentials.touch,t.dependence.status="success",t.monitorTag()})}),e.plugins.onpage=t}(vizoo);
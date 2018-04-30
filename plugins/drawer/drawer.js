/* Vizoo - v0.1 - http://vizoo.online - Wallace Rio <wallrio@gmail.com> */
!function(t){var e=function(){};e.open=function(e,i){var r=document.querySelector('[data-vizoo-drawer][id="'+i+'"]'),a=document.querySelector('[data-vizoo-drawer][id="'+i+'"] > [data-vizoo-drawer-container]'),o=document.querySelector('[data-vizoo-drawer][id="'+i+'"] > [data-vizoo-drawer-painel-left]'),s=document.querySelector('[data-vizoo-drawer][id="'+i+'"] > [data-vizoo-drawer-painel-right]'),n=r.getAttribute("data-attr"),d=(n=t.string.stringToObject(n)).widthopened||"80%";n.areatouchx,n.limitx;if(-1!=String(d).indexOf("px")){var l="pixel";d=Number(d.replace("px",""))}else if(-1!=String(d).indexOf("%")){l="porcent";d=Number(d.replace("%",""))}else{l="pixel";d=Number(d)}if("pixel"==l)var c=d;else c=a.offsetWidth/100*d;"right"==e?(c=-c,a.drawer.status="right-opened",o.css({visibility:"hidden"}),s.css({visibility:"visible"}),s.style.width=-c+"px"):(a.drawer.status="left-opened",o.css({visibility:"visible"}),s.css({visibility:"hidden"}),o.style.width=c+"px"),a.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+c+"px)"})},e.close=function(t){document.querySelector('[data-vizoo-drawer][id="'+t+'"]');var e=document.querySelector('[data-vizoo-drawer][id="'+t+'"] > [data-vizoo-drawer-container]');if(null==e)return!1;e.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX(0px)"}),e.drawer.status="closed"},e.monitor=function(){document.querySelectorAll("[data-vizoo-drawer-open-toggle-right]").map(function(i,r){if(1==this.drawerButtonInit)return!1;this.drawerButtonInit=!0,t.addEvent(this,"click touchend",function(t){var i=this.getAttribute("data-vizoo-drawer-open-toggle-right"),r=document.querySelector('[data-vizoo-drawer][id="'+i+'"] > [data-vizoo-drawer-container]');return 1!=r.drawer.moving&&(r.drawer.action="click","closed"==r.drawer.status?e.open("right",i):e.close(i),t.stopPropagation(),t.preventDefault(),!1)})}),document.querySelectorAll("[data-vizoo-drawer-open-toggle-left]").map(function(i,r){if(1==this.drawerButtonInit)return!1;this.drawerButtonInit=!0,t.addEvent(this,"click touchend",function(t){var i=this.getAttribute("data-vizoo-drawer-open-toggle-left"),r=document.querySelector('[data-vizoo-drawer][id="'+i+'"] > [data-vizoo-drawer-container]');return 1!=r.drawer.moving&&(r.drawer.action="click","closed"==r.drawer.status?e.open("left",i):e.close(i),t.stopPropagation(),t.preventDefault(),!1)},!0)}),document.querySelectorAll("[data-vizoo-drawer-open-right]").map(function(i,r){if(1==this.drawerButtonInit)return!1;this.drawerButtonInit=!0,t.addEvent(this,"click touchend",function(t){elementContainer.drawer.action="click";var i=this.getAttribute("data-vizoo-drawer-open-right");e.open("right",i)})}),document.querySelectorAll("[data-vizoo-drawer-open-left]").map(function(i,r){if(1==this.drawerButtonInit)return!1;this.drawerButtonInit=!0,t.addEvent(this,"click touchend",function(t){var i=this.getAttribute("data-vizoo-drawer-open-left");e.open("left",i)})}),document.querySelectorAll("[data-vizoo-drawer-close]").map(function(i,r){if(1==this.drawerButtonInit)return!1;this.drawerButtonInit=!0,t.addEvent(this,"mouseup",function(t){var i=this.getAttribute("data-vizoo-drawer-close");e.close(i),t.preventDefault(),t.stopPropagation()})}),document.querySelectorAll("[data-vizoo-drawer]").map(function(i,r){if(1==this.initMove)return!1;this.initMove=1,this.setAttribute("data-id",r);var a=this.getAttribute("data-attr"),o=(a=t.string.stringToObject(a)).widthopened||"80%",s=a.areatouchx||"80%",n=a.limitx||"20%",d=!0;if(!1===a.enabledOnDesktop&&(d=!1),-1!=String(o).indexOf("px")){var l="pixel";o=Number(o.replace("px",""))}else if(-1!=String(o).indexOf("%")){l="porcent";o=Number(o.replace("%",""))}else{l="pixel";o=Number(o)}if(-1!=String(n).indexOf("px")){var c="pixel";n=Number(n.replace("px",""))}else if(-1!=String(n).indexOf("%")){c="porcent";n=Number(n.replace("%",""))}else{c="pixel";n=Number(n)}if(-1!=String(s).indexOf("px")){var u="pixel";s=Number(s.replace("px",""))}else if(-1!=String(s).indexOf("%")){u="porcent";s=Number(s.replace("%",""))}else{u="pixel";s=Number(s)}var f=document.querySelector('[data-vizoo-drawer][data-id="'+r+'"] > [data-vizoo-drawer-container]'),h=document.querySelector('[data-vizoo-drawer][data-id="'+r+'"] > [data-vizoo-drawer-painel-left]'),p=document.querySelector('[data-vizoo-drawer][data-id="'+r+'"] > [data-vizoo-drawer-painel-right]');if(f.drawer={status:"closed",moving:!1},null===navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i))return!1;e.touch(f,{movey:!1,useCapture:!0,start:function(t,e,i,r,a,n,c){if(this.drawer.moving=!1,vizoo.browser.size().width>=1024&&!1===d)return this.movex=!1,!1;if(this.css({transition:"0ms"}),"pixel"==u){var f=r;if(0==n&&f>s&&f<this.offsetWidth-s)return this.movex=!1,!1}else{f=r/this.offsetWidth*100;if(0==n&&f>s&&f<100-s)return this.movex=!1,!1}if(this.movex=!0,"pixel"==l)var v=o;else v=this.offsetWidth/100*o;h.css({width:v+"px"}),p.css({width:v+"px"}),t.stopPropagation()},move:function(t,e,i,r,a,s,n,d){if(t.preventDefault(),"pixel"==l)var c=o;else c=this.offsetWidth/100*o;s>c&&h.css({width:s+"px"}),this.offsetWidth-(s+this.offsetWidth)>c&&p.css({width:this.offsetWidth-(s+this.offsetWidth)+"px"}),this.drawer.action="",this.drawer.moving=!0,s>0?(h.css({visibility:"visible"}),p.css({visibility:"hidden"})):(h.css({visibility:"hidden"}),p.css({visibility:"visible"}))},end:function(t,e,i,r,a,s,d,u){if(i<a-30)return!1;if("click"==this.drawer.action)return this.drawer.action="",!1;this.drawer.action="";this.getAttribute("data-id");if("pixel"==l)var f=o;else f=this.offsetWidth/100*o;if(void 0==this.drawer&&(this.drawer={status:"closed"}),"pixel"==c){var v=s;if("closed"==this.drawer.status)var w=n;else if("right-opened"==this.drawer.status)w=this.offsetWidth-n;else if("left-opened"==this.drawer.status)w=this.offsetWidth-n}else{v=s/this.offsetWidth*100;if("closed"==this.drawer.status)w=n;else if("right-opened"==this.drawer.status)w=100-n;else if("left-opened"==this.drawer.status)w=100-n}var m=Number(String(v).replace("-",""));if(setTimeout(function(){h.css({width:f+"px"}),p.css({width:f+"px"})},400),s<0&&(f=-f),m==w);else{if("closed"==this.drawer.status)var g=m>w;else g=m>w-n;g?setTimeout(function(t,e,i){t.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+i+"px)"}),t.drawer.status=e>0?"right-opened":"left-opened"},100,this,s,f):("closed"!=this.drawer.status&&(t.stopPropagation(),t.preventDefault()),this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX(0px)"}),this.drawer.status="closed")}}})}),setTimeout(function(){e.monitor()},1e3)},e._construct=function(){e.monitor()},t.plugin.require(["essentials"],function(){e.touch=t.plugins.essentials.touch,e._construct()}),t.plugins.drawer=e}(vizoo);
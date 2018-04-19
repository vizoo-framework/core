/* Vizoo - v1.0.0 - http://vizoo.online - Wallace Rio <wallrio@gmail.com> */
/* Vizoo - v1.0.0 - http://vizoo.online - Wallace Rio <wallrio@gmail.com> */
/* Vizoo - v1.0.0 - http://vizoo.online - Wallace Rio <wallrio@gmail.com> */
/* Vizoo - v1.0.0 - http://vizoo.online - Wallace Rio <wallrio@gmail.com> */
!function(t){var e=function(){};e.status="closed",e.getWrapper=function(t){return void 0!=t.getAttribute&&(void 0==t.getAttribute("data-vizoo-drawer-wrapper")?e.getWrapper(t.parentNode):t)},e.openLeft=function(i){var r=document.querySelector('[id="'+i+'"]'),a=r.getAttribute("data-attr"),o=(a=t.string.stringToObject(a)).widthopen||80,s=(a.margintouch,a.limitop,r.offsetWidth/100*o);r.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+s+"px)"}),e.status="opened-right",r.parentNode.querySelector("[data-vizoo-drawer-painel-right]").css({visibility:"hidden"}),r.parentNode.querySelector("[data-vizoo-drawer-painel-left]").css({visibility:"visible"})},e.openRight=function(i){var r=document.querySelector('[id="'+i+'"]'),a=r.getAttribute("data-attr"),o=(a=t.string.stringToObject(a)).widthopen||80,s=(a.margintouch,a.limitop,-r.offsetWidth/100*o);r.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+s+"px)"}),e.status="opened-left",r.parentNode.querySelector("[data-vizoo-drawer-painel-right]").css({visibility:"visible"}),r.parentNode.querySelector("[data-vizoo-drawer-painel-left]").css({visibility:"hidden"})},e.close=function(i){var r=document.querySelector('[id="'+i+'"]'),a=r.getAttribute("data-attr");(a=t.string.stringToObject(a)).widthopen,a.margintouch,a.limitop;r.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX(0px)"}),e.status="closed"},e.monitor=function(){document.querySelectorAll("[data-vizoo-drawer-open-toggle-right]").map(function(t,i){this.onclick=function(){var t=this.getAttribute("data-vizoo-drawer-open-toggle-right");"closed"==e.status?e.openRight(t):e.close(t)}}),document.querySelectorAll("[data-vizoo-drawer-open-toggle-left]").map(function(t,i){this.onclick=function(){var t=this.getAttribute("data-vizoo-drawer-open-toggle-left");"closed"==e.status?e.openLeft(t):e.close(t)}}),document.querySelectorAll("[data-vizoo-drawer-open-right]").map(function(t,i){this.onclick=function(){var t=this.getAttribute("data-vizoo-drawer-open-right");e.openRight(t)}}),document.querySelectorAll("[data-vizoo-drawer-open-left]").map(function(t,i){this.onclick=function(){var t=this.getAttribute("data-vizoo-drawer-open-left");e.openLeft(t)}}),document.querySelectorAll("[data-vizoo-drawer-close]").map(function(t,i){this.onclick=function(){var t=this.getAttribute("data-vizoo-drawer-close");e.close(t)}}),document.querySelectorAll("[data-vizoo-drawer-box]").map(function(i,r){if(1==this.initMove)return!1;this.initMove=1;var a=r,o=e.getWrapper(this);this.setAttribute("data-id",a),0!=o&&o.setAttribute("data-id",a);var s=this.getAttribute("data-attr"),n=(s=t.string.stringToObject(s)).widthopen||80,d=s.margintouch||20,l=s.limitop||20;document.querySelectorAll("[data-vizoo-drawer-painel-right]").map(function(e){t.addEvent(this,"touchstart mousedown",function(t){t.stopPropagation()})}),document.querySelectorAll("[data-vizoo-drawer-painel-left]").map(function(e){t.addEvent(this,"touchmove mousedown",function(t){t.stopPropagation()})}),e.touch(this,{movey:!1,start:function(t,e,i,r,a,o,s){var n=o/this.offsetWidth*100,l=r/this.offsetWidth*100,c=(Number(String(n).replace("-","")),this.getAttribute("data-id"));document.querySelector('[data-vizoo-drawer-wrapper][data-id="'+c+'"] > [data-vizoo-drawer-painel-right]'),document.querySelector('[data-vizoo-drawer-wrapper][data-id="'+c+'"] > [data-vizoo-drawer-painel-left]');if(this.movex=!1,0==o&&l>d&&l<100-d)return!1},move:function(t,e,i,r,a,o,s,l){var c=o/this.offsetWidth*100,u=r/this.offsetWidth*100,h=(Number(String(c).replace("-","")),this.getAttribute("data-id"));document.querySelector('[data-vizoo-drawer-wrapper][data-id="'+h+'"] > [data-vizoo-drawer-painel-right]'),document.querySelector('[data-vizoo-drawer-wrapper][data-id="'+h+'"] > [data-vizoo-drawer-painel-left]');if(0==o?u<d?this.movex=!0:u>100-d&&(this.movex=!0):this.movex=!0,o>0){if(c>n){this.movex=!1;var f=this.offsetWidth/100*n;return this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+f+"px)"}),!0}this.parentNode.querySelector("[data-vizoo-drawer-painel-right]").css({visibility:"hidden"}),this.parentNode.querySelector("[data-vizoo-drawer-painel-left]").css({visibility:"visible"}),t.preventDefault()}else if(o<0){if(Number(String(c).replace("-",""))>n){this.movex=!1;f=-this.offsetWidth/100*n;return this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+f+"px)"}),!0}this.parentNode.querySelector("[data-vizoo-drawer-painel-left]").css({visibility:"hidden"}),this.parentNode.querySelector("[data-vizoo-drawer-painel-right]").css({visibility:"visible"}),t.preventDefault()}},end:function(t,i,r,a,o,s,d,c){var u=s/this.offsetWidth*100,h=(Number(String(u).replace("-","")),this.getAttribute("data-id"));document.querySelector('[data-vizoo-drawer-wrapper][data-id="'+h+'"] > [data-vizoo-drawer-painel-right]'),document.querySelector('[data-vizoo-drawer-wrapper][data-id="'+h+'"] > [data-vizoo-drawer-painel-left]');if("closed"==e.status){if(s>=0){var f=s/this.offsetWidth*100;if(this.parentNode.querySelector("[data-vizoo-drawer-painel-left]").css({width:this.offsetWidth/100*n+"px"}),f>=l){var p=this.offsetWidth/100*n;this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+p+"px)"}),e.status="opened-right"}else f<100-l&&(this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX(0px)"}),e.status="closed")}else if(s<0){f=(s+this.offsetWidth)/this.offsetWidth*100;if(this.parentNode.querySelector("[data-vizoo-drawer-painel-right]").css({width:this.offsetWidth/100*n+"px"}),f<=100-l){p=-this.offsetWidth/100*n;this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+p+"px)"}),e.status="opened-left"}else f>100-l&&(this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX(0px)"}),e.status="closed")}}else if("opened-right"==e.status){if((f=s/this.offsetWidth*100)<100-l)this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX(0px)"}),e.status="closed";else{p=this.offsetWidth/100*n;this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+p+"px)"})}}else if("opened-left"==e.status){if((f=(s+this.offsetWidth)/this.offsetWidth*100)>l)this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX(0px)"}),e.status="closed";else{p=-this.offsetWidth/100*n;this.css({transition:"all 0.3s cubic-bezier(0.000, 1.025, 0.295, 0.960)",transform:"translateX("+p+"px)"})}}}})}),setTimeout(function(){e.monitor()},1e3)},e._construct=function(){e.monitor()},t.ready(["essentials"],function(){e.touch=t.plugins.essentials.touch2,e._construct()}),t.plugins.drawer=e}(vizoo);
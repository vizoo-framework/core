/* Vizoo - v0.1 - http://vizoo.online - Wallace Rio <wallrio@gmail.com> */
!function(e){var t={monitor:function(){for(var e=document.querySelectorAll("[data-vizoo-gallery]"),l=0;l<e.length;l++){var a=e[l];1!=a.designGalleryInit&&(a.designGalleryInit=1,t.make(a))}setTimeout(function(){t.monitor()},300)},make:function(e){for(var l=e,a=e.querySelectorAll("[data-vizoo-gallery-img]"),o=0;o<a.length;o++){var i=a[o],r=i.getAttribute("data-vizoo-gallery-img"),n=i.getAttribute("data-vizoo-gallery-img-thumb");i.initGallery=1,i.image=r,i.style["background-image"]=null!=n?"url("+n+")":"url("+r+")";var d=document.createElement("div"),v=i.innerHTML;i.innerHTML="<div data-vizoo-gallery-item-hover><div data-vizoo-gallery-item-hover-content>"+v+"</div></div>",i.appendChild(d),t.setAction(l,i,o,a)}var g=document.createElement("div");g.setAttribute("data-vizoo-gallery-item-full",""),g.innerHTML="<div><header><span>"+a.length+" images</span><div data-vizoo-gallery-control><div data-vizoo-gallery-control-left><span></span></div><div data-vizoo-gallery-control-right><span></span></div></div></header><main></main><footer><div><a data-vizoo-gallery-item-full-close>×</a></div></footer></div>",document.querySelector("body").appendChild(g)},setAction:function(t,l,a,o){var i={lightbox:!0},r=(l.image,l.querySelector("[data-vizoo-gallery-item-hover-content]"));r.galleryItemAll=o,null!=t.getAttribute("data-vizoo-gallery-attr")&&(i=e.string.stringToObject(t.getAttribute("data-vizoo-gallery-attr"))),!0!==i.lightbox&&r.setAttribute("data-vizoo-gallery-lightbox","false");var n=function(e,t,l){var a=t.querySelector("[data-vizoo-gallery-img]:nth-child("+l+")").getAttribute("data-vizoo-gallery-img"),o="",i="",r=e.galleryItemAll.length,d=document.querySelector("[data-vizoo-gallery-item-full]"),v=document.querySelector("[data-vizoo-gallery-item-full] [data-vizoo-gallery-item-full-close]");d.querySelector("main").innerHTML='<div data-vizoo-gallery-item-full-image style="background:url('+a+')"></div>',d.setAttribute("data-status","active"),v.onclick=function(){document.querySelector("[data-vizoo-gallery-item-full]").removeAttribute("data-status")},void 0!=t.querySelector("[data-vizoo-gallery-img]:nth-child("+l+") [data-vizoo-gallery-item-hover-content] [data-vizoo-gallery-item-hover-title]")&&(o=t.querySelector("[data-vizoo-gallery-img]:nth-child("+l+") [data-vizoo-gallery-item-hover-content] [data-vizoo-gallery-item-hover-title]").innerHTML),void 0!=t.querySelector("[data-vizoo-gallery-img]:nth-child("+l+") [data-vizoo-gallery-item-hover-content] [data-vizoo-gallery-item-hover-description]")&&(i=t.querySelector("[data-vizoo-gallery-img]:nth-child("+l+") [data-vizoo-gallery-item-hover-content] [data-vizoo-gallery-item-hover-description]").innerHTML),document.querySelector("[data-vizoo-gallery-item-full] > div > header > span").innerHTML="<label data-vizoo-gallery-item-full-status >"+l+" / "+r+"</label><label data-vizoo-gallery-item-full-title >"+o+"</label><label data-vizoo-gallery-item-full-description >"+i+"</label>",document.querySelector("[data-vizoo-gallery-item-full] [data-vizoo-gallery-control-right] span").onclick=function(){var e=t.querySelector("[data-vizoo-gallery-img]:nth-child("+l+") [data-vizoo-gallery-item-hover-content]");if(void 0==t.querySelector("[data-vizoo-gallery-img]:nth-child("+(l+1)+")"))return!1;n(e,t,l+1)},document.querySelector("[data-vizoo-gallery-item-full] [data-vizoo-gallery-control-left] span").onclick=function(){var e=t.querySelector("[data-vizoo-gallery-img]:nth-child("+l+") [data-vizoo-gallery-item-hover-content]");if(void 0==t.querySelector("[data-vizoo-gallery-img]:nth-child("+(l-1)+")"))return!1;n(e,t,l-1)}};r.onclick=function(){n(this,t,a+1)}},__construct:function(){t.monitor()}};t.__construct(),e.plugins.gallery=t}(vizoo);
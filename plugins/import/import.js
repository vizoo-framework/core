/* Vizoo - v0.1.0 - http://vizoo.online - Wallace Rio <wallrio@gmail.com> */
!function(e){var t={};t.status={dependence:!1},t.hexToBase64=function(e){return btoa(String.fromCharCode.apply(null,e.replace(/\r|\n/g,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")))},t.getBase64FromImageUrl=function(e,t){var n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=function(){var e=document.createElement("canvas");e.width=this.width,e.height=this.height;e.getContext("2d").drawImage(this,0,0);var n=e.toDataURL("image/png");t&&t(n.replace(/^data:image\/(png|jpg);base64,/,""))},n.src=e},t.DOMImportReplace=function(){for(var n=document.querySelectorAll("[data-vizoo-import]"),r=0;r<n.length;r++){var a=n[r];1!=a.designImportInit&&(a.designImportInit=1,function(n){var r=n.getAttribute("data-vizoo-import-attr");if(r=e.string.stringToObject(r),"div"!=n.tagName){var a=n.getAttribute("href"),i=document.createElement("div");i.innerHTML=n.innerHTML,n.parentNode.replaceChild(i,n),n=i}else a=n.getAttribute("data-href");n.setAttribute("data-vizoo-import-replaced",""),n.setAttribute("data-src",a);var o=r.getElement||null;-1!=a.indexOf(".jpeg")||-1!=a.indexOf(".jpg")||-1!=a.indexOf(".png")||-1!=a.indexOf(".gif")?t.getBase64FromImageUrl(a,function(e){n.innerHTML='<img src="data:image/jpeg;base64,'+e+'">'}):-1!=a.indexOf("http:")||-1!=a.indexOf("https:")?n.innerHTML='<iframe src="'+a+'"></iframe>':vizoo.ajax({url:a,success:function(e){if(null!=o){var t=document.createElement("html");t.innerHTML=e;var r=t.querySelector(o).innerHTML}else r=e;n.innerHTML=r}})}(a))}setTimeout(function(){t.DOMImportReplace()},1e3)},t.__construct=function(e){t.DOMImportReplace()},t.__construct(),e.plugins.import=t}(vizoo);
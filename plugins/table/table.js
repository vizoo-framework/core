/* Vizoo - 0.0.1 - vizoo.online -  Wallace Rio <wallrio@gmail.com> - wallrio.com */
!function(t){var n={monitor:function(){var t=document.querySelectorAll("[data-vizoo-table]");if(t.length>0)for(var e=0;e<t.length;e++){var o=t[e];if(1!=o.datavizooTableInit){o.datavizooTableInit=1;var a=o.className;n.make(o,a)}}setTimeout(function(){n.monitor()},300)},make:function(t,n){if("vertical"==n)var e=t.querySelectorAll("tr th");else e=t.querySelectorAll("tr:first-child th");for(var o,a=t.querySelectorAll("tr td"),l=null,r=null,i=-1,c=0;c<a.length;c++)l=a[c],++i>e.length-1&&(i=-1),o=l.innerHTML,void 0!=e[i]&&(r=e[i].innerHTML),l.innerHTML="<span data-vizoo-table-th-label >"+r+"</span><span data-vizoo-table-th-content >"+o+"</span>"},__construct:function(){n.monitor()}};n.__construct(),t.plugins.table=n}(vizoo);
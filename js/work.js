/* WORK: render kartu project, filter kategori, drag horizontal, progress bar */
(function(){
"use strict";
var K=window.Krama,$=K.$,$$=K.$$,reduce=K.reduce;
var P=K.projects;
var cats=["Semua"];P.forEach(function(p){if(cats.indexOf(p[0])<0)cats.push(p[0])});
var chips=$("#chips"),tk=$("#tk");
chips.innerHTML=cats.map(function(c,i){return '<button class="chip" aria-pressed="'+(i==0)+'" data-c="'+c+'">'+c+'</button>'}).join("");
tk.innerHTML=P.map(function(p,i){return '<article class="pj" data-cur="Geser" data-c="'+p[0]+'"><div class="art a'+(i%5)+'"></div><small>'+p[0]+'</small><div><h3>'+p[1]+'</h3><p>'+p[2]+'</p></div></article>'}).join("");
chips.addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;
$$(".chip",chips).forEach(function(x){x.setAttribute("aria-pressed",x===b)});
$$(".pj",tk).forEach(function(c){c.classList.toggle("hide",b.dataset.c!=="Semua"&&c.dataset.c!==b.dataset.c)});tk.scrollLeft=0;upd()});
var down=false,sx=0,sl=0;
tk.addEventListener("pointerdown",function(e){if(e.pointerType!=="mouse")return;down=true;sx=e.clientX;sl=tk.scrollLeft;tk.classList.add("dr")});
addEventListener("pointermove",function(e){if(down)tk.scrollLeft=sl-(e.clientX-sx)});
addEventListener("pointerup",function(){down=false;tk.classList.remove("dr")});
function upd(){var m=tk.scrollWidth-tk.clientWidth;$("#bar").style.transform="scaleX("+(m>0?.12+.88*tk.scrollLeft/m:1)+")"}
tk.addEventListener("scroll",upd);upd();
})();

/* CURSOR: kursor custom, label berubah saat hover (desktop saja) */
(function(){
"use strict";
var K=window.Krama,$=K.$,$$=K.$$,reduce=K.reduce;
var cur=$("#cur");
if(matchMedia("(hover:hover) and (pointer:fine)").matches){
var tx=-100,ty=-100,x=-100,y=-100;
addEventListener("pointermove",function(e){tx=e.clientX;ty=e.clientY});
(function lp(){x+=(tx-x)*.22;y+=(ty-y)*.22;cur.style.transform="translate("+(x-cur.offsetWidth/2)+"px,"+(y-cur.offsetHeight/2)+"px)";requestAnimationFrame(lp)})();
document.addEventListener("pointerover",function(e){var t=e.target.closest("[data-cur],a,button,.row");
var lb=t&&t.getAttribute("data-cur");cur.className=t?(lb?"big":"mid"):"";cur.textContent=lb||""})}
})();

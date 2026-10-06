/* 4 MAIN ROADS: panel aktif saat hover / klik / fokus */
(function(){
"use strict";
var K=window.Krama,$=K.$,$$=K.$$,reduce=K.reduce;
$$(".rp").forEach(function(r){var t=function(){$$(".rp").forEach(function(x){x.classList.remove("on")});r.classList.add("on")};
r.addEventListener("click",t);r.addEventListener("pointerenter",t);r.addEventListener("focus",t)});
})();

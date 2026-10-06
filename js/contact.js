/* CONTACT: efek magnetik pada link email */
(function(){
"use strict";
var K=window.Krama,$=K.$,$$=K.$$,reduce=K.reduce;
$$(".mag").forEach(function(el){el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect();el.style.transform="translate("+((e.clientX-r.left-r.width/2)*.1)+"px,"+((e.clientY-r.top-r.height/2)*.25)+"px)"});
el.addEventListener("pointerleave",function(){el.style.transform=""})});
})();

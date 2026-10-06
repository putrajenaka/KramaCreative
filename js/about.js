/* ABOUT: kata misi menyala saat scroll + count-up angka statistik */
(function(){
"use strict";
var K=window.Krama,$=K.$,$$=K.$$,reduce=K.reduce;
var mis=$("#mis");
mis.innerHTML=mis.textContent.split(" ").map(function(w){return '<span class="w">'+w+'</span>'}).join(" ");
var ws=$$(".w",mis);
function onScroll(){
  var vh=innerHeight,r=mis.getBoundingClientRect();
  var p=Math.max(0,Math.min(1,(vh*.85-r.top)/(r.height+vh*.3))),n=Math.round(p*ws.length);
  ws.forEach(function(w,i){w.classList.toggle("on",i<n)});
}
addEventListener("scroll",onScroll,{passive:true});onScroll();

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);
var el=e.target,v=+el.dataset.v,t0=performance.now();
if(reduce){el.textContent=v;return}
(function f(t){var k=Math.min(1,(t-t0)/1400),q=1-Math.pow(1-k,3);el.textContent=Math.round(v*q);if(k<1)requestAnimationFrame(f)})(t0)})},{threshold:.5});
$$("[data-v]").forEach(function(el){io.observe(el)});
})();

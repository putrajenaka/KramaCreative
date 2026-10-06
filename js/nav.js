/* NAV: progress bar scroll, menu aktif per section, toggle tema terang/gelap */
(function(){
"use strict";
var K=window.Krama,$=K.$,$$=K.$$,reduce=K.reduce;
var secs=$$("section").filter(function(s){return s.id}),lk=$$(".links a");
function onScroll(){
  var vh=innerHeight,h=document.documentElement.scrollHeight-vh;
  $("#prog").style.transform="scaleX("+(h>0?scrollY/h:0)+")";
  var cur="";
  secs.forEach(function(s){if(s.getBoundingClientRect().top<vh*.4)cur=s.id});
  lk.forEach(function(a){a.classList.toggle("act",a.getAttribute("href")==="#"+cur)});
}
addEventListener("scroll",onScroll,{passive:true});onScroll();

var root=document.documentElement;
$("#theme").addEventListener("click",function(){var d=root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;root.dataset.theme=d?"light":"dark"});
})();

/* CLIENTS: render marquee nama klien (data dari data.js) */
(function(){
"use strict";
var K=window.Krama,$=K.$,$$=K.$$,reduce=K.reduce;
var clients=K.clients;
var mk=function(a){return a.concat(a).map(function(c){return "<span>"+c+"</span>"}).join("")};
$("#m1").innerHTML=mk(clients);$("#m2").innerHTML=mk(clients.slice().reverse());
})();

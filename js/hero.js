/* HERO: constellation canvas yang bereaksi ke kursor + glow emas */
(function(){
"use strict";
var K=window.Krama,$=K.$,$$=K.$$,reduce=K.reduce;
var root=document.documentElement;
var cv=$("#cv"),cx=cv.getContext("2d"),W=0,H=0,N=[],L=[],m={x:-999,y:-999},vis=true;
var names=[["Idea",.14,.3],["Concept",.38,.2],["Visual",.64,.34],["Digital",.86,.2]];
var namesSm=[["Idea",.12,.16],["Concept",.4,.08],["Visual",.14,.4],["Digital",.5,.32]];
function size(){var d=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);
N=[];var n=Math.round(W*H/15000);for(var i=0;i<n;i++)N.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:1+Math.random()*1.8});
L=(W<600?namesSm:names).map(function(a,i){return{t:a[0],bx:a[1]*W,by:a[2]*H,x:a[1]*W,y:a[2]*H,k:0,ph:i*1.7}});draw(0)}
addEventListener("resize",size);
cv.parentNode.addEventListener("pointermove",function(e){var r=cv.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top;var g=$('#glow');g.style.setProperty('--mx',m.x+'px');g.style.setProperty('--my',m.y+'px')});
cv.parentNode.addEventListener("pointerleave",function(){m.x=m.y=-999});
new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(cv);
function draw(t){var fg=getComputedStyle(root).getPropertyValue("--fg").trim()||"#000";cx.clearRect(0,0,W,H);cx.fillStyle=cx.strokeStyle=fg;
for(var i=0;i<N.length;i++){var a=N[i];if(!reduce){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
var dx=a.x-m.x,dy=a.y-m.y,d=Math.hypot(dx,dy);if(d<130&&d>0){a.x+=dx/d*1.2;a.y+=dy/d*1.2}}
cx.globalAlpha=.7;cx.beginPath();cx.arc(a.x,a.y,a.r,0,7);cx.fill();
for(var j=i+1;j<N.length;j++){var b=N[j],e=Math.hypot(a.x-b.x,a.y-b.y);if(e<110){cx.globalAlpha=(1-e/110)*.35;cx.lineWidth=1;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
var q=Math.hypot(a.x-m.x,a.y-m.y);if(q<170){cx.globalAlpha=(1-q/170)*.8;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(m.x,m.y);cx.stroke()}}
cx.globalAlpha=1;cx.lineWidth=1.5;cx.setLineDash([6,8]);cx.beginPath();
L.forEach(function(p,i){p.x=p.bx+Math.sin(t/1300+p.ph)*10;p.y=p.by+Math.cos(t/1500+p.ph)*10;i?cx.lineTo(p.x,p.y):cx.moveTo(p.x,p.y)});cx.stroke();cx.setLineDash([]);
cx.font='800 18px "Bricolage Grotesque",system-ui,sans-serif';cx.textBaseline="middle";
L.forEach(function(p){var hit=Math.hypot(p.x-m.x,p.y-m.y)<90;p.k+=((hit?1:0)-p.k)*.15;var r=7+p.k*20;
cx.globalAlpha=1;cx.beginPath();cx.arc(p.x,p.y,r,0,7);cx.fillStyle=hit?"#E8B93F":getComputedStyle(root).getPropertyValue("--bg").trim()||"#fff";cx.fill();cx.lineWidth=2;cx.stroke();
cx.fillStyle=fg;cx.fillText(p.t,p.x+r+10,p.y)});
cx.fillStyle=fg;cx.globalAlpha=1}
if(reduce)size();else{size();(function lp(t){if(vis)draw(t);requestAnimationFrame(lp)})(0)}
})();

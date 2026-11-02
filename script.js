(function(){
var D=[["Indigo Palazzo", "Purple top, navy palazzo, gold embroidery"], ["Festival Check", "Cream skirt with a checked border and tassels"], ["Mustard Bandhani", "Mustard top with a green bandhani skirt"], ["Ruby Teal", "Red embroidered top with a teal skirt"], ["Pink Bloom", "Green top with a bow and a pink floral skirt"], ["Rose Brocade", "Pink floral top with a green brocade skirt"]];
var P=["images/dress-1.jpg", "images/dress-2.jpg", "images/dress-3.jpg", "images/dress-4.jpg", "images/dress-5.jpg", "images/dress-6.jpg"];
var n=D.length,c=0,t=null,tr=document.getElementById('tr'),box=document.getElementById('show'),nm=document.getElementById('nm'),ds=document.getElementById('ds'),cu=document.getElementById('cu'),pg=document.getElementById('pg');
var rm=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
tr.innerHTML=D.map(function(d,i){return '<div class="slide"><img src="'+P[i]+'" alt="'+d[0]+': '+d[1]+'" decoding="async"></div>';}).join('');
var S=Array.prototype.slice.call(tr.children);
function restart(){if(rm)return;pg.style.animation='none';void pg.offsetWidth;pg.style.animation='';}
function show(i){c=(i+n)%n;S.forEach(function(s,k){var d=(k-c+n)%n;if(d>n/2)d-=n;s.style.setProperty('--o',d);s.setAttribute('data-p',Math.abs(d)<=1?Math.abs(d):'x');s.setAttribute('aria-hidden',d!==0);s.classList.toggle('on',d===0);});nm.textContent=D[c][0];ds.textContent=D[c][1];cu.textContent=('0'+(c+1)).slice(-2);restart();}
function stop(){clearInterval(t);}
function start(){stop();if(!rm){t=setInterval(function(){show(c+1);},3600);}}
document.getElementById('pv').onclick=function(){show(c-1);start();};
document.getElementById('nx').onclick=function(){show(c+1);start();};
box.addEventListener('mouseenter',function(){stop();box.classList.add('pz');});
box.addEventListener('mouseleave',function(){box.classList.remove('pz');restart();start();});
show(0);start();
})();

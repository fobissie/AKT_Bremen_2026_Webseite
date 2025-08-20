const burger=document.querySelector('.burger');const menu=document.querySelector('.menu');
if(burger){burger.addEventListener('click',()=>{const opened=menu.style.display==='block';menu.style.display=opened?'none':'block';burger.setAttribute('aria-expanded',String(!opened));});}
document.getElementById('year')&& (document.getElementById('year').textContent=new Date().getFullYear());


function toggleDark(){ document.body.classList.toggle('dark'); }

function scrollToContact(){ document.getElementById('contact').scrollIntoView({behavior:'smooth'}); }

window.addEventListener('scroll', ()=> {
 document.querySelectorAll('.fade').forEach(el=>{
   if(el.getBoundingClientRect().top < window.innerHeight - 80){ el.classList.add('visible'); }
 });
});

let counted=false;
window.addEventListener('scroll', ()=>{
 let sec=document.querySelector('#metrics');
 if(!counted && sec.getBoundingClientRect().top < window.innerHeight){
   document.querySelectorAll('.count').forEach(c=>{
     let t=+c.dataset.target;
     let x=0;
     let step = t/60;
     let int=setInterval(()=>{
       x+=step; c.innerText=Math.floor(x);
       if(x>=t){ c.innerText=t; clearInterval(int);}
     },20);
   });
   counted=true;
 }
});

function sendMessage(e){
 e.preventDefault();
 document.getElementById('status').innerText="Sending...";
 setTimeout(()=>{ document.getElementById('status').innerText="Message sent ✔"; },1000);
}

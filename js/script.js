document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('#mainNav a:not(.dropdown-toggle)').forEach(a=>a.addEventListener('click',()=>{const nav=document.getElementById('mainNav'); if(nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();}));
 document.querySelectorAll('.event-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.event-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const past=document.getElementById('pastEvents'),up=document.getElementById('upcomingEvents');if(btn.dataset.eventTab==='upcoming'){past.hidden=true;up.hidden=false}else{past.hidden=false;up.hidden=true}}));
});

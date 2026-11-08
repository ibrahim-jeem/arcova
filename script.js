// ARCOVA interactions: mobile navigation, project filters and email enquiry.
(() => {
 const toggle=document.querySelector(".menu-toggle"),menu=document.querySelector(".menu");
 toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰";});
 menu?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");toggle?.setAttribute("aria-expanded","false");if(toggle)toggle.textContent="☰";}));
 const buttons=document.querySelectorAll("[data-filter]"),cards=document.querySelectorAll(".projects article");
 buttons.forEach(btn=>btn.addEventListener("click",()=>{const filter=btn.dataset.filter;buttons.forEach(b=>b.classList.toggle("active",b===btn));cards.forEach(card=>card.hidden=filter!=="all"&&card.dataset.category!==filter);}));
 // This prepares an email in the visitor's mail app; no backend/database is connected.
 document.querySelector("#enquiry")?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent("Website enquiry — ARCOVA");const body=encodeURIComponent("Name: "+d.get("name")+"\nEmail: "+d.get("email")+"\nService: "+d.get("service")+"\n\nProject details:\n"+d.get("message"));location.href="mailto:renterprise.fbd@gmail.com?subject="+subject+"&body="+body;});
})();
const body=document.body;
const themeToggle=document.getElementById("themeToggle");
const savedTheme=localStorage.getItem("theme");
if(savedTheme==="light") body.classList.add("light");
function updateThemeIcon(){themeToggle.textContent=body.classList.contains("light")?"☾":"☼";}
updateThemeIcon();
themeToggle.addEventListener("click",()=>{body.classList.toggle("light");localStorage.setItem("theme",body.classList.contains("light")?"light":"dark");updateThemeIcon();});

const menu=document.querySelector(".menu-btn"), nav=document.querySelector(".nav-links");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open);});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 const f=btn.dataset.filter;
 document.querySelectorAll(".project-card").forEach(card=>card.classList.toggle("hidden",f!=="all"&&card.dataset.category!==f));
}));

const form=document.getElementById("contactForm"), status=document.getElementById("formStatus");
form.addEventListener("submit",async e=>{
 e.preventDefault();
 if(form.elements._gotcha.value) return;
 const endpoint=form.getAttribute("action");
 if(endpoint.includes("YOUR_FORM_ID")){status.textContent="Contact form is ready — add your Formspree endpoint in index.html to activate submissions.";return;}
 status.textContent="Sending…";
 try{
  const res=await fetch(endpoint,{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});
  if(res.ok){status.textContent="Thanks! Your message has been sent.";form.reset();}
  else status.textContent="Something went wrong. Please try again.";
 }catch{status.textContent="Network error. Please try again."}
});
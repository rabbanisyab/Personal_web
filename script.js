// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menuBtn && menuBtn.addEventListener('click', ()=>{
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  nav.style.display = expanded ? 'none' : 'flex';
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  sendBtn.textContent = "Mengirim...";
  sendBtn.disabled = true;

  const data = new FormData(contactForm);

  const res = await fetch(contactForm.action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
  });

  sendBtn.textContent = "Kirim Pesan";
  sendBtn.disabled = false;

  if (res.ok) {
    formMsg.textContent = "Pesan terkirim! Aku akan menghubungi secepatnya.";
    contactForm.reset();
  } else {
    formMsg.textContent = "Gagal mengirim pesan. Coba lagi.";
  }
});

document.body.addEventListener('keydown', (e)=>{
  if(e.key === 'Tab') document.documentElement.style.setProperty('--focusOutline','2px solid rgba(6,182,212,0.4)');
});

const images = document.querySelectorAll(".gimg");
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.getElementById("closeModal");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.remove("hidden");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  
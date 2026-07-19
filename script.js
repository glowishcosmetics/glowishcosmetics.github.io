// ==== Preloader ====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 900);
});

// ==== Year ====
document.getElementById('yr').textContent = new Date().getFullYear();

// ==== AOS ====
AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic', offset: 60 });

// ==== Navbar scroll ====
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ==== Mobile menu ====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ==== Product gallery ====
function setMain(el){
  document.getElementById('mainImage').src = el.src;
  document.querySelectorAll('.thumbs img').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
}
window.setMain = setMain;

// ==== Buy modal ====
const modal = document.getElementById('buyModal');
function openBuy(){ modal.classList.add('open'); document.body.style.overflow='hidden'; }
function closeBuy(){ modal.classList.remove('open'); document.body.style.overflow=''; }
window.openBuy = openBuy; window.closeBuy = closeBuy;
document.addEventListener('keydown', e => { if(e.key==='Escape') closeBuy(); });

// ==== Sparkles ====
const s = document.getElementById('sparkles');
const count = window.innerWidth < 600 ? 18 : 40;
for (let i=0; i<count; i++){
  const dot = document.createElement('span');
  const size = Math.random()*5 + 3;
  dot.style.width = dot.style.height = size + 'px';
  dot.style.left = Math.random()*100 + '%';
  dot.style.bottom = '-10px';
  dot.style.animationDuration = (8 + Math.random()*12) + 's';
  dot.style.animationDelay = (Math.random()*10) + 's';
  dot.style.opacity = 0.3 + Math.random()*0.5;
  s.appendChild(dot);
}

// Select all price containers on the page so this works for multiple products
document.querySelectorAll('.price').forEach(priceContainer => {
  const newPriceElement = priceContainer.querySelector('.new');
  const oldPriceElement = priceContainer.querySelector('.old');
  const saveElement = priceContainer.querySelector('.save');

  if (newPriceElement && oldPriceElement && saveElement) {
    
    const newPrice = parseFloat(newPriceElement.textContent.replace(/[^0-9.]/g, ''));
    const oldPrice = parseFloat(oldPriceElement.textContent.replace(/[^0-9.]/g, ''));

    if (oldPrice > 0 && newPrice < oldPrice) {
      const percentageSaved = ((oldPrice - newPrice) / oldPrice) * 100;
      
      saveElement.textContent = `Save ${percentageSaved.toFixed(2)}%`;
    } else {
      saveElement.style.display = 'none';
    }
  }
});

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});
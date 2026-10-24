/* script.js — CSS does all the animating. JS only flips a couple of switches. */

// 1) Optional: sign the page with your name, e.g. const FROM = "Rahul";
const FROM = "";
if (FROM) document.getElementById('from').textContent = 'With love, ' + FROM;

// 2) Restart a CSS animation by re-adding its class
function replay(el, cls, ms) {
  el.classList.remove(cls);
  void el.offsetWidth;                 // force reflow so the animation restarts
  el.classList.add(cls);
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove(cls), ms);
}

const btn = document.getElementById('send');
const bloom = document.querySelector('.bloom');

function sunshine() {
  btn.textContent = 'Sunshine sent';
  replay(document.body, 'sunny', 9000);   // CSS: sunflowers fall
  replay(bloom, 'wow', 900);              // CSS: flower spins
}
btn.addEventListener('click', sunshine);
bloom.addEventListener('click', sunshine);

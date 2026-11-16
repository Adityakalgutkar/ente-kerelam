/* Ente Keralam — shared behaviour for every page.
   Content lives in content.js. */
/* ===================================================================== */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const TBA = '<span class="tba">To be added</span>';

function fillPhoto(el, p){
  if (!el || !p) return;
  if (p.src){
    el.classList.remove("is-plate");
    el.removeAttribute("role"); el.removeAttribute("aria-label");
    el.innerHTML = `<img src="${esc(p.src)}" alt="${esc(p.alt)}" ${p.eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  } else {
    el.classList.add("is-plate");
    el.setAttribute("role","img");
    el.setAttribute("aria-label", `Photo placeholder: ${p.alt}`);
    el.innerHTML = `<span class="plate-label"><b>Photograph</b><span>${esc(p.brief)}</span></span>`;
  }
}
$$("[data-photo]").forEach(el => fillPhoto(el, PHOTOS[el.dataset.photo]));

/* Site facts */
const waLink = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp.replace(/\D/g,"")}?text=${encodeURIComponent(SITE.whatsappMessage)}` : "";
const facts = {
  address: SITE.address ? esc(SITE.address) : TBA,
  phone: SITE.phone ? esc(SITE.phone) : TBA,
  whatsappDisplay: SITE.whatsapp ? esc("+" + SITE.whatsapp.replace(/\D/g,"")) : TBA,
  hours: SITE.hours ? esc(SITE.hours) : TBA,
  hoursShort: SITE.hours ? esc(SITE.hours) : 'Hours <span class="soon">to be added</span>',
  phoneShort: SITE.phone ? esc(SITE.phone) : 'Phone <span class="soon">to be added</span>'
};
$$("[data-site]").forEach(el => el.innerHTML = facts[el.dataset.site] ?? "");

const waBtn = $("#wa-btn");
if (waLink) $$(".js-reserve").forEach(a => { a.href = waLink; a.target = "_blank"; a.rel = "noopener"; });
if (waBtn && waLink){
  waBtn.href = waLink; waBtn.target = "_blank"; waBtn.rel = "noopener";
  $("#wa-label").textContent = "Reserve on WhatsApp";
} else if (waBtn) {
  /* No number yet: render as an honest, non-clickable status */
  const span = document.createElement("span");
  span.className = waBtn.className; span.style.opacity = ".55"; span.style.cursor = "default";
  span.setAttribute("aria-disabled","true");
  span.innerHTML = waBtn.innerHTML;
  span.querySelector("#wa-label").textContent = "WhatsApp number to be added";
  waBtn.replaceWith(span);
}
if ($("#maps-btn")) $("#maps-btn").href = SITE.mapsUrl;
$$(".js-maps").forEach(a => a.href = SITE.mapsUrl);

$("#social-list").innerHTML = SITE.social.map(s => s.url
  ? `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a></li>`
  : `<li>${esc(s.name)}<span class="soon">soon</span></li>`).join("");
$("#credits-list").innerHTML = CREDITS.map(c => `<li><a href="${esc(c.u)}" target="_blank" rel="noopener">${esc(c.t)}</a> · ${esc(c.a)} · ${c.lu ? `<a href="${esc(c.lu)}" target="_blank" rel="noopener">${esc(c.l)}</a>` : esc(c.l)}</li>`).join("");
$("#year").textContent = new Date().getFullYear();

const fmtPrice = p => p == null ? "₹ —" : (typeof p === "number" ? "₹" + p : p);
const vegMark = veg => `<span class="veg-mark${veg ? "" : " nv"}" role="img" aria-label="${veg ? "Vegetarian" : "Non-vegetarian"}"></span>`;

/* Menu page */
if ($("#menu-tabs")) {
const tabsEl = $("#menu-tabs"), gridEl = $("#menu-grid"), introEl = $("#menu-intro");
tabsEl.innerHTML = MENU.map((c,i) => `<button class="tab" role="tab" id="tab-${c.id}" aria-controls="menu-panel" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-id="${c.id}">${esc(c.label)}</button>`).join("");
let currentCat = MENU[0].id;
function showCategory(id){
  const cat = MENU.find(c => c.id === id) || MENU[0];
  $$(".tab", tabsEl).forEach(t => { const on = t.dataset.id === cat.id; t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1; });
  $("#menu-panel").setAttribute("aria-labelledby", `tab-${cat.id}`);
  introEl.textContent = cat.intro;
  currentCat = cat.id;
  const vegOnly = $("#veg-only").checked;
  const items = cat.items.filter(d => !vegOnly || d.veg);
  if (!items.length){ gridEl.innerHTML = `<li class="menu-empty">No vegetarian dishes in ${esc(cat.label)}. Try another section.</li>`; return; }
  gridEl.innerHTML = items.map((d,i) => `
    <li class="mi${d.photo ? " has-photo" : ""}">
      ${d.photo ? `<span class="mi-thumb"><img src="${esc(d.photo)}" alt="" loading="lazy" decoding="async"></span>` : ""}
      <div class="mi-body">
        <div class="mi-top"><h3>${vegMark(d.veg)}<span>${esc(d.name)}</span></h3><span class="mi-dots" aria-hidden="true"></span><span class="price">${esc(fmtPrice(d.price))}</span></div>
        <p>${esc(d.desc)}</p>
      </div>
    </li>`).join("");
}
tabsEl.addEventListener("click", e => { const t = e.target.closest(".tab"); if (t){ showCategory(t.dataset.id); try { history.replaceState(null, "", "#" + t.dataset.id); } catch(err){} } });
tabsEl.addEventListener("keydown", e => {
  if (!["ArrowRight","ArrowLeft","Home","End"].includes(e.key)) return;
  const tabs = $$(".tab", tabsEl); let i = tabs.indexOf(document.activeElement);
  i = e.key==="Home" ? 0 : e.key==="End" ? tabs.length-1 : (i + (e.key==="ArrowRight"?1:-1) + tabs.length) % tabs.length;
  tabs[i].focus(); showCategory(tabs[i].dataset.id); e.preventDefault();
});
const startCat = location.hash.slice(1);
showCategory(MENU.some(c => c.id === startCat) ? startCat : MENU[0].id);
$("#veg-only").addEventListener("change", () => showCategory(currentCat));

}

/* Home: menu preview */
const previewEl = $("#menu-preview");
if (previewEl){
  const picks = [["dinner","Chatti Choru"],["dinner","Parotta with Beef Roast"],["breakfast","Puttu with Kadala Curry"]];
  const dishes = picks.map(([cid, name]) => { const c = MENU.find(x => x.id === cid); const d = c && c.items.find(i => i.name === name); return d && { ...d, cid, cat: c.label }; }).filter(Boolean);
  previewEl.innerHTML = dishes.map(d => `
    <article class="dish">
      <figure class="photo t-leaf" data-pdish style="margin:0"></figure>
      <div class="dish-body">
        <span class="eyebrow">${esc(d.cat)}</span>
        <div class="dish-top"><h3><a href="menu.html#${d.cid}">${esc(d.name)}</a></h3><span class="price">${esc(fmtPrice(d.price))}</span></div>
        <p>${esc(d.desc)}</p>
        <div class="tags"><span class="tag ${d.veg ? "veg" : ""}">${d.veg ? "Vegetarian" : "Non-veg"}</span></div>
      </div>
    </article>`).join("");
  $$("[data-pdish]", previewEl).forEach((el, i) => fillPhoto(el, { src: dishes[i].photo || "", alt: dishes[i].name, brief: dishes[i].name }));
}

/* Drinks page */
const glassSVG = c => `<svg class="glass" viewBox="0 0 40 64" aria-hidden="true"><path d="M8 6h24l-3 50a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.2 22h19.6l-2.2 33.5a2 2 0 0 1-2 1.9H14.4a2 2 0 0 1-2-1.9z" fill="${c}"/><path d="M14 26v26" stroke="rgba(255,255,255,.45)" stroke-width="1.6" stroke-linecap="round"/></svg>`;
[["#drinks-mocktails","mocktails"],["#drinks-cocktails","cocktails"]].forEach(([sel, key]) => {
  const el = $(sel); if (!el || !DRINKS[key]) return;
  el.innerHTML = DRINKS[key].map(d => `
    <li class="drink${d.signature ? " is-signature" : ""}">
      ${glassSVG(esc(d.colour || "#b38a4c"))}
      <div class="drink-body">
        <div class="mi-top"><h3><span>${esc(d.name)}</span></h3><span class="mi-dots" aria-hidden="true"></span><span class="price">${esc(fmtPrice(d.price))}</span></div>
        <span class="drink-note">${esc(d.note)}${d.signature ? ' <b>Signature</b>' : ""}</span>
        <p>${esc(d.desc)}</p>
      </div>
    </li>`).join("");
});

/* Gallery page */
if ($("#gallery-grid")) {
$("#gallery-grid").innerHTML = GALLERY.map((g,i) => `
  <div class="g g${i+1}${g.src?" has-img":""}">
    ${g.src ? `<button type="button" aria-label="View larger: ${esc(g.alt)}" data-i="${i}"><figure class="photo" data-g="${i}" style="margin:0"></figure><figcaption aria-hidden="true">${esc(g.alt)}</figcaption></button>`
            : `<figure class="photo ${g.tone}" data-g="${i}" style="margin:0"></figure>`}
  </div>`).join("");
$$("[data-g]").forEach(el => fillPhoto(el, GALLERY[+el.dataset.g]));
const galleryImgs = GALLERY.map((g,i)=>({...g,i})).filter(g=>g.src);
const arrow = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="${d}"/></svg>`;
$("#gallery-grid").addEventListener("click", e => {
  const b = e.target.closest("button[data-i]"); if (!b) return;
  let pos = galleryImgs.findIndex(g => g.i === +b.dataset.i);
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.setAttribute("role","dialog"); lb.setAttribute("aria-modal","true");
  lb.innerHTML = `<figure><img alt=""><figcaption></figcaption></figure>
    <button class="lb-nav lb-prev" type="button" aria-label="Previous photo">${arrow("M15 5l-7 7 7 7")}</button>
    <button class="lb-nav lb-next" type="button" aria-label="Next photo">${arrow("M9 5l7 7-7 7")}</button>
    <button class="lightbox-close" type="button">Close</button>`;
  const show = n => { pos = (n + galleryImgs.length) % galleryImgs.length; const g = galleryImgs[pos];
    const img = $("img", lb); img.src = g.src; img.alt = g.alt; lb.setAttribute("aria-label", g.alt);
    $("figcaption", lb).innerHTML = `<b>${pos+1} / ${galleryImgs.length}</b>${esc(g.alt)}`; };
  const close = () => { lb.remove(); document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; b.focus(); };
  const onKey = ev => { if (ev.key === "Escape") close(); else if (ev.key === "ArrowRight") show(pos+1); else if (ev.key === "ArrowLeft") show(pos-1); };
  lb.addEventListener("click", ev => {
    if (ev.target.closest(".lb-prev")) show(pos-1);
    else if (ev.target.closest(".lb-next")) show(pos+1);
    else if (ev.target === lb || ev.target.closest(".lightbox-close")) close();
  });
  let x0 = null;
  lb.addEventListener("touchstart", ev => { x0 = ev.touches[0].clientX; }, { passive:true });
  lb.addEventListener("touchend", ev => { if (x0 == null) return; const dx = ev.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) show(pos + (dx < 0 ? 1 : -1)); x0 = null; });
  document.addEventListener("keydown", onKey);
  show(pos); document.body.style.overflow = "hidden";
  document.body.appendChild(lb); $(".lightbox-close", lb).focus();
});

}

/* Draft strip */
if (SITE.draft){
  let hidden = false; try { hidden = sessionStorage.getItem("ek-draft-hidden") === "1"; } catch(e){}
  $("#draft-bar").hidden = hidden;
  $("#draft-close").addEventListener("click", () => { $("#draft-bar").hidden = true; try { sessionStorage.setItem("ek-draft-hidden","1"); } catch(e){} });
}

/* Mobile action bar */
$("#ab-maps").href = SITE.mapsUrl;
if (waLink){ const r = $("#ab-reserve"); r.href = waLink; r.target = "_blank"; r.rel = "noopener"; r.lastChild.textContent = "WhatsApp"; }

/* Mobile nav */
const toggle = $(".menu-toggle"), panel = $("#nav-panel");
function setNav(open){ panel.classList.toggle("open", open); toggle.setAttribute("aria-expanded", open); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu"); }
toggle.addEventListener("click", () => setNav(!panel.classList.contains("open")));
panel.addEventListener("click", e => { if (e.target.closest("a")) setNav(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setNav(false); });
matchMedia("(min-width:901px)").addEventListener("change", () => setNav(false));

/* Reveal on scroll */
if ("IntersectionObserver" in window){
  /* Reveal: only defer items currently below the fold */
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches){
    const rv = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting){ en.target.classList.remove("pending-reveal"); rv.unobserve(en.target); }
    }), { rootMargin:"0px 0px -8% 0px" });
    $$(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top > innerHeight){ el.classList.add("pending-reveal"); rv.observe(el); }
    });
    setTimeout(() => $$(".pending-reveal").forEach(el => el.classList.remove("pending-reveal")), 6000);
  }
}

/* Map placeholder: a quiet topographic sketch of the Goa coast (decorative) */
(function drawMap(){
  const c = $("#map-canvas"); if (!c) return;
  const draw = () => {
    const r = c.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
    c.width = r.width * dpr; c.height = r.height * dpr;
    const x = c.getContext("2d"); x.scale(dpr, dpr);
    const w = r.width, h = r.height;
    x.clearRect(0,0,w,h);
    // sea on the left
    const g = x.createLinearGradient(0,0,w*.4,0);
    g.addColorStop(0,"rgba(36,71,74,.75)"); g.addColorStop(1,"rgba(36,71,74,0)");
    x.fillStyle = g; x.fillRect(0,0,w*.45,h);
    // contour lines
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let k = 0; k < 16; k++){
      x.beginPath();
      const base = h * (k / 15);
      for (let i = 0; i <= 40; i++){
        const px = (w / 40) * i;
        const py = base + Math.sin(i * .35 + k) * 14 + Math.sin(i * .11 + k * 2) * 22;
        i ? x.lineTo(px, py) : x.moveTo(px, py);
      }
      x.strokeStyle = `rgba(215,185,127,${.06 + rnd()*.07})`; x.lineWidth = 1; x.stroke();
    }
    // river (Mapusa river) as a soft curve
    x.beginPath(); x.moveTo(w, h*.62);
    x.bezierCurveTo(w*.75, h*.55, w*.6, h*.75, w*.38, h*.66);
    x.bezierCurveTo(w*.22, h*.6, w*.12, h*.72, 0, h*.68);
    x.strokeStyle = "rgba(95,140,85,.55)"; x.lineWidth = 3; x.stroke();
    // grid of lanes
    x.strokeStyle = "rgba(239,232,216,.07)"; x.lineWidth = 1;
    for (let i = 1; i < 8; i++){ x.beginPath(); x.moveTo(w*.42 + i*w*.07, 0); x.lineTo(w*.38 + i*w*.075, h); x.stroke(); }
  };
  draw(); addEventListener("resize", draw, { passive:true });
})();

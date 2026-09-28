const D = window.PORTFOLIO;
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>',
  brief: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 2 3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9L12 2z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></svg>',
};

function socials() {
  const s = D.links;
  return [
    s.github && `<a class="social" href="${s.github}" target="_blank" rel="noopener">${ICONS.github}GitHub</a>`,
    s.linkedin && `<a class="social" href="${s.linkedin}" target="_blank" rel="noopener">${ICONS.linkedin}LinkedIn</a>`,
    s.email && `<a class="social" href="mailto:${s.email}">${ICONS.email}${esc(s.email)}</a>`,
  ].filter(Boolean).join("");
}

document.title = `${D.name} — ${D.role}`;
$("#logo").innerHTML = `&lt;<b>${esc(D.short)}</b> /&gt;`;
$("#status").textContent = D.status;
const parts = D.name.split(" ");
$("#name").innerHTML = `${esc(parts.slice(0, -1).join(" "))} <span class="grad">${esc(parts.at(-1))}</span>`;
$("#tagline").textContent = D.tagline;
$("#photo").alt = D.name;
$("#socials").innerHTML = socials();
$("#socials-footer").innerHTML = socials();

// Typing roles
(() => {
  const el = $("#role"); const roles = D.roles; let r = 0, i = 0, del = false;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { el.textContent = roles[0]; return; }
  (function tick() {
    const w = roles[r];
    i += del ? -1 : 1;
    el.innerHTML = esc(w.slice(0, i)) + '<span class="caret"></span>';
    let t = del ? 35 : 70;
    if (!del && i === w.length) { del = true; t = 1800; }
    else if (del && i === 0) { del = false; r = (r + 1) % roles.length; t = 300; }
    setTimeout(tick, t);
  })();
})();

$("#terminal").innerHTML =
  `<span class="p">$</span> cat profile.json\n{\n` +
  Object.entries(D.terminal).map(([k, v]) => `  <span class="k">"${esc(k)}"</span>: <span class="s">"${esc(v)}"</span>`).join(",\n") +
  `\n}`;

$("#stats").innerHTML = D.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

$("#about-text").innerHTML = D.about.map((p) => `<p>${p}</p>`).join("");
$("#facts").innerHTML = D.facts.map((f) => `<li><div class="ico">${ICONS[f.icon]}</div><div><small>${esc(f.label)}</small><span>${esc(f.value)}</span></div></li>`).join("");

$("#timeline").innerHTML = D.experience.map((e) => `
  <div class="t-item reveal"><div class="card t-card">
    <div class="t-head"><h3>${esc(e.title)} <em>@ ${esc(e.company)}</em></h3><span class="t-meta">${esc(e.date)} · ${esc(e.place)}</span></div>
    <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    <div class="tags">${e.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
  </div></div>`).join("");

const cats = ["All", ...new Set(D.projects.map((p) => p.category))];
$("#filters").innerHTML = cats.map((c, i) => `<button class="filter${i ? "" : " active"}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
$("#project-grid").innerHTML = D.projects.map((p) => `
  <article class="card project reveal" data-cat="${esc(p.category)}">
    <div class="p-cover" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
      <span class="p-kind">${esc(p.category.toUpperCase())}</span>
      <span class="p-glyph">${esc(p.glyph)}</span>
      <div class="p-metric"><b>${esc(p.metric.value)}</b><span>${esc(p.metric.label)}</span></div>
    </div>
    <div class="p-body">
      <h3>${esc(p.title)}</h3>
      <p class="p-sub">${esc(p.subtitle)}</p>
      <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      <div class="p-foot">
        <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="p-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">${ICONS.github}Code</a>` : ""}
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">${ICONS.external}Live</a>` : ""}
        </div>
      </div>
    </div>
  </article>`).join("");
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter"); if (!b) return;
  document.querySelectorAll(".filter").forEach((x) => x.classList.toggle("active", x === b));
  document.querySelectorAll(".project").forEach((p) => p.classList.toggle("hide", b.dataset.cat !== "All" && p.dataset.cat !== b.dataset.cat));
});

$("#skills-grid").innerHTML = Object.entries(D.skills).map(([g, list]) => `
  <div class="card skill-group reveal"><h3>${esc(g)}</h3><div class="chips">${list.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></div>`).join("");

$("#edu-list").innerHTML = D.education.map((e) => `
  <div class="card edu reveal">
    <div class="edu-top"><h3>${esc(e.school)}</h3><span class="t-meta">${esc(e.date)}</span></div>
    <p class="deg">${esc(e.degree)}</p>
    ${e.score ? `<span class="score">${esc(e.score)}</span>` : ""}
    ${e.coursework ? `<p class="course">${esc(e.coursework)}</p>` : ""}
  </div>`).join("");
$("#certs-title").textContent = D.certsTitle || "Certifications";
$("#certs").innerHTML = D.certs.map((c) => `<li>${ICONS.check}<span>${esc(c)}</span></li>`).join("");

$("#contact-text").textContent = D.contactText;
$("#contact-btn").href = `mailto:${D.links.email}`;
$("#footer-text").textContent = `© ${new Date().getFullYear()} ${D.name} · Built with HTML, CSS & JS`;

// Theme toggle
$("#theme-toggle").addEventListener("click", () => {
  const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Mobile menu
$("#menu-toggle").addEventListener("click", () => $("#nav-links").classList.toggle("open"));
document.querySelectorAll("#nav-links a").forEach((a) => a.addEventListener("click", () => $("#nav-links").classList.remove("open")));

// Nav border + active link
const nav = $(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
const links = [...document.querySelectorAll("#nav-links a")];
const ioActive = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id)); });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("section[id]").forEach((s) => ioActive.observe(s));

// Reveal on scroll
const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const D = window.PORTFOLIO;
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

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
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
};

const socials = () => [
  D.links.github && `<a class="social" href="${D.links.github}" target="_blank" rel="noopener">${ICONS.github}GitHub</a>`,
  D.links.linkedin && `<a class="social" href="${D.links.linkedin}" target="_blank" rel="noopener">${ICONS.linkedin}LinkedIn</a>`,
  D.links.email && `<a class="social" href="mailto:${D.links.email}">${ICONS.email}${esc(D.links.email)}</a>`,
].filter(Boolean).join("");
const tags = (list) => `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
const points = (list) => `<ul class="points">${list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
const links = (p, solid) => `<div class="links">
  ${p.live ? `<a class="link${solid ? " solid" : ""}" href="${p.live}" target="_blank" rel="noopener">${ICONS.external}Live demo</a>` : ""}
  ${p.github ? `<a class="link" href="${p.github}" target="_blank" rel="noopener">${ICONS.github}Code</a>` : ""}</div>`;

// ---------- hero ----------
document.title = `${D.name} — ${D.role}`;
$("#logo").innerHTML = `<b>${esc(D.short)}</b>.dev`;
$("#status").textContent = D.status;
const parts = D.name.split(" ");
$("#name").innerHTML = `${esc(parts.slice(0, -1).join(" "))} <span class="grad">${esc(parts.at(-1))}</span>`;
$("#tagline").textContent = D.tagline;
$("#photo").alt = D.name;
$("#socials").innerHTML = socials();
$("#socials-footer").innerHTML = socials();
$("#float-1").innerHTML = `<b>${esc(D.stats[0].value)}</b><span>${esc(D.stats[0].label)}</span>`;
$("#float-2").innerHTML = `<b>${esc(D.stats[1].value)}</b><span>${esc(D.stats[1].label)}</span>`;
$("#terminal").innerHTML = `<span class="p">$</span> cat profile.json\n{\n` +
  Object.entries(D.terminal).map(([k, v]) => `  <span class="k">"${esc(k)}"</span>: <span class="s">"${esc(v)}"</span>`).join(",\n") + `\n}`;

(() => {
  const el = $("#role"), roles = D.roles;
  if (reduce) { el.textContent = roles[0]; return; }
  let r = 0, i = 0, del = false;
  (function tick() {
    const w = roles[r];
    i += del ? -1 : 1;
    el.innerHTML = esc(w.slice(0, i)) + '<span class="caret"></span>';
    let t = del ? 30 : 65;
    if (!del && i === w.length) { del = true; t = 1900; } else if (del && i === 0) { del = false; r = (r + 1) % roles.length; t = 300; }
    setTimeout(tick, t);
  })();
})();

// Stats count up to their value when they scroll into view.
$("#stats").innerHTML = D.stats.map((s) => `<div class="stat"><b data-value="${esc(s.value)}">${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
function countUp(el) {
  const m = el.dataset.value.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
  if (!m || reduce) return;
  const [, pre, num, post] = m, target = parseFloat(num.replace(/,/g, "")), decimals = (num.split(".")[1] || "").length, t0 = performance.now();
  const show = (v) => { el.textContent = pre + v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + post; };
  (function step(now) {
    const k = Math.min(1, (now - t0) / 1100);
    show(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step); else el.textContent = el.dataset.value;
  })(t0);
}

const allSkills = Object.values(D.skills).flat();
$("#marquee").innerHTML = [...allSkills, ...allSkills].map((s) => `<span>${esc(s)}</span>`).join("");

// ---------- work ----------
const featured = D.projects.filter((p) => p.featured), rest = D.projects.filter((p) => !p.featured);
$("#work-title").textContent = D.workTitle || "Things I have built and measured";
$("#work-sub").textContent = D.workSub || "";
$("#features").innerHTML = featured.map((p) => `
  <article class="feature reveal spot" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
    <a class="shot" href="${p.live || p.github}" target="_blank" rel="noopener" aria-label="Open ${esc(p.title)}">
      <div class="browser"><div class="browser-bar"><i></i><i></i><i></i><em>${esc((p.live || p.github).replace(/^https?:\/\//, ""))}</em></div>
      <img src="${p.image}" alt="Screenshot of ${esc(p.title)}" loading="lazy" /></div>
    </a>
    <div class="feat-body">
      <span class="feat-kind">${esc(p.category)}</span>
      <h3>${esc(p.title)}</h3>
      <p class="feat-sub">${esc(p.subtitle)}</p>
      <div class="feat-metric"><b>${esc(p.metric.value)}</b><span>${esc(p.metric.label)}</span></div>
      ${points(p.points)}
      ${tags(p.tags)}
      ${links(p, true)}
    </div>
  </article>`).join("");

const cats = ["All", ...new Set(rest.map((p) => p.category))];
$("#filters").innerHTML = cats.map((c, i) => `<button type="button" class="filter${i ? "" : " active"}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
$("#project-grid").innerHTML = rest.map((p) => `
  <article class="card project reveal spot" data-cat="${esc(p.category)}">
    <div class="cover" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
      ${p.image ? `<img src="${p.image}" alt="Screenshot of ${esc(p.title)}" loading="lazy" />` : `<span class="glyph">${esc(p.glyph)}</span>`}
      <span class="kind">${esc(p.category.toUpperCase())}</span>
    </div>
    <div class="p-body">
      <h3>${esc(p.title)}</h3>
      <p class="p-sub">${esc(p.subtitle)}</p>
      <p class="p-metric"><b>${esc(p.metric.value)}</b>${esc(p.metric.label)}</p>
      <details class="more"><summary>Details</summary>${points(p.points)}</details>
      ${tags(p.tags.slice(0, 5))}
      ${links(p)}
    </div>
  </article>`).join("");
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter"); if (!b) return;
  document.querySelectorAll(".filter").forEach((x) => x.classList.toggle("active", x === b));
  document.querySelectorAll(".project").forEach((p) => p.classList.toggle("hide", b.dataset.cat !== "All" && p.dataset.cat !== b.dataset.cat));
});

// ---------- experience, skills, credentials ----------
$("#timeline").innerHTML = D.experience.map((e) => `
  <div class="card job reveal spot">
    <div class="job-head"><h3>${esc(e.title)} <em>@ ${esc(e.company)}</em></h3><span class="meta">${esc(e.date)} · ${esc(e.place)}</span></div>
    ${points(e.points)}${tags(e.tags)}
  </div>`).join("");
$("#about-text").innerHTML = D.about.map((p) => `<p>${p}</p>`).join("");
$("#facts").innerHTML = D.facts.map((f) => `<li><div class="ico">${ICONS[f.icon]}</div><div><small>${esc(f.label)}</small><span>${esc(f.value)}</span></div></li>`).join("");
$("#skills-grid").innerHTML = Object.entries(D.skills).map(([g, list]) => `
  <div class="card skill-group reveal spot"><h3>${esc(g)}</h3><div class="chips">${list.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></div>`).join("");
$("#edu-list").innerHTML = D.education.map((e) => `
  <div class="card edu reveal spot">
    <span class="meta">${esc(e.date)}</span><h3>${esc(e.school)}</h3>
    <p class="deg">${esc(e.degree)}</p>
    ${e.score ? `<span class="score">${esc(e.score)}</span>` : ""}
    ${e.coursework ? `<p class="course">${esc(e.coursework)}</p>` : ""}
  </div>`).join("");
$("#certs").innerHTML = D.certs.map((c) => {
  const award = /hackathon|place|winner|award/i.test(c);
  return `<li class="reveal${award ? " award" : ""}">${award ? ICONS.trophy : ICONS.check}<span>${esc(c)}</span></li>`;
}).join("");
$("#contact-title").textContent = D.contactTitle || "Let's build something.";
$("#contact-text").textContent = D.contactText;
$("#contact-btn").href = `mailto:${D.links.email}`;
$("#footer-text").textContent = `© ${new Date().getFullYear()} ${D.name} · Designed and built by hand, no frameworks`;

// ---------- chrome: theme, menu, scroll ----------
$("#theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) { /* private mode */ }
});
$("#menu-toggle").addEventListener("click", () => $("#nav-links").classList.toggle("open"));
const navLinks = [...document.querySelectorAll("#nav-links a")];
navLinks.forEach((a) => a.addEventListener("click", () => $("#nav-links").classList.remove("open")));
const onScroll = () => {
  $("#nav").classList.toggle("scrolled", scrollY > 10);
  $("#progress").style.width = (scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)) * 100 + "%";
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();
const active = new IntersectionObserver((es) => es.forEach((en) => {
  if (en.isIntersecting) navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("section[id]").forEach((s) => active.observe(s));
const io = new IntersectionObserver((es) => es.forEach((en) => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  en.target.querySelectorAll?.("[data-value]").forEach(countUp);
  io.unobserve(en.target);
}), { threshold: 0.1 });
document.querySelectorAll(".reveal, .stats").forEach((el) => io.observe(el));
document.querySelectorAll(".spot").forEach((el) => el.addEventListener("pointermove", (e) => {
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", e.clientX - r.left + "px");
  el.style.setProperty("--my", e.clientY - r.top + "px");
}));

// ---------- command palette ----------
const commands = [
  ...navLinks.map((a) => ({ label: a.textContent, hint: "Section", run: () => { location.hash = a.getAttribute("href"); } })),
  ...D.projects.map((p) => ({ label: p.title, hint: p.live ? "Open live demo" : "Open code", run: () => window.open(p.live || p.github, "_blank", "noopener") })),
  { label: "Download résumé", hint: "PDF", run: () => window.open("resume.pdf", "_blank", "noopener") },
  { label: "GitHub profile", hint: "Link", run: () => window.open(D.links.github, "_blank", "noopener") },
  { label: "LinkedIn profile", hint: "Link", run: () => window.open(D.links.linkedin, "_blank", "noopener") },
  { label: "Send an email", hint: D.links.email, run: () => { location.href = `mailto:${D.links.email}`; } },
  { label: "Switch dark / light", hint: "Theme", run: () => $("#theme-toggle").click() },
];
const palette = $("#palette"), input = $("#palette-input"), list = $("#palette-list");
let shown = [], cursor = 0;
function draw() {
  const q = input.value.trim().toLowerCase();
  shown = commands.filter((c) => (c.label + " " + c.hint).toLowerCase().includes(q)).slice(0, 12);
  cursor = Math.min(cursor, Math.max(0, shown.length - 1));
  list.innerHTML = shown.map((c, i) => `<li role="option" data-i="${i}" aria-selected="${i === cursor}"><span>${esc(c.label)}</span><small>${esc(c.hint)}</small></li>`).join("") ||
    `<li><span>No matches</span></li>`;
  list.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
}
const openPalette = () => { palette.hidden = false; input.value = ""; cursor = 0; draw(); input.focus(); };
const closePalette = () => { palette.hidden = true; };
const runCommand = (i) => { const c = shown[i]; if (c) { closePalette(); c.run(); } };
$("#palette-open").addEventListener("click", openPalette);
palette.addEventListener("click", (e) => { if (e.target === palette) closePalette(); const li = e.target.closest("li[data-i]"); if (li) runCommand(+li.dataset.i); });
input.addEventListener("input", () => { cursor = 0; draw(); });
addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); return; }
  if (palette.hidden) return;
  if (e.key === "Escape") closePalette();
  else if (e.key === "ArrowDown") { e.preventDefault(); cursor = (cursor + 1) % Math.max(1, shown.length); draw(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); cursor = (cursor - 1 + shown.length) % Math.max(1, shown.length); draw(); }
  else if (e.key === "Enter") { e.preventDefault(); runCommand(cursor); }
});
if (!/Mac|iPhone|iPad/.test(navigator.platform)) document.querySelector("#palette-open kbd").textContent = "Ctrl K";

// ---------- hero background: a field of points that links up near the pointer ----------
(() => {
  const canvas = $("#field"), ctx = canvas.getContext("2d");
  if (reduce || !ctx) return;
  const grid = document.documentElement.dataset.skin === "grid";
  let w, h, dots, mouse = { x: -999, y: -999 }, visible = true;
  const colour = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  function size() {
    const r = 1;
    w = canvas.width = innerWidth * r; h = canvas.height = innerHeight * r;
    const n = Math.min(grid ? 42 : 34, Math.round(innerWidth * innerHeight / (grid ? 30000 : 40000)));
    dots = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25 * r, vy: (Math.random() - .5) * .25 * r, s: (Math.random() * 1.4 + .6) * r }));
  }
  let last = 0;
  function frame(now = 0) {
    if (visible && scrollY < innerHeight * 1.2 && now - last > 33) {       // 30 fps, and only while the hero is on screen
      last = now;
      ctx.clearRect(0, 0, w, h);
      const c = colour(), r = 1, reach = (grid ? 150 : 120) * r;
      ctx.fillStyle = c; ctx.strokeStyle = c;
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.globalAlpha = grid ? .5 : .65;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.s, 0, 6.3); ctx.fill();
      }
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i], md = Math.hypot(a.x - mouse.x * r, a.y - mouse.y * r);
        if (md < reach * 1.6) { ctx.globalAlpha = (1 - md / (reach * 1.6)) * .5; ctx.lineWidth = r; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x * r, mouse.y * r); ctx.stroke(); }
        if (!grid) continue;
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j], dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < reach) { ctx.globalAlpha = (1 - dist / reach) * .22; ctx.lineWidth = r * .8; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
      }
    }
    requestAnimationFrame(frame);
  }
  addEventListener("resize", size);
  addEventListener("pointermove", (e) => { mouse = { x: e.clientX, y: e.clientY }; }, { passive: true });
  document.addEventListener("visibilitychange", () => { visible = !document.hidden; });
  size(); frame();
})();

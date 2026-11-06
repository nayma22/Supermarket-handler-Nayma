const r = /* @__PURE__ */ new Set();
async function t(o = "regular") {
  if (!r.has(o))
    try {
      const e = document.createElement("link");
      e.rel = "stylesheet", e.href = `https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/${o}/style.css`, await new Promise((n, s) => {
        e.onload = n, e.onerror = s, document.head.appendChild(e);
      }), r.add(o);
    } catch (e) {
      console.error(`Failed to load phosphor icon weight: ${o}`, e);
    }
}
export {
  t as l
};

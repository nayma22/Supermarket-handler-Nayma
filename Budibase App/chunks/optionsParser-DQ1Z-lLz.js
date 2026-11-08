const h = (l, u, v, n, f, r) => {
  if (l == null || l === "schema")
    return u?.constraints?.inclusion ?? [];
  if (l === "provider" && f) {
    let e = {}, s = [];
    return v?.rows?.forEach((t) => {
      const a = t?.[f];
      if (a != null && !e[a]) {
        e[a] = !0;
        const c = t[n] || a;
        s.push({ value: a, label: c });
      }
    }), s;
  }
  return l === "custom" && r ? (r.forEach((e) => {
    typeof e.value == "string" && (e.value.toLowerCase() === "true" ? e.value = !0 : e.value.toLowerCase() === "false" && (e.value = !1));
  }), r) : [];
};
export {
  h as g
};

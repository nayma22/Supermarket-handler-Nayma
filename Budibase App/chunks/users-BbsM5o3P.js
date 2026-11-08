import { c0 as i, c1 as t, cD as e } from "./index-quCB9sGT.js";
function l(n) {
  if (!n)
    return !1;
  const r = n.builder?.apps?.length;
  return !!!n.builder?.global && r != null && r > 0;
}
function f(n) {
  return n ? n.builder?.global || l(n) || s(n) : !1;
}
function s(n) {
  return n ? !!n.builder?.creator : !1;
}
function c(n) {
  if (typeof n != "string")
    return n;
  const r = `${i.ROW}${t}${e.USER_METADATA}${t}`;
  return n.startsWith(r) ? n.split(r)[1] : n;
}
function u(n) {
  return typeof n != "string" ? !1 : n.includes(`${i.USER}${t}`);
}
export {
  u as c,
  c as g,
  f as h
};

import { b5 as e, bC as t } from "./index-quCB9sGT.js";
const E = {
  [e.STRING]: !0,
  [e.LONGFORM]: !0,
  [e.OPTIONS]: !0,
  [e.NUMBER]: !0,
  [e.DATETIME]: !0,
  [e.FORMULA]: !0,
  [e.AI]: !0,
  [e.AUTO]: !0,
  [e.INTERNAL]: !0,
  [e.BARCODEQR]: !0,
  [e.BIGINT]: !0,
  [e.BOOLEAN]: !1,
  [e.ARRAY]: !1,
  [e.ATTACHMENTS]: !1,
  [e.ATTACHMENT_SINGLE]: !1,
  [e.SIGNATURE_SINGLE]: !1,
  [e.LINK]: !1,
  [e.JSON]: !1,
  [e.BB_REFERENCE]: !1,
  [e.BB_REFERENCE_SINGLE]: !1
}, u = {
  [e.STRING]: !0,
  [e.LONGFORM]: !0,
  [e.OPTIONS]: !0,
  [e.NUMBER]: !0,
  [e.DATETIME]: !0,
  [e.AUTO]: !0,
  [e.INTERNAL]: !0,
  [e.BARCODEQR]: !0,
  [e.BIGINT]: !0,
  [e.BOOLEAN]: !0,
  [e.JSON]: !1,
  [e.FORMULA]: !1,
  [e.AI]: !1,
  [e.ATTACHMENTS]: !1,
  [e.ATTACHMENT_SINGLE]: !1,
  [e.SIGNATURE_SINGLE]: !1,
  [e.ARRAY]: !1,
  [e.LINK]: !1,
  [e.BB_REFERENCE]: !1,
  [e.BB_REFERENCE_SINGLE]: !1
};
e.NUMBER + "", e.JSON + "", e.DATETIME + "", e.LONGFORM + "", e.STRING + "", e.OPTIONS + "", e.ARRAY + "", e.BIGINT + "", e.BOOLEAN + "", e.AUTO + "", e.INTERNAL + "", e.BARCODEQR + "", e.FORMULA + "", e.AI + "", e.ATTACHMENTS + "", e.ATTACHMENT_SINGLE + "", e.SIGNATURE_SINGLE + "", e.LINK + "", e.BB_REFERENCE + "", e.BB_REFERENCE_SINGLE + "";
function N(r) {
  return !!E[r];
}
function a(r) {
  return !!u[r];
}
function T(r) {
  return !(!N(r.type) || r.related);
}
function f(r) {
  return r.calculationType || t(r) ? !0 : !(!a(r.type) || r.related);
}
export {
  T as a,
  f as c
};

const c = () => {
  let e;
  return {
    setUp: (t, r) => {
      clearInterval(e), t && r && (e = setInterval(r, Math.max(1e4, t * 1e3)));
    },
    clear: () => {
      clearInterval(e);
    }
  };
};
export {
  c
};

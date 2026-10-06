/* UTILS: helper kecil yang dipakai semua file JS lain (dimuat pertama) */
window.Krama={
  $:function(s,c){return (c||document).querySelector(s)},
  $$:function(s,c){return [].slice.call((c||document).querySelectorAll(s))},
  reduce:matchMedia("(prefers-reduced-motion: reduce)").matches
};

import { $$, ps, f, med, _var, c, v, x, css, CSSinTS } from "sweetss";

/*
-------------------------

-------------------------
*/
const fxs = __filename.split("/").slice(-3);
const { dom, cx, id, kf, font, save } = new css({
  name: fxs[2].split(".")[0],
  prefix: "",
});

cx.YUI = [
  {
    backgroundColor: "red",
  },
];

/*
-------------------------

-------------------------
*/

save({
  path: __dirname,
});

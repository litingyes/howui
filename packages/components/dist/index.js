import { LitElement as v, html as f } from "lit";
import { customElement as n } from "lit/decorators.js";
var _ = Object.defineProperty, i = Object.getOwnPropertyDescriptor, c = (p, r, t, o) => {
  for (var e = o > 1 ? void 0 : o ? i(r, t) : r, m = p.length - 1, l; m >= 0; m--)
    (l = p[m]) && (e = (o ? l(r, t, e) : l(e)) || e);
  return o && e && _(r, t, e), e;
};
let s = class extends v {
  render() {
    return f`<div>demo</div>`;
  }
};
s = c([
  n("how-demo")
], s);
export {
  s as HowDemo
};

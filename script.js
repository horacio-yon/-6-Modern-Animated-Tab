const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

const IC = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  likes: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  create: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',
  profile: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  alerts: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>'
};

const TABS = [
  ['home', 'Home'],
  ['likes', 'Likes'],
  ['create', 'Create'],
  ['profile', 'Profile'],
  ['alerts', 'Alerts']
];

const ico = k => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${IC[k]}</svg>`;

/* utilidades de animación */
class Sp {
  constructor(k, d) {
    this.k = k;
    this.d = d;
    this.x = this.t = this.v = 0
  }

  step(dt) {
    this.v += ((this.t - this.x) * this.k - this.v * this.d) * dt;
    this.x += this.v * dt;
    if (Math.abs(this.t - this.x) < .05 && Math.abs(this.v) < .05) {
      this.x = this.t;
      this.v = 0;
      return false
    }
    return true
  }
}

function loop(o, fn) {
  if (o.on) return;
  o.on = 1;
  let l = performance.now();
  const f = n => {
    const dt = Math.min((n - l) / 1e3, .03);
    l = n;
    fn(dt) ? requestAnimationFrame(f) : o.on = 0
  };
  requestAnimationFrame(f)
}

const snap = (e, f) => {
  e.style.transition = 'none';
  f();
  e.offsetWidth;
  e.style.transition = ''
};

const ap = (e, now, f) => now ? snap(e, f) : f();

/* contorno de la barra con joroba (h>0) o muesca (h<0) en cx */
function path(W, cx, h, hw, top) {
  const R = 27, b = top + 54, m = R + hw, y = top - h;
  cx = Math.max(m, Math.min(W - m, cx));
  const a = cx - hw, z = cx + hw;
  return `M${R},${top}L${a},${top}C${a + hw * .5},${top} ${cx - hw * .6},${y} ${cx},${y}C${cx + hw * .6},${y} ${z - hw * .5},${top} ${z},${top}L${W - R},${top}A${R},${R} 0 0 1 ${W},${top + R}A${R},${R} 0 0 1 ${W - R},${b}L${R},${b}A${R},${R} 0 0 1 0,${top + R}A${R},${R} 0 0 1 ${R},${top}Z`
}

/* comportamiento de cada estilo: (barra, índice nuevo, índice previo, sin animar) */
function lens(b, i, p, now) {
  const [l, r, W] = b.span(i), L = b.q('.lens'), f = i > p;
  ap(L, now, () => {
    L.style.setProperty('--dl', (f ? .55 : .26) + 's');
    L.style.setProperty('--dr', (f ? .26 : .55) + 's');
    L.style.left = l + 4 + 'px';
    L.style.right = W - r + 4 + 'px'
  });
  if (!now) {
    L.classList.add('mv');
    clearTimeout(b.tm);
    b.tm = setTimeout(() => L.classList.remove('mv'), 560)
  }
}

function bounce(b, i, p, now) {
  const [l, r] = b.span(i), c = (l + r) / 2, B = b.q('.bub'), D = b.q('.dot');
  ap(B, now, () => B.style.transform = `translateX(${c - B.offsetWidth / 2}px)`);
  ap(D, now, () => D.style.transform = `translateX(${c}px)`);
  if (!now || !B.firstChild) B.innerHTML = ico(TABS[i][0]);
  if (!now) {
    B.classList.remove('hop');
    B.offsetWidth;
    B.classList.add('hop')
  }
}

function wave(b, i, p, now) {
  const [l, r] = b.span(i);
  b.sp = b.sp || new Sp(220, 20);
  const s = b.sp;
  s.t = (l + r) / 2;
  const d = () => {
    const P = path(b.el.clientWidth, s.x, 14, 32, 18);
    b.q('.glass').style.clipPath = `path('${P}')`;
    b.q('path').setAttribute('d', P)
  };
  if (now) {
    s.x = s.t;
    s.v = 0;
    d()
  } else {
    loop(b, dt => {
      const m = s.step(dt);
      d();
      return m
    })
  }
}

function spot(b, i, p, now) {
  const [l, r] = b.span(i), S = b.q('.spot');
  ap(S, now, () => S.style.transform = `translateX(${(l + r) / 2}px)`)
}

function float(b, i, p, now) {
  const [l, r] = b.span(i), B = b.q('.bub');
  b.sp = b.sp || new Sp(170, 16);
  b.lag = b.lag || 0;
  const s = b.sp;
  s.t = (l + r) / 2;
  if (!now || !B.firstChild) B.innerHTML = ico(TABS[i][0]);
  const d = () => {
    const v = Math.min(Math.abs(s.v), 400),
      P = path(b.el.clientWidth, b.lag, -18, 34, 0);
    B.style.transform = `translateX(${s.x - B.offsetWidth / 2}px) scale(${1 + v * .0003},${1 - v * .00025})`;
    b.q('.glass').style.clipPath = `path('${P}')`;
    b.q('path').setAttribute('d', P)
  };
  if (now) {
    s.x = b.lag = s.t;
    s.v = 0;
    d()
  } else {
    loop(b, dt => {
      const m = s.step(dt);
      b.lag += (s.x - b.lag) * (1 - Math.exp(-dt * 12));
      const n = Math.abs(s.x - b.lag) > .4;
      if (!n) b.lag = s.x;
      d();
      return m || n
    })
  }
}

/* barra genérica */
class Bar {
  constructor(el, i, fn, pad) {
    Object.assign(this, { el, fn, pad, i });
    this.tabs = [...el.querySelectorAll('.tab')];
    this.ul = el.querySelector('ul');
    this.tabs.forEach((t, j) => t.onclick = () => this.set(j));
    el.addEventListener('keydown', e => {
      const n = this.tabs.length,
        k = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      let j;
      if (k) j = (this.i + k + n) % n;
      else if (e.key == 'Home') j = 0;
      else if (e.key == 'End') j = n - 1;
      else return;
      e.preventDefault();
      this.set(j);
      this.tabs[j].focus()
    });
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', e.clientX - r.left + 'px');
      el.style.setProperty('--my', e.clientY - r.top + 'px')
    });
    this.mark();
    this.fit()
  }

  q(s) {
    return this.el.querySelector(s)
  }

  mark() {
    this.tabs.forEach((t, j) => {
      const on = j == this.i;
      t.classList.toggle('on', on);
      t.tabIndex = on ? 0 : -1;
      on ? t.setAttribute('aria-current', 'page') : t.removeAttribute('aria-current')
    })
  }

  set(j) {
    if (j == this.i) return;
    const p = this.i;
    this.i = j;
    this.mark();
    this.fn(this, j, p, RM)
  }

  fit() {
    if (this.pad) this.ul.style.padding = `0 ${Math.max(6, (27 + this.pad - this.el.clientWidth / 10) / .8)}px`;
    this.fn(this, this.i, this.i, true)
  }

  span(j) {
    const r = this.el.getBoundingClientRect(),
      t = this.tabs[j].parentNode.getBoundingClientRect();
    return [t.left - r.left, t.right - r.left, r.width]
  }
}

/* los 6 estilos: [nombre, clase, tab inicial, comportamiento, mitad del ancho de joroba/muesca, extras] */
const L = '<i class="lens"></i>',
  P = '<svg class="svg"><path/></svg>';

const S = [
  ['Liquid glass', 'b1', 0, lens, 0, L],
  ['Dark neon lens', 'b2', 2, lens, 0, L],
  ['Bounce', 'b3', 1, bounce, 0, '<i class="bub"></i><i class="dot"></i>'],
  ['Neon wave', 'b4', 2, wave, 32, P],
  ['Spotlight', 'b5', 2, spot, 0, ''],
  ['Floating button', 'b6', 2, float, 34, P + '<i class="bub"></i>']
];

const main = document.getElementById('main');
main.innerHTML = S.map(([n, c, , , , x], k) => `<section><h2>${k + 1} · ${n}</h2>
<nav class="bar ${c}" aria-label="${n}"><div class="glass">${c == 'b5' ? '<i class="spot"><i class="sw"><i class="lb"></i><i class="cone"></i></i></i>' : ''}</div>${x}
<ul>${TABS.map(([k2, t]) => `<li><button class="tab">${ico(k2)}<span>${t}</span></button></li>`).join('')}</ul></nav></section>`).join('');

const bars = S.map(([, , d, fn, pad], k) => new Bar(main.children[k].querySelector('.bar'), d, fn, pad));
new ResizeObserver(() => bars.forEach(b => b.fit())).observe(main);

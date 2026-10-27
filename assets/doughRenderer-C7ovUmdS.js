import{a as e,i as t,n,t as r}from"./Triangle-ErqlYAIr.js";var i=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,a=`
precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec3 uPress; // xy: pointer in ball space, z: press depth 0..1
uniform float uRise; // 0..1 through today's rise
varying vec2 vUv;

const float R = 0.72;
const float PI = 3.14159265;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.03 + 17.0;
    a *= 0.5;
  }
  return v;
}

// Outline radius in the direction of p: breathing, a slow lumpy wobble, a little wider than tall.
float outline(vec2 p) {
  vec2 dir = normalize(p + vec2(1e-5));
  float wobble = (noise(dir * 1.6 + uTime * 0.11) - 0.5) * 0.07;
  float breathe = 1.0 + 0.022 * sin(uTime * 1.05);
  return R * (breathe * (1.0 + 0.05 * dir.x * dir.x) + wobble);
}

// Culture bubbles rising through the ball: 0 outside a bubble, up to 1 at its centre.
float bubbles(vec2 p) {
  float b = 0.0;
  float count = 3.0 + uRise * 6.0;
  for (int i = 0; i < 9; i++) {
    float s = float(i);
    float on = step(s + 0.5, count);
    float period = 7.0 + hash(vec2(s, 2.1)) * 6.0;
    float phase = fract(uTime / period + hash(vec2(s, 7.7)));
    float life = sin(phase * PI);
    vec2 c = vec2((hash(vec2(s, 1.3)) - 0.5) * 0.9, mix(-0.5, 0.52, phase));
    float r = (0.03 + 0.045 * hash(vec2(s, 3.9))) * (0.6 + 0.4 * life);
    float d = length(p - c) / r;
    b += on * life * sqrt(max(0.0, 1.0 - d * d));
  }
  return b;
}

float height(vec2 p, out float edge) {
  edge = length(p) / outline(p);
  float h = pow(sqrt(max(0.0, 1.0 - edge * edge)), 0.75) * 0.9;
  float body = smoothstep(0.0, 0.2, h);
  h += (fbm(p * 5.0 + 3.0) - 0.5) * 0.05 * h;
  h += bubbles(p) * 0.06 * body;
  vec2 q = p - uPress.xy;
  h -= uPress.z * 0.28 * exp(-dot(q, q) / 0.018) * body;
  return h;
}

void main() {
  vec2 p = (vUv * 2.0 - 1.0) * vec2(uRes.x / uRes.y, 1.0);
  p.y += 0.04;
  float px = 2.0 / uRes.y;

  float edge;
  float ignore;
  float h = height(p, edge);
  float hx = height(p + vec2(px, 0.0), ignore);
  float hy = height(p + vec2(0.0, px), ignore);
  vec3 n = normalize(vec3((h - hx) / px * 0.55, (h - hy) / px * 0.55, 1.0));

  vec3 L = normalize(vec3(-0.45, 0.55, 0.75));
  float wrap = pow(clamp(dot(n, L) * 0.5 + 0.5, 0.0, 1.0), 1.25);
  float spec = pow(max(dot(n, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 40.0);

  vec3 dough = vec3(0.925, 0.827, 0.651);
  vec3 deep = vec3(0.851, 0.690, 0.467);
  vec3 crust = vec3(0.60, 0.37, 0.17);
  vec3 col = mix(crust, deep, smoothstep(0.05, 0.5, wrap));
  col = mix(col, dough, smoothstep(0.5, 0.95, wrap));
  float flour = smoothstep(0.62, 0.8, fbm(p * 14.0 + 9.0));
  col = mix(col, vec3(1.0, 0.97, 0.9), flour * 0.22 * wrap);
  col += vec3(0.08, 0.03, 0.0) * (1.0 - wrap);
  // Warm, darker rim where the surface turns away (dough is a little translucent there).
  col = mix(col, crust * 0.85, pow(1.0 - n.z, 2.0) * 0.45);
  col += spec * 0.16;
  float b = clamp(bubbles(p), 0.0, 1.0);
  col = mix(col, vec3(1.0, 0.97, 0.88), b * 0.16);

  // Anti-aliased silhouette over a soft contact shadow and a warm halo.
  float aa = px / R;
  float inside = 1.0 - smoothstep(1.0 - aa * 1.5, 1.0 + aa * 0.5, edge);
  vec2 sp = p - vec2(0.0, -R * 0.94);
  float shadow = exp(-(sp.x * sp.x) / 0.2 - (sp.y * sp.y) / 0.005) * 0.65;
  // Fades to nothing well inside the canvas, so its edges never show.
  float halo = exp(-max(edge - 1.0, 0.0) * 6.0) * 0.12 * (1.0 - smoothstep(1.08, 1.28, edge));
  float under = clamp(shadow + halo, 0.0, 1.0);
  vec3 underCol = dough * (halo / max(shadow + halo, 1e-4));

  float alpha = inside + under * (1.0 - inside);
  vec3 rgb = (col * inside + underCol * under * (1.0 - inside)) / max(alpha, 1e-4);
  gl_FragColor = vec4(rgb, alpha);
}
`,o=.28;function s(s,{rise:c=.5}={}){let l;try{l=new t({dpr:Math.min(window.devicePixelRatio||1,2),alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1})}catch{return null}let u=l.gl;if(!u)return null;let d=u.canvas;d.setAttribute(`aria-hidden`,`true`),s.appendChild(d);let f={uTime:{value:0},uRes:{value:[1,1]},uPress:{value:[0,0,0]},uRise:{value:c}},p=new e(u,{vertex:i,fragment:a,uniforms:f,depthTest:!1}),m=new n(u,{geometry:new r(u),program:p}),h={x:0,y:0,depth:0},g={x:0,y:0,depth:0,velocity:0},_=!1,v=!1;function y(e){let t=s.getBoundingClientRect(),n=t.height/2;h.x=(e.clientX-t.left-t.width/2)/n,h.y=-(e.clientY-t.top-n)/n+.04}let b=()=>h.depth=v?1:_?o:0,x=e=>{y(e),_=e.pointerType===`mouse`,b()},S=e=>{y(e),_||Object.assign(g,{x:h.x,y:h.y}),v=!0,b()},C=()=>{v=!1,b()},w=()=>{v=_=!1,b()};s.addEventListener(`pointermove`,x),s.addEventListener(`pointerdown`,S),s.addEventListener(`pointerup`,C),s.addEventListener(`pointercancel`,w),s.addEventListener(`pointerleave`,w);function T(){let{width:e,height:t}=s.getBoundingClientRect();e&&t&&(l.setSize(e,t),f.uRes.value=[u.drawingBufferWidth,u.drawingBufferHeight])}let E=new ResizeObserver(T);E.observe(s),T();let D=!0,O=0,k=performance.now(),A=0;function j(e){let t=Math.min((e-k)/1e3,.05);k=e,A+=t;let n=t*60;g.velocity+=(h.depth-g.depth)*.12*n,g.velocity*=.78**n,g.depth+=g.velocity*n;let r=1-.75**n;g.x+=(h.x-g.x)*r,g.y+=(h.y-g.y)*r,f.uTime.value=A,f.uPress.value=[g.x,g.y,Math.max(g.depth,-.2)],l.render({scene:m}),O=requestAnimationFrame(j)}function M(){cancelAnimationFrame(O),D&&document.visibilityState===`visible`&&(k=performance.now(),O=requestAnimationFrame(j))}let N=new IntersectionObserver(([e])=>{D=!!e?.isIntersecting,M()});return N.observe(s),document.addEventListener(`visibilitychange`,M),M(),{setRise(e){f.uRise.value=e},destroy(){cancelAnimationFrame(O),N.disconnect(),E.disconnect(),document.removeEventListener(`visibilitychange`,M),s.removeEventListener(`pointermove`,x),s.removeEventListener(`pointerdown`,S),s.removeEventListener(`pointerup`,C),s.removeEventListener(`pointercancel`,w),s.removeEventListener(`pointerleave`,w),u.getExtension(`WEBGL_lose_context`)?.loseContext(),d.remove()}}}export{s as createDoughRenderer};
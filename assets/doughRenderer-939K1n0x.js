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
uniform vec2 uView; // x: how much bigger the ball is drawn (phones), y: how far below centre it sits
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

// Outline radius in the direction of p: breathing, a very slight wobble, a little wider than tall.
float outline(vec2 p) {
  vec2 dir = normalize(p + vec2(1e-5));
  float wobble = (noise(dir * 1.6 + uTime * 0.11) - 0.5) * 0.022;
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
  vec2 p = (vUv * 2.0 - 1.0) * vec2(uRes.x / uRes.y, 1.0) / uView.x;
  p.y += uView.y;
  float px = 2.0 / uRes.y / uView.x;

  float edge;
  float ignore;
  float h = height(p, edge);
  float hx = height(p + vec2(px, 0.0), ignore);
  float hy = height(p + vec2(0.0, px), ignore);
  vec3 n = normalize(vec3((h - hx) / px * 0.55, (h - hy) / px * 0.55, 1.0));

  vec3 L = normalize(vec3(-0.45, 0.55, 0.75));
  float wrap = pow(clamp(dot(n, L) * 0.5 + 0.5, 0.0, 1.0), 1.25);
  float spec = pow(max(dot(n, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 40.0);

  vec3 dough = vec3(0.955, 0.90, 0.81);
  vec3 deep = vec3(0.835, 0.755, 0.645);
  vec3 crust = vec3(0.58, 0.45, 0.32);
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
`,o=.28,s=[1,.75,.6],c=22,l=1200;function u(u,{rise:d=.5}={}){let f=window.matchMedia(`(pointer: coarse)`).matches,p=Math.min(window.devicePixelRatio||1,f?1.5:2),m;try{m=new t({dpr:p,alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1})}catch{return null}let h=m.gl;if(!h)return null;let g=h.canvas;g.setAttribute(`aria-hidden`,`true`),u.appendChild(g);let _=0,v=16,y=0,b={uTime:{value:0},uRes:{value:[1,1]},uPress:{value:[0,0,0]},uRise:{value:d},uView:{value:[1,.04]}},x=new e(h,{vertex:i,fragment:a,uniforms:b,depthTest:!1}),S=new n(h,{geometry:new r(h),program:x}),C={x:0,y:0,depth:0},w={x:0,y:0,depth:0,velocity:0},T=!1,E=!1;function D(e){let t=u.getBoundingClientRect(),n=t.height/2,[r,i]=b.uView.value;C.x=(e.clientX-t.left-t.width/2)/n/r,C.y=-(e.clientY-t.top-n)/n/r+i}let O=()=>C.depth=E?1:T?o:0,k=e=>{D(e),T=e.pointerType===`mouse`,O()},A=e=>{D(e),T||Object.assign(w,{x:C.x,y:C.y}),E=!0,O()},j=()=>{E=!1,O()},M=()=>{E=T=!1,O()};u.addEventListener(`pointermove`,k),u.addEventListener(`pointerdown`,A),u.addEventListener(`pointerup`,j),u.addEventListener(`pointercancel`,M),u.addEventListener(`pointerleave`,M);function N(){let{width:e,height:t}=u.getBoundingClientRect();if(!e||!t)return;m.dpr=p*s[_],m.setSize(e,t),b.uRes.value=[h.drawingBufferWidth,h.drawingBufferHeight];let n=getComputedStyle(u);b.uView.value=[parseFloat(n.getPropertyValue(`--ball-scale`))||1,parseFloat(n.getPropertyValue(`--ball-shift`))||.04]}let P=new ResizeObserver(N);P.observe(u),N();let F=!0,I=0,L=performance.now(),R=0;function z(e){!f||_>=s.length-1||(v+=(e-v)*.05,y+=e,!(y<l||v<=c)&&(_++,y=0,v=16,N()))}function B(e){let t=e-L;t<250&&z(t);let n=Math.min(t/1e3,.05);L=e,R+=n;let r=n*60;w.velocity+=(C.depth-w.depth)*.12*r,w.velocity*=.78**r,w.depth+=w.velocity*r;let i=1-.75**r;w.x+=(C.x-w.x)*i,w.y+=(C.y-w.y)*i,b.uTime.value=R,b.uPress.value=[w.x,w.y,Math.max(w.depth,-.2)],m.render({scene:S}),I=requestAnimationFrame(B)}function V(){cancelAnimationFrame(I),F&&document.visibilityState===`visible`&&(L=performance.now(),I=requestAnimationFrame(B))}let H=new IntersectionObserver(([e])=>{F=!!e?.isIntersecting,V()});return H.observe(u),document.addEventListener(`visibilitychange`,V),V(),{setRise(e){b.uRise.value=e},destroy(){cancelAnimationFrame(I),H.disconnect(),P.disconnect(),document.removeEventListener(`visibilitychange`,V),u.removeEventListener(`pointermove`,k),u.removeEventListener(`pointerdown`,A),u.removeEventListener(`pointerup`,j),u.removeEventListener(`pointercancel`,M),u.removeEventListener(`pointerleave`,M),h.getExtension(`WEBGL_lose_context`)?.loseContext(),g.remove()}}}export{u as createDoughRenderer};
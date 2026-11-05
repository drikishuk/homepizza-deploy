import{a as e,i as t,n,o as r,r as i,t as a}from"./Triangle-ErqlYAIr.js";import{a as o,c as s,d as c,i as l,l as u,n as d,o as f,r as p,s as m,u as h}from"./OurPizzaView-BXm9z-mc.js";var g=new Uint8Array(4);function _(e){return!(e&e-1)}var v=1,y=class{constructor(e,{image:t,target:n=e.TEXTURE_2D,type:r=e.UNSIGNED_BYTE,format:i=e.RGBA,internalFormat:a=i,wrapS:o=e.CLAMP_TO_EDGE,wrapT:s=e.CLAMP_TO_EDGE,wrapR:c=e.CLAMP_TO_EDGE,generateMipmaps:l=n===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:u=l?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:d=e.LINEAR,premultiplyAlpha:f=!1,unpackAlignment:p=4,flipY:m=n==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:h=0,level:g=0,width:_,height:y=_,length:b=1}={}){this.gl=e,this.id=v++,this.image=t,this.target=n,this.type=r,this.format=i,this.internalFormat=a,this.minFilter=u,this.magFilter=d,this.wrapS=o,this.wrapT=s,this.wrapR=c,this.generateMipmaps=l,this.premultiplyAlpha=f,this.unpackAlignment=p,this.flipY=m,this.anisotropy=Math.min(h,this.gl.renderer.parameters.maxAnisotropy),this.level=g,this.width=_,this.height=y,this.length=b,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){let t=!(this.image===this.store.image&&!this.needsUpdate);if((t||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),t){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension(`EXT_texture_filter_anisotropic`).TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let e=0;e<6;e++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,this.level,this.internalFormat,this.format,this.type,this.image[e]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let e=0;e<this.image.length;e++)this.gl.compressedTexImage2D(this.target,e,this.internalFormat,this.image[e].width,this.image[e].height,0,this.image[e].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!_(this.image.width)||!_(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let e=0;e<6;e++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,g);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,g);this.store.image=this.image}}},b=.62,ee=[[-.74,.43],[.74,.43],[0,-.85]],x=e=>2**Math.ceil(Math.log2(e));function S(e){let t=Object.entries(e.attrs).map(([e,t])=>`${e}="${String(t)}"`).join(` `);return`<${e.tag} ${t}/>`}function C(e,t){let n=Math.max(1,Math.ceil(Math.sqrt(e.length))),r=x(n*t),i=[];return{svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${r}" viewBox="0 0 ${r} ${r}">${e.map((e,r)=>{let a=(e.pile?ee.map((t,n)=>({id:e.toppings[n%e.toppings.length],at:t})):[{id:e.toppings[0],at:[0,0]}]).map((t,n)=>({...t,glyph:d(t.id,e.seed*10+n)})).filter(e=>e.glyph),o=a.reduce((e,t)=>e+t.glyph.reach,0)/Math.max(a.length,1),s=a.reduce((e,t)=>Math.max(e,Math.hypot(t.at[0],t.at[1])*o+t.glyph.reach),0);if(i.push(s),!s)return``;let c=r%n*t+t/2,l=Math.floor(r/n)*t+t/2,u=t/2*b/s,f=a.map(e=>`<g transform="translate(${(e.at[0]*o).toFixed(2)} ${(e.at[1]*o).toFixed(2)})">${e.glyph.shapes.map(S).join(``)}</g>`).join(``);return`<g transform="translate(${c} ${l}) scale(${u.toFixed(4)}) translate(-100 -100)">${f}</g>`}).join(``)}</svg>`,size:r,cols:n,reach:i}}async function te(e,t){let{svg:n,size:r,cols:i,reach:a}=C(e,t),o=new Image;o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`,await o.decode();let s=document.createElement(`canvas`);return s.width=s.height=r,s.getContext(`2d`).drawImage(o,0,0,r,r),{canvas:s,size:r,cell:t,cols:i,reach:a}}var ne=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,re=`
precision highp float;
uniform sampler2D uNoise;
uniform float uTime;
uniform vec2 uRes;
uniform vec3 uFrame; // ball centre (drawing-buffer px) and the unit radius in px
uniform vec3 uPress; // xy: pointer in ball space, z: press depth 0..1
uniform vec3 uLensAt; // lens centre (ball space) and radius
uniform float uRise;
uniform float uLens;
uniform float uCells;
uniform float uNetwork;
uniform float uCold;
uniform float uGloss;
uniform float uFlatten;
uniform float uDimple;
uniform float uSauce;
uniform float uCheese;
uniform float uZoom;
uniform vec3 uDough; // the dough's own frame: on phones the ball fills more of the slot (lib/phoneFrame)
uniform vec3 uSpot; // where the spotlit topping hangs (frame units) and how strongly it's lit
varying vec2 vUv;

const float PI = 3.14159265;
const float BASE_R = ${p.toFixed(3)};
const float BALL_R = ${u.toFixed(3)};
const float BALL_GROWTH = ${s.toFixed(3)};
// The sauce stops short of the rim (edge units); the presses stop short of the sauce's edge.
const float SAUCE_REACH = 0.8;
const float SAUCE_TURNS = 3.0;
const float DIMPLE_REACH = 0.74;
const float RINGS = 5.0;
const float SHRED_CELL = 0.085;

// A tileable value-noise texture stands in for hash fbm (much cheaper on phones).
float noise(vec2 p) { return texture2D(uNoise, p / 32.0).r; }
float noise2(vec2 p) { return texture2D(uNoise, p / 32.0).g; }
float fbm(vec2 p) {
  return noise(p) * 0.5 + noise(p * 2.03 + 17.0) * 0.25 + noise(p * 4.1 + 31.0) * 0.125 + noise(p * 8.3 + 5.0) * 0.0625;
}
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec4 over(vec4 dst, vec4 src) {
  float a = src.a + dst.a * (1.0 - src.a);
  vec3 rgb = (src.rgb * src.a + dst.rgb * dst.a * (1.0 - src.a)) / max(a, 1e-4);
  return vec4(rgb, a);
}

// The ball grows as it rises (from small enough for the rise to read), then spreads into the base.
float radius() { return mix(BALL_R + BALL_GROWTH * uRise, BASE_R, uFlatten); }

// Outline radius in the direction of p: breathing, and a slow wobble that's barely there on the ball.
// A stretched base wobbles more (it's by hand) but barely breathes.
float outline(vec2 p) {
  vec2 dir = normalize(p + vec2(1e-5));
  float wobble = (noise(dir * 1.6 + uTime * 0.11) - 0.5) * mix(0.022, 0.07, uFlatten) + (noise2(dir * 1.1 + 13.0) - 0.5) * 0.03 * uFlatten;
  float breathe = 1.0 + 0.022 * (1.0 - 0.8 * uFlatten) * sin(uTime * 1.05);
  return radius() * (breathe * (1.0 + 0.05 * (1.0 - uFlatten) * dir.x * dir.x) + wobble);
}

// Culture bubbles rising through the ball: more as it rises, bigger and airier with gloss.
// Pressed out as it flattens.
float bubbles(vec2 p) {
  if (uFlatten >= 0.999) return 0.0;
  float b = 0.0;
  float count = 3.0 + uRise * 6.0;
  float grow = 1.0 + uGloss * 0.9;
  for (int i = 0; i < 9; i++) {
    float s = float(i);
    float on = clamp(count - s, 0.0, 1.0);
    float period = 7.0 + hash(vec2(s, 2.1)) * 6.0;
    float phase = fract(uTime / period + hash(vec2(s, 7.7)));
    float life = sin(phase * PI);
    vec2 c = vec2((hash(vec2(s, 1.3)) - 0.5) * 0.9, mix(-0.5, 0.52, phase)) * radius() / 0.72;
    float r = (0.03 + 0.045 * hash(vec2(s, 3.9))) * (0.6 + 0.4 * life) * grow;
    float d = length(p - c) / r;
    b += on * life * sqrt(max(0.0, 1.0 - d * d));
  }
  return b * (1.0 - uFlatten);
}

// Fingertip presses, worked ring by ring from the centre and round each ring, so they land in a
// spiral. Each one sinks as it's pressed and springs halfway back as the finger lifts.
// x: depth, yz: its gradient (analytic, so the normal doesn't need two more passes).
vec3 dimples(vec2 p) {
  if (uDimple <= 0.0 || uFlatten <= 0.0) return vec3(0.0);
  float R = radius();
  float rc = length(p) / (R * DIMPLE_REACH) * RINGS - 0.5;
  float ang = atan(p.y, p.x) / (2.0 * PI);
  vec3 sum = vec3(0.0);
  for (int dk = 0; dk < 2; dk++) {
    float k = floor(rc) + float(dk);
    if (k < 0.0 || k > RINGS - 1.0) continue;
    float n = max(3.0, floor(2.0 * PI * (k + 0.5) * 0.85));
    float rho = (k + 0.5) / RINGS * DIMPLE_REACH * R;
    float stagger = hash(vec2(k, 1.7));
    float jf = ang * n - stagger;
    for (int dj = -1; dj <= 1; dj++) {
      float j = mod(floor(jf + 0.5) + float(dj), n);
      vec2 jit = vec2(hash(vec2(k, j)), hash(vec2(j, k + 3.1))) - 0.5;
      float phi = (j + stagger + jit.x * 0.35) / n * 2.0 * PI;
      vec2 c = vec2(cos(phi), sin(phi)) * rho * (1.0 + jit.y * 0.12);
      float age = (uDimple - (k + j / n) / RINGS) * RINGS;
      float dent = smoothstep(0.0, 0.06, age) * (0.5 + 0.5 * exp(-max(age, 0.0) * 4.0));
      vec2 q = p - c;
      float v = dent * exp(-dot(q, q) / 0.0042);
      sum += vec3(v, v * q * (-2.0 / 0.0042));
    }
  }
  return sum;
}

// The ladle spirals out from the centre: a point is covered once the spiral has passed over it.
// x: cover (a crisp edge), y: thickness (thin at the spreading front and at the outer edge).
vec2 sauceCover(vec2 p, float edge) {
  if (uSauce <= 0.0) return vec2(0.0);
  float r = edge / SAUCE_REACH + (noise(p * 6.0 + 21.0) - 0.5) * 0.09;
  float a = atan(p.y, p.x) / (2.0 * PI);
  float lead = r - 0.5 / SAUCE_TURNS;
  float tau = lead + fract(a - lead * SAUCE_TURNS) / SAUCE_TURNS;
  float prog = uSauce * (1.04 + 0.5 / SAUCE_TURNS);
  float cover = smoothstep(tau, tau + 0.02, prog) * (1.0 - smoothstep(0.97, 1.0, r));
  float thick = smoothstep(tau, tau + 0.07, prog) * (1.0 - smoothstep(0.82, 1.0, r));
  return vec2(cover, thick);
}

// Grated mozzarella: a short strand per grid cell (two offset grids), each dropping in at its own
// moment. While it falls it's nearer the camera: bigger, turning, with a long soft shadow.
// x: cover, y: shadow on what's underneath, zw: where across the strand we are (for its normal).
vec4 shreds(vec2 p, float px) {
  if (uCheese <= 0.0 || length(p) > radius() * 0.86) return vec4(0.0);
  float cover = 0.0;
  float shadow = 0.0;
  vec2 across = vec2(0.0);
  float reach = radius() * SAUCE_REACH * 0.94;
  // Once every strand has landed, none reaches past the middle of the next cell, so only the
  // nearer neighbours count (4 cells instead of 9).
  bool landed = uCheese >= 1.0;
  for (int layer = 0; layer < 2; layer++) {
    float L = float(layer);
    vec2 shift = L * vec2(0.5, 0.37);
    vec2 g = p / SHRED_CELL + shift;
    vec2 cell = floor(g);
    vec2 side = sign(fract(g) - 0.5);
    for (int i = -1; i <= 1; i++) {
      for (int j = -1; j <= 1; j++) {
        if (landed && ((i != 0 && float(i) != side.x) || (j != 0 && float(j) != side.y))) continue;
        vec2 id = cell + vec2(float(i), float(j));
        float when = hash(id * 0.71 + 9.0 + L * 3.0);
        float fall = clamp((uCheese * 1.25 - when) / 0.25, 0.0, 1.0);
        if (fall <= 0.0) continue;
        vec2 rnd = vec2(hash(id + L * 17.0), hash(id * 1.37 + 5.0 + L * 11.0));
        vec2 c = (id + 0.5 + (rnd - 0.5) * 0.7 - shift) * SHRED_CELL;
        if (length(c) > reach) continue;
        float land = 1.0 - pow(1.0 - fall, 3.0);
        float near = 1.0 - land;
        float scale = 1.0 + 0.9 * near;
        float ang = rnd.x * 2.0 * PI + near * 1.5;
        vec2 dir = vec2(cos(ang), sin(ang));
        float len = (0.24 + 0.18 * rnd.y) * SHRED_CELL * scale;
        float w = (0.13 + 0.04 * rnd.x) * SHRED_CELL * scale;
        float show = smoothstep(0.0, 0.3, fall);
        vec2 q = p - c;
        vec2 d = q - dir * clamp(dot(q, dir), -len, len);
        float cov = (1.0 - smoothstep(w - px, w + px, length(d))) * show;
        if (cov > cover) {
          cover = cov;
          across = d / w;
        }
        vec2 qs = q - vec2(0.01, -0.014) * (1.0 + 4.0 * near);
        vec2 ds = qs - dir * clamp(dot(qs, dir), -len, len);
        shadow = max(shadow, (1.0 - smoothstep(w * 0.5, w * (1.6 + 2.0 * near), length(ds))) * show * (0.42 - 0.2 * near));
      }
    }
  }
  return vec4(cover, shadow, across);
}

// Height of the dough at p (its silhouette edge and the sauce come out too, for shading).
float height(vec2 p, out float edge, out vec2 sauce) {
  edge = length(p) / outline(p);
  float ball = 0.0;
  if (uFlatten < 1.0) {
    ball = pow(sqrt(max(0.0, 1.0 - edge * edge)), 0.75) * (0.75 + 0.35 * uRise);
    ball += (fbm(p * 5.0 + 3.0) - 0.5) * 0.05 * ball;
  }
  // The base: a thin bed with a puffy rim (the cornicione), its outer edge rounded off.
  float disc = 0.0;
  if (uFlatten > 0.0) {
    float bed = 0.1 * sqrt(max(0.0, 1.0 - pow(min(edge, 1.0), 12.0)));
    vec2 dir = normalize(p + vec2(1e-5));
    float puff = 0.75 + 0.5 * noise(dir * 2.2 + 4.0);
    disc = bed + 0.3 * puff * exp(-pow((edge - 0.87) / (0.07 + 0.025 * puff), 2.0)) + (fbm(p * 7.0 + 5.0) - 0.5) * 0.025;
  }
  float h = mix(ball, disc, uFlatten);
  float body = mix(smoothstep(0.0, 0.2, ball), 1.0 - smoothstep(0.95, 1.0, edge), uFlatten);
  h += bubbles(p) * 0.06 * body;
  sauce = sauceCover(p, edge);
  h += sauce.y * 0.012;
  vec2 q = p - uPress.xy;
  h -= uPress.z * mix(0.28, 0.1, uFlatten) * exp(-dot(q, q) / 0.018) * body;
  return h;
}

vec4 dough(vec2 p, float px) {
  // Past the halo and the shadows there's only bench: skip the heightfield (most of the canvas).
  if (length(p) > radius() * 1.8) return vec4(0.0);
  float edge;
  float ignore;
  vec2 sauce;
  vec2 ignore2;
  float h = height(p, edge, sauce);
  float hx = height(p + vec2(px, 0.0), ignore, ignore2);
  float hy = height(p + vec2(0.0, px), ignore, ignore2);
  // The presses go in by their own gradient; sauce settles into them, so they soften under it.
  vec2 dent = dimples(p).yz * 0.05 * uFlatten * (1.0 - 0.6 * sauce.y);
  vec3 n = normalize(vec3(((h - hx) / px + dent.x) * 0.55, ((h - hy) / px + dent.y) * 0.55, 1.0));

  vec3 L = normalize(vec3(-0.45, 0.55, 0.75));
  float wrap = pow(clamp(dot(n, L) * 0.5 + 0.5, 0.0, 1.0), 1.25);
  float shine = mix(40.0, 90.0, uGloss);
  float spec = pow(max(dot(n, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), shine);

  // Fresh dough is paler and greyer; it warms a little as it proves, but stays pale.
  vec3 doughCol = mix(vec3(0.945, 0.915, 0.86), vec3(0.955, 0.90, 0.81), smoothstep(0.0, 0.6, uRise));
  vec3 deep = mix(vec3(0.80, 0.755, 0.68), vec3(0.835, 0.755, 0.645), smoothstep(0.0, 0.6, uRise));
  vec3 crust = vec3(0.58, 0.45, 0.32);
  vec3 col = mix(crust, deep, smoothstep(0.05, 0.5, wrap));
  col = mix(col, doughCol, smoothstep(0.5, 0.95, wrap));
  // A dusting of flour, and the base picks up a little more off the bench.
  float flour = smoothstep(0.62, 0.8, fbm(p * 14.0 + 9.0));
  col = mix(col, vec3(1.0, 0.97, 0.9), flour * (0.22 + 0.12 * uFlatten) * wrap);
  col += vec3(0.08, 0.03, 0.0) * (1.0 - wrap);
  col = mix(col, crust * 0.85, pow(1.0 - n.z, 2.0) * 0.45);
  col += spec * (0.16 + 0.3 * uGloss) * (1.0 - 0.5 * uFlatten);
  float b = clamp(bubbles(p), 0.0, 1.0);
  col = mix(col, vec3(1.0, 0.97, 0.88), b * (0.16 + 0.12 * uGloss));

  // Mutti sauce: deep tomato, lighter where it's thin, with faint ladle grooves along the spiral
  // and a wet shine. Where it thins out, the dough shows through.
  if (sauce.x > 0.0) {
    float r = edge / SAUCE_REACH;
    float a = atan(p.y, p.x) / (2.0 * PI);
    float groove = sin((a - r * SAUCE_TURNS) * 6.0 * PI + fbm(p * 4.0) * 4.0);
    vec3 tomato = mix(vec3(0.5, 0.07, 0.035), vec3(0.78, 0.16, 0.07), fbm(p * 3.0 + 40.0));
    tomato *= 1.0 + groove * 0.06;
    vec3 thin = col * vec3(0.86, 0.4, 0.26);
    vec3 s = mix(thin, tomato * (0.45 + 0.7 * wrap), sauce.y);
    float fleck = smoothstep(0.9, 0.96, noise2(p * 38.0 + 3.0)) * sauce.y;
    s = mix(s, vec3(0.2, 0.12, 0.05), fleck * 0.55);
    float wet = pow(max(dot(n, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 70.0);
    s += wet * 0.45 * sauce.y;
    col = mix(col, s, sauce.x);
  }

  // Grated mozzarella over the top, each strand lit as a little cylinder, with its shadow.
  vec4 cheese = shreds(p, px / 1.5);
  if (cheese.x > 0.0 || cheese.y > 0.0) {
    col *= 1.0 - cheese.y * (1.0 - cheese.x);
    vec3 cn = normalize(vec3(cheese.zw * 0.9, sqrt(max(0.05, 1.0 - dot(cheese.zw, cheese.zw)))));
    float cw = clamp(dot(cn, L) * 0.5 + 0.5, 0.0, 1.0);
    vec3 mozz = vec3(0.97, 0.93, 0.8) * (0.6 + 0.45 * cw) + vec3(0.07, 0.04, 0.0) * (1.0 - cw);
    mozz += pow(max(dot(cn, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 24.0) * 0.18;
    col = mix(col, mozz, cheese.x);
  }

  // Anti-aliased silhouette over a soft contact shadow and a warm halo that glows at the peak.
  float R = radius();
  float aa = px / R;
  float inside = 1.0 - smoothstep(1.0 - aa * 1.5, 1.0 + aa * 0.5, edge);
  vec2 sp = p - vec2(0.0, -R * 0.94);
  float ballShadow = exp(-(sp.x * sp.x) / (0.28 * R) - (sp.y * sp.y) / 0.005) * 0.65;
  // The flat base casts a soft drop shadow down and to the right instead.
  float discShadow = (1.0 - smoothstep(0.96, 1.12, length(p - vec2(0.025, -0.04)) / R)) * 0.6;
  float shadow = mix(ballShadow, discShadow, uFlatten);
  float glow = uGloss * smoothstep(0.7, 1.0, uRise);
  float halo = exp(-max(edge - 1.0, 0.0) * mix(6.0, 3.2, glow)) * (0.12 + 0.22 * glow) * (1.0 - smoothstep(1.08, 1.5, edge));
  float under = clamp(shadow + halo, 0.0, 1.0);
  vec3 haloCol = mix(doughCol, vec3(1.0, 0.72, 0.38), glow);
  vec3 underCol = haloCol * (halo / max(shadow + halo, 1e-4));

  float alpha = inside + under * (1.0 - inside);
  vec3 rgb = (col * inside + underCol * under * (1.0 - inside)) / max(alpha, 1e-4);
  return vec4(rgb, alpha);
}

// ---- the micro scene inside the lens (units: roughly one cell = 1)
const int CELLS = 13;

vec2 cellPos(float s) {
  vec2 base = vec2(hash(vec2(s, 4.1)), hash(vec2(s, 8.3))) * 4.6 - 2.3;
  return base + 0.12 * vec2(sin(uTime * 0.21 + s * 1.7), cos(uTime * 0.17 + s * 2.3));
}

float segment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0));
}

vec4 micro(vec2 m) {
  // Backlit dough: warm cream with a soft vignette, a little colder in the fridge.
  vec3 col = mix(vec3(0.97, 0.91, 0.79), vec3(0.88, 0.78, 0.62), smoothstep(0.6, 3.4, length(m)));
  // Gluten strands: ridged noise drawn as thin amber lines, tighter once the network forms.
  float g = 1.0 - abs(noise(m * 0.9 + vec2(uTime * 0.02, 0.0)) * 2.0 - 1.0);
  float g2 = 1.0 - abs(noise2(m * 1.7 + 11.0) * 2.0 - 1.0);
  float strands = smoothstep(0.86, 0.97, g) * 0.6 + smoothstep(0.9, 0.98, g2) * 0.35 * (0.4 + 0.6 * uNetwork);
  col = mix(col, vec3(0.74, 0.55, 0.33), strands * 0.55);

  float count = uCells * float(CELLS);
  float body = 1e3;
  float link = 1e3;
  for (int i = 0; i < CELLS; i++) {
    float s = float(i);
    float on = clamp(count - s, 0.0, 1.0);
    if (on <= 0.0) continue;
    vec2 c = cellPos(s);
    float r = (0.34 + 0.12 * hash(vec2(s, 5.5))) * (0.4 + 0.6 * on);
    // A bud swells off each cell, pinches and starts again.
    float cycle = fract(uTime / (6.0 + 3.0 * hash(vec2(s, 9.1))) + hash(vec2(s, 3.3)));
    float ang = hash(vec2(s, 6.6)) * 6.2831;
    vec2 dir = vec2(cos(ang), sin(ang));
    float br = r * 0.62 * smoothstep(0.0, 0.8, cycle) * on;
    vec2 bc = c + dir * (r + br * 0.55);
    float d = min(length(m - c) - r, length(m - bc) - br);
    body = min(body, d);
    // The network: each cell holds hands with the next.
    vec2 nb = cellPos(mod(s + 1.0, float(CELLS)));
    float nextOn = clamp(count - mod(s + 1.0, float(CELLS)), 0.0, 1.0);
    if (nextOn > 0.0) link = min(link, segment(m, c, nb) + (1.0 - uNetwork) * 9.0);
  }
  float lw = 0.035 + 0.03 * uNetwork;
  float linkMask = (1.0 - smoothstep(lw, lw + 0.03, link)) * uNetwork;
  col = mix(col, vec3(0.66, 0.47, 0.27), linkMask * 0.75);

  float fill = 1.0 - smoothstep(-0.02, 0.02, body);
  float edgeLine = 1.0 - smoothstep(0.0, 0.06, abs(body + 0.04));
  vec3 cellCol = mix(vec3(1.0, 0.98, 0.92), vec3(0.96, 0.9, 0.76), smoothstep(-0.3, 0.0, body));
  col = mix(col, cellCol, fill);
  col = mix(col, vec3(0.55, 0.36, 0.18), edgeLine * 0.85 * step(body, 0.06));
  return vec4(col, 1.0);
}

vec4 lensLayer(vec2 p, float px) {
  float show = smoothstep(0.0, 0.35, uLens);
  if (show <= 0.0) return vec4(0.0);
  float slide = 1.0 - (1.0 - uLens) * (1.0 - uLens) * (1.0 - uLens);
  vec2 centre = uLensAt.xy + vec2((1.0 - slide) * 2.6, (1.0 - slide) * 0.4);
  float lr = uLensAt.z;
  vec2 q = (p - centre) / lr;
  float d = length(q);
  float aa = px / lr * 1.5;
  // A soft drop shadow, offset down and right.
  float sd = length((p - centre - vec2(0.05, -0.08) * lr) / lr);
  vec4 shadow = vec4(0.0, 0.0, 0.0, exp(-pow(max(sd - 0.95, 0.0) * 5.0, 2.0)) * 0.4 * step(sd, 1.6));
  if (d > 1.12) return shadow * vec4(1.0, 1.0, 1.0, show);

  // Barrel distortion towards the glass edge.
  vec2 m = q * (1.0 + 0.18 * d * d) * 3.0;
  vec3 col = micro(m).rgb * (1.0 - 0.35 * smoothstep(0.55, 1.0, d));
  col = mix(col, col * vec3(0.84, 0.92, 1.06), uCold * 0.5);
  // Glass: a sheen across the top left.
  col += vec3(0.12) * smoothstep(0.22, 0.0, abs(q.x - q.y * -1.0 + 0.95));
  float inside = 1.0 - smoothstep(1.0 - aa, 1.0, d);
  // Bezel: a dark ring with a thin glowing inner rim (UI, so it may use the fermentation green).
  float bezel = smoothstep(1.0 - aa, 1.0, d) * (1.0 - smoothstep(1.1 - aa, 1.1, d));
  float rim = 1.0 - smoothstep(0.0, aa * 1.5, abs(d - 1.0));
  vec3 bezelCol = mix(vec3(0.11, 0.09, 0.085), vec3(0.8, 0.96, 0.42), rim * 0.85);
  float a = clamp(inside + bezel, 0.0, 1.0);
  vec3 rgb = (col * inside + bezelCol * bezel) / max(a, 1e-4);
  vec4 lens = over(shadow, vec4(rgb, a));
  return vec4(lens.rgb, lens.a * show);
}

// Ice needles: noise stretched along one axis, so its ridges become long thin crystals.
float needles(vec2 s, float ang, float scale, float thr) {
  float c = cos(ang);
  float sn = sin(ang);
  vec2 q = vec2(c * s.x - sn * s.y, sn * s.x + c * s.y) * vec2(scale * 0.3, scale * 2.4);
  float ridge = 1.0 - abs(noise(q) * 2.0 - 1.0);
  return smoothstep(thr, thr + 0.025, ridge);
}

vec4 frost(vec2 uv) {
  if (uCold <= 0.0) return vec4(0.0);
  float aspect = uRes.x / uRes.y;
  vec2 s = vec2(uv.x * aspect, uv.y);
  // Distance to the nearest edge, in units of the shorter side (so phones get a thinner rim).
  // Top and bottom count double, keeping the HUD and transport clear.
  vec2 px = uv * uRes;
  vec2 toEdge = min(px, uRes - px) * vec2(1.0, 2.0);
  float e = min(toEdge.x, toEdge.y) / min(uRes.x, uRes.y);
  if (e > uCold * 0.1 + 0.04) return vec4(0.0);
  // A ragged front that creeps in from every edge; crystals pack tighter behind it.
  float front = uCold * 0.1 + (fbm(s * 6.0 + 3.0) - 0.5) * 0.06;
  // Clear glass in the middle: nothing to draw past the front.
  if (e > front + 0.01) return vec4(0.0);
  float mask = 1.0 - smoothstep(front - 0.02, front + 0.01, e);
  float density = smoothstep(front, 0.0, e);
  // Gently curved, like ferns, then three needle sets 60 degrees apart (ice is hexagonal).
  vec2 w = s + (vec2(noise(s * 5.0), noise2(s * 5.0)) - 0.5) * 0.06;
  float thr = mix(0.985, 0.935, density);
  float lines = 0.0;
  for (int i = 0; i < 3; i++) {
    float ang = 0.35 + float(i) * 1.0472;
    lines = max(lines, needles(w, ang, 22.0, thr));
    lines = max(lines, needles(w + 7.3, ang + 0.2, 52.0, thr + 0.008) * 0.6);
  }
  // A thin icy film: blue, mostly clear, thickest at the very edge.
  float film = 0.03 + 0.16 * density * density;
  // Twinkling glints on the crystals.
  vec2 cell = floor(uv * uRes / 3.0);
  float h = hash(cell);
  float spark = step(0.992, h) * (0.55 + 0.45 * sin(uTime * 2.5 + h * 60.0)) * step(0.15, density + lines);
  float lineA = lines * (0.3 + 0.4 * density);
  float a = clamp(film + lineA + spark, 0.0, 0.9) * mask * uCold;
  vec3 rgb = (vec3(0.62, 0.78, 0.95) * film + vec3(0.86, 0.94, 1.0) * lineA + vec3(1.0) * spark)
    / max(film + lineA + spark, 1e-4);
  return vec4(rgb, a);
}

void main() {
  vec2 frag = vUv * uRes;
  // Frame units (the toppings and the lens use these); the dough shrinks as the camera pulls back.
  vec2 f = (frag - uFrame.xy) / uFrame.z;
  float zs = 1.0 - uZoom;
  vec2 p = (frag - uDough.xy) / uDough.z / zs;
  float px = 1.0 / (uDough.z * zs);

  // A warm pool of light where the spotlit topping hangs.
  vec2 sd = f - uSpot.xy;
  vec4 col = vec4(1.0, 0.74, 0.42, exp(-dot(sd, sd) / 0.1) * 0.14 * uSpot.z);
  vec4 d = dough(p, px * 1.5);
  // The fridge: the dough cools to a bluer cast.
  d.rgb = mix(d.rgb, d.rgb * vec3(0.8, 0.88, 1.04) + vec3(0.0, 0.015, 0.045), uCold * 0.65);
  col = over(col, d);
  col = over(col, lensLayer(f, 1.0 / uFrame.z));
  col = over(col, frost(vUv));
  gl_FragColor = col;
}
`,w=`
attribute vec2 position;
attribute vec4 aPose; // centre (frame units), half-size of the quad, rotation
attribute vec4 aCell; // atlas cell: top-left uv, size in uv, alpha
attribute float aLift;
uniform vec3 uFrame;
uniform vec2 uRes;
varying vec2 vUv;
varying vec4 vCell;
varying float vAngle;
varying float vLift;
void main() {
  float c = cos(aPose.w);
  float s = sin(aPose.w);
  vec2 world = aPose.xy + mat2(c, s, -s, c) * position * aPose.z;
  gl_Position = vec4((uFrame.xy + world * uFrame.z) / uRes * 2.0 - 1.0, 0.0, 1.0);
  vUv = aCell.xy + vec2(position.x * 0.5 + 0.5, 0.5 - position.y * 0.5) * aCell.z;
  vCell = aCell;
  vAngle = aPose.w;
  vLift = aLift;
}
`,T=`
precision highp float;
uniform sampler2D uAtlas;
uniform float uLod; // mip bias for the blur, so it's the same relative to the cell at any atlas size
uniform float uOpacity;
varying vec2 vUv;
varying vec4 vCell;
varying float vAngle;
varying float vLift;

vec4 tap(vec2 uv, float bias) {
  return texture2D(uAtlas, clamp(uv, vCell.xy, vCell.xy + vCell.zz), bias);
}

void main() {
  vec4 tex = texture2D(uAtlas, vUv); // premultiplied
  float e = vCell.z * 0.012;
  float hx = tap(vUv + vec2(e, 0.0), uLod).a - tap(vUv - vec2(e, 0.0), uLod).a;
  float hy = tap(vUv - vec2(0.0, e), uLod).a - tap(vUv + vec2(0.0, e), uLod).a;
  float cs = cos(vAngle);
  float sn = sin(vAngle);
  vec2 g = mat2(cs, sn, -sn, cs) * vec2(hx, hy);
  vec3 n = normalize(vec3(-g * 1.4, 1.0));
  vec3 L = normalize(vec3(-0.45, 0.55, 0.75));
  float wrap = pow(clamp(dot(n, L) * 0.5 + 0.5, 0.0, 1.0), 1.25);
  float spec = pow(max(dot(n, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 40.0);
  vec3 rgb = tex.a > 0.0 ? tex.rgb / tex.a : vec3(0.0);
  rgb = rgb * (0.5 + 0.62 * wrap) + spec * (0.14 + 0.1 * vLift);

  // The drop shadow is the piece's own shape, offset away from the light; the higher it floats,
  // the further and softer it falls.
  vec2 off = mat2(cs, -sn, sn, cs) * (vec2(0.06, -0.08) * (0.5 + 1.6 * vLift));
  float shadow = tap(vUv - vec2(off.x, -off.y) * 0.5 * vCell.z, uLod + 1.0 + vLift).a * (0.5 - 0.15 * vLift);
  float a = tex.a + shadow * (1.0 - tex.a);
  gl_FragColor = vec4(rgb * tex.a / max(a, 1e-4), a * vCell.w * uOpacity);
}
`,ie=.28,E=2,ae=.06,oe=3,se=[.58,.38,.52],D=[1,.8,.65],ce=[...D,.5],le=22,ue=1200;function de(e=256,t=32){let n=e=>{let n=new Float32Array(t*t),r=e;for(let e=0;e<n.length;e++)r=r*1664525+1013904223>>>0,n[e]=r/4294967296;return n},r=n(7),i=n(91),a=new Uint8Array(e*e*4),o=e/t,s=e=>e*e*(3-2*e),c=(e,n,r)=>{let i=Math.floor(n),a=Math.floor(r),o=s(n-i),c=s(r-a),l=(n,r)=>e[(r+t)%t*t+(n+t)%t],u=l(i,a)+(l(i+1,a)-l(i,a))*o;return u+(l(i,a+1)+(l(i+1,a+1)-l(i,a+1))*o-u)*c};for(let t=0;t<e;t++)for(let n=0;n<e;n++){let s=(t*e+n)*4;a[s]=Math.round(c(r,n/o,t/o)*255),a[s+1]=Math.round(c(i,n/o,t/o)*255),a[s+2]=0,a[s+3]=255}return a}function fe(e){let t=[],n=e=>t.push(e)-1,r=e.map(e=>{let t=[],r=Math.ceil(E/e.length);for(let i=0;i<r;i++)for(let r of e)t.push(n({toppings:[r],seed:i}));return t}),i=e.map(e=>n({toppings:e,seed:7,pile:!0}));return{sprites:t,pieces:l(r,{heroes:i})}}function pe(t,i,a,s){let c=a.length,l=new Float32Array(c*4),u=new Float32Array(c*4),d=new Float32Array(c),f=new r(t,{position:{size:2,data:new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1])},aPose:{instanced:1,size:4,data:l},aCell:{instanced:1,size:4,data:u},aLift:{instanced:1,size:1,data:d}}),p=new y(t,{image:i.canvas,width:i.size,height:i.size,generateMipmaps:!0,minFilter:t.LINEAR_MIPMAP_LINEAR,magFilter:t.LINEAR,premultiplyAlpha:!0,flipY:!1}),m=new e(t,{vertex:w,fragment:T,uniforms:{uAtlas:{value:p},uLod:{value:Math.log2(i.cell/128)},uOpacity:{value:0},uFrame:s.uFrame,uRes:s.uRes},transparent:!0,depthTest:!1,depthWrite:!1});m.setBlendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);let h=new n(t,{geometry:f,program:m,frustumCulled:!1});h.visible=!1;let g=i.cell/i.size,_=a.map((e,t)=>t);return{mesh:h,update(e,t,n,r){if(h.visible=e.orbit>0&&r>0,!h.visible)return;m.uniforms.uOpacity.value=r;let s=o(a,e,{time:t,spin:n,reach:i.reach});_.sort((e,t)=>s[e].lift-s[t].lift),_.forEach((e,t)=>{let n=s[e],r=a[e].sprite;l.set([n.x,n.y,n.size/b,n.angle],t*4),u.set([r%i.cols*g,Math.floor(r/i.cols)*g,g,n.alpha],t*4),d[t]=n.lift}),f.attributes.aPose.needsUpdate=!0,f.attributes.aCell.needsUpdate=!0,f.attributes.aLift.needsUpdate=!0}}}function me(){try{let e=document.createElement(`canvas`),t=e.getContext(`webgl`)??e.getContext(`experimental-webgl`);return t?.getExtension(`WEBGL_lose_context`)?.loseContext(),!!t}catch{return!1}}function O(r,o={}){if(!me())return null;let s=window.matchMedia(`(pointer: coarse)`).matches,l=Math.min(window.devicePixelRatio||1,s?1.5:2),u=s?ce:D,d=0,p;try{p=new t({dpr:l,alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1})}catch{return null}let g=p.gl;if(!g)return null;let _=g.canvas;_.setAttribute(`aria-hidden`,`true`),_.dataset.scale=String(u[d]),r.appendChild(_);let v={uNoise:{value:new y(g,{image:de(),width:256,height:256,wrapS:g.REPEAT,wrapT:g.REPEAT,minFilter:g.LINEAR,magFilter:g.LINEAR,generateMipmaps:!1,flipY:!1})},uTime:{value:0},uRes:{value:[1,1]},uFrame:{value:[0,0,1]},uDough:{value:[0,0,1]},uPress:{value:[0,0,0]},uLensAt:{value:se},uSpot:{value:[0,0,0]}},b=e=>`u${e[0].toUpperCase()}${e.slice(1)}`;for(let e of h)v[b(e)]={value:c[e]};let ee=new e(g,{vertex:ne,fragment:re,uniforms:v,depthTest:!1}),x=new n(g,{geometry:new a(g),program:ee}),S=new i;x.setParent(S);let C=c,w=null,T=0,E=0,O=!1,k=()=>{};async function he(){if(!o.toppings?.length)return;let{sprites:e,pieces:t}=fe(o.toppings);try{let n=await te(e,s?256:512);if(O)return;w=pe(g,n,t,v),w.mesh.setParent(S),P=!0}catch{w=null}}function ge(){let e=()=>void he();if(typeof requestIdleCallback==`function`){let t=requestIdleCallback(e,{timeout:2e3});k=()=>cancelIdleCallback(t)}else{let t=setTimeout(e,800);k=()=>clearTimeout(t)}}let _e=!0,A=0,j=performance.now(),M=0,N=!!o.frozen,P=!0,F=!0,I=16,L=0,R={cx:0,cy:0,r:1},z={cx:0,cy:0,r:1},B={width:1,height:1};function V(){let e=g.drawingBufferHeight/B.height;v.uFrame.value=[R.cx*e,(B.height-R.cy)*e,R.r*e],v.uDough.value=[z.cx*e,(B.height-z.cy)*e,z.r*e],P=!0}function H(){let{width:e,height:t}=r.getBoundingClientRect();e&&t&&(B={width:e,height:t},p.dpr=l*u[d],p.setSize(e,t),v.uRes.value=[g.drawingBufferWidth,g.drawingBufferHeight],V())}let U=new ResizeObserver(H);U.observe(r),H();let W=o.pointerTarget??r,G={x:0,y:0,depth:0},K={x:0,y:0,depth:0,velocity:0},q=!1,J=!1;function Y(e){let t=r.getBoundingClientRect();G.x=(e.clientX-t.left-z.cx)/z.r,G.y=-(e.clientY-t.top-z.cy)/z.r}let X=()=>G.depth=J?1:q?ie:0,ve=e=>{Y(e),q=e.pointerType===`mouse`,X()},Z=e=>{Y(e),q||Object.assign(K,{x:G.x,y:G.y}),J=!0,X()},ye=()=>{J=!1,X()},Q=()=>{J=q=!1,X()};W.addEventListener(`pointermove`,ve),W.addEventListener(`pointerdown`,Z),W.addEventListener(`pointerup`,ye),W.addEventListener(`pointercancel`,Q),W.addEventListener(`pointerleave`,Q);function be(e){I+=(e-I)*.05,L+=e,!(L<ue||d>=u.length-1||I<=le)&&(d++,L=0,I=16,_.dataset.scale=String(u[d]),H())}function xe(e){let t=e-j,n=Math.min(t/1e3,.05);j=e,N||(M+=n);let r=n*60;K.velocity+=(G.depth-K.depth)*.12*r,K.velocity*=.78**r,K.depth+=K.velocity*r;let i=1-.75**r;K.x+=(G.x-K.x)*i,K.y+=(G.y-K.y)*i;let a=Math.abs(K.depth)>.001||Math.abs(K.velocity)>.001||G.depth>0;if(w&&C.orbit>0){T<1&&(P=!0),T=N?1:Math.min(1,T+n*oe);let e=f(C);N||(E+=n*ae*(1-e)),e>=.999?E=0:e<.001&&(E%=Math.PI*2)}if(!N||P||a){v.uTime.value=M;let e=1-C.zoom;v.uPress.value=[K.x/e,K.y/e,Math.max(K.depth,-.2)],w?.update(C,M,E,T),p.render({scene:S}),P=!1,F?(F=!1,o.onFirstFrame?.(),ge()):!N&&t<250&&be(t)}A=requestAnimationFrame(xe)}function $(){cancelAnimationFrame(A),_e&&document.visibilityState===`visible`&&(j=performance.now(),A=requestAnimationFrame(xe))}let Se=new IntersectionObserver(([e])=>{_e=!!e?.isIntersecting,$()});return Se.observe(r),document.addEventListener(`visibilitychange`,$),$(),{setState(e){C=e;for(let t of h)v[b(t)].value=e[t];let t=m(e);v.uSpot.value=[t.x,t.y,t.strength],P=!0},setFrame(e,t,n){Object.assign(R,{cx:e,cy:t,r:Math.max(n,1)}),V()},setDoughFrame(e,t,n){Object.assign(z,{cx:e,cy:t,r:Math.max(n,1)}),V()},setFrozen(e){N=e,P=!0},destroy(){O=!0,k(),cancelAnimationFrame(A),Se.disconnect(),U.disconnect(),document.removeEventListener(`visibilitychange`,$),W.removeEventListener(`pointermove`,ve),W.removeEventListener(`pointerdown`,Z),W.removeEventListener(`pointerup`,ye),W.removeEventListener(`pointercancel`,Q),W.removeEventListener(`pointerleave`,Q),g.getExtension(`WEBGL_lose_context`)?.loseContext(),_.remove()}}}export{O as createJourneyRenderer};
import{n as e}from"./toppings-DL7tn3-m.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./Triangle-ErqlYAIr.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,u as _}from"./OurPizzaView-DbBhbCmJ.js";var v=new Uint8Array(4);function y(e){return!(e&e-1)}var b=1,x=class{constructor(e,{image:t,target:n=e.TEXTURE_2D,type:r=e.UNSIGNED_BYTE,format:i=e.RGBA,internalFormat:a=i,wrapS:o=e.CLAMP_TO_EDGE,wrapT:s=e.CLAMP_TO_EDGE,wrapR:c=e.CLAMP_TO_EDGE,generateMipmaps:l=n===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:u=l?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:d=e.LINEAR,premultiplyAlpha:f=!1,unpackAlignment:p=4,flipY:m=n==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:h=0,level:g=0,width:_,height:v=_,length:y=1}={}){this.gl=e,this.id=b++,this.image=t,this.target=n,this.type=r,this.format=i,this.internalFormat=a,this.minFilter=u,this.magFilter=d,this.wrapS=o,this.wrapT=s,this.wrapR=c,this.generateMipmaps=l,this.premultiplyAlpha=f,this.unpackAlignment=p,this.flipY=m,this.anisotropy=Math.min(h,this.gl.renderer.parameters.maxAnisotropy),this.level=g,this.width=_,this.height=v,this.length=y,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){let t=!(this.image===this.store.image&&!this.needsUpdate);if((t||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),t){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension(`EXT_texture_filter_anisotropic`).TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let e=0;e<6;e++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,this.level,this.internalFormat,this.format,this.type,this.image[e]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let e=0;e<this.image.length;e++)this.gl.compressedTexImage2D(this.target,e,this.internalFormat,this.image[e].width,this.image[e].height,0,this.image[e].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!y(this.image.width)||!y(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let e=0;e<6;e++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,v);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,v);this.store.image=this.image}}},S=1.35,C=(e,t,n)=>t+(n-t)*e();function ee(e=17){let t=h(e),n=[],r=0;for(;r<S;){let e=t(),i,a;e<.16?(i=C(t,.004,.01),a=C(t,.005,.009)):e<.36?(i=C(t,.01,.02),a=C(t,.005,.0088)):e<.92?(i=C(t,.02,.045),a=C(t,.0048,.0085)):(i=C(t,.018,.032),a=C(t,.009,.013));let o=t()<.12;n.push({x:t(),y:t(),angle:t()*Math.PI,len:i,width:a,bend:o?C(t,.5,.9)*(t()<.5?-1:1):C(t,-.3,.3),waver:C(t,.05,.3),freq:C(t,4,12),phase:t()*Math.PI*2,taper:C(t,.2,.6),when:t(),tone:t()**1.4}),r+=4*i*a}return n.sort((e,t)=>e.when-t.when)}function te(e,t=ee()){let n=new Float32Array(e*e),r=new Float32Array(e*e),i=new Float32Array(e*e).fill(1),a=new Float32Array(e*e);for(let o of t){let t=o.x*e,s=o.y*e,c=o.len*e,l=o.width*e,u=Math.cos(o.angle),d=Math.sin(o.angle),f=l*(1+o.waver)+1,p=Math.abs(u)*c+Math.abs(o.bend)*c+f,m=Math.abs(d)*c+Math.abs(o.bend)*c+f;for(let f=Math.floor(s-m);f<=Math.ceil(s+m);f++)for(let m=Math.floor(t-p);m<=Math.ceil(t+p);m++){let p=m+.5-t,h=f+.5-s,g=p*u+h*d,_=Math.max(-1,Math.min(1,g/c)),v=-p*d+h*u-o.bend*c*(_*_-1/3),y=l*(1+o.waver*Math.sin(_*o.freq+o.phase))*(1-o.taper*_**4),b=Math.hypot(g-_*c,v),x=Math.min(1,Math.max(0,y+.5-b));if(x<=0)continue;let S=(f%e+e)%e*e+(m%e+e)%e,C=Math.sqrt(Math.max(0,1-(b/Math.max(y,.001))**2));n[S]=x+n[S]*(1-x),r[S]=r[S]+(C-r[S])*x,i[S]=i[S]+(o.when-i[S])*x,a[S]=a[S]+(o.tone-a[S])*x}}let o=new Uint8Array(e*e*4);for(let t=0;t<e*e;t++)o[t*4]=Math.round(n[t]*255),o[t*4+1]=Math.round(r[t]*255),o[t*4+2]=Math.round(i[t]*255),o[t*4+3]=Math.round(a[t]*255);return o}var w=e=>{let t=Math.round(Math.min(1,Math.max(0,e))*255);return`rgb(${t},${t},${t})`},T=(e,t,n)=>t+(n-t)*e(),E=(e,t)=>t[Math.floor(e()*t.length)];function D(e,t,n,r,i=16,a=0,o=0,s=0){let c=[e(),e(),e()].map(e=>e*Math.PI*2),l=[];for(let u=0;u<i;u++){let d=u/i*Math.PI*2,f=1+r*(Math.sin(d*2+c[0])*.5+Math.sin(d*3+c[1])*.3+Math.sin(d*5+c[2])*.2+(e()-.5)*.6)+s*(e()-.5);l.push([a+Math.cos(d)*t*f,o+Math.sin(d)*n*f])}let u=e=>{let t=l[e%i],n=l[(e+1)%i];return[(t[0]+n[0])/2,(t[1]+n[1])/2]},d=new Path2D,f=u(0);d.moveTo(f[0],f[1]);for(let e=1;e<=i;e++){let t=l[e%i],n=u(e);d.quadraticCurveTo(t[0],t[1],n[0],n[1])}return d.closePath(),d}function O(e,t,n,r=24){return Array.from({length:r+1},(i,a)=>{let o=a/r,s=1-o,c=[s*s*e[0]+2*s*o*t[0]+o*o*n[0],s*s*e[1]+2*s*o*t[1]+o*o*n[1]],l=[2*s*(t[0]-e[0])+2*o*(n[0]-t[0]),2*s*(t[1]-e[1])+2*o*(n[1]-t[1])],u=Math.hypot(l[0],l[1])||1;return{p:c,n:[-l[1]/u,l[0]/u]}})}function k(e,t,n,r,i,{taper:a=.5,rough:o=0}={}){let s=O(t,n,r),c=s.map((t,n)=>{let r=n/(s.length-1);return i/2*(a+(1-a)*Math.sin(Math.PI*r)**.6)*(1+o*(e()-.5))}),l=new Path2D;s.forEach(({p:e,n:t},n)=>{let r=c[n];n===0?l.moveTo(e[0]+t[0]*r,e[1]+t[1]*r):l.lineTo(e[0]+t[0]*r,e[1]+t[1]*r)});let u=s[s.length-1],d=Math.atan2(u.n[1],u.n[0]);l.arc(u.p[0],u.p[1],c[c.length-1],d,d-Math.PI,!0);for(let e=s.length-1;e>=0;e--){let{p:t,n}=s[e];l.lineTo(t[0]-n[0]*c[e],t[1]-n[1]*c[e])}let f=s[0],p=Math.atan2(f.n[1],f.n[0]);return l.arc(f.p[0],f.p[1],c[0],p+Math.PI,p,!0),l.closePath(),l}function A(e,t,n,r,i,a=0,o=1){let s=O(t,n,r,20);e.beginPath(),s.forEach(({p:t,n},r)=>{let c=r/(s.length-1);if(c<a||c>o)return;let l=t[0]+n[0]*i,u=t[1]+n[1]*i;c<=a+1e-6||r===0?e.moveTo(l,u):e.lineTo(l,u)}),e.stroke()}function j(e,t,n){for(let r of[`colour`,`height`,`gloss`]){let i=e[r];i.save(),i.clip(t),n(i,r),i.restore()}}function M(e,t,n,r,i){e.colour.fillStyle=n,e.colour.fill(t),e.height.fillStyle=w(r),e.height.fill(t),e.gloss.fillStyle=w(i),e.gloss.fill(t)}function N(e,t,n,r,i,a,o=[0,0]){for(let s=0;s<n;s++){let n=Math.sqrt(t())*r,c=t()*Math.PI*2,l=T(t,i[0],i[1]);e.fillStyle=a(s),e.fill(D(t,l,l*T(t,.55,1),.35,7,o[0]+Math.cos(c)*n,o[1]+Math.sin(c)*n))}}function P(e,t,n,r,i=0,a=0){let o=e.createRadialGradient(i,a,t,i,a,n);for(let[e,t]of r)o.addColorStop(e,t);return o}var F={size:13.5,paint(e,t){let n=D(t,90,90*T(t,.94,1),.035,18);M(e,n,P(e.colour,0,90,[[0,`#b9372a`],[.7,`#a82d22`],[1,`#7f1d14`]]),.5,.75),j(e,n,(e,r)=>{if(r===`colour`){N(e,t,26,80,[8,20],()=>E(t,[`rgba(120,22,14,0.32)`,`rgba(205,72,48,0.28)`,`rgba(150,40,26,0.3)`]));for(let n=-3;n<=3;n++)for(let r=-3;r<=3;r++){if(t()<.35)continue;let i=[(n+T(t,-.45,.45))*23,(r+T(t,-.45,.45))*23];if(Math.hypot(i[0],i[1])>80)continue;let a=T(t,2.4,5.8);e.fillStyle=`rgba(226,150,128,0.55)`,e.fill(D(t,a*1.5,a*1.2,.4,8,i[0],i[1])),e.fillStyle=E(t,[`#efc9b6`,`#e9bba6`,`#f2d3c2`]),e.fill(D(t,a,a*.75,.4,8,i[0],i[1]))}N(e,t,60,82,[.7,1.8],()=>E(t,[`rgba(240,190,170,0.75)`,`rgba(230,160,140,0.6)`])),N(e,t,26,82,[.7,1.5],()=>E(t,[`#3b130c`,`#5a1a10`,`#2a0f0a`])),e.strokeStyle=`rgba(80,16,10,0.7)`,e.lineWidth=T(t,4,7),e.stroke(n)}else r===`height`?(e.fillStyle=P(e,0,90,[[0,w(.46)],[.72,w(.52)],[.9,w(.68)],[1,w(.6)]]),e.fill(n),N(e,t,30,80,[1.5,4],()=>w(T(t,.5,.58)))):N(e,t,24,80,[2.5,6],()=>w(.45))})}},I={size:10.5,paint(e,t){let n=T(t,80,92),r=T(t,62,76),i=D(t,n,r,.16,22,0,0,.09);M(e,i,P(e.colour,0,n,[[0,`#f5e7d0`],[.6,`#eed6b2`],[1,`#d4a46a`]]),.6,.3);let a=T(t,-.5,.5),o=t()*Math.PI*2;j(e,i,(e,s)=>{if(s===`colour`){let s=e.createLinearGradient(Math.cos(o)*n,Math.sin(o)*n,-Math.cos(o)*n*.2,-Math.sin(o)*n*.2);s.addColorStop(0,`rgba(176,100,38,0.8)`),s.addColorStop(.5,`rgba(210,146,72,0.42)`),s.addColorStop(1,`rgba(230,190,130,0)`),e.fillStyle=s,e.fill(i),N(e,t,12,72,[10,24],()=>E(t,[`rgba(224,166,86,0.3)`,`rgba(200,140,70,0.24)`,`rgba(238,196,128,0.3)`])),e.rotate(a);for(let i=0;i<40;i++){let a=T(t,-r,r),o=T(t,-n,n*.4),s=T(t,18,50);e.strokeStyle=i%2?`rgba(255,250,238,0.4)`:`rgba(150,104,60,0.2)`,e.lineWidth=T(t,.8,1.6),A(e,[o,a],[o+s/2,a+T(t,-4,4)],[o+s,a+T(t,-3,3)],0)}e.rotate(-a),e.strokeStyle=`rgba(176,112,52,0.28)`,e.lineWidth=8,e.stroke(i),N(e,t,18,72,[.8,2],()=>E(t,[`#4e5a2a`,`#3d4a22`,`#6b6a2e`])),N(e,t,12,72,[.8,2.2],()=>E(t,[`#b5532a`,`#a3461f`,`#c4682e`]))}else if(s===`height`){e.fillStyle=P(e,0,n,[[0,w(.82)],[.65,w(.7)],[1,w(.46)]]),e.fillRect(-120,-120,240,240),e.rotate(a);for(let i=0;i<26;i++){let a=T(t,-r,r),o=T(t,-n,n*.4);e.strokeStyle=i%2?`rgba(255,255,255,0.1)`:`rgba(0,0,0,0.12)`,e.lineWidth=T(t,1.5,2.5),A(e,[o,a],[o+20,a+T(t,-4,4)],[o+44,a],0)}}else{let t=e.createLinearGradient(Math.cos(o)*n,Math.sin(o)*n,0,0);t.addColorStop(0,w(.5)),t.addColorStop(1,w(.25)),e.fillStyle=t,e.fill(i)}})}};function L(e,t,{palette:n,crevice:r,fibre:i,highlight:a,gloss:o,shreds:s,width:c,length:l=[30,52]}){let u=t()*Math.PI,d=Math.round(T(t,s[0],s[1]));for(let s=0;s<d;s++){let d=u+T(t,-.8,.8),f=T(t,l[0],l[1]),p=Math.sqrt(t())*32,m=t()*Math.PI*2,h=[Math.cos(m)*p,Math.sin(m)*p*.85],g=[Math.cos(d),Math.sin(d)],_=[-g[1],g[0]],v=T(t,-14,14),y=[h[0]-g[0]*f,h[1]-g[1]*f],b=[h[0]+g[0]*f,h[1]+g[1]*f],x=[h[0]+_[0]*v,h[1]+_[1]*v],S=T(t,c[0],c[1]),C=k(t,y,x,b,S,{taper:T(t,.25,.5),rough:.22});e.colour.strokeStyle=r,e.colour.lineWidth=2.5,e.colour.stroke(C),e.height.strokeStyle=w(.3+s*.012),e.height.lineWidth=3,e.height.stroke(C),M(e,C,E(t,n),.46+s*.016+t()*.05,o),j(e,C,(e,n)=>{let r=Math.max(2,Math.round(S/2.6));for(let a=0;a<r;a++){let o=(a/(r-1)-.5)*S*.9;for(let r=0;r<3;r++){let r=t()*.8,a=Math.min(1,r+T(t,.15,.45));n===`colour`?(e.strokeStyle=i,e.lineWidth=T(t,.7,1.4)):n===`height`?(e.strokeStyle=`rgba(0,0,0,0.2)`,e.lineWidth=1.6):(e.strokeStyle=`rgba(0,0,0,0.15)`,e.lineWidth=1.6),A(e,y,x,b,o,r,a)}}n===`colour`&&(e.strokeStyle=a,e.lineWidth=S*.22,A(e,y,x,b,S*.3,.1,.9))})}}var R={size:12.5,paint(e,t){L(e,t,{palette:[`#5c2615`,`#4e1f11`,`#6e301a`,`#7a3a1f`,`#47190d`,`#63291a`],crevice:`rgba(28,8,3,0.6)`,fibre:`rgba(30,8,3,0.5)`,highlight:`rgba(170,82,44,0.35)`,gloss:.92,shreds:[16,20],width:[15,24]}),j(e,new Path2D(`M-100 -100H100V100H-100Z`),(e,n)=>{e.globalCompositeOperation=`source-atop`,n===`colour`&&N(e,t,9,56,[5,12],()=>`rgba(88,26,10,0.5)`),n===`gloss`&&N(e,t,9,56,[5,12],()=>`rgba(255,255,255,0.5)`)})}},z={size:11.5,paint(e,t){L(e,t,{palette:[`#9a6a54`,`#8a5a45`,`#a87a62`,`#b08068`,`#7e4f3b`,`#946250`],crevice:`rgba(50,24,14,0.55)`,fibre:`rgba(76,40,24,0.42)`,highlight:`rgba(222,180,150,0.3)`,gloss:.4,shreds:[13,16],width:[18,28],length:[22,38]}),j(e,new Path2D(`M-100 -100H100V100H-100Z`),(e,n)=>{e.globalCompositeOperation=`source-atop`,n===`colour`&&(N(e,t,12,60,[5,12],()=>`rgba(92,46,24,0.5)`),N(e,t,8,56,[2,4.5],()=>E(t,[`#e8d2b4`,`#dcc29f`])))})}},ne={size:12.5,paint(e,t){let n=T(t,78,88),r=T(t,20,38)*(t()<.5?-1:1),i=[-n,-r*.3],a=[n,T(t,-12,12)-r*.3],o=[0,r],s=T(t,50,60),c=k(t,i,o,a,s,{taper:.66,rough:.12});M(e,c,`#bd2716`,.5,.92),j(e,c,(e,n)=>{if(n===`colour`){for(let[t,n,r]of[[0,`rgba(226,70,42,0.55)`,s*.45],[s*.4,`rgba(120,14,8,0.5)`,s*.25],[-s*.4,`rgba(120,14,8,0.5)`,s*.25]])e.strokeStyle=n,e.lineWidth=r,e.lineCap=`round`,A(e,i,o,a,t);for(let n=0;n<18;n++)e.strokeStyle=n%2?`rgba(255,150,110,0.3)`:`rgba(110,12,6,0.35)`,e.lineWidth=T(t,.8,1.6),A(e,i,o,a,T(t,-s*.45,s*.45),t()*.4,.6+t()*.4);let n=O(i,o,a,10);for(let r=0;r<Math.round(T(t,5,8));r++){let{p:r,n:i}=E(t,n),a=T(t,-s*.35,s*.35),o=[r[0]+i[0]*a,r[1]+i[1]*a],c=T(t,4,9);e.fillStyle=`rgba(110,34,14,0.4)`,e.fill(D(t,c*2.2,c*1.5,.45,9,o[0],o[1],.3)),e.fillStyle=`rgba(40,16,8,0.7)`,e.fill(D(t,c*1.1,c*.6,.5,9,o[0],o[1],.4))}}else if(n===`height`){for(let[t,n]of[[.75,.6],[.45,.7],[.2,.76]])e.strokeStyle=w(n),e.lineWidth=s*t,e.lineCap=`round`,A(e,i,o,a,0);for(let n=0;n<10;n++)e.strokeStyle=n%2?`rgba(255,255,255,0.1)`:`rgba(0,0,0,0.14)`,e.lineWidth=2,A(e,i,o,a,T(t,-s*.45,s*.45),t()*.3,.7+t()*.3)}})}},B={size:11.5,paint(e,t){let n=T(t,80,90),r=-T(t,62,72),i=T(t,2,10),a=T(t,20,26),o=T(t,70,82),s=new Path2D;s.moveTo(-n,i),s.bezierCurveTo(-n,r*.6,-n*.55,r,0,r),s.bezierCurveTo(n*.55,r,n,r*.6,n,i),s.quadraticCurveTo(n*.75,i+16,a+6,i+18),s.lineTo(a,o-10),s.quadraticCurveTo(a,o,0,o),s.quadraticCurveTo(-a,o,-a,o-10),s.lineTo(-a-6,i+18),s.quadraticCurveTo(-n*.75,i+16,-n,i),s.closePath(),M(e,s,`#e7dbc4`,.5,.28);let c=new Path2D;c.moveTo(-n+6,i-2),c.quadraticCurveTo(-n*.5,i-18,0,i-14),c.quadraticCurveTo(n*.5,i-18,n-6,i-2),c.quadraticCurveTo(n*.75,i+14,a+6,i+16),c.lineTo(-a-6,i+16),c.quadraticCurveTo(-n*.75,i+14,-n+6,i-2),c.closePath(),j(e,s,(e,r)=>{if(r===`colour`){e.fillStyle=P(e,10,100,[[0,`rgba(240,226,200,0)`],[1,`rgba(160,112,64,0.45)`]],0,0),e.fill(s),e.fillStyle=`#9b836a`,e.fill(c),e.save(),e.clip(c);for(let t=0;t<=40;t++){let r=-n+2*n*t/40;e.strokeStyle=t%2?`rgba(70,50,34,0.55)`:`rgba(200,180,150,0.4)`,e.lineWidth=1.4,e.beginPath(),e.moveTo(r,i-20),e.lineTo(r*.3,i+20),e.stroke()}e.restore();for(let n=0;n<8;n++){let n=T(t,-a*.8,a*.8);e.strokeStyle=`rgba(170,150,120,0.35)`,e.lineWidth=1,e.beginPath(),e.moveTo(n,i+20),e.lineTo(n*.9,o-4),e.stroke()}e.strokeStyle=`#7a5537`,e.lineWidth=T(t,9,13),e.stroke(s),N(e,t,12,80,[3,8],()=>`rgba(150,100,56,0.3)`)}else r===`height`?(e.fillStyle=w(.38),e.fill(c),e.strokeStyle=w(.62),e.lineWidth=10,e.stroke(s)):(e.fillStyle=w(.15),e.fill(c))})}},V={size:11.5,paint(e,t){let n=T(t,1.7,2.2),r=-Math.PI/2+T(t,-.2,.2),i=T(t,44,52),a=t()<.6?2:3,o=98;for(let s=0;s<a;s++){let c=a===2?T(t,24,30):T(t,18,22),l=o,u=o-c,d=n*(1-s*.1),f=r-d/2,p=r+d/2,m=l-c/2,h=new Path2D;h.arc(0,i,l,f,p),h.arc(Math.cos(p)*m,i+Math.sin(p)*m,c/2,p,p+Math.PI),h.arc(0,i,u,p,f,!0),h.arc(Math.cos(f)*m,i+Math.sin(f)*m,c/2,f+Math.PI,f+Math.PI*2),h.closePath(),M(e,h,P(e.colour,u,l,[[0,`#b0628f`],[.18,`#dcb4cc`],[.5,`#ead4e0`],[.78,`#a2427c`],[1,`#5a1440`]],0,i),.55+s*.04,.7),j(e,h,(e,n)=>{if(n===`colour`){for(let n=0;n<5;n++)e.strokeStyle=n%2?`rgba(255,240,250,0.3)`:`rgba(140,40,100,0.22)`,e.lineWidth=1.2,e.beginPath(),e.arc(0,i,u+c*T(t,.25,.75),f,p),e.stroke();for(let n of[f,p])e.fillStyle=`rgba(146,78,36,0.42)`,e.fill(D(t,c*.6,c*.45,.4,8,Math.cos(n)*m,i+Math.sin(n)*m));N(e,t,4,l,[3,6],()=>`rgba(150,84,40,0.25)`,[0,i])}else n===`height`&&(e.fillStyle=P(e,u,l,[[0,w(.46)],[.5,w(.66+s*.04)],[1,w(.48)]],0,i),e.fill(h))}),o=u-T(t,2,4)}}},H={size:12.5,paint(e,t){let n=T(t,84,92),r=D(t,n,n*T(t,.9,1),.025,16);M(e,r,`#30552a`,.56,.55);let i=D(t,n-8,(n-8)*.97,.02,16);j(e,r,(e,r)=>{if(r===`colour`){N(e,t,30,n,[1,2.6],()=>E(t,[`#6f8f3c`,`#5a7d32`,`#8aa64a`])),e.fillStyle=P(e,0,n,[[0,`#eef0cb`],[.55,`#e6e8b7`],[.85,`#d4dc98`],[1,`#bfcf7a`]]),e.fill(i);let r=Math.round(T(t,9,12)),a=T(t,30,38);e.fillStyle=`rgba(214,220,160,0.6)`,e.fill(D(t,a+8,a+6,.12,10));for(let n=0;n<r;n++){let i=n/r*Math.PI*2+t()*.2;e.save(),e.translate(Math.cos(i)*a,Math.sin(i)*a),e.rotate(i),e.fillStyle=`rgba(250,247,222,0.8)`,e.beginPath(),e.ellipse(0,0,6,3.2,0,0,Math.PI*2),e.fill(),e.strokeStyle=`rgba(170,178,110,0.45)`,e.lineWidth=.8,e.stroke(),e.restore()}N(e,t,7,n*.8,[8,18],()=>E(t,[`rgba(196,140,58,0.38)`,`rgba(170,110,40,0.3)`,`rgba(214,170,80,0.32)`])),N(e,t,4,n*.8,[2,4],()=>`rgba(90,52,20,0.5)`)}else r===`height`&&(e.fillStyle=w(.5),e.fill(i),e.fillStyle=w(.47),e.beginPath(),e.arc(0,0,26,0,Math.PI*2),e.fill())})}};function U(e){return{size:10,paint(t,n){let r=D(n,80,T(n,60,80),.15,10);M(t,r,e,.55,.4),j(t,r,(e,t)=>{t===`colour`&&N(e,n,14,70,[6,16],()=>E(n,[`rgba(0,0,0,0.12)`,`rgba(255,255,255,0.14)`]))})}}}var W={pepperoni:F,chicken:I,"sticky-beef":R,lamb:z,"roasted-pepper":ne,mushroom:B,"red-onion":V,courgette:H};function G(t){let n=W[t];if(n)return n;let r=e[t];return r&&r.glyph!==`drizzle`?U(r.color):null}var K=(e,t)=>h(p(`${e}:${t}`)),q=.62,J=[[-.62,.38],[.64,.4],[0,-.66]],Y=e=>2**Math.ceil(Math.log2(e));function X(e,t){let n=document.createElement(`canvas`);n.width=n.height=e;let r=n.getContext(`2d`);return t&&(r.fillStyle=t,r.fillRect(0,0,e,e)),{c:n,ctx:r}}function Z(e){if(!e.pile){let t=e.toppings[0],n=G(t);return{reach:n?.size??0,pieces:n?[{id:t,look:n,x:0,y:0,scale:1,turn:0}]:[]}}let t=K(e.toppings.join(`+`),e.seed),n=J.map((t,n)=>{let r=e.toppings[n%e.toppings.length];return{id:r,look:G(r),at:t}}).filter(e=>e.look),r=Math.max(...n.map(e=>e.look.size),1),i=n.map(e=>({id:e.id,look:e.look,scale:e.look.size/r,x:e.at[0]*100,y:e.at[1]*100,turn:t()*Math.PI*2})),a=100/i.reduce((e,t)=>Math.max(e,Math.hypot(t.x,t.y)+100*t.scale),100);return{reach:r,pieces:i.map(e=>({...e,x:e.x*a,y:e.y*a,scale:e.scale*a}))}}function Q(e,t){let n=Math.max(1,Math.ceil(Math.sqrt(e.length))),r=Y(n*t),i=X(r),a=X(r,`#000`),o=X(r,`#000`),s={colour:X(t),height:X(t),gloss:X(t)},c={colour:s.colour.ctx,height:s.height.ctx,gloss:s.gloss.ctx},l=[],u=t/2*q/100;return e.forEach((e,r)=>{let{reach:d,pieces:f}=Z(e);l.push(d);let p=r%n*t,m=Math.floor(r/n)*t;f.forEach((n,r)=>{for(let e of Object.values(c))e.clearRect(0,0,t,t),e.save(),e.translate(t/2,t/2),e.scale(u,u),e.translate(n.x,n.y),e.rotate(n.turn),e.scale(n.scale,n.scale);n.look.paint(c,K(n.id,e.seed*10+r));for(let e of Object.values(c))e.restore();if(r>0){let e=c.height;e.globalCompositeOperation=`source-atop`,e.fillStyle=`rgba(255,255,255,${.14*r})`,e.fillRect(0,0,t,t),e.globalCompositeOperation=`source-over`;let n=i.ctx;n.save(),n.globalCompositeOperation=`source-atop`,n.shadowColor=`rgba(28,12,4,0.6)`,n.shadowBlur=t*.035,n.shadowOffsetX=t*.014,n.shadowOffsetY=t*.02,n.drawImage(s.colour.c,p,m),n.restore()}i.ctx.drawImage(s.colour.c,p,m),a.ctx.drawImage(s.height.c,p,m),o.ctx.drawImage(s.gloss.c,p,m)})}),a.ctx.globalCompositeOperation=`multiply`,a.ctx.fillStyle=`#f00`,a.ctx.fillRect(0,0,r,r),o.ctx.globalCompositeOperation=`multiply`,o.ctx.fillStyle=`#0f0`,o.ctx.fillRect(0,0,r,r),a.ctx.globalCompositeOperation=`lighter`,a.ctx.drawImage(o.c,0,0),a.ctx.globalCompositeOperation=`source-over`,{canvas:i.c,relief:a.c,size:r,cell:t,cols:n,reach:l}}async function re(e,t){return Q(e,t)}var ie=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,ae=`
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
uniform sampler2D uBed; // the bed of grated mozzarella (lib/cheeseBed): cover, profile, when, tone
uniform vec2 uBedOn; // x: 1 once it's painted, y: one texel in uv
varying vec2 vUv;

const float PI = 3.14159265;
const float BASE_R = ${d.toFixed(3)};
const float BALL_R = ${_.toFixed(3)};
const float BALL_GROWTH = ${f.toFixed(3)};
// The sauce stops short of the rim (edge units); the presses stop short of the sauce's edge.
const float SAUCE_REACH = 0.8;
const float SAUCE_TURNS = 3.0;
const float DIMPLE_REACH = 0.74;
const float RINGS = 5.0;
const float SHRED_CELL = 0.076;
const float BED_TILE = ${1 .toFixed(3)};
// The bed's tile is turned, so its repeats don't line up with the screen.
const mat2 BED_ROT = mat2(0.829, 0.559, -0.559, 0.829);

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
// moment. Strands curve a little, waver in width along their length (they're grated, not cut)
// and pinch at the ends. While one falls it's nearer the camera: bigger, turning, with a long
// soft shadow. x: cover, y: shadow on what's underneath, zw: where across the strand we are (for
// its normal). tone: 0 a whiter strand, 1 a more buttery one.
vec4 shreds(vec2 p, float px, out float tone) {
  tone = 0.0;
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
        vec2 nrm = vec2(-dir.y, dir.x);
        // Mostly strands, some short bits and crumbs, a few curled.
        float kind = hash(id * 2.31 + L * 5.0);
        float len = (kind < 0.2 ? 0.07 + 0.08 * rnd.y : kind < 0.4 ? 0.14 + 0.1 * rnd.y : 0.26 + 0.2 * rnd.y) * SHRED_CELL * scale;
        float w = (0.085 + 0.055 * fract(rnd.x * 7.3)) * SHRED_CELL * scale;
        float bend = (rnd.y - 0.5) * (kind > 0.9 ? 1.6 : 0.55);
        float show = smoothstep(0.0, 0.3, fall);
        vec2 q = p - c;
        // Along the strand (clamped to its length) and across its curved centreline.
        float u = dot(q, dir);
        float t = clamp(u, -len, len) / len;
        float v = dot(q, nrm) - bend * len * (t * t - 0.33);
        float wl = w * (1.0 + (0.06 + 0.2 * kind) * sin(t * (5.0 + 6.0 * rnd.y) + rnd.x * 30.0)) * (1.0 - 0.4 * t * t * t * t);
        vec2 d = vec2(u - t * len, v);
        float cov = (1.0 - smoothstep(wl - px, wl + px, length(d))) * show;
        if (cov > cover) {
          cover = cov;
          // The grater's ridges run along the strand.
          across = (nrm * v + dir * d.x) / wl + dir * 0.12 * sin(u / w * 2.6 + rnd.y * 9.0);
          tone = rnd.y;
        }
        vec2 qs = q - vec2(0.01, -0.014) * (1.0 + 4.0 * near);
        float us = dot(qs, dir);
        float ts = clamp(us, -len, len) / len;
        float vs = dot(qs, nrm) - bend * len * (ts * ts - 0.33);
        float ds = length(vec2(us - ts * len, vs));
        shadow = max(shadow, (1.0 - smoothstep(w * 0.5, w * (1.6 + 2.0 * near), ds)) * show * (0.42 - 0.2 * near));
      }
    }
  }
  return vec4(cover, shadow, across);
}

// The bed of grated mozzarella under the falling strands: a texture of a few thousand shreds,
// each landing at its own moment, thinning out towards the edge of the sauce the way a handful
// lands. x: cover, y: its shadow on the sauce, zw: its slope (for the normal). tone: as shreds().
vec4 cheeseBed(vec2 p, out float tone) {
  tone = 0.0;
  if (uBedOn.x <= 0.0 || uCheese <= 0.0) return vec4(0.0);
  float r = length(p) / (radius() * SAUCE_REACH);
  if (r > 1.02) return vec4(0.0);
  float density = 1.0 - smoothstep(0.7, 1.0, r + (noise(p * 9.0) - 0.5) * 0.14);
  float limit = uCheese * 1.06 * density;
  vec2 uv = BED_ROT * p / BED_TILE;
  vec4 b = texture2D(uBed, uv);
  float cover = b.r * smoothstep(b.b, b.b + 0.04, limit);
  // The light's from the top left, so a shred's shadow falls down and to the right.
  vec4 s = texture2D(uBed, BED_ROT * (p + vec2(-0.005, 0.007)) / BED_TILE, 1.5);
  float shadow = s.r * smoothstep(s.b, s.b + 0.04, limit) * 0.45;
  if (cover <= 0.0 && shadow <= 0.0) return vec4(0.0);
  float e = uBedOn.y;
  vec2 slope = vec2(texture2D(uBed, uv + vec2(e, 0.0)).g - texture2D(uBed, uv - vec2(e, 0.0)).g,
                    texture2D(uBed, uv + vec2(0.0, e)).g - texture2D(uBed, uv - vec2(0.0, e)).g);
  tone = b.a;
  // Back from the tile's turn to the dough's.
  return vec4(cover, shadow, -(slope * BED_ROT) * 1.6);
}

// Mozzarella lit as a little cylinder: cn its normal, edge 0..1 towards its rim, where it's a
// touch translucent and the sauce warms it.
vec3 mozzarella(vec3 cn, float tone, float edge, vec3 under, vec3 L) {
  float cw = clamp(dot(cn, L) * 0.5 + 0.5, 0.0, 1.0);
  vec3 body = mix(vec3(0.985, 0.96, 0.88), vec3(0.95, 0.87, 0.66), tone);
  // Its shaded side stays warm (cheese is never grey).
  vec3 mozz = body * mix(vec3(0.7, 0.6, 0.47), vec3(1.04, 1.03, 1.0), cw);
  mozz = mix(mozz, mozz * 0.55 + under * 0.45, edge * 0.5);
  return mozz + pow(max(dot(cn, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 18.0) * 0.12;
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

  // Grated mozzarella over the top, each strand lit as a little cylinder, with its shadow. Its
  // edges are a little translucent, so the sauce warms them.
  // The bed first, then the strands still falling onto it.
  float tone;
  vec4 bed = cheeseBed(p, tone);
  if (bed.x > 0.0 || bed.y > 0.0) {
    vec3 under = col;
    col *= 1.0 - bed.y * (1.0 - bed.x);
    vec3 cn = normalize(vec3(bed.zw, 1.0));
    col = mix(col, mozzarella(cn, tone, smoothstep(0.4, 1.4, length(bed.zw)), under, L), bed.x);
  }
  vec4 cheese = shreds(p, px / 1.5, tone);
  if (cheese.x > 0.0 || cheese.y > 0.0) {
    vec3 under = col;
    col *= 1.0 - cheese.y * (1.0 - cheese.x);
    float r2 = dot(cheese.zw, cheese.zw);
    vec3 cn = normalize(vec3(cheese.zw * 0.9, sqrt(max(0.05, 1.0 - r2))));
    col = mix(col, mozzarella(cn, tone, smoothstep(0.45, 1.0, r2), under, L), cheese.x);
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
`,oe=`
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
`,$=`
precision highp float;
uniform sampler2D uAtlas;
uniform sampler2D uRelief; // r: height, g: gloss
uniform float uLod; // mip bias for the blur, so it's the same relative to the cell at any atlas size
uniform float uOpacity;
varying vec2 vUv;
varying vec4 vCell;
varying float vAngle;
varying float vLift;

vec4 tap(vec2 uv, float bias) {
  return texture2D(uAtlas, clamp(uv, vCell.xy, vCell.xy + vCell.zz), bias);
}
float heightAt(vec2 uv, float bias) {
  return texture2D(uRelief, clamp(uv, vCell.xy, vCell.xy + vCell.zz), bias).r;
}

void main() {
  vec4 tex = texture2D(uAtlas, vUv); // premultiplied
  vec2 relief = texture2D(uRelief, vUv).rg;
  // Two scales of slope: the body's roundness from a blurred mip, the texture (fibres, fat,
  // wrinkles, gills) from the full-size map. The fine one fades out at the silhouette.
  float e = vCell.z * 0.012;
  float f = vCell.z * 0.0035;
  vec2 coarse = vec2(heightAt(vUv + vec2(e, 0.0), uLod) - heightAt(vUv - vec2(e, 0.0), uLod),
                     heightAt(vUv - vec2(0.0, e), uLod) - heightAt(vUv + vec2(0.0, e), uLod));
  vec2 fine = vec2(heightAt(vUv + vec2(f, 0.0), 0.0) - heightAt(vUv - vec2(f, 0.0), 0.0),
                   heightAt(vUv - vec2(0.0, f), 0.0) - heightAt(vUv + vec2(0.0, f), 0.0));
  float solid = smoothstep(0.85, 1.0, tap(vUv, uLod - 1.0).a);
  float cs = cos(vAngle);
  float sn = sin(vAngle);
  vec2 g = mat2(cs, sn, -sn, cs) * (coarse * 1.5 + fine * 2.2 * solid);
  vec3 n = normalize(vec3(-g * 1.4, 1.0));
  vec3 L = normalize(vec3(-0.45, 0.55, 0.75));
  float wrap = pow(clamp(dot(n, L) * 0.5 + 0.5, 0.0, 1.0), 1.25);
  // Gloss: a tight, bright highlight on greasy and glazed things, a broad soft one on matte.
  float gloss = relief.g;
  vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
  float spec = pow(max(dot(n, H), 0.0), mix(14.0, 70.0, gloss)) * mix(0.05, 0.55, gloss);
  // Crevices (low on the height map, within the piece) sit in their own shade.
  float ao = mix(0.72, 1.0, smoothstep(0.2, 0.5, relief.r));
  vec3 rgb = tex.a > 0.0 ? tex.rgb / tex.a : vec3(0.0);
  rgb = rgb * (0.46 + 0.66 * wrap) * ao + vec3(1.0, 0.96, 0.9) * spec * (1.0 + 0.4 * vLift);

  // The drop shadow is the piece's own shape, offset away from the light; the higher it floats,
  // the further and softer it falls.
  vec2 off = mat2(cs, -sn, sn, cs) * (vec2(0.06, -0.08) * (0.5 + 1.6 * vLift));
  float shadow = tap(vUv - vec2(off.x, -off.y) * 0.5 * vCell.z, uLod + 1.0 + vLift).a * (0.5 - 0.15 * vLift);
  float a = tex.a + shadow * (1.0 - tex.a);
  gl_FragColor = vec4(rgb * tex.a / max(a, 1e-4), a * vCell.w * uOpacity);
}
`,se=.28,ce=2,le=.06,ue=3,de=[.58,.38,.52],fe=[1,.8,.65],pe=[...fe,.5],me=22,he=1200;function ge(e=256,t=32){let n=e=>{let n=new Float32Array(t*t),r=e;for(let e=0;e<n.length;e++)r=r*1664525+1013904223>>>0,n[e]=r/4294967296;return n},r=n(7),i=n(91),a=new Uint8Array(e*e*4),o=e/t,s=e=>e*e*(3-2*e),c=(e,n,r)=>{let i=Math.floor(n),a=Math.floor(r),o=s(n-i),c=s(r-a),l=(n,r)=>e[(r+t)%t*t+(n+t)%t],u=l(i,a)+(l(i+1,a)-l(i,a))*o;return u+(l(i,a+1)+(l(i+1,a+1)-l(i,a+1))*o-u)*c};for(let t=0;t<e;t++)for(let n=0;n<e;n++){let s=(t*e+n)*4;a[s]=Math.round(c(r,n/o,t/o)*255),a[s+1]=Math.round(c(i,n/o,t/o)*255),a[s+2]=0,a[s+3]=255}return a}function _e(e){let t=[],n=e=>t.push(e)-1,r=e.map(e=>{let t=[],r=Math.ceil(ce/e.length);for(let i=0;i<r;i++)for(let r of e)t.push(n({toppings:[r],seed:i}));return t}),i=e.map(e=>n({toppings:e,seed:7,pile:!0}));return{sprites:t,pieces:s(r,{heroes:i})}}function ve(e,n,a,o){let s=a.length,c=new Float32Array(s*4),l=new Float32Array(s*4),u=new Float32Array(s),d=new i(e,{position:{size:2,data:new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1])},aPose:{instanced:1,size:4,data:c},aCell:{instanced:1,size:4,data:l},aLift:{instanced:1,size:1,data:u}}),f=new x(e,{image:n.canvas,width:n.size,height:n.size,generateMipmaps:!0,minFilter:e.LINEAR_MIPMAP_LINEAR,magFilter:e.LINEAR,premultiplyAlpha:!0,flipY:!1}),p=new x(e,{image:n.relief,width:n.size,height:n.size,generateMipmaps:!0,minFilter:e.LINEAR_MIPMAP_LINEAR,magFilter:e.LINEAR,flipY:!1}),h=new t(e,{vertex:oe,fragment:$,uniforms:{uAtlas:{value:f},uRelief:{value:p},uLod:{value:Math.log2(n.cell/128)},uOpacity:{value:0},uFrame:o.uFrame,uRes:o.uRes},transparent:!0,depthTest:!1,depthWrite:!1});h.setBlendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);let g=new r(e,{geometry:d,program:h,frustumCulled:!1});g.visible=!1;let _=n.cell/n.size,v=a.map((e,t)=>t);return{mesh:g,update(e,t,r,i){if(g.visible=e.orbit>0&&i>0,!g.visible)return;h.uniforms.uOpacity.value=i;let o=m(a,e,{time:t,spin:r,reach:n.reach});v.sort((e,t)=>o[e].lift-o[t].lift),v.forEach((e,t)=>{let r=o[e],i=a[e].sprite;c.set([r.x,r.y,r.size/q,r.angle],t*4),l.set([i%n.cols*_,Math.floor(i/n.cols)*_,_,r.alpha],t*4),u[t]=r.lift}),d.attributes.aPose.needsUpdate=!0,d.attributes.aCell.needsUpdate=!0,d.attributes.aLift.needsUpdate=!0}}}function ye(){try{let e=document.createElement(`canvas`),t=e.getContext(`webgl`)??e.getContext(`experimental-webgl`);return t?.getExtension(`WEBGL_lose_context`)?.loseContext(),!!t}catch{return!1}}function be(e,i={}){if(!ye())return null;let s=window.matchMedia(`(pointer: coarse)`).matches,d=Math.min(window.devicePixelRatio||1,s?1.5:2),f=s?pe:fe,p=0,m;try{m=new n({dpr:d,alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1})}catch{return null}let h=m.gl;if(!h)return null;let _=h.canvas;_.setAttribute(`aria-hidden`,`true`),_.dataset.scale=String(f[p]),e.appendChild(_);let v=new x(h,{image:ge(),width:256,height:256,wrapS:h.REPEAT,wrapT:h.REPEAT,minFilter:h.LINEAR,magFilter:h.LINEAR,generateMipmaps:!1,flipY:!1}),y=new x(h,{image:new Uint8Array([0,0,255,0]),width:1,height:1,wrapS:h.REPEAT,wrapT:h.REPEAT,minFilter:h.LINEAR,magFilter:h.LINEAR,generateMipmaps:!1,flipY:!1}),b={uNoise:{value:v},uBed:{value:y},uBedOn:{value:[0,0]},uTime:{value:0},uRes:{value:[1,1]},uFrame:{value:[0,0,1]},uDough:{value:[0,0,1]},uPress:{value:[0,0,0]},uLensAt:{value:de},uSpot:{value:[0,0,0]}},S=e=>`u${e[0].toUpperCase()}${e.slice(1)}`;for(let e of l)b[S(e)]={value:u[e]};let C=new t(h,{vertex:ie,fragment:ae,uniforms:b,depthTest:!1}),ee=new r(h,{geometry:new o(h),program:C}),w=new a;ee.setParent(w);let T=u,E=null,D=0,O=0,k=!1,A=()=>{};async function j(){if(!i.toppings?.length)return;let{sprites:e,pieces:t}=_e(i.toppings);try{let n=await re(e,s?256:512);if(k)return;E=ve(h,n,t,b),E.mesh.setParent(w),z=!0}catch{E=null}}function M(){if(k)return;let e=s?512:1024;y.image=te(e),y.width=y.height=e,y.minFilter=h.LINEAR_MIPMAP_LINEAR,y.generateMipmaps=!0,y.needsUpdate=!0,b.uBedOn.value=[1,1/e],z=!0}function N(){let e=()=>{j(),setTimeout(M,0)};if(typeof requestIdleCallback==`function`){let t=requestIdleCallback(e,{timeout:2e3});A=()=>cancelIdleCallback(t)}else{let t=setTimeout(e,800);A=()=>clearTimeout(t)}}let P=!0,F=0,I=performance.now(),L=0,R=!!i.frozen,z=!0,ne=!0,B=16,V=0,H={cx:0,cy:0,r:1},U={cx:0,cy:0,r:1},W={width:1,height:1};function G(){let e=h.drawingBufferHeight/W.height;b.uFrame.value=[H.cx*e,(W.height-H.cy)*e,H.r*e],b.uDough.value=[U.cx*e,(W.height-U.cy)*e,U.r*e],z=!0}function K(){let{width:t,height:n}=e.getBoundingClientRect();t&&n&&(W={width:t,height:n},m.dpr=d*f[p],m.setSize(t,n),b.uRes.value=[h.drawingBufferWidth,h.drawingBufferHeight],G())}let q=new ResizeObserver(K);q.observe(e),K();let J=i.pointerTarget??e,Y={x:0,y:0,depth:0},X={x:0,y:0,depth:0,velocity:0},Z=!1,Q=!1;function oe(t){let n=e.getBoundingClientRect();Y.x=(t.clientX-n.left-U.cx)/U.r,Y.y=-(t.clientY-n.top-U.cy)/U.r}let $=()=>Y.depth=Q?1:Z?se:0,ce=e=>{oe(e),Z=e.pointerType===`mouse`,$()},be=e=>{oe(e),Z||Object.assign(X,{x:Y.x,y:Y.y}),Q=!0,$()},xe=()=>{Q=!1,$()},Se=()=>{Q=Z=!1,$()};J.addEventListener(`pointermove`,ce),J.addEventListener(`pointerdown`,be),J.addEventListener(`pointerup`,xe),J.addEventListener(`pointercancel`,Se),J.addEventListener(`pointerleave`,Se);function Ce(e){B+=(e-B)*.05,V+=e,!(V<he||p>=f.length-1||B<=me)&&(p++,V=0,B=16,_.dataset.scale=String(f[p]),K())}function we(e){let t=e-I,n=Math.min(t/1e3,.05);I=e,R||(L+=n);let r=n*60;X.velocity+=(Y.depth-X.depth)*.12*r,X.velocity*=.78**r,X.depth+=X.velocity*r;let a=1-.75**r;X.x+=(Y.x-X.x)*a,X.y+=(Y.y-X.y)*a;let o=Math.abs(X.depth)>.001||Math.abs(X.velocity)>.001||Y.depth>0;if(E&&T.orbit>0){D<1&&(z=!0),D=R?1:Math.min(1,D+n*ue);let e=g(T);R||(O+=n*le*(1-e)),e>=.999?O=0:e<.001&&(O%=Math.PI*2)}if(!R||z||o){b.uTime.value=L;let e=1-T.zoom;b.uPress.value=[X.x/e,X.y/e,Math.max(X.depth,-.2)],E?.update(T,L,O,D),m.render({scene:w}),z=!1,ne?(ne=!1,i.onFirstFrame?.(),N()):!R&&t<250&&Ce(t)}F=requestAnimationFrame(we)}function Te(){cancelAnimationFrame(F),P&&document.visibilityState===`visible`&&(I=performance.now(),F=requestAnimationFrame(we))}let Ee=new IntersectionObserver(([e])=>{P=!!e?.isIntersecting,Te()});return Ee.observe(e),document.addEventListener(`visibilitychange`,Te),Te(),{setState(e){T=e;for(let t of l)b[S(t)].value=e[t];let t=c(e);b.uSpot.value=[t.x,t.y,t.strength],z=!0},setFrame(e,t,n){Object.assign(H,{cx:e,cy:t,r:Math.max(n,1)}),G()},setDoughFrame(e,t,n){Object.assign(U,{cx:e,cy:t,r:Math.max(n,1)}),G()},setFrozen(e){R=e,z=!0},destroy(){k=!0,A(),cancelAnimationFrame(F),Ee.disconnect(),q.disconnect(),document.removeEventListener(`visibilitychange`,Te),J.removeEventListener(`pointermove`,ce),J.removeEventListener(`pointerdown`,be),J.removeEventListener(`pointerup`,xe),J.removeEventListener(`pointercancel`,Se),J.removeEventListener(`pointerleave`,Se),h.getExtension(`WEBGL_lose_context`)?.loseContext(),_.remove()}}}export{be as createJourneyRenderer};
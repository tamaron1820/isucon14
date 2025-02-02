import{r as f,j as t}from"./jsx-runtime-56DGgGmo.js";import{c as A}from"./colors-DB9lnfSt.js";import{h as Le,i as Fe,j as Ae,k as _e}from"./api-components-dDIZztSJ.js";import{M as Oe,a as Be,b as Ce}from"./post-message-C3RbgkUr.js";import{T as De,P as ze,L,a as Me,M as je}from"./map-WlZ9yiya.js";import{B as Y}from"./button-CS9qg6Tt.js";import{T}from"./text-DfCqYLRl.js";import{c as Ue,s as qe}from"./storage-Coaj7Roq.js";import{P as q}from"./price-D-o-ix3Y.js";import{u as W}from"./client-context-C6wEaUbS.js";import{t as J}from"./bundle-mjs-Dnoi3Axr.js";import{R as We}from"./rating-star-gH9aOYPH.js";import{F as Ve}from"./components-Cbm4tYXz.js";import{C as ae,a as Ze}from"./chair-PB3Jm0Ii.js";import"./api-base-url-Bd0x18OB.js";import"./get-cookie-value-B3QhECDc.js";import"./index-9ZhTBp7q.js";const U=(a,s)=>Math.floor(Math.random()*(s-a+1))+a,He=De.flatMap(({centerCoordinate:a,name:s})=>[...Array(7).keys()].map(l=>({id:s+"-ghost-"+l,current_coordinate:{latitude:U(a.latitude-50,a.latitude+50),longitude:U(a.longitude-50,a.longitude+50)},model:String(l),name:"ghost"}))),Ge=[...Array(70).keys()].map(a=>({id:"ghost"+a,current_coordinate:{latitude:U(-500,500),longitude:U(-500,500)},model:String(a),name:"ghost"})),$e=()=>{const[a,s]=f.useState(!1),[l,y]=f.useState([...He,...Ge]);return f.useEffect(()=>{const u=({origin:N,data:v})=>{var C;N==location.origin&&Oe.SimulatorConfing===v.type&&s(((C=v==null?void 0:v.payload)==null?void 0:C.ghostChairEnabled)??!1)};return window.addEventListener("message",u,!1),()=>{window.removeEventListener("message",u,!1)}},[]),f.useEffect(()=>{if(!a)return;let u;const N=()=>{y(v=>v.map(I=>({...I,current_coordinate:{latitude:I.current_coordinate.latitude+U(-2,2),longitude:I.current_coordinate.longitude+U(-2,2)}}))),u=setTimeout(N,1e3)};return N(),()=>{clearTimeout(u)}},[a]),a?l:[]},Ke=a=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,width:"24",height:"24",...a,children:[t.jsx("rect",{x:"8",y:"8",width:"12",height:"12",rx:"2"}),t.jsx("path",{d:"M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"})]}),Ye=()=>{const[a,s]=f.useState(()=>Ue()),l=f.useMemo(()=>!!(a&&!a.used&&Date.now()-new Date(a.registedAt).getTime()<60*60*1e3),[a]),y=f.useCallback(()=>{if(!a)return;const N={...a,used:!0};qe(N),s(N)},[a]),u=f.useCallback(()=>{if(!a)return;(async()=>{try{await navigator.clipboard.writeText(a.invitationCode),alert("招待コードがコピーされました！")}catch{alert(`招待コード: ${a.invitationCode}
コピーしてお使いください`)}})()},[a]);return l?t.jsxs("div",{className:"sticky w-full md:max-w-screen-md px-4 py-3.5 md:pl-8 flex flex-row items-center justify-between bg-gradient-to-br from-sky-700 from-20% to-cyan-300",children:[t.jsxs("div",{className:"flex items-center space-x-4",children:[t.jsxs(T,{className:"text-white text-sm",children:["今なら友達を招待すると",t.jsx("br",{className:"block md:hidden"}),t.jsx("span",{className:"font-mono",children:"1000円OFF"})]}),t.jsxs(Y,{type:"button",className:"items-center inline-flex rounded-full bg-cyan-900 text-white px-4 py-2 bg-opacity-50 text-xs shrink-0 hover:bg-opacity-30",onClick:u,children:[t.jsx(Ke,{className:"mr-1 size-5"}),"招待コード"]})]}),t.jsxs(Y,{className:"-m-3 p-3 hover:opacity-80 rounded-full",variant:"skelton",onClick:y,children:[t.jsx("span",{className:"sr-only",children:"閉じる"}),t.jsx("svg",{className:"size-6 text-white",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",children:t.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})})]})]}):null},Je=({name:a,starSize:s=40,rating:l,setRating:y,className:u,...N})=>t.jsxs("div",{className:J("flex flex-row gap-1",u),...N,children:[Array.from({length:5}).map((v,I)=>{const C=I+1;return t.jsxs("label",{htmlFor:`${a}-${C}`,className:"cursor-pointer flex items-center",children:[t.jsx("input",{type:"radio",id:`${a}-${C}`,name:a,value:C,"aria-label":`Rating ${C}`,onClick:()=>y(C),className:"hidden"}),t.jsx(We,{rated:C<=l,onClick:()=>y(C),width:s,height:s})]},I)}),t.jsx("input",{type:"hidden",name:a,value:l})]});var pe={};(function a(s,l,y,u){var N=!!(s.Worker&&s.Blob&&s.Promise&&s.OffscreenCanvas&&s.OffscreenCanvasRenderingContext2D&&s.HTMLCanvasElement&&s.HTMLCanvasElement.prototype.transferControlToOffscreen&&s.URL&&s.URL.createObjectURL),v=typeof Path2D=="function"&&typeof DOMMatrix=="function",I=function(){if(!s.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var n=r.transferToImageBitmap();try{e.createPattern(n,"no-repeat")}catch{return!1}return!0}();function C(){}function z(r){var e=l.exports.Promise,n=e!==void 0?e:s.Promise;return typeof n=="function"?new n(r):(r(C,C),null)}var _=function(r,e){return{transform:function(n){if(r)return n;if(e.has(n))return e.get(n);var i=new OffscreenCanvas(n.width,n.height),c=i.getContext("2d");return c.drawImage(n,0,0),e.set(n,i),i},clear:function(){e.clear()}}}(I,new Map),V=function(){var r=Math.floor(16.666666666666668),e,n,i={},c=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(d){var h=Math.random();return i[h]=requestAnimationFrame(function o(m){c===m||c+r-1<m?(c=m,delete i[h],d()):i[h]=requestAnimationFrame(o)}),h},n=function(d){i[d]&&cancelAnimationFrame(i[d])}):(e=function(d){return setTimeout(d,r)},n=function(d){return clearTimeout(d)}),{frame:e,cancel:n}}(),se=function(){var r,e,n={};function i(c){function d(h,o){c.postMessage({options:h||{},callback:o})}c.init=function(o){var m=o.transferControlToOffscreen();c.postMessage({canvas:m},[m])},c.fire=function(o,m,g){if(e)return d(o,null),e;var M=Math.random().toString(36).slice(2);return e=z(function(w){function j(k){k.data.callback===M&&(delete n[M],c.removeEventListener("message",j),e=null,_.clear(),g(),w())}c.addEventListener("message",j),d(o,M),n[M]=j.bind(null,{data:{callback:M}})}),e},c.reset=function(){c.postMessage({reset:!0});for(var o in n)n[o](),delete n[o]}}return function(){if(r)return r;if(!y&&N){var c=["var CONFETTI, SIZE = {}, module = {};","("+a.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([c])))}catch(d){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",d),null}i(r)}return r}}(),ne={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Z(r,e){return e?e(r):r}function oe(r){return r!=null}function b(r,e,n){return Z(r&&oe(r[e])?r[e]:ne[e],n)}function ie(r){return r<0?0:Math.floor(r)}function le(r,e){return Math.floor(Math.random()*(e-r))+r}function H(r){return parseInt(r,16)}function ce(r){return r.map(ue)}function ue(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:H(e.substring(0,2)),g:H(e.substring(2,4)),b:H(e.substring(4,6))}}function G(r){var e=b(r,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}function Q(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function X(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function O(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function $(r,e,n,i,c,d,h,o,m){r.save(),r.translate(e,n),r.rotate(d),r.scale(i,c),r.arc(0,0,1,h,o,m),r.restore()}function de(r){var e=r.angle*(Math.PI/180),n=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function K(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,i=e.x+e.random*e.tiltCos,c=e.y+e.random*e.tiltSin,d=e.wobbleX+e.random*e.tiltCos,h=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",r.beginPath(),v&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(re(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(d-i)*.1,Math.abs(h-c)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var o=Math.PI/10*e.wobble,m=Math.abs(d-i)*.1,g=Math.abs(h-c)*.1,M=e.shape.bitmap.width*e.scalar,w=e.shape.bitmap.height*e.scalar,j=new DOMMatrix([Math.cos(o)*m,Math.sin(o)*m,-Math.sin(o)*g,Math.cos(o)*g,e.x,e.y]);j.multiplySelf(new DOMMatrix(e.shape.matrix));var k=r.createPattern(_.transform(e.shape.bitmap),"no-repeat");k.setTransform(j),r.globalAlpha=1-n,r.fillStyle=k,r.fillRect(e.x-M/2,e.y-w/2,M,w),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(d-i)*e.ovalScalar,Math.abs(h-c)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):$(r,e.x,e.y,Math.abs(d-i)*e.ovalScalar,Math.abs(h-c)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var x=Math.PI/2*3,E=4*e.scalar,S=8*e.scalar,R=e.x,F=e.y,D=5,P=Math.PI/D;D--;)R=e.x+Math.cos(x)*S,F=e.y+Math.sin(x)*S,r.lineTo(R,F),x+=P,R=e.x+Math.cos(x)*E,F=e.y+Math.sin(x)*E,r.lineTo(R,F),x+=P;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(c)),r.lineTo(Math.floor(d),Math.floor(h)),r.lineTo(Math.floor(i),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function he(r,e,n,i,c){var d=e.slice(),h=r.getContext("2d"),o,m,g=z(function(M){function w(){o=m=null,h.clearRect(0,0,i.width,i.height),_.clear(),c(),M()}function j(){y&&!(i.width===u.width&&i.height===u.height)&&(i.width=r.width=u.width,i.height=r.height=u.height),!i.width&&!i.height&&(n(r),i.width=r.width,i.height=r.height),h.clearRect(0,0,i.width,i.height),d=d.filter(function(k){return K(h,k)}),d.length?o=V.frame(j):w()}o=V.frame(j),m=w});return{addFettis:function(M){return d=d.concat(M),g},canvas:r,promise:g,reset:function(){o&&V.cancel(o),m&&m()}}}function p(r,e){var n=!r,i=!!b(e||{},"resize"),c=!1,d=b(e,"disableForReducedMotion",Boolean),h=N&&!!b(e||{},"useWorker"),o=h?se():null,m=n?Q:X,g=r&&o?!!r.__confetti_initialized:!1,M=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,w;function j(x,E,S){for(var R=b(x,"particleCount",ie),F=b(x,"angle",Number),D=b(x,"spread",Number),P=b(x,"startVelocity",Number),Ne=b(x,"decay",Number),ke=b(x,"gravity",Number),Te=b(x,"drift",Number),ge=b(x,"colors",ce),Ie=b(x,"ticks",Number),be=b(x,"shapes"),Ee=b(x,"scalar"),Se=!!b(x,"flat"),we=G(x),ye=R,xe=[],Re=r.width*we.x,Pe=r.height*we.y;ye--;)xe.push(de({x:Re,y:Pe,angle:F,spread:D,startVelocity:P,color:ge[ye%ge.length],shape:be[le(0,be.length)],ticks:Ie,decay:Ne,gravity:ke,drift:Te,scalar:Ee,flat:Se}));return w?w.addFettis(xe):(w=he(r,xe,m,E,S),w.promise)}function k(x){var E=d||b(x,"disableForReducedMotion",Boolean),S=b(x,"zIndex",Number);if(E&&M)return z(function(P){P()});n&&w?r=w.canvas:n&&!r&&(r=O(S),document.body.appendChild(r)),i&&!g&&m(r);var R={width:r.width,height:r.height};o&&!g&&o.init(r),g=!0,o&&(r.__confetti_initialized=!0);function F(){if(o){var P={getBoundingClientRect:function(){if(!n)return r.getBoundingClientRect()}};m(P),o.postMessage({resize:{width:P.width,height:P.height}});return}R.width=R.height=null}function D(){w=null,i&&(c=!1,s.removeEventListener("resize",F)),n&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,g=!1)}return i&&!c&&(c=!0,s.addEventListener("resize",F,!1)),o?o.fire(x,R,D):j(x,R,D)}return k.reset=function(){o&&o.reset(),w&&w.reset()},k}var B;function ee(){return B||(B=p(null,{useWorker:!0,resize:!0})),B}function re(r,e,n,i,c,d,h){var o=new Path2D(r),m=new Path2D;m.addPath(o,new DOMMatrix(e));var g=new Path2D;return g.addPath(m,new DOMMatrix([Math.cos(h)*c,Math.sin(h)*c,-Math.sin(h)*d,Math.cos(h)*d,n,i])),g}function me(r){if(!v)throw new Error("path confetti are not supported in this browser");var e,n;typeof r=="string"?e=r:(e=r.path,n=r.matrix);var i=new Path2D(e),c=document.createElement("canvas"),d=c.getContext("2d");if(!n){for(var h=1e3,o=h,m=h,g=0,M=0,w,j,k=0;k<h;k+=2)for(var x=0;x<h;x+=2)d.isPointInPath(i,k,x,"nonzero")&&(o=Math.min(o,k),m=Math.min(m,x),g=Math.max(g,k),M=Math.max(M,x));w=g-o,j=M-m;var E=10,S=Math.min(E/w,E/j);n=[S,0,0,S,-Math.round(w/2+o)*S,-Math.round(j/2+m)*S]}return{type:"path",path:e,matrix:n}}function fe(r){var e,n=1,i="#000000",c='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,n="scalar"in r?r.scalar:n,c="fontFamily"in r?r.fontFamily:c,i="color"in r?r.color:i);var d=10*n,h=""+d+"px "+c,o=new OffscreenCanvas(d,d),m=o.getContext("2d");m.font=h;var g=m.measureText(e),M=Math.ceil(g.actualBoundingBoxRight+g.actualBoundingBoxLeft),w=Math.ceil(g.actualBoundingBoxAscent+g.actualBoundingBoxDescent),j=2,k=g.actualBoundingBoxLeft+j,x=g.actualBoundingBoxAscent+j;M+=j+j,w+=j+j,o=new OffscreenCanvas(M,w),m=o.getContext("2d"),m.font=h,m.fillStyle=i,m.fillText(e,k,x);var E=1/n;return{type:"bitmap",bitmap:o.transferToImageBitmap(),matrix:[E,0,0,E,-M*E/2,-w*E/2]}}l.exports=function(){return ee().apply(this,arguments)},l.exports.reset=function(){ee().reset()},l.exports.create=p,l.exports.shapeFromPath=me,l.exports.shapeFromText=fe})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),pe,!1);const Qe=pe.exports;pe.exports.create;const Xe=({onEvaluated:a})=>{const{data:s}=W(),[l,y]=f.useState(0),[u,N]=f.useState(),v=f.useCallback(I=>{if(I.preventDefault(),l<1||l>5){N("評価は1から5の間でなければなりません。");return}try{Le({pathParams:{rideId:(s==null?void 0:s.ride_id)??""},body:{evaluation:l}})}catch(C){console.error(C)}a()},[a,s==null?void 0:s.ride_id,l]);return f.useEffect(()=>{Qe({origin:{y:.7},spread:60,colors:[A.yellow[500],A.cyan[300],A.green[500],A.indigo[500],A.red[500]]})},[]),t.jsx(t.Fragment,{children:t.jsxs(Ve,{className:"w-full h-full flex flex-col items-center justify-center max-w-md mx-auto",children:[t.jsxs("div",{className:"flex flex-col items-center gap-6 mb-14",children:[t.jsx(ze,{className:"size-[90px]",color:A.red[500]}),t.jsx(T,{size:"xl",bold:!0,children:"目的地に到着しました"})]}),t.jsxs("div",{className:"flex flex-col items-center w-80",children:[t.jsx(T,{className:"mb-4",children:"今回のドライブはいかがでしたか？"}),t.jsx(Je,{name:"rating",rating:l,setRating:y,className:"mb-10"}),(s==null?void 0:s.fare)&&t.jsx(q,{pre:"運賃",value:s.fare,className:"mb-6"}),t.jsx(Y,{variant:"primary",type:"submit",onClick:v,className:"w-full",children:"評価して料金を支払う"})]}),u&&t.jsx(T,{variant:"danger",className:"mt-2",children:u})]})})},ve=({chair:a,className:s,...l})=>{var y,u,N;return t.jsxs("div",{className:J("flex flex-row items-center space-x-4 px-6 py-4 bg-neutral-100 rounded-md w-full",s),...l,children:[t.jsx("div",{className:"rounded-full bg-neutral-200 p-5",children:t.jsx(ae,{model:a.model,width:40,height:40})}),t.jsxs("div",{className:"flex flex-col space-y-0.5",children:[t.jsxs("div",{className:"flex flex-col space-y-0.5 mb-1",children:[t.jsx(T,{tagName:"span",bold:!0,children:a.name}),t.jsx(T,{tagName:"span",size:"xs",className:"text-neutral-500",children:a.model})]}),((y=a.stats)==null?void 0:y.total_evaluation_avg)&&t.jsxs(T,{tagName:"span",size:"xs",className:"text-neutral-600",children:[t.jsx(T,{tagName:"span",className:"pr-1",children:"評価:"}),a.stats.total_evaluation_avg.toFixed(1)]}),((u=a.stats)==null?void 0:u.total_rides_count)&&t.jsxs(T,{tagName:"span",size:"xs",className:"text-neutral-600",children:[t.jsx(T,{tagName:"span",className:"pr-1",children:"これまでの配車数:"}),(N=a.stats)==null?void 0:N.total_rides_count]})]})]})},te=({title:a,subTitle:s,className:l,children:y,...u})=>t.jsxs("div",{className:J("flex flex-col items-center justify-center",l),...u,children:[y,t.jsx(T,{bold:!0,className:J("mb-3",!!y&&"mt-8"),children:a}),t.jsx(T,{size:"xl",className:"mb-8 text-neutral-500 text-center",children:s})]}),er=()=>{var s;const{data:a}=W();return t.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center max-w-md mx-auto",children:[t.jsx(te,{title:"目的地まで移動中",subTitle:"快適なドライブをお楽しみください",children:t.jsx("div",{style:{transform:"scale(-1, 1)"},children:t.jsx(ae,{model:((s=a==null?void 0:a.chair)==null?void 0:s.model)??"",width:100,className:"animate-shake"})})}),(a==null?void 0:a.chair)&&t.jsx(ve,{className:"mb-8",chair:a.chair}),t.jsx(L,{label:"現在地",location:a==null?void 0:a.pickup_coordinate,className:"w-full",disabled:!0}),t.jsx(T,{size:"xl",children:"↓"}),t.jsx(L,{label:"目的地",location:a==null?void 0:a.destination_coordinate,className:"w-full",disabled:!0}),(a==null?void 0:a.fare)&&t.jsx(q,{pre:"運賃",value:a.fare,className:"mt-8"})]})},rr=()=>{var s;const{data:a}=W();return t.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center max-w-md mx-auto",children:[t.jsx(te,{title:"椅子が見つかりました",subTitle:"あなたのもとに向かっています",children:t.jsx(ae,{model:((s=a==null?void 0:a.chair)==null?void 0:s.model)??"",width:100,className:"animate-shake"})}),(a==null?void 0:a.chair)&&t.jsx(ve,{className:"mb-8",chair:a.chair}),t.jsx(L,{label:"現在地",location:a==null?void 0:a.pickup_coordinate,className:"w-full",disabled:!0}),t.jsx(T,{size:"xl",children:"↓"}),t.jsx(L,{label:"目的地",location:a==null?void 0:a.destination_coordinate,className:"w-full",disabled:!0}),(a==null?void 0:a.fare)&&t.jsx(q,{pre:"運賃",value:a.fare,className:"mt-8"})]})},ar=function({className:a,size:s=80,...l}){return t.jsxs("div",{className:J("flex items-center justify-center relative",a),...l,children:[t.jsx(Ze,{type:"gray",width:s/3,className:"absolute "}),t.jsxs("svg",{className:"text-neutral-300 animate-spin",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:s,height:s,children:[t.jsx("path",{d:"M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",className:"text-neutral-600"})]})]})},tr=({optimistic:a})=>{const{data:s}=W(),l=a.fare??(s==null?void 0:s.fare),y=a.destLocation??(s==null?void 0:s.destination_coordinate),u=a.pickup??(s==null?void 0:s.pickup_coordinate);return t.jsxs("div",{className:"w-full h-full px-8 flex flex-col items-center justify-center",children:[t.jsx(te,{title:"マッチング中",subTitle:"椅子をさがしています",children:t.jsx(ar,{size:120})}),t.jsx(L,{label:"現在地",location:u,className:"w-80",disabled:!0}),t.jsx(T,{size:"xl",children:"↓"}),t.jsx(L,{label:"目的地",location:y,className:"w-80",disabled:!0}),l&&t.jsx(q,{value:l,pre:"運賃",className:"mt-6"})]})},sr=a=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",width:"24px",viewBox:"0 -960 960 960",fill:A.neutral[500],...a,children:t.jsx("path",{d:"M160-80v-240h120v240H160Zm200 0v-476q-50 17-65 62.5T280-400h-80q0-128 75-204t205-76q100 0 150-49.5T680-880h80q0 88-37.5 157.5T600-624v544h-80v-240h-80v240h-80Zm120-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"})}),nr=()=>{var s;const{data:a}=W();return t.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center max-w-md mx-auto",children:[t.jsx(te,{title:"目的地に向けて出発します",subTitle:"お座りください",children:t.jsxs("div",{className:"relative w-[160px] h-[160px]",children:[t.jsx(sr,{width:110,height:110,className:"absolute left-0 bottom-[-5px]"}),t.jsx(ae,{model:((s=a==null?void 0:a.chair)==null?void 0:s.model)??"",width:60,height:60,className:"absolute bottom-0 right-0"})]})}),(a==null?void 0:a.chair)&&t.jsx(ve,{className:"mb-8",chair:a.chair}),t.jsx(L,{label:"現在地",location:a==null?void 0:a.pickup_coordinate,className:"w-full",disabled:!0}),t.jsx(T,{size:"xl",children:"↓"}),t.jsx(L,{label:"目的地",location:a==null?void 0:a.destination_coordinate,className:"w-full",disabled:!0}),(a==null?void 0:a.fare)&&t.jsx(q,{pre:"運賃",value:a==null?void 0:a.fare,className:"mt-8"})]})},Mr=()=>[{title:"ISURIDE"},{name:"description",content:"目的地まで椅子で快適に移動しましょう"}];function jr(){const{data:a}=W(),s=$e(),[l,y]=f.useState(),[u,N]=f.useState(),[v,I]=f.useState(),[C,z]=f.useState(null),[_,V]=f.useState(),[se,ne]=f.useState([]),[Z,oe]=f.useState(),[b,ie]=f.useState(),le=f.useCallback(p=>oe(p),[]),H=f.useCallback(p=>V(p),[]),ce=f.useCallback(p=>ie(p),[]),[ue,G]=f.useState(!1),Q=f.useRef(null),X=f.useRef(null),[O,$]=f.useState(),de=f.useCallback(()=>{var p;C==="from"?N(_):C==="to"&&I(_),(p=Q.current)==null||p.close()},[C,_]),K=f.useMemo(()=>l&&["MATCHING","ENROUTE","PICKUP","CARRYING","ARRIVED"].includes(l),[l]);f.useEffect(()=>{y(a==null?void 0:a.status)},[a==null?void 0:a.status]),f.useEffect(()=>{!u||!v||Fe({body:{pickup_coordinate:u,destination_coordinate:v}}).then(p=>$({fare:p.fare,discount:p.discount})).catch(p=>{console.error(p),$(void 0)})},[u,v]);const he=f.useCallback(async()=>{if(!(!u||!v)){y("MATCHING");try{const{ride_id:p}=await Ae({body:{pickup_coordinate:u,destination_coordinate:v}});Be(window.parent,{rideId:p})}catch(p){console.error(p)}}},[u,v]);return f.useEffect(()=>{if(!Z||K)return;let p,B;const ee=async({latitude:me,longitude:fe})=>{try{p==null||p.abort(),p=new AbortController;const{chairs:r}=await _e({queryParams:{latitude:me,longitude:fe,distance:b?Math.max(b.horizontalDistance+10,b.verticalDistance+10):150}});ne(r)}catch(r){if(r instanceof DOMException&&r.name==="AbortError")return;console.error(r)}},re=()=>{ee(Z),B=setTimeout(re,1e4)};return B=setTimeout(re,300),()=>{clearTimeout(B),p==null||p.abort()}},[Z,K,b]),f.useEffect(()=>(Ce(window.parent,{ready:!0}),()=>{Ce(window.parent,{ready:!1})}),[]),t.jsxs(t.Fragment,{children:[t.jsx(Ye,{}),t.jsx(Me,{from:u,to:v,onMove:le,onUpdateViewSize:ce,initialCoordinate:_,chairs:[...se,...s],className:"flex-1"}),t.jsxs("div",{className:"w-full px-8 py-8 flex flex-col items-center justify-center",children:[t.jsx(L,{className:"w-full",location:u,onClick:()=>{z("from"),G(!0)},placeholder:"現在地を選択する",label:"現在地"}),t.jsx(T,{size:"xl",children:"↓"}),t.jsx(L,{location:v,className:"w-full",onClick:()=>{z("to"),G(!0)},placeholder:"目的地を選択する",label:"目的地"}),O&&t.jsx(q,{value:O.fare,pre:"推定運賃",discount:O.discount,className:"mt-6 mb-4"}),u&&v&&t.jsx(Y,{variant:"primary",className:"w-full font-bold",onClick:()=>void he(),disabled:!(u&&v),children:"ISURIDE"})]}),ue&&t.jsx(je,{ref:Q,onClose:()=>G(!1),children:t.jsxs("div",{className:"flex flex-col items-center h-full",children:[t.jsx("div",{className:"flex-grow w-full max-h-[75%] mb-6",children:t.jsx(Me,{onMove:H,from:u,to:v,selectorPinColor:C==="from"?A.black:A.red[500],initialCoordinate:C==="from"?u:v,selectable:!0,className:"rounded-2xl"})}),t.jsxs("p",{className:"font-bold mb-4 text-base",children:[C==="from"?"現在地":"目的地","を選択してください"]}),t.jsx(Y,{onClick:de,children:C==="from"?"この場所から移動する":"この場所に移動する"})]})}),K&&t.jsxs(je,{ref:X,onClose:()=>y("COMPLETED"),children:[l==="MATCHING"&&t.jsx(tr,{optimistic:{destLocation:v,pickup:u,fare:O==null?void 0:O.fare}}),l==="ENROUTE"&&t.jsx(rr,{}),l==="PICKUP"&&t.jsx(nr,{}),l==="CARRYING"&&t.jsx(er,{}),l==="ARRIVED"&&t.jsx(Xe,{onEvaluated:()=>{var p;(p=X.current)==null||p.close(),N(v),I(void 0),$(void 0)}})]})]})}export{jr as default,Mr as meta};

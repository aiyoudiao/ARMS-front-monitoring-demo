import{bB as d,ai as m}from"./index-CDFUvaik.js";const h=["xxl","xl","lg","md","sm","xs"],x=t=>({xs:`(max-width: ${t.screenXSMax}px)`,sm:`(min-width: ${t.screenSM}px)`,md:`(min-width: ${t.screenMD}px)`,lg:`(min-width: ${t.screenLG}px)`,xl:`(min-width: ${t.screenXL}px)`,xxl:`(min-width: ${t.screenXXL}px)`}),u=t=>{const e=t,r=[].concat(h).reverse();return r.forEach((a,o)=>{const n=a.toUpperCase(),i=`screen${n}Min`,s=`screen${n}`;if(!(e[i]<=e[s]))throw new Error(`${i}<=${s} fails : !(${e[i]}<=${e[s]})`);if(o<r.length-1){const c=`screen${n}Max`;if(!(e[s]<=e[c]))throw new Error(`${s}<=${c} fails : !(${e[s]}<=${e[c]})`);const p=`screen${r[o+1].toUpperCase()}Min`;if(!(e[c]<=e[p]))throw new Error(`${c}<=${p} fails : !(${e[c]}<=${e[p]})`)}}),t};function f(){const[,t]=d(),e=x(u(t));return m.useMemo(()=>{const r=new Map;let a=-1,o={};return{matchHandlers:{},dispatch(n){return o=n,r.forEach(i=>i(o)),r.size>=1},subscribe(n){return r.size||this.register(),a+=1,r.set(a,n),n(o),a},unsubscribe(n){r.delete(n),r.size||this.unregister()},unregister(){Object.keys(e).forEach(n=>{const i=e[n],s=this.matchHandlers[i];s==null||s.mql.removeListener(s==null?void 0:s.listener)}),r.clear()},register(){Object.keys(e).forEach(n=>{const i=e[n],s=l=>{let{matches:p}=l;this.dispatch(Object.assign(Object.assign({},o),{[n]:p}))},c=window.matchMedia(i);c.addListener(s),this.matchHandlers[i]={mql:c,listener:s},s(c)})},responsiveMap:e}},[t])}const M=(t,e)=>{if(e&&typeof e=="object")for(let r=0;r<h.length;r++){const a=h[r];if(t[a]&&e[a]!==void 0)return e[a]}};export{M as m,h as r,f as u};

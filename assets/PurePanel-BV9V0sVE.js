import{by as n,cb as K,r as t,cc as x,aX as R,C as E}from"./index-CDFUvaik.js";const $=new n("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),j=new n("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),z=new n("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),S=new n("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),D=new n("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),L=new n("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),U=new n("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),W=new n("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),H={"move-up":{inKeyframes:U,outKeyframes:W},"move-down":{inKeyframes:$,outKeyframes:j},"move-left":{inKeyframes:z,outKeyframes:S},"move-right":{inKeyframes:D,outKeyframes:L}},F=(e,o)=>{const{antCls:i}=e,r=`${i}-${o}`,{inKeyframes:l,outKeyframes:a}=H[o];return[K(r,l,a,e.motionDurationMid),{[`
        ${r}-enter,
        ${r}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${r}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]};function T(e){return o=>t.createElement(x,{theme:{token:{motion:!1,zIndexPopupBase:0}}},t.createElement(e,Object.assign({},o)))}const q=(e,o,i,r)=>T(a=>{const{prefixCls:O,style:y}=a,c=t.useRef(null),[w,h]=t.useState(0),[C,M]=t.useState(0),[u,P]=R(!1,{value:a.open}),{getPrefixCls:b}=t.useContext(E),p=b(o||"select",O);t.useEffect(()=>{if(P(!0),typeof ResizeObserver<"u"){const g=new ResizeObserver(s=>{const m=s[0].target;h(m.offsetHeight+8),M(m.offsetWidth)}),d=setInterval(()=>{var s;const m=i?`.${i(p)}`:`.${p}-dropdown`,v=(s=c.current)===null||s===void 0?void 0:s.querySelector(m);v&&(clearInterval(d),g.observe(v))},10);return()=>{clearInterval(d),g.disconnect()}}},[]);let f=Object.assign(Object.assign({},a),{style:Object.assign(Object.assign({},y),{margin:0}),open:u,visible:u,getPopupContainer:()=>c.current});r&&(f=r(f));const I={paddingBottom:w,position:"relative",minWidth:C};return t.createElement("div",{ref:c,style:I},t.createElement(e,Object.assign({},f)))});export{q as g,F as i,T as w};

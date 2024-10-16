import{r as n,a$ as Ie,c0 as Re,b8 as ne,a as S,p as ce,a_ as Me,ba as de,bv as ve,aZ as R,bg as fe,bw as ie,bb as ge,dZ as _e,C as ue,bM as ze,bN as he,an as Le,g as He,m as Ke,u as G,c as We,d_ as Te,c4 as Be,c1 as Ae,c9 as Fe,cC as be}from"./index-CDFUvaik.js";var ye=n.createContext(null),we=n.createContext({}),Ve=["prefixCls","className","containerRef"],Ue=function(t){var o=t.prefixCls,a=t.className,r=t.containerRef,i=Ie(t,Ve),c=n.useContext(we),d=c.panel,g=Re(d,r);return n.createElement("div",ne({className:S("".concat(o,"-content"),a),role:"dialog",ref:g},ce(t,{aria:!0}),{"aria-modal":"true"},i))};function pe(e){return typeof e=="string"&&String(Number(e))===e?(Me(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var Ce={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Xe(e,t){var o,a,r,i=e.prefixCls,c=e.open,d=e.placement,g=e.inline,y=e.push,k=e.forceRender,h=e.autoFocus,E=e.keyboard,l=e.classNames,v=e.rootClassName,s=e.rootStyle,D=e.zIndex,P=e.className,j=e.id,N=e.style,w=e.motion,b=e.width,p=e.height,C=e.children,$=e.mask,z=e.maskClosable,I=e.maskMotion,Z=e.maskClassName,A=e.maskStyle,H=e.afterOpenChange,L=e.onClose,K=e.onMouseEnter,q=e.onMouseOver,J=e.onMouseLeave,F=e.onClick,Q=e.onKeyDown,ee=e.onKeyUp,m=e.styles,M=e.drawerRender,O=n.useRef(),_=n.useRef(),W=n.useRef();n.useImperativeHandle(t,function(){return O.current});var ae=function(x){var U=x.keyCode,X=x.shiftKey;switch(U){case ie.TAB:{if(U===ie.TAB){if(!X&&document.activeElement===W.current){var Y;(Y=_.current)===null||Y===void 0||Y.focus({preventScroll:!0})}else if(X&&document.activeElement===_.current){var le;(le=W.current)===null||le===void 0||le.focus({preventScroll:!0})}}break}case ie.ESC:{L&&E&&(x.stopPropagation(),L(x));break}}};n.useEffect(function(){if(c&&h){var u;(u=O.current)===null||u===void 0||u.focus({preventScroll:!0})}},[c]);var oe=n.useState(!1),re=de(oe,2),te=re[0],V=re[1],f=n.useContext(ye),se;typeof y=="boolean"?se=y?{}:{distance:0}:se=y||{};var T=(o=(a=(r=se)===null||r===void 0?void 0:r.distance)!==null&&a!==void 0?a:f==null?void 0:f.pushDistance)!==null&&o!==void 0?o:180,Oe=n.useMemo(function(){return{pushDistance:T,push:function(){V(!0)},pull:function(){V(!1)}}},[T]);n.useEffect(function(){if(c){var u;f==null||(u=f.push)===null||u===void 0||u.call(f)}else{var x;f==null||(x=f.pull)===null||x===void 0||x.call(f)}},[c]),n.useEffect(function(){return function(){var u;f==null||(u=f.pull)===null||u===void 0||u.call(f)}},[]);var Ee=$&&n.createElement(ve,ne({key:"mask"},I,{visible:c}),function(u,x){var U=u.className,X=u.style;return n.createElement("div",{className:S("".concat(i,"-mask"),U,l==null?void 0:l.mask,Z),style:R(R(R({},X),A),m==null?void 0:m.mask),onClick:z&&c?L:void 0,ref:x})}),De=typeof w=="function"?w(d):w,B={};if(te&&T)switch(d){case"top":B.transform="translateY(".concat(T,"px)");break;case"bottom":B.transform="translateY(".concat(-T,"px)");break;case"left":B.transform="translateX(".concat(T,"px)");break;default:B.transform="translateX(".concat(-T,"px)");break}d==="left"||d==="right"?B.width=pe(b):B.height=pe(p);var Pe={onMouseEnter:K,onMouseOver:q,onMouseLeave:J,onClick:F,onKeyDown:Q,onKeyUp:ee},je=n.createElement(ve,ne({key:"panel"},De,{visible:c,forceRender:k,onVisibleChanged:function(x){H==null||H(x)},removeOnLeave:!1,leavedClassName:"".concat(i,"-content-wrapper-hidden")}),function(u,x){var U=u.className,X=u.style,Y=n.createElement(Ue,ne({id:j,containerRef:x,prefixCls:i,className:S(P,l==null?void 0:l.content),style:R(R({},N),m==null?void 0:m.content)},ce(e,{aria:!0}),Pe),C);return n.createElement("div",ne({className:S("".concat(i,"-content-wrapper"),l==null?void 0:l.wrapper,U),style:R(R(R({},B),X),m==null?void 0:m.wrapper)},ce(e,{data:!0})),M?M(Y):Y)}),me=R({},s);return D&&(me.zIndex=D),n.createElement(ye.Provider,{value:Oe},n.createElement("div",{className:S(i,"".concat(i,"-").concat(d),v,fe(fe({},"".concat(i,"-open"),c),"".concat(i,"-inline"),g)),style:me,tabIndex:-1,ref:O,onKeyDown:ae},Ee,n.createElement("div",{tabIndex:0,ref:_,style:Ce,"aria-hidden":"true","data-sentinel":"start"}),je,n.createElement("div",{tabIndex:0,ref:W,style:Ce,"aria-hidden":"true","data-sentinel":"end"})))}var Ye=n.forwardRef(Xe),Ge=function(t){var o=t.open,a=o===void 0?!1:o,r=t.prefixCls,i=r===void 0?"rc-drawer":r,c=t.placement,d=c===void 0?"right":c,g=t.autoFocus,y=g===void 0?!0:g,k=t.keyboard,h=k===void 0?!0:k,E=t.width,l=E===void 0?378:E,v=t.mask,s=v===void 0?!0:v,D=t.maskClosable,P=D===void 0?!0:D,j=t.getContainer,N=t.forceRender,w=t.afterOpenChange,b=t.destroyOnClose,p=t.onMouseEnter,C=t.onMouseOver,$=t.onMouseLeave,z=t.onClick,I=t.onKeyDown,Z=t.onKeyUp,A=t.panelRef,H=n.useState(!1),L=de(H,2),K=L[0],q=L[1],J=n.useState(!1),F=de(J,2),Q=F[0],ee=F[1];ge(function(){ee(!0)},[]);var m=Q?a:!1,M=n.useRef(),O=n.useRef();ge(function(){m&&(O.current=document.activeElement)},[m]);var _=function(te){var V;if(q(te),w==null||w(te),!te&&O.current&&!((V=M.current)!==null&&V!==void 0&&V.contains(O.current))){var f;(f=O.current)===null||f===void 0||f.focus({preventScroll:!0})}},W=n.useMemo(function(){return{panel:A}},[A]);if(!N&&!K&&!m&&b)return null;var ae={onMouseEnter:p,onMouseOver:C,onMouseLeave:$,onClick:z,onKeyDown:I,onKeyUp:Z},oe=R(R({},t),{},{open:m,prefixCls:i,placement:d,autoFocus:y,keyboard:h,width:l,mask:s,maskClosable:P,inline:j===!1,afterOpenChange:_,ref:M},ae);return n.createElement(we.Provider,{value:W},n.createElement(_e,{open:m||N||K,autoDestroy:!1,getContainer:j,autoLock:s&&(m||K)},n.createElement(Ye,oe)))};const xe=e=>{var t,o;const{prefixCls:a,title:r,footer:i,extra:c,loading:d,onClose:g,headerStyle:y,bodyStyle:k,footerStyle:h,children:E,classNames:l,styles:v}=e,{drawer:s}=n.useContext(ue),D=n.useCallback(b=>n.createElement("button",{type:"button",onClick:g,"aria-label":"Close",className:`${a}-close`},b),[g]),[P,j]=ze(he(e),he(s),{closable:!0,closeIconRender:D}),N=n.useMemo(()=>{var b,p;return!r&&!P?null:n.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(b=s==null?void 0:s.styles)===null||b===void 0?void 0:b.header),y),v==null?void 0:v.header),className:S(`${a}-header`,{[`${a}-header-close-only`]:P&&!r&&!c},(p=s==null?void 0:s.classNames)===null||p===void 0?void 0:p.header,l==null?void 0:l.header)},n.createElement("div",{className:`${a}-header-title`},j,r&&n.createElement("div",{className:`${a}-title`},r)),c&&n.createElement("div",{className:`${a}-extra`},c))},[P,j,c,y,a,r]),w=n.useMemo(()=>{var b,p;if(!i)return null;const C=`${a}-footer`;return n.createElement("div",{className:S(C,(b=s==null?void 0:s.classNames)===null||b===void 0?void 0:b.footer,l==null?void 0:l.footer),style:Object.assign(Object.assign(Object.assign({},(p=s==null?void 0:s.styles)===null||p===void 0?void 0:p.footer),h),v==null?void 0:v.footer)},i)},[i,h,a]);return n.createElement(n.Fragment,null,N,n.createElement("div",{className:S(`${a}-body`,l==null?void 0:l.body,(t=s==null?void 0:s.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(o=s==null?void 0:s.styles)===null||o===void 0?void 0:o.body),k),v==null?void 0:v.body)},d?n.createElement(Le,{active:!0,title:!1,paragraph:{rows:5},className:`${a}-body-skeleton`}):E),w)},Ze=e=>{const t="100%";return{left:`translateX(-${t})`,right:`translateX(${t})`,top:`translateY(-${t})`,bottom:`translateY(${t})`}[e]},Se=(e,t)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":t}),"&-leave":Object.assign(Object.assign({},t),{"&-active":e})}),ke=(e,t)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${t}`}}},Se({opacity:e},{opacity:1})),qe=(e,t)=>[ke(.7,t),Se({transform:Ze(e)},{transform:"none"})],Je=e=>{const{componentCls:t,motionDurationSlow:o}=e;return{[t]:{[`${t}-mask-motion`]:ke(0,o),[`${t}-panel-motion`]:["left","right","top","bottom"].reduce((a,r)=>Object.assign(Object.assign({},a),{[`&-${r}`]:qe(r,o)}),{})}}},Qe=e=>{const{borderRadiusSM:t,componentCls:o,zIndexPopup:a,colorBgMask:r,colorBgElevated:i,motionDurationSlow:c,motionDurationMid:d,paddingXS:g,padding:y,paddingLG:k,fontSizeLG:h,lineHeightLG:E,lineWidth:l,lineType:v,colorSplit:s,marginXS:D,colorIcon:P,colorIconHover:j,colorBgTextHover:N,colorBgTextActive:w,colorText:b,fontWeightStrong:p,footerPaddingBlock:C,footerPaddingInline:$,calc:z}=e,I=`${o}-content-wrapper`;return{[o]:{position:"fixed",inset:0,zIndex:a,pointerEvents:"none",color:b,"&-pure":{position:"relative",background:i,display:"flex",flexDirection:"column",[`&${o}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${o}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${o}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${o}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${o}-mask`]:{position:"absolute",inset:0,zIndex:a,background:r,pointerEvents:"auto"},[I]:{position:"absolute",zIndex:a,maxWidth:"100vw",transition:`all ${c}`,"&-hidden":{display:"none"}},[`&-left > ${I}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${I}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${I}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${I}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${o}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:i,pointerEvents:"auto"},[`${o}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${G(y)} ${G(k)}`,fontSize:h,lineHeight:E,borderBottom:`${G(l)} ${v} ${s}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${o}-extra`]:{flex:"none"},[`${o}-close`]:Object.assign({display:"inline-flex",width:z(h).add(g).equal(),height:z(h).add(g).equal(),borderRadius:t,justifyContent:"center",alignItems:"center",marginInlineEnd:D,color:P,fontWeight:p,fontSize:h,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${d}`,textRendering:"auto","&:hover":{color:j,backgroundColor:N,textDecoration:"none"},"&:active":{backgroundColor:w}},We(e)),[`${o}-title`]:{flex:1,margin:0,fontWeight:e.fontWeightStrong,fontSize:h,lineHeight:E},[`${o}-body`]:{flex:1,minWidth:0,minHeight:0,padding:k,overflow:"auto",[`${o}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},[`${o}-footer`]:{flexShrink:0,padding:`${G(C)} ${G($)}`,borderTop:`${G(l)} ${v} ${s}`},"&-rtl":{direction:"rtl"}}}},et=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding}),Ne=He("Drawer",e=>{const t=Ke(e,{});return[Qe(t),Je(t)]},et);var $e=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]]);return o};const tt={distance:180},nt=e=>{const{rootClassName:t,width:o,height:a,size:r="default",mask:i=!0,push:c=tt,open:d,afterOpenChange:g,onClose:y,prefixCls:k,getContainer:h,style:E,className:l,visible:v,afterVisibleChange:s,maskStyle:D,drawerStyle:P,contentWrapperStyle:j}=e,N=$e(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:w,getPrefixCls:b,direction:p,drawer:C}=n.useContext(ue),$=b("drawer",k),[z,I,Z]=Ne($),A=h===void 0&&w?()=>w(document.body):h,H=S({"no-mask":!i,[`${$}-rtl`]:p==="rtl"},t,I,Z),L=n.useMemo(()=>o??(r==="large"?736:378),[o,r]),K=n.useMemo(()=>a??(r==="large"?736:378),[a,r]),q={motionName:be($,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},J=W=>({motionName:be($,`panel-motion-${W}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),F=Te(),[Q,ee]=Be("Drawer",N.zIndex),{classNames:m={},styles:M={}}=N,{classNames:O={},styles:_={}}=C||{};return z(n.createElement(Ae,{form:!0,space:!0},n.createElement(Fe.Provider,{value:ee},n.createElement(Ge,Object.assign({prefixCls:$,onClose:y,maskMotion:q,motion:J},N,{classNames:{mask:S(m.mask,O.mask),content:S(m.content,O.content),wrapper:S(m.wrapper,O.wrapper)},styles:{mask:Object.assign(Object.assign(Object.assign({},M.mask),D),_.mask),content:Object.assign(Object.assign(Object.assign({},M.content),P),_.content),wrapper:Object.assign(Object.assign(Object.assign({},M.wrapper),j),_.wrapper)},open:d??v,mask:i,push:c,width:L,height:K,style:Object.assign(Object.assign({},C==null?void 0:C.style),E),className:S(C==null?void 0:C.className,l),rootClassName:H,getContainer:A,afterOpenChange:g??s,panelRef:F,zIndex:Q}),n.createElement(xe,Object.assign({prefixCls:$},N,{onClose:y}))))))},at=e=>{const{prefixCls:t,style:o,className:a,placement:r="right"}=e,i=$e(e,["prefixCls","style","className","placement"]),{getPrefixCls:c}=n.useContext(ue),d=c("drawer",t),[g,y,k]=Ne(d),h=S(d,`${d}-pure`,`${d}-${r}`,y,k,a);return g(n.createElement("div",{className:h,style:o},n.createElement(xe,Object.assign({prefixCls:d},i))))};nt._InternalPanelDoNotUseOrYouWillBeFired=at;export{nt as D};

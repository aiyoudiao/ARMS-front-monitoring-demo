import{r as l,C as U,a as j,t as Ee,b0 as Z,d as J,T as je,b$ as He,c0 as Me,c1 as De,u as p,aQ as Ne,aO as Re,g as ve,m as ie,bx as Ae,c2 as fe,bD as ae,b as he,bE as se,c3 as Le,c4 as Ce,b9 as Ie,aT as Se,bA as _e,c5 as We,c as de,c6 as Xe,c7 as ke,bB as qe,aX as Ge,c8 as Ve,c9 as Fe,bX as Ye,bu as Ue,ca as Ze,J as ce}from"./index-CDFUvaik.js";import{D as Je,M as Qe,i as V,u as Ke,S as et,E as tt,R as ye,a as ot,s as nt,b as rt,c as it,d as lt,e as at}from"./EllipsisOutlined-DlF0UNrL.js";import{i as me,g as st}from"./PurePanel-BV9V0sVE.js";import{S as dt}from"./index-CDu_EQ1l.js";const xe=l.createContext({}),F=l.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var ct=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};const we=t=>{const{prefixCls:o,className:e,dashed:r}=t,n=ct(t,["prefixCls","className","dashed"]),{getPrefixCls:a}=l.useContext(U),i=a("menu",o),s=j({[`${i}-item-divider-dashed`]:!!r},e);return l.createElement(Je,Object.assign({className:s},n))},Be=t=>{var o;const{className:e,children:r,icon:n,title:a,danger:i}=t,{prefixCls:s,firstLevel:d,direction:g,disableMenuItemTitleTooltip:v,inlineCollapsed:$}=l.useContext(F),b=B=>{const O=r==null?void 0:r[0],S=l.createElement("span",{className:`${s}-title-content`},r);return(!n||l.isValidElement(r)&&r.type==="span")&&r&&B&&d&&typeof O=="string"?l.createElement("div",{className:`${s}-inline-collapsed-noicon`},O.charAt(0)):S},{siderCollapsed:m}=l.useContext(xe);let c=a;typeof a>"u"?c=d?r:"":a===!1&&(c="");const u={title:c};!m&&!$&&(u.title=null,u.open=!1);const h=Ee(r).length;let C=l.createElement(Qe,Object.assign({},Z(t,["title","icon","danger"]),{className:j({[`${s}-item-danger`]:i,[`${s}-item-only-child`]:(n?h+1:h)===1},e),title:typeof a=="string"?a:void 0}),J(n,{className:j(l.isValidElement(n)?(o=n.props)===null||o===void 0?void 0:o.className:"",`${s}-item-icon`)}),b($));return v||(C=l.createElement(je,Object.assign({},u,{placement:g==="rtl"?"left":"right",overlayClassName:`${s}-inline-collapsed-tooltip`}),C)),C};var mt=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};const Y=l.createContext(null),ut=l.forwardRef((t,o)=>{const{children:e}=t,r=mt(t,["children"]),n=l.useContext(Y),a=l.useMemo(()=>Object.assign(Object.assign({},n),r),[n,r.prefixCls,r.mode,r.selectable,r.rootClassName]),i=He(e),s=Me(o,i?e.ref:null);return l.createElement(Y.Provider,{value:a},l.createElement(De,{space:!0},i?l.cloneElement(e,{ref:s}):e))}),pt=t=>{const{componentCls:o,motionDurationSlow:e,horizontalLineHeight:r,colorSplit:n,lineWidth:a,lineType:i,itemPaddingInline:s}=t;return{[`${o}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${p(a)} ${i} ${n}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${o}-item, ${o}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:s},[`> ${o}-item:hover,
        > ${o}-item-active,
        > ${o}-submenu ${o}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${o}-item, ${o}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${o}-submenu-arrow`]:{display:"none"}}}},gt=t=>{let{componentCls:o,menuArrowOffset:e,calc:r}=t;return{[`${o}-rtl`]:{direction:"rtl"},[`${o}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${o}-rtl${o}-vertical,
    ${o}-submenu-rtl ${o}-vertical`]:{[`${o}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${p(r(e).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${p(e)})`}}}}},ue=t=>Object.assign({},Ne(t)),pe=(t,o)=>{const{componentCls:e,itemColor:r,itemSelectedColor:n,groupTitleColor:a,itemBg:i,subMenuItemBg:s,itemSelectedBg:d,activeBarHeight:g,activeBarWidth:v,activeBarBorderWidth:$,motionDurationSlow:b,motionEaseInOut:m,motionEaseOut:c,itemPaddingInline:u,motionDurationMid:h,itemHoverColor:C,lineType:B,colorSplit:O,itemDisabledColor:S,dangerItemColor:z,dangerItemHoverColor:T,dangerItemSelectedColor:H,dangerItemActiveBg:P,dangerItemSelectedBg:f,popupBg:y,itemHoverBg:M,itemActiveBg:E,menuSubMenuBg:x,horizontalItemSelectedColor:I,horizontalItemSelectedBg:N,horizontalItemBorderRadius:X,horizontalItemHoverBg:A}=t;return{[`${e}-${o}, ${e}-${o} > ${e}`]:{color:r,background:i,[`&${e}-root:focus-visible`]:Object.assign({},ue(t)),[`${e}-item-group-title`]:{color:a},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:n}},[`${e}-item, ${e}-submenu-title`]:{color:r,[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},ue(t))},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${S} !important`},[`${e}-item:not(${e}-item-selected):not(${e}-submenu-selected)`]:{[`&:hover, > ${e}-submenu-title:hover`]:{color:C}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:M},"&:active":{backgroundColor:E}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:M},"&:active":{backgroundColor:E}}},[`${e}-item-danger`]:{color:z,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:T}},[`&${e}-item:active`]:{background:P}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:n,[`&${e}-item-danger`]:{color:H},"a, a:hover":{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:d,[`&${e}-item-danger`]:{backgroundColor:f}},[`&${e}-submenu > ${e}`]:{backgroundColor:x},[`&${e}-popup > ${e}`]:{backgroundColor:y},[`&${e}-submenu-popup > ${e}`]:{backgroundColor:y},[`&${e}-horizontal`]:Object.assign(Object.assign({},o==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:$,marginTop:t.calc($).mul(-1).equal(),marginBottom:0,borderRadius:X,"&::after":{position:"absolute",insetInline:u,bottom:0,borderBottom:`${p(g)} solid transparent`,transition:`border-color ${b} ${m}`,content:'""'},"&:hover, &-active, &-open":{background:A,"&::after":{borderBottomWidth:g,borderBottomColor:I}},"&-selected":{color:I,backgroundColor:N,"&:hover":{backgroundColor:N},"&::after":{borderBottomWidth:g,borderBottomColor:I}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${p($)} ${B} ${O}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:s},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${p(v)} solid ${n}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${h} ${c}`,`opacity ${h} ${c}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:H}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${h} ${m}`,`opacity ${h} ${m}`].join(",")}}}}}},ge=t=>{const{componentCls:o,itemHeight:e,itemMarginInline:r,padding:n,menuArrowSize:a,marginXS:i,itemMarginBlock:s,itemWidth:d,itemPaddingInline:g}=t,v=t.calc(a).add(n).add(i).equal();return{[`${o}-item`]:{position:"relative",overflow:"hidden"},[`${o}-item, ${o}-submenu-title`]:{height:e,lineHeight:p(e),paddingInline:g,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:s,width:d},[`> ${o}-item,
            > ${o}-submenu > ${o}-submenu-title`]:{height:e,lineHeight:p(e)},[`${o}-item-group-list ${o}-submenu-title,
            ${o}-submenu-title`]:{paddingInlineEnd:v}}},bt=t=>{const{componentCls:o,iconCls:e,itemHeight:r,colorTextLightSolid:n,dropdownWidth:a,controlHeightLG:i,motionEaseOut:s,paddingXL:d,itemMarginInline:g,fontSizeLG:v,motionDurationFast:$,motionDurationSlow:b,paddingXS:m,boxShadowSecondary:c,collapsedWidth:u,collapsedIconSize:h}=t,C={height:r,lineHeight:p(r),listStylePosition:"inside",listStyleType:"disc"};return[{[o]:{"&-inline, &-vertical":Object.assign({[`&${o}-root`]:{boxShadow:"none"}},ge(t))},[`${o}-submenu-popup`]:{[`${o}-vertical`]:Object.assign(Object.assign({},ge(t)),{boxShadow:c})}},{[`${o}-submenu-popup ${o}-vertical${o}-sub`]:{minWidth:a,maxHeight:`calc(100vh - ${p(t.calc(i).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${o}-inline`]:{width:"100%",[`&${o}-root`]:{[`${o}-item, ${o}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${b}`,`background ${b}`,`padding ${$} ${s}`].join(","),[`> ${o}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${o}-sub${o}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${o}-submenu > ${o}-submenu-title`]:C,[`& ${o}-item-group-title`]:{paddingInlineStart:d}},[`${o}-item`]:C}},{[`${o}-inline-collapsed`]:{width:u,[`&${o}-root`]:{[`${o}-item, ${o}-submenu ${o}-submenu-title`]:{[`> ${o}-inline-collapsed-noicon`]:{fontSize:v,textAlign:"center"}}},[`> ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-submenu > ${o}-submenu-title,
          > ${o}-submenu > ${o}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${p(t.calc(v).div(2).equal())} - ${p(g)})`,textOverflow:"clip",[`
            ${o}-submenu-arrow,
            ${o}-submenu-expand-icon
          `]:{opacity:0},[`${o}-item-icon, ${e}`]:{margin:0,fontSize:h,lineHeight:p(r),"+ span":{display:"inline-block",opacity:0}}},[`${o}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${o}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:n}},[`${o}-item-group-title`]:Object.assign(Object.assign({},Re),{paddingInline:m})}}]},be=t=>{const{componentCls:o,motionDurationSlow:e,motionDurationMid:r,motionEaseInOut:n,motionEaseOut:a,iconCls:i,iconSize:s,iconMarginInlineEnd:d}=t;return{[`${o}-item, ${o}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${e}`,`background ${e}`,`padding calc(${e} + 0.1s) ${n}`].join(","),[`${o}-item-icon, ${i}`]:{minWidth:s,fontSize:s,transition:[`font-size ${r} ${a}`,`margin ${e} ${n}`,`color ${e}`].join(","),"+ span":{marginInlineStart:d,opacity:1,transition:[`opacity ${e} ${n}`,`margin ${e}`,`color ${e}`].join(",")}},[`${o}-item-icon`]:Object.assign({},Le()),[`&${o}-item-only-child`]:{[`> ${i}, > ${o}-item-icon`]:{marginInlineEnd:0}}},[`${o}-item-disabled, ${o}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${o}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},$e=t=>{const{componentCls:o,motionDurationSlow:e,motionEaseInOut:r,borderRadius:n,menuArrowSize:a,menuArrowOffset:i}=t;return{[`${o}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:t.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${r}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:t.calc(a).mul(.6).equal(),height:t.calc(a).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:n,transition:[`background ${e} ${r}`,`transform ${e} ${r}`,`top ${e} ${r}`,`color ${e} ${r}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${p(t.calc(i).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${p(i)})`}}}}},$t=t=>{const{antCls:o,componentCls:e,fontSize:r,motionDurationSlow:n,motionDurationMid:a,motionEaseInOut:i,paddingXS:s,padding:d,colorSplit:g,lineWidth:v,zIndexPopup:$,borderRadiusLG:b,subMenuItemBorderRadius:m,menuArrowSize:c,menuArrowOffset:u,lineType:h,groupTitleLineHeight:C,groupTitleFontSize:B}=t;return[{"":{[e]:Object.assign(Object.assign({},ae()),{"&-hidden":{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},he(t)),ae()),{marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:t.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${p(s)} ${p(d)}`,fontSize:B,lineHeight:C,transition:`all ${n}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${n} ${i}`,`background ${n} ${i}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${n} ${i}`,`background ${n} ${i}`,`padding ${a} ${i}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${n} ${i}`,`padding ${n} ${i}`].join(",")},[`${e}-title-content`]:{display:"inline-flex",alignItems:"center",transition:`color ${n}`,"> a:first-child":{flexGrow:1},[`> ${o}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${e}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:t.padding,fontSize:t.fontSizeSM,color:t.colorTextDescription}},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:g,borderStyle:h,borderWidth:0,borderTopWidth:v,marginBlock:v,padding:0,"&-dashed":{borderStyle:"dashed"}}}),be(t)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${p(t.calc(r).mul(2).equal())} ${p(d)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:$,borderRadius:b,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:b},be(t)),$e(t)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:m},[`${e}-submenu-title::after`]:{transition:`transform ${n} ${i}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:t.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:t.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:t.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:t.paddingXS}}}),$e(t)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${p(u)})`},"&::after":{transform:`rotate(45deg) translateX(${p(t.calc(u).mul(-1).equal())})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(${p(t.calc(c).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${p(t.calc(u).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${p(u)})`}}})},{[`${o}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},vt=t=>{var o,e,r;const{colorPrimary:n,colorError:a,colorTextDisabled:i,colorErrorBg:s,colorText:d,colorTextDescription:g,colorBgContainer:v,colorFillAlter:$,colorFillContent:b,lineWidth:m,lineWidthBold:c,controlItemBgActive:u,colorBgTextHover:h,controlHeightLG:C,lineHeight:B,colorBgElevated:O,marginXXS:S,padding:z,fontSize:T,controlHeightSM:H,fontSizeLG:P,colorTextLightSolid:f,colorErrorHover:y}=t,M=(o=t.activeBarWidth)!==null&&o!==void 0?o:0,E=(e=t.activeBarBorderWidth)!==null&&e!==void 0?e:m,x=(r=t.itemMarginInline)!==null&&r!==void 0?r:t.marginXXS,I=new se(f).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:t.zIndexPopupBase+50,radiusItem:t.borderRadiusLG,itemBorderRadius:t.borderRadiusLG,radiusSubMenuItem:t.borderRadiusSM,subMenuItemBorderRadius:t.borderRadiusSM,colorItemText:d,itemColor:d,colorItemTextHover:d,itemHoverColor:d,colorItemTextHoverHorizontal:n,horizontalItemHoverColor:n,colorGroupTitle:g,groupTitleColor:g,colorItemTextSelected:n,itemSelectedColor:n,colorItemTextSelectedHorizontal:n,horizontalItemSelectedColor:n,colorItemBg:v,itemBg:v,colorItemBgHover:h,itemHoverBg:h,colorItemBgActive:b,itemActiveBg:u,colorSubItemBg:$,subMenuItemBg:$,colorItemBgSelected:u,itemSelectedBg:u,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:M,colorActiveBarHeight:c,activeBarHeight:c,colorActiveBarBorderSize:m,activeBarBorderWidth:E,colorItemTextDisabled:i,itemDisabledColor:i,colorDangerItemText:a,dangerItemColor:a,colorDangerItemTextHover:a,dangerItemHoverColor:a,colorDangerItemTextSelected:a,dangerItemSelectedColor:a,colorDangerItemBgActive:s,dangerItemActiveBg:s,colorDangerItemBgSelected:s,dangerItemSelectedBg:s,itemMarginInline:x,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:C,groupTitleLineHeight:B,collapsedWidth:C*2,popupBg:O,itemMarginBlock:S,itemPaddingInline:z,horizontalLineHeight:`${C*1.15}px`,iconSize:T,iconMarginInlineEnd:H-T,collapsedIconSize:P,groupTitleFontSize:T,darkItemDisabledColor:new se(f).setAlpha(.25).toRgbString(),darkItemColor:I,darkDangerItemColor:a,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:f,darkItemSelectedBg:n,darkDangerItemSelectedBg:a,darkItemHoverBg:"transparent",darkGroupTitleColor:I,darkItemHoverColor:f,darkDangerItemHoverColor:y,darkDangerItemSelectedColor:f,darkDangerItemActiveBg:a,itemWidth:M?`calc(100% + ${E}px)`:`calc(100% - ${x*2}px)`}},ft=function(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return ve("Menu",n=>{const{colorBgElevated:a,controlHeightLG:i,fontSize:s,darkItemColor:d,darkDangerItemColor:g,darkItemBg:v,darkSubMenuItemBg:$,darkItemSelectedColor:b,darkItemSelectedBg:m,darkDangerItemSelectedBg:c,darkItemHoverBg:u,darkGroupTitleColor:h,darkItemHoverColor:C,darkItemDisabledColor:B,darkDangerItemHoverColor:O,darkDangerItemSelectedColor:S,darkDangerItemActiveBg:z,popupBg:T,darkPopupBg:H}=n,P=n.calc(s).div(7).mul(5).equal(),f=ie(n,{menuArrowSize:P,menuHorizontalHeight:n.calc(i).mul(1.15).equal(),menuArrowOffset:n.calc(P).mul(.25).equal(),menuSubMenuBg:a,calc:n.calc,popupBg:T}),y=ie(f,{itemColor:d,itemHoverColor:C,groupTitleColor:h,itemSelectedColor:b,itemBg:v,popupBg:H,subMenuItemBg:$,itemActiveBg:"transparent",itemSelectedBg:m,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:u,itemDisabledColor:B,dangerItemColor:g,dangerItemHoverColor:O,dangerItemSelectedColor:S,dangerItemActiveBg:z,dangerItemSelectedBg:c,menuSubMenuBg:$,horizontalItemSelectedColor:b,horizontalItemSelectedBg:m});return[$t(f),pt(f),bt(f),pe(f,"light"),pe(y,"dark"),gt(f),Ae(f),V(f,"slide-up"),V(f,"slide-down"),fe(f,"zoom-big")]},vt,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:e,unitless:{groupTitleLineHeight:!0}})(t,o)},Oe=t=>{var o;const{popupClassName:e,icon:r,title:n,theme:a}=t,i=l.useContext(F),{prefixCls:s,inlineCollapsed:d,theme:g}=i,v=Ke();let $;if(!r)$=d&&!v.length&&n&&typeof n=="string"?l.createElement("div",{className:`${s}-inline-collapsed-noicon`},n.charAt(0)):l.createElement("span",{className:`${s}-title-content`},n);else{const c=l.isValidElement(n)&&n.type==="span";$=l.createElement(l.Fragment,null,J(r,{className:j(l.isValidElement(r)?(o=r.props)===null||o===void 0?void 0:o.className:"",`${s}-item-icon`)}),c?n:l.createElement("span",{className:`${s}-title-content`},n))}const b=l.useMemo(()=>Object.assign(Object.assign({},i),{firstLevel:!1}),[i]),[m]=Ce("Menu");return l.createElement(F.Provider,{value:b},l.createElement(et,Object.assign({},Z(t,["icon"]),{title:$,popupClassName:j(s,e,`${s}-${a||g}`),popupStyle:Object.assign({zIndex:m},t.popupStyle)})))};var ht=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};function re(t){return t===null||t===!1}const Ct={item:Be,submenu:Oe,divider:we},It=l.forwardRef((t,o)=>{var e;const r=l.useContext(Y),n=r||{},{getPrefixCls:a,getPopupContainer:i,direction:s,menu:d}=l.useContext(U),g=a(),{prefixCls:v,className:$,style:b,theme:m="light",expandIcon:c,_internalDisableMenuItemTitleTooltip:u,inlineCollapsed:h,siderCollapsed:C,rootClassName:B,mode:O,selectable:S,onClick:z,overflowedIndicatorPopupClassName:T}=t,H=ht(t,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),P=Z(H,["collapsedWidth"]);(e=n.validator)===null||e===void 0||e.call(n,{mode:O});const f=Ie(function(){var D;z==null||z.apply(void 0,arguments),(D=n.onClick)===null||D===void 0||D.call(n)}),y=n.mode||O,M=S??n.selectable,E=l.useMemo(()=>C!==void 0?C:h,[h,C]),x={horizontal:{motionName:`${g}-slide-up`},inline:_e(g),other:{motionName:`${g}-zoom-big`}},I=a("menu",v||n.prefixCls),N=Se(I),[X,A,L]=ft(I,N,!r),k=j(`${I}-${m}`,d==null?void 0:d.className,$),R=l.useMemo(()=>{var D,q;if(typeof c=="function"||re(c))return c||null;if(typeof n.expandIcon=="function"||re(n.expandIcon))return n.expandIcon||null;if(typeof(d==null?void 0:d.expandIcon)=="function"||re(d==null?void 0:d.expandIcon))return(d==null?void 0:d.expandIcon)||null;const W=(D=c??(n==null?void 0:n.expandIcon))!==null&&D!==void 0?D:d==null?void 0:d.expandIcon;return J(W,{className:j(`${I}-submenu-expand-icon`,l.isValidElement(W)?(q=W.props)===null||q===void 0?void 0:q.className:void 0)})},[c,n==null?void 0:n.expandIcon,d==null?void 0:d.expandIcon,I]),_=l.useMemo(()=>({prefixCls:I,inlineCollapsed:E||!1,direction:s,firstLevel:!0,theme:m,mode:y,disableMenuItemTitleTooltip:u}),[I,E,s,u,m]);return X(l.createElement(Y.Provider,{value:null},l.createElement(F.Provider,{value:_},l.createElement(tt,Object.assign({getPopupContainer:i,overflowedIndicator:l.createElement(ye,null),overflowedIndicatorPopupClassName:j(I,`${I}-${m}`,T),mode:y,selectable:M,onClick:f},P,{inlineCollapsed:E,style:Object.assign(Object.assign({},d==null?void 0:d.style),b),className:k,prefixCls:I,direction:s,defaultMotions:x,expandIcon:R,ref:o,rootClassName:j(B,A,n.rootClassName,L,N),_internalComponents:Ct})))))}),G=l.forwardRef((t,o)=>{const e=l.useRef(null),r=l.useContext(xe);return l.useImperativeHandle(o,()=>({menu:e.current,focus:n=>{var a;(a=e.current)===null||a===void 0||a.focus(n)}})),l.createElement(It,Object.assign({ref:e},t,r))});G.Item=Be;G.SubMenu=Oe;G.Divider=we;G.ItemGroup=ot;const St=t=>{const{componentCls:o,menuCls:e,colorError:r,colorTextLightSolid:n}=t,a=`${e}-item`;return{[`${o}, ${o}-menu-submenu`]:{[`${e} ${a}`]:{[`&${a}-danger:not(${a}-disabled)`]:{color:r,"&:hover":{color:n,backgroundColor:r}}}}}},yt=t=>{const{componentCls:o,menuCls:e,zIndexPopup:r,dropdownArrowDistance:n,sizePopupArrow:a,antCls:i,iconCls:s,motionDurationMid:d,paddingBlock:g,fontSize:v,dropdownEdgeChildPadding:$,colorTextDisabled:b,fontSizeIcon:m,controlPaddingHorizontal:c,colorBgElevated:u}=t;return[{[o]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:r,display:"block","&::before":{position:"absolute",insetBlock:t.calc(a).div(2).sub(n).equal(),zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${i}-btn`]:{[`& > ${s}-down, & > ${i}-btn-icon > ${s}-down`]:{fontSize:m}},[`${o}-wrap`]:{position:"relative",[`${i}-btn > ${s}-down`]:{fontSize:m},[`${s}-down::before`]:{transition:`transform ${d}`}},[`${o}-wrap-open`]:{[`${s}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${i}-slide-down-enter${i}-slide-down-enter-active${o}-placement-bottomLeft,
          &${i}-slide-down-appear${i}-slide-down-appear-active${o}-placement-bottomLeft,
          &${i}-slide-down-enter${i}-slide-down-enter-active${o}-placement-bottom,
          &${i}-slide-down-appear${i}-slide-down-appear-active${o}-placement-bottom,
          &${i}-slide-down-enter${i}-slide-down-enter-active${o}-placement-bottomRight,
          &${i}-slide-down-appear${i}-slide-down-appear-active${o}-placement-bottomRight`]:{animationName:nt},[`&${i}-slide-up-enter${i}-slide-up-enter-active${o}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${o}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${o}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${o}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${o}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${o}-placement-topRight`]:{animationName:rt},[`&${i}-slide-down-leave${i}-slide-down-leave-active${o}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${o}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${o}-placement-bottomRight`]:{animationName:it},[`&${i}-slide-up-leave${i}-slide-up-leave-active${o}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${o}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${o}-placement-topRight`]:{animationName:lt}}},We(t,u,{arrowPlacement:{top:!0,bottom:!0}}),{[`${o} ${e}`]:{position:"relative",margin:0},[`${e}-submenu-popup`]:{position:"absolute",zIndex:r,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${o}, ${o}-menu-submenu`]:Object.assign(Object.assign({},he(t)),{[e]:Object.assign(Object.assign({padding:$,listStyleType:"none",backgroundColor:u,backgroundClip:"padding-box",borderRadius:t.borderRadiusLG,outline:"none",boxShadow:t.boxShadowSecondary},de(t)),{"&:empty":{padding:0,boxShadow:"none"},[`${e}-item-group-title`]:{padding:`${p(g)} ${p(c)}`,color:t.colorTextDescription,transition:`all ${d}`},[`${e}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${e}-item-icon`]:{minWidth:v,marginInlineEnd:t.marginXS,fontSize:t.fontSizeSM},[`${e}-title-content`]:{display:"flex",alignItems:"center",flex:"auto","> a":{color:"inherit",transition:`all ${d}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}},[`${e}-item-extra`]:{paddingInlineStart:t.padding,marginInlineStart:"auto",fontSize:t.fontSizeSM,color:t.colorTextDescription}},[`${e}-item, ${e}-submenu-title`]:Object.assign(Object.assign({display:"flex",margin:0,padding:`${p(g)} ${p(c)}`,color:t.colorText,fontWeight:"normal",fontSize:v,lineHeight:t.lineHeight,cursor:"pointer",transition:`all ${d}`,borderRadius:t.borderRadiusSM,"&:hover, &-active":{backgroundColor:t.controlItemBgHover}},de(t)),{"&-selected":{color:t.colorPrimary,backgroundColor:t.controlItemBgActive,"&:hover, &-active":{backgroundColor:t.controlItemBgActiveHover}},"&-disabled":{color:b,cursor:"not-allowed","&:hover":{color:b,backgroundColor:u,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${p(t.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:t.colorSplit},[`${o}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:t.paddingXS,[`${o}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:t.colorTextDescription,fontSize:m,fontStyle:"normal"}}}),[`${e}-item-group-list`]:{margin:`0 ${p(t.marginXS)}`,padding:0,listStyle:"none"},[`${e}-submenu-title`]:{paddingInlineEnd:t.calc(c).add(t.fontSizeSM).equal()},[`${e}-submenu-vertical`]:{position:"relative"},[`${e}-submenu${e}-submenu-disabled ${o}-menu-submenu-title`]:{[`&, ${o}-menu-submenu-arrow-icon`]:{color:b,backgroundColor:u,cursor:"not-allowed"}},[`${e}-submenu-selected ${o}-menu-submenu-title`]:{color:t.colorPrimary}})})},[V(t,"slide-up"),V(t,"slide-down"),me(t,"move-up"),me(t,"move-down"),fe(t,"zoom-big")]]},xt=t=>Object.assign(Object.assign({zIndexPopup:t.zIndexPopupBase+50,paddingBlock:(t.controlHeight-t.fontSize*t.lineHeight)/2},Xe({contentRadius:t.borderRadiusLG,limitVerticalRadius:!0})),ke(t)),wt=ve("Dropdown",t=>{const{marginXXS:o,sizePopupArrow:e,paddingXXS:r,componentCls:n}=t,a=ie(t,{menuCls:`${n}-menu`,dropdownArrowDistance:t.calc(e).div(2).add(o).equal(),dropdownEdgeChildPadding:r});return[yt(a),St(a)]},xt,{resetStyle:!1}),Q=t=>{var o;const{menu:e,arrow:r,prefixCls:n,children:a,trigger:i,disabled:s,dropdownRender:d,getPopupContainer:g,overlayClassName:v,rootClassName:$,overlayStyle:b,open:m,onOpenChange:c,visible:u,onVisibleChange:h,mouseEnterDelay:C=.15,mouseLeaveDelay:B=.1,autoAdjustOverflow:O=!0,placement:S="",overlay:z,transitionName:T}=t,{getPopupContainer:H,getPrefixCls:P,direction:f,dropdown:y}=l.useContext(U);Ue();const M=l.useMemo(()=>{const w=P();return T!==void 0?T:S.includes("top")?`${w}-slide-down`:`${w}-slide-up`},[P,S,T]),E=l.useMemo(()=>S?S.includes("Center")?S.slice(0,S.indexOf("Center")):S:f==="rtl"?"bottomRight":"bottomLeft",[S,f]),x=P("dropdown",n),I=Se(x),[N,X,A]=wt(x,I),[,L]=qe(),k=l.Children.only(a),R=J(k,{className:j(`${x}-trigger`,{[`${x}-rtl`]:f==="rtl"},k.props.className),disabled:(o=k.props.disabled)!==null&&o!==void 0?o:s}),_=s?[]:i,D=!!(_!=null&&_.includes("contextMenu")),[q,W]=Ge(!1,{value:m??u}),K=Ie(w=>{c==null||c(w,{source:"trigger"}),h==null||h(w),W(w)}),ee=j(v,$,X,A,I,y==null?void 0:y.className,{[`${x}-rtl`]:f==="rtl"}),te=Ve({arrowPointAtCenter:typeof r=="object"&&r.pointAtCenter,autoAdjustOverflow:O,offset:L.marginXXS,arrowWidth:r?L.sizePopupArrow:0,borderRadius:L.borderRadius}),oe=l.useCallback(()=>{e!=null&&e.selectable&&(e!=null&&e.multiple)||(c==null||c(!1,{source:"menu"}),W(!1))},[e==null?void 0:e.selectable,e==null?void 0:e.multiple]),Te=()=>{let w;return e!=null&&e.items?w=l.createElement(G,Object.assign({},e)):typeof z=="function"?w=z():w=z,d&&(w=d(w)),w=l.Children.only(typeof w=="string"?l.createElement("span",null,w):w),l.createElement(ut,{prefixCls:`${x}-menu`,rootClassName:j(A,I),expandIcon:l.createElement("span",{className:`${x}-menu-submenu-arrow`},l.createElement(Ye,{className:`${x}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:oe,validator:Et=>{}},w)},[le,Pe]=Ce("Dropdown",b==null?void 0:b.zIndex);let ne=l.createElement(at,Object.assign({alignPoint:D},Z(t,["rootClassName"]),{mouseEnterDelay:C,mouseLeaveDelay:B,visible:q,builtinPlacements:te,arrow:!!r,overlayClassName:ee,prefixCls:x,getPopupContainer:g||H,transitionName:M,trigger:_,overlay:Te,placement:E,onVisibleChange:K,overlayStyle:Object.assign(Object.assign(Object.assign({},y==null?void 0:y.style),b),{zIndex:le})}),R);return le&&(ne=l.createElement(Fe.Provider,{value:Pe},ne)),N(ne)};function Bt(t){return Object.assign(Object.assign({},t),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const Ot=st(Q,"dropdown",t=>t,Bt),zt=t=>l.createElement(Ot,Object.assign({},t),l.createElement("span",null));Q._InternalPanelDoNotUseOrYouWillBeFired=zt;var Tt=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};const ze=t=>{const{getPopupContainer:o,getPrefixCls:e,direction:r}=l.useContext(U),{prefixCls:n,type:a="default",danger:i,disabled:s,loading:d,onClick:g,htmlType:v,children:$,className:b,menu:m,arrow:c,autoFocus:u,overlay:h,trigger:C,align:B,open:O,onOpenChange:S,placement:z,getPopupContainer:T,href:H,icon:P=l.createElement(ye,null),title:f,buttonsRender:y=oe=>oe,mouseEnterDelay:M,mouseLeaveDelay:E,overlayClassName:x,overlayStyle:I,destroyPopupOnHide:N,dropdownRender:X}=t,A=Tt(t,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),L=e("dropdown",n),k=`${L}-button`,R={menu:m,arrow:c,autoFocus:u,align:B,disabled:s,trigger:s?[]:C,onOpenChange:S,getPopupContainer:T||o,mouseEnterDelay:M,mouseLeaveDelay:E,overlayClassName:x,overlayStyle:I,destroyPopupOnHide:N,dropdownRender:X},{compactSize:_,compactItemClassnames:D}=Ze(L,r),q=j(k,D,b);"overlay"in t&&(R.overlay=h),"open"in t&&(R.open=O),"placement"in t?R.placement=z:R.placement=r==="rtl"?"bottomLeft":"bottomRight";const W=l.createElement(ce,{type:a,danger:i,disabled:s,loading:d,onClick:g,htmlType:v,href:H,title:f},$),K=l.createElement(ce,{type:a,danger:i,icon:P}),[ee,te]=y([W,K]);return l.createElement(dt.Compact,Object.assign({className:q,size:_,block:!0},A),ee,l.createElement(Q,Object.assign({},R),te))};ze.__ANT_BUTTON=!0;const Pt=Q;Pt.Button=ze;export{Q as D,G as M,ut as O,Pt as a};

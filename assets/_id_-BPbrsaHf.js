import{aN as o,B as s,k as r}from"./index-CDFUvaik.js";import{L as i}from"./LookForward-CWW6h4Rl.js";import{f as m}from"./system-manage-DbUJ3JqR.js";import{C as c}from"./index-BbN9nxFy.js";import{D as d}from"./index-BOw9C7kX.js";import"./EllipsisOutlined-DlF0UNrL.js";import"./responsiveObserver-DYoLJjsb.js";import"./useBreakpoint-CJ3h_whu.js";function f(t){return{key:t[0],label:t[0],children:t[1]}}function N(){const t=o(),{t:e}=s();if(!t)return r.jsx(i,{});const a=Object.entries(t).map(f);return r.jsxs(c,{title:"User Info",className:"h-full",children:[r.jsx(d,{bordered:!0,items:a}),r.jsx("div",{className:"mt-16px text-center text-18px",children:e("page.manage.userDetail.explain")}),r.jsx("div",{className:"mt-16px text-center text-18px",children:e("page.manage.userDetail.content")})]})}async function b({params:t}){const{data:e,error:a}=await m();return a?null:e.records.find(n=>String(n.id)===t.id)}export{N as Component,b as loader};

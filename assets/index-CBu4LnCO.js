import{B as g,k as e,J as r}from"./index-BGbE_bB_.js";import{u as h}from"./captcha-DbjOOD-v.js";import{u as x}from"./routerPush-BESDF9L5.js";import{F as s,u as f}from"./form-Co_TyLLZ.js";import{u as j}from"./index-CDYRoaAi.js";import{I as t}from"./index-ogkChao3.js";import{S as C}from"./index-CwkPE0R-.js";import"./use-loading-BULHw6fA.js";import"./tslib.es6-CwN1OpI9.js";import"./subscribeFocus-V3XVKdwh.js";import"./_baseGetTag-Dtq_aTpt.js";import"./row-CdipfaUa.js";import"./responsiveObserver-De5uInnn.js";import"./SearchOutlined-Dakcpk6K.js";const k=()=>{const[i]=s.useForm(),{label:m,isCounting:c,loading:p,getCaptcha:d}=h(),{t:o}=g(),{toggleLoginModule:u}=x(),{formRules:a}=f();async function l(){var n;await i.validateFields(),(n=window.$message)==null||n.success(o("page.login.common.validateSuccess"))}return j("enter",()=>{l()}),e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-18px text-primary font-medium",children:o("page.login.codeLogin.title")}),e.jsxs(s,{className:"pt-24px",form:i,children:[e.jsx(s.Item,{name:"phone",rules:a.phone,children:e.jsx(t,{placeholder:o("page.login.common.phonePlaceholder")})}),e.jsx(s.Item,{name:"code",rules:a.code,children:e.jsxs("div",{className:"w-full flex-y-center gap-16px",children:[e.jsx(t,{"v-model:value":"model.code",placeholder:o("page.login.common.codePlaceholder")}),e.jsx(r,{size:"large",disabled:c,loading:p,onClick:()=>d("17260760167"),children:m})]})}),e.jsxs(C,{direction:"vertical",className:"w-full",size:18,children:[e.jsx(r,{type:"primary",size:"large",shape:"round",block:!0,onClick:l,children:o("common.confirm")}),e.jsx(r,{size:"large",shape:"round",block:!0,onClick:()=>u("pwd-login"),children:o("page.login.common.back")})]})]})]})};k.displayName="CodeLogin";export{k as Component};
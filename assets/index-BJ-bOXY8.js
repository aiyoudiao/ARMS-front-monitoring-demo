import{B as h,k as e,J as o,aF as m}from"./index-3slPCUOl.js";import{u as w}from"./login-Wenve_UQ.js";import{u as j}from"./routerPush-cLO4gpQ_.js";import{F as i,u as y}from"./form-BDFSYGaT.js";import{u as N}from"./index-vlwykK98.js";import{I as p}from"./index-BnHyZ5TF.js";import{S as k}from"./index-C2I5atqp.js";import{C as b}from"./index-CyK36jYs.js";import{D as L}from"./index-BqpEbUz2.js";import"./use-loading-1D8DTebt.js";import"./subscribeFocus-CjhDIB9k.js";import"./_baseGetTag-WL9ykUsa.js";import"./row-CMVaL6cH.js";import"./responsiveObserver-Eu9Q6aGm.js";import"./tslib.es6-CwN1OpI9.js";import"./SearchOutlined-_kHwqqG-.js";function T(){const[a]=i.useForm(),{toggleLoginModule:n}=j(),{t:s}=h(),{loading:c,toLogin:t}=w(),{formRules:{userName:d,pwd:u}}=y();async function l(){const r=await a.validateFields(),{userName:f}=r;window.aliLogger.setConfig({setUsername(){return f}}),t(r)}N("enter",()=>{l()});function g(r){t(r)}const x=[{key:"super",label:s("page.login.pwdLogin.superAdmin"),userName:"Super",password:"123456"},{key:"admin",label:s("page.login.pwdLogin.admin"),userName:"Admin",password:"123456"},{key:"user",label:s("page.login.pwdLogin.user"),userName:"User",password:"123456"}];return e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-18px text-primary font-medium",children:s("page.login.pwdLogin.title")}),e.jsxs(i,{className:"pt-24px",form:a,initialValues:{userName:"Soybean",password:"123456"},children:[e.jsx(i.Item,{rules:d,name:"userName",children:e.jsx(p,{})}),e.jsx(i.Item,{rules:u,name:"password",children:e.jsx(p.Password,{autoComplete:"password"})}),e.jsxs(k,{direction:"vertical",className:"w-full",size:24,children:[e.jsxs("div",{className:"flex-y-center justify-between",children:[e.jsx(b,{children:s("page.login.pwdLogin.rememberMe")}),e.jsx(o,{type:"text",onClick:()=>n("reset-pwd"),children:s("page.login.pwdLogin.forgetPassword")})]}),e.jsx(o,{type:"primary",size:"large",loading:c,shape:"round",onClick:l,block:!0,children:s("common.confirm")}),e.jsxs("div",{className:"flex-y-center justify-between gap-12px",children:[e.jsx(o,{className:"flex-1",block:!0,onClick:()=>n("code-login"),children:s(m["code-login"])}),e.jsx(o,{className:"flex-1",block:!0,onClick:()=>n("register"),children:s(m.register)})]}),e.jsx(L,{className:"!m-0 !text-14px !text-#666",children:s("page.login.pwdLogin.otherAccountLogin")}),e.jsx("div",{className:"flex-center gap-12px",children:x.map(r=>e.jsx(o,{onClick:()=>g(r),type:"primary",children:r.label},r.key))})]})]})]})}export{T as Component};
//# sourceMappingURL=index-BJ-bOXY8.js.map
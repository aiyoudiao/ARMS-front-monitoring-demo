import{B as g,k as e,J as n}from"./index-CDFUvaik.js";import{u as x}from"./captcha-Dsz-UDAq.js";import{u as f}from"./routerPush-CfkJEHAY.js";import{F as s,u as j}from"./form-Cr1UGSOi.js";import{u as w}from"./index-C-hOD_VP.js";import{I as r}from"./index-BXbG6JQu.js";import{S as P}from"./index-CDu_EQ1l.js";import"./use-loading-C83CW4Xo.js";import"./tslib.es6-CwN1OpI9.js";import"./subscribeFocus-CutN768b.js";import"./_baseGetTag-CsJuxH-4.js";import"./row-CtRn8Xfc.js";import"./responsiveObserver-DYoLJjsb.js";import"./SearchOutlined-WNC3VZcy.js";const C=()=>{const{t:o}=g(),{label:t,isCounting:c,loading:p,getCaptcha:d}=x(),{toggleLoginModule:u}=f(),[a]=s.useForm(),{formRules:l,createConfirmPwdRule:h}=j();async function i(){var m;await a.validateFields(),(m=window.$message)==null||m.success(o("page.login.common.validateSuccess"))}return w("enter",()=>{i()}),e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-18px text-primary font-medium",children:o("page.login.register.title")}),e.jsxs(s,{form:a,className:"pt-24px",children:[e.jsx(s.Item,{name:"phone",rules:l.phone,children:e.jsx(r,{placeholder:o("page.login.common.phonePlaceholder")})}),e.jsx(s.Item,{name:"code",rules:l.code,children:e.jsxs("div",{className:"w-full flex-y-center gap-16px",children:[e.jsx(r,{placeholder:o("page.login.common.codePlaceholder")}),e.jsx(n,{size:"large",disabled:c,loading:p,onClick:()=>d("17260760167"),children:t})]})}),e.jsx(s.Item,{rules:l.pwd,name:"password",children:e.jsx(r,{placeholder:o("page.login.common.passwordPlaceholder")})}),e.jsx(s.Item,{rules:h(a),name:"confirmPassword",children:e.jsx(r,{placeholder:o("page.login.common.confirmPasswordPlaceholder")})}),e.jsxs(P,{direction:"vertical",className:"w-full",size:18,children:[e.jsx(n,{type:"primary",size:"large",shape:"round",block:!0,onClick:i,children:o("common.confirm")}),e.jsx(n,{size:"large",shape:"round",block:!0,onClick:()=>u("pwd-login"),children:o("page.login.common.back")})]})]})]})};C.displayName="Register";export{C as Component};

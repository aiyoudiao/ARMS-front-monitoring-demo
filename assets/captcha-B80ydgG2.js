import{r as c,aJ as h,f as w,aK as C,B as T}from"./index-CU9jdwYV.js";import{u as _}from"./use-loading-DLBqBHvf.js";import{_ as D}from"./tslib.es6-CwN1OpI9.js";import"./subscribeFocus-DaYkgXeh.js";import"./_baseGetTag-D4eYDfZL.js";import{R as E}from"./form-CIZ_T5oE.js";var g=function(t){if(!t)return 0;var n=C(t).valueOf()-Date.now();return n<0?0:n},b=function(t){return{days:Math.floor(t/864e5),hours:Math.floor(t/36e5)%24,minutes:Math.floor(t/6e4)%60,seconds:Math.floor(t/1e3)%60,milliseconds:Math.floor(t)%1e3}},R=function(t){t===void 0&&(t={});var n=t||{},r=n.leftTime,o=n.targetDate,i=n.interval,u=i===void 0?1e3:i,s=n.onEnd,l=c.useMemo(function(){return h(r)&&r>0?Date.now()+r:void 0},[r]),a="leftTime"in t?l:o,m=D(c.useState(function(){return g(a)}),2),e=m[0],f=m[1],d=w(s);c.useEffect(function(){if(!a){f(0);return}f(g(a));var p=setInterval(function(){var v,L=g(a);f(L),L===0&&(clearInterval(p),(v=d.current)===null||v===void 0||v.call(d))},u);return function(){return clearInterval(p)}},[a,u]);var M=c.useMemo(function(){return b(e)},[e]);return[e,M]};function x(t){const[n,r]=c.useState(0),[o]=R({targetDate:n}),i=Math.round(o/1e3),u=o>0;function s(a=t){r(Date.now()+a*1e3)}function l(){r(0)}return{count:i,isCounting:u,start:s,stop:l}}function S(){const{loading:t,startLoading:n,endLoading:r}=_(),{count:o,start:i,isCounting:u}=x(10),{t:s}=T(),l=c.useMemo(()=>{let e=s("page.login.codeLogin.getCode");const f=s("page.login.codeLogin.reGetCode",{time:o});return t&&(e=""),u&&(e=f),e},[o]);function a(e){return!(e.trim()===""||!E.test(e))}async function m(e){!a(e)||t||(n(),await new Promise(d=>{setTimeout(d,500)}),i(),r())}return{label:l,isCounting:u,loading:t,getCaptcha:m}}export{S as u};
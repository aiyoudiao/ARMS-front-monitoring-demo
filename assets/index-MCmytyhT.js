import{r,b7 as v,b8 as m,ay as g,bY as w,j as b,bZ as E,h as u,b_ as _}from"./index-CDFUvaik.js";import{_ as f}from"./tslib.es6-CwN1OpI9.js";var W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},p=function(e,a){return r.createElement(v,m({},e,{ref:a,icon:W}))},y=r.forwardRef(p);function R(n){var e=r.useRef(0),a=f(r.useState(n),2),c=a[0],t=a[1],i=r.useCallback(function(s){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){t(s)})},[]);return g(function(){cancelAnimationFrame(e.current)}),[c,i]}var S=w(r.useLayoutEffect),x=b?S:E;function z(n){var e=f(R(function(){var t=u(n);return t?{width:t.clientWidth,height:t.clientHeight}:void 0}),2),a=e[0],c=e[1];return x(function(){var t=u(n);if(t){var i=new _(function(s){s.forEach(function(h){var o=h.target,l=o.clientWidth,d=o.clientHeight;c({width:l,height:d})})});return i.observe(t),function(){i.disconnect()}}},[],n),a}export{y as R,z as u};

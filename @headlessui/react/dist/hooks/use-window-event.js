import{useEffect as d}from"react";import{useLatestValue as a}from"./use-latest-value.js";function s(e,r,n){let o=a(r);d(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}export{s as useWindowEvent};

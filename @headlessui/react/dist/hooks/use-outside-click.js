import{useRef as m}from"react";import{microTask as s}from"../utils/micro-task.js";import{useEvent as p}from"./use-event.js";import{useWindowEvent as u}from"./use-window-event.js";var C=(n=>(n[n.None=1]="None",n[n.IgnoreScrollbars=2]="IgnoreScrollbars",n))(C||{});function w(c,f,n=1){let i=m(!1),l=p(r=>{if(i.current)return;i.current=!0,s(()=>{i.current=!1});let a=function t(e){return typeof e=="function"?t(e()):Array.isArray(e)||e instanceof Set?e:[e]}(c),o=r.target;if(!!o.ownerDocument.documentElement.contains(o)){if((n&2)===2){let t=20,e=o.ownerDocument.documentElement;if(r.clientX>e.clientWidth-t||r.clientX<t||r.clientY>e.clientHeight-t||r.clientY<t)return}for(let t of a){if(t===null)continue;let e=t instanceof HTMLElement?t:t.current;if(e!=null&&e.contains(o))return}return f(r,o)}});u("pointerdown",l),u("mousedown",l)}export{C as Features,w as useOutsideClick};

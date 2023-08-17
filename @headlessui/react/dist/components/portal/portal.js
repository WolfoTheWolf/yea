import y,{Fragment as d,createContext as L,useContext as b,useEffect as m,useRef as s,useState as T}from"react";import{createPortal as h}from"react-dom";import{forwardRefWithAs as P,render as R}from"../../utils/render.js";import{useIsoMorphicEffect as G}from"../../hooks/use-iso-morphic-effect.js";import{usePortalRoot as M}from"../../internal/portal-force-root.js";import{useServerHandoffComplete as v}from"../../hooks/use-server-handoff-complete.js";import{optionalRef as C,useSyncRefs as g}from"../../hooks/use-sync-refs.js";import{useOwnerDocument as c}from"../../hooks/use-owner.js";import{microTask as O}from"../../utils/micro-task.js";function H(i){let u=M(),l=b(E),e=c(i),[r,a]=T(()=>{if(!u&&l!==null||typeof window=="undefined")return null;let o=e==null?void 0:e.getElementById("headlessui-portal-root");if(o)return o;if(e===null)return null;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)});return m(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r))},[r,e]),m(()=>{u||l!==null&&a(l.current)},[l,a,u]),r}let x=d,_=P(function(u,l){let e=u,r=s(null),a=g(C(f=>{r.current=f}),l),o=c(r),t=H(r),[n]=T(()=>{var f;return typeof window=="undefined"?null:(f=o==null?void 0:o.createElement("div"))!=null?f:null}),A=v(),p=s(!1);return G(()=>{if(p.current=!1,!(!t||!n))return t.contains(n)||t.appendChild(n),()=>{p.current=!0,O(()=>{var f;!p.current||!t||!n||(t.removeChild(n),t.childNodes.length<=0&&((f=t.parentElement)==null||f.removeChild(t)))})}},[t,n]),A?!t||!n?null:h(R({ourProps:{ref:a},theirProps:e,defaultTag:x,name:"Portal"}),n):null}),U=d,E=L(null),j=P(function(u,l){let{target:e,...r}=u,o={ref:g(l)};return y.createElement(E.Provider,{value:e},R({ourProps:o,theirProps:r,defaultTag:U,name:"Popover.Group"}))}),X=Object.assign(_,{Group:j});export{X as Portal};
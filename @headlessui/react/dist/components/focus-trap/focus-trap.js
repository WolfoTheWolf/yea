import m,{useEffect as k,useRef as i}from"react";import{forwardRefWithAs as A,render as h}from"../../utils/render.js";import{useServerHandoffComplete as S}from"../../hooks/use-server-handoff-complete.js";import{useSyncRefs as g}from"../../hooks/use-sync-refs.js";import{Features as M,Hidden as L}from"../../internal/hidden.js";import{focusElement as c,focusIn as b,Focus as p,FocusResult as y}from"../../utils/focus-management.js";import{match as B}from"../../utils/match.js";import{useEvent as I}from"../../hooks/use-event.js";import{useTabDirection as P,Direction as d}from"../../hooks/use-tab-direction.js";import{useIsMounted as _}from"../../hooks/use-is-mounted.js";import{useOwnerDocument as U}from"../../hooks/use-owner.js";import{useEventListener as H}from"../../hooks/use-event-listener.js";import{microTask as C}from"../../utils/micro-task.js";import{useWatch as R}from"../../hooks/use-watch.js";let N="div";var F=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(F||{});let fe=Object.assign(A(function(l,e){let r=i(null),u=g(r,e),{initialFocus:f,containers:t,features:o=30,...a}=l;S()||(o=1);let s=U(r);V({ownerDocument:s},Boolean(o&16));let O=x({ownerDocument:s,container:r,initialFocus:f},Boolean(o&2));D({ownerDocument:s,container:r,containers:t,previousActiveElement:O},Boolean(o&8));let j=P(),E=I(()=>{let T=r.current;!T||B(j.current,{[d.Forwards]:()=>b(T,p.First),[d.Backwards]:()=>b(T,p.Last)})}),v={ref:u};return m.createElement(m.Fragment,null,Boolean(o&4)&&m.createElement(L,{as:"button",type:"button",onFocus:E,features:M.Focusable}),h({ourProps:v,theirProps:a,defaultTag:N,name:"FocusTrap"}),Boolean(o&4)&&m.createElement(L,{as:"button",type:"button",onFocus:E,features:M.Focusable}))}),{features:F});function V({ownerDocument:n},l){let e=i(null);H(n==null?void 0:n.defaultView,"focusout",u=>{!l||e.current||(e.current=u.target)},!0),R(()=>{l||(c(e.current),e.current=null)},[l]);let r=i(!1);k(()=>(r.current=!1,()=>{r.current=!0,C(()=>{!r.current||(c(e.current),e.current=null)})}),[])}function x({ownerDocument:n,container:l,initialFocus:e},r){let u=i(null);return R(()=>{if(!r)return;let f=l.current;if(!f)return;let t=n==null?void 0:n.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===t){u.current=t;return}}else if(f.contains(t)){u.current=t;return}e!=null&&e.current?c(e.current):b(f,p.First)===y.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),u.current=n==null?void 0:n.activeElement},[r]),u}function D({ownerDocument:n,container:l,containers:e,previousActiveElement:r},u){let f=_();H(n==null?void 0:n.defaultView,"focus",t=>{if(!u||!f.current)return;let o=new Set(e==null?void 0:e.current);o.add(l);let a=r.current;if(!a)return;let s=t.target;s&&s instanceof HTMLElement?G(o,s)?(r.current=s,c(s)):(t.preventDefault(),t.stopPropagation(),c(a)):c(r.current)},!0)}function G(n,l){var e;for(let r of n)if((e=r.current)!=null&&e.contains(l))return!0;return!1}export{fe as FocusTrap};

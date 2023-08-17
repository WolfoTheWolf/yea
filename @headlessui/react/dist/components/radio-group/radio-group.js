import P,{createContext as X,useContext as Y,useMemo as D,useReducer as Z,useRef as U}from"react";import{forwardRefWithAs as W,render as K,compact as V}from"../../utils/render.js";import{useId as j}from"../../hooks/use-id.js";import{match as ee}from"../../utils/match.js";import{useIsoMorphicEffect as H}from"../../hooks/use-iso-morphic-effect.js";import{Keys as E}from"../../components/keyboard.js";import{focusIn as B,Focus as F,FocusResult as $,sortByDomNode as te}from"../../utils/focus-management.js";import{useFlags as re}from"../../hooks/use-flags.js";import{Label as oe,useLabels as z}from"../../components/label/label.js";import{Description as ie,useDescriptions as J}from"../../components/description/description.js";import{useTreeWalker as ne}from"../../hooks/use-tree-walker.js";import{useSyncRefs as q}from"../../hooks/use-sync-refs.js";import{Hidden as ae,Features as le}from"../../internal/hidden.js";import{attemptSubmit as pe,objectToFormEntries as se}from"../../utils/form.js";import{getOwnerDocument as de}from"../../utils/owner.js";import{useEvent as b}from"../../hooks/use-event.js";var ue=(t=>(t[t.RegisterOption=0]="RegisterOption",t[t.UnregisterOption=1]="UnregisterOption",t))(ue||{});let ce={[0](n,i){let t=[...n.options,{id:i.id,element:i.element,propsRef:i.propsRef}];return{...n,options:te(t,o=>o.element.current)}},[1](n,i){let t=n.options.slice(),o=n.options.findIndex(T=>T.id===i.id);return o===-1?n:(t.splice(o,1),{...n,options:t})}},N=X(null);N.displayName="RadioGroupContext";function Q(n){let i=Y(N);if(i===null){let t=new Error(`<${n} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Q),t}return i}function fe(n,i){return ee(i.type,ce,n,i)}let me="div",be=W(function(i,t){let{value:o,name:T,onChange:R,disabled:A=!1,...L}=i,u=b((e,a)=>e===a),[x,h]=Z(fe,{options:[]}),l=x.options,[G,c]=z(),[y,w]=J(),f=`headlessui-radiogroup-${j()}`,g=U(null),I=q(g,t),k=D(()=>l.find(e=>!e.propsRef.current.disabled),[l]),O=D(()=>l.some(e=>u(e.propsRef.current.value,o)),[l,o]),m=b(e=>{var r;if(A||u(e,o))return!1;let a=(r=l.find(s=>u(s.propsRef.current.value,e)))==null?void 0:r.propsRef.current;return a!=null&&a.disabled?!1:(R(e),!0)});ne({container:g.current,accept(e){return e.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none")}});let S=b(e=>{let a=g.current;if(!a)return;let r=de(a),s=l.filter(p=>p.propsRef.current.disabled===!1).map(p=>p.element.current);switch(e.key){case E.Enter:pe(e.currentTarget);break;case E.ArrowLeft:case E.ArrowUp:if(e.preventDefault(),e.stopPropagation(),B(s,F.Previous|F.WrapAround)===$.Success){let d=l.find(v=>v.element.current===(r==null?void 0:r.activeElement));d&&m(d.propsRef.current.value)}break;case E.ArrowRight:case E.ArrowDown:if(e.preventDefault(),e.stopPropagation(),B(s,F.Next|F.WrapAround)===$.Success){let d=l.find(v=>v.element.current===(r==null?void 0:r.activeElement));d&&m(d.propsRef.current.value)}break;case E.Space:{e.preventDefault(),e.stopPropagation();let p=l.find(d=>d.element.current===(r==null?void 0:r.activeElement));p&&m(p.propsRef.current.value)}break}}),C=b(e=>(h({type:0,...e}),()=>h({type:1,id:e.id}))),_=D(()=>({registerOption:C,firstOption:k,containsCheckedOption:O,change:m,disabled:A,value:o,compare:u}),[C,k,O,m,A,o,u]),M={ref:I,id:f,role:"radiogroup","aria-labelledby":G,"aria-describedby":y,onKeyDown:S};return P.createElement(w,{name:"RadioGroup.Description"},P.createElement(c,{name:"RadioGroup.Label"},P.createElement(N.Provider,{value:_},T!=null&&o!=null&&se({[T]:o}).map(([e,a])=>P.createElement(ae,{features:le.Hidden,...V({key:e,as:"input",type:"radio",checked:a!=null,hidden:!0,readOnly:!0,name:e,value:a})})),K({ourProps:M,theirProps:L,defaultTag:me,name:"RadioGroup"}))))});var Te=(t=>(t[t.Empty=1]="Empty",t[t.Active=2]="Active",t))(Te||{});let Re="div",ye=W(function(i,t){let o=U(null),T=q(o,t),R=`headlessui-radiogroup-option-${j()}`,[A,L]=z(),[u,x]=J(),{addFlag:h,removeFlag:l,hasFlag:G}=re(1),{value:c,disabled:y=!1,...w}=i,f=U({value:c,disabled:y});H(()=>{f.current.value=c},[c,f]),H(()=>{f.current.disabled=y},[y,f]);let{registerOption:g,disabled:I,change:k,firstOption:O,containsCheckedOption:m,value:S,compare:C}=Q("RadioGroup.Option");H(()=>g({id:R,element:o,propsRef:f}),[R,g,o,i]);let _=b(()=>{var v;!k(c)||(h(2),(v=o.current)==null||v.focus())}),M=b(()=>h(2)),e=b(()=>l(2)),a=(O==null?void 0:O.id)===R,r=I||y,s=C(S,c),p={ref:T,id:R,role:"radio","aria-checked":s?"true":"false","aria-labelledby":A,"aria-describedby":u,"aria-disabled":r?!0:void 0,tabIndex:(()=>r?-1:s||!m&&a?0:-1)(),onClick:r?void 0:_,onFocus:r?void 0:M,onBlur:r?void 0:e},d=D(()=>({checked:s,disabled:r,active:G(2)}),[s,r,G]);return P.createElement(x,{name:"RadioGroup.Description"},P.createElement(L,{name:"RadioGroup.Label"},K({ourProps:p,theirProps:w,slot:d,defaultTag:Re,name:"RadioGroup.Option"})))}),je=Object.assign(be,{Option:ye,Label:oe,Description:ie});export{je as RadioGroup};

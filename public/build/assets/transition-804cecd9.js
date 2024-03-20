import{r as i,e as E}from"./app-c2180982.js";import{l as M,u as R,c as Y,p as te,s as D,O as pe,U as _,y as ne,v as L,a as le,o as $,f as ee,g as he,e as C,C as ae,d as ie}from"./open-closed-beb946ec.js";function J(){let r=i.useRef(!1);return M(()=>(r.current=!0,()=>{r.current=!1}),[]),r}function ge(r=0){let[e,t]=i.useState(r),a=J(),f=i.useCallback(s=>{a.current&&t(n=>n|s)},[e,a]),p=i.useCallback(s=>!!(e&s),[e]),v=i.useCallback(s=>{a.current&&t(n=>n&~s)},[t,a]),c=i.useCallback(s=>{a.current&&t(n=>n^s)},[t]);return{flags:e,addFlag:f,hasFlag:p,removeFlag:v,toggleFlag:c}}function be(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}function G(r,...e){r&&e.length>0&&r.classList.add(...e)}function K(r,...e){r&&e.length>0&&r.classList.remove(...e)}function Ee(r,e){let t=Y();if(!r)return t.dispose;let{transitionDuration:a,transitionDelay:f}=getComputedStyle(r),[p,v]=[a,f].map(s=>{let[n=0]=s.split(",").filter(Boolean).map(o=>o.includes("ms")?parseFloat(o):parseFloat(o)*1e3).sort((o,g)=>g-o);return n}),c=p+v;if(c!==0){t.group(n=>{n.setTimeout(()=>{e(),n.dispose()},c),n.addEventListener(r,"transitionrun",o=>{o.target===o.currentTarget&&n.dispose()})});let s=t.addEventListener(r,"transitionend",n=>{n.target===n.currentTarget&&(e(),s())})}else e();return t.add(()=>e()),t.dispose}function Te(r,e,t,a){let f=t?"enter":"leave",p=Y(),v=a!==void 0?be(a):()=>{};f==="enter"&&(r.removeAttribute("hidden"),r.style.display="");let c=R(f,{enter:()=>e.enter,leave:()=>e.leave}),s=R(f,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),n=R(f,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return K(r,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),G(r,...e.base,...c,...n),p.nextFrame(()=>{K(r,...e.base,...c,...n),G(r,...e.base,...c,...s),Ee(r,()=>(K(r,...e.base,...c),G(r,...e.base,...e.entered),v()))}),p.dispose}function Fe({immediate:r,container:e,direction:t,classes:a,onStart:f,onStop:p}){let v=J(),c=te(),s=D(t);M(()=>{r&&(s.current="enter")},[r]),M(()=>{let n=Y();c.add(n.dispose);let o=e.current;if(o&&s.current!=="idle"&&v.current)return n.dispose(),f.current(s.current),n.add(Te(o,a.current,s.current==="enter",()=>{n.dispose(),p.current(s.current)})),n.dispose},[t])}function F(r=""){return r.split(/\s+/).filter(e=>e.length>1)}let A=i.createContext(null);A.displayName="TransitionContext";var Ce=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Ce||{});function Re(){let r=i.useContext(A);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}function $e(){let r=i.useContext(B);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}let B=i.createContext(null);B.displayName="NestingContext";function q(r){return"children"in r?q(r.children):r.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function se(r,e){let t=D(r),a=i.useRef([]),f=J(),p=te(),v=$((m,u=L.Hidden)=>{let d=a.current.findIndex(({el:l})=>l===m);d!==-1&&(R(u,{[L.Unmount](){a.current.splice(d,1)},[L.Hidden](){a.current[d].state="hidden"}}),p.microTask(()=>{var l;!q(a)&&f.current&&((l=t.current)==null||l.call(t))}))}),c=$(m=>{let u=a.current.find(({el:d})=>d===m);return u?u.state!=="visible"&&(u.state="visible"):a.current.push({el:m,state:"visible"}),()=>v(m,L.Unmount)}),s=i.useRef([]),n=i.useRef(Promise.resolve()),o=i.useRef({enter:[],leave:[],idle:[]}),g=$((m,u,d)=>{s.current.splice(0),e&&(e.chains.current[u]=e.chains.current[u].filter(([l])=>l!==m)),e==null||e.chains.current[u].push([m,new Promise(l=>{s.current.push(l)})]),e==null||e.chains.current[u].push([m,new Promise(l=>{Promise.all(o.current[u].map(([S,N])=>N)).then(()=>l())})]),u==="enter"?n.current=n.current.then(()=>e==null?void 0:e.wait.current).then(()=>d(u)):d(u)}),b=$((m,u,d)=>{Promise.all(o.current[u].splice(0).map(([l,S])=>S)).then(()=>{var l;(l=s.current.shift())==null||l()}).then(()=>d(u))});return i.useMemo(()=>({children:a,register:c,unregister:v,onStart:g,onStop:b,wait:n,chains:o}),[c,v,a,g,b,o,n])}function we(){}let xe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function re(r){var e;let t={};for(let a of xe)t[a]=(e=r[a])!=null?e:we;return t}function Le(r){let e=i.useRef(re(r));return i.useEffect(()=>{e.current=re(r)},[r]),e}let Se="div",ue=pe.RenderStrategy;function Ne(r,e){var t,a;let{beforeEnter:f,afterEnter:p,beforeLeave:v,afterLeave:c,enter:s,enterFrom:n,enterTo:o,entered:g,leave:b,leaveFrom:m,leaveTo:u,...d}=r,l=i.useRef(null),S=ne(l,e),N=(t=d.unmount)==null||t?L.Unmount:L.Hidden,{show:h,appear:w,initial:W}=Re(),[x,j]=i.useState(h?"visible":"hidden"),X=$e(),{register:O,unregister:H}=X;i.useEffect(()=>O(l),[O,l]),i.useEffect(()=>{if(N===L.Hidden&&l.current){if(h&&x!=="visible"){j("visible");return}return R(x,{hidden:()=>H(l),visible:()=>O(l)})}},[x,l,O,H,h,N]);let I=D({base:F(d.className),enter:F(s),enterFrom:F(n),enterTo:F(o),entered:F(g),leave:F(b),leaveFrom:F(m),leaveTo:F(u)}),k=Le({beforeEnter:f,afterEnter:p,beforeLeave:v,afterLeave:c}),V=le();i.useEffect(()=>{if(V&&x==="visible"&&l.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[l,x,V]);let ce=W&&!w,Z=w&&h&&W,de=(()=>!V||ce?"idle":h?"enter":"leave")(),y=ge(0),fe=$(T=>R(T,{enter:()=>{y.addFlag(C.Opening),k.current.beforeEnter()},leave:()=>{y.addFlag(C.Closing),k.current.beforeLeave()},idle:()=>{}})),ve=$(T=>R(T,{enter:()=>{y.removeFlag(C.Opening),k.current.afterEnter()},leave:()=>{y.removeFlag(C.Closing),k.current.afterLeave()},idle:()=>{}})),U=se(()=>{j("hidden"),H(l)},X),z=i.useRef(!1);Fe({immediate:Z,container:l,classes:I,direction:de,onStart:D(T=>{z.current=!0,U.onStart(l,T,fe)}),onStop:D(T=>{z.current=!1,U.onStop(l,T,ve),T==="leave"&&!q(U)&&(j("hidden"),H(l))})});let P=d,me={ref:S};return Z?P={...P,className:ee(d.className,...I.current.enter,...I.current.enterFrom)}:z.current&&(P.className=ee(d.className,(a=l.current)==null?void 0:a.className),P.className===""&&delete P.className),E.createElement(B.Provider,{value:U},E.createElement(he,{value:R(x,{visible:C.Open,hidden:C.Closed})|y.flags},ae({ourProps:me,theirProps:P,defaultTag:Se,features:ue,visible:x==="visible",name:"Transition.Child"})))}function Pe(r,e){let{show:t,appear:a=!1,unmount:f=!0,...p}=r,v=i.useRef(null),c=ne(v,e);le();let s=ie();if(t===void 0&&s!==null&&(t=(s&C.Open)===C.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[n,o]=i.useState(t?"visible":"hidden"),g=se(()=>{o("hidden")}),[b,m]=i.useState(!0),u=i.useRef([t]);M(()=>{b!==!1&&u.current[u.current.length-1]!==t&&(u.current.push(t),m(!1))},[u,t]);let d=i.useMemo(()=>({show:t,appear:a,initial:b}),[t,a,b]);i.useEffect(()=>{if(t)o("visible");else if(!q(g))o("hidden");else{let h=v.current;if(!h)return;let w=h.getBoundingClientRect();w.x===0&&w.y===0&&w.width===0&&w.height===0&&o("hidden")}},[t,g]);let l={unmount:f},S=$(()=>{var h;b&&m(!1),(h=r.beforeEnter)==null||h.call(r)}),N=$(()=>{var h;b&&m(!1),(h=r.beforeLeave)==null||h.call(r)});return E.createElement(B.Provider,{value:g},E.createElement(A.Provider,{value:d},ae({ourProps:{...l,as:i.Fragment,children:E.createElement(oe,{ref:c,...l,...p,beforeEnter:S,beforeLeave:N})},theirProps:{},defaultTag:i.Fragment,features:ue,visible:n==="visible",name:"Transition"})))}function ye(r,e){let t=i.useContext(A)!==null,a=ie()!==null;return E.createElement(E.Fragment,null,!t&&a?E.createElement(Q,{ref:e,...r}):E.createElement(oe,{ref:e,...r}))}let Q=_(Pe),oe=_(Ne),De=_(ye),ke=Object.assign(Q,{Child:De,Root:Q});export{J as f,ke as q};

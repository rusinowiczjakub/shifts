import{r as d,R as F,j as S,a as o,b as ne}from"./app-2661df91.js";import{A as le}from"./AuthenticatedLayout-0216ef1f.js";import se from"./DeleteUserForm-73b84837.js";import oe from"./UpdatePasswordForm-801821df.js";import ie from"./UpdateProfileInformationForm-f08fc89d.js";import de from"./UpdateSkillsForm-5f5e333d.js";import ue from"./UpdateExperienceForm-c2b9e1bd.js";import ce from"./UpdateProfessionalTypeForm-9004d646.js";import me from"./AddBasicInfoForm-e934d203.js";import{I as V,a as pe,o as y}from"./keyboard-179d6197.js";import{O as Q,U,y as _,s as Y,o as A,l as W,C as j,u as M}from"./open-closed-c1b5fae8.js";import{T as fe}from"./use-resolve-button-type-9b452520.js";import{f as xe}from"./use-is-mounted-51f50b5d.js";import{f as Z,s as ge}from"./hidden-f44924ef.js";import{I as L,N as G,O as R,M as w}from"./use-owner-8309d10c.js";import{t as be}from"./disposables-253897a2.js";import"./transition-a30883fd.js";import"./use-disposables-c6a19e1a.js";import"./Logo-da3ead5d.js";import"./InputError-87a55a57.js";import"./InputLabel-aeee620c.js";import"./dialog-b0f9bc82.js";import"./use-root-containers-d1bf072d.js";import"./active-element-history-b3048b09.js";import"./TextInput-05097274.js";import"./Loader-8aceb26d.js";import"./Add-f6b03243.js";import"./Briefcase-9a86512e.js";import"./Datepicker-c5d6c1e4.js";import"./index-c460bcd2.js";import"./index-cde6c6bc.js";import"./index-db0f6fb5.js";import"./CheckboxCard-f5ba2bd5.js";import"./combobox-c60471d4.js";import"./calculate-active-index-a0076d55.js";function he({onFocus:e}){let[r,t]=d.useState(!0),a=xe();return r?F.createElement(Z,{as:"button",type:"button",features:ge.Focusable,onFocus:l=>{l.preventDefault();let n,i=50;function x(){if(i--<=0){n&&cancelAnimationFrame(n);return}if(e()){if(cancelAnimationFrame(n),!a.current)return;t(!1);return}n=requestAnimationFrame(x)}n=requestAnimationFrame(x)}}):null}const ee=d.createContext(null);function ve(){return{groups:new Map,get(e,r){var t;let a=this.groups.get(e);a||(a=new Map,this.groups.set(e,a));let l=(t=a.get(r))!=null?t:0;a.set(r,l+1);let n=Array.from(a.keys()).indexOf(r);function i(){let x=a.get(r);x>1?a.set(r,x-1):a.delete(r)}return[n,i]}}}function ye({children:e}){let r=d.useRef(ve());return d.createElement(ee.Provider,{value:r},e)}function re(e){let r=d.useContext(ee);if(!r)throw new Error("You must wrap your component in a <StableCollection>");let t=we(),[a,l]=r.current.get(e,t);return d.useEffect(()=>l,[]),a}function we(){var e,r,t;let a=(t=(r=(e=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:r.current)!=null?t:null;if(!a)return Symbol();let l=[],n=a;for(;n;)l.push(n.index),n=n.return;return"$."+l.join(".")}var Te=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Te||{}),Ie=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ie||{}),ke=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(ke||{});let Pe={0(e,r){var t;let a=L(e.tabs,c=>c.current),l=L(e.panels,c=>c.current),n=a.filter(c=>{var h;return!((h=c.current)!=null&&h.hasAttribute("disabled"))}),i={...e,tabs:a,panels:l};if(r.index<0||r.index>a.length-1){let c=M(Math.sign(r.index-e.selectedIndex),{[-1]:()=>1,0:()=>M(Math.sign(r.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(n.length===0)return i;let h=M(c,{0:()=>a.indexOf(n[0]),1:()=>a.indexOf(n[n.length-1])});return{...i,selectedIndex:h===-1?e.selectedIndex:h}}let x=a.slice(0,r.index),T=[...a.slice(r.index),...x].find(c=>n.includes(c));if(!T)return i;let g=(t=a.indexOf(T))!=null?t:e.selectedIndex;return g===-1&&(g=e.selectedIndex),{...i,selectedIndex:g}},1(e,r){var t;if(e.tabs.includes(r.tab))return e;let a=e.tabs[e.selectedIndex],l=L([...e.tabs,r.tab],i=>i.current),n=(t=l.indexOf(a))!=null?t:e.selectedIndex;return n===-1&&(n=e.selectedIndex),{...e,tabs:l,selectedIndex:n}},2(e,r){return{...e,tabs:e.tabs.filter(t=>t!==r.tab)}},3(e,r){return e.panels.includes(r.panel)?e:{...e,panels:L([...e.panels,r.panel],t=>t.current)}},4(e,r){return{...e,panels:e.panels.filter(t=>t!==r.panel)}}},H=d.createContext(null);H.displayName="TabsDataContext";function O(e){let r=d.useContext(H);if(r===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return r}let K=d.createContext(null);K.displayName="TabsActionsContext";function X(e){let r=d.useContext(K);if(r===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,X),t}return r}function Ee(e,r){return M(r.type,Pe,e,r)}let Ne=d.Fragment;function $e(e,r){let{defaultIndex:t=0,vertical:a=!1,manual:l=!1,onChange:n,selectedIndex:i=null,...x}=e;const T=a?"vertical":"horizontal",g=l?"manual":"auto";let c=i!==null,h=_(r),[u,v]=d.useReducer(Ee,{selectedIndex:i??t,tabs:[],panels:[]}),p=d.useMemo(()=>({selectedIndex:u.selectedIndex}),[u.selectedIndex]),C=Y(n||(()=>{})),D=Y(u.tabs),f=d.useMemo(()=>({orientation:T,activation:g,...u}),[T,g,u]),b=A(m=>(v({type:1,tab:m}),()=>v({type:2,tab:m}))),P=A(m=>(v({type:3,panel:m}),()=>v({type:4,panel:m}))),E=A(m=>{N.current!==m&&C.current(m),c||v({type:0,index:m})}),N=Y(c?e.selectedIndex:u.selectedIndex),q=d.useMemo(()=>({registerTab:b,registerPanel:P,change:E}),[]);W(()=>{v({type:0,index:i??t})},[i]),W(()=>{if(N.current===void 0||u.tabs.length<=0)return;let m=L(u.tabs,k=>k.current);m.some((k,s)=>u.tabs[s]!==k)&&E(m.indexOf(u.tabs[N.current]))});let z={ref:h};return F.createElement(ye,null,F.createElement(K.Provider,{value:q},F.createElement(H.Provider,{value:f},f.tabs.length<=0&&F.createElement(he,{onFocus:()=>{var m,k;for(let s of D.current)if(((m=s.current)==null?void 0:m.tabIndex)===0)return(k=s.current)==null||k.focus(),!0;return!1}}),j({ourProps:z,theirProps:x,slot:p,defaultTag:Ne,name:"Tabs"}))))}let Ae="div";function Se(e,r){let{orientation:t,selectedIndex:a}=O("Tab.List"),l=_(r);return j({ourProps:{ref:l,role:"tablist","aria-orientation":t},theirProps:e,slot:{selectedIndex:a},defaultTag:Ae,name:"Tabs.List"})}let Re="button";function Fe(e,r){var t,a;let l=V(),{id:n=`headlessui-tabs-tab-${l}`,...i}=e,{orientation:x,activation:T,selectedIndex:g,tabs:c,panels:h}=O("Tab"),u=X("Tab"),v=O("Tab"),p=d.useRef(null),C=_(p,r);W(()=>u.registerTab(p),[u,p]);let D=re("tabs"),f=c.indexOf(p);f===-1&&(f=D);let b=f===g,P=A(s=>{var I;let B=s();if(B===G.Success&&T==="auto"){let te=(I=pe(p))==null?void 0:I.activeElement,J=v.tabs.findIndex(ae=>ae.current===te);J!==-1&&u.change(J)}return B}),E=A(s=>{let I=c.map(B=>B.current).filter(Boolean);if(s.key===y.Space||s.key===y.Enter){s.preventDefault(),s.stopPropagation(),u.change(f);return}switch(s.key){case y.Home:case y.PageUp:return s.preventDefault(),s.stopPropagation(),P(()=>R(I,w.First));case y.End:case y.PageDown:return s.preventDefault(),s.stopPropagation(),P(()=>R(I,w.Last))}if(P(()=>M(x,{vertical(){return s.key===y.ArrowUp?R(I,w.Previous|w.WrapAround):s.key===y.ArrowDown?R(I,w.Next|w.WrapAround):G.Error},horizontal(){return s.key===y.ArrowLeft?R(I,w.Previous|w.WrapAround):s.key===y.ArrowRight?R(I,w.Next|w.WrapAround):G.Error}}))===G.Success)return s.preventDefault()}),N=d.useRef(!1),q=A(()=>{var s;N.current||(N.current=!0,(s=p.current)==null||s.focus({preventScroll:!0}),u.change(f),be(()=>{N.current=!1}))}),z=A(s=>{s.preventDefault()}),m=d.useMemo(()=>({selected:b}),[b]),k={ref:C,onKeyDown:E,onMouseDown:z,onClick:q,id:n,role:"tab",type:fe(e,p),"aria-controls":(a=(t=h[f])==null?void 0:t.current)==null?void 0:a.id,"aria-selected":b,tabIndex:b?0:-1};return j({ourProps:k,theirProps:i,slot:m,defaultTag:Re,name:"Tabs.Tab"})}let Oe="div";function Ce(e,r){let{selectedIndex:t}=O("Tab.Panels"),a=_(r),l=d.useMemo(()=>({selectedIndex:t}),[t]);return j({ourProps:{ref:a},theirProps:e,slot:l,defaultTag:Oe,name:"Tabs.Panels"})}let De="div",Le=Q.RenderStrategy|Q.Static;function Me(e,r){var t,a,l,n;let i=V(),{id:x=`headlessui-tabs-panel-${i}`,tabIndex:T=0,...g}=e,{selectedIndex:c,tabs:h,panels:u}=O("Tab.Panel"),v=X("Tab.Panel"),p=d.useRef(null),C=_(p,r);W(()=>v.registerPanel(p),[v,p]);let D=re("panels"),f=u.indexOf(p);f===-1&&(f=D);let b=f===c,P=d.useMemo(()=>({selected:b}),[b]),E={ref:C,id:x,role:"tabpanel","aria-labelledby":(a=(t=h[f])==null?void 0:t.current)==null?void 0:a.id,tabIndex:b?T:-1};return!b&&((l=g.unmount)==null||l)&&!((n=g.static)!=null&&n)?F.createElement(Z,{as:"span","aria-hidden":"true",...E}):j({ourProps:E,theirProps:g,slot:P,defaultTag:De,features:Le,visible:b,name:"Tabs.Panel"})}let Ue=U(Fe),_e=U($e),je=U(Se),Be=U(Ce),Ge=U(Me),$=Object.assign(Ue,{Group:_e,List:je,Panels:Be,Panel:Ge});function kr({auth:e,mustVerifyEmail:r,medicalStaffProfile:t,status:a,professionalTypes:l,userProfessionalTypes:n}){return S(le,{auth:e,header:o("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Twój profil"}),children:[o(ne,{title:"Medshifts - Profil"}),S($.Group,{children:[o($.List,{className:"flex bg-white h-12",children:o("div",{className:"max-w-7xl h-full w-full mx-auto px-4 sm:px-6 lg:px-8",children:S("div",{className:"flex h-full",children:[o($,{className:"mr-2",children:({selected:i})=>o("div",{className:"h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(i?"border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 "),children:"Profil zawodowy"})}),o($,{className:"mr-2",children:({selected:i})=>o("div",{className:"h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(i?"border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 "),children:"Twoje konto"})})]})})}),S($.Panels,{children:[o($.Panel,{children:o("div",{className:"py-12",children:S("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[o("div",{className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:o(me,{profile:t,user:e.user})}),o("div",{className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:o(ce,{professionalTypes:l,userProfessionalTypes:n})}),o("div",{className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:o(de,{skills:t.skills,className:"max-w-xl"})}),o("div",{className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:o(ue,{experiences:t.experiences,className:"max-w-xl"})})]})})}),o($.Panel,{children:o("div",{className:"py-12",children:S("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[o("div",{className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:o(ie,{mustVerifyEmail:r,status:a,className:"max-w-xl"})}),o("div",{className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:o(oe,{className:"max-w-xl"})}),o("div",{className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:o(se,{className:"max-w-xl"})})]})})})]})]})]})}export{kr as default};

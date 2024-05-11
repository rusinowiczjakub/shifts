import{r as c,q as O,j as n,F as A,a as e,y as j,T as H,W as F}from"./app-2661df91.js";import{C as X,X as $}from"./XMarkIcon-36e896d0.js";import{_ as b}from"./dialog-b0f9bc82.js";import{B}from"./Briefcase-9a86512e.js";import{r as x,t as u,d as W,g as D,b as Z,f as S}from"./index-cde6c6bc.js";import{e as J}from"./index-af6b72dc.js";import{a as I}from"./index-db0f6fb5.js";import{p as Y}from"./index-c7651d21.js";import{p as k}from"./index-92a6654d.js";import _ from"./JobFilters-19917b07.js";import"./use-disposables-c6a19e1a.js";import"./disposables-253897a2.js";import"./open-closed-c1b5fae8.js";import"./use-root-containers-d1bf072d.js";import"./use-owner-8309d10c.js";import"./keyboard-179d6197.js";import"./hidden-f44924ef.js";import"./use-is-mounted-51f50b5d.js";import"./active-element-history-b3048b09.js";import"./Datepicker-c5d6c1e4.js";import"./InputLabel-aeee620c.js";import"./TextInput-05097274.js";import"./use-resolve-button-type-9b452520.js";function y(t,a){x(2,arguments);var r=u(t),l=u(a),o=r.getTime()-l.getTime();return o<0?-1:o>0?1:o}function q(t,a){x(2,arguments);var r=u(t),l=u(a),o=r.getFullYear()-l.getFullYear(),h=r.getMonth()-l.getMonth();return o*12+h}function P(t,a){return x(2,arguments),u(t).getTime()-u(a).getTime()}var L={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(a){return a<0?Math.ceil(a):Math.floor(a)}},U="trunc";function Q(t){return t?L[t]:L[U]}function V(t){x(1,arguments);var a=u(t);return a.setHours(23,59,59,999),a}function G(t){x(1,arguments);var a=u(t);return V(a).getTime()===J(a).getTime()}function K(t,a){x(2,arguments);var r=u(t),l=u(a),o=y(r,l),h=Math.abs(q(r,l)),s;if(h<1)s=0;else{r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*h);var m=y(r,l)===-o;G(u(t))&&h===1&&y(t,l)===1&&(m=!1),s=o*(h-Number(m))}return s===0?0:s}function ee(t,a,r){x(2,arguments);var l=P(t,a)/1e3;return Q(r==null?void 0:r.roundingMethod)(l)}function te(t){return I({},t)}var C=1440,re=2520,M=43200,ae=86400;function ne(t,a,r){var l,o;x(2,arguments);var h=Z(),s=(l=(o=r==null?void 0:r.locale)!==null&&o!==void 0?o:h.locale)!==null&&l!==void 0?l:W;if(!s.formatDistance)throw new RangeError("locale must contain formatDistance property");var m=y(t,a);if(isNaN(m))throw new RangeError("Invalid time value");var i=I(te(r),{addSuffix:!!(r!=null&&r.addSuffix),comparison:m}),f,v;m>0?(f=u(a),v=u(t)):(f=u(t),v=u(a));var g=ee(v,f),p=(D(v)-D(f))/1e3,d=Math.round((g-p)/60),w;if(d<2)return r!=null&&r.includeSeconds?g<5?s.formatDistance("lessThanXSeconds",5,i):g<10?s.formatDistance("lessThanXSeconds",10,i):g<20?s.formatDistance("lessThanXSeconds",20,i):g<40?s.formatDistance("halfAMinute",0,i):g<60?s.formatDistance("lessThanXMinutes",1,i):s.formatDistance("xMinutes",1,i):d===0?s.formatDistance("lessThanXMinutes",1,i):s.formatDistance("xMinutes",d,i);if(d<45)return s.formatDistance("xMinutes",d,i);if(d<90)return s.formatDistance("aboutXHours",1,i);if(d<C){var E=Math.round(d/60);return s.formatDistance("aboutXHours",E,i)}else{if(d<re)return s.formatDistance("xDays",1,i);if(d<M){var z=Math.round(d/C);return s.formatDistance("xDays",z,i)}else if(d<ae)return w=Math.round(d/M),s.formatDistance("aboutXMonths",w,i)}if(w=K(v,f),w<12){var R=Math.round(d/M);return s.formatDistance("xMonths",R,i)}else{var T=w%12,N=Math.floor(w/12);return T<3?s.formatDistance("aboutXYears",N,i):T<9?s.formatDistance("overXYears",N,i):s.formatDistance("almostXYears",N+1,i)}}function se({title:t,titleId:a,...r},l){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":a},r),t?c.createElement("title",{id:a},t):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"}))}const le=c.forwardRef(se),ie=le;function oe({title:t,titleId:a,...r},l){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":a},r),t?c.createElement("title",{id:a},t):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))}const ce=c.forwardRef(oe),de=ce;function ue(t){const{session:a,flash:r}=O().props,[l,o]=c.useState(!1),[h,s]=c.useState(!1),m=f=>{switch(f){case"success":return"green";case"warning":return"yellow"}},i=f=>{switch(f){case"success":return e(X,{});case"warning":return e(de,{})}};return c.useEffect(()=>{a.requireAuth&&o(!0)},[a]),c.useEffect(()=>{const f=setTimeout(()=>{s(!1)},3e3);return r.message&&s(!0),()=>{clearTimeout(f)}},[r]),n(A,{children:[n(b,{as:"div",open:l,onClose:()=>o(!1),className:"relative z-50",children:[e("div",{className:"fixed inset-0 bg-black/30","aria-hidden":"true"}),e("div",{className:"fixed inset-0 flex w-screen items-center justify-center p-4",children:n(b.Panel,{className:"max-w-xl w-full space-y-4 border bg-white p-12 rounded-md",children:[e(b.Title,{children:e("h2",{className:"font-semibold",children:"Nie jesteś zalogowany"})}),e(b.Description,{children:"Musisz być zalogowany, aby móc w pełni korzystać z aplikacji."}),n("div",{className:"flex flex-col md:flex-row py-6 gap-2 border-y border-gray-100 mb-6",children:[e("button",{type:"button",onClick:()=>j.visit(route("staff.login",{redirectTo:route("jobboard.index")})),className:"w-full items-center justify-center px-3 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",children:"Zaloguj się"}),e("button",{type:"button",onClick:()=>o(!1),className:"w-full items-center justify-center px-3 py-4 text-sm font-medium tracking-wide transition-colors duration-300 transform rounded-lg md:w-1/2 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 border border-gray-300 text-gray-600",children:"Dzięki, tylko się rozglądam"})]})]})})]}),h&&(r==null?void 0:r.message)&&e("div",{className:"fixed top-20 right-10 z-50",children:n(H,{children:[e("div",{className:`inline-flex h-8 w-8 p-2 shrink-0 items-center justify-center rounded-lg bg-${m(r==null?void 0:r.status)}-100 text-${m(r==null?void 0:r.status)}-500 dark:bg-green-800 dark:text-green-200`,children:i(r==null?void 0:r.status)}),e("div",{className:"pl-4 text-sm font-normal",children:r.message})]})}),e("div",{className:"bg-gray-50",children:t.children})]})}const me=()=>e("nav",{className:" w-full border-b border-gray-200 dark:border-gray-600",children:n("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[e("a",{href:"https://flowbite.com/",className:"flex items-center",children:e("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:"MedShifts"})}),e("div",{className:"flex md:order-2"}),e("div",{className:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1",children:n("ul",{className:"flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0",children:[e("li",{children:e("a",{href:"#",className:"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500","aria-current":"page",children:"Find shift"})}),e("li",{children:e("a",{href:"#",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"My contracts"})})]})})]})}),fe=me,he=t=>n("section",{className:"bg-gradient-to-bl from-neutral-100 via-violet-100 to-indigo-200 dark:bg-gray-900",children:[t.children,n("div",{className:"py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12",children:[e("div",{className:"flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"}),n("div",{className:"px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36",children:[e("span",{className:"font-semibold text-gray-400 uppercase"}),e("div",{className:"flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between"})]})]})]}),ge=he,pe=({className:t=null})=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t??"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),xe=({className:t=null})=>n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t??"w-6 h-6",children:[e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"})]}),ve=({className:t=null})=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t??"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"})}),be=({shift:t,onClick:a})=>{const r=o=>{j.post(route("staff.shift.apply",{shift:o}),{},{preserveState:!0,preserveScroll:!0,onSuccess:()=>{console.log("success")}})},l=c.useRef();return c.useLayoutEffect(()=>{l.current&&(l.current.style.width=`${Math.round(t.applications_count/t.available_slots*100)}%`)},[t.applications_count,t.available_slots,l.current]),n("div",{onClick:()=>a(t),className:"group shadow-sm dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900",children:[n("div",{className:"flex items-center justify-between",children:[n("div",{className:"flex items-center",children:[e("div",{className:"w-16 h-16 object-cover mr-2 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md",children:e("img",{src:"https://edukacja.um.warszawa.pl/documents/66399/49001353/Szpital+Biela%C5%84ski+logo.png/bebcbdba-16af-9128-bb3b-40fbf26ce9b2?version=1.0&t=1650530781517&imagePreview=1",className:"size-8",alt:""})}),n("div",{className:"ms-3",children:[e("a",{href:"employer-detail.html",className:"block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500",children:t.institution.name}),n("span",{className:"block text-sm text-slate-400",children:[ne(k(t.created_at),new Date,{locale:Y})," temu"]})]})]}),e("div",{children:e("button",{type:"button",onClick:()=>r(t.id),className:"flex items-center justify-center px-3 py-1.5 text-sm tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-xs",children:e("div",{children:" Aplikuj"})})})]}),n("div",{className:"flex flex-col lg:flex-row lg:gap-6",children:[n("div",{className:"mt-6 flex flex-row items-center",children:[e("div",{className:"flex w-10 h-10 justify-center items-center bg-blue-100 rounded-md text-blue-500 mr-4",children:e(pe,{})}),n("div",{className:"text-sm",children:[e("p",{className:"text-xs text-gray-500",children:"Budżet"}),n("p",{children:[t.total_pay," PLN"]})]})]}),n("div",{className:"mt-6 flex flex-row items-center",children:[e("div",{className:"flex w-10 h-10 justify-center items-center bg-blue-100 rounded-md text-blue-500 mr-4",children:e(B,{})}),n("div",{className:"text-sm",children:[e("p",{className:"text-xs text-gray-500",children:"Specjalizacja"}),e("p",{children:t.professional_type.name})]})]}),n("div",{className:"mt-6 flex flex-row items-center",children:[e("div",{className:"flex w-10 h-10 justify-center items-center bg-blue-100 rounded-md text-blue-500 mr-4",children:e(xe,{})}),n("div",{className:"text-sm",children:[e("p",{className:"text-xs text-gray-500",children:"Lokalizacja"}),e("p",{children:t.address.city})]})]}),n("div",{className:"mt-6 flex flex-row items-center",children:[e("div",{className:"flex w-10 h-10 justify-center items-center bg-blue-100 rounded-md text-blue-500 mr-4",children:e(ve,{})}),n("div",{className:"text-sm",children:[e("p",{className:"text-xs text-gray-500",children:"Termin"}),n("p",{children:[S(k(t.start_date),"HH:mm dd.MM "),"- ",S(k(t.end_date),"HH:mm dd.MM ")]})]})]})]}),n("div",{className:"mt-6",children:[e("div",{className:"w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]",children:e("div",{ref:l,style:{width:"0%"},className:"bg-blue-600 h-[6px] rounded-full"})}),e("div",{className:"mt-2",children:n("span",{className:"text-slate-400 text-sm",children:[n("span",{className:"text-slate-900 dark:text-white font-semibold inline-block",children:[t.applications_count," aplikacji"]})," na ",t.available_slots," miejsc"]})})]})]})},we=be;function Ze({shifts:t,filters:a}){const[r,l]=c.useState(null),[o,h]=c.useState(!1),[s,m]=c.useState(!1),{data:i,setData:f,reset:v}=F({city:[],professionalType:[],periodStart:null,periodEnd:null}),g=(p=!1)=>{j.get(route("jobboard.index"),p?{}:i,{preserveState:!0,preserveScroll:!0})};return c.useEffect(()=>{console.log(i)},[i]),c.useEffect(()=>{const p=window.matchMedia("(max-width: 768px)"),d=()=>{h(p.matches)};return p.addEventListener("change",d),d(),()=>p.removeEventListener("change",d)},[]),n(ue,{children:[e(ge,{children:e(fe,{})}),e("div",{className:"px-8",children:n("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between",children:[!o&&e("div",{className:"w-full lg:w-1/4 h-screen overflow-y-auto no-scrollbar pt-20",children:e("div",{className:"px-2 hidden md:flex flex-col gap-10",children:e(_,{submitFilters:()=>g(),filters:a,setData:f,data:i})})}),o&&e("div",{className:"w-full border-b border-gray-200 px-2 py-2",children:n("div",{onClick:()=>m(!0),className:"flex flex-row justify-end cursor-pointer",children:[e("div",{className:"text-sm mr-2",children:"Filtruj"}),e("div",{className:"w-6 h-6 text-gray-600",children:e(ie,{})})]})}),e("div",{className:"lg:flex w-full lg:w-2/3 h-full pt-20",children:e("div",{className:"w-full h-full",children:t.map(p=>e("div",{className:"mb-4",children:e(we,{onClick:()=>l(p),shift:p})}))})})]})}),o&&e(b,{open:s,onClose:()=>m(!1),children:n("div",{className:"fixed bg-white inset-0 flex flex-col px-4 py-4",children:[e("div",{className:"w-full flex justify-end",children:e("button",{onClick:()=>m(!1),type:"button",className:"h-6 w-6",children:e($,{})})}),e(b.Title,{children:"Filtruj wyniki wyszukiwania"}),n(b.Panel,{children:[e(_,{submitFilters:()=>g(),filters:a,setData:f,data:i}),n("div",{className:"flex flex-col lg:flex-row gap-2 justify-center",children:[e("button",{onClick:()=>m(!1),type:"button",className:"w-full flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",children:"Zastosuj"}),e("button",{onClick:()=>{v(),g(!0)},type:"button",className:"w-full flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-gray-500 transition-colors duration-300 transform border border-gray-400 rounded-lg md:w-1/2 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",children:"Resetuj filtry"})]})]})]})})]})}export{Ze as default};

import{r as t,W as j,a as e,j as n,q as R,T}from"./app-9abdc924.js";import{G as M}from"./GuestLayout-8e7f5581.js";import S from"./Calendar-735b37a0.js";import{L as F}from"./Logo-414e903b.js";import L from"./ApplicationsList-dc3b514c.js";import{C as z}from"./Check-6b8238db.js";import{_ as h}from"./dialog-b959a4b0.js";import{X as B}from"./XMarkIcon-42373fe5.js";import{f as y}from"./index-cde6c6bc.js";import"./Briefcase-0ba11f7d.js";import"./index-c460bcd2.js";import"./index-db0f6fb5.js";import"./index-af6b72dc.js";import"./index-92a6654d.js";import"./index-c7651d21.js";import"./use-disposables-a582fc9d.js";import"./disposables-253897a2.js";import"./open-closed-cc97ada5.js";import"./keyboard-162aa7ee.js";import"./use-owner-8efe843c.js";import"./use-resolve-button-type-bb0c62cc.js";import"./calculate-active-index-ebb0d854.js";import"./transition-695c8c0f.js";import"./use-is-mounted-1d4d0592.js";import"./use-root-containers-b3daca3e.js";import"./hidden-fa26c168.js";import"./active-element-history-67c2f0be.js";function $({title:a,titleId:s,...l},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},l),a?t.createElement("title",{id:s},a):null,t.createElement("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const D=t.forwardRef($),I=D;function P({title:a,titleId:s,...l},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},l),a?t.createElement("title",{id:s},a):null,t.createElement("path",{fillRule:"evenodd",d:"M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z",clipRule:"evenodd"}))}const W=t.forwardRef(P),H=W;function V({title:a,titleId:s,...l},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":s},l),a?t.createElement("title",{id:s},a):null,t.createElement("path",{d:"M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"}))}const X=t.forwardRef(V),O=X,x=({initialValue:a,postUrl:s,displayModeFormatter:l=null,inputType:i="text",options:c=[]})=>{const[p,m]=t.useState(!1),r=t.useRef(null),u=t.useRef(null),[f,b]=t.useState(null),N=w=>{switch(w){case"text":case"number":case"datetime-local":return e("input",{ref:r,type:w,className:"outline-none px-2 py-1 border border-gray-300 rounded",value:o.data.value,onChange:d=>o.setData("value",d.target.value),autoFocus:!0,onBlur:v});case"select":return e("select",{onBlur:v,onChange:d=>o.setData("value",d.target.value),autoFocus:!0,value:o.data.value,className:"outline-none px-2 py-1 border border-gray-300 rounded",children:c.map(d=>e("option",{value:d.value,children:d.label},d.value))})}};t.useEffect(()=>{u.current&&(b(u.current.offsetWidth),console.log(u.current.offsetWidth))},[u.current]),t.useEffect(()=>{f&&r.current&&(r.current.style.width=`${f}px`,console.log(f))},[f,p]);const o=j({value:a}),k=()=>{m(!0),console.log(o.data.value)},C=()=>{o.post(s,{onFinish:()=>m(!1)})},g=()=>{o.reset("value"),m(!1)},v=()=>{setTimeout(()=>{o.isDirty||g()},200)},E=l?l(o.data.value):o.data.value;return e("div",{className:"flex items-center space-x-2",children:p?n("div",{className:"relative",children:[N(i),e("div",{className:"absolute z-10 w-40 px-4 mt-2 bg-white shadow-lg rounded-md",children:n("div",{className:"flex justify-around",children:[e("button",{onClick:C,className:"p-1",children:e(I,{className:"h-5 w-5 text-blue-500"})}),e("button",{onClick:g,className:"p-1",children:e(O,{className:"h-5 w-5 text-gray-500"})})]})})]}):n("div",{ref:u,className:"relative flex flex-row items-center",children:[e("span",{className:"flex-1",children:E}),e("button",{onClick:k,className:"p-1",children:e(H,{className:"h-5 w-5 text-gray-600"})})]})})},U=a=>a&&y(new Date(a),"dd/MM/yyyy HH:mm"),ve=({shifts:a,token:s})=>{const[l,i]=t.useState(null);t.useEffect(()=>{a.map(r=>{(l==null?void 0:l.id)===r.id&&i({...r})})},[a]);const{flash:c}=R().props,[p,m]=t.useState(!1);return t.useEffect(()=>{const r=setTimeout(()=>{m(!1)},3e3);return c.message&&m(!0),()=>{clearTimeout(r)}},[c]),n(M,{children:[p&&(c==null?void 0:c.message)&&e("div",{className:"fixed top-20 right-10 z-50",children:n(T,{children:[e("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200",children:e(z,{})}),e("div",{className:"pl-4 text-sm font-normal",children:c.message})]})}),n(h,{as:"div",open:l!==null,onClose:()=>i(null),className:"relative z-20",children:[e("div",{className:"fixed inset-0 bg-black/30","aria-hidden":"true"}),e("div",{className:"fixed inset-0 flex w-screen items-center justify-center p-4",children:n(h.Panel,{className:"max-w-xl max-h-screen overflow-y-scroll w-full space-y-4 border bg-white p-12",children:[n(h.Title,{className:"flex flex-row items-center justify-between",children:[e("h2",{className:"font-semibold",children:"Aplikacje"}),e("button",{onClick:()=>i(null),className:"h-6 w-6",children:e(B,{})})]}),n("div",{className:"flex flex-col md:flex-row justify-between py-6 border-y border-gray-100 mb-6",children:[n("div",{className:"box group",children:[e("p",{className:"font-normal text-sm leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700",children:"Termin zmiany"}),e("h6",{className:"font-manrope",children:e(x,{displayModeFormatter:r=>U(r),initialValue:y(new Date,"yyyy-MM-dd'T'HH:mm"),postUrl:"https://test.test",inputType:"datetime-local"})})]}),n("div",{className:"box group",children:[e("p",{className:"font-normal text-sm leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700",children:"Budżet"}),e("h6",{className:"font-manrope",children:e(x,{displayModeFormatter:r=>r+" PLN",initialValue:100,inputType:"text",postUrl:"https://test.test"})})]}),n("div",{className:"box group",children:[e("p",{className:"font-normal text-sm leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700",children:"Specjalizacja"}),e("h6",{className:"font-manrope",children:e(x,{options:[{value:1,label:"Położnictwo"}],initialValue:1,inputType:"select",postUrl:"https://test.test",displayModeFormatter:r=>"Położnictwo"})})]})]}),e(L,{token:s,applications:l==null?void 0:l.applications})]})})]}),e("section",{className:"bg-white dark:bg-gray-900 lg:h-screen flex items-center",children:n("div",{className:"container max-w-4xl mx-auto px-6 pt-24 md:pt-0 lg:py-32",children:[e("div",{className:"flex flex-col justify-center",children:n("div",{className:"w-full flex flex-col items-center",children:[e(F,{}),n("h1",{className:"mt-4 text-gray-600 dark:text-gray-300 md:text-lg",children:["Witamy w ",e("span",{className:"text-blue-600",children:"MedShifts"})]}),e("h1",{className:"mt-4 mb-4 text-2xl font-medium text-gray-800 lg:text-3xl dark:text-white",children:"Kalendarz zmian"})]})}),e("div",{className:"",children:e(S,{selectShift:r=>i(r),shifts:a})})]})})]})};export{ve as default};
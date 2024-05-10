import{r as t,W as j,a as e,j as r}from"./app-c3ba1b55.js";import{G as k}from"./GuestLayout-68446b46.js";import M from"./Calendar-4018914b.js";import{L as S}from"./Logo-e03a0582.js";import F from"./ApplicationsList-13692ac5.js";import{_ as p}from"./dialog-16b073f9.js";import{f as y}from"./index-cde6c6bc.js";import"./Briefcase-0f487960.js";import"./index-40c0ae04.js";import"./index-7748d2dd.js";import"./index-92a6654d.js";import"./use-disposables-52279f6e.js";import"./open-closed-a9c6ba72.js";import"./keyboard-edde00d7.js";import"./use-owner-230a26d7.js";import"./use-resolve-button-type-eceac4b1.js";import"./calculate-active-index-e9e1e25a.js";import"./transition-00b86ee1.js";import"./use-is-mounted-7daad1a2.js";import"./active-element-history-b81fc070.js";function L({title:a,titleId:n,...s},l){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":n},s),a?t.createElement("title",{id:n},a):null,t.createElement("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const B=t.forwardRef(L),T=B;function z({title:a,titleId:n,...s},l){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":n},s),a?t.createElement("title",{id:n},a):null,t.createElement("path",{fillRule:"evenodd",d:"M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z",clipRule:"evenodd"}))}const D=t.forwardRef(z),P=D;function W({title:a,titleId:n,...s},l){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":n},s),a?t.createElement("title",{id:n},a):null,t.createElement("path",{d:"M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"}))}const $=t.forwardRef(W),I=$,f=({initialValue:a,postUrl:n,displayModeFormatter:s=null,inputType:l="text",options:w=[]})=>{const[h,m]=t.useState(!1),u=t.useRef(null),c=t.useRef(null),[d,b]=t.useState(null),N=v=>{switch(v){case"text":case"number":case"datetime-local":return e("input",{ref:u,type:v,className:"outline-none px-2 py-1 border border-gray-300 rounded",value:i.data.value,onChange:o=>i.setData("value",o.target.value),autoFocus:!0,onBlur:g});case"select":return e("select",{onBlur:g,onChange:o=>i.setData("value",o.target.value),autoFocus:!0,value:i.data.value,className:"outline-none px-2 py-1 border border-gray-300 rounded",children:w.map(o=>e("option",{value:o.value,children:o.label},o.value))})}};t.useEffect(()=>{c.current&&(b(c.current.offsetWidth),console.log(c.current.offsetWidth))},[c.current]),t.useEffect(()=>{d&&u.current&&(u.current.style.width=`${d}px`,console.log(d))},[d,h]);const i=j({value:a}),E=()=>{m(!0),console.log(i.data.value)},C=()=>{i.post(n,{onFinish:()=>m(!1)})},x=()=>{i.reset("value"),m(!1)},g=()=>{setTimeout(()=>{i.isDirty||x()},200)},R=s?s(i.data.value):i.data.value;return e("div",{className:"flex items-center space-x-2",children:h?r("div",{className:"relative",children:[N(l),e("div",{className:"absolute z-10 w-40 px-4 mt-2 bg-white shadow-lg rounded-md",children:r("div",{className:"flex justify-around",children:[e("button",{onClick:C,className:"p-1",children:e(T,{className:"h-5 w-5 text-blue-500"})}),e("button",{onClick:x,className:"p-1",children:e(I,{className:"h-5 w-5 text-gray-500"})})]})})]}):r("div",{ref:c,className:"relative flex flex-row items-center",children:[e("span",{className:"flex-1",children:R}),e("button",{onClick:E,className:"p-1",children:e(P,{className:"h-5 w-5 text-gray-600"})})]})})},H=a=>(console.log(a),a&&y(new Date(a),"dd/MM/yyyy HH:mm")),ie=({shifts:a})=>{const[n,s]=t.useState(null);return r(k,{children:[r(p,{as:"div",open:n!==null,onClose:()=>s(null),className:"relative z-50",children:[e("div",{className:"fixed inset-0 bg-black/30","aria-hidden":"true"}),e("div",{className:"fixed inset-0 flex w-screen items-center justify-center p-4",children:r(p.Panel,{className:"max-w-xl w-full space-y-4 border bg-white p-12",children:[e(p.Title,{children:e("h2",{className:"font-semibold",children:"Aplikacje"})}),r("div",{className:"flex flex-col md:flex-row justify-between py-6 border-y border-gray-100 mb-6",children:[r("div",{className:"box group",children:[e("p",{className:"font-normal text-sm leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700",children:"Termin zmiany"}),e("h6",{className:"font-manrope",children:e(f,{displayModeFormatter:l=>H(l),initialValue:y(new Date,"yyyy-MM-dd'T'HH:mm"),postUrl:"https://test.test",inputType:"datetime-local"})})]}),r("div",{className:"box group",children:[e("p",{className:"font-normal text-sm leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700",children:"Budżet"}),e("h6",{className:"font-manrope",children:e(f,{displayModeFormatter:l=>l+" PLN",initialValue:100,inputType:"text",postUrl:"https://test.test"})})]}),r("div",{className:"box group",children:[e("p",{className:"font-normal text-sm leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700",children:"Specjalizacja"}),e("h6",{className:"font-manrope",children:e(f,{options:[{value:1,label:"Położnictwo"}],initialValue:1,inputType:"select",postUrl:"https://test.test",displayModeFormatter:l=>"Położnictwo"})})]})]}),e(F,{})]})})]}),e("section",{className:"bg-white dark:bg-gray-900 lg:h-screen flex items-center",children:r("div",{className:"container max-w-4xl mx-auto px-6 pt-24 md:pt-0 lg:py-32",children:[e("div",{className:"flex flex-col justify-center",children:r("div",{className:"w-full flex flex-col items-center",children:[e(S,{}),r("h1",{className:"mt-4 text-gray-600 dark:text-gray-300 md:text-lg",children:["Witamy w ",e("span",{className:"text-blue-600",children:"MedShifts"})]}),e("h1",{className:"mt-4 mb-4 text-2xl font-medium text-gray-800 lg:text-3xl dark:text-white",children:"Kalendarz zmian"})]})}),e("div",{className:"",children:e(M,{selectShift:l=>s(l),shifts:a})})]})})]})};export{ie as default};

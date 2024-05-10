import{r as h,j as a,a as t,F as S,W as M,y as z}from"./app-c3ba1b55.js";import{B as T}from"./Briefcase-0f487960.js";import{I as y}from"./InputLabel-0896b401.js";import{T as f}from"./TextInput-fea5452b.js";import{I as g}from"./InputError-3d3460b2.js";import{A as C}from"./Add-0ed7cdeb.js";import{D as N}from"./Datepicker-c5d6c1e4.js";import{p}from"./index-40c0ae04.js";import{f as x}from"./index-cde6c6bc.js";import{q as I}from"./transition-00b86ee1.js";import"./use-disposables-52279f6e.js";import"./open-closed-a9c6ba72.js";import"./use-is-mounted-7daad1a2.js";const _=({experience:e=null,onCancel:l=null,onSuccess:m})=>{const{data:d,setData:o,patch:b,post:c,errors:i,processing:s,transform:F,recentlySuccessful:D,reset:k}=M({company:(e==null?void 0:e.company)??"",period_start:(e==null?void 0:e.period_start)??"",period_end:(e==null?void 0:e.period_end)??"",description:(e==null?void 0:e.description)??""}),[n,v]=h.useState(!1),w=r=>{if(r.preventDefault(),F(u=>({...u,period_end:n?null:u.period_end})),e){c(route("staff.profile.experience.update",{experience:e.id}),{preserveScroll:!0,onSuccess:()=>{},forceFormData:!0});return}c(route("staff.profile.experience.create"),{preserveScroll:!0,onSuccess:()=>{k(),l&&l()}})};h.useEffect(()=>{const r=document==null?void 0:document.getElementById("datepickerFrom"),u=document==null?void 0:document.getElementById("datepickerTo");new N(r,{format:"dd/mm/yyyy",language:"pl"}),new N(u,{format:"dd/mm/yyyy",language:"pl"}),e&&!e.period_end&&v(!0)},[]);const E=r=>{r.preventDefault(),l&&l(),k()};return a("form",{onSubmit:w,className:"mt-6 space-y-6 mb-4",children:[a("div",{children:[t(y,{htmlFor:"company",value:"Nazwa firmy"}),t(f,{id:"company",className:"mt-1 block w-full",value:d.company,onChange:r=>o("company",r.target.value)}),t(g,{className:"mt-2",message:i.company})]}),a("div",{children:[t(y,{htmlFor:"description",value:"Stanowisko"}),t(f,{id:"description",className:"mt-1 block w-full",value:d.description,onChange:r=>o("description",r.target.value)}),t(g,{className:"mt-2",message:i.description})]}),a("div",{className:"flex justify-between",children:[a("div",{className:"w-full mr-2",children:[t(y,{htmlFor:"period_start",value:"Okres od"}),t(f,{datepicker:!0,"datepicker-autohide":"true",type:"text",className:"w-full",placeholder:"Wybierz datę",onSelect:r=>o("period_start",p(r.target.value,"dd/MM/yyyy",new Date).getTime()/1e3),value:e?x(p(e.period_start,"yyyy-MM-dd HH:mm:SS",new Date),"dd/MM/yyyy"):null,id:"datepickerFrom"}),t(g,{className:"mt-2",message:i.period_start})]}),a("div",{className:"w-full ml-2",children:[t(y,{htmlFor:"period_end",value:"Okres do"}),t(f,{datepicker:!0,"datepicker-autohide":"true",type:"text",className:`w-full ${n?"bg-gray-100":""}`,placeholder:"Wybierz datę",onSelect:r=>o("period_end",p(r.target.value,"dd/MM/yyyy",new Date).getTime()/1e3),value:e&&e.period_end?x(p(e.period_end,"yyyy-MM-dd HH:mm:SS",new Date),"dd/MM/yyyy"):null,id:"datepickerTo",disabled:n}),t(g,{className:"mt-2",message:i.period_end})]})]}),a("div",{children:[t("input",{checked:n,id:"checked-checkbox",type:"checkbox",onChange:r=>{v(!n),n&&o("period_end",null)},className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),t("label",{htmlFor:"checked-checkbox",className:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Nadal tu pracuję"})]}),a("div",{className:"flex flex-row items-center",children:[t("button",{type:"button",onClick:r=>E(r),className:"flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 transform bg-white mr-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-800 focus:ring-opacity-50",children:t("div",{children:" Anuluj"})}),t("button",{onClick:r=>w(r),className:"flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",children:t("div",{children:"Zapisz"})}),t(I,{show:D,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out ml-2",children:t("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Zapisano."})})]})]})},j=({experience:e,onEdit:l,onDelete:m,showActions:d=!0})=>a("li",{className:"flex mb-4 justify-between",children:[a("div",{className:"flex",children:[t("div",{className:"flex justify-center items-center bg-blue-100 rounded-md px-4 py-4 text-blue-500 mr-4",children:t(T,{})}),a("div",{className:"flex flex-col justify-center",children:[t("div",{children:e.company}),t("div",{className:"text-gray-500 text-sm",children:e.description}),a("div",{className:"text-gray-500 text-sm",children:[e.period_start," - ",(e==null?void 0:e.period_end)??"obecnie"]})]})]}),t("div",{className:"flex flex-row justify-center",children:d&&a(S,{children:[t("button",{type:"button",onClick:()=>m(e.id),className:"text-red-500 hover:text-red-400 text-sm mr-2",children:"Usuń"}),t("button",{type:"button",onClick:o=>l(e.id),className:"text-blue-500 hover:text-blue-400 text-sm",children:"Edytuj"})]})})]},e.id),W=({className:e,experiences:l})=>{const[m,d]=h.useState(null),[o,b]=h.useState(!1),c=()=>{d(null),b(null)},i=s=>{z.delete(route("staff.profile.experience.delete",{experience:s}),{preserveScroll:!0})};return a("section",{className:e,children:[a("header",{children:[t("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Doświadczenie zawodowe"}),t("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400 mb-4",children:"Dodaj informacje dotyczące Twojego dotychczasowego doświadczenia zawodowego."})]}),a("ul",{className:"bg-white w-full mb-4",children:[l.map(s=>m===s.id?a(S,{children:[t(j,{onDelete:i,onEdit:()=>d(s.id),experience:s,showActions:!1}),t(_,{experience:s,onCancel:c})]}):t(j,{onDelete:i,onEdit:()=>d(s.id),experience:s})),o?t("li",{className:"border-t border-gray-200",children:t(_,{onCancel:c})},"new"):null]}),!o&&a("button",{onClick:()=>b(!0),className:"flex items-center justify-center px-3 py-1.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",children:[t(C,{className:"h-8 w-8 mr-2"}),t("div",{children:" Dodaj"})]})]})},Q=W;export{Q as default};
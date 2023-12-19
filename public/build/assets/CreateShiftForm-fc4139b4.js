import{W as y,a as e,j as a,B as l}from"./app-5445e7f0.js";const p=({professionalTypes:d,onSubmit:g=null,dismiss:o})=>{const{data:i,setData:s,errors:b,post:n,reset:c}=y({start_date:null,end_date:null,total_pay:null,available_slots:null,professional_type_id:null}),t=(r,u)=>{switch(s(r,u),r){case"start_date":case"end_date":case"total_pay":m();break}},m=()=>{console.log(i)};return e("form",{name:"createForm",onSubmit:r=>{r.preventDefault(),n(route("shift.create"),{onSuccess:()=>{c()}})},children:a("div",{className:"space-y-4",children:[a("div",{children:[e("label",{htmlFor:"professional_type",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Specjalizacja"}),a("select",{onChange:r=>t("professional_type_id",r.target.value),name:"professional_type_id",id:"professional_type",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Data końca zmiany",required:!0,children:[e("option",{value:null,children:"Wybierz opcję"}),d.map(r=>a("option",{value:r.id,children:[" ",r.name," "]},r.id))]})]}),a("div",{children:[e("label",{htmlFor:"start_date",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Data początku zmiany"}),e("input",{onChange:r=>t("start_date",r.target.value),type:"datetime-local",name:"start_date",id:"start_date",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Data początku zmiany",required:!0})]}),a("div",{children:[e("label",{htmlFor:"end_date",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Data końca zmiany"}),e("input",{onChange:r=>t("end_date",r.target.value),type:"datetime-local",name:"end_date",id:"start_date",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Data końca zmiany",required:!0})]}),a("div",{children:[e("label",{htmlFor:"total_pay",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Całkowite wynagrodzenie"}),e("input",{onChange:r=>t("total_pay",r.target.value),min:"0",step:"0.01",type:"number",name:"total_pay",id:"total_pay",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Podaj kwotę",required:!0})]}),a("div",{children:[e("label",{htmlFor:"available_slots",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Ilość dostępnych miejsc"}),e("input",{onChange:r=>t("available_slots",r.target.value),min:"1",step:"1",type:"number",name:"total_pay",id:"total_pay",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Podaj liczbę",required:!0})]}),a("div",{className:"flex justify-center w-full pb-4 space-x-4",children:[e(l,{type:"submit",className:"w-full justify-center",children:"Dodaj zmianę"}),a(l,{color:"gray",onClick:o,type:"button","data-drawer-dismiss":"drawer-create-product-default","aria-controls":"drawer-create-product-default",className:"inline-flex w-full justify-center items-center px-5 py-2.5",children:[e("svg",{"aria-hidden":"true",className:"w-5 h-5 -ml-1 sm:mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{"stroke-linecap":"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}),"Anuluj"]})]})]})})},f=p;export{f as default};

import{r as v,W as w,j as r,a}from"./app-c2180982.js";import{L as N}from"./Loader-148228c3.js";import{I as d}from"./InputError-bc2b903e.js";import{I as c}from"./InputLabel-8e40cb48.js";import{T as j}from"./TextInput-fb6e90b2.js";import{q as t}from"./combobox-580d461e.js";import{q as z}from"./transition-804cecd9.js";import"./open-closed-beb946ec.js";import"./keyboard-6ffc5b2c.js";function O({className:u,profile:l,user:g}){const[b,p]=v.useState([]),{data:s,setData:i,post:f,transform:h,processing:n,errors:m,recentlySuccessful:x,reset:C}=w({name:g.name,bio:l.bio,city:l.city}),y=e=>{e.preventDefault(),h(o=>({...o,city:o.city.id})),f(route("staff.profile.basic"))},k=async e=>{const o=await fetch(route("dictionary.cities",{cityName:e}),{method:"GET"});p(await o.json())};return r("section",{className:u,children:[r("header",{children:[a("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Podstawowe informacje o Tobie"}),a("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400 mb-4",children:"Uzupełnij swoje imię i nazwisko, miasto i napisz nam kilka słów o sobie (opcjonalnie)."})]}),a("div",{children:r("form",{onSubmit:y,className:"w-full lg:max-w-xl",children:[a("div",{className:"mb-4",children:r(t,{value:s.city,as:"div",className:"relative flex flex-col w-full",onChange:e=>i("city",e),children:[a(t.Label,{as:"label",className:"block font-medium text-sm text-gray-700 dark:text-gray-300 ",children:"Miasto"}),a(t.Input,{displayValue:e=>e==null?void 0:e.name,autoComplete:"off",className:"mt-1 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ",as:"input",onChange:e=>k(e.target.value)}),a(t.Options,{as:"div",className:"w-full absolute z-50 bg-white top-[4.5rem] border-1 border-gray-300 shadow rounded-md",children:b.map(e=>r(t.Option,{className:"cursor-pointer list-none group hover:bg-blue-600 hover:text-white rounded-md py-2 px-4",value:e,children:[e.name,", ",a("span",{className:"text-sm text-gray-500 group-hover:text-gray-200",children:e.province.name})]},e.id))})]})}),r("div",{className:"mb-4",children:[a(c,{htmlFor:"name",value:"Imię i nazwisko"}),a(j,{id:"name",name:"name",value:s.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:e=>i("name",e.target.value),required:!0}),a(d,{message:m.name,className:"mt-2"})]}),r("div",{className:"mb-4",children:[a(c,{htmlFor:"bio",value:"Bio"}),a("textarea",{id:"bio",rows:"4",value:s.bio,onChange:e=>i("bio",e.target.value),className:"block p-2.5 w-full resize-none text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Napisz kilka słów o sobie..."}),a(d,{message:m.bio,className:"mt-2"})]}),r("div",{className:"flex items-center gap-4 mt-4",children:[r("button",{type:"submit",disabled:n,className:"flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",children:[n&&a(N,{}),!n&&"Zapisz"]}),a(z,{show:x,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:a("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Zapisano."})})]})]})})]})}export{O as default};

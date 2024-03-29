import{r as b,W as p,a as e,j as r}from"./app-fcf0e4b5.js";import{G as C}from"./GuestLayout-91789424.js";import{L as w}from"./Logo-9b693620.js";import{T as v}from"./TextInput-6bc35c25.js";import{I as m}from"./InputLabel-b0776dac.js";import{I as d}from"./InputError-bce66914.js";import{L as N}from"./Loader-c717696c.js";import{q as t}from"./combobox-a03c26bb.js";import"./open-closed-2c09b590.js";import"./keyboard-968ae16c.js";function B(){const[c,u]=b.useState([]),{data:i,setData:o,post:g,transform:h,processing:l,errors:n,reset:y}=p({name:"",bio:"",city:null}),f=a=>{a.preventDefault(),h(s=>({...s,city:s.city.id})),g(route("staff.profile.basic"))},x=async a=>{const s=await fetch(route("dictionary.cities",{cityName:a}),{method:"GET"});u(await s.json())};return e(C,{children:e("section",{className:"bg-white dark:bg-gray-900 h-screen flex items-center",children:r("div",{className:"container px-6 pt-32 md:pt-0 mx-auto lg:py-32",children:[r("div",{className:"lg:flex",children:[r("div",{className:"lg:w-1/2",children:[e(w,{}),r("h1",{className:"mt-4 text-gray-600 dark:text-gray-300 md:text-lg",children:["Witamy w ",e("span",{className:"text-blue-600",children:"MedShifts"})]}),e("h1",{className:"mt-4 mb-4 text-2xl font-medium text-gray-800 lg:text-3xl dark:text-white",children:"Krok 2 - Powiedz nam coś o sobie"}),e("div",{className:"text-gray-600",children:r("p",{children:["Uzupełnij swoje imię i nazwisko oraz lokalizację w jakiej",e("br",{}),"interesują Cię propozycje zawodowe."]})})]}),e("div",{className:"mt-8 lg:w-1/2 lg:mt-0 flex items-center justify-center",children:r("form",{onSubmit:f,className:"w-full lg:max-w-xl",children:[e("div",{className:"mb-4",children:r(t,{value:i.city,as:"div",className:"relative flex flex-col w-full",onChange:a=>o("city",a),children:[e(t.Label,{as:"label",class:"block font-medium text-sm text-gray-700 dark:text-gray-300 ",children:"Miasto"}),e(t.Input,{displayValue:a=>a==null?void 0:a.name,autocomplete:"off",className:"mt-1 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ",as:"input",onChange:a=>x(a.target.value)}),e(t.Options,{as:"div",className:"w-full absolute z-50 bg-white top-[4.5rem] border-1 border-gray-300 shadow rounded-md",children:c.map(a=>r(t.Option,{className:"cursor-pointer list-none group hover:bg-blue-600 hover:text-white rounded-md py-2 px-4",value:a,children:[a.name,", ",e("span",{className:"text-sm text-gray-500 group-hover:text-gray-200",children:a.province.name})]},a.id))})]})}),r("div",{className:"mb-4",children:[e(m,{htmlFor:"name",value:"Imię i nazwisko"}),e(v,{id:"name",name:"name",value:i.name,className:"mt-1 block w-full",autoComplete:"name",onChange:a=>o("name",a.target.value),required:!0}),e(d,{message:n.name,className:"mt-2"})]}),r("div",{className:"mb-4",children:[e(m,{htmlFor:"bio",value:"Bio"}),e("textarea",{id:"bio",rows:"4",onChange:a=>o("bio",a.target.value),className:"block p-2.5 w-full resize-none text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Napisz kilka słów o sobie..."}),e(d,{message:n.bio,className:"mt-2"})]}),e("div",{className:"mt-8 md:flex md:items-center",children:r("button",{type:"submit",className:"w-full flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",children:[l&&e(N,{}),!l&&"Przejdź do profilu"]})})]})})]}),r("div",{className:"mt-8 md:mt-24 sm:flex sm:items-center",children:[e("h3",{className:"text-blue-500 dark:text-blue-400 sm:w-1/2",children:"Sprawdź nasze sociale"}),r("div",{className:"flex items-center mt-4 sm:mt-0 -mx-1.5 sm:w-1/2",children:[e("a",{className:"mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500",href:"#",children:e("svg",{className:"w-8 h-8",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z",fill:"currentColor"})})}),e("a",{className:"mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500",href:"#",children:e("svg",{className:"w-8 h-8",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z",fill:"currentColor"})})})]})]})]})})})}export{B as default};

import{W as p,r as f,j as a,a as e,b as g,d as w}from"./app-5445e7f0.js";import{G as h}from"./GuestLayout-8b588fb7.js";import{T as m,I as i}from"./TextInput-7b53c575.js";import{I as n}from"./InputLabel-577bebcc.js";import{P as N}from"./PrimaryButton-8ad12aa9.js";function _(){const{data:r,setData:l,post:d,processing:u,errors:t,reset:c}=p({name:"",email:"",password:"",password_confirmation:""});f.useEffect(()=>()=>{c("password","password_confirmation")},[]);const o=s=>{l(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return a(h,{children:[e(g,{title:"Register"}),a("form",{onSubmit:s=>{s.preventDefault(),d(route("register"))},children:[a("div",{children:[e(n,{htmlFor:"name",value:"Name"}),e(m,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:o,required:!0}),e(i,{message:t.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{htmlFor:"email",value:"Email"}),e(m,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",onChange:o,required:!0}),e(i,{message:t.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{htmlFor:"password",value:"Password"}),e(m,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:o,required:!0}),e(i,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:o,required:!0}),e(i,{message:t.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(w,{href:route("login"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e(N,{className:"ml-4",disabled:u,children:"Register"})]})]})]})}export{_ as default};

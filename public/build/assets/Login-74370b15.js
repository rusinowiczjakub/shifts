import{W as f,r as h,j as r,a as e,b as x,d as b}from"./app-bbe8d322.js";import{C as w}from"./Checkbox-d7ec4199.js";import{G as y}from"./GuestLayout-00eb008d.js";import{T as l,I as n}from"./TextInput-10892b31.js";import{I as i}from"./InputLabel-74713b79.js";import{P as N}from"./PrimaryButton-c3c84ab0.js";function L({status:m,canResetPassword:d}){const{data:s,setData:c,post:u,processing:p,errors:o,reset:g}=f({email:"",password:"",remember:""});h.useEffect(()=>()=>{g("password")},[]);const t=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return r(y,{children:[e(x,{title:"Log in"}),m&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:m}),r("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[r("div",{children:[e(i,{htmlFor:"email",value:"Email"}),e(l,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:t}),e(n,{message:o.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(i,{htmlFor:"password",value:"Password"}),e(l,{id:"password",type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:t}),e(n,{message:o.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:r("label",{className:"flex items-center",children:[e(w,{name:"remember",value:s.remember,onChange:t}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:"Remember me"})]})}),r("div",{className:"flex items-center justify-end mt-4",children:[d&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Forgot your password?"}),e(N,{className:"ml-4",disabled:p,children:"Log in"})]})]})]})}export{L as default};
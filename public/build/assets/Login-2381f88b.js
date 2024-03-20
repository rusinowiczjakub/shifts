import{W as g,r as h,j as r,a as e,b as x,d as b}from"./app-c2180982.js";import{C as w}from"./Checkbox-f111eee0.js";import{G as y}from"./GuestLayout-149dd8a8.js";import{I as l}from"./InputError-bc2b903e.js";import{I as i}from"./InputLabel-8e40cb48.js";import{P as N}from"./PrimaryButton-84dae611.js";import{T as n}from"./TextInput-fb6e90b2.js";function P({status:m,canResetPassword:d}){const{data:s,setData:c,post:u,processing:p,errors:o,reset:f}=g({email:"",password:"",remember:""});h.useEffect(()=>()=>{f("password")},[]);const t=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return r(y,{children:[e(x,{title:"Log in"}),m&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:m}),r("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[r("div",{children:[e(i,{htmlFor:"email",value:"Email"}),e(n,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:t}),e(l,{message:o.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(i,{htmlFor:"password",value:"Password"}),e(n,{id:"password",type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:t}),e(l,{message:o.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:r("label",{className:"flex items-center",children:[e(w,{name:"remember",value:s.remember,onChange:t}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:"Remember me"})]})}),r("div",{className:"flex items-center justify-end mt-4",children:[d&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Forgot your password?"}),e(N,{className:"ml-4",disabled:p,children:"Log in"})]})]})]})}export{P as default};

import{W as d,j as s,a}from"./app-c2180982.js";import{C as u,a as f}from"./CheckboxCard-09a987f1.js";import{L as x}from"./Loader-148228c3.js";import{I as g}from"./InputError-bc2b903e.js";import{q as h}from"./transition-804cecd9.js";import"./open-closed-beb946ec.js";function C({className:t,professionalTypes:o,userProfessionalTypes:i}){const{data:n,setData:l,put:c,processing:r,errors:m,reset:y,recentlySuccessful:p}=d({professionalTypes:i.map(e=>e.id)});return s("section",{className:t,children:[s("header",{children:[a("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Specjalizacja"}),a("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400 mb-4",children:"Dodaj informacje dotyczące Twoich specjalizacji (wybierz co najmniej 1)."})]}),a("div",{children:s("form",{onSubmit:e=>{e.preventDefault(),c(route("staff.profile.professional-types.update"),{onSuccess:()=>{console.log("updated")},preserveScroll:!0})},className:"w-full lg:max-w-xl",children:[a(u,{onChange:e=>l("professionalTypes",e),value:n.professionalTypes,children:o.map(e=>a(f,{value:e.id,label:e.name},"professional-type-"+e.id))}),a(g,{className:"mt-2",message:m.professionalTypes}),s("div",{className:"flex items-center gap-4 mt-4",children:[s("button",{type:"submit",disabled:r,className:"flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",children:[r&&a(x,{}),!r&&"Zapisz"]}),a(h,{show:p,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:a("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Zapisano."})})]})]})})]})}export{C as default};

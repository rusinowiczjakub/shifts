import{W as N,j as r,a as e,B as y}from"./app-c3ba1b55.js";import{I as t}from"./InputLabel-0896b401.js";import{T as n}from"./TextInput-fea5452b.js";import{I as o}from"./InputError-3d3460b2.js";function I({institution:s}){var u,c,i,p,_,g,b,v;const{data:l,setData:m,post:h,processing:f,errors:d,reset:C}=N({name:s.name,nip:s.nip,regon:s.regon,krs:s.krs,address_name:(u=s.address)==null?void 0:u.name,address_street:(c=s.address)==null?void 0:c.street,address_city:(i=s.address)==null?void 0:i.city,address_postal_code:(p=s.address)==null?void 0:p.postal_code,address_building_number:(_=s.address)==null?void 0:_.building_number,address_apartment:(g=s.address)==null?void 0:g.apartment,address_phone_number:(b=s.address)==null?void 0:b.phone_number,address_email:(v=s.address)==null?void 0:v.email});return r("form",{onSubmit:a=>{a.preventDefault(),h(route("settings.company.update"),{onSuccess:()=>{console.log("updated")},preserveScroll:!0})},children:[r("div",{children:[e(t,{htmlFor:"name",value:"Nazwa"}),e(n,{id:"name",name:"name",value:l.name,className:"mt-1 block w-full",autoComplete:"name",onChange:a=>m("name",a.target.value),required:!0}),e(o,{message:d.name,className:"mt-2"})]}),r("div",{className:"my-2",children:[e(t,{htmlFor:"nip",value:"NIP"}),e(n,{id:"nip",name:"nip",value:l.nip,className:"mt-1 block w-full",autoComplete:"nip",onChange:a=>m("nip",a.target.value),required:!0}),e(o,{message:d.nip,className:"mt-2"})]}),r("div",{className:"my-2",children:[e(t,{htmlFor:"regon",value:"Regon"}),e(n,{id:"regon",name:"regon",value:l.regon,className:"mt-1 block w-full",autoComplete:"regon",onChange:a=>m("regon",a.target.value),required:!0}),e(o,{message:d.regon,className:"mt-2"})]}),r("div",{className:"my-2",children:[e(t,{htmlFor:"street",value:"Ulica"}),e(n,{id:"street",name:"street",value:l.address_street,className:"mt-1 block w-full",autoComplete:"street",onChange:a=>m("address_street",a.target.value),required:!0}),e(o,{message:d.address_street,className:"mt-2"})]}),r("div",{className:"my-2",children:[e(t,{htmlFor:"building_number",value:"Numer budynku"}),e(n,{id:"building_number",name:"building_number",value:l.address_building_number,className:"mt-1 block w-full",autoComplete:"building_number",onChange:a=>m("address_building_number",a.target.value),required:!0}),e(o,{message:d.address_building_number,className:"mt-2"})]}),r("div",{className:"my-2",children:[e(t,{htmlFor:"city",value:"Miasto"}),e(n,{id:"city",name:"city",value:l.address_city,className:"mt-1 block w-full",autoComplete:"city",onChange:a=>m("address_city",a.target.value),required:!0}),e(o,{message:d.address_city,className:"mt-2"})]}),r("div",{className:"my-2",children:[e(t,{htmlFor:"postal_code",value:"Kod pocztowy"}),e(n,{id:"postal_code",name:"postal_code",value:l.address_postal_code,className:"mt-1 block w-full",autoComplete:"postal_code",onChange:a=>m("address_postal_code",a.target.value),required:!0}),e(o,{message:d.address_postal_code,className:"mt-2"})]}),r("div",{className:"my-2",children:[e(t,{htmlFor:"phone_number",value:"Numer telefonu"}),e(n,{id:"phone_number",name:"phone_number",value:l.address_phone_number,className:"mt-1 block w-full",autoComplete:"phone_number",onChange:a=>m("address_phone_number",a.target.value)}),e(o,{message:d.address_phone_number,className:"mt-2"})]}),r("div",{className:"my-2",children:[e(t,{htmlFor:"email",value:"Adres email"}),e(n,{id:"email",name:"email",value:l.address_email,className:"mt-1 block w-full",autoComplete:"email",onChange:a=>m("address_email",a.target.value)}),e(o,{message:d.address_email,className:"mt-2"})]}),r("div",{className:"mt-6 flex flex-col w-full justify-between items-start",children:[e(y,{type:"submit",children:"Zapisz"}),e("div",{})]})]})}export{I as default};
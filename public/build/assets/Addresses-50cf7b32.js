import{a as e,r as o,j as l}from"./app-5445e7f0.js";import d from"./AddressComponent-486a2146.js";import"./InputLabel-577bebcc.js";import"./TextInput-7b53c575.js";const m=({className:r=null})=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:r??"h-6 w-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),u=({addresses:r})=>{const[i,a]=o.useState(null),[s,n]=o.useState(!1);return console.log(s),e("div",{children:l("ul",{className:"bg-white w-full",children:[r.map((t,c)=>e("li",{className:`${c>0?"border-t border-gray-200":null}`,children:e(d,{address:t,editMode:i===t.id,onEdition:a})},t.id)),s?e("li",{className:"border-t border-gray-200",children:e(d,{cancelCreation:n,address:null,createMode:s})},"new"):null,e("li",{className:"border-t border-gray-200",children:l("button",{onClick:()=>n(!0),className:"flex flex-row items-center px-4 py-5 sm:px-6",children:[e(m,{className:"h-8 w-8 mr-2"}),e("div",{children:" Dodaj nowy adres "})]})})]})})},x=u;export{x as default};

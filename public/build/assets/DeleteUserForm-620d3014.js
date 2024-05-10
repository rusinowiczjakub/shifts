import{a as e,r as a,j as t,W as b}from"./app-577d8930.js";import{I as k}from"./InputError-a9c9f480.js";import{I as v}from"./InputLabel-458a9a24.js";import{q as p}from"./transition-92d9fd05.js";import{_ as y}from"./dialog-52a525c4.js";import{T as N}from"./TextInput-d2ae1adb.js";import{L as f}from"./Loader-7de2b02d.js";import"./use-disposables-be0c22b6.js";import"./open-closed-0ff2e2d6.js";import"./use-is-mounted-f4eb1d61.js";import"./use-owner-ae4fa5ae.js";import"./keyboard-34e6c592.js";import"./active-element-history-524aa71f.js";function z({children:n,show:i=!1,maxWidth:r="2xl",closeable:o=!0,onClose:l=()=>{}}){const m=()=>{o&&l()},c={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[r];return e(p,{show:i,as:a.Fragment,leave:"duration-200",children:t(y,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:m,children:[e(p.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),e(p.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e(y.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${c}`,children:n})})]})})}function H({className:n}){const[i,r]=a.useState(!1),o=a.useRef(),{data:l,setData:m,delete:c,processing:s,reset:g,errors:x}=b({password:""}),h=()=>{r(!0)},w=u=>{u.preventDefault(),c(route("staff.profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>o.current.focus(),onFinish:()=>g()})},d=()=>{r(!1),g()};return t("section",{className:`space-y-6 ${n}`,children:[t("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Usuń konto"}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Po usunięciu konta wszystkie jego zasoby i dane zostaną trwale usunięte. Przed usunięciem konta należy pobrać wszelkie dane lub informacje, które mają zostać zachowane."})]}),t("button",{onClick:h,className:"flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50",children:[s&&e(f,{}),!s&&"Usuń konto"]}),e(z,{show:i,onClose:d,children:t("form",{onSubmit:w,className:"p-6",children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Czy na pewno chcesz usunąć konto?"}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Po usunięciu konta wszystkie jego zasoby i dane zostaną trwale usunięte. Wprowadź hasło, aby potwierdzić chęć trwałego usunięcia konta."}),t("div",{className:"mt-6",children:[e(v,{htmlFor:"password",value:"Hasło",className:"sr-only"}),e(N,{id:"password",type:"password",name:"password",ref:o,value:l.password,onChange:u=>m("password",u.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Hasło"}),e(k,{message:x.password,className:"mt-2"})]}),t("div",{className:"mt-6 flex justify-end",children:[t("button",{type:"button",onClick:d,disabled:s,className:"flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 transform bg-white mr-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-800 focus:ring-opacity-50",children:[s&&e(f,{}),!s&&"Anuluj"]}),t("button",{type:"submit",disabled:s,className:"flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50",children:[s&&e(f,{}),!s&&"Usuń konto"]})]})]})})]})}export{H as default};
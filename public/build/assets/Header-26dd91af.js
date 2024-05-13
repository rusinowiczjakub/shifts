import{q as g,r as h,a as e,j as r,d as i}from"./app-cb7c3026.js";import{R as l}from"./ResponsiveNavLink-5ee22e30.js";const p=()=>{var n,s,d;const{auth:a}=g().props,[t,o]=h.useState(!1);return e("header",{children:r("nav",{id:"navbar",className:"inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80",children:[e("div",{className:"mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0",children:r("div",{className:"relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4",children:[r("div",{className:"relative z-20 flex w-full justify-between md:px-0 lg:w-max",children:[e("a",{href:"/","aria-label":"logo",className:"flex items-center py-2 space-x-2",children:e("img",{className:"w-12 h-12",src:"./images/logo.png"})}),e("button",{onClick:()=>o(c=>!c),className:"lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:r("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})]}),e("div",{id:"layer","aria-hidden":"true",className:"fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"}),e("div",{id:"navlinks",className:"invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0 dark:lg:bg-transparent",children:e("div",{className:"text-gray-600 dark:text-gray-300 lg:pr-4",children:r("ul",{className:"flex items-center space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm",children:[e("li",{children:e(i,{className:`block transition hover:text-primary dark:hover:text-primaryLight md:px-4 ${route().current("landing")?"text-blue-500":""}`,href:"/",children:e("span",{children:"Strona główna"})})}),e("li",{children:e(i,{className:`block transition hover:text-primary dark:hover:text-primaryLight md:px-4 ${route().current("jobboard.index")?"text-blue-500":""}`,href:route("jobboard.index"),children:e("span",{children:"Oferty zmian"})})}),(a==null?void 0:a.user)&&e("li",{children:r(i,{className:"flex flex-row justify-between items-center gap-3 transition hover:text-primary dark:hover:text-primaryLight md:px-4",href:route("staff.profile.edit"),children:[e("img",{className:"w-10 h-10 rounded-full",src:(n=a.user)==null?void 0:n.profile_photo_url}),e("span",{children:a.user.name})]})})]})})})]})}),r("div",{className:(t?"block":"hidden")+" sm:hidden",children:[r("div",{className:"pt-2 pb-3 space-y-1",children:[e(l,{href:route("landing"),active:route().current("landing"),children:"Strona główna"}),e(l,{href:route("jobboard.index"),active:route().current("jobboard.index"),children:"Oferty zmian"})]}),a.user&&e("div",{className:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",children:r(l,{href:route("staff.profile.edit"),className:"px-4 flex flex-row gap-3",children:[e("img",{className:"w-10 h-10 rounded-full",src:(s=a.user)==null?void 0:s.profile_photo_url}),r("div",{children:[e("div",{className:"font-medium text-base text-gray-800 dark:text-gray-200",children:(d=a.user)==null?void 0:d.name}),e("div",{className:"font-medium text-sm text-gray-500",children:a.user.email})]})]})})]})]})})};export{p as Header};

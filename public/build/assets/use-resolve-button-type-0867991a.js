import{r as i}from"./app-ab75f5e7.js";import{l as o}from"./open-closed-4294c810.js";function u(t){var r;if(t.type)return t.type;let n=(r=t.as)!=null?r:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function s(t,r){let[n,e]=i.useState(()=>u(t));return o(()=>{e(u(t))},[t.type,t.as]),o(()=>{n||r.current&&r.current instanceof HTMLButtonElement&&!r.current.hasAttribute("type")&&e("button")},[n,r]),n}export{s as T};
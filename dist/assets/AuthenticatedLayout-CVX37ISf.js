import{r as i,j as e,a as d,q as m}from"./app-g86b5Ott.js";import{A as f}from"./ApplicationLogo-6VuZp8OU.js";import{z as y}from"./transition-B5-bh6ew.js";const x=i.createContext(),o=({children:t})=>{const[s,r]=i.useState(!1),a=()=>{r(n=>!n)};return e.jsx(x.Provider,{value:{open:s,setOpen:r,toggleOpen:a},children:e.jsx("div",{className:"relative",children:t})})},p=({children:t})=>{const{open:s,setOpen:r,toggleOpen:a}=i.useContext(x);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:a,children:t}),s&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},b=({align:t="right",width:s="48",contentClasses:r="py-1 bg-white dark:bg-gray-700",children:a})=>{const{open:n,setOpen:l}=i.useContext(x);let c="origin-top";t==="left"?c="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(c="ltr:origin-top-right rtl:origin-top-left end-0");let u="";return s==="48"&&(u="w-48"),e.jsx(e.Fragment,{children:e.jsx(y,{show:n,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${c} ${u}`,onClick:()=>l(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:a})})})})},v=({className:t="",children:s,...r})=>e.jsx(d,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 "+t,children:s});o.Trigger=p;o.Content=b;o.Link=v;function g({active:t=!1,className:s="",children:r,...a}){return e.jsx(d,{...a,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(t?"border-indigo-400 text-gray-900 focus:border-indigo-700 dark:border-indigo-600 dark:text-gray-100":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300")+s,children:r})}function h({active:t=!1,className:s="",children:r,...a}){return e.jsx(d,{...a,className:`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${t?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800 dark:border-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300 dark:focus:border-indigo-300 dark:focus:bg-indigo-900 dark:focus:text-indigo-200":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:border-gray-600 dark:focus:bg-gray-700 dark:focus:text-gray-200"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${s}`,children:r})}function w({header:t,children:s}){const r=m().props.auth.user,[a,n]=i.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900",children:[e.jsxs("nav",{className:"border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx(d,{href:"/",children:e.jsx(f,{className:"block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"})})}),e.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[e.jsx(g,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsx(g,{href:route("project.index"),active:route().current("project.index"),children:"Soutenances"}),e.jsx(g,{href:route("user.index"),active:route().current("user.index"),children:"Utilisateurs"})]})]}),e.jsx("div",{className:"hidden sm:ms-6 sm:flex sm:items-center",children:e.jsx("div",{className:"relative ms-3",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300",children:[r.name,e.jsx("svg",{className:"-me-0.5 ms-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(o.Content,{children:[e.jsx(o.Link,{href:route("profile.edit"),children:"Profil"}),e.jsx(o.Link,{href:route("logout"),method:"post",as:"button",children:"Se déconnecter"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>n(l=>!l),className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:a?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:a?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsx("div",{className:(a?"block":"hidden")+" sm:hidden",children:e.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4 dark:border-gray-600",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800 dark:text-gray-200",children:r.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:r.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(h,{href:route("profile.edit"),children:"Profil"}),e.jsx(h,{method:"post",href:route("logout"),as:"button",children:"Se déconnecter"})]})]})})]}),t&&e.jsx("header",{className:"bg-white shadow dark:bg-gray-800",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",children:t})}),e.jsx("main",{children:s})]})}export{w as A};

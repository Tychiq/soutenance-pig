import{j as e,W as g,Y as p,a as f}from"./app-g86b5Ott.js";import{I as i}from"./InputError-D7nPyMbN.js";import{I as n}from"./InputLabel-BgjAIl69.js";import{P as h}from"./PrimaryButton-BA7tnUyt.js";import{T as l}from"./TextInput-BvYNoOrY.js";import{G as j}from"./GuestLayout-s9HXBDnZ.js";import"./ApplicationLogo-6VuZp8OU.js";function b({className:r="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 "+r})}function I({status:r,canResetPassword:a}){const{data:t,setData:o,post:d,processing:c,errors:m,reset:u}=g({email:"",password:"",remember:!1}),x=s=>{s.preventDefault(),d(route("login"),{onFinish:()=>u("password")})};return e.jsxs(j,{children:[e.jsx(p,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:r}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(i,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"password",value:"Password"}),e.jsx(l,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e.jsx(i,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(b,{name:"remember",checked:t.remember,onChange:s=>o("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600 dark:text-gray-400",children:"Remember me"})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[a&&e.jsx(f,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800",children:"Forgot your password?"}),e.jsx(h,{className:"ms-4",disabled:c,children:"Log in"})]})]})]})}export{I as default};

import{W as u,j as e,Y as x,a as p}from"./app-g86b5Ott.js";import{I as m}from"./InputError-D7nPyMbN.js";import{I as i}from"./InputLabel-BgjAIl69.js";import{S as h}from"./SelectInput-rjn0j_e2.js";import{T as g}from"./TextAreaInput-CIQ7mwLw.js";import{T as n}from"./TextInput-BvYNoOrY.js";import{A as j}from"./AuthenticatedLayout-CVX37ISf.js";import"./ApplicationLogo-6VuZp8OU.js";import"./transition-B5-bh6ew.js";function F({auth:o,project:s}){const{data:l,setData:t,post:d,errors:r,reset:v}=u({image:"",name:s.name||"",status:s.status||"",description:s.description||"",due_date:s.due_date||"",_method:"PUT"}),c=a=>{a.preventDefault(),d(route("project.update",s.id))};return e.jsxs(j,{user:o.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:['Modifier Soutenances "',s.name,'"']})}),children:[e.jsx(x,{title:"Soutenances"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("form",{onSubmit:c,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[s.image_path&&e.jsx("div",{className:"mb-4",children:e.jsx("img",{src:s.image_path,className:"w-64"})}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"project_image_path",value:"Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"mt-1 block w-full",onChange:a=>t("image",a.target.files[0])}),e.jsx(m,{message:r.image,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"project_name",value:"Noms & Prenoms"}),e.jsx(n,{id:"project_name",type:"text",name:"name",value:l.name,className:"mt-1 block w-full",isFocused:!0,onChange:a=>t("name",a.target.value)}),e.jsx(m,{message:r.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"project_description",value:"Filiere & Note"}),e.jsx(g,{id:"project_description",name:"description",value:l.description,className:"mt-1 block w-full",onChange:a=>t("description",a.target.value)}),e.jsx(m,{message:r.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"project_due_date",value:"Date"}),e.jsx(n,{id:"project_due_date",type:"date",name:"due_date",value:l.due_date,className:"mt-1 block w-full",onChange:a=>t("due_date",a.target.value)}),e.jsx(m,{message:r.due_date,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"project_status",value:"Statut"}),e.jsxs(h,{name:"status",id:"project_status",className:"mt-1 block w-full",onChange:a=>t("status",a.target.value),children:[e.jsx("option",{value:"",children:"Sélectionnez Statut"}),e.jsx("option",{value:"pending",children:"En attente"}),e.jsx("option",{value:"in_progress",children:"En cours"}),e.jsx("option",{value:"completed",children:"Terminée"})]}),e.jsx(m,{message:r.project_status,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(p,{href:route("project.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Annuler"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Modifier"})]})]})})})})]})}export{F as default};

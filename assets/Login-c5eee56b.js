import{u as o,j as e,l as n}from"./index-6cbef7de.js";import{H as i,a as m}from"./index.esm-1a05fa39.js";const c="_form_124gr_1",d="_label_124gr_5",l={form:c,label:d},u=()=>{const t=o(),r=a=>{a.preventDefault();const s=a.currentTarget;t(n({email:s.elements.email.value,password:s.elements.password.value})),s.reset()};return e.jsxs("form",{className:l.form,onSubmit:r,autoComplete:"off",children:[e.jsxs("label",{className:l.label,children:["Email",e.jsx("input",{type:"email",name:"email"})]}),e.jsxs("label",{className:l.label,children:["Password",e.jsx("input",{type:"password",name:"password"})]}),e.jsx("button",{type:"submit",children:"Log In"})]})};function f(){return e.jsx(i,{children:e.jsxs("div",{children:[e.jsx(m,{children:e.jsx("title",{children:"Login"})}),e.jsx(u,{})]})})}export{f as default};

import{b as i,j as e,i as a}from"./index-5c6eddf4.js";import{H as o,a as n}from"./index.esm-8ec87a7a.js";import{b as t,a as l}from"./selectors-8bbea611.js";const m="_orderNumber_jgm4c_1",p="_description_jgm4c_7",j="_orderName_jgm4c_11",x="_orderFabric_jgm4c_16",s={orderNumber:m,description:p,orderName:j,orderFabric:x},h=({id:c})=>{const r=i(t),d=new Date(r.plannedDeadline);return e.jsxs("div",{className:s.wrapper,children:[e.jsx("p",{className:s.orderNumber,children:r.number}),e.jsxs("div",{className:s.description,children:[e.jsxs("p",{className:s.orderName,children:[r.group," ",r.name]}),e.jsx("p",{className:s.orderSize,children:r.size}),e.jsx("p",{className:s.orderFabric,children:r.fabric}),e.jsx("p",{children:r.description}),e.jsx("p",{children:`${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`}),e.jsx("p",{children:r.dealer}),e.jsxs("p",{className:s.orderAdress,children:["Adress: ",r.adress]}),e.jsxs("p",{className:s.orderRest,children:["Rest: ",r.rest]})]})]})};function g(){const c=i(l),{orderId:r}=a();return e.jsx(e.Fragment,{children:e.jsxs(o,{children:[e.jsx(n,{children:e.jsx("title",{children:"Order details"})}),e.jsx("div",{children:c&&"Request in progress..."}),e.jsx(h,{id:r})]})})}export{g as default};

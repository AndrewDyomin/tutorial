import{b as l,j as e,u as o,L as m,s as p,r as h,h as _}from"./index-a910d66f.js";import{H as u,a as x}from"./index.esm-854a16b8.js";import{s as d,a as j}from"./selectors-8bbea611.js";import{_ as N}from"./PulseLoader-5b88e718.js";const f="_wrapper_5thlv_1",v="_number_5thlv_13",D="_discription_5thlv_25",O="_orderName_5thlv_35",L="_orderDeadline_5thlv_43",b="_orderDealer_5thlv_53",n={wrapper:f,number:v,discription:D,orderName:O,orderDeadline:L,orderDealer:b},g=({id:s})=>{const r=l(d).allOrdersArray.find(c=>c._id===s),a=new Date(r.plannedDeadline);return e.jsxs("div",{className:n.wrapper,children:[e.jsx("p",{className:n.number,children:r.number}),e.jsxs("div",{className:n.discription,children:[e.jsx("p",{className:n.orderName,children:r.name}),e.jsx("p",{className:n.orderDeadline,children:`${a.getDate()}.${a.getMonth()+1}.${a.getFullYear()}`}),e.jsx("p",{className:n.orderDealer,children:r.dealer})]})]})},k="_list_s6746_3",A="_item_s6746_13",w="_orderLink_s6746_35",i={list:k,item:A,orderLink:w},$=()=>{const s=o(),t=l(d);return e.jsx("div",{className:i.container,children:t.length!==0?e.jsx("ul",{className:i.list,children:t.allOrdersArray.map(({_id:r})=>e.jsx("li",{className:i.item,children:e.jsx(m,{to:`${r}`,className:i.orderLink,onClick:()=>s(p(t.allOrdersArray.find(a=>a._id===r))),children:e.jsx(g,{id:r})})},r))}):e.jsx(N,{color:"#c8c19b",cssOverride:{position:"absolute",top:"20%",left:"50%"}})})};function R(){const s=o(),t=l(j);return h.useEffect(()=>{s(_())},[s]),e.jsx(e.Fragment,{children:e.jsxs(u,{children:[e.jsx(x,{children:e.jsx("title",{children:"Your orders"})}),e.jsx("div",{children:t&&"Request in progress..."}),e.jsx($,{})]})})}export{R as default};

import{b as o,j as e,u as d,L as m,s as p,r as h,h as _}from"./index-dfa0d22c.js";import{H as u,a as x}from"./index.esm-be44e6d7.js";import{s as c,a as j}from"./selectors-8bbea611.js";import{_ as f}from"./PulseLoader-9f278c88.js";const N="_wrapper_1anfh_1",D="_number_1anfh_7",b="_discription_1anfh_13",O="_orderName_1anfh_18",L="_orderDeadline_1anfh_22",g="_orderDealer_1anfh_27",a={wrapper:N,number:D,discription:b,orderName:O,orderDeadline:L,orderDealer:g},v=({id:s})=>{const r=o(c).allOrdersArray.find(l=>l._id===s),t=new Date(r.plannedDeadline);return e.jsxs("div",{className:a.wrapper,children:[e.jsx("p",{className:a.number,children:r.number}),e.jsxs("div",{className:a.discription,children:[e.jsx("p",{className:a.orderName,children:r.name}),e.jsx("p",{className:a.orderDeadline,children:`${t.getDate()}.${t.getMonth()+1}.${t.getFullYear()}`}),e.jsx("p",{className:a.orderDealer,children:r.dealer})]})]})},k="_list_u0b44_2",A="_item_u0b44_7",w="_orderLink_u0b44_18",i={list:k,item:A,orderLink:w},$=()=>{const s=d(),n=o(c);return e.jsx("div",{className:i.container,children:n.length!==0?e.jsx("ul",{className:i.list,children:n.allOrdersArray.map(({_id:r})=>e.jsx("li",{className:i.item,children:e.jsx(m,{to:`${r}`,className:i.orderLink,onClick:()=>s(p(n.allOrdersArray.find(t=>t._id===r))),children:e.jsx(v,{id:r})})},r))}):e.jsx(f,{color:"#c8c19b",cssOverride:{position:"absolute",top:"20%",left:"50%"}})})};function R(){const s=d(),n=o(j);return h.useEffect(()=>{s(_())},[s]),e.jsx(e.Fragment,{children:e.jsxs(u,{children:[e.jsx(x,{children:e.jsx("title",{children:"Your orders"})}),e.jsx("div",{children:n&&"Request in progress..."}),e.jsx($,{})]})})}export{R as default};

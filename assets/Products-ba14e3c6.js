import{b as n,j as s,u as d,i as u,L as p,k as j,r as h,f as x}from"./index-a910d66f.js";import{H as _,a as f}from"./index.esm-854a16b8.js";import{a as g}from"./selectors-8bbea611.js";import{_ as L}from"./PulseLoader-5b88e718.js";import{s as l}from"./selectors-3b659df4.js";const P="_wrapper_1jbhs_1",v="_image_1jbhs_33",N="_name_1jbhs_41",b="_size_1jbhs_55",c={wrapper:P,image:v,name:N,size:b},k=({id:r})=>{const e=n(l).array.find(i=>i._id===r);return s.jsxs("div",{className:c.wrapper,children:[s.jsx("img",{src:e.images[0],alt:`${e.name}`,className:c.image}),s.jsxs("div",{children:[s.jsx("p",{className:c.name,children:e.name}),s.jsxs("p",{className:c.size,children:[e.dimensions.width," x ",e.dimensions.height]})]})]})},w="_list_1jtud_1",y="_item_1jtud_11",z="_productLink_1jtud_21",o={list:w,item:y,productLink:z},A=()=>{const r=d(),t=n(l);let e=t.array?[...t.array]:[];const{filter:i}=u();return t.array&&i&&(e=t.array.filter(a=>a.group.toLowerCase()===i.toLowerCase())),s.jsx("div",{className:o.container,children:t.length!==0?s.jsx("ul",{className:o.list,children:e.map(({_id:a})=>s.jsx("li",{className:o.item,children:s.jsx(p,{to:`/product-details/${a}`,className:o.productLink,onClick:()=>r(j(t.array.find(m=>m._id===a))),children:s.jsx(k,{id:a})})},a))}):s.jsx(L,{color:"#c8c19b",cssOverride:{position:"absolute",top:"20%",left:"50%"}})})};function R(){const r=d(),t=n(g);return h.useEffect(()=>{r(x())},[r]),s.jsx(s.Fragment,{children:s.jsxs(_,{children:[s.jsx(f,{children:s.jsx("title",{children:"Our products"})}),s.jsx("div",{children:t&&"Request in progress..."}),s.jsx(A,{})]})})}export{R as default};

import{g as q,r as Q,R as L,P as m,u as Y,j as v,d as oe,b as J,c as ae,e as ie}from"./index-5c6eddf4.js";function se(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Z=Q,ue=se(Z);function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ce(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var le=!!(typeof window<"u"&&window.document&&window.document.createElement);function fe(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var c=[],i;function s(){i=t(c.map(function(l){return l.props})),u.canUseDOM?e(i):n&&(i=n(i))}var u=function(l){ce(p,l);function p(){return l.apply(this,arguments)||this}p.peek=function(){return i},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=i;return i=void 0,c=[],y};var d=p.prototype;return d.UNSAFE_componentWillMount=function(){c.push(this),s()},d.componentDidUpdate=function(){s()},d.componentWillUnmount=function(){var y=c.indexOf(this);c.splice(y,1),s()},d.render=function(){return ue.createElement(a,this.props)},p}(Z.PureComponent);return G(u,"displayName","SideEffect("+r(a)+")"),G(u,"canUseDOM",le),u}}var pe=fe;const de=q(pe);var Te=typeof Element<"u",me=typeof Map=="function",he=typeof Set=="function",ve=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function x(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!x(t[r],e[r]))return!1;return!0}var a;if(me&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!x(r.value[1],e.get(r.value[0])))return!1;return!0}if(he&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(ve&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(Te&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!x(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var ge=function(e,n){try{return x(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const ye=q(ge);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var z=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;function be(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Se(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Oe=Se()?Object.assign:function(t,e){for(var n,r=be(t),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var c in n)Ee.call(n,c)&&(r[c]=n[c]);if(z){o=z(n);for(var i=0;i<o.length;i++)Ae.call(n,o[i])&&(r[o[i]]=n[o[i]])}}return r};const Ce=q(Oe);var C={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},f={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(f).map(function(t){return f[t]});var h={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},we=Object.keys(N).reduce(function(t,e){return t[N[e]]=e,t},{}),Pe=[f.NOSCRIPT,f.SCRIPT,f.STYLE],E="data-react-helmet",_e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},je=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Re=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Le=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},X=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Ie=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},F=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},xe=function(e){var n=P(e,f.TITLE),r=P(e,I.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=P(e,I.DEFAULT_TITLE);return n||o||void 0},Ne=function(e){return P(e,I.ON_CHANGE_CLIENT_STATE)||function(){}},M=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return g({},r,o)},{})},Me=function(e,n){return n.filter(function(r){return typeof r[f.BASE]<"u"}).map(function(r){return r[f.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),c=0;c<a.length;c++){var i=a[c],s=i.toLowerCase();if(e.indexOf(s)!==-1&&o[s])return r.concat(o)}return r},[])},j=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&De("Helmet: "+e+' should be of type "Array". Instead found type "'+_e(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,c){var i={};c.filter(function(d){for(var T=void 0,y=Object.keys(d),A=0;A<y.length;A++){var b=y[A],S=b.toLowerCase();n.indexOf(S)!==-1&&!(T===h.REL&&d[T].toLowerCase()==="canonical")&&!(S===h.REL&&d[S].toLowerCase()==="stylesheet")&&(T=S),n.indexOf(b)!==-1&&(b===h.INNER_HTML||b===h.CSS_TEXT||b===h.ITEM_PROP)&&(T=b)}if(!T||!d[T])return!1;var _=d[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][_]?!1:(i[T][_]=!0,!0)}).reverse().forEach(function(d){return a.push(d)});for(var s=Object.keys(i),u=0;u<s.length;u++){var l=s[u],p=Ce({},o[l],i[l]);o[l]=p}return a},[]).reverse()},P=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},He=function(e){return{baseTag:Me([h.HREF,h.TARGET],e),bodyAttributes:M(C.BODY,e),defer:P(e,I.DEFER),encode:P(e,I.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:M(C.HTML,e),linkTags:j(f.LINK,[h.REL,h.HREF],e),metaTags:j(f.META,[h.NAME,h.CHARSET,h.HTTPEQUIV,h.PROPERTY,h.ITEM_PROP],e),noscriptTags:j(f.NOSCRIPT,[h.INNER_HTML],e),onChangeClientState:Ne(e),scriptTags:j(f.SCRIPT,[h.SRC,h.INNER_HTML],e),styleTags:j(f.STYLE,[h.CSS_TEXT],e),title:xe(e),titleAttributes:M(C.TITLE,e)}},D=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){D(e)},0)}}(),V=function(e){return clearTimeout(e)},ke=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||D:global.requestAnimationFrame||D,Fe=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||V:global.cancelAnimationFrame||V,De=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},R=null,Ue=function(e){R&&Fe(R),e.defer?R=ke(function(){W(e,function(){R=null})}):(W(e),R=null)},W=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,p=e.styleTags,d=e.title,T=e.titleAttributes;U(f.BODY,o),U(f.HTML,a),Be(d,T);var y={baseTag:w(f.BASE,r),linkTags:w(f.LINK,c),metaTags:w(f.META,i),noscriptTags:w(f.NOSCRIPT,s),scriptTags:w(f.SCRIPT,l),styleTags:w(f.STYLE,p)},A={},b={};Object.keys(y).forEach(function(S){var _=y[S],$=_.newTags,ne=_.oldTags;$.length&&(A[S]=$),ne.length&&(b[S]=y[S].oldTags)}),n&&n(),u(e,A,b)},K=function(e){return Array.isArray(e)?e.join(""):e},Be=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=K(e)),U(f.TITLE,n)},U=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(E),a=o?o.split(","):[],c=[].concat(a),i=Object.keys(n),s=0;s<i.length;s++){var u=i[s],l=n[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),a.indexOf(u)===-1&&a.push(u);var p=c.indexOf(u);p!==-1&&c.splice(p,1)}for(var d=c.length-1;d>=0;d--)r.removeAttribute(c[d]);a.length===c.length?r.removeAttribute(E):r.getAttribute(E)!==i.join(",")&&r.setAttribute(E,i.join(","))}},w=function(e,n){var r=document.head||document.querySelector(f.HEAD),o=r.querySelectorAll(e+"["+E+"]"),a=Array.prototype.slice.call(o),c=[],i=void 0;return n&&n.length&&n.forEach(function(s){var u=document.createElement(e);for(var l in s)if(s.hasOwnProperty(l))if(l===h.INNER_HTML)u.innerHTML=s.innerHTML;else if(l===h.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=s.cssText:u.appendChild(document.createTextNode(s.cssText));else{var p=typeof s[l]>"u"?"":s[l];u.setAttribute(l,p)}u.setAttribute(E,"true"),a.some(function(d,T){return i=T,u.isEqualNode(d)})?a.splice(i,1):c.push(u)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),c.forEach(function(s){return r.appendChild(s)}),{oldTags:a,newTags:c}},ee=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},qe=function(e,n,r,o){var a=ee(r),c=K(n);return a?"<"+e+" "+E+'="true" '+a+">"+F(c,o)+"</"+e+">":"<"+e+" "+E+'="true">'+F(c,o)+"</"+e+">"},Ye=function(e,n,r){return n.reduce(function(o,a){var c=Object.keys(a).filter(function(u){return!(u===h.INNER_HTML||u===h.CSS_TEXT)}).reduce(function(u,l){var p=typeof a[l]>"u"?l:l+'="'+F(a[l],r)+'"';return u?u+" "+p:p},""),i=a.innerHTML||a.cssText||"",s=Pe.indexOf(e)===-1;return o+"<"+e+" "+E+'="true" '+c+(s?"/>":">"+i+"</"+e+">")},"")},te=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[N[o]||o]=e[o],r},n)},$e=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[we[o]||o]=e[o],r},n)},Ge=function(e,n,r){var o,a=(o={key:n},o[E]=!0,o),c=te(r,a);return[L.createElement(f.TITLE,c,n)]},ze=function(e,n){return n.map(function(r,o){var a,c=(a={key:o},a[E]=!0,a);return Object.keys(r).forEach(function(i){var s=N[i]||i;if(s===h.INNER_HTML||s===h.CSS_TEXT){var u=r.innerHTML||r.cssText;c.dangerouslySetInnerHTML={__html:u}}else c[s]=r[i]}),L.createElement(e,c)})},O=function(e,n,r){switch(e){case f.TITLE:return{toComponent:function(){return Ge(e,n.title,n.titleAttributes)},toString:function(){return qe(e,n.title,n.titleAttributes,r)}};case C.BODY:case C.HTML:return{toComponent:function(){return te(n)},toString:function(){return ee(n)}};default:return{toComponent:function(){return ze(e,n)},toString:function(){return Ye(e,n,r)}}}},re=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,c=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.scriptTags,l=e.styleTags,p=e.title,d=p===void 0?"":p,T=e.titleAttributes;return{base:O(f.BASE,n,o),bodyAttributes:O(C.BODY,r,o),htmlAttributes:O(C.HTML,a,o),link:O(f.LINK,c,o),meta:O(f.META,i,o),noscript:O(f.NOSCRIPT,s,o),script:O(f.SCRIPT,u,o),style:O(f.STYLE,l,o),title:O(f.TITLE,{title:d,titleAttributes:T},o)}},Xe=function(e){var n,r;return r=n=function(o){Le(a,o);function a(){return je(this,a),Ie(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!ye(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,s){if(!s)return null;switch(i.type){case f.SCRIPT:case f.NOSCRIPT:return{innerHTML:s};case f.STYLE:return{cssText:s}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var s,u=i.child,l=i.arrayTypeChildren,p=i.newChildProps,d=i.nestedChildren;return g({},l,(s={},s[u.type]=[].concat(l[u.type]||[],[g({},p,this.mapNestedChildrenToProps(u,d))]),s))},a.prototype.mapObjectTypeChildren=function(i){var s,u,l=i.child,p=i.newProps,d=i.newChildProps,T=i.nestedChildren;switch(l.type){case f.TITLE:return g({},p,(s={},s[l.type]=T,s.titleAttributes=g({},d),s));case f.BODY:return g({},p,{bodyAttributes:g({},d)});case f.HTML:return g({},p,{htmlAttributes:g({},d)})}return g({},p,(u={},u[l.type]=g({},d),u))},a.prototype.mapArrayTypeChildrenToProps=function(i,s){var u=g({},s);return Object.keys(i).forEach(function(l){var p;u=g({},u,(p={},p[l]=i[l],p))}),u},a.prototype.warnOnInvalidChildren=function(i,s){return!0},a.prototype.mapChildrenToProps=function(i,s){var u=this,l={};return L.Children.forEach(i,function(p){if(!(!p||!p.props)){var d=p.props,T=d.children,y=X(d,["children"]),A=$e(y);switch(u.warnOnInvalidChildren(p,T),p.type){case f.LINK:case f.META:case f.NOSCRIPT:case f.SCRIPT:case f.STYLE:l=u.flattenArrayTypeChildren({child:p,arrayTypeChildren:l,newChildProps:A,nestedChildren:T});break;default:s=u.mapObjectTypeChildren({child:p,newProps:s,newChildProps:A,nestedChildren:T});break}}}),s=this.mapArrayTypeChildrenToProps(l,s),s},a.prototype.render=function(){var i=this.props,s=i.children,u=X(i,["children"]),l=g({},u);return s&&(l=this.mapChildrenToProps(s,l)),L.createElement(e,l)},Re(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(L.Component),n.propTypes={base:m.object,bodyAttributes:m.object,children:m.oneOfType([m.arrayOf(m.node),m.node]),defaultTitle:m.string,defer:m.bool,encodeSpecialCharacters:m.bool,htmlAttributes:m.object,link:m.arrayOf(m.object),meta:m.arrayOf(m.object),noscript:m.arrayOf(m.object),onChangeClientState:m.func,script:m.arrayOf(m.object),style:m.arrayOf(m.object),title:m.string,titleAttributes:m.object,titleTemplate:m.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=re({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},Ve=function(){return null},We=de(He,Ue,re)(Ve),B=Xe(We);B.renderStatic=B.rewind;const Qe="_wrapper_1t0ka_1",Je="_text_1t0ka_10",Ze="_button_1t0ka_15",H={wrapper:Qe,text:Je,button:Ze},Ke=({id:t,text:e})=>{const n=Y(),r=()=>n(oe(t));return v.jsxs("div",{className:H.wrapper,children:[v.jsx("p",{className:H.text,children:e}),v.jsx("button",{type:"button",className:H.button,onClick:r,children:"Delete"})]})},et=t=>t.tasks.loading,tt=t=>t.tasks.items,rt="_list_1u67l_1",nt={list:rt},ot=()=>{const t=J(tt);return v.jsx("ul",{className:nt.list,children:t.map(({id:e,text:n})=>v.jsx("li",{children:v.jsx(Ke,{id:e,text:n})},e))})},at="_form_134vr_1",it="_input_134vr_8",st="_button_134vr_19",k={form:at,input:it,button:st},ut=()=>{const t=Y(),e=n=>{n.preventDefault();const r=n.currentTarget,o=r.elements.text.value;if(o!==""){t(ae(o)),r.reset();return}alert("Task cannot be empty. Enter some text!")};return v.jsxs("form",{className:k.form,onSubmit:e,children:[v.jsx("input",{name:"text",className:k.input}),v.jsx("button",{type:"submit",className:k.button,children:"Add task"})]})};function lt(){const t=Y(),e=J(et);return Q.useEffect(()=>{t(ie())},[t]),v.jsxs(v.Fragment,{children:[v.jsx(B,{children:v.jsx("title",{children:"Your tasks"})}),v.jsx(ut,{}),v.jsx("div",{children:e&&"Request in progress..."}),v.jsx(ot,{})]})}export{lt as default};

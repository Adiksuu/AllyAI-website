import{r,j as s,F as d,h as m,c as u}from"./index-BFltlDJr.js";import{a as h}from"./_upgradeAccount-CtbiBU6f.js";import{S as t}from"./Sidebar-eFX6kK0U.js";import"./index-BtAHqjqB.js";const x="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";function w(){const[i,a]=r.useState(!1),[e,o]=r.useState({});return r.useEffect(()=>{const l=new URLSearchParams(window.location.search).get("session_id");(async()=>{try{const c=await(await fetch(`https://api.stripe.com/v1/checkout/sessions/${l}`,{method:"GET",headers:{Authorization:`Bearer ${x}`}})).json();o(c),c.payment_status==="paid"&&u.currentUser.email===c.customer_details.email?(a(!0),h()):a(!1)}catch(n){console.error("Błąd weryfikacji płatności:",n)}})()},[]),i?s.jsxs(s.Fragment,{children:[s.jsx(t,{}),s.jsx("section",{className:"success",children:s.jsxs("div",{className:"success__container",children:[s.jsx("div",{className:"success__icon",children:s.jsx(d,{icon:m})}),s.jsx("h1",{children:"Payment was Successful!"}),s.jsx("p",{children:"Your payment has been successfully done."}),s.jsxs("div",{className:"success__details",children:[s.jsxs("div",{className:"success__row",children:[s.jsx("span",{children:"Total Payment"}),s.jsxs("strong",{children:[(e==null?void 0:e.currency.toUpperCase())||"PLN"," ",(e==null?void 0:e.amount_total)||"15"]})]}),s.jsxs("div",{className:"success__row",children:[s.jsx("span",{children:"Email"}),s.jsx("strong",{children:(e==null?void 0:e.customer_details.email)||"undefined"})]})]})]})})]}):s.jsxs(s.Fragment,{children:[s.jsx(t,{}),s.jsx("section",{className:"success",children:s.jsxs("div",{className:"success__container",children:[s.jsx("h1",{children:"Payment Failed!"}),s.jsx("p",{children:"Your payment has not been successfully done."})]})})]})}export{w as default};

import{d as s,c as e}from"./index-BFltlDJr.js";const u=()=>{s.ref(`users/${e.currentUser.uid}`).update({premium:!0})},c=async()=>(await s.ref(`users/${e.currentUser.uid}/`).once("value")).val().premium||!1;export{c as _,u as a};

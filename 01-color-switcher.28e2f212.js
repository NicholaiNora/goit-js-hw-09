const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),l=document.querySelector("body");console.log(e),console.log(t),console.log(l);let o=null;t.setAttribute("disabled",""),e.addEventListener("click",(()=>{o=setInterval((()=>{l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.disabled=!0,t.disabled=!1}),1e3)})),t.addEventListener("click",(()=>{clearInterval(o),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.28e2f212.js.map

const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d;t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.96684985.js.map

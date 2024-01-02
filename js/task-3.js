const input=document.querySelector("#name-input");
const span=document.querySelector("#name-output");
input.addEventListener('input', (e)=>{
    const trimInput=e.target.value.trim();
    if (trimInput===""){
span.textContent="Anonymous";
    } else{
        span.textContent=trimInput;
    }
})




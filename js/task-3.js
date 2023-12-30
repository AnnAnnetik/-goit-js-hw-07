


// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як імя для привітання. Обовязково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
// На що буде звертати увагу ментор при перевірці:
// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як імя для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"

const input=document.querySelector("#name-input");
const span=document.querySelector("#name-output");
input.addEventListener('input', (e)=>{
    const trimInput=e.target.value.trim();
    if (trimInput===" "){
span.textContent="Anonymous";
    } else{
        span.textContent=trimInput;
    }
})



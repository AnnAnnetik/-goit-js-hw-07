const input=document.querySelector('input');
const box=document.querySelector('#boxes');
const btnCreate=document.querySelector('[data-create]');
const btnDes=document.querySelector('[data-destroy]');


btnCreate.addEventListener('click', onClickCreateBoxes);
btnDes.addEventListener('click', destroyBoxes);


function onClickCreateBoxes(){
  const amount=Number(input.value);
    if(amount>=1 && amount<=100){
      createBoxes(amount);
}};

function createBoxes(amount){
  box.innerHTML = '';
    let size=30;
    for(let i=0; i<amount; i++ ){
      const boxElem=document.createElement('div');
        boxElem.style.width=`${size}px`;
        boxElem.style.height=`${size}px`;
        boxElem.style.backgroundColor = getRandomHexColor();
        size+=10;
        box.append(boxElem);   
  }};
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

function destroyBoxes(){
  box.innerHTML = '';
  input.value='';
};
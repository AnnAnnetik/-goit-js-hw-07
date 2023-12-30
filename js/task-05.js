
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

const body=document.body;
const button=document.querySelector(".change-color");
const span=document.querySelector(".color");

button.addEventListener('click', colorBody);

  function colorBody(color){
  color=getRandomHexColor();
body.style.backgroundColor=color;
span.textContent=color
  };
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
      
  }

  
  



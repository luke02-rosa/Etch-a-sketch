// presa del contenitore
const contenitore = document.querySelector("#contenitore");
//creazione 16x16 quadrati

let mousePressed = false;

const btngriglia = document.querySelector(".genera");
let input = document.querySelector(".input");


btngriglia.addEventListener("click", () => {
  const answer = parseInt(input.value);
 
  

   

if(answer<2 ||answer >50){
    alert("numero non valido")
} 

contenitore.innerHTML = "";



for(let i = 0; i< answer*answer; i++){
    const quadrato = document.createElement("div");
    quadrato.classList.add("quadrato");
    quadrato.style.cssText = 
    "width:" +(600/answer)+ "px; height:" +(600/answer)+ "px;"
    contenitore.appendChild(quadrato);
 

    let Cursore = "red"

    quadrato.addEventListener("mousedown", () =>{
         mousePressed = true;
         
    })
     quadrato.addEventListener("mouseup", () =>{
       mousePressed = false;
    })

    quadrato.addEventListener("mouseenter", () =>{
        if(mousePressed === true){
        quadrato.style.backgroundColor = Cursore
    }
    })
    const button1 = document.querySelector(".button1")
   const button2 = document.querySelector(".button2")
   const button3 = document.querySelector(".button3")
   const button4 = document.querySelector(".button4")
   const reset = document.querySelector(".button5")

   button1.addEventListener("click",()=>{
    Cursore = "black"

   })
   button4.addEventListener("click",()=>{
    Cursore = "white"

   })
   button2.addEventListener("input",()=>{
    Cursore = button2.value;

   })
    button3.addEventListener("click",()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    Cursore = `rgb(${r}, ${g}, ${b})`;

   })
    reset.addEventListener("click",()=>{
    quadrato.style.backgroundColor = "white";

   })
   

   }
   }
);



   


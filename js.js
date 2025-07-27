// presa del contenitore
const contenitore = document.querySelector("#contenitore");
//creazione 16x16 quadrati

let mousePressed = false;

for(let i = 0; i< 16*16; i++){
    const quadrato = document.createElement("div");
    quadrato.classList.add("quadrato");
    contenitore.appendChild(quadrato);
    

    
    quadrato.addEventListener("mousedown", () =>{
         mousePressed = true;
         
    })
     quadrato.addEventListener("mouseup", () =>{
       mousePressed = false;
    })

    quadrato.addEventListener("mouseenter", () =>{
        if(mousePressed === true){
        quadrato.style.cssText = "background:yellow"
    }
    })
   

   


     

   }


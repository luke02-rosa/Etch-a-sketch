// presa del contenitore
const contenitore = document.querySelector("#contenitore");
//creazione 16x16 quadrati

for(let i = 0; i< 16*16; i++){
    const quadrato = document.createElement("div");
    quadrato.classList.add("quadrato");
    contenitore.appendChild(quadrato);

}



/*const div = document.createElement("div");
const p = document.createElement("p");
p.textContent = "ciao";
p.style.cssText = "background:blue";
div.appendChild(p);
contenitore.appendChild(div);
console.log(contenitore)*/
/*
const abuelo = document.querySelector(".abuelo");
const padre = document.querySelector(".padre");
const hijo = document.querySelector(".hijo");

/*
abuelo.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Abuelo CAPTURE", e.target);
  },
  { capture: true }
);


abuelo.addEventListener("click", (e) => {
  console.log("Abuelo BUBBLE", e.target);
});

padre.addEventListener("click", printHi);

hijo.addEventListener("click", (e) => {
  console.log("Hijo BUBBLE", e.target);
});

/*
document.addEventListener("click", (e) => {
  console.log("Document BUBBLE", e.target);
});
*/

/* EJECUTAR EL EVENTO SOLO UNA VEZ
padre.addEventListener(
  "click",
  (e) => {
    console.log("Padre BUBBLE", e.target);
  },
  { once: true }
);


function printHi() {
  console.log("Hi");
}

setTimeout(() => {
  padre.removeEventListener("click", printHi);
}, 2000);
*/

//!EVENT DELEGATION

const divs = document.querySelectorAll("div");
/*
divs.forEach((div) => {
  div.addEventListener("click", () => {
    console.log("hola");
  });
});
*/

/*SIN FUNCION
document.addEventListener("click", (e) => {
  if (e.target.matches("div")) {
    console.log("hola");
  }
});
*/
addGlobalEventListener("click", "div", (e) => {
  console.log("hola");
});

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";

document.body.append(newDiv);

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

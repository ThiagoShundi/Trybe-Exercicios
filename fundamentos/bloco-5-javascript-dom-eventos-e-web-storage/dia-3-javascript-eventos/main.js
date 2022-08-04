const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// function ajustar(tech) {
//     let
//     td.style.trasform = translateY(0px);
// }

function atividade2(event) {
  const adicionar = document.querySelectorAll(".tech");
  adicionar.classList.remove("tech");
  event.target.classList.add("tech");
  input.value = "";
}

firstLi.addEventListener("click", atividade2);
secondLi.addEventListener("click", atividade2);
thirdLi.addEventListener("click", atividade2);

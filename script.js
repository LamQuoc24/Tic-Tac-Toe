let board = document.querySelector("#board");
let squares = document.querySelectorAll(".square")

let turn = 2;

for (let i = 0; i < 9; i++) {
  const square = document.createElement("div");
  square.addEventListener("click", function mickey() {
    if ((square.style.backgroundColor = "black" && turn % 2 === 0)) {
      square.style.backgroundColor = "blue";
      turn ++
    } else if ((square.style.backgroundColor = "black" && turn % 2 !== 0)) {
      square.style.backgroundColor = "red";
      turn ++
    }
  });
  square.classList.add("square");
  board.appendChild(square);
}

let reset = () =>{

}

reset();
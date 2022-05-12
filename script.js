//! -------------------------------- Variables ------------------------------- */

let board = document.querySelector("#board");
let reset = document.querySelector("#butt-on");
let turn = 2;
let boardArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//!--------------------------------Yeet----------------------------------------*/

for (let i = 0; i < 9; i++) {
  allSquares = document.querySelectorAll(".square");
  const square = document.createElement("div");
  square.classList.add("square");
  square.id = i;
  square.click = false;
  square.addEventListener("click", () => {
    if (square.click === false && turn % 2 === 0) {
      square.style.backgroundColor = "#B2BEBF";
      turn++;
      square.click = true;
      boardArr[square.id] = true;
    //   console.log(boardArr);
    } else if (square.click === false && turn % 2 !== 0) {
      square.style.backgroundColor = "#E3C75F";
      turn++;
      square.click = true;
      boardArr[square.id] = false;
    //   console.log(boardArr);
    }
  });
  board.appendChild(square);
}
//! -------------------------------- Reset ----------------------------------*/

let lastSquare = document.getElementById("8");
reset.addEventListener("click", () => {
  allSquares.forEach((square) => {
    square.style.backgroundColor = "black";
    lastSquare.style.backgroundColor = "black";
    square.click = false;
    lastSquare.click = false;
    turn = 2;
    boardArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  });
});

//! ---------------------------- //!Win Condition ---------------------------- */

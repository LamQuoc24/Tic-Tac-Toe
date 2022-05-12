//! -------------------------------- Variables ------------------------------- */

let board = document.querySelector("#board");
let turn = 2;

//! ---------------------------------Yeet---------------------------------------- */

for (let i = 0; i < 9; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.click = false;
  square.addEventListener("click", () => {
    if (square.click === false && turn % 2 === 0) {
      square.style.backgroundColor = "#B2BEBF";
      turn++;
      square.click = true;
    } else if (square.click === false && turn % 2 !== 0) {
      square.style.backgroundColor = "#E3C75F";
      turn++;
      square.click = true;
    }
  });
  board.appendChild(square);
}
//! -------------------------------- Reset --------------------------------*/


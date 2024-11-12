const board = document.getElementById("squareboard");
const square = document.querySelectorAll(".square");
const met = document.getElementsByClassName("square")[0];
let x = 0;
let y = 0;
let canMove = false;

const boo = square.forEach((square) => {
  square.addEventListener("click", (fun) => {
    canMove = true;
    console.log(canMove);
    square.style.backgroundColor = "blue";
  });
});

const cord = board.getBoundingClientRect();
const cordSquare = met.getBoundingClientRect();
console.log(cord);
console.log(cordSquare);

document.addEventListener("keydown", (fun2) => {
  if (canMove) {
    if (fun2.key === "ArrowDown") {
      if (y<200) {
        y += 50;
      square.forEach((square) => {
        square.style.top = `${y}px`;
      });
      }
      
    } else if (fun2.key === "ArrowUp") {
        if(y>0){
      y -= 50;
      square.forEach((square) => {
        square.style.top = `${y}px`;
      });
    }
    } else if (fun2.key === "ArrowRight") {
      if(x>-300){
      x -= 50;
      square.forEach((square) => {
        square.style.right = `${x}px`;
      });
    }
    } else if (fun2.key === "ArrowLeft" || fun2.key ==="l") {
      if(x<0){
      x += 50;
      console.log(x)
      square.forEach((square) => {
        square.style.right = `${x}px`;
      });
    }
    } else {
      console.log("No funcking key was selected");
    }
  }
});




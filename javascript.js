let choice = "";
let mouseDown = false;
const area = 600;
const container = document.querySelector(".container");
const sketch_area = document.createElement("div");
const resize = document.querySelector(".resize");
const eraser = document.querySelector(".eraser");
const marker = document.querySelector(".marker");
const random = document.querySelector(".random");

sketch_area.classList.add("sketch_area");
sketch_area.style.width = `${area}px`;
sketch_area.style.height = `${area}px`;
sketch_area.addEventListener("mousedown", () => {mouseDown = true;});
sketch_area.addEventListener("mouseup", () => {mouseDown = false;});

const getRandom = (number) => Math.floor(Math.random()*(number+1));

function resizeGrid(event){
    console.log(sketch_area);
    sketch_area.querySelectorAll(".square").forEach((event)=>event.parentNode.removeChild(event));
    let n = prompt("enter the number of squares per side.");
    drawBoard(n);
}

function drawBoard(size){
    const grid_size = parseInt(size);
    for(let i = 0; i < size*size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${((area/size) - 2)}px`;
        square.style.height =`${((area/size) - 2)}px`;
        square.addEventListener("mouseover", changeColor);
        sketch_area.appendChild(square);
    }
}

function changeColor(event){
    if(event.type==="mouseover" && !mouseDown){return;}
    if(choice==="default_color"){
        event.target.style.backgroundColor = "black";
    }
    else if(choice==="random"){
        const random_color = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
        event.target.style.backgroundColor = random_color;
    }
    else if(choice==="eraser"){
        event.target.style.backgroundColor = "white";    
    }
}

marker.addEventListener("click", () => choice = "default_color");
random.addEventListener("click", () => choice = "random");
eraser.addEventListener("click", () => choice = "eraser");
resize.addEventListener("click", resizeGrid);
container.appendChild(sketch_area);
drawBoard("16");
let choice = "";
let mouseDown = false;
const area = 600;
const container = document.querySelector(".container");
const sketch_area = document.createElement("div");
const resize = document.querySelector(".resize");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const marker = document.querySelector(".marker");
const random = document.querySelector(".random");

sketch_area.classList.add("sketch_area");
sketch_area.style.width = `${area}px`;
sketch_area.style.height = `${area}px`;
sketch_area.addEventListener("mousedown", () => {mouseDown = true;});
sketch_area.addEventListener("mouseup", () => {mouseDown = false;});
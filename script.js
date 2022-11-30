//start size TODO Remove after getting values from sliders
const gridX = 16;
const gridY = 16;
const gridContainer = document.querySelector("#gridContainer");
//root for css varibles
const root = document.querySelector(":root");
const paintPicker = document.querySelector("#paintColor");


//prevent the dragging grab ? default
gridContainer.addEventListener("mousemove",(e)=>{
  e.preventDefault()
})


//function one line of the grid
function createLine(sizeX, indexY) {
  for (let index = 1; index <= sizeX; index++) {
    let gridPixel = document.createElement("div");
    gridPixel.classList.add("gridPixel");
    gridPixel.setAttribute("id", `y${indexY}x${index}`);
    gridPixel.style.width = `calc(100%/${gridX})`;

    //mousemove for painting and mousedown for singlePixel
    gridPixel.addEventListener("mousemove", paintPixel);
    gridPixel.addEventListener('mousedown',paintPixel)
    gridContainer.appendChild(gridPixel);
  }
}

//create CanvasGrid gridY times of lines
for (let index = 1; index <= gridY; index++) {
  createLine(gridX, index);
}

//
function paintPixel(e) {
  if(e.buttons===1){
  e.target.style.backgroundColor = paintPicker.value;
  e.preventDefault();
  e.stopPropagation()
  console.log(e.buttons)
}
}
/*TODO
add slider for Gridsize
manuel input of Gridsize??
remove double gridlines

//features
eraser
clear
shading 
ligthning
pen pressure?

*/
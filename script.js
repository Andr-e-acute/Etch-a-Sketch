//start size TODO Remove after getting values from sliders

const gridContainer = document.querySelector("#gridContainer");
//root for css variables
const root = document.querySelector(":root");
const paintPicker = document.querySelector("#paintColor");
const gridSizeSlider = document.querySelector('#gridSizeSlider');




gridSizeSlider.addEventListener('change',(e)=>{createGrid(e.target)})

//prevent the dragging grab ? default
gridContainer.addEventListener("mousemove",(e)=>{
  e.preventDefault()
})

createGrid(gridSizeSlider);

function createGrid(size){
  const gridX = size.value;
  const gridY =size.value;

  for (let index = 1; index <= gridY; index++) {
    createLine(gridX, index);
  }

}

//function one line of the grid
function createLine(sizeX, indexY) {
  console.log('createLine')
  for (let index = 1; index <= sizeX; index++) {
    let gridPixel = document.createElement("div");
    gridPixel.classList.add("gridPixel");
    gridPixel.setAttribute("id", `y${indexY}x${index}`);
    gridPixel.style.width = `calc(100%/${sizeX})`;

    //mousemove for painting and mousedown for singlePixel
    gridPixel.addEventListener("mousemove", paintPixel);
    gridPixel.addEventListener('mousedown',paintPixel)
    gridContainer.appendChild(gridPixel);
  }
}

function paintPixel(e) {
  if(e.buttons===1){
  e.target.style.backgroundColor = paintPicker.value;
  e.preventDefault();
  e.stopPropagation()
  console.log(e.buttons)
}
}
//create CanvasGrid gridY times of lines


//
/*TODO
add slider for Gridsize
manuel input of Gridsize??
remove double gridlines

//features
eraser`
clear
shading add Modus 
lighten -modus
pen pressure?

*/
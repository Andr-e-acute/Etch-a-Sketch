//start size TODO Remove after getting values from sliders

let gridContainer = document.querySelector("#gridContainer");
const gridParent = document.querySelector('#canvas')
//root for css variables
const root = document.querySelector(":root");
const paintPicker = document.querySelector("#paintColor");
const gridSizeSlider = document.querySelector('#gridSizeSlider');
const gridSizeX = document.querySelector('#xSize');
const gridSizeY = document.querySelector('#ySize');


gridSizeSlider.addEventListener('change',(e)=>{createGrid(e.target,e.target)})

//prevent the dragging grab ? default
gridContainer.addEventListener("mousemove",(e)=>{
  e.preventDefault()
})



function createGrid(sizeX,sizeY){
  console.log(gridSizeX.value)
 
  gridSizeX.value=sizeX.value
  gridSizeY.value=sizeY.value
  gridContainer.remove();
  gridContainer = gridContainer.cloneNode()
  for (let index = 1; index <= sizeX.value; index++) {
    createRow(sizeY.value, index);
  }
  gridParent.append(gridContainer)

}

//function one Row of the grid
function createRow(sizeY, indexX) {
  
  for (let index = 1; index <= sizeY; index++) {
    let gridPixel = document.createElement("div");
    gridPixel.classList.add("gridPixel");
    gridPixel.setAttribute("id", `y${indexX}x${index}`);
    gridPixel.style.width = `calc(100%/${sizeY})`;

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
createGrid(gridSizeSlider,gridSizeSlider);
//create CanvasGrid gridY times of lines


//
/*TODO

manuel input of Gridsize??
remove double gridlines

//features
eraser`
clear
shading add Modus 
lighten -modus
pen pressure?

*/
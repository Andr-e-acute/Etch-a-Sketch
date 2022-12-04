//start size TODO Remove after getting values from sliders
const MAX_SIZE = 64;
let gridContainer = document.querySelector("#gridContainer");
const gridParent = document.querySelector("#canvas");
//root for css variables
const root = document.querySelector(":root");
const paintPicker = document.querySelector("#paintColor");
const backgroundColor = document.querySelector("#background");
const gridSizeSlider = document.querySelector("#gridSizeSlider");
const gridSizeX = document.querySelector("#xSize");
const gridSizeY = document.querySelector("#ySize");
const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener("click", () =>
  createGrid(gridSizeX.value, gridSizeY.value)
);
backgroundColor.addEventListener("input", (e) => {
  root.style.setProperty(e.target.name, e.target.value);
});
gridSizeSlider.addEventListener("change", (e) => {
  createGrid(e.target.value, e.target.value);
});
gridSizeX.addEventListener("change", (e) => {
  constrainGridSize(e.target.value, gridSizeY.value);
});
gridSizeY.addEventListener("change", (e) =>
  constrainGridSize(gridSizeX.value, e.target.value)
);
//prevent the dragging grab ? default
gridContainer.addEventListener("mousemove", (e) => {
  e.preventDefault();
});
function constrainGridSize(x, y) {
  let xSize = x;
  let ySize = y;
  if (x > MAX_SIZE) {
    xSize = MAX_SIZE;
  }
  if (y > MAX_SIZE) {
    ySize = MAX_SIZE;
  }

  createGrid(xSize, ySize);
}

function createGrid(sizeX, sizeY) {
  gridSizeX.value = sizeX;

  gridSizeY.value = sizeY;
  gridContainer.remove();
  gridContainer = gridContainer.cloneNode();
  gridContainer.style.gridTemplateColumns = `repeat(${sizeX},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${sizeY},1fr)`;

  for (let index = 1; index <= sizeY * sizeX; index++) {
    let gridPixel = document.createElement("div");
    gridPixel.addEventListener("mousemove", paintPixel);
    gridPixel.addEventListener("mousedown", paintPixel);
    gridContainer.appendChild(gridPixel);
  }

  gridParent.append(gridContainer);
}

function paintPixel(e) {
  if (e.buttons === 1) {
    e.target.style.backgroundColor = paintPicker.value;
    e.preventDefault();
    e.stopPropagation();
    console.log(e.buttons);
  }
}
createGrid(gridSizeSlider.value, gridSizeSlider.value);

//
/*TODO
changing the size should only change the size and not delete
for this:
-every row or column should be a neseted in a dif...
-update function must
  -change the style width are the inline calc update ??


remove double gridlines

//features
eraser`
shading add Modus 
lighten -modus
pen pressure?

*/

const gridX = 16;
const gridY = 16;
const gridContainer = document.querySelector("#gridContainer");

//test div for finding the right size

//function one line of the grid
function createLine(sizeX,indexY) {
   
    for (let index = 1; index <= sizeX; index++) {
      let gridPixel = document.createElement("div");
      gridPixel.classList.add("gridPixel");
      
      //TODOcreate Id for coordinates
      gridPixel.setAttribute('id',`y${indexY}x${index}`);
      gridContainer.appendChild(gridPixel);
    }
  }
  
  //create gridY times of lines
  for (let index = 1; index <= gridY; index++){
    console.log(index)
      createLine(gridX,index);
    
  }
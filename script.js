const container = document.querySelector(".container");
const clearButton = document.querySelector(".clearButton");
const changeColor = document.querySelector(".changeColor");
let pickColor = document.querySelector(".pickColor");
let slider = document.querySelector(".slider");
const grid1 = document.createElement("div");

grid1.classList.add("gridSquare");
grid1.style.border = "1px solid black";
grid1.style.height = "45px";
grid1.style.width = "45px";
// assign hexa value from color to pickColor. change background color to this.


function createGrid() {

    for (let i = 0; i < 256; i++) {
        let gridX = grid1.cloneNode(true);
        container.appendChild(gridX);

        gridX.addEventListener("mouseover", function () {
            gridX.style.backgroundColor = pickColor.value;
        });
        clearButton.onclick = function () {
            container.innerHTML = "";
            let number = slider.value;

            for (let i = 0; i < (number* number); i++) {
                const gridY = document.createElement("div");
                gridY.classList.add("gridSquare");
                gridY.style.border = "1px solid black";
                let height = 720 / number;
                let width = 720 / number;
                gridY.style.height = height + "px";
                gridY.style.width = width + "px";
                container.appendChild(gridY);
                
                        gridY.addEventListener("mouseover", function () {
                            gridY.style.backgroundColor = pickColor.value;
                           
                        });
                        
                     
            }
            
        }
        changeColor.onclick = function () {
            container.innerHTML = "";
            let number = slider.value;
            for (let i = 0; i < (number * number); i++) {
                const gridZ = document.createElement("div");
                gridZ.classList.add("gridSquare");
                gridZ.style.border = "1px solid black";
                let height = 720 / number;
                let width = 720 / number;
                gridZ.style.height = height + "px";
                gridZ.style.width = width + "px";
                container.appendChild(gridZ);

                gridZ.addEventListener("mouseover", function () {
                    const pickedColor = Math.floor(Math.random() * 16777215).toString(16);

                gridZ.style.backgroundColor = "#" + pickedColor;
                });
                
            }   

            };
            
                
            }
        }
    

        //popup for number

        createGrid();
        // clear function - clear container. recreate everything





        // if clear clicked, delete old grid, create new grid
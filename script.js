for (let i = 0; i < 36; i++) {
    var gridBox = document.createElement("div");
    gridBox.className = "grid-box";
    gridBox.id = "grid-box"+i;
    gridBox.style.width = "80px";
    gridBox.style.height = "80px";
    gridBox.addEventListener("mouseover", changeColor);
    document.getElementById("grid-container").appendChild(gridBox); 
};


function changeColor() {
    var box = document.getElementById(this.id);
    box.style.backgroundColor = "black";
}

function changeGrid() {
    var size = prompt("Enter the size of grid you want:");
    var boxSize = 500/(Math.sqrt(size));
    document.getElementById("grid-container").innerHTML = '';
    for (let i = 0; i < size; i++) {
        var gridBox = document.createElement("div");
        gridBox.className = "grid-box";
        gridBox.id = "grid-box"+i;
        gridBox.style.width = boxSize+"px";
        gridBox.style.height = boxSize+"px";
        gridBox.addEventListener("mouseover", changeColor);
        document.getElementById("grid-container").appendChild(gridBox); 
    };
    
}
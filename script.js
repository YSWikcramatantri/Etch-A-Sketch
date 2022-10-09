for (let i = 0; i < 36; i++) {
    var gridBox = document.createElement("div");
    gridBox.className = "grid-box";
    gridBox.id = "grid-box"+i;
    gridBox.style.width = "100px";
    gridBox.style.height = "100px";
    gridBox.addEventListener("mouseover", changeColor);
    document.getElementById("grid-container").appendChild(gridBox); 
};


function changeColor() {
    var box = document.getElementById(this.id);
    box.style.backgroundColor = "black";
}
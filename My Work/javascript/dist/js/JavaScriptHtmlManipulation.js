let size = 16;

function sizePlus(){
    size += 2;
    sizeProcess(size);
}

function sizeMinus(){
    size -= 2;
    sizeProcess(size);
    
}

function sizeProcess(value){
    document.getElementById("text").style.fontSize = value + "px";
}

// var white = 0;
// if(true){
//     alert(red);
//     red = 3;
//     alert(red)
//     let red = 10;
//     alert(red)
//     white = 7;
// }
// alert(red);
// alert(white)

let red = 0, green = 0, blue = 0;

function colorRed(){
    red += 50;
    document.getElementById("color").style.color = `rgb(${red},${green},${blue})`;
}
function colorGreen(){
    green += 50;
    document.getElementById("color").style.color = `rgb(${red},${green},${blue})`;
}
function colorBlue(){
    blue += 50;
    document.getElementById("color").style.color = `rgb(${red},${green},${blue})`;
}

function changeColor(){
    var red = document.getElementById("IDrangeRed").value;
    var green = document.getElementById("IDrangeGreen").value;
    var blue = document.getElementById("IDrangeBlue").value;
    document.getElementById("IDbox").style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function displayRange(){
    document.getElementById("RedLabel").innerText = "Kırmızı: " + document.getElementById("IDrangeRed").value;
    document.getElementById("GreenLabel").innerText = "Yeşil: " + document.getElementById("IDrangeGreen").value;
    document.getElementById("BlueLabel").innerText = "Mavi: " + document.getElementById("IDrangeBlue").value;
}
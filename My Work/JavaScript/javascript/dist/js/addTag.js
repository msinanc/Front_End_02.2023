function addComponent(){
    

    var component = document.getElementById("component").value;

    switch(component){
        case "Button":
            result = addButton();
            break;
        case "Div":
            result = addDiv();
            break;
    }
    document.getElementById("content").innerHTML += result;


}

function addButton(){

    var buttonColor = document.getElementById("Color").value;
    var textColor = document.getElementById("textColor").value;
    var buttonSize = document.getElementById("btnSize").value;
    var buttonText = document.getElementById("btnText").value;
    var addClass = document.getElementById("addClass").value;

    var button = `<button class="btn btn-${buttonColor} ${buttonSize} text-${textColor} ${addClass}" >${buttonText}</button>`;

    return button;
    
}

function addDiv(){
    var bgColor = document.getElementById("Color").value;
    var textColor = document.getElementById("textColor").value;
    var Text = document.getElementById("btnText").value;
    var addClass = document.getElementById("addClass").value;

    var button = `<div class=" bg-${bgColor} text-${textColor} ${addClass}" >${Text}</div>`;
    return button;
}




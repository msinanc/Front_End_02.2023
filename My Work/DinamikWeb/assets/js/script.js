var idList = ["content"];

var listItem = document.createElement("option");
var itemText = document.createTextNode(idList[0]);
listItem.appendChild(itemText);

document.getElementById("componentId").appendChild(listItem);


function addComponent(){
    var listItem = document.createElement("option");
    var itemText = document.createTextNode(document.getElementById("addId").value);
    listItem.appendChild(itemText);
    
    var componentList = document.getElementById("componentId").appendChild(listItem);
    idList.push(document.getElementById("addId").value);
    
    let component = document.getElementById("component").value;
    let componentId = document.getElementById("componentId").value;

    switch(component){
        case "Div":
            document.getElementById(componentId).append(addDiv());
            break;
            case "p":
            document.getElementById(componentId).append(addParagraph());    
            break;
    }
}

function addDiv(){
    var bgColor = document.getElementById("Color").value;
    var textColor = document.getElementById("textColor").value;
    var Text = document.getElementById("btnText").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;
    
    //var div = `<div id="${addId}" class=" bg-${bgColor} text-${textColor} ${addClass}" >${Text}</div>`;
    
    var div = document.createElement("div");
    div.setAttribute("id", addId);
    div.setAttribute("class", `${addClass} text-${textColor} bg-${bgColor}`);
    div.textContent = Text;
    
    return div;
}

function addParagraph(){
    var bgColor = document.getElementById("Color").value;
    var textColor = document.getElementById("textColor").value;
    var Text = document.getElementById("btnText").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;
    
    //var div = `<div id="${addId}" class=" bg-${bgColor} text-${textColor} ${addClass}" >${Text}</div>`;
    
    var par = document.createElement("p");
    par.setAttribute("id", addId);
    par.setAttribute("class", `${addClass} text-${textColor} bg-${bgColor}`);
    par.textContent = Text;
    
    return par;
}




////////////////////     COMPONENT SELECTOR     //////////////////////////
function select(){
    var component = document.getElementById("component").value;
    
    
    switch(component){
        case "Header":
            selectHeaderShow();
            selectButtonHide();
            break;
        case "Button":
            selectButtonShow();
            selectHeaderHide();
        default:
            selectButtonHide();
            selectHeaderHide();
    }
}

function selectButtonHide(){        //Hide Button
    document.getElementById("btnSize").style.display = "none";
}

function selectButtonShow(){        //Show Button
    document.getElementById("btnSize").style.display = "block";
}

function selectHeaderHide(){        //Hide Header
    document.getElementById("headerSizeDiv").style.display = "none";
}

function selectHeaderShow(){        //Show Header
    document.getElementById("headerSizeDiv").style.display = "block";
}


function addHeader(){
    size = headerSize();
    
    var bgColor = document.getElementById("Color").value;
    var textColor = document.getElementById("textColor").value;
    var Text = document.getElementById("btnText").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;
    
    //var div = `<div id="${addId}" class=" bg-${bgColor} text-${textColor} ${addClass}" >${Text}</div>`;
    
    var head = document.createElement(`h${size}`);
    head.setAttribute("id", addId);
    head.setAttribute("class", `${addClass} text-${textColor} bg-${bgColor}`);
    head.textContent = Text;
    
    return head;
}

function headerSize(){
    var size = document.getElementById("headerSize").value;
    //Changing the label explanation depending on the input:range tag for header 1-6
    document.getElementById("headerSizeLabel").innerText = `Header Size: ${size}`;

    return size;
}


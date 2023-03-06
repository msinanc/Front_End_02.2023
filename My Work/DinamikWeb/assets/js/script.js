var idList = ["content"];

var listItem = document.createElement("option");
var itemText = document.createTextNode(idList[0]);
listItem.appendChild(itemText);

document.getElementById("componentId").appendChild(listItem);


function addComponent() {
    var listItem = document.createElement("option");
    var itemText = document.createTextNode(document.getElementById("addId").value);
    listItem.appendChild(itemText);

    var componentList = document.getElementById("componentId").appendChild(listItem);
    idList.push(document.getElementById("addId").value);

    let component = document.getElementById("component").value;
    let componentId = document.getElementById("componentId").value;

    switch (component) {
        case "Div":
            document.getElementById(componentId).append(addDiv());
            break;
        case "p":
            document.getElementById(componentId).append(addParagraph());
            break;
        case "Header":
            document.getElementById(componentId).append(addHeader());
            break;
        case "Link":
            document.getElementById(componentId).append(addLink());
            break;
        case "Image":
            document.getElementById(componentId).append(addImage());
            break;
    }
}


function addDiv() {
    
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

function addParagraph() {
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

function addHeader() {
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

function addLink() {
    var bgColor = document.getElementById("Color").value;
    var textColor = document.getElementById("textColor").value;
    var Text = document.getElementById("btnText").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;

    //var div = `<div id="${addId}" class=" bg-${bgColor} text-${textColor} ${addClass}" >${Text}</div>`;

    var link = document.createElement("a");
    link.setAttribute("id", addId);
    link.setAttribute("class", `${addClass} text-${textColor} bg-${bgColor}`);
    link.textContent = Text;

    return link;
}

function addImage() {
    var bgColor = document.getElementById("Color").value;
    var textColor = document.getElementById("textColor").value;
    var Text = document.getElementById("btnText").value;
    var addClass = document.getElementById("addClass").value;
    var addId = document.getElementById("addId").value;
    var addImageLink = document.getElementById("imageLinkLabel").value;

    //var div = `<div id="${addId}" class=" bg-${bgColor} text-${textColor} ${addClass}" >${Text}</div>`;

    var img = document.createElement("img");
    img.setAttribute("id", addId);
    img.setAttribute("src", addImageLink);
    img.setAttribute("class", `${addClass} text-${textColor} bg-${bgColor}`);
    img.textContent = Text;

    return img;
}


////////////////////     COMPONENT SELECTOR     //////////////////////////
function select() {
    var component = document.getElementById("component").value;


    switch (component) {
        case "Header":
            selectHeaderShow();
            break;
        case "Button":
            selectButtonShow();
        case "Image":
            selectImageShow();
        default:
            selectButtonHide();
            selectHeaderHide();
            selectImageHide();

    }
}

function selectButtonHide() {        //Hide Button
    document.getElementById("btnSize").style.display = "none";
}

function selectButtonShow() {        //Show Button
    document.getElementById("btnSize").style.display = "block";
}

function selectHeaderHide() {        //Hide Header
    document.getElementById("headerSizeDiv").style.display = "none";
}

function selectHeaderShow() {        //Show Header
    document.getElementById("headerSizeDiv").style.display = "block";
}

function selectImageHide() {        //Hide Image Link Text
    document.getElementById("imageLink").style.display = "none";
}

function selectImageShow() {        //Show Image Link Text
    document.getElementById("imageLink").style.display = "block";
}


function headerSize() {
    var size = document.getElementById("headerSize").value;
    //Changing the label explanation depending on the input:range tag for header 1-6
    document.getElementById("headerSizeLabel").innerText = `Header Size: ${size}`;

    return size;
}




//         KARAR YAPILARI           //
//////////////////////////////////////
//  if -> if else -> else 

////////     SWITCH VEYA IF KULLANARAK İKİ INPUT İLE DÖRT İŞLEM      //////////////
function hesapla(){
    var sayi1 = Number(document.getElementById("sayi1").value);
    var sayi2 = Number(document.getElementById("sayi2").value);
    
    var oprt = document.getElementById("islem").value;

    // if(oprt == '+'){
    //     sonuc = sayi1 + sayi2;
    //     document.getElementById("sonuc").innerText = "Sonuç = " + sonuc;
    // }
    // else if(oprt == '-'){
    //     sonuc = sayi1 - sayi2;
    //     document.getElementById("sonuc").innerText = "Sonuç = " + sonuc;
    // }
    // else if(oprt == '*'){
    //     sonuc = sayi1 * sayi2;
    //     document.getElementById("sonuc").innerText = "Sonuç = " + sonuc;
    // }
    // else if(oprt == '/'){
    //     sonuc = sayi1 / sayi2;
    //     document.getElementById("sonuc").innerText = "Sonuç = " + sonuc;
    // }
    // else{
    //     document.getElementById("sonuc").innerText = "Seçilen Operatör Tanımsız";
    // }

    switch(oprt){
        case "+":
            sonuc = sayi1 + sayi2;
            document.getElementById("sonuc").innerText = "Sonuç = " + sonuc;
            break;
        case "*":
            sonuc = sayi1 * sayi2;
            document.getElementById("sonuc").innerText = "Sonuç = " + sonuc;
            break;
        case "-":
            sonuc = sayi1 - sayi2;
            document.getElementById("sonuc").innerText = "Sonuç = " + sonuc;
            break;
        case "/":
            sonuc = sayi1 / sayi2;
            document.getElementById("sonuc").innerText = "Sonuç = " + sonuc;
            break;
        default:
            document.getElementById("sonuc").innerText = "Tanımsız Operator";
    }
    
}

///////////      İKİ INPUT İLE ORTALAMA HESAPLA VE DEĞERLE       ////////////
function notOrtalama(){
    var vize = Number(document.getElementById("vize").value);
    var final = Number(document.getElementById("final").value);

    var ortalama;

    ortalama = vize * 0.4 + final * 0.6;

    // Not < 45 - Fail
    // 45 - 65  - Pass
    // 65 - 85  - Success
    // Not > 85 - Brilliant

    var sonuc = document.getElementById("notSonuc");
    if(ortalama < 45){
        sonuc = "Fail. Mark: " + ortalama;
        document.getElementById("notSonuc").style.color = "red";
    }
    else if(ortalama < 65){    
        // sonuc = document.getElementById("notSonuc");
        sonuc.style.color = "orange";
        sonuc = "Pass. Mark: " + ortalama;
    }
    else if(ortalama < 85){
        // sonuc = document.getElementById("notSonuc");
        sonuc.classList.add("text-primary");
        sonuc = "Success. Mark: " + ortalama;
    }
    else if(ortalama <= 100){
        // sonuc = document.getElementById("notSonuc");
        sonuc.classList.add("text-success");
        sonuc = '<h5 style = "color: green;">Brilliant.</h5> Mark: ' + ortalama;
    }
    document.getElementById("notSonuc").innerHTML = sonuc;


}

//         DÖNGÜ YAPILARI               //
//////////////////////////////////////////
//  for - foreach - while - do while -> //
//                                      //
// var deger;                           //
// for(var i = 0; i < 10; i++){         //
//     deger += `JavaScript, ${i}`;     // 
// }                                    //
// alert(deger);                        //
//////////////////////////////////////////


////////////          INPUT İLE FAKTORİYEL HESAPLA       //////////////
function fHesaplama(){
    var deger = Number(document.getElementById("value").value);

    var sonuc = 1;
    for (let index = 1; index <= deger; index++) {
        sonuc *= index;
    }
    document.getElementById("fakSonuc").innerText= sonuc;
}

function whileloop(){
    var i = 0;
    var deger = "";

    while(i < 10){

        deger += "Merhaba\n"
        document.getElementById("whSonuc").innerText = deger;
        i++;
    }
}

/*
    while(true){

    }
    // Üstteki while ile alttaki for aynı işi yapar. //
    for(;true;){}
*/



////////////   BELLİ BİR SINIRA KADAR TEK SAYILARI YAKALA  //////////////
function teksayilar(){
    var sayi = document.getElementById("tsValue").value;
    var deger = "";
    for(var i = 0; i <= sayi; i++){
        if(i % 2 == 0)
            continue;
        if(i == document.getElementById("tsCap").value)
            break;

        deger += i + " ";
        
        document.getElementById("tsSonuc").innerText = deger;
    }
}


////////////          DEĞİŞKENE BAĞLI WHILE KULLANIMI       //////////////
function whileExample(){
    var sayi1 = 5;
    var sayi2 = 15;
    var deger = "";

    /*//////////////////
    ------First Version------
    var sonuc = sayi1 < sayi2;  //true veya false döner.
    
    while(sonuc){
        deger += " Tuba";
        sayi1++;                //Bir noktadan sonra sonuc = false olur ve döngü biter.
        console.log(deger);
        sonuc = sayi1 < sayi2;
    } 
    *///////////////////////


    
    var sonuc = sayi1 < sayi2;  //true veya false döner.
    
    while(sonuc(sayi1, sayi2)){
        deger += " Tuba";
        sayi1++;                //Bir noktadan sonra sonuc = false olur ve döngü biter.
        console.log(deger);
    }
}
// WhileExample() içinde while kontrolü için yardımcı fonksiyon
function sonuc(value1, value2){
    var result = value1 < value2;
    return result;
}


////////////          VÜCUT KİTLE ENDEKSİ HESABI       //////////////
function vucutKitle(){
    var boy = Number(document.getElementById("boyID").value) / 100;
    var kilo = Number(document.getElementById("kiloID").value);
    
    var endeks = kilo / (boy * boy);
    var sonuc = "";

    var gender = document.getElementById("gender").value;
    switch(gender){
        case "kadin":
            endeks *= 0.9;
            break;
        case "erkek":
            endeks *= 1;
            break;
    }

    if(endeks < 18.5)
        sonuc = `${endeks} - Çok Zayıf`;
    else if(endeks < 24.9)
        sonuc = `${endeks} - Normal`;
    else if(endeks < 29.9)
        sonuc = `${endeks} - Fazla Kilolu`;
    else if(endeks < 40)
        sonuc = `${endeks} - Obez`;
    else
        sonuc = `${endeks} - Aşırı Obez`;


    document.getElementById("bkSonuc").innerText = sonuc;
}

////////////          EKRANA EN AZ BİR KEZ OUTPUT VER       //////////////
function doWhileExample(){
    
    var i = 0;
    var deger = "";
    
    do{
        deger += " Erhan";
        i++;
        
    }while(i < document.getElementById("count").value)
    
    alert(deger);
}
//// ön kontrol yapılan işlemlerde sık kullanılır.


////////////    PROMPT İLE ALINAN İKİ INPUT DEĞERİNİN TOPLAMI    //////////////
function promtToplama(){
    var sayi1 = prompt("Sayı 1 Giriniz");
    var sayi2 = prompt("Sayı 2 Giriniz");

    var sonuc = Number(sayi1) + Number(sayi2);

    alert(sonuc);
}


function arrayExample(){
    
    var dersler = new Array('Matematik', 'Türkçe', 'Fizik', 'Kimya');

    alert(dersler);
    alert(dersler.length);
    dersler.push("Teknik Resim");   // String'i sona ekler.
    dersler.push(25);               // 25'i integer olarak sona ekler.
    dersler.pop                     // Son elemanı siler.
    dersler.unshift(dersler[2])     // Listenin başına dersler[2]'yi ekler.
    dersler.splice(2,1);            // (a, b) için a'dan başlayıp b tane kesip atar. 
    dersler.splice(3,0,"Fatih");    // "Fatih" değerini index 3'e ekler.

}


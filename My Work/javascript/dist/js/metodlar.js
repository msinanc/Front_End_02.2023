///////////////// METODLAR ////////////////
//
//      1 - Değer almayan değer döndürmeyen
//      2 - Değer alan değer döndürmeyen 
//      3 - Değer almayan değer döndüren
//      4 - Değer alan değer döndüren
//
//
//
//

function metod1(){  // -1- //
    alert("Metod 1");
    var deger = prompt("İsim Giriniz: ");
    metod2(deger);
}

function metod2(item){  // -2- //
    alert("Gelen değer: " + item);
}

function metod3(){      // -3- //
    var value = 5;
    
    return value;
}

function metod3Example(){
    var deger = metod3();

    var result = deger * 3;

    alert(result);
}

function metod4(radius){
    const PI = 3.1415;

    var result = PI * (radius ** 2);

    return result;
}

function metod4Example(){
    var deger = prompt("Yarı Çap: ");

    alert(metod4(deger));
}

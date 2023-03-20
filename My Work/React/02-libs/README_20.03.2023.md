# softITo React 

## 20.03.2023 - 

### MUI

    npm install @mui/material @emotion/react @emotion/styled

-   codesandbox.io
    
-   Typography
    Text

-   Dialog (Form Control)
-   Card

-   Table

### Arayüz

-   Arayüz Giydirmenin iki yöntemi vardır.
    
    -   Birincisi 3rd party app ile normalde hazır olan bir html üzerine yeni arayüz giydirmek.

    -   Bazen de html'in içine kod yazılabilir.

### React-Developer Tools Chrome Uzantısı

-   Dev.Tools -> Element -> Computed:
        Yapılan otomatik değişiklikleri gösterir. Fonst-size vs.

### Demo API Link

-   godoro.com/front-end/ProductList.php
-   godoro.com/front-end/ProductGet.php?id=301

-   Search for: "Public API"

### Axios

    axios
        .get(url)
        then( product => {
            console.log(product)
        })

-    Yukarıdaki kodda then asenkron çalışır. url'i alıp bekler ve then den sonrasını product gelince yapar.

    async myFunction(){
        const product = await axios.get(url)
        ..
    }

    myFunc()

-   İçerideki await li yapı bekleyerek sistemi kilitler. Bu yapıyı asenkron bir fonksiyonun içine koyarsak içerideki product gelene kadar fonksiyon da bekler.

### ödev:

-   MUI ile table için sorting yapmayı dene.
-   POST, GET öğren, axios ve fetch ile dene, dummy API'lerden veri çekebilirsin.

#### İzle || Öğren

-   I am expert serileri. (Garip deneyimler, işler)
-   Observable, Behaviour yapıları.

-   ngrx, redux'ın yaptığını yapıyor.
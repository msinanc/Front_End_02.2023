# softITo React 

## 21.03.2023 - 

### Redux

-   To use React Redux with your React app, install it as a dependency:

    npm install react-redux

-   Verileri arkada bir state ile takip edip tğm veriyle işlem yapmak.
    Büyük bir veri var, güncelleme yapıp son durumunu gösteriyoruz.
    -   State'in biraz daha gelişmişi.

- Thunk redux daha profesyonel.

#### Increment - Decrement

-   Holder Reducer.js
    initial değer atandı, serverdan gelmesine gerek yok.

-   holderReducer (), state'te yapacağın değişikliğini yap son halini bana ver. 
    -   Action ile de ne yapacağını söylüyoruz. 
    -   Burada ekran ile arkada dönen işleri ayırıyoruz.
    -   Burada yazdığını orada almak veya orada olan veriyi buraya yazmak için servis kurmak zorundayız.

-   Redux da isimler global, o yüzden isim çarpışması olmasın diye quantity/increment şeklinde veriyoruz.

-   Bana biri quantity/increment yollarsa yeni state'i döndür.
    -   Bir işlem değişince bütün state'i yolluyor.

-   Context API gibi, biraz daha fazla 

-    HolderComponent içerisindeki useSelector() içinden seçmesini sağlar. Tüm state'i veriyoruz, içinden quantity seçtiriyoruz ve quantity olarak geri alıyoruz.

-   Sistemde tek reducer kullanıyorsan, sepet çok dolu olur. Bütün veriyi o reducer da tutmak gerekir.

-   Sepeti yapan, user yapan, envanter yapan kendi state'ini takip eder. Ayrı ayrı modullerde kullanılır.
    -   Envanter, sepet, authantication (klasör yap çalışsın), mikro service gibi her veri için back-end'e ayrı ayrı bağlanıp, ayrı ayrı klasörler oluşturulmalı. 
    -   En dışta site diye bir modül yap
        -   İletişim
        -   Şirketten haberler
        -   Vizyon - misyon
    gibi site management modülü de olsun.

-   HolderComponent.js içindeki dispather gelen kodu anında gönderir.

    <button onClick={() => dispatch(...)} > </button>

Burada onclick bir fonksiyon çağırır, o da dispatch i çağırır. Yani dispatch i fonksiyon gibi kullanırız.

    <button onClick={() => dispatch({type:'quantity/increment'})} > </button>

Önce bir taksi durağının telefonunu alalım, lazım oldukça kullanırız gibi alıyoruz. Taksi durağı taksleri dispatch ediyor gibi düşün.

    <button onClick={() => dispatch({type:'quantity/increment'})} > Artır </button><br/>
    <button onClick={decrementQuantity} > Eksilt </button>

Alttaki gibi kısaltabildiğimiz kadar kısaltak daha mantıklı. HTML yazan için kolaylık.

-   Buradaki increment, decrement olayını sayfadan alsın istiyorsak, **payload** kullanırız. Alttaki kodda *delta* diye bir payload kullanılıyor. 

    quantity : state.quantity + action.delta

### React Useful Tools and Applications

-   Formik
-   Yup
-   Regular Expressions (öğren)
-   Higher order component: İçine bileşen konan bileşen. İçerideki bileşen property alarak neyi göstereceğini seçiyor.
-   Portal, bir componenti portalde göstermeye yarar.
-   React Lifecycle
-   memo: Senin için değişkenin değerini saklıyor.
-   Error: Error boundary ile error component hazırlanıp, her şeyin üstüne yerleştirilirse hata kontrolü yapar.

### React Kütüphaneleri

-   Authantication
    -   servera/API'ye bağlan
    -   username, password gönder
    -   gelen response token ile bağlandın ya da bağlanamadın onu gösterir.

    -   Sepete bir şey eklerken bu ayrımı yapmak için bir şekilde token'ı oraya bağlaman lazım.
    -   Her isteğin yanında ilgili token'ı yollaman gerekiyor.
    -   HTTP içinde header iç, gövde dışı temsil eder. Bu ismi authentication olan token'ı başına 1 vererek http header'ına yazman gerekir. 

    -   Authentication Token JWT ekran resmine bak, token yapısı şema ile gösterildi.


### Class Component

-   advanced/SelectComponent.js bir class component örneği. Temel hali alttaki gibidir.

    import React from "react";

    export default class SelectComponent extends React.Component{

        constructor(props){
            super(props);
        }

        render() {
            return (
                <>
                    <h1>Seçim</h1>
                </>
            )
        }
    }

-   **Combobox**

    this.products = [
            
        ]
    
Bu şekilde class'ımıza field ekliyoruz.



### İzle || Öğren

-   Map, filter, reducer JavaScript konularını anla.
    https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/

-   HTML'i olabildiğince ferah tut.
-   Regular Expressions (öğren)
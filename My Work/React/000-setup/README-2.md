# softITo React 

## 15.03.2023

    - Bir component sınıf olabilir, fonksiyon olabilir

    - event.target.value içindeki target denilen şey input bileşeninin kendisi, value için de o değişkeni alıyoruz.

    - React için context diye aratıp bul, çok izlenenler iyi değil. Context'i herkes anlatmıyor.

### ObjectComponent.js

#### Object Literal  // initialProduct nesnenin ilk hali.
    
    -   const initialProduct = {
            id:0,
            name:'Adsız',
            price:100.0
        }

#### input içerisinde || OR hilesi
    
    -   Ad: <input type="text" name="name" value={product.name || ''}/><br/>
        product.name eğer null değer döndürürse hata verdiği için bu şekilde bir OR yapısı kullanılır.

#### Class Destruction: Her değişken için 50 kere yazmamak için class destruction diye bir şey icat edilmiş.
    
    -   const nameChanged = (event) => {
        event.preventDefault();
            setProduct ({
                id: product.id, 
                name: event.target.value, 
                price: product.price
            });
        }

    yerine 

    -   const priceChanged = (event) => {
            event.preventDefault();
            setProduct ({
                ...product,
                price: event.target.value
            });
        }

    kullanılır.

#### event.preventDefault();
    
    -   JavaScript'e arka planda dönen işlemleri durdur, başka bir şey yapma demek için kullanılır.


#### Props'un bir Component ve map ile kullanımı
    - MapItemComponent oluştur. 
    - Dışarıdan property al. props: {product} şeklinde al.
    - Sonra div içinde 
        - product.id, product.name, product.price göster.
    -----------------------------------------
    - MapContainerComponent oluştur.
    products=[...]

    map ... p okuması yap
        <MapItem products=(p)/>

        - Kodun çalışamayan hali için;
        src/form/MapItemComponent.js 
        src/form/MapContainerComponent.js 

#### Objenin keylerinin alıp bir map haline getiren kod
    - {Object.keys(errors).map(key => 
        <li></li>
        )}

#### Fonksiyonu çağırmak ve uyandırmak farklı
    - onSubmit={save} bu fonksiyonu uyandırır ama çalıştırmaz.

    - onSubmit={save()} bu fonksiyonu çalıştırmaya çalışır.
 
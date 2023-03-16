# softITo React 

## 16.03.2023 - Libraries

### Context

-   Buradaki ilk quantity key, ikincisi value gibi çalışıyor. 
    <DaughterComponent quantity={quantity}/>

#####

-   Asla kodun içine hard coded değer koyma, 3-5 vs. gibi

#### useContext - DaughterComponent.js & GrandmaComponent.js

-   const price = useContext(PriceContext); 

    Bunu kullanırsan alttakini kullanmana gerek yok.

    <PriceContext.Consumer>
                {value => <strong> Değer Eder : {value}</strong> }
    </PriceContext.Consumer>

### Login validation

-   Olumlu veya Olumsuz yerine farklı component koy. Birinde siteye girsin, diğeri giriş yapınız yazsın gibi olabilir örnek.

    export default function SituationInside(){
        const condition = true;
        const getConditional = () => {
            if (condition){
                return <div>Olumlu</div>
            }else{
                return <div>Olumsuz</div>
            }
        }

        return (
            <div>
                <h1>İçerisi</h1>    
                {getConditional()}
            </div>
        )
    }

    -   condition'ı state haine getir
    iki düğme yap, birine onClick için situation true yap, diğerini false yap.

    -   onChange kısmındaki fonksiyon;

        const conditionChanged= (event) => {
            // setCondition(!condition);
            setCondition(event.target.checked);
        } 

    -   toggle; true ise false, false ise true yapar.
        -   setCondition(!condition); şeklinde kullanımı bir yöntem.

        -   setCondition(event.target.checked); diğer kullanımı event ile ve bu daha sağlıklı.

        -   Eğer return'ün içindeysen ternary ile kullanılabilir bu mantık. Veya short-circuit yapıp toogle mantığı yerleştirilebilir.

## ÖDEV:
-   e-ticaret sitesi componentlara böl ve dosyaları ona göre tasarla.
    Header olsun, menü olsun, ürünler olsun vs.
    Dışı ayrı component, ürünler ayrı component.

## ÖDEV-2: Context ve Condition
-   Tıklanınca state i değiştiren Checkbox'lı (dış bileşen)'i içteki bileşene aktaran ve içteki bileşende iki ayrı içeriğin göründüğü bir   sistem.

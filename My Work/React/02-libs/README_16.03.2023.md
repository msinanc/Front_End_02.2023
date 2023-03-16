# softITo React 

## 16.03.2023 - Libraries

### Context

-   Buradaki ilk quantity key, ikincisi value gibi çalışıyor. 
    <DaughterComponent quantity={quantity}/>

#####

-   Asla kodun içine hard coded değer koyma, 3-5 vs. gibi

#### useContext - DaughterComponent.js & GrandmaComponent.js

-       const price = useContext(PriceContext); 

    Bunu kullanırsan alttakini kullanmana gerek yok.

        <PriceContext.Consumer>
                {value => <strong> Değer Eder : {value}</strong> }
        </PriceContext.Consumer>

### Login validation

Olumlu veya Olumsuz yerine farklı component koy. Birinde siteye girsin, diğeri giriş yapınız yazsın gibi olabilir örnek.

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

### Routing

src altındaki 
    -   [application] genel konular için
    -   [module] daha özel şeyler için


    <BrowserRouter>
-   Browser ile ilgili ayarları yapıyor. Browser'a router becerisi kazandırıyor. Link olunca server a gitmiyor. Aslında browser'ın router beceerisini alıyor. 

    <Route path="/" element={<ApplicationLayout/>} >
-   ApplicationLayout'tan al.

    <Outlet/>
-   Bunun altındaki kısımlara bağlan.

    <Route path="/" element={<ApplicationLayout/>} >
        <Route index element={<NavigationIndex/>}/>
-   Burada path verilmezse, koda benim bir üstümdeki path ne ise onu ver demiş oluruz. 
    Yani;
    İçteki <Route> için path="/" default oalrak gelir.

    -   En üstteki "/" bu işaret de bunun kök olduğunu tanımlar.

-   Bir tane bileşen yap bütün route ları tanımla, hepsi ApplicationRoutes içinde çalışıyor, bunu App.js içine at.

    -   Aslında bileşen değil ama öyle gibi çalışıyor. 

    -   BrowserRouter html href öldü, beni bul benden navigatasyonunu bul.
        -   Bunu tanımladıktan sonra başka tanımlamalar yapılıyor.

-   target/:id
    -   Bu yapı çoğunlukla : dan sonra parametre gelecek anlamına gelir.

    const { id } = useParams();
    -   useParams() üzerinden birden fazla parametre geldiği için {id} şeklinde kullanılır.

-   Routing turizm şirketi gibi rota belirler, sonrasında navigate, useNavigate gibi hook lar ile navigasyon yapılır ve gitmesi gereken yerlere gönderilir.

### MUI

-   Sitedeki tüm bileşenleri bil.

## ÖDEV:
-   e-ticaret sitesi componentlara böl ve dosyaları ona göre tasarla.
    Header olsun, menü olsun, ürünler olsun vs.
    Dışı ayrı component, ürünler ayrı component.

    -   Siteyi navigasyonları kullanarak yap. Geri döndür.

## ÖDEV-2: Context ve Condition
-   Tıklanınca state i değiştiren Checkbox'lı (dış bileşen)'i içteki bileşene aktaran ve içteki bileşende iki ayrı içeriğin göründüğü bir   sistem. 
- Düğme dışarıda olacak, SituationOutside ve SituationInside gibi iki tane context'i tetikleyecek.

### İnceleme Ödevi
-   MUI component'larını incele.



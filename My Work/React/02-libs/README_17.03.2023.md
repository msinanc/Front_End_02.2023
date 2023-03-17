# softITo React 

## 17.03.2023 - Libraries

### JSON

-   Bütün name'ler tırnak içine alınır.

    {
        "id" : 301,
        "name" : "Cep Telefonu",
        "price" : 2350.0
    }
    -----
    [
        { "id" : 301, "name" : "Cep Telefonu", "price" : 2350.0 },
        { "id" : 302, "name" : "Masaüstü Bilgisayar", "price" : 6545.0 },
        { "id" : 303, "name" : "Dizüstü Bilgisayar", "price" : 9865.0 }
    ]
    -----
    {
        "categoryId" : 701,
        "categoryName" : "Elektronik",
        "products" : [
            { "id" : 301, "name" : "Cep Telefonu", "price" : 2350.0 },
            { "id" : 302, "name" : "Masaüstü Bilgisayar", "price" : 6545.0 },
            { "id" : 303, "name" : "Dizüstü Bilgisayar", "price" : 9865.0 }
        ]
    }
    -----
    { 
        "cardId" : 701,
        "customerName" : "Mahsuni Şerif",
        "address" : [
            { "province" : "İstanbul" },
            { "district" : "Fatih" }
        ],
        "products" : [
            { "id" : 701, "name" : "Cep Telefonu", "price" : 1300.0, "quantity" : 4, "tax" : 18 },
            { "id" : 702, "name" : "Dizüstü Bilgisayar", "price" : 6545.0, "quantity" : 2, "tax" : 1 },
            { "id" : 703, "name" : "Masaüstü Bilgisayar", "price" : 8765.0, "quantity" : 4, "tax" : 8 }
        ]
    }


### Fetch

-   useEffect() sürekli dinliyor ve yeniliyor.
    Ayrıca bir dependency, input istiyor. Onu da şu şekilde kullanıyoruz.

            useEffect(() =>{
                fetch(urlList)
                    .then( data => data.json())
                    .then ( products => {
                        console.log(products);
                    } )
            },[urlList])

    Bunun içinde de fetch veya axios kullanılarak data çekilir.     
        Fetch http, default herhangi bir kabul yapmaz. 
            Kütüphaneye gerek yok, JavaScript'in kendisinde var zaten.
        Axios REST, default olarak JSON alır.
            Kütüphane yüklemek gerekir.

-   products diye içi boş ilk değer alan bir state tanımla.
-   useEffect ile alıp console'a basma, setProducts'a koy.
-   Sonra state'e aldığın datayı map ile ekrana bas. (TableComponent içinde map örneği var.)

-   Tek bir datayı almak için id ile alınabilir.

        const urlLGet = './json/product' + id + '.json';

-   ObjectComponent içinde 

#### Routing

-   Route
    /product -> FetchList
        Application Layout'a products linki ekle.

-   Anasayfaya Link ekle, ürünlere gitsin
    "Ürünler -> /products"
        Application Routes'a products linkini tanımla FetchList'e gitsin.

-   Route /product:id -> FetchGet 

-   NavigationTarget.js içerisindeki gibi useParams() kullanarak 
    
        <Route path="product/:id" element={<FetchGet/>}/>

içindeki :id'yi çağırmış oluruz.

    const { id } = useParams();

ile de gönderilen id ler kullanılır.

-   FetchGet.js içerisinde ortaya çıkan ürünleri göstermeme hatası da

    const urlGet = '/json/product' + id + '.json';

yerine

    const urlGet = './json/product' + id + '.json';

kullandığımız için baştaki . işi bozuyor.

## ÖDEV

-   Ürün var, ürünleri görüyoruz. Altta tıklayınca ürün görünsün.


        /db/employees.json      (veri kaynağı)
            701     Barış Manço     5460
            702     Cem Karaca      6525
            703     Fikret Kızılok  3450

        /employees

        EmployeeList.js
            fetch() - url
            state yap amployee olsun
            fetch()
                setEmployees(employees)
            <>
                employees.map(employee => 
                    id
                    name
                    salary
                    link -> employee/{id}
                )
            </>



        /db/employee701.json    (veri kaynağı)
        /db/employee702.json    (veri kaynağı)
        /db/employee703.json    (veri kaynağı)

        /employee/:id

        EmployeeDetail.js
            id param olarak al
            state employee
            effect (içine fetch koy)
                fetch
                    setEmployee(employee)
            form
                output  id
                input   name
                input   salary
                submit: save (metodunu çağır)


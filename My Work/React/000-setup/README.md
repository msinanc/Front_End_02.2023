# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# softITo React 

## Syntax

    - npx create-react-app my-app
    cd my-app
    npm start

    - App.js aslında jsx yani javascript xml formunda bir kod. Aslında X-HTML (küçük büyük harfe uy vs.)

    - GeneratorComponent için genelde custom bileşen deniyor.

    ÖDEV: üç tane dede, baba, torun iç içe bileşen koyulacak. Üç tane component. 
        - Dede App'in içinde
        - Baba Dedenin içine koyulacak.
        - Çocuk Babanın içine koyulacak.

    - Property
        -App.js içindeki <GeneratorComponent company="Godoro"> direk html attribute'u gibi gönderilir. company diye bir attribute uydurduk bu da bir property aslında. 
            - Bunun içine {value} şeklinde de ekleme yapılabilir ama App.js içinde tanımlı bir değişkeni atarsan böyle olur. Ki çoğu zaman bu değişkeni Component içinden alıyoruz.

        - Diğer tarafta fonksiyon parametresi olarak props yazılıp;
            [export default function GeneratorComponent(props)] şeklinde,
        sonra {props.company} şeklinde çağırılır.

        - JavaScript'teki destruct özelliği kullanılarak;
            export default function GeneratorComponent({company, department})
            şeklinde süslü parantex ile kullanılırsa altta
                {props.company} yerine direkt {company} kullanılabilir.


    - {süslü parantez dünya değiştiriyor}. HTML içine yazılınca JavaScript'e geçer.

    - Componentlerin adaptif olabilmesi için properti kullanılır.
        <GeneratorComponent company="Godoro" department="Education"/><br/>
        <GeneratorComponent company="Fibiler" department="History"/><br/>

    - İf kullanımıda sürekli return içinde html döndürmemek için JavaScript ternary operatörü kullanılır React için.
        -  value <5 ? 3 : 5 bunun yerine;

        -   value < 5
            ?
            3
            :
            5
        
        - şeklinde kullanılır. HTML kodunu farklı satıra yazabilmek için. Burada 3 ve 5 yerine div'li şekilde HTML kodu gelir.

        -   {value > 10 &&
            <h2>Çok büyük</h2>
            }
            - Bu yapı aslında &&(ve) nin özelliğini kullanır. İlk koşul doğruysa diğerini kontrol eder. React da ikinci sırada yazanı direkt ekrana bastığı için kod çalışır.

    - <div> sorun yaratmasın diye frangment kullanılır <> [kodu buraya yaz] </>

    -   Bu yapı içerisindeki key unique olması lazım, genelde id kullanılır ama farketmez.
        <ul>
        <h1>Eşlem</h1>
        {names.map(name =>
            <li key={name}>
                {name}
            </li>    
        )}
        </ul>

    -   style={{ textAlign:'left', fontWeight:'bold'}}
        - React style tag'inde normal css yazmaya izin vermez.
        - İlk süslü parantez JavaScript içine girer ve ikinci süslü parantez obje yaratır. Bu objeyi React alıp css koduna çevirir.
            - İkinci objenin yazım şekli camelCase; normalde text-align olan şey textAlign şeklinde yapılır.

    -   Oluşturulan component içindeki return sadece bir tag kabul ettiği için <div> </div> tagları içine koyulur. 


## MVVM

    - View <------> Model
        - React Angular gibi uygulamalar; View'den modele ve modelden view e direkt dönüştürür. 


## Form -> Eventler -> Stateler anlatılacak.

    - EventComponent içindeki 
        <button onClick={() => alert('İçleniyor')}>Çizgi İçi</button>
            - onClick JavaScript kodu değil, React bu şekilde biliyor; camelCase. onClick, alert fonksiyonunu çağıran bir fonksiyon oluşturuyor.

        <button onClick={handle}>Ok</button><br/>
            - Burada değişken çağırıldığı için parantez vs yok.


    - Arrow fonksiyon bazı dillerde lambda olarak kullanılır. Gövdeyi fonksiyonun header'ından ayırmak için arrow kullanılır. 
        -   Fonksiyon içerisine fonksiyon yazılamadığı için, fonksiyon içerisinde arrow function ile oluşturulan bir değişken fonksiyonu oluşturulur. 
            -   Arrow içine başka arrow da yazılabilir.

        -   onClick={(event) => manage(event)}
            -   Burada olay, tıklanınca (event) i al, onu manage(event)'e gönder biz manage(event)'i manipüle edip sana başka bir şey göndereceğiz diyoruz.

    - State, durum ile veri arasında bir şey. O anda üzerinde çalıştığın veri aslında. 

        - jquery bir click metodu ile kolayca veriyi almak için kullanıldı. 

        - Reactive olabilmesi için bir state oluşturulur ve ekrana bu state gönderilir. Her nerede değişiyorsa değişsin, onu kullanan her yerde senin bileşeninin değerini gösteririm diyor React stateleri.
            - Class tan fonksiyona, fonksiyondan hook diye bir şeye evrildi.

        const [quantity, setQuantity] = useState(10);
        - Buradaki yapı ile 10'u quantity'ye ata, sonra setQuantity dediğin her yerde anında quantity'yi göster.

        ÖDEV: İki sayı olsun, düğmeye basınca toplasın ama useState(). useState içine input'u koy.cache
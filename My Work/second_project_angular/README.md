# SecondProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


### softITo Angular second_project

    - To create a component named "Footer" from terminal run the following;
        - ng g c Footer

    - To create a product named "Product"
        - ng g c Product

    - To create a service named "ProductService"
        - ng g s ProductService

    - Use this command to create app-routing.ts and app.module.ts and also include the app-routing.ts into the app.module.ts
        - ng g m app-routing --flat --module=app

    - app-routing içine path ve ilgili component i tanımla. const routes: Routes altına.

    - Sonra yazdırılacak sayfa `about-us.component.html` içini düzenle. {{title vs. gibi}} 

    - Bu title vs yi tanımladığın kısım da `about-us.component.ts` dosyası içindeki class AboutUsComponent (ki bunu en başta path'e verirken tanımladık)

    - En son header html içine bir linke `routerLink="/AboutUs"` eklediğinde bu ilgili componenti ve içeriğini getirir.

    - Datasource.ts -> https://v2.angular.io/docs/ts/latest/tutorial/toh-pt4.html

    - models altında Basket class ı oluştur, basket.ys başlıklı dosya içinde.
        - Basket classında Id, ProductId, Quantity olsun

    - Basket.DataSource.ts oluştur models altında.
        - import Basket
        - export const BasketList:Basket[] = [];

    - detail.component.html içinde stock u çekmek için #Quantity tanımla, sonr bunu butonda (click)="addBasket(id, Quantity ekle)"  -> id'yi ise product?.Id olarak çek.
        - Normalde basket için ayrıca servis oluşturmak gerekir.

    - Servisten basket listesini çekmek için 

    - Detail.component.ts içinde addBasket(id:any, quantity:any){
        basket = [id,  quantity];
        BasketList.push(this.)
    }



    ---> API <---

    - https://jsonplaceholder.typicode.com

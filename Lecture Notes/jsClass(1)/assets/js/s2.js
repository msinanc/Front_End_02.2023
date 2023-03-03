class Category{
    constructor(CategoryName){
        this.CategoryName=CategoryName;
        this.Products=[];
    }

    addProduct(Product){
        this.Products.push(Product);
    }
}

class Product{
    constructor(Name,Price,Stock){
        this.Name=Name;
        this.Price=Price;
        this.Stock=Stock;
    }
}

const category=new Category("Elektronik");

function addProduct(){
   
    const postForm=document.getElementById("form");
    postForm.addEventListener("submit",(Event)=>{
       Event.preventDefault(); //formu sayfayı yenilemeden kullanımlasını sağlar
    });

    const productName=document.getElementById("Name").value;
    const productPrice=document.getElementById("Price").value;
    const productStock=document.getElementById("Stock").value;

    const product=new Product(productName,productPrice,productStock);    

    category.addProduct(product);
    
    document.getElementById("categoryName").innerText=category.CategoryName;

    let result="";
    let number=0;

    category.Products.forEach((product) => {
        number++;
        result+=`<tr>
                    <td>${number}</td>
                    <td>${product.Name}</td>
                    <td>${product.Price}</td>
                    <td>${product.Stock}</td>
                <tr>`;
    });
    document.getElementById("productList").innerHTML=result;
}
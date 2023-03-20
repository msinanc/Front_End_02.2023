class Category {
    constructor(CategoryName) {
        this.CategoryName = CategoryName;
        this.Products = [];
    }

    addProduct(Product) {
        this.Products.push(Product);
    }
}

class Product {
    constructor(Name, Price, Stock) {
        this.Name = Name;
        this.Price = Price;
        this.Stock = Stock;
    }
}

const elektronik = new Category("Elektronik");




function process() {
    const telefon = new Product("iPhone 14", 45000, 15);
    const bilgisayar = new Product("Macintosh", 42000, 10);
    
    elektronik.addProduct(telefon);
    elektronik.addProduct(bilgisayar);
    
    document.getElementById("categoryName").innerText = elektronik.CategoryName;
    
    let result = "";
    let number = "";
    elektronik.Products.forEach(product => {
        number++;
        result += `<tr>
                        <td>${number}</td>
                        <td>${product.Name}</td>
                        <td>${product.Price}</td>
                        <td>${product.Stock}</td>
                    </tr>
                    `;
    });
    document.getElementById("productList").innerHTML = result;
    document.getElementById("FormDivID").style.display = "block";
}

function pushItem() {
    // const postform = document.getElementById("form").value;
    // postform.addEventListener("submit", Event => {
    //     Event.preventDefault();
    // })
    //          // Ya da html içine onsubmit="return = false";


    let name = document.getElementById("textID").value;
    let price = document.getElementById("priceID").value;
    let stock = document.getElementById("stockID").value;

    const newItem = new Product(name, price, stock);

    elektronik.addProduct(newItem);

    let result = "";

    elektronik.Products.forEach(product => {
        result += `<tr>
                        <td>${product.Name}</td>
                        <td>${product.Price}</td>
                        <td>${product.Stock}</td>
                    </tr>`;
    });

    document.getElementById("productList").innerHTML = result;
}
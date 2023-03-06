class Category {
    constructor(CategoryName) {
        this.CategoryName = CategoryName;
        this.Products = [];
    }

    addProduct(Product) {
        this.Products.push(Product);
    }

    deleteProduct(Product) {
        this.Products = this.Products.filter((product) => product !== Product);
        //   this.Products = this.Products.splice(this.Products[/* index no */], 1);
    }

}

class Product {
    constructor(ProductName, ProductPrice, ProductStock) {
        this.ProductName = ProductName;
        this.ProductPrice = ProductPrice;
        this.ProductStock = ProductStock;
    }
}

const CategoryList = [];

function addCategory() {
    const CategoryName = document.getElementById("CategoryName").value;

    if (!CategoryName) {
        alert("Category Name Cannot Be Empty!");
        return;
    }

    if (CategoryList.some((category) => category.CategoryName == CategoryName)) {
        alert("Category Already Exists");
        return;
    }

    const category = new Category(CategoryName);
    CategoryList.push(category);
    document.getElementById("CategoryName").value = ""; //Kategori seçtikten sonra formu boşaltmak için
    document.getElementById("CategoryName").focus;      //İşlem bittikten sonra imleç orada kalsın diye.

    categoryUpdate();
}

function categoryUpdate() {
    //Updates the list when new categories are added

    const selectCategory = document.getElementById("SelectCategory");

    selectCategory.innerHTML = `<option disabled value="" selected> -- Select Category --</option>`

    CategoryList.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.CategoryName;
        option.innerText = category.CategoryName;

        selectCategory.add(option);
    })


    const CategoryProductList = document.getElementById("ProductList");
    CategoryProductList.innerHTML = "";
    CategoryList.forEach((category) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const thBtn = document.createElement("th");

        const DeleteCategoryButton = document.createElement("button");
        DeleteCategoryButton.innerText = "Delete Category";
        DeleteCategoryButton.className = "btn btn-danger";

        DeleteCategoryButton.addEventListener("click", () => {
            deleteCategory(category.CategoryName);
        });
        th.innerText = category.CategoryName;
        th.colspan = 4;
        tr.appendChild(DeleteCategoryButton);
        tr.appendChild(thBtn);
        CategoryProductList.appendChild(tr);


        var number = 0;

        category.Products.forEach((product) => {
            number ++;

            const ProductTr = document.createElement("tr");
            const NumberTd = document.createElement("td");
            NumberTd.innerText = number;

            const ProductNameTd = document.createElement("td");
            const ProductPriceTd = document.createElement("td");
            const ProductStockTd = document.createElement("td");
            const DeleteProductButtonTd = document.createElement("td");

            ProductNameTd.innerText = product.ProductName;
            ProductPriceTd.innerText = product.ProductPrice;
            ProductStockTd.innerText = product.ProductStock;

            const DeleteProductButton = document.createElement("button");
            DeleteProductButton.innerText = "Delete Product";
            DeleteProductButton.className = "btn btn-warning";

            DeleteProductButton.addEventListener("click", () => {
                deleteProduct(category.CategoryName, product);
            });

            DeleteProductButtonTd.appendChild(DeleteProductButtonTd);

            ProductTr.appendChild(NumberTd);
            ProductTr.appendChild(ProductNameTd);
            ProductTr.appendChild(ProductPriceTd);
            ProductTr.appendChild(ProductStockTd);
            ProductTr.appendChild(DeleteProductButtonTd);

            CategoryProductList.appendChild(ProductTr);
        })
    })
}


// Input'a basınca sayfanın yenilenmesini engeller.
document.getElementById("addCategory").addEventListener("click", (e) => {
    e.preventDefault();
    addCategory();
});

document.getElementById("addProduct").addEventListener("click", (e) => {
    e.preventDefault();
    addCategory();
});

categoryUpdate();

function addProduct() {
    const CategoryName = document.getElementById("selectCategory").value;
    const ProductName = document.getElementById("ProductName").value.trim();
    const ProductPrice = document.getElementById("ProductPrice").value.trim();
    const ProductStock = document.getElementById("ProductStock").value.trim();

    if (CategoryName === "" || ProductName === "" || ProductPrice <= 0 || ProductStock <= 0) {
        alert("Boş Alan Bırakılamaz");
        return;

    }

    const category = CategoryList.find((category) => category.CategoryName == CategoryName);

    const product = new Product(ProductName, ProductPrice, ProductStock);

    category.addProduct(product);
    categoryUpdate();

    ProductName = document.getElementById("ProductName").value = "";
    ProductPrice = document.getElementById("ProductPrice").value = "";
    ProductStock = document.getElementById("ProductStock").value = "";

}

function deleteCategory(CategoryName) {

    CategoryList.splice(CategoryList.findIndex((category) => category.CategoryName === Category), 1);

    categoryUpdate();

}

function deleteProduct(CategoryName, Product) {
    const category = CategoryList.find((category) => category.CategoryName === CategoryName);

    category.deleteProduct(Product);

    categoryUpdate();

}

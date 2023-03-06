class Category {
    constructor(carBrand) {
        this.carBrand = this.carBrand;
        this.Users = [];
        this.Cars = [];
    }

    addUser(User) {
        this.Users.push(User);
    }

    addCar(Car) {
        this.Cars.push(Car);
    }

    deleteProduct(Product) {
        this.Products = this.Products.filter((product) => product !== Product);
        // this.Products=this.Products.splice(this.Products[1],1);
    }
}

class User {
    constructor(UserID, UserNameSurname, UserAge, UserGender, UserDriverLicense) {
        this.UserID = UserID;
        this.UserNameSurname = UserNameSurname;
        this.UserAge = UserAge;
        this.UserGender = UserGender;
        this.UserDriverLicense = UserDriverLicense;
    }
}

const CategoryList = [];

function addCategory() {
    const carBrand = document.getElementById("carBrandChose").value;

    if (!carBrand) {
        alert("Car Brand Can Not Be Empty");
        return;
    }

    if (CategoryList.some((category) => category.carBrand == carBrand)) {
        alert("Car Brand Already Exists");
        return;
    }

    const car = new Category(carBrand);
    CategoryList.push(carBrand);
    document.getElementById("carBrandChose").value = "";
    document.getElementById("carBrandChose").focus;

    categoryUpdate();
}

function categoryUpdate() {

    //Select Category Update

    const selectCategory = document.getElementById("SelectCategory");

    selectCategory.innerHTML = `<option disabled value selected> -- Select Category --</option>`;

    CategoryList.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.CategoryName;
        option.innerText = category.CategoryName;

        selectCategory.add(option);
    });

    const CategoryProductList = document.getElementById("ProductList");
    CategoryProductList.innerHTML = "";
    CategoryList.forEach((category) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const thbtn = document.createElement("th");


        const DeleteCategoryButton = document.createElement("button");
        DeleteCategoryButton.innerText = "Delete Category";
        DeleteCategoryButton.className = "btn btn-danger";

        DeleteCategoryButton.addEventListener("click", () => {
            deleteCategory(category.CategoryName);
        });
        th.innerText = category.CategoryName;
        th.colSpan = 4;
        tr.appendChild(th);
        thbtn.appendChild(DeleteCategoryButton);
        tr.appendChild(thbtn);
        CategoryProductList.appendChild(tr);

        var number = 0;

        category.Products.forEach((product) => {
            number++;

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

            DeleteProductButtonTd.appendChild(DeleteProductButton);

            ProductTr.appendChild(NumberTd);
            ProductTr.appendChild(ProductNameTd);
            ProductTr.appendChild(ProductPriceTd);
            ProductTr.appendChild(ProductStockTd);
            ProductTr.appendChild(DeleteProductButtonTd);

            CategoryProductList.appendChild(ProductTr);
        })
    });

}

document.getElementById("addCategory").addEventListener("click", (e) => {
    e.preventDefault();
    addCategory();
});

document.getElementById("addCar").addEventListener("click", (e) => {
    e.preventDefault();
    addUser();
});

categoryUpdate();


function addUser() {
    const UserID = document.getElementById("userID").value.trim();
    const UserNameSurname = document.getElementById("userNameSurname").value.trim();
    const UserAge = document.getElementById("userAge").value.trim();
    const UserGender = document.getElementsByName("userGender").value.trim();
    const UserDriverLicense = document.getElementByName("UserDriverLicense").value.trim();
    

    if (UserID === "" || UserNameSurname === "" || UserAge <= 0 || UserGender == "" || UserDriverLicense == "") {
        alert("Boş Alan Bırakılamaz");
        return;
    }

    const category = CategoryList.find((category) => category.CategoryName === CategoryName);

    const user = new User(UserID, UserNameSurname, UserAge, UserGender, UserDriverLicense);

    category.addUser(user);
    categoryUpdate();

    UserID = document.getElementById("UserID").value = "";
    UserNameSurname = document.getElementById("UserNameSurname").value = "";
    UserAge = document.getElementById("UserAge").value = "";
    UserGender = document.getElementsByName("userGender").value = "";
    UserDriverLicense = document.getElementsByName("UserDriverLicense").value = "";
}

function deleteCategory(CategoryName) {
    CategoryList.splice(CategoryList.findIndex((category) => category.CategoryName === CategoryName), 1);
    categoryUpdate();
}

function deleteProduct(CategoryName, Product) {
    const category = CategoryList.find((category) => category.CategoryName === CategoryName);

    category.deleteProduct(Product);

    categoryUpdate();
}

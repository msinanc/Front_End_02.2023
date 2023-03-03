class Category{
    constructor(CategoryName){
        this.CategoryName = CategoryName;
        this.Products = [];
    }

    addProduct(Product){
        this.Products.push(Product);
    }

    deleteProduct(ProductName){
        this.Products = this.Products.filter((Name) => Name !== ProductName);
        //   this.Products = this.Products.splice(this.Products[/* index no */], 1);
    }

}

const CategoryList = [];

function addCategory(){
    const CategoryName  = document.getElementById("CategoryName").value;

    if(!CategoryName){
        alert("Category Name Cannot Be Empty!");
        return;
    }

    if(CategoryList.some((category) => category.CategoryName == CategoryName)){
        alert("Category Already Exists");
        return;
    }

    const category = new Category (CategoryName);
    CategoryList.push(category);
    document.getElementById("CategoryName").value = ""; //Kategori seçtikten sonra formu boşaltmak için
    document.getElementById("CategoryName").focus;      //İşlem bittikten sonra imleç orada kalsın diye.
    
    categoryUpdate();
}

function categoryUpdate(){
    //Updates the list when new categories are added

    const selectCategory = document.getElementById("SelectCategory");

    selectCategory.innerHTML = `<option disabled value="" selected> -- Select Category --</option>`

    CategoryList.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.CategoryName;
        option.innerText = category.CategoryName;

        selectCategory.add(option);
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
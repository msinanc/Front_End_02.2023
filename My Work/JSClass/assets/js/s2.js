class Category{
    constructor(CategoryName){
        this.CategoryName = CategoryName;
        this.Products = [];
    }

    addProduct(Product){
        this.Products.push(Product);
    }
}

class Product{
    constructor(Name, Price, Stock){
        this.Name = Name;
        this.Price = Price;
        this.Stock = Stock;
    }
}
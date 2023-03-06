// Define User class
class User {
    constructor(userID, userNameSurname, userAge, userGender, userLicense) {
        this.userID = userID;
        this.userNameSurname = userNameSurname;
        this.userAge = userAge;
        this.userGender = userGender;
        this.userLicense = userLicense;
        this.Users = [];
    }
}


// Define Car class
class Car {
    constructor(carID, carBrand, carColor, carPrice) {
        this.carID = carID;
        this.carBrand = carBrand;
        this.carColor = carColor;
        this.carPrice = carPrice;
        this.Cars = [];
    }
}

document.getElementById("addUser").addEventListener("click", (e) => {
    e.preventDefault();
    addUser();
});

document.getElementById("addCar").addEventListener("click", (e) => {
    e.preventDefault();
    addCar();
});
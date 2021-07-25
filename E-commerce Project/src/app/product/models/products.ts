import { Iproducts } from "./iproducts"

export class Products {

    private id:number
    private title:string
    private price:number
    private favorite:boolean
    private category:string

    get ID() {
        return this.id
    }

    get Title() {
        return this.title
    }

    get Price() {
        return this.price
    }

    set Price(price: number) {
        if (price < 0)
            throw new Error('value cannot be less than 0.');

        this.price = price
    }

    get Favorite() {
        return this.favorite
    }

    set Favorite(favorite) {
        this.favorite = favorite
    }

    get Category() {
        return this.category
    }

    toString() {
        return "ID: " + this.id + "Name: " + this.title + "Price: $" + this.price + "Favorite: " + this.favorite + "Department: " + this.category
    }


    constructor(id:number, title:string, price:number, favorite:boolean, category:string) {
        this.id = id
        this.title =title
        this.price= price
        this.favorite= favorite
        this.category= category
    }

    public phone = new Products(1, "Phone", 1000, false, "Electronics")
    public laptop = new Products(2, "Laptop", 2000, false, "Electronics")
    public playstation = new Products(3, "PlayStation", 1000, false, "Electronics")
    public milk = new Products(4, "Milk", 2, false, "Food")
    public cereal = new Products(5, "Cereal", 4, false, "Food")
    public eggs = new Products(6, "Eggs", 2, false, "Food")
    public shirt = new Products(7, "Shirt", 20, false, "Clothing")
    public shoes = new Products(8, "Shoes", 30, false, "Clothing")
    public DogFood = new Products(9, "Dog Food", 20, false, "Pets")
    public CatFood = new Products(10, "Cat Food", 20, false, "Pets")

    public inventory:Products[] = [this.phone, this.laptop, this.playstation, this.milk, this.cereal, this.eggs, this.shirt, this.shoes, this.DogFood, this.CatFood]
}

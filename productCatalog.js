class ProductCatalog{
    constructor(){
        this.list = []
    }
    addProduct(name, price){
        this.product = {}
        this.product.name = name
        this.product.price = price
        this.list.push(this.product)
    }
    searchByName(searchProduct){
        for (let i = 0; i < this.list.length; i++) {
            if (searchProduct === this.list[i].name) {
                console.log(this.list[i])
            } else {
                continue
            }
        }
    }
    filterByPrice(from, to){
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].price <= to) {
                console.log(this.list[i])
            } else {
                continue
            }
        }
    }
}

const catalog = new ProductCatalog()
catalog.addProduct('Laptop', 1000)
catalog.addProduct('Phone', 500)
catalog.addProduct('Laptop', 1500)
catalog.searchByName('Laptop')
catalog.filterByPrice(200, 1100)
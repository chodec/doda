class Order {
    constructor(){
        this.cart = []
    }
    addItem(name, cost, count){
        this.item = {}
        this.item.name = name
        this.item.cost = cost
        this.item.count = count
        this.cart.push(this.item)
    }
    totalCost(){
        this.sum = 0
        for (let i = 0; i < this.cart.length; i++) {
            this.sum = this.sum + this.cart[i].cost
        }
        console.log(this.sum)
        return this.sum
    }
    applyDiscount(discount){
        this.sum = this.totalCost()
        this.onePerc = this.sum / 100
        console.log(this.sum - (this.onePerc * discount))
    }
}

const order = new Order()
order.addItem('Laptop', 100, 1)
order.addItem('Mouse', 10, 3)
order.addItem('TV', 300, 1)
order.addItem('Mouse', 10, 3)
order.totalCost()
order.applyDiscount(10)

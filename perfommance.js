class Employee {
    constructor(name){
        this.name = name
        performance = []
    }
    addReview(value){
        performance.push(value)
        console.log(value + ' added.')
    }
    getAverageRating(){
        let sum = 0
        for (let i = 0; i < performance.length; i++) {
            sum += performance[i]
        }
        console.log(parseInt(sum / performance.length))
    }
}
``
const employee = new Employee('Jane Hoe')
employee.addReview(4)
employee.addReview(3)
employee.addReview(9)
employee.getAverageRating()

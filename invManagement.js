const inventory = {}
let index = 0

const addItem = (name, quantity, price) => {
    if (index === 0) {
        inventory[index] = [name, quantity, price]
        index++   
    } else {
        let editQuantity = Object.values(inventory)
        for (let i = 0; i < index; i++) {
            if (editQuantity[i][0] === name) {
                inventory[i] = [name,  parseInt(editQuantity[i][1]) + quantity, price]
                return
            }
        }
        inventory[index] = [name, quantity, price]
        index++
    }
}

const removeItem = (name) => {
    let removeObj = Object.values(inventory) 
    for (let i = 0; i < index; i++) {
        if (removeObj[i][0] === name) {
            delete inventory[i]
        }
    }
}

// addItem('Apple', 2, '1.2')
// addItem('Orange', 7, '2')
// addItem('Banana', 3, '4.20')
// addItem('Orange', 13 , '2')
// removeItem('Apple')


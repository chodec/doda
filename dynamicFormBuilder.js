const fields = [
    { name: 'username', defaultValue: '' },
    { name: 'password', defaultValue: '' },
    { name: 'email', defaultValue: '' }
]

const createForm = (fields) => {
    let form = {}
    let field = []
    let value = []
    for (let i = 0; i < fields.length; i++) {
        for (let x = 0; x < Object.entries(fields[i]).length; x++) {
            console.log(Object.entries(fields[i])[1][0])
            x === 0 ? field.push(Object.entries(fields[i])[x][1]) :
                value.push(Object.entries(fields[i])[x][1])
        }
    } 
    for (let i = 0; i < field.length; i++) {
        if (value[i] === '') {
            form[field[i]] = ''
        } else {
            form[field[i] = value[i]]
        }
    }
    console.log(form)
}

createForm(fields)
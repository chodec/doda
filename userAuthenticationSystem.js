let users = []

const register = (name, pass) => {
    let user = {name, pass}
    users.push(user)
}

const login = (name, pass) => {
    for (let i = 0; i < users.length; i++) {
        if(users[i].name === name){
            if (users[i].pass === pass) {
                console.log(`Vitej ${users[i].name}`)
                return
            }
        } else{
            console.log(`Uzivatel ${users[i].name} neexistuje nebo spatny heslo`) 
        }
    }
}

register('kokot', 'vyjebany')
register('kokotko', 'prijebany')
login('kokot', 'vyjebany')
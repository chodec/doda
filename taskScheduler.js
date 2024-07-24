class TaskScheduler {
    constructor(){
        this.tasks = []
    }
    addTask(){
        this.tasks.push('Task ' + (this.tasks.length))
    }
    removeTask(index){
        if(this.tasks.length > index){
            console.log(`${this.tasks[index]} removed.`)
            this.tasks.splice(index, 1)
        } else {
            console.log('Nemuzes odstranit co neexistuje')
        }
    }
    executeAll(){
        for (let i = 0; i < this.tasks.length; i++) {
            console.log(`${this.tasks[i]} executed.`)
        }
    }
}

const scheduler = new TaskScheduler()
scheduler.addTask()
scheduler.addTask()
scheduler.addTask()
scheduler.addTask()
scheduler.removeTask(3)
scheduler.executeAll()
class Portfolio {
    constructor(){
        this.assets = []
    }
    addAsset(name, count){
        this.asset = {}
        if (this.assets.length < 1) {
            this.asset.name = name
            this.asset.count = count
            this.assets.push(this.asset)
        } else {
            for (let i = 0; i < this.assets.length; i++) {
                if (this.assets[i].name === name) {
                    this.assets[i].count += count
                    return
                }
            }
            this.asset.name = name
            this.asset.count = count
            this.assets.push(this.asset)
        }
        console.log(this.assets)
    }
    removeAsset(name, count) {
        for (let i = 0; i < this.assets.length; i++) {
            if (this.assets[i].name === name) {
                this.assets[i].count < count ? this.assets[i].count -= this.assets[i].count :
                this.assets[i].count -= count
            } else {
                continue
            }
        }
    }
    getTotalValue(){
        this.sum = 0
        for (let i = 0; i < this.assets.length; i++) {
            this.sum += this.assets[i].count
        }
        console.log(this.sum)
    }
}

const portfolio = new Portfolio()
portfolio.addAsset('Stock', 1000)
portfolio.addAsset('Bond', 1200)
portfolio.addAsset('Stock', 3000)
portfolio.removeAsset('Stock', 500)
portfolio.getTotalValue()
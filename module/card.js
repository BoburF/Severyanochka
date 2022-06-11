const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const dir = path.join(__dirname, '..', 'data', 'product.json')

class Card{
    constructor(name, country, priceCard, priceReal, brend, pack, img, star, discount){
        this.name = name,
        this.country = country,
        this.priceCard = priceCard,
        this.priceReal = priceReal,
        this.brend = brend,
        this.pack = pack,
        this.img = img,
        this.star = star,
        this.discount = discount
    }

    static async getAllCards(){
        return new Promise((resolve, reject) => {
            fs.readFile(dir, 'utf-8', (err, content) => {
                if(err) return reject(err)
                else resolve(JSON.parse(content).products)
            })
        })
    }
}

module.exports = Card
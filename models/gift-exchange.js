const { NotFoundError, BadRequestError } = require("../utils/errors") 

class GiftExchange {
    static pairs(names) {
        if (names.length % 2 == 1) throw new BadRequestError("Length of names cannot be odd")
        let temp = [...names]
        let result = [] 
        while (temp.length) {
            let name1Index = Math.floor(Math.random() * temp.length)
            let name1 = temp[name1Index]
            temp.splice(name1Index, 1)
            let name2Index = Math.floor(Math.random() * temp.length)
            let name2 = temp[name2Index]
            temp.splice(name2Index, 1)
            result.push([name1, name2]) 
        }
        return result 
    }

    static traditional(names) {
        // if (names.length % 2 == 1) throw "Length of names cannot be odd" 
        let temp = [...names]
        let result = [] 
        temp.sort(function() { return 0.5 - Math.random();}); // shuffles the array
        let first = temp[0]
        let last = temp[temp.length-1]
        for (let i = 0; i < temp.length-1; i++){
            let name1 = temp[i]
            let name2 = temp[i+1]
            result.push(name1 + " is giving a gift to " + name2) 
        }
        result.push(last + " is giving a gift to " + first)
        return result 
    }

}

module.exports = GiftExchange
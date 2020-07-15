let mymodule = require('./mymodule.js')
let ext = process.argv[3]

mymodule(process.argv[2], ext, (err, list) => {
    if (err) {
        throw err
    }
    list.map(el => console.log(el))    
})
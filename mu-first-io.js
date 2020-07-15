fs=require('fs')

var data=fs.readFileSync(process.argv[2],'utf-8')
var arr=data.split('\n')
console.log(arr.length-1)
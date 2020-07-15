const process=require('process')
let sum=0
process.argv.forEach((val,index)=>{
if(val>0){
    sum=sum+Number(val)

}


})
console.log(sum)


fs=require('fs')
path=require('path')
folder=process.argv[2]
ext='.'+process.argv[3]


fs.readdir(folder,function(err,list){
    
    if(err){
        console.error(err)
    }
   
    list.map(el=>{
        if(ext==path.extname(el)){
               
        console.log(el)
    }})
})
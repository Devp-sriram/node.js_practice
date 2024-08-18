const { readFile,writeFile } = require('fs');
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    }
    const second = result;
    writeFile('./content/result-async.txt',`${first},\n${second}`,{flag : 'a'},(err,result)=>{
        if(err){
            return err
        }
    console.log('done with this task');

    });
    })
})
console.log('starting with next task');

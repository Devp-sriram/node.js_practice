const { readFile,writeFile} = require("fs").promises;

// const util =require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => {console.log(result);})
//   .catch((err) => console.log(err));

const start = async()=>{
    try{
        const first = await readFile("./content/first.txt","utf8");
        const second = await readFile("./content/second.txt","utf8");
        await writeFile('./content/result-mind-grenade.txt',`${first}\n${second}`,{flag:'a'})
        console.log(first,second)
    }catch(err){
        console.log(err)
    }
    
}
start();
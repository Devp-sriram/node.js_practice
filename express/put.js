const express = require('express');
let { people } = require('./data')
const app = express();

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false }))
// parse json 
app.use(express.json());


app.get('/api/people',(req,res)=>{
    res.status(200).json({succes:true,data:people})
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
       return res.status(400).json({succes:false,msg:`please provide name`})
    }
    res.status(201).json({succes: true, person:name})
})

app.post('/api/http/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({succes:false,msg:`please provide credential`});      
    }
    res.status(201).send({succes:true,data:[...people,{"name":name}]})
})

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const updateNameById = (people, id, name) => {
        const index = people.findIndex(item => item.id === Number(id));
        if(!index){
           return res.status(404).json({succes:false,msg:`name doesn't exist`})
        }
        if (index !== -1) {
            people[index].name = name;
        }
      };
    updateNameById(people,id,name)
    res.status(200).json({succes:true,data:people})

})

app.delete('/api/people/:id',(req,res)=>{

    const index = people.find(item => item.id === Number(req.params.id));
    if(!index){
        return res.status(404).json({succes:false,msg:`name doesn't exist`})
    }
    const newPeople = people.filter((person)=>person.id != req.params.id);

    res.status(200).json({succes:true,data:newPeople})
})

app.post('/login',(req,res)=>{
    const name = req.body.name;
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send(`please provide credential`)
})

app.listen(5000,()=>{console.log('server runnig on port 5000..')});

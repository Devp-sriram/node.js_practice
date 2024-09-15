let { people } = require('../data');

const getPeople =(req,res)=>{
        res.status(200).json({succes:true,data:people})
}

const addName = (req,res)=>{
    const {name} = req.body
    if(!name){
       return res.status(400).json({succes:false,msg:`please provide name`})
    }
    res.status(201).json({succes: true, person:name})
}

const addNameHTTP = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({succes:false,msg:`please provide credential`});      
    }
    res.status(201).send({succes:true,data:[...people,{"name":name}]})
}

const updateName = (req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const updateNameById = (people, id, name) => {
        const index = people.findIndex(item => item.id === Number(id));
        // console.log(index)
        if(index === -1){
           return res.status(404).json({succes:false,msg:`name doesn't exist`})
        }else{
            people[index].name = name;
            res.status(200).json({succes:true,data:people})
        }
      };
      updateNameById(people,id,name)
}

const deleteName = (req,res)=>{

    const index = people.find(item => item.id === Number(req.params.id));
    if(!index){
        return res.status(404).json({succes:false,msg:`name doesn't exist`})
    }
    const newPeople = people.filter((person)=>person.id != req.params.id);

    res.status(200).json({succes:true,data:newPeople})
}

module.exports = {getPeople,addName,addNameHTTP,updateName,deleteName};

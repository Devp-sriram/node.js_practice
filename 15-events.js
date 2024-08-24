const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name ,id)=>{
    console.log(`data recived ${name} and ${id}`)
});
customEmitter.on('response',()=>{
    console.log('recived some others')
});

customEmitter.emit('response',"john",34);


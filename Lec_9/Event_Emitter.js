const event = require('events'); //event-emitter is class
// console.log(event);

const eventobj = new event(); // Object crete
// console.log(eventobj);

eventobj.on('msg',()=>{
    console.log("Wlcome Back In Node.Js ...");
    
})
eventobj.emit('msg');


// Parameterlize :- 

eventobj.on('Order',(Flawor,Size)=>{
    console.log(`You Ordered Pizza Flawor is:- ${Flawor} & Size is:- ${Size}`);
    console.log("Your Pizaa Deliverd In 5 Min...");
    
});

eventobj.emit('Order','Cheeze Brust','Large')
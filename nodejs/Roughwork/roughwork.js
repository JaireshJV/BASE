import EventEmitter from "events";


const event = new EventEmitter() ;

function demo(){
    console.log('Itz working');
}

event.on('dem',demo)        ;
event.removeListener('dem',demo)

event.emit('dem')
event.emit('dem')

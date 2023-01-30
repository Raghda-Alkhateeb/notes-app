const chalk = require("chalk");
const notes = require("./notes.js");
const yargs=require("yargs")

yargs.command({
    command:"add",
    description:"Add Not",
    builder:{
        title:{
            description:"add note's title",
            demandOption:true,
            type:'string'
        },
       body:{
            description:"add note's body",
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:"remove",
    description:"Remove Not",
    builder:{
        title:{
            description:"remove note's title",
            demandOption:true,
            type:'string' 
        }
    },
    handler: function(argv){
        notes.removeNot(argv.title)
        
    }
})

yargs.command({
    command:"list",
    description:"List your nots",
    handler: function(){
        console.log(" listing out of nots....")
    }
})

yargs.command({
    command:"read",
    description:"Reading Nots",
    handler: function(){
        console.log("Reading nots ....")
    }
})
yargs.parse()
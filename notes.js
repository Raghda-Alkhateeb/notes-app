
const { default: chalk } = require('chalk')
const { Console } = require('console')
const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title,body){
    const notes=loadNots()
    const duplicateNot=notes.filter((notes)=>{
        return notes.title===title
    })
    if(duplicateNot.length==0){

        notes.push({
            title:title,
            body:body
        })
        
        saveNote(notes)
        console.log("New note added")
    }else{
        console.log("Title note taken")
    }
    
}
function saveNote(notes){
    const jsonData=JSON.stringify(notes)
     fs.writeFileSync('notes.json',jsonData)

}
function loadNots(){
    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJson=dataBuffer.toString()
        return JSON.parse(dataJson)
        

    }catch(e){
        return[]
    }
    
}

const removeNot = (title)=>{
 const notes = loadNots()
 const keepNotes = notes.filter((notes)=>{
     return notes.title !== title
})
    if(notes.length==keepNotes.length){
        console.log(chalk.bgRed.bold("No Not Found"))   
    }else{
        saveNote(keepNotes)
        console.log(chalk.bgGreen.bold("Removed successfully")) 
    }
    
}

module.exports ={
    getNotes: getNotes,
    addNote: addNote,
    removeNot:removeNot
}
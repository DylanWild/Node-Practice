const fs =require  ('fs')

const addNote = (myNotes)=>{
    const allNotes = loadNotes();
    allNotes.push({Reminder: myNotes})
    saveNotes(allNotes)
}
const saveNotes =(notes)=>{
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON)
}
const loadNotes = ()=>{
 try{
     const dataBuffer = fs.readFileSync('notes.json');
     return JSON.parse(dataBuffer)
 }
 catch (e){
     return[];
 }
}
const listNotes =()=>{
    const allNotes = loadNotes();

    allNotes.map((note)=>{
        console.log(note.Reminder)
    })
}
const removeNote = (deletedNote) =>{
    const allNotes = loadNotes();

    const notesToKeep = allNotes.filter((note)=>{
        return note.Reminder !== deletedNote
    } )

    saveNotes(notesToKeep);
}
module.exports = {addNote, loadNotes, saveNotes, listNotes, removeNote};

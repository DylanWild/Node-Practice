const {argv} = require('yargs');
const note = require('./notes');

// note.addNote("hello")

let command = argv._[0]

if(command == 'add'){
console.log("oh")
note.addNote(argv.note)
}
else if (command == 'remove'){
    console.log('no')
    note.removeNote(argv.note)
}
else if (command == 'read'){
    console.log('pig in the gaff')
    note.loadNotes(argv.note)
}
else if (command == 'list'){
    console.log('absolutly phat')
    note.listNotes()
}
else{
    console.log('oh no pigg in the gaff absoliutly phatt')
}


// console.log(process.argv)
// console.log(argv)
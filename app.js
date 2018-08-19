var fs = require('fs');
var path = 'D:\\Program Files (x86)\\Steam\\steamapps\\common\\Beat Saber\\CustomSongs\\Smooth Criminal\\';
var obj = JSON.parse(fs.readFileSync(path + 'Easy_old.json', 'utf8'));
var time = 2.136;
var totalSecTime = 4.053;

var notes = obj._notes;//.slice(4);

var oneSection = [{
    "_time": -0.5,
    "_lineIndex": 0 ,
    "_lineLayer": 0,
    "_type": 0,
    "_cutDirection": 2
},
{
    "_time": 1.36,
    "_lineIndex": 1,
    "_lineLayer": 0,
    "_type": 1,
    "_cutDirection": 1
},
{
    "_time": 2.36,
    "_lineIndex": 2,
    "_lineLayer": 0,
    "_type": 1,
    "_cutDirection": 1
},
{
    "_time": 3.36,
    "_lineIndex": 3,
    "_lineLayer": 0,
    "_type": 1,
    "_cutDirection": 1
}
// ,
// {
//     "_time": 3.63,
//     "_lineIndex": 2,
//     "_lineLayer": 0,
//     "_type": 1,
//     "_cutDirection": 2
// }
];
notes.splice(0, notes.length);
for (i = 0; i < 9; i++) {
    var sec = JSON.parse(JSON.stringify(oneSection));;
    var secTime = i == 0? time : time + (i * 4);
    for(n in sec)
    {
        sec[n]._time += secTime;
    }
    notes.push(...sec);
}

// var newNotes= [];
// for (i = 0; i 
//     < 200; i++) {
//     time = i % 2 ? time : time +=2;
//     var ind = i % 2 ? 0 : 1;
//     var newNote = Object.assign({}, notes[ind]);
//     newNote._cutDirection = ind;
//     newNote._time = time;
//     newNotes.push(newNote);
// }
//obj._notes = newNotes;
var newFile = JSON.stringify(obj);
console.log(newFile);



fs.writeFileSync(path + 'Easy.json', newFile, 'utf8');

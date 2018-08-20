var fs = require("fs");
var obj = JSON.parse(fs.readFileSync("Easy.json", "utf8"));
var time = 5;

var notes = obj._notes;

var oneSection = JSON.parse(fs.readFileSync("section.json", "utf8"));

notes.splice(0, notes.length);
for (i = 0; i < 50; i++) {
  var sec = JSON.parse(JSON.stringify(oneSection));
  var secTime = i == 0 ? time - 0.099999904632569 : notes[(i * 10) - 1]._time + 1.5;

  for (n in sec) {
    sec[n]._time += secTime;
  }
  notes.push(...sec);
}

var newFile = JSON.stringify(obj);
console.log(newFile);
fs.writeFileSync('Easy.json', newFile, 'utf8');

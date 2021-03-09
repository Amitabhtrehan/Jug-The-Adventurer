var express = require('express')
var app = express()

let thing = [];
let things = ['Jugnoo is the cutest dog in the world',
  'Jugnoo is very restful',
  'Jugnoo is very friendly',
  'Jugnoo plays the Piano',
  'Jugnoo has a friend named Scotty'];

app.get('/thing/list', function(req, resp){
 // resp.send(things);
 //resp.json(things);
 if(thing == []){
   resp.send(thing);
 }
 else
 resp.status(404).json("Sorry folks, don't have a list of Jugnoo things!");
})

app.get('/html', function(req, resp){
  resp.set('Content-Type','text/html');
  let htmltext = '<html> <body> <h1> All About Jugnoo aka Jug The Terrier </h1> </body> </html>'
  resp.send(htmltext);
 // resp.json(things);
 // resp.status(404).json(things);
})


app.listen(8090)
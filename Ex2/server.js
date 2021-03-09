var express = require('express');
var app = express();

let things = ['Jugnoo is the cutest dog in the world',
  'Jugnoo is very restful',
  'Jugnoo is very friendly',
  'Jugnoo plays the Piano',
  'Jugnoo has a friend named Scotty'];


app.get('/thing/list', function(req, resp){
  //resp.send(things);
   resp.json(things);
})

app.get('/html', function(req, resp){
  resp.set('Content-Type','text/html');
  let htmltext = '<html> <body> <h1> All About Jugnoo aka Jug The Terrier </h1> </body> </html>'
  resp.send(htmltext);
})


app.listen(8090)
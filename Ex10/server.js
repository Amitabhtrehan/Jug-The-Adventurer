var express = require('express')
var app = express()

let thing = [];
let things = ['Jugnoo is the cutest dog in the world',
  'Jugnoo is very restful',
  'Jugnoo is very friendly',
  'Jugnoo plays the Piano',
  'Jugnoo has a friend named Scotty'];

let toys = ['Piano, Scotty'];

app.use(express.static('client'));
app.use(express.static('body-parser'));
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies


app.get('/thing/list', function(req, resp){
 // resp.send(things);
 //resp.json(things);
 if(things == undefined || things.length == 0)
 {
  resp.status(404).json("Sorry folks, don't have a list of Jugnoo things!");
 }
 else{
   resp.json(things);
 }
})

app.post('/thing/add', function(req,resp){
  //console.log(req)
 console.log(req.body);
  resp.send("I am Posting!");
  const newthing= req.body.newthing;
  things.push(newthing);
});

app.get('/toy/list', function(req, resp){
  // resp.send(things);
  //resp.json(things);
  if(toys == undefined || toys.length == 0)
  {
   resp.status(404).json("Sorry folks, don't have a list of toys!");
  }
  else{
    resp.json(toys);
  }
 })

app.get('/html', function(req, resp){
  resp.set('Content-Type','text/html');
  let htmltext = '<html> <body> <h1> All About Jugnoo aka Jug The Terrier </h1> </body> </html>'
  resp.send(htmltext);
 // resp.json(things);
 // resp.status(404).json(things);
})


app.listen(8090)
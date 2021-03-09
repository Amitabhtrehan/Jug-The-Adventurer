var express = require('express')
var app = express()

let things = ['Jugnoo is the cutest dog in the world',
  'Jugnoo is very restful',
  'Jugnoo is very friendly',
  'Jugnoo plays the Piano',
  'Jugnoo has a friend named Scotty'];


app.get('/thing/list', function(req, resp){
  resp.send(things);
})



app.listen(8090)
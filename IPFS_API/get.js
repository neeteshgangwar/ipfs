// var request = require('request');
 
// var options = {
//     url: 'http://localhost:5001/api/v0/get?arg=QmaTyh5m8yozr47Dj5rq1fJk6L2ieMYZFVGDEMbHYe6ZmU'
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);


//////////////////////////////////////////////////////////////////////////////////////////////////

// var IPFS = require('ipfs');
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// app.use(bodyParser.json());
// const node = new IPFS()
// app.post('/get', function(req,res){

//     hash = req.body.hash ;
// node.once('ready', () => {
//   node.cat(hash, (err, data) => {
//     if (err) return console.error(err)

//     // convert Buffer back to string
//     console.log(data.toString())
//     org = data.toString();
//     res.json({
//         DATA : org
//     })
//   })
// })
// })
// app.listen(3006, ()=>{
//     console.log('Server is up on port 3006');
// })

///////////////////////////////////////////////////////////////////////////////////////////////////

var IPFS = require('ipfs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post('/get', function(req,res){
hash = req.body.Hash;
const node = new IPFS()
node.once('ready', () => {
const validCID = hash;
console.log(validCID);
node.get(validCID, function (err, files) {
  files.forEach((file) => {
    //console.log(file.path)
    //console.log(file.content.toString('utf8'))
    data = file.content.toString('utf8');
    res.json({
        Data : data 
    })
  })
})
})
})
app.listen(3006, ()=>{
    console.log("Server is up on port 3006");
})
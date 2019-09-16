const fs = require("fs");
const IPFS = require('ipfs')
var express = require('express')
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

//specify certificate path
app.post('/add', function(req, res){
    url = req.body.url;
    console.log(url);
fs.readFile(url, function(err, data) {
    if (err) throw err;
const node = new IPFS()
node.once('ready', () => {
  
    // convert your data to a Buffer and add it to IPFS
node.add(IPFS.Buffer.from(data), (err, files) => {
if (err) return console.error(err)
    console.log(files)
    // 'hash', known as CID, is a string uniquely addressing the data
    // and can be used to get it again. 'files' is an array because
    // 'add' supports multiple additions, but we only added one entry
   // console.log(files[0].hash)
    res.json({
        Data : files
    })
  })
})
})
})

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
app.listen(3005,()=>{
    console.log('Server is up on port 3005');
});

/////////////////////////////////////////////////////////////////////////////////////

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
//   // Encode to base64
//   var encodedImage = new Buffer.from(data, 'binary').toString('base64');
fs.readFile(url, function(err, data) {
    if (err) throw err;
const node = new IPFS()

//const data = /home/administrator/bmct.jpg;
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
app.listen(3005,()=>{
    console.log('Server is up on port 3005');
});
/////////////////////////////////////////////////////////////////////////////////////

const IPFS = require('ipfs')
const node = new IPFS()

node.once('ready', () => {
  node.cat('Qmcg2ASPPHuc7fKdj5KW2oDEq2xEpKwtYMSnHGijfpob12', (err, data) => {
    if (err) return console.error(err)

    var decode = data.toString();
    // convert Buffer back to string
    //console.log(data.toString())

     var decodedImage = new Buffer.from(decode, 'base64').toString('binary');
     console.log(decodedImage);
  })
})

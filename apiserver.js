var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var express = require('express');
var app = express();
var cors = require('cors');
var Web3 = require('web3');
var web3 = new Web3();


// var TS = require('/AbiManager.js');
// var ts =  new TS();

app.use(cors());  
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


var cont=;
app.post('/transferEther', function (req, res){
   try{
    var address_to = res.body.address_to;
    var address_from = res.body.address_from;
    var amountTransfer = res.body.amountTransfer;
    cont.transfer(address_to,address_from,amountTransfer,{from:web3.eth.accounts[0],gas:'0x77E2'});
   }catch(error){
    res.send("An Error occurred \n"+error);
  }
});


var server = app.listen(2323, function(){
 	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
	
});



// const fs = require('fs');
// const solc = require('solc');
// const Web3 = require('web3');

// Connect to local Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

// Compile the source code
// const input = fs.readFileSync('bank.sol');
// const output = solc.compile(input.toString(), 1);
// const bytecode = output.contracts['Token'].bytecode;
// const abi = JSON.parse(output.contracts['Token'].interface);


// Contract object
// const contract = web3.eth.contract(abi);

// setup the web3 object and the Ethereum provider
// also support MetaMask if it's available

web3.eth.getAccounts(function(err, accounts) { if (!err && accounts.length > 0) selectedAccount = accounts[0]; });





const abiArray = web3.eth.contract([{
        "constant": false,
        "inputs": [{ "name": "withdrawAmount", "type": "uint256" }],
        "name": "withDraw",
        "outputs": [{ "name": "amount", "type": "uint256" }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{ "name": "depositeAmount", "type": "uint256" }],
        "name": "deposit",
        "outputs": [{ "name": "totamount", "type": "uint256" }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{ "name": "address_to", "type": "address" },
            { "name": "address_from", "type": "address" },
            { "name": "amountTransfer", "type": "uint256" }
        ],
        "name": "transfer",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{ "name": "address_user", "type": "address" }],
        "name": "getBalance",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "type": "function"
    }, { "inputs": [], "payable": false, "type": "constructor" }
]);


var contractInstance = abiArray.at('0xd9107d1f3c52bb440256a5f3ad9d6c2c3f38e1ee'); // Instantiate from an existing address:


var contract_Bank = contract.new({
    from: web3.eth.accounts[0],
    data: '0x6060604052341561000f57600080fd5b5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061271060026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b6105ca806100ca6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314174f331461005f578063b6b55f2514610096578063beabacc8146100cd578063f8b2cb4f14610146575b600080fd5b341561006a57600080fd5b6100806004808035906020019091905050610193565b6040518082815260200191505060405180910390f35b34156100a157600080fd5b6100b7600480803590602001909190505061033c565b6040518082815260200191505060405180910390f35b34156100d857600080fd5b61012c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610417565b604051808215151515815260200191505060405180910390f35b341561015157600080fd5b61017d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610554565b6040518082815260200191505060405180910390f35b60003373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156103365760026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548110151561025e5760009050610337565b8160026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555060026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610337565b5b919050565b60008160026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555060026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b919050565b600081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156104685750600082115b156105485781600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506001905061054d565b600090505b9392505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b9190505600a165627a7a7230582046ac16eb587910f3f46cb3cbeb2a9d8cb9bfe6f669d7b9f8214ceb5ee183dc4f0029',
    gas: '4300000'
0}, function(e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
        console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
});

//jq function for getbalance 
$('#getbal').click(function(event) {
    event.preventDefault(); 
    let address = $('#getBalId').val();
    getBalance_(address);   
    console.log(contract_bank.getBalance());
});

//Jq function for deposit
$('#depositButton').click(function(event) {
    event.preventDefault(); 
    let amount = $('#depositId').val();
    deposit_(amount);
});

//jq function for transfer
$('#transferButton').click(function(event) {
    event.preventDefault();
    let add_to = $('#address_to').val();
    let add_from = $('#address_from').val();
    let am_transfer =  $('#amountTransfer').val(); 

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:4444/transferEther",
        // header: {... Ask what to put },
        data: { "address_to": add_to,
                "address_from":address_from,
                "amountTransfer":am_transfer
        }
    }).done(function(data){
        console.log(data);
    })
    console.log(contract_bank.getBalance(parameters, {from:"0x"+add_to, "0x"+add_from, am_transfer}));
    // transfer_(add_to, add_from, am_transfer);
});

//jq function for withdraw 
$('#withdrawButton').click(function(event) {
    event.preventDefault(); 
    let amount =  $('#withdrawAmount').val(); 
    deposit_(amount)
});


function getBalance_(address) {
    console.log(contractInstance.getBalance(contract_Bank));
}

function withDrawl_(amount) {
    console.log(contractInstance.withDraw(amount));
}

function transfer_(to, from, amount) {
    console.log(contractInstance.deposit(to, from, amount));
}

function deposit_(amount) {
    console.log(contractInstance.deposit(amount));
}
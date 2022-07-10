var express = require('express');
var app = express();
//var cors = require('cors');

//JSON file for deployed contract and network information
const mainContractJSON = require('https://github.com/AarishKhanna/voting-online/blob/main/src/build/contracts/MainContract.json')
const electionJSON = require('https://github.com/AarishKhanna/voting-online/blob/main/src/build/contracts/Election.json')

require("dotenv").config();

app.use(express.static("./"));
//app.use(cors());

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

//Sending MainContract JSON file for its interaction using Truffle
app.get('/src/', (req, res) => {
    console.log(mainContractJSON.json);
    res.send(mainContractJSON);
    res.json(mainContractJSON);
});

//Sending ABI object directly for Election contract, since only ABI will be used
app.get('/src/', (req, res) => {
    res.send(electionJSON.abi);
    res.json(electionJSON.abi);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started at 3000');
});

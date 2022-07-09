var express = require('express');
var app = express();

//JSON file for deployed contract and network information
const mainContractJSON = require('/MainContract.json')
const electionJSON = require('/Election.json')

require("dotenv").config();

app.use(express.static("./"));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

//Sending MainContract JSON file for its interaction using Truffle
app.get('/mainContractJSON', (req, res) => {
    console.log(mainContractJSON.json);
    res.json(mainContractJSON.json);
});

//Sending ABI object directly for Election contract, since only ABI will be used
app.get('/electionJSON', (req, res) => {
    res.json(electionJSON.abi)
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started at 3000');
});

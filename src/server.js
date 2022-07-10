var express = require('express');
var app = express();
//var cors = require('cors');

//JSON file for deployed contract and network information
const mainContractJSON = require('https://api.npoint.io/80ee4293f00fa2981005')
const electionJSON = require('https://api.npoint.io/be3da449ab6257da7f4e')

require("dotenv").config();

app.use(express.static("./"));
//app.use(cors());

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

//Sending MainContract JSON file for its interaction using Truffle
app.get('/mainContractJSON', (req, res) => {
    console.log(mainContractJSON.json);
    res.send(mainContractJSON);
});

//Sending ABI object directly for Election contract, since only ABI will be used
app.get('/electionJSON', (req, res) => {
    res.send(electionJSON.abi)
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started at 3000');
});

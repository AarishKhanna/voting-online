var express = require('express');
var app = express();
//const router = express.Router();
//var cors = require('cors');

//JSON file for deployed contract and network information
//const mainContractJSON = require('./build/contracts/MainContract.json')
//const electionJSON = require('./build/contracts/Election.json')

require("dotenv").config();

//app.use(express.static("./"));
//app.use(cors());
const test = require("./test");

app.use(express.json({ extended: false }));

app.use("/test", test);

/*router.get('/', (req, res) => {
    res.sendFile('index.html');
});

//Sending MainContract JSON file for its interaction using Truffle
router.get('/mainContractJSON', (req, res) => {
    //console.log(mainContractJSON.json);
    res.send(mainContractJSON);
   // res.json(mainContractJSON);
});

//Sending ABI object directly for Election contract, since only ABI will be used
router.get('/electionJSON', (req, res) => {
    res.send(electionJSON.abi);
  //  res.json(electionJSON.abi);
});
module.exports = router;*/

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started at 3000');
});

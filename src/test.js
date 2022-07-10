const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get('/', (req, res) => {
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
module.exports = router;

const express = require('express');

const router = express.Router();
const {getPeople,addName,addNameHTTP,updateName,deleteName} = require('../controllers/people')

router.get('/',getPeople)
router.post('/',addName)
router.post('/http',addNameHTTP)
router.put('/:id',updateName)
router.delete('/:id',deleteName)

module.exports = router;
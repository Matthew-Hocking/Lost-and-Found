const express = require('express')

const db = require('../db/lostfound')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAllLost().then(lostPets => {
        return res.json(lostPets)
    })
})

// WIP
router.post('/', (req, res) => {
    // db functions required
    // db.addLostPet().then(lostPets => {
    //     return res.json(lostPets)
    // })
})

module.exports = router
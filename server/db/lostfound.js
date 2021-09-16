const connection = require('./connection')

//
//Lost CRUD + ID single
//

function getAllLost (db = connection){
    return db('lost')
     .select()
}

function getLostById (lostId, db = connection){
    return db('lost')
        .where('lost.id', lostId)
        .select()
        .first()
}

function addLost (lostPet, db = connection){
    return db('lost')
        .insert(lostPet)
}

function removeLost (lostId, db = connection){
    return db('lost')
        .where('lost.id', lostId)
        .delete()
}

function updateLost (lostId, lostPet, db = connection){
    return db('lost')
        .where('lost.id', lostId)
        .update(lostPet)
}

//
//Found CRUD + ID single
//

function getAllFound (db = connection){
    return db('found')
     .select()
}

function getFoundById (foundId, db = connection){
    return db('found')
        .where('found.id', foundId)
        .select()
        .first()
}

function addFound (foundPet, db = connection){
    return db('found')
        .insert(foundPet)
}

function removeFound (foundId, db = connection){
    return db('found')
        .where('found.id', foundId)
        .delete()
}

function updateFound (foundId, foundPet, db = connection){
    return db('found')
        .where('found.id', foundId)
        .update(foundPet)
}

module.exports = {
    getAllLost,
    getLostById,
    addLost,
    removeLost,
    updateLost,
    getAllFound,
    getFoundById,
    addFound,
    removeFound,
    updateFound
}